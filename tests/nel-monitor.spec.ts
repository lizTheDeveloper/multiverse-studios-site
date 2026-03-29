import { test, expect } from '@playwright/test';

const SITE = 'https://multiversestudios.xyz';

const STORY_FILES = [
  '0_wendy_breaks_neverland_story.md',
  '1_wendy_breaks_neverland_story.md',
  '2_wendy_breaks_neverland_story.md',
  '3_wendy_breaks_neverland_story.md',
  '4_wendy_breaks_neverland_story.md',
  '5_wendy_breaks_neverland_story.md',
  '6_wendy_breaks_neverland_appendix_the_spreadsheet.md',
];

const STORY_SLUGS = [
  'nightgown',
  'stump',
  'violet',
  'predators',
  'weather',
  'forty-seven',
  'field-notes',
];

// --- Story file availability ---

test.describe('NEL story files return 200', () => {
  for (const file of STORY_FILES) {
    test(`${file} is accessible`, async ({ request }) => {
      const res = await request.get(`/play/neverland/${file}`);
      expect(res.status(), `${file} returned ${res.status()}`).toBe(200);
      const body = await res.text();
      expect(body.length).toBeGreaterThan(100);
    });
  }

  test('opening_peter_pan.md is accessible', async ({ request }) => {
    const res = await request.get('/play/neverland/opening_peter_pan.md');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body.length).toBeGreaterThan(100);
  });

  test('wendy_breaks_neverland.json (Ink story) is accessible', async ({ request }) => {
    const res = await request.get('/play/neverland/wendy_breaks_neverland.json');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body.length).toBeGreaterThan(100);
    expect(() => JSON.parse(body)).not.toThrow();
  });
});

// --- Page load and content visibility ---

test.describe('NEL pages load with visible content', () => {
  test('nevereverland.html loads and has content', async ({ page }) => {
    await page.goto('/nevereverland.html');
    await expect(page).toHaveTitle(/never.*ever.*land|neverland|multiverse/i);
    const body = page.locator('body');
    await expect(body).toBeVisible();
    const text = await body.textContent();
    expect(text!.length).toBeGreaterThan(50);
  });

  test('NEL reader loads opening text', async ({ page }) => {
    await page.goto('/play/neverland/');
    // Wait for the story container to have content (not just the loading message)
    const storyEl = page.locator('#story');
    await expect(storyEl).toBeVisible({ timeout: 15_000 });
    // Wait for actual story content to replace the loading placeholder
    await expect(storyEl).not.toContainText('Charting a new course', { timeout: 15_000 });
    await expect(storyEl).not.toContainText('could not be loaded', { timeout: 5_000 });
    const text = await storyEl.textContent();
    expect(text!.length).toBeGreaterThan(100);
  });

  for (let i = 0; i < STORY_SLUGS.length; i++) {
    const slug = STORY_SLUGS[i];
    test(`chapter "${slug}" (index ${i}) renders story text`, async ({ page }) => {
      await page.goto(`/play/neverland/#${slug}`);
      const storyEl = page.locator('#story');
      await expect(storyEl).toBeVisible({ timeout: 15_000 });
      await expect(storyEl).not.toContainText('Charting a new course', { timeout: 15_000 });
      await expect(storyEl).not.toContainText('could not be loaded', { timeout: 5_000 });
      const text = await storyEl.textContent();
      expect(text!.length).toBeGreaterThan(100);
    });
  }
});

// --- Asset availability ---

test.describe('NEL assets are accessible', () => {
  test('textured_paper.png loads', async ({ request }) => {
    const res = await request.get('/play/neverland/assets/textures/textured_paper.png');
    expect(res.status()).toBe(200);
  });

  test('paper-edge-mask.svg loads', async ({ request }) => {
    const res = await request.get('/play/neverland/assets/masks/paper-edge-mask.svg');
    expect(res.status()).toBe(200);
  });
});

// --- Navigation and theme toggle ---

test.describe('NEL interactive features', () => {
  test('theme toggle switches to moonlit mode', async ({ page }) => {
    await page.goto('/play/neverland/');
    const storyEl = page.locator('#story');
    await expect(storyEl).toBeVisible({ timeout: 15_000 });

    const themeToggle = page.locator('#theme-toggle');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      const body = page.locator('body');
      await expect(body).toHaveAttribute('data-theme', 'moonlit');
    }
  });

  test('chapter navigation works via hash', async ({ page }) => {
    // Load opening
    await page.goto('/play/neverland/');
    const storyEl = page.locator('#story');
    await expect(storyEl).toBeVisible({ timeout: 15_000 });
    await expect(storyEl).not.toContainText('could not be loaded', { timeout: 5_000 });

    // Navigate to first chapter
    await page.goto('/play/neverland/#nightgown');
    await expect(storyEl).toBeVisible({ timeout: 15_000 });
    await expect(storyEl).not.toContainText('could not be loaded', { timeout: 10_000 });
    const text = await storyEl.textContent();
    expect(text!.length).toBeGreaterThan(100);
  });
});
