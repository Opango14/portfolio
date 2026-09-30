# Timothy Opango — Portfolio

Personal portfolio for Timothy Opango Osundwa, backend & full-stack software developer. "Opanode" is his engineering approach/brand, covered on its own page — the site itself is his.

## Stack

React · TypeScript · Vite · Tailwind CSS v4 · React Router

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build, output in dist/
npm run preview   # preview the production build
```

## Pages

| Route         | Content                                   |
|---------------|--------------------------------------------|
| `/`           | Hero + a short teaser of top projects       |
| `/work`       | All projects, in brief                      |
| `/expertise`  | Skills, grouped by what they build          |
| `/journey`    | Experience timeline + education             |
| `/opanode`    | The Opanode approach/brand                  |
| `/contact`    | Contact links                               |

## Structure

```
src/
  data/content.ts        All copy: profile, projects, experience, skills — edit this to update the site
  components/            Building blocks (Hero, Nav, Footer, SelectedWork, etc.)
  pages/                  One file per route, composed from components/
  hooks/useTheme.ts       Dark mode toggle, persisted to localStorage
  index.css               Design tokens (colors, fonts) via Tailwind's @theme
```

## Before you publish

A few placeholders in `src/data/content.ts` need real values:

- `profile.email` — currently a placeholder address
- `profile.linkedin` — currently a placeholder URL

## Deploying

This is a client-side routed single-page app, so the host needs to serve `index.html` for any unmatched path:

- **Netlify** — `public/_redirects` is already included.
- **Vercel** — `vercel.json` is already included.
- **GitHub Pages** — needs an extra step (a 404.html fallback or the `gh-pages` SPA workaround) since it doesn't support rewrites natively.

The build output in `dist/` is otherwise a static site.
