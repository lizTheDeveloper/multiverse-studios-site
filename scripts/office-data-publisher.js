#!/usr/bin/env node
/**
 * office-data-publisher.js
 *
 * Runs locally on the machine where Paperclip lives.
 * Every 60 seconds (or on-demand):
 *   1. Fetches all agents + their current in-progress issues from Paperclip API
 *   2. Scrubs task text through Microsoft Presidio (deployed on Hetzner)
 *   3. Pushes the sanitized snapshot to the Cloudflare office-data-worker
 *
 * Required env vars (add to ~/.zshrc or a .env file):
 *   PAPERCLIP_API_URL        — e.g. http://127.0.0.1:3100
 *   PAPERCLIP_API_KEY        — JWT for a read-only service account, or the same
 *                               key used by agents (read-only endpoints only used here)
 *   PAPERCLIP_COMPANY_ID     — your company UUID
 *   PRESIDIO_URL             — e.g. https://play.multiversestudios.xyz/api/presidio
 *   OFFICE_WORKER_URL        — e.g. https://multiversestudios.xyz/api/office/update
 *   OFFICE_UPDATE_SECRET     — shared secret matching the Cloudflare Worker secret
 *
 * Usage:
 *   node scripts/office-data-publisher.js          # run once
 *   node scripts/office-data-publisher.js --watch  # loop every 60s
 *
 * Install cron (macOS launchd example):
 *   # See scripts/office-publisher.plist for a LaunchAgent plist
 */

'use strict';

const PAPERCLIP_API_URL   = process.env.PAPERCLIP_API_URL   || 'http://127.0.0.1:3100';
const PAPERCLIP_API_KEY   = process.env.PAPERCLIP_API_KEY;
const PAPERCLIP_COMPANY_ID= process.env.PAPERCLIP_COMPANY_ID;
const PRESIDIO_URL        = process.env.PRESIDIO_URL        || 'https://play.multiversestudios.xyz/api/presidio';
const OFFICE_WORKER_URL   = process.env.OFFICE_WORKER_URL   || 'https://multiversestudios.xyz/api/office/update';
const OFFICE_UPDATE_SECRET= process.env.OFFICE_UPDATE_SECRET;
const INTERVAL_MS         = parseInt(process.env.PUBLISH_INTERVAL_MS || '60000', 10);

// ── Presidio scrub ──────────────────────────────────────────────────────────

async function scrubText(text) {
  if (!text || typeof text !== 'string') return text;
  try {
    const res = await fetch(`${PRESIDIO_URL}/scrub`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.warn(`[presidio] scrub failed (${res.status}) — using raw text`);
      return text;
    }
    const data = await res.json();
    return data.text || text;
  } catch (err) {
    console.warn('[presidio] scrub error:', err.message, '— using raw text');
    return text;
  }
}

