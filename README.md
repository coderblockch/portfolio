# 🧑‍💻 Personal Portfolio

My developer portfolio — a fast, responsive single-page site built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It showcases who I am, the projects I've built, and how to reach me.

## Sections

- **Hero** — intro and call to action
- **About** — background and how I work
- **Projects** — featured work with links
- **Skills** — tech stack
- **Contact** — how to get in touch

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- ESLint

## Run Locally

```bash
git clone https://github.com/coderblockch/portfolio.git
cd portfolio
npm install
npm run dev
# open http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deploy

Optimized for [Vercel](https://vercel.com/new). Connect the repo and it deploys automatically on push to `main`.

## Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  components/   # Navbar, Hero, About, Projects, Skills, Contact
public/         # static assets
```
