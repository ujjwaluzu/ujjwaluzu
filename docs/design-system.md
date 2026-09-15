# ujjwaluzu Homepage Design System

## Brand personality

The visual identity should communicate:

- Curious
- Creative
- Playful
- Technical
- Human
- Experimental
- Always learning

The site should feel like a personal sketchbook mixed with a polished creative portfolio.

## Color palette

Use these as starting tokens. Adjust contrast where necessary for accessibility.

```css
:root {
  --ink: #0b0b0b;
  --ink-soft: #1f1f1f;
  --paper: #fff8e7;
  --paper-deep: #f3ead2;
  --sky: #a7d8ff;
  --blue: #3b82f6;
  --yellow: #ffdd57;
  --pink: #ff6b9b;
  --green: #a7f070;
  --orange: #ff765f;
  --white: #ffffff;
  --muted: #77736b;
  --line: rgba(11, 11, 11, 0.16);
}
```

Do not use every color everywhere. Most sections should use one dominant background with one or two accent colors.

## Section backgrounds

### Hero

- Dominant background: sky blue
- Add subtle clouds, grain, and illustrated atmosphere
- Use dark ink typography
- Use yellow as the main highlight
- Use the character illustration as the visual anchor

### Paper sections

- Dominant background: warm off-white
- Add a very subtle paper texture or noise layer
- Use dark text
- Use yellow, pink, and green as small accents
- Cards may use white, pale blue, or dark ink backgrounds

### Dark sections

- Dominant background: near-black
- Use off-white text
- Use blue, yellow, or orange for emphasis
- Add subtle grain, stars, or hand-drawn marks
- Do not make the section visually noisy

## Typography

Use a strong display face for major headings and a clean sans-serif for body text.

Suggested hierarchy:

- Eyebrow: uppercase, small, letter-spaced
- Hero title: very large, bold, tightly spaced
- Section title: large, bold, expressive
- Body: readable, relaxed line height
- Labels: small uppercase or compact monospace/sans-serif

If the project already has fonts configured, reuse them. Otherwise choose a distinctive display font paired with a highly readable sans-serif. Avoid using too many font families.

## Layout

- Use a centered responsive container.
- Desktop content width: approximately 1120–1280px.
- Use generous vertical spacing between sections.
- Allow selected elements to overlap section boundaries.
- Keep decorative elements inside safe layout bounds.
- Use a responsive grid for project cards and technology cards.
- Avoid horizontal scrolling.

## Components and styling

### Buttons

Buttons should be rounded or pill-shaped, with:

- Strong contrast
- Compact arrow icon
- Clear hover state
- Small translate or arrow movement on hover
- Visible focus state

### Cards

Cards should feel tactile:

- Soft border
- Slight shadow or paper lift
- Rounded corners
- Occasional small rotation for selected decorative cards
- Clear hover elevation
- No excessive glassmorphism

### Handwritten details

Use handwritten typography sparingly for:

- Sticky notes
- Arrows
- Side comments
- Short annotations
- Small motivational phrases

Never use handwritten styling for long body paragraphs.

### Textures

Use subtle textures only:

- Paper grain
- Noise
- Dotted patterns
- Fine grid
- Brush strokes
- Torn edges

Textures must not reduce text readability.

## Motion

Use restrained, purposeful motion:

- Fade and upward reveal on scroll
- Floating notes with very small movement
- Gentle cloud drift
- Character float or slight rotation
- Project card hover lift
- Arrow movement inside buttons
- Respect `prefers-reduced-motion`

Avoid constant rapid motion, distracting parallax, or animation on every element.
