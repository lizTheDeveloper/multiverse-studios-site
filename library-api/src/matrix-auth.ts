import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const HOMESERVER = process.env.MATRIX_HOMESERVER ?? 'https://matrix.multiversestudios.xyz';
const COOKIE_NAME = 'mx_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

// Encryption key for at-rest token storage. Load from env for persistence
// across restarts; generate fresh on first boot if not set.
const SESSION_KEY: Buffer = process.env.SESSION_ENCRYPTION_KEY
  ? Buffer.from(process.env.SESSION_ENCRYPTION_KEY, 'hex')
  : crypto.randomBytes(32);

if (!process.env.SESSION_ENCRYPTION_KEY) {
  console.warn(
    '[matrix-auth] SESSION_ENCRYPTION_KEY not set — generated ephemeral key. ' +
    'All sessions will be invalidated on restart. Set this env var for persistence.',
  );
}

// ---------------------------------------------------------------------------
// Session data shape (stored encrypted inside the cookie itself)
// ---------------------------------------------------------------------------

interface SessionData {
  accessToken: string;
  userId: string;
  deviceId: string;
  expiresAt: number;
}

// ---------------------------------------------------------------------------
// Crypto helpers — encrypt/decrypt arbitrary JSON payloads
// ---------------------------------------------------------------------------

/**
 * Encrypts a JSON-serialisable value with AES-256-GCM and returns a compact
 * URL-safe base64 string: <iv_b64>.<ciphertext_b64>.<authTag_b64>
 */
function encryptJSON(value: unknown): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', SESSION_KEY, iv);
  const plain = Buffer.from(JSON.stringify(value), 'utf8');
  const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return [iv, ciphertext, authTag].map(b => b.toString('base64url')).join('.');
}

/**
 * Decrypts a value produced by encryptJSON. Returns null if decryption fails
 * (tampered, wrong key, malformed input).
 */
function decryptJSON<T>(encoded: string): T | null {
  try {
    const parts = encoded.split('.');
    if (parts.length !== 3) return null;
    const [iv, ciphertext, authTag] = parts.map(p => Buffer.from(p, 'base64url'));
    const decipher = crypto.createDecipheriv('aes-256-gcm', SESSION_KEY, iv);
    decipher.setAuthTag(authTag);
    const plain = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return JSON.parse(plain.toString('utf8')) as T;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Cookie helpers
// ---------------------------------------------------------------------------

const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: 'lax' as const,
  domain: '.multiversestudios.xyz',
  path: '/',
  maxAge: SESSION_TTL_MS,
};

function setCookie(res: Response, sessionId: string): void {
  res.cookie(COOKIE_NAME, sessionId, COOKIE_OPTS);
}

function clearCookie(res: Response): void {
  res.clearCookie(COOKIE_NAME, { ...COOKIE_OPTS, maxAge: undefined });
}

// ---------------------------------------------------------------------------
// Session resolution — self-contained encrypted cookie; no server-side store
// ---------------------------------------------------------------------------

function resolveSession(req: Request): SessionData | null {
  const raw = (req.cookies as Record<string, string>)?.[COOKIE_NAME];
  if (!raw) return null;
  const data = decryptJSON<SessionData>(raw);
  if (!data || data.expiresAt < Date.now()) return null;
  return data;
}

function resolveToken(req: Request): string | null {
  return resolveSession(req)?.accessToken ?? null;
}

// ---------------------------------------------------------------------------
// Matrix proxy helper
// ---------------------------------------------------------------------------

async function matrixRequest(
  path: string,
  method: string,
  token: string | null,
  body?: object,
): Promise<{ status: number; data: unknown }> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${HOMESERVER}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data: unknown = await res.json();
  return { status: res.status, data };
}

// ---------------------------------------------------------------------------
// Input validation
// ---------------------------------------------------------------------------

// Matrix localpart: lowercase letters, digits, dot, hyphen, underscore
const USERNAME_RE = /^[a-z0-9._-]{1,255}$/;

function sanitizeUsername(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
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
function createSession(accessToken: string, userId: string, deviceId: string): string {
  const payload: SessionData = {
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

export const router = Router();

// Stricter rate limit for auth endpoints (login/register).
const authRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a moment and try again.' },
});

router.use(authRateLimit);

// POST /auth/matrix/login
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body as { username?: unknown; password?: unknown };

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

  const d = data as Record<string, unknown>;
  if (status !== 200) {
    res.status(status).json({ error: d.error ?? 'Login failed' });
    return;
  }

  const sessionId = createSession(d.access_token as string, d.user_id as string, (d.device_id as string) ?? '');
  setCookie(res, sessionId);
  res.json({ user_id: d.user_id, device_id: d.device_id });
});

// POST /auth/matrix/register
router.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body as { username?: unknown; password?: unknown };

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
  const j1 = r1.data as Record<string, unknown>;

  let accessToken: string;
  let userId: string;
  let deviceId: string;

  if (r1.status === 200) {
    // Completed immediately (no UIA required)
    accessToken = j1.access_token as string;
    userId = j1.user_id as string;
    deviceId = (j1.device_id as string) ?? '';
  } else if (r1.status === 401 && j1.session) {
    // Stage 2: complete dummy stage
    const r2 = await matrixRequest('/_matrix/client/v3/register', 'POST', null, {
      username: localpart,
      password,
      auth: { type: 'm.login.dummy', session: j1.session },
    });
    const j2 = r2.data as Record<string, unknown>;
    if (r2.status !== 200) {
      res.status(r2.status).json({ error: j2.error ?? 'Registration failed' });
      return;
    }
    accessToken = j2.access_token as string;
    userId = j2.user_id as string;
    deviceId = (j2.device_id as string) ?? '';
  } else {
    res.status(r1.status).json({ error: j1.error ?? 'Registration failed' });
    return;
  }

  const sessionId = createSession(accessToken, userId, deviceId);
  setCookie(res, sessionId);
  res.json({ user_id: userId, device_id: deviceId });
});

// GET /auth/matrix/whoami
router.get('/whoami', async (req: Request, res: Response) => {
  const token = resolveToken(req);
  if (!token) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }

  const { status, data } = await matrixRequest('/_matrix/client/v3/account/whoami', 'GET', token);
  res.status(status).json(data);
});

// POST /auth/matrix/logout
router.post('/logout', async (req: Request, res: Response) => {
  const token = resolveToken(req);

  clearCookie(res);

  if (token) {
    await matrixRequest('/_matrix/client/v3/logout', 'POST', token, {}).catch(() => {/* best-effort */});
  }

  res.json({ success: true });
});

// GET /auth/matrix/joined-rooms
router.get('/joined-rooms', async (req: Request, res: Response) => {
  const token = resolveToken(req);
  if (!token) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }

  const { status, data } = await matrixRequest('/_matrix/client/v3/joined_rooms', 'GET', token);
  res.status(status).json(data);
});

// POST /auth/matrix/openid-token
router.post('/openid-token', async (req: Request, res: Response) => {
  const s = resolveSession(req);
  const token = s ? resolveToken(req) : null;
  if (!token || !s) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }

  const userId = encodeURIComponent(s.userId);
  const { status, data } = await matrixRequest(
    `/_matrix/client/v3/user/${userId}/openid/request_token`,
    'POST',
    token,
    {},
  );
  res.status(status).json(data);
});
