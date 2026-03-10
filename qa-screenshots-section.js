const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('file:///Users/annhoward/src/multiverse-studios-site/creatures.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  // Scroll to screenshots section
  await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const ss = sections.find(s => s.textContent.includes('In the Wild'));
    if (ss) ss.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/qa-screenshots-section.png' });
  await browser.close();
  console.log('Screenshots section QA saved.');
})();
