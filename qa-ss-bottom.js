const { chromium } = require('playwright');
const { screenshotPath } = require('./screenshots/resolve-dir');

const PAGE_URL = 'file:///Users/annhoward/src/multiverse-studios-site/creatures.html';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.82));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: screenshotPath(PAGE_URL, 'qa-ss-bottom.png') });
  await browser.close();
  console.log('Done');
})();
