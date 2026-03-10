/**
 * Playwright screenshot script for Precursors: Origins of Folklore
 * Captures marketing screenshots for creatures.html
 * Run from /Users/annhoward/src/multiverse-studios-site/
 */

const { chromium } = require('playwright');
const path = require('path');

const GAME_URL = 'http://localhost:3456';
const OUT_DIR = path.join(__dirname, 'screenshots');

async function clickCanvas(page, normX, normY) {
  const box = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    if (!c) return null;
    const r = c.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  if (!box) { console.log('No canvas found for click'); return; }
  await page.mouse.click(box.x + box.w * normX, box.y + box.h * normY);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    // ── 1. TITLE SCREEN ─────────────────────────────────────────────────────
    console.log('1. Capturing title screen...');
    {
      const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(4000);
      const f = `${OUT_DIR}/precursors-title.png`;
      await page.screenshot({ path: f });
      console.log('  ✓ title screen');
      results.push({ name: 'precursors-title', file: f });
      await page.close();
    }

    // ── 2. ONBOARDING OVERLAY ────────────────────────────────────────────────
    console.log('2. Capturing onboarding overlay...');
    {
      const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);
      // Click NEW GAME (center of canvas, ~43% from top)
      await clickCanvas(page, 0.5, 0.43);
      await page.waitForTimeout(3000);
      const f = `${OUT_DIR}/precursors-onboarding.png`;
      await page.screenshot({ path: f });
      console.log('  ✓ onboarding overlay');
      results.push({ name: 'precursors-onboarding', file: f });
      await page.close();
    }

    // ── 3-7. GAMEPLAY SCREENSHOTS ────────────────────────────────────────────
    console.log('3. Launching game for gameplay screenshots...');
    {
      const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
      await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);

      // Click NEW GAME
      await clickCanvas(page, 0.5, 0.43);
      await page.waitForTimeout(3000);

      // Step through onboarding
      for (let i = 0; i < 12; i++) {
        const nextBtn = await page.$('#onboarding-next');
        if (nextBtn) {
          await nextBtn.click();
          await page.waitForTimeout(1200);
          console.log(`  onboarding step ${i + 1}`);
        } else {
          const beginBtn = await page.$('#onboarding-begin');
          if (beginBtn) {
            await beginBtn.click();
            await page.waitForTimeout(2000);
            console.log('  clicked Begin Observation');
          }
          break;
        }
      }

      // Wait for world to render with creatures
      console.log('  waiting for world...');
      await page.waitForTimeout(10000);

      // 3a. Full world view at default zoom
      const f1 = `${OUT_DIR}/precursors-world.png`;
      await page.screenshot({ path: f1 });
      console.log('  ✓ world default view');
      results.push({ name: 'precursors-world', file: f1 });

      // 3b. HUD + creature roster strip
      const f2 = `${OUT_DIR}/precursors-hud.png`;
      await page.screenshot({ path: f2 });
      console.log('  ✓ HUD view');
      results.push({ name: 'precursors-hud', file: f2 });

      // 3c. Wait longer for creatures + speech bubbles
      await page.waitForTimeout(12000);
      const f3 = `${OUT_DIR}/precursors-gameplay-1.png`;
      await page.screenshot({ path: f3 });
      console.log('  ✓ gameplay-1 (creatures active)');
      results.push({ name: 'precursors-gameplay-1', file: f3 });

      // 3d. Click a creature to open UIPanel
      await clickCanvas(page, 0.3, 0.55);
      await page.waitForTimeout(2000);
      const f4 = `${OUT_DIR}/precursors-uipanel.png`;
      await page.screenshot({ path: f4 });
      console.log('  ✓ UIPanel selected creature');
      results.push({ name: 'precursors-uipanel', file: f4 });

      // 3e. Zoom in for detail
      await page.mouse.wheel(0, -300);
      await page.waitForTimeout(1500);
      const f5 = `${OUT_DIR}/precursors-zoomed-in.png`;
      await page.screenshot({ path: f5 });
      console.log('  ✓ zoomed in');
      results.push({ name: 'precursors-zoomed-in', file: f5 });

      // 3f. Zoom out for wide world view
      await page.keyboard.press('Home');
      await page.waitForTimeout(500);
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(1500);
      const f6 = `${OUT_DIR}/precursors-zoomed-out.png`;
      await page.screenshot({ path: f6 });
      console.log('  ✓ zoomed out (wide world)');
      results.push({ name: 'precursors-zoomed-out', file: f6 });

      // 3g. Pan right to explore biomes
      await page.keyboard.press('Home');
      await page.waitForTimeout(500);
      for (let i = 0; i < 8; i++) {
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(100);
      }
      await page.waitForTimeout(2000);
      const f7 = `${OUT_DIR}/precursors-biome-explore.png`;
      await page.screenshot({ path: f7 });
      console.log('  ✓ biome exploration pan');
      results.push({ name: 'precursors-biome-explore', file: f7 });

      await page.close();
    }

    // ── 4. WIDE VIEWPORT (desktop 1920x1080) ─────────────────────────────────
    console.log('4. Wide viewport screenshots...');
    {
      const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
      await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);
      await clickCanvas(page, 0.5, 0.43);
      await page.waitForTimeout(3000);

      for (let i = 0; i < 12; i++) {
        const nextBtn = await page.$('#onboarding-next');
        if (nextBtn) { await nextBtn.click(); await page.waitForTimeout(1200); }
        else {
          const beginBtn = await page.$('#onboarding-begin');
          if (beginBtn) { await beginBtn.click(); }
          break;
        }
      }

      await page.waitForTimeout(15000);
      const f = `${OUT_DIR}/precursors-wide.png`;
      await page.screenshot({ path: f });
      console.log('  ✓ 1920x1080 wide view');
      results.push({ name: 'precursors-wide', file: f });
      await page.close();
    }

  } catch (err) {
    console.error('Fatal error:', err.message);
  }

  await browser.close();

  console.log('\n── Results ──────────────────────────────────────────────────');
  results.forEach(r => console.log(`  ${r.name}: ${r.file}`));
  console.log(`\n${results.length} screenshots captured.`);
})();
