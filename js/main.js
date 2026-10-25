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
        <div class="brand-mark" style="font-family:Georgia,serif;font-weight:700;font-size:16px;">A</div>
        <span style="display:flex;flex-direction:column;line-height:1.1;">
          <strong style="font-family:Georgia,serif;font-weight:700;font-size:18px;letter-spacing:3px;">ALTORZ</strong>
          <em style="font-family:'Inter Tight',Aptos,sans-serif;font-weight:400;font-size:10px;color:var(--text-muted,#A0A2A8);font-style:italic;letter-spacing:1px;text-transform:uppercase;margin-top:2px;">Alternative Operations</em>
        </span>
      </a>
      <div class="nav-links">
  <a href="#webApps">Services</a>
  <a href="#services">Capabilities</a>
  <a href="#work">Reference Builds</a>
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
          I rebuild the systems<br>
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
  'Power Query', 'VBA', 'DAX', 'Ribbon Add-ins', 'MIS Reporting',
  'React', 'Supabase', 'Vercel', 'Mobile-First Web Apps',
  'Inventory Systems', 'Production Dashboards', 'DSR Systems',
  'Sales MIS', 'Custom CRMs', 'ETL Pipelines',
  'Financial Modeling', 'Data Cleaning', 'Field Team Apps'
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
        <h2 class="section-title">Excel or Web App — <em>the medium is a choice.</em><br>Clarity is the <em>product.</em></h2>
      </div>
      <div class="about-grid">
        <div class="reveal">
          <p class="about-lead">
            <em>Altorz</em> is a boutique reporting systems consultancy for Businesses — building Automated Excel Systems and Custom Web Applications. Founded and run by Krish Borade, a working operator inside a Mumbai manufacturing firm.
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
        <h2 class="section-title">Ten Excel capabilities, <em>one methodology.</em></h2>
