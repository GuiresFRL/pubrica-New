# pubrica.com

The Pubrica website as a Next.js 15 App Router project: 340 pages, one React
component each, built to deploy on Vercel from a GitHub repository.

- **Framework** Next.js 15.5.4, React 19, TypeScript 5.7
- **Rendering** every page is prerendered at build time. No database, no API
  routes, no environment variables, nothing to configure at runtime.
- **Node** 20.9 or newer.

---

## Getting it running

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # type-checks and prerenders all 340 pages
npm start            # serves the production build
```

`npm run build` is the gate: it fails on a TypeScript error, so a broken page
cannot reach production.

---

## Putting it on GitHub and Vercel

```bash
git init
git add -A
git commit -m "Pubrica website"
git branch -M main
git remote add origin git@github.com:<org>/<repo>.git
git push -u origin main
```

On Vercel: **Add New → Project → Import** the repository. Vercel detects
Next.js and needs no changes to the defaults.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Build command | `next build` (default) |
| Output directory | (leave empty — default) |
| Install command | `npm install` (default) |
| Node version | 20.x or 22.x |
| Environment variables | none |

Then add `pubrica.com` and `www.pubrica.com` under **Settings → Domains**, with
`www` redirecting to the apex, and point the DNS records Vercel gives you.

Every push to `main` redeploys. Every other branch gets its own preview URL,
which is the useful way to review a change before it is live.

---

## How the project is laid out

```
app/
  layout.tsx            html and body, the header, the footer, the
                        Organization schema, the stylesheet
  globals.css           the whole stylesheet, 422 KB
  page.tsx              the home page
  sitemap.ts            generated from lib/routes.ts
  icon.svg              the tab icon; Next links it on every page
  not-found.tsx         the 404 page
  <338 more route folders>/page.tsx
components/
  LogoSprite.tsx        the wordmark, defined once, referenced by <use>
  SiteChrome.tsx        header, promo bar, mega menu, drawer, footer
  SiteRuntime.tsx       loads public/site.js after hydration
lib/
  routes.ts             340 entries: path, title, description, language
public/
  site.js               the behaviour layer, 951 KB
  robots.txt            crawl rules, including 20 named AI agents
  llms.txt              a plain-text map of the site for answer engines
  images/ downloads/ share/
types/css.d.ts          lets the markup set CSS custom properties inline
tools/                  the generator; not part of the build
```

**Each page is self-contained.** `app/pricing/page.tsx` holds the pricing page's
markup as JSX and its own `metadata` — title, description, canonical URL, Open
Graph tags — plus the page's `application/ld+json` schema. To change a page's
copy, edit that one file.

**The chrome is in one place.** Header and footer markup lives in
`components/SiteChrome.tsx` and is rendered by `app/layout.tsx`, so a change
there reaches all 340 pages. `SiteHeader` marks the current page from the
pathname rather than at build time, so the highlight follows client-side
navigation.

**`public/site.js` is the behaviour layer** — accordions, tabs, the Academy and
Insights filters, the twelve free tools, the careers form, the reveal-on-scroll
animations. It is plain JavaScript with no dependencies, it expects exactly one
page in the DOM, and it is loaded with `strategy="afterInteractive"` so it never
blocks the first paint. It is not generated from the React tree: it finds the
elements it needs by `data-` attribute. If you rename a `data-` attribute in a
page, update the matching selector in `site.js`.

### SEO

Handled in the code, not by a plugin:

- a unique title and description per page, in `lib/routes.ts`
- a canonical URL per page, from the same table
- `app/sitemap.ts` builds `/sitemap.xml` from the route table, so a new page
  appears in the sitemap as soon as it is in the build
- `public/robots.txt` allows the search crawlers and twenty named AI agents
- `public/llms.txt` is a plain-text map of the site for answer engines
- `Organization` schema in the layout; `WebPage`, `Service` or `Article` schema
  plus `FAQPage` and `BreadcrumbList` per page
- four 301s in `next.config.ts`, for pages whose content was folded into
  another page

---

## Regenerating from source

The pages are generated from the single-file build of the site. You do not need
this to work on the project — the generated code is committed and is the source
of truth from here on — but it is how the project was produced:

```bash
node tools/generate.mjs        # reads ../pubrica/dist, rewrites app/ components/ lib/
```

It wipes `app/`, `components/`, `lib/` and `types/` and writes them fresh, so
**any hand edit in those folders is lost when it runs.** Config files, `public/`
and `tools/` are left alone.

---

## Known gaps to settle before launch

These are carried over from the current site; none of them block a deploy, but
the first one will show as 404s.

**1. Links to pages that are not in this project.** The markup links to ten
addresses that exist on the current WordPress site but have no page here. On the
live site these links work; in a deployment of this project alone they 404.
Either migrate the pages or repoint the links.

| Address | Links to it | What it is |
| --- | --- | --- |
| `/order-now/` | 1002 | the enquiry call to action, in the promo bar and on every page |
| `/services/` | 173 | the "Services" step in every service page's breadcrumb |
| `/insights/sample-work/` | 144 | in the mega menu and the footer |
| `/testimonial/` | 39 | "Explore more client testimonials" |
| `/privacy-policy/` | 2 | footer |
| `/terms-and-conditions/`, `/cookie-policy/`, `/do-not-sell-any-information/`, `/faq/`, `/ethics/` | 1 each | footer |

**2. Fifteen links to pages that do not exist anywhere yet.** Twelve are
"Further reading" cards for Insights articles that were never written; three are
buttons for free tools that were never built (an AI-disclosure drafter, an
AI-content check, a poster review — the twelve tools on `/free-tools/` do not
include them). The cards carry real headlines and need either the article
written or the card removed:

```
/insights/badges-that-govern-nothing/        /insights/journal-instructions-deviations/
/insights/book-permissions-timeline/         /insights/publisher-ai-disclosure-policies/
/insights/consort-2025-what-changed/         /insights/style-guide-editions-2026/
/insights/eu-mdr-language-requirements/      /insights/there-is-no-prisma-2026/
/insights/how-machine-translation-fails/     /tools/ai-content-check/
/insights/iped-thesis-editing-guidelines-2025/  /tools/ai-disclosure/
/insights/iso-17100-what-it-requires/        /tools/poster-review/
/insights/iso-18587-revision-non-human-translation/
```

One of those cards also describes another supplier's page, which the site's own
copy rule does not allow; it needs rewriting whichever way it is resolved.

**3. The careers form has no endpoint.** `CAREERS.endpoint` in `public/site.js`
is empty, so the form falls back to opening the visitor's mail client addressed
to `info@pubrica.com`, and a CV cannot be attached that way. Point `endpoint` at
a handler that accepts `multipart/form-data` — a Vercel function, or a form
service — before the page goes live.

**4. Seventeen image files are missing** from `public/images/`. The markup
references them and they render as broken images.

**5. An image on the home page is hotlinked from `editage.com`.** It must be
replaced with a file Pubrica owns or has licensed before launch.

**6. Two testimonials name Novartis and Sun Pharma.** Written consent from both
is needed before those can be published.

**7. `/ja/tokushoho/` is incomplete.** Japan's Specified Commercial Transactions
Act requires the name of the 運営統括責任者 and the registered address; both are
placeholders.

---

## Licensing note

Every illustration in the site is an original SVG. The photographs in the
editors and partnerships sections were supplied by Pubrica. No stock image is
used under a licence this project does not hold.
