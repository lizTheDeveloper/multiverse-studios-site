#!/usr/bin/env node
/**
 * Link Checker for multiversestudios.xyz
 *
 * Crawls all pages on the site, extracts internal links, checks each for 404s,
 * and optionally files emergency Paperclip issues when broken links are found.
 *
 * Usage:
 *   node scripts/link-checker.js                       # Check only, print results
 *   PAPERCLIP_FILE_ISSUES=1 node scripts/link-checker.js  # Check + file issues
 *
 * Env vars (for issue filing):
 *   PAPERCLIP_API_URL, PAPERCLIP_API_KEY, PAPERCLIP_COMPANY_ID
 *   PAPERCLIP_ASSIGNEE_AGENT_ID  — agent to assign emergency issues to (CEO)
 */

const https = require("https");
const http = require("http");
const { URL } = require("url");

const BASE_URL = process.env.SITE_URL || "https://multiversestudios.xyz";
const PLAY_URL = "https://play.multiversestudios.xyz";
const OUR_DOMAINS = ["multiversestudios.xyz", "play.multiversestudios.xyz"];
const TIMEOUT_MS = 15000;
const MAX_CONCURRENT = 5;

// Pages to crawl for links
const SEED_PAGES = [
  "/",
  "/mvee.html",
  "/about.html",
  "/press.html",
  "/nevereverland.html",
  "/cotb.html",
  "/precursors.html",
  "/community.html",
  "/playtest.html",
  "/devlog.html",
  "/feedback.html",
  "/library.html",
  "/creatures.html",
  "/field-notes.html",
  "/radio/",
  "/wiki/",
  "/office/",
  "/akashic/",
  "/frequency/",
];

function fetch(url, method = "GET") {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request(
      u,
      { method, timeout: TIMEOUT_MS, headers: { "User-Agent": "MultiverseLinkChecker/1.0" } },
      (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          const next = new URL(res.headers.location, url).toString();
          return fetch(next, method).then(resolve).catch(reject);
        }
        let body = "";
        res.on("data", (d) => (body += d));
        res.on("end", () => resolve({ status: res.statusCode, body }));
      }
    );
    req.on("error", (e) => reject(e));
    req.on("timeout", () => { req.destroy(); reject(new Error("timeout")); });
    req.end();
  });
}

function extractLinks(html, pageUrl) {
  const links = new Set();
  const re = /href=["']([^"'#]+?)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1].trim();
    if (!href || /^(javascript:|mailto:|tel:|data:)/.test(href)) continue;
    try {
      const resolved = new URL(href, pageUrl).toString();
      links.add(resolved);
    } catch {
      // skip malformed
    }
  }
  return links;
}

function isOurDomain(url) {
  try {
    const host = new URL(url).hostname;
    return OUR_DOMAINS.some((d) => host === d || host.endsWith("." + d));
  } catch {
    return false;
  }
}

async function checkUrl(url) {
  try {
    const { status } = await fetch(url, "HEAD").catch(() => fetch(url, "GET"));
    return { url, status, ok: status >= 200 && status < 400 };
  } catch (e) {
    return { url, status: 0, ok: false, error: e.message };
  }
}

async function runPool(items, fn, concurrency) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

async function fileEmergencyIssue(brokenLinks) {
  const apiUrl = process.env.PAPERCLIP_API_URL;
  const apiKey = process.env.PAPERCLIP_API_KEY;
  const companyId = process.env.PAPERCLIP_COMPANY_ID;
  const assigneeId = process.env.PAPERCLIP_ASSIGNEE_AGENT_ID;
  if (!apiUrl || !apiKey || !companyId) {
    console.error("Missing PAPERCLIP env vars — cannot file issue");
    return;
  }

  const linkList = brokenLinks
    .map((b) => `- **${b.url}** → HTTP ${b.status} (linked from ${b.source})`)
    .join("\n");

  const body = JSON.stringify({
    title: `🚨 EMERGENCY: ${brokenLinks.length} broken link(s) on multiversestudios.xyz`,
    description: `Automated link checker found broken links on the live site.\n\n## Broken Links\n${linkList}\n\n## Action Required\nFix these links immediately. Every 404 is a lost visitor.`,
    priority: "critical",
    status: "todo",
    ...(assigneeId && { assigneeAgentId: assigneeId }),
  });

  const url = new URL(`/api/companies/${companyId}/issues`, apiUrl);
  return new Promise((resolve, reject) => {
    const mod = url.protocol === "https:" ? https : http;
    const req = mod.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const issue = JSON.parse(d);
            console.log(`Filed emergency issue: ${issue.identifier}`);
            resolve(issue);
          } else {
            console.error(`Failed to file issue: HTTP ${res.statusCode} — ${d}`);
            reject(new Error(d));
          }
        });
      }
    );
    req.on("error", reject);
    req.end(body);
  });
}

async function main() {
  console.log(`Link checker starting — ${new Date().toISOString()}`);
  console.log(`Base: ${BASE_URL}\n`);

  const checked = new Set();
  const brokenLinks = [];

  // Crawl seed pages and collect internal links
  const allLinks = new Map(); // url → source page

  for (const path of SEED_PAGES) {
    const pageUrl = `${BASE_URL}${path}`;
    try {
      const { status, body } = await fetch(pageUrl);
      if (status === 404) {
        console.log(`SEED PAGE 404: ${pageUrl}`);
        brokenLinks.push({ url: pageUrl, status: 404, source: "seed-list" });
        continue;
      }
      const links = extractLinks(body, pageUrl);
      for (const link of links) {
        if (isOurDomain(link) && !allLinks.has(link)) {
          allLinks.set(link, path);
        }
      }
    } catch (e) {
      console.error(`Error crawling ${pageUrl}: ${e.message}`);
    }
  }

  console.log(`Found ${allLinks.size} unique internal links to check\n`);

  // Check all links
  const entries = [...allLinks.entries()];
  const results = await runPool(
    entries,
    async ([url, source]) => {
      const result = await checkUrl(url);
      return { ...result, source };
    },
    MAX_CONCURRENT
  );

  for (const r of results) {
    if (!r.ok) {
      console.log(`BROKEN: ${r.url} → HTTP ${r.status} (from ${r.source})`);
      brokenLinks.push(r);
    }
  }

  console.log(`\n=== RESULTS ===`);
  console.log(`Checked: ${results.length} links`);
  console.log(`Broken: ${brokenLinks.length}`);

  if (brokenLinks.length > 0) {
    console.log(`\nBroken links:`);
    for (const b of brokenLinks) {
      console.log(`  ${b.url} → ${b.status} (from ${b.source})`);
    }

    if (process.env.PAPERCLIP_FILE_ISSUES === "1") {
      console.log(`\nFiling emergency issue...`);
      await fileEmergencyIssue(brokenLinks);
    }

    process.exit(1);
  } else {
    console.log("All links OK.");
    process.exit(0);
  }
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(2);
});
