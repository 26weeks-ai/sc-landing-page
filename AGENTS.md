# Repository Guidelines

## Project Structure & Module Organization

- `index.html`: Vite entry point and site metadata.
- `src/`: React + TypeScript source.
  - `src/main.tsx`: mounts the app.
  - `src/App.tsx`: primary page layout/content.
  - `src/components/`: page components (see `ui/` for reusable UI primitives).
  - `src/styles/`: shared style tokens/utilities (e.g., `colors.ts`).
- `public/`: static assets served from `/` (favicons, `og-image.png`, `CNAME`).
- `build/`: production output from Vite (`vite.config.ts` sets `outDir: build`); do not edit by hand.

## Build, Test, and Development Commands

Use Node.js 20+ and npm (the repo includes `package-lock.json`).

- `npm ci`: clean install (matches CI/GitHub Pages).
- `npm run dev`: starts the Vite dev server (configured for port `3000`).
- `npm run build`: builds a production bundle into `build/`.
- `./run.sh`: convenience script that installs dependencies (if missing) and runs `npm run dev`.

## Coding Style & Naming Conventions

- Language: TypeScript/TSX with React function components.
- Styling: Tailwind CSS (utility classes) plus shared tokens in `src/styles/colors.ts`.
- Keep changes consistent with nearby code (2-space indentation; semicolons). Prefer single quotes in TS/TSX unless a file already uses double quotes.
- Component/files: `PascalCase.tsx` under `src/components/`; non-component helpers in `camelCase.ts`.

## Testing Guidelines

No dedicated test runner is configured in this repository. For changes:

- Run `npm run build` to ensure the production build succeeds.
- Smoke-test locally via `npm run dev` (verify layout, navigation anchors, and responsive behavior).

## Commit & Pull Request Guidelines

- Commit messages in `git log` are short and imperative (e.g., “add favicon”, “minor changes…”, “Refactor…”). Conventional Commits are not required.
- PRs should include: a brief description, how to verify, and screenshots for UI changes (desktop + mobile). Link relevant issues when applicable.
- Deployment/domain changes should call out updates to `public/CNAME` and any SEO/meta changes in `index.html`.

## Utilities

- Regenerate favicon PNGs: `python3 scripts/generate_favicons.py` (writes to `public/`).
