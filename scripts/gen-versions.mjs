#!/usr/bin/env node
/* gen-versions.mjs — bake same-origin /versions.json at deploy time.
 *
 * The homepage version badges used to fetch each game's build-info directly
 * from play.multiversestudios.xyz in the browser, which is cross-origin and was
 * blocked by CORS (no Access-Control-Allow-Origin header). Server-to-server
 * requests are not subject to CORS, so we fetch the versions here in CI and
 * write a same-origin versions.json that main.js reads with no CORS wall.
 *
 * Keys must match the slug substrings used by main.js to find the badge
 * elements (data-umami-event*="<slug>" / data-umami-skip*="<slug>").
 * A game whose fetch fails is simply omitted -> main.js keeps its hardcoded
 * data-label fallback for that game. Never throws on a fetch failure; the file
 * is always written (possibly partial) so the deploy proceeds.
 *
 * Usage: node scripts/gen-versions.mjs [siteRoot]   (default: cwd)
 */
import { writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const siteRoot = resolve(process.argv[2] || process.cwd());
const BASE = 'https://play.multiversestudios.xyz';
const GAMES = [
  { slug: 'precursors', path: '/precursors/api/build-info' },
  { slug: 'tsb',        path: '/the-spaces-between/api/build-info' },
  { slug: 'mvee',       path: '/mvee/api/build-info' },
  { slug: 'nel',        path: '/neverland/api/build-info' },
  { slug: 'cotb',       path: '/cultures-of-the-belt/api/build-info' },
  { slug: 'breach',     path: '/breach/api/build-info' },
];

const TIMEOUT_MS = 8000;

async function fetchVersion(game) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(BASE + game.path, { signal: ctrl.signal });
    if (!res.ok) return null;
    const info = await res.json();
    const v = info && info.version;
    return v && v !== 'unknown' ? String(v) : null;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

const versions = {};
await Promise.all(GAMES.map(async (g) => {
  const v = await fetchVersion(g);
  if (v) versions[g.slug] = v;
  console.log(`gen-versions: ${g.slug} -> ${v || 'unavailable (fallback kept)'}`);
}));

const outPath = join(siteRoot, 'versions.json');
writeFileSync(outPath, JSON.stringify(versions, null, 2) + '\n');
console.log(`gen-versions: wrote ${outPath} with ${Object.keys(versions).length} game(s)`);
