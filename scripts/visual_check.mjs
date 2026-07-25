import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { chromium } from 'playwright-core';

function usageAndExit() {
  // Minimal flag parsing to keep this script dependency-free.
  // Usage:
  //   node scripts/visual_check.mjs --url http://localhost:3000/booking/ --out output/playwright/booking-before.png
  //   node scripts/visual_check.mjs --url http://localhost:3000/ --out output/playwright/home.png --width 1366 --height 768
  console.error('Usage: node scripts/visual_check.mjs --url <url> --out <png path> [--width <n>] [--height <n>]');
  process.exit(2);
}

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

const url = getArg('--url');
const outPath = getArg('--out');
if (!url || !outPath) usageAndExit();
const widthArg = Number.parseInt(getArg('--width') ?? '1366', 10);
const heightArg = Number.parseInt(getArg('--height') ?? '768', 10);
if (!Number.isFinite(widthArg) || widthArg <= 0 || !Number.isFinite(heightArg) || heightArg <= 0) usageAndExit();

const absOut = path.resolve(process.cwd(), outPath);
await fs.mkdir(path.dirname(absOut), { recursive: true });

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
});

try {
  const page = await browser.newPage({ viewport: { width: widthArg, height: heightArg } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForTimeout(800); // allow late fonts/embeds to settle
  await page.screenshot({ path: absOut, fullPage: true });
  console.log(absOut);
} finally {
  await browser.close();
}
