# Stripe Test-Traffic Tagging Protocol

> MUL-7289 — Tag and filter agent/test traffic in Stripe checkout sessions

## Problem

97 all-time checkout sessions, most agent-generated (user_ids like `test_verify_stripe`,
`deploy-verify`, `test_audit_bob`, `smoke-test-user`, `test_playwright_*`). Without tagging, the
real conversion rate is unknowable.

## Protocol

Every Stripe Checkout session created by our infrastructure must carry a `traffic_type` metadata
key:

| `traffic_type` value | Meaning                                          |
| -------------------- | ------------------------------------------------ |
| `real_user`          | Session created from a live user interaction     |
| `test`               | Session created by an agent, CI, or smoke test   |

### Worker changes (Stripe PWYC endpoints)

In `create-checkout-session` and `create-checkout-session-embedded` workers, tag sessions
explicitly:

```js
const { game, amount, source_page, customer_email, is_test } = await req.json();

const metadata = {
  game,
  amount_cents: String(amount),
  traffic_type: is_test ? 'test' : 'real_user',
};

const session = await stripe.checkout.sessions.create({
  // ...existing params (line_items, mode, success_url, cancel_url)
  metadata,
  payment_intent_data: { metadata },
  // Optional: prefill email for real users
  ...(customer_email ? { customer_email } : {}),
});
```

### Source-license checkout (`library-api/src/source-checkout.ts`)

Already tagged `traffic_type: 'real_user'` (see this PR). Source-license sessions only happen
through authenticated Matrix users — no test path exists.

### Agents creating test sessions

Agents (Paperclip fleet, CI/CD pipelines, monitoring) that hit the Stripe checkout endpoints for
verification **must** send one of the following signals so the worker can tag `traffic_type: 'test'`:

1. **Preferred:** `"is_test": true` in the JSON body.
2. **Fallback:** set `client_reference_id` (or any user identifier field) to something matching one
   of the known test patterns below.

#### Known test identifier patterns

The traffic-report script uses these heuristics as a fallback when explicit metadata is absent:

- `test_*`, `test-*`
- `deploy-*`, `deploy_*`
- `smoke-*`, `smoke_*`
- `verify-*`, `verify_*`
- `ci-*`, `ci_*`
- `bot-*`, `bot_*`
- `agent-*`, `agent_*`
- contains `playwright`, `puppeteer`, or `headless`

## Reporting

Run the traffic report script to see real vs test session counts and conversion rate:

```bash
STRIPE_SECRET_KEY=sk_live_... node scripts/stripe-report-traffic.mjs [--days 30]
```

### Stripe Dashboard filter

In Stripe Dashboard → Payments → Advanced filters, add:

```
metadata["traffic_type"] equals "real_user"
```

### Stripe API query

```bash
curl 'https://api.stripe.com/v1/checkout/sessions?limit=100' \
  -u sk_live_...: \
  -d 'metadata["traffic_type"]'='real_user'
```

### Stripe CLI query

```bash
stripe checkout_sessions list --limit 100 \
  --metadata-key traffic_type --metadata-value real_user
```

## Acceptance criteria mapping

| Requirement                                      | Satisfied by                                |
| ------------------------------------------------ | ------------------------------------------- |
| Metadata flag to distinguish test/real           | `traffic_type` metadata field               |
| Options for detection                            | Body `is_test`, test ID patterns, metadata  |
| Stripe report excluding test sessions            | `scripts/stripe-report-traffic.mjs`         |
| Filtering criteria documented                    | This document                               |
| Clean conversion rate calculable                 | Report script outputs rate as %             |
