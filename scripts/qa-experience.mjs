// Run through the same Playwright page harness as the other qa-*.mjs scripts.
// Pass a production Next.js server URL to validate the built application.
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

export default async function run(page, baseURL = "http://localhost:3100") {
  const results = [];
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await mkdir("test-results/experience-screenshots", { recursive: true });
  for (const slug of ["xrepai", "aiptx", "cspmx"]) {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`${baseURL}/experience/intelligencex/${slug}`, { waitUntil: "domcontentloaded" });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("main img").all()) {
        await img.scrollIntoViewIfNeeded();
        await page.waitForFunction((element) => element.complete && element.naturalWidth > 0, await img.elementHandle());
        await img.evaluate((element) => element.decode());
      }
      await page.locator(".experience-detail-title").scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo(0, 0));
      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const main = document.querySelector("main");
        const overflows = [...main.querySelectorAll("*")].filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && (rect.left < -1 || rect.right > doc.clientWidth + 1);
        }).map((element) => element.className || element.tagName);
        return {
          overflow: doc.scrollWidth > doc.clientWidth,
          overflows,
          h1Count: main.querySelectorAll("h1").length,
          brokenImages: [...main.querySelectorAll("img")].filter((img) => img.complete && !img.naturalWidth).map((img) => img.src),
          introVisible: getComputedStyle(main.querySelector(".experience-detail-intro")).visibility === "visible",
        };
      });
      assert.equal(metrics.overflow, false, `${slug} overflows at ${width}px`);
      assert.deepEqual(metrics.overflows, [], `${slug} elements overflow at ${width}px`);
      assert.equal(metrics.h1Count, 1);
      assert.equal(metrics.introVisible, true);
      assert.deepEqual(metrics.brokenImages, []);
      if (width === 390 || width === 1440) {
        await page.screenshot({ path: `test-results/experience-screenshots/${slug}-${width}.png`, fullPage: true });
      }
      results.push({ slug, width, ...metrics });
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  const motion = await page.locator(".experience-detail-more-card").first().evaluate((el) => ({
    duration: getComputedStyle(el).transitionDuration,
    reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
  }));
  assert.equal(motion.reduce, true);
  assert.ok(parseFloat(motion.duration) <= 0.001);
  assert.deepEqual(errors, [], "Browser/hydration errors");
  return { results, reducedMotion: motion, browserErrors: errors };
}
