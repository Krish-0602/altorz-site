/* =========================================================
   ALTORZ — KRISH BORADE, FOUNDER
   Automated Excel systems for manufacturers.
   Main app: data loading, rendering, interactions
   ========================================================= */

// ============ ICON LIBRARY ============
const Icons = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  trending: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  flow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h3"/><path d="M18 9v3a3 3 0 0 1-3 3h-3"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>`,
  broom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19.36 2.72L11 11l2 2 8.28-8.36a2 2 0 0 0-2.92-2.92z"/><path d="M10.6 11.4l2 2L8.13 18a2 2 0 0 1-2.83-2.83L10.6 11.4z"/><path d="M3.34 19l2.83 2.83"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>`,
  ribbon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="7" y1="13" x2="7" y2="16"/><line x1="11" y1="13" x2="11" y2="16"/><line x1="15" y1="13" x2="15" y2="16"/><line x1="19" y1="13" x2="19" y2="16"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="18" y2="3"/><path d="M8 3v6a4 4 0 0 0 8 0V3"/><path d="M6 3H4v3a3 3 0 0 0 3 3"/><path d="M18 3h2v3a3 3 0 0 1-3 3"/><line x1="12" y1="13" x2="12" y2="18"/><path d="M9 21h6"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  quote: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2-1 0-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`
};

// ============ DATA LOADER ============
let DATA = { profile: null, services: null, projects: null, testimonials: null, content: null };

async function loadData() {
  const files = ['profile', 'services', 'projects', 'testimonials', 'content'];
  const results = await Promise.all(
    files.map(f => fetch(`data/${f}.json`).then(r => r.json()))
  );
  files.forEach((f, i) => { DATA[f] = results[i]; });
}

// ============ RENDER: NAV ============
function renderNav() {
  const { name } = DATA.profile;
  const nav = document.getElementById('nav');
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="#home" class="nav-brand">
        <div class="brand-mark">${DATA.profile.initials}</div>
        <span>${name.split(' ')[0]} <em>${name.split(' ')[1] || ''}</em></span>
      </a>
      <div class="nav-links">
        <a href="#work">Reference Builds</a>
        <a href="#services">Capabilities</a>
        <a href="#process">Process</a>
        <a href="#pricing">Offers</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="nav-cta">Book a discovery call ${Icons.arrow}</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">${Icons.menu}</button>
    </div>`;
  document.getElementById('navToggle').addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });
}

