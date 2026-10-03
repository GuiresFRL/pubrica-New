/* Build the Next.js app from the static export. dist/ is the right source:
   it already has one view per page, the chrome resolved, and a shared
   stylesheet and runtime bundle that are known to work together. */
import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';
import { htmlToJsx, decodeEntities } from './html2jsx.mjs';

const SRC  = '/home/claude/pubrica/dist';
const ONE  = '/home/claude/pubrica/index.html';
const ROOT = '/home/claude/pubrica-next';
const APP  = path.join(ROOT, 'app');
const PUB  = path.join(ROOT, 'public');
const SITE = 'https://pubrica.com';

/* Pages whose content was folded into another page. They keep their address
   as a 301 (next.config.ts), so no component and no sitemap entry is
   generated for them — a sitemap that lists a redirect wastes crawl budget
   and reads as a mistake to Search Console. */
const MERGED = new Set([
  '/scientific-editor-profile/',
  '/editor-speak/',
  '/therapeutic-expertise/',
]);

/* ---- clean the generated areas, leave config and tools alone ---- */
for (const d of [APP, path.join(ROOT, 'components'), path.join(ROOT, 'lib'),
                 path.join(ROOT, 'types')]) {
  fs.rmSync(d, { recursive: true, force: true });
  fs.mkdirSync(d, { recursive: true });
}
fs.mkdirSync(PUB, { recursive: true });

/* ---- every page the static build produced ---- */
const pages = [];
(function walk(dir){
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'assets') walk(p); }
    else if (e.name === 'index.html') pages.push(p);
  }
})(SRC);
console.log('pages found in dist : %d', pages.length);

/* ---- the stylesheet ----
   The static build splits the sheet in two and inlines the first half in
   every page, so dist/assets holds only the second half. Next ships one
   stylesheet, so globals.css has to be the whole thing, taken from the
   source file. Reading only dist/assets here drops the design tokens. */
const one = fs.readFileSync(ONE, 'utf8');
const cssStart = one.indexOf('<style>') + '<style>'.length;
const cssEnd   = one.indexOf('\n</style>', cssStart);
if (cssStart < 8 || cssEnd < 0) throw new Error('stylesheet not found in index.html');
fs.writeFileSync(path.join(APP, 'globals.css'), one.slice(cssStart, cssEnd));

const assets = fs.readdirSync(path.join(SRC, 'assets'));
const jsFile  = assets.find(f => f.endsWith('.js'));
fs.writeFileSync(path.join(PUB, 'site.js'),
  fs.readFileSync(path.join(SRC, 'assets', jsFile)));
console.log('globals.css %d KB, public/site.js %d KB',
  Math.round(fs.statSync(path.join(APP,'globals.css')).size/1024),
  Math.round(fs.statSync(path.join(PUB,'site.js')).size/1024));

/* robots.txt and llms.txt ship as written; the sitemap is generated from
   lib/routes.ts instead, so it cannot drift from the route table. */
for (const f of ['robots.txt','llms.txt']) {
  const s = path.join(SRC, f);
  if (fs.existsSync(s)) fs.copyFileSync(s, path.join(PUB, f));
}
const idxKey = fs.readdirSync(SRC).find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (idxKey) fs.copyFileSync(path.join(SRC, idxKey), path.join(PUB, idxKey));
for (const d of ['share','images','downloads']) {
  const s = path.join(SRC, d);
  if (fs.existsSync(s)) fs.cpSync(s, path.join(PUB, d), { recursive: true });
}

/* ---- chrome, taken once from a page with no active-nav state ---- */
const sample = fs.readFileSync(path.join(SRC, 'pricing', 'index.html'), 'utf8');
const bodyOf = s => s.slice(s.indexOf('<body') );
const b = bodyOf(sample);
const bodyOpen = b.slice(b.indexOf('>') + 1);
const preChrome  = bodyOpen.slice(0, bodyOpen.indexOf('<main class="view"'))
                     .replace(/ aria-current="page"/g, '');
const postChrome = bodyOpen.slice(bodyOpen.lastIndexOf('</main>') + '</main>'.length)
                     .replace(/<script[\s\S]*?<\/script>/g, '')
                     .replace(/<\/body>[\s\S]*$/, '');

/* the sprite is a big inline SVG; keep it out of the layout file */
const spriteStart = preChrome.indexOf('<svg width="0"');
const spriteEnd   = preChrome.indexOf('</svg>', spriteStart) + '</svg>'.length;
const sprite  = preChrome.slice(spriteStart, spriteEnd);
const chrome  = preChrome.slice(0, spriteStart) + preChrome.slice(spriteEnd);

