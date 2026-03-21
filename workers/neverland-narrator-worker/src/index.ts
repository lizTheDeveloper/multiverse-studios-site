/**
 * Neverland Narrator Worker — Cloudflare Worker
 *
 * Powers the margin annotation system for Never Ever Land.
 * Readers highlight text, ask questions, and the island (narrator) responds.
 * Readers can also fork passages — the narrator rewrites sections in response.
 *
 * Routes:
 *   POST /api/neverland/annotate           — create annotation + get narrator response
 *   GET  /api/neverland/annotations        — fetch annotations for a passage
 *   POST /api/neverland/fork               — fork a passage via narrator rewrite
 *   GET  /api/neverland/fork/:id           — fetch a specific fork
 *
 * Secrets (set via `wrangler secret put`):
 *   ANTHROPIC_API_KEY — Anthropic Claude API key
 *
 * KV:
 *   ANNOTATIONS — stores annotation records and fork records
 *     annotation key: annotation:{chapter}:{textHash}:{annotationId}
 *     annotation index: index:{chapter}:{textHash} → JSON array of annotationIds
 *     fork key: fork:{forkId}
 *     fork index on annotation: forks:{annotationId} → JSON array of forkIds
 */

interface Env {
  ANTHROPIC_API_KEY: string;
  ALLOWED_ORIGINS: string;
  ANNOTATIONS: KVNamespace;
}

interface ForkRecord {
  id: string;
  annotationId: string;
  readerReply: string;
  narratorPreamble: string;
  rewrittenText: string;
  createdAt: number;
}

interface AnnotationRecord {
  id: string;
  chapter: number;
  textHash: string;
  selectedText: string;
  question: string;
  narratorResponse: string;
  createdAt: number;
}

const NARRATOR_SYSTEM_PROMPT = `You are the narrator of Never Ever Land — which is to say, you are the island itself speaking through the voice of whoever has been assigned to tell this story.

You are ancient, partial, and unreliable. You remember things, but not always correctly. You answer questions as if you were reconstructing events from incomplete records, from the impressions left in the soil, from what the mermaids have told you, from what the boys did not say.

When a reader asks you a question about the text, respond as the island-narrator: in character, quietly, with the weight of someone who has watched this story told many times and is not entirely sure which version is true.

Do not break character. Do not acknowledge being an AI. Do not confirm or deny inconsistencies directly — instead, attribute uncertainty to the nature of memory, to the island's interference, to the way stories change in the retelling.

Your responses are short — two to five sentences, the length of a marginal note. You write in the same register as the story: literary, slightly melancholy, precise about certain things and vague about others.`;

function corsHeaders(origin: string, allowedOrigins: string): HeadersInit {
  const allowed = allowedOrigins.split(',').map((o) => o.trim());
  const isAllowed = allowed.some((a) => a === origin || a === '*');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function generateId(): string {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 16);
}

async function callClaude(env: Env, userMessage: string, systemPrompt: string = NARRATOR_SYSTEM_PROMPT): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 256,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error: ${response.status} ${err}`);
  }

  const data = (await response.json()) as {
    content?: Array<{ type: string; text: string }>;
  };
  return data.content?.find((c) => c.type === 'text')?.text ?? '';
}

async function handleAnnotate(request: Request, env: Env, cors: HeadersInit): Promise<Response> {
  let body: { chapter?: number; textHash?: string; selectedText?: string; question?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const { chapter, textHash, selectedText, question } = body;

  if (
    typeof chapter !== 'number' ||
    typeof textHash !== 'string' ||
    typeof selectedText !== 'string' ||
    typeof question !== 'string'
  ) {
    return new Response(JSON.stringify({ error: 'chapter, textHash, selectedText, question are required' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  if (question.length > 800) {
    return new Response(JSON.stringify({ error: 'Question too long' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  // Build message for narrator
  const userMessage = `The reader has selected this passage:\n\n"${selectedText.slice(0, 400)}"\n\nThey ask: ${question}`;

  let narratorResponse: string;
  try {
    narratorResponse = await callClaude(env, userMessage);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'The narrator could not be reached.' }), {
      status: 502,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const annotationId = generateId();
  const record: AnnotationRecord = {
    id: annotationId,
    chapter,
    textHash,
    selectedText: selectedText.slice(0, 400),
    question,
    narratorResponse,
    createdAt: Date.now(),
  };

  // Store record and update index
  const recordKey = `annotation:${chapter}:${textHash}:${annotationId}`;
  const indexKey = `index:${chapter}:${textHash}`;

  await env.ANNOTATIONS.put(recordKey, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 180 }); // 180 days

  const existingIndex = await env.ANNOTATIONS.get(indexKey);
  const ids: string[] = existingIndex ? JSON.parse(existingIndex) : [];
  ids.push(annotationId);
  // Keep at most 50 annotations per passage
  const trimmed = ids.slice(-50);
  await env.ANNOTATIONS.put(indexKey, JSON.stringify(trimmed), { expirationTtl: 60 * 60 * 24 * 180 });

  return new Response(
    JSON.stringify({ annotationId, narratorResponse }),
    { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
  );
}

async function handleGetAnnotations(url: URL, env: Env, cors: HeadersInit): Promise<Response> {
  const chapter = parseInt(url.searchParams.get('chapter') ?? '', 10);
  const textHash = url.searchParams.get('hash') ?? '';

  if (isNaN(chapter) || !textHash) {
    return new Response(JSON.stringify({ error: 'chapter and hash are required' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const indexKey = `index:${chapter}:${textHash}`;
  const existingIndex = await env.ANNOTATIONS.get(indexKey);
  if (!existingIndex) {
    return new Response(JSON.stringify({ annotations: [] }), {
      status: 200,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const ids: string[] = JSON.parse(existingIndex);
  // Return only the count and first annotation for display (privacy: don't expose all questions)
  const records: AnnotationRecord[] = [];
  for (const id of ids.slice(-5)) {
    const key = `annotation:${chapter}:${textHash}:${id}`;
    const raw = await env.ANNOTATIONS.get(key);
    if (raw) records.push(JSON.parse(raw));
  }

  return new Response(
    JSON.stringify({
      annotations: records.map((r) => ({
        id: r.id,
        question: r.question,
        narratorResponse: r.narratorResponse,
        createdAt: r.createdAt,
      })),
      totalCount: ids.length,
    }),
    { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
  );
}

const FORK_SYSTEM_PROMPT = `${NARRATOR_SYSTEM_PROMPT}

