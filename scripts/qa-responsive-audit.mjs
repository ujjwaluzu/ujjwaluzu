export default async function run(page) {
  const widths = [320, 360, 375, 390, 414, 768, 880, 1024, 1280, 1440];
  const results = [];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 800 });
    await page.waitForTimeout(120);

    const data = await page.evaluate(() => {
      const doc = document.documentElement;
      const offenders = [...document.querySelectorAll("*")].filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return false;
        const style = getComputedStyle(el);
        if (style.position === "fixed") return false;
        return r.right > doc.clientWidth + 1 || r.left < -1;
      });

      const heroCopy = document.querySelector(".hero-copy")?.getBoundingClientRect();
      const heroArt = document.querySelector(".hero-art")?.getBoundingClientRect();
      const char = document.querySelector(".character-hero")?.getBoundingClientRect();
      const heroActions = document.querySelector(".hero-actions")?.getBoundingClientRect();

      const copyOverlapArt =
        heroCopy && heroArt && heroCopy.bottom > heroArt.top &&
        heroCopy.right > heroArt.left && heroCopy.left < heroArt.right;

      const buttonsBehindChar =
        heroActions && char && heroActions.bottom > char.top &&
        heroActions.right > char.left && heroActions.left < char.right;

      const overflowEls = offenders.slice(0, 12).map((el) => {
        const r = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 2).join(".")} @${Math.round(r.left)},${Math.round(r.right)}`;
      });

      const visibleImages = [...document.querySelectorAll("img")].filter((i) => {
        const r = i.getBoundingClientRect();
        return r.width > 0;
      });

      const tinyTargets = [...document.querySelectorAll("a,button")].filter((el) => {
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        if (s.display === "none" || s.visibility === "hidden") return false;
        if (!window.getComputedStyle(el.parentElement || document.body).getPropertyValue("") && false) return false;
        return r.width > 0 && r.width < 24 && r.height < 24;
      }).slice(0, 8).map((el) => {
        const r = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 2).join(".")} @${Math.round(r.width)}x${Math.round(r.height)}`;
      });

      return {
        scrollW: doc.scrollWidth,
        clientW: doc.clientWidth,
        overflow: doc.scrollWidth > doc.clientWidth,
        overflowCount: offenders.length,
        overflowEls,
        hero: {
          artTop: heroArt ? Math.round(heroArt.top) : null,
          copyBottom: heroCopy ? Math.round(heroCopy.bottom) : null,
          charTop: char ? Math.round(char.top) : null,
          copyOverlapArt,
          buttonsBehindChar,
        },
        tinyTargets,
        visibleImages: visibleImages.length,
      };
    });

    results.push({ width, ...data });
  }

  return results;
}