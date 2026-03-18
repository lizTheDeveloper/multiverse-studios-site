
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { lookupPurchasesByEmail } from './stripe.js';
import { router as matrixAuthRouter } from './matrix-auth.js';

// ---------------------------------------------------------------------------
// Startup validation — fail loudly rather than serve broken responses.
// ---------------------------------------------------------------------------

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('FATAL: STRIPE_SECRET_KEY is not set. Exiting.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PORT = parseInt(process.env.PORT ?? '4000', 10);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? 'https://multiversestudios.xyz';

// Regex matching any https subdomain (or apex) of multiversestudios.xyz, plus localhost.
const MULTIVERSESTUDIOS_ORIGIN_RE =
  /^https:\/\/([a-z0-9-]+\.)?multiversestudios\.xyz(:\d+)?$|^https?:\/\/localhost(:\d+)?$/;

// Characters that would break Stripe's search query syntax.
const STRIPE_INJECTION_RE = /['"\\]/g;

// Reasonably strict email pattern — not RFC 5321 exhaustive, but enough to
// reject obvious garbage before hitting Stripe.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

const app = express();
app.set('trust proxy', 1); // Required for rate-limiter behind Traefik/nginx.
app.use(cookieParser());

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

// CORS for /library routes (existing behaviour).
const libraryCors = cors({
  origin: (origin, callback) => {
    if (!origin || origin === ALLOWED_ORIGIN || /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin '${origin}' not allowed`));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

// CORS for /auth/matrix routes — credentials required, any multiversestudios.xyz subdomain allowed.
const authCors = cors({
  origin: (origin, callback) => {
    if (!origin || MULTIVERSESTUDIOS_ORIGIN_RE.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin '${origin}' not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

app.use(express.json({ limit: '16kb' }));

// Auth routes use their own CORS (credentials + broader origin allowlist).
app.use('/auth/matrix', authCors, matrixAuthRouter);

app.use(libraryCors);

app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please wait a moment and try again.' },
  }),
);

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.post('/library/lookup', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body as { email?: unknown };

    if (typeof email !== 'string' || !email.trim()) {
      res.status(400).json({ error: 'email is required' });
      return;
    }

    const sanitized = email.trim().replace(STRIPE_INJECTION_RE, '').toLowerCase();

    if (!EMAIL_RE.test(sanitized)) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    const purchases = await lookupPurchasesByEmail(sanitized);
    res.json({ purchases });
  } catch (err) {
    next(err);
  }
});

// ---------------------------------------------------------------------------
// Error handler
// ---------------------------------------------------------------------------

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  // Log the full error server-side but return a generic message to the client.
  console.error(err);
  res.status(500).json({ error: 'An internal error occurred. Please try again.' });
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`library-api listening on port ${PORT}`);
  console.log(`CORS allowed origin: ${ALLOWED_ORIGIN}`);
});
