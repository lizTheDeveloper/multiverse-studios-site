export interface GameProduct {
  game: string;
  icon: string;
  downloadUrl: string;
  version: string;
}

// Maps Stripe product IDs to game metadata.
// Product IDs are env-configured so they can be rotated without code changes.
// Falls back to a stable placeholder key so the entry still exists when the
// env var is not set (useful in dev / CI without real Stripe IDs).
export const PRODUCTS: Record<string, GameProduct> = {
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
export const NAME_PATTERNS: Array<{ key: string; pattern: RegExp }> = [
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
export function resolveProduct(
  productId: string | null | undefined,
  description: string | null | undefined,
): GameProduct | undefined {
  // Exact product-ID match first.
  if (productId && Object.prototype.hasOwnProperty.call(PRODUCTS, productId)) {
    return PRODUCTS[productId];
  }

  // Fuzzy name match on description as fallback.
  if (description) {
    for (const { key, pattern } of NAME_PATTERNS) {
      if (pattern.test(description)) {
        return PRODUCTS[key];
      }
    }
  }

  return undefined;
}
