/**
 * Resolve screenshot output directory based on URL.
 * All screenshot scripts should use this to keep assets organized by game.
 *
 * Usage:
 *   const { screenshotDir } = require('./screenshots/resolve-dir');
 *   const dir = screenshotDir(url);  // e.g. 'screenshots/precursors/'
 */

const path = require('path');
const fs = require('fs');

const SCREENSHOTS_ROOT = path.join(__dirname);

const URL_GAME_MAP = [
  // Game servers (localhost)
  { pattern: /localhost:3456/, game: 'precursors' },
  { pattern: /localhost:3002/, game: 'mvee' },
  { pattern: /localhost:3001/, game: 'tsb' },
  { pattern: /localhost:300[0-9]/, game: 'misc' },
  // Production play URLs
  { pattern: /play\.multiversestudios\.xyz\/precursors/, game: 'precursors' },
  { pattern: /play\.multiversestudios\.xyz\/creatures/, game: 'mvee' },
  { pattern: /play\.multiversestudios\.xyz\/the-spaces-between/, game: 'tsb' },
  { pattern: /play\.multiversestudios\.xyz\/breach/, game: 'breach-mmo' },
  { pattern: /play\.multiversestudios\.xyz\/never-ever-land/, game: 'never-ever-land' },
  { pattern: /play\.multiversestudios\.xyz\/asteroid/, game: 'asteroid-miner' },
  { pattern: /play\.multiversestudios\.xyz\/infiniclicker/, game: 'infiniclicker' },
  // Website pages
  { pattern: /multiversestudios\.xyz\/mvee/, game: 'mvee' },
  { pattern: /multiversestudios\.xyz\/creatures/, game: 'mvee' },
  { pattern: /multiversestudios\.xyz\/precursors/, game: 'precursors' },
  { pattern: /multiversestudios\.xyz\/nevereverland/, game: 'never-ever-land' },
  { pattern: /multiversestudios\.xyz/, game: 'website' },
  // Local file paths
  { pattern: /creatures\.html/, game: 'mvee' },
  { pattern: /mvee\.html/, game: 'mvee' },
  { pattern: /precursors\.html/, game: 'precursors' },
];

function screenshotDir(url) {
  for (const { pattern, game } of URL_GAME_MAP) {
    if (pattern.test(url)) {
      const dir = path.join(SCREENSHOTS_ROOT, game);
      fs.mkdirSync(dir, { recursive: true });
      return dir;
    }
  }
  // Fallback: misc
  const dir = path.join(SCREENSHOTS_ROOT, 'misc');
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function screenshotPath(url, name) {
  return path.join(screenshotDir(url), name);
}

module.exports = { screenshotDir, screenshotPath, SCREENSHOTS_ROOT };
