# ujjwaluzu — Coming Soon

A minimal, editorial coming-soon landing page for the personal portfolio **ujjwaluzu** (https://ujjwaluzu.in).

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** icons

## Project structure

```
src/
  app/
    layout.tsx            Root layout — fonts, global metadata
    page.tsx              Composes the landing page
    globals.css           Design tokens & animations (Tailwind v4 @theme)
    icon.svg              Favicon (U monogram)
  components/
    header.tsx            Monogram + brand + decorative tagline
    hero-section.tsx      Eyebrow, headline, description
    social-links.tsx      LinkedIn / GitHub / Instagram icons
    abstract-background.tsx  Soft layered "dunes" at the bottom
    footer.tsx            SAME PERSON · BIGGER THINGS.
  lib/
    site.ts               Brand + social URL configuration (placeholders)
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

If port 3000 is already in use you can pass another port:

```bash
npm run dev -- -p 3001
```

## Building for production

```bash
npm run build      # Next.js 16 builds with Turbopack
npm start          # serve the production build
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects Next.js automatically — no framework config needed.
3. Deploy. You get a preview URL immediately.

### Connecting the custom domain (ujjwaluzu.in)

1. In the Vercel project → **Settings → Domains**, add `ujjwaluzu.in`.
2. Add the `www.ujjwaluzu.in` variant too if you want it (Vercel handles the redirect).
3. At your domain registrar, point the domain to Vercel:
   - **Nameservers**: copy the two `ns*.vercel-dns.com` entries Vercel shows and replace your registrar's nameservers (recommended), **or**
   - **CNAME record**: `www` → `cname.vercel-dns.com` and edit the `@` record per Vercel's instructions.
4. Vercel issues an automatic TLS certificate (HTTPS included).

## Updating your social media URLs

Edit `src/lib/site.ts`:

```ts
socials: {
  linkedin: "https://www.linkedin.com/in/yourname",
  github: "https://github.com/yourname",
  instagram: "https://www.instagram.com/yourname",
}
```

Links contain the placeholder `YOUR-HANDLE` until you set real URLs — while placeholder, the icons render muted and non-clickable on the page, so nothing is ever linked to a made-up account.

## Design tokens

Colors, fonts, and keyframes are defined in `src/app/globals.css` using Tailwind v4's `@theme`:

- `paper` `#faf9f7` · `ink` `#171717` · `muted` `#6b6b6b` · `line` `#dcdad6` · `ivory` `#f3f0eb` · `sand` `#e8e3da` · `stone` `#d8d2c8`
- Serif: **Cormorant Garamond** (headline) · Sans: **Geist** (body)

Animations respect `prefers-reduced-motion`.