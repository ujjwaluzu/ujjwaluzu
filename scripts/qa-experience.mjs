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
  for (const slug of ["guide", "xrepai", "aiptx", "cspmx"]) {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const path = slug === "guide" ? "/experience/intelligencex" : `/experience/intelligencex/${slug}`;
      const response = await page.goto(`${baseURL}${path}`, { waitUntil: "domcontentloaded" });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("main img").all()) {
        await img.scrollIntoViewIfNeeded();
        await page.waitForFunction((element) => element.complete && element.naturalWidth > 0, await img.elementHandle());
        await img.evaluate((element) => element.decode());
      }
      await page.locator("h1").scrollIntoViewIfNeeded();
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
          introVisible: getComputedStyle(main.querySelector(".experience-detail-intro, .guide-disclosure")).visibility === "visible",
        };
      });
      assert.equal(metrics.overflow, false, `${slug} overflows at ${width}px`);
      assert.deepEqual(metrics.overflows, [], `${slug} elements overflow at ${width}px`);
      assert.equal(metrics.h1Count, 1);
      assert.equal(metrics.introVisible, true);
      assert.deepEqual(metrics.brokenImages, []);
      if (slug === "guide") {
        assert.equal(await page.locator(".guide-platform-table tbody tr").count(), 8);
        for (const link of await page.locator(".guide-toc a").all()) {
          await link.click();
          const id = await link.getAttribute("href");
          await page.waitForFunction((selector) => {
            const top = document.querySelector(selector).getBoundingClientRect().top;
            return top >= 0 && top < 160;
          }, id);
          const top = await page.locator(id).evaluate((el) => el.getBoundingClientRect().top);
          assert.ok(top >= 0 && top < 160, `Anchor hidden at ${width}px: ${id}, ${top}`);
        }
        await page.locator(".guide-toc a").first().focus();
        await page.keyboard.press("Tab");
        await page.keyboard.press("Shift+Tab");
        const focus = await page.evaluate(() => getComputedStyle(document.activeElement).outlineStyle);
        assert.notEqual(focus, "none");
        await page.keyboard.press("Enter");
        assert.equal(new URL(page.url()).hash, "#company");
        await page.evaluate(() => window.scrollTo(0, 0));
      }
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
  const noJs = await page.context().browser().newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 900 } });
  try {
    const staticPage = await noJs.newPage();
    const response = await staticPage.goto(`${baseURL}/experience/intelligencex`);
    assert.equal(response.status(), 200);
    for (const id of ["company", "services", "platforms", "my-work", "implementation", "questions", "sources"]) {
      assert.equal(await staticPage.locator(`#${id}`).isVisible(), true);
    }
    await staticPage.locator('.guide-toc a[href="#platforms"]').click();
    assert.equal(new URL(staticPage.url()).hash, "#platforms");
    await staticPage.screenshot({ path: "test-results/experience-screenshots/guide-no-js.png", fullPage: true });
  } finally { await noJs.close(); }
  return { results, reducedMotion: motion, browserErrors: errors, withoutJavaScript: "pass" };
}
