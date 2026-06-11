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
index.ts          — Bun.serve() for local dev (HMR, routes)
index.html        — dev shell, imports frontend.tsx directly (also the build entry point)
frontend.tsx       — React app (TSX)
package.json      — React 19 + Bun types
tsconfig.json     — strict TS, ESNext, all the strict flags
```

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Dev server with HMR on :3000 |
| `bun run build` | Bundle frontend.tsx → dist/frontend.js |
| `bun start` | Production server (no HMR) |

## Deploy

Push to `main` and GitHub Actions deploys to Pages automatically:

- **Build:** `bun install && bun run build`
- **Deploy:** `dist/` → `https://schlaufuchs26.github.io/frontend-template/`

Manual trigger available via Actions → Deploy to GitHub Pages → Run workflow.

## Philosophy

- **No bundler in dev.** Bun serves `.tsx` directly via HTML imports. HMR works out of the box.
- **No framework lock-in.** Just React. Swap to Vue, Svelte, or vanilla — change `frontend.tsx` and go.
- **HTML-first build.** `bun build index.html` bundles scripts, styles, and assets from a single entry point.
- **Grows with you.** Start here, add Tailwind, shadcn, whatever. No scaffolding to undo.
