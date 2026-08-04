# Krish Borade — Portfolio Website

Premium freelancer portfolio site for **Krish Borade**, Excel Specialist & Analytics Consultant.
Built as a **scalable, data-driven static site** — all content lives in JSON files so you can update anything without touching code.

---

## Project Structure

```
portfolio/
├── index.html              ← Page shell (rarely touch this)
├── css/
│   └── main.css            ← All styling (rarely touch this)
├── js/
│   └── main.js             ← App logic + renderers (rarely touch this)
├── data/                   ← 🟢 EDIT THESE FILES TO UPDATE CONTENT
│   ├── profile.json        ← Your name, bio, contact info, metrics
│   ├── services.json       ← Service offerings
│   ├── projects.json       ← Portfolio projects + case studies
│   ├── testimonials.json   ← Client testimonials
│   └── content.json        ← Process, skills, FAQs, pricing, why-me
└── assets/
    ├── images/             ← Drop new dashboard screenshots here
    └── etl-demo.html       ← Your Power Query ETL demo
```

---

## How to Update Content (No Coding Required)

All your site's content is in plain JSON files inside the `data/` folder. Open any one in a text editor (VS Code, Sublime, even Notepad) and just change the text.

### 🔄 Update your bio / name / contact info
Open `data/profile.json`. Change:
- `name`, `title`, `tagline`
- `bio.short` and `bio.long` (the array)
- `contact.email`, `contact.whatsapp`, `contact.linkedin`
- `valueProps` (the 4 hero stats)

### 🖼️ Update your profile picture
1. Save the new image to `assets/images/`
2. Open `data/profile.json`, change `"avatar"` to the new path
   e.g. `"avatar": "assets/images/my-new-photo.png"`

### ➕ Add a new portfolio project
1. Save the dashboard screenshot to `assets/images/`
2. Open `data/projects.json`
3. Copy any existing project block (between `{ ... }`)
4. Paste it as a new entry in the `projects` array
5. Edit the fields:
   - `id`: unique slug (e.g. `"new-finance-dashboard"`)
   - `title`, `tagline`, `problem`, `solution`, `outcome`
   - `image`, `thumbnail`: paths to your new screenshot
   - `category`: must match one of the categories at the top
   - `featured`: `true` puts it in the "Case Studies" section
   - `stack`, `tags`, `features`, `industry`

### 🛠️ Add a new service
Open `data/services.json` and add a new object to the `services` array. Copy any existing one and edit.

### 💬 Add a testimonial
Open `data/testimonials.json`. Set the existing placeholder's `"active": true` and edit, **or** copy the block to add more.

```json
{
  "id": "client-1",
  "active": true,
  "rating": 5,
  "quote": "Krish rebuilt our reporting system in 8 days. Saved us 20 hours a week.",
  "name": "Sarah Chen",
  "title": "Finance Director",
  "company": "Acme Corp",
  "companyType": "SaaS",
  "avatar": "",
  "projectRef": "executive-financial-kpi"
}
```

### ❓ Add or remove an FAQ
Open `data/content.json`, find the `faqs` array, add/remove entries.

### 💰 Update pricing
Open `data/content.json`, find the `pricing` block. To hide pricing entirely, set `"showSection": false`.

### 📂 Add a new project category
Open `data/projects.json`, find `categories` at the top, add:
```json
{ "id": "your-slug", "label": "Your Category" }
```
Then use that `id` as the `category` value in any project.

---

## How to Run Locally

This is plain HTML/CSS/JS — no build step.

**Option 1: Open directly**
- Some browsers will block `fetch()` from `file://`. If it doesn't load, use Option 2.

**Option 2: Local server (recommended)**
```bash
# In the portfolio folder:
python3 -m http.server 8000
# Then open: http://localhost:8000
```

Or with Node:
```bash
npx serve .
```

---

## How to Deploy (FREE Options)

### Netlify (easiest, 2 minutes)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio/` folder onto the page
3. Done. You get a free `*.netlify.app` URL instantly.
4. Connect a custom domain (krishborade.com) in Netlify settings.

### Vercel
1. Push the folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com), import the repo
3. Deploy. Free forever for personal sites.

### GitHub Pages
1. Create a repo named `yourusername.github.io`
2. Upload all files
3. Go live at `https://yourusername.github.io`

---

## Recommended Custom Domain

Buy `krishborade.com` from Namecheap or GoDaddy (~₹800/year). Far better for client trust than `*.netlify.app`.

---

## Pre-Launch Checklist

Before sharing your portfolio:

- [ ] Update `data/profile.json` → replace placeholder phone, real WhatsApp number, real Calendly link
- [ ] Update `data/profile.json` → real Fiverr + Upwork URLs
- [ ] Set `availability.label` to current month
- [ ] Test the contact form (sends via `mailto:`)
- [ ] View on phone — make sure everything looks crisp on mobile
- [ ] Run through every section in dark mode — that's how clients see it

---

## Architecture Notes

**Why no React?**
You don't need it. This site:
- Loads in under 1 second
- Has zero dependencies to update
- Can be edited by anyone who can edit a text file
- Deploys instantly anywhere
- Still gets all the benefits of data-driven rendering (JSON → DOM)

If you ever want to migrate to React/Next.js later, the JSON files become your CMS — port them directly.

**SEO**
- Meta tags + Open Graph in `index.html`
- Update them when your title/positioning evolves
- Sitemap: add `sitemap.xml` post-deploy

**Performance**
- Lazy-loaded images
- No external JS libraries
- Inline SVG icons (no icon font)
- One CSS file, one JS file

---

## Adding a Blog Later (Optional Future Scale)

The architecture supports easy blog addition:
1. Create `data/posts.json` with the same structure as projects
2. Create `js/blog.js` mirroring the rendering pattern in `main.js`
3. Add a `<section id="blog">` to `index.html`
4. Done.

---

Built for Krish · 2026
