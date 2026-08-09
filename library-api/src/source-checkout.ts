import { Router, Request, Response } from 'express';
import { resolveSession } from './matrix-auth.js';
import { getStripe } from './stripe.js';

export const sourceCheckoutRouter = Router();

const SOURCE_TIERS: Record<string, { amountCents: number; label: string }> = {
  individual: { amountCents: 100_000, label: 'Individual License' },
  studio: { amountCents: 10_000_000, label: 'Studio License' },
  education: { amountCents: 35_000, label: 'Education License' },
};

const PRECURSORS_PRODUCT_ID = 'prod_U6nrcGVsgjxjh3';

sourceCheckoutRouter.post('/checkout', async (req: Request, res: Response) => {
  const session = resolveSession(req);
  if (!session) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }

  const { game, tier, giteaUsername } = req.body as {
    game?: string;
    tier?: string;
    giteaUsername?: string;
  };

  if (game !== 'precursors') {
    res.status(400).json({ error: 'Only precursors source licenses are available' });
    return;
  }

  if (!tier || !(tier in SOURCE_TIERS)) {
    res.status(400).json({ error: `tier must be one of: ${Object.keys(SOURCE_TIERS).join(', ')}` });
    return;
  }

  const tierConfig = SOURCE_TIERS[tier];
  const stripe = getStripe();

  try {
    const metadata = {
      game,
      tier,
      source: 'source_checkout',
      traffic_type: 'real_user',
      matrix_user_id: session.userId,
      gitea_username: typeof giteaUsername === 'string' ? giteaUsername.slice(0, 200) : '',
    };

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_creation: 'always',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product: PRECURSORS_PRODUCT_ID,
            unit_amount: tierConfig.amountCents,
          },
          quantity: 1,
        },
      ],
      metadata,
      payment_intent_data: { metadata },
      success_url: 'https://multiversestudios.xyz/thank-you.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://multiversestudios.xyz/courses/precursors.html',
      expires_at: Math.floor(Date.now() / 1000) + 1800,
      after_expiration: {
        recovery: { enabled: true, allow_promotion_codes: false },
      },
    });

    res.json({ url: checkoutSession.url });
  } catch (err) {
    console.error('source checkout error:', err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