// ============ RENDER: HERO ============
function renderHero() {
  const p = DATA.profile;
  const now = new Date();
  const currentPeriod = `${now.toLocaleDateString('en-US', { month: 'long' })} ${now.getFullYear()}`;
  const availabilityLabel = `${p.availability.labelPrefix} · ${currentPeriod}`;
  document.getElementById('hero').innerHTML = `
    <div class="container hero-inner">
      <div class="hero-content reveal">
        <div class="hero-status">
          <span class="pulse"></span>
          ${availabilityLabel}
        </div>
        <h1 class="hero-title">
          I rebuild the spreadsheets<br>
          your <em>business</em><br>
          actually runs on.
        </h1>
        <p class="hero-sub">
          ${p.bio.short}
        </p>
        <div class="hero-actions">
          <a href="#work" class="btn btn-primary">See the reference builds ${Icons.arrow}</a>
          <a href="#contact" class="btn btn-secondary">Book a discovery call</a>
        </div>
        <div class="hero-metrics">
          ${p.valueProps.map(v => `
            <div class="hero-metric">
              <div class="num">${v.metric}</div>
              <div class="lbl">${v.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="hero-portrait reveal">
        <div class="hero-portrait-deco">
          <span class="dot"></span>
          ${availabilityLabel}
        </div>
        <img src="${p.avatar}" alt="${p.name}">
        <div class="hero-portrait-overlay">
          <div class="hero-portrait-name">
            ${p.name}
            <span class="sub">${p.title}</span>
          </div>
          <div class="hero-portrait-loc">${p.location}</div>
        </div>
      </div>
    </div>`;
}

// ============ RENDER: TRUST STRIP ============
function renderTrustStrip() {
  const items = [
    'Power Query', 'Power Pivot', 'VBA', 'DAX', 'Ribbon Add-ins',
    'MIS Reporting', 'Inventory Systems', 'Production Dashboards', 'Batch Tracking',
    'Dealer Schemes', 'Sales MIS', 'CRM Systems', 'ETL Pipelines',
    'Financial Modeling', 'Data Cleaning'
  ];
  const html = items.map(t => `<div class="trust-item"><span class="icon">✦</span>${t}</div>`).join('');
  document.getElementById('trustStrip').innerHTML = `
    <div class="trust-marquee">${html}${html}</div>`;
}

// ============ RENDER: ABOUT ============
function renderAbout() {
  const p = DATA.profile;
  document.getElementById('about').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>About Altorz</span>
        <h2 class="section-title">Excel is the <em>medium.</em><br>Clarity is the <em>product.</em></h2>
      </div>
      <div class="about-grid">
        <div class="reveal">
          <p class="about-lead">
            <em>Altorz</em> is a boutique Excel consulting practice, serving businesses across India. Founded and run by Krish Borade — a working operator inside a Mumbai manufacturing firm.
          </p>
          <div class="about-body">
            ${p.bio.long.map(t => `<p>${t}</p>`).join('')}
          </div>
        </div>
        <div class="about-sidebar reveal">
          ${p.valueProps.map(v => `
            <div class="about-stat">
              <div class="num">${v.metric}</div>
              <div class="lbl">${v.label}</div>
              <div class="desc">${v.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
}

// ============ RENDER: SERVICES (CAPABILITIES) ============
function renderServices() {
  const html = DATA.services.services.map(s => `
    <div class="service-card reveal">
      <div class="service-icon">${Icons[s.icon] || Icons.chart}</div>
      <h3 class="service-title">${s.title}</h3>
      <div class="service-tagline">${s.tagline}</div>
      <p class="service-desc">${s.description}</p>
      <div class="service-meta">
        <span class="price">From ${s.startingFrom}</span>
        <span class="time">${s.timeline}</span>
      </div>
    </div>
  `).join('');
  document.getElementById('services').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Capabilities</span>
        <h2 class="section-title">Ten capabilities, <em>one methodology.</em></h2>
        <p class="section-subtitle">Every Altorz engagement is built from the capabilities below — packaged into three productized offers (see below), or scoped as a bespoke project. All ship through the Altorz Ribbon™.</p>
      </div>
      <div class="services-grid">${html}</div>
    </div>`;
}

// ============ RENDER: PORTFOLIO ============
function renderPortfolio() {
  const { categories, projects } = DATA.projects;
  const filterHtml = categories.map((c, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${c.id}">${c.label}</button>
  `).join('');

  document.getElementById('work').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Reference Build Library</span>
        <h2 class="section-title">17 systems. <em>One methodology.</em></h2>
        <p class="section-subtitle">Every reference build below is a fully functional Excel system demonstrating the Altorz methodology across MIS, inventory, financial modeling, CRM, HR, and operations analytics. Live demos available on discovery calls.</p>
      </div>
      <div class="portfolio-filters reveal">${filterHtml}</div>
      <div class="portfolio-grid" id="portfolioGrid"></div>
    </div>`;

  renderProjectGrid('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectGrid(btn.dataset.filter);
    });
  });
}

function renderProjectGrid(filter) {
  const projects = DATA.projects.projects;
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = filtered.map(p => `
    <article class="project-card" data-project="${p.id}">
      <div class="project-image">
        <span class="project-cat">${p.categoryLabel}</span>
        <span class="project-arrow">${Icons.arrow}</span>
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
      </div>
      <div class="project-info">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-tagline">${p.tagline}</p>
        <div class="project-tags">
          ${p.tags.slice(0, 3).map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
  });

  grid.querySelectorAll('.project-card').forEach(c => c.classList.add('reveal', 'in'));
}

