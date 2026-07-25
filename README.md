# Sharon Babu — Portfolio

A clean, technical-editorial portfolio built with **SvelteKit** (static / prerendered).
Light-mode-first, deep-blue accent, case-study pages that show engineering contribution
rather than just screenshots.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview

```bash
npm run build      # outputs static site to /build
npm run preview
```

The site is fully prerendered via `@sveltejs/adapter-static`, so `/build` is a folder of
static files you can host anywhere.

## Edit your content — one file

Everything (profile, metrics, projects, case studies, links) lives in:

```
src/lib/data/projects.js
```

- **Featured projects** (`featured: true`) get a full case-study page at `/work/<slug>/`.
- **Additional work** (`featured: false`) renders as compact cards on the home page.

To add a project, copy an existing object and change the fields. To reorder, move it in
the array.

## Replace the placeholder screenshots (important)

Right now every image is a generated placeholder in `static/shots/`. Swap them for real
screenshots to make the site do its job:

1. Drop real images into `static/shots/` (PNG/JPG/WEBP fine — keep the same filename, or
   update the `image` / `gallery` paths in `projects.js`).
2. **Priority shots:** the Play Console 1M+ downloads screenshot (`malayalam-1`), BigDates
   admin portal, USC procurement UI, and the WOW Pay transaction flow.
3. For Pixel Master, use the Samridhi@Kochi signboard photo you have.

Regenerate placeholders any time with:

```bash
node scripts/gen-placeholders.mjs
```

## Deploy (free options)

- **Cloudflare Pages / Vercel / Netlify** — connect the repo, framework preset "SvelteKit",
  it just works.
- **GitHub Pages** — serve the `/build` folder.

Add your live domain, then put that URL at the top of your resume.

## Still to do

- [ ] Replace placeholder screenshots with real ones
- [ ] Add the Play Console 1M+ screenshot as proof
- [ ] Confirm the four Model Outlook links are the ones you want shown
- [ ] Buy a domain (e.g. sharonbabu.dev) and deploy
- [ ] Add the portfolio URL to your resume header
