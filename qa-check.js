const { chromium } = require('playwright');
const { screenshotPath } = require('./screenshots/resolve-dir');

const PAGE_URL = 'file:///Users/annhoward/src/multiverse-studios-site/creatures.html';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const brokenImgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter(i => i.naturalWidth === 0)
      .map(i => i.getAttribute('src'));
  });
  console.log('Broken images:', JSON.stringify(brokenImgs));
  await page.screenshot({ path: screenshotPath(PAGE_URL, 'qa-creatures-page.png') });
  await browser.close();
  console.log('QA screenshot saved.');
})();
