import http from 'node:http';

const {
  MATRIX_HOMESERVER = 'https://matrix.multiversestudios.xyz',
  MATRIX_ROOM_ID = '!pQqsRZBEIHWLodysbV:matrix.multiversestudios.xyz',
  SECURITY_MATRIX_ROOM_ID,
  MATRIX_ACCESS_TOKEN,
  ALLOWED_ORIGINS = 'https://multiversestudios.xyz,http://localhost:3000,http://localhost:5173',
  PORT = '3000',
} = process.env;

if (!MATRIX_ACCESS_TOKEN) {
  console.error('MATRIX_ACCESS_TOKEN is required');
  process.exit(1);
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// In-memory rate limit store: userId -> { count, windowStart }
const rateLimitStore = new Map();

// Regex patterns that indicate potential prompt injection in user text
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions?/i,
  /ignore\s+(all\s+)?prior\s+instructions?/i,
  /system\s*prompt/i,
  /you\s+are\s+now\s+(a|an|the)\s/i,
  /act\s+as\s+(a|an|the)?\s*(different|new|unrestricted|evil|dan)/i,
  /\bDAN\b.*do\s+anything\s+now/i,
  /jailbreak/i,
  /prompt\s+injection/i,
  /<script[\s>]/i,
  /javascript\s*:/i,
  /data\s*:\s*text\s*\/\s*html/i,
  /<iframe[\s>]/i,
  /<object[\s>]/i,
  /^#{1,6}\s+(?:system|assistant|user|instructions?):/im,
  /\[INST\]|\[\/INST\]|<\|im_start\|>|<\|im_end\|>/,
  /<<SYS>>|<\/SYS>/,
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.split(',').map(o => o.trim());
  const isAllowed = allowed.includes(origin) || allowed.includes('*');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function validateMatrixUserId(userId) {
  if (typeof userId !== 'string' || userId.trim() === '') {
    throw Object.assign(new Error('userId is required'), { isClient: true });
  }
  if (!/^@[^:@\s]+:[^:@\s]+\.[^:@\s]+$/.test(userId)) {
    throw Object.assign(
      new Error('Invalid userId format. Must be a Matrix user ID (@user:server)'),
      { isClient: true }
    );
  }
  if (userId.length > 255) {
    throw Object.assign(new Error('userId too long'), { isClient: true });
  }
  return userId;
}

function detectInjection(text) {
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(text)) return 'injection pattern detected';
  }
  return null;
}

function checkRateLimit(userId) {
  const now = Date.now();
  let record = rateLimitStore.get(userId);

  if (record && now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    record = null; // window expired
  }

  if (!record) {
    rateLimitStore.set(userId, { count: 1, windowStart: now });
    return;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    const resetInMin = Math.ceil((record.windowStart + RATE_LIMIT_WINDOW_MS - now) / 60000);
    const err = new Error(`Rate limit exceeded. Try again in ${resetInMin} minute(s).`);
    err.isRateLimit = true;
    throw err;
  }

  record.count++;
}

