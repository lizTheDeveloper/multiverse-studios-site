interface Env {
  MATRIX_HOMESERVER: string;
  MATRIX_ROOM_ID: string;
  MATRIX_ACCESS_TOKEN: string;
  ALLOWED_ORIGINS: string;
  SECURITY_MATRIX_ROOM_ID?: string; // optional room for flagged/suspicious submissions
  RATE_LIMIT_KV: KVNamespace;
}

interface FeedbackSubmission {
  type: 'bug_report' | 'feedback' | 'idea';
  game: 'creatures_next' | 'mvee' | 'cultures_of_the_belt' | 'never_ever_land' | 'general';
  title: string;
  description: string;
  userId: string; // Matrix user ID — required for rate limiting
  severity?: 'critical' | 'major' | 'minor' | 'cosmetic';
  browser?: string;
  screenshot?: string; // base64 data URL
  contact?: string; // optional email or matrix handle
}

interface RateLimitRecord {
  count: number;
  windowStart: number;
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour in ms

// Regex patterns that indicate potential prompt injection in user text
const INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?previous\s+instructions?/i,
  /ignore\s+(all\s+)?prior\s+instructions?/i,
  /system\s*prompt/i,
  /you\s+are\s+now\s+(a|an|the)\s/i,
  /act\s+as\s+(a|an|the)?\s*(different|new|unrestricted|evil|dan)/i,
  /\bDAN\b.*do\s+anything\s+now/i,
  /jailbreak/i,
  /prompt\s+injection/i,
  // HTML/script injection
  /<script[\s>]/i,
  /javascript\s*:/i,
  /data\s*:\s*text\s*\/\s*html/i,
  /<iframe[\s>]/i,
  /<object[\s>]/i,
  // Markdown header injection that could escape rendering context
  /^#{1,6}\s+(?:system|assistant|user|instructions?):/im,
  // LLM control tokens
  /\[INST\]|\[\/INST\]|<\|im_start\|>|<\|im_end\|>/,
  /<<SYS>>|<\/SYS>/,
];

class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RateLimitError';
  }
}

function corsHeaders(origin: string, allowedOrigins: string): HeadersInit {
  const allowed = allowedOrigins.split(',').map(o => o.trim());
  const isAllowed = allowed.includes(origin) || allowed.includes('*');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function validateMatrixUserId(userId: unknown): string {
  if (typeof userId !== 'string' || userId.trim() === '') {
    throw new Error('userId is required');
  }
  // Matrix user ID format: @localpart:server (RFC-compliant minimal check)
  if (!/^@[^:@\s]+:[^:@\s]+\.[^:@\s]+$/.test(userId)) {
    throw new Error('Invalid userId format. Must be a Matrix user ID (@user:server)');
  }
  if (userId.length > 255) throw new Error('userId too long');
  return userId;
}

function detectInjection(text: string): string | null {
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(text)) {
      return pattern.source;
    }
  }
  return null;
}

function validate(data: unknown): { submission: FeedbackSubmission; flagReason: string | null } {
  if (!data || typeof data !== 'object') throw new Error('Invalid request body');
  const d = data as Record<string, unknown>;

  const userId = validateMatrixUserId(d.userId);

  if (!['bug_report', 'feedback', 'idea'].includes(d.type as string)) {
    throw new Error('Invalid type. Must be bug_report, feedback, or idea');
  }
  if (!['creatures_next', 'mvee', 'cultures_of_the_belt', 'never_ever_land', 'general'].includes(d.game as string)) {
    throw new Error('Invalid game. Must be creatures_next, mvee, cultures_of_the_belt, never_ever_land, or general');
  }
  if (typeof d.title !== 'string' || d.title.length < 3 || d.title.length > 200) {
    throw new Error('Title must be 3-200 characters');
  }
  if (typeof d.description !== 'string' || d.description.length < 10 || d.description.length > 5000) {
    throw new Error('Description must be 10-5000 characters');
  }
  if (d.severity && !['critical', 'major', 'minor', 'cosmetic'].includes(d.severity as string)) {
    throw new Error('Invalid severity');
  }
  if (d.screenshot && typeof d.screenshot === 'string' && d.screenshot.length > 2_800_000) {
    throw new Error('Screenshot too large (max ~2MB)');
  }

  // Scan all user-supplied text fields for injection patterns
  const flagReason =
    detectInjection(d.title as string)
      ? `title matches injection pattern`
      : typeof d.description === 'string' && detectInjection(d.description)
      ? `description matches injection pattern`
      : typeof d.browser === 'string' && detectInjection(d.browser)
      ? `browser field matches injection pattern`
      : typeof d.contact === 'string' && detectInjection(d.contact)
      ? `contact field matches injection pattern`
      : null;

  const submission: FeedbackSubmission = {
    type: d.type as FeedbackSubmission['type'],
    game: d.game as FeedbackSubmission['game'],
    title: d.title as string,
    description: d.description as string,
    userId,
    severity: d.severity as FeedbackSubmission['severity'],
    browser: typeof d.browser === 'string' ? d.browser : undefined,
    screenshot: typeof d.screenshot === 'string' ? d.screenshot : undefined,
    contact: typeof d.contact === 'string' ? d.contact : undefined,
  };

  return { submission, flagReason };
}

