# NEURIK Design System

Reference for the colour theme, typography, layout, and visual patterns used across the NEURIK marketing site.

**Source of truth:** `app/globals.css`, `app/layout.tsx`, and `components/ui/`.

---

## Design philosophy

The site uses a **high-contrast, scale-style palette**: pure black and white as the primary axis, with a few supporting neutrals and one accent surface (sage/olive CTA card). The aesthetic is technical and restrained — no rainbow gradients; emphasis comes from contrast, grid textures, glass panels, and motion.

Default page mode is **dark** (black background, white text). Light and surface bands alternate sections for rhythm.

---

## Typography

### Font families

| Role | Family | Weights | Source | CSS variable | Tailwind class |
|------|--------|---------|--------|--------------|----------------|
| **Body / UI** | Google Sans | 400, 500 | Local files (`app/fonts/GoogleSans-*.ttf`) | `--font-google-sans` | `font-sans` |
| **Display / headings** | Michroma | 400 | Google Fonts via `next/font` | `--font-michroma` | `font-display` |
| **Mono / labels** | IBM Plex Mono | 400 | Google Fonts via `next/font` | `--font-plex-mono` | `font-mono` |

Fallback stacks (from `@theme`):

- Sans: `ui-sans-serif, system-ui, sans-serif`
- Display: `ui-sans-serif, system-ui, sans-serif`
- Mono: `ui-monospace, monospace`

### Global rules

- **Body text** uses Google Sans (`font-sans`), antialiased.
- **All heading elements** (`h1`–`h6`) use Michroma at `font-weight: 400` with `letter-spacing: 0.02em`.
- `.font-display` applies Michroma + `0.02em` tracking (used for badges, marquee, card titles).

### Type scale (common patterns)

| Use | Classes / size | Font |
|-----|----------------|------|
| Hero title | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]` | Display |
| Page hero (blog) | `text-4xl md:text-5xl lg:text-6xl leading-[1.1]` | Display |
| Section heading | `text-2xl md:text-3xl` or `text-3xl md:text-4xl` | Display (via `h2`) |
| Hero subtitle | `text-xl md:text-2xl text-foreground/85` | Sans |
| Body / description | `text-base` or `text-[1.05rem] leading-[1.7] text-muted` | Sans |
| Small UI / footer links | `text-sm text-muted` | Sans |
| Eyebrow / badge | `text-[0.65rem] uppercase tracking-[0.18em]`–`tracking-[0.22em]` | Display |
| Mono label (e.g. “Scroll”) | `text-[0.65rem] uppercase tracking-[0.2em] text-muted` | Mono |
| Section label | `text-xs uppercase tracking-[0.14em] text-muted` | Sans, semibold |

### Letter spacing conventions

- Headings (Michroma): `0.02em` (global) or `tracking-tight` on large display blocks
- Badges / eyebrows: `0.14em`–`0.22em`
- Buttons: `tracking-[0.02em]`
- Mono labels: `tracking-[0.2em]`

---

## Colour palette

### Brand primitives

Defined in `:root` in `app/globals.css`.

| Token | Hex | Usage |
|-------|-----|--------|
| `--brand-black` | `#000000` | Primary dark background, light-section text |
| `--brand-white` | `#ffffff` | Primary light background, dark-section text |
| `--brand-elevated` | `#0a0a0a` | Alternate dark band, incubator banner |
| `--brand-muted-dark` | `#888888` | Muted text on dark backgrounds |
| `--brand-muted-light` | `#666666` | Muted text on light backgrounds |
| `--brand-surface-light` | `#f4f4f2` | Warm off-white section background |
| `--brand-cream` | `#ffffff` (alias) | Legacy alias for white |
| `--brand-cta-card` | `#c8d0c2` | Sage/olive inset CTA card background |
| `--brand-cta-card-foreground` | `#2a2f27` | Text on CTA card |
| `--brand-cta-card-muted` | `#5c6556` | Secondary text on CTA card |

RGB companions (`--brand-black-rgb`, `--brand-white-rgb`, etc.) are used for alpha overlays in borders, surfaces, and grids.

### Semantic tokens (theme-aware)

These remap per section band. Exposed to Tailwind as `--color-*` in `@theme inline`.

| Token | Default (dark) | Tailwind utility |
|-------|----------------|------------------|
| `--background` | `--brand-black` | `bg-background` |
| `--foreground` | `--brand-white` | `text-foreground` |
| `--muted` | `--brand-muted-dark` | `text-muted` |
| `--surface` | white @ 4% opacity | `bg-surface` |
| `--surface-border` | white @ 14% opacity | `border-surface-border` |
| `--accent` | `--brand-white` | `text-accent` / fills |
| `--accent-secondary` | white @ 55% | `text-accent-secondary` |

Brand colour utilities also available: `bg-brand-black`, `text-brand-white`, `bg-brand-surface-light`, etc.

### Section tones

Applied via `SectionWrapper` (`tone` prop) or manual classes.

| Tone | Class | Background | Text | Typical use |
|------|-------|------------|------|-------------|
| **default** | `section-band-default` | `#000000` | White | Hero, dark sections, marquee |
| **light** | `section-band-light` | `#ffffff` | Black | Alternating content sections |
| **surface** | `section-band-surface` | `#f4f4f2` | Black | Soft neutral sections |
| **alt** | `section-band-alt` | `#0a0a0a` | White | Slightly elevated dark band |
| **inset CTA** | `section-inset-dark` | `#c8d0c2` | `#2a2f27` | Final CTA card (nested in light sections) |

