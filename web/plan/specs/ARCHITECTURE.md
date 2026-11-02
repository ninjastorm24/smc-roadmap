# Technical architecture

## Stack and build boundary

Use semantic HTML, shared CSS and vanilla browser JavaScript. A small Node.js build process may read repository Markdown and generate static HTML. Do not introduce React, Vue, a CSS framework, a database or a server-rendered application framework.

Readable article content must be present in the generated HTML. JavaScript enhances library filtering and optional mobile navigation; it must not be required to download article bodies or make normal links work.

Gemini owns all implementation files, dependency decisions and scripts. This document specifies their behavior rather than supplying implementation code.

## Target organization

Gemini may refine names within this structure if the mapping remains documented:

```text
web/
  AGENTS.md, GEMINI.md, README.md
  plan/                        Specifications and handoff records
  package.json                 Build, serve and check commands
  package-lock.json            Reproducible dependency resolution
  .gitignore                   Generated/dependency/temp exclusions
  src/
    layouts/                   Shared page shell and article layout
    pages/                     Library, roadmap and resources templates
    assets/
      styles/                  Tokens, shared layout, components and reader
      scripts/                 Filter/navigation enhancements
  scripts/                     Content generation and validation
  tests/                       Meaningful automated checks
  evidence/                    Small selected screenshots and review notes
  dist/                        Generated site, ignored by Git
```

Do not duplicate all source articles into editable website files. Read `../blog/`, `../lessons/`, the roadmap and resource/reference/template files during the build. If generated metadata is persisted, label it generated and provide a regeneration command; it must not become a competing editorial source.

## Generated output and routing

| Output | Purpose |
|---|---|
| `dist/index.html` | Library with all 26 entries |
| `dist/articles/<original-markdown-stem>/index.html` | One article per source post |
| `dist/roadmap/index.html` | Eight-week overview |
| `dist/resources/index.html` | External reading, study materials and downloads |
| `dist/assets/` | Local CSS, browser JS and any small original assets |
| `dist/downloads/SMC_Learning_Workbook.pdf` | Exact copy of the root PDF |
| `dist/downloads/SMC_Learning_Workbook.docx` | Exact copy of the root DOCX |

Use paths that work both at a domain root and under `/smc-roadmap/`. Computed relative links are an acceptable solution. Do not hardcode `/assets/...`, `/articles/...` or a local development origin. Static files should work when served over HTTP; double-clicking a `file://` URL is not a required mode.

No SPA fallback is allowed to make article URLs appear functional. Each article URL must have a real generated HTML file and work after direct navigation or reload.

## Content generation

1. Read the actual source files and validate exactly 26 matching article/lesson pairs.
2. Extract title, standfirst, lesson number, week and reading estimate from their existing article fields. Use the fixed learning sequence in CONTENT.md.
3. Render the Markdown body with a maintained Markdown parser that supports the source's tables and fenced code. Do not build a Markdown parser from regular expressions.
4. Escape metadata and sanitize generated HTML with a documented allowlist. Preserve legitimate headings, links, tables and code. Prevent executable scripts, unsafe URL schemes and event-handler attributes from entering the output.
5. Rewrite source-relative links according to the link contract below.
6. Generate unique heading IDs, article heading navigation and previous/next links.
7. Generate index metadata for browser filtering from the same content model as the HTML entries.
8. Copy the workbook downloads and build shared pages from existing sources.

Gemini may select small dependencies for parsing and sanitization, plus browser-test tooling if needed. Record why each is needed, pin the resolved tree in the lockfile and use no CDN runtime scripts. Production dependencies and development tooling should be distinguishable. Do not add a library solely for filtering, menus, icons or layout.

Remove only duplicated presentation scaffolding from source posts: their initial H1/standfirst/metadata/navigation block and final previous/next navigation when those are rendered by the page layout. Keep all substantive article sections, tables, source notes and further-reading links. Do not accidentally remove a paragraph because it happens to contain a link.

## Link contract

Resolve links relative to the original source Markdown file before rewriting. Match on normalized repository paths, not a basename alone.

| Source target | Website behavior |
|---|---|
| Another of the 26 `blog/*.md` articles | Generated article URL, preserving a valid fragment |
| `blog/README.md` | Library home |
| Root `README.md` | Library home |
| `SOLO_LEARNING_ROADMAP.md#week-N` | Generated roadmap with the same week fragment |
| `resources/README.md` or `resources/BLOG_POSTS.md` | Corresponding section of the resources page; preserve/migrate valid section anchors |
| Matching `lessons/*.md` worksheet | Explicit `Open worksheet (Markdown)` link to the file on the existing GitHub repository |
| Other templates, references, setup/testing Markdown | Clearly labeled source-document link on the existing GitHub repository |
| Root DOCX/PDF | Local generated download |
| HTTP(S) source | Preserve destination and meaningful link text |

The existing repository is `https://github.com/ninjastorm24/smc-roadmap`. Keep its base URL in one documented build configuration value rather than scattering it through templates. Do not create or publish to another repository.

For mapped resources, generate the section IDs required by existing references such as `n01`, or explicitly map them to their equivalent section. Preserve article fragments where present. Fail the build/check on unknown local targets instead of silently emitting a broken link.

External links may open in the same tab. If Gemini chooses a new-tab treatment, announce it and apply the appropriate relationship attributes consistently. Never rewrite an external citation to the library home.

## Search and filter behavior

- Search title, standfirst, lesson number, topic and source-backed keyword aliases. Full-body search is optional and must not add a large client payload without a reason.
- Case-insensitive search with trimmed/collapsed whitespace. All typed terms must match across searchable fields. Define and test treatment of lesson identifiers with and without zero padding.
- Combine query, topic and week filters with AND semantics. Default ordering always follows the workbook sequence.
- Generate topic/week options from valid metadata. State is represented with `q`, `topic` and `week` query parameters.
- On initial load, restore valid URL state. Ignore invalid filter values gracefully. On browser back/forward, restore controls and results correctly.
- Typing can replace the current history entry; do not create an entry for every character. Do not scroll the reader to the top on every filter update.
- Reset clears query and filters, restores all 26 entries and updates the URL. Announce the result count politely. Keep focus predictable.
- With JavaScript disabled, show all 26 article links and an honest note that filtering requires JavaScript. Hide or disable nonfunctional enhancement controls.

No network request, API key or account is needed for filtering. Use existing DOM entries and generated metadata rather than runtime GitHub requests.

## Runtime and documentation commands

Provide documented equivalents of:

| Command from `web/` | Required result |
|---|---|
| `npm ci` | Reproducible tooling install |
| `npm run build` | Fresh static output and deterministic content checks |
| `npm run serve` | Local HTTP preview with documented URL/port |
| `npm run check` | Content, local links, sequence and relevant behavior checks |

Record the tested Node version. Do not require a globally installed package. Checks may be split into additional commands when documented. Do not claim browser coverage from a successful build alone.

## Delivery hygiene

Keep `dist/`, `node_modules/`, browser caches and transient reports out of Git. Small representative screenshots in `evidence/` are allowed because they support review. Source documents and original binaries must remain unchanged; verify their diffs/checksums. A fresh build should not edit the root Markdown or the task specifications.
