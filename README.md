# MindSkin Connect

Static patient-education website for the **MSHAD** program (Mind Skin Health for
Atopic Dermatitis), University of Alberta Division of Dermatology.

The site is accessed via a QR code in a dermatology clinic and is hosted on
GitHub Pages. It collects no personal information and uses **no frameworks, no
build tools, and no analytics** — plain HTML and CSS only, with minimal
JavaScript limited to the YouTube embeds and the starting-point quiz.

## Live site

- https://connect.mindskinhealth.ca (MSHAD: https://connect.mindskinhealth.ca/mshad/)

## Local preview

No build step. Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Project structure

Each program lives in its own folder, so new programs can be added beside MSHAD.

| Path | Purpose |
| --- | --- |
| `index.html` | MindSkin Connect home: program picker (MSHAD / MSH-HS / MSH-P) |
| `mshad/index.html` | MSHAD landing page + "find your starting point" quiz + For clinicians |
| `mshad/all-modules.html` | List of the five MSHAD modules |
| `mshad/module-1a.html` … `mshad/module-5.html` | The five module pages (video + key points + appointment prompts) |
| `mshad/module-*-read.html` | Text-only ("read") alternative for each module |
| `mshad/resources.html` | Printable handouts & worksheets library |
| `mshad/handout-*.html` | Individual printable patient handouts |
| `msh-hs/`, `msh-p/` | Placeholder scaffolding for the MSH-HS and MSH-P programs (in development) |
| `404.html` | Not-found page; also forwards the old pre-folder addresses (e.g. `/module-2.html`) to their new place |
| `style.css`, `favicon.svg`, `assets/` | Shared by every program (pages in a folder reference them with `../`) |
| `favicon.svg` | Site icon |
| `CONTENT.md` | **Source of truth for all page copy** — do not paraphrase content into pages by hand |
| `CLAUDE.md` | Project spec, guardrails, and build order |

## Editing content

All user-facing copy lives in [`CONTENT.md`](CONTENT.md). When adding or changing
text on a page, copy the exact strings from there rather than inventing or
paraphrasing them. If a field is missing or ambiguous, stop and ask before
proceeding.

## Design constraints

See [`CLAUDE.md`](CLAUDE.md) for the full spec. In brief:

- Mobile-first; responsive breakpoints at 768px (tablet) and 1024px (desktop).
- Global palette: navy `#1B3068`, teal `#2BBFAA`, white background, text `#2D2D2D`,
  with a per-module accent colour.
- Accessibility baseline: WCAG AA contrast, semantic HTML5, one `<h1>` per page,
  44×44px minimum tap targets, alt text on non-decorative images.
- No CSS or JS frameworks; no build step.

## Deployment

Hosted on GitHub Pages from the `main` branch, root folder. Pushing to `main`
publishes the site.

## Licence

Content: **CC BY-NC-ND 4.0**.
Mind Skin Health for Atopic Dermatitis (MSHAD) © 2025 University of Alberta
Division of Dermatology.

Support: supportg@ualberta.ca
