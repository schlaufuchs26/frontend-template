# 🦊 frontend-template

[![coverage](https://raw.githubusercontent.com/schlaufuchs26/frontend-template/badge/coverage.svg)](https://github.com/schlaufuchs26/frontend-template/actions/workflows/test.yml?query=branch%3Amain)

Minimal [Bun](https://bun.sh) + TypeScript + React starter for static web projects. Ships to GitHub Pages, devs locally with HMR.

## Quick Start

```bash
curl -fsSL https://bun.sh/install | bash  # if you haven't already

git clone https://github.com/schlaufuchs26/frontend-template.git
cd frontend-template
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
index.html          — entry point for dev server and production build
frontend.tsx         — React app (TSX)
package.json        — React 19 + dev tooling
tsconfig.json       — strict TS, ESNext
bunfig.toml         — test preload + coverage thresholds
biome.json          — formatter + linter config
knip.json           — dead code detection
.githooks/          — pre-commit hook (runs bun run checks)
.github/workflows/  — CI: test, lint, typecheck, deploy, dead code
scripts/            — coverage report + badge generators
tests/              — Happy DOM + Testing Library setup, component tests
```

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Dev server with HMR on :3000 |
| `bun run build` | Bundle index.html → dist/ |
| `bun test` | Run tests |
| `bun run test:coverage` | Text coverage report |
| `bun run test:ci` | Generate coverage/lcov.info for CI |
| `bun run checks` | Format + typecheck + lint + dead code + tests |

## Deploy

Push to `main` and GitHub Actions deploys to Pages automatically:

- **Build:** `bun install && bun run build`
- **Deploy:** `dist/` → `https://schlaufuchs26.github.io/frontend-template/`

Manual trigger: Actions → Deploy to GitHub Pages → Run workflow.

## Testing

Bun's built-in test runner + Happy DOM + Testing Library. Pre-configured in `bunfig.toml`. Tests auto-discover: `*.test.{ts,tsx}`, `*.spec.{ts,tsx}`.

```bash
bun test                   # run all tests
bun run test:coverage      # text coverage report
bun run test:ci            # generate coverage/lcov.info
bun test --watch           # watch mode
```

### Coverage

Thresholds enforced at 80% lines/functions/statements. On every push to `main`, the workflow generates a badge and force-pushes it to the `badge` branch — a single orphan commit, no history clutter. PRs get a sticky comment with per-file coverage.

## Philosophy

- **Zero-config dev server.** `bun index.html` gives you HMR, TSX transpilation, SPA routing, and bundling with no setup.
- **No framework lock-in.** Just React. Swap to Vue, Svelte, or vanilla — change `frontend.tsx` and go.
- **HTML-first.** Same `index.html` is the dev entry point and the build entry point. No dual files, no glue code.
- **Grows with you.** Start here, add Tailwind, shadcn, whatever. No scaffolding to undo.
