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
// Session store (in-memory; sufficient at current scale)
// ---------------------------------------------------------------------------

interface SessionEntry {
  encryptedToken: string;
  iv: string;
  authTag: string;
  userId: string;
  deviceId: string;
  expiresAt: number;
}

const sessions = new Map<string, SessionEntry>();

// Prune expired sessions once per hour.
setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (s.expiresAt < now) sessions.delete(id);
  }
}, 60 * 60 * 1000).unref();

// ---------------------------------------------------------------------------
// Crypto helpers
// ---------------------------------------------------------------------------

function encrypt(token: string): { encrypted: string; iv: string; authTag: string } {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', SESSION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(token, 'utf8'), cipher.final()]);
  return {
    encrypted: encrypted.toString('hex'),
    iv: iv.toString('hex'),
    authTag: cipher.getAuthTag().toString('hex'),
  };
}

function decrypt(encrypted: string, iv: string, authTag: string): string {
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    SESSION_KEY,
    Buffer.from(iv, 'hex'),
  );
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  return Buffer.concat([
    decipher.update(Buffer.from(encrypted, 'hex')),
    decipher.final(),
  ]).toString('utf8');
}

// ---------------------------------------------------------------------------
// Cookie helpers
// ---------------------------------------------------------------------------

const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,
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
// Session resolution
// ---------------------------------------------------------------------------

function resolveSession(req: Request): SessionEntry | null {
  const sessionId = (req.cookies as Record<string, string>)?.[COOKIE_NAME];
  if (!sessionId) return null;
  const s = sessions.get(sessionId);
  if (!s || s.expiresAt < Date.now()) {
    if (s) sessions.delete(sessionId);
    return null;
  }
  return s;
}

function resolveToken(req: Request): string | null {
  const s = resolveSession(req);
  if (!s) return null;
  try {
    return decrypt(s.encryptedToken, s.iv, s.authTag);
  } catch {
    return null;
  }
}

function getSessionId(req: Request): string | undefined {
  return (req.cookies as Record<string, string>)?.[COOKIE_NAME];
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

function createSession(accessToken: string, userId: string, deviceId: string): string {
  const { encrypted, iv, authTag } = encrypt(accessToken);
  const sessionId = crypto.randomUUID();
  sessions.set(sessionId, {
    encryptedToken: encrypted,
    iv,
    authTag,
    userId,
    deviceId,
    expiresAt: Date.now() + SESSION_TTL_MS,
  });
  return sessionId;
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
  const sessionId = getSessionId(req);
  const token = resolveToken(req);

  if (sessionId) sessions.delete(sessionId);
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
