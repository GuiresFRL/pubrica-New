/* HTML -> JSX. Driven by a real parser rather than regexes, because the
   source contains SVG, inline styles, boolean attributes and entities that
   a regex pass gets wrong in ways that only show up at build time. */
import { parse } from 'node-html-parser';
import { decodeHTML } from 'entities';

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link',
  'meta','param','source','track','wbr']);

/* attributes React spells differently */
const ATTR = {
  class:'className', for:'htmlFor', tabindex:'tabIndex', readonly:'readOnly',
  maxlength:'maxLength', minlength:'minLength', colspan:'colSpan', rowspan:'rowSpan',
  cellpadding:'cellPadding', cellspacing:'cellSpacing', usemap:'useMap',
  frameborder:'frameBorder', contenteditable:'contentEditable',
  crossorigin:'crossOrigin', datetime:'dateTime', enctype:'encType',
  formaction:'formAction', novalidate:'noValidate', autocomplete:'autoComplete',
  autofocus:'autoFocus', autoplay:'autoPlay', srcset:'srcSet', spellcheck:'spellCheck',
  accesskey:'accessKey', inputmode:'inputMode',
  /* svg */
  'stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap',
  'stroke-linejoin':'strokeLinejoin','stroke-dasharray':'strokeDasharray',
  'stroke-dashoffset':'strokeDashoffset','stroke-opacity':'strokeOpacity',
  'stroke-miterlimit':'strokeMiterlimit',
  'fill-rule':'fillRule','fill-opacity':'fillOpacity','clip-rule':'clipRule',
  'clip-path':'clipPath','stop-color':'stopColor','stop-opacity':'stopOpacity',
  'text-anchor':'textAnchor','dominant-baseline':'dominantBaseline',
  'font-family':'fontFamily','font-size':'fontSize','font-weight':'fontWeight',
  'letter-spacing':'letterSpacing','paint-order':'paintOrder',
  'vector-effect':'vectorEffect','shape-rendering':'shapeRendering',
  'color-interpolation-filters':'colorInterpolationFilters',
  'gradientunits':'gradientUnits','gradienttransform':'gradientTransform',
  'patternunits':'patternUnits','preserveaspectratio':'preserveAspectRatio',
  'viewbox':'viewBox','xlink:href':'xlinkHref','xmlns:xlink':'xmlnsXlink',
  'baseprofile':'baseProfile','marker-end':'markerEnd','marker-start':'markerStart',
  'clippathunits':'clipPathUnits','maskunits':'maskUnits','spreadmethod':'spreadMethod',
};
/* present-means-true in HTML, needs a real boolean in JSX */
const BOOL = new Set(['hidden','checked','selected','disabled','open','required',
  'readonly','multiple','autofocus','autoplay','controls','loop','muted','default',
  'reversed','novalidate','formnovalidate','itemscope','playsinline','async','defer']);

/* Attributes React's typings declare as number. SVG geometry is excluded:
   those accept a string and often carry units. */
const NUM = new Set(['maxlength','minlength','colspan','rowspan','tabindex',
  'size','rows','cols','span','start','step','min','max','width','height']);

/* the full HTML5 named-entity set, not a hand-written subset: the source
   uses &eacute;, &sup2;, &frac12; and others that a partial table misses */
export function decodeEntities(s){ return decodeHTML(s); }

function camel(prop){
  if (prop.startsWith('--')) return `'${prop}'`;          // CSS custom property
  return prop.replace(/-([a-z])/g, (_,c)=>c.toUpperCase());
}

function styleObject(css){
  /* A Map rather than a list: a declaration repeated in one style attribute
     is legal CSS where the last one wins, but an object literal cannot
     carry the same key twice. Keeping the last keeps the rendered result. */
  const out = new Map();
  css.split(';').forEach(decl => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    const k = decl.slice(0, i).trim();
    const v = decl.slice(i + 1).trim();
    if (!k || !v) return;
    out.set(camel(k), `${camel(k)}: ${JSON.stringify(decodeEntities(v))}`);
  });
  return out.size ? `{{ ${[...out.values()].join(', ')} }}` : null;
}

function attrs(node){
  const out = [];
  for (const [rawK, rawV] of Object.entries(node.attributes || {})) {
    const k = rawK.toLowerCase();
    if (k.startsWith('on')) continue;                      // no inline handlers in JSX
    if (k === 'style') {
      const s = styleObject(rawV);
      if (s) out.push(`style=${s}`);
      continue;
    }
    if (BOOL.has(k)) { out.push(`${ATTR[k] || k}={true}`); continue; }
    const name = ATTR[k] || (k.startsWith('data-') || k.startsWith('aria-') ? k : (ATTR[rawK] || rawK));
    /* React types these as numbers, so "5" has to be emitted as 5. An
       attribute that is not actually numeric (width="100%" on a table) is
       left as the string it is. */
    if (NUM.has(k) && /^-?\d+(\.\d+)?$/.test(rawV.trim())) {
      out.push(`${name}={${Number(rawV.trim())}}`);
      continue;
    }
    out.push(`${name}={${JSON.stringify(decodeEntities(rawV))}}`);
  }
  return out.length ? ' ' + out.join(' ') : '';
}

function textNode(t){
  const s = decodeEntities(t);
  if (!s.trim()) return /\s/.test(s) ? ' ' : '';
  /* braces and angle brackets have to leave the JSX parser alone */
  return `{${JSON.stringify(s)}}`;
}

export function toJsx(node, depth = 0){
  // 3 = text, 8 = comment in node-html-parser
  if (node.nodeType === 3) return textNode(node.rawText ?? node.text ?? '');
  if (node.nodeType === 8) return '';
  if (!node.tagName) {
    return (node.childNodes || []).map(c => toJsx(c, depth)).join('');
  }
  const tag = node.rawTagName;                             // keep SVG casing
  const a = attrs(node);
  if (VOID.has(tag.toLowerCase())) return `<${tag}${a} />`;
  const kids = (node.childNodes || []).map(c => toJsx(c, depth + 1)).join('');
  if (!kids) return `<${tag}${a} />`;
  return `<${tag}${a}>${kids}</${tag}>`;
}

export function htmlToJsx(html){
  const root = parse(html, { comment: false, blockTextElements:
    { script: true, noscript: true, style: true, pre: true } });
  return root.childNodes.map(c => toJsx(c)).join('');
}
