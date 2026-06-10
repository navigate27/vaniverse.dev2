# portfolio.vaniverse.dev

New portfolio for Ivan Ferrer — a semi-minimalist, dark, fully responsive site built to live on the `portfolio.vaniverse.dev` subdomain. The original site at `vaniverse.dev` is a separate project and is left untouched.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first, token-driven)
- [Framer Motion](https://www.framer.com/motion/) for kinetic text
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scroll
- `react-icons`
- Fonts: Space Grotesk (display/body) + Instrument Serif (italic accents) via `next/font/google`

## Design

- Near-black palette (`--color-bg: #0a0a0c`) with the signature red accent (`#fd3345`).
- Large fluid side margins via `--side-pad: clamp(1.5rem, 8vw, 12rem)`.
- Lightweight, no heavy raster art — ambient backdrop and grain are pure CSS.
- All motion respects `prefers-reduced-motion`.

Design tokens live in [`app/globals.css`](app/globals.css); the shared layout wrapper is [`app/components/Section.tsx`](app/components/Section.tsx).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Content

- Section copy lives in each component under `app/sections/`.
- Projects are placeholder stand-ins in [`app/data/projects.ts`](app/data/projects.ts) — swap `title`, `year`, `blurb`, `stack`, and `link` (and add a screenshot) when ready.

## Deploy (Vercel subdomain)

1. Push this repo to its own GitHub repository.
2. Create a **new** Vercel project pointed at it (do not touch the existing `vaniverse.dev` project).
3. In Project → Settings → Domains, add `portfolio.vaniverse.dev`.
4. At your DNS provider, add the `CNAME` Vercel shows for the `portfolio` subdomain (typically `cname.vercel-dns.com`).

The old site keeps `vaniverse.dev`; this one serves `portfolio.vaniverse.dev`.
