# GEMINI Project Context: Crunchy Numbers

This document provides a comprehensive overview of the "Crunchy Numbers" project to guide future AI-powered development interactions.

## Project Overview

This is a static website generated using Next.js (`output: 'export'`). The project serves as the personal and professional portfolio for Gary Gurevich, a Finance and Operations leader.

While the `README.md` describes a vision for a platform named "Crunchy Numbers" offering specialized tools for finance professionals, the current implementation is a portfolio site showcasing various projects.

**Core Technologies:**
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **UI Library:** React 19
*   **Styling:** Tailwind CSS 4
*   **Deployment:** Netlify (static export)

## Building and Running

All commands should be run from the project root.

### Development
To run the local development server with hot-reloading:
```bash
npm run dev
```
The site will be available at `http://localhost:3000`.

### Build
To generate the static site for production:
```bash
npm run build
```
The output will be placed in the `out/` directory.

### Linting
To run the linter and check for code quality issues:
```bash
npm run lint
```

## Development Conventions

### Architecture
*   **Static Site Generation:** The project is configured with `output: 'export'` in `next.config.ts`, meaning it functions as a purely static site. All pages are rendered at build time. This implies no server-side rendering or API routes are actively used for the deployed site.
*   **App Router:** The project uses the Next.js App Router for file-based routing. All pages and layouts are located within the `app/` directory.
*   **Unoptimized Images:** `images: { unoptimized: true }` is set in `next.config.ts`, which is a requirement for the static `export` mode.

### Code Style
*   **TypeScript:** All new code should be written in TypeScript.
*   **React:** Use functional components with hooks.
*   **ESLint:** The project uses ESLint with the recommended Next.js configurations (`next/core-web-vitals`, `next/typescript`). Adhere to the rules defined in `eslint.config.mjs`.
*   **Styling:** Use Tailwind CSS utility classes for styling. Avoid writing custom CSS files where possible. Configuration is in `tailwind.config.ts`.

### Deployment
*   **Provider:** The site is deployed on Netlify.
*   **Workflow:** A push to the `main` branch automatically triggers a new deployment, as configured in `.github/workflows/deploy.yml` and `netlify.toml`.
