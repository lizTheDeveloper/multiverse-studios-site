const { chromium } = require('playwright');
const { screenshotPath } = require('./screenshots/resolve-dir');

const PAGE_URL = 'file:///Users/annhoward/src/multiverse-studios-site/creatures.html';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(PAGE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  // Scroll to screenshots section
  await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const ss = sections.find(s => s.textContent.includes('In the Wild'));
    if (ss) ss.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: screenshotPath(PAGE_URL, 'qa-screenshots-section.png') });
  await browser.close();
  console.log('Screenshots section QA saved.');
})();
