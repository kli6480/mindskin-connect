# Handoff: MindSkin Connect — Patient Handouts (5 pages)

## Overview
Five patient-facing handout pages to be added to the existing **mindskin-connect** static site
(`github.com/kli6480/mindskin-connect`, branch `main`), alongside the finished Module 1 work:

| # | Page | Suggested filename | Linked from | Accent |
|---|------|--------------------|-------------|--------|
| 01 | My SMART Skin Goal | `handout-smart-goal.html` | Module 5 | `#4A7C8C` |
| 02 | My Symptom & Trigger Diary | `handout-symptom-diary.html` | Module 2 | `#4A7C8C` |
| 03 | Quick Stress Relievers | `handout-stress-relievers.html` | Module 3a | `#5B4E8C` |
| 04 | Progressive Muscle Relaxation | `handout-pmr.html` | Module 3a | `#5B4E8C` |
| 05 | Wet Wrap Therapy | `handout-wet-wrap.html` | Module 4 | `#4A9B6E` |

Each handout is **one responsive HTML page that is also print-ready**: on screen it is a mobile-first
scrolling page (interactive — timers, checkboxes, text inputs); printed (or "Save as PDF") it
collapses to a clean 1–2 page black-on-white worksheet the patient can fill in with a pen.
There are **not** two separate documents — same markup, print stylesheet.

## About the design files
Everything in this bundle is a **design reference created in HTML** — prototypes showing intended
look and behavior, not production code to lift wholesale.

Two kinds of file are included:

1. **`pmr.html`, `stress-relievers.html`, `wet-wrap-therapy.html`** — these are the closest to
   production. They are plain, framework-free, single-file HTML with a `:root` token block, written
   in the same style as the existing repo pages. **These can be adapted almost directly** into the
   repo: move the `:root` tokens and shared rules into the site's global `style.css`, keep only the
   page-specific CSS inline, and match the existing `site-header` / `footer` markup already in the repo.
2. **`Patient Handouts.dc.html`, `SMART Skin Goal Worksheet.dc.html`, `Symptom & Trigger Diary.dc.html`**
   — mockup canvases showing the mobile frames side by side. They will **not run standalone**
   (they depend on a preview runtime). Open them as *source to read* for exact copy, spacing and
   colors of the SMART goal and diary pages, which have no standalone HTML yet.

`ms-body.js` is real, reusable code — a schematic body outline SVG with the 11 PMR muscle groups
mapped to labeled dots. It is written as a React-ish factory in the mock; **rewrite it as plain
DOM/inline SVG** for this repo (no React in the source site). All coordinates are in the file.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, shadows and copy are final and follow the existing
site's design language. Recreate pixel-faithfully using the repo's existing CSS conventions.

---

## Design tokens (identical to the existing site)

```css
:root{
  --navy:#1B3068; --navy-dark:#142554; --teal:#2BBFAA;
  --text:#2D2D2D; --muted:#666;
  --card:#FAF8F4;              /* warm off-white card surface */
  --hairline:#f0e8e8;
  --accent: <per-page, see table>;
  --accent-tint: <per-page: #EFEDF6 purple · #EAF4EE green · #EAF1F4 slate-teal>;
  --font-display:'Lilita One',cursive;
  --font-body:'Poppins',system-ui,sans-serif;
  --radius-xl:12px; --radius-2xl:16px; --radius-pill:999px;
  --shadow-card:0 2px 10px rgba(0,0,0,.06),0 1px 3px rgba(0,0,0,.04);
}
```

- Body: Poppins 400, `17px` / `1.65`, `p { max-width:65ch }`.
- Headings: Lilita One 400, uppercase, `letter-spacing:.02em`, `line-height:1.15`.
  `h1: clamp(1.85rem, 6.2vw, 2.85rem)` · `h2: 1.4rem`, color `--navy`.
