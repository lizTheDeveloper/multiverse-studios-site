/**
 * LLM Proxy Worker — Cloudflare Worker
 *
 * Proxies POST /api/llm/think requests to Groq (or other OpenAI-compatible providers).
 * Mirrors the Express server at server/routes/llm.ts so dev (Vite proxy → Express)
 * and prod (Cloudflare Worker route) behave identically.
 *
 * Secrets (set via `wrangler secret put`):
 *   GROQ_API_KEY — Groq API key
 *
 * Route: multiversestudios.xyz/api/llm/*
 */

interface Env {
  GROQ_API_KEY: string;
  ALLOWED_ORIGINS: string;
}

interface LLMRequestBody {
  model?: string;
  messages?: Array<{ role: string; content: string }>;
  max_tokens?: number;
  temperature?: number;
  baseUrl?: string;
  apiKey?: string;
  injectNoThink?: boolean;
  stripThinkTags?: boolean;
}

const DEFAULT_BASE_URL = 'https://api.groq.com/openai/v1';
const DEFAULT_MODEL = 'qwen/qwen3-32b';

function corsHeaders(origin: string, allowedOrigins: string): HeadersInit {
  const allowed = allowedOrigins.split(',').map((o) => o.trim());
  const isAllowed = allowed.includes(origin) || allowed.includes('*');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function isLocalUrl(url: string): boolean {
  return /localhost|127\.0\.0\.1|0\.0\.0\.0/.test(url);
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

    // GET /api/llm/providers — health check for LLM Settings panel
    if (request.method === 'GET' && url.pathname.endsWith('/providers')) {
      const proxyReady = !!env.GROQ_API_KEY;
      return new Response(
        JSON.stringify({
          proxyReady,
          providers: proxyReady
            ? [
                {
                  name: 'groq',
                  baseUrl: DEFAULT_BASE_URL,
                  models: ['qwen/qwen3-32b', 'llama-3.3-70b-versatile'],
                  costPerInputToken: 0.00000059,
                  costPerOutputToken: 0.00000079,
                },
              ]
            : [],
        }),
        { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    // POST /api/llm/think — main inference endpoint
    if (request.method === 'POST' && url.pathname.endsWith('/think')) {
      try {
        const body = (await request.json()) as LLMRequestBody;

        const { model, messages, max_tokens, temperature, baseUrl, apiKey, injectNoThink, stripThinkTags } =
          body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
          return new Response(JSON.stringify({ error: 'messages array is required and must be non-empty' }), {
            status: 400,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }

        // Resolve target URL and auth key
        const targetBaseUrl =
          typeof baseUrl === 'string' && baseUrl.trim() ? baseUrl.trim().replace(/\/$/, '') : DEFAULT_BASE_URL;

        let authKey: string;
        if (typeof apiKey === 'string' && apiKey.trim()) {
          authKey = apiKey.trim();
        } else if (isLocalUrl(targetBaseUrl)) {
          authKey = 'local';
        } else if (env.GROQ_API_KEY) {
          authKey = env.GROQ_API_KEY;
        } else {
          return new Response(
            JSON.stringify({ error: 'No GROQ_API_KEY configured on the server.' }),
            { status: 503, headers: { ...cors, 'Content-Type': 'application/json' } },
          );
        }

        // Inject /no_think for qwen3 reasoning suppression (default: on)
        const shouldInjectNoThink = injectNoThink !== false;
        const patchedMessages = shouldInjectNoThink
          ? messages.map((m, i) => {
              if (i === messages.length - 1 && m.role === 'user') {
                return { ...m, content: m.content + ' /no_think' };
              }
              return m;
            })
          : messages;

        const chatUrl = `${targetBaseUrl}/chat/completions`;
        const response = await fetch(chatUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authKey}`,
          },
          body: JSON.stringify({
            model: typeof model === 'string' && model.trim() ? model.trim() : DEFAULT_MODEL,
            messages: patchedMessages,
            max_tokens: max_tokens || 200,
            temperature: temperature || 0.8,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          return new Response(JSON.stringify({ error: errorText }), {
            status: response.status,
            headers: { ...cors, 'Content-Type': 'application/json' },
          });
        }

        const data = (await response.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
          usage?: unknown;
        };
        let text = data.choices?.[0]?.message?.content ?? '';

        // Strip <think>...</think> tags (default: on)
        const shouldStrip = stripThinkTags !== false;
        if (shouldStrip) {
          text = text.replace(/<think>[\s\S]*?<\/think>\s*/g, '').trim();
          text = text.replace(/<think>[\s\S]*/g, '').trim();
        }

        return new Response(JSON.stringify({ text, usage: data.usage }), {
          status: 200,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return new Response(JSON.stringify({ error: message }), {
          status: 500,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },
};
