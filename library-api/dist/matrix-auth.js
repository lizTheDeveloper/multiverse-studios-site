"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const crypto_1 = __importDefault(require("crypto"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const HOMESERVER = process.env.MATRIX_HOMESERVER ?? 'https://matrix.multiversestudios.xyz';
const COOKIE_NAME = 'mx_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
// Encryption key for at-rest token storage. Load from env for persistence
// across restarts; generate fresh on first boot if not set.
const SESSION_KEY = process.env.SESSION_ENCRYPTION_KEY
    ? Buffer.from(process.env.SESSION_ENCRYPTION_KEY, 'hex')
    : crypto_1.default.randomBytes(32);
if (!process.env.SESSION_ENCRYPTION_KEY) {
    console.warn('[matrix-auth] SESSION_ENCRYPTION_KEY not set — generated ephemeral key. ' +
        'All sessions will be invalidated on restart. Set this env var for persistence.');
}
// ---------------------------------------------------------------------------
// Crypto helpers — encrypt/decrypt arbitrary JSON payloads
// ---------------------------------------------------------------------------
/**
 * Encrypts a JSON-serialisable value with AES-256-GCM and returns a compact
 * URL-safe base64 string: <iv_b64>.<ciphertext_b64>.<authTag_b64>
 */
function encryptJSON(value) {
    const iv = crypto_1.default.randomBytes(12);
    const cipher = crypto_1.default.createCipheriv('aes-256-gcm', SESSION_KEY, iv);
    const plain = Buffer.from(JSON.stringify(value), 'utf8');
    const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
    const authTag = cipher.getAuthTag();
    return [iv, ciphertext, authTag].map(b => b.toString('base64url')).join('.');
}
/**
 * Decrypts a value produced by encryptJSON. Returns null if decryption fails
 * (tampered, wrong key, malformed input).
 */
