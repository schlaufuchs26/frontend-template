# 🦊 frontend-template

Minimal [Bun](https://bun.sh) + TypeScript + React starter for static web projects. Ships to GitHub Pages, devs locally with HMR.

## Quick Start

```bash
# Install Bun if you haven't:
curl -fsSL https://bun.sh/install | bash

# Clone and run:
git clone https://github.com/schlaufuchs26/frontend-template.git
cd frontend-template
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
index.html        — entry point for dev server and production build
frontend.tsx       — React app (TSX)
package.json      — React 19 + Bun types
tsconfig.json     — strict TS, ESNext, all the strict flags
```

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Dev server with HMR on :3000 |
| `bun run build` | Bundle index.html → dist/ |
| `bun start` | Start server (same as dev) |

## Deploy

Push to `main` and GitHub Actions deploys to Pages automatically:

- **Build:** `bun install && bun run build`
- **Deploy:** `dist/` → `https://schlaufuchs26.github.io/frontend-template/`

Manual trigger available via Actions → Deploy to GitHub Pages → Run workflow.

## Philosophy

- **Zero-config dev server.** `bun index.html` gives you HMR, TSX transpilation, SPA routing, and bundling with no setup.
- **No framework lock-in.** Just React. Swap to Vue, Svelte, or vanilla — change `frontend.tsx` and go.
- **HTML-first.** Same `index.html` is the dev entry point and the build entry point. No dual files, no glue code.
- **Grows with you.** Start here, add Tailwind, shadcn, whatever. No scaffolding to undo.