async function checkRateLimit(kv: KVNamespace, userId: string): Promise<void> {
  const key = `rl:${userId}`;
  const raw = await kv.get(key);
  const now = Date.now();

  let record: RateLimitRecord;
  if (raw) {
    record = JSON.parse(raw) as RateLimitRecord;
    if (now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
      // Window expired, start a new one
      record = { count: 1, windowStart: now };
    } else if (record.count >= RATE_LIMIT_MAX) {
      const resetInMin = Math.ceil((record.windowStart + RATE_LIMIT_WINDOW_MS - now) / 60000);
      throw new RateLimitError(`Rate limit exceeded. Try again in ${resetInMin} minute(s).`);
    } else {
      record.count++;
    }
  } else {
    record = { count: 1, windowStart: now };
  }

  // TTL = remaining window + 60s buffer
  const ttlSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - record.windowStart)) / 1000) + 60;
  await kv.put(key, JSON.stringify(record), { expirationTtl: ttlSeconds });
}

function formatMatrixMessage(
  sub: FeedbackSubmission,
  flagReason: string | null
): { body: string; formatted_body: string } {
  const gameNames: Record<string, string> = {
    creatures_next: 'Precursors: Origins of Folklore',
    mvee: 'Multiverse: The End of Eternity',
    cultures_of_the_belt: 'Cultures of the Belt',
    never_ever_land: 'Never Ever Land',
    general: 'General',
  };
  const typeLabels: Record<string, string> = {
    bug_report: 'Bug Report',
    feedback: 'Feedback',
    idea: 'Game Idea',
  };
  const severityEmoji: Record<string, string> = {
    critical: '🔴',
    major: '🟠',
    minor: '🟡',
    cosmetic: '🔵',
  };

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

function formatSecurityAlert(
  sub: FeedbackSubmission,
  flagReason: string
): { body: string; formatted_body: string } {
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

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function sendMatrixMessage(
  homeserver: string,
  roomId: string,
  token: string,
  content: { body: string; formatted_body: string }
): Promise<void> {
  const txnId = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const url = `${homeserver}/_matrix/client/v3/rooms/${encodeURIComponent(roomId)}/send/m.room.message/${txnId}`;

  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
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

async function postToMatrix(env: Env, sub: FeedbackSubmission, flagReason: string | null): Promise<void> {
  const messageContent = formatMatrixMessage(sub, flagReason);
  await sendMatrixMessage(env.MATRIX_HOMESERVER, env.MATRIX_ROOM_ID, env.MATRIX_ACCESS_TOKEN, messageContent);

  // If flagged and a dedicated security room is configured, also post an alert there
  if (flagReason && env.SECURITY_MATRIX_ROOM_ID) {
    const alertContent = formatSecurityAlert(sub, flagReason);
    try {
      await sendMatrixMessage(
        env.MATRIX_HOMESERVER,
        env.SECURITY_MATRIX_ROOM_ID,
        env.MATRIX_ACCESS_TOKEN,
        alertContent
      );
    } catch {
      // Non-critical — main submission already posted
    }
  }

  // If there's a screenshot, upload it as a separate message
  if (sub.screenshot) {
    await uploadScreenshot(env, sub.screenshot);
  }
}

async function uploadScreenshot(env: Env, dataUrl: string): Promise<void> {
  const match = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!match) return;

  const contentType = match[1];
  const base64Data = match[2];
  const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

  const uploadUrl = `${env.MATRIX_HOMESERVER}/_matrix/media/v3/upload?filename=screenshot.png`;
  const uploadResp = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.MATRIX_ACCESS_TOKEN}`,
      'Content-Type': contentType,
    },
    body: binaryData,
  });

  if (!uploadResp.ok) return; // Non-critical

  const uploadResult = await uploadResp.json() as { content_uri: string };
  const mxcUri = uploadResult.content_uri;

  const txnId = `screenshot_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const msgUrl = `${env.MATRIX_HOMESERVER}/_matrix/client/v3/rooms/${encodeURIComponent(env.MATRIX_ROOM_ID)}/send/m.room.message/${txnId}`;

  await fetch(msgUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${env.MATRIX_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msgtype: 'm.image',
      body: 'screenshot.png',
      url: mxcUri,
      info: { mimetype: contentType },
    }),
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, env.ALLOWED_ORIGINS);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    try {
      const data = await request.json();
      const { submission, flagReason } = validate(data);

      await checkRateLimit(env.RATE_LIMIT_KV, submission.userId);
      await postToMatrix(env, submission, flagReason);

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';

      if (err instanceof RateLimitError) {
        return new Response(JSON.stringify({ error: message }), {
          status: 429,
          headers: { ...headers, 'Content-Type': 'application/json', 'Retry-After': '3600' },
        });
      }

      const isClientError =
        message.startsWith('Invalid') ||
        message.startsWith('Title') ||
        message.startsWith('Description') ||
        message.startsWith('userId') ||
        message.startsWith('Screenshot');

      return new Response(JSON.stringify({ error: message }), {
        status: isClientError ? 400 : 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};
