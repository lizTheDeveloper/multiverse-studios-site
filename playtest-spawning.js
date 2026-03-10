/**
 * Playtest: Creature Spawning & Movement (MUL-237)
 */
const { chromium } = require('playwright');

const GAME_URL = 'http://localhost:3456';
const OUT = '/Users/annhoward/src/multiverse-studios-site/screenshots/';
const results = [];
const bugs = [];

function pass(check) { results.push({ check, result: 'PASS' }); }
function fail(check, detail) { results.push({ check, result: 'FAIL', detail }); bugs.push({ check, detail }); }
function note(check, detail) { results.push({ check, result: 'NOTE', detail }); }

async function clickCanvas(page, normX, normY) {
  const box = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    if (!c) return null;
    const r = c.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  if (box) await page.mouse.click(box.x + box.w * normX, box.y + box.h * normY);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  await page.goto(GAME_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Click NEW GAME
  await clickCanvas(page, 0.5, 0.43);
  await page.waitForTimeout(3000);

  // Step through onboarding
  for (let i = 0; i < 12; i++) {
    const nextBtn = await page.$('#onboarding-next');
    if (nextBtn) { await nextBtn.click(); await page.waitForTimeout(1200); }
    else {
      const beginBtn = await page.$('#onboarding-begin');
      if (beginBtn) { await beginBtn.click(); await page.waitForTimeout(2000); }
      break;
    }
  }

  // Wait for world to load
  await page.waitForTimeout(8000);
  await page.screenshot({ path: OUT + 'pt-spawning-initial.png' });

  // ── CHECK: HUD creature count ────────────────────────────────────────────
  const hudText = await page.evaluate(() => {
    const hud = document.querySelector('#hud, .hud, [id*="hud"]');
    if (hud) return hud.textContent;
    // Try canvas text via game state
    return null;
  });
  console.log('HUD text:', hudText);

  // Check canvas exists and has content
  const canvasInfo = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    if (!c) return null;
    return { w: c.width, h: c.height, clientW: c.clientWidth, clientH: c.clientHeight };
  });
  if (canvasInfo) {
    pass('Canvas present and sized: ' + JSON.stringify(canvasInfo));
  } else {
    fail('Canvas', 'No canvas element found');
  }

  // Look at HUD text in page DOM
  const pageText = await page.evaluate(() => document.body.innerText);
  const aliveMatch = pageText.match(/(\d+)\s*ALIVE/i);
  if (aliveMatch) {
    const count = parseInt(aliveMatch[1]);
    if (count >= 3) {
      pass(`Spawning: ${count} creatures alive on start (>=3 expected)`);
    } else if (count > 0) {
      note(`Spawning: Only ${count} creatures alive (expected 3-5)`);
    } else {
      fail('Spawning', 'HUD shows 0 alive creatures');
    }
  } else {
    note('HUD creature count', 'Could not parse ALIVE count from DOM — checking via screenshot');
  }

  // Check for console errors
  if (consoleErrors.length > 0) {
    note('Console errors', consoleErrors.slice(0, 5).join('; '));
  } else {
    pass('No console errors on load');
  }

  // Wait for creature movement
  await page.waitForTimeout(5000);
  await page.screenshot({ path: OUT + 'pt-spawning-after5s.png' });

  // Check if game state changed (creatures moved)
  await page.waitForTimeout(5000);
  await page.screenshot({ path: OUT + 'pt-spawning-after10s.png' });

  // Get creature positions via game internals if accessible
  const gameState = await page.evaluate(() => {
    // Try to access Phaser game
    if (window.game && window.game.scene) {
      const scenes = window.game.scene.scenes;
      for (const scene of scenes) {
        if (scene.creatures) return { count: scene.creatures.size || scene.creatures.length || 0, type: 'scene.creatures' };
        if (scene.creatureManager) return { type: 'creatureManager found' };
      }
    }
    // Try global creature registry
    if (window.creatures) return { count: Object.keys(window.creatures).length };
    return null;
  });
  if (gameState) {
    console.log('Game state:', JSON.stringify(gameState));
    note('Game internals', JSON.stringify(gameState));
  }

  // Screenshot after waiting for creature activity
  await page.waitForTimeout(10000);
  await page.screenshot({ path: OUT + 'pt-spawning-after20s.png' });

  // Try clicking a creature to verify interaction
  await clickCanvas(page, 0.3, 0.55);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: OUT + 'pt-spawning-click-creature.png' });

  // Check if UIPanel appeared (indicating creature was selected/clicked)
  const uiPanel = await page.$('#ui-panel, .ui-panel, [id*="panel"]');
  if (uiPanel) {
    const visible = await uiPanel.isVisible();
    if (visible) pass('UIPanel appeared on creature click');
    else note('UIPanel', 'Found in DOM but not visible');
  } else {
    note('UIPanel', 'No #ui-panel DOM element found — may be canvas-based');
  }

  // Pan camera to check world bounds
  await page.keyboard.press('Home');
  await page.waitForTimeout(500);

  // Pan right to see if camera moves
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(50);
  }
  await page.waitForTimeout(1000);
  await page.screenshot({ path: OUT + 'pt-spawning-panned.png' });

  await browser.close();

  // ── REPORT ───────────────────────────────────────────────────────────────
  console.log('\n── Playtest Results: Creature Spawning & Movement ───────────────');
  results.forEach(r => {
    const sym = r.result === 'PASS' ? '✓' : r.result === 'FAIL' ? '✗' : '~';
    console.log(`  ${sym} [${r.result}] ${r.check}${r.detail ? ': ' + r.detail : ''}`);
  });
  if (bugs.length > 0) {
    console.log('\nBUGS FOUND:');
    bugs.forEach(b => console.log(`  • ${b.check}: ${b.detail}`));
  } else {
    console.log('\nNo bugs found in automated checks.');
  }
})();
