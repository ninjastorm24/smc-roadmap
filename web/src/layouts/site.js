import { escapeHtml } from '../../scripts/content.js';

export function renderPageShell({
  title,
  description,
  currentRelativeRoot,
  activeNav, // 'articles', 'roadmap', 'resources'
  content,
  headExtra = '',
  scriptsExtra = ''
}) {
  const fullTitle = title === 'SMC Roadmap' ? 'SMC Roadmap — Independent Study Series' : `${title} · SMC Roadmap`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="stylesheet" href="${currentRelativeRoot}assets/styles/main.css">
  ${headExtra}
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header class="site-header">
    <div class="site-header-inner">
      <a href="${currentRelativeRoot}" class="site-wordmark" aria-label="SMC Roadmap Library Home">
        <span class="wordmark-title">SMC Roadmap</span>
      </a>

      <nav class="site-nav" aria-label="Primary navigation">
        <ul class="nav-list">
          <li><a href="${currentRelativeRoot}" class="nav-link${activeNav === 'articles' ? ' active' : ''}"${activeNav === 'articles' ? ' aria-current="page"' : ''}>Articles</a></li>
          <li><a href="${currentRelativeRoot}roadmap/" class="nav-link${activeNav === 'roadmap' ? ' active' : ''}"${activeNav === 'roadmap' ? ' aria-current="page"' : ''}>Roadmap</a></li>
          <li><a href="${currentRelativeRoot}resources/" class="nav-link${activeNav === 'resources' ? ' active' : ''}"${activeNav === 'resources' ? ' aria-current="page"' : ''}>Resources</a></li>
          <li><a href="${currentRelativeRoot}downloads/SMC_Learning_Workbook.pdf" class="nav-link nav-btn" download>Get workbook <span class="format-badge" aria-hidden="true">PDF</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" tabindex="-1">
    ${content}
  </main>

  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="footer-primary">
        <p class="footer-title"><strong>SMC Roadmap</strong> · An Independent Study Series</p>
        <p class="footer-note">A study publication presenting 26 practical articles on market structure, liquidity and SMC concepts arranged into an eight-week learning path. This website presents educational study material; it does not provide financial advice, trading signals, or claims of verified returns.</p>
      </div>
      <div class="footer-links">
        <span class="footer-links-title">Directory</span>
        <ul>
          <li><a href="${currentRelativeRoot}">Article Library</a></li>
          <li><a href="${currentRelativeRoot}roadmap/">Eight-Week Roadmap</a></li>
          <li><a href="${currentRelativeRoot}resources/">Study Resources</a></li>
          <li><a href="${currentRelativeRoot}downloads/SMC_Learning_Workbook.pdf" download>Workbook (PDF, 358 KB)</a></li>
          <li><a href="${currentRelativeRoot}downloads/SMC_Learning_Workbook.docx" download>Workbook (DOCX, 66 KB)</a></li>
          <li><a href="https://github.com/ninjastorm24/smc-roadmap" target="_blank" rel="noopener noreferrer">Source Repository</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <script src="${currentRelativeRoot}assets/scripts/main.js"></script>
  ${scriptsExtra}
</body>
</html>`;
}
