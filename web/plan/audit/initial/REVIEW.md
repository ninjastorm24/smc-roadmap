> **Historical snapshot — superseded workflow.** Use the [current board](../../BOARD.md). Reports and findings below are preserved as history, not current approval.

# Codex implementation review

**State:** first review completed  
**User requested implementation review:** yes  
**Decision:** changes requested  
**Commit:** none; approval gate not met

The implementation builds and its supplied checks pass. Independent inspection found defects those checks do not cover. Gemini owns the fixes; Codex has not edited website implementation files.

## Review scope and verification

Reviewed the build/content/link pipeline, shared layout, all page generators, browser JavaScript, CSS, preview server, supplied checks and handoff claims against the plan.

Actually run:

- `npm ci`, `npm run build` and `npm run check`: passed. The generated site has 29 HTML pages and the supplied checker reports 853 existing local file/fragment targets.
- Independent browser sweep of **all 29 pages** at **320, 390, 768 and 1440 px**: found 14 page/width combinations with horizontal overflow, listed below.
- Verified the worksheet-link rewrite defect directly and inspected the generated article source-note links.
- Compared resources metadata/descriptions against the actual root resource Markdown.
- Tested unknown-local-link rewriting, JavaScript-disabled controls and a raw HTTP traversal request to the preview server.
- Inspected desktop home and mobile article screenshots; measured computed desktop content-width caps.
- Direct sanitization probe removed an injected script, event-bearing image and JavaScript URL. This is a limited probe, not a complete security assessment.
- Root DOCX, PDF, blog, lessons, templates and educational reference/resource files have no implementation diffs against Git HEAD.
- `npm audit --omit=dev` reported zero production advisories at review time. The full install reported nine high-severity development-tool advisories; evaluate/document separately without blindly applying forced upgrades.

The supplied browser suite checks roadmap/resources at desktop only and two selected articles at mobile width. Its no-JavaScript check tests the notice and article count, not whether dead controls remain enabled. Its content check tests titles/descriptions/buttons, not complete source fidelity. These gaps explain why a passing suite did not establish full acceptance.

The independent sweep did not repeat 1024 px for every page or establish complete keyboard/screen-reader/200%-zoom compliance. Do not infer those results from this review.

## R1 — P1: Mobile tables expand whole article pages beyond the viewport

