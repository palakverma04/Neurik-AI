# NEURIK AI

Marketing site for [NEURIK AI](https://neurik.ai) — built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/                  # Routes and layouts
components/
  blog/               # Blog archive, featured, markdown renderer
  layout/             # Header, footer, nav, banner
  motion/             # Shared animation wrappers
  sections/           # Page sections and templates
  ui/                 # Button, badge, logo
lib/
  content/            # Page copy, products, industries, blog posts
  motion.ts           # Framer Motion variants
  utils.ts            # cn() helper
public/               # Static assets (logos, media)
```

## Content

Page copy lives in `lib/content/`. Blog posts are markdown files under `lib/content/blog/posts/` with optional assets served via `/blog-assets/[slug]/…`.