function decryptJSON(encoded) {
    try {
        const parts = encoded.split('.');
        if (parts.length !== 3)
            return null;
        const [iv, ciphertext, authTag] = parts.map(p => Buffer.from(p, 'base64url'));
        const decipher = crypto_1.default.createDecipheriv('aes-256-gcm', SESSION_KEY, iv);
        decipher.setAuthTag(authTag);
        const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
        return JSON.parse(plain.toString('utf8'));
    }
    catch {
        return null;
    }
}
// ---------------------------------------------------------------------------
// Cookie helpers
// ---------------------------------------------------------------------------
const COOKIE_OPTS = {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    domain: '.multiversestudios.xyz',
    path: '/',
    maxAge: SESSION_TTL_MS,
};
function setCookie(res, sessionId) {
    res.cookie(COOKIE_NAME, sessionId, COOKIE_OPTS);
}
function clearCookie(res) {
    res.clearCookie(COOKIE_NAME, { ...COOKIE_OPTS, maxAge: undefined });
}
// ---------------------------------------------------------------------------
// Session resolution — self-contained encrypted cookie; no server-side store
// ---------------------------------------------------------------------------
function resolveSession(req) {
    const raw = req.cookies?.[COOKIE_NAME];
    if (!raw)
        return null;
    const data = decryptJSON(raw);
    if (!data || data.expiresAt < Date.now())
        return null;
    return data;
}
function resolveToken(req) {
    return resolveSession(req)?.accessToken ?? null;
}
// ---------------------------------------------------------------------------
// Matrix proxy helper
// ---------------------------------------------------------------------------
async function matrixRequest(path, method, token, body) {
    const headers = { 'Content-Type': 'application/json' };
    if (token)
        headers['Authorization'] = `Bearer ${token}`;
    const res = await fetch(`${HOMESERVER}${path}`, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    return { status: res.status, data };
}
// ---------------------------------------------------------------------------
// Input validation
// ---------------------------------------------------------------------------
// Matrix localpart: lowercase letters, digits, dot, hyphen, underscore
const USERNAME_RE = /^[a-z0-9._-]{1,255}$/;
function sanitizeUsername(raw) {
    if (typeof raw !== 'string')
        return null;
    const s = raw.startsWith('@') ? raw.split(':')[0].substring(1) : raw;
    const lower = s.toLowerCase();
    return USERNAME_RE.test(lower) ? lower : null;
}
// ---------------------------------------------------------------------------
// Session creation helper (shared by login + register)
// ---------------------------------------------------------------------------
/**
 * Encrypts session data into a compact cookie value. No server-side store —
 * the cookie IS the session, verified by the encryption key on each request.
 */
function createSession(accessToken, userId, deviceId) {
    const payload = {
        accessToken,
        userId,
        deviceId,
        expiresAt: Date.now() + SESSION_TTL_MS,
    };
    return encryptJSON(payload);
}
// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
exports.router = (0, express_1.Router)();
// Stricter rate limit for auth endpoints (login/register).
const authRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please wait a moment and try again.' },
});
exports.router.use(authRateLimit);
// POST /auth/matrix/login
exports.router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const localpart = sanitizeUsername(username);
    if (!localpart || typeof password !== 'string' || !password) {
        res.status(400).json({ error: 'username and password are required' });
        return;
    }
    const { status, data } = await matrixRequest('/_matrix/client/v3/login', 'POST', null, {
        type: 'm.login.password',
        identifier: { type: 'm.id.user', user: localpart },
        password,
    });
    const d = data;
    if (status !== 200) {
        res.status(status).json({ error: d.error ?? 'Login failed' });
        return;
    }
    const sessionId = createSession(d.access_token, d.user_id, d.device_id ?? '');
    setCookie(res, sessionId);
    res.json({ user_id: d.user_id, device_id: d.device_id });
});
// POST /auth/matrix/register
exports.router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const localpart = sanitizeUsername(username);
    if (!localpart) {
        res.status(400).json({ error: 'Invalid username' });
        return;
    }
    if (typeof password !== 'string' || password.length < 8) {
        res.status(400).json({ error: 'Password must be at least 8 characters' });
        return;
    }
    // Stage 1: kick off UIA flow
    const r1 = await matrixRequest('/_matrix/client/v3/register', 'POST', null, {
        username: localpart,
        password,
    });
    const j1 = r1.data;
    let accessToken;
    let userId;
    let deviceId;
    if (r1.status === 200) {
        // Completed immediately (no UIA required)
        accessToken = j1.access_token;
        userId = j1.user_id;
        deviceId = j1.device_id ?? '';
    }
    else if (r1.status === 401 && j1.session) {
        // Stage 2: complete dummy stage
        const r2 = await matrixRequest('/_matrix/client/v3/register', 'POST', null, {
            username: localpart,
            password,
            auth: { type: 'm.login.dummy', session: j1.session },
        });
        const j2 = r2.data;
        if (r2.status !== 200) {
            res.status(r2.status).json({ error: j2.error ?? 'Registration failed' });
            return;
        }
        accessToken = j2.access_token;
        userId = j2.user_id;
        deviceId = j2.device_id ?? '';
    }
    else {
        res.status(r1.status).json({ error: j1.error ?? 'Registration failed' });
        return;
    }
    const sessionId = createSession(accessToken, userId, deviceId);
    setCookie(res, sessionId);
    res.json({ user_id: userId, device_id: deviceId });
});
// GET /auth/matrix/whoami
exports.router.get('/whoami', async (req, res) => {
    const token = resolveToken(req);
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    const { status, data } = await matrixRequest('/_matrix/client/v3/account/whoami', 'GET', token);
    res.status(status).json(data);
});
// POST /auth/matrix/logout
exports.router.post('/logout', async (req, res) => {
    const token = resolveToken(req);
    clearCookie(res);
    if (token) {
        await matrixRequest('/_matrix/client/v3/logout', 'POST', token, {}).catch(() => { });
    }
    res.json({ success: true });
});
// GET /auth/matrix/joined-rooms
exports.router.get('/joined-rooms', async (req, res) => {
    const token = resolveToken(req);
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    const { status, data } = await matrixRequest('/_matrix/client/v3/joined_rooms', 'GET', token);
    res.status(status).json(data);
});
// POST /auth/matrix/openid-token
exports.router.post('/openid-token', async (req, res) => {
    const s = resolveSession(req);
    const token = s ? resolveToken(req) : null;
    if (!token || !s) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    const userId = encodeURIComponent(s.userId);
    const { status, data } = await matrixRequest(`/_matrix/client/v3/user/${userId}/openid/request_token`, 'POST', token, {});
    res.status(status).json(data);
});
