# MindSkin Connect

Static patient-education website for the **MSHAD** program (Mind-Skin Health for
Atopic Dermatitis), University of Alberta Division of Dermatology.

The site is accessed via a QR code in a dermatology clinic and is hosted on
GitHub Pages. It collects no personal information and uses **no frameworks, no
build tools, and no analytics** — plain HTML and CSS only, with minimal
JavaScript limited to the YouTube embeds and the starting-point quiz.

## Live site

- Temporary: https://kli6480.github.io/mindskin-connect
- Custom domain (planned): connect.mindskinhealth.ca

## Local preview

No build step. Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Project structure

| Path | Purpose |
| --- | --- |
| `hub.html` | Program picker (MSHAD / MSH-HS / MSH-P) |
| `index.html` | MSHAD landing page + "find your starting point" quiz |
| `all-modules.html` | List of the five MSHAD modules |
| `module-1a.html` … `module-5.html` | The five module pages (video + key points + appointment prompts) |
| `module-*-read.html` | Text-only ("read") alternative for each module |
| `resources.html` | Printable handouts & worksheets library |
| `handout-*.html` | Individual printable patient handouts |
| `clinician.html` | Information for clinicians |
| `p-*.html`, `hs-*.html` | Placeholder scaffolding for the MSH-P and MSH-HS programs (in development) |
| `404.html` | Not-found page |
| `style.css` | Shared site styles |
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
