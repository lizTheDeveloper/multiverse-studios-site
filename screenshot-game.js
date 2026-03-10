const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  try {
    await page.goto('http://localhost:3002', { waitUntil: 'networkidle', timeout: 15000 });
    // Wait for Phaser canvas to render
    await page.waitForTimeout(5000);

    await page.screenshot({ path: 'screenshots/creatures-game-1.png' });
    console.log('Captured creatures game viewport');

    await page.screenshot({ path: 'screenshots/creatures-game-full.png', fullPage: true });
    console.log('Captured creatures game full');

    // Try clicking into the game world if there's a start button
    const startBtn = await page.$('button, .start, #start, [data-start]');
    if (startBtn) {
      await startBtn.click();
      await page.waitForTimeout(3000);
      await page.screenshot({ path: 'screenshots/creatures-game-playing.png' });
      console.log('Captured creatures gameplay');
    }
  } catch (e) {
    console.error('Error:', e.message);
  }

  await browser.close();
})();
