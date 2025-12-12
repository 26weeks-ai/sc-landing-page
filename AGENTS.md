# Repository Guidelines

## Project Structure & Module Organization
`src/` hosts the Vite React app: entry points live in `main.tsx` and `App.tsx`, UI pieces sit under `src/components`, while global tokens, markdown copy, and layout helpers live in `src/styles` and `src/guidelines`. Static assets (favicons, fonts, OG images) belong in `public/`; anything generated at build time should mirror that hierarchy. Deployment artifacts land in `build/` after running the production build. Utility scripts, such as `scripts/generate_favicons.py`, live in `scripts/`—keep automation there so the root stays clean.

## Build, Test, and Development Commands
- `npm install`: install/update node modules defined in `package.json`.
- `npm run dev`: start the Vite dev server with hot reload on `http://localhost:5173`; use this for manual QA and visual tweaks.
- `npm run build`: emit the optimized static bundle into `build/`; run before opening a PR to ensure the compiler stays green.
- `bash run.sh`: convenience launcher that wires environment defaults; prefer it in CI or when replicating production flags.

## Coding Style & Naming Conventions
Use TypeScript everywhere (`.tsx` for components) and favor small, pure functional components. Component files and directories follow `PascalCase` (e.g., `HeroSection.tsx`), hooks use `useCamelCase`, and utility helpers use `camelCase`. Stick to Tailwind utility classes with `clsx` or `tailwind-merge` for conditional styling; add scoped CSS tokens in `src/styles/*.css` only when utilities fall short. Keep imports absolute from `src/` to avoid brittle relative paths, and ensure any Radix primitives stay wrapped in local components for consistent theming.

## Testing Guidelines
Automated tests are not yet wired in, so every PR must include a manual smoke test plan in the description (e.g., “visit /, expand FAQ, verify accordion state”). When adding tests, colocate them in `src/__tests__` or alongside the component as `Component.test.tsx`, and prefer Vitest with React Testing Library for DOM assertions. Aim for scenario-based tests that cover interactive flows rather than snapshot-only coverage.

## Commit & Pull Request Guidelines
Follow the existing history: short, imperative subject lines under ~60 characters (`"add faq entry"`, `"refactor layout props"`). Group related changes per commit; no “fix stuff” bundles. Pull requests should describe the problem, the solution, and visual/UX impact, plus link issues or tasks. Attach before/after screenshots or recordings for UI changes, note any configuration steps (feature flags, env vars), and confirm `npm run build` output or manual test steps in a checklist before requesting review.
