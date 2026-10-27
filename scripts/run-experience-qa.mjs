// Reuse an installed Playwright package; no project dependency is required.
// node scripts/run-experience-qa.mjs <path-to-playwright/index.mjs> [base-url]
import { pathToFileURL } from "node:url";
import { writeFile } from "node:fs/promises";
import run from "./qa-experience.mjs";

if (!process.argv[2]) throw new Error("Provide the installed Playwright index.mjs path.");
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  const report = await run(page, process.argv[3] ?? "http://localhost:3100");
  await writeFile("test-results/experience-browser-qa.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
