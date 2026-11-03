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

  const brandLogoSvg = `<svg class="brand-logo-svg" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="smc-nav-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#122125"/>
              <stop offset="100%" stop-color="#0E4F47"/>
            </linearGradient>
            <linearGradient id="smc-nav-bull" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#4CE0B3"/>
              <stop offset="100%" stop-color="#17A589"/>
            </linearGradient>
            <linearGradient id="smc-nav-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F6B954"/>
              <stop offset="100%" stop-color="#E08224"/>
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="15" fill="url(#smc-nav-bg)" stroke="#246A61" stroke-width="2"/>
          <rect x="10" y="34" width="44" height="10" rx="3" fill="#25A695" fill-opacity="0.18"/>
          <line x1="10" y1="34" x2="54" y2="34" stroke="#4CE0B3" stroke-width="1.2" stroke-dasharray="3 3" stroke-opacity="0.55"/>
          <line x1="17" y1="26" x2="17" y2="48" stroke="#4CE0B3" stroke-width="2.2" stroke-linecap="round"/>
          <rect x="13.5" y="31" width="7" height="12" rx="2" fill="url(#smc-nav-bull)"/>
          <line x1="31" y1="29" x2="31" y2="54" stroke="#F6B954" stroke-width="2.2" stroke-linecap="round"/>
          <rect x="27.5" y="33" width="7" height="10" rx="2" fill="url(#smc-nav-gold)"/>
          <circle cx="31" cy="54" r="2.3" fill="#F6B954"/>
          <line x1="45" y1="11" x2="45" y2="41" stroke="#4CE0B3" stroke-width="2.2" stroke-linecap="round"/>
          <rect x="41.5" y="16" width="7" height="20" rx="2" fill="url(#smc-nav-bull)"/>
          <path d="M17 22 H37" stroke="#F7F5EF" stroke-width="1.6" stroke-dasharray="2.5 2.5" stroke-linecap="round" stroke-opacity="0.7"/>
          <circle cx="45" cy="11" r="2.8" fill="#F7F5EF"/>
        </svg>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="icon" type="image/svg+xml" href="${currentRelativeRoot}assets/favicon.svg">
  <link rel="stylesheet" href="${currentRelativeRoot}assets/styles/main.css">
  ${headExtra}
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header class="site-header">
    <div class="site-header-inner">
      <a href="${currentRelativeRoot}" class="site-wordmark" aria-label="SMC Roadmap Library Home">
        ${brandLogoSvg}
        <span class="wordmark-text-group">
          <span class="wordmark-title">SMC <span class="wordmark-accent">Roadmap</span></span>
          <span class="wordmark-subtitle">Structure &amp; Liquidity</span>
        </span>
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
        <div class="footer-brand-row">
          <img src="${currentRelativeRoot}assets/favicon.svg" alt="" width="28" height="28" class="footer-brand-icon">
          <p class="footer-title"><strong>SMC Roadmap</strong> · An Independent Study Series</p>
        </div>
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