<p class="section-subtitle">The capabilities below power the Excel Automation service — packaged into productized offers or scoped as a bespoke project. All ship through the Altorz Ribbon™. For custom web applications, see the Services section above.</p>
      </div>
      <div class="services-grid">${html}</div>
    </div>`;
}
// ============ RENDER: SERVICES (Two Tracks) ============
function renderWebApps() {
  const webAppBuilds = [
    { icon: 'report', title: 'Daily Reporting Systems', tagline: 'Field teams, one tap' },
    { icon: 'users', title: 'Internal CRMs', tagline: 'Built around your sales motion' },
    { icon: 'chart', title: 'Multi-Branch Dashboards', tagline: 'Live rollups across locations' },
    { icon: 'clock', title: 'Attendance & Check-ins', tagline: 'GPS-stamped, no hardware' },
    { icon: 'chat', title: 'Service Ticket Systems', tagline: 'Intake to resolution' },
    { icon: 'trending', title: 'Visit & Route Tracking', tagline: 'Field activity, verifiable' },
    { icon: 'box', title: 'Order & Inquiry Management', tagline: 'Inquiry to dispatch, one flow' },
    { icon: 'flow', title: 'Approval Workflows', tagline: 'Expense, PO, leave' },
    { icon: 'trophy', title: 'Branch KPI Dashboards', tagline: 'Role-based visibility' }
  ];

  const buildCardsHtml = webAppBuilds.map(b => `
    <div class="service-card reveal" style="padding: 24px;">
      <div class="service-icon" style="width: 36px; height: 36px;">${Icons[b.icon] || Icons.chart}</div>
      <h4 class="service-title" style="font-size: 17px; margin-bottom: 6px;">${b.title}</h4>
      <div class="service-tagline" style="font-size: 13px;">${b.tagline}</div>
    </div>
  `).join('');

  document.getElementById('webApps').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Our Services</span>
        <h2 class="section-title">Two tracks.<br><em>One methodology.</em></h2>
        <p class="section-subtitle">Altorz builds in two mediums — automated Excel systems your team runs locally, and custom web applications hosted on your domain. Pick what fits your workflow. Sometimes it's both.</p>
      </div>

      <!-- SERVICE 01: EXCEL AUTOMATION -->
      <div style="padding: 48px; background: var(--bg-2); border-left: 3px solid var(--accent); margin-bottom: 32px;" class="reveal">
        <div class="eyebrow" style="margin-bottom: 20px;"><span class="dot"></span>Service 01 · Excel Automation</div>
        <h3 style="font-family: var(--font-display, Georgia); font-size: clamp(28px, 3vw, 36px); margin-bottom: 20px; line-height: 1.2;">The Altorz Ribbon™ — Excel systems your <em style="color: var(--accent);">team actually uses.</em></h3>
        <p style="color: var(--text-muted, #A0A2A8); font-size: 17px; line-height: 1.6; margin-bottom: 28px; max-width: 820px;">
          Custom Excel Ribbons, dashboards, financial models, ETL pipelines, MIS reporting systems, CRM & sales tools, inventory and HR analytics — delivered as a branded tab inside Excel. One click, zero chaos.
        </p>
        <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-bottom: 28px; font-size: 14px; color: var(--text-muted);">
          <div><strong style="color: var(--accent);">From ₹7,500</strong> · Starting investment</div>
          <div><strong style="color: var(--accent);">10 capabilities</strong> · See Capabilities section</div>
          <div><strong style="color: var(--accent);">17 reference builds</strong> · Portfolio proof</div>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="#services" class="btn btn-secondary">Explore capabilities ${Icons.arrow}</a>
          <a href="#work" class="btn btn-secondary">See reference builds ${Icons.arrow}</a>
        </div>
      </div>

      <!-- SERVICE 02: WEB APPLICATIONS -->
      <div style="padding: 48px; background: var(--bg-2); border-left: 3px solid var(--accent);" class="reveal">
        <div class="eyebrow" style="margin-bottom: 20px;"><span class="dot"></span>Service 02 · Web Applications</div>
        <h3 style="font-family: var(--font-display, Georgia); font-size: clamp(28px, 3vw, 36px); margin-bottom: 20px; line-height: 1.2;">Custom web applications built around <em style="color: var(--accent);">your business — not someone else's software.</em></h3>
        <p style="color: var(--text-muted, #A0A2A8); font-size: 17px; line-height: 1.6; margin-bottom: 32px; max-width: 820px;">
        Whatever runs your business — sales, operations, customer management, approvals, field reporting, inventory, dashboards, internal portals, or something unique to you — we build custom web applications hosted on your domain, branded for your company, owned by you forever. Not SaaS.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 32px;">
          ${buildCardsHtml}
        </div>

        <!-- Not Limited To -->
        <div style="padding: 32px; border: 1px dashed var(--text-muted, #A0A2A8); text-align: center; margin-bottom: 32px;">
         <h4 style="font-family: var(--font-display, Georgia); font-size: 22px; margin-bottom: 16px; line-height: 1.3;">These are just <em style="color: var(--accent);">9 of the many</em> web applications we build.</h4>
         <p style="color: var(--text-muted); font-size: 15px; max-width: 640px; margin: 0 auto 24px; line-height: 1.6;">If your requirement isn't listed here but is similar to our offerings — or you have a completely different idea for a web application — we'd love to explore it with you. Let's connect for a quick discovery call and discuss how we can bring your idea to life.</p>
         <a href="#contact" class="btn btn-secondary">Book a discovery call ${Icons.arrow}</a>
        </div>

        <!-- SaaS Comparison -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 36px;">
          <div style="padding: 28px; border: 1px solid var(--text-muted);">
            <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px;">SaaS Route</div>
            <h5 style="font-family: var(--font-display, Georgia); font-size: 20px; margin-bottom: 16px;">LeadSquared / Zoho / Salesforce</h5>
            <div style="font-family: var(--font-display, Georgia); font-size: 36px; color: var(--text-muted); line-height: 1;">₹13,50,000</div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">over 5 years · 15 users</div>
          </div>
          <div style="padding: 28px; border: 1px solid var(--accent);">
            <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px;">Altorz Build</div>
            <h5 style="font-family: var(--font-display, Georgia); font-size: 20px; margin-bottom: 16px;">Custom Web Application</h5>
            <div style="font-family: var(--font-display, Georgia); font-size: 36px; color: var(--accent); line-height: 1;">From ₹45,000</div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">one-time · yours forever</div>
          </div>
        </div>

        <!-- DSR Flagship -->
        <div>
          <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px;">Flagship Build · Live in Production</div>
          <h4 style="font-family: var(--font-display, Georgia); font-size: 24px; margin-bottom: 12px; line-height: 1.3;">Daily Reporting System for a Mumbai paint manufacturer</h4>
          <p style="color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 20px; max-width: 820px;">
            16 integrated modules. Field reps file reports in under 2 minutes. Management sees live dashboards. Built in 4 weeks for ₹75,000 — the equivalent SaaS stack would cost ₹5–8 lakhs per year.
          </p>
          <a href="#contact" class="btn btn-primary">Discuss a similar build ${Icons.arrow}</a>
        </div>
      </div>
    </div>`;
}
// ============ RENDER: WEB APP EXPLAINER ============
function renderWebAppExplainer() {
  const comparisonCards = [
    {
      title: 'A Website',
      icon: 'external',
      what: 'Public-facing marketing. Visitors read; they don\'t interact with your data.',
      examples: 'Company sites, blogs, landing pages',
      highlight: false
    },
    {
      title: 'A SaaS Product',
      icon: 'box',
      what: 'Pre-built software you rent monthly. Your workflow is forced to match the vendor\'s design.',
      examples: 'Zoho, Salesforce, LeadSquared',
      highlight: false
    },
    {
      title: 'A Mobile App',
      icon: 'phone',
      what: 'Native app installed from Play Store or App Store. Expensive to build, slow to update.',
      examples: 'Uber, WhatsApp, Instagram',
      highlight: false
    },
    {
      title: 'A Custom Web App',
      icon: 'bolt',
      what: 'Software built FOR your business, opened in a browser on any device. One-time cost. You own it.',
      examples: 'What Altorz builds',
      highlight: true
    }
  ];

  const useCases = [
    { icon: 'report', title: 'Field Sales Teams', scenario: 'Reps file daily visit reports from phones instead of chaotic WhatsApp groups. HQ sees everything live.' },
    { icon: 'users', title: 'Multi-Branch Operations', scenario: 'Branch managers submit daily sales and stock from any location. Head office dashboard updates automatically.' },
    { icon: 'clock', title: 'Distributed Attendance', scenario: 'Field staff mark attendance from site via GPS stamp. No biometric hardware or dedicated devices needed.' },
    { icon: 'chat', title: 'Service & Complaint Tickets', scenario: 'Customers raise tickets. Technicians get assignments on their phones. SLA tracked automatically.' },
    { icon: 'flow', title: 'Internal Approvals', scenario: 'Expense claims, leave requests, PO approvals routed to the right managers. Full audit trail built-in.' },
    { icon: 'box', title: 'Order & Inquiry Management', scenario: 'Sales logs inquiries. Converts to orders. Dispatch updates status. One source of truth replaces 4 Excel files.' }
  ];

  const comparisonHtml = comparisonCards.map(c => `
    <div class="service-card reveal" style="${c.highlight ? 'border: 1px solid var(--accent); background: var(--bg);' : ''}">
      <div class="service-icon" style="${c.highlight ? 'color: var(--accent);' : ''}">${Icons[c.icon] || Icons.chart}</div>
      <h4 class="service-title" style="font-size: 18px;">${c.title}</h4>
      <p class="service-desc" style="margin: 12px 0 16px;">${c.what}</p>
      <div style="font-size: 12px; color: var(--text-muted, #A0A2A8); letter-spacing: 1px; text-transform: uppercase; padding-top: 16px; border-top: 1px solid rgba(160,162,168,0.15);">
        <strong style="${c.highlight ? 'color: var(--accent);' : 'color: var(--text-muted);'}">Examples:</strong> ${c.examples}
      </div>
    </div>
  `).join('');

  const useCasesHtml = useCases.map(u => `
    <div class="service-card reveal" style="padding: 28px;">
      <div class="service-icon" style="width: 40px; height: 40px;">${Icons[u.icon] || Icons.chart}</div>
      <h4 class="service-title" style="font-size: 18px;">${u.title}</h4>
      <p class="service-desc" style="margin-top: 8px;">${u.scenario}</p>
    </div>
  `).join('');

  document.getElementById('webAppExplainer').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>New to Custom Web Apps?</span>
        <h2 class="section-title">What is a web application, <em>really?</em></h2>
        <p class="section-subtitle">A custom web application is software your team opens in a browser on any device — phone, tablet, laptop. It's built FOR your business, hosted on your own domain, and owned by you. Not a website. Not SaaS. Not a mobile app from the Play Store. Here's the distinction.</p>
      </div>

      <!-- 4-WAY COMPARISON -->
      <div class="services-grid" style="margin-bottom: 72px;">
        ${comparisonHtml}
      </div>

      <!-- USE CASES -->
      <div class="section-header reveal" style="text-align: center;">
        <span class="eyebrow" style="justify-content: center;"><span class="dot"></span>Real Scenarios</span>
        <h3 class="section-title" style="font-size: clamp(28px, 3vw, 36px);">How a web app helps <em>real businesses.</em></h3>
        <p class="section-subtitle">Six common workflows where a custom web app replaces WhatsApp + Excel + Google Forms chaos.</p>
      </div>
      <div class="services-grid" style="margin-bottom: 72px;">
        ${useCasesHtml}
      </div>

      <!-- EXCEL vs WEB APP DECISION TABLE -->
      <div class="reveal" style="padding: 48px; background: var(--bg); border: 1px solid var(--text-muted);">
        <div class="eyebrow" style="margin-bottom: 20px;"><span class="dot"></span>Excel or Web App?</div>
        <h3 style="font-family: var(--font-display, Georgia); font-size: clamp(26px, 3vw, 32px); margin-bottom: 32px; line-height: 1.2;">Not sure which fits your business? <em style="color: var(--accent);">Here's the simple rule.</em></h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="padding: 28px; background: var(--bg-2); border-left: 3px solid var(--accent);">
            <div class="eyebrow" style="margin-bottom: 16px;"><span class="dot"></span>Pick Excel Automation when</div>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Your work already lives in spreadsheets</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Finance and accounts teams run the system</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Monthly MIS and management reporting</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Complex formulas, financial models, or forecasts</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">One or few power users at desks</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Historical analysis or executive dashboards</li>
            </ul>
          </div>
          <div style="padding: 28px; background: var(--bg-2); border-left: 3px solid var(--accent);">
            <div class="eyebrow" style="margin-bottom: 16px;"><span class="dot"></span>Pick Web Application when</div>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Your team is distributed, mobile, or in the field</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Field reps file daily reports from phones</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Branch managers submit data from multiple locations</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Daily or live data entry by many simple users</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">Customer-facing or ticket-based workflows</li>
              <li style="padding: 10px 0; border-top: 1px solid rgba(160,162,168,0.15); font-size: 15px;">You need real-time visibility, not month-end reports</li>
            </ul>
          </div>
        </div>

        <div style="margin-top: 32px; padding: 20px; background: var(--bg); border: 1px dashed var(--accent); text-align: center;">
          <p style="font-size: 15px; color: var(--text-muted); margin: 0;"><strong style="color: var(--accent);">Not sure which one fits?</strong> That's exactly what a 30-min discovery call is for. We'll scope your actual workflow and recommend what matches — even if that means neither.</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="reveal" style="text-align: center; margin-top: 72px;">
        <a href="#contact" class="btn btn-primary">Book a 30-min discovery call ${Icons.arrow}</a>
      </div>
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
        <h2 class="section-title">18 reference builds. <em>Two mediums.</em></h2>
        <p class="section-subtitle">17 Excel systems and 1 live web application — all built using the Altorz methodology across MIS, inventory, financial modeling, CRM, HR, operations analytics, and daily reporting. Live demos available on discovery calls.</p>
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
        <h2 class="section-title">Five builds, in <em>detail.</em></h2>
        <p class="section-subtitle">The DSR Mobile Web App is Reference Build #1 of the Altorz Web Applications service line — our flagship live production build. DataCleanerPro is Reference Build #1 of the Altorz Ribbon™ methodology — our Excel Automation flagship. Three more Excel builds show how the methodology applies across MIS, ETL, and CRM for manufacturing.</p>
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
// ============ RENDER: DSR LIVE DEMO ============
function renderDsrDemo() {
  // ⚠️ REPLACE THIS WITH YOUR ACTUAL YOUTUBE VIDEO ID (from Step 2)
  const YOUTUBE_ID = 'FR_oFkJKexA';

  const mobileScreens = [
    { file: 'dsr-mobile-01-company-contact.jpg', label: 'Step 1 — Company & Contact' },
    { file: 'dsr-mobile-02-visit-details.jpg', label: 'Step 2 — Visit Details' },
    { file: 'dsr-mobile-03-business-info.jpg', label: 'Step 3 — Business Info' },
    { file: 'dsr-mobile-04-follow-up.jpg', label: 'Step 4 — Follow-up' },
    { file: 'dsr-mobile-05-visit-submitted.jpg', label: 'Visit Submitted' }
  ];

  const desktopScreens = [
    { file: 'dsr-desktop-01-dashboard.png', label: 'Admin Dashboard · Team-wide Activity' },
    { file: 'dsr-desktop-02-team-attendance.png', label: 'Team Attendance Monitor' },
    { file: 'dsr-desktop-03-analytics.png', label: 'Analytics · Area, Client Type, Products' }
  ];

  const metrics = [
    { num: '16', label: 'Integrated Modules' },
    { num: '4 wks', label: 'Build Timeline' },
    { num: '<2 min', label: 'Per Daily Report' },
    { num: '₹75k', label: 'One-time Build Cost' }
  ];

  const mobileHtml = mobileScreens.map(s => `
    <div class="reveal" style="flex: 0 0 220px; max-width: 220px; scroll-snap-align: start;">
      <img src="assets/images/dsr/${s.file}" alt="${s.label}" loading="lazy" style="width: 100%; display: block; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08);">
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 14px; text-align: center; letter-spacing: 0.5px;">${s.label}</p>
    </div>
  `).join('');

  const desktopHtml = desktopScreens.map(s => `
    <div class="reveal">
      <div style="border: 1px solid rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        <img src="assets/images/dsr/${s.file}" alt="${s.label}" loading="lazy" style="width: 100%; display: block;">
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-top: 14px; letter-spacing: 0.5px;">${s.label}</p>
    </div>
  `).join('');

  const metricsHtml = metrics.map(m => `
    <div class="reveal" style="text-align: center;">
      <div style="font-family: var(--font-display, Georgia); font-size: clamp(36px, 4vw, 52px); color: var(--accent); line-height: 1;">${m.num}</div>
      <div style="font-family: Consolas, monospace; font-size: 11px; color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; margin-top: 10px;">${m.label}</div>
    </div>
  `).join('');

  document.getElementById('dsrDemo').innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow"><span class="dot"></span>Live Demo · Web Application</span>
        <h2 class="section-title">Watch a mobile DSR replace<br>WhatsApp + Excel chaos in <em>50 seconds.</em></h2>
        <p class="section-subtitle">Flagship web application built by Altorz for a Mumbai paint manufacturer. 16 integrated modules, mobile-first, hosted on their own domain. Field reps file daily reports in under 2 minutes. Management sees live dashboards. Zero WhatsApp chaos.</p>
      </div>

            <!-- VIDEO EMBED (9:16 vertical for Shorts) -->
      <div class="reveal" style="margin-bottom: 80px;">
        <div style="display: flex; justify-content: center;">
          <div style="position: relative; width: 100%; max-width: 360px; aspect-ratio: 9 / 16; border: 1px solid var(--accent); background: var(--bg); border-radius: 20px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.5);">
            <iframe
              src="https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0"
              title="DSR Mobile Web App — 50-second Walkthrough"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
        </div>
        <p style="text-align: center; margin-top: 20px; color: var(--text-muted); font-size: 13px;">50-second walkthrough · Mobile field-rep view · Recorded on actual device</p>
      </div>

      <!-- MOBILE SCREENSHOTS -->
      <div style="margin-bottom: 80px;" class="reveal">
        <div class="eyebrow" style="margin-bottom: 24px;"><span class="dot"></span>Mobile Field App — 4-Step Visit Entry</div>
        <div style="display: flex; gap: 24px; overflow-x: auto; padding: 10px 2px 24px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;">
          ${mobileHtml}
        </div>
        <p style="font-size: 12px; color: var(--text-muted); text-align: center; margin-top: 8px;">↔ Scroll to see all 5 screens</p>
      </div>

      <!-- DESKTOP SCREENSHOTS -->
      <div style="margin-bottom: 80px;" class="reveal">
        <div class="eyebrow" style="margin-bottom: 24px;"><span class="dot"></span>Admin Dashboard — Desktop Views</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          ${desktopHtml}
        </div>
      </div>

      <!-- METRICS -->
      <div class="reveal" style="padding: 48px; background: var(--bg); border-left: 3px solid var(--accent); margin-bottom: 48px;">
        <div class="eyebrow" style="margin-bottom: 32px;"><span class="dot"></span>By The Numbers</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 40px;">
          ${metricsHtml}
        </div>
      </div>

      <!-- CTA -->
      <div class="reveal" style="text-align: center;">
        <a href="#contact" class="btn btn-primary">Discuss a similar build ${Icons.arrow}</a>
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
        <h2 class="section-title">A full <em>stack</em> for both services.<br>Excel automation. <em>Web applications.</em></h2>
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
        <h2 class="section-title">From <em>discovery</em> to <em>handover</em>.<br>Seven steps for both services. <em>No surprises.</em></h2>
        <p class="section-subtitle">Whether you're commissioning an Excel System or a Custom Web Application, the Altorz process is the same seven steps — fixed scope, weekly demos, clear timelines, and documented handover. No scope creep, no surprise invoices.</p>
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
// ============ RENDER: PRICING (Two Offer Groups) ============
function renderPricing() {
  if (!DATA.content.pricing.showSection) {
    document.getElementById('pricing').style.display = 'none';
    return;
  }

  // Excel tiers from content.json (unchanged)
  const excelHtml = DATA.content.pricing.tiers.map(t => `
    <div class="pricing-card ${t.highlighted ? 'highlighted' : ''} reveal">
      ${t.showRibbonBadge ? `
        <div class="pricing-ribbon-badge">
          ${Icons.ribbon}
          <span>Exclusive: Custom Ribbon Add-in Included</span>
        </div>
      ` : ''}
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

  // Web Apps tiers (hardcoded for now — can move to content.json later)
  const webAppsTiers = [
    {
      name: 'Build Starter',
      price: 'From ₹45,000',
      tagline: 'Single-workflow web app',
      ideal: 'Ideal for: One critical workflow — a DSR, a simple CRM, an attendance system — that needs to leave WhatsApp or Excel.',
      includes: [
        'Single workflow web app',
        '2–4 screens, 1 user role',
        'Basic reporting dashboard',
        'Mobile-first responsive design',
        'Hosted on your Vercel + Supabase',
        '4–6 week delivery timeline',
        '30 days of post-launch support'
      ]
    },
    {
      name: 'Build Professional',
      price: 'From ₹75,000',
      tagline: 'Multi-workflow business application',
      ideal: 'Ideal for: Ops teams needing a unified app across 3–6 integrated workflows with role-based access and dashboards.',
      includes: [
        'Multi-workflow web app',
        '3–6 integrated modules',
        '2–3 user roles with permissions',
        'Multi-level dashboards + analytics',
        'Excel / PDF exports',
        '8–12 week delivery timeline',
        '30 days of post-launch support'
      ],
      highlighted: true
    },
    {
      name: 'Build + AMC',
      price: '+ ₹10,000 / month',
      tagline: 'Any Build tier plus 6-month retainer',
      ideal: 'Ideal for: Businesses who want ongoing bug fixes, minor feature additions, and WhatsApp SLA support.',
      includes: [
        'Any Build tier above',
        'WhatsApp SLA (24-hour response)',
        'Bug fixes included',
        'Minor feature additions',
        'Monthly health check',
        'Hosting monitoring + alerts',
        '6-month minimum commitment'
      ]
    }
  ];

  const webAppsHtml = webAppsTiers.map(t => `
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
        <span class="eyebrow"><span class="dot"></span>Six Productized Offers</span>
        <h2 class="section-title">Two tracks. Six offers.<br>Fixed by scope, <em>not by hour.</em></h2>
        <p class="section-subtitle">Every engagement gets a written proposal after a discovery call. Pilot Program pricing is available for the first three clients only — quoted privately on request.</p>
      </div>

      <!-- EXCEL AUTOMATION OFFERS -->
      <div class="reveal" style="margin-bottom: 72px;">
        <div style="display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid var(--text-muted);">
          <div style="font-family: var(--font-display, Georgia); font-size: clamp(22px, 2.5vw, 28px);">Excel Automation <em style="color: var(--accent);">· 3 offers</em></div>
          <div style="font-size: 13px; color: var(--text-muted); margin-left: auto;">Delivered through the Altorz Ribbon™</div>
        </div>
        <div class="pricing-grid">${excelHtml}</div>
      </div>

      <!-- WEB APPLICATIONS OFFERS -->
      <div class="reveal">
        <div style="display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid var(--text-muted);">
          <div style="font-family: var(--font-display, Georgia); font-size: clamp(22px, 2.5vw, 28px);">Web Applications <em style="color: var(--accent);">· 3 offers</em></div>
          <div style="font-size: 13px; color: var(--text-muted); margin-left: auto;">Hosted on your domain · Owned by you</div>
        </div>
        <div class="pricing-grid">${webAppsHtml}</div>
      </div>

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
          <div class="form-row">
            <label class="form-label">Company</label>
            <input class="form-input" type="text" name="company">
          </div>
          <div class="form-row">
  <label class="form-label">What are you looking to build?</label>
  <select class="form-select" name="service">
    <option value="">Choose an offer</option>
    <optgroup label="— Excel Automation —">
      <option>Executive Dashboards</option>
      <option>Financial Modeling</option>
      <option>Customised Excel Automation Tools</option>
      <option>Power Query ETL</option>
      <option>VBA Automation</option>
      <option>MIS Reporting Systems</option>
      <option>Data Cleaning & Migration</option>
      <option>CRM & Sales Systems (Excel)</option>
      <option>Inventory & Supply Chain</option>
      <option>HR & Workforce Analytics</option>
      <option>Excel AMC Retainer</option>
    </optgroup>
    <optgroup label="— Web Applications —">
      <option>Daily Reporting System (DSR)</option>
      <option>Internal CRM Web App</option>
      <option>Multi-Branch Dashboard</option>
      <option>Attendance & Check-ins</option>
      <option>Service / Complaint Ticket System</option>
      <option>Visit & Route Tracking</option>
      <option>Order & Inquiry Management</option>
      <option>Approval Workflows</option>
      <option>Build Starter (From ₹45,000)</option>
      <option>Build Professional (From ₹75,000)</option>
      <option>Build + AMC Retainer</option>
    </optgroup>
    <optgroup label="— Other —">
      <option>Bespoke project</option>
      <option>Something else / Not sure — book a discovery call</option>
    </optgroup>
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
          <p class="footer-brand-desc">${p.title}. Building reporting systems for Businesses — Automated Excel Systems through the Altorz Ribbon™, and Custom Web Applications hosted on your domain.</p>
          <div style="display:flex;gap:12px;">
            <a href="tel:${p.contact.phone.replace(/[^+0-9]/g, '')}" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.phone}</a>
            <a href="${p.contact.whatsapp}" target="_blank" rel="noopener" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.whatsapp}</a>
            <a href="mailto:${p.contact.email}" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.mail}</a>
            <a href="https://www.linkedin.com/in/krishborade" target="_blank" rel="noopener" class="contact-channel-icon" style="width:36px;height:36px;">${Icons.linkedin}</a>
          </div>
        </div>
        <div class="footer-col">
  <h5>Navigate</h5>
  <ul>
  <li><a href="#webApps">Services</a></li>
  <li><a href="#services">Capabilities</a></li>
  <li><a href="#work">Reference Builds</a></li>
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
      ${project.customBuildNote ? `
        <div class="modal-custom-note">
          ${Icons.ribbon}
          <p>${project.customBuildNote}</p>
        </div>
      ` : ''}

      <!-- Conditional explainer: shows web-app explainer for web-apps, Ribbon explainer for everything else -->
      ${project.category === 'web-apps' ? `
        <div class="modal-ribbon-explainer">
          <h4>What's a Web Application (Web App)?</h4>
          <p>Software built FOR your business, opened in a browser on any device — phone, tablet, laptop. Hosted on your own domain, branded for your company, and owned by you forever. Not SaaS you rent. Not a mobile app from the Play Store. One-time build cost, zero per-user fees, and the workflow matches how your team actually works — not the other way around.</p>
        </div>
      ` : `
        <div class="modal-ribbon-explainer">
          <h4>What's the Altorz Ribbon™?</h4>
          <p>A dedicated tab — named after your business — installed directly inside Excel. Every automation your team needs is one click away, organised exactly how you work. No hunting through files. No broken macros. Just a clean, permanent interface your team will actually use.</p>
        </div>
      `}

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
  renderNav();
  renderHero();
  renderTrustStrip();
  renderAbout();
  renderServices();
  renderWebApps();
  renderWebAppExplainer();
  renderPortfolio();
  renderFeatured();
  renderEtlDemo();
  renderDsrDemo();
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