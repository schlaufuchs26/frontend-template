# 🦊 frontend-template

[![coverage](https://raw.githubusercontent.com/schlaufuchs26/frontend-template/badge/coverage.svg)](https://github.com/schlaufuchs26/frontend-template/actions/workflows/test.yml)

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
bunfig.toml       — test preload config
tests/
  happydom.ts         — registers DOM globals for testing
  testing-library.ts  — matchers + auto-cleanup + TS declarations
  frontend.test.tsx   — component tests
```

## Scripts

| Command | What it does |
|---|---|
| `bun dev` | Dev server with HMR on :3000 |
| `bun run build` | Bundle index.html → dist/ |
| `bun start` | Start server (same as dev) |
| `bun test` | Run tests with Bun's built-in runner |
| `bun run test:coverage` | Text coverage report |
| `bun run test:ci` | Generate coverage/lcov.info for CI |
| `bun run checks` | Format + typecheck + lint + dead code + tests |

## Deploy

Push to `main` and GitHub Actions deploys to Pages automatically:

- **Build:** `bun install && bun run build`
- **Deploy:** `dist/` → `https://schlaufuchs26.github.io/frontend-template/`

Manual trigger available via Actions → Deploy to GitHub Pages → Run workflow.

## Testing

Bun ships with a fast, Jest-compatible test runner. React component testing works out of the box with Happy DOM and Testing Library — pre-configured via `bunfig.toml`.

```bash
bun test                   # run all tests
bun run test:coverage      # text coverage report in terminal
bun run test:ci            # generate coverage/lcov.info for CI
bun test --watch           # watch mode
```

Tests auto-discover: `*.test.{ts,tsx}`, `*.spec.{ts,tsx}`.

### Coverage

Coverage thresholds (80% lines/functions/statements) are enforced via `bunfig.toml`. On every push to `main`, the test workflow generates a coverage badge and force-pushes it to the `badge` branch — a single orphan commit, no history clutter. The badge above stays up to date with no external services.

```toml
# bunfig.toml
[test]
coverageSkipTestFiles = true
coverageThreshold = { lines = 0.8, functions = 0.8, statements = 0.8 }
```

PRs get a sticky comment with per-file coverage. Coverage runs in CI on every push and PR. If coverage drops below 80%, the build fails.

### What's included

| File | Purpose |
|---|---|
| `tests/happydom.ts` | Registers DOM globals before anything else loads |
| `tests/testing-library.ts` | Extends expect, auto-cleanup, TS declarations |
| `bunfig.toml` | Tells Bun to preload the setup scripts before tests |

Add more test files anywhere — `bun test` finds them automatically.

## Philosophy

- **Zero-config dev server.** `bun index.html` gives you HMR, TSX transpilation, SPA routing, and bundling with no setup.
- **No framework lock-in.** Just React. Swap to Vue, Svelte, or vanilla — change `frontend.tsx` and go.
- **HTML-first.** Same `index.html` is the dev entry point and the build entry point. No dual files, no glue code.
- **Grows with you.** Start here, add Tailwind, shadcn, whatever. No scaffolding to undo.