function validate(data) {
  if (!data || typeof data !== 'object') {
    throw Object.assign(new Error('Invalid request body'), { isClient: true });
  }

  const userId = validateMatrixUserId(data.userId);

  if (!['bug_report', 'feedback', 'idea'].includes(data.type)) {
    throw Object.assign(new Error('Invalid type. Must be bug_report, feedback, or idea'), { isClient: true });
  }
  if (!['creatures_next', 'mvee', 'cultures_of_the_belt', 'never_ever_land', 'general'].includes(data.game)) {
    throw Object.assign(
      new Error('Invalid game. Must be creatures_next, mvee, cultures_of_the_belt, never_ever_land, or general'),
      { isClient: true }
    );
  }
  if (typeof data.title !== 'string' || data.title.length < 3 || data.title.length > 200) {
    throw Object.assign(new Error('Title must be 3-200 characters'), { isClient: true });
  }
  if (typeof data.description !== 'string' || data.description.length < 10 || data.description.length > 5000) {
    throw Object.assign(new Error('Description must be 10-5000 characters'), { isClient: true });
  }
  if (data.severity && !['critical', 'major', 'minor', 'cosmetic'].includes(data.severity)) {
    throw Object.assign(new Error('Invalid severity'), { isClient: true });
  }
  if (data.screenshot && typeof data.screenshot === 'string' && data.screenshot.length > 2_800_000) {
    throw Object.assign(new Error('Screenshot too large (max ~2MB)'), { isClient: true });
  }

  const flagReason =
    detectInjection(data.title) ||
    (typeof data.description === 'string' ? detectInjection(data.description) : null) ||
    (typeof data.browser === 'string' ? detectInjection(data.browser) : null) ||
    (typeof data.contact === 'string' ? detectInjection(data.contact) : null);

  return { submission: { ...data, userId }, flagReason };
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatMessage(sub, flagReason) {
  const gameNames = {
    creatures_next: 'Precursors: Origins of Folklore',
    mvee: 'Multiverse: The End of Eternity',
    cultures_of_the_belt: 'Cultures of the Belt',
    never_ever_land: 'Never Ever Land',
    general: 'General',
  };
  const typeLabels = { bug_report: 'Bug Report', feedback: 'Feedback', idea: 'Game Idea' };
  const severityEmoji = { critical: '🔴', major: '🟠', minor: '🟡', cosmetic: '🔵' };

  const gameName = gameNames[sub.game] || sub.game;
  const typeLabel = typeLabels[sub.type] || sub.type;
  const severity = sub.severity ? ` ${severityEmoji[sub.severity]} ${sub.severity}` : '';
  const contact = sub.contact ? `\nContact: ${sub.contact}` : '';
  const browser = sub.browser ? `\nBrowser: ${sub.browser}` : '';
  const flagPrefix = flagReason ? '[FLAGGED] ' : '';

  const body = `${flagPrefix}--- ${typeLabel}${severity} ---\nGame: ${gameName}\nTitle: ${sub.title}\nSubmitted by: ${sub.userId}\n\n${sub.description}${browser}${contact}`;

  const flagBanner = flagReason
    ? `<p><strong>⚠ FLAGGED:</strong> possible injection attempt — ${escapeHtml(flagReason)}</p>`
    : '';

  const formatted_body = `${flagBanner}<h3>${typeLabel}${severity}</h3>
<p><strong>Game:</strong> ${escapeHtml(gameName)}</p>
<p><strong>Title:</strong> ${escapeHtml(sub.title)}</p>
<p><strong>Submitted by:</strong> ${escapeHtml(sub.userId)}</p>
<blockquote>${escapeHtml(sub.description).replace(/\n/g, '<br>')}</blockquote>
${sub.browser ? `<p><em>Browser: ${escapeHtml(sub.browser)}</em></p>` : ''}
${sub.contact ? `<p><em>Contact: ${escapeHtml(sub.contact)}</em></p>` : ''}`;

  return { body, formatted_body };
}

function formatSecurityAlert(sub, flagReason) {
  const preview = sub.description.slice(0, 500);
  const truncated = sub.description.length > 500 ? '…' : '';
  const body = `[SECURITY ALERT] Possible injection in feedback\nUser: ${sub.userId}\nReason: ${flagReason}\nType: ${sub.type} / ${sub.game}\nTitle: ${sub.title}\n\n${preview}${truncated}`;
  const formatted_body = `<h3>⚠ Security Alert: Possible Prompt Injection</h3>
<p><strong>User:</strong> ${escapeHtml(sub.userId)}</p>
<p><strong>Reason:</strong> ${escapeHtml(flagReason)}</p>
<p><strong>Type:</strong> ${escapeHtml(sub.type)} / ${escapeHtml(sub.game)}</p>
<p><strong>Title:</strong> ${escapeHtml(sub.title)}</p>
<blockquote>${escapeHtml(preview).replace(/\n/g, '<br>')}${truncated}</blockquote>`;
  return { body, formatted_body };
}

async function sendMatrixMessage(roomId, content) {
  const txnId = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const url = `${MATRIX_HOMESERVER}/_matrix/client/v3/rooms/${encodeURIComponent(roomId)}/send/m.room.message/${txnId}`;

  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${MATRIX_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msgtype: 'm.text',
      body: content.body,
      format: 'org.matrix.custom.html',
      formatted_body: content.formatted_body,
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Matrix API error ${resp.status}: ${text}`);
  }
}

async function postToMatrix(sub, flagReason) {
  const messageContent = formatMessage(sub, flagReason);
  await sendMatrixMessage(MATRIX_ROOM_ID, messageContent);

  // If flagged and a security room is configured, also send an alert there
  if (flagReason && SECURITY_MATRIX_ROOM_ID) {
    const alertContent = formatSecurityAlert(sub, flagReason);
    try {
      await sendMatrixMessage(SECURITY_MATRIX_ROOM_ID, alertContent);
    } catch {
      // Non-critical — main submission already posted
    }
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 3_000_000) { reject(new Error('Body too large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || '';
  const headers = corsHeaders(origin);

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/submit') {
    res.writeHead(404, { ...headers, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found. POST /submit' }));
    return;
  }

  try {
    const body = await readBody(req);
    const data = JSON.parse(body);
    const { submission, flagReason } = validate(data);
    checkRateLimit(submission.userId);
    await postToMatrix(submission, flagReason);

    res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    const message = err.message || 'Unknown error';

    if (err.isRateLimit) {
      res.writeHead(429, { ...headers, 'Content-Type': 'application/json', 'Retry-After': '3600' });
      res.end(JSON.stringify({ error: message }));
      return;
    }

    const status = err.isClient || message.startsWith('Body') ? 400 : 500;
    res.writeHead(status, { ...headers, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: message }));
  }
});

server.listen(parseInt(PORT), '0.0.0.0', () => {
  console.log(`Feedback API listening on :${PORT}`);
});