Each tone overrides `--background`, `--foreground`, `--muted`, `--surface`, `--surface-border`, and `--accent` for children.

### Opacity patterns

Common alpha uses (via Tailwind arbitrary values or RGB vars):

- Subtle fills: `foreground/[0.02]`–`foreground/[0.05]`
- Borders: `foreground/10`–`foreground/25`, `surface-border`
- Header / dropdown: `bg-background/80` + `backdrop-blur-xl`
- Hero video overlay: `bg-background/30` with gradient scrim

---

## Layout & spacing

### Page shell

- Max content width: `max-w-7xl` (80rem / 1280px)
- Horizontal padding: `px-6 lg:px-8`
- Section vertical padding: `py-24 md:py-32` (`SectionWrapper`)
- Header height: `h-16`, sticky with blur

### Common radii

| Element | Radius |
|---------|--------|
| Buttons | `rounded-lg` |
| Cards / panels | `rounded-xl` or `rounded-2xl` |
| Badges | `rounded-full` |
| Video / media | `rounded-2xl` |
| Blog images | `rounded-xl` (`0.75rem`) |

### Grid backgrounds

Decorative line grids (`.grid-bg`, `.grid-bg-surface`, `.grid-bg-olive`):

| Class | Line colour | Cell size |
|-------|-------------|-----------|
| `grid-bg` | White @ 14% | 64×64px |
| `grid-bg-surface` | Black @ 5% | 72×72px |
| `grid-bg-olive` | CTA border @ 22% | 64×64px |

---

## UI components

### Button (`components/ui/button.tsx`)

Base: `rounded-lg text-sm font-medium tracking-[0.02em]`

| Variant | Style |
|---------|--------|
| **default** | `bg-foreground text-background` — inverts with section tone |
| **outline** | Transparent, `border-foreground/25`, hover fill @ 5% |
| **ghost** | Text only, hover `foreground/5` background |
| **link** | Underline on hover |

| Size | Dimensions |
|------|------------|
| `sm` | `h-9 px-4 text-xs` |
| `default` | `h-11 px-6` |
| `lg` | `h-12 px-8 text-base` |

Focus ring: `ring-2 ring-foreground/40`

**CTA override (Final CTA):** primary button uses explicit `bg-brand-black text-brand-white` on the sage card.

### Badge (`components/ui/badge.tsx`)

`rounded-full border px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.18em]`

| Variant | Style |
|---------|--------|
| **default** | `border-foreground/25 bg-foreground/5` |
| **secondary** | `border-foreground/15 bg-transparent text-muted` |
| **outline** | `border-surface-border text-muted` |

### Surface utilities

| Class | Description |
|-------|-------------|
| `surface-panel` | White panel, `border black/8`, soft shadow — used on light sections |
| `glass-card` | `white/3` fill, `white/12` border, `blur(12px)` |
| `glass-panel` | Dark glass: `black/85`, blur + saturate, inset highlight |
| `glow-border` | White ring + soft outer glow on hover |

---

## Motion & animation

Defined in `lib/motion.ts` and `app/globals.css`.

### Easing

- Primary ease: `[0.32, 0.72, 0, 1]` (`easeOut`)
- Default transition duration: `0.55s`

### Scroll / reveal

- Section enter: fade up `y: 32 → 0`, duration `0.65s`, viewport margin `-80px`
- Stagger children: `0.1s` stagger, `0.06s` delay
- Respects `prefers-reduced-motion: reduce` (disables marquee, scroll hint, smooth scroll)

### Keyframe animations

| Name | Duration | Use |
|------|----------|-----|
| `marquee` | 42s linear infinite | Domain marquee |
| `scroll-hint` | 2.2s ease-in-out infinite | Hero scroll chevron |

### Scroll progress

Fixed 1px bar at top: `bg-foreground`, scales with scroll (`ScrollProgress`).

---

## Logo & brand assets

From `components/ui/logo.tsx` and `public/`:

| Variant | On dark bg | On light bg |
|---------|------------|-------------|
| Full wordmark | `/NEURIK-white.svg` | `/NEURIK-black.svg` |
| Mark (“N”) | `/N-w.svg` | `/N-b.svg` |

Default site theme: `onDark` (white assets).

| Size | Full height | Mark size |
|------|-------------|-----------|
| `sm` | 18px / 20px (md) | 24×24 |
| `md` | 24px | 32×32 |
| `lg` | 32px | 40×40 |

---

## Icons

- **Library:** [Lucide React](https://lucide.dev/) (`lucide-react`)
- Typical size: `h-4 w-4` (nav), `h-5 w-5` (scroll hint)
- Colour: inherits `text-muted` or `text-foreground`, transitions on hover

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Theme tokens | CSS custom properties + `@theme inline` |
| Fonts | `next/font/local` + `next/font/google` |
| Motion | Framer Motion 12 |
| Component variants | `class-variance-authority` + `tailwind-merge` |

### Where to change things

| What | File |
|------|------|
| Colours & utility classes | `app/globals.css` |
| Font loading | `app/layout.tsx` |
| Section tones | `components/sections/SectionWrapper.tsx` |
| Buttons / badges | `components/ui/button.tsx`, `components/ui/badge.tsx` |
| Motion presets | `lib/motion.ts` |

---

## Quick reference — default dark page

```
Background:     #000000
Text:           #ffffff
Muted text:     #888888
Borders:        rgba(255,255,255,0.14)
Body font:      Google Sans 400
Headings:       Michroma 400
Labels:         IBM Plex Mono 400, uppercase
```
