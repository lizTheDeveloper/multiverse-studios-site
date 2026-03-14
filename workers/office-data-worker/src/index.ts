/**
 * Office Data Worker — Cloudflare Worker
 *
 * Bridges the local Paperclip instance (private) to the public pixel office page.
 * The local publisher script pushes sanitized agent data here via POST.
 * The pixel office frontend fetches it via GET.
 *
 * Endpoints:
 *   GET  /api/office/data    — return latest snapshot (public, CORS-open)
 *   POST /api/office/update  — store new snapshot (requires OFFICE_UPDATE_SECRET header)
 *   GET  /api/office/health  — health check
 *
 * Secrets (set via `wrangler secret put`):
 *   OFFICE_UPDATE_SECRET — shared secret for the local publisher
 *
 * KV Binding:
 *   OFFICE_DATA — stores the snapshot under key "snapshot"
 */

interface Env {
  OFFICE_DATA: KVNamespace;
  OFFICE_UPDATE_SECRET: string;
  ALLOWED_ORIGINS: string;
}

export interface AgentSnapshot {
  id: string;
  name: string;
  role: string;
  status: 'running' | 'idle' | 'error';
  currentTask: string | null;
  currentIssueId: string | null;
  currentIssueIdentifier: string | null;
}

export interface OfficeSnapshot {
  agents: AgentSnapshot[];
  updatedAt: string; // ISO timestamp
  companyId: string;
}

function corsHeaders(origin: string, allowedOrigins: string): HeadersInit {
  const allowed = allowedOrigins.split(',').map((o) => o.trim());
  const isAllowed = allowed.includes(origin) || allowed.includes('*');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Office-Update-Secret',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin, env.ALLOWED_ORIGINS || 'https://multiversestudios.xyz');

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    // GET /api/office/health
    if (request.method === 'GET' && url.pathname.endsWith('/health')) {
      const snapshot = await env.OFFICE_DATA.get('snapshot');
      const hasData = !!snapshot;
      return new Response(
        JSON.stringify({ status: 'ok', hasData }),
        { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    // GET /api/office/data — public read
    if (request.method === 'GET' && url.pathname.endsWith('/data')) {
      const snapshot = await env.OFFICE_DATA.get('snapshot');

      if (!snapshot) {
        return new Response(
          JSON.stringify({ agents: [], updatedAt: null, empty: true }),
          { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
        );
      }

      return new Response(snapshot, {
        status: 200,
        headers: {
          ...cors,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=30',
        },
      });
    }

    // POST /api/office/update — authenticated write from local publisher
    if (request.method === 'POST' && url.pathname.endsWith('/update')) {
      const secret = request.headers.get('X-Office-Update-Secret');
      if (!env.OFFICE_UPDATE_SECRET || secret !== env.OFFICE_UPDATE_SECRET) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      let body: OfficeSnapshot;
      try {
        body = (await request.json()) as OfficeSnapshot;
      } catch {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
          status: 400,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      // Basic validation
      if (!Array.isArray(body.agents)) {
        return new Response(JSON.stringify({ error: 'agents must be an array' }), {
          status: 400,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      // Enforce updatedAt is fresh (within last 5 minutes to prevent replay)
      const ts = new Date(body.updatedAt).getTime();
      const now = Date.now();
      if (isNaN(ts) || Math.abs(now - ts) > 5 * 60 * 1000) {
        return new Response(JSON.stringify({ error: 'updatedAt timestamp out of range' }), {
          status: 400,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }

      // Store snapshot; TTL = 10 minutes (stale data expires automatically)
      await env.OFFICE_DATA.put('snapshot', JSON.stringify(body), { expirationTtl: 600 });

      return new Response(
        JSON.stringify({ ok: true, agents: body.agents.length }),
        { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },
};
