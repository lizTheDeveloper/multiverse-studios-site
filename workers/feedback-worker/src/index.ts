interface Env {
  MATRIX_HOMESERVER: string;
  MATRIX_ROOM_ID: string;
  MATRIX_ACCESS_TOKEN: string;
  ALLOWED_ORIGINS: string;
}

interface FeedbackSubmission {
  type: 'bug_report' | 'feedback' | 'idea';
  game: 'creatures_next' | 'mvee' | 'general';
  title: string;
  description: string;
  severity?: 'critical' | 'major' | 'minor' | 'cosmetic';
  browser?: string;
  screenshot?: string; // base64 data URL
  contact?: string; // optional email or matrix handle
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

function validate(data: unknown): FeedbackSubmission {
  if (!data || typeof data !== 'object') throw new Error('Invalid request body');
  const d = data as Record<string, unknown>;

  if (!['bug_report', 'feedback', 'idea'].includes(d.type as string)) {
    throw new Error('Invalid type. Must be bug_report, feedback, or idea');
  }
  if (!['creatures_next', 'mvee', 'general'].includes(d.game as string)) {
    throw new Error('Invalid game. Must be creatures_next, mvee, or general');
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

  // Reject if screenshot is over 2MB base64
  if (d.screenshot && typeof d.screenshot === 'string' && d.screenshot.length > 2_800_000) {
    throw new Error('Screenshot too large (max ~2MB)');
  }

  return d as unknown as FeedbackSubmission;
}

function formatMatrixMessage(sub: FeedbackSubmission): { body: string; formatted_body: string } {
  const gameNames: Record<string, string> = {
    creatures_next: 'Precursors: Origins of Folklore',
    mvee: 'Multiverse: The End of Eternity',
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

  const body = `--- ${typeLabel}${severity} ---\nGame: ${gameName}\nTitle: ${sub.title}\n\n${sub.description}${browser}${contact}`;

  const formatted_body = `<h3>${typeLabel}${severity}</h3>
<p><strong>Game:</strong> ${escapeHtml(gameName)}</p>
<p><strong>Title:</strong> ${escapeHtml(sub.title)}</p>
<blockquote>${escapeHtml(sub.description).replace(/\n/g, '<br>')}</blockquote>
${sub.browser ? `<p><em>Browser: ${escapeHtml(sub.browser)}</em></p>` : ''}
${sub.contact ? `<p><em>Contact: ${escapeHtml(sub.contact)}</em></p>` : ''}`;

  return { body, formatted_body };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function postToMatrix(env: Env, sub: FeedbackSubmission): Promise<void> {
  const { body, formatted_body } = formatMatrixMessage(sub);
  const txnId = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const url = `${env.MATRIX_HOMESERVER}/_matrix/client/v3/rooms/${encodeURIComponent(env.MATRIX_ROOM_ID)}/send/m.room.message/${txnId}`;

  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${env.MATRIX_ACCESS_TOKEN}`,
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

  // If there's a screenshot, upload it as a separate message
  if (sub.screenshot) {
    await uploadScreenshot(env, sub.screenshot);
  }
}

async function uploadScreenshot(env: Env, dataUrl: string): Promise<void> {
  // Parse data URL: data:image/png;base64,....
  const match = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!match) return;

  const contentType = match[1];
  const base64Data = match[2];
  const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

  // Upload to Matrix media
  const uploadUrl = `${env.MATRIX_HOMESERVER}/_matrix/media/v3/upload?filename=screenshot.png`;
  const uploadResp = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.MATRIX_ACCESS_TOKEN}`,
      'Content-Type': contentType,
    },
    body: binaryData,
  });

  if (!uploadResp.ok) return; // Non-critical, skip silently

  const uploadResult = await uploadResp.json() as { content_uri: string };
  const mxcUri = uploadResult.content_uri;

  // Send image message
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
      const submission = validate(data);
      await postToMatrix(env, submission);

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      const status = message.startsWith('Invalid') || message.startsWith('Title') || message.startsWith('Description') ? 400 : 500;

      return new Response(JSON.stringify({ error: message }), {
        status,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};