- Content column: `.wrap { max-width:720px; margin:0 auto; padding:0 24px }`, `32px` at ≥768px.
- Accent is used **only** on the hero banner, section-bar labels, and the appointment/callout box —
  nav, footer, buttons and body text stay navy/teal.
- Minimum tap target 44×44px on every button, checkbox, link and input.
- Focus: `:focus-visible { outline:3px solid var(--teal); outline-offset:2px }`.

## Shared page skeleton

```
site-header (sticky, navy, wordmark "MindSkin Connect")
hero        (accent bg, concentric-circle SVG data-URI at 15% opacity top-right,
             "← Back to Module N" 44px link, h1, .subtitle 1.0625rem/40ch)
toolbar     (right-aligned: "Print / Save PDF" navy pill button; some pages add a "Reset" mini button)
main .wrap  (stack of .card blocks, background --card, radius 16px, shadow-card, padding 24/32px)
appointment box (accent-tint bg, "Bring this to your appointment" + scripted first-person lines)
footer      (navy, links)
```

Callouts use `border-left:4px solid var(--accent)` — **only** for highlighted quotes/tips, never on
plain cards. Card hover: `translateY(-3px)` + deeper shadow. Buttons hover: navy → `#142554`,
`translateY(-1px)` + shadow. Links: underline on hover (never color alone).

## Print rules (every page)
- `@media print`: white background, black text, hide site-header/footer/toolbar/back-link, drop all
  shadows, convert `--card` surfaces to `1px solid #999` outlines, accent fills → white with a dark rule.
- Every input becomes a printed ruled line (`border-bottom:1px solid #333; min-height:28px`).
- `.steps li, .card { break-inside: avoid }`; target 1 page (2 for PMR and the diary).
- Body text no smaller than 12pt in print.

---

## Page-by-page

### 01 — My SMART Skin Goal
Five cards, one per SMART letter (S/M/A/R/T), each: Lilita One `22px` accent heading with the
initial underlined (`text-underline-offset:3px`), a `15px #6A6A6A` prompt question, a `15px #A6A29C`
italic example, then a `48px` input (`border:2px solid #D9D4CC; radius:10px; background:#fff`).
Copy exactly as in the mock:
- **S**pecific — "What exactly will you do?" — *e.g. Moisturize both arms after my morning shower.*
- **M**easurable — "How will you know you did it?" — *e.g. Tick a box on my calendar each day.*
- **A**chievable — "Can you do this on a busy day?" — *e.g. Yes — it takes two minutes.*
- **R**elevant — "Why does this matter to you?" — *e.g. My arms itch most at work.*
- **T**ime-bound — "By when, and for how long?" — *e.g. Every day for the next two weeks.*

Closes with a **teal `#2BBFAA` summary card** (`radius:16px`, text `#12352F`): "My goal, in one
sentence" + one input, "I'll check my progress on" + a `180px` date input, and a navy pill
**"Copy my goal"** button (48px) that copies the assembled sentence to the clipboard.

### 02 — My Symptom & Trigger Diary
Seven-day grid. Per day: date, itch severity 0–10 (`ScaleRating` pattern — 11 tappable 44px cells),
sleep affected Y/N, and a free-text triggers field. Desktop ≥768px shows the week as a table;
mobile stacks one card per day. Footer card summarizes "What patterns do you notice?" free text.
Read exact labels from `Symptom & Trigger Diary.dc.html`.

### 03 — Quick Stress Relievers
A menu of short techniques, each a card with a title, a one-line "when to use it", and 3–4 numbered
steps. Includes an interactive **box-breathing timer** (4-4-4-4) and a **5-4-3-2-1 grounding**
list whose rows dim as you tap them. Timers must be pausable and must not autoplay.
See `stress-relievers.html` — near-production.

### 04 — Progressive Muscle Relaxation
Longest page. Structure: what PMR is → how to do it (tense 5s, release 10s, notice the difference)
→ the **11 muscle groups** in order, each a step row with number, name, and the tense instruction →
body-map figure (`ms-body.js`, 300×440 viewBox) with the active group highlighted in `#5B4E8C` →
safety note → appointment box.
Order and dot coordinates (SVG user units, viewBox `0 0 300 440`):