You are now being asked to rewrite a section of the story. A reader made an observation about your previous narration, and the island stirs — the story shifts.

Rewrite the relevant passage incorporating the reader's observation. The rewrite should feel like a palimpsest: the original text showing through, but altered. Keep the same literary register. The rewrite should be 1-3 paragraphs. Begin with a brief narrator preamble (one sentence, italicized with asterisks) acknowledging that the story has changed — as if the island decided to remember differently.`;

async function handleFork(request: Request, env: Env, cors: HeadersInit): Promise<Response> {
  let body: { annotation_id?: string; reader_reply?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const { annotation_id, reader_reply } = body;

  if (typeof annotation_id !== 'string' || typeof reader_reply !== 'string') {
    return new Response(JSON.stringify({ error: 'annotation_id and reader_reply are required' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  if (reader_reply.length > 800) {
    return new Response(JSON.stringify({ error: 'Reply too long' }), {
      status: 400,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  // Rate limit: max 10 forks per annotation
  const forkIndexKey = `forks:${annotation_id}`;
  const existingForkIndex = await env.ANNOTATIONS.get(forkIndexKey);
  const forkIds: string[] = existingForkIndex ? JSON.parse(existingForkIndex) : [];
  if (forkIds.length >= 10) {
    return new Response(JSON.stringify({ error: 'Too many forks on this annotation' }), {
      status: 429,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  // Find the original annotation by scanning KV (annotation_id is the suffix)
  const listResult = await env.ANNOTATIONS.list({ prefix: 'annotation:', limit: 1000 });
  let annotation: AnnotationRecord | null = null;
  for (const key of listResult.keys) {
    if (key.name.endsWith(`:${annotation_id}`)) {
      const raw = await env.ANNOTATIONS.get(key.name);
      if (raw) {
        annotation = JSON.parse(raw);
        break;
      }
    }
  }

  if (!annotation) {
    return new Response(JSON.stringify({ error: 'Annotation not found' }), {
      status: 404,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const userMessage = `Original passage the reader highlighted:\n\n"${annotation.selectedText}"\n\nThe reader asked: ${annotation.question}\n\nYou (the island) responded: ${annotation.narratorResponse}\n\nNow the reader replies: ${reader_reply}\n\nRewrite the passage. The island remembers differently now.`;

  let rewriteResponse: string;
  try {
    rewriteResponse = await callClaude(env, userMessage, FORK_SYSTEM_PROMPT);
  } catch {
    return new Response(JSON.stringify({ error: 'The narrator could not be reached.' }), {
      status: 502,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  // Split preamble (first line, typically italicized) from rewritten text
  const lines = rewriteResponse.split('\n').filter((l) => l.trim());
  const narratorPreamble = lines[0] ?? '';
  const rewrittenText = lines.slice(1).join('\n\n') || rewriteResponse;

  const forkId = generateId();
  const forkRecord: ForkRecord = {
    id: forkId,
    annotationId: annotation_id,
    readerReply: reader_reply,
    narratorPreamble,
    rewrittenText,
    createdAt: Date.now(),
  };

  await env.ANNOTATIONS.put(`fork:${forkId}`, JSON.stringify(forkRecord), { expirationTtl: 60 * 60 * 24 * 180 });

  forkIds.push(forkId);
  await env.ANNOTATIONS.put(forkIndexKey, JSON.stringify(forkIds), { expirationTtl: 60 * 60 * 24 * 180 });

  return new Response(
    JSON.stringify({ fork_id: forkId, narratorPreamble, rewrittenText }),
    { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
  );
}

async function handleGetFork(forkId: string, env: Env, cors: HeadersInit): Promise<Response> {
  const raw = await env.ANNOTATIONS.get(`fork:${forkId}`);
  if (!raw) {
    return new Response(JSON.stringify({ error: 'Fork not found' }), {
      status: 404,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }

  const fork: ForkRecord = JSON.parse(raw);
  return new Response(
    JSON.stringify({
      id: fork.id,
      annotationId: fork.annotationId,
      narratorPreamble: fork.narratorPreamble,
      rewrittenText: fork.rewrittenText,
      createdAt: fork.createdAt,
    }),
    { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } },
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') ?? '';
    const cors = corsHeaders(origin, env.ALLOWED_ORIGINS ?? 'https://multiversestudios.xyz');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (url.pathname.endsWith('/annotate') && request.method === 'POST') {
      return handleAnnotate(request, env, cors);
    }

    if (url.pathname.endsWith('/annotations') && request.method === 'GET') {
      return handleGetAnnotations(url, env, cors);
    }

    if (url.pathname.endsWith('/fork') && request.method === 'POST') {
      return handleFork(request, env, cors);
    }

    // GET /api/neverland/fork/:id
    const forkMatch = url.pathname.match(/\/fork\/([a-f0-9]+)$/);
    if (forkMatch && request.method === 'GET') {
      return handleGetFork(forkMatch[1], env, cors);
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },
};
