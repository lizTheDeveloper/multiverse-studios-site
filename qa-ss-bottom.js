const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('file:///Users/annhoward/src/multiverse-studios-site/creatures.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.82));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/qa-ss-bottom.png' });
  await browser.close();
  console.log('Done');
})();
