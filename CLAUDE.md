# MindSkin Connect — Project Spec

## What this is
Static patient education website for the MSHAD (Mind-Skin Health for Atopic
Dermatitis) program, University of Alberta Division of Dermatology.
Hosted on GitHub Pages. Accessed via QR code in a dermatology clinic.
No frameworks, no build tools, no analytics. Plain HTML and plain CSS only.

## Repository
github.com/YOURUSERNAME/mindskin-connect
Branch: main, root folder.
Temporary URL: https://YOURUSERNAME.github.io/mindskin-connect
Custom domain (future): connect.mindskinhealth.ca

## File list (13 total)
- index.html
- module-1a.html
- module-2.html
- module-3a.html
- module-4.html
- module-5.html
- all-modules.html
- clinician.html
- 404.html
- style.css
- favicon.svg
- README.md
- .gitignore

## All page content is in CONTENT.md
Read CONTENT.md for all module intros, key points, appointment prompts,
and UI strings. Do not invent or paraphrase any content string.
If a field is missing or ambiguous, stop and ask before proceeding.

---

## GUARDRAILS — do not do these things
- Do not add JavaScript beyond what is needed for the YouTube embed iframes.
- Do not add a build step, package.json, npm, or any framework.
- Do not add CSS frameworks (Tailwind, Bootstrap, etc.). Plain CSS only.
- Do not invent content. If a field is missing or ambiguous, stop and ask.
- Do not substitute real YouTube IDs for the VIDEO_ID placeholder.
- Do not add features not listed in this spec — including dark mode,
  language toggles, search, animations, or interactive widgets.
- Do not modify any content text without asking first.
- Do not commit or push to GitHub without explicit instruction.

---

## Build order — stop for review after each milestone
1. style.css + module-1a.html together. STOP. Wait for review before continuing.
2. After module-1a is approved as the template: build module-2.html,
   module-3a.html, module-4.html, module-5.html — replicating the exact structure.
3. Then all-modules.html, clinician.html, index.html, 404.html.
4. Finally: README.md, favicon.svg, .gitignore.

## Build status
- [x] style.css
- [x] module-1a.html
- [x] module-2.html
- [x] module-3a.html
- [x] module-4.html
- [x] module-5.html
- [x] all-modules.html
- [x] clinician.html
- [x] index.html
- [x] 404.html
- [ ] favicon.svg
- [ ] README.md
- [ ] .gitignore
- [ ] module-1a-read.html — scrollable slide-deck experience, in progress

---

## Global colour palette
- Navy:      #1B3068  — nav, headings, footer background
- Teal:      #2BBFAA  — buttons, links, interactive elements
- White:     #FFFFFF  — page background
- Body text: #2D2D2D

## Per-module accent colours
Used ONLY for: page heading, section bar backgrounds, appointment prompt box.
Everything else (nav, footer, body text, buttons) stays global.
- Module 1a:  #C2607A
- Module 2:   #2E7D5E
- Module 3a:  #6B4FA0
- Module 4:   #3A7D8C
- Module 5:   #C27C2E

---

## Layout rules
- Mobile-first. Write base styles for ~375px width, then add min-width
  media queries for tablet (768px) and desktop (1024px).
- Minimum tap target: 44px × 44px for any interactive element.
- Body text max-width: 65ch for readability.
- Use semantic HTML5: <header>, <nav>, <main>, <article>, <section>, <footer>.
- One <h1> per page. Heading hierarchy must not skip levels.

## Every page <head> must include
- <meta charset="utf-8">
- <meta name="viewport" content="width=device-width, initial-scale=1">
- <title> in the form: "Page name — MindSkin Connect"
- <meta name="description"> with a one-sentence page summary
- <link rel="stylesheet" href="style.css">
- <link rel="icon" href="favicon.svg">

## Navigation (every page)
Home · All modules · For clinicians

## Footer (every page)
Line 1: "This site does not collect personal information."
Line 2: "Mind Skin Health for Atopic Dermatitis (MSHAD) © 2025 University of
         Alberta Division of Dermatology. Licensed CC BY-NC-ND 4.0."
Links: All modules · For clinicians · supportg@ualberta.ca

---

## Every module page — fixed four-section structure
1. About this module   — intro paragraph
2. Watch               — YouTube embed
3. Key points          — collapsible <details>, collapsed by default
4. Bring this to your appointment — styled box with bullet prompts

## YouTube embed
- Use the privacy-enhanced domain:
  https://www.youtube-nocookie.com/embed/VIDEO_ID
- Wrap the iframe in a responsive container (16:9 aspect ratio).
- Add loading="lazy" and title="[Module name] video" attributes.
- Below the iframe, include this fallback in plain text:
  "Video having trouble loading? You can also watch this module directly
  on YouTube."

## External links
All external links must include: target="_blank" rel="noopener noreferrer"

## Key points default state
The <details> element is collapsed by default on all screen sizes.
Label when closed: "Read the key points"
Label when open: "Hide the key points"

---

## Accessibility baseline
- Alt text required for all non-decorative images.
- Decorative images use alt="".
- Colour contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text).
- Links must be distinguishable from surrounding text by more than colour alone
  (underline or other visual indicator).
- All interactive elements must be keyboard-focusable.

---

## Module 4 special requirement
The AHS Mental Health Helpline (1-877-303-2642) must appear in a visually
distinct callout box on module-4.html — not just as a bullet point.
It must be prominent and easy to find at a glance.

---

## Local preview
Run: python3 -m http.server 8000
Then open: http://localhost:8000
