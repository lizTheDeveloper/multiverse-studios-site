"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupPurchasesByEmail = lookupPurchasesByEmail;
const stripe_1 = __importDefault(require("stripe"));
const products_js_1 = require("./products.js");
let _stripe = null;
function getStripe() {
    if (!_stripe) {
        const key = process.env.STRIPE_SECRET_KEY;
        if (!key) {
            throw new Error('STRIPE_SECRET_KEY is not set');
        }
        _stripe = new stripe_1.default(key, { apiVersion: '2023-10-16' });
    }
    return _stripe;
}
/**
 * Collect all succeeded charges for a single Stripe customer.
 * Tries both charges and payment intents so we cover all charge paths.
 */
async function getSucceededChargesForCustomer(stripe, customerId) {
    const results = [];
    // Fetch charges directly attached to the customer.
    for await (const charge of stripe.charges.list({
        customer: customerId,
        limit: 100,
    })) {
        if (charge.status === 'succeeded') {
            results.push(charge);
        }
    }
    // Also walk payment intents — they carry richer metadata and cover
    // situations where the charge was created via a PaymentIntent.
    for await (const pi of stripe.paymentIntents.list({
        customer: customerId,
        limit: 100,
    })) {
        if (pi.status === 'succeeded' && pi.latest_charge) {
            // Avoid double-counting charges we already fetched above.
            const chargeId = typeof pi.latest_charge === 'string'
                ? pi.latest_charge
                : pi.latest_charge.id;
            const alreadySeen = results.some((c) => c.id === chargeId);
            if (!alreadySeen) {
                // Retrieve the full charge object so we have metadata + description.
                const charge = await stripe.charges.retrieve(chargeId);
                if (charge.status === 'succeeded') {
                    results.push(charge);
                }
            }
            else {
                // Merge payment-intent metadata onto the charge so product_id set
                // on the PI is visible when resolving products.
                const existing = results.find((c) => c.id === chargeId);
                if (existing && pi.metadata) {
                    existing.metadata = { ...pi.metadata, ...existing.metadata };
                }
            }
        }
    }
    return results;
}
/**
 * Given a charge, attempt to extract a product identifier from metadata or
 * from the line items of the associated invoice.
 */
async function resolveProductFromCharge(stripe, charge) {
    // 1. Direct product_id on charge metadata.
    const directId = charge.metadata?.product_id;
    const fromMeta = (0, products_js_1.resolveProduct)(directId, charge.description);
    if (fromMeta)
        return fromMeta;
    // 2. Walk invoice line items (common for subscription / link checkouts).
    if (charge.invoice) {
        const invoiceId = typeof charge.invoice === 'string' ? charge.invoice : charge.invoice.id;
        try {
            const invoice = await stripe.invoices.retrieve(invoiceId, {
                expand: ['lines.data.price.product'],
            });
            for (const line of invoice.lines.data) {
                const price = line.price;
                if (price && typeof price.product === 'object' && price.product !== null) {
                    const product = price.product;
                    const match = (0, products_js_1.resolveProduct)(product.id, product.name);
                    if (match)
                        return match;
                }
                else if (price && typeof price.product === 'string') {
                    const match = (0, products_js_1.resolveProduct)(price.product, line.description);
                    if (match)
                        return match;
                }
            }
        }
        catch {
            // Invoice retrieval is best-effort; continue with other signals.
        }
    }
    // 3. Expand payment intent metadata if available.
    if (charge.payment_intent) {
        const piId = typeof charge.payment_intent === 'string'
            ? charge.payment_intent
            : charge.payment_intent.id;
        try {
            const pi = await stripe.paymentIntents.retrieve(piId);
            const fromPiMeta = (0, products_js_1.resolveProduct)(pi.metadata?.product_id, pi.description);
            if (fromPiMeta)
                return fromPiMeta;
        }
        catch {
            // Best-effort.
        }
    }
    return undefined;
}
/**
 * Look up all game purchases for a given email address.
 * Returns a deduplicated list, keeping the most recent purchase date per game.
 */
async function lookupPurchasesByEmail(email) {
    const stripe = getStripe();
    // Find all customers with this email (there may be more than one).
    const customerSearch = await stripe.customers.search({
        query: `email:'${email}'`,
        limit: 10,
    });
    // Map: game name → best PurchaseRecord (most recent purchasedAt).
    const best = new Map();
    for (const customer of customerSearch.data) {
        const charges = await getSucceededChargesForCustomer(stripe, customer.id);
        for (const charge of charges) {
            const product = await resolveProductFromCharge(stripe, charge);
            if (!product)
                continue;
            const purchasedAt = new Date(charge.created * 1000).toISOString();
            const existing = best.get(product.game);
            if (!existing || purchasedAt > existing.purchasedAt) {
                best.set(product.game, {
                    game: product.game,
                    icon: product.icon,
                    downloadUrl: product.downloadUrl,
                    version: product.version,
                    purchasedAt,
                });
            }
        }
    }
    // Sort by most recently purchased first.
    return Array.from(best.values()).sort((a, b) => b.purchasedAt.localeCompare(a.purchasedAt));
}
