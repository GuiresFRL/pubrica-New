// GitHub Pages serves this site from /pubrica-New, so root-relative hrefs, srcs
// and download paths written into the page sources need that prefix. Run by the
// deploy workflow before `next build`; it edits the checkout, never the repo.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = '/pubrica-New';
const rules = [
  [/(href|src)=\{"\/(?!\/)/g, `$1={"${BASE}/`],
  [/(href|src)="\/(?!\/)/g, `$1="${BASE}/`],
  [/(["'])\/(downloads|images|share)\//g, `$1${BASE}/$2/`],
  [/src="\/site\.js"/g, `src="${BASE}/site.js"`],
];
let changed = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.tsx?$/.test(name)) {
      const src = readFileSync(p, 'utf8');
      let out = src;
      for (const [re, to] of rules) out = out.replace(re, to);
      if (out !== src) { writeFileSync(p, out); changed++; }
    }
  }
}
for (const d of ['app', 'components']) walk(d);
console.log(`prefixed ${changed} files with ${BASE}`);
