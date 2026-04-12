const { chromium } = require('playwright');
const { screenshotPath } = require('./screenshots/resolve-dir');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  const pages = [
    { url: 'https://multiversestudios.xyz', name: 'homepage' },
    { url: 'https://multiversestudios.xyz/creatures.html', name: 'creatures' },
    { url: 'https://multiversestudios.xyz/mvee.html', name: 'mvee' },
    { url: 'https://multiversestudios.xyz/about.html', name: 'about' },
    { url: 'https://multiversestudios.xyz/thank-you.html', name: 'thankyou' },
  ];

  for (const { url, name } of pages) {
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Scroll through the page to trigger IntersectionObserver reveals
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(150);
    }
    // Scroll back to top for the full-page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    await page.screenshot({ path: screenshotPath(url, `${name}-full.png`), fullPage: true });
    console.log(`Captured ${name}`);

    // Also take a hero viewport shot
    await page.screenshot({ path: screenshotPath(url, `${name}-hero.png`) });
    console.log(`Captured ${name} hero`);
  }

  await browser.close();
})();
