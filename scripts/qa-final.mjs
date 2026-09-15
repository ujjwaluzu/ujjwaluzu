export default async function run(page) {
  const out = [];
  const widths = [320, 375, 390, 414, 768, 1024, 1280, 1440];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 850 });
    await page.waitForTimeout(150);
    const m = await page.evaluate(() => {
      const d = document.documentElement;
      const btn = document.querySelector(".mobile-menu-toggle");
      const hero = document.querySelector(".hero")?.getBoundingClientRect();
      const char = document.querySelector(".character-hero")?.getBoundingClientRect();
      const actions = document.querySelector(".hero-actions")?.getBoundingClientRect();
      const desktopNav = document.querySelector(".desktop-nav");
      const cta = document.querySelector(".header-cta");
      const data = {
        overflow: d.scrollWidth - d.clientWidth,
        heroHeight: hero ? Math.round(hero.height) : null,
        charWithinHeroBottom: hero && char ? hero.bottom - char.bottom : null,
        buttonsClearChar: actions && char
          ? !(actions.bottom > char.top && actions.right > char.left && actions.left < char.right)
          : null,
      };
      if (window.innerWidth <= 767) {
        data.mobileNav = {
          toggleShown: btn ? getComputedStyle(btn).display !== "none" : false,
          desktopNavHidden: desktopNav ? getComputedStyle(desktopNav).display === "none" : true,
          ctaHidden: cta ? getComputedStyle(cta).display === "none" : true,
        };
      } else {
        data.mobileNav = {
          toggleHidden: btn ? getComputedStyle(btn).display === "none" : true,
          desktopNavShown: desktopNav ? getComputedStyle(desktopNav).display !== "none" : false,
          ctaShown: cta ? getComputedStyle(cta).display !== "none" : false,
        };
      }
      return data;
    });
    out.push({ width, ...m });
  }

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(200);
  out.reducedMotion = await page.evaluate(() => {
    const heroTitle = document.querySelector(".hero-title");
    const animation = getComputedStyle(heroTitle).animationDuration;
    return animation;
  });

  await page.setViewportSize({ width: 375, height: 750 });
  await page.waitForTimeout(200);
  await page.evaluate(() => document.querySelector(".mobile-menu-toggle").click());
  await page.waitForTimeout(350);
  out.ctaInMenu = await page.evaluate(() => {
    const a = document.querySelector(".mobile-menu-nav a.button");
    if (!a) return null;
    const s = getComputedStyle(a);
    return { text: a.textContent.trim(), color: s.color, width: Math.round(a.getBoundingClientRect().width) };
  });

  return out;
}