```
1 Feet (131,396) · 2 Calves (127,352) · 3 Thighs (125,292) · 4 Buttocks (172,240)
5 Abdomen (152,205) · 6 Chest (152,150) · 7 Arms (87,140) · 8 Hands (83,203)
9 Shoulders (176,92) · 10 Neck (164,70) · 11 Face (172,32)
```
Leader lines run to `x=98/72/64` (left labels) or `x=210` (right labels) at the dot's y.
Screen: outline stroke `#1B3068`, fill `#FAF8F4`, leaders `#CFCADD`.
Print: stroke `#2D2D2D`, fill `#fff`, leaders `#9A9A9A`, larger labels.
The body map and the step list are **linked** — tapping a step highlights the dot and vice versa.

> Open question carried over: the PMR body copy currently reads as segmented/abstract. Whoever
> writes the final copy should smooth the connective language between steps before publishing.
> The layout does not need to change for that.

### 05 — Wet Wrap Therapy
Numbered procedure (bathe → moisturize → damp layer → dry layer → how long → when to stop), each
step a card with a `--accent #4A9B6E` numeral. Includes a "what you'll need" checklist with 44px
checkboxes and a red-flag safety callout ("stop and call your dermatologist if…").
See `wet-wrap-therapy.html` — near-production.

---

## Interactions & behavior
- All interactive state is **local and ephemeral** — no accounts, no backend. If persistence is
  wanted, `localStorage` keyed per handout is enough; say so on the page ("saved on this device only").
- Timers: `requestAnimationFrame` or `setInterval(1000)`; respect `prefers-reduced-motion` (no
  animated ring — show numbers only).
- Checkboxes/steps: `aria-pressed` or real `<input type="checkbox">`; checked rows dim to ~55% opacity.
- "Print / Save PDF" button calls `window.print()`.
- Motion budget matches the site: hovers `.12–.2s ease`; step transitions `cubic-bezier(0.16,1,0.3,1) .35s`;
  everything inside `@media (prefers-reduced-motion: no-preference)`.

## Accessibility
- 44×44px minimum targets, `:focus-visible` teal outline, links distinguishable by more than color.
- Body map SVG needs `role="img"` + an `<title>`, and the labels must also exist as real text in the
  step list (the SVG is decorative reinforcement, not the only source of the information).
- Colour contrast: all accent-on-white text ≥4.5:1 (the five accents above already pass).

## Assets
- `assets/favicon.svg` — already in the repo.
- Concentric-circle hero motif — inline SVG data-URI, copy it from `pmr.html` line ~34.
- Body map — `ms-body.js` (coordinates above). No other new assets; **no photography, no icon library**.
  Unicode glyphs (`→ ← › ↓ ▶`) for arrows, as elsewhere in the repo.

## Files in this bundle
- `pmr.html`, `stress-relievers.html`, `wet-wrap-therapy.html` — near-production single-file pages
- `Patient Handouts.dc.html` — all five handouts, mobile frames + print, side by side (mock only)
- `SMART Skin Goal Worksheet.dc.html`, `Symptom & Trigger Diary.dc.html` — source for pages 01 and 02
- `ms-body.js` — body-map geometry

## Suggested prompt to Claude Code
> Read `design_handoff_patient_handouts/README.md`. We're adding five patient handout pages to this
> repo. Start with `handout-pmr.html`, using `pmr.html` from the handoff as the reference: match the
> existing site's header/footer markup, move shared tokens into `style.css` instead of duplicating
> the `:root` block, and rewrite `ms-body.js` as plain inline SVG + vanilla JS (no React). Add the
> page's copy to `CONTENT.md` first and use those strings verbatim. Then link it from module-3a.html.
> Do one page at a time and show me the diff.
