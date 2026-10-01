# Timothy Opango — Portfolio

Personal portfolio for Timothy Opango Osundwa, backend & full-stack software developer. "Opanode" is his engineering approach/brand, covered on its own page — the site itself is his.

## Stack

React | TypeScript | Vite | Tailwind CSS v4 | React Router

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build, output in dist/
npm run preview   # preview the production build
```

## Pages

| Route         | Content                                            |
|---------------|----------------------------------------------------|
| `/`           | Hero with status telemetry, linking to other pages |
| `/work`       | All projects, in brief                             |
| `/expertise`  | Skills, grouped by what they build                 |
| `/journey`    | Experience timeline + education                    |
| `/opanode`    | The Opanode approach/brand                         |
| `/contact`    | Contact links                                      |
| any other     | 404 page with recovery links                       |

Every page opens with the same header: grid background, section label, accent status pill, and a two-tone headline.

## Layout

- Full-width content — no centered max-width column. Sections, cards, and banners stretch across the viewport with a responsive side gutter (20px → 32px → 48px) so nothing touches the screen edge.
- The footer stays pinned to the bottom of the screen while scrolling.
- Sections are separated by hairline borders on the `--color-bg` background.

## Structure

```
src/
  data/content.ts        All copy: profile, projects, experience, skills — edit this to update the site
  components/            Shared building blocks
    PageHeader.tsx         Hero header used by every page (label, pill, headline, intro)
    ButtonLink.tsx         CTA buttons: accent / paper / ink variants in three sizes
    Nav.tsx                Fixed top navigation
    Footer.tsx             Sticky bottom footer
    SelectedWork.tsx       Projects, with architecture flow per project
    Journey.tsx            Experience and education cards
    TechnicalExpertise.tsx Skill matrix as grouped cards
    Opanode.tsx            Philosophy sections
    Contact.tsx            Contact actions and direct channels
  components/home/       HomeHero.tsx — the only section on the home page
  pages/                 One file per route, composed from components/
  index.css              Design tokens (colors, fonts) via Tailwind's @theme
```

## Deploying

This is a client-side routed single-page app, so the host needs to serve `index.html` for any unmatched path:

- **Netlify** — `public/_redirects` is already included.
- **Vercel** — `vercel.json` is already included.
- **GitHub Pages** — needs an extra step (a `404.html` fallback or the `gh-pages` SPA workaround) since it doesn't support rewrites natively.

The build output in `dist/` is otherwise a static site.
