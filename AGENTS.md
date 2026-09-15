# AGENTS.md — ujjwaluzu Portfolio

## Project goal

Build and maintain a polished, original personal portfolio website for **Ujjwal Baunthiyal**, branded as **ujjwaluzu**.

The current project is an existing Next.js application. Inspect the repository before making changes. Preserve the existing framework, routing conventions, dependencies, and configuration unless a change is genuinely necessary.

## Core instructions

- Build the real homepage at `/`; do not retain the old coming-soon page.
- Use the supplied visual references for direction, not as a single full-page image.
- Recreate the design using semantic HTML, React components, CSS, SVG, and lightweight animations.
- Use the supplied Ujjwal character illustration as the primary visual identity.
- Preserve transparency and image quality when using the character artwork.
- Do not invent personal facts, employment dates, locations, statistics, clients, or achievements.
- Use placeholders when information is unknown, and make placeholders easy to replace.
- Do not invent detailed functionality for projects.
- Keep all personal content easy to edit from a central data file or content module.
- Do not add unnecessary dependencies.
- Prefer existing installed packages and browser APIs.
- Use accessible semantic markup, alt text, keyboard-friendly controls, and sufficient color contrast.
- Ensure the page is responsive from small mobile screens through large desktop screens.
- Avoid layout shifts by defining image dimensions or aspect ratios.
- Do not use the mockup image as the website itself.

## Visual direction

The design should feel like a creative developer portfolio rather than a generic SaaS website:

- Sky-blue illustrated hero
- Warm off-white paper sections
- Dark textured sections
- Yellow, pink, green, blue, and orange accents
- Bold editorial display typography
- Handwritten-style annotations
- Sticky notes, doodles, arrows, stars, and paper cards
- Torn-paper section transitions
- Slightly imperfect, handmade composition
- High-quality spacing and responsive hierarchy
- Subtle motion rather than excessive animation

## Engineering standards

- Break the page into reusable components.
- Keep components focused and readable.
- Use stable keys for lists.
- Avoid duplicated content and styling where practical.
- Keep client components limited to places that require interactivity or animation state.
- Respect the existing Tailwind/CSS architecture.
- Use CSS variables for design tokens when appropriate.
- Avoid hardcoding viewport-specific hacks.
- Use `next/image` where appropriate, while ensuring transparent artwork renders correctly.
- Keep decorative elements non-interactive and mark them appropriately for assistive technology.

## Before finishing

Run the available checks, such as:

- lint
- type-check
- build

Fix all errors and inspect the page at desktop and mobile widths. Confirm that `/` loads successfully and that the old coming-soon interface has been removed or replaced.