// ============ RENDER: FEATURED ============
function renderFeatured() {
  const featured = DATA.projects.projects.filter(p => p.featured);
  const html = featured.map((p, i) => `
    <div class="featured-item ${i % 2 === 1 ? 'reverse' : ''} reveal">
      <div class="featured-image" data-project="${p.id}">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="featured-content">
        <div class="featured-num">FEATURED · 0${i + 1}</div>
        <h3 class="featured-title">${p.title}</h3>
        <p class="featured-tagline">${p.tagline}</p>
        <ul class="featured-features">
          ${p.features.slice(0, 4).map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="#" class="featured-link" data-project="${p.id}">Read the full reference build ${Icons.arrow}</a>
      </div>
    </div>
  `).join('');
  document.getElementById('featured').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Featured Reference Builds</span>
        <h2 class="section-title">Four builds, in <em>detail.</em></h2>
        <p class="section-subtitle">DataCleanerPro is Reference Build #1 of the Altorz Ribbon™ methodology. The other three illustrate how the methodology applies across MIS, ETL, and CRM systems for manufacturing operations.</p>
      </div>
      <div class="featured-list">${html}</div>
    </div>`;

  document.querySelectorAll('#featured [data-project]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(el.dataset.project);
    });
  });
}

// ============ RENDER: ETL DEMO ============
function renderEtlDemo() {
  const etlProject = DATA.projects.projects.find(p => p.id === 'etl-power-query-pipeline');
  document.getElementById('etlDemo').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Live Demo</span>
        <h2 class="section-title">Watch a Power Query <em>ETL pipeline</em><br>do three hours of work in twelve seconds.</h2>
        <p class="section-subtitle">Three messy data sources — Tally exports, ERP dumps, branch spreadsheets — merged through a 12-step transformation pipeline into one clean executive MIS. Scroll through the live interactive demo below.</p>
      </div>
      <div class="etl-frame-wrap reveal">
        <div class="etl-frame-toolbar">
          <div style="display:flex;align-items:center;gap:14px;">
            <div class="etl-frame-dots"><span></span><span></span><span></span></div>
            <span>power-query-etl-demo.html</span>
          </div>
          <a href="${etlProject.demoUrl}" target="_blank" class="etl-launch">Open full demo ${Icons.external}</a>
        </div>
        <iframe src="${etlProject.demoUrl}" title="Power Query ETL Demo" loading="lazy"></iframe>
      </div>
    </div>`;
}

