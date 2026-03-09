import http from 'node:http';

const {
  MATRIX_HOMESERVER = 'https://matrix.multiversestudios.xyz',
  MATRIX_ROOM_ID = '!pQqsRZBEIHWLodysbV:matrix.multiversestudios.xyz',
  MATRIX_ACCESS_TOKEN,
  ALLOWED_ORIGINS = 'https://multiversestudios.xyz,http://localhost:3000,http://localhost:5173',
  PORT = '3000',
} = process.env;

if (!MATRIX_ACCESS_TOKEN) {
  console.error('MATRIX_ACCESS_TOKEN is required');
  process.exit(1);
}

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

function validate(data) {
  if (!data || typeof data !== 'object') throw new Error('Invalid request body');
  if (!['bug_report', 'feedback', 'idea'].includes(data.type)) {
    throw new Error('Invalid type. Must be bug_report, feedback, or idea');
  }
  if (!['creatures_next', 'mvee', 'general'].includes(data.game)) {
    throw new Error('Invalid game. Must be creatures_next, mvee, or general');
  }
  if (typeof data.title !== 'string' || data.title.length < 3 || data.title.length > 200) {
    throw new Error('Title must be 3-200 characters');
  }
  if (typeof data.description !== 'string' || data.description.length < 10 || data.description.length > 5000) {
    throw new Error('Description must be 10-5000 characters');
  }
  if (data.severity && !['critical', 'major', 'minor', 'cosmetic'].includes(data.severity)) {
    throw new Error('Invalid severity');
  }
  if (data.screenshot && typeof data.screenshot === 'string' && data.screenshot.length > 2_800_000) {
    throw new Error('Screenshot too large (max ~2MB)');
  }
  return data;
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatMessage(sub) {
  const gameNames = {
    creatures_next: 'Precursors: Origins of Folklore',
    mvee: 'Multiverse: The End of Eternity',
    general: 'General',
  };
  const typeLabels = { bug_report: 'Bug Report', feedback: 'Feedback', idea: 'Game Idea' };
  const severityEmoji = { critical: '🔴', major: '🟠', minor: '🟡', cosmetic: '🔵' };

  const gameName = gameNames[sub.game] || sub.game;
  const typeLabel = typeLabels[sub.type] || sub.type;
  const severity = sub.severity ? ` ${severityEmoji[sub.severity]} ${sub.severity}` : '';
  const contact = sub.contact ? `\nContact: ${sub.contact}` : '';
  const browser = sub.browser ? `\nBrowser: ${sub.browser}` : '';

  const body = `--- ${typeLabel}${severity} ---\nGame: ${gameName}\nTitle: ${sub.title}\n\n${sub.description}${browser}${contact}`;
  const formatted_body = `<h3>${typeLabel}${severity}</h3>
<p><strong>Game:</strong> ${escapeHtml(gameName)}</p>
<p><strong>Title:</strong> ${escapeHtml(sub.title)}</p>
<blockquote>${escapeHtml(sub.description).replace(/\n/g, '<br>')}</blockquote>
${sub.browser ? `<p><em>Browser: ${escapeHtml(sub.browser)}</em></p>` : ''}
${sub.contact ? `<p><em>Contact: ${escapeHtml(sub.contact)}</em></p>` : ''}`;

  return { body, formatted_body };
}

async function postToMatrix(sub) {
  const { body, formatted_body } = formatMessage(sub);
  const txnId = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const url = `${MATRIX_HOMESERVER}/_matrix/client/v3/rooms/${encodeURIComponent(MATRIX_ROOM_ID)}/send/m.room.message/${txnId}`;

  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${MATRIX_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msgtype: 'm.text',
      body,
      format: 'org.matrix.custom.html',
      formatted_body,
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Matrix API error ${resp.status}: ${text}`);
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

  // Health check
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
    const submission = validate(data);
    await postToMatrix(submission);

    res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    const message = err.message || 'Unknown error';
    const status = message.startsWith('Invalid') || message.startsWith('Title') || message.startsWith('Description') || message.startsWith('Body') ? 400 : 500;
    res.writeHead(status, { ...headers, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: message }));
  }
});

server.listen(parseInt(PORT), '0.0.0.0', () => {
  console.log(`Feedback API listening on :${PORT}`);
});
