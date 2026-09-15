# Creative Portfolio Build Skill

## Purpose

Use this skill when designing, implementing, refining, or reviewing the ujjwaluzu creative developer portfolio.

## Workflow

### 1. Inspect first

Before editing:

- Inspect the current project structure.
- Identify the framework and styling system.
- Check installed dependencies.
- Locate all assets.
- Identify the current root page and global styles.
- Avoid creating duplicate architecture.

### 2. Establish the visual system

Before writing many components:

- Define the page background colors.
- Define typography hierarchy.
- Define spacing and container widths.
- Define button and card styles.
- Define texture and decorative-element behavior.
- Confirm the character image is loaded correctly.

Use CSS variables or existing design tokens whenever practical.

### 3. Build the page in layers

Implement in this order:

1. Global layout and typography
2. Header
3. Hero
4. Technology strip
5. Project cards
6. About composition
7. Experience section
8. Tech stack
9. Contact and footer
10. Decorative details
11. Animations
12. Responsive refinements

Do not begin with decorative details before the layout is stable.

### 4. Use the character asset properly

- Preserve transparent edges.
- Do not stretch the character unnaturally.
- Use `object-fit: contain` where appropriate.
- Keep the character visually dominant in the hero.
- Use a second appearance only if it improves the composition.
- Do not obscure the face with text or decorative objects.
- Add a subtle entrance or floating animation only if it remains tasteful.

### 5. Create handmade details with code

Prefer CSS and SVG for:

- Dotted patterns
- Arrows
- Stars
- Clouds
- Simple blobs
- Torn-paper edges
- Underlines
- Grain overlays
- Decorative lines

Use raster assets only when they materially improve the visual result.

### 6. Make projects believable

- Use the supplied project names and descriptions.
- Use real screenshots only when available.
- If screenshots are unavailable, use abstract visual placeholders clearly designed as placeholders.
- Never invent fake UI details that imply unsupported functionality.
- Keep each project card visually distinct.

### 7. Animation principles

Animations should communicate hierarchy:

- Hero content enters first.
- Character has a subtle delayed entrance.
- Sections reveal as they enter the viewport.
- Cards lift slightly on hover.
- Arrows move a few pixels on hover.
- Decorative objects float slowly.

Always support:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 8. Responsive review

Check at least:

- 320px wide
- 375px wide
- 768px wide
- 1024px wide
- 1440px wide

Look specifically for:

- Horizontal overflow
- Character cropping
- Oversized headings
- Decorative elements leaving the viewport
- Cards becoming too narrow
- Buttons wrapping badly
- Poor contrast
- Excessive vertical gaps

### 9. Quality review

Before completing:

- Run lint.
- Run type-check if available.
- Run production build.
- Check image paths.
- Check alt text.
- Check keyboard focus.
- Check reduced-motion behavior.
- Confirm the homepage works with JavaScript enabled and does not show broken assets.
- Remove debug output and unused imports.

## Definition of done

The homepage should feel intentional at every scroll position. It should combine playful artwork and editorial typography with reliable, maintainable frontend implementation. It must be responsive, accessible, performant, and easy to update.
