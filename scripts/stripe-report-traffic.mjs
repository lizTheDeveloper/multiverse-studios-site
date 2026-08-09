#!/usr/bin/env node
// stripe-report-traffic.mjs
// Classifies Stripe Checkout sessions as real-user vs test/agent traffic
// and prints a clean conversion-rate report.
//
// Usage:
//   STRIPE_SECRET_KEY=sk_live_... node scripts/stripe-report-traffic.mjs [--days N]
//
// Classification rules (first match wins):
//   1. metadata.traffic_type === 'test'          -> test
//   2. metadata.traffic_type === 'real_user'     -> real
//   3. client_reference_id matches test pattern  -> test
//   4. customer_email matches test pattern       -> test
//   5. (unseen / no signal)                      -> real (conservative default)
//
// Env:
//   STRIPE_SECRET_KEY  — required; sk_live_xxx or sk_test_xxx

const STRIPE_URL = 'https://api.stripe.com/v1/checkout/sessions';
const DEFAULT_DAYS = 365;

// Known test-session identifier patterns (client_reference_id or customer_email)
const TEST_ID_PATTERNS = [
  /^test[_-]/i,           // test_verify_stripe, test-playwright-*, test_audit_bob
  /^deploy[_-]/i,         // deploy-verify
  /^smoke[_-]/i,          // smoke-test-user
  /^verify[_-]/i,         // verify-deploy
  /^ci[_-]/i,             // ci-*
  /^bot[_-]/i,            // bot-*
  /^agent[_-]/i,          // agent-*
  /playwright/i,
  /puppeteer/i,
  /headless/i,
];

function isTestSession(session) {
  const meta = session.metadata || {};

  // Explicit tag (authoritative)
  if (meta.traffic_type === 'test') return true;
  if (meta.traffic_type === 'real_user') return false;

  // Heuristic: reference id / email pattern match
  const refId = session.client_reference_id || '';
  const email = session.customer_details?.email || session.customer_email || '';
  const probe = `${refId} ${email}`.toLowerCase();

  for (const pat of TEST_ID_PATTERNS) {
    if (pat.test(probe)) return true;
  }
  return false;
}

async function fetchAllSessions(secretKey, since) {
  const all = [];
  let startingAfter = null;
  let page = 0;
  const limit = 100;

  while (true) {
    page++;
    const params = new URLSearchParams({ limit: String(limit) });
    if (since) params.set('created[gte]', String(since));
    if (startingAfter) params.set('starting_after', startingAfter);

    const res = await fetch(`${STRIPE_URL}?${params}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Stripe API ${res.status}: ${body}`);
    }
    const json = await res.json();
    const sessions = json.data || [];
    all.push(...sessions);

    if (!json.has_more || sessions.length === 0) break;
    startingAfter = sessions[sessions.length - 1].id;
  }
  return all;
}

function buildReport(sessions) {
  const real = [];
  const test = [];
  for (const s of sessions) {
    (isTestSession(s) ? test : real).push(s);
  }

  const realCompleted = real.filter(
    (s) => s.payment_status === 'paid' || s.status === 'complete',
  );

  const realConversion =
    real.length > 0 ? (realCompleted.length / real.length) * 100 : 0;

  return { real, test, realCompleted, realConversion };
}

function printReport(sessions, days, report) {
  const { real, test, realCompleted, realConversion } = report;
  console.log('');
  console.log('='.repeat(62));
  console.log(`  Stripe Traffic Report  (last ${days} days, ${sessions.length} sessions)`);
  console.log('='.repeat(62));
  console.log(`  Total sessions:         ${sessions.length}`);
  console.log(`  Real user sessions:     ${real.length}`);
  console.log(`  Test/agent sessions:    ${test.length}`);
  console.log('-'.repeat(62));
  console.log(`  Real completed:        ${realCompleted.length}`);
  console.log(`  Real conversion rate:   ${realConversion.toFixed(2)}%`);
  console.log('='.repeat(62));
  console.log('');

  if (test.length > 0) {
    const buckets = {};
    for (const s of test) {
      const refId = s.client_reference_id || '(none)';
      buckets[refId] = (buckets[refId] || 0) + 1;
    }
    console.log('Top test identifiers:');
    for (const [k, v] of Object.entries(buckets).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
      console.log(`  ${k.padEnd(40)} ${v}`);
    }
    console.log('');
  }

  console.log('Filter on Stripe Dashboard or CLI:');
  console.log('  metadata["traffic_type"]:"real_user"');
  console.log('  OR exclude metadata["traffic_type"]:"test"');
  console.log('');
}

async function main() {
  const args = process.argv.slice(2);
  let days = DEFAULT_DAYS;
  const daysIdx = args.indexOf('--days');
  if (daysIdx >= 0 && args[daysIdx + 1]) days = parseInt(args[daysIdx + 1], 10);

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY is required.');
    process.exit(2);
  }

  const since = Math.floor(Date.now() / 1000) - days * 86400;
  console.log(`Fetching sessions since ${new Date(since * 1000).toISOString().slice(0, 10)}...`);
  const sessions = await fetchAllSessions(secretKey, since);
  const report = buildReport(sessions);
  printReport(sessions, days, report);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
