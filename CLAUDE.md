# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website built with Next.js 15 (App Router) and deployed to Netlify. The site showcases various projects including finance tools, motorcycle routes, hardware prototypes, and AI experiments.

**Tech Stack:**
- Next.js 15.2.1 with React 19
- TypeScript with strict mode
- Tailwind CSS v4 with `@tailwindcss/typography`
- Static export mode (`output: 'export'`)
- Deployed to Netlify

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build static site (outputs to /out directory)
npm run build

# Run linter
npm run lint
```

## Architecture

### Project Data Model

Projects are **hardcoded as a const array** in `/app/page.tsx` (not stored in a database or CMS):

```typescript
const projects = [
  {
    name: "Project Name",
    description: "Short description",
    url: "/projects/project-slug",      // Internal route
    externalUrl: "https://...",          // External link or "#"
    isLive: true,                        // Controls visibility/clickability
    logo: "/icon.svg"                    // SVG in /public
  }
];
```

**Project States:**
- `isLive: true` - Clickable card on home page, links to detail page
- `isLive: false` - Grayed out, shows "In development" label, not clickable

### Adding a New Project

1. **Create project SVG logo** in `/public/project-name.svg`
   - 24×24px, use `stroke="currentColor"` for consistency

2. **Create project page** at `/app/projects/project-slug/page.tsx`
   - Follow existing pattern: back link, header, status badge, prose content
   - Use Tailwind's `.prose` class for readable typography
   - Standard layout: `max-w-4xl mx-auto px-4 py-16`

3. **Add to projects array** in `/app/page.tsx`
   - Insert entry in appropriate position (thematically or chronologically)
   - Set `isLive: false` initially to keep it in development mode

### Routing Structure

```
app/
├── page.tsx              # Home page with project grid
├── layout.tsx            # Root layout (nav + footer)
├── about/page.tsx        # About page
└── projects/
    ├── [project-slug]/page.tsx  # Individual project pages
```

### Static Assets

- **Location:** `/public/` directory
- **SVG Icons:** All project logos (motorcycle.svg, calculator.svg, dog.svg, etc.)
- **Images:** Profile photos and project images
- **Note:** Images use `unoptimized: true` (required for static export)

## Styling Conventions

- **Utility-first:** Use Tailwind classes exclusively
- **Typography:** `.prose` and `.prose-lg` for long-form content
- **Colors:** Grays (50-900), blue accent (600)
- **Containers:** `max-w-4xl` or `max-w-6xl` with `px-4 py-16`
- **Custom styles:** Only in `/app/globals.css` (mostly prose overrides)

## Deployment

**Netlify Configuration** (`netlify.toml`):
- Build: `npm run build`
- Publish: `out/` directory
- Node 20, npm 10
- Client-side routing via redirect (all routes → /index.html)

Automatic deployment on push to `main` branch.

## Important Notes

- **No server-side rendering** - All pages are static HTML
- **No API routes** - Pure static site
- **No testing framework** - Currently no test suite configured
- **TypeScript path alias:** `@/*` maps to project root
- **Static export limitation:** Cannot use Next.js Image optimization (hence `unoptimized: true`)