fs.writeFileSync(path.join(ROOT, 'components', 'LogoSprite.tsx'),
`/* The Pubrica wordmark, defined once and referenced by <use> everywhere. */
export default function LogoSprite() {
  return (
${htmlToJsx(sprite)}
  );
}
`);

fs.writeFileSync(path.join(ROOT, 'components', 'SiteChrome.tsx'),
`'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/* The header, promo bar, drawer and side rail. The markup is the same on
   every page; only the current-page marker changes, and that comes from the
   pathname rather than from the build. */
export function SiteHeader() {
  const pathname = usePathname();
  useEffect(() => {
    document.querySelectorAll('[aria-current="page"]')
      .forEach(el => el.removeAttribute('aria-current'));
    document.querySelectorAll<HTMLAnchorElement>('header a[href], #drawer a[href]')
      .forEach(a => {
        if (a.getAttribute('href') === pathname) a.setAttribute('aria-current', 'page');
      });
  }, [pathname]);
  return (
    <>
${htmlToJsx(chrome)}
    </>
  );
}

export function SiteFooter() {
  return (
    <>
${htmlToJsx(postChrome)}
    </>
  );
}
`);

/* ---- the root layout ---- */
const orgLd = (one.slice(0, one.indexOf('</head>'))
  .match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [,'{}'])[1].trim();

fs.writeFileSync(path.join(APP, 'layout.tsx'),
`import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
import LogoSprite from '@/components/LogoSprite';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import SiteRuntime from '@/components/SiteRuntime';
import { SITE_URL } from '@/lib/routes';

/* Per-page title, description and canonical live in each page.tsx. What is
   here is what every page shares. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  openGraph: { siteName: 'Pubrica', locale: 'en', type: 'website' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const organization = ${JSON.stringify(JSON.parse(orgLd))};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {/* Disclosures open and reveal animations run only where there is
            scripting. Without it the same content has to be visible, so the
            fallback is in a noscript block rather than in the sheet. */}
        <noscript>
          <style>{'.rv{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <Script id="has-js" strategy="beforeInteractive">
          {"document.documentElement.className += ' has-js';"}
        </Script>
        <LogoSprite />
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteRuntime />
      </body>
    </html>
  );
}
`);

fs.writeFileSync(path.join(APP, 'not-found.tsx'),
`import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — Pubrica',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="view">
      <section className="ahero">
        <div className="wrap">
          <p className="crumb">Pubrica</p>
          <h1>That page is not here</h1>
          <p className="lede">
            The address may have changed, or the link that brought you here may be
            out of date. The pages below are the usual way in.
          </p>
          <p className="ahero__btns">
            <Link className="btn btn--mark" href="/">Home</Link>
            <Link className="btn" href="/services/">Services</Link>
            <Link className="btn" href="/academy/">Academy</Link>
            <Link className="btn" href="/contact-us/">Contact us</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
`);

/* The tab icon. A P built from geometry rather than set in a typeface, so
   it looks the same before any webfont has loaded, and it still reads at
   16px where the full wordmark would not. Next links it automatically. */
