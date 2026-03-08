"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAME_PATTERNS = exports.PRODUCTS = void 0;
exports.resolveProduct = resolveProduct;
// Maps Stripe product IDs to game metadata.
// Product IDs are env-configured so they can be rotated without code changes.
// Falls back to a stable placeholder key so the entry still exists when the
// env var is not set (useful in dev / CI without real Stripe IDs).
exports.PRODUCTS = {
    [process.env.STRIPE_PRODUCT_CREATURES_NEXT ?? 'creatures_next']: {
        game: 'Precursors: Origins of Folklore',
        icon: '🐾',
        downloadUrl: 'https://github.com/lizTheDeveloper/creatures_next/releases/latest',
        version: 'beta-0.1',
    },
    [process.env.STRIPE_PRODUCT_MVEE ?? 'mvee']: {
        game: 'Multiverse: The End of Eternity',
        icon: '🌌',
        downloadUrl: 'https://github.com/lizTheDeveloper/ai_village/releases/latest',
        version: 'beta-0.1',
    },
};
// Name fragments used for fuzzy matching against charge descriptions when no
// product_id metadata is present. Keys must match a key in PRODUCTS above.
exports.NAME_PATTERNS = [
    {
        key: process.env.STRIPE_PRODUCT_CREATURES_NEXT ?? 'creatures_next',
        pattern: /precursors|creatures.next|origins.of.folklore/i,
    },
    {
        key: process.env.STRIPE_PRODUCT_MVEE ?? 'mvee',
        pattern: /multiverse.*eternity|end.of.eternity|mvee/i,
    },
];
/**
 * Resolve a Stripe product ID or a free-text description to a GameProduct.
 * Returns undefined if nothing matches.
 */
function resolveProduct(productId, description) {
    // Exact product-ID match first.
    if (productId && Object.prototype.hasOwnProperty.call(exports.PRODUCTS, productId)) {
        return exports.PRODUCTS[productId];
    }
    // Fuzzy name match on description as fallback.
    if (description) {
        for (const { key, pattern } of exports.NAME_PATTERNS) {
            if (pattern.test(description)) {
                return exports.PRODUCTS[key];
            }
        }
    }
    return undefined;
}