async function scrubBatch(texts) {
  const nonEmpty = texts.filter(t => t && typeof t === 'string');
  if (nonEmpty.length === 0) return texts;
  try {
    const res = await fetch(`${PRESIDIO_URL}/scrub/batch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texts: nonEmpty }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      console.warn(`[presidio] batch scrub failed (${res.status}) — scrubbing individually`);
      return Promise.all(texts.map(scrubText));
    }
    const data = await res.json();
    // data.texts is a parallel array to nonEmpty; map back to original positions
    let idx = 0;
    return texts.map(t => (t && typeof t === 'string') ? (data.texts[idx++] || t) : t);
  } catch (err) {
    console.warn('[presidio] batch scrub error:', err.message, '— scrubbing individually');
    return Promise.all(texts.map(scrubText));
  }
}

// ── Paperclip API ───────────────────────────────────────────────────────────

function paperclipHeaders() {
  if (!PAPERCLIP_API_KEY) throw new Error('PAPERCLIP_API_KEY is not set');
  return {
    'Authorization': `Bearer ${PAPERCLIP_API_KEY}`,
    'Content-Type': 'application/json',
  };
}

async function fetchAgents() {
  const res = await fetch(
    `${PAPERCLIP_API_URL}/api/companies/${PAPERCLIP_COMPANY_ID}/agents`,
    { headers: paperclipHeaders(), signal: AbortSignal.timeout(10000) },
  );
  if (!res.ok) throw new Error(`Agents fetch failed: ${res.status}`);
  return res.json();
}

async function fetchActiveIssue(agentId) {
  // Get the most recent in_progress issue for this agent
  const res = await fetch(
    `${PAPERCLIP_API_URL}/api/companies/${PAPERCLIP_COMPANY_ID}/issues?assigneeAgentId=${agentId}&status=in_progress`,
    { headers: paperclipHeaders(), signal: AbortSignal.timeout(8000) },
  );
  if (!res.ok) return null;
  const issues = await res.json();
  if (!Array.isArray(issues) || issues.length === 0) return null;
  // Return the first (highest priority) in-progress issue
  return issues[0];
}

// ── Main snapshot logic ─────────────────────────────────────────────────────

async function buildSnapshot() {
  if (!PAPERCLIP_COMPANY_ID) throw new Error('PAPERCLIP_COMPANY_ID is not set');

  console.log('[publisher] Fetching agents…');
  const agents = await fetchAgents();
  console.log(`[publisher] Got ${agents.length} agents`);

  // Fetch active issues for running agents in parallel (max 5 concurrent)
  const runningAgents = agents.filter(a => a.status === 'running');
  console.log(`[publisher] ${runningAgents.length} agents currently running, fetching their tasks…`);

  const issueResults = await Promise.all(
    runningAgents.map(async (agent) => {
      try {
        const issue = await fetchActiveIssue(agent.id);
        return { agentId: agent.id, issue };
      } catch (err) {
        console.warn(`[publisher] Failed to fetch issue for ${agent.name}:`, err.message);
        return { agentId: agent.id, issue: null };
      }
    })
  );

  const issueByAgent = Object.fromEntries(
    issueResults.map(r => [r.agentId, r.issue])
  );

  // Collect all task titles for batch Presidio scrubbing
  const taskTitles = agents.map(agent => {
    const issue = issueByAgent[agent.id];
    return (issue && agent.status === 'running') ? issue.title : null;
  });

  console.log(`[publisher] Scrubbing ${taskTitles.filter(Boolean).length} task texts with Presidio…`);
  const scrubbed = await scrubBatch(taskTitles);

  // Build sanitized agent snapshots
  const agentSnapshots = agents.map((agent, i) => {
    const issue = issueByAgent[agent.id];
    const rawTitle = (issue && agent.status === 'running') ? issue.title : null;

    // Only expose safe fields — never raw description, comments, or IDs that could leak info
    return {
      id: agent.id,
      name: agent.name || agent.role,
      role: agent.role,
      status: agent.status, // running | idle | error
      currentTask: rawTitle ? (scrubbed[i] || rawTitle) : null,
      currentIssueId: (issue && agent.status === 'running') ? issue.id : null,
      currentIssueIdentifier: (issue && agent.status === 'running') ? issue.identifier : null,
    };
  });

  return {
    agents: agentSnapshots,
    updatedAt: new Date().toISOString(),
    companyId: PAPERCLIP_COMPANY_ID,
  };
}

async function pushSnapshot(snapshot) {
  if (!OFFICE_UPDATE_SECRET) throw new Error('OFFICE_UPDATE_SECRET is not set');

  console.log(`[publisher] Pushing snapshot (${snapshot.agents.length} agents) to ${OFFICE_WORKER_URL}…`);
  const res = await fetch(OFFICE_WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Office-Update-Secret': OFFICE_UPDATE_SECRET,
    },
    body: JSON.stringify(snapshot),
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Push failed (${res.status}): ${body}`);
  }

  const result = await res.json();
  console.log(`[publisher] Push OK — ${result.agents} agents stored`);
  return result;
}

async function runOnce() {
  try {
    const snapshot = await buildSnapshot();
    await pushSnapshot(snapshot);
  } catch (err) {
    console.error('[publisher] Error:', err.message);
    process.exitCode = 1;
  }
}

async function watch() {
  console.log(`[publisher] Starting watch loop (interval: ${INTERVAL_MS}ms)`);
  await runOnce();
  setInterval(runOnce, INTERVAL_MS);
}

// ── Entry ───────────────────────────────────────────────────────────────────

const watchMode = process.argv.includes('--watch');
if (watchMode) {
  watch();
} else {
  runOnce().then(() => {
    if (process.exitCode !== 1) console.log('[publisher] Done.');
  });
}
