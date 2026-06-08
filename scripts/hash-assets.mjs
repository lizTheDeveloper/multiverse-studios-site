#!/usr/bin/env node
/* hash-assets.mjs — content-hash cache-busting for the static marketing site.
 *
 * Rewrites first-party <script src> and <link href> references in every .html
 * file to carry a `?v=<contenthash>` query string derived from the referenced
 * file's bytes. Because the marketing HTML is served uncached (Cloudflare
 * cf-cache-status: DYNAMIC) while .js/.css assets ARE edge-cached, this makes
 * each asset content-addressed: change the file -> hash changes -> new URL ->
 * cache miss -> fresh, with zero purge step. Old query variants stay cached
 * harmlessly, and the single physical file is overwritten in place (so
 * `rsync --delete` is safe — unlike renamed hashed filenames).
 *
 * Runs in CI as a transient transform BEFORE rsync. NOT committed — repo source
 * keeps logical `main.js` etc.
 *
 * - Only first-party, relative/root-absolute .js and .css refs are touched.
 * - Third-party absolute URLs (umami, analytics, stripe, google fonts) and
 *   non-js/css refs (images, svg) are left untouched.
 * - Existing manual `?v=...` strings are normalized to the content hash.
 * - Idempotent: re-running hashes the unchanged asset bytes -> same query.
 * - Fail-closed: throws (non-zero exit) on unexpected errors so CI aborts
 *   before deploying mangled HTML. Unresolved refs are left as-is and counted.
 *
 * Usage: node scripts/hash-assets.mjs [siteRoot]   (default: cwd)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, resolve, extname } from 'node:path';

const siteRoot = resolve(process.argv[2] || process.cwd());
const ATTR_RE = /\b(src|href)=("|')([^"']+)\2/g;
const hashCache = new Map();   // abs asset path -> short hash
let rewritten = 0, unresolved = 0, htmlTouched = 0;
const unresolvedRefs = new Set();

function shortHash(absPath) {
  if (hashCache.has(absPath)) return hashCache.get(absPath);
  const h = createHash('sha256').update(readFileSync(absPath)).digest('hex').slice(0, 10);
  hashCache.set(absPath, h);
  return h;
}

function isFirstPartyAsset(url) {
  if (/^(https?:)?\/\//i.test(url)) return false;     // absolute / protocol-relative
  if (/^(data:|mailto:|tel:|#)/i.test(url)) return false;
  const base = url.split('#')[0].split('?')[0];
  const ext = extname(base).toLowerCase();
  return ext === '.js' || ext === '.css';
}

function resolveAsset(htmlFile, url) {
  const base = url.split('#')[0].split('?')[0];
  const abs = base.startsWith('/') ? join(siteRoot, base) : resolve(dirname(htmlFile), base);
  return existsSync(abs) && statSync(abs).isFile() ? abs : null;
}

function transformHtml(htmlFile) {
  const orig = readFileSync(htmlFile, 'utf8');
  let changed = false;
  const out = orig.replace(ATTR_RE, (match, attr, q, url) => {
    if (!isFirstPartyAsset(url)) return match;
    const abs = resolveAsset(htmlFile, url);
    if (!abs) { unresolved++; unresolvedRefs.add(url); return match; }
    const base = url.split('#')[0].split('?')[0];
    const frag = url.includes('#') ? '#' + url.split('#')[1] : '';
    const next = `${attr}=${q}${base}?v=${shortHash(abs)}${frag}${q}`;
    if (next !== match) { changed = true; rewritten++; }
    return next;
  });
  if (changed) { writeFileSync(htmlFile, out); htmlTouched++; }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (extname(name).toLowerCase() === '.html') transformHtml(p);
  }
}

walk(siteRoot);
console.log(`hash-assets: ${rewritten} refs rewritten across ${htmlTouched} html files; ${unresolved} unresolved refs left as-is`);
if (unresolvedRefs.size) console.log('  unresolved:', [...unresolvedRefs].sort().join(', '));
