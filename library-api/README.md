# Multiverse Studios — Library API

REST service that lets returning customers look up game purchases by email via the Stripe API.

## Endpoints

### `POST /library/lookup`

**Request**
```json
{ "email": "customer@example.com" }
```

**Response**
```json
{
  "purchases": [
    {
      "game": "Precursors: Origins of Folklore",
      "icon": "🐾",
      "downloadUrl": "https://github.com/lizTheDeveloper/creatures_next/releases/latest",
      "version": "beta-0.1",
      "purchasedAt": "2025-11-01T14:32:00.000Z"
    }
  ]
}
```

Returns an empty `purchases` array (not a 404) when no purchases are found.

### `GET /health`

Returns `{ "status": "ok" }`.

---

## Local development

```bash
cp .env.example .env
# fill in your STRIPE_SECRET_KEY and product IDs

npm install
npm run dev       # tsx watch — auto-reloads on save
```

Service runs on `http://localhost:4000` by default.

---

## Configuration

| Variable | Required | Description |
|---|---|---|
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key (`sk_live_…` or `sk_test_…`) |
| `STRIPE_PRODUCT_CREATURES_NEXT` | No | Stripe product ID for Precursors |
| `STRIPE_PRODUCT_MVEE` | No | Stripe product ID for MVEE |
| `PORT` | No | Port to listen on (default: `4000`) |
| `ALLOWED_ORIGIN` | No | CORS origin (default: `https://multiversestudios.xyz`) |

---

## Production deployment

The service routes through Traefik on the existing Hetzner Coolify server at:

```
https://api.multiversestudios.xyz/library/*
```

No new DNS record is required — this is path-based routing on the existing `api` subdomain.

**Build and deploy:**
```bash
docker compose up -d --build
```

Make sure a `.env` file (not `.env.example`) is present alongside `docker-compose.yml` before deploying.

---

## How purchase lookup works

1. `stripe.customers.search` finds all Stripe customer records for the email.
2. For each customer, all succeeded charges and payment intents are fetched.
3. Product matching uses (in priority order):
   - `charge.metadata.product_id` → exact key in the `PRODUCTS` map
   - Invoice line-item product IDs (for checkout / subscription flows)
   - Payment intent metadata `product_id`
   - Description fuzzy-match against known game name patterns
4. Results are deduplicated per game; only the most recent purchase date is kept.
5. Stripe customer IDs and all other sensitive data are stripped before the response leaves the server.
