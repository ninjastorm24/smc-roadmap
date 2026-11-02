# SMC Roadmap Reading Website

A static reading publication for the 26 original SMC Roadmap articles, eight-week curriculum, study worksheets, and resources, built with semantic HTML, CSS tokens, and vanilla JavaScript.

## Development workflow

Open [the task board](plan/BOARD.md). Gemini implements a focused task and records its report in that file; Codex reviews, signs off and commits approved work after the user requests review. See [the workflow](plan/README.md). The existing implementation has open review corrections; passing the original checks did not establish approval.

## Architecture

- **Static Generation:** Node.js build script (`scripts/build.js`) compiles original Markdown files in `blog/` into pre-rendered HTML pages with preserved headings, responsive tables, and sanitized content.
- **Content Model:** Validates 1:1 parity with `lessons/` worksheets and exact workbook study sequence (`01, 02, 03, 04 / 05, 10, 14 / 12, 13, 06 / 07, 08, 09, 11 / 15, 16, 17 / 19, 20, 22, 23 / 18, 21, 24 / 25, 26`).
- **Design Tokens:** Warm-paper editorial aesthetic conforming to `plan/PLAN-reader.md` (warm `#F7F5EF` background, `#182B30` primary ink, `#12645A` accents, system fonts, zero remote network font dependencies).
- **Client Interactions:** Vanilla JavaScript (`src/assets/scripts/main.js`) provides live search (titles, standfirsts, topics, lesson IDs, and aliases), combined topic and week filtering, URL parameter persistence (`?q=...&topic=...&week=...`), history push/pop state restoration, and article table-of-contents scrollspy.
- **Portability:** Uses computed relative links supporting deployment at domain root or under a subpath (e.g. `/smc-roadmap/`).

## Reproduction Commands

Run from the `web/` directory:

```bash
# 1. Install dependencies
npm ci

# 2. Build the static site into dist/
npm run build

# 3. Start local HTTP preview server
npm run serve
# Local preview at:
#   http://localhost:3000/
#   http://localhost:3000/smc-roadmap/

# 4. Run automated static integrity and browser verification checks
npm run check
```

Separate check commands:
- `npm run check:static`: Verifies 26 article pairs, study order, download byte checksums, 827 internal local links and fragment targets, and 29 generated HTML pages.
- `npm run check:browser`: Launches headless Chrome (Puppeteer-core) to test 11 suites across responsive viewports (320px–1920px), interactive search/filters, browser history push/pop, subpath hosting, disabled no-JS baseline, color contrast (AAA/AA), prefers-reduced-motion, 200% zoom, balanced side margins, and semantic link routing.

## Directory Structure

```text
web/
  package.json          Build, serve, check commands and dependencies
  package-lock.json     Pinned dependency lockfile
  .gitignore            Ignores dist/ and node_modules/
  src/
    layouts/            Shared HTML page shell (site.js)
    pages/              Page generators (home.js, article.js, roadmap.js, resources.js)
    assets/
      styles/           Design system tokens and responsive styles (main.css)
      scripts/          Vanilla JS filtering and scrollspy (main.js)
  scripts/
    content.js          Content extraction, validation, and Markdown parser/sanitizer
    build.js            Static site compiler
    serve.js            Local preview HTTP server (root and subpath support)
    check.js            Static verification suite (link resolver and integrity checks)
  tests/
    browser.test.js     Automated browser and visual verification suite
  evidence/             Representative screenshots for review
  dist/                 Generated static output (git-ignored)
  plan/                 Project specifications, tasks, status, and review records
```

## GitHub Pages deployment

The workflow in [pages.yml](../.github/workflows/pages.yml) builds with Node.js 24,
runs static checks, and publishes only `web/dist`. It runs on pushes to `main`
or manually from Actions → Deploy GitHub Pages → Run workflow (select `main`).
Deployment requires a successful build and static checks; browser checks remain
part of the review workflow, not this deployment job.

One-time repository setup: Settings → Pages → Build and deployment → Source →
**GitHub Actions**. Commit the reviewed website source, lockfile and workflow
together before pushing; the workflow cannot build without the `web/` sources.
Keep `dist/` and `node_modules/` ignored.

Expected site: https://ninjastorm24.github.io/smc-roadmap/

After the workflow succeeds, check the homepage, a nested article, roadmap,
resources, CSS/JavaScript and workbook download at that URL. Relative links
preserve the `/smc-roadmap/` prefix. A failed build/check prevents deployment;
the previously published site remains available. To roll back, revert the
offending source commit and push to `main` to rebuild and redeploy.

## Reading limitations

1. **Client-side Filtering Requirement:** Article browsing and reading works fully without JavaScript. Interactive search and filtering controls require browser JavaScript; a polite `<noscript>` notice is displayed when JavaScript is disabled.
2. **Worksheet & Template Destinations:** Per the product plan, worksheets and templates link directly to their source documents on the canonical GitHub repository.