**Locations:** [main.css](../../../src/assets/styles/main.css#L641), particularly the article grid/content sizing and the mobile single-column rule near line 1175; [browser.test.js](../../../tests/browser.test.js#L260).

At 390 px, article 24's page has a 633 px document scroll width. Its `.article-content` and `.article-prose` expand to about 609 px even though the available article layout is 342 px. The table wrapper expands with the content instead of containing horizontal scrolling. This clips prose and actions and requires horizontal scrolling to read the page.

Independent measurements:

| Width | Page | Document scroll width |
|---:|---|---:|
| 320 | Roadmap | 378 |
| 320 | Article 02 | 524 |
| 320 | Article 03 | 456 |
| 320 | Article 10 | 389 |
| 320 | Article 12 | 508 |
| 320 | Article 19 | 423 |
| 320 | Article 24 | 633 |
| 320 | Article 26 | 421 |
| 390 | Article 02 | 524 |
| 390 | Article 03 | 456 |
| 390 | Article 12 | 508 |
| 390 | Article 19 | 423 |
| 390 | Article 24 | 633 |
| 390 | Article 26 | 421 |

**Reproduce:** build, serve, open `/articles/24-advanced-entries-part-1/` at 390 px, and compare document scroll width with viewport width. Repeat the listed routes.

**Expected:** normal prose and controls stay inside the viewport; only table containers scroll. Roadmap lesson rows must wrap or adapt at 320 px.

**Gemini task:** correct intrinsic/grid minimum sizing and any roadmap row constraints. Do not hide the symptom using global horizontal clipping. Add checks over every generated page at the required widths, and capture a mobile table actually in view. The current article-25 screenshots show its header rather than proving its table's behavior.

**Retest:** pending.

## R2 — P1: Resource content has been rewritten and attributed incorrectly

**Location:** [resources.js](../../../src/pages/resources.js#L6), especially lines 49–106; sources [BLOG_POSTS.md](../../../../resources/BLOG_POSTS.md#L70) and [resources README](../../../../resources/README.md#L143).

The resources generator hardcodes new copy instead of presenting the approved source descriptions. Concrete discrepancies:

- Fibonacci post: website says **2013**, source says **2016**.
- SMT post: website says **2024** and its model records `Workbook citation`; source says **2026**, newly added.
- Daily-bias and three-step-model summaries replace the original description with different claimed procedures. The source explicitly describes the latter's seven-hour profile; the website substitutes a generic three-stage description.
- Exercises have been replaced: for example Fibonacci now introduces high-volume nodes, which are absent from the approved exercise.
- QuantStart's documented intermittent access / direct-fetch 503 limitation is omitted. Other source-specific caveats have also been dropped.

**Expected:** the site presents existing content with correct metadata and preserves relevant source-access/uncertainty context. Layout adaptation must not invent educational descriptions, dates or assignments.

**Gemini task:** generate resource metadata/descriptions/exercises/access notes from the repository Markdown, or provide a source-derived representation with enforced parity. Preserve the correct original/additional classification, dates and caveats. Make source edits flow through a rebuild. Do the same for roadmap text where it is currently independently duplicated, validating it against the source.

**Retest:** pending; compare all displayed entries with their sources, not just existence of their URLs.

## R3 — P1: Preview server can serve files outside its output directory

**Location:** [serve.js](../../../scripts/serve.js#L31), especially path construction at line 39 and listener at line 68.

A raw request to `/../package.json` returned **HTTP 200** and the actual `web/package.json` contents, outside `web/dist/`. `path.join` normalizes the traversal but there is no containment check before reading. The listener also binds without a loopback host constraint, although the documented use is local preview.

**Reproduce:** with the preview server running, issue `curl --path-as-is http://localhost:3000/../package.json`. The current result is an implementation file, not a denial.

**Expected:** only files within the resolved output root can be served; traversal is rejected. A local preview should bind to loopback unless a deliberate external-listening option is documented.

**Gemini task:** parse/decode requests safely, enforce resolved path containment (including applicable symlink handling), handle malformed paths safely, and escape reflected request text on error pages. Bind locally by default. Preserve valid root and `/smc-roadmap/` previews. Add focused tests for traversal, encoded traversal, ordinary 404s and valid assets.

**Retest:** pending.

## R4 — P2: Link rewriting mistakes worksheets for articles and accepts unknown targets

**Location:** [content.js](../../../scripts/content.js#L107), with unknown-target handling at line 148.

The first numbered-Markdown regex matches the basename regardless of source directory. Consequently `../lessons/06-fvg-ifvg-order-block-imbalance.md` becomes `../../articles/06-fvg-ifvg-order-block-imbalance/`. The in-body `workbook lesson 06` citation loops back to the current article instead of reaching the worksheet. The separately generated worksheet button works, which hides the error in tests that only check that button or target existence.

`rewriteMarkdownLink('../nonexistent.md', '../../')` also only logs a warning and returns the broken path. The build therefore does not meet the explicit unknown-target failure requirement.

**Expected:** resolve targets against the original source path, distinguish `blog/` from `lessons/`, verify membership/existence, preserve fragments and fail on unknown local targets.

**Gemini task:** implement the source-aware link contract from ARCHITECTURE.md. Test same-stem blog/worksheet targets, a valid fragment and an unknown target. Validate semantic destinations in generated article source notes, not only HTTP/file existence.

**Retest:** pending.

## R5 — P2: The desktop content-width cap is never applied

**Location:** [main.css](../../../src/assets/styles/main.css#L32) and its references at lines 121, 208, 380, 622, 934 and 1108.

The token is declared as `--max-width-content`, but containers request `--max-content-width`. At a 1600 px viewport, computed `max-width` for the header, hero and library is **none**. The site stretches across the display rather than using the specified centered 1200 px content area.

**Expected:** consistent centered outer content widths and the separate bounded reading column from DESIGN.md.

**Gemini task:** make the token naming consistent across all affected containers and verify alignment at 1440 px and a wider desktop size. Check actual computed widths, not only absence of overflow.

**Retest:** pending.

## R6 — P2: No-JavaScript mode leaves nonfunctional filter controls enabled

**Location:** [home.js](../../../src/pages/home.js#L90) and [main.js](../../../src/assets/scripts/main.js#L17).

With JavaScript disabled, the search input and both selects remain visible and enabled. They accept interaction but never change results. The notice is present and all 26 links are readable, but ARCHITECTURE.md explicitly requires hiding or disabling nonfunctional enhancement controls.

**Reproduce:** disable JavaScript, reload home, type into search or change either select. The controls look usable while the list remains unchanged.

**Gemini task:** render an honest noninteractive baseline and enable enhancement controls only after initialization succeeds, or hide the controls without JavaScript. Keep all article links and the fallback explanation available. Test visible/enabled state as well as article count.

**Retest:** pending.

## Revision handoff and acceptance evidence

### R7 — P2: User-requested reader balance and typography revision

The user supplied a wide-desktop screenshot of article 05 and reported excessive whitespace and hard-to-read text. The screenshot shows a left-biased prose column with a large empty right side. The previous token defect contributes to the layout, but resolving R5 alone is not sufficient to establish user acceptance of the original serif-body direction.

Implement the updated design in [READABILITY.md](READABILITY.md): center the prose axis, align the header and body, use a smaller secondary TOC, switch body text to a readable system sans-serif and reduce oversized repetitive section separators. This is an explicit user-directed design change. Provide actual desktop and phone screenshots plus typography/geometry measurements. Codex has updated the specifications only, not the implementation.

**Retest:** pending.

Complete [REVISION_TASKS.md](REVISION_TASKS.md), which organizes the findings for Gemini. Update STATUS.md and README claims to the actual checks performed. In particular, remove the claim that every acceptance criterion passed and that there are no defects; retain earlier implementer results only as historical evidence.

Add regression coverage for the confirmed failures and rerun the affected journeys after fixes. Do not mark this review approved yourself. Leave source changes uncommitted; the user will request another Codex review.

## Commit gate

No implementation commit was created. The documented gate requires reviewed, approved work, and this review found blocking issues. Once Gemini corrects them, Codex can retest, inspect the final staged diff and commit the approved implementation. Pushing and deployment remain separate user-requested actions.
