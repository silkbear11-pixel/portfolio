# Hyunwoo Song — Bilingual Portfolio

A responsive, creative portfolio starter for visual design, UI/UX, interactive media, and game UI interests.

## Files

- `index.html` — structure, links, and project cards
- `styles.css` — responsive layout, colors, animations, and custom preview illustrations
- `script.js` — English/Korean translations, filters, project detail popups, mobile menu
- `assets/` — place your real screenshots, project images, and resume here

## Run locally

Open `index.html` in a browser. No Node.js, npm, framework, or server is needed. Internet access is needed to load Google Fonts; the site still works with fallback fonts offline.

## Before sharing with employers (important)

1. **Replace the illustration-only project previews** with screenshots of your actual work. The existing cards are decorative placeholders, not representations of completed project UI.
2. **Update project facts and descriptions** in `script.js` (`projects` object) to accurately document goals, roles, decisions, and outcomes. The "Visual Design Collection" is a placeholder section, not an assertion of a specific project.
3. **Add real project links** by replacing `url: null` in each project with your published URL. The "View project" button appears only for projects with a real URL.
4. **Add a professional email / LinkedIn** to the contact section in `index.html`, if desired. Neither is invented in this starter.
5. **Add your resume** at `assets/Hyunwoo_Song_Resume.pdf`, then insert a download link in the header or contact section.
6. Customize the biography and visible text in both `en` and `ko` translations in `script.js`.

### Example: replacing a project preview with a screenshot

In `index.html`, inside a project card's `.project-visual` container, remove decorative inner elements and add:

```html
<img class="project-screenshot" src="assets/portal-screenshot.png" alt="Screenshot of the Portal project">
```

Add to `styles.css`:

```css
.project-screenshot { width:100%; height:100%; object-fit:cover; display:block; }
```

Keep the `.project-art-arrow` element if you want the floating arrow.

### Example: adding a link

In `script.js`, under `projects.portal`, replace `url: null` with a real URL, for example `url: 'https://your-project-domain.example'` (only when that URL actually exists).

## Deploy with GitHub Pages

**Option A: new repository**

1. Create a public GitHub repository, e.g. `portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the **root** of the repo.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. Your site URL will be `https://YOUR_USERNAME.github.io/portfolio/`.

**Option B: use existing repository**

Place the files at the desired path in an existing Pages repository. The links here use relative paths, so the site works from a repository subfolder too.

## Accessibility and browser support

- Keyboard-accessible navigation, filters, and project dialogs
- `lang` changes on language toggle, descriptive button labels, visible focus outlines
- Reduced-motion preference supported
- Responsive layouts for desktop and mobile
- Modern browsers with native `<dialog>` support recommended


## DES 001 (added from DES 1.zip)
- `des1.html` is a bilingual case study of Green Buildings for the Future.
- `assets/des1/` contains exported images from the provided student process book.
- The physical prototype on page 24 is explicitly credited to Hyunwoo Song. The final model on page 26 is credited to teammate Xizi Li, and this distinction is preserved.
- Upload the whole folder to GitHub Pages to keep internal links and images working.

## DES 050 (Winter 2025)
- `des50-modules.html`: Camouflaged & Pixelated — Project 1 modular form study.
- `des50-seating.html`: Public Seating & Shade — Project 2 and final perspective studies.
- `assets/des50/`: optimized images extracted from the user-supplied DES 50 ZIP.
- EN/KR language switch is shared through localStorage with the homepage.
- The urban renders depict a **proposal**, not a built installation.


## DES 111 — Spring 2025

Five archived Processing-based case studies were added from the user-supplied class ZIP:

- `des111-drawit.html` — DrawIt (visual composition studies)
- `des111-inmotion.html` — InMotion (four short animation / interaction studies)
- `des111-wheels.html` — Bicycle Wheels (animated tile pattern)
- `des111-coolcolor.html` — Cool Color (branching generative art)
- `des111-glass.html` — Cracked Glass (final interactive project; includes original presentation video)

Each page contains original rendered outputs and linked Processing `.pde` source files in `assets/des111/`. The output images are from the supplied archive, not generated substitutes. The pages describe implemented functions; ideas that were only proposed in the project statements are identified as future work. Open the `.pde` files in Processing to run the original interactive sketches.

## DES 112 — UI/UX Design

- `des112-aggie-share.html` — Aggie Share student textbook/material exchange app concept. Screens from supplied Figma exports; 3 exploratory interviews described in coursework; original Figma URL and research documents included. This is a prototype, not a launched or validated marketplace.
- `des112-banking-guide.html` — Banking Guide educational UX concept for Generation X users; source competitive analysis, concept brief, and Figma wireframe link. This is a concept, not an implemented banking system.
- `assets/des112/` — optimized original screenshots, research presentation previews, and source PDFs.
- Both case studies are bilingual and share the EN/KR preference with the homepage. External Figma link access depends on the owner’s share permissions.


## DES 115 and DES 117 additions (November 2026)
- DES 115: Experimental Letterforms, Typographic Explorations, Pattern editorial publication. Source PDFs and selected page renders are in `assets/des115/`.
- DES 117: Responsive Blog Design and Interactive Narrative. Selected mockups are in `assets/des117/`; original authored HTML/CSS and its linked assets are in `original-des117/blog/` and `original-des117/interactive/`.
- All five new case studies support English/Korean switching. The DES 115 font collection and unrelated large raw image/photo assets are deliberately not redistributed.

## DES 127A and DES 149 additions (November 2026)
- DES 127A: Eco-Powered Bus Stop Shelter, Heat Does Not Kill Equally, Ecodesign Strategy Wheel. Original PDFs and selected images: `assets/des127a/`.
- DES 149: Cosmic Calendar and Climate Time Capsule. Original final PDFs, preview renders and the calendar draft: `assets/des149/`.
- These are academic design studies, not validated engineering prototypes or original climate measurements.
- The homepage and all five new case study pages have English/Korean text.

## DES 157A and DES 14 additions (November 2026)
- DES 157A (Interactive Media II): Course Portal, Campus Chaos MadLibs, My Desk Every Picture and Game of Pig. Working source code and linked demos are in `original-des157a/` (original HTML/CSS/JS; may use external normalize.css).
- DES 14 (Drawing): Breathless World final illustration, Space Cone concept drawing, and selected drawing/visual studies. Original images converted to web-friendly WebP in `assets/des14/`.
- Seven new EN/KR case study pages, with authentic imagery and original demos where available.
- Do not present the DES 14 artwork as production product prototypes or the DES 157A classroom demos as commercial deployments.

## DES 15 and DES 16 additions (November 2026)
- DES 15: 48-page final book, Mirror / Connection / Color / Creativity, presented as a curated visual design case study.
- DES 16: four original class projects — color interior study, Times New Roman type composition, Isaac Newton visual biography poster, UEFA Champions League final event poster.
- Original submitted PDF files are stored under `assets/des15/` and `assets/des16/`, with optimized WEBP previews.
- External photographs, sports logos and reference imagery in the posters are not presented as originally created assets; they belong to their respective rights holders.
