# 🦊 bun-ts-template

Minimal [Bun](https://bun.sh) + TypeScript + React starter for web projects. Single server, HTML imports, zero config.

## Quick Start

```bash
# Install Bun if you haven't:
curl -fsSL https://bun.sh/install | bash

# Clone and run:
git clone https://github.com/schlaufuchs26/bun-ts-template.git
cd bun-ts-template
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
index.ts        — Bun.serve() entry point, routes, HTML imports
index.html      — shell with inline styles, imports frontend.tsx
frontend.tsx    — React app (TSX)
package.json    — deps (React + Bun types only)
tsconfig.json   — strict TS, ESNext target, bundler resolution
```

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Start dev server with HMR |
| `bun run build` | Bundle frontend.tsx → dist/frontend.js |
| `bun start` | Start production server (no HMR) |

## Philosophy

- **No bundler in dev.** Bun serves `.tsx` directly via HTML imports. HMR works out of the box.
- **No framework lock-in.** Just React. Swap in Vue, Svelte, or vanilla — change `frontend.tsx` and go.
- **Single process.** One `bun` command runs everything. No separate frontend build step in dev.
- **Grows with you.** Start here, add a database, add Tailwind, add whatever. No scaffolding to undo.
