# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 16 landing site for a luxury perfume brand (DELURE). One route: `app/page.tsx` composes all page sections in order:

```
Navbar → Hero → BrandStory → FragranceNotes → Bestsellers →
ImmersiveVisual → WhyUs → Testimonials → Experience → FAQ → FinalCTA → Footer
```

Each section lives as its own file in `components/` (e.g. `components/hero-section.tsx`). All are Client Components using Framer Motion for scroll-driven animations.

**UI primitives** in `components/ui/` are shadcn/ui components (New York style, Radix-backed). Add new ones via `npx shadcn@latest add <component>` — do not hand-write them.

**Styling** uses Tailwind v4 with CSS variable–based theming defined in `app/globals.css`. The palette is ivory/beige/black with a warm bronze accent. Custom tokens available as Tailwind utilities: `text-ivory`, `text-cream`, `text-sand`, `text-charcoal`, `text-gold`. Serif headings use `font-serif` (Playfair Display); body uses `font-sans` (Inter). Both are loaded via `next/font` in `app/layout.tsx`.

**Fonts:** `--font-inter` and `--font-playfair` CSS variables are set on `<html>`.

**Images:** stored in `public/images/`. `next.config.mjs` sets `images.unoptimized: true` and `typescript.ignoreBuildErrors: true`.

**Analytics:** Vercel Analytics is included only in production (`process.env.NODE_ENV === 'production'`).

`lib/utils.ts` exports the standard `cn()` helper (clsx + tailwind-merge). Hooks are in `hooks/`.
