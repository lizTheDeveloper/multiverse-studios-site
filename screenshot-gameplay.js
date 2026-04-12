const { chromium } = require('playwright');
const { screenshotPath } = require('./screenshots/resolve-dir');

const GAME_URL = 'http://localhost:3002';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  try {
    await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(4000);

    // Click NEW GAME
    const canvasBox = await page.evaluate(() => {
      const c = document.querySelector('canvas');
      const r = c.getBoundingClientRect();
      return { x: r.x, y: r.y, w: r.width, h: r.height };
    });
    const scaleX = canvasBox.w / 1280;
    const scaleY = canvasBox.h / 720;
    await page.mouse.click(canvasBox.x + 640 * scaleX, canvasBox.y + 314 * scaleY);
    await page.waitForTimeout(3000);

    // Capture onboarding
    await page.screenshot({ path: screenshotPath(GAME_URL, 'creatures-onboarding.png') });
    console.log('Onboarding captured');

    // Click through onboarding steps using DOM button IDs
    for (let i = 0; i < 10; i++) {
      const nextBtn = await page.$('#onboarding-next');
      if (nextBtn) {
        await nextBtn.click();
        await page.waitForTimeout(1500);
        console.log(`Clicked Continue (step ${i + 1})`);
      } else {
        const beginBtn = await page.$('#onboarding-begin');
        if (beginBtn) {
          await beginBtn.click();
          await page.waitForTimeout(1500);
          console.log('Clicked Begin Observation');
        } else {
          console.log(`No more onboarding buttons at step ${i + 1}`);
        }
        break;
      }
    }

    // Wait for world to fully render with creatures
    await page.waitForTimeout(8000);
    await page.screenshot({ path: screenshotPath(GAME_URL, 'creatures-gameplay-1.png') });
    console.log('Gameplay 1 captured');

    // Wait for creatures to spawn and do things
    await page.waitForTimeout(10000);
    await page.screenshot({ path: screenshotPath(GAME_URL, 'creatures-gameplay-2.png') });
    console.log('Gameplay 2 captured');

    // Click on a creature if possible
    await page.mouse.click(640, 400);
    await page.waitForTimeout(2000);
    await page.screenshot({ path: screenshotPath(GAME_URL, 'creatures-gameplay-3.png') });
    console.log('Gameplay 3 captured');

  } catch (e) {
    console.error('Error:', e.message);
  }

  await browser.close();
})();