fs.writeFileSync(path.join(APP, 'icon.svg'),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Pubrica">
  <rect width="64" height="64" rx="12" fill="#1D3033"/>
  <!-- A P built from geometry rather than set in a typeface, so the tab icon
       looks the same before any webfont has loaded. -->
  <path d="M19 15h15a12.5 12.5 0 0 1 0 25h-8v9h-7V15zm7 6.5v12h7.5a6 6 0 0 0 0-12H26z"
        fill="#FFFFFF"/>
  <circle cx="45.5" cy="46.5" r="4" fill="#A8243A"/>
</svg>
`);

fs.writeFileSync(path.join(APP, 'sitemap.ts'),
`import type { MetadataRoute } from 'next';
import { routes, SITE_URL } from '@/lib/routes';

/* Generated from the route table, so a new page is in the sitemap as soon
   as it is in the build. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(r => ({
    url: SITE_URL + r.path,
    lastModified: now,
    changeFrequency: r.path === '/' ? 'weekly' : 'monthly',
    priority: r.path === '/' ? 1 : r.path.split('/').filter(Boolean).length <= 1 ? 0.8 : 0.6,
  }));
}
`);

fs.writeFileSync(path.join(ROOT, 'types', 'css.d.ts'),
`import 'react';

/* The markup sets CSS custom properties inline (--i, --dock-h and friends).
   React allows it; the default typings do not describe it. */
declare module 'react' {
  interface CSSProperties {
    [key: \`--\${string}\`]: string | number | undefined;
  }
}
`);

/* ---- the runtime ---- */
fs.writeFileSync(path.join(ROOT, 'components', 'SiteRuntime.tsx'),
`'use client';
import Script from 'next/script';

/* The behaviour layer: accordions, tabs, the library filters, the free
   tools, the application form. It is the same bundle the static build
   ships and it expects one view in the DOM, which is what each route
   renders. Loaded after hydration so it never blocks paint. */
export default function SiteRuntime() {
  return <Script src="/site.js" strategy="afterInteractive" />;
}
`);

/* ---- routes: path, title, description ---- */
const routes = [];
for (const file of pages) {
  const s = fs.readFileSync(file, 'utf8');
  const head = s.slice(0, s.indexOf('</head>'));
  const rel = path.relative(SRC, path.dirname(file)).split(path.sep).join('/');
  const urlPath = rel === '' ? '/' : '/' + rel + '/';
  const title = decodeEntities((head.match(/<title>([\s\S]*?)<\/title>/) || [,''])[1]).trim();
  const desc  = decodeEntities((head.match(/<meta name="description" content="([\s\S]*?)"/) || [,''])[1]).trim();
  const lang  = (s.match(/<html[^>]*lang="([^"]*)"/) || [,'en'])[1];
  const og    = (head.match(/<meta property="og:image" content="([^"]*)"/) || [,''])[1];
  /* the page-type schema: WebPage, Service or Article plus FAQPage and the
     breadcrumb trail. Dropping it would cost the rich results the static
     build already earns. */
  const ld    = (head.match(/<script type="application\/ld\+json" id="ld-route">([\s\S]*?)<\/script>/) || [,''])[1].trim();
  routes.push({ urlPath, title, desc, lang, og, ld, file });
}
routes.sort((a, b) => a.urlPath.localeCompare(b.urlPath));
const merged = routes.filter(r => MERGED.has(r.urlPath)).map(r => r.urlPath);
const live   = routes.filter(r => !MERGED.has(r.urlPath));
if (merged.length) console.log('merged into another page, redirected : %s', merged.join(', '));

fs.writeFileSync(path.join(ROOT, 'lib', 'routes.ts'),
`/* Generated from the published site. One entry per URL: the title and
   description Google and the answer engines read. */
export type Route = { path: string; title: string; description: string; lang: string };

export const SITE_URL = '${SITE}';

export const routes: Route[] = ${JSON.stringify(
  live.map(r => ({ path: r.urlPath, title: r.title, description: r.desc, lang: r.lang })),
  null, 1)};

export const routeByPath = new Map(routes.map(r => [r.path, r]));
`);
console.log('lib/routes.ts : %d routes', live.length);

/* ---- a page component per route ---- */
let built = 0, biggest = 0, biggestName = '';
for (const r of live) {
  const s = fs.readFileSync(r.file, 'utf8');
  const body = bodyOf(s);
  const i = body.indexOf('<main class="view"');
  const j = body.lastIndexOf('</main>') + '</main>'.length;
  const view = body.slice(i, j)
    .replace(/\shidden(?=[\s>])/, '')      // the SPA hid inactive views; Next renders one
    .replace(/\sdata-route="[^"]*"/, '');
  const jsx = htmlToJsx(view);

  const dir = r.urlPath === '/' ? APP
            : path.join(APP, r.urlPath.replace(/^\/|\/$/g, ''));
  fs.mkdirSync(dir, { recursive: true });
  let ld = null;
  if (r.ld) { try { ld = JSON.parse(r.ld); } catch { ld = null; } }
  const ogImage = r.og ? `\n    images: [${JSON.stringify(r.og)}],` : '';

  const src =
`import type { Metadata } from 'next';
import { routeByPath, SITE_URL } from '@/lib/routes';

const ROUTE = '${r.urlPath}';
const meta = routeByPath.get(ROUTE)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: SITE_URL + ROUTE },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: SITE_URL + ROUTE,
    type: 'website',${ogImage}
  },
};
${ld ? `
const schema = ${JSON.stringify(ld)};
` : ''}
export default function Page() {
  return (
    <>
${ld ? `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
` : ''}${jsx}
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), src);
  built++;
  if (src.length > biggest) { biggest = src.length; biggestName = r.urlPath; }
}
console.log('page components : %d  (largest %s, %d KB)',
  built, biggestName, Math.round(biggest/1024));
