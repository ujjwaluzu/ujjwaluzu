# Homepage Implementation Plan

## Objective

Replace the existing coming-soon page with a complete, responsive, one-page portfolio homepage for **ujjwaluzu**.

The mockup is a visual reference. Build the page with actual components and styles.

## Suggested component structure

Use a structure similar to:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── site-header.tsx
│   ├── hero-section.tsx
│   ├── tech-marquee.tsx
│   ├── featured-projects.tsx
│   ├── project-card.tsx
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── tech-stack.tsx
│   ├── contact-section.tsx
│   ├── site-footer.tsx
│   └── decorative-elements.tsx
└── lib/
    └── site-content.ts
```

Adapt this to the existing repository instead of blindly creating duplicate files.

## Section order

1. Header
2. Hero
3. Technology strip
4. Featured projects
5. About
6. Experience
7. Technology stack
8. Contact
9. Footer

## Header

Include:

- U monogram
- `ujjwaluzu`
- Home
- About
- Projects
- Experience
- Contact
- `Let's Talk →`

Links may be placeholders for now. The header should remain readable on mobile.

## Hero

Include:

- Sky-blue background
- Subtle paper/grain texture
- Clouds and simple decorative shapes
- Eyebrow such as `WEB DEVELOPER`
- Large text:
  - `Hey, I'm`
  - `UJJWAL`
  - `BAUNTHIYAL`
- Yellow highlighted tagline:
  - `I like to build things for the web.`
- Short introduction mentioning Web Developer Intern at IntelligenceX
- `View My Work →` button
- `About Me ↓` button
- Neutral status text such as `Currently building on the web`
- Main character image on the right on desktop and below the text on mobile
- Sticky notes and doodles around the character

Do not invent a city or location.

## Technology strip

Display:

- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS
- Python
- Django
- MongoDB

Use existing icon packages if already installed. Otherwise use compact text labels and simple visual marks.

## Featured projects

Heading:

`Some things I've built.`

Supporting line:

`Ideas → products, one commit at a time.`

Projects:

### RepoTeam

Find your team. Build together. A platform for connecting collaborators and building projects.

Tags: Django, Python, SQLite

### AniCluster

A platform for anime communities to connect, share, and discover.

Tags: Next.js, TypeScript, Tailwind

### SkillSync

A platform to match learners with the right mentors.

Tags: Next.js, MongoDB, Tailwind

### Uzzutv

A modern streaming platform for entertainment lovers.

Tags: Next.js, MongoDB, Tailwind

Use project screenshots if available. Otherwise create tasteful abstract placeholders rather than fabricated product screenshots.

## About

Heading:

`A curious builder who loves the web.`

Body:

`I'm Ujjwal, a web developer who enjoys exploring technologies, building useful experiences, and turning ideas into products. I'm always learning, experimenting, and looking for what's next.`

Use the character artwork in a polaroid or paper-card composition.

Possible annotations:

- `Probably coding`
- `Good coffee, better code`
- `Always learning`

Do not show invented numerical statistics. Use labels such as:

- Ideas
- Projects
- Experiments

## Experience

Display:

- Role: `Web Developer Intern`
- Company: `IntelligenceX`
- Description: `Building and maintaining web applications, exploring modern technologies, and contributing to impactful products.`

Do not include an employment date unless it is later supplied.

Add a quote card:

`Build with curiosity. Ship with purpose.`

## Tech stack

Heading:

`Technologies I work with.`

Show the same eight technologies in a responsive card grid.

## Contact

Heading:

`LET'S BUILD SOMETHING COOL TOGETHER.`

Supporting text:

`Ideas, opportunities, or just a friendly hello. My inbox is always open.`

Include a visual `Get in Touch →` button and placeholder social items for:

- GitHub
- LinkedIn
- X
- Instagram
- Email

Do not make links functional yet unless already configured.

## Footer

Include:

- U monogram
- `ujjwaluzu`
- `© 2026 Ujjwaluzu`
- `Built with curiosity.`

## Responsive behavior

### Mobile

- Compact header
- Stack hero text and character
- Reduce heading size with responsive CSS
- One-column project cards
- Wrap technology cards
- Keep decorative objects within the viewport
- Ensure buttons are easy to tap
- Avoid fixed-position artwork that causes overflow

### Desktop

- Two-column hero
- Character prominently visible
- Four project cards in a grid
- Decorative overlaps and paper compositions
- Generous whitespace

## Acceptance criteria

- The root page is a complete portfolio homepage.
- The character asset is clearly visible and used as the main identity.
- The visual language matches the references without copying them literally.
- No section is represented only by a screenshot.
- No horizontal overflow at common mobile widths.
- Animations are subtle and reduced when `prefers-reduced-motion` is enabled.
- Lint, type-check, and build pass.
