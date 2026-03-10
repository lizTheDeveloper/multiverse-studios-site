const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('file:///Users/annhoward/src/multiverse-studios-site/creatures.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const brokenImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter(i => i.naturalWidth === 0)
      .map(i => i.getAttribute('src'));
  });
  console.log('Broken images:', JSON.stringify(brokenImgs));
  await page.screenshot({ path: 'screenshots/qa-creatures-page.png' });
  await browser.close();
  console.log('QA screenshot saved.');
})();
