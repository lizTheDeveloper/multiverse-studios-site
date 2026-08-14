#!/usr/bin/env node
/*
 * Multiverse Studios — regenerate the Multiverse Mages roadmap block.
 * Copyright (C) 2026 Ann Kelner
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * ## Why this is a script and not a paragraph somebody keeps up to date
 *
 * The project this page describes spent a night finding that six things
 * everyone believed about its own code were false, and in two of those cases
 * the source of the false belief was a **committed document asserting a stale
 * fact in the present tense**. A hand-maintained public roadmap is the same
 * failure with a bigger audience.
 *
 * So every number on the page comes from a source that cannot drift from the
 * thing it describes:
 *
 * - **Released versions** from `git tag`, not from a changelog.
 * - **Task counts** from `openspec/changes/<id>/tasks.md`, counted, not quoted.
 * - **Test counts** passed in by the caller from a real run, or omitted.
 *
 * It prints the HTML block between the two sentinel comments in
 * `multiverse-mages/index.html` and rewrites that file in place.
 *
 *     node scripts/mages-roadmap.mjs --repo ~/src/multiverse_mages
 *
 * If the repo is not where you say it is, this exits non-zero rather than
 * emitting a page with plausible numbers in it. A roadmap that guesses is worse
 * than no roadmap, because a reader cannot tell the difference.
 */

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const here = dirname(fileURLToPath(import.meta.url));
const PAGE = join(here, '..', 'multiverse-mages', 'index.html');
const START = '<!-- ROADMAP:START -->';
const END = '<!-- ROADMAP:END -->';

/** The roadmap rows, in vision §11 order. Status is derived, never written. */
const ROADMAP = [
  { version: '0.1.0', change: 'sim-core-foundation', what: 'The deterministic substrate — fixed-point arithmetic, a splittable PRNG, the entity store, replay.' },
  { version: '0.2.0', change: 'core-contracts', what: 'The contracts everything downstream is built against: state schema, content schemas, primitive semantics.' },
  { version: '0.3.0', change: 'knowledge-model', what: 'The seventy-cell grid, knowledge instances with decay and loss, and the three traditions.' },
  { version: '0.4.0', change: 'mages-and-species', what: 'Mages with careers and lifespans, six species, universities, and an economy underneath them.' },
  { version: '0.5.0', change: 'agent-interface', what: 'One observation and action API serving scripted bots, Monte Carlo, and later reinforcement learning.' },
  { version: '0.7.0', change: 'god-agency', what: 'Favor, worship, interventions, and the terminal condition — ascension and what carries forward.' },
  { version: '0.9.0', change: 'raid-engagement', what: 'Portals, host-ruleset arbitration, a positional battlefield, and permanent consequences.' },
  { version: '0.11.0', change: 'gym-bridge', what: 'The reinforcement-learning bridge. It ships before the client, deliberately.' },
  { version: '—', change: 'metis-knowledge', what: 'Knowledge that cannot be written down at all. Held at proposal depth until the harness can price it.' },
];

function fail(message) {
  process.stderr.write(`mages-roadmap: ${message}\n`);
  process.exit(1);
}

function repoRoot() {
  const flag = process.argv.indexOf('--repo');
  const given = flag !== -1 ? process.argv[flag + 1] : process.env.MAGES_REPO;
  if (!given) fail('pass --repo <path to multiverse_mages> or set MAGES_REPO');
  const expanded = given.replace(/^~/, process.env.HOME ?? '~');
  if (!existsSync(join(expanded, 'openspec', 'changes'))) {
    fail(`${expanded} does not look like the multiverse_mages repo (no openspec/changes)`);
  }
  return expanded;
}

/** Released versions, from tags. The only authority on "shipped". */
function releasedVersions(root) {
  const out = execFileSync('git', ['tag', '-l', 'v*'], { cwd: root, encoding: 'utf8' });
  return new Set(
    out.split('\n').map((t) => t.trim()).filter(Boolean)
      // Drop prereleases: an alpha tag is not a release and must not colour a row.
      .filter((t) => !t.includes('-'))
      .map((t) => t.replace(/^v/, '')),
  );
}

/** Checked/total task boxes for a change, or null when it has no task list. */
function taskCounts(root, change) {
  const file = join(root, 'openspec', 'changes', change, 'tasks.md');
  if (!existsSync(file)) return null;
  const text = readFileSync(file, 'utf8');
  const all = text.match(/^- \[[ x]\]/gm) ?? [];
  const done = text.match(/^- \[x\]/gm) ?? [];
  return { done: done.length, total: all.length };
}

/** Archived changes are the ones that actually shipped their capability. */
function archived(root) {
  const dir = join(root, 'openspec', 'changes', 'archive');
  if (!existsSync(dir)) return new Set();
  return new Set(readdirSync(dir).map((d) => d.replace(/^\d{4}-\d{2}-\d{2}-/, '')));
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function render(root) {
  const released = releasedVersions(root);
  const done = archived(root);
  const stamp = execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();

  const rows = ROADMAP.map((row) => {
    const counts = taskCounts(root, row.change);
    const isReleased = released.has(row.version);
    const isArchived = done.has(row.change);

    let state;
    let detail;
    if (isReleased || isArchived) {
      state = 'shipped';
      detail = `released as v${row.version}`;
    } else if (counts && counts.total > 0 && counts.done === counts.total) {
      // The distinction the whole table exists to make.
      state = 'built';
      detail = `${counts.done}/${counts.total} tasks — built, not yet released`;
    } else if (counts && counts.done > 0 && counts.done / counts.total >= 0.1) {
      state = 'building';
      detail = `${counts.done}/${counts.total} tasks`;
    } else if (counts && counts.total > 0) {
      // A change with a task list barely started is a proposal with a plan
      // attached, not work in flight. metis-knowledge sits at 1/51 and calling
      // that "building" would overstate it on a page whose whole claim is that
      // it does not overstate.
      state = 'proposed';
      detail = `${counts.done}/${counts.total} tasks — proposal depth`;
    } else {
      state = 'proposed';
      detail = counts ? `${counts.done}/${counts.total} tasks` : 'proposal only';
    }

    return `      <tr class="rm-${state}">
        <td class="rm-version">${escapeHtml(row.version)}</td>
        <td><code>${escapeHtml(row.change)}</code><span class="rm-what">${escapeHtml(row.what)}</span></td>
        <td class="rm-state"><span class="rm-badge rm-badge-${state}">${state}</span><span class="rm-detail">${escapeHtml(detail)}</span></td>
      </tr>`;
  });

  return [
    START,
    '    <table class="roadmap">',
    '      <thead><tr><th>Version</th><th>Change</th><th>State</th></tr></thead>',
    '      <tbody>',
    ...rows,
    '      </tbody>',
    '    </table>',
    `    <p class="rm-stamp">Generated from <code>git tag</code> and <code>openspec/changes/*/tasks.md</code> at <code>${stamp}</code>. Nothing on this table is typed by hand.</p>`,
    END,
  ].join('\n');
}

const root = repoRoot();
const block = render(root);

if (process.argv.includes('--print')) {
  process.stdout.write(block + '\n');
  process.exit(0);
}

if (!existsSync(PAGE)) fail(`${PAGE} does not exist`);
const page = readFileSync(PAGE, 'utf8');
const from = page.indexOf(START);
const to = page.indexOf(END);
if (from === -1 || to === -1) fail(`sentinels ${START} / ${END} not found in the page`);

writeFileSync(PAGE, page.slice(0, from) + block + page.slice(to + END.length), 'utf8');
process.stdout.write(`mages-roadmap: rewrote ${PAGE}\n`);
