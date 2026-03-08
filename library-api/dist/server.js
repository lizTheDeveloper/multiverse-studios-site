"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const stripe_js_1 = require("./stripe.js");
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
// Characters that would break Stripe's search query syntax.
const STRIPE_INJECTION_RE = /['"\\]/g;
// Reasonably strict email pattern — not RFC 5321 exhaustive, but enough to
// reject obvious garbage before hitting Stripe.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
const app = (0, express_1.default)();
app.set('trust proxy', 1); // Required for rate-limiter behind Traefik/nginx.
// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no Origin header (server-to-server, curl, etc.)
        // and localhost for local development.
        if (!origin ||
            origin === ALLOWED_ORIGIN ||
            /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error(`CORS: origin '${origin}' not allowed`));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express_1.default.json({ limit: '16kb' }));
app.use((0, express_rate_limit_1.default)({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please wait a moment and try again.' },
}));
// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.post('/library/lookup', async (req, res, next) => {
    try {
        const { email } = req.body;
        if (typeof email !== 'string' || !email.trim()) {
            res.status(400).json({ error: 'email is required' });
            return;
        }
        const sanitized = email.trim().replace(STRIPE_INJECTION_RE, '').toLowerCase();
        if (!EMAIL_RE.test(sanitized)) {
            res.status(400).json({ error: 'Invalid email address' });
            return;
        }
        const purchases = await (0, stripe_js_1.lookupPurchasesByEmail)(sanitized);
        res.json({ purchases });
    }
    catch (err) {
        next(err);
    }
});
// ---------------------------------------------------------------------------
// Error handler
// ---------------------------------------------------------------------------
app.use((err, _req, res, _next) => {
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
