export default async function run(page) {
  await page.setViewportSize({ width: 375, height: 750 });
  await page.waitForTimeout(300);

  const results = {};

  const toggle = page.locator(".mobile-menu-toggle");
  const nav = page.locator(".mobile-menu-nav");
  const navBox = (await nav.boundingBox()) || null;

  results.initial = {
    ariaExpanded: await toggle.getAttribute("aria-expanded"),
    ariaControls: await toggle.getAttribute("aria-controls"),
    visible: await nav.isVisible(),
  };

  await toggle.click();
  await page.waitForTimeout(400);
  const openBox = await nav.boundingBox();
  results.opened = {
    ariaExpanded: await toggle.getAttribute("aria-expanded"),
    ariaLabel: await toggle.getAttribute("aria-label"),
    visible: await nav.isVisible(),
    box: openBox,
    withinViewport: openBox ? openBox.x >= 0 && openBox.x + openBox.width <= 375 && openBox.y >= 0 : false,
  };

  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  results.afterEscape = {
    ariaExpanded: await toggle.getAttribute("aria-expanded"),
    visible: await nav.isVisible(),
    focusOnToggle: await page.evaluate(() => document.activeElement?.className),
  };

  await toggle.click();
  await page.waitForTimeout(300);
  const link = nav.locator("a[href='#about']");
  await link.click();
  await page.waitForTimeout(500);
  results.afterLinkClick = {
    ariaExpanded: await toggle.getAttribute("aria-expanded"),
    visible: await nav.isVisible(),
    hash: await page.evaluate(() => location.hash),
  };

  await toggle.click();
  await page.waitForTimeout(300);
  await page.mouse.click(5, 300);
  await page.waitForTimeout(400);
  results.afterOutsideClick = {
    ariaExpanded: await toggle.getAttribute("aria-expanded"),
    visible: await nav.isVisible(),
  };

  const anyOverflow = await page.evaluate(() => {
    const d = document.documentElement;
    return d.scrollWidth > d.clientWidth;
  });
  results.pageOverflowWhileMenuOpen = anyOverflow;

  results.navBox = navBox && !results.opened.box ? null : results.opened.box;

  return results;
}