export default async function run(page) {
  const out = [];
  const widths = [320, 360, 375, 390, 414, 450];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 750 });
    await page.waitForTimeout(120);
    const m = await page.evaluate(() => {
      const doc = document.documentElement;
      const offenders = [...document.querySelectorAll("*")].filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return false;
        if (getComputedStyle(el).position === "fixed") return false;
        if (el.closest(".tool-list")) return false;
        return r.right > doc.clientWidth + 1 || r.left < -1;
      });
      const brief = (s) => {
        const el = document.querySelector(s);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { left: Math.round(r.left), right: Math.round(r.right), top: Math.round(r.top), bottom: Math.round(r.bottom) };
      };
      return {
        overflowCount: offenders.length,
        overflowEls: offenders.slice(0, 10).map((el) => `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 2).join(".")} @${Math.round(el.getBoundingClientRect().left)},${Math.round(el.getBoundingClientRect().right)}`),
        aboutLabels: brief(".about-labels"),
        headingAside: brief(".heading-aside"),
        stackHeading: brief(".stack-heading"),
        alwaysLearning: brief(".always-learning-asset"),
        socialRow: brief(".social-row"),
        contactCopy: brief(".contact-copy"),
        stackGrid: brief(".stack-grid"),
        projectsGrid: brief(".projects-grid"),
      };
    });
    out.push({ width, ...m });
  }
  return out;
}