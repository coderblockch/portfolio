# Guidance for AI agents

This is the personal developer portfolio of David Jimenez (@coderblockch). Visible site content is in Spanish.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4, imported in `app/globals.css`
- ESLint 9 with `eslint-config-next`
- Deployed on Vercel

Requires Node.js 20 or later.

## Project layout

- `app/layout.tsx` — root layout, fonts, and metadata
- `app/page.tsx` — composes the page sections
- `app/components/` — section components: `Navbar`, `Hero`, `About`, `Projects`, `Skills`, `Contact`
- `app/globals.css` — Tailwind theme tokens and global styles
- `public/` — static assets (for example `cv.pdf`)

`AGENTS.md` contains Next.js-generated agent rules. Prefer this file for repo-specific guidance.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint` via the `lint` script)

## Conventions

- Use conventional commit messages (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`, and similar).
- Keep user-facing UI copy in Spanish. Docs and agent guides may be in English.
- Prefer small, focused changes. Do not reintroduce unused Create-Next-App template assets.