// ============ RENDER: SKILLS ============
function renderSkills() {
  const html = DATA.content.skills.map(cat => `
    <div class="skill-cat reveal">
      <div class="skill-cat-title">${cat.category}</div>
      <div class="skill-list">
        ${cat.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
  document.getElementById('skills').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>The Toolkit</span>
        <h2 class="section-title">A full <em>stack</em> for business-native Excel automation.</h2>
      </div>
      <div class="skills-grid">${html}</div>
    </div>`;
}

// ============ RENDER: PROCESS ============
function renderProcess() {
  const html = DATA.content.process.map(s => `
    <div class="process-step reveal">
      <div class="process-num">${s.step}</div>
      <div class="process-content">
        <div class="process-title">${s.title}</div>
        <div class="process-desc">${s.description}</div>
      </div>
      <div class="process-time">${s.duration}</div>
    </div>
  `).join('');
  document.getElementById('process').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Process</span>
        <h2 class="section-title">From <em>discovery</em> to <em>handover</em>.<br>Seven steps. No surprises.</h2>
      </div>
      <div class="process-list">${html}</div>
    </div>`;
}

// ============ RENDER: WHY ME ============
function renderWhyMe() {
  const html = DATA.content.whyMe.map(w => `
    <div class="why-card reveal">
      <div class="why-icon">${Icons[w.icon] || Icons.shield}</div>
      <h3 class="why-title">${w.title}</h3>
      <p class="why-desc">${w.description}</p>
    </div>
  `).join('');
  document.getElementById('whyMe').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Why Altorz</span>
        <h2 class="section-title">Eight reasons businesses <em>choose Altorz.</em></h2>
      </div>
      <div class="why-grid">${html}</div>
    </div>`;
}

// ============ RENDER: TESTIMONIALS ============
function renderTestimonials() {
  const active = DATA.testimonials.testimonials.filter(t => t.active);
  const grid = active.length ? `
    <div class="testimonials-grid">
      ${active.map(t => `
        <div class="testimonial-card reveal">
          <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
          <p class="testimonial-quote">"${t.quote}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${t.customAvatar || t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            <div class="testimonial-meta">
              <div class="name">${t.name}</div>
              <div class="title">${t.title} · ${t.company}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  ` : `
    <div class="testimonials-empty reveal">
      <div class="icon-wrap">${Icons.quote}</div>
      <h3>The Altorz Pilot Program is open.</h3>
      <p>The first three clients get entry-tier pricing in exchange for a testimonial, case study permission, and one warm referral introduction to another business. After the third Pilot client signs, this tier retires permanently.</p>
      <a href="#contact" class="btn btn-primary">Apply to the Pilot Program ${Icons.arrow}</a>
    </div>
  `;
  document.getElementById('testimonials').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Client Access</span>
        <h2 class="section-title">Onboarding first <em>3 Pilot clients.</em></h2>
      </div>
      ${grid}
    </div>`;
}

// ============ RENDER: PRICING ============
function renderPricing() {
  if (!DATA.content.pricing.showSection) {
    document.getElementById('pricing').style.display = 'none';
    return;
  }
  const html = DATA.content.pricing.tiers.map(t => `
    <div class="pricing-card ${t.highlighted ? 'highlighted' : ''} reveal">
      <div class="pricing-name">${t.name}</div>
      <div class="pricing-price">${t.price}</div>
      <div class="pricing-tagline">${t.tagline}</div>
      <div class="pricing-ideal">${t.ideal}</div>
      <ul class="pricing-list">
        ${t.includes.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn btn-secondary" style="width:100%;justify-content:center;">Book a discovery call ${Icons.arrow}</a>
    </div>
  `).join('');
  document.getElementById('pricing').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Three Productized Offers</span>
        <h2 class="section-title">Three ways to work with Altorz.<br>Fixed by scope, <em>not by hour.</em></h2>
        <p class="section-subtitle">Every engagement gets a written proposal after a discovery call. Pilot Program pricing is available for the first three clients only — quoted privately on request.</p>
      </div>
      <div class="pricing-grid">${html}</div>
      <p class="pricing-note reveal">${DATA.content.pricing.note}</p>
    </div>`;
}

// ============ RENDER: FAQ ============
function renderFaq() {
  const html = DATA.content.faqs.map((f, i) => `
    <div class="faq-item reveal" data-i="${i}">
      <button class="faq-q">
        <span>${f.q}</span>
        <span class="faq-toggle">${Icons.plus}</span>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');
  document.getElementById('faq').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Questions</span>
        <h2 class="section-title">Common <em>questions.</em></h2>
      </div>
      <div class="faq-list">${html}</div>
    </div>`;
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => item.classList.toggle('open'));
  });
}

// ============ RENDER: CONTACT ============
function renderContact() {
  const p = DATA.profile;
  const channels = [
    { icon: 'mail', label: 'Email', value: p.contact.email, href: `mailto:${p.contact.email}` },
    { icon: 'whatsapp', label: 'WhatsApp', value: 'Send a message', href: p.contact.whatsapp },
    { icon: 'phone', label: 'Call for free consultation', value: p.contact.phone, href: `tel:${p.contact.phone.replace(/[^+0-9]/g, '')}` },
    { icon: 'clock', label: 'Book a discovery call', value: '30-min free consultation', href: p.contact.calendly }
  ];
  document.getElementById('contact').innerHTML = `
    <div class="container">
      <div class="contact-grid">
        <div class="contact-cta reveal">
          <div class="eyebrow" style="margin-bottom:20px;"><span class="dot"></span>Let's build the alternative</div>
          <h2 class="contact-cta-title">Monthly MIS still takes 3 days?<br><em>Let's fix that.</em></h2>
          <p class="contact-cta-sub">Send me a short brief — even a screenshot of your current reporting workflow. I'll reply within 4 hours during business days with a clear next step. If Altorz isn't the fit, I'll say so.</p>
          <div class="contact-channels">
            ${channels.map(c => {
              const isLocal = c.href.startsWith('tel:') || c.href.startsWith('mailto:');
              return `
              <a href="${c.href}"${isLocal ? '' : ' target="_blank" rel="noopener"'} class="contact-channel">
                <div class="contact-channel-icon">${Icons[c.icon]}</div>
                <div class="contact-channel-info">
                  <div class="contact-channel-lbl">${c.label}</div>
                  <div class="contact-channel-val">${c.value}</div>
                </div>
                <div class="contact-channel-arrow">${Icons.arrowUp}</div>
              </a>
            `;}).join('')}
          </div>
          <p class="contact-free-note">${Icons.shield}<span>Discovery calls are free — always. <strong>You're only charged for projects.</strong></span></p>
        </div>

        <form class="contact-form reveal" id="contactForm" name="project-inquiry" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="project-inquiry">
          <div class="form-row split">
            <div>
              <label class="form-label">Your name</label>
              <input class="form-input" type="text" name="name" required>
            </div>
            <div>
              <label class="form-label">Email</label>
              <input class="form-input" type="email" name="email" required>
            </div>
          </div>
          <div class="form-row split">
            <div>
              <label class="form-label">Company</label>
              <input class="form-input" type="text" name="company">
            </div>
            <div>
              <label class="form-label">Budget range</label>
              <select class="form-select" name="budget">
                <option value="">Choose one</option>
                <option>Under ₹10,000</option>
                <option>₹10,000 – ₹20,000</option>
                <option>₹20,000 – ₹50,000</option>
                <option>₹50,000 – ₹75,000</option>
                <option>₹75,000+</option>
                <option>AMC / Retainer</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label class="form-label">What are you looking to build?</label>
            <select class="form-select" name="service">
              <option value="">Choose an offer</option>
              <option>Executive Dashboards</option>
              <option>Financial Modeling</option>
              <option>Customised Excel Automation Tools</option>
              <option>Power Query ETL</option>
              <option>VBA Automation</option>
              <option>MIS Reporting Systems</option>
              <option>Data Cleaning & Migration</option>
              <option>CRM & Sales Systems</option>
              <option>Inventory & Supply Chain</option>
              <option>HR & Workforce Analytics</option>
              <option>Excel AMC Retainer</option>
              <option>Bespoke project</option>
              <option>Something else/ Not sure — book a discovery call</option>
            </select>
          </div>
          <div class="form-row">
            <label class="form-label">Tell me about your operation</label>
            <textarea class="form-textarea" name="message" placeholder="What does your current reporting workflow look like? Where does it break? Screenshots or file samples welcome."></textarea>
          </div>
          <button type="submit" class="form-submit">Send project brief ${Icons.send}</button>
          <button type="button" id="copyEmailBtn" style="background:none;border:none;color:#A0A2A8;font-size:13px;padding:12px 0;cursor:pointer;text-decoration:underline;font-family:inherit;display:block;margin:8px auto 0;">Prefer email? Copy krish@altorz.com</button>
          <p class="form-note">Replies within 4 hours during business days · Mon–Sat, 6:30pm–11pm IST · Sun, 10am–8pm IST</p>
          <div class="form-success" id="formSuccess">
            <h4>Got it. Talk soon.</h4>
            <p>Your message is in. I'll reply within 4 business hours.</p>
          </div>
        </form>
      </div>
    </div>`;

    document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams();
    for (const [k, v] of formData.entries()) params.append(k, v);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    .then(() => {
      document.getElementById('formSuccess').classList.add('show');
      setTimeout(() => e.target.reset(), 500);
    })
    .catch(err => {
      console.error('Form submission failed:', err);
      alert('Something went wrong sending your message. Please try WhatsApp instead, or copy the email address below.');
    });
  });

  // Copy email button handler
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('krish@altorz.com');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Email copied to clipboard';
        setTimeout(() => { copyBtn.textContent = originalText; }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        alert('Copy failed. Email: krish@altorz.com');
      }
    });
  }
}

// ============ RENDER: FOOTER ============
function renderFooter() {
  const p = DATA.profile;
  document.getElementById('footer').innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand-title">${p.name}</div>
          <p class="footer-brand-desc">${p.title}. Building Automated Excel Systems for Businesses across India — delivered through the Altorz Ribbon™.</p>
          <div style="display:flex;gap:12px;">
            <a href="tel:${p.contact.phone.replace(/[^+0-9]/g, '')}" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.phone}</a>
            <a href="${p.contact.whatsapp}" target="_blank" rel="noopener" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.whatsapp}</a>
            <a href="mailto:${p.contact.email}" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.mail}</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Navigate</h5>
          <ul>
            <li><a href="#work">Reference Builds</a></li>
            <li><a href="#services">Capabilities</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#pricing">Offers</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Capabilities</h5>
          <ul>
            ${DATA.services.services.slice(0, 6).map(s => `<li><a href="#services">${s.title}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h5>Get in touch</h5>
          <ul>
            <li><a href="mailto:${p.contact.email}">${p.contact.email}</a></li>
            <li><a href="tel:${p.contact.phone.replace(/[^+0-9]/g, '')}">Call for free consultation</a></li>
            <li><a href="${p.contact.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="${p.contact.calendly}" target="_blank" rel="noopener">Book a discovery call</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} Altorz · ${p.name}. Crafted in ${p.location.split('·')[0].trim()}.</div>
        <div>Built with <em style="font-family:var(--font-display);color:var(--accent);">discipline</em></div>
      </div>
    </div>`;
}

// ============ MODAL ============
function openModal(projectId) {
  const project = DATA.projects.projects.find(p => p.id === projectId);
  if (!project) return;
  document.getElementById('modalContent').innerHTML = `
    <button class="modal-close" id="modalClose">${Icons.close}</button>
    <div class="modal-hero">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="modal-body">
      <div class="modal-cat">${project.categoryLabel} · ${project.industry}</div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">${project.tagline}</p>

      <div class="modal-section">
        <h4>The Problem</h4>
        <p>${project.problem}</p>
      </div>
      <div class="modal-section">
        <h4>The Solution</h4>
        <p>${project.solution}</p>
      </div>

      <div class="modal-outcome">
        <em>Outcome:</em> ${project.outcome}
      </div>

      <div class="modal-meta">
        <div>
          <span class="meta-label">Industry</span>
          <span class="meta-value">${project.industry}</span>
        </div>
        <div>
          <span class="meta-label">Category</span>
          <span class="meta-value">${project.categoryLabel}</span>
        </div>
      </div>

      <div class="modal-section">
        <h4>Key Features</h4>
        <ul class="modal-features">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>Stack</h4>
        <div class="modal-stack">
          ${project.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
      </div>

      ${project.customBuildNote ? `<div class="modal-custom-note">${Icons.ribbon}<p>${project.customBuildNote}</p></div>` : ''}

      <div class="modal-cta">
        <a href="#contact" class="btn btn-primary" id="modalContact">Discuss a similar build ${Icons.arrow}</a>
        ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-secondary">View live demo ${Icons.external}</a>` : ''}
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalContact')?.addEventListener('click', closeModal);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============ SCROLL REVEAL ============
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============ NAV SCROLL ============
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ============ MODAL ESC ============
function initModalEsc() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
}

// ============ BOOT ============
async function boot() {
  await loadData();
  // Title tag is set in index.html — do not override here

  renderNav();
  renderHero();
  renderTrustStrip();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderFeatured();
  renderEtlDemo();
  renderSkills();
  renderProcess();
  renderWhyMe();
  renderTestimonials();
  renderPricing();
  renderFaq();
  renderContact();
  renderFooter();

  initScrollReveal();
  initNavScroll();
  initModalEsc();
}

boot();