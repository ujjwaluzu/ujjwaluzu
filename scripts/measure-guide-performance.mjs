// A reproducible lab sample, not Lighthouse scores or real-user Core Web Vitals.
// node scripts/measure-guide-performance.mjs <playwright/index.mjs> [base-url]
import { pathToFileURL } from "node:url";
import { writeFile } from "node:fs/promises";

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const base = process.argv[3] ?? "http://localhost:3100";
const browser = await chromium.launch({ headless: true });
const samples = [];
try {
  for (let run = 0; run < 3; run++) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send("Network.enable");
    await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750 });
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.addInitScript(() => {
      window.labMetrics = { lcp: 0, cls: 0, longTaskBlockingMs: 0 };
      new PerformanceObserver((list) => { for (const entry of list.getEntries()) window.labMetrics.lcp = entry.startTime; }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.labMetrics.cls += entry.value; }).observe({ type: "layout-shift", buffered: true });
      new PerformanceObserver((list) => { for (const entry of list.getEntries()) window.labMetrics.longTaskBlockingMs += Math.max(0, entry.duration - 50); }).observe({ type: "longtask", buffered: true });
    });
    await page.goto(`${base}/experience/intelligencex`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // Allow buffered observers to report once the initial page settles.
    await page.waitForTimeout(1000);
    samples.push(await page.evaluate(() => ({
      ...window.labMetrics,
      fcp: performance.getEntriesByName("first-contentful-paint")[0]?.startTime,
      transferredBytes: performance.getEntriesByType("resource").reduce((sum, entry) => sum + entry.transferSize, 0),
      wordCount: document.querySelector("main").innerText.split(/\s+/).length,
    })));
    await context.close();
  }
  const output = { measuredAt: new Date().toISOString(), base, kind: "local synthetic lab; no field data or comparative baseline", browser: browser.version(), settings: { viewport: "390x844", cpuSlowdown: 4, latencyMs: 150, downloadBytesPerSecond: 200000, cache: "disabled", runs: 3 }, samples };
  await writeFile("test-results/intelligencex-performance.json", JSON.stringify(output, null, 2));
  console.log(JSON.stringify(output, null, 2));
} finally { await browser.close(); }
