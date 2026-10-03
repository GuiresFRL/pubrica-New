
/* ============================================================
   Content data — lifts straight out into React props later
   ============================================================ */

const TAXONOMY = {
  subjects: {
    note:'Work is assigned by subject, not by availability. These are the areas with standing expert cover \u2014 the register runs wider than the page, so ask if yours is not here.',
    all:{ label:'View all 30+ subject areas', href:'/subject-matter-experts/' },
    items:[
      { t:'Oncology', d:'Trial reporting to CONSORT and RECIST, and evidence synthesis.', h:'/subject-matter-experts/oncology/' },
      { t:'Cardiology', d:'CONSORT 2025 trials, device studies and registry analysis.', h:'/subject-matter-experts/cardiology/' },
      { t:'Endocrinology & diabetology', d:'Metabolic cohorts, registry data and dataset-driven studies.', h:'/subject-matter-experts/endocrinology/' },
      { t:'Neurology & psychiatry', d:'Imaging endpoints, scale validation and longitudinal design.', h:'/subject-matter-experts/neurology/' },
      { t:'Radiology & imaging', d:'Diagnostic accuracy to STARD, and clinical case reporting.', h:'/subject-matter-experts/radiology/' },
      { t:'Surgery', d:'Operative case series, IDEAL-stage reporting and technique papers.', h:'/subject-matter-experts/surgery/' },
      { t:'Public health & epidemiology', d:'STROBE cohorts, cross-sectional analysis and policy evidence.', h:'/subject-matter-experts/public-health/' },
      { t:'Pharmacology & toxicology', d:'Dose-response reporting, pharmacovigilance and safety writing.', h:'/subject-matter-experts/pharmacology/' },
      { t:'Genomics & bioinformatics', d:'Multi-omic pipelines with methods documented for review.', h:'/subject-matter-experts/genomics/' },
      { t:'Health economics', d:'Cost-effectiveness, budget impact and HTA submissions.', h:'/subject-matter-experts/health-economics/' },
      { t:'Economics & social sciences', d:'Econometric analysis, survey design and policy research.', h:'/subject-matter-experts/economics/' },
      { t:'Engineering & computer science', d:'Technical papers, model reporting and TRIPOD+AI alignment.', h:'/subject-matter-experts/engineering/' },
    ]
  },
  industries: {
    note:'Regulated sectors need evidence that satisfies a peer reviewer and an assessor at the same time. Each one below carries its own documentation set and its own failure modes.',
    all:{ label:'All industries', href:'/industries/' },
    items:[
      { t:'Pharmaceutical', d:'Clinical study reports, regulatory submissions and publication planning.', h:'/industries/pharmaceutical/' },
      { t:'Biologics & biosimilars', d:'Comparability evidence, immunogenicity reporting and dossier support.', h:'/industries/biologics/' },
      { t:'Medical devices', d:'Clinical evaluation reports, MDR and IVDR evidence, post-market surveillance.', h:'/industries/medical-device/' },
      { t:'Generics', d:'Bioequivalence studies, ANDA dossiers and regulatory writing.', h:'/industries/generics/' },
      { t:'Life sciences & biotech', d:'Preclinical reporting, translational research and grant applications.', h:'/industries/life-sciences/' },
      { t:'Diagnostics', d:'Assay validation, STARD-compliant accuracy studies and claims support.', h:'/industries/diagnostics/' },
      { t:'Engineering & technology', d:'Technical papers, standards-aligned reporting and model documentation.', h:'/industries/engineering/' },
      { t:'Healthcare providers', d:'Service evaluation, clinical audit and quality-improvement publication.', h:'/industries/healthcare-providers/' },
      { t:'Academic publishing', d:'Editorial outsourcing, peer-review management and production QA.', h:'/industries/publishing/' },
      { t:'Nutraceuticals & food science', d:'Substantiation dossiers, claims evidence and systematic reviews.', h:'/industries/nutraceuticals/' },
      { t:'Contract research organisations', d:'Overflow statistical, writing and editorial capacity under your own branding.', h:'/industries/cro/' },
      { t:'Public health agencies & NGOs', d:'Programme evaluation, surveillance reporting and policy briefing papers.', h:'/industries/public-health-agencies/' },
    ]
  },
  audience: {
    note:'A physician publishing a case report and a publisher outsourcing copy editing need almost nothing in common. These are the eight routes in.',
    all:{ label:'Talk to someone about your situation', href:'/contact-us/' },
    items:[
      { t:'Physicians & clinicians', d:'Case reports, clinical literature reviews and CME content, written around a full caseload.', h:'/for/physicians/' },
      { t:'Academic researchers', d:'Manuscripts, theses, statistics and submission support for individual authors and labs.', h:'/for/researchers/' },
      { t:'Universities & institutions', d:'Department programmes: research training, editorial capacity and publication throughput.', h:'/for/universities/' },
      { t:'Pharma & biotech', d:'Regulatory writing, medical affairs, market access and biometrics from one evidence core.', h:'/for/industry/' },
      { t:'Medical device & IVD', d:'MDR and IVDR technical files: evaluation plans, PMCF, PMS, SSCP and the risk file.', h:'/for/medical-device/' },
      { t:'Journals, publishers & societies', d:'Editorial operations, specialist review, accessibility and production QA at volume.', h:'/for/publishers/' },
      { t:'Education & assessment providers', d:'Curriculum and standards mapping, items, psychometrics and platform delivery.', h:'/for/education/' },
      { t:'Students & early career', d:'Thesis and dissertation editing, statistical guidance and first-paper support.', h:'/for/students/' },
    ]
  }
};

const FAQS = [
  { q:'What exactly does Pubrica do?', a:'We provide research, writing, editing, statistical and publication support to authors, institutions, laboratories and publishers, mostly in medicine, life sciences and healthcare. In practice that ranges from running a meta-analysis to editing a thesis to handling a journal submission and the reviewer responses that follow.' },
  { q:'How is your editing different from a language-editing service?', a:'A language edit corrects grammar and style. Our editors hold doctorates or clinical posts in the field they are editing, so they also question the statistics, verify citations against primary sources, and flag claims the data does not support. Most of what causes a desk rejection sits in that second category.' },
  { q:'What is the turnaround?', a:'A standard edit takes five to seven business days and a minor edit two to three. Systematic reviews, meta-analyses and regulatory documents are scoped individually. Expedited turnaround is available on most services and is quoted upfront rather than added later.' },
  { q:'Do you keep supporting the paper after submission?', a:'Yes. Reviewer responses, major and minor revisions, rebuttal letters and resubmission to a second journal are included in the engagement. Support runs until the paper is published or you decide to stop.' },
  { q:'How do you handle unpublished data and confidentiality?', a:'Every project is covered by a signed confidentiality agreement, access is limited to the assigned team, and material is transferred over encrypted channels. We do not use client material to train anything and we do not pass work to third-party tools.' },
  { q:'Will using your services affect authorship or research integrity?', a:'No. We work within COPE and ICMJE guidance: we provide professional writing, editing and analysis support, which is acknowledged rather than credited as authorship. Scientific and clinical judgement stays with the named authors, and we will tell you when a request would cross that line.' },
  { q:'Which subjects do you cover?', a:'All the major clinical and life-science fields, including oncology, cardiology, endocrinology, neurology, psychiatry, radiology, surgery, public health, epidemiology, pharmacology, genomics and health economics. If your field is not listed, ask — the expert register is larger than the page.' },
];

/* ============================================================
   Build service explorer
   ============================================================ */

/* ============================================================
   Build FAQ
   ============================================================ */
(function buildExplorer(){
  const host = document.getElementById('expPanels');
  const segs = Array.from(document.querySelectorAll('.exp__seg'));
  if(!host || !segs.length) return;
  host.innerHTML = '';   // same reason as buildServices above

  Object.keys(TAXONOMY).forEach(function(key,i){
    const g = TAXONOMY[key];
    const pane = document.createElement('div');
    pane.className = 'exp__panel';
    pane.id = 'pane-'+key;
    pane.setAttribute('role','tabpanel');
    pane.setAttribute('aria-labelledby','seg-'+key);
    if(i!==0) pane.hidden = true;
    pane.innerHTML = '<p class="exp__note">'+g.note+'</p>'
      + '<div class="exp__grid">' + g.items.map(function(it){
          return '<a class="tile" href="'+it.h+'"><strong>'+it.t+'</strong><span>'+it.d+'</span></a>';
        }).join('') + '</div>'
      + '<div class="exp__foot"><a class="tlink" href="'+g.all.href+'">'+g.all.label+'</a>'
      + '<span>Not listed? We almost certainly cover it \u2014 <a class="tlink" href="/contact-us/">ask</a>.</span></div>';
    host.appendChild(pane);
  });

  function select(idx){
    segs.forEach(function(sg,i){
      const on = i===idx;
      sg.setAttribute('aria-selected', on);
      sg.tabIndex = on ? 0 : -1;
      document.getElementById(sg.getAttribute('aria-controls')).hidden = !on;
    });
  }
  segs.forEach(function(sg,i){
    sg.addEventListener('click', function(){ select(i); });
    sg.addEventListener('keydown', function(e){
      var n = null;
      if(e.key==='ArrowRight'||e.key==='ArrowDown') n = (i+1)%segs.length;
      if(e.key==='ArrowLeft' ||e.key==='ArrowUp')   n = (i-1+segs.length)%segs.length;
      if(e.key==='Home') n = 0;
      if(e.key==='End')  n = segs.length-1;
      if(n!==null){ e.preventDefault(); select(n); segs[n].focus(); }
    });
  });
})();

(function buildFaq(){
  document.querySelectorAll('.faq__list').forEach(function(list){
  if(!list.children.length) FAQS.forEach(function(f,i){
    const item = document.createElement('div');
    item.className = 'faq__item';
    item.innerHTML = '<h3 class="faq__h"><button class="faq__q" aria-expanded="false" aria-controls="faq-'+i+'">'
      + '<span>'+f.q+'</span><span class="sign" aria-hidden="true"></span></button></h3>'
      + '<div class="faq__a" id="faq-'+i+'" role="region"><div><p>'+f.a+'</p></div></div>';
    list.appendChild(item);
  });
  list.addEventListener('click', function(e){
    const btn = e.target.closest('.faq__q');
    if(!btn) return;
    const open = btn.getAttribute('aria-expanded')==='true';
    list.querySelectorAll('.faq__q').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
    list.querySelectorAll('.faq__item').forEach(function(it){ it.classList.remove('is-open'); });
    btn.setAttribute('aria-expanded', String(!open));
    if(!open){ const it = btn.closest('.faq__item'); if(it) it.classList.add('is-open'); }
  });
  });
})();

/* ============================================================
   Hero manuscript — one orchestrated sequence
   ============================================================ */
(function manuscript(){
  const ms = document.getElementById('ms');
  if(!ms) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const notes = ms.querySelectorAll('.note');
  const stamp = document.getElementById('msStamp');
  const statusText = document.getElementById('msStatusText');
  const status = document.getElementById('msStatus');
  const pulse = status ? status.querySelector('.pulse') : null;
  const passes = ms.querySelectorAll('.ms__pc');

  function setStatus(txt, done){
    if(statusText) statusText.textContent = txt;
    if(status) status.style.color = done ? 'var(--verify)' : '';
    if(pulse) pulse.style.animation = done ? 'none' : '';
  }

  // The static build serialises whatever frame it happened to catch, so the
  // sequence clears its own state rather than trusting the markup it loads into.
  function reset(){
    ms.classList.remove('is-marked','is-queried','is-verified');
    notes.forEach(function(n){ n.classList.remove('is-on'); });
    passes.forEach(function(p){ p.classList.remove('is-run','is-done'); });
    if(stamp) stamp.classList.remove('is-on');
    setStatus('Received', false);
  }

  function finish(){
    ms.classList.add('is-marked','is-queried','is-verified');
    notes.forEach(function(n){ n.classList.add('is-on'); });
    passes.forEach(function(p){ p.classList.remove('is-run'); p.classList.add('is-done'); });
    if(stamp) stamp.classList.add('is-on');
    setStatus('Reviewed', true);
  }

  if(reduce){ finish(); return; }

  // clear the serialised frame immediately, not when the sequence starts:
  // the observer may not fire for a while and the stale frame would paint
  reset();

  const SEQ = [
    [0,    reset],
    [500,  function(){ passes[0] && passes[0].classList.add('is-run'); setStatus('Reading', false); }],
    [1400, function(){ ms.classList.add('is-marked'); notes[0] && notes[0].classList.add('is-on');
                       if(passes[0]){ passes[0].classList.remove('is-run'); passes[0].classList.add('is-done'); } }],
    [1900, function(){ passes[1] && passes[1].classList.add('is-run'); }],
    [2800, function(){ ms.classList.add('is-queried'); notes[1] && notes[1].classList.add('is-on');
                       if(passes[1]){ passes[1].classList.remove('is-run'); passes[1].classList.add('is-done'); } }],
    [3300, function(){ passes[2] && passes[2].classList.add('is-run'); }],
    [4200, function(){ ms.classList.add('is-verified'); notes[2] && notes[2].classList.add('is-on');
                       if(passes[2]){ passes[2].classList.remove('is-run'); passes[2].classList.add('is-done'); } }],
    [4900, function(){ if(stamp) stamp.classList.add('is-on'); setStatus('Reviewed', true); }],
  ];
  const LOOP = 10500;

  let timers = [], running = false;

  function play(){
    timers.forEach(clearTimeout);
    timers = SEQ.map(function(s){ return setTimeout(s[1], s[0]); });
    timers.push(setTimeout(function(){ if(running) play(); }, LOOP));
  }

  function stop(){ timers.forEach(clearTimeout); timers = []; }

  // only while it is on screen: a hero looping to an empty tab helps nobody
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting && !running){ running = true; play(); }
        else if(!e.isIntersecting && running){ running = false; stop(); }
      });
    }, { threshold:.25 }).observe(ms);
  } else {
    running = true; play();
  }
})();

/* ============================================================
   Reveal on scroll
   ============================================================ */
(function reveal(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let io = null;
  function scan(){
    const els = document.querySelectorAll('.rv:not(.is-in), [data-rv-group]:not(.is-in)');
    if(reduce || !('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('is-in'); });
      return;
    }
    if(!io){
      io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { threshold:.12, rootMargin:'0px 0px -8% 0px' });
    }
    // re-observing forces a fresh intersection callback for elements that
    // were hidden inside an inactive view when they were first observed
    els.forEach(function(el){ io.unobserve(el); io.observe(el); });
  }
  window.__revealScan = scan;
  scan();
})();

/* ============================================================
   Section bar: mark the link list only while it really overflows
   ============================================================ */
/* ============================================================
   Section bar: mark the link for the page you are actually on
   ============================================================ */
/* ============================================================
   Section bar dropdowns
   The panels live in the fixed layer because the link list scrolls
   horizontally and would otherwise clip them.
   ============================================================ */
/* ============================================================
   Home: the expanding service panels
   ============================================================ */
(function servicePanels(){
  function wire(root){
    var panels = [].slice.call(root.querySelectorAll('.secx__p'));
    panels.forEach(function(p){
      var tab = p.querySelector('.secx__tab');
      var body = p.querySelector('.secx__body');
      if(!tab || !body) return;
      tab.addEventListener('click', function(){
        if(p.classList.contains('is-open')) return;
        panels.forEach(function(o){
          var ot = o.querySelector('.secx__tab'), ob = o.querySelector('.secx__body');
          var on = o === p;
          o.classList.toggle('is-open', on);
          if(ot) ot.setAttribute('aria-expanded', on ? 'true' : 'false');
          if(ob) ob.hidden = !on;
        });
      });
    });
  }
  function scan(){ document.querySelectorAll('[data-secx]').forEach(wire); }
  window.__secxScan = scan;
  scan();
})();

(function secbarDrops(){
  var open = null;

  function place(trig, panel){
    var r = trig.getBoundingClientRect();
    panel.style.top = Math.round(r.bottom) + 'px';
    panel.style.left = '0px';
    panel.style.maxWidth = Math.min(window.innerWidth - 24, 760) + 'px';
    var w = panel.offsetWidth;
    var left = Math.round(r.left);
    if(left + w > window.innerWidth - 12) left = window.innerWidth - 12 - w;
    panel.style.left = Math.max(12, left) + 'px';
  }

  function close(){
    if(!open) return;
    open.trig.setAttribute('aria-expanded', 'false');
    open.panel.hidden = true;
    open = null;
  }

  function show(trig, panel){
    close();
    panel.hidden = false;
    trig.setAttribute('aria-expanded', 'true');
    open = { trig: trig, panel: panel };
    place(trig, panel);
  }

  // the panel is looked up when the button is used, not when it is wired: the
  // first scan can run before the views are in the document, and resolving
  // early left every trigger marked as wired with no handler behind it
  function panelOf(trig){
    return document.getElementById(trig.getAttribute('aria-controls'));
  }

  // the guard lives in a WeakSet rather than on the element: the static build
  // serialises the rendered DOM, so a data-attribute flag got baked into every
  // page and the real page load then skipped wiring altogether
  var wired = new WeakSet();

  function wire(trig){
    if(wired.has(trig)) return;
    wired.add(trig);
    trig.addEventListener('click', function(){
      var panel = panelOf(trig);
      if(!panel) return;
      if(open && open.trig === trig) close(); else show(trig, panel);
    });
    trig.addEventListener('keydown', function(e){
      if(e.key !== 'ArrowDown') return;
      var panel = panelOf(trig);
      if(!panel) return;
      e.preventDefault();
      if(!open || open.trig !== trig) show(trig, panel);
      var a = panel.querySelector('a'); if(a) a.focus();
    });
  }

  function scan(){ document.querySelectorAll('.sbtrig').forEach(wire); }

  document.addEventListener('click', function(e){
    if(open && !open.trig.contains(e.target) && !open.panel.contains(e.target)) close();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && open){ var t = open.trig; close(); t.focus(); }
  });
  window.addEventListener('resize', close, { passive:true });
  // the bar is sticky, so the panel has to follow it rather than detach
  window.addEventListener('scroll', function(){
    if(open) place(open.trig, open.panel);
  }, { passive:true });

  window.__secbarDrops = scan;
  scan();
})();

(function secbarCurrent(){
  function scan(){
    var here = location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.secbar__l a, .sbdrop a').forEach(function(a){
      var href = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
      if(href === here) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  window.__secbarCurrent = scan;
  scan();
})();

(function secbarScroll(){
  function scan(){
    document.querySelectorAll('.secbar__l').forEach(function(ul){
      ul.classList.toggle('is-scroll', ul.scrollWidth - ul.clientWidth > 2);
    });
  }
  window.__secbarScan = scan;
  window.addEventListener('resize', scan, { passive:true });
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(scan);
  scan();
})();

/* ============================================================
   Counting numbers
   ============================================================ */
(function counters(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nums = document.querySelectorAll('[data-count]');
  function fmt(n){ return n.toLocaleString('en-GB'); }
  if(reduce || !('IntersectionObserver' in window)){
    nums.forEach(function(el){ el.textContent = fmt(+el.dataset.count) + (el.dataset.suffix||''); });
    return;
  }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count, suffix = el.dataset.suffix||'';
      const dur = 1400, t0 = performance.now();
      function tick(now){
        const p = Math.min(1, (now-t0)/dur);
        const eased = 1 - Math.pow(1-p, 3);
        el.textContent = fmt(Math.round(target*eased)) + suffix;
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold:.6 });
  nums.forEach(function(el){ io.observe(el); });
})();

/* ============================================================
   Mega menu (hover + keyboard)
   ============================================================ */
(function mega(){
  const items = document.querySelectorAll('[data-mega]');
  items.forEach(function(item){
    const btn = item.querySelector('.nav__link');
    let t;
    function open(){ clearTimeout(t); item.classList.add('is-open'); btn.setAttribute('aria-expanded','true'); }
    function close(){ item.classList.remove('is-open'); btn.setAttribute('aria-expanded','false'); }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function(){ t = setTimeout(close, 120); });
    btn.addEventListener('click', function(e){
      if(btn.tagName === 'BUTTON'){          // Services: a toggle, nothing to navigate to
        e.preventDefault();
        item.classList.contains('is-open') ? close() : open();
      } else {
        close();                             // a real link: let it navigate
      }
    });
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', function(e){
      if(!item.contains(e.relatedTarget)) close();
    });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ close(); } });
  });
})();

/* ============================================================
   Mobile drawer
   ============================================================ */
(function drawer(){
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const scrim  = document.getElementById('scrim');
  const close  = document.getElementById('drawerClose');
  if(!burger) return;
  function open(){ drawer.classList.add('is-open'); scrim.classList.add('is-on'); burger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  function shut(){ drawer.classList.remove('is-open'); scrim.classList.remove('is-on'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  burger.addEventListener('click', function(){ drawer.classList.contains('is-open') ? shut() : open(); });
  close.addEventListener('click', shut);
  scrim.addEventListener('click', shut);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') shut(); });

  drawer.querySelectorAll('button.dnav__row').forEach(function(b){
    b.addEventListener('click', function(){
      b.setAttribute('aria-expanded', b.getAttribute('aria-expanded')==='true' ? 'false' : 'true');
    });
  });
})();

/* ============================================================
   Router — one file, three views
   ============================================================ */
const SITE = 'https://pubrica.com';

/* Title, meta description and canonical path per route. The canonical paths are the
   real URLs these views should be served at; see the note on hash routing below. */
const ROUTES = {
  '/': {
    title: 'Research, Writing and Publication Support \u2014 Pubrica',
    desc:  'Medical writing, statistics, editing, peer review and publication support for researchers, universities and life-science teams. Since 2009.',
    path:  '/'
  },
  '/pricing': {
    title: 'Pricing \u2014 Pubrica',
    desc:  'Indicative prices with turnaround for manuscript writing, editing, statistical analysis and pre-submission review. Per-word bands, no hidden add-ons.',
    path:  '/pricing/'
  },
  '/how-it-works': {
    title: 'How It Works \u2014 Pubrica',
    desc:  'How a Pubrica project runs: scoping, subject-expert allocation, drafting, review and journal submission, with a date we commit to.',
    path:  '/how-it-works/'
  },
  '/therapeutics': {
    title: 'Therapeutic Areas \u2014 Pubrica',
    desc:  'Therapeutic-area expertise across oncology, cardiology, neurology, endocrinology, infectious disease, public health and medical devices.',
    path:  '/therapeutics/'
  },
  '/peer-review': {
    title: 'Pre-Submission Peer Review Service \u2014 Pubrica',
    desc:  'Reviewer comments graded critical, major and minor with a worked reporting checklist \u2014 the objection heard before an editor\'s reviewer makes it.',
    path:  '/services/publication-support/peer-review-pre-submission/'
  },
  '/plagiarism-check': {
    title: 'Plagiarism and AI Authorship Check \u2014 Pubrica',
    desc:  'iThenticate similarity screening and AI authorship detection read by a subject editor: every match classified, with a rewrite plan you can act on.',
    path:  '/services/publication-support/plagiarism-services/'
  },
  '/manuscript-formatting': {
    title: 'Journal Manuscript Formatting Service \u2014 Pubrica',
    desc:  'Formatting to your journal\'s instructions for authors: Vancouver, APA, AMA, Harvard and IEEE styles, figures, tables and submission-ready files.',
    path:  '/services/publication-support/journal-manuscript-formatting-services/'
  },
  '/video-abstract': {
    title: 'Video Abstract Service for Research \u2014 Pubrica',
    desc:  'Video abstracts for published research: script by a subject expert, figures rebuilt for screen, professional voiceover and captions in your style.',
    path:  '/services/publication-support/video-abstract/'
  },
  '/poster-preparation': {
    title: 'Scientific Poster Preparation Service \u2014 Pubrica',
    desc:  'Conference posters built from your manuscript by a domain editor: figures rebuilt at A0 board size and 300 dpi, readable from two metres away.',
    path:  '/services/publication-support/poster-preparation/'
  },
  '/artwork-preparation': {
    title: 'Scientific Figure and Artwork Preparation \u2014 Pubrica',
    desc:  'Publication-ready figures rebuilt to your journal\'s specification: 300\u2013600 dpi, CMYK or RGB, TIFF, EPS and PDF, with the source files returned.',
    path:  '/services/publication-support/art-work-preparation/'
  },
  '/response-to-reviewers': {
    title: 'Response to Reviewer Comments Service \u2014 Pubrica',
    desc:  'Point-by-point responses and rebuttal letters: every comment triaged concede, answer or decline, with each revision tracked to the manuscript.',
    path:  '/services/publication-support/responding-to-reviewers/'
  },
  '/journal-submission': {
    title: 'Journal Submission Service \u2014 Pubrica',
    desc:  'Portal submission through Editorial Manager, ScholarOne and eJournalPress, with a cover letter written for the editor and the status tracked.',
    path:  '/services/publication-support/journal-submission/'
  },
  '/editing-translation': {
    title: 'Editing and Translation Services | Pubrica',
    desc:  'Proofreading $0.025 to translation $0.12 a word, every rate inside a published band. ISO 17100, ISO 18587 and the reporting guideline your design requires.',
    path:  '/services/editing-and-translation/'
  },
  '/visual-accessibility-editing': {
    title: 'Visual & Accessibility Editing Services | Pubrica',
    desc:  'Figures, tables, layouts and PDFs edited to global accessibility standards \u2014 alt text, colour contrast, heading hierarchy and tagged PDFs.',
    path:  '/services/academic-editorial-services/visual-and-accessibility-editing-services/'
  },

  '/forensic-quality-audit': {
    title: 'Forensic & Quality Audit Services | Pubrica',
    desc:  'Data integrity, image forensics, plagiarism and authorship, statistical method and compliance against COPE, ICMJE, CONSORT, PRISMA and ARRIVE.',
    path:  '/services/academic-editorial-services/forensic-and-quality-audit-service/'
  },

  '/revisioning-localisation': {
    title: 'Revisioning & Localisation Services | Pubrica',
    desc:  'Manuscripts revised for clarity and logic, then localised for the linguistic, cultural and disciplinary context of the journal or region you are writing for.',
    path:  '/services/academic-editorial-services/revisioning-and-localisation-service/'
  },

  '/permission-metadata': {
    title: 'Permission & Metadata Services | Pubrica',
    desc:  'Permissions secured for third-party figures, tables and text, licences chosen, and metadata built for PubMed, Crossref, Scopus and DOAJ.',
    path:  '/services/academic-editorial-services/permission-and-metadata-services/'
  },

  '/development-editing': {
    title: 'Development Editing Services | Pubrica',
    desc:  'Developmental editing for manuscripts that are sound but not yet readable as an argument. Enhance clarity and improve your manuscript with expert development.',
    path:  '/services/academic-editorial-services/development-editing-service/'
  },

  '/accessibility-compliance': {
    title: 'Accessibility Compliance Services | Pubrica',
    desc:  'Research papers, theses, textbooks and curriculum documents brought into compliance with WCAG and Section 508.',
    path:  '/services/education-editorial-service/accessibility-compliance/'
  },

  '/learning-design': {
    title: 'Learning Design & Pedagogy Services | Pubrica',
    desc:  'Courses, modules and curricula designed around stated learning outcomes. Elevate educational impact. Subject expertise and learner needs are not the same.',
    path:  '/services/education-editorial-service/learning-design-and-pedagogy/'
  },

  '/ai-data-preparation': {
    title: 'AI & Data Preparation Services | Pubrica',
    desc:  'Raw research data cleaned, structured, annotated and documented into datasets a model can be trained on. Elevate research intelligence.',
    path:  '/services/education-editorial-service/ai-and-data-preparation-services/'
  },

  '/digital-production-qa': {
    title: 'Digital Production QA Services | Pubrica',
    desc:  'Independent QA on proofs, XML, metadata and final files \u2014 JATS validation, cross-format consistency, reference and link integrity.',
    path:  '/services/education-editorial-service/digital-production-qa-services/'
  },

  '/assessment-exam-review': {
    title: 'Assessment & Exam Review Services | Pubrica',
    desc:  'Exams, question papers and rubrics reviewed for clarity, outcome alignment, cognitive balance, marking consistency and bias.',
    path:  '/services/education-editorial-service/assessment-and-exam-review-services/'
  },

  '/health-economics': {
    title: 'Health Economics & Outcomes Research | Pubrica',
    desc:  'Cost-effectiveness and budget impact models, real-world evidence, patient-reported outcomes and HTA dossiers.',
    path:  '/services/data-analytics-machine-learning/health-economics-outcome-research/'
  },

  '/patient-journey-insights': {
    title: 'Patient Journey & Insights | Pubrica',
    desc:  'Real-world care pathways reconstructed from EHR, claims, wearables and patient-reported data.',
    path:  '/services/data-analytics-machine-learning/patient-journey-insights-machine-learning/'
  },

  '/predictive-analytics': {
    title: 'Predictive Analytics Services | Pubrica',
    desc:  'Regression, classification, time-series and survival models for research, clinical and operational questions.',
    path:  '/services/data-analytics-machine-learning/predictive-analytics/'
  },

  '/customer-segmentation': {
    title: 'Customer & Patient Segmentation | Pubrica',
    desc:  'Segmentation for healthcare, pharma, medical devices and publishing. Tailored insights for targeted research, marketing and publication strategy.',
    path:  '/services/data-analytics-machine-learning/customer-segmentation/'
  },

  '/algorithm-development': {
    title: 'Algorithm Development, Training & Optimisation | Pubrica',
    desc:  'Custom AI, machine learning, deep learning and optimisation algorithms for healthcare, life sciences and pharma.',
    path:  '/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/'
  },

  '/interpretation-visualisation': {
    title: 'Interpretation, Reporting & Visualisation | Pubrica',
    desc:  'Statistical output turned into interpretation a reader can follow, reports built to CONSORT, PRISMA, STROBE and TRIPOD.',
    path:  '/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation/'
  },

  '/graphical-abstract': {
    title: 'Graphical Abstract Service | Pubrica',
    desc:  'Journal-compliant graphical abstracts drawn by scientific illustrators. One image that carries the finding. Elsevier, Springer, Nature, IOPscience and ACS.',
    path:  '/services/research-impact/graphical-abstract/'
  },

  '/scientific-news-report': {
    title: 'Scientific News Report | Pubrica',
    desc:  'Your manuscript turned into a press release a science journalist can actually use. Your manuscript, turned into a story somebody would run.',
    path:  '/services/research-impact/scientific-news-report/'
  },

  '/simplified-abstract': {
    title: 'Simplified Abstract Services | Pubrica',
    desc:  'Your manuscript condensed into the abstract your target journal asks for. The 250 words that decide whether anybody reads the other 6,000.',
    path:  '/services/research-impact/simplified-abstract-services/'
  },

  '/medical-data-collection': {
    title: 'Medical Data Collection Services | Pubrica',
    desc:  'Primary and secondary medical data collection for trials, registries and real-world studies. Bad data cannot be rescued by good analysis.',
    path:  '/services/medical-data-collection/'
  },

  '/educational-content-development': {
    title: 'Educational Content Development | Pubrica',
    desc:  'Curriculum, e-learning modules, assessments and multimedia built by subject content specialists and instructional designers.',
    path:  '/services/educational-content-development/'
  },

  '/discovery-intelligence': {
    title: 'Discovery & Intelligence Services | Pubrica',
    desc:  'Compound and ingredient discovery, patent landscape, efficacy and safety profiling, claims substantiation and regulatory intelligence.',
    path:  '/services/research-services/product-development/'
  },

  '/clinical-trial-support': {
    title: 'Clinical Trial Support | Pubrica',
    desc:  'Protocol, IB, ICF, SAP and CSR authoring, independent analysis, registry disclosure and inspection-readiness review \u2014 built to ICH E6(R3), M11, E3 and.',
    path:  '/services/research-services/product-development/clinical-trial-support/'
  },

  '/clinical-evaluation-report': {
    title: 'Clinical Evaluation Report Writing | Pubrica',
    desc:  'Clinical evaluation plans and reports written to EU MDR Annex XIV and MEDDEV 2.7/1 Rev 4.',
    path:  '/services/medical-writing/regulatory-writing/clinical-evaluation-report/'
  },

  '/clinical-study-report': {
    title: 'Clinical Study Report Writing | Pubrica',
    desc:  'Full, abbreviated and synoptic clinical study reports to ICH E3, with patient narratives, integrated summaries and Module 2.5 and 2.7 content.',
    path:  '/services/medical-writing/regulatory-writing/clinical-study-report/'
  },

  '/patient-narratives': {
    title: 'Patient Safety Narrative Writing | Pubrica',
    desc:  'Patient safety narratives written to one template and reconciled against the safety database. Eighty narratives written by six people read like eighty.',
    path:  '/services/medical-writing/regulatory-writing/patient-narratives/'
  },

  '/investigators-brochure': {
    title: "Investigator's Brochure Writing | Pubrica",
    desc:  "Investigator's brochures written from the nonclinical and clinical data package to ICH E6(R3), with the annual update most sponsors discover is already overdue.",
    path:  '/services/medical-writing/regulatory-writing/investigators-brochure/'
  },

  '/informed-consent-form': {
    title: 'Informed Consent Form Writing | Pubrica',
    desc:  'Master and site-specific informed consent forms written in plain language at the reading level your ethics committee requires.',
    path:  '/services/medical-writing/regulatory-writing/informed-consent-form/'
  },

  '/clinical-study-protocol': {
    title: 'Clinical Study Protocol Writing | Pubrica',
    desc:  'Sponsor clinical study protocols and amendments written to ICH M11 structure. Almost everything expensive in a trial is decided in the protocol.',
    path:  '/services/medical-writing/regulatory-writing/clinical-study-protocol/'
  },

  '/statistical-analysis-plan': {
    title: 'Statistical Analysis Plan Writing | Pubrica',
    desc:  'Statistical analysis plans authored with the estimand framed under ICH E9(R1) before the database locks.',
    path:  '/services/research-services/statistical-analysis-plan/'
  },

  '/health-authority-response': {
    title: 'Health Authority Query Response Writing | Pubrica',
    desc:  'Responses to health authority questions and deficiency letters, written to the clock.',
    path:  '/services/medical-writing/regulatory-writing/health-authority-response/'
  },

  '/performance-evaluation-report': {
    title: 'Performance Evaluation Report Writing | Pubrica',
    desc:  'Performance evaluation plans and reports for in vitro diagnostics under IVDR Annex XIII. IVDR asks three separate questions and most first submissions answer.',
    path:  '/services/medical-writing/regulatory-writing/performance-evaluation-report/'
  },

  '/ctd-module-summaries': {
    title: 'CTD Module 2.5 and 2.7 Writing | Pubrica',
    desc:  'CTD Module 2.5 clinical overview and Module 2.7 clinical summary. Module 2.5 is an argument. Module 2.7 is the evidence it rests on. Reviewers read 2.5 first.',
    path:  '/services/medical-writing/regulatory-writing/ctd-module-summaries/'
  },

  '/risk-management-plan': {
    title: 'Risk Management Plan Writing | Pubrica',
    desc:  'EU risk management plans written to GVP Module V \u2014 safety specification, pharmacovigilance plan and risk minimisation measures.',
    path:  '/services/medical-writing/regulatory-writing/risk-management-plan/'
  },

  '/psur-dsur': {
    title: 'PSUR, PBRER and DSUR Writing | Pubrica',
    desc:  'Periodic benefit-risk evaluation reports and development safety update reports written to ICH E2C(R2) and E2F.',
    path:  '/services/medical-writing/regulatory-writing/psur-dsur/'
  },

  '/plain-language-summary': {
    title: 'Plain Language Summary Writing | Pubrica',
    desc:  'Lay summaries of clinical trial results under EU CTR Annex V, written for participants and the public.',
    path:  '/services/medical-writing/regulatory-writing/plain-language-summary/'
  },

  '/nonclinical-study-report': {
    title: 'Nonclinical Study Report Writing | Pubrica',
    desc:  'Nonclinical study reports and CTD Module 2.4 and 2.6 summaries.',
    path:  '/services/medical-writing/regulatory-writing/nonclinical-study-report/'
  },

  '/labelling-smpc': {
    title: 'SmPC, PIL and USPI Writing | Pubrica',
    desc:  'Summary of product characteristics, package leaflets, US prescribing information and company core data sheets.',
    path:  '/services/medical-writing/regulatory-writing/labelling-smpc/'
  },

  '/sop-writing': {
    title: 'SOP Writing Services | Pubrica',
    desc:  'Standard operating procedures written so people actually follow them \u2014 scoped to real workflow, GxP-aligned, with the training and revision path built in.',
    path:  '/services/medical-writing/regulatory-writing/sop-writing/'
  },

  '/technical-file-510k': {
    title: '510(k) and Technical Documentation Writing | Pubrica',
    desc:  '510(k) submission content and EU technical documentation \u2014 substantial equivalence argued against a named predicate, GSPR checklists.',
    path:  '/services/medical-writing/regulatory-writing/technical-file-510k/'
  },

  '/audio-abstract': {
    title: 'Audio Abstract Service | Pubrica',
    desc:  'Your paper as a short narrated audio summary \u2014 scripted, recorded, edited and delivered with a transcript, for journal audio supplements.',
    path:  '/services/research-impact/audio-abstract/'
  },

  '/infographic-abstract': {
    title: 'Infographic Abstract Service | Pubrica',
    desc:  'A single designed graphic that carries your study \u2014 finding, method and numbers \u2014 built for social, press, poster and slide use, in print and web formats.',
    path:  '/services/research-impact/infographic-abstract/'
  },

  '/slide-deck': {
    title: 'Slide Abstract and Slide Deck Service | Pubrica',
    desc:  'Single-slide abstracts and full conference decks built from your paper.',
    path:  '/services/research-impact/slide-deck/'
  },

  '/interactive-abstract': {
    title: 'Interactive Abstract Service | Pubrica',
    desc:  'A self-contained interactive web page built from your paper \u2014 explorable figures, a scroll-driven explanation and a static fallback.',
    path:  '/services/research-impact/interactive-abstract/'
  },

  '/research-data-service': {
    title: 'Research Data Service | Pubrica',
    desc:  'Data availability statements, repository deposit, de-identification, metadata and data dictionaries.',
    path:  '/services/publication-support/research-data-service/'
  },

  '/post-acceptance-support': {
    title: 'Post-Acceptance Support | Pubrica',
    desc:  'The work between acceptance and publication \u2014 proof correction, author queries, licence choice, funder deposit, metadata and corrections.',
    path:  '/services/publication-support/post-acceptance-support/'
  },

  '/vpat-accessibility-report': {
    title: 'VPAT and Accessibility Conformance Report | Pubrica',
    desc:  'Voluntary Product Accessibility Templates completed as defensible Accessibility Conformance Reports.',
    path:  '/services/education-editorial-service/vpat-accessibility-conformance-report/'
  },

  '/scientific-alt-text': {
    title: 'Scientific Alt Text Writing | Pubrica',
    desc:  'Alt text for Kaplan\u2013Meier curves, forest plots, flow diagrams and multi-panel figures. "Chart showing results" is not alt text. Automated alt text can.',
    path:  '/services/academic-editorial-services/scientific-alt-text/'
  },

  '/pdf-remediation': {
    title: 'PDF Remediation Services | Tagged PDF and PDF/UA | Pubrica',
    desc:  'PDFs remediated to PDF/UA and WCAG 2.2 \u2014 tagging, reading order, table headers, bookmarks, language and alternative text.',
    path:  '/services/education-editorial-service/pdf-remediation/'
  },

  '/epub-accessibility': {
    title: 'EPUB Accessibility Validation | Pubrica',
    desc:  'EPUB files validated against EPUB Accessibility 1.1 and WCAG 2.2. The accessibility metadata is the part everyone forgets, and it is the part a reader sees.',
    path:  '/services/education-editorial-service/epub-accessibility-validation/'
  },

  '/mathml-remediation': {
    title: 'MathML Remediation | Pubrica',
    desc:  'Equations rebuilt as MathML \u2014 read aloud correctly, searchable, resizable and reflowable \u2014 instead of pasted images with no alternative text.',
    path:  '/services/education-editorial-service/mathml-remediation/'
  },

  '/indexing': {
    title: 'Back-of-Book Indexing Services | Pubrica',
    desc:  'Back-of-book indexes built by people who read the book \u2014 concepts indexed rather than words counted, with cross-references.',
    path:  '/services/academic-editorial-services/indexing/'
  },

  '/reference-validation': {
    title: 'Reference Validation and Linking | Pubrica',
    desc:  'Every reference checked against the source record, DOIs resolved and linked, retracted and withdrawn citations flagged.',
    path:  '/services/academic-editorial-services/reference-validation/'
  },

  '/metadata-tagging': {
    title: 'Research Metadata Tagging | Pubrica',
    desc:  'Affiliation, contributor, funder and subject metadata applied properly \u2014 ROR identifiers, CRediT roles, ORCID and MeSH terms.',
    path:  '/services/academic-editorial-services/metadata-tagging/'
  },

  '/proof-stage-proofreading': {
    title: 'Proof-Stage Proofreading | Pubrica',
    desc:  'Reading the typeset proof against the copyedited manuscript \u2014 typographical errors, bad breaks, transposed panels.',
    path:  '/services/academic-editorial-services/proof-stage-proofreading/'
  },

  '/compliance-statement-checking': {
    title: 'Compliance Statement Checking | Pubrica',
    desc:  'Every submission checked for the statements it must carry \u2014 ethics approval, consent, conflicts of interest, funding, data availability.',
    path:  '/services/academic-editorial-services/compliance-statement-checking/'
  },

  '/editorial-office-services': {
    title: 'Editorial Office and Peer Review Management | Pubrica',
    desc:  'Peer review operations run in your own system \u2014 triage, reviewer identification and chasing, decision letter preparation and author correspondence.',
    path:  '/services/academic-editorial-services/editorial-office-services/'
  },

  '/research-integrity-cases': {
    title: 'Research Integrity Case Handling | Pubrica',
    desc:  'Integrity concerns investigated and documented to COPE process. Getting the category wrong means publishing a second notice about the first one.',
    path:  '/services/academic-editorial-services/research-integrity-cases/'
  },

  '/statistical-review': {
    title: 'Statistical Review Service | Pubrica',
    desc:  'A statistician reads the methods and the results \u2014 design, analysis, multiplicity, unit of analysis and reporting.',
    path:  '/services/academic-editorial-services/statistical-review/'
  },

  '/journal-indexing-applications': {
    title: 'Journal Indexing Applications | Pubrica',
    desc:  'Indexing applications prepared properly \u2014 the criteria assessed honestly first, the gaps closed. Most indexing applications fail on things the journal could.',
    path:  '/services/academic-editorial-services/journal-indexing-applications/'
  },

  '/publishing-workflow-advisory': {
    title: 'Publishing Workflow Advisory | Pubrica',
    desc:  'Advice on the workflow rather than the output \u2014 where accessibility defects and structure loss are introduced.',
    path:  '/services/education-editorial-service/publishing-workflow-advisory/'
  },

  '/standards-alignment': {
    title: 'Standards Alignment and Curriculum Mapping | Pubrica',
    desc:  'Content mapped to Common Core, NGSS, state and national standards. A correlation document is a sales document that a curriculum specialist will check.',
    path:  '/services/education-editorial-service/standards-alignment/'
  },

  '/psychometric-services': {
    title: 'Psychometric Services | Pubrica',
    desc:  'Item analysis, test blueprint design, standard setting and cutscores, equating and job task analysis \u2014 the statistical work behind a defensible assessment.',
    path:  '/services/education-editorial-service/psychometric-services/'
  },

  '/bias-fairness-review': {
    title: 'Bias and Fairness Review | Pubrica',
    desc:  'Assessment and learning content reviewed for bias \u2014 sensitivity review of items and materials.',
    path:  '/services/education-editorial-service/bias-fairness-review/'
  },

  '/scorm-conversion': {
    title: 'SCORM and xAPI Conversion | Pubrica',
    desc:  'Existing content packaged as SCORM 1.2, SCORM 2004 or xAPI \u2014 tested for launch, resume, completion and score pass-back against your platform before.',
    path:  '/services/education-editorial-service/scorm-xapi-conversion/'
  },

  '/subject-expert-sourcing': {
    title: 'Subject Matter Expert Sourcing | Pubrica',
    desc:  'Named subject matter experts sourced, credential-checked and briefed. Finding the expert is easy. Verifying them, briefing them properly and getting usable.',
    path:  '/services/education-editorial-service/subject-expert-sourcing/'
  },

  '/scientific-illustration': {
    title: 'Scientific Illustration | Pubrica',
    desc:  'Mechanism diagrams, anatomical and molecular figures, device and technique illustration. This is drawing, not reformatting.',
    path:  '/services/research-impact/scientific-illustration/'
  },

  '/journal-cover-art': {
    title: 'Journal Cover Art | Pubrica',
    desc:  'Cover images designed for journal cover submissions and invitations. A cover image is judged in about two seconds, next to twenty others.',
    path:  '/services/research-impact/journal-cover-art/'
  },

  '/video-byte': {
    title: 'Video Byte | One-Minute Research Videos for Social | Pubrica',
    desc:  'A sixty-second video of your finding \u2014 scripted, animated from your figures. Sixty seconds, one finding, no presenter. A full video abstract is a production.',
    path:  '/services/research-impact/video-byte/'
  },

  '/cover-letter': {
    title: 'Cover Letter Writing | Pubrica',
    desc:  'The letter an editor reads before your abstract \u2014 why this journal, what is new, and the declarations they need, in under a page.',
    path:  '/services/publication-support/cover-letter/'
  },

  '/resubmission-support': {
    title: 'Resubmission Support | Pubrica',
    desc:  'What to do after a rejection \u2014 why it was rejected, whether to appeal, transfer or resubmit elsewhere, and the manuscript reworked for the next journal.',
    path:  '/services/publication-support/resubmission-support/'
  },

  '/abstract-writing': {
    title: 'Abstract Writing and Editing | Pubrica',
    desc:  'Abstracts written or edited on their own \u2014 conference submissions. Sometimes you need an abstract and nothing else.',
    path:  '/services/publication-support/abstract-writing/'
  },

  '/latex-editing': {
    title: 'LaTeX Editing Service | Pubrica',
    desc:  'Manuscripts edited in LaTeX source \u2014 equations, macros, BibTeX and journal class files left working. Most editing services will take your LaTeX and hand back.',
    path:  '/services/editing-translation/latex-editing/'
  },

  '/ai-assisted-editing': {
    title: 'AI-Assisted Manuscript Editing | Pubrica',
    desc:  'For manuscripts drafted or heavily edited with AI \u2014 citations verified, overstated claims pulled back, homogenised prose restored.',
    path:  '/services/editing-translation/ai-assisted-manuscript-editing/'
  },

  '/manuscript-check': {
    title: 'Manuscript Check | Pubrica',
    desc:  'A fast pre-submission check \u2014 similarity report, AI screening, technical and format check against your target journal, and a readiness verdict.',
    path:  '/services/publication-support/manuscript-check/'
  },

  '/press-distribution': {
    title: 'Press Distribution Support | Pubrica',
    desc:  'Your release prepared for distribution and targeted at the journalists who cover your field. A release nobody sends is a document. Writing it is the part.',
    path:  '/services/research-impact/press-distribution/'
  },

  '/reporting-checklist-review': {
    title: 'Reporting Checklist Review | Pubrica',
    desc:  'Your manuscript checked item by item against the reporting guideline your study type triggers. Journals ask for the completed checklist and reviewers check.',
    path:  '/services/publication-support/reporting-checklist-review/'
  },

  '/eu-joint-clinical-assessment': {
    title: 'EU Joint Clinical Assessment Dossier | Pubrica',
    desc:  'JCA dossiers written to Regulation (EU) 2021/2282 \u2014 consolidated PICOs answered, indirect comparisons built where the trial has no head-to-head.',
    path:  '/services/market-access/eu-joint-clinical-assessment/'
  },

  '/hta-submission-dossier': {
    title: 'HTA Submission Dossier | Pubrica',
    desc:  'HTA dossiers built to the agency that will read them \u2014 NICE reference case, CDA-AMC reimbursement review, G-BA benefit dossier, HAS transparency dossier.',
    path:  '/services/market-access/hta-submission-dossier/'
  },

  '/global-value-dossier': {
    title: 'Global Value Dossier and AMCP Dossier | Pubrica',
    desc:  'Global value dossiers and AMCP Format 5.0 submissions \u2014 one maintained evidence source every affiliate and every payer submission draws from.',
    path:  '/services/market-access/global-value-dossier/'
  },

  '/cost-effectiveness-model': {
    title: 'Cost-Effectiveness Model | Pubrica',
    desc:  'Cost-utility and cost-effectiveness models built to ISPOR good practice and the target agency reference case, validated.',
    path:  '/services/market-access/cost-effectiveness-model/'
  },

  '/budget-impact-model': {
    title: 'Budget Impact Model | Pubrica',
    desc:  'Budget impact analyses built to ISPOR good practice \u2014 the payer perspective, a real population, realistic uptake.',
    path:  '/services/market-access/budget-impact-model/'
  },

  '/payer-evidence-review': {
    title: 'Payer Evidence Review | Pubrica',
    desc:  'Systematic reviews and indirect treatment comparisons built to HTA standards. An HTA body will try to reproduce your search.',
    path:  '/services/market-access/payer-evidence-review/'
  },

  '/market-access': {
    title: 'Market Access and HEOR Services | Pubrica',
    desc:  'Seven services for the payer audience \u2014 EU Joint Clinical Assessment, HTA dossiers, global value dossiers, economic and budget impact models.',
    path:  '/services/market-access/'
  },

  '/rapid-review': {
    title: 'Rapid and Targeted Literature Review | Pubrica',
    desc:  'Rapid and targeted reviews with every shortcut declared \u2014 systematic methods compressed to a decision deadline.',
    path:  '/services/research-services/rapid-review/'
  },

  '/scoping-review': {
    title: 'Scoping Review Services | Pubrica',
    desc:  'Scoping reviews mapping what evidence exists and where it stops \u2014 PRISMA-ScR reporting, JBI conduct, protocol registered, and charting rather than.',
    path:  '/services/research-services/scoping-review/'
  },

  '/living-systematic-review': {
    title: 'Living Systematic Review | Pubrica',
    desc:  'Living systematic reviews searched monthly and updated on a declared schedule, to Cochrane living review guidance.',
    path:  '/services/research-services/living-systematic-review/'
  },

  '/evidence-gap-map': {
    title: 'Evidence Gap Map and Evidence Mapping | Pubrica',
    desc:  'Evidence gap maps for funders and portfolio teams \u2014 interventions against outcomes, every cell filled or visibly empty.',
    path:  '/services/research-services/evidence-gap-map/'
  },

  '/state-of-the-art-review': {
    title: 'State of the Art Review for Medical Device CER | Pubrica',
    desc:  'State of the art reviews for clinical evaluation under EU MDR 2017/745 and MEDDEV 2.7/1 rev 4 \u2014 the benchmark a notified body assesses your device against.',
    path:  '/services/medical-writing/regulatory-writing/state-of-the-art-review/'
  },

  '/search-strategy-peer-review': {
    title: 'PRESS Peer Review of Search Strategies | Pubrica',
    desc:  'Search strategies peer reviewed against the PRESS 2015 guideline \u2014 six elements checked line by line, before the search runs or before the paper is.',
    path:  '/services/academic-editorial-services/search-strategy-peer-review/'
  },

  '/network-meta-analysis': {
    title: 'Network Meta-Analysis and Indirect Treatment | Pubrica',
    desc:  'Network meta-analysis, anchored and unanchored indirect comparison, MAIC and STC \u2014 built to NICE DSU methods with the assumptions tested rather than.',
    path:  '/services/research-services/network-meta-analysis/'
  },

  '/redcap-database-build': {
    title: 'REDCap Database Build and Study Setup | Pubrica',
    desc:  'REDCap projects built properly \u2014 data dictionary, branching logic, validation, randomisation, e-Consent and query workflow.',
    path:  '/services/research-services/redcap-database-build/'
  },

  '/data-management-plan': {
    title: 'Data Management and Sharing Plans | Pubrica',
    desc:  'Funder data management plans written to the format actually in force \u2014 the 2026 NIH DMS plan format, Horizon Europe DMP and Wellcome outputs management.',
    path:  '/services/research-services/data-management-plan/'
  },

  '/cdisc-sdtm-adam': {
    title: 'CDISC SDTM and ADaM Dataset Creation | Pubrica',
    desc:  'SDTM and ADaM datasets, Define-XML and reviewer guides built to the FDA Data Standards Catalog \u2014 validated, documented and traceable back to the raw data.',
    path:  '/services/research-services/cdisc-sdtm-adam/'
  },

  '/clinical-evaluation-plan': {
    title: 'Clinical Evaluation Plan (CEP) | Pubrica',
    desc:  'Clinical evaluation plans written to MDR Annex XIV Part A and MEDDEV 2.7/1 rev 4 \u2014 the document that decides what your CER is allowed to conclude.',
    path:  '/services/medical-writing/regulatory-writing/clinical-evaluation-plan/'
  },

  '/performance-evaluation-plan': {
    title: 'Performance Evaluation Plan (PEP) | Pubrica',
    desc:  'IVDR performance evaluation plans covering all three pillars \u2014 scientific validity, analytical performance and clinical performance.',
    path:  '/services/medical-writing/regulatory-writing/performance-evaluation-plan/'
  },

  '/scientific-validity-report': {
    title: 'Scientific Validity Report | IVDR First Pillar | Pubrica',
    desc:  'Scientific validity reports establishing the analyte\u2013condition association from literature, guidelines and consensus.',
    path:  '/services/medical-writing/regulatory-writing/scientific-validity-report/'
  },

  '/pmcf-plan-report': {
    title: 'PMCF Plan, Surveys and Evaluation Report | Pubrica',
    desc:  'Post-market clinical follow-up plans, surveys and evaluation reports to the MDCG 2020-7 and 2020-8 templates, built to close the gaps your CER actually names.',
    path:  '/services/medical-writing/regulatory-writing/pmcf-plan-and-report/'
  },

  '/post-market-surveillance': {
    title: 'PMS Plan, PMSR and Device PSUR | Pubrica',
    desc:  'Post-market surveillance plans, PMS reports and device PSURs to MDR Articles 83\u201386 \u2014 with the right document and the right frequency for your device.',
    path:  '/services/medical-writing/regulatory-writing/post-market-surveillance/'
  },

  '/sscp': {
    title: 'Summary of Safety and Clinical Performance (SSCP) | Pubrica',
    desc:  'SSCPs written to MDCG 2019-9 rev 1 for implantable and class III devices.',
    path:  '/services/medical-writing/regulatory-writing/summary-of-safety-and-clinical-performance/'
  },

  '/device-risk-management': {
    title: 'Device Risk Management File | ISO 14971:2019+A1 | Pubrica',
    desc:  'ISO 14971 risk management files \u2014 risk management plan, hazard analysis, risk control and the overall residual risk evaluation.',
    path:  '/services/medical-writing/regulatory-writing/device-risk-management-file/'
  },

  '/gspr-checklist': {
    title: 'GSPR Checklist and Technical Documentation | Pubrica',
    desc:  'GSPR checklists that cite real evidence line by line, and technical documentation structured to MDR Annex II so an assessor can find what they are looking.',
    path:  '/services/medical-writing/regulatory-writing/gspr-checklist-technical-documentation/'
  },

  '/publication-planning': {
    title: 'Publication Planning and Strategy | GPP 2022 | Pubrica',
    desc:  'Publication plans built to GPP 2022 \u2014 sequenced against data availability and congress calendars. A publication plan that only contains the results you liked.',
    path:  '/services/scientific-communication/publication-planning-and-strategy/'
  },

  '/scientific-platform': {
    title: 'Scientific Platform, Narrative and Lexicon | Pubrica',
    desc:  'Scientific platforms that say what the evidence supports and what it does not.',
    path:  '/services/scientific-communication/scientific-platform-narrative-lexicon/'
  },

  '/congress-content': {
    title: 'Congress and Symposium Content | Pubrica',
    desc:  'Congress abstracts, posters, oral presentations and satellite symposium content. Congress deadlines do not move, and every society has its own word count.',
    path:  '/services/scientific-communication/congress-and-symposium-content/'
  },

  '/publication-extenders': {
    title: 'Publication Extenders and Modular Scientific | Pubrica',
    desc:  'Plain language summaries, infographics, video and audio abstracts, podcasts and modular content \u2014 planned with the paper rather than commissioned after it.',
    path:  '/services/scientific-communication/publication-extenders-and-modular-content/'
  },

  '/publication-governance': {
    title: 'Publication SOPs and Steering Committee Support | Pubrica',
    desc:  'Publication SOPs, policies and steering committee facilitation \u2014 the governance GPP 2022 assumes, written so it can actually be followed and audited.',
    path:  '/services/scientific-communication/publication-governance-sop-and-steering-committee/'
  },

  '/medical-affairs-strategy': {
    title: 'Medical Affairs Strategy and Tactical Planning | Pubrica',
    desc:  'Medical affairs strategy and tactical plans built on evidence gaps and scientific objectives.',
    path:  '/services/scientific-communication/medical-affairs-strategy/'
  },

  '/msl-field-medical': {
    title: 'MSL and Field Medical Materials and Training | Pubrica',
    desc:  'Field medical decks, scientific response resources and MSL training built from the scientific platform.',
    path:  '/services/scientific-communication/msl-and-field-medical-materials/'
  },

  '/advisory-boards': {
    title: 'Advisory Board Materials and Facilitation | Pubrica',
    desc:  'Advisory boards designed to gather advice rather than deliver messages \u2014 agenda, pre-read, facilitation and an output report, inside the compliance.',
    path:  '/services/scientific-communication/advisory-board-materials-and-facilitation/'
  },

  '/medical-information': {
    title: 'Standard Response Documents and Medical | Pubrica',
    desc:  'SRDs and medical information responses written for unsolicited enquiries \u2014 balanced, referenced, non-promotional, and built as a maintained library.',
    path:  '/services/scientific-communication/medical-information-and-standard-response-documents/'
  },

  '/kol-mapping': {
    title: 'KOL and DOL Mapping and Insight Reporting | Pubrica',
    desc:  'Expert mapping built on published evidence of influence, not on prescribing data.',
    path:  '/services/scientific-communication/kol-mapping-and-insight-reporting/'
  },

  '/for-researchers': {
    title: 'For Academic Researchers | Pubrica',
    desc:  'For researchers and lab groups \u2014 editing by subject specialists, statistics that hold up at review. Most desk rejections are not about English.',
    path:  '/for/researchers/'
  },

  '/for-students': {
    title: 'For Students and Early Career Researchers | Pubrica',
    desc:  'Thesis and dissertation editing inside the IPEd boundary, statistics explained rather than just run, and your first submission handled end to end.',
    path:  '/for/students/'
  },

  '/for-physicians': {
    title: 'For Physicians and Clinicians | Pubrica',
    desc:  'Case reports, clinical literature reviews, original research and CME content. The limiting factor is not the writing. It is that you have a clinic tomorrow.',
    path:  '/for/physicians/'
  },

  '/for-universities': {
    title: 'For Universities and Research Institutions | Pubrica',
    desc:  'Departmental editorial capacity, research training, statistical support and publication throughput.',
    path:  '/for/universities/'
  },

  '/for-industry': {
    title: 'For Pharma and Biotech | Pubrica',
    desc:  'Regulatory writing, medical communications, market access and biometrics. Most of what goes wrong in a submission has nothing to do with the molecule.',
    path:  '/for/industry/'
  },

  '/for-device': {
    title: 'For Medical Device and IVD Manufacturers | Pubrica',
    desc:  'The technical documentation a notified body assesses \u2014 clinical and performance evaluation, PMCF, PMS and PSUR, SSCP, risk management file and GSPR.',
    path:  '/for/medical-device/'
  },

  '/for-publishers': {
    title: 'For Journals, Publishers and Societies | Pubrica',
    desc:  'Editorial office operations, copy editing at volume, accessibility remediation, production QA and indexing applications.',
    path:  '/for/publishers/'
  },

  '/for-education': {
    title: 'For Education and Assessment Providers | Pubrica',
    desc:  'Curriculum and standards mapping, item writing and review, psychometrics, bias and fairness review.',
    path:  '/for/education/'
  },

  '/who-we-help': {
    title: 'Who We Help | Eight Routes In | Pubrica',
    desc:  'Researchers, students, clinicians, institutions, pharma, device manufacturers, publishers and education providers.',
    path:  '/for/'
  },


  '/our-editors': {
    title: 'Our Editors | Pubrica',
    desc:  'Who handles your manuscript and how they are assigned \u2014 150+ subject experts across medicine, life sciences, biostatistics and regulatory writing.',
    path:  '/about-us/our-editors/'
  },

  '/scientific-editor-profile': {
    title: 'Scientific Editor Profile | Pubrica',
    desc:  'What is in a Pubrica editor profile, what each line means, and how to tell whether the editor assigned to your manuscript is the right one.',
    path:  '/scientific-editor-profile/'
  },

  '/editor-speak': {
    title: 'Editor Speak | What Our Editors Say About the Work | Pubrica',
    desc:  'The working standards Pubrica editors hold to \u2014 what gets changed, what only gets flagged, and the sentences that come up in almost every review.',
    path:  '/editor-speak/'
  },

  '/therapeutic-expertise': {
    title: 'Therapeutic Expertise | Pubrica',
    desc:  'The therapeutic and life-science areas Pubrica covers, the reporting guideline each one triggers, and what happens when your field is not on the list.',
    path:  '/therapeutic-expertise/'
  },

  '/compliance': {
    title: 'Compliance | Pubrica',
    desc:  'The ISO 9001:2015 certificate Pubrica holds, the publication ethics codes we follow. Pubrica works to the publication, regulatory and accessibility standards.',
    path:  '/compliance/'
  },

  '/careers': {
    title: 'Careers at Pubrica | Pubrica',
    desc:  'What we look for in an editor, medical writer or statistician, how the assessment works, and what the work is actually like day to day.',
    path:  '/careers/'
  },

  '/contact': {
    title: 'Contact Pubrica | India and United States | Pubrica',
    desc:  'Reach Pubrica by email or phone in India and the United States. What happens after you get in touch is a scoping read, not a sales call.',
    path:  '/contact-us/'
  },


  '/about-us': {
    title: 'About Pubrica | Pubrica',
    desc:  'Pubrica is a research, writing and publication support company founded in 2009 \u2014 150+ subject experts, ISO 9001:2015 certified, working to COPE and ICMJE.',
    path:  '/about-us/'
  },









  '/research-services': {
    title: 'Research Services | Pubrica',
    desc:  'Systematic and scoping reviews, meta-analysis and network meta-analysis, study design, statistical analysis plans, biostatistics.',
    path:  '/services/research-services/'
  },

  '/publication-support': {
    title: 'Publication Support | Pubrica',
    desc:  'Journal selection, formatting, similarity and AI authorship screening, pre-submission peer review, cover letters, submission.',
    path:  '/services/publication-support/'
  },

  '/research-impact': {
    title: 'Research Impact | Pubrica',
    desc:  'Graphical and infographic abstracts, scientific illustration, journal cover art, video and audio abstracts, lay summaries, slide decks and press distribution.',
    path:  '/services/research-impact/'
  },

  '/data-analytics-ai': {
    title: 'Data, Analytics and AI | Models That Hold Up | Pubrica',
    desc:  'Predictive modelling, algorithm development, segmentation, patient journey analytics, interpretation and visualisation.',
    path:  '/services/data-analytics-machine-learning/'
  },

  '/medical-device-ivd': {
    title: 'Medical Device & IVD Writing | MDR and IVDR Files | Pubrica',
    desc:  'Clinical and performance evaluation plans and reports, PMCF, PMS and device PSUR, SSCP, risk management file.',
    path:  '/services/medical-device-and-ivd/'
  },

  '/editorial-journal-services': {
    title: 'Editorial & Journal Services | Pubrica',
    desc:  'Editorial office support, copy editing, proof-stage proofreading, indexing, reference and metadata validation, integrity cases.',
    path:  '/services/academic-editorial-services/'
  },

  '/accessibility-services': {
    title: 'Accessibility Services | Pubrica',
    desc:  'WCAG 2.2 and EN 301 549 audits, VPAT and accessibility conformance reports, PDF and EPUB remediation, MathML, scientific alt text and digital production QA.',
    path:  '/services/accessibility-compliance/'
  },

  '/education-assessment': {
    title: 'Education & Assessment Services | Pubrica',
    desc:  'Standards alignment, item writing and review, psychometric services, bias and fairness review, learning design.',
    path:  '/services/education-editorial-service/'
  },

  '/publishing-your-research': {
    title: 'Publishing in Journals | Pubrica',
    desc:  'Study design and statistics, writing and editing, journal selection, submission and reviewer replies \u2014 everything between an idea and a published paper.',
    path:  '/services/publishing-your-research/'
  },

  '/industry-evidence': {
    title: 'Submitting to Regulators | Pubrica',
    desc:  'Study reports, protocols, device and IVD files, payer dossiers and medical communications \u2014 written to the version of the rules in force today.',
    path:  '/services/industry-evidence-and-submissions/'
  },

  '/publishers-and-educators': {
    title: 'Editorial Support for Publishers | Pubrica',
    desc:  'Peer review administration, copy editing, specialist checks, accessibility reports and exam work \u2014 done inside your own system.',
    path:  '/services/for-publishers-and-educators/'
  },

  '/across-everything': {
    title: 'Data and Artificial Intelligence | Pubrica',
    desc:  'Statistics, bioinformatics, predictive models and real-world data analysis, with the code and working files handed over so your team can run it again.',
    path:  '/services/across-everything/'
  },



  '/partnerships': {
    title: 'Partnerships | Pubrica',
    desc:  'The five publishing and editorial bodies whose guidance shapes how Pubrica handles your work, the three kinds of organisation we partner with.',
    path:  '/strategic-partnerships-memberships/'
  },

  '/global-partner-program': {
    title: 'Global Partner Programme | Pubrica',
    desc:  'Pubrica\u2019s partner programme for universities, publishers, journals and research groups: rates agreed in advance, the same subject-matter experts each time.',
    path:  '/global-partner-program/'
  },

  '/umbrella-review': {
    title: 'Umbrella Review Services | Pubrica',
    desc:  'Umbrella reviews and overviews of reviews by Pubrica: overlap measured as corrected covered area, included reviews appraised with AMSTAR 2 and ROBIS.',
    path:  '/services/research-services/umbrella-review/'
  },

  '/copy-editing': {
    title: 'Copy Editing Services \u2014 Named and Priced \u2014 Pubrica',
    desc:  'Academic and scientific copyediting at $0.035 a word: grammar, usage, '
           + 'consistency, cross-references and a style sheet you keep.',
    path:  '/services/academic-editorial-services/copy-editing-services/'
  },

  '/proofreading': {
    title: 'Proofreading Services | Pubrica',
    desc:  'Academic and scientific proofreading at $0.025 a word, inside the EFA published band. Precision proofreading for researchers and academics \u2014 English.',
    path:  '/services/editing-and-translation/proofreading/'
  },
  '/book-editing': {
    title: 'Book Editing Services | Pubrica',
    desc:  'Scholarly book editing with a personalised list of 3\u20135 publishers, a proposal per press, indexing and permissions. $0.021 a word at 80,000 words.',
    path:  '/services/editing-and-translation/book-editing/'
  },
  '/manuscript-editing': {
    title: 'Manuscript Editing Services | Pubrica',
    desc:  'Copyediting plus formatting to one named journal \u2014 its own deviations, the word limit, the figures and the submission checklist. From $500.',
    path:  '/services/editing-and-translation/manuscript-editing/'
  },
  '/scientific-editing': {
    title: 'Scientific Editing Services | Pubrica',
    desc:  'Manuscript editing read against the reporting guideline your design requires, at its current version. Three editors. From $0.035 a word. Free guideline check.',
    path:  '/services/editing-and-translation/scientific-editing/'
  },
  '/thesis-editing': {
    title: 'Thesis Editing & Proofreading | Pubrica',
    desc:  'Thesis copyediting and proofreading bounded by the IPEd guidelines, July 2025. Structural issues noted, never rewritten.',
    path:  '/services/editing-and-translation/thesis-editing/'
  },
  '/post-editing': {
    title: 'Post-Editing Services | Pubrica',
    desc:  'Human post-editing of machine and AI translation to ISO 18587. Full post-editing $0.06 a word, light $0.035. Free provenance triage before you buy.',
    path:  '/services/editing-and-translation/post-editing/'
  },
  '/translation-with-editing': {
    title: 'Translation with Editing | Pubrica',
    desc:  'Research translation with independent revision by a second linguist, built to the ISO 17100 structure. $0.12 a word, from $240. 500 words translated free.',
    path:  '/services/editing-and-translation/translation-with-editing/'
  },
  '/scientific-communication': {
    title: 'Scientific Medical Communication \u2014 Pubrica',
    desc:  'Six kinds of medical output, six different rulebooks. The map between them \u2014 ICMJE and COPE for papers, ICH and MDR for submissions.',
    path:  '/services/scientific-communication/'
  },
  '/medico-legal': {
    title: 'Medico-Legal Support Services \u2014 Pubrica',
    desc:  'Medical record review, timed clinical chronology, breach and causation analysis and report drafting \u2014 against the standard of the governing jurisdiction.',
    path:  '/services/medico-legal-support-services/'
  },
  '/marketing-communication': {
    title: 'Marketing Communication Content Development \u2014 Pubrica',
    desc:  'Healthcare and life science marketing content written to the code that governs each market \u2014 ABPI 2024, EFPIA, FDA OPDP, PAAB, TGA.',
    path:  '/services/marketing-communication-content-development-service/'
  },
  '/thought-leadership': {
    title: 'Thought Leadership Content and Editorial Design \u2014 Pubrica',
    desc:  'Executive reports, white papers, bylined articles and editorial design for healthcare and life sciences \u2014 with the framework that actually governs each.',
    path:  '/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/'
  },
  '/cme-content': {
    title: 'CME Content Development Services \u2014 Pubrica',
    desc:  'Needs assessments, modules, assessment items and Standards evidence for accredited providers \u2014 written to the five ACCME Standards and EACCME 3.0.',
    path:  '/services/continuing-medical-education-cme-content-development/'
  },
  '/editorial-quality-support': {
    title: 'Editorial and Quality Support Service \u2014 Pubrica',
    desc:  'Independent editing and QC of documents written elsewhere \u2014 the level named before the quote, in the EFA, Chicago and Editors Canada vocabularies.',
    path:  '/services/medical-writing/editorial-quality-support-service/'
  },
  '/scientific-writing': {
    title: 'Scientific and Academic Writing Services \u2014 Pubrica',
    desc:  'Academic manuscripts, reviews, theses and dissertations written and edited to the reporting guideline that governs the design \u2014 CONSORT 2025.',
    path:  '/services/research-services/scientific-writing/'
  },
  '/regulatory-writing': {
    title: 'Regulatory Writing Services \u2014 Pubrica',
    desc:  'Clinical, safety, device and lifecycle regulatory documents written to the instrument that governs each \u2014 ICH E6(R3), M4(R4), E2C(R2), E2F.',
    path:  '/services/medical-writing/regulatory-writing/'
  },
  '/physician-writing-services': {
    title: 'Physician Writing Services \u2014 Pubrica',
    desc:  'Nine research, publication and communication services for clinicians, each with its price and scope cap published.',
    path:  '/services/physician-writing-services/'
  },
  '/patient-education-content': {
    title: 'Patient Education Content Service \u2014 Pubrica',
    desc:  'Patient leaflets, discharge instructions and participant information written to a stated reading grade and measured with SMOG and Flesch\u2013Kincaid.',
    path:  '/services/patient-education-content/'
  },
  '/physician-training': {
    title: 'Physician Training Content Development \u2014 Pubrica',
    desc:  'Clinical education content written for an accredited provider to certify: objectives first, assessment blueprinted, guidelines cited by version.',
    path:  '/services/physician-writing-services/physician-training/'
  },
  '/literature-search-and-citation': {
    title: 'Literature Search and Citation Service \u2014 Pubrica',
    desc:  'Searches built in each database\u2019s own vocabulary, tested against studies you already have, and reported with date.',
    path:  '/services/physician-writing-services/literature-search-and-citation/'
  },
  '/customized-writing': {
    title: 'Customized Medical Writing for Physicians \u2014 Pubrica',
    desc:  'Bespoke writing for clinicians across every register \u2014 reports, CME content, talks, rebuttals.',
    path:  '/services/physician-writing-services/customized-writing/'
  },
  '/research-proposal': {
    title: 'Clinical Research Protocol and Proposal Writing \u2014 Pubrica',
    desc:  'Clinical research protocols to SPIRIT 2025 and ICH E6(R3), with the whole ethics submission set assembled around them \u2014 information sheet, consent.',
    path:  '/services/physician-writing-services/research-proposal/'
  },
  '/clinical-literature-review': {
    title: 'Clinical Literature Review Service \u2014 Pubrica',
    desc:  'Systematic, rapid, scoping and regulatory literature reviews: protocol registered before screening, search reported so it can be re-run.',
    path:  '/services/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/'
  },
  '/physician-manuscripts': {
    title: 'Physician Manuscript Writing Service \u2014 Pubrica',
    desc:  'Manuscript writing for clinicians: the article type settled from your data, written to CONSORT 2025, STROBE, STARD, PRISMA or CARE as the design requires.',
    path:  '/services/physician-writing-services/physician-manuscripts/'
  },
  '/case-report': {
    title: 'Case Report Writing Service \u2014 CARE and SCARE \u2014 Pubrica',
    desc:  'Medical case report writing for clinicians: structured to CARE, surgical cases to SCARE 2023, the consent handled before drafting.',
    path:  '/services/physician-writing-services/case-report/'
  },
  '/original-research-article': {
    title: 'Original Research Article Writing Service \u2014 Pubrica',
    desc:  'Original research articles written from your data to the reporting guideline your study needs, with 365 days of revision support.',
    path:  '/services/physician-writing-services/original-research-article/'
  },
  '/bioinformatics': {
    title: 'Bioinformatics and NGS Data Analysis \u2014 Pubrica',
    desc:  'NGS analysis with the reference build, tool versions and code recorded: RNA-seq, single-cell, variant calling, proteomics. From $100 a sample.',
    path:  '/services/bioinformatics/'
  },
  '/medical-writing': {
    title: 'Medical and Regulatory Writing Services \u2014 Pubrica',
    desc:  'Regulatory, device, clinical and academic writing: CERs to MDR Annex XIV, CSRs to ICH E3, manuscripts to CONSORT. CER and CEP template pack \u00a3700.',
    path:  '/services/research-services/medical-writing/'
  },
  '/grant-writing': {
    title: 'Grant Proposal Writing Services \u2014 NIH, ERC \u2014 Pubrica',
    desc:  'Proposals written and reviewed against the funder\'s own rubric \u2014 NIH, NSF, Horizon Europe, ERC, Wellcome, UKRI, ICMR. Eligibility checked first.',
    path:  '/services/research-services/grant-writing/'
  },
  '/experimental-design': {
    title: 'Experimental Design Services \u2014 Pubrica',
    desc:  'The right design chosen from your constraints, with the sample size justified in writing before the first participant. From $420, in 5\u20137 days.',
    path:  '/services/research-services/experimental-design/'
  },
  '/biostatistics': {
    title: 'Biostatistics and Statistical Programming \u2014 Pubrica',
    desc:  'Sample size, analysis plans, CDISC SDTM and ADaM, SAS and R programming a reviewer can re-run. Verification $600, analysis $1,235, or $150 an hour.',
    path:  '/services/research-services/biostatistics-and-statistical-programming-services/'
  },
  '/literature-review': {
    title: 'Literature Review and Gap Analysis \u2014 Pubrica',
    desc:  'Reproducible searches across PubMed, Embase, Scopus and Web of Science, with the gap stated as a count rather than \u201cmore research is needed\u201d.',
    path:  '/services/research-services/literature-review-and-gap/'
  },
  '/meta-analysis': {
    title: 'Meta-Analysis Services for Research \u2014 Pubrica',
    desc:  'Effect sizes recomputed from source, pooling in R, Stata or RevMan, forest and funnel plots, GRADE certainty. From $480, heterogeneity reported.',
    path:  '/services/research-services/meta-analysis/'
  },
  '/systematic-review': {
    title: 'Systematic Review Writing and Rewriting Services \u2014 Pubrica',
    desc:  'Protocol and PROSPERO registration, reproducible searches, dual screening, risk of bias and PRISMA 2020 reporting.',
    path:  '/services/research-services/systematic-review/'
  },
  '/ja': {
    title: '\u7814\u7a76\u30fb\u8ad6\u6587\u57f7\u7b46\u30b5\u30dd\u30fc\u30c8\u30b5\u30fc\u30d3\u30b9 \u2014 Pubrica',
    desc:  '\u30b7\u30b9\u30c6\u30de\u30c6\u30a3\u30c3\u30af\u30ec\u30d3\u30e5\u30fc\u3001\u30e1\u30bf\u30a2\u30ca\u30ea\u30b7\u30b9\u3001\u751f\u7269\u7d71\u8a08\u3001\u30d0\u30a4\u30aa\u30a4\u30f3\u30d5\u30a9\u30de\u30c6\u30a3\u30af\u30b9\u3001\u30e1\u30c7\u30a3\u30ab\u30eb\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3001\u7814\u7a76\u8cbb\u7533\u8acb\u66f8\u306e\u4f5c\u6210\u652f\u63f4\u30022009\u5e74\u3088\u308a\u3002',
    path:  '/ja/',
    lang:  'ja'
  },
  '/ja-legal': {
    title: '\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u793a \u2014 Pubrica',
    desc:  '\u65e5\u672c\u306e\u304a\u5ba2\u69d8\u306b\u5411\u3051\u305f\u53d6\u5f15\u6761\u4ef6\u306e\u8868\u793a\u3002\u4e8b\u696d\u8005\u60c5\u5831\u3001\u8ca9\u58f2\u4fa1\u683c\u3001\u652f\u6255\u65b9\u6cd5\u3001\u5f79\u52d9\u306e\u63d0\u4f9b\u6642\u671f\u3001\u30ad\u30e3\u30f3\u30bb\u30eb\u3068\u8fd4\u91d1\u306b\u3064\u3044\u3066\u3002',
    path:  '/ja/tokushoho/',
    lang:  'ja'
  },
  '/zh': {
    title: '\u79d1\u7814\u4e0e\u533b\u5b66\u5199\u4f5c\u652f\u6301\u670d\u52a1 \u2014 Pubrica',
    desc:  '\u7cfb\u7edf\u8bc4\u4ef7\u3001Meta\u5206\u6790\u3001\u751f\u7269\u7edf\u8ba1\u3001\u751f\u7269\u4fe1\u606f\u5b66\u3001\u533b\u5b66\u5199\u4f5c\u4e0e\u57fa\u91d1\u7533\u8bf7\u652f\u6301\u3002\u6211\u4eec\u4e0d\u63d0\u4f9b\u4ee3\u5199\u670d\u52a1\uff0c\u4f5c\u8005\u59cb\u7ec8\u662f\u60a8\u3002\u81ea2009\u5e74\u8d77\u670d\u52a1\u5168\u7403\u7814\u7a76\u8005\u3002',
    path:  '/zh/',
    lang:  'zh-Hans'
  },
  '/nih-public-access': {
    title: 'NIH Public Access Policy 2025: What Changed \u2014 Pubrica',
    desc:  'The twelve-month embargo is gone: since 1 July 2025 the accepted manuscript goes to PubMed Central on acceptance.',
    path:  '/insights/nih-public-access-policy-2025/'
  },
  '/horizon-europe-apc': {
    title: 'Horizon Europe Will Not Pay a Hybrid Journal APC \u2014 Pubrica',
    desc:  'Article processing charges are reimbursable only in fully open-access journals. How to comply for nothing, and the statement you need at submission.',
    path:  '/insights/horizon-europe-article-processing-charges/'
  },
  '/japan-open-access': {
    title: 'Japan\u2019s Immediate Open Access Rule from FY2025 \u2014 Pubrica',
    desc:  'KAKENHI, JST and AMED now require immediate open access with no embargo, reported annually with the DOI. Three routes, two of them free.',
    path:  '/insights/japan-immediate-open-access/'
  },
  '/academy': {
    title: 'Pubrica Academy \u2014 Free Research Writing Guidance',
    desc:  'Free guidance on writing a paper, appraising one, interpreting an analysis and satisfying journal, university and funder rules.',
    path:  '/academy/'
  },
  '/insights': {
    title: 'Pubrica Insights \u2014 What Changed, and What We Learned',
    desc:  'What we did and what changed: real deliverables with the working shown, funder, university and publisher rule changes.',
    path:  '/insights/'
  },
  '/industries': {
    title: 'Industries We Serve \u2014 Pubrica',
    desc:  'Twelve regulated sectors and the standard each is judged against: ICH for medicines, MDR and IVDR for devices, CHEERS for payers.',
    path:  '/industries/'
  },
  '/industries-pharmaceutical': {
    title: 'Pharmaceutical Medical and Regulatory Writing \u2014 Pubrica',
    desc:  'Protocols, statistical analysis plans, ICH E3 study reports, CTD Modules 2.4 to 2.7, health-authority responses and publications, held by one named lead.',
    path:  '/industries/pharmaceutical/'
  },
  '/subject-matter-experts': {
    title: 'Subject Matter Experts \u2014 69 Research Disciplines \u2014 Pubrica',
    desc:  'Work assigned by subject, not availability, across 69 disciplines from cardiology to nanotechnology.',
    path:  '/subject-matter-experts/'
  },
  '/industries-biologics': {
    title: 'Biologics and Biosimilars Regulatory Writing \u2014 Pubrica',
    desc:  'Comparability and immunogenicity reporting, Module 2 overviews and biosimilar applications written to ICH Q5E and the EMA and FDA biosimilar guidance.',
    path:  '/industries/biologics/'
  },
  '/industries-generics': {
    title: 'Generic and Abridged Dossier Writing \u2014 Pubrica',
    desc:  'Bioequivalence reports, ANDA and abridged dossiers, literature-based submissions with reproducible searches, and labelling tracked to the reference product.',
    path:  '/industries/generics/'
  },
  '/industries-medical-device': {
    title: 'Medical Device Clinical Evaluation \u2014 Pubrica',
    desc:  'CEP, CER, state of the art review, GSPR checklist, PMCF and SSCP under EU MDR, plus 510(k) technical documentation for the US route.',
    path:  '/industries/medical-device/'
  },
  '/industries-life-sciences': {
    title: 'Life Sciences and Biotech Writing \u2014 Pubrica',
    desc:  'Manuscripts, grants, preclinical reports and omics analysis delivered with the code, reported to ARRIVE 2.0, STROBE or TRIPOD+AI as the design requires.',
    path:  '/industries/life-sciences/'
  },
  '/industries-diagnostics': {
    title: 'IVD Performance Evaluation and Diagnostic Accuracy \u2014 Pubrica',
    desc:  'Performance evaluation plans and reports under IVDR, scientific validity reports, STARD accuracy studies and TRIPOD+AI model reporting.',
    path:  '/industries/diagnostics/'
  },
  '/industries-cro': {
    title: 'CRO Medical Writing and Programming \u2014 Pubrica',
    desc:  'Overflow capacity under your sponsor\u2019s quality system: study reports, patient narratives, CDISC SDTM and ADaM.',
    path:  '/industries/cro/'
  },
  '/industries-engineering': {
    title: 'Engineering and Health Technology Writing \u2014 Pubrica',
    desc:  'Algorithm validation reporting, TRIPOD+AI model reporting, technical papers and health technology evidence written for the reader who decides.',
    path:  '/industries/engineering/'
  },
  '/industries-healthcare-providers': {
    title: 'Research Support for Hospitals \u2014 Pubrica',
    desc:  'Case reports, registry and outcomes analysis, service evaluation and manuscripts, assigned by specialty and built around clinical sessions.',
    path:  '/industries/healthcare-providers/'
  },
  '/industries-public-health-agencies': {
    title: 'Evidence Synthesis for Public Health \u2014 Pubrica',
    desc:  'Systematic, rapid and living reviews, policy evaluation and plain-language summaries built to PRISMA 2020 and GRADE, with the method published.',
    path:  '/industries/public-health-agencies/'
  },
  '/industries-publishing': {
    title: 'Editorial and Peer Review for Publishers \u2014 Pubrica',
    desc:  'Editorial office, statistical review, COPE-aligned integrity casework, copy editing, metadata and accessibility remediation at portfolio volume.',
    path:  '/industries/publishing/'
  },
  '/industries-nutraceuticals': {
    title: 'Health Claim Substantiation and Novel Food \u2014 Pubrica',
    desc:  'Article 13.5 and 14 health claim dossiers, novel food applications and substantiation files built to EFSA guidance under food law, not medicines law.',
    path:  '/industries/nutraceuticals/'
  },
  '/subject-cancer-research': {
    title: 'Cancer research \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Trials, real-world outcomes and translational work, where the endpoint chosen usually decides what can be claimed and how long the claim.',
    path:  '/subject-matter-experts/cancer-research/'
  },
  '/subject-cardiology': {
    title: 'Cardiology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Interventional, preventive and heart failure work, with a heavy device overlap and outcome trials that run for years before they say.',
    path:  '/subject-matter-experts/cardiology/'
  },
  '/subject-cardiovascular-biology': {
    title: 'Cardiovascular biology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Mechanism work underneath the clinical field: vascular biology, cardiac remodelling, and the models that stand in for human.',
    path:  '/subject-matter-experts/cardiovascular-biology/'
  },
  '/subject-dermatology': {
    title: 'Dermatology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Topical and systemic therapy, lesion scoring and the photographic evidence standards that go with visible. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/dermatology/'
  },
  '/subject-diabetology': {
    title: 'Diabetology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Metabolic cohorts, glycaemic endpoints and the long argument about which measure actually predicts. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/diabetology/'
  },
  '/subject-gynecology': {
    title: 'Gynaecology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Obstetric and gynaecological trials, reproductive outcomes and registry work, where population definition carries most of the.',
    path:  '/subject-matter-experts/gynecology/'
  },
  '/subject-neurology': {
    title: 'Neurology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Imaging endpoints, disability scales and longitudinal cohorts, where the measure chosen decides what can be. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/neurology/'
  },
  '/subject-psychiatry': {
    title: 'Psychiatry \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Rating-scale work, blinding that is genuinely difficult, and outcomes that are reported by the person being. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/psychiatry/'
  },
  '/subject-psychology': {
    title: 'Psychology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Experimental and applied work where the effect is behavioural, the measure is usually an instrument, and replication has become part of the.',
    path:  '/subject-matter-experts/psychology/'
  },
  '/subject-radiology': {
    title: 'Radiology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Diagnostic accuracy, imaging biomarkers and the prediction models that increasingly sit on top of. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/radiology/'
  },
  '/subject-surgery': {
    title: 'Surgery \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Case series, registries and device studies, where randomisation is often impractical and the learning curve is part of the.',
    path:  '/subject-matter-experts/surgery/'
  },
  '/subject-dentistry': {
    title: 'Dentistry \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Clinical trials, materials work and practice-based research, with a split between the biological question and the materials.',
    path:  '/subject-matter-experts/dentistry/'
  },
  '/subject-public-health': {
    title: 'Public health \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Population studies, health services research and policy evaluation, usually observational and frequently contested in. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/public-health/'
  },
  '/subject-forensics': {
    title: 'Forensics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Analytical and interpretive work where the reader may be a court, and the standard of explanation is higher than a. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/forensics/'
  },
  '/subject-medical-imaging-techniques': {
    title: 'Medical imaging techniques \u2014 Pubrica',
    desc:  'Acquisition, reconstruction and quantification methods, where the contribution is technical but the claim is usually. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/medical-imaging-techniques/'
  },
  '/subject-biomedical-imaging': {
    title: 'Biomedical imaging \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Preclinical and translational imaging, where the modality is often the research object rather than the. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biomedical-imaging/'
  },
  '/subject-biochemistry': {
    title: 'Biochemistry \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Mechanism, kinetics and structure-function work, where the experiment is usually clean and the claim is usually about what it.',
    path:  '/subject-matter-experts/biochemistry/'
  },
  '/subject-biophysics': {
    title: 'Biophysics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Physical measurement of biological systems, where the instrumentation is part of the argument and the error analysis is the.',
    path:  '/subject-matter-experts/biophysics/'
  },
  '/subject-cell-biology': {
    title: 'Cell biology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Cellular mechanism, imaging and perturbation work, where the recurring problem is what a cell line actually. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/cell-biology/'
  },
  '/subject-enzymes': {
    title: 'Enzymes \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Characterisation, engineering and application of enzymes, spanning a mechanistic question and an industrial. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/enzymes/'
  },
  '/subject-genomics': {
    title: 'Genomics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Sequencing study design and analysis, where the commonest failure is structural rather than. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/genomics/'
  },
  '/subject-glycobiology': {
    title: 'Glycobiology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Carbohydrate structure and function, an analytically demanding field where the characterisation is most of the. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/glycobiology/'
  },
  '/subject-life-sciences': {
    title: 'Life sciences \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Broad biological research that crosses the boundaries the other subject headings draw, and needs somebody comfortable in more than.',
    path:  '/subject-matter-experts/life-sciences/'
  },
  '/subject-neuroscience': {
    title: 'Neuroscience \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Systems, cellular and cognitive work, in a field with unusually public methodological. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/neuroscience/'
  },
  '/subject-peptides': {
    title: 'Peptides \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Synthesis, characterisation and application of peptides, from methodology through to therapeutic. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/peptides/'
  },
  '/subject-protein-engineering': {
    title: 'Protein engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Designing and modifying proteins for function, where computational prediction and experimental validation each need the.',
    path:  '/subject-matter-experts/protein-engineering/'
  },
  '/subject-animal-science': {
    title: 'Animal science \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Livestock, companion and laboratory animal research, spanning production science, welfare and veterinary. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/animal-science/'
  },
  '/subject-biomonitoring': {
    title: 'Biomonitoring \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Measuring exposure in organisms or populations, where the analytical chemistry and the epidemiology have to. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biomonitoring/'
  },
  '/subject-biocatalysts': {
    title: 'Biocatalysts \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Biological catalysis for chemical transformation, sitting between enzymology and process. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biocatalysts/'
  },
  '/subject-pharmaceuticals': {
    title: 'Pharmaceuticals \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Formulation, delivery and the regulatory evidence that carries a medicine, where the writing is judged by an assessor rather than only a.',
    path:  '/subject-matter-experts/pharmaceuticals/'
  },
  '/subject-medicinal-chemistry': {
    title: 'Medicinal chemistry \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Design, synthesis and optimisation of bioactive molecules, where the structure-activity argument is the. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/medicinal-chemistry/'
  },
  '/subject-medicinal-and-pharmaceutical-chemistry': {
    title: 'Medicinal and pharmaceutical chemistry \u2014 Pubrica',
    desc:  'The bridge between the molecule and the medicine: synthesis, formulation, analysis and the quality evidence underneath. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/'
  },
  '/subject-drug-delivery-system': {
    title: 'Drug delivery systems \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Getting a molecule where it needs to be, where the in vitro release curve and the in vivo behaviour usually. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/drug-delivery-system/'
  },
  '/subject-cosmeceuticals': {
    title: 'Cosmeceuticals \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Products between cosmetics and pharmaceuticals, where the claim determines the regulation and the evidence. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/cosmeceuticals/'
  },
  '/subject-nutraceuticals': {
    title: 'Nutraceuticals \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Bioactive food components and supplements, regulated under food law rather than medicines law, with a different evidence.',
    path:  '/subject-matter-experts/nutraceuticals/'
  },
  '/subject-nuclear-chemistry': {
    title: 'Nuclear chemistry \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Radiochemistry, radiopharmaceuticals and analytical applications, with safety and regulatory constraints on the work. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/nuclear-chemistry/'
  },
  '/subject-biopolymers': {
    title: 'Biopolymers \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Polymers from biological sources or for biological use, where characterisation is harder than for synthetic. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biopolymers/'
  },
  '/subject-biomedical-engineering': {
    title: 'Biomedical engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Devices, instrumentation and systems for clinical use, where an engineering claim has to satisfy a clinical. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biomedical-engineering/'
  },
  '/subject-biomolecular-engineering': {
    title: 'Biomolecular engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Engineering biological molecules and systems for defined function, between molecular biology and process. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biomolecular-engineering/'
  },
  '/subject-molecular-engineering': {
    title: 'Molecular engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Designing molecules and molecular assemblies for function, spanning computation, synthesis and. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/molecular-engineering/'
  },
  '/subject-chemical-engineering': {
    title: 'Chemical engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Process design, scale-up and optimisation, where the laboratory result and the plant behave differently for knowable. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/chemical-engineering/'
  },
  '/subject-ceramic-engineering': {
    title: 'Ceramic engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Ceramic materials, processing and properties, from structural applications to biomedical and electronic. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/ceramic-engineering/'
  },
  '/subject-nuclear-engineering': {
    title: 'Nuclear engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Reactor systems, fuel, shielding and waste, where validation against benchmarks is a condition of. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/nuclear-engineering/'
  },
  '/subject-production-engineering': {
    title: 'Production engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Manufacturing systems, process improvement and quality engineering, where the evidence is usually industrial. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/production-engineering/'
  },
  '/subject-material-science': {
    title: 'Material science \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Structure, properties, processing and performance across material classes, with characterisation as the core. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/material-science/'
  },
  '/subject-nanotechnology': {
    title: 'Nanotechnology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Materials and devices at the nanoscale, where characterisation of what was actually made is the recurring. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/nanotechnology/'
  },
  '/subject-nanobiotechnology': {
    title: 'Nanobiotechnology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Nanoscale materials in biological systems, where the biological characterisation is usually thinner than the material. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/nanobiotechnology/'
  },
  '/subject-tissue-engineering': {
    title: 'Tissue engineering \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Scaffolds, cells and constructs for repair and replacement, between materials science and regenerative. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/tissue-engineering/'
  },
  '/subject-robotics': {
    title: 'Robotics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Robotic systems and control, from industrial automation to surgical and assistive. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/robotics/'
  },
  '/subject-sensor-technology': {
    title: 'Sensor technology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Sensing devices and systems, where the specification sheet and the field performance rarely. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/sensor-technology/'
  },
  '/subject-optics-and-electronics': {
    title: 'Optics and electronics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Photonic and electronic devices and systems, where measurement methodology is a substantial part of the. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/optics-and-electronics/'
  },
  '/subject-algorithm': {
    title: 'Algorithms \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Algorithm design and analysis, where the contribution is usually a proof, a bound or a demonstrated. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/algorithm/'
  },
  '/subject-bioinformatics': {
    title: 'Bioinformatics \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Computational analysis of biological data, where the pipeline is the method and has to be reported as. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/bioinformatics/'
  },
  '/subject-biocomputing': {
    title: 'Biocomputing \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Computation using biological substrates, and computational modelling of biological. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biocomputing/'
  },
  '/subject-big-data-hadoop': {
    title: 'Big data and Hadoop \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Distributed data processing at scale, where the engineering contribution and the analytical one need. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/big-data-hadoop/'
  },
  '/subject-cloud-computing': {
    title: 'Cloud computing \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Cloud architecture, orchestration and cost-performance engineering, including regulated and healthcare. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/cloud-computing/'
  },
  '/subject-computer-science': {
    title: 'Computer science \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'The broader discipline, from theory through systems to applications, with conference publication as the main. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/computer-science/'
  },
  '/subject-data-mining': {
    title: 'Data mining \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Finding structure in large datasets, where the risk is finding structure that is not. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/data-mining/'
  },
  '/subject-machine-learning': {
    title: 'Machine learning \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Model development and evaluation, where the reporting standard has tightened sharply and retrofitting is. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/machine-learning/'
  },
  '/subject-internet-of-things': {
    title: 'Internet of things \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Connected devices and the systems around them, where security and power are usually the real. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/internet-of-things/'
  },
  '/subject-augmented-reality': {
    title: 'Augmented reality \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Augmented and mixed reality systems, including surgical, training and industrial. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/augmented-reality/'
  },
  '/subject-e-learning': {
    title: 'E-learning \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Technology-supported learning, where the outcome measured decides whether a finding means. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/e-learning/'
  },
  '/subject-medical-animation': {
    title: 'Medical animation \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Visual explanation of medical and biological processes, where accuracy and clarity have to hold. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/medical-animation/'
  },
  '/subject-agriculture': {
    title: 'Agriculture \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Crop and production research, where field variation is large and the design has to account for. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/agriculture/'
  },
  '/subject-agrotechnology': {
    title: 'Agrotechnology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Technology applied to agricultural production, from precision systems to post-harvest. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/agrotechnology/'
  },
  '/subject-food-processing': {
    title: 'Food processing \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Processing operations and their effect on quality, safety and nutrition, at laboratory and plant. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/food-processing/'
  },
  '/subject-food-science': {
    title: 'Food science \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Composition, functionality and safety of foods, spanning analytical chemistry, microbiology and. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/food-science/'
  },
  '/subject-environmental-science': {
    title: 'Environmental science \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Environmental measurement, impact and remediation, where the evidence is often contested outside the. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/environmental-science/'
  },
  '/subject-biotechnology': {
    title: 'Biotechnology \u2014 Subject Matter Experts \u2014 Pubrica',
    desc:  'Biological systems applied to products and processes, from strain development through to. Assigned by subject, not availability.',
    path:  '/subject-matter-experts/biotechnology/'
  },
  '/therapy-oncology-haematology': {
    title: 'Oncology & haematology \u2014 Pubrica',
    desc:  'RECIST and iRECIST reporting, survival analysis, and submission to high-impact oncology journals and regulators who have seen every version of the.',
    path:  '/therapeutics/oncology-haematology/'
  },
  '/therapy-cardiovascular': {
    title: 'Cardiovascular \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'CONSORT 2025 trial reporting, cardiovascular outcome trials that run for years, and registry analyses where device and medicine.',
    path:  '/therapeutics/cardiovascular/'
  },
  '/therapy-endocrinology-diabetes': {
    title: 'Endocrinology & diabetes \u2014 Pubrica',
    desc:  'Metabolic cohorts, glycaemic endpoints, and cardiovascular outcome trials that exist because a regulator asked for. One named lead across the programme.',
    path:  '/therapeutics/endocrinology-diabetes/'
  },
  '/therapy-neurology': {
    title: 'Neurology \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Imaging endpoints, disability scales and longitudinal cohorts, where the measure chosen decides what can be claimed and for how.',
    path:  '/therapeutics/neurology/'
  },
  '/therapy-psychiatry-mental-health': {
    title: 'Psychiatry & mental health \u2014 Pubrica',
    desc:  'Rating-scale validation, blinding that is genuinely hard to maintain, and outcomes reported by the person being. One named lead across the programme.',
    path:  '/therapeutics/psychiatry-mental-health/'
  },
  '/therapy-immunology-inflammation': {
    title: 'Immunology & inflammation \u2014 Pubrica',
    desc:  'Biologic comparability, immunogenicity reporting and mechanism-of-action writing that has to satisfy an assessor rather than a.',
    path:  '/therapeutics/immunology-inflammation/'
  },
  '/therapy-infectious-disease-vaccines': {
    title: 'Infectious disease & vaccines \u2014 Pubrica',
    desc:  'Transmission modelling, efficacy reporting and public-health evidence, in an area where the evidence is read outside the literature as well as inside.',
    path:  '/therapeutics/infectious-disease-vaccines/'
  },
  '/therapy-respiratory': {
    title: 'Respiratory \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Spirometry endpoints, inhaled device studies and exacerbation-rate analysis, where the device and the molecule are assessed.',
    path:  '/therapeutics/respiratory/'
  },
  '/therapy-rare-disease': {
    title: 'Rare disease \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Small-population designs, natural-history studies and orphan designation dossiers, where the usual evidence hierarchy is not.',
    path:  '/therapeutics/rare-disease/'
  },
  '/therapy-dermatology': {
    title: 'Dermatology \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Lesion scoring, photographic evidence standards and topical formulation studies, where the assessor can usually see the treatment.',
    path:  '/therapeutics/dermatology/'
  },
  '/therapy-ophthalmology': {
    title: 'Ophthalmology \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Visual-acuity endpoints, imaging integrity and device evaluation, with a strong overlap into medical devices and. One named lead across the programme.',
    path:  '/therapeutics/ophthalmology/'
  },
  '/therapy-womens-health': {
    title: 'Women\u2019s health \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Trials and registry work in obstetrics and gynaecology, where the therapy area decides the endpoint, the comparator and the reporting checklist.',
    path:  '/therapeutics/womens-health/'
  },
  '/therapy-paediatrics': {
    title: 'Paediatrics \u2014 Therapy Area Evidence and Writing \u2014 Pubrica',
    desc:  'Age-appropriate endpoints, assent documentation and paediatric investigation plans, with obligations that begin earlier than teams.',
    path:  '/therapeutics/paediatrics/'
  },
  '/therapy-musculoskeletal': {
    title: 'Musculoskeletal \u2014 Pubrica',
    desc:  'Patient-reported outcomes, orthopaedic device evidence and surgical case series, where the intervention and the operator are hard to.',
    path:  '/therapeutics/musculoskeletal/'
  },
  '/therapy-nephrology-urology': {
    title: 'Nephrology & urology \u2014 Pubrica',
    desc:  'eGFR endpoints, dialysis cohort analysis and renal outcome reporting, where competing risks are. One named lead across the programme.',
    path:  '/therapeutics/nephrology-urology/'
  },
  '/therapy-gastroenterology-hepatology': {
    title: 'Gastroenterology & hepatology \u2014 Pubrica',
    desc:  'Endoscopic scoring, fibrosis endpoints and microbiome study design, with surrogate endpoints under active regulatory. One named lead across the programme.',
    path:  '/therapeutics/gastroenterology-hepatology/'
  },
  '/academy-research-writing': {
    title: 'Research Writing \u2014 Pubrica Academy',
    desc:  'Getting the work onto the page so a reviewer can follow it: language, structure, figures, references and the reporting standard your design.',
    path:  '/academy/research-writing/'
  },
  '/academy-research-data-analytics-ai': {
    title: 'Research Data Analytics and AI \u2014 Pubrica Academy',
    desc:  'Knowing what the numbers will and will not support: design, analysis, interpretation, reproducibility, and where AI belongs in research work and where it.',
    path:  '/academy/research-data-analytics-ai/'
  },
  '/academy-research-publication': {
    title: 'Research Publication \u2014 Pubrica Academy',
    desc:  'Where to send the work, what the destination requires, and the declarations that have to be right before anybody reads the.',
    path:  '/academy/research-publication/'
  },
  '/academy-research-promotion': {
    title: 'Research Promotion \u2014 Pubrica Academy',
    desc:  'Getting the work read once it is published: congress, visual and video formats, digital profile and the media that reaches beyond the.',
    path:  '/academy/research-promotion/'
  },
  '/academy-rebuttal': {
    title: 'Responding to Reviewer Comments: a Point-by-Point \u2014 Pubrica',
    desc:  'How to structure a rebuttal letter an editor can adjudicate quickly: what to concede, what to defend, how to word a disagreement.',
    path:  '/academy/response-to-reviewer/responding-to-reviewer-comments-rebuttal-letter/'
  },
  '/academy-articles': {
    title: 'Articles for Researchers \u2014 Pubrica Academy',
    desc:  'Everything published across the four categories, in one list \u2014 newest first, with the category each one sits.',
    path:  '/academy/articles/'
  },
  '/academy-templates': {
    title: 'Templates for Researchers \u2014 Pubrica Academy',
    desc:  'Document shells you fill in rather than build from nothing \u2014 manuscript structures, checklists, declaration wording and submission.',
    path:  '/academy/templates/'
  },
  '/academy-guidelines': {
    title: 'Guidelines for Researchers \u2014 Pubrica Academy',
    desc:  'The reporting standards themselves, summarised in plain language, with the edition in force and the date it was last.',
    path:  '/academy/guidelines/'
  },
  '/academy-process-flow-charts': {
    title: 'Process Flow Charts for Researchers \u2014 Pubrica Academy',
    desc:  'The sequences drawn out: what happens in what order, who decides at each point, and where a project most often.',
    path:  '/academy/process-flow-charts/'
  },
  '/academy-checklists': {
    title: 'Checklists for Researchers \u2014 Pubrica Academy',
    desc:  'Short lists to run before you send something, so nothing important is left to memory at the point it matters.',
    path:  '/academy/checklists/'
  },
  '/academy-examples': {
    title: 'Examples for Researchers \u2014 Pubrica Academy',
    desc:  'Annotated real work with the reasoning marked up \u2014 the same passage handled well and badly, and what a reviewer sees in.',
    path:  '/academy/examples/'
  },
  '/academy-infographics': {
    title: 'Infographics and Downloadables for Researchers \u2014 Pubrica',
    desc:  'One-page visual summaries built to be printed and pinned up, and the data behind each one where somebody wants to check.',
    path:  '/academy/infographics/'
  },
  '/academy-videos': {
    title: 'Videos for Researchers \u2014 Pubrica Academy',
    desc:  'Short recorded walkthroughs for the things that are quicker to watch once than to read three. This library is being filled rather than finished.',
    path:  '/academy/videos/'
  },
  '/academy-workshops': {
    title: 'Workshops and Webinars for Researchers \u2014 Pubrica Academy',
    desc:  'Live taught sessions for a group, built around your own manuscripts rather than worked examples.',
    path:  '/academy/workshops/'
  },
  '/academy-questions': {
    title: 'Ask a Question for Researchers \u2014 Pubrica Academy',
    desc:  'A question answered by the subject matter expert who works in that field, published where the answer is useful to more than one.',
    path:  '/academy/questions/'
  },
  '/academy-library': {
    title: 'Academy Resource Library \u2014 Pubrica',
    desc:  'Every Academy resource in one searchable library: articles, templates, guidelines, flow charts, checklists, examples, infographics, videos and workshops.',
    path:  '/academy/library/'
  },
  '/art-stat-objection': {
    title: 'Answering a statistical objection \u2014 Pubrica Academy',
    desc:  'A reviewer doubts your analysis. The answer that works is almost never a better explanation of the analysis you already did \u2014 it is the analysis they.',
    path:  '/insights/response-to-reviewers/'
  },
  '/art-desk-rejection': {
    title: 'Reading a desk rejection properly \u2014 Pubrica Academy',
    desc:  'Four sentences from an editor usually contain the real reason your paper was returned without review.',
    path:  '/insights/desk-rejection-diagnosis/'
  },
  '/art-choose-publisher': {
    title: 'How to choose an academic publisher \u2014 Pubrica Academy',
    desc:  'For a book or a monograph the publisher decides more than the journal does for an article: the series you sit in, whether libraries buy it, whether it is.',
    path:  '/insights/choosing-an-academic-publisher/'
  },
  '/art-case-report-journal': {
    title: 'Choosing a journal for a case report \u2014 Pubrica Academy',
    desc:  'Fewer journals publish case reports than a decade ago, and the ones that do have narrowed what they accept. Placing one well is mostly a matter of knowing.',
    path:  '/insights/how-should-physicians-choose-the-right-journal-for-submitting-a-case-report/'
  },
  '/art-declare-editor': {
    title: 'How to declare an editor in your acknowledgements \u2014 Pubrica',
    desc:  'Using an editor is normal and disclosing it is required.',
    path:  '/insights/declaring-thesis-editing/'
  },
  '/art-rate-card': {
    title: 'How to read an editing rate card, including ours \u2014 Pubrica',
    desc:  'Two quotes at the same price per word can differ by a factor of three in what arrives.',
    path:  '/insights/reading-an-editing-rate-card/'
  },
  '/art-chapter-to-article': {
    title: 'Turning a thesis chapter into a journal article \u2014 Pubrica',
    desc:  'A chapter argues completeness to an examiner who must be satisfied you did the work. An article argues one finding to a reader who will stop at the first.',
    path:  '/insights/thesis-chapter-to-journal-article/'
  },
  '/art-thesis-voice': {
    title: 'Why a thesis reads like a thesis \u2014 Pubrica Academy',
    desc:  'Editors and commissioning editors can tell an unrevised thesis from the first page, and it is not the subject or the length that gives it away. It is three.',
    path:  '/insights/thesis-to-monograph/'
  },
  '/art-patient-materials': {
    title: 'Writing patient education materials that change \u2014 Pubrica',
    desc:  'Most patient materials are accurate, complete and unread. The gap between a leaflet that is correct and one that changes what a patient does is mostly.',
    path:  '/insights/how-physicians-can-write-clear-and-impactful-patient-education-materials/'
  },
  '/art-figures-production': {
    title: 'Why figures fail at production, not at review \u2014 Pubrica',
    desc:  'A figure that reviewers praised can stop a paper for three weeks after acceptance.',
    path:  '/insights/figures-that-fail-at-production/'
  },
  '/art-marked-both-ways': {
    title: 'The same passage, marked both ways \u2014 Pubrica Academy',
    desc:  'Definitions of proofreading and copyediting are easy to read and hard to use, because they describe intent rather than output. One paragraph marked both ways.',
    path:  '/insights/proofreading-vs-copyediting/'
  },
  '/art-revision-damage': {
    title: 'A document revised four times has been proofread \u2014 Pubrica',
    desc:  'Errors in a final document are rarely the ones that were there at the start. They are made by revision \u2014 and the more careful the revision, the more of.',
    path:  '/insights/revision-damage/'
  },
  '/art-cardiology-consort': {
    title: 'Cardiology trial reporting under CONSORT \u2014 Pubrica',
    desc:  'CONSORT was updated in 2025, and the revision is not cosmetic.',
    path:  '/academy/journal-submission/cardiology-manuscripts-consort-2025-compliance/'
  },
  '/art-oncology-recist': {
    title: 'Oncology manuscripts: CONSORT and RECIST \u2014 Pubrica',
    desc:  'Oncology reviewers check response criteria reporting the way cardiology reviewers check registration.',
    path:  '/academy/journal-submission/oncology-manuscripts-consort-recist-submission/'
  },
  '/bioscience': {
    title: 'Laboratory, Formulation and Evidence Services \u2014 Pubrica',
    desc:  'Analytical testing, formulation and pilot manufacturing in our own FSSAI-certified laboratories at TICEL Biotech Park.',
    path:  '/bioscience/'
  },
  '/art-research-design': {
    title: 'What is research design? Types, methods and best \u2014 Pubrica',
    desc:  'Research design is the plan that decides how data will be collected, analysed and interpreted \u2014 and, before any of that, what the study is allowed to.',
    path:  '/services/physician-writing-services/research-proposal/research-design-types-methods-best-practices/'
  },
  '/academy-books': {
    title: 'Books for Researchers \u2014 Pubrica Academy',
    desc:  'Longer-form reading: handbooks and primers that go further than an article can, for the topics where a reader needs the whole subject rather than one.',
    path:  '/academy/books/'
  },
  '/academy-concepts-definitions': {
    title: 'Concepts and Definitions for Researchers \u2014 Pubrica Academy',
    desc:  'The terms a reviewer will assume you know, each defined at the version in force, with where it came from, what it is for, the variants you will meet and.',
    path:  '/academy/concepts-definitions/'
  },
  '/art-pre-experimental': {
    title: 'Types of pre-experimental research design \u2014 Pubrica Academy',
    desc:  'Pre-experimental designs have an intervention and a measurement but no control over who gets it. They are quick, cheap and genuinely useful for piloting.',
    path:  '/academy/experimental-design/types-of-pre-experimental-research-design/'
  },
  '/art-experimental-design': {
    title: 'What is experimental research design? Definition \u2014 Pubrica',
    desc:  'An experimental design manipulates something and measures what follows. Random allocation and a control condition are what turn that into evidence of cause,.',
    path:  '/academy/experimental-design/experimental-research-design-definition-types-examples/'
  },
  '/art-litreview-method': {
    title: 'What is a literature review in research \u2014 Pubrica',
    desc:  'A literature review is not a summary of what has been written. It is an argument about what is known, how well it is known, and what is missing \u2014 and.',
    path:  '/academy/literature-review/literature-review-in-research-methodology/'
  },
  '/art-litreview-purpose': {
    title: 'What is the purpose and importance of literature \u2014 Pubrica',
    desc:  'A literature review earns its place by doing four things no other section can: showing the work is needed, showing it has not been done, showing you know the.',
    path:  '/insights/study-guide/what-is-the-purpose-and-importance-of-literature-reviews-in-research/'
  },
  '/art-plagiarism-types': {
    title: 'Common types of plagiarism \u2014 Pubrica Academy',
    desc:  'Most plagiarism in research is not theft. It is a citation that was meant to be added later, a paraphrase that stayed too close, or an author reusing their.',
    path:  '/academy/plagiarism-service/common-types-of-plagiarism/'
  },
  '/art-research-proposal': {
    title: 'How to write a research proposal: a complete guide \u2014 Pubrica',
    desc:  'A proposal is judged on how well the study is argued, not on what the study will find. Reviewers are deciding one thing: whether this question is worth.',
    path:  '/academy/research-proposal/how-to-write-a-research-proposal-a-complete-guide/'
  },
  '/art-journal-quartiles': {
    title: 'Journal quartiles explained: Q1 to Q4 \u2014 Pubrica',
    desc:  'A quartile tells you where a journal sits against others in its subject category on one citation metric. It tells you nothing about whether your paper.',
    path:  '/academy/journal-selection/journal-quartiles-q1-q2-q3-q4-ranking-guide/'
  },
  '/cpt-pico': {
    title: 'PICO framework: population, intervention \u2014 Pubrica',
    desc:  'A four-part structure for turning a clinical or research question into something you can search for, design a study around, and set eligibility criteria.',
    path:  '/academy/concepts-definitions/pico-framework/'
  },
  '/cpt-case-study-limits': {
    title: 'What are the limitations of case studies? \u2014 Pubrica Academy',
    desc:  'A case study examines one person, group or situation in depth, usually from several sources at once.',
    path:  '/academy/concepts-definitions/what-are-the-limitations-of-case-studies/'
  },
  '/free-tools': {
    title: '12 Free Research Tools, No Sign-Up \u2014 Pubrica',
    desc:  'Twelve calculators and checkers that run in your browser: sample size, effect size, NNT, heterogeneity, test chooser. No sign-up, no email.',
    path:  '/free-tools/'
  },
  '/journal-selection': {
    title: 'Journal Selection Service \u2014 Pubrica',
    desc:  'Journals chosen from your manuscript: scope fit, indexing in Scopus, Web of Science and PubMed, APCs compared, predatory titles screened out.',
    path:  '/services/publication-support/journal-selection/'
  }
};

/* Structured data per route. FAQ answers live in a JS array, so the FAQPage block
   below is what puts those questions and answers into crawlable markup. */
/* Package offers, for the service pages that publish a price ladder. The
   figures here are the "from" figures the page itself prints, so the two can
   never drift apart without somebody noticing. */
const OFFERS = {
  '/journal-selection': { '@type':'OfferCatalog', name:'Journal selection packages', itemListElement:[
    { '@type':'Offer', name:'Standard \u2014 journal advice from a subject expert', description:'3\u20135 curated journal recommendations aligned to Scopus, SCI, PubMed and the right Web of Science collection (SCIE, SSCI, AHCI or ESCI), with a summary report and scope-fit rationale. Turnaround 4 working days. USD 130 per manuscript.', priceSpecification:{ '@type':'PriceSpecification', price:'130', priceCurrency:'USD' } },
    { '@type':'Offer', name:'Advanced \u2014 selection plus manuscript preparation', description:'Everything in Standard, plus manuscript formatting to the selected journal guidelines and a drafted cover letter. Turnaround 7\u20138 working days.' },
    { '@type':'Offer', name:'Elite \u2014 selection through to peer review', description:'Everything in Advanced, plus submission handling and tracking and peer-review rebuttal support through the first decision. Turnaround 10\u201312 working days.' }
  ]},
  '/systematic-review': { '@type':'OfferCatalog', name:'Systematic review packages', itemListElement:[
    { '@type':'Offer', name:'Evidence summary \u2014 structured summary of studies you already have', description:'A structured evidence summary rather than a full systematic review: protocol registration, dual screening and risk-of-bias assessment are not included and are added at Complete. For early-career researchers and postgraduates working from studies already collected.' },
    { '@type':'Offer', name:'Focused \u2014 a narrower question, up to three databases', description:'Protocol and PROSPERO registration, a reproducible search across up to three databases, dual independent screening, extraction, risk of bias and a PRISMA 2020 manuscript. Turnaround 10\u201315 business days. From USD 580.', priceSpecification:{ '@type':'PriceSpecification', price:'580', priceCurrency:'USD' } },
    { '@type':'Offer', name:'Complete \u2014 a full systematic review', description:'Multi-database search across up to four databases plus grey literature, dual screening, duplicate extraction, risk of bias, meta-analysis or narrative synthesis and GRADE per outcome. Turnaround 30\u201340 business days. From USD 850.', priceSpecification:{ '@type':'PriceSpecification', price:'850', priceCurrency:'USD' } },
    { '@type':'Offer', name:'Advanced \u2014 review, meta-analysis and submission support', description:'The full review with meta-analysis and GRADE, plus journal selection, formatting, submission and response to reviewer comments through to a decision. Turnaround 60\u2013120 business days. From USD 1,450.', priceSpecification:{ '@type':'PriceSpecification', price:'1450', priceCurrency:'USD' } },
    { '@type':'Offer', name:'Rewriting and enhancement \u2014 a review that was rejected', description:'A written methodological critique first, then structural and methodological repairs, rewriting against the reviewer and editor comments received, language editing, reference reformatting and a plagiarism and AI-content recheck. From USD 690 per manuscript.', priceSpecification:{ '@type':'PriceSpecification', price:'690', priceCurrency:'USD' } }
  ]}
};

function routeSchema(r){
  /* the middle crumb is the service category the page's own URL sits under */
  const parentCrumb = function(path){
    /* Pages whose URL has no category folder, but which the site groups
       under one. The visible crumb and this map have to agree. */
    const EXACT = {
      '/services/bioinformatics/': ['Research services', '/services/research-services/'],
      '/insights/nih-public-access-policy-2025/': ['Insights', '/insights/'],
      '/insights/horizon-europe-article-processing-charges/': ['Insights', '/insights/'],
      '/insights/japan-immediate-open-access/': ['Insights', '/insights/']
    };
    if(EXACT[path]) return EXACT[path];
    const CATS = {
      '/services/publication-support/':  'Publication support',
      '/services/research-services/':    'Research services',
      '/services/physician-writing-services/': 'Physician writing',
      '/services/scientific-communication/': 'Scientific communication',
      '/services/editing-and-translation/':  'Editing and translation',
      '/services/data-analytics-machine-learning/': 'Data analytics'
    };
    const hit = Object.keys(CATS).filter(function(k){ return path.indexOf(k) === 0; })[0];
    return hit ? [CATS[hit], hit] : ['Services', '/services/'];
  };
  const crumb = function(items){
    return { '@type':'BreadcrumbList', itemListElement: items.map(function(it,i){
      return { '@type':'ListItem', position:i+1, name:it[0], item:SITE+it[1] }; }) };
  };
  const SERVICE = {
    '/editing-translation': { name:'Editing and Translation', type:'Service hub', crumb:'Services' },
    '/visual-accessibility-editing': { name:'Visual &amp; accessibility editing', type:'Editorial service', crumb:'Academic editorial' },
    '/forensic-quality-audit': { name:'Forensic &amp; quality audit', type:'Editorial service', crumb:'Academic editorial' },
    '/revisioning-localisation': { name:'Revisioning &amp; localisation', type:'Editorial service', crumb:'Academic editorial' },
    '/permission-metadata': { name:'Permission &amp; metadata', type:'Editorial service', crumb:'Academic editorial' },
    '/development-editing': { name:'Development editing', type:'Editing service', crumb:'Academic editorial' },
    '/accessibility-compliance': { name:'Accessibility compliance', type:'Editorial service', crumb:'Education editorial' },
    '/learning-design': { name:'Learning design &amp; pedagogy', type:'Education service', crumb:'Education editorial' },
    '/ai-data-preparation': { name:'AI &amp; data preparation', type:'Data service', crumb:'Education editorial' },
    '/digital-production-qa': { name:'Digital production QA', type:'Publishing service', crumb:'Education editorial' },
    '/assessment-exam-review': { name:'Assessment &amp; exam review', type:'Education service', crumb:'Education editorial' },
    '/health-economics': { name:'Health economics &amp; outcomes research', type:'Market access service', crumb:'Market access and HEOR' },
    '/patient-journey-insights': { name:'Patient journey &amp; insights', type:'Data service', crumb:'Data analytics' },
    '/predictive-analytics': { name:'Predictive analytics', type:'Data service', crumb:'Data analytics' },
    '/customer-segmentation': { name:'Customer segmentation', type:'Data service', crumb:'Data analytics' },
    '/algorithm-development': { name:'Algorithm development', type:'Data service', crumb:'Data analytics' },
    '/interpretation-visualisation': { name:'Interpretation &amp; visualisation', type:'Research service', crumb:'Data analytics' },
    '/graphical-abstract': { name:'Graphical abstract', type:'Research impact service', crumb:'Research impact' },
    '/scientific-news-report': { name:'Scientific news report', type:'Research impact service', crumb:'Research impact' },
    '/simplified-abstract': { name:'Simplified abstract', type:'Research impact service', crumb:'Research impact' },
    '/medical-data-collection': { name:'Medical data collection', type:'Research service', crumb:'Research services' },
    '/educational-content-development': { name:'Educational content development', type:'Educational service', crumb:'Educational content' },
    '/discovery-intelligence': { name:'Discovery and intelligence', type:'Research service', crumb:'Research services' },
    '/clinical-trial-support': { name:'Clinical trial support', type:'Research service', crumb:'Research services' },
    '/clinical-evaluation-report': { name:'Clinical evaluation report', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/clinical-study-report': { name:'Clinical study report', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/patient-narratives': { name:'Patient safety narratives', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/investigators-brochure': { name:'Investigator\u2019s brochure', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/informed-consent-form': { name:'Informed consent form', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/clinical-study-protocol': { name:'Clinical study protocol', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/statistical-analysis-plan': { name:'Statistical analysis plan', type:'Research service', crumb:'Research services' },
    '/health-authority-response': { name:'Health authority query response', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/performance-evaluation-report': { name:'Performance evaluation report', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/ctd-module-summaries': { name:'CTD module summaries', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/risk-management-plan': { name:'Risk management plan', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/psur-dsur': { name:'PSUR and DSUR', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/plain-language-summary': { name:'Plain language summary', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/nonclinical-study-report': { name:'Nonclinical study report', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/labelling-smpc': { name:'Labelling and SmPC', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/sop-writing': { name:'SOP writing', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/technical-file-510k': { name:'Technical file and 510(k)', type:'Regulatory writing service', crumb:'Regulatory writing' },
    '/audio-abstract': { name:'Audio abstract', type:'Research impact service', crumb:'Research impact' },
    '/infographic-abstract': { name:'Infographic abstract', type:'Research impact service', crumb:'Research impact' },
    '/slide-deck': { name:'Slide abstract and deck', type:'Research impact service', crumb:'Research impact' },
    '/interactive-abstract': { name:'Interactive abstract', type:'Research impact service', crumb:'Research impact' },
    '/research-data-service': { name:'Research data service', type:'Publication support service', crumb:'Publication support' },
    '/post-acceptance-support': { name:'Post-acceptance support', type:'Publication support service', crumb:'Publication support' },
    '/vpat-accessibility-report': { name:'VPAT and conformance report', type:'Editorial service', crumb:'Editorial and education' },
    '/scientific-alt-text': { name:'Scientific alt text', type:'Editorial service', crumb:'Editorial and education' },
    '/pdf-remediation': { name:'PDF remediation', type:'Editorial service', crumb:'Editorial and education' },
    '/epub-accessibility': { name:'EPUB accessibility validation', type:'Editorial service', crumb:'Editorial and education' },
    '/mathml-remediation': { name:'MathML remediation', type:'Editorial service', crumb:'Editorial and education' },
    '/indexing': { name:'Indexing', type:'Editorial service', crumb:'Editorial and education' },
    '/reference-validation': { name:'Reference validation', type:'Editorial service', crumb:'Editorial and education' },
    '/metadata-tagging': { name:'Metadata tagging', type:'Editorial service', crumb:'Editorial and education' },
    '/proof-stage-proofreading': { name:'Proof-stage proofreading', type:'Editorial service', crumb:'Editorial and education' },
    '/compliance-statement-checking': { name:'Compliance statement checking', type:'Editorial service', crumb:'Editorial and education' },
    '/editorial-office-services': { name:'Editorial office services', type:'Editorial service', crumb:'Editorial and education' },
    '/research-integrity-cases': { name:'Research integrity cases', type:'Editorial service', crumb:'Editorial and education' },
    '/statistical-review': { name:'Statistical review', type:'Editorial service', crumb:'Editorial and education' },
    '/journal-indexing-applications': { name:'Journal indexing applications', type:'Editorial service', crumb:'Editorial and education' },
    '/publishing-workflow-advisory': { name:'Publishing workflow advisory', type:'Editorial service', crumb:'Editorial and education' },
    '/standards-alignment': { name:'Standards alignment', type:'Educational service', crumb:'Editorial and education' },
    '/psychometric-services': { name:'Psychometric services', type:'Educational service', crumb:'Editorial and education' },
    '/bias-fairness-review': { name:'Bias and fairness review', type:'Educational service', crumb:'Editorial and education' },
    '/scorm-conversion': { name:'SCORM and xAPI conversion', type:'Educational service', crumb:'Editorial and education' },
    '/subject-expert-sourcing': { name:'Subject expert sourcing', type:'Educational service', crumb:'Editorial and education' },
    '/scientific-illustration': { name:'Scientific illustration', type:'Research impact service', crumb:'Research impact' },
    '/journal-cover-art': { name:'Journal cover art', type:'Research impact service', crumb:'Research impact' },
    '/video-byte': { name:'Video byte', type:'Research impact service', crumb:'Research impact' },
    '/cover-letter': { name:'Cover letter', type:'Publication support service', crumb:'Publication support' },
    '/resubmission-support': { name:'Resubmission support', type:'Publication support service', crumb:'Publication support' },
    '/abstract-writing': { name:'Abstract writing and editing', type:'Publication support service', crumb:'Publication support' },
    '/latex-editing': { name:'LaTeX editing', type:'Editing service', crumb:'Editing and translation' },
    '/ai-assisted-editing': { name:'AI-assisted manuscript editing', type:'Editing service', crumb:'Editing and translation' },
    '/manuscript-check': { name:'Manuscript check', type:'Publication support service', crumb:'Publication support' },
    '/press-distribution': { name:'Press distribution', type:'Research impact service', crumb:'Research impact' },
    '/reporting-checklist-review': { name:'Reporting checklist review', type:'Publication support service', crumb:'Publication support' },
    '/eu-joint-clinical-assessment': { name:'EU Joint Clinical Assessment', type:'Market access service', crumb:'Market access and HEOR' },
    '/hta-submission-dossier': { name:'HTA submission dossier', type:'Market access service', crumb:'Market access and HEOR' },
    '/global-value-dossier': { name:'Global value dossier', type:'Market access service', crumb:'Market access and HEOR' },
    '/cost-effectiveness-model': { name:'Cost-effectiveness model', type:'HEOR service', crumb:'Market access and HEOR' },
    '/budget-impact-model': { name:'Budget impact model', type:'HEOR service', crumb:'Market access and HEOR' },
    '/payer-evidence-review': { name:'Payer evidence review', type:'HEOR service', crumb:'Market access and HEOR' },
    '/market-access': { name:'Market access and HEOR', type:'Service family', crumb:'Services' },
    '/rapid-review': { name:'Rapid and targeted review', type:'Research service', crumb:'Research services' },
    '/scoping-review': { name:'Scoping review', type:'Research service', crumb:'Research services' },
    '/living-systematic-review': { name:'Living systematic review', type:'Research service', crumb:'Research services' },
    '/evidence-gap-map': { name:'Evidence gap map', type:'Research service', crumb:'Research services' },
    '/state-of-the-art-review': { name:'State-of-the-art review', type:'Regulatory service', crumb:'Regulatory writing' },
    '/search-strategy-peer-review': { name:'Search strategy peer review', type:'Editorial service', crumb:'Editorial and journal services' },
    '/network-meta-analysis': { name:'Network meta-analysis', type:'Research service', crumb:'Research services' },
    '/redcap-database-build': { name:'REDCap database build', type:'Research service', crumb:'Research services' },
    '/data-management-plan': { name:'Data management plan', type:'Research service', crumb:'Research services' },
    '/cdisc-sdtm-adam': { name:'CDISC SDTM and ADaM', type:'Research service', crumb:'Research services' },
    '/clinical-evaluation-plan': { name:'Clinical evaluation plan', type:'Regulatory service', crumb:'Regulatory writing' },
    '/performance-evaluation-plan': { name:'Performance evaluation plan', type:'Regulatory service', crumb:'Regulatory writing' },
    '/scientific-validity-report': { name:'Scientific validity report', type:'Regulatory service', crumb:'Regulatory writing' },
    '/pmcf-plan-report': { name:'PMCF plan and report', type:'Regulatory service', crumb:'Regulatory writing' },
    '/post-market-surveillance': { name:'PMS and device PSUR', type:'Regulatory service', crumb:'Regulatory writing' },
    '/sscp': { name:'Summary of safety and clinical performance', type:'Regulatory service', crumb:'Regulatory writing' },
    '/device-risk-management': { name:'Device risk management', type:'Regulatory service', crumb:'Regulatory writing' },
    '/gspr-checklist': { name:'GSPR checklist', type:'Regulatory service', crumb:'Regulatory writing' },
    '/publication-planning': { name:'Publication planning and strategy', type:'Medical communications', crumb:'Scientific communication' },
    '/scientific-platform': { name:'Scientific platform and narrative', type:'Medical communications', crumb:'Scientific communication' },
    '/congress-content': { name:'Congress and symposium content', type:'Medical communications', crumb:'Scientific communication' },
    '/publication-extenders': { name:'Publication extenders', type:'Medical communications', crumb:'Scientific communication' },
    '/publication-governance': { name:'Publication governance', type:'Medical communications', crumb:'Scientific communication' },
    '/medical-affairs-strategy': { name:'Medical affairs strategy', type:'Medical communications', crumb:'Scientific communication' },
    '/msl-field-medical': { name:'MSL and field medical', type:'Medical communications', crumb:'Scientific communication' },
    '/advisory-boards': { name:'Advisory boards', type:'Medical communications', crumb:'Scientific communication' },
    '/medical-information': { name:'Medical information and SRDs', type:'Medical communications', crumb:'Scientific communication' },
    '/kol-mapping': { name:'KOL mapping and insights', type:'Medical communications', crumb:'Scientific communication' },
    '/for-researchers': { name:'For academic researchers', type:'Who we help', crumb:'Who we help' },
    '/for-students': { name:'For students and early career', type:'Who we help', crumb:'Who we help' },
    '/for-physicians': { name:'For physicians and clinicians', type:'Who we help', crumb:'Who we help' },
    '/for-universities': { name:'For universities and institutions', type:'Who we help', crumb:'Who we help' },
    '/for-industry': { name:'For pharma and biotech', type:'Who we help', crumb:'Who we help' },
    '/for-device': { name:'For medical device and IVD', type:'Who we help', crumb:'Who we help' },
    '/for-publishers': { name:'For journals and publishers', type:'Who we help', crumb:'Who we help' },
    '/for-education': { name:'For education and assessment', type:'Who we help', crumb:'Who we help' },
    '/who-we-help': { name:'Who we help', type:'Overview', crumb:'Services' },
    '/our-editors': { name:'Our editors', type:'Company', crumb:'About us' },
    '/scientific-editor-profile': { name:'Editor profile', type:'Company', crumb:'About us' },
    '/editor-speak': { name:'Editor speak', type:'Company', crumb:'About us' },
    '/therapeutic-expertise': { name:'Therapeutic expertise', type:'Company', crumb:'About us' },
    '/compliance': { name:'Compliance', type:'Company', crumb:'About us' },
    '/careers': { name:'Careers', type:'Company', crumb:'About us' },
    '/contact': { name:'Contact us', type:'Company', crumb:'About us' },
    '/about-us': { name:'Overview', type:'Company', crumb:'About us' },
    '/research-services': { name:'Research services', type:'Service family', crumb:'Services' },
    '/publication-support': { name:'Publication support', type:'Service family', crumb:'Services' },
    '/research-impact': { name:'Research impact', type:'Service family', crumb:'Services' },
    '/data-analytics-ai': { name:'Data, analytics &amp; AI', type:'Service family', crumb:'Services' },
    '/medical-device-ivd': { name:'Medical device &amp; IVD', type:'Service family', crumb:'Services' },
    '/editorial-journal-services': { name:'Editorial &amp; journal services', type:'Service family', crumb:'Services' },
    '/accessibility-services': { name:'Accessibility', type:'Service family', crumb:'Services' },
    '/education-assessment': { name:'Education &amp; assessment', type:'Service family', crumb:'Services' },
    '/publishing-your-research': { name:'Publishing in journals', type:'Service group', crumb:'Services' },
    '/industry-evidence': { name:'Submitting to regulators', type:'Service group', crumb:'Services' },
    '/publishers-and-educators': { name:'Editorial support for publishers', type:'Service group', crumb:'Services' },
    '/across-everything': { name:'Data &amp; artificial intelligence', type:'Service group', crumb:'Services' },
    '/partnerships': { name:'Partnerships', type:'Company', crumb:'About us' },
    '/global-partner-program': { name:'Global partner programme', type:'Company', crumb:'About us' },
    '/umbrella-review': { name:'Umbrella review', type:'Research service', crumb:'Research services' },
    '/copy-editing': { name:'Copy editing', type:'Editing service', crumb:'Editing and Translation' },
    '/proofreading': { name:'Proofreading', type:'Editing service', crumb:'Editing and Translation' },
    '/book-editing': { name:'Book Editing', type:'Editing service', crumb:'Editing and Translation' },
    '/manuscript-editing': { name:'Manuscript Editing', type:'Editing service', crumb:'Editing and Translation' },
    '/scientific-editing': { name:'Scientific Editing', type:'Editing service', crumb:'Editing and Translation' },
    '/thesis-editing': { name:'Thesis Editing', type:'Editing service', crumb:'Editing and Translation' },
    '/post-editing': { name:'Post-Editing', type:'Translation service', crumb:'Editing and Translation' },
    '/translation-with-editing': { name:'Translation with Editing', type:'Translation service', crumb:'Editing and Translation' },
    '/scientific-communication': { name:'Scientific Medical Communication', type:'Medical communication services', crumb:'Services' },
    '/medico-legal': { name:'Medico-Legal Support Services', type:'Medical record review and litigation support', crumb:'Services' },
    '/marketing-communication': { name:'Marketing Communication Content Development', type:'Promotional content development', crumb:'Scientific communication' },
    '/thought-leadership': { name:'Thought Leadership Content and Editorial Design', type:'Content and editorial design', crumb:'Scientific communication' },
    '/cme-content': { name:'CME Content Development', type:'Continuing education content', crumb:'Services' },
    '/editorial-quality-support': { name:'Editorial and Quality Support', type:'Editing and editorial QC', crumb:'Medical writing' },
    '/scientific-writing': { name:'Scientific and Academic Writing', type:'Academic writing and editing', crumb:'Research services' },
    '/regulatory-writing': { name:'Regulatory Writing Service',
      type:'Regulatory, clinical, safety and medical device documentation for global submissions',
      crumb:'Regulatory writing' },
    '/physician-writing-services': { name:'Physician Writing Services',
      type:'Research, analysis, publication and communication support for practising clinicians',
      crumb:'Physician writing' },
    '/patient-education-content': { name:'Patient Education Content Service',
      type:'Patient-facing health information written to a measured reading level and clinically reviewed',
      crumb:'Patient education content' },
    '/physician-training': { name:'Physician Training Content Development',
      type:'Clinical education content development for accredited providers, hospitals and medical societies',
      crumb:'Physician training' },
    '/literature-search-and-citation': { name:'Literature Search and Citation Service',
      type:'Search strategy design, database searching, grey literature and reference verification',
      crumb:'Literature search and citation' },
    '/customized-writing': { name:'Customized Medical Writing for Physicians',
      type:'Bespoke clinical and scientific writing across publication, institutional, educational and patient-facing registers',
      crumb:'Customized writing' },
    '/research-proposal': { name:'Clinical Research Protocol and Proposal Writing',
      type:'Protocol writing, ethics submission documents and funder proposals',
      crumb:'Research proposal' },
    '/clinical-literature-review': { name:'Clinical Literature Review Service',
      type:'Systematic, rapid, scoping and regulatory evidence synthesis for clinical and regulatory use',
      crumb:'Clinical literature review' },
    '/physician-manuscripts': { name:'Physician Manuscript Writing Service',
      type:'Clinical manuscript writing, statistical analysis and journal submission support',
      crumb:'Physician manuscripts' },
    '/case-report': { name:'Case Report Writing Service',
      type:'Clinical case report writing, consent documentation and journal submission support',
      crumb:'Case report' },
    '/original-research-article': { name:'Original Research Article Writing Service',
      type:'Research paper writing, manuscript development and journal submission support',
      crumb:'Original research article' },
    '/bioinformatics': { name:'Bioinformatics Service',
      type:'Bioinformatics consulting, NGS data analysis, multi-omics integration and pipeline development',
      crumb:'Bioinformatics' },
    '/medical-writing': { name:'Medical Writing Service',
      type:'Regulatory, clinical, medical device and academic medical writing and medical editing',
      crumb:'Medical writing' },
    '/grant-writing': { name:'Grant Writing Service',
      type:'Research grant proposal writing, review, editing and budget justification',
      crumb:'Grant writing' },
    '/experimental-design': { name:'Experimental Design Service',
      type:'Experimental study design, protocol development and methodology consulting',
      crumb:'Experimental design' },
    '/biostatistics': { name:'Biostatistics and Statistical Programming Service',
      type:'Biostatistics consulting, CDISC statistical programming and clinical trial analysis',
      crumb:'Biostatistics and statistical programming' },
    '/literature-review': { name:'Literature Review and Gap Analysis Service',
      type:'Literature review writing, critical appraisal and research gap analysis',
      crumb:'Literature review and gap analysis' },
    '/meta-analysis': { name:'Meta-Analysis Service',
      type:'Meta-analysis, statistical pooling and evidence synthesis support',
      crumb:'Meta-analysis' },
    '/systematic-review': { name:'Systematic Review Writing Service',
      type:'Systematic review, evidence synthesis and meta-analysis support',
      crumb:'Systematic review' },
    '/journal-selection': { name:'Journal Selection Service',
      type:'Journal selection and manuscript submission support',
      crumb:'Journal selection' },
    '/peer-review': { name:'Pre-Submission Peer Review Service',
      type:'Pre-submission peer review and manuscript assessment',
      crumb:'Pre-submission peer review' },
    '/manuscript-formatting': { name:'Manuscript Formatting Service',
      type:'Journal manuscript formatting and reference styling',
      crumb:'Manuscript formatting' },
    '/plagiarism-check': { name:'Plagiarism Check and AI Authorship Screening',
      type:'Similarity screening, AI authorship detection and editorial assessment',
      crumb:'Plagiarism check' },
    '/journal-submission': { name:'Journal Submission Service',
      type:'Journal submission, cover letter and editorial tracking',
      crumb:'Journal submission' },
    '/response-to-reviewers': { name:'Response to Reviewer Comments and Rebuttal Service',
      type:'Point-by-point reviewer response, rebuttal letters and manuscript revision',
      crumb:'Response to reviewers' },
    '/artwork-preparation': { name:'Artwork Preparation Service',
      type:'Scientific figure preparation, vectorisation and graphical abstracts',
      crumb:'Artwork preparation' },
    '/poster-preparation': { name:'Scientific Poster Preparation Service',
      type:'Conference poster design, content synthesis and data visualisation',
      crumb:'Poster preparation' },
    '/video-abstract': { name:'Video Abstract Service',
      type:'Video abstract scripting, animation, voiceover and captioning',
      crumb:'Video abstract' }
  };
  /* The free-tools hub is not a service: it is a collection of twelve small
     applications, and it is described as one. */
  if(r === '/free-tools'){
    const view = document.querySelector('.view[data-route="/free-tools"]');
    const faqs = Array.from(view ? view.querySelectorAll('.faq__item') : []).map(function(it){
      const q = it.querySelector('.faq__q span');
      const a = it.querySelector('.faq__a');
      return (q && a) ? { '@type':'Question', name:q.textContent.trim(),
                          acceptedAnswer:{ '@type':'Answer', text:a.innerText.trim() } } : null;
    }).filter(Boolean);
    const tools = Array.from(view ? view.querySelectorAll('.tk') : []).map(function(t, i){
      const nm = t.querySelector('.tk__t button');
      const ds = t.querySelector('.tk__s');
      return { '@type':'ListItem', position:i+1, item:{
        '@type':'SoftwareApplication',
        name: nm ? nm.textContent.trim() : '',
        description: ds ? ds.textContent.trim() : '',
        url: SITE + ROUTES[r].path + '#' + t.id,
        applicationCategory:'EducationalApplication',
        operatingSystem:'Any browser',
        isAccessibleForFree:true,
        offers:{ '@type':'Offer', price:'0', priceCurrency:'USD' }
      }};
    });
    return [
      { '@context':'https://schema.org', '@type':'CollectionPage',
        name:'Free research tools', url:SITE+ROUTES[r].path, description:ROUTES[r].desc,
        isPartOf:{ '@type':'WebSite', name:'Pubrica', url:SITE+'/' },
        publisher:{ '@type':'Organization', name:'Pubrica', url:SITE+'/' },
        mainEntity:{ '@type':'ItemList', name:'Free research tools',
                     numberOfItems:tools.length, itemListElement:tools } },
      faqs.length ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs } : null,
      Object.assign({ '@context':'https://schema.org' }, crumb([
        ['Home','/'], ['Free tools', ROUTES[r].path]
      ]))
    ].filter(Boolean);
  }

  /* The policy explainers are articles, not services. */
  const ARTICLE = {
    '/nih-public-access':   { h:'NIH public access 2025', pub:'2026-09-21' },
    '/horizon-europe-apc':  { h:'Horizon Europe APCs',    pub:'2026-09-21' },
    '/japan-open-access':   { h:'Japan immediate OA',     pub:'2026-09-21' },
    '/art-stat-objection': { h:'Answering a statistical objection', pub:'2026-02-04',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-desk-rejection': { h:'Reading a desk rejection', pub:'2026-01-19',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-choose-publisher': { h:'Choosing an academic publisher', pub:'2026-01-22',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-case-report-journal': { h:'Choosing a journal for a case report', pub:'2026-02-08',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-declare-editor': { h:'Declaring an editor', pub:'2026-03-12',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-rate-card': { h:'Reading an editing rate card', pub:'2026-03-19',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-chapter-to-article': { h:'Thesis chapter to journal article', pub:'2026-02-05',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-thesis-voice': { h:'The thesis voice', pub:'2026-02-26',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-patient-materials': { h:'Patient education materials', pub:'2026-02-18',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-figures-production': { h:'Figures at production', pub:'2026-03-11',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-marked-both-ways': { h:'Proofreading and copyediting', pub:'2026-04-02',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-revision-damage': { h:'Revision damage', pub:'2026-04-09',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-cardiology-consort': { h:'Cardiology manuscripts under CONSORT 2025', pub:'2026-05-14',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-oncology-recist': { h:'Oncology manuscripts and RECIST', pub:'2026-05-21',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-research-design': { h:'What is research design?', pub:'2026-10-02',
                              cat:['Research Data Analytics and AI','/academy/research-data-analytics-ai/'] },
    '/art-pre-experimental': { h:'Pre-experimental designs', pub:'2026-10-02',
                              cat:['Research Data Analytics and AI','/academy/research-data-analytics-ai/'] },
    '/art-experimental-design': { h:'Experimental research design', pub:'2026-10-02',
                              cat:['Research Data Analytics and AI','/academy/research-data-analytics-ai/'] },
    '/art-litreview-method': { h:'Literature review in methodology', pub:'2026-10-02',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-litreview-purpose': { h:'Why literature reviews matter', pub:'2026-10-02',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-plagiarism-types': { h:'Common types of plagiarism', pub:'2026-10-02',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/art-research-proposal': { h:'Writing a research proposal', pub:'2026-10-02',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/art-journal-quartiles': { h:'Journal quartiles', pub:'2026-10-02',
                              cat:['Research Publication','/academy/research-publication/'] },
    '/cpt-pico': { h:'PICO framework', pub:'2026-10-02',
                              cat:['Research Writing','/academy/research-writing/'] },
    '/cpt-case-study-limits': { h:'Limitations of case studies', pub:'2026-10-02',
                              cat:['Research Data Analytics and AI','/academy/research-data-analytics-ai/'] },
    '/academy-rebuttal':    { h:'Point-by-point rebuttal', pub:'2026-09-29',
                              cat:['Research Publication','/academy/research-publication/'] }
  };
  if(ARTICLE[r]){
    const view = document.querySelector('.view[data-route="' + r + '"]');
    const faqs = Array.from(view ? view.querySelectorAll('.faq__item') : []).map(function(it){
      const q = it.querySelector('.faq__q span');
      const a = it.querySelector('.faq__a');
      return (q && a) ? { '@type':'Question', name:q.textContent.trim(),
                          acceptedAnswer:{ '@type':'Answer', text:a.innerText.trim() } } : null;
    }).filter(Boolean);
    return [
      { '@context':'https://schema.org', '@type':'Article',
        headline: view ? view.querySelector('h1').textContent.trim() : ROUTES[r].title,
        description: ROUTES[r].desc,
        url: SITE + ROUTES[r].path,
        datePublished: ARTICLE[r].pub, dateModified: ARTICLE[r].pub,
        author:{ '@type':'Organization', name:'Pubrica', url:SITE+'/' },
        publisher:{ '@type':'Organization', name:'Pubrica', url:SITE+'/' },
        isAccessibleForFree:true,
        mainEntityOfPage:{ '@type':'WebPage', '@id':SITE+ROUTES[r].path } },
      faqs.length ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs } : null,
      /* An Academy article sits under its category; an Insights article under
         Insights. One hard-coded crumb for both put Academy articles in the
         wrong place in search results the moment Academy gained articles. */
      Object.assign({ '@context':'https://schema.org' }, crumb(
        ARTICLE[r].cat
          ? [['Home','/'], ['Academy','/academy/'],
             [ARTICLE[r].cat[0], ARTICLE[r].cat[1]], [ARTICLE[r].h, ROUTES[r].path]]
          : [['Home','/'], ['Insights','/insights/'], [ARTICLE[r].h, ROUTES[r].path]]
      ))
    ].filter(Boolean);
  }

  if(SERVICE[r]){
    // read the questions from this view's own FAQ markup, not the shared array
    const view = document.querySelector('.view[data-route="' + r + '"]');
    const faqs = Array.from(view ? view.querySelectorAll('.faq__item') : []).map(function(it){
      const q = it.querySelector('.faq__q span');
      const a = it.querySelector('.faq__a');
      return (q && a) ? { '@type':'Question', name:q.textContent.trim(),
                          acceptedAnswer:{ '@type':'Answer', text:a.innerText.trim() } } : null;
    }).filter(Boolean);
    return [
      { '@context':'https://schema.org', '@type':'Service',
        name:SERVICE[r].name,
        serviceType:SERVICE[r].type,
        provider:{ '@type':'Organization', name:'Pubrica', url:SITE+'/' },
        url:SITE+ROUTES[r].path,
        description:ROUTES[r].desc,
        areaServed:'Worldwide',
        audience:{ '@type':'Audience', audienceType:'Researchers, PhD scholars, research institutions, medical writers and life-science teams' },
        hasOfferCatalog: OFFERS[r]
      },
      faqs.length ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs } : null,
      Object.assign({ '@context':'https://schema.org' }, crumb([
        ['Home','/'], parentCrumb(ROUTES[r].path),
        [SERVICE[r].crumb, ROUTES[r].path]
      ]))
    ].filter(Boolean);
  }
  /* Everything else still gets a page type, its place in the site, and any
     questions it answers — otherwise a hub or a guide reaches a crawler as a
     breadcrumb and nothing more. */
  const v = document.querySelector('.view[data-route="' + r + '"]');
  const faqs = Array.from(v ? v.querySelectorAll('.faq__item') : []).map(function(it){
    const q = it.querySelector('.faq__q span');
    const a = it.querySelector('.faq__a');
    return (q && a) ? { '@type':'Question', name:q.textContent.trim(),
                        acceptedAnswer:{ '@type':'Answer', text:a.innerText.trim() } } : null;
  }).filter(Boolean);
  /* a page that is mostly a list of other pages is a collection */
  const listish = !!(v && (v.querySelector('.lib[data-lib-rows], [data-lib-rows]') ||
                           v.querySelectorAll('.acard, .read, .insstream').length >= 4));
  const name = ROUTES[r].title.split(' \u2014 ')[0].split(' | ')[0];
  return [
    { '@context':'https://schema.org',
      '@type': listish ? 'CollectionPage' : 'WebPage',
      name: name,
      url: SITE + ROUTES[r].path,
      description: ROUTES[r].desc,
      inLanguage: ROUTES[r].lang || 'en',
      isPartOf: { '@type':'WebSite', name:'Pubrica', url:SITE + '/' },
      publisher: { '@type':'Organization', name:'Pubrica', url:SITE + '/' }
    },
    faqs.length ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs } : null,
    Object.assign({ '@context':'https://schema.org' }, crumb([['Home','/'], [name, ROUTES[r].path]]))
  ].filter(Boolean);
}

/* The three language landings are alternates of one another, so each one
   names every version including itself, with the English page as the
   fallback for anyone whose language matches none of them. Pages with no
   translated counterpart get no annotation, which is the correct signal. */
const ALT = {
  '/':   [['en','/'], ['ja','/ja/'], ['zh-Hans','/zh/'], ['x-default','/']],
  '/ja': [['en','/'], ['ja','/ja/'], ['zh-Hans','/zh/'], ['x-default','/']],
  '/zh': [['en','/'], ['ja','/ja/'], ['zh-Hans','/zh/'], ['x-default','/']]
};

function setMeta(r){
  const meta = ROUTES[r];
  const url  = SITE + meta.path;
  document.title = meta.title;
  document.documentElement.lang = meta.lang || 'en';

  Array.prototype.slice.call(document.head.querySelectorAll('link[rel="alternate"][hreflang]'))
    .forEach(function(l){ l.remove(); });
  (ALT[r] || []).forEach(function(pair){
    const l = document.createElement('link');
    l.rel = 'alternate'; l.hreflang = pair[0]; l.href = SITE + pair[1];
    document.head.appendChild(l);
  });

  function attr(sel, name, val, value){
    let el = document.head.querySelector(sel);
    if(!el){ el = document.createElement('meta'); el.setAttribute(name, val); document.head.appendChild(el); }
    el.setAttribute('content', value);
  }
  attr('meta[name="description"]', 'name', 'description', meta.desc);
  attr('meta[property="og:title"]', 'property', 'og:title', meta.title);
  attr('meta[property="og:description"]', 'property', 'og:description', meta.desc);
  attr('meta[property="og:url"]', 'property', 'og:url', url);
  attr('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  attr('meta[name="twitter:description"]', 'name', 'twitter:description', meta.desc);

  let can = document.head.querySelector('link[rel=canonical]');
  if(!can){ can = document.createElement('link'); can.rel = 'canonical'; document.head.appendChild(can); }
  can.href = url;

  let ld = document.getElementById('ld-route');
  if(!ld){ ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-route'; document.head.appendChild(ld); }
  try{ ld.textContent = JSON.stringify(routeSchema(r)); }catch(err){}
}

/* ============================================================
   Page section bar + dock height
   ============================================================ */
(function pagenav(){
  const dock = document.getElementById('dock');

  /* every sticky offset on the page is measured from the dock, which changes
     height when the promo bar is dismissed or the viewport narrows */
  function dockH(){
    if(!dock) return;
    document.documentElement.style.setProperty('--dock-h', dock.offsetHeight + 'px');
  }
  dockH();
  window.addEventListener('resize', dockH, { passive:true });
  if('ResizeObserver' in window && dock) new ResizeObserver(dockH).observe(dock);

  /* Only these belong in the bar. Everything else stays on the page and out of
     the navigation, because a bar listing twenty sections indexes nothing. The
     tests are patterns rather than exact tags, so the same bar works on a page
     whose sections are called "Types of meta-analysis we offer". */
  const KEEP = [
    /* FAQ is tested first: a page called "Standards alignment" has a section
       called "Standards alignment FAQs", which otherwise matches the standards
       rule and leaves the page one pill short of getting a bar at all. */
    [/\bfaqs?\b|^common questions|^questions\b/i,   'FAQ'],
    /* Academy and Insights are organised by category rather than by the
       service-page sections below, so their tags are matched here - before
       the generic rules, because "Publishing and compliance" would otherwise
       be caught by the compliance rule and "How we source this" by ^how. */
    [/^writing skills/i,                            'Writing'],
    [/^reading skills/i,                            'Reading'],
    [/^interpreting skills/i,                       'Interpreting'],
    [/^publishing and compliance/i,                 'Publishing'],
    [/^courses$/i,                                  'Courses'],
    [/^inside the lab/i,                            'Inside the lab'],
    [/^regulatory$/i,                               'Regulatory'],
    [/^latest research/i,                           'Latest research'],
    [/^(academy|insights) by service/i,             'By service'],
    [/^browse by category/i,                        'Categories'],
    [/^search everything$|^search the library$/i,   'Search'],
    [/^browse by resource/i,                        'Resources'],
    [/^sub-topics/i,                                'Sub-topics'],
    [/^still being written/i,                       'In preparation'],
    [/^everything in /i,                            'All resources'],
    [/^other categories/i,                          'Other categories'],
    /* the three hubs are organised by their own categories rather than by the
       service-page sections, so those tags are matched here too. The two
       "which list?" sections are tested before the plural "therapy areas". */
    [/area or (subject|therapy) area/i,             'Which list?'],
    [/^therapeutic products/i,                      'Therapeutic products'],
    [/^research and diagnostics/i,                  'Research & diagnostics'],
    [/^health systems/i,                            'Health systems'],
    [/^therapy areas/i,                             'Therapy areas'],
    [/^clinical areas/i,                            'Clinical areas'],
    [/^the register$/i,                             'The register'],
    [/^how we source/i,                             'How we source'],
    [/^(academy or insights|insights or academy)/i, 'Which one?'],
    /* "What we offer" is the types of review, which is part of what we do
       rather than a second thing; it stays on the page and out of the bar. */
    [/^what we do\b|^what you get$/i,                'What we do'],
    [/who we serve|who asks/i,                      'Who we serve'],
    [/^how\b/i,                                     'How it works'],
    [/^services for this sector/i,                  'Services'],
    [/compliance|guideline standards|^standards\b/i,'Our compliance'],
    [/^our experts|^the team\b|^who will work/i,     'Our experts'],
    [/^sample work/i,                               'Sample work'],
    [/guarantee/i,                                  'Guarantee'],
    [/^packages\b|^pricing\b|^plans\b|^scope and quote$/i, 'Packages'],
    [/in their words|client stor|testimonial/i,      'Client stories']
  ];
  function label(t){
    t = t.replace(/\s*\u2014.*$/, '').trim();
    for(let i = 0; i < KEEP.length; i++){ if(KEEP[i][0].test(t)) return KEEP[i][1]; }
    return null;
  }
  /* Truncating at 40 characters collided on the longer routes: six sections
     of one subject page all slugged to the same id, which breaks the anchors
     the bar exists to provide. Keep the cap, and add a short hash of the full
     text so two different headings cannot land on one id. */
  function slug(t){
    const s = t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    let hsh = 0;
    for(let i = 0; i < s.length; i++){ hsh = ((hsh << 5) - hsh + s.charCodeAt(i)) | 0; }
    return 'pn-' + s.slice(0,40) + '-' + (hsh >>> 0).toString(36);
  }

  let io = null;

  function build(){
    const v = Array.from(document.querySelectorAll('.view')).filter(function(x){ return !x.hidden; })[0];
    if(io){ io.disconnect(); io = null; }
    /* bars from views rendered earlier in the session, which would otherwise
       pile up hidden in the document and be serialised into the static build */
    document.querySelectorAll('.view > .pagenav').forEach(function(n){ n.remove(); });
    if(!v) return;

    const secs = Array.from(v.querySelectorAll(':scope > section'));
    if(secs.length < 6) return;
    /* .phero is the service-page hero. The home page has its own navigation and
       does not want a second bar under it. */
    if(!secs[0].classList.contains('phero')) return;

    const items = [];
    const seen = {};
    secs.forEach(function(s){
      const t = s.querySelector('.shead__tag');
      if(!t) return;
      const text = label(t.textContent.trim());
      if(!text) return;
      if(seen[text]) return;                        // two Packages bars, one pill
      seen[text] = 1;
      if(!s.id) s.id = slug((v.dataset.route || '') + ' ' + text);
      s.setAttribute('data-pn','');
      items.push([s.id, text, s]);
    });
    if(items.length < 4) return;

    const nav = document.createElement('nav');
    nav.className = 'pagenav';
    nav.setAttribute('aria-label','On this page');
    const inr = document.createElement('div');
    inr.className = 'wrap pagenav__in';
    items.forEach(function(it){
      const a = document.createElement('a');
      a.href = '#' + it[0];
      a.textContent = it[1];
      inr.appendChild(a);
    });
    nav.appendChild(inr);
    /* immediately above the first section the bar points at, which puts it
       below the hero and the strips that belong to the hero rather than
       cutting between them */
    items[0][2].insertAdjacentElement('beforebegin', nav);

    /* Scroll on click rather than letting the href change the URL. A fragment
       click pushes a history entry and fires popstate, so ten pills would put
       ten steps behind the Back button; and the scroll-margin that clears the
       dock is applied either way. */
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    inr.addEventListener('click', function(e){
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if(!el) return;
      e.preventDefault();
      e.stopPropagation();
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block:'start' });
      mark(el.id);
      /* a keyboard user should land in the section, not back at the bar */
      el.setAttribute('tabindex','-1');
      el.focus({ preventScroll:true });
    });

    function fade(){ nav.classList.toggle('is-scroll', inr.scrollWidth > inr.clientWidth + 4); }
    fade();
    window.addEventListener('resize', fade, { passive:true });

    /* scroll spy: the topmost section crossing the line under the bar wins */
    const links = Array.from(inr.querySelectorAll('a'));
    function mark(id){
      links.forEach(function(a){
        if(a.getAttribute('href') === '#' + id) a.setAttribute('aria-current','true');
        else a.removeAttribute('aria-current');
      });
      /* keep the active pill in view in the scroller, without moving the page */
      const on = inr.querySelector('a[aria-current]');
      if(on){
        const l = on.offsetLeft, r = l + on.offsetWidth;
        if(l < inr.scrollLeft + 12) inr.scrollTo({ left:Math.max(0, l - 18), behavior:'smooth' });
        else if(r > inr.scrollLeft + inr.clientWidth - 12)
          inr.scrollTo({ left:r - inr.clientWidth + 18, behavior:'smooth' });
      }
    }
    if('IntersectionObserver' in window){
      const vis = {};
      io = new IntersectionObserver(function(es){
        es.forEach(function(e){ vis[e.target.id] = e.isIntersecting; });
        for(let i = 0; i < items.length; i++){
          const next = items[i + 1];
          if(vis[items[i][0]] && (!next || !vis[next[0]])){ mark(items[i][0]); return; }
        }
        for(let i = items.length - 1; i >= 0; i--){ if(vis[items[i][0]]){ mark(items[i][0]); return; } }
      }, { rootMargin:'-' + (0) + 'px 0px -62% 0px' });
      items.forEach(function(it){ io.observe(it[2]); });
    }
    mark(items[0][0]);
  }

  window.__pagenavBuild = build;
  build();
})();

/* Served from a sub-path (GitHub Pages project site)? Every root-relative link
   and image is then one segment short, so prefix them here, now and as the page
   builds more of them. BASE is '' anywhere else and all of this is a no-op. */
const BASE = /^\/pubrica-New(\/|$)/.test(location.pathname) ? '/pubrica-New' : '';
(function basePrefix(){
  if(!BASE) return;
  function pre(v){ return (v && v.charAt(0) === '/' && v.charAt(1) !== '/' && v.indexOf(BASE + '/') !== 0 && v !== BASE) ? BASE + v : null; }
  function fix(root){
    root.querySelectorAll('a[href^="/"], img[src^="/"], link[href^="/"], source[src^="/"]').forEach(function(el){
      const attr = el.hasAttribute('href') ? 'href' : 'src';
      const n = pre(el.getAttribute(attr));
      if(n) el.setAttribute(attr, n);
    });
  }
  let queued = false;
  new MutationObserver(function(){
    if(queued) return; queued = true;
    requestAnimationFrame(function(){ queued = false; fix(document); });
  }).observe(document.documentElement, { childList:true, subtree:true });
  fix(document);
})();

(function router(){
  const views = Array.from(document.querySelectorAll('.view'));
  if(!views.length) return;

  // Real URLs are the source of truth. The hash still works, so the page routes when
  // opened straight off disk (file://) with no server to rewrite paths, and so any
  // #/route link already published elsewhere keeps working.
  function norm(u){
    u = String(u || '');
    if(BASE && (u === BASE || u.indexOf(BASE + '/') === 0)) u = u.slice(BASE.length);
    return ('/' + u.replace(/^\/+|\/+$/g, '') + '/').replace('//','/');
  }
  const BY_PATH = {};
  Object.keys(ROUTES).forEach(function(r){ BY_PATH[norm(ROUTES[r].path)] = r; });
  /* Real URLs are used only when this document is actually being served at one of
     them. Opened from disk, from a preview host, or from /index.html, the path is
     not a route and rewriting it would produce a URL that 404s on reload — so the
     hash carries the route instead. */
  const PATH_IS_ROUTE = BY_PATH[norm(location.pathname)] !== undefined;
  const HASH_MODE = location.protocol === 'file:' || !PATH_IS_ROUTE;

  function routeFromLocation(){
    const h = location.hash;
    if(h && h.indexOf('#/') === 0 && ROUTES[h.slice(1)]) return h.slice(1);
    const byPath = BY_PATH[norm(location.pathname)];
    if(byPath) return byPath;
    return '/';
  }

  function hrefFor(r){ return HASH_MODE ? ('#' + r) : BASE + ROUTES[r].path; }

  function render(r){
    if(!ROUTES[r]) r = '/';

    // Each Next route renders exactly one view and it carries no data-route;
    // only the multi-view static build needs the show/hide switching.
    if(views.length > 1) views.forEach(function(v){ v.hidden = v.dataset.route !== r; });
    else views[0].hidden = false;
    setMeta(r);

    document.querySelectorAll('[data-nav]').forEach(function(a){
      const h = a.getAttribute('href') || '';
      if(h === ROUTES[r].path || h === BASE + ROUTES[r].path || h === '#' + r) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });

    // leaving a view should not leave a menu open behind you
    const drawer = document.getElementById('drawer');
    const scrim  = document.getElementById('scrim');
    const burger = document.getElementById('burger');
    if(drawer) drawer.classList.remove('is-open');
    if(scrim)  scrim.classList.remove('is-on');
    if(burger) burger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    document.querySelectorAll('[data-mega]').forEach(function(i){
      i.classList.remove('is-open');
      const btn = i.querySelector('.nav__link');
      if(btn) btn.setAttribute('aria-expanded','false');
    });

    window.scrollTo(0,0);
    if(window.__revealScan) window.__revealScan();
    if(window.__secbarScan) window.__secbarScan();
    if(window.__secbarCurrent) window.__secbarCurrent();
    if(window.__secbarDrops) window.__secbarDrops();
    if(window.__pagenavBuild) window.__pagenavBuild();
    if(window.__articleToc) window.__articleToc();
    if(window.__libScan) window.__libScan();
    if(window.__regScan) window.__regScan();
    if(window.__careersWire) window.__careersWire();
    if(window.__insightsWire) window.__insightsWire();
  }

  // Route in JS rather than letting the browser follow the href. Some embedded
  // previews treat any href change as leaving the document and interrupt with a
  // confirmation dialog; this keeps navigation inside the page.
  function navigate(r){
    // If the History API is unavailable (some sandboxed embeds), route anyway
    // and simply leave the address bar alone rather than forcing a navigation.
    try{
      history.pushState({ r:r }, '', hrefFor(r));
    }catch(err){
      if(HASH_MODE){ try{ location.hash = r; }catch(e2){} }
    }
    render(r);
  }

  document.addEventListener('click', function(e){
    if(e.defaultPrevented || e.button !== 0) return;
    if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // Any link whose href resolves to a route we hold a view for is handled in
    // page, whether or not it was marked data-nav. Marking every link by hand is
    // a step that gets forgotten, and forgetting it sends the reader out of the
    // document — which in an embedded preview means a leaving-the-site prompt.
    const a = e.target.closest('a[href]');
    if(!a) return;
    if(a.hasAttribute('download')) return;
    const tgt = a.getAttribute('target');
    if(tgt && tgt !== '_self') return;
    const href = a.getAttribute('href') || '';
    let r = null;
    if(href.indexOf('#/') === 0 && ROUTES[href.slice(1)]) r = href.slice(1);
    else if(href.charAt(0) === '/' && href.charAt(1) !== '/'){
      r = BY_PATH[norm(href.split('#')[0].split('?')[0])];
    }
    if(!r) return;                       // a genuine outbound link — let the browser have it
    // Statically built pages carry only their own view; anything else is a real
    // page on the server, so fall through and let the browser navigate to it.
    if(!document.querySelector('.view[data-route="' + r + '"]')) return;
    e.preventDefault();
    navigate(r);
  });

  /* An in-page anchor such as #sample-size is a jump inside the current view,
     not a route change. Re-rendering on it would scroll the reader back to the
     top of the page, or - in hash mode - drop them on the home view.
     Chromium fires BOTH hashchange and popstate for a fragment click, so the
     same guard has to sit on both; on popstate alone it did not, which is why
     every anchor link on the site landed the reader on the home view. */
  function isAnchorJump(){
    const h = location.hash;
    if(!h || h.indexOf('#/') === 0) return false;
    const el = document.getElementById(h.slice(1));
    if(!el) return false;
    /* only an anchor inside the view already on screen is a jump. Going Back
       from one route to an anchor of another is a route change, and treating it
       as a jump would leave the reader on the wrong page. */
    const v = el.closest('.view');
    return !v || !v.hidden;
  }
  window.addEventListener('popstate',   function(){
    if(isAnchorJump()) return;
    render(routeFromLocation());
  });
  window.addEventListener('hashchange', function(){
    if(isAnchorJump()) return;
    render(routeFromLocation());
  });

  render(routeFromLocation());
})();

/* in-view scroll buttons (kept off the hash so they cannot fight the router) */
(function scrollTo(){
  document.addEventListener('click', function(e){
    const t = e.target.closest('[data-scroll]');
    if(!t) return;
    const el = document.getElementById(t.dataset.scroll);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior:'smooth', block:'start' });
  });
})();

/* ============================================================
   Mega menu rail
   ============================================================ */
(function megaRail(){
  const rails = Array.from(document.querySelectorAll('.mrail'));
  if(!rails.length) return;
  function select(idx){
    rails.forEach(function(r,i){
      const on = i===idx;
      r.setAttribute('aria-selected', on);
      r.tabIndex = on ? 0 : -1;
      document.getElementById(r.getAttribute('aria-controls')).hidden = !on;
    });
  }
  rails.forEach(function(r,i){
    r.addEventListener('mouseenter', function(){ select(i); });
    r.addEventListener('focus', function(){ select(i); });
    r.addEventListener('click', function(e){
      e.preventDefault();
      const panel = document.getElementById(r.getAttribute('aria-controls'));
      select(i);
      const first = panel.querySelector('a');
      if(first) first.focus();
    });
    r.addEventListener('keydown', function(e){
      var n = null;
      if(e.key==='ArrowDown') n = (i+1)%rails.length;
      if(e.key==='ArrowUp')   n = (i-1+rails.length)%rails.length;
      if(e.key==='Home') n = 0;
      if(e.key==='End')  n = rails.length-1;
      if(n!==null){ e.preventDefault(); select(n); rails[n].focus(); }
    });
  });
})();

/* ============================================================
   Instant estimate
   ============================================================ */
const EST_RATES = {
  copy:  { lo:0.050, hi:0.070, min:120, days:6,  label:'language and copy editing' },
  sub:   { lo:0.080, hi:0.110, min:220, days:6,  label:'substantive scientific editing' },
  peer:  { lo:0.100, hi:0.140, min:350, days:9,  label:'pre-submission peer review' },
  write: { lo:0.180, hi:0.260, min:900, days:15, label:'manuscript writing' },
  stats: { lo:0,     hi:0,     min:480, days:12, label:'statistical analysis' }
};
const EST_SPEED = { std:{ m:1,    d:1,   name:'standard' },
                    exp:{ m:1.35, d:.55, name:'express' },
                    urg:{ m:1.75, d:.3,  name:'urgent' } };

(function estimator(){
  const svc = document.getElementById('estService');
  const wds = document.getElementById('estWords');
  const spd = document.getElementById('estSpeed');
  const fig = document.getElementById('estFig');
  const sub = document.getElementById('estSub');
  if(!svc || !wds || !spd) return;

  function addBusinessDays(n){
    const d = new Date(); let left = Math.max(1, Math.round(n));
    while(left > 0){ d.setDate(d.getDate()+1); const w = d.getDay(); if(w!==0 && w!==6) left--; }
    return d.toLocaleDateString('en-GB', { day:'numeric', month:'short' });
  }
  function run(){
    const r = EST_RATES[svc.value], sp = EST_SPEED[spd.value];
    const w = Math.max(500, Math.min(200000, +wds.value || 0));
    const days = Math.max(2, Math.round(r.days * sp.d));

    if(svc.value === 'stats'){
      fig.textContent = 'From ' + fmt(r.min * sp.m);
      sub.textContent = 'Statistical work is scoped against the analysis plan rather than word count. Indicative ' + sp.name + ' turnaround: about ' + days + ' business days, around ' + addBusinessDays(days) + '.';
      return;
    }
    const lo = Math.max(r.min, w * r.lo) * sp.m;
    const hi = Math.max(r.min * 1.4, w * r.hi) * sp.m;
    fig.textContent = fmt(lo) + ' – ' + fmt(hi);
    sub.textContent = w.toLocaleString('en-GB') + ' words, ' + r.label + ', ' + sp.name + ' turnaround — about ' + days + ' business days, so roughly ' + addBusinessDays(days) + '.';
  }
  function fmt(n){ return '$' + (Math.round(n/10)*10).toLocaleString('en-GB'); }

  [svc, wds, spd].forEach(function(el){
    el.addEventListener('input', run);
    el.addEventListener('change', run);
  });
  run();
})();

/* ============================================================
   Reasoning flow
   ============================================================ */
(function reasoningFlow(){
  const root = document.querySelector('[data-flow]');
  if(!root) return;
  const steps = Array.from(root.querySelectorAll('[data-step]'));
  if(!steps.length) return;

  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    steps.forEach(function(s){ s.classList.add('on'); });
    return;
  }

  const BEAT = 480, HOLD = 2800;
  let timers = [], running = false;

  function cycle(){
    timers.forEach(clearTimeout); timers = [];
    steps.forEach(function(s){ s.classList.remove('on'); });
    steps.forEach(function(s,i){
      timers.push(setTimeout(function(){ s.classList.add('on'); }, 320 + i*BEAT));
    });
    timers.push(setTimeout(cycle, 320 + steps.length*BEAT + HOLD));
  }

  // only run while it is actually on screen
  new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
      if(!running){ running = true; cycle(); }
    } else if(running){
      running = false;
      timers.forEach(clearTimeout); timers = [];
    }
  }, { threshold:.25 }).observe(root);
})();

/* ============================================================
   Announcement bar
   ============================================================ */
(function promobar(){
  const bar = document.getElementById('promobar');
  const x   = document.getElementById('promobarX');
  if(!bar || !x) return;
  var KEY = 'pubrica.promo.v1';
  try{ if(localStorage.getItem(KEY) === 'off') bar.classList.add('is-gone'); }catch(e){}
  x.addEventListener('click', function(){
    bar.classList.add('is-gone');
    try{ localStorage.setItem(KEY,'off'); }catch(e){}
  });
})();

/* ============================================================
   Search overlay
   ============================================================ */
(function search(){
  const btn = document.getElementById('searchBtn');
  const box = document.getElementById('search');
  const input = document.getElementById('searchInput');
  if(!btn || !box) return;
  function open(){
    box.classList.add('is-open');
    btn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    setTimeout(function(){ input.focus(); }, 120);
  }
  function shut(){
    box.classList.remove('is-open');
    btn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    btn.focus();
  }
  btn.addEventListener('click', open);
  box.addEventListener('click', function(e){ if(e.target === box) shut(); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && box.classList.contains('is-open')) shut();
  });
})();

/* ============================================================
   Testimonials
   ============================================================ */
(function quotes(){
  document.querySelectorAll('.tcard').forEach(function(root){
  const slides = Array.from(root.querySelectorAll('.quote__slide'));
  if(!slides.length) return;
  let i = 0;
  function show(n){
    i = (n + slides.length) % slides.length;
    slides.forEach(function(s,x){ s.hidden = x!==i; });
  }
  const prev = root.querySelector('[data-q="prev"]'), next = root.querySelector('[data-q="next"]');
  if(prev) prev.addEventListener('click', function(){ show(i-1); });
  if(next) next.addEventListener('click', function(){ show(i+1); });
  });
})();

/* ============================================================
   Header state + floating CTA
   ============================================================ */
(function chrome(){
  const dock   = document.getElementById('dock');
  const float  = document.getElementById('float');
  const footer = document.querySelector('.footer');
  let footerNear = false;

  if('IntersectionObserver' in window && footer){
    new IntersectionObserver(function(es){
      footerNear = es[0].isIntersecting;
      onScroll();
    }, { rootMargin:'0px 0px -20% 0px' }).observe(footer);
  }
  function onScroll(){
    const y = window.scrollY;
    dock.classList.toggle('is-stuck', y > 40);
    float.classList.toggle('is-on', y > 900 && !footerNear);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
})();

/* ---- reviewer thread: comment and manuscript span stay in sync ---- */
(function reviewerThread(){
  const root = document.querySelector('[data-rvw]');
  if(!root) return;
  const cmts = Array.from(root.querySelectorAll('.cmt'));
  const marks = Array.from(root.querySelectorAll('.mk'));
  function focus(id){
    cmts.forEach(function(c){ c.classList.toggle('is-on', c.dataset.cmt === id); });
    marks.forEach(function(m){ m.classList.toggle('is-on', m.dataset.mk === id); });
    const m = marks.find(function(x){ return x.dataset.mk === id; });
    if(m){
      const cls = { crit:'', major:'cmt--major', minor:'cmt--minor' };
      const c = cmts.find(function(x){ return x.dataset.cmt === id; });
      // borrow the comment's accent so the highlight matches its severity
      if(c) m.style.cssText = '--acc:' + getComputedStyle(c).getPropertyValue('--acc') +
                              ';--acc-wash:' + getComputedStyle(c).getPropertyValue('--acc-wash');
    }
  }
  cmts.forEach(function(c){ c.addEventListener('click', function(){ focus(c.dataset.cmt); }); });
  marks.forEach(function(m){
    m.addEventListener('click', function(){ focus(m.dataset.mk); });
    m.tabIndex = 0;
    m.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); focus(m.dataset.mk); } });
  });
  focus('c1');
})();

/* ---- similarity viewer: sources, matched spans and the AI screen ---- */
(function similarityViewer(){
  const root = document.querySelector('[data-sim]');
  if(!root) return;
  const doc  = root.querySelector('.sim__doc');
  const srcs = Array.from(root.querySelectorAll('.src'));
  const spans= Array.from(root.querySelectorAll('.sm'));
  const pct  = root.querySelector('[data-simpct]');
  const lab  = root.querySelector('[data-simlab]');
  const VIEW = {
    sim: { pct:'14%', head:'Overall similarity', sub:'Across 3 matched sources. Methods and references excluded from the count.' },
    ai:  { pct:'6%',  head:'Flagged for AI authorship', sub:'One passage, reviewed by an editor before it reached this report.' }
  };
  function setView(v){
    doc.dataset.view = v;
    root.querySelectorAll('.sim__tg').forEach(function(t){ t.setAttribute('aria-pressed', String(t.dataset.v === v)); });
    srcs.forEach(function(s){ s.hidden = (v === 'ai') !== s.classList.contains('src--ai'); });
    pct.textContent = VIEW[v].pct;
    lab.innerHTML = '<b>' + VIEW[v].head + '</b>' + VIEW[v].sub;
    focus(null);
  }
  function focus(id){
    srcs.forEach(function(s){ s.classList.toggle('is-on', !!id && s.dataset.src === id); });
    spans.forEach(function(m){ m.classList.toggle('is-on', !!id && m.dataset.sm === id); });
  }
  root.querySelectorAll('.sim__tg').forEach(function(t){
    t.addEventListener('click', function(){ setView(t.dataset.v); });
  });
  srcs.forEach(function(s){ s.addEventListener('click', function(){ focus(s.dataset.src); }); });
  spans.forEach(function(m){
    m.tabIndex = 0;
    m.addEventListener('click', function(){ if(!m.closest('[data-view]')) return; focus(m.dataset.sm); });
    m.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); focus(m.dataset.sm); } });
  });
  setView('sim');
})();

/* ---- spec switcher: the same manuscript against three journal templates ---- */
(function specSwitcher(){
  const root = document.querySelector('[data-spec]');
  if(!root) return;
  const doc = root.querySelector('.spec__doc');
  const J = {
    a: { name:'Vancouver, numbered',
         ttl:'Clinical outcomes of a minimally invasive approach in complex abdominal conditions',
         au:'Sharma A, Lee B, Martinez C, Nguyen D',
         af:'1 Department of Surgery, Central University Hospital, London, UK',
         head:'Methods', cite:'[7]',
         ref:'7. Halvorsen P, Chen J, Martinez C. Outcomes of minimally invasive surgery in complex abdominal disease. Lancet. 2022;399(10328):845–53.',
         spec:{ 'Word limit':'3,500 <i>excluding references</i>', 'Abstract':'250 words, structured',
                'References':'Vancouver, numbered, max 40', 'Headings':'Methods, not Materials and Methods',
                'Figures':'TIFF, 300 dpi, separate files', 'Submission':'DOCX manuscript, figures uploaded separately' } },
    b: { name:'APA, author–date',
         ttl:'Clinical Outcomes of a Minimally Invasive Approach in Complex Abdominal Conditions',
         au:'Sharma, A., Lee, B., Martinez, C., & Nguyen, D.',
         af:'Department of Surgery, Central University Hospital, London, United Kingdom',
         head:'Method', cite:'(Halvorsen et al., 2022)',
         ref:'Halvorsen, P., Chen, J., &amp; Martinez, C. (2022). Outcomes of minimally invasive surgery in complex abdominal disease. <i>The Lancet, 399</i>(10328), 845–853.',
         spec:{ 'Word limit':'5,000 <i>including references</i>', 'Abstract':'200 words, unstructured',
                'References':'APA 7th, author–date, no cap', 'Headings':'Method, singular, APA level system',
                'Figures':'Embedded at first mention, 300 dpi', 'Submission':'Single DOCX, figures in place' } },
    c: { name:'Harvard, author–date',
         ttl:'Clinical outcomes of a minimally invasive approach in complex abdominal conditions',
         au:'Sharma, A., Lee, B., Martinez, C. and Nguyen, D.',
         af:'Department of Surgery, Central University Hospital, London, UK',
         head:'Materials and methods', cite:'(Halvorsen, Chen and Martinez, 2022)',
         ref:'Halvorsen, P., Chen, J. and Martinez, C. (2022) ‘Outcomes of minimally invasive surgery in complex abdominal disease’, <i>The Lancet</i>, 399(10328), pp. 845–853.',
         spec:{ 'Word limit':'4,000 <i>excluding abstract</i>', 'Abstract':'300 words, structured',
                'References':'Harvard, author–date, max 60', 'Headings':'Materials and methods, sentence case',
                'Figures':'EPS or TIFF, 600 dpi for line art', 'Submission':'DOCX plus a combined PDF' } }
  };
  const list = root.querySelector('[data-speclist]');
  function set(k){
    const j = J[k];
    root.querySelectorAll('.spec__tg').forEach(function(t){ t.setAttribute('aria-pressed', String(t.dataset.j === k)); });
    doc.classList.add('is-swap');
    setTimeout(function(){
      doc.querySelector('[data-fmt="ttl"]').textContent = j.ttl;
      doc.querySelector('[data-fmt="au"]').textContent  = j.au;
      doc.querySelector('[data-fmt="af"]').textContent  = j.af;
      doc.querySelector('[data-fmt="head"]').textContent = j.head;
      doc.querySelector('[data-fmt="cite"]').textContent = j.cite;
      doc.querySelector('[data-fmt="ref"]').innerHTML   = j.ref;
      list.innerHTML = Object.keys(j.spec).map(function(key){
        return '<div class="spec__row"><dt>' + key + '</dt><dd>' + j.spec[key] + '</dd></div>';
      }).join('');
      doc.classList.remove('is-swap');
    }, 200);
  }
  root.querySelectorAll('.spec__tg').forEach(function(t){
    t.addEventListener('click', function(){ set(t.dataset.j); });
  });
  set('a');
})();

/* ---- editorial tracker: stage detail, and a rail that fills to the stage ---- */
(function editorialTracker(){
  const root = document.querySelector('[data-trk]');
  if(!root) return;
  const rail  = root.querySelector('.trk__rail');
  const steps = Array.from(root.querySelectorAll('.trk__st'));
  const panel = root.querySelector('[data-trkpanel]');
  const DATA = JSON.parse(root.querySelector('[data-trkdata]').textContent);
  function show(i){
    steps.forEach(function(s, n){
      s.classList.toggle('is-on', n === i);
      s.classList.toggle('is-done', n < i);
      s.setAttribute('aria-pressed', String(n === i));
    });
    const railBox = rail.getBoundingClientRect();
    if(railBox.height > 0){
    const mid = function(n){
      const b = steps[n].querySelector('.trk__dot').getBoundingClientRect();
      return b.top + b.height / 2 - railBox.top;
    };
    const first = mid(0), last = mid(steps.length - 1);
    rail.style.setProperty('--rtop', first + 'px');
    rail.style.setProperty('--rbot', Math.max(0, railBox.height - last) + 'px');
    rail.style.setProperty('--prog', Math.max(0, mid(i) - first) + 'px');
    }
    const d = DATA[i];
    panel.innerHTML =
      '<p class="trk__k">Stage ' + (i + 1) + ' of ' + DATA.length + '</p>' +
      '<h3 class="trk__h">' + d.h + '</h3>' +
      '<p class="trk__p">' + d.p + '</p>' +
      '<div class="trk__split">' +
        '<div class="trk__col trk__col--us"><p class="trk__lab">Pubrica does</p><ul class="trk__list">' +
          d.us.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
        '<div class="trk__col trk__col--you"><p class="trk__lab">You do</p><ul class="trk__list">' +
          d.you.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +
      '<p class="trk__time"><b>Typically:</b> ' + d.t + '</p>';
  }
  const narrow = window.matchMedia('(max-width: 979px)');
  steps.forEach(function(s, i){
    s.addEventListener('click', function(){
      show(i);
      /* stacked layout puts the detail below all eight stages, so bring it into
         view rather than leaving the reader wondering whether anything happened */
      if(narrow.matches) panel.scrollIntoView({ block:'nearest', behavior:'smooth' });
    });
  });
  show(0);
  const remeasure = function(){
    const cur = steps.findIndex(function(s){ return s.classList.contains('is-on'); });
    if(cur > -1) show(cur);
  };
  window.addEventListener('resize', remeasure);
  /* the view starts hidden, so every box measures zero; the observer fires the
     moment it is unhidden on route change and the rail can be placed properly */
  if(window.ResizeObserver) new ResizeObserver(remeasure).observe(rail);
})();

/* ---- response workbench: swap between kinds of reviewer comment ---- */
(function responseWorkbench(){
  const root = document.querySelector('[data-rsp]');
  if(!root) return;
  const tgs  = Array.from(root.querySelectorAll('.rsp__tg'));
  const card = root.querySelector('[data-rspcard]');
  const DATA = JSON.parse(root.querySelector('[data-rspdata]').textContent);
  function show(i){
    tgs.forEach(function(t, n){ t.setAttribute('aria-pressed', String(n === i)); });
    const d = DATA[i];
    card.innerHTML =
      '<div class="rsp__cmt">' +
        '<p class="rsp__k"><b>' + d.who + '</b><span>' + d.grade + '</span></p>' +
        '<p class="rsp__q">&ldquo;' + d.comment + '&rdquo;</p>' +
        '<p class="rsp__read"><b>What is actually being asked:</b> ' + d.read + '</p>' +
      '</div>' +
      '<div class="rsp__pair">' +
        '<div class="rsp__side rsp__side--bad">' +
          '<p class="rsp__lab"><i>&#10007;</i>The reply that loses papers</p>' +
          '<p class="rsp__txt">' + d.bad + '</p>' +
          '<p class="rsp__why">' + d.badWhy + '</p>' +
        '</div>' +
        '<div class="rsp__side rsp__side--good">' +
          '<p class="rsp__lab"><i>&#10003;</i>The reply that works</p>' +
          '<p class="rsp__txt">' + d.good + '</p>' +
          '<p class="rsp__why">' + d.goodWhy + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="rsp__edit">' +
        '<p class="rsp__el">And in the manuscript</p>' +
        '<p class="rsp__et">' + d.edit + '</p>' +
      '</div>';
    if(window.__revealScan) window.__revealScan();
    if(window.__secbarScan) window.__secbarScan();
    if(window.__secbarCurrent) window.__secbarCurrent();
    if(window.__secbarDrops) window.__secbarDrops();
  }
  tgs.forEach(function(t, i){ t.addEventListener('click', function(){ show(i); }); });
  show(0);
})();

/* ---- figure workbench: apply one fault to the left-hand copy, explain it on the right ---- */
(function figureWorkbench(){
  const root = document.querySelector('[data-figw]');
  if(!root) return;
  const tgs  = Array.from(root.querySelectorAll('.figw__tg'));
  const pair = root.querySelector('.figw__pair');
  const spec = root.querySelector('[data-figspec]');
  const DATA = JSON.parse(root.querySelector('[data-figdata]').textContent);
  const CLS  = DATA.map(function(d){ return 'fault-' + d.cls; });
  function show(i){
    tgs.forEach(function(t, n){ t.setAttribute('aria-pressed', String(n === i)); });
    CLS.forEach(function(c){ pair.classList.remove(c); });
    pair.classList.add(CLS[i]);
    const d = DATA[i];
    spec.innerHTML =
      '<p class="figw__k">Fault ' + (i + 1) + ' of ' + DATA.length + '</p>' +
      '<h3 class="figw__h">' + d.h + '</h3>' +
      '<p class="figw__p">' + d.p + '</p>' +
      '<div class="figw__rows">' +
        '<div class="figw__row figw__row--req"><p class="figw__rk">Journal asks</p><p class="figw__rv">' + d.req + '</p></div>' +
        '<div class="figw__row figw__row--sup"><p class="figw__rk">Typically sent</p><p class="figw__rv">' + d.sup + '</p></div>' +
        '<div class="figw__row figw__row--fix"><p class="figw__rk">What we do</p><p class="figw__rv">' + d.fix + '</p></div>' +
      '</div>';
  }
  tgs.forEach(function(t, i){ t.addEventListener('click', function(){ show(i); }); });
  show(0);
})();

/* ---- poster canvas: switch layout, and step back two metres ---- */
(function posterCanvas(){
  const root = document.querySelector('[data-pst]');
  if(!root) return;
  const tgs   = Array.from(root.querySelectorAll('.pst__tg:not(.pst__dist)'));
  const dist  = root.querySelector('.pst__dist');
  const board = root.querySelector('[data-pstboard]');
  const spec  = root.querySelector('[data-pstspec]');
  const DATA  = JSON.parse(root.querySelector('[data-pstdata]').textContent);
  const MODS  = DATA.map(function(d){ return 'pst--' + d.cls; });
  function show(i){
    tgs.forEach(function(t, n){ t.setAttribute('aria-pressed', String(n === i)); });
    MODS.forEach(function(m){ board.classList.remove(m); });
    board.classList.add(MODS[i]);
    board.innerHTML = DATA[i].board;
    const d = DATA[i];
    spec.innerHTML =
      '<p class="pst__k">Layout ' + (i + 1) + ' of ' + DATA.length + '</p>' +
      '<h3 class="pst__hd">' + d.h + '</h3>' +
      '<p class="pst__lede">' + d.p + '</p>' +
      '<div class="pst__rows">' +
        '<div class="pst__row pst__row--a"><p class="pst__rk">Type sizes</p><p class="pst__rv">' + d.type + '</p></div>' +
        '<div class="pst__row pst__row--b"><p class="pst__rk">Word count</p><p class="pst__rv">' + d.words + '</p></div>' +
        '<div class="pst__row pst__row--c"><p class="pst__rk">Reads at two metres</p><p class="pst__rv">' + d.far + '</p></div>' +
      '</div>';
  }
  tgs.forEach(function(t, i){ t.addEventListener('click', function(){ show(i); }); });
  dist.addEventListener('click', function(){
    const on = root.classList.toggle('is-far');
    dist.setAttribute('aria-pressed', String(on));
    dist.textContent = on ? 'Back to arm’s length' : 'View from two metres';
  });
  show(0);
})();

/* ---- storyboard: step through the beats of a two-and-a-half-minute abstract ---- */
(function storyboard(){
  const root = document.querySelector('[data-vab]');
  if(!root) return;
  const beats  = Array.from(root.querySelectorAll('.vab__beat'));
  const screen = root.querySelector('[data-vabscreen]');
  const panel  = root.querySelector('[data-vabpanel]');
  const DATA   = JSON.parse(root.querySelector('[data-vabdata]').textContent);
  function show(i){
    beats.forEach(function(b, n){ b.setAttribute('aria-pressed', String(n === i)); });
    const d = DATA[i];
    screen.innerHTML = d.screen +
      '<div class="vab__subs"><span>' + d.sub + '</span></div>';
    panel.innerHTML =
      '<p class="vab__k">Beat ' + (i + 1) + ' of ' + DATA.length + '</p>' +
      '<h3 class="vab__h">' + d.h + '</h3>' +
      '<p class="vab__time"><b>' + d.from + ' &ndash; ' + d.to + '</b> &middot; ' + d.secs + ' seconds &middot; about ' + d.words + ' words of voiceover</p>' +
      '<div class="vab__row vab__row--vo"><p class="vab__rk">Voiceover</p>' +
        '<p class="vab__rv vab__rv--q">&ldquo;' + d.vo + '&rdquo;</p></div>' +
      '<div class="vab__row vab__row--sc"><p class="vab__rk">On screen</p>' +
        '<p class="vab__rv">' + d.on + '</p></div>' +
      '<div class="vab__row vab__row--er"><p class="vab__rk">Where this goes wrong</p>' +
        '<p class="vab__rv">' + d.err + '</p></div>';
  }
  beats.forEach(function(b, i){ b.addEventListener('click', function(){ show(i); }); });
  show(0);
})();

/* ---- report mock: switch between the pages of the deliverable ----
   one independent tab set per mock, so several pages can each carry one */
/* ---- the samples under each "what you get" bullet ----
   play down the list once when the section is reached, replay on hover */
(function bulletSamples(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-smpls]').forEach(function(grp){
    var rows = Array.from(grp.querySelectorAll('[data-smpl]'));
    if(!rows.length) return;
    function on(r){ r.classList.remove('is-on'); void r.offsetWidth; r.classList.add('is-on'); }
    if(reduce){ rows.forEach(function(r){ r.classList.add('is-on'); }); return; }
    var done = false;
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting || done) return;
        done = true; io.disconnect();
        rows.forEach(function(r, i){ setTimeout(function(){ on(r); }, i * 380); });
      });
    }, { threshold: .2 });
    io.observe(grp);
    rows.forEach(function(r){
      r.addEventListener('mouseenter', function(){ on(r); });
    });
  });
})();

/* ---- marked-up manuscript: play the edit back, one change at a time ---- */
(function markedUp(){
  document.querySelectorAll('[data-mkup]').forEach(function(box){
    const tabs  = Array.from(box.querySelectorAll('.doc__tab'));
    const segs  = Array.from(box.querySelectorAll('[data-mk-state]'));
    const play  = box.querySelector('[data-mk-play]');
    const count = box.querySelector('[data-mk-count]');
    let timer = null, played = false;

    function pane(){ return box.querySelector('.mkup__pane:not([hidden])'); }
    function steps(){ const p = pane(); return p ? Array.from(p.querySelectorAll('ins[data-mk]')) : []; }
    function prose(){ return steps().length > 0; }
    function notes(){ const p = pane(); return p ? Array.from(p.querySelectorAll('.mkup__note')) : []; }

    function stop(){ if(timer){ clearTimeout(timer); timer = null; } }

    function setCount(){
      if(!count) return;
      const p = pane(); if(!p) return;
      count.innerHTML = prose()
        ? '<b>' + steps().length + '</b> edits &middot; <b>' + notes().length + '</b> comments'
        : '<b>' + notes().length + '</b> changes, each explained';
    }

    function state(on, animate){
      stop();
      box.classList.toggle('is-after', on);
      segs.forEach(function(b){ b.setAttribute('aria-pressed', String((b.dataset.mkState === 'after') === on)); });
      const ins = steps(), nts = notes();
      ins.forEach(function(el){ el.classList.remove('is-on'); });
      if(!on){ nts.forEach(function(n){ n.style.transitionDelay = '0ms'; }); return; }
      if(!animate){
        nts.forEach(function(n){ n.style.transitionDelay = '0ms'; });
        return;
      }
      nts.forEach(function(n){ n.style.transitionDelay = '0ms'; n.style.opacity = '0'; n.style.transform = 'translateY(6px)'; n.classList.remove('is-cur'); });
      if(!ins.length){
        let n = 0;
        (function nextNote(){
          if(n >= nts.length){ nts.forEach(function(x){ x.classList.remove('is-cur'); }); timer = null; return; }
          nts.forEach(function(x){ x.classList.remove('is-cur'); });
          var el = nts[n];
          el.style.opacity = ''; el.style.transform = ''; el.classList.add('is-cur');
          n++;
          timer = setTimeout(nextNote, 620);
        })();
        return;
      }
      let i = 0, note = 0;
      (function next(){
        if(i >= ins.length){
          nts.forEach(function(n){ n.style.opacity = ''; n.style.transform = ''; n.classList.remove('is-cur'); });
          ins.forEach(function(e){ e.classList.remove('is-cur'); });
          timer = null; return;
        }
        const el = ins[i];
        ins.forEach(function(e){ e.classList.remove('is-cur'); });
        el.classList.remove('is-on');
        void el.offsetWidth;
        el.classList.add('is-on', 'is-cur');
        var marked = el.querySelector('.mkup__m');
        var wait = 240;
        if(marked && nts[note]){
          nts.forEach(function(n){ n.classList.remove('is-cur'); });
          var n = nts[note];
          n.style.opacity = ''; n.style.transform = ''; n.classList.add('is-cur');
          note++;
          wait = 560;
        }
        i++;
        timer = setTimeout(next, wait);
      })();
    }

    segs.forEach(function(b){
      b.addEventListener('click', function(){ state(b.dataset.mkState === 'after', false); });
    });
    if(play) play.addEventListener('click', function(){ state(true, true); });

    tabs.forEach(function(t, i){
      t.addEventListener('click', function(){
        tabs.forEach(function(o, n){
          const on = n === i;
          o.setAttribute('aria-selected', String(on));
          o.tabIndex = on ? 0 : -1;
          const pn = document.getElementById(o.getAttribute('aria-controls'));
          if(pn) pn.hidden = !on;
        });
        setCount();
        state(true, true);
      });
    });

    setCount();
    state(true, false);

    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting && !played){
            played = true;
            state(false, false);
            setTimeout(function(){ state(true, true); }, 420);
            io.disconnect();
          }
        });
      }, { threshold:.35 });
      io.observe(box);
    }
  });
})();

(function reportPages(){
  document.querySelectorAll('.doc__tabs').forEach(function(group){
    const tabs = Array.from(group.querySelectorAll('.doc__tab'));
    if(!tabs.length) return;
    const scope  = group.closest('.doc') || document;
    const pageEl = scope.querySelector('[data-docpage]');
    function show(i){
      if(pageEl) pageEl.textContent = 'Page ' + (i + 1) + ' of ' + tabs.length;
      tabs.forEach(function(t, n){
        const on = n === i;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const pane = document.getElementById(t.getAttribute('aria-controls'));
        if(pane) pane.hidden = !on;
      });
    }
    tabs.forEach(function(t, i){
      t.tabIndex = i === 0 ? 0 : -1;
      t.addEventListener('click', function(){ show(i); });
      t.addEventListener('keydown', function(e){
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if(!d) return;
        e.preventDefault();
        const n = (i + d + tabs.length) % tabs.length;
        show(n); tabs[n].focus();
      });
    });
  });
})();

/* ---- brief builder: weighting reflects the reader's own brief ---- */
(function briefBuilder(){
  const root = document.querySelector('[data-brief]');
  if(!root) return;
  const sumEl  = root.querySelector('[data-bsum]');
  const filtEl = root.querySelector('[data-bfilter]');
  const bars   = {};
  root.querySelectorAll('[data-bar]').forEach(function(b){ bars[b.dataset.bar] = b; });

  const state = { field:null, type:null, pri:null, idx:null, apcmax:null, acc:null };

  const FIELD = { med:'medicine', life:'life sciences', eng:'engineering and technology',
                  soc:'the social sciences', nurs:'nursing and dentistry' };
  const TYPE  = { orig:'an original research paper', sr:'a systematic review or meta-analysis',
                  rct:'a clinical trial report', case:'a case report', rev:'a review article' };
  const PRI   = { speed:'the fastest decision', impact:'the highest impact',
                  oa:'open access', cost:'the lowest cost', reach:'the widest readership' };
  const IDX   = { scopus:'Scopus', wos:'Web of Science &mdash; SCIE, SSCI or AHCI',
                  pubmed:'PubMed and MEDLINE', ugc:'the UGC-CARE list', none:null };
  /* short noun phrases, because these read as a list of conditions, not a sentence */
  const IDXF  = { scopus:'Scopus indexing', wos:'Web of Science indexing',
                  pubmed:'PubMed and MEDLINE indexing', ugc:'UGC-CARE listing', none:null };
  const APCMAX = { none:'no publishing charge', '1000':'APC under $1,000',
                   '2500':'APC under $2,500', '5000':'APC under $5,000', any:null };
  const ACC   = { oa:'fully open access', hyb:'an open-access option',
                  sub:'subscription publishing', any:null };

  // scope always leads: fit is the criterion that decides most rejections
  const BASE = { scope:28, design:20, reach:14, impact:14, speed:12, apc:12 };
  const BOOST = { speed:{ speed:20 }, impact:{ impact:20 }, reach:{ reach:20 },
                  cost:{ apc:20 }, oa:{ apc:12, reach:8 } };

  function weights(){
    const w = Object.assign({}, BASE);
    if(state.pri && BOOST[state.pri]){
      const add = BOOST[state.pri];
      let total = 0;
      for(const k in add) total += add[k];
      // take the boost proportionally from the criteria that were not chosen,
      // but never let scope fit fall below 20 — it is what causes desk rejections
      const donors = Object.keys(w).filter(function(k){ return !(k in add); });
      let pool = 0;
      donors.forEach(function(k){ pool += (k === 'scope' ? Math.max(0, w[k] - 20) : w[k]); });
      donors.forEach(function(k){
        const avail = (k === 'scope' ? Math.max(0, w[k] - 20) : w[k]);
        w[k] -= total * (pool ? avail / pool : 0);
      });
      for(const k in add) w[k] += add[k];
    }
    // applied after the redistribution so picking a trial or review visibly
    // raises study-design weight rather than being absorbed by it
    if(state.type === 'sr' || state.type === 'rct') w.design += 7;
    // a stated ceiling makes the charge a live constraint rather than a preference
    if(state.apcmax && state.apcmax !== 'any') w.apc += (state.apcmax === 'none' ? 10 : 6);
    let sum = 0;
    for(const k in w) sum += w[k];
    for(const k in w) w[k] = w[k] / sum * 100;
    return w;
  }

  function render(){
    const w = weights();
    let lead = null;
    for(const k in w){ if(!lead || w[k] > w[lead]) lead = k; }
    for(const k in bars){
      const pct = Math.round(w[k]);
      bars[k].querySelector('.bbar__fill').style.width = pct + '%';
      bars[k].querySelector('.bbar__v').textContent = pct + '%';
      bars[k].classList.toggle('bbar--lead', k === lead);
    }

    if(!state.field){ sumEl.innerHTML = 'Choose your field to begin.'; }
    else {
      const bits = [];
      bits.push(state.type ? TYPE[state.type] : 'a manuscript');
      bits.push('in <b>' + FIELD[state.field] + '</b>');
      if(state.pri) bits.push('optimised for <b>' + PRI[state.pri] + '</b>');
      sumEl.innerHTML = bits.join(' ').replace(/^./, function(c){ return c.toUpperCase(); }) + '.';
    }

    /* hard filters are absolute: a journal failing one never reaches the shortlist,
       however well it scores on everything else */
    const hard = [];
    if(state.idx && IDXF[state.idx]) hard.push(IDXF[state.idx]);
    if(state.apcmax && APCMAX[state.apcmax]) hard.push(APCMAX[state.apcmax]);
    if(state.acc && ACC[state.acc]) hard.push(ACC[state.acc]);
    if(hard.length){
      filtEl.hidden = false;
      filtEl.innerHTML = '<b>' + (hard.length === 1 ? 'Hard filter:' : 'Hard filters:') + '</b> ' +
        hard.join(' &middot; ') +
        '. Applied before any weighting &mdash; a journal that fails one is out, however well it scores elsewhere.';
    } else { filtEl.hidden = true; }
  }

  root.querySelectorAll('.bopt').forEach(function(btn){
    btn.addEventListener('click', function(){
      const q = btn.dataset.q;
      state[q] = (state[q] === btn.dataset.v) ? null : btn.dataset.v;
      root.querySelectorAll('.bopt[data-q="' + q + '"]').forEach(function(o){
        o.setAttribute('aria-pressed', String(o.dataset.v === state[q]));
      });
      render();
    });
  });

  render();
})();

/* ---- testimonial carousel: arrows, dots, keyboard, native scroll ---- */
(function testimonialCarousel(){
  document.querySelectorAll('[data-tcar]').forEach(function(track){
    const shell = track.closest('.tcar');
    const prev  = shell.querySelector('[data-tprev]');
    const next  = shell.querySelector('[data-tnext]');
    const dots  = shell.querySelector('[data-tdots]');
    const cards = Array.from(track.children);
    if(!cards.length) return;

    function step(){
      // distance from one card's left edge to the next, gap included
      if(cards.length < 2) return track.clientWidth;
      return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
    }
    function pages(){
      const max = track.scrollWidth - track.clientWidth;
      if(max <= 2) return 1;
      return Math.ceil(max / Math.max(1, step())) + 1;
    }
    function pageIndex(){
      const max = track.scrollWidth - track.clientWidth;
      if(max <= 2) return 0;
      if(track.scrollLeft >= max - 2) return pages() - 1;
      return Math.min(pages() - 1, Math.round(track.scrollLeft / Math.max(1, step())));
    }

    function buildDots(){
      const n = pages();
      if(dots.childElementCount === n) return;
      dots.textContent = '';
      for(let i = 0; i < n; i++){
        const d = document.createElement('button');
        d.type = 'button';
        d.className = 'tcar__dot';
        d.setAttribute('aria-label', 'Go to testimonial group ' + (i + 1));
        d.addEventListener('click', function(){
          const max = track.scrollWidth - track.clientWidth;
          track.scrollTo({ left: Math.min(max, step() * i), behavior:'smooth' });
        });
        dots.appendChild(d);
      }
      dots.removeAttribute('aria-hidden');
    }

    function sync(){
      const max = track.scrollWidth - track.clientWidth;
      const atStart = track.scrollLeft <= 2;
      const atEnd   = track.scrollLeft >= max - 2;
      prev.disabled = atStart;
      next.disabled = atEnd;
      const hidden = max <= 2;
      dots.style.display = hidden ? 'none' : '';
      shell.querySelector('.tcar__btns').style.display = hidden ? 'none' : '';
      if(!hidden){
        buildDots();
        const cur = pageIndex();
        Array.from(dots.children).forEach(function(d, i){
          d.classList.toggle('is-on', i === cur);
        });
      }
    }

    prev.addEventListener('click', function(){ track.scrollBy({ left: -step(), behavior:'smooth' }); });
    next.addEventListener('click', function(){ track.scrollBy({ left: step(), behavior:'smooth' }); });
    track.addEventListener('keydown', function(e){
      if(e.key === 'ArrowRight'){ e.preventDefault(); track.scrollBy({ left: step(), behavior:'smooth' }); }
      if(e.key === 'ArrowLeft'){  e.preventDefault(); track.scrollBy({ left:-step(), behavior:'smooth' }); }
    });

    let raf = 0;
    track.addEventListener('scroll', function(){
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    }, { passive:true });
    window.addEventListener('resize', sync);
    // the track lives inside a routed view, so re-measure once it is laid out
    sync();
    setTimeout(sync, 300);
    window.addEventListener('hashchange', function(){ setTimeout(sync, 260); });
  });
})();

/* ---- screening funnel: a PRISMA 2020 flow that reconciles as you change the search ---- */
(function screeningFunnel(){
  const root = document.querySelector('[data-prz]');
  if(!root) return;

  /* Three worked reviews. Study labels are anonymised on purpose — these are
     illustrative records taken from real review shapes, not citations. Each study
     carries the sources that index it, which is the whole point of the widget:
     drop a database and you can see exactly which evidence leaves with it. */
  const REVIEWS = {
    int: {
      q: 'Does exercise-based cardiac rehabilitation reduce hospital readmission in adults with heart failure?',
      frame: 'PICO framework · randomised trials · PRISMA 2020 reporting and Cochrane RoB 2 appraisal',
      srcs: [
        { id:'medline', n:'MEDLINE (Ovid)',               r:1842 },
        { id:'embase',  n:'Embase',                       r:2310 },
        { id:'central', n:'Cochrane CENTRAL',             r:1104 },
        { id:'cinahl',  n:'CINAHL',                       r: 486 },
        { id:'wos',     n:'Web of Science',               r:1376 },
        { id:'reg',     n:'ClinicalTrials.gov and ICTRP', r: 212, reg:true }
      ],
      cites: 64,
      reasons: [
        ['Wrong population — mixed cardiac cohorts with no heart-failure subgroup', 21],
        ['Wrong intervention — education or diet only, no exercise component',      16],
        ['No readmission outcome reported',                                         13],
        ['Conference abstract with no full report',                                  9],
        ['Secondary report of a trial already included',                             7]
      ],
      notRetrieved: 5,
      extraReports: 6,
      studies: [
        { id:'S01', w:'Multicentre RCT · United States, 2009',     s:['medline','embase','central','wos'],    l:'en', y:2009 },
        { id:'S02', w:'Single-centre RCT · Germany, 2004',          s:['medline','central'],                   l:'en', y:2004 },
        { id:'S03', w:'Multicentre RCT · Italy, 2013',              s:['medline','embase','central','wos'],    l:'en', y:2013 },
        { id:'S04', w:'Nurse-led RCT · Australia, 2010',            s:['cinahl','medline'],                    l:'en', y:2010 },
        { id:'S05', w:'Home-based RCT · Netherlands, 2019',         s:['embase','wos'],                        l:'en', y:2019 },
        { id:'S06', w:'Pragmatic RCT · Belgium, 2021',              s:['embase'],                              l:'en', y:2021 },
        { id:'S07', w:'Multicentre RCT · United Kingdom, 2009',     s:['medline','embase','central'],          l:'en', y:2009 },
        { id:'S08', w:'Nurse-led RCT · United States, 2007',        s:['cinahl'],                              l:'en', y:2007 },
        { id:'S09', w:'Multicentre RCT · China, 2018',              s:['embase','wos'],                        l:'zh', y:2018 },
        { id:'S10', w:'Telerehabilitation RCT · Netherlands, 2017', s:['medline','embase','central'],          l:'en', y:2017 },
        { id:'S11', w:'Multicentre RCT · Italy, 2016',              s:['embase','central'],                    l:'en', y:2016 },
        { id:'S12', w:'Multicentre RCT · Sweden, 2020',             s:['medline','embase','central','cinahl'], l:'en', y:2020 },
        { id:'S13', w:'Multicentre RCT · Norway, 2022',             s:['reg','embase','central'],              l:'en', y:2022 },
        { id:'S14', w:'Registry-posted RCT · Canada, 2023',         s:['reg'],                                 l:'en', y:2023 },
        { id:'S15', w:'Single-centre RCT · Brazil, 2015',           s:[],                                      l:'pt', y:2015, hand:true },
        { id:'S16', w:'Multicentre RCT · Spain, 2014',              s:[],                                      l:'en', y:2014, hand:true }
      ]
    },
    dta: {
      q: 'How accurate is point-of-care ultrasound for diagnosing appendicitis in children?',
      frame: 'PIRD framework · cross-sectional accuracy studies · PRISMA-DTA reporting and QUADAS-3 appraisal',
      srcs: [
        { id:'medline', n:'MEDLINE (Ovid)',               r:1208 },
        { id:'embase',  n:'Embase',                       r:1514 },
        { id:'central', n:'Cochrane CENTRAL',             r: 186 },
        { id:'cinahl',  n:'CINAHL',                       r: 232 },
        { id:'wos',     n:'Web of Science',               r: 940 },
        { id:'reg',     n:'ICTRP and ClinicalTrials.gov', r:  58, reg:true }
      ],
      cites: 41,
      reasons: [
        ['No 2×2 contingency data recoverable from the report',    19],
        ['Adult population, or children not reported separately',  14],
        ['Radiologist-performed ultrasound, not point-of-care',    12],
        ['No adequate reference standard',                          8],
        ['Conference abstract with no full report',                 6]
      ],
      notRetrieved: 4,
      extraReports: 3,
      studies: [
        { id:'D01', w:'Prospective cohort · United States, 2018',   s:['medline','embase','wos'],           l:'en', y:2018 },
        { id:'D02', w:'Prospective cohort · Canada, 2016',          s:['medline','embase'],                 l:'en', y:2016 },
        { id:'D03', w:'Emergency-department cohort · Turkey, 2019', s:['embase','wos'],                     l:'en', y:2019 },
        { id:'D04', w:'Prospective cohort · Japan, 2014',           s:['embase'],                           l:'ja', y:2014 },
        { id:'D05', w:'Paediatric ED cohort · Spain, 2021',         s:['medline','embase','wos'],           l:'en', y:2021 },
        { id:'D06', w:'Nurse-sonographer cohort · Australia, 2020', s:['cinahl','embase'],                  l:'en', y:2020 },
        { id:'D07', w:'Prospective cohort · Italy, 2012',           s:['medline','wos'],                    l:'en', y:2012 },
        { id:'D08', w:'Multicentre cohort · Netherlands, 2022',     s:['medline','embase','central','wos'], l:'en', y:2022 },
        { id:'D09', w:'Prospective cohort · Egypt, 2017',           s:['embase'],                           l:'en', y:2017 },
        { id:'D10', w:'Registry-linked cohort · Sweden, 2023',      s:['reg','embase'],                     l:'en', y:2023 },
        { id:'D11', w:'Paediatric ED cohort · Brazil, 2015',        s:[],                                   l:'pt', y:2015, hand:true },
        { id:'D12', w:'Prospective cohort · United Kingdom, 2013',  s:['medline','embase','central'],       l:'en', y:2013 }
      ]
    },
    prev: {
      q: 'What is the reported prevalence of burnout among intensive-care nurses worldwide?',
      frame: 'CoCoPop framework · cross-sectional surveys · PRISMA 2020 reporting and JBI critical appraisal',
      srcs: [
        { id:'medline', n:'MEDLINE (Ovid)',             r: 964 },
        { id:'embase',  n:'Embase',                     r:1132 },
        { id:'cinahl',  n:'CINAHL',                     r: 741 },
        { id:'psyc',    n:'APA PsycINFO',               r: 528 },
        { id:'wos',     n:'Web of Science',             r:1086 },
        { id:'reg',     n:'Grey literature and theses', r: 184, reg:true }
      ],
      cites: 57,
      reasons: [
        ['Mixed nursing population with no ICU subgroup',   24],
        ['Burnout measured with an unvalidated instrument', 15],
        ['No prevalence figure or denominator reported',    12],
        ['Qualitative design',                               9],
        ['Duplicate report of an included survey',           5]
      ],
      notRetrieved: 6,
      extraReports: 4,
      studies: [
        { id:'P01', w:'National survey · United States, 2019',  s:['medline','cinahl','psyc'],       l:'en', y:2019 },
        { id:'P02', w:'Multicentre survey · Spain, 2021',       s:['medline','embase','wos'],        l:'es', y:2021 },
        { id:'P03', w:'Single-centre survey · Italy, 2020',     s:['embase','wos'],                  l:'en', y:2020 },
        { id:'P04', w:'National survey · China, 2022',          s:['embase','wos'],                  l:'zh', y:2022 },
        { id:'P05', w:'Regional survey · Brazil, 2018',         s:['cinahl','psyc'],                 l:'pt', y:2018 },
        { id:'P06', w:'Multicentre survey · Netherlands, 2017', s:['medline','embase','psyc'],       l:'en', y:2017 },
        { id:'P07', w:'Doctoral thesis survey · Ireland, 2016', s:['reg'],                           l:'en', y:2016 },
        { id:'P08', w:'National survey · Japan, 2013',          s:['embase'],                        l:'ja', y:2013 },
        { id:'P09', w:'Multicentre survey · Canada, 2021',      s:['medline','cinahl','psyc','wos'], l:'en', y:2021 },
        { id:'P10', w:'Regional survey · South Africa, 2020',   s:['cinahl'],                        l:'en', y:2020 },
        { id:'P11', w:'National survey · Poland, 2019',         s:['embase','psyc'],                 l:'en', y:2019 },
        { id:'P12', w:'Multicentre survey · Australia, 2023',   s:['medline','cinahl','embase'],     l:'en', y:2023 },
        { id:'P13', w:'Grey-literature report · India, 2022',   s:['reg','embase'],                  l:'en', y:2022 },
        { id:'P14', w:'Single-centre survey · France, 2015',    s:[],                                l:'fr', y:2015, hand:true }
      ]
    }
  };

  const LANGS = { en:'English', zh:'Chinese', pt:'Portuguese', es:'Spanish', ja:'Japanese', fr:'French' };
  /* Overlap between bibliographic databases, by how many are searched. This is why
     searching six databases does not return six times the records. */
  const DUP = [0, 0, .19, .29, .36, .41, .45];

  const state = { rev:'int', on:{}, since:false, eng:false, hand:true };

  const qWrap = root.querySelector('[data-prz-q]');
  const sWrap = root.querySelector('[data-prz-src]');
  const flow  = root.querySelector('[data-prz-flow]');
  const frame = root.querySelector('[data-prz-frame]');

  function R(){ return REVIEWS[state.rev]; }
  function num(n){ return n.toLocaleString('en-GB'); }

  /* ---- why a study is not in the current search, in the order the reasons bite ---- */
  function lostWhy(st){
    if(state.since && st.y < 2010)   return 'date';
    if(state.eng   && st.l !== 'en') return 'lang';
    if(st.hand)   return state.hand ? null : 'hand';
    if(!st.s.some(function(k){ return state.on[k]; })) return 'src';
    return null;
  }

  function scaleBase(rev){
    const db = rev.srcs.filter(function(s){ return !s.reg; });
    const total = db.reduce(function(a,s){ return a + s.r; }, 0);
    return total - Math.round(total * DUP[Math.min(db.length, DUP.length - 1)]);
  }

  function compute(all){
    const rev  = R();
    const dbs  = rev.srcs.filter(function(s){ return !s.reg && (all || state.on[s.id]); });
    const regs = rev.srcs.filter(function(s){ return  s.reg && (all || state.on[s.id]); });
    const fromDb  = dbs.reduce(function(a,s){ return a + s.r; }, 0);
    const fromReg = regs.reduce(function(a,s){ return a + s.r; }, 0);
    const fromCite = (all || state.hand) ? rev.cites : 0;

    const dups = Math.round(fromDb * DUP[Math.min(dbs.length, DUP.length - 1)]);
    const screened = fromDb + fromReg + fromCite - dups;

    const included = rev.studies.filter(function(st){ return all ? true : lostWhy(st) === null; });

    /* Everything below the screening stage scales with how much of the search is
       actually run, so the diagram reconciles top to bottom however it is set. */
    const f = Math.min(1, screened / (scaleBase(rev) || 1));
    const reasons = rev.reasons.map(function(x){
      return [x[0], screened > 0 ? Math.max(1, Math.round(x[1] * f)) : 0];
    });
    const exFull   = reasons.reduce(function(a,x){ return a + x[1]; }, 0);
    const notRet   = screened > 0 ? Math.max(1, Math.round(rev.notRetrieved * f)) : 0;
    const assessed = included.length + exFull;
    const sought   = assessed + notRet;

    return {
      fromDb:fromDb, fromReg:fromReg, fromCite:fromCite, dups:dups, screened:screened,
      exScreen: Math.max(0, screened - sought), sought:sought, notRet:notRet,
      assessed:assessed, reasons:reasons, included:included,
      reports: included.length + (screened > 0 ? Math.round(rev.extraReports * f) : 0),
      dbs: dbs.length
    };
  }

  function box(cls, label, sub, n){
    return '<div class="prz__box ' + cls + '"><p><b>' + label + '</b>' + (sub || '') + '</p>' +
           '<span class="prz__n"><span>n =</span>' + num(n) + '</span></div>';
  }

  function render(){
    const rev   = R();
    const c     = compute(false);
    const fullC = compute(true);
    frame.textContent = rev.frame;

    let h = '';
    h += '<p class="prz__phase">Identification</p>';
    h += '<div class="prz__row prz__row--split">';
    h +=   box(c.fromDb ? '' : 'prz__box--dim', 'Records identified from databases',
               '<span>' + (c.dbs || 'No') + ' database' + (c.dbs === 1 ? '' : 's') + ' searched</span>', c.fromDb);
    h +=   box('prz__box--ex', 'Records removed before screening',
               '<span>Duplicates across databases</span>', c.dups);
    h += '</div>';
    if(c.fromReg || c.fromCite){
      h += '<div class="prz__row prz__row--split">';
      h +=   box(c.fromReg ? '' : 'prz__box--dim', 'Records from registers and grey literature',
                 '<span>Trial registries, theses, reports</span>', c.fromReg);
      h +=   box(c.fromCite ? '' : 'prz__box--dim', 'Records from citation searching',
                 '<span>Reference lists and cited-by</span>', c.fromCite);
      h += '</div>';
    }
    h += '<span class="prz__arrow"></span>';

    h += '<p class="prz__phase">Screening</p>';
    h += '<div class="prz__row prz__row--split">';
    h +=   box('', 'Records screened', '<span>Title and abstract, two reviewers independently</span>', c.screened);
    h +=   box('prz__box--ex', 'Records excluded', '<span>Against the pre-specified criteria</span>', c.exScreen);
    h += '</div>';
    h += '<span class="prz__arrow"></span>';
    h += '<div class="prz__row prz__row--split">';
    h +=   box('', 'Reports sought for retrieval', '', c.sought);
    h +=   box('prz__box--ex', 'Reports not retrieved', '<span>No full text obtainable</span>', c.notRet);
    h += '</div>';
    h += '<span class="prz__arrow"></span>';

    h += '<p class="prz__phase">Eligibility</p>';
    h += '<div class="prz__row prz__row--split">';
    h +=   box('', 'Reports assessed for eligibility',
               '<span>Full text, two reviewers, disagreements arbitrated</span>', c.assessed);
    h +=   '<div><div class="prz__box prz__box--ex"><p><b>Reports excluded, with reasons</b></p>' +
           '<span class="prz__n"><span>n =</span>' + num(c.assessed - c.included.length) + '</span></div>' +
           '<ul class="prz__reasons">' + c.reasons.map(function(x){
             return '<li>' + x[0] + '<em>' + x[1] + '</em></li>'; }).join('') + '</ul></div>';
    h += '</div>';
    h += '<span class="prz__arrow"></span>';

    h += '<p class="prz__phase">Included</p>';
    h += '<div class="prz__row prz__row--split">';
    h +=   box('prz__box--in', 'Studies included in the review', '', c.included.length);
    h +=   box('', 'Reports of included studies',
               '<span>Protocols, secondary papers, registry entries</span>', c.reports);
    h += '</div>';

    /* ---- the verdict ---- */
    const lost = rev.studies.filter(function(st){ return lostWhy(st) !== null; });
    const pct  = fullC.included.length ? Math.round(c.included.length / fullC.included.length * 100) : 0;
    const cls  = pct === 100 ? '' : (pct >= 80 ? 'is-mid' : 'is-low');

    h += '<div class="prz__out">';
    h += '<p class="prz__cov"><b>' + c.included.length + ' of ' + fullC.included.length +
         ' eligible studies found</b><span>' + pct + '% of the evidence this question has</span></p>';
    h += '<div class="prz__track"><div class="prz__fill ' + cls + '" style="--w:' + pct + '%"></div></div>';

    if(!lost.length){
      h += '<p class="prz__say">The full search finds every eligible study. <b>Now take one database away</b> and watch which evidence leaves with it. That is the argument for searching more than one &mdash; and it is the argument a peer reviewer will make if you searched fewer.</p>';
    } else {
      h += '<p class="prz__say">This search misses <b>' + lost.length + ' eligible stud' + (lost.length === 1 ? 'y' : 'ies') +
           '</b>. A systematic review that misses them is not wrong in its arithmetic. It is wrong in its answer &mdash; and neither the reader nor the author can see that from the finished paper.</p>';
      h += '<ul class="prz__lost">' + lost.map(function(st){
        const why = lostWhy(st);
        const txt = why === 'src'
              ? 'Indexed only in ' + st.s.map(function(k){
                  const s = rev.srcs.filter(function(x){ return x.id === k; })[0];
                  return s ? s.n : k; }).join(' and ') + ', which this search does not cover.'
            : why === 'lang'
              ? 'Published in ' + (LANGS[st.l] || 'another language') + '. An English-only limit removes it, and that is a language bias you are then obliged to declare.'
            : why === 'date'
              ? 'Published before 2010. A date limit is defensible, but only where the protocol says why before the search is run.'
              : 'Found only by hand-searching reference lists. No database query returns it, however the terms are written.';
        return '<li><b>' + st.id + '</b><span><i>' + st.w + '</i> &mdash; ' + txt + '</span></li>';
      }).join('') + '</ul>';
    }
    h += '</div>';

    flow.innerHTML = h;
  }

  function buildSources(){
    sWrap.innerHTML = R().srcs.map(function(s){
      return '<label class="prz__s' + (s.reg ? ' prz__s--reg' : '') + '">' +
             '<input type="checkbox" value="' + s.id + '"' + (state.on[s.id] ? ' checked' : '') + '>' +
             '<i aria-hidden="true"></i><b>' + s.n + '</b><em>' + num(s.r) + '</em></label>';
    }).join('');
    sWrap.querySelectorAll('input').forEach(function(i){
      i.addEventListener('change', function(){ state.on[i.value] = i.checked; render(); });
    });
  }

  function setReview(id){
    state.rev = id;
    state.on = {};
    R().srcs.forEach(function(s){ state.on[s.id] = true; });
    qWrap.querySelectorAll('.prz__q').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.dataset.rev === id));
    });
    buildSources();
    render();
  }

  qWrap.querySelectorAll('.prz__q').forEach(function(b){
    b.addEventListener('click', function(){ setReview(b.dataset.rev); });
  });
  root.querySelectorAll('[data-prz-lim]').forEach(function(i){
    i.addEventListener('change', function(){ state[i.dataset.przLim] = i.checked; render(); });
  });

  setReview('int');
})();


/* ---- forest plot: inverse-variance meta-analysis, recomputed live ----
   Fixed-effect and DerSimonian-Laird random-effects models, computed from the
   2x2 counts below rather than from stored results, so every number on screen
   — weights, pooled estimate, Q, I-squared, tau-squared — is the arithmetic a
   reviewer would reproduce in RevMan, R or Stata. */
(function forestPlot(){
  const root = document.querySelector('[data-fst]');
  if(!root) return;

  /* Two worked meta-analyses. Trials are anonymised rather than cited; the
     counts are illustrative, but the behaviour they produce is not. */
  const SETS = {
    nut: {
      q: 'Early enteral nutrition and infection after major abdominal surgery',
      frame: '12 randomised trials · risk ratio · DerSimonian–Laird random effects',
      outcome: 'Postoperative infection',
      arms: ['Early nutrition', 'Standard care'],
      subs: { all:'All trials', early:'Started within 24 h', late:'Started after 24 h' },
      trials: [
        { id:'Trial 01', w:'Multicentre · Netherlands, 2012', a: 24, n1:420, c: 52, n2:418, rob:'low',  sub:'early' },
        { id:'Trial 02', w:'Single centre · Italy, 2014',     a: 23, n1:214, c: 27, n2:210, rob:'low',  sub:'early' },
        { id:'Trial 03', w:'Multicentre · United Kingdom, 2016', a: 61, n1:712, c: 84, n2:706, rob:'low',  sub:'late'  },
        { id:'Trial 04', w:'Single centre · Egypt, 2015',      a:  5, n1:132, c: 16, n2:128, rob:'some', sub:'early' },
        { id:'Trial 05', w:'Multicentre · Japan, 2018',        a: 55, n1:560, c: 62, n2:556, rob:'low',  sub:'late'  },
        { id:'Trial 06', w:'Single centre · Brazil, 2013',     a: 16, n1:268, c: 33, n2:265, rob:'some', sub:'early' },
        { id:'Trial 07', w:'Single centre · India, 2011',      a: 17, n1:180, c: 18, n2:178, rob:'high', sub:'late'  },
        { id:'Trial 08', w:'Multicentre · Germany, 2020',      a: 71, n1:905, c:101, n2:898, rob:'low',  sub:'late'  },
        { id:'Trial 09', w:'Single centre · Turkey, 2017',     a: 10, n1:196, c: 25, n2:192, rob:'some', sub:'early' },
        { id:'Trial 10', w:'Multicentre · Spain, 2019',        a: 34, n1:340, c: 37, n2:338, rob:'low',  sub:'late'  },
        { id:'Trial 11', w:'Single centre · China, 2010',      a:  4, n1:104, c: 14, n2:102, rob:'high', sub:'early' },
        { id:'Trial 12', w:'Multicentre · Canada, 2021',       a: 36, n1:498, c: 57, n2:494, rob:'low',  sub:'late'  }
      ],
      /* what the widget should teach on this dataset */
      notes: {
        base: 'A result that holds. The random-effects estimate is close to the fixed-effect one, heterogeneity is moderate rather than alarming, and removing the trials at high risk of bias barely moves the diamond. <b>Now open the subgroups</b> — the effect is roughly twice as large when nutrition starts within twenty-four hours, and that is a finding, not a footnote.'
      }
    },
    sep: {
      q: 'Adjunctive therapy and 30-day mortality in severe sepsis',
      frame: '10 randomised trials · risk ratio · DerSimonian–Laird random effects',
      outcome: '30-day mortality',
      arms: ['Adjunct therapy', 'Placebo'],
      subs: { all:'All trials', small:'Trials under 250 patients', large:'Trials over 1,000 patients' },
      trials: [
        { id:'Trial 01', w:'Single centre · Greece, 2009',     a:  9, n1:  70, c: 21, n2:  68, rob:'high', sub:'small' },
        { id:'Trial 02', w:'Single centre · Iran, 2012',       a:  7, n1:  58, c: 18, n2:  56, rob:'high', sub:'small' },
        { id:'Trial 03', w:'Single centre · China, 2014',      a: 12, n1:  98, c: 26, n2:  96, rob:'high', sub:'small' },
        { id:'Trial 04', w:'Two centres · Brazil, 2016',       a: 17, n1: 150, c: 31, n2: 148, rob:'some', sub:'small' },
        { id:'Trial 05', w:'Multicentre · Turkey, 2018',       a: 24, n1: 215, c: 37, n2: 212, rob:'some', sub:'small' },
        { id:'Trial 06', w:'Multicentre · United States, 2019',a:196, n1:1420, c:194, n2:1415, rob:'low',  sub:'large' },
        { id:'Trial 07', w:'International · 2021',             a:261, n1:1980, c:259, n2:1975, rob:'low',  sub:'large' },
        { id:'Trial 08', w:'Multicentre · Europe, 2020',       a:134, n1:1015, c:133, n2:1010, rob:'low',  sub:'large' },
        { id:'Trial 09', w:'Multicentre · Australia, 2022',    a: 98, n1: 760, c: 97, n2: 755, rob:'low',  sub:'large' },
        { id:'Trial 10', w:'International · 2023',             a:168, n1:1290, c:166, n2:1284, rob:'low',  sub:'large' }
      ],
      notes: {
        base: 'The same ten trials, two defensible models, two different papers. <b>Switch between fixed effect and random effects</b> and watch the conclusion change: random effects gives the small trials more weight, and the small trials are the ones reporting large benefits. <b>Then exclude the trials at high risk of bias</b> and the effect disappears entirely. Which model you use is a decision that belongs in the protocol, before anyone has seen this plot.'
      }
    }
  };

  const state = { set:'nut', model:'re', noHigh:false, sub:'all' };

  const $ = function(s){ return root.querySelector(s); };
  const qWrap  = $('[data-fst-q]');
  const segM   = $('[data-fst-model]');
  const segS   = $('[data-fst-sub]');
  const body   = $('[data-fst-body]');
  const frame  = $('[data-fst-frame]');

  function S(){ return SETS[state.set]; }

  /* ---- the statistics ---- */
  function effect(t){
    // log risk ratio and its standard error, from the 2x2 counts
    const r1 = t.a / t.n1, r2 = t.c / t.n2;
    const y  = Math.log(r1 / r2);
    const se = Math.sqrt(1/t.a - 1/t.n1 + 1/t.c - 1/t.n2);
    return { y:y, se:se, v:se*se };
  }

  function included(){
    return S().trials.filter(function(t){
      if(state.noHigh && t.rob === 'high') return false;
      if(state.sub !== 'all' && t.sub !== state.sub) return false;
      return true;
    });
  }

  function meta(trials){
    const e  = trials.map(effect);
    const wF = e.map(function(x){ return 1 / x.v; });
    const sF = wF.reduce(function(a,b){ return a+b; }, 0);
    const thF = e.reduce(function(a,x,i){ return a + wF[i]*x.y; }, 0) / sF;
    const Q  = e.reduce(function(a,x,i){ return a + wF[i]*Math.pow(x.y - thF, 2); }, 0);
    const df = trials.length - 1;
    const C  = sF - e.reduce(function(a,x,i){ return a + wF[i]*wF[i]; }, 0) / sF;
    const tau2 = (df > 0 && C > 0) ? Math.max(0, (Q - df) / C) : 0;
    const I2   = (Q > 0 && df > 0) ? Math.max(0, (Q - df) / Q * 100) : 0;

    const W = (state.model === 'fe') ? wF : e.map(function(x){ return 1/(x.v + tau2); });
    const sW = W.reduce(function(a,b){ return a+b; }, 0);
    const th = e.reduce(function(a,x,i){ return a + W[i]*x.y; }, 0) / sW;
    const seP = Math.sqrt(1 / sW);
    const z = th / seP;
    // two-sided normal p, good to the precision we print
    const p = 2 * (1 - normCdf(Math.abs(z)));
    return {
      e:e, w:W.map(function(x){ return 100 * x / sW; }),
      rr:Math.exp(th), lo:Math.exp(th - 1.96*seP), hi:Math.exp(th + 1.96*seP),
      Q:Q, df:df, tau2:tau2, I2:I2, z:z, p:p, k:trials.length
    };
  }

  function normCdf(x){
    // Abramowitz and Stegun 26.2.17
    const t = 1 / (1 + 0.2316419 * x);
    const d = 0.3989422804014327 * Math.exp(-x*x/2);
    const poly = t*(0.319381530 + t*(-0.356563782 + t*(1.781477937 + t*(-1.821255978 + t*1.330274429))));
    return 1 - d * poly;
  }

  /* ---- the axis: log scale from 0.2 to 2.5 ---- */
  const LO = Math.log(0.2), HI = Math.log(2.5);
  function pos(rr){
    const v = Math.max(LO, Math.min(HI, Math.log(rr)));
    return (v - LO) / (HI - LO) * 100;
  }
  const NULLPOS = pos(1);

  function fmt(n, d){ return n.toFixed(d === undefined ? 2 : d); }
  function fmtP(p){
    if(p < 0.001) return 'p < 0.001';
    if(p < 0.01)  return 'p = ' + p.toFixed(3);
    return 'p = ' + p.toFixed(2);
  }


  function ciBar(lo, hi, rr, wt){
    const a = pos(lo), b = pos(hi);
    const side = Math.max(5, Math.min(17, 5 + Math.sqrt(wt) * 2.6));
    return '<span class="fst__ci" style="left:' + a + '%;width:' + Math.max(0.6, b - a) + '%"></span>' +
           '<span class="fst__sq" style="left:' + pos(rr) + '%;width:' + side + 'px;height:' + side + 'px"></span>';
  }

  function render(){
    const set = S();
    frame.textContent = set.frame;

    const keep = included();
    const m = keep.length ? meta(keep) : null;
    const wByTrial = {};
    keep.forEach(function(t, i){ wByTrial[t.id] = m.w[i]; });
    const eByTrial = {};
    keep.forEach(function(t, i){ eByTrial[t.id] = m.e[i]; });

    let h = '<div class="fst__tbl">';
    h += '<div class="fst__head"><span>Trial</span><span>' + set.arms[0] + '</span><span>' + set.arms[1] +
         '</span><span></span><span>Risk ratio [95% CI]</span><span>Weight</span></div>';

    set.trials.forEach(function(t){
      const inSet = keep.indexOf(t) > -1;
      const e  = inSet ? eByTrial[t.id] : effect(t);
      const rr = Math.exp(e.y), lo = Math.exp(e.y - 1.96*e.se), hi = Math.exp(e.y + 1.96*e.se);
      const wt = inSet ? wByTrial[t.id] : 0;
      h += '<div class="fst__row' + (inSet ? '' : ' is-out') + '">' +
           '<span class="fst__nm"><i class="fst__rob fst__rob--' + t.rob + '" title="Risk of bias: ' + t.rob + '"></i>' +
             t.id + '<em>' + t.w + '</em></span>' +
           '<span class="fst__num">' + t.a + '/' + t.n1 + '</span>' +
           '<span class="fst__num">' + t.c + '/' + t.n2 + '</span>' +
           '<span class="fst__plot" style="--null:' + NULLPOS + '%">' +
             (inSet ? ciBar(lo, hi, rr, wt) : '') + '</span>' +
           '<span class="fst__est"><b>' + fmt(rr) + '</b> [' + fmt(lo) + ', ' + fmt(hi) + ']</span>' +
           '<span class="fst__wt">' + (inSet ? fmt(wt, 1) + '%' : '—') + '</span>' +
           '</div>';
    });

    if(m){
      const sig = m.hi < 1 || m.lo > 1;
      h += '<div class="fst__row fst__row--pool">' +
           '<span class="fst__nm">' + (state.model === 'fe' ? 'Pooled, fixed effect' : 'Pooled, random effects') +
             '<em>' + m.k + ' trial' + (m.k === 1 ? '' : 's') + ' · ' + set.outcome + '</em></span>' +
           '<span class="fst__num"></span><span class="fst__num"></span>' +
           '<span class="fst__plot" style="--null:' + NULLPOS + '%">' +
             '<span class="fst__dia' + (sig ? '' : ' is-null') + '" style="left:' + pos(m.lo) +
             '%;width:' + Math.max(1.2, pos(m.hi) - pos(m.lo)) + '%"></span></span>' +
           '<span class="fst__est"><b>' + fmt(m.rr) + '</b> [' + fmt(m.lo) + ', ' + fmt(m.hi) + ']</span>' +
           '<span class="fst__wt">100%</span>' +
           '</div>';
    }

    h += '<div class="fst__ends"><i><span>Favours ' + set.arms[0].toLowerCase() + '</span>' +
         '<span>Favours ' + set.arms[1].toLowerCase() + '</span></i></div>';
    h += '<div class="fst__ends"><i class="fst__axis" style="display:block">' +
         [0.2, 0.5, 1, 2].map(function(v){
           return '<span style="left:' + pos(v) + '%">' + v + '</span>'; }).join('') + '</i></div>';
    h += '</div>';

    if(m){
      const sig = m.hi < 1 || m.lo > 1;
      h += '<div class="fst__stats">' +
        '<div class="fst__st ' + (sig ? 'fst__st--sig' : 'fst__st--ns') + '"><b>' + fmt(m.rr) +
          '</b><span>Pooled risk ratio [' + fmt(m.lo) + ', ' + fmt(m.hi) + ']</span></div>' +
        '<div class="fst__st ' + (sig ? 'fst__st--sig' : 'fst__st--ns') + '"><b>' + fmtP(m.p) +
          '</b><span>' + (sig ? 'Interval excludes 1 — the effect is significant' : 'Interval crosses 1 — not significant') + '</span></div>' +
        '<div class="fst__st"><b>' + Math.round(m.I2) + '%</b><span>I² — ' +
          (m.I2 < 30 ? 'low heterogeneity' : m.I2 < 60 ? 'moderate heterogeneity' : 'substantial heterogeneity') + '</span></div>' +
        '<div class="fst__st"><b>' + fmt(m.tau2, 3) + '</b><span>τ² · Q = ' + fmt(m.Q, 1) +
          ' on ' + m.df + ' df</span></div>' +
        '</div>';
    } else {
      h += '<p class="fst__say">No trials left in the analysis. A subgroup with nothing in it is a real outcome of a pre-specified plan, and it is reported rather than quietly dropped.</p>';
    }

    h += '<p class="fst__say">' + verdict(m) + '</p>';
    h += '<p class="fst__key"><span><i class="fst__rob fst__rob--low"></i>Low risk of bias</span>' +
         '<span><i class="fst__rob fst__rob--some"></i>Some concerns</span>' +
         '<span><i class="fst__rob fst__rob--high"></i>High risk of bias</span>' +
         '<span>Square area is the trial’s weight in the pooled estimate</span></p>';

    body.innerHTML = h;
  }

  function verdict(m){
    if(!m) return '';
    const set = S();
    const sig = m.hi < 1 || m.lo > 1;

    /* the sentence that matters changes with the settings, because the
       statistics do */
    if(state.sub !== 'all'){
      return 'Subgroup: <b>' + set.subs[state.sub] + '</b>, ' + m.k + ' trial' + (m.k === 1 ? '' : 's') +
             '. A subgroup analysis is only believable if it was pre-specified in the protocol and the test is for an ' +
             '<i>interaction</i> between subgroups, not for significance inside each one separately. Running both and ' +
             'reporting the one that came out is the most common way a meta-analysis overstates its case.';
    }
    if(state.noHigh){
      return 'Trials at high risk of bias excluded — a sensitivity analysis, and the right way to find out whether a ' +
             'result depends on its weakest evidence. Pooled estimate <b>' + fmt(m.rr) + ' [' + fmt(m.lo) + ', ' +
             fmt(m.hi) + ']</b>, ' + (sig ? 'which still excludes the line of no effect. The conclusion survives.' :
             'which now crosses the line of no effect. The conclusion did not survive, and that has to be reported — ' +
             'not resolved by putting the trials back.');
    }
    return set.notes.base;
  }

  /* ---- controls ---- */
  function buildSubs(){
    const subs = S().subs;
    segS.innerHTML = Object.keys(subs).map(function(k){
      return '<button type="button" data-sub="' + k + '" aria-pressed="' + (state.sub === k) + '">' +
             subs[k] + '</button>';
    }).join('');
    segS.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){
        state.sub = b.dataset.sub;
        segS.querySelectorAll('button').forEach(function(x){
          x.setAttribute('aria-pressed', String(x.dataset.sub === state.sub)); });
        render();
      });
    });
  }

  function setSet(id){
    state.set = id; state.sub = 'all'; state.noHigh = false;
    qWrap.querySelectorAll('.fst__q').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.dataset.set === id)); });
    root.querySelectorAll('[data-fst-opt]').forEach(function(i){ i.checked = false; });
    buildSubs();
    render();
  }

  qWrap.querySelectorAll('.fst__q').forEach(function(b){
    b.addEventListener('click', function(){ setSet(b.dataset.set); });
  });
  segM.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click', function(){
      state.model = b.dataset.model;
      segM.querySelectorAll('button').forEach(function(x){
        x.setAttribute('aria-pressed', String(x.dataset.model === state.model)); });
      render();
    });
  });
  root.querySelectorAll('[data-fst-opt]').forEach(function(i){
    i.addEventListener('change', function(){ state.noHigh = i.checked; render(); });
  });

  setSet('nut');
})();


/* ---- full sample: the deliverable read on the page, not fetched as a file ---- */
(function fullSample(){
  function panelOf(t){ return document.getElementById(t.getAttribute('aria-controls')); }

  function setOpen(t, open){
    const p = panelOf(t);
    if(!p) return;
    t.setAttribute('aria-expanded', String(open));
    p.classList.toggle('is-open', open);
    if(open && window.__revealScan) window.__revealScan();
  }

  document.addEventListener('click', function(e){
    const t = e.target.closest('[data-fsm-t]');
    if(t){
      setOpen(t, t.getAttribute('aria-expanded') !== 'true');
      return;
    }
    // "see a sample" buttons elsewhere on the page open it and bring you to it
    const o = e.target.closest('[data-fsm-open]');
    if(!o) return;
    const id = o.getAttribute('data-fsm-open');
    const tog = document.querySelector('[data-fsm-t][aria-controls="' + id + '"]');
    if(!tog) return;
    e.preventDefault();
    setOpen(tog, true);
    tog.scrollIntoView({ behavior:'smooth', block:'start' });
    tog.focus({ preventScroll:true });
  });
})();


/* ---- evidence gap map: the matrix a gap analysis actually produces ----
   Rows are populations, columns are outcome domains, and every cell is a count
   of what the search returned. The empty cells are the deliverable. */
(function evidenceGapMap(){
  const root = document.querySelector('[data-egm]');
  if(!root) return;

  /* n = studies found; r = randomised; o = observational; q = qualitative.
     w flags a cell carried entirely by weak designs, c a cell where the
     studies disagree. Counts are illustrative; the shape is not. */
  const TOPICS = {
    dm: {
      q: 'Digital self-management interventions in type 2 diabetes',
      frame: '5 populations × 5 outcome domains · mapped from one systematic search',
      rows: ['Adults 18–64', 'Older adults 65+', 'Multimorbidity', 'Low-resource settings', 'Pregnancy and GDM'],
      cols: ['Glycaemic control', 'Adherence', 'Quality of life', 'Cost-effectiveness', 'Equity of access'],
      cells: [
        [ {n:41,r:28,o:13,t:'Well covered. Randomised evidence is consistent in direction, and the pooled effect on HbA1c is the most secure finding on this map.'},
          {n:23,r:12,o:11,t:'Adequately covered, though adherence is measured a dozen different ways and few studies use a validated instrument.'},
          {n:17,r:9,o:8,t:'Covered, with the usual instrument heterogeneity — four different quality-of-life measures across nine trials.'},
          {n:6,r:1,o:5,t:'Thin. One trial-based economic evaluation; the rest are modelled analyses built on assumptions the trials do not test.', w:true},
          {n:4,r:0,o:4,t:'Thin and entirely observational. Digital divide effects are described but never measured as an outcome.', w:true} ],
        [ {n:14,r:7,o:7,t:'Present but smaller, and the trials skew towards the younger end of the over-65 band.'},
          {n:9,r:3,o:6,t:'Some evidence, mostly observational, and usability is usually reported instead of adherence.'},
          {n:8,r:4,o:4,t:'Some evidence, with two trials reporting opposite directions of effect on wellbeing.', c:true},
          {n:2,r:0,o:2,t:'Two modelled analyses, neither validated against trial data in this age group.', w:true},
          {n:0,t:''} ],
        [ {n:11,r:5,o:6,t:'Present. Most studies enrol people with diabetes plus one comorbidity; three or more is rare.'},
          {n:5,r:1,o:4,t:'Thin, and complicated by polypharmacy, which most of these studies exclude rather than study.', w:true},
          {n:6,r:2,o:4,t:'Thin. Two studies find improvement, one finds burden from the intervention itself.', c:true},
          {n:1,r:0,o:1,t:'A single costing study, in one health system, not generalisable.', w:true},
          {n:0,t:''} ],
        [ {n:9,r:4,o:5,t:'Present but concentrated in three countries, which limits what can be said about the setting generally.'},
          {n:3,r:0,o:3,t:'Thin and observational. Retention is reported; adherence to the intervention is not.', w:true},
          {n:2,r:1,o:1,t:'Two studies only, with different instruments and no shared outcome.'},
          {n:0,t:''},
          {n:7,r:1,o:6,t:'The one place equity is studied directly, though mostly through access surveys rather than outcomes.'} ],
        [ {n:6,r:3,o:3,t:'Present for gestational diabetes, with short follow-up in every trial — none past delivery.'},
          {n:4,r:2,o:2,t:'Thin, and adherence is measured over weeks rather than the whole pregnancy.'},
          {n:1,r:0,o:1,t:'One study, qualitative in design, reported as quality of life in its abstract.', w:true},
          {n:0,t:''},
          {n:0,t:''} ]
      ],
      /* what to say where a cell is empty: the gap, and what would close it */
      gaps: {
        '1,4': ['No study measures whether digital self-management widens or narrows access among people over 65.',
                'A cohort study with digital-literacy and device-access measured at baseline, and outcomes reported by that stratum rather than adjusted for it.'],
        '2,4': ['Nothing on equity of access for people with multiple long-term conditions — the group most likely to be excluded by the design of these tools.',
                'A prospective cohort recruiting through primary care rather than through the platform itself, which is what causes the selection in the first place.'],
        '3,3': ['No economic evaluation in a low-resource setting, though this is exactly where cost-effectiveness decides whether a programme is adopted.',
                'A trial-based economic evaluation alongside one of the four existing effectiveness trials, using local unit costs rather than transferred ones.'],
        '4,3': ['No cost-effectiveness evidence in pregnancy or gestational diabetes at all.',
                'An economic evaluation nested in an existing GDM trial, with a time horizon that runs past delivery to capture downstream type 2 diabetes risk.'],
        '4,4': ['Nothing on equity of access in pregnancy, despite antenatal digital programmes being rolled out at scale.',
                'A service evaluation across a whole maternity population, reporting uptake and outcomes by deprivation and language rather than in aggregate.']
      },
      say: 'Twenty-five cells, five of them empty. <b>The empty cells are the deliverable</b> — they are where a funder will believe you when you say the work has not been done. Notice the shape as well as the holes: the evidence thins out from left to right, so the outcomes that decide whether a programme gets adopted are the ones least studied.'
    },
    str: {
      q: 'Machine-learning triage of imaging in acute stroke',
      frame: '5 settings × 5 evidence domains · mapped from one systematic search',
      rows: ['Comprehensive stroke centres', 'District general hospitals', 'Pre-hospital and ambulance', 'Low- and middle-income settings', 'Paediatric stroke'],
      cols: ['Diagnostic accuracy', 'Time to treatment', 'Clinical outcomes', 'External validation', 'Implementation and workflow'],
      cells: [
        [ {n:52,r:2,o:50,t:'Heavily studied, and almost entirely retrospective. Two prospective accuracy studies in the whole map.', w:true},
          {n:19,r:3,o:16,t:'Present. Before-and-after designs dominate, which cannot separate the algorithm from the pathway change that came with it.', w:true},
          {n:8,r:2,o:6,t:'Thin for the outcome that matters. Two randomised trials, both with functional outcome as a secondary endpoint.'},
          {n:14,r:0,o:14,t:'Present, but most external validation is on data from the same three public datasets the models were trained against.', w:true},
          {n:11,r:0,o:11,t:'Present, mostly survey and interview work on radiologist acceptance.'} ],
        [ {n:17,r:0,o:17,t:'Present and retrospective. Case mix differs from the centres where these models were developed.', w:true},
          {n:9,r:1,o:8,t:'Some evidence, and this is where time savings would matter most — transfer decisions rather than in-house workflow.'},
          {n:3,r:0,o:3,t:'Thin. Three cohorts, none powered for functional outcome.', w:true},
          {n:5,r:0,o:5,t:'Thin, and two of the five report accuracy materially below the development figures.', c:true},
          {n:6,r:0,o:6,t:'Some implementation work, which repeatedly finds the bottleneck is not the algorithm.'} ],
        [ {n:6,r:0,o:6,t:'Thin. Mobile stroke units only, which is a small and unrepresentative slice of pre-hospital care.', w:true},
          {n:4,r:1,o:3,t:'Thin. One randomised comparison, in a single city.'},
          {n:1,r:0,o:1,t:'A single cohort, underpowered, reported as positive in its abstract.', w:true},
          {n:0,t:''},
          {n:3,r:0,o:3,t:'Three qualitative studies on paramedic workflow.', w:true} ],
        [ {n:8,r:0,o:8,t:'Present, and the most interesting finding on the map: accuracy holds, but scanner heterogeneity is barely reported.', w:true},
          {n:2,r:0,o:2,t:'Two studies, both in settings with CT already on site — not the constraint that actually binds.', w:true},
          {n:0,t:''},
          {n:3,r:0,o:3,t:'Three external validations, all showing a drop in specificity that the papers attribute to case mix.'},
          {n:0,t:''} ],
        [ {n:2,r:0,o:2,t:'Two retrospective series. Paediatric stroke is rare, and the models were not trained on it.', w:true},
          {n:0,t:''},
          {n:0,t:''},
          {n:0,t:''},
          {n:0,t:''} ]
      ],
      gaps: {
        '2,3': ['No external validation of any pre-hospital model on data from a different service. Every pre-hospital result comes from the system that built the model.',
                'A multi-service validation using prospectively collected ambulance imaging, with the model frozen before the data are seen.'],
        '3,2': ['No clinical outcome evidence from low- or middle-income settings, where the case for automated triage is strongest and the evidence is weakest.',
                'A prospective cohort with ninety-day modified Rankin outcomes, run in the setting rather than transferred from a high-income one.'],
        '3,4': ['Nothing on implementation or workflow in low- and middle-income settings — no study of what it takes to run this where the constraint is staffing rather than software.',
                'A mixed-methods implementation study reporting the workflow, the failure modes and the staffing cost, not only the accuracy.'],
        '4,1': ['No evidence on time to treatment in paediatric stroke.',
                'A multicentre registry analysis, since a trial in a condition this rare is not realistic and a registry is.'],
        '4,2': ['No clinical outcome evidence in paediatric stroke at all.',
                'Long-term outcomes collected through an existing paediatric stroke registry, linked to whether automated triage was used.'],
        '4,3': ['No external validation in children. Models trained on adult imaging are being applied to paediatric scans with nothing published on how they perform.',
                'A retrospective multicentre validation on paediatric scans — feasible now, and the cheapest study on this map.'],
        '4,4': ['No implementation evidence in paediatric services.',
                'A service evaluation in two or three paediatric centres, reported whether or not the tool performs well.']
      },
      say: 'Twenty-five cells, seven empty, and almost every filled one carries the same weakness: <b>the designs are retrospective</b>. A map like this changes what you write in a grant application — the case is no longer that the topic is interesting, it is that a specific row and a specific column have never met.'
    }
  };

  const FILTERS = {
    none:    function(c){ return c.n === 0; },
    weak:    function(c){ return c.n > 0 && c.w; },
    conflict:function(c){ return c.n > 0 && c.c; },
    all:     null
  };

  const state = { topic:'dm', sel:[0,0], filter:'all' };

  const topWrap = root.querySelector('[data-egm-top]');
  const sumWrap = root.querySelector('[data-egm-sum]');
  const mapWrap = root.querySelector('[data-egm-map]');
  const side    = root.querySelector('[data-egm-side]');
  const frame   = root.querySelector('[data-egm-frame]');

  function T(){ return TOPICS[state.topic]; }
  function cell(r,c){ return T().cells[r][c]; }

  function klass(c){
    if(c.n === 0) return 'none';
    if(c.n >= 8)  return 'rich';
    if(c.n >= 3)  return 'some';
    return 'thin';
  }
  function size(n){
    if(!n) return 26;
    return Math.round(24 + Math.min(1, Math.sqrt(n) / Math.sqrt(52)) * 20);
  }

  function tally(){
    const t = T();
    let studies = 0, empty = 0, weak = 0, conflict = 0;
    t.cells.forEach(function(row){ row.forEach(function(c){
      studies += c.n || 0;
      if(!c.n) empty++;
      else { if(c.w) weak++; if(c.c) conflict++; }
    }); });
    return { studies:studies, empty:empty, weak:weak, conflict:conflict };
  }

  function renderSummary(){
    const s = tally();
    sumWrap.innerHTML =
      '<button type="button" class="egm__s" data-f="all" aria-pressed="' + (state.filter==='all') + '">' +
        '<b>' + s.studies + '</b><span>Studies mapped in the search</span></button>' +
      '<button type="button" class="egm__s" data-f="none" aria-pressed="' + (state.filter==='none') + '">' +
        '<b>' + s.empty + '</b><span>Cells with no evidence at all</span></button>' +
      '<button type="button" class="egm__s" data-f="weak" aria-pressed="' + (state.filter==='weak') + '">' +
        '<b>' + s.weak + '</b><span>Cells carried by weak designs only</span></button>' +
      '<button type="button" class="egm__s" data-f="conflict" aria-pressed="' + (state.filter==='conflict') + '">' +
        '<b>' + s.conflict + '</b><span>Cells where the studies disagree</span></button>';
    sumWrap.querySelectorAll('.egm__s').forEach(function(b){
      b.addEventListener('click', function(){
        state.filter = (state.filter === b.dataset.f) ? 'all' : b.dataset.f;
        renderSummary(); renderMap();
      });
    });
  }

  function renderMap(){
    const t = T();
    const narrow = window.matchMedia('(max-width:719px)').matches;
    const cols = (narrow ? 'minmax(56px,.8fr) repeat(' : 'minmax(104px,1.1fr) repeat(') +
                 t.cols.length + (narrow ? ', minmax(44px,1fr))' : ', minmax(76px,1fr))');
    const test = FILTERS[state.filter];

    let h = '<div class="egm__grid' + (test ? ' is-filtered' : '') + '" style="--cols:' + cols + '" role="grid">';
    h += '<div class="egm__hrow" role="row"><span class="egm__corner">Population &darr; / Outcome &rarr;</span>' +
         t.cols.map(function(c){ return '<span class="egm__ch">' + c + '</span>'; }).join('') + '</div>';

    t.rows.forEach(function(rname, ri){
      h += '<div class="egm__row" role="row"><span class="egm__rh">' + rname + '</span>';
      t.cols.forEach(function(cname, ci){
        const c = cell(ri, ci);
        const k = klass(c);
        const hit = test ? test(c) : false;
        const on = (state.sel[0] === ri && state.sel[1] === ci);
        const s = size(c.n);
        h += '<button type="button" class="egm__c egm__c--' + k + (on ? ' is-on' : '') +
             (hit ? ' is-hit' : '') + '" data-r="' + ri + '" data-c="' + ci + '" role="gridcell" ' +
             'aria-label="' + rname + ', ' + cname + ': ' + (c.n || 'no') + ' stud' + (c.n === 1 ? 'y' : 'ies') + '">' +
             '<span class="egm__b" style="width:' + s + 'px;height:' + s + 'px">' +
               (c.n ? c.n : '—') + '</span>' +
             (c.n && c.c ? '<i class="egm__f egm__f--conflict" aria-hidden="true">!</i>' : '') +
             (c.n && c.w && !c.c ? '<i class="egm__f egm__f--weak" aria-hidden="true">◐</i>' : '') +
             '</button>';
      });
      h += '</div>';
    });
    h += '</div>';

    h += '<p class="egm__key">' +
      '<span><i class="k-rich"></i>8 or more studies</span>' +
      '<span><i class="k-some"></i>3 to 7</span>' +
      '<span><i class="k-thin"></i>1 to 2</span>' +
      '<span><i class="k-none"></i>No evidence</span>' +
      '<span><i class="k-weak"></i>Weak designs only</span>' +
      '<span><i class="k-conf"></i>Studies disagree</span>' +
      '</p>';

    mapWrap.innerHTML = h;
    mapWrap.querySelectorAll('.egm__c').forEach(function(b){
      b.addEventListener('click', function(){
        state.sel = [ +b.dataset.r, +b.dataset.c ];
        renderMap(); renderSide();
      });
    });
  }

  function renderSide(){
    const t = T();
    const ri = state.sel[0], ci = state.sel[1];
    const c = cell(ri, ci);
    const key = ri + ',' + ci;

    let h = '<p class="egm__lab">Selected cell</p>';
    h += '<p class="egm__cell">' + t.rows[ri] + ' &times; ' + t.cols[ci] + '</p>';
    h += '<p class="egm__meta">' + (c.n ? c.n + ' stud' + (c.n === 1 ? 'y' : 'ies') + ' found'
                                        : 'No studies found') + ' &middot; ' + t.q + '</p>';

    if(c.n){
      h += '<p class="egm__h">What the evidence is</p>';
      h += '<div class="egm__des">';
      if(c.r) h += '<div class="egm__d">Randomised<b>' + c.r + '</b></div>';
      if(c.o) h += '<div class="egm__d">Observational<b>' + c.o + '</b></div>';
      h += '<div class="egm__d">Total<b>' + c.n + '</b></div>';
      h += '</div>';
      h += '<p class="egm__t">' + c.t + '</p>';
      if(c.c) h += '<p class="egm__flag"><b>Contradictory findings.</b> Studies in this cell point in different directions. That is a gap in its own right &mdash; and usually a more publishable one than an empty cell, because the question is already known to matter.</p>';
      if(c.w) h += '<p class="egm__flag egm__flag--weak"><b>Methodological gap.</b> The evidence here rests on designs that cannot support the claims made from it. There is literature; there is not yet evidence.</p>';
    } else {
      const g = t.gaps[key];
      h += '<p class="egm__h">The gap</p>';
      h += '<p class="egm__t">' + (g ? g[0] : 'No study in this literature addresses this population for this outcome.') + '</p>';
      h += '<p class="egm__h">What would close it</p>';
      h += '<p class="egm__t">' + (g ? g[1] : 'A study designed for this cell specifically, rather than a broader one that reports it as a subgroup.') + '</p>';
      h += '<p class="egm__flag"><b>This is what goes in the proposal.</b> A named cell with nothing in it, and a study design that would fill it, is an argument a funding committee can act on. &ldquo;More research is needed&rdquo; is not.</p>';
    }

    h += '<p class="egm__h">On this map</p>';
    h += '<p class="egm__t">' + t.say + '</p>';
    side.innerHTML = h;
  }

  function setTopic(id){
    state.topic = id; state.sel = [0,0]; state.filter = 'all';
    topWrap.querySelectorAll('.egm__q').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.dataset.topic === id)); });
    frame.textContent = T().frame;
    renderSummary(); renderMap(); renderSide();
  }

  topWrap.querySelectorAll('.egm__q').forEach(function(b){
    b.addEventListener('click', function(){ setTopic(b.dataset.topic); });
  });

  // the column track differs above and below the phone breakpoint, so the map is
  // redrawn when the viewport crosses it rather than only on load
  const mq = window.matchMedia('(max-width:719px)');
  const onMq = function(){ renderMap(); };
  if(mq.addEventListener) mq.addEventListener('change', onMq);
  else if(mq.addListener) mq.addListener(onMq);

  setTopic('dm');
})();


/* ---- sample size: the calculation a statistical reviewer asks for first ----
   Standard two-group formulas, computed live: two proportions with the pooled
   variance under the null, two means, and the log-rank event requirement with
   an exponential event probability over accrual and follow-up. Nothing is
   looked up; every figure on screen is the arithmetic a statistician would
   reproduce in nQuery, PASS or R. */
(function sampleSize(){
  const root = document.querySelector('[data-pwr]');
  if(!root) return;

  const state = {
    kind: 'bin',
    p1: 0.22, p2: 0.16,            // binary: control and treatment event rates
    sd: 12, delta: 4,              // continuous: SD and difference to detect
    med: 18, hr: 0.72, acc: 24, fu: 18,  // time to event: months
    alpha: 0.05, power: 0.90, ratio: 1, drop: 0.12
  };

  /* inverse normal, Acklam's rational approximation — accurate to ~1e-9,
     which is several orders more than a sample size needs */
  function z(p){
    const a=[-3.969683028665376e1,2.209460984245205e2,-2.759285104469687e2,1.383577518672690e2,-3.066479806614716e1,2.506628277459239],
          b=[-5.447609879822406e1,1.615858368580409e2,-1.556989798598866e2,6.680131188771972e1,-1.328068155288572e1],
          c=[-7.784894002430293e-3,-3.223964580411365e-1,-2.400758277161838,-2.549732539343734,4.374664141464968,2.938163982698783],
          d=[7.784695709041462e-3,3.224671290700398e-1,2.445134137142996,3.754408661907416];
    const pl=0.02425;
    let q,r;
    if(p<pl){ q=Math.sqrt(-2*Math.log(p));
      return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    if(p>1-pl){ q=Math.sqrt(-2*Math.log(1-p));
      return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    q=p-0.5; r=q*q;
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q /
           (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }

  /* probability of an event by analysis under exponential survival, with
     uniform accrual over A months and F months of further follow-up */
  function pEvent(median, A, F){
    const lam = Math.log(2) / median;
    if(lam * A < 1e-9) return 1 - Math.exp(-lam * F);
    return 1 - (Math.exp(-lam * F) - Math.exp(-lam * (A + F))) / (lam * A);
  }

  /* returns per-arm n for the control arm (n2 = ratio * n1), plus events */
  function calc(over){
    const s = Object.assign({}, state, over || {});
    const za = z(1 - s.alpha / 2), zb = z(s.power), k = s.ratio;
    let n1, events = null, note = '';

    if(s.kind === 'bin'){
      const d = Math.abs(s.p1 - s.p2);
      if(d < 1e-6) return null;
      const pbar = (s.p1 + k * s.p2) / (1 + k);
      const num = za * Math.sqrt((1 + 1 / k) * pbar * (1 - pbar)) +
                  zb * Math.sqrt(s.p1 * (1 - s.p1) + s.p2 * (1 - s.p2) / k);
      n1 = (num * num) / (d * d);
    } else if(s.kind === 'cont'){
      if(Math.abs(s.delta) < 1e-9) return null;
      n1 = (1 + 1 / k) * Math.pow(za + zb, 2) * s.sd * s.sd / (s.delta * s.delta);
    } else {
      const lhr = Math.log(s.hr);
      if(Math.abs(lhr) < 1e-6) return null;
      events = Math.pow(1 + k, 2) / k * Math.pow(za + zb, 2) / (lhr * lhr);
      const pc = pEvent(s.med, s.acc, s.fu);
      const pt = pEvent(s.med / s.hr, s.acc, s.fu);
      const pooled = (pc + k * pt) / (1 + k);
      n1 = events / (pooled * (1 + k));
      note = 'Event probability ' + (pooled * 100).toFixed(0) + '% by analysis';
    }

    const infl = 1 / (1 - s.drop);
    const c = Math.ceil(n1 * infl), t = Math.ceil(n1 * k * infl);
    return { n1:c, n2:t, total:c + t, events: events ? Math.ceil(events) : null,
             raw: Math.ceil(n1) + Math.ceil(n1 * k), note:note };
  }

  /* ---- rendering ---- */
  const seg   = root.querySelector('[data-pwr-kind]');
  const fields= root.querySelector('[data-pwr-fields]');
  const out   = root.querySelector('[data-pwr-out]');
  const frame = root.querySelector('[data-pwr-frame]');

  function num(n){ return n.toLocaleString('en-GB'); }

  const FIELDS = {
    bin: [
      ['p1', 'Event rate in the control arm', 0.02, 0.60, 0.005, function(v){ return (v*100).toFixed(1) + '%'; }],
      ['p2', 'Event rate you expect on treatment', 0.01, 0.59, 0.005, function(v){ return (v*100).toFixed(1) + '%'; }]
    ],
    cont: [
      ['sd', 'Standard deviation of the outcome', 2, 40, 0.5, function(v){ return v.toFixed(1); }],
      ['delta', 'Difference you want to detect', 0.5, 20, 0.5, function(v){ return v.toFixed(1); }]
    ],
    tte: [
      ['med', 'Median survival on control', 3, 48, 1, function(v){ return v + ' months'; }],
      ['hr', 'Hazard ratio you expect', 0.40, 0.95, 0.01, function(v){ return v.toFixed(2); }],
      ['acc', 'Accrual period', 6, 48, 1, function(v){ return v + ' months'; }],
      ['fu', 'Follow-up after the last patient', 0, 48, 1, function(v){ return v + ' months'; }]
    ]
  };

  const FRAMES = {
    bin:  'Two proportions · two-sided · pooled variance under the null',
    cont: 'Two means · two-sided · equal variances',
    tte:  'Log-rank · two-sided · exponential survival, uniform accrual'
  };

  function buildFields(){
    const fs = FIELDS[state.kind];
    fields.innerHTML = fs.map(function(f){
      const key = f[0];
      return '<label class="pwr__f"><span class="pwr__ft"><span>' + f[1] +
             '</span><b data-v="' + key + '">' + f[5](state[key]) + '</b></span>' +
             '<input class="pwr__r" type="range" data-k="' + key + '" min="' + f[2] +
             '" max="' + f[3] + '" step="' + f[4] + '" value="' + state[key] +
             '" aria-label="' + f[1] + '"></label>';
    }).join('');
    fields.querySelectorAll('input').forEach(function(i){
      i.addEventListener('input', function(){
        const k = i.dataset.k;
        state[k] = parseFloat(i.value);
        // the treatment rate cannot sit above the control rate in this framing
        if(state.kind === 'bin'){
          if(k === 'p1' && state.p2 >= state.p1) state.p2 = Math.max(0.01, state.p1 - 0.005);
          if(k === 'p2' && state.p2 >= state.p1) state.p1 = Math.min(0.60, state.p2 + 0.005);
          syncField('p1'); syncField('p2');
        }
        syncField(k);
        render();
      });
    });
  }

  function syncField(key){
    const f = FIELDS[state.kind].filter(function(x){ return x[0] === key; })[0];
    if(!f) return;
    const lab = fields.querySelector('[data-v="' + key + '"]');
    const inp = fields.querySelector('[data-k="' + key + '"]');
    if(lab) lab.textContent = f[5](state[key]);
    if(inp) inp.value = state[key];
  }

  /* The curve sweeps the size of the effect rather than the raw parameter, from
     just under half the current effect to double it. Sweeping the parameter
     itself runs into the asymptote at no effect, where n goes to infinity and
     flattens everything worth looking at into a line along the axis. */
  function curve(){
    const pts = [];
    let e0, apply, lab;
    if(state.kind === 'bin'){
      e0 = state.p1 - state.p2;
      apply = function(e){ return { p2: Math.max(0.002, state.p1 - e) }; };
      lab = function(e){ return (e * 100).toFixed(1) + 'pp'; };
    } else if(state.kind === 'cont'){
      e0 = state.delta;
      apply = function(e){ return { delta: e }; };
      lab = function(e){ return e.toFixed(1); };
    } else {
      e0 = -Math.log(state.hr);
      apply = function(e){ return { hr: Math.min(0.995, Math.exp(-e)) }; };
      lab = function(e){ return Math.exp(-e).toFixed(2); };
    }
    const lo = e0 * 0.45, hi = e0 * 2;
    for(let i = 0; i <= 44; i++){
      const e = lo + (hi - lo) * i / 44;
      const r = calc(apply(e));
      if(r && isFinite(r.total)) pts.push([e, r.total]);
    }
    return { pts:pts, e0:e0, lo:lo, hi:hi, lab:lab };
  }

  function chart(){
    const c = curve();
    if(c.pts.length < 3) return '';
    const W = 640, H = 190, L = 64, R = 12, T = 12, B = 34;
    const ys = c.pts.map(function(p){ return p[1]; });
    const ymax = Math.max.apply(null, ys) * 1.06, ymin = 0;
    // for a binary or continuous outcome a smaller effect is further left;
    // for a hazard ratio a smaller effect is a ratio closer to 1, so flip it
    const X = function(v){ return L + (v - c.lo) / (c.hi - c.lo) * (W - L - R); };
    const Y = function(v){ return T + (1 - (v - ymin) / (ymax - ymin)) * (H - T - B); };

    const d = c.pts.map(function(p, i){ return (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' ');
    const area = d + ' L' + X(c.pts[c.pts.length-1][0]).toFixed(1) + ' ' + Y(0).toFixed(1) +
                 ' L' + X(c.pts[0][0]).toFixed(1) + ' ' + Y(0).toFixed(1) + ' Z';

    const here = calc();
    const hx = X(c.e0), hy = Y(here.total);

    let g = '';
    for(let i = 0; i <= 3; i++){
      const yv = ymin + (ymax - ymin) * i / 3;
      g += '<line x1="' + L + '" y1="' + Y(yv).toFixed(1) + '" x2="' + (W-R) + '" y2="' + Y(yv).toFixed(1) + '"/>';
    }
    let ticks = '';
    for(let i = 0; i <= 3; i++){
      const yv = ymin + (ymax - ymin) * i / 3;
      ticks += '<text class="pwr__tick" x="' + (L-8) + '" y="' + (Y(yv)+3).toFixed(1) +
               '" text-anchor="end">' + num(Math.round(yv/10)*10) + '</text>';
    }
    for(let i = 0; i <= 4; i++){
      const xv = c.lo + (c.hi - c.lo) * i / 4;
      ticks += '<text class="pwr__tick" x="' + X(xv).toFixed(1) + '" y="' + (H-B+16) +
               '" text-anchor="middle">' + c.lab(xv) + '</text>';
    }

    const xlab = state.kind === 'bin' ? 'Absolute reduction sought, in percentage points — further left is a smaller effect and a bigger trial'
              : state.kind === 'cont' ? 'Difference sought — further left is a smaller difference and a bigger trial'
              : 'Hazard ratio sought — further left is a weaker effect and a bigger trial';

    return '<div class="pwr__chart"><p class="pwr__ct"><b>How the trial grows as the effect shrinks</b>' +
      '<span>Total participants, both arms, after drop-out</span></p>' +
      '<svg class="pwr__svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Total sample size against the size of the effect being sought">' +
      '<g class="pwr__grid">' + g + '</g>' +
      '<path class="pwr__area" d="' + area + '"/>' +
      '<path class="pwr__line" d="' + d + '"/>' +
      '<line class="pwr__drop" x1="' + hx.toFixed(1) + '" y1="' + hy.toFixed(1) + '" x2="' + hx.toFixed(1) +
        '" y2="' + Y(0).toFixed(1) + '"/>' +
      '<circle class="pwr__dot" cx="' + hx.toFixed(1) + '" cy="' + hy.toFixed(1) + '" r="4.5"/>' +
      '<line class="pwr__axis" x1="' + L + '" y1="' + Y(0).toFixed(1) + '" x2="' + (W-R) + '" y2="' + Y(0).toFixed(1) + '"/>' +
      ticks + '</svg>' +
      '<p class="pwr__note">' + xlab + '. The curve is not a straight line: halving the effect you are looking for roughly quadruples the trial.</p></div>';
  }

  function verdict(r){
    const half = state.kind === 'bin'
        ? calc({ p2: state.p1 - (state.p1 - state.p2) / 2 })
        : state.kind === 'cont'
        ? calc({ delta: state.delta / 2 })
        : calc({ hr: 1 - (1 - state.hr) / 2 });

    let s = '';
    if(state.kind === 'bin'){
      const abs = ((state.p1 - state.p2) * 100).toFixed(1);
      const rel = ((1 - state.p2 / state.p1) * 100).toFixed(0);
      s += 'You are powered to detect an absolute reduction of <b>' + abs +
           ' percentage points</b>, which is a <b>' + rel + '% relative reduction</b>. ';
    } else if(state.kind === 'cont'){
      s += 'You are powered to detect a difference of <b>' + state.delta.toFixed(1) +
           '</b>, which is <b>' + (state.delta / state.sd).toFixed(2) +
           ' standard deviations</b> — the number a reviewer will convert it to. ';
    } else {
      s += 'You are powered to detect a hazard ratio of <b>' + state.hr.toFixed(2) +
           '</b>, and the analysis needs <b>' + num(r.events) + ' events</b> rather than a number of patients. ';
    }

    if(half && isFinite(half.total)){
      s += 'If the true effect is only half that size, the same trial needs <b>' + num(half.total) +
           ' participants</b> instead of ' + num(r.total) + ' &mdash; ' +
           (half.total / r.total).toFixed(1) + ' times as many. ';
    }
    s += '<b>That multiplier is the whole argument for doing this before recruitment rather than after.</b> ' +
         'A trial that enrols the number it can afford and reports the effect it happened to find is the ' +
         'single most common reason a statistical reviewer recommends rejection.';
    return s;
  }

  function render(){
    const r = calc();
    frame.textContent = FRAMES[state.kind];
    if(!r){ out.innerHTML = '<p class="pwr__say">No difference to detect — set an effect size.</p>'; return; }

    let h = '<div class="pwr__head">';
    h += '<div class="pwr__h pwr__h--key"><b>' + num(r.total) + '</b><span>Total participants, both arms, after ' +
         (state.drop * 100).toFixed(0) + '% drop-out</span></div>';
    h += '<div class="pwr__h"><b>' + num(r.n1) + ' : ' + num(r.n2) +
         '</b><span>Control arm : treatment arm, at ' + (state.ratio === 1 ? '1:1' : '1:' + state.ratio) + '</span></div>';
    h += r.events
       ? '<div class="pwr__h"><b>' + num(r.events) + '</b><span>Events required &mdash; ' + r.note + '</span></div>'
       : '<div class="pwr__h"><b>' + num(r.raw) + '</b><span>Before allowing for drop-out</span></div>';
    h += '</div>';

    h += chart();
    h += '<p class="pwr__say">' + verdict(r) + '</p>';
    h += '<ul class="pwr__ask">' +
      '<li><i>Ask 1</i><span><b>Where did the control rate come from?</b> A pilot study, a registry or a published trial &mdash; and cite it. An assumed control rate with no source is the fastest way to lose a methods reviewer.</span></li>' +
      '<li><i>Ask 2</i><span><b>Is the effect you powered for clinically meaningful, or merely detectable?</b> These are different questions and only the first one justifies the trial.</span></li>' +
      '<li><i>Ask 3</i><span><b>Was this calculation done before recruitment?</b> The registered protocol is what proves it. Recalculating afterwards to match the sample you achieved is a different thing entirely.</span></li>' +
      '<li><i>Ask 4</i><span><b>What happens to the analysis if recruitment falls short?</b> Say so in the protocol, rather than discovering it in the discussion section.</span></li>' +
      '</ul>';

    out.innerHTML = h;
  }

  /* ---- wiring ---- */
  seg.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click', function(){
      state.kind = b.dataset.kind;
      seg.querySelectorAll('button').forEach(function(x){
        x.setAttribute('aria-pressed', String(x.dataset.kind === state.kind)); });
      buildFields(); render();
    });
  });
  root.querySelectorAll('[data-pwr-seg]').forEach(function(g){
    g.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){
        state[g.dataset.pwrSeg] = parseFloat(b.dataset.v);
        g.querySelectorAll('button').forEach(function(x){
          x.setAttribute('aria-pressed', String(parseFloat(x.dataset.v) === state[g.dataset.pwrSeg])); });
        render();
      });
    });
  });

  buildFields();
  render();
})();


/* ── Funder scoresheet ─────────────────────────────────────────────────
   Six attributes of a proposal, scored under five funders' own published
   rubrics. Each funder is rendered in its own terms: NIH on 1-9 with
   Factor 1 as the ceiling, Horizon Europe on 0-5 against its thresholds,
   ERC as a letter grade against a single criterion, Wellcome as published
   weightings with no invented scale, ICMR as its five published criteria
   with no invented scale. Every rule implemented here is sourced in the
   note printed under the relevant panel. */
/* ── Register demonstrator ─────────────────────────────────────────────
   One finding, written as each destination document would write it. The
   figures in each scenario are fixed and internally consistent across
   every document, which is the point: the numbers do not change, the
   register does. */
/* ── Pipeline builder ──────────────────────────────────────────────────
   Six assays, each with the analysis route it actually takes: stages,
   named tools, the file format that leaves each stage, the gate it has
   to pass, and the decision that most often invalidates the result.
   Tools marked deprecated are shown struck through on purpose. */
/* ── Manuscript skeleton ───────────────────────────────────────────────
   Study type selects the reporting guideline that governs the paper;
   the word limit apportions the manuscript across IMRaD. The checklist
   items shown per section are the ones that section is responsible for
   under that guideline, and the cut line is what authors delete first
   and reviewers notice first. */
(function(){
  const root = document.querySelector('[data-imr]');
  if(!root) return;
  const typeBox = root.querySelector('[data-imr-types]');
  const glBox   = root.querySelector('[data-imr-gl]');
  const secBox  = root.querySelector('[data-imr-secs]');
  const range   = root.querySelector('[data-imr-range]');
  const wv      = root.querySelector('[data-imr-wv]');
  const frame   = root.querySelector('[data-imr-frame]');
  if(!typeBox || !glBox || !secBox || !range) return;

  /* share of the body word count, per section, by study type */
  const T = [
  { id:'rct', k:'Randomised trial', g:'CONSORT',
    gl:'<b>CONSORT 2025</b>, with the extension for your design &mdash; cluster, crossover, stepped-wedge, ' +
       'non-inferiority, pilot and feasibility, or AI-enabled intervention. <b>SPIRIT</b> governs the ' +
       'protocol the paper reports, and prospective registration is a condition of consideration at every ' +
       'ICMJE member journal. A completed checklist is a submitted item at most journals, and filling it in ' +
       'honestly is what surfaces the missing methods detail before a reviewer does.',
    s:{ intro:0.14, meth:0.30, res:0.26, disc:0.30 },
    items:{
      intro:['Scientific background and the rationale for the comparison',
             'Specific objectives or pre-specified hypotheses'],
      meth:['Trial design, allocation ratio, and any changes after it started',
            'Eligibility criteria, and the settings and locations of the data',
            'Interventions for each group in enough detail to replicate',
            'Primary and secondary outcomes, defined and with any changes flagged',
            'How the sample size was determined, and any interim analyses',
            'Sequence generation, allocation concealment, and who did each',
            'Who was blinded, and how',
            'Statistical methods for primary and secondary outcomes, and for subgroups'],
      res:['A flow diagram: randomised, received intervention, analysed, with losses',
           'Dates of recruitment and follow-up, and why the trial ended',
           'A table of baseline characteristics by group',
           'Numbers analysed in each group, and whether by original assignment',
           'For each outcome, the effect size with its precision',
           'All harms in each group, with the same care as the benefits'],
      disc:['Limitations, naming the sources of potential bias and imprecision',
            'Generalisability to the population you actually studied',
            'Interpretation consistent with the results, balanced against other evidence',
            'Registration number, protocol availability, and funding']
    },
    cut:{ intro:'The third paragraph of background. Reviewers do not need the field explained; they need ' +
                'the gap this trial closes.',
          meth:'Allocation concealment and who was blinded. These are two lines, they are the two lines a ' +
               'methods reviewer looks for first, and they are routinely the two that go.',
          res:'The harms table, moved to a supplement. CONSORT asks for harms in the results, and a paper ' +
              'that reports benefits fully and harms briefly is telling a reviewer something.',
          disc:'The limitations paragraph, reduced to a generic sentence. Naming your actual weaknesses is ' +
               'more persuasive than hiding them, because the reviewer will find them either way.' } },

  { id:'obs', k:'Observational study', g:'STROBE',
    gl:'<b>STROBE</b>, for cohort, case-control and cross-sectional studies. The threats here are ' +
       'confounding and selection rather than allocation, so the checklist spends its weight on how ' +
       'participants were selected, how exposure and outcome were measured, and which confounders were ' +
       'addressed and how. <b>RECORD</b> extends it for studies using routinely collected health data, ' +
       'and <b>STROBE-MR</b> for Mendelian randomisation.',
    s:{ intro:0.14, meth:0.30, res:0.28, disc:0.28 },
    items:{
      intro:['Scientific background and rationale',
             'Pre-specified objectives, including any pre-specified hypotheses'],
      meth:['Study design, stated early in the paper rather than inferred from it',
            'Setting, locations, and the dates of recruitment, exposure and follow-up',
            'Eligibility criteria and the methods of selection &mdash; and for case-control, the matching',
            'All variables defined: outcomes, exposures, predictors, confounders, effect modifiers',
            'Data sources and measurement methods, with comparability across groups',
            'What was done to address potential sources of bias',
            'How the study size was arrived at',
            'Statistical methods including confounding, subgroups, missing data and loss to follow-up'],
      res:['Numbers at each stage: eligible, examined, confirmed, included, analysed',
           'Characteristics of participants, with missing data for each variable',
           'Numbers of outcome events, or summary measures over time',
           'Unadjusted and confounder-adjusted estimates, with which confounders and why',
           'Category boundaries where continuous variables were grouped',
           'Analyses of subgroups, interactions, and sensitivity'],
      disc:['Key results referenced to the objectives',
            'Limitations, including the direction and magnitude of potential bias',
            'A cautious overall interpretation, given the design',
            'Generalisability, and the funding source']
    },
    cut:{ intro:'Nothing, usually. The introduction is already the shortest section and cutting it does ' +
                'not buy enough to matter.',
          meth:'How confounders were selected. An adjusted estimate whose adjustment set is unexplained ' +
               'is the commonest reason an observational paper is sent back.',
          res:'The unadjusted estimates, leaving only the adjusted ones. STROBE asks for both, and the ' +
              'difference between them is frequently the most informative number in the paper.',
          disc:'The direction of the bias you are acknowledging. Saying residual confounding is possible ' +
               'costs nothing; saying which way it would push the estimate is the useful part.' } },

  { id:'diag', k:'Diagnostic accuracy', g:'STARD',
    gl:'<b>STARD 2015</b>, for any study estimating how well a test identifies a condition &mdash; ' +
       'including an algorithm. The checklist exists because diagnostic papers routinely omit the ' +
       'reference standard, the flow of participants, and the interval between index test and reference. ' +
       'Where the index test is a model, <b>TRIPOD+AI</b> applies as well, and where it is used in ' +
       'practice, <b>DECIDE-AI</b>.',
    s:{ intro:0.13, meth:0.32, res:0.30, disc:0.25 },
    items:{
      intro:['Scientific and clinical background, including the intended use and role of the index test',
             'Study objectives and hypotheses'],
      meth:['Whether data collection was prospective or retrospective, and eligibility criteria',
            'Where and when participants were identified, and whether they formed a consecutive series',
            'The index test and the reference standard, in enough detail to replicate',
            'Rationale for choosing that reference standard',
            'How thresholds and categories were defined, and whether before or after the data',
            'Whether readers of the index test and reference standard knew each other&rsquo;s results',
            'Methods for estimating accuracy and its precision',
            'Intended sample size and how it was arrived at'],
      res:['A flow diagram of participants, including those excluded and why',
           'Distribution of severity and of alternative diagnoses',
           'A cross-tabulation of index test results against the reference standard',
           'Estimates of accuracy with confidence intervals',
           'Any adverse events from the index test or the reference standard',
           'Time interval between index test and reference standard'],
      disc:['Limitations, including sources of potential bias and statistical uncertainty',
            'Implications for practice, and the intended use and clinical role',
            'Registration number, protocol availability, funding and role of funders']
    },
    cut:{ intro:'The intended role of the test &mdash; triage, replacement or add-on. It is one sentence ' +
                'and it changes how every accuracy figure in the paper should be read.',
          meth:'Whether readers were blinded to the other test&rsquo;s result. Without it the accuracy ' +
               'estimate is uninterpretable, and a reviewer cannot assume it.',
          res:'The two-by-two table, replaced by sensitivity and specificity alone. The counts let a ' +
              'reader compute anything else, including the predictive values your prevalence does not support.',
          disc:'The statement that the dataset was enriched, if it was. Predictive values cannot be read ' +
               'from an enriched set, and a clinician reading the abstract will try.' } },

  { id:'sr', k:'Systematic review', g:'PRISMA',
    gl:'<b>PRISMA 2020</b>, with <b>PRISMA-P</b> for the protocol and registration on PROSPERO before ' +
       'screening begins. The extensions matter: <b>PRISMA-S</b> for reporting the search, ' +
       '<b>PRISMA-ScR</b> for scoping reviews, and separate guidance for network meta-analysis and ' +
       'individual participant data. Certainty of evidence is normally assessed with <b>GRADE</b>, and ' +
       'risk of bias with a named tool rather than a general impression.',
    s:{ intro:0.12, meth:0.28, res:0.32, disc:0.28 },
    items:{
      intro:['Rationale in the context of what is already known',
             'Objectives, stated as an explicit question with its PICO elements'],
      meth:['Eligibility criteria, and how studies were grouped for synthesis',
            'Every database and register searched, with the dates each was last searched',
            'The full search strategy for at least one database, reproducible as written',
            'Selection and data collection processes: how many reviewers, and how disagreements were settled',
            'The risk of bias tool, and who applied it',
            'Effect measures, synthesis methods, and how heterogeneity was handled',
            'Assessment of reporting bias and of certainty in the evidence'],
      res:['A flow diagram: records identified, screened, excluded with reasons, included',
           'Characteristics of every included study, in a table',
           'Risk of bias for each included study',
           'Results of each individual study, with effect estimates',
           'Results of each synthesis, with heterogeneity and any subgroup analyses',
           'Sensitivity analyses, and assessments of reporting bias and certainty'],
      disc:['Interpretation in the context of other evidence',
            'Limitations of the included evidence and of the review process itself',
            'Implications for practice, policy and future research',
            'Registration, protocol availability, funding and competing interests']
    },
    cut:{ intro:'Nothing. This is already the shortest section in a systematic review and should be.',
          meth:'The full search strategy, moved to a supplement and then left incomplete. PRISMA-S exists ' +
               'because a search that cannot be rerun makes the review unreproducible in principle.',
          res:'The table of excluded studies with reasons. It is tedious and it is the thing a reader ' +
              'checks to see whether their favourite paper was missed or rejected.',
          disc:'Limitations of the review process, as distinct from limitations of the evidence. They are ' +
               'two different things and PRISMA asks for both.' } },

  { id:'case', k:'Case report', g:'CARE',
    gl:'<b>CARE</b>, which is short and almost universally ignored. A case report earns its place by being ' +
       'genuinely informative about something a reader may encounter, and the checklist is designed to ' +
       'make that judgeable: a timeline, the diagnostic reasoning including what was ruled out, and the ' +
       'patient&rsquo;s own perspective where it can be obtained. Written informed consent from the patient ' +
       'is required by almost every journal and is not optional.',
    s:{ intro:0.14, meth:0.36, res:0.26, disc:0.24 },
    items:{
      intro:['Why this case is worth reporting, with brief references to the literature'],
      meth:['De-identified patient information: demographics, main symptoms, relevant history',
            'Clinical findings on examination',
            'A timeline of the episode, as a figure or table',
            'Diagnostic assessment: methods, challenges, reasoning, and the differential diagnosis',
            'Prognostic characteristics where applicable',
            'Therapeutic interventions, with types, administration and changes over time'],
      res:['Follow-up and outcomes, including clinician and patient-assessed',
           'Adverse and unanticipated events',
           'Adherence and tolerability, and how these were assessed'],
      disc:['Strengths and limitations of this case&rsquo;s management',
            'The relevant medical literature, and the rationale for the conclusions',
            'The main takeaway, stated as one lesson rather than several',
            'Patient perspective where obtainable, and the informed consent statement']
    },
    cut:{ intro:'The general background about the condition. Two sentences and a citation is enough; ' +
                'readers of a case report already know what the condition is.',
          meth:'The timeline figure. It is the single most useful element in a case report and the first ' +
               'thing authors drop when a journal imposes a word limit.',
          res:'Follow-up duration. A case report without it invites the obvious question and answers it badly.',
          disc:'The differential diagnosis you ruled out. What you considered and rejected is frequently ' +
               'more instructive than what you found.' } },

  { id:'animal', k:'Animal research', g:'ARRIVE',
    gl:'<b>ARRIVE 2.0</b>, with the Essential 10 as the minimum a journal will accept and the Recommended ' +
       'Set beyond it. Preclinical work has the field&rsquo;s worst reproducibility record and the simplest ' +
       'remedies: randomisation, blinded outcome assessment, a stated sample size with its justification, ' +
       'and inclusion and exclusion criteria set in advance. Many journals now require the completed ' +
       'checklist as a submitted item.',
    s:{ intro:0.13, meth:0.34, res:0.26, disc:0.27 },
    items:{
      intro:['Scientific background and the rationale for using this model',
             'Objectives, including the specific hypotheses'],
      meth:['Study design: groups, the experimental unit, and what was compared with what',
            'Sample size per group, and how it was decided',
            'Inclusion and exclusion criteria, set a priori, and any exclusions with reasons',
            'Randomisation: the method, and what was randomised',
            'Blinding: who was blinded at allocation, during the experiment, and at assessment',
            'Outcome measures, defined and with the primary one identified',
            'Statistical methods, and the unit of analysis',
            'Species, strain, sex, age, weight, source and health status',
            'Housing, husbandry, and the ethical approval and welfare framework'],
      res:['A summary for each group: the measure, its variability, and the number in each',
           'Effect sizes with confidence intervals, not p-values alone',
           'Any animals or data excluded from the analysis, with reasons'],
      disc:['Interpretation, taking the study design and its limitations into account',
            'Relevance to human biology, stated honestly',
            'Protocol registration, data access, and declarations of interest']
    },
    cut:{ intro:'The justification for the model. If this model is not the right one, nothing later in the ' +
                'paper recovers it.',
          meth:'Randomisation and blinding, which frequently were not done rather than not reported. Where ' +
               'they were not done, ARRIVE asks you to say so, and saying so is better than silence.',
          res:'The number of animals per group, stated once for the study rather than per group. The two ' +
              'are not the same when there were exclusions.',
          disc:'The honest statement about relevance to humans. It reads as weakness and it is the ' +
               'sentence that protects the paper from being over-read.' } }
  ];

  /* The body sections, in order, with the fixed elements that sit outside the word count */
  const SEC = [
    { id:'intro', t:'Introduction', d:'Why this question, and why now. The shortest section in almost every manuscript, and the one authors overwrite.' },
    { id:'meth',  t:'Methods',      d:'Enough for somebody else to do it again. This is where the reporting guideline puts most of its weight, and where a methods reviewer spends their time.' },
    { id:'res',   t:'Results',      d:'What happened, with numbers and without interpretation. Every outcome you said you would report, including the ones that did not go your way.' },
    { id:'disc',  t:'Discussion',   d:'What it means, what it does not mean, and what is wrong with it. Interpretation belongs here and nowhere earlier.' }
  ];

  const state = { t:0, w:3500 };
  const fmt = n => n.toLocaleString('en-GB');

  function drawTypes(){
    typeBox.innerHTML = T.map(function(t,i){
      return '<button type="button" class="imr__t" data-t="' + i + '" aria-pressed="' + (state.t === i) +
        '"><b>' + t.k + '</b><span>' + t.g + '</span></button>';
    }).join('');
  }
  function draw(){
    drawTypes();
    const t = T[state.t];
    const body = state.w;
    if(wv) wv.innerHTML = '<b>' + fmt(state.w) + '</b><span>words for the body, abstract and references excluded</span>';
    glBox.innerHTML = '<p class="imr__glk">The guideline that governs it</p><p class="imr__glt">' + t.gl + '</p>';

    let max = 0;
    SEC.forEach(function(s){ max = Math.max(max, t.s[s.id]); });

    secBox.innerHTML = SEC.map(function(s){
      const w = Math.round(body * t.s[s.id] / 10) * 10;
      const items = t.items[s.id] || [];
      return '<div class="imr__s">' +
        '<div class="imr__sh"><span class="imr__sn">' + Math.round(t.s[s.id]*100) + '% of the body</span>' +
        '<p class="imr__st">' + s.t + '</p>' +
        '<span class="imr__sw">~' + fmt(w) + ' words</span></div>' +
        '<div class="imr__track"><div class="imr__fill" style="--w:' + (t.s[s.id]/max*100) + '%"></div></div>' +
        '<div class="imr__sb"><p>' + s.d + '</p>' +
        '<ul class="imr__items">' + items.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        '<div class="imr__cut"><i>First thing cut</i><span>' + t.cut[s.id] + '</span></div>' +
        '</div></div>';
    }).join('');

    const n = SEC.reduce(function(a,s){ return a + (t.items[s.id] || []).length; }, 0);
    if(frame) frame.textContent = t.g + ' · ' + n + ' items across four sections';
  }

  root.addEventListener('click', function(e){
    const b = e.target.closest('.imr__t');
    if(!b) return;
    state.t = parseInt(b.getAttribute('data-t'), 10);
    draw();
  });
  range.addEventListener('input', function(){
    state.w = parseInt(range.value, 10);
    draw();
  });

  draw();
})();


(function(){
  const root = document.querySelector('[data-bio]');
  if(!root) return;
  const railBox = root.querySelector('[data-bio-rail]');
  const outBox  = root.querySelector('[data-bio-out]');
  const frame   = root.querySelector('[data-bio-frame]');
  if(!railBox || !outBox) return;

  const A = [
  { k:'Bulk RNA-seq', s:'Differential gene expression',
    nm:'Bulk RNA-seq, differential expression',
    q:'Which genes differ between conditions, and by how much &mdash; with the variation between people separated from the variation between groups.',
    st:[
      { k:'Raw reads and quality control', fmt:'FASTQ',
        d:'Per-base quality, adapter content, duplication and over-represented sequences assessed for every sample, then adapters and low-quality tails trimmed. Library size, RNA integrity and 3&prime; bias are recorded per sample rather than averaged.',
        t:['FastQC','MultiQC','fastp','Trim Galore'],
        g:'Every sample passes the same QC thresholds, and the thresholds are written down before the data arrives.',
        r:'Dropping a sample after seeing which group it belongs to. Exclusions are decided on QC metrics alone, and every exclusion is reported with its reason.' },
      { k:'Alignment or pseudoalignment', fmt:'BAM / abundance',
        d:'Reads aligned to the reference genome with a splice-aware aligner, or quantified directly against the transcriptome. Which route is right depends on whether novel isoforms matter: pseudoalignment is far faster and cannot find what is not in the index.',
        t:['STAR','HISAT2','Salmon','Kallisto','TopHat','Cufflinks'],
        g:'Alignment rate, duplication and gene body coverage reported per sample, with the reference genome build and annotation version stated.',
        r:'Not stating the genome build and annotation release. Results computed against GENCODE v38 and v44 are not the same results, and a reviewer who cannot reproduce the gene count will assume the worse explanation.' },
      { k:'Counting and filtering', fmt:'count matrix',
        d:'Reads summarised to genes, then low-count genes removed &mdash; not because they are uninteresting, but because testing 60,000 features when 15,000 are measurable costs power at the multiple-testing correction for nothing.',
        t:['featureCounts','HTSeq','tximport','edgeR::filterByExpr'],
        g:'The filter is defined by expression and sample count, applied before any group is looked at, and reported.',
        r:'Filtering on a statistic that depends on the outcome. Removing genes by variance across all samples, or by significance, biases everything downstream and is invisible in the final table.' },
      { k:'Normalisation and the model', fmt:'results table',
        d:'Counts normalised for library composition, then modelled on the negative binomial with the experimental design in the formula. Batch, sex, site or extraction date belong in the design rather than in a separate correction, wherever the design allows it.',
        t:['DESeq2','edgeR','limma-voom','sva/ComBat'],
        g:'PCA and sample-to-sample distances inspected before modelling, so a batch effect is found rather than discovered by a reviewer.',
        r:'Using FPKM or TPM for differential testing. They are for comparing genes within a sample, not samples within a gene, and a test built on them has no valid dispersion estimate.' },
      { k:'Multiple testing and effect size', fmt:'DE gene list',
        d:'P-values adjusted across all tested genes, and the gene list defined by an adjusted threshold together with a fold-change threshold that means something biologically. Shrunken fold changes are used for ranking, because raw ratios at low counts are mostly noise.',
        t:['Benjamini-Hochberg','IHW','apeglm','ashr'],
        g:'The adjusted threshold, the fold-change threshold and the number tested are all stated together.',
        r:'Reporting nominal p-values as though they were adjusted, or picking the threshold after seeing how many genes it returns.' },
      { k:'Interpretation and deposit', fmt:'GEO / ArrayExpress',
        d:'Enrichment run against a background of the genes actually tested rather than the whole genome, results visualised, and raw data deposited with the metadata a reader needs to reuse it. The accession goes in the manuscript before it is submitted.',
        t:['clusterProfiler','fgsea','GSEA','Enrichr','GEO'],
        g:'Deposited to MINSEQE-level metadata, with the processed matrix alongside the raw reads.',
        r:'Enrichment against the whole genome as background. It makes almost any list look enriched for whatever is highly expressed in that tissue, and it is the single most common analysis error in published transcriptomics.' }
    ],
    del:'<b>What is handed over.</b> The count matrix and the normalised matrix, the full results table for every gene tested rather than the significant ones only, the code and the environment that produced them, per-sample QC, publication-ready figures, and a methods section written with the versions, the parameters and the thresholds already in it.' },

  { k:'Single-cell RNA-seq', s:'Cell types and state',
    nm:'Single-cell RNA-seq',
    q:'Which cell populations are present, how they differ between conditions, and whether what looks like a new cell type is one.',
    st:[
      { k:'Demultiplexing and cell calling', fmt:'count matrix',
        d:'Reads assigned to cells and to molecules, then real cells separated from empty droplets. The knee plot is looked at rather than trusted to a default, because the cutoff changes how many cells you have and therefore everything after it.',
        t:['CellRanger','STARsolo','alevin-fry','EmptyDrops'],
        g:'Cells called by a statistical method rather than a fixed count threshold, with the number of cells per sample reported.',
        r:'Accepting the default cell count in a low-quality library. Empty droplets carrying ambient RNA become a spurious low-expression cluster, which is then described as a novel population.' },
      { k:'Quality control per cell', fmt:'filtered matrix',
        d:'Cells filtered on genes detected, total counts and mitochondrial fraction, with the thresholds set per tissue rather than from a tutorial. Doublets are identified and removed, and ambient RNA contamination is estimated and corrected.',
        t:['Seurat','Scanpy','scDblFinder','DoubletFinder','SoupX','CellBender'],
        g:'Thresholds justified from the distributions in this dataset, and the number of cells removed at each step reported.',
        r:'Not removing doublets. A doublet of two known types expresses both sets of markers and looks exactly like a rare intermediate or transitional population &mdash; which is how a great many of them have been reported.' },
      { k:'Normalisation, integration and clustering', fmt:'embedding',
        d:'Counts normalised, variable features selected, dimensions reduced, and samples integrated so that clusters reflect biology rather than which day the sample was processed. Clustering resolution is a choice, not a result.',
        t:['Seurat','Harmony','scVI','scran','UMAP','t-SNE'],
        g:'Clusters stable across resolutions and not driven by a single sample or batch, checked before annotation.',
        r:'Over-integration. Correcting hard enough to align batches also removes the condition difference you are looking for, and the plot looks better the more of the signal you have destroyed.' },
      { k:'Annotation', fmt:'labelled cells',
        d:'Populations identified from marker genes and from reference atlases, with the evidence for each label recorded. Automated labelling is used as a starting point and checked, because a reference atlas assigns the nearest label whether or not the cell type is in it.',
        t:['SingleR','Azimuth','CellTypist','scType'],
        g:'Every label supported by named markers, and populations that cannot be confidently labelled left as unassigned.',
        r:'Naming a cluster after the one marker that came out top. Clusters split by cell cycle phase, by stress response or by dissociation artefact are routinely annotated as biology.' },
      { k:'Differential testing', fmt:'results table',
        d:'Differences between conditions tested at the level the experiment was randomised at. Cells within a sample are not independent replicates, so condition comparisons are made on pseudobulk profiles per sample rather than on individual cells.',
        t:['DESeq2 on pseudobulk','muscat','edgeR','MAST','miloR'],
        g:'The unit of replication is the sample, and the number of samples per group is stated alongside the number of cells.',
        r:'Testing across cells as though each were a replicate. With 40,000 cells from six people, almost everything reaches significance, and the p-values describe the depth of sequencing rather than the biology.' },
      { k:'Interpretation and deposit', fmt:'GEO / HCA',
        d:'Trajectories, cell-cell communication or composition shifts examined where the question needs them, and the object deposited with the processed data and the metadata a reader needs to reproduce the figure.',
        t:['Monocle3','slingshot','CellChat','scanpy.h5ad'],
        g:'Both the raw reads and the annotated object are deposited, with the annotation rationale documented.',
        r:'Reporting a composition change without accounting for how many cells each sample contributed. A shift in proportions driven by one deeply sequenced donor is a sampling artefact.' }
    ],
    del:'<b>What is handed over.</b> The filtered and annotated object, per-sample and per-cluster QC, marker tables with the evidence for each label, the pseudobulk results, every figure with the code that made it, and a methods section stating the cell numbers, the thresholds, the integration method and the unit of replication.' },

  { k:'WGS and WES', s:'Germline variant calling',
    nm:'Whole-genome and whole-exome sequencing',
    q:'Which variants this individual or cohort carries, which of them are real, and which are plausibly related to the phenotype.',
    st:[
      { k:'Read QC and alignment', fmt:'CRAM / BAM',
        d:'Reads aligned to a stated reference build, duplicates marked, and base quality scores recalibrated. The reference build matters more here than anywhere else: coordinates from GRCh37 and GRCh38 are not interchangeable and silently disagree.',
        t:['BWA-MEM2','DRAGEN','samtools','Picard MarkDuplicates'],
        g:'Coverage depth and uniformity reported per sample, with the fraction of target covered at the depth the analysis requires.',
        r:'Mixing builds. A panel of variants lifted over from GRCh37 without checking strand and position introduces errors that look exactly like real findings.' },
      { k:'Variant calling', fmt:'VCF / gVCF',
        d:'Small variants called with a model-based caller, and structural and copy-number variants called separately because a single-nucleotide caller cannot see them. Joint calling across the cohort where there is a cohort, so that reference and missing are distinguishable.',
        t:['GATK HaplotypeCaller','DeepVariant','DRAGEN','Manta','CNVkit'],
        g:'GATK Best Practices or the equivalent for the caller used, with the exact version and parameters recorded.',
        r:'Treating a no-call as a reference call. In a cohort analysis this turns poorly covered regions into apparent shared variants, and it is not visible in the final table.' },
      { k:'Filtering and quality', fmt:'filtered VCF',
        d:'Calls filtered by a trained model or hard thresholds, then checked against known-truth samples where available. Sample identity, relatedness and contamination are verified here rather than assumed from the sample sheet.',
        t:['GATK VQSR','hard filters','VerifyBamID','somalier','peddy'],
        g:'Transition-to-transversion ratio, heterozygous-to-homozygous ratio and the sex check all consistent with expectation.',
        r:'Skipping the relatedness and identity check. Sample swaps happen at a rate that surprises everybody the first time they look for them, and they invalidate the study rather than the sample.' },
      { k:'Annotation', fmt:'annotated VCF',
        d:'Variants annotated with consequence, population frequency, conservation and prior clinical assertion, against databases whose versions are recorded. An annotation is a snapshot: the same variant can be classified differently a year later.',
        t:['VEP','ANNOVAR','SnpEff','gnomAD','ClinVar'],
        g:'Every database named with its version and access date, in the methods rather than in a supplementary file.',
        r:'Using a population frequency database that does not represent your cohort&rsquo;s ancestry. A variant common in an under-represented population reads as rare, and therefore as a candidate.' },
      { k:'Prioritisation and interpretation', fmt:'candidate list',
        d:'Variants prioritised against the phenotype and the inheritance model, and classified using an explicit framework rather than a sense of plausibility. For clinical work the classification is the deliverable, and it has to be defensible line by line.',
        t:['ACMG/AMP criteria','Exomiser','phenotype ontologies'],
        g:'Each candidate carries its evidence codes, and the strength of each is stated rather than implied.',
        r:'Stopping at the first plausible gene. A candidate that fits the story is not the same as a candidate the evidence supports, and the difference is what a clinical review board is there to find.' },
      { k:'Reporting and deposit', fmt:'EGA / dbGaP',
        d:'Findings reported with their limitations, and data deposited in a controlled-access archive with the consent and governance that human genomic data requires. What can be shared, and with whom, is settled before the data is generated.',
        t:['EGA','dbGaP','Beacon','NIH GDS Policy'],
        g:'Deposit route and consent terms agreed at study design, not at manuscript submission.',
        r:'Promising open deposit in a data availability statement that the consent does not permit. Journals check this now, and it stalls acceptance at the last possible moment.' }
    ],
    del:'<b>What is handed over.</b> Aligned files, the joint-called and filtered variant set, the annotation with every database version recorded, the prioritised candidates with their evidence, QC across every sample including identity and relatedness, and the code and containers to rerun it.' },

  { k:'16S microbiome', s:'Community profiling',
    nm:'16S rRNA amplicon profiling',
    q:'Which taxa are present, how the communities differ between groups, and whether the difference survives the fact that this data is compositional.',
    st:[
      { k:'Primer handling and quality', fmt:'FASTQ',
        d:'Primers removed, reads quality-filtered and truncated where quality falls away. The hypervariable region sequenced is stated, because V3&ndash;V4 and V4 give different taxonomic resolution and are not comparable across studies.',
        t:['cutadapt','DADA2 filterAndTrim','QIIME 2'],
        g:'Truncation positions chosen from the quality profiles of this run, and enough overlap retained for merging.',
        r:'Truncating so hard that paired reads no longer overlap. Merging then fails silently for a subset of samples, and those samples lose most of their reads.' },
      { k:'Denoising to exact sequences', fmt:'ASV table',
        d:'Reads resolved to amplicon sequence variants rather than clustered at an arbitrary similarity threshold. ASVs are reproducible between studies in a way that 97% OTUs are not, which is why the field moved.',
        t:['DADA2','Deblur','UNOISE3','VSEARCH'],
        g:'Chimeras removed, and the read count retained at each step reported per sample.',
        r:'Clustering at 97% identity and calling the result a species. That threshold is a convention from an era of shorter reads, and it merges genuinely different organisms.' },
      { k:'Taxonomy and contamination', fmt:'taxa table',
        d:'ASVs assigned against a current reference database, and contaminants identified using negative controls. Low-biomass samples pick up reagent contamination that looks exactly like a finding.',
        t:['SILVA','GTDB','decontam','negative controls'],
        g:'Negative and positive controls sequenced on every run and reported, not just collected.',
        r:'Running a low-biomass study without controls. The literature contains findings that are, on inspection, descriptions of DNA extraction kits.' },
      { k:'Normalisation', fmt:'transformed table',
        d:'Sequencing depth handled explicitly, and the compositional nature of the data acknowledged: a read count is a proportion of a fixed total, so one taxon increasing forces the others down arithmetically.',
        t:['CLR transform','ALDEx2','ANCOM-BC','rarefaction'],
        g:'The method is chosen and stated in advance, and sensitivity to that choice is checked.',
        r:'Testing raw proportions with a standard test. It produces correlations and differences that are artefacts of the constant sum, and it is still the commonest treatment in the literature.' },
      { k:'Diversity and differential abundance', fmt:'results',
        d:'Within-sample and between-sample diversity computed with depth handled consistently, group differences tested with a method built for compositional data, and covariates included rather than adjusted for afterwards.',
        t:['vegan','PERMANOVA','ANCOM-BC','ALDEx2','MaAsLin2'],
        g:'PERMANOVA assumptions checked, including whether group dispersions differ, which produces a significant result on its own.',
        r:'Reading a significant PERMANOVA as a difference in community composition when it is a difference in variability. betadisper is the check, and it is usually skipped.' },
      { k:'Reporting and deposit', fmt:'SRA / ENA',
        d:'Raw reads deposited with the primers, the region, the platform and the run structure recorded, so that another group can tell whether their data is comparable to yours. It usually is not, and saying so is the useful part.',
        t:['SRA','ENA','MIxS metadata'],
        g:'MIxS-level metadata deposited alongside the reads.',
        r:'Comparing absolute abundances with a published study that used a different region and pipeline. The numbers are not on the same scale and never were.' }
    ],
    del:'<b>What is handed over.</b> The ASV table with taxonomy, the decontamination record and control results, diversity metrics with the depth handling stated, differential abundance results from a compositional method with the sensitivity analysis, figures, code, and deposited reads with their metadata.' },

  { k:'ChIP-seq and ATAC-seq', s:'Regulatory landscape',
    nm:'ChIP-seq and ATAC-seq',
    q:'Where a protein binds or where chromatin is open, and whether the difference between conditions is real or a difference in how well the experiment worked.',
    st:[
      { k:'QC, alignment and filtering', fmt:'BAM',
        d:'Reads aligned, duplicates and multi-mapping reads handled explicitly, and blacklisted regions removed. These regions produce enormous apparent signal in every experiment and in none of the biology.',
        t:['Bowtie2','BWA','samtools','ENCODE blacklist'],
        g:'ENCODE quality metrics computed: library complexity, fraction of reads in peaks, and strand cross-correlation.',
        r:'Not removing blacklisted regions. The strongest peaks in the result are then artefacts, and they are strong enough to dominate any downstream enrichment.' },
      { k:'Peak calling', fmt:'BED / narrowPeak',
        d:'Peaks called against the right control &mdash; input or IgG for ChIP, and for ATAC no control but a model that accounts for the Tn5 insertion bias. Narrow and broad marks need different callers and different settings.',
        t:['MACS3','MACS2','SEACR','Genrich','epic2'],
        g:'Peaks reproducible across replicates, assessed with irreproducible discovery rate rather than by overlap counting.',
        r:'Calling peaks without a matched input control. Open and accessible chromatin is not uniformly sequenced, and the resulting peak set largely describes copy number and accessibility.' },
      { k:'Reproducibility and consensus', fmt:'consensus peaks',
        d:'Replicates compared before they are merged, and a consensus peak set defined by an explicit rule. Two replicates that disagree are a finding about the experiment, not something to average away.',
        t:['IDR','DiffBind','bedtools'],
        g:'Replicate concordance reported as a number, with the rule for consensus stated.',
        r:'Pooling replicates before assessing them. A failed immunoprecipitation pooled with a good one produces a plausible peak set and an unreproducible paper.' },
      { k:'Differential binding or accessibility', fmt:'results table',
        d:'Signal quantified over the consensus set and tested with a count-based model, with normalisation chosen deliberately: a genuine global shift in binding breaks the assumption that most regions are unchanged.',
        t:['DiffBind','csaw','DESeq2','edgeR'],
        g:'Normalisation assumption stated and, where a global shift is plausible, spike-in or background normalisation used instead.',
        r:'Default normalisation when the treatment changes binding globally. The method assumes most regions are unchanged, so a real global effect is normalised out of existence.' },
      { k:'Annotation and motifs', fmt:'annotated peaks',
        d:'Peaks annotated to genomic features and to nearby genes, and motif enrichment run against a background matched for GC content and for the genomic compartment the peaks come from.',
        t:['HOMER','MEME-ChIP','ChIPseeker','GREAT'],
        g:'Background set matched rather than random genomic intervals.',
        r:'Assigning every peak to its nearest gene and treating that as regulation. Enhancers frequently skip the nearest gene, and the assumption produces a confident and wrong gene list.' },
      { k:'Reporting and deposit', fmt:'GEO / ENCODE',
        d:'Signal tracks, peak sets and the quality metrics deposited together, so that a reader can look at the data rather than at a screenshot of it.',
        t:['GEO','bigWig','UCSC track hub'],
        g:'Antibody catalogue and lot number reported for ChIP, which is the single most useful line in the methods.',
        r:'Omitting the antibody lot. ChIP results are antibody-dependent to a degree that makes the experiment unrepeatable without it.' }
    ],
    del:'<b>What is handed over.</b> Filtered alignments, signal tracks, per-replicate and consensus peak sets with the reproducibility statistics, differential results with the normalisation justified, motif and annotation output with matched backgrounds, and the code to regenerate all of it.' },

  { k:'LC-MS/MS proteomics', s:'Protein identification and quantification',
    nm:'Mass spectrometry proteomics',
    q:'Which proteins are present and which differ in abundance, with the false discovery controlled at the level the claim is made at.',
    st:[
      { k:'Raw processing and search', fmt:'raw &rarr; identifications',
        d:'Spectra searched against a target database with decoys, using a search engine matched to the acquisition mode. Data-independent acquisition and data-dependent acquisition are different experiments and need different software.',
        t:['MaxQuant','FragPipe','DIA-NN','Spectronaut','OpenMS','Mascot'],
        g:'Search parameters, database version and the contaminant list all recorded, with fixed and variable modifications stated.',
        r:'Searching without a contaminant database. Keratin and trypsin then appear as findings, and they appear in the differential results too.' },
      { k:'False discovery control', fmt:'filtered IDs',
        d:'Error rate controlled with a target-decoy approach, and controlled separately at the level the conclusion is drawn at &mdash; peptide-spectrum match, peptide, and protein are three different error rates and the protein one is the one that matters.',
        t:['Percolator','target-decoy','ProteinProphet'],
        g:'FDR stated at each level, and the protein-level rate reported rather than the spectrum-level one.',
        r:'Quoting a 1% spectrum-level FDR as though it were the protein error rate. The protein-level rate is substantially higher, and the difference is where single-peptide identifications live.' },
      { k:'Quantification', fmt:'intensity matrix',
        d:'Abundance derived by label-free intensity, by isobaric labelling or from DIA extraction, each with its own systematic problems. Ratio compression in isobaric work is a known effect and has to be accounted for rather than ignored.',
        t:['LFQ','TMT','SILAC','MS1 / MS2 extraction'],
        g:'Technical and biological replication distinguished, and the number of each stated.',
        r:'Treating technical replicates as biological ones. It shrinks the apparent variance and produces significance that does not exist between people.' },
      { k:'Missing values', fmt:'imputed matrix',
        d:'The dominant problem in proteomics. Values are missing both at random and because the protein was below detection, and those need different handling. The imputation method is a scientific choice with visible consequences.',
        t:['MSstats','Perseus','MSnbase','left-censored imputation'],
        g:'The proportion of missing values reported, the mechanism considered, and the result checked against an unimputed analysis.',
        r:'Imputing everything with the same small constant. It manufactures differences for proteins detected in one group only, and those proteins then top the results table.' },
      { k:'Statistical testing', fmt:'results table',
        d:'Differential abundance tested with a model built for this data, on log-transformed intensities, with normalisation checked and multiple testing corrected across the proteins actually quantified.',
        t:['limma','MSstats','DEP','Benjamini-Hochberg'],
        g:'Normalisation assessed visually before and after, and the number of proteins tested stated with the result.',
        r:'Filtering to proteins present in all samples and then reporting how many changed. The filter removes exactly the proteins most likely to be biologically interesting.' },
      { k:'Interpretation and deposit', fmt:'PRIDE / ProteomeXchange',
        d:'Enrichment and network analysis run against the quantified background, and raw files deposited through ProteomeXchange with the search parameters, which is a condition of publication at most journals in the field.',
        t:['PRIDE','MassIVE','STRING','Reactome'],
        g:'Deposited with search parameters and the full results table, and the accession quoted in the manuscript.',
        r:'Enrichment against the whole proteome. The quantified background is the right comparison, and using the whole proteome makes abundant housekeeping pathways appear enriched every time.' }
    ],
    del:'<b>What is handed over.</b> The identification and quantification matrices, FDR reported at each level, the missing-value treatment with its sensitivity check, differential results across everything quantified, enrichment against the correct background, figures, code, and a ProteomeXchange deposit with its accession.' }
  ];

  /* Only tools whose own maintainers have declared them superseded. Being
     widely replaced in practice is not the same thing, and marking a live
     tool as dead would be an error of the kind this page is about. */
  const DEP = ['TopHat','Cufflinks'];
  const state = { i:0 };

  function drawRail(){
    railBox.innerHTML = '<p class="bio__railk">Choose the assay</p>' + A.map(function(a,i){
      return '<button type="button" class="bio__a" data-i="' + i + '" aria-pressed="' + (state.i === i) +
        '"><b>' + a.k + '</b><span>' + a.s + '</span></button>';
    }).join('') +
    '<p class="bio__note">Methylation arrays and bisulfite sequencing, shotgun metagenomics, metabolomics, spatial transcriptomics, long-read assembly and multi-omic integration follow the same shape and are quoted the same way.</p>';
  }
  function drawOut(){
    const a = A[state.i];
    let h = '<p class="bio__ok">The route this data actually takes</p>' +
      '<h3 class="bio__nm">' + a.nm + '</h3>' +
      '<p class="bio__q">' + a.q + '</p><div class="bio__flow">';
    a.st.forEach(function(s,i){
      h += '<div class="bio__st"><div class="bio__sh">' +
        '<span class="bio__sn">' + (i+1) + '</span>' +
        '<p class="bio__sk">' + s.k + '</p>' +
        '<span class="bio__fmt">' + s.fmt + '</span></div>' +
        '<div class="bio__sb"><p>' + s.d + '</p>' +
        '<div class="bio__tools">' + s.t.map(function(t){
          return '<span class="bio__tool' + (DEP.indexOf(t) > -1 ? ' bio__tool--dep' : '') +
            '">' + t + '</span>';
        }).join('') + '</div>' +
        '<div class="bio__gate"><i>Gate</i><span>' + s.g + '</span></div>' +
        '<div class="bio__risk"><i>Where it goes wrong</i><span>' + s.r + '</span></div>' +
        '</div></div>';
    });
    const hasDep = a.st.some(function(s){
      return s.t.some(function(t){ return DEP.indexOf(t) > -1; });
    });
    h += '</div><div class="bio__del"><h4>Deliverables</h4><p>' + a.del + '</p>' +
      (hasDep ? '<p>The struck-through tools have been declared superseded by the people who wrote them, and are shown because they are still in use and still appear in submitted methods sections. Where one of them produced your existing results we will say so and tell you whether rerunning changes the conclusion, which it sometimes does not.</p>' : '') +
      '</div>';
    outBox.innerHTML = h;
    if(frame) frame.textContent = a.st.length + ' stages · ' +
      a.st.reduce(function(n,s){ return n + s.t.length; }, 0) + ' tools named';
  }
  function draw(){ drawRail(); drawOut(); }

  root.addEventListener('click', function(e){
    const b = e.target.closest('.bio__a');
    if(!b) return;
    state.i = parseInt(b.getAttribute('data-i'), 10);
    draw();
  });

  draw();
})();


(function(){
  const root = document.querySelector('[data-reg]');
  if(!root) return;
  const scnBox  = root.querySelector('[data-reg-scn]');
  const findBox = root.querySelector('[data-reg-find]');
  const railBox = root.querySelector('[data-reg-rail]');
  const outBox  = root.querySelector('[data-reg-out]');
  const frame   = root.querySelector('[data-reg-frame]');
  if(!scnBox || !railBox || !outBox) return;

  const SCN = {

  /* ──────────────────────────── a drug ──────────────────────────── */
  drug: {
    tab:'A phase III drug trial',
    sub:'Primary endpoint met, with a hepatic safety signal',
    find:'<b>Study 301.</b> 1,319 adults with type 2 diabetes randomised to [drug] (n=658) or placebo ' +
      '(n=661) for 26 weeks. Mean HbA1c change from baseline &minus;1.4% (SD 1.1) against &minus;0.6% ' +
      '(SD 1.1); difference &minus;0.80 percentage points (95% CI &minus;0.92 to &minus;0.68), p&lt;0.001. ' +
      'ALT above three times the upper limit of normal in 27 of 658 (4.1%) against 12 of 661 (1.8%); two ' +
      'subjects met Hy&rsquo;s law criteria on a single occasion and both resolved without intervention.',
    docs: [

    { k:'Journal manuscript', t:'Results section of the primary paper',
      gov:'CONSORT 2025 and the ICMJE recommendations, plus the journal&rsquo;s own structured results format',
      who:'Peer reviewers, then readers in the field', dec:'Whether the finding is believable and adds to what is known',
      len:'3,000&ndash;4,000 words', sign:'The corresponding author, on behalf of all named authors',
      xh:['Manuscript &middot; Results', 'CONSORT'],
      x:'<p><span class="reg__lab">Primary outcome</span>At week 26, the mean reduction in HbA1c from ' +
        'baseline was 1.4 percentage points (SD 1.1) in the [drug] group and 0.6 percentage points (SD 1.1) ' +
        'in the placebo group. The between-group difference was &minus;0.80 percentage points (95% CI ' +
        '&minus;0.92 to &minus;0.68; p&lt;0.001) in the intention-to-treat population.</p>' +
        '<p><span class="reg__lab">Harms</span>Alanine aminotransferase above three times the upper limit of ' +
        'normal was recorded in 27 of 658 participants (4.1%) assigned to [drug] and in 12 of 661 (1.8%) ' +
        'assigned to placebo. Two participants in the [drug] group met Hy&rsquo;s law criteria on a single ' +
        'occasion; both had normalised by the following scheduled assessment without any change to study ' +
        'treatment.</p>',
      dos:'<b>Past tense, group-by-group denominators, and an effect estimate with its interval.</b> ' +
        'Harms are reported in the results with the same care as efficacy, which CONSORT asks for ' +
        'explicitly and which manuscripts routinely compress into a sentence.',
      nos:'<b>No interpretation here at all.</b> Whether the benefit outweighs the hepatic signal belongs ' +
        'in the discussion, and a reviewer will say so. No frequency categories, no clinical instruction, ' +
        'and no claim about the drug beyond what this trial measured.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>[Drug] delivers a clinically meaningful ' +
        '0.8% HbA1c reduction with a manageable safety profile.</q> Every part of that sentence is a ' +
        'conclusion, two of them are promotional, and a methods reviewer will return the paper for it.' },

    { k:'Clinical study report', t:'ICH E3 clinical study report, safety section',
      gov:'ICH E3, with ICH E6(R3) governing the conduct it reports and ICH E9 the analysis',
      who:'Regulatory assessors, and the sponsor&rsquo;s own quality function', dec:'Whether the study was conducted and analysed as it said it would be',
      len:'150&ndash;400 pages, plus appendices and listings', sign:'The sponsor&rsquo;s signatory and the coordinating investigator',
      xh:['CSR &middot; Section 12.2', 'ICH E3'],
      x:'<p><span class="reg__lab">12.2.4 Hepatic laboratory abnormalities</span>Treatment-emergent ' +
        'elevations in alanine aminotransferase exceeding three times the upper limit of normal were ' +
        'reported in 27 subjects (4.1%) in the [drug] group and 12 subjects (1.8%) in the placebo group. ' +
        'All events were identified on scheduled laboratory assessment and none was accompanied by ' +
        'reported symptoms.</p>' +
        '<p>Two subjects in the [drug] group met Hy&rsquo;s law criteria at a single visit. Both are ' +
        'described individually in Section 12.3.2 and narratives are provided in Appendix 16.3. In both ' +
        'cases values returned to below twice the upper limit of normal at the next scheduled assessment ' +
        'without interruption of study treatment. No subject discontinued for a hepatic reason.</p>' +
        '<p>Individual subject values, including all post-baseline measurements, are presented in Listing ' +
        '16.2.8.1. Shift tables by baseline category are presented in Table 14.3.4.2.</p>',
      dos:'<b>Exhaustive, neutral, and cross-referenced to the data.</b> Every claim points at a listing, ' +
        'a table or a narrative an assessor can open. The two Hy&rsquo;s law cases get a section and an ' +
        'appendix of their own because a report that buries them is the finding.',
      nos:'<b>Nothing is summarised away and nothing is argued.</b> A CSR does not decide whether the ' +
        'signal matters; that happens in Module 2.5. Words like &ldquo;manageable&rdquo;, ' +
        '&ldquo;reassuring&rdquo; and &ldquo;as expected&rdquo; do not belong in one.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>Liver enzyme elevations were infrequent ' +
        'and clinically unimportant.</q> Two judgements and no cross-reference &mdash; and an assessor who ' +
        'finds a judgement where a number should be will start looking for what else was decided rather ' +
        'than reported.' },

    { k:'CTD Module 2.5', t:'Clinical overview in the common technical document',
      gov:'ICH M4E, and the assessor&rsquo;s expectation that benefit-risk is argued rather than asserted',
      who:'The regulatory assessor, first and sometimes only', dec:'Whether the benefit-risk balance supports the proposed indication',
      len:'Up to about 30 pages, for a dossier of tens of thousands', sign:'The applicant&rsquo;s qualified person and clinical lead',
      xh:['CTD &middot; Module 2.5.5', 'ICH M4E'],
      x:'<p><span class="reg__lab">2.5.5 Benefit-risk conclusions</span>The hepatic signal observed in ' +
        'Study 301 is consistent in direction and magnitude with that seen in the two phase II studies, and ' +
        'is not dose-dependent across the range studied (Section 2.5.4.3). All events were asymptomatic, ' +
        'identified on scheduled testing, and reversible without treatment interruption.</p>' +
        '<p>Set against a durable reduction in HbA1c of 0.80 percentage points against placebo in a ' +
        'population inadequately controlled on existing therapy, the benefit-risk balance is considered ' +
        'favourable for the proposed indication, conditional on the hepatic monitoring described in ' +
        'Section 2.5.6 and reflected in sections 4.4 and 4.8 of the proposed product information.</p>' +
        '<p>The applicant proposes to characterise the signal further through the post-authorisation ' +
        'safety study outlined in the risk management plan.</p>',
      dos:'<b>This is the one document that argues.</b> It takes a position, says what the position rests ' +
        'on, points at the sections that carry the evidence, and connects the conclusion to the labelling ' +
        'and the risk management plan it is asking the assessor to accept.',
      nos:'<b>No new data, and no argument the dossier cannot support.</b> Every claim has to be traceable ' +
        'to a module below it. An overview that is more confident than its CSR is the fastest route to a ' +
        'major objection.',
      wrong:'<b>Written in the wrong register, this reads:</b> a restatement of the CSR numbers with no ' +
        'conclusion. An assessor reading Module 2.5 is looking for the applicant&rsquo;s case; a neutral ' +
        'summary leaves them to build it, and they will build it less generously than you would.' },

    { k:'SmPC section 4.8', t:'Undesirable effects, in the product information',
      gov:'the EU SmPC guideline, with the MedDRA system organ class order and the standard frequency categories',
      who:'A prescriber, at the moment of prescribing', dec:'Whether to prescribe, and what to monitor',
      len:'A few lines inside a tabulated list', sign:'Agreed with the regulator; changes require a variation',
      xh:['Product information &middot; 4.8', 'SmPC guideline'],
      x:'<p><span class="reg__lab">Tabulated list of adverse reactions</span><em>Investigations</em><br>' +
        'Common (&ge;1/100 to &lt;1/10): alanine aminotransferase increased.</p>' +
        '<p><span class="reg__lab">Description of selected adverse reactions</span>Elevations in alanine ' +
        'aminotransferase were generally asymptomatic, detected on routine testing and reversible. Liver ' +
        'function should be assessed before initiation of treatment and at 12 weeks. See also section 4.4.</p>',
      dos:'<b>A frequency category, not a percentage, and no comparator.</b> 4.1% is Common. The ' +
        'prescriber is told what to do &mdash; test before starting and at twelve weeks &mdash; because ' +
        'this is the only document in the set that gives instructions.',
      nos:'<b>No p-values, no confidence intervals, no placebo arm.</b> The SmPC is not reporting a trial; ' +
        'it is describing a medicine. And nothing here may go beyond what the regulator has agreed, which ' +
        'is why a change to two words can require a variation.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>ALT elevation occurred in 4.1% of ' +
        'patients versus 1.8% on placebo (p=0.01).</q> Accurate, and wrong for the document: a prescriber ' +
        'reading in a clinic needs the category and the monitoring instruction, not the trial.' },

    { k:'Plain-language summary', t:'Trial results for participants and the public',
      gov:'EU Clinical Trials Regulation Annex V, and health-literacy practice on reading age and numbers',
      who:'Participants, their families, and anyone who finds the registry entry', dec:'What this means for them, and whether they were told the truth',
      len:'Roughly 500&ndash;1,000 words', sign:'The sponsor, and increasingly a patient reviewer',
      xh:['Plain-language summary', 'CTR Annex V'],
      x:'<p><span class="reg__lab">What did the study find?</span>People who took the medicine had lower ' +
        'blood sugar after six months than people who took a dummy treatment (a placebo). On average, ' +
        'their blood sugar measure went down by about twice as much.</p>' +
        '<p><span class="reg__lab">Were there any problems?</span>About 4 in every 100 people taking the ' +
        'medicine had a blood test showing a change in the liver. Among people taking the dummy treatment, ' +
        'about 2 in every 100 had the same kind of change. Nobody felt unwell because of it, and the blood ' +
        'tests returned to normal on their own.</p>' +
        '<p>If you are given this medicine, your doctor will check your liver with a blood test before you ' +
        'start and again about three months later.</p>',
      dos:'<b>Natural frequencies, short sentences, and the safety finding kept in.</b> Four in every ' +
        'hundred, not 4.1%. The hardest discipline is including the unwelcome number at the same size as ' +
        'the welcome one, because a summary that quietly drops it is the one that destroys trust.',
      nos:'<b>No jargon, no statistics and no reassurance the data does not support.</b> ' +
        '&ldquo;Well-tolerated&rdquo; is a clinical judgement dressed as plain English. And no implication ' +
        'that the reader personally will benefit.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>The primary endpoint was met with a ' +
        'statistically significant reduction in HbA1c.</q> Four pieces of jargon in eleven words, and it ' +
        'answers a question the reader did not ask.' },

    { k:'MSL scientific deck', t:'Field medical slides, used in response to a question',
      gov:'the company&rsquo;s medical governance, plus the ABPI, EFPIA or equivalent code that makes the promotion line a legal one',
      who:'A specialist clinician, usually one who asked something specific', dec:'How to use the medicine in a particular patient',
      len:'One slide, with the reference on it', sign:'Medical affairs review, dated and version-controlled',
      xh:['Field medical slide &middot; reactive use', 'Code-compliant'],
      x:'<p><span class="reg__lab">Study 301 &middot; efficacy and hepatic laboratory findings</span>HbA1c ' +
        'change from baseline at week 26: &minus;1.4 percentage points with [drug], &minus;0.6 with ' +
        'placebo. Difference &minus;0.80 (95% CI &minus;0.92 to &minus;0.68).</p>' +
        '<p>ALT &gt;3&times;ULN: 4.1% ([drug]) against 1.8% (placebo). All asymptomatic and reversible; two ' +
        'single-visit Hy&rsquo;s law cases, both resolved.</p>' +
        '<p><em>Monitoring: assess liver function before initiation and at 12 weeks (SmPC section 4.4). ' +
        'Study 301, published reference. Prepared for reactive use in response to an unsolicited ' +
        'question.</em></p>',
      dos:'<b>The safety number sits on the same slide as the efficacy number.</b> That single layout ' +
        'decision is most of what separates a scientific exchange from a promotional one, and it is the ' +
        'thing a compliance reviewer checks first.',
      nos:'<b>No comparative claim against another product, no off-label indication, no superlative.</b> ' +
        'The slide is used in response to a question, which is why it says so on it. Version and date are ' +
        'not decoration &mdash; they are the audit trail.',
      wrong:'<b>Written in the wrong register, this reads:</b> an efficacy slide, with the hepatic data on ' +
        'slide 14 of the appendix. Nothing in it is false. Splitting them is what makes it promotional, ' +
        'and it is the most common finding in a medical affairs audit.' },

    { k:'Investor summary', t:'Topline results announcement',
      gov:'Listing rules and securities law, alongside the promotion rules that still apply before approval',
      who:'Analysts, investors and journalists, within minutes', dec:'What the company is worth this morning',
      len:'400&ndash;800 words', sign:'The board, with legal and medical sign-off',
      xh:['Topline announcement', 'Pre-approval'],
      x:'<p>Study 301, a phase III trial in 1,319 adults with type 2 diabetes, met its primary endpoint. ' +
        'HbA1c fell by 0.80 percentage points more with [drug] than with placebo at 26 weeks (95% CI ' +
        '&minus;0.92 to &minus;0.68; p&lt;0.001).</p>' +
        '<p>Elevations in alanine aminotransferase above three times the upper limit of normal were more ' +
        'frequent on treatment than on placebo (4.1% against 1.8%). All were asymptomatic and reversible, ' +
        'and the company intends to propose routine liver monitoring in the product information. Two ' +
        'single-visit Hy&rsquo;s law cases were observed, both of which resolved without intervention.</p>' +
        '<p><em>[Drug] is investigational and is not approved in any jurisdiction. This announcement ' +
        'contains forward-looking statements; actual regulatory outcomes may differ.</em></p>',
      dos:'<b>&ldquo;Met its primary endpoint&rdquo; is the claim, and it is the only one available.</b> ' +
        'The safety finding appears in the second paragraph rather than the last, with its number, because ' +
        'an analyst who finds it later will price the omission rather than the finding.',
      nos:'<b>No efficacy claim, no comparison with a marketed product, and no implication of approval.</b> ' +
        'The medicine is investigational and the announcement has to say so. Forward-looking statements ' +
        'carry their qualifier because that is what makes them lawful.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>[Drug] demonstrated a superior safety ' +
        'and efficacy profile.</q> Pre-approval promotion, an unsupported comparative claim and a ' +
        'securities problem, in eight words.' }
    ]
  },

  /* ─────────────────────── a diagnostic algorithm ─────────────────── */
  saMD: {
    tab:'A diagnostic algorithm',
    sub:'Software as a medical device, with uneven performance across scanners',
    find:'<b>Validation study.</b> An algorithm detecting pneumothorax on chest radiographs, tested on ' +
      '2,840 images from three sites and three scanner types, enriched to 15.7% positive (446 cases) ' +
      'against independent expert consensus. Sensitivity 94.2% (95% CI 91.6&ndash;96.0), specificity 88.7% ' +
      '(87.3&ndash;89.9). On the 612 images from one of the three scanner types, sensitivity was 86.5% ' +
      '(78.2&ndash;91.9), against 96.3% (93.7&ndash;97.8) on the other two.',
    docs: [

    { k:'Journal manuscript', t:'Diagnostic accuracy paper',
      gov:'STARD 2015, with CONSORT-AI and DECIDE-AI where the study extends to clinical use',
      who:'Peer reviewers, then radiologists deciding whether to believe it', dec:'Whether the accuracy estimate would hold in their department',
      len:'3,000&ndash;4,000 words, with a STARD flow diagram', sign:'The corresponding author, for all named authors',
      xh:['Manuscript &middot; Results', 'STARD'],
      x:'<p><span class="reg__lab">Diagnostic accuracy</span>Against independent expert consensus, the ' +
        'algorithm achieved a sensitivity of 94.2% (420 of 446; 95% CI 91.6 to 96.0) and a specificity of ' +
        '88.7% (2,123 of 2,394; 95% CI 87.3 to 89.9).</p>' +
        '<p><span class="reg__lab">Pre-specified subgroup analysis</span>Sensitivity differed by acquisition ' +
        'system. On the 612 radiographs acquired with system C, sensitivity was 86.5% (83 of 96; 95% CI ' +
        '78.2 to 91.9), compared with 96.3% (337 of 350; 95% CI 93.7 to 97.8) on the remaining two ' +
        'systems.</p>' +
        '<p><span class="reg__lab">Note on prevalence</span>The dataset was enriched to a prevalence of ' +
        '15.7%, which exceeds that of the source populations. Predictive values should not be read from ' +
        'these data.</p>',
      dos:'<b>Counts alongside every percentage, and the reference standard named.</b> STARD exists ' +
        'because diagnostic papers omit exactly these things. The enrichment is declared, with the ' +
        'consequence spelled out: predictive values cannot be taken from an enriched set.',
      nos:'<b>The subgroup result is not buried and not explained away.</b> If it was pre-specified, say ' +
        'so; if it was not, say that instead. A difference of ten percentage points in sensitivity that ' +
        'appears only in a supplementary table is the finding a reviewer will build their report around.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>The algorithm achieved radiologist-level ' +
        'accuracy.</q> No reference standard, no interval, no denominator, and a comparison the study did ' +
        'not make.' },

    { k:'Clinical investigation report', t:'Report of the clinical investigation',
      gov:'ISO 14155, and the investigation plan the report is written against',
      who:'The notified body, and the sponsor&rsquo;s regulatory function', dec:'Whether the investigation was run and analysed as planned',
      len:'80&ndash;200 pages with appendices', sign:'The sponsor and the coordinating investigator',
      xh:['Clinical investigation report', 'ISO 14155'],
      x:'<p><span class="reg__lab">9.3 Primary endpoint results</span>The primary endpoints of sensitivity ' +
        'and specificity were met against the pre-specified acceptance criteria of 90% and 85% ' +
        'respectively. Sensitivity was 94.2% (420/446; 95% CI 91.6&ndash;96.0) and specificity 88.7% ' +
        '(2,123/2,394; 95% CI 87.3&ndash;89.9). Datasets are listed in Appendix 4.</p>' +
        '<p><span class="reg__lab">9.5 Subgroup analyses</span>The pre-specified analysis by acquisition ' +
        'system is reported in Table 9.5.1. Sensitivity on system C (86.5%; 83/96) did not meet the ' +
        'primary acceptance criterion applied to the population as a whole. This deviation is discussed in ' +
        'Section 10.2 and its consequences for the intended use statement are addressed in Section 11.</p>',
      dos:'<b>Results reported against the acceptance criteria set before the investigation started.</b> ' +
        'The subgroup that misses its criterion is stated as a miss, in the section where results go, and ' +
        'then carried forward to the sections that decide what the device may claim.',
      nos:'<b>No revision of the acceptance criteria after the event, and no analysis the plan did not ' +
        'foresee presented as though it did.</b> A notified body compares this report with the ' +
        'investigation plan line by line, and that comparison is the review.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>Performance was robust across ' +
        'acquisition systems, with minor variation on one system.</q> The word &ldquo;minor&rdquo; is doing ' +
        'work that an acceptance criterion was supposed to do.' },

    { k:'Clinical evaluation report', t:'Clinical evaluation under the EU MDR',
      gov:'MDR Annex XIV Part A, MEDDEV 2.7/1 rev 4, and the MDCG guidance including MDCG 2020-7',
      who:'The notified body reviewer', dec:'Whether the clinical evidence supports the intended purpose and the claims',
      len:'60&ndash;150 pages, with an appraised literature matrix', sign:'A named clinical evaluator, with a CV that justifies the appointment',
      xh:['Clinical evaluation report', 'MDR Annex XIV'],
      x:'<p><span class="reg__lab">8.2 Appraisal against the intended purpose</span>The clinical data ' +
        'demonstrate that the device achieves its intended performance in the intended population when ' +
        'used with the acquisition systems listed in Section 3.2. Sensitivity of 94.2% and specificity of ' +
        '88.7% exceed the state of the art established in Section 6.3, in which reported sensitivities for ' +
        'comparable devices range from 87% to 93%.</p>' +
        '<p><span class="reg__lab">8.4 Residual risk arising from the clinical data</span>Reduced ' +
        'sensitivity on acquisition system C (86.5%) constitutes a residual risk of false negative output ' +
        'in a defined subset of use conditions. This risk is addressed by three measures: system C is ' +
        'excluded from the intended purpose pending further data; the limitation is stated in the ' +
        'instructions for use; and confirmatory data collection on system C is included in the PMCF plan ' +
        '(Section 11.2). The risk-benefit determination in Section 9 is made on that basis.</p>',
      dos:'<b>Every claim tied back to the intended purpose, and the state of the art quantified rather ' +
        'than asserted.</b> The weak subgroup becomes a residual risk with three named controls, because ' +
        'that is the only form in which a notified body can accept it.',
      nos:'<b>No performance claim that the instructions for use do not carry, and no intended purpose ' +
        'wider than the data.</b> A CER that claims what the IFU does not state, or the reverse, is the ' +
        'most common reason for a major non-conformity.',
      wrong:'<b>Written in the wrong register, this reads:</b> a literature summary with a favourable ' +
        'conclusion attached. A CER is an appraisal: each source weighted, each claim traced, and each ' +
        'residual risk carried explicitly into the risk file and the labelling.' },

    { k:'Instructions for use', t:'Information supplied with the device',
      gov:'ISO 20417, MDR Annex I Chapter III, and the eIFU rules where it is supplied electronically',
      who:'The radiologist or radiographer using it, mid-shift', dec:'Whether to rely on this output for this image',
      len:'A few pages, in every required language', sign:'Controlled document, tied to the technical file',
      xh:['Instructions for use &middot; section 4', 'ISO 20417'],
      x:'<p><span class="reg__lab">4.1 Intended purpose</span>The device analyses frontal chest ' +
        'radiographs acquired with the systems listed in section 3.2 and flags images with suspected ' +
        'pneumothorax for prioritised review. It is an adjunct to, and does not replace, review by a ' +
        'qualified clinician.</p>' +
        '<p><span class="reg__lab">4.3 Limitations</span></p><ul>' +
        '<li>The device has not been validated for images acquired with system C. Output must not be ' +
        'relied upon for such images.</li>' +
        '<li>The device does not detect pneumothorax on lateral or paediatric radiographs.</li>' +
        '<li>A negative output does not exclude pneumothorax. Clinical assessment takes precedence over ' +
        'device output in all cases.</li></ul>',
      dos:'<b>Short sentences, the limitation stated as an instruction, and the negative result ' +
        'addressed.</b> The user is mid-shift. &ldquo;Must not be relied upon&rdquo; is unambiguous in a ' +
        'way that &ldquo;reduced performance has been observed&rdquo; is not, and it is what the CER ' +
        'promised would be here.',
      nos:'<b>No accuracy figures without their conditions, and no claim beyond the intended purpose.</b> ' +
        'Everything here is translated, so constructions that survive translation badly are avoided. And ' +
        'nothing appears here that the technical file does not support.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>Sensitivity 94.2%, specificity ' +
        '88.7%.</q> Two true numbers, from an enriched dataset, with no conditions attached &mdash; in the ' +
        'one document a clinician reads while deciding whether to trust the output in front of them.' },

    { k:'PMS and PMCF', t:'Post-market surveillance and clinical follow-up',
      gov:'MDR Articles 83 to 86 and Annex XIV Part B, with MDCG 2020-7 for the PMCF plan',
      who:'The notified body and the competent authority', dec:'Whether the evidence is being kept current, and whether anything has changed in use',
      len:'A plan, then a periodic report on a fixed cycle', sign:'The person responsible for regulatory compliance',
      xh:['PMCF plan &middot; section 3', 'MDR Annex XIV B'],
      x:'<p><span class="reg__lab">3.2 Specific objective: acquisition system C</span>The clinical ' +
        'evaluation identified reduced sensitivity on system C (86.5%, 83/96) and this system is excluded ' +
        'from the intended purpose. The objective of this activity is to establish whether performance on ' +
        'system C meets the acceptance criterion applied to the device as a whole.</p>' +
        '<p><span class="reg__lab">3.3 Method and threshold</span>Prospective collection of 400 ' +
        'consecutive system C radiographs across two sites, adjudicated against the same reference ' +
        'standard. If the lower bound of the 95% confidence interval for sensitivity exceeds 90%, a ' +
        'change to the intended purpose will be submitted. If it does not, the exclusion in section 4.3 of ' +
        'the instructions for use remains and this objective is reopened at the next cycle.</p>',
      dos:'<b>A question, a method and a threshold, written before the data exists.</b> The plan says what ' +
        'will happen in both directions, which is what makes it a plan rather than an intention.',
      nos:'<b>Nothing vague.</b> &ldquo;Performance will be monitored&rdquo; is not a PMCF objective, and ' +
        'it is the single most common reason a plan comes back. Every objective traces to a gap the ' +
        'clinical evaluation identified.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>Real-world performance will continue to ' +
        'be evaluated through routine surveillance.</q> No question, no method, no threshold and no date ' +
        '&mdash; an intention written in the grammar of a commitment.' },

    { k:'HCP-facing material', t:'Product page and clinical summary for hospitals',
      gov:'MDR Article 7 on claims, and the national advertising rules for medical devices',
      who:'A clinical director or procurement lead, comparing products', dec:'Whether to trial it in their department',
      len:'A page, or a two-page summary', sign:'Regulatory and medical review before release',
      xh:['HCP clinical summary', 'MDR Article 7'],
      x:'<p><span class="reg__lab">Validation</span>In a multi-site study of 2,840 chest radiographs ' +
        'assessed against independent expert consensus, the device identified pneumothorax with a ' +
        'sensitivity of 94.2% (95% CI 91.6&ndash;96.0) and a specificity of 88.7% (95% CI ' +
        '87.3&ndash;89.9).</p>' +
        '<p><span class="reg__lab">Conditions</span>The dataset was enriched to a prevalence of 15.7%; ' +
        'predictive values in your population will differ and should be estimated locally. The device is ' +
        'validated for the acquisition systems listed in the instructions for use and is an adjunct to ' +
        'clinician review.</p>',
      dos:'<b>The conditions travel with the numbers, in the same size type.</b> A procurement lead who ' +
        'discovers the enrichment or the excluded scanner later will discount everything else on the page, ' +
        'and they will be right to.',
      nos:'<b>No claim that goes beyond the intended purpose, and no comparison with a named ' +
        'competitor.</b> MDR Article 7 makes misleading claims a regulatory matter, not a marketing one, ' +
        'and &ldquo;radiologist-level&rdquo; is misleading unless a study measured it.',
      wrong:'<b>Written in the wrong register, this reads:</b> <q>94.2% accurate.</q> Accuracy is a third ' +
        'quantity, this is not it, and in an enriched dataset it would not mean what the reader takes it ' +
        'to mean anyway.' }
    ]
  }};

  const ORDER = ['drug','saMD'];
  const state = { s:'drug', d:0 };

  function drawScn(){
    scnBox.innerHTML = ORDER.map(function(k){
      const s = SCN[k];
      return '<button type="button" class="reg__s" data-s="' + k + '" aria-pressed="' +
        (state.s === k) + '"><b>' + s.tab + '</b><span>' + s.sub + '</span></button>';
    }).join('');
  }
  function drawRail(){
    const docs = SCN[state.s].docs;
    railBox.innerHTML = '<p class="reg__railk">The documents it becomes</p>' + docs.map(function(d,i){
      return '<button type="button" class="reg__d" data-d="' + i + '" aria-pressed="' + (state.d === i) +
        '"><b>' + d.k + '</b><span>' + d.t + '</span></button>';
    }).join('');
  }
  function drawOut(){
    const d = SCN[state.s].docs[state.d];
    outBox.innerHTML =
      '<p class="reg__ok">The same finding, written for this reader</p>' +
      '<h3 class="reg__nm">' + d.t + '</h3>' +
      '<p class="reg__gov">Governed by ' + d.gov + '</p>' +
      '<div class="reg__meta">' +
        '<div class="reg__m"><i>Who reads it</i><span>' + d.who + '</span></div>' +
        '<div class="reg__m"><i>What they decide</i><span>' + d.dec + '</span></div>' +
        '<div class="reg__m"><i>Length &middot; sign-off</i><span>' + d.len + '. ' + d.sign + '.</span></div>' +
      '</div>' +
      '<div class="reg__x"><div class="reg__xh"><span>' + d.xh[0] + '</span><span>' + d.xh[1] + '</span></div>' +
        '<div class="reg__xb">' + d.x + '</div></div>' +
      '<div class="reg__why">' +
        '<div class="reg__w reg__w--do"><h4>What this register requires</h4><p>' + d.dos + '</p></div>' +
        '<div class="reg__w reg__w--no"><h4>What it forbids</h4><p>' + d.nos + '</p></div>' +
      '</div>' +
      '<div class="reg__wrong">' + d.wrong + '</div>';
  }
  function draw(){
    drawScn(); drawRail(); drawOut();
    if(findBox) findBox.innerHTML =
      '<p class="reg__findk">The finding, stated once</p>' +
      '<p class="reg__findt">' + SCN[state.s].find + '</p>';
    if(frame) frame.textContent = SCN[state.s].docs.length + ' documents · one set of numbers';
  }

  root.addEventListener('click', function(e){
    const s = e.target.closest('.reg__s');
    if(s){ state.s = s.getAttribute('data-s'); state.d = 0; draw(); return; }
    const d = e.target.closest('.reg__d');
    if(d){ state.d = parseInt(d.getAttribute('data-d'), 10); drawRail(); drawOut(); }
  });

  draw();
})();


(function(){
  const root = document.querySelector('[data-pnl]');
  if(!root) return;
  const qBox   = root.querySelector('[data-pnl-q]');
  const outBox = root.querySelector('[data-pnl-out]');
  const tabBox = root.querySelector('[data-pnl-tabs]');
  const frame  = root.querySelector('[data-pnl-frame]');
  if(!qBox || !outBox || !tabBox) return;

  /* ── the proposal ──────────────────────────────────────────────── */
  const ATTRS = [
    { id:'gap', k:'The question and the gap', o:[
      ['Shown',   'The gap is established against the literature, and a reviewer can check it for themselves.'],
      ['Argued',  'The gap is asserted in the introduction and supported by a handful of citations.'],
      ['Assumed', 'The importance of the field stands in for the importance of this particular question.']
    ]},
    { id:'nov', k:'Ambition and novelty', o:[
      ['Beyond',     'The proposal names what it will do that nobody has done, and why it is possible now.'],
      ['Clearly new','Genuinely new work, incremental in scale rather than in kind.'],
      ['Extension',  'A careful extension of the applicant’s own published work.']
    ]},
    { id:'app', k:'Approach: methods, rigour, feasibility', o:[
      ['Complete', 'Every aim has methods, a power calculation, the pitfalls and a stated alternative.'],
      ['Described','Methods are described; pitfalls and alternatives are thin or absent.'],
      ['Sketched', 'Methods written at the level of a published paper’s methods section.']
    ]},
    { id:'pi', k:'The investigator and the team', o:[
      ['In field',  'Outputs in this exact area, and the team covers every method the proposal uses.'],
      ['Adjacent',  'A strong record in a neighbouring area, with one method held by a collaborator.'],
      ['Emerging',  'Early career, or no published output in the area the proposal moves into.']
    ]},
    { id:'imp', k:'The impact pathway', o:[
      ['Mapped',   'Named beneficiaries, the route to each of them, and how the change will be measured.'],
      ['Stated',   'A general statement of who will benefit and roughly how.'],
      ['Implicit', 'The science is left to speak for itself.']
    ]},
    { id:'wp', k:'Workplan, budget and risk', o:[
      ['Engineered','Work packages, milestones, a risk register, and effort justified per partner.'],
      ['Present',   'A timeline and an itemised budget, without risks or per-partner effort.'],
      ['Outline',   'A total figure and a timeline written in prose.']
    ]}
  ];
  /* level 2 = strongest, 0 = weakest; the buttons are drawn strongest-first */
  const state = { gap:1, nov:1, app:1, pi:1, imp:1, wp:1, f:'nih' };
  const lv = id => state[id];

  const clamp = (n,a,b) => n < a ? a : (n > b ? b : n);
  const half  = n => Math.round(n*2)/2;
  const fmt1  = n => (Math.round(n*10)/10).toFixed(1);

  /* ── NIH: simplified review framework ──────────────────────────── */
  const ADJ = ['','Exceptional','Outstanding','Excellent','Very Good','Good',
               'Satisfactory','Fair','Marginal','Poor'];
  function nih(s){
    const f1 = clamp(Math.round(9 - (s.gap*1.25 + s.nov*0.75)*2), 1, 9);
    const f2 = clamp(9 - s.app*4, 1, 9);
    const f3ok = s.pi >= 1;
    /* NIH: "Do not average Factor 1 and 2 scores"; "Your Factor 1 score
       should set a limit for the best possible overall impact score."
       So the overall can never be better than Factor 1, and a Factor 3
       gap must move it. */
    let ov = Math.max(f1, Math.round(f1*0.4 + f2*0.6));
    if(!f3ok) ov = ov + 1;
    ov = clamp(ov, 1, 9);
    return { f1:f1, f2:f2, f3ok:f3ok, ov:ov };
  }

  /* ── Horizon Europe RIA ────────────────────────────────────────── */
  function heu(s){
    const exc = half(clamp((s.gap + s.nov + s.app)/6*5, 0, 5));
    const imp = half(clamp((s.imp*1.7 + s.gap*0.3)/4*5, 0, 5));
    const wpq = half(clamp((s.wp*1.5 + s.pi*0.5)/4*5, 0, 5));
    const tot = exc + imp + wpq;
    const under = [];
    if(exc < 3) under.push('Excellence');
    if(imp < 3) under.push('Impact');
    if(wpq < 3) under.push('Quality and efficiency of the implementation');
    return { exc:exc, imp:imp, wpq:wpq, tot:tot, under:under, pass:!under.length && tot >= 10 };
  }

  /* ── ERC frontier grants ───────────────────────────────────────── */
  function erc(s){
    /* Step 1 reads the extended synopsis and the CV only: the
       ground-breaking nature and ambition of the project, and the PI. */
    const s1 = s.gap*0.8 + s.nov*1.4 + s.pi*1.8;          /* 0 – 8.0 */
    let g1;
    if(s1 >= 6.6)      g1 = 'A — invited to Step 2';
    else if(s1 >= 5.0) g1 = 'A — not invited';
    else if(s1 >= 3.0) g1 = 'B';
    else               g1 = 'C';
    const s2 = s1 + s.app*1.2 + s.wp*0.6;                  /* 0 – 11.6 */
    const g2 = s1 >= 6.6 ? (s2 >= 9.0 ? 'A' : 'B') : null;
    return { s1:s1, g1:g1, s2:s2, g2:g2, invited:s1 >= 6.6 };
  }

  /* ── Wellcome Discovery Award ──────────────────────────────────── */
  const BAND = v => v >= 1.55 ? ['ok','Strong'] : (v >= 0.75 ? ['mid','Mixed'] : ['bad','Weak']);
  function wel(s){
    const prop = (s.nov*1.1 + s.gap*0.55 + s.app*0.35)/2;  /* 0 – 2 */
    const skil = s.pi;                                      /* 0 – 2 */
    return { prop:prop, skil:skil };
  }

  /* ── ICMR extramural ad-hoc ────────────────────────────────────── */
  function icmr(s){
    return { rat:s.gap, imp:s.imp, nov:s.nov, met:s.app, impl:s.wp };
  }

  /* objective functions, used only to work out which single change
     moves this funder's outcome furthest */
  const OBJ = {
    nih:  s => -nih(s).ov,
    heu:  s => { const h = heu(s); return (h.pass ? 100 : 0) + h.tot; },
    erc:  s => { const e = erc(s); return e.s1*2 + (e.invited ? 20 + e.s2 : 0); },
    wel:  s => { const w = wel(s); return w.prop*0.5 + w.skil*0.25; },
    icmr: s => { const i = icmr(s); return i.rat + i.imp + i.nov + i.met + i.impl; }
  };
  function bestMove(f){
    const base = OBJ[f](state);
    let best = null;
    ATTRS.forEach(function(a){
      if(state[a.id] >= 2) return;
      const trial = Object.assign({}, state);
      trial[a.id] = state[a.id] + 1;
      const d = OBJ[f](trial) - base;
      if(d > 0 && (!best || d > best.d)) best = { a:a, d:d, to:trial[a.id] };
    });
    return best;
  }

  /* ── rendering helpers ─────────────────────────────────────────── */
  const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const andList = a => a.length < 2 ? (a[0] || '')
    : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
  function crit(name, sub, val, body, mod){
    return '<div class="pnl__c' + (mod ? ' ' + mod : '') + '">' +
      '<div class="pnl__ct"><p class="pnl__cn">' + name +
      (sub ? '<em>' + sub + '</em>' : '') + '</p>' +
      (val ? '<span class="pnl__cv">' + val + '</span>' : '') + '</div>' +
      body + '</div>';
  }
  function n9(score){
    let c = '';
    for(let i = 1; i <= 9; i++){
      c += '<i class="' + (i === score ? 'hit' : (i < score ? 'on' : '')) + '"></i>';
    }
    return '<div><div class="pnl__n9">' + c + '</div>' +
      '<div class="pnl__n9lab"><span>1 exceptional</span><span>9 poor</span></div></div>';
  }
  function b5(v){
    const bad = v < 3;
    return '<div><div class="pnl__b5' + (bad ? ' is-bad' : '') + '" style="--w:' +
      (v/5*100) + '%"><i></i><u title="threshold 3"></u></div>' +
      '<div class="pnl__b5lab"><span>0</span><span>threshold 3</span><span>5</span></div></div>';
  }
  function wb(v, pct){
    return '<div class="pnl__wt"><em>' + pct + '</em><div class="pnl__wb"><i style="--w:' +
      (v/2*100) + '%"></i></div></div>';
  }
  function chipOf(v){
    const b = v >= 2 ? ['ok','Strong'] : (v >= 1 ? ['mid','Adequate'] : ['bad','Weak']);
    return '<span class="pnl__chip pnl__chip--' + b[0] + '">' + b[1] + '</span>';
  }
  function moveBox(f){
    const m = bestMove(f);
    if(!m) return '<div class="pnl__move"><b>Nothing here left to lift.</b> Every element is set at its ' +
      'strongest. What separates proposals at that point is not on this page — it is the fit between the ' +
      'question and what this funder has decided to buy this year.</div>';
    return '<div class="pnl__move"><b>The single change that moves this the furthest:</b> ' +
      m.a.k.charAt(0).toLowerCase() + m.a.k.slice(1) + ', from &ldquo;' +
      esc(m.a.o[2 - state[m.a.id]][0]) + '&rdquo; to &ldquo;' + esc(m.a.o[2 - m.to][0]) + '&rdquo;.</div>';
  }

  /* ── the five funder panels ────────────────────────────────────── */
  const FUND = {

    nih: { tab:'NIH', sub:'R01 · United States', render:function(){
      const r = nih(state);
      let h = '<p class="pnl__ok">What the study section does with it</p>' +
        '<h3 class="pnl__nm">NIH R01, simplified review framework</h3>' +
        '<p class="pnl__meta">For due dates on or after 25 January 2025 &middot; Specific Aims 1 page, ' +
        'Research Strategy 12 pages &middot; three factors, two of them scored</p>' +
        '<div class="pnl__crits">';
      h += crit('Factor 1 &mdash; Importance of the Research', 'Significance, Innovation',
        '<b>' + r.f1 + '</b> &middot; ' + ADJ[r.f1], n9(r.f1));
      h += crit('Factor 2 &mdash; Rigor and Feasibility', 'Approach',
        '<b>' + r.f2 + '</b> &middot; ' + ADJ[r.f2], n9(r.f2));
      h += crit('Factor 3 &mdash; Expertise and Resources', 'Investigator, Environment',
        r.f3ok ? 'Appropriate' : 'Additional expertise needed',
        '<p class="pnl__cd">' + (r.f3ok
          ? 'Not scored. Reviewers rate this factor as appropriate or not, and only the second option ' +
            'carries written comments.'
          : 'Not scored, but not harmless. Where reviewers record a gap in expertise or resources, that ' +
            'gap is required to move the overall impact score.') + '</p>',
        r.f3ok ? '' : 'pnl__c--bad');
      h += crit('Overall Impact', 'Assigned holistically, not averaged',
        '<b>' + r.ov + '</b> &middot; ' + ADJ[r.ov] + ' &middot; ' + (r.ov*10),
        n9(r.ov) + '<p class="pnl__cd">The panel mean of the individual overall impact scores, ' +
        'multiplied by ten, is what appears on the summary statement: 10 at best, 90 at worst.</p>');
      h += '</div>';

      const ceiling = r.f1 <= r.ov && r.f2 < r.f1;
      h += '<div class="pnl__v' + (r.ov >= 5 ? ' pnl__v--bad' : '') + '"><p><b>' +
        (r.ov <= 2 ? 'In the range that gets funded almost anywhere.'
         : r.ov <= 3 ? 'Competitive. Whether it is funded depends on the institute.'
         : r.ov <= 5 ? 'Discussed at best, and increasingly not even that.'
         : 'Unlikely to be discussed.') + '</b> ' +
        'Through the October 2026 council round, NIH has cut the share of applications discussed at ' +
        'review to between 30 and 35 per cent, from around half, and sorts the rest into ' +
        '&ldquo;competitive but not discussed&rdquo; and &ldquo;not competitive&rdquo;. A score that ' +
        'was borderline two years ago is now frequently a score that is never spoken about in the room.</p>' +
        (ceiling ? '<p><b>Factor 1 is holding your ceiling.</b> NIH instructs reviewers not to average ' +
          'the two scored factors, and tells them the Factor 1 score sets the limit on the best possible ' +
          'overall impact score. A superb approach to a question of moderate importance cannot climb past ' +
          'that limit — which is why work on the Approach section, the section applicants spend the ' +
          'most time on, sometimes buys nothing at all.</p>' : '') +
        '</div>';

      h += '<div class="pnl__blind"><h4>What NIH never scores here</h4>' +
        '<p><b>Your impact pathway.</b> There is no dissemination and exploitation criterion. NIH asks ' +
        'about influence on the field, inside Factor 1 — so the beneficiary mapping that wins a ' +
        'Horizon Europe grant earns nothing on an R01 and costs you page space you do not have.</p>' +
        '<p><b>Your workplan and budget detail</b> are reviewed for whether the budget is appropriate, ' +
        'but they carry no criterion score of their own.</p></div>';

      h += moveBox('nih');
      h += '<p class="pnl__src">Factors, the non-scoring of Factor 3, the 1&ndash;9 whole-number scale ' +
        'and the instruction that Factor 1 limits the overall impact score are NIH’s own, from the ' +
        'simplified review framework and its reviewer guidance. The reduction in the share of ' +
        'applications discussed is NOT-OD-26-069. NIH has separately asked for comment, to 13 October ' +
        '2026, on replacing the released numerical score with bands — proposed, not adopted.</p>';
      return h;
    }},

    heu: { tab:'Horizon Europe', sub:'RIA · European Union', render:function(){
      const r = heu(state);
      let h = '<p class="pnl__ok">What the evaluators do with it</p>' +
        '<h3 class="pnl__nm">Horizon Europe, Research and Innovation Action</h3>' +
        '<p class="pnl__meta">Three criteria, each 0&ndash;5 and half-marks allowed &middot; threshold 3 ' +
        'on every criterion and 10 of 15 overall &middot; 40 pages for a standard full application</p>' +
        '<div class="pnl__crits">';
      h += crit('Excellence', 'Objectives, ambition beyond the state of the art, soundness of methodology',
        '<b>' + fmt1(r.exc) + '</b> / 5', b5(r.exc), r.exc < 3 ? 'pnl__c--bad' : '');
      h += crit('Impact', 'Credibility of the pathways to the outcomes the work programme expects',
        '<b>' + fmt1(r.imp) + '</b> / 5', b5(r.imp), r.imp < 3 ? 'pnl__c--bad' : '');
      h += crit('Quality and efficiency of the implementation',
        'Work plan, risk, allocation of effort, capacity of each participant',
        '<b>' + fmt1(r.wpq) + '</b> / 5', b5(r.wpq), r.wpq < 3 ? 'pnl__c--bad' : '');
      h += crit('Total', 'The sum of the three, unweighted for a RIA',
        '<b>' + fmt1(r.tot) + '</b> / 15',
        '<p class="pnl__cd">For an Innovation Action the Impact score is weighted one and a half times, ' +
        'but only for ranking — the thresholds are applied to the unweighted scores either way.</p>');
      h += '</div>';

      h += '<div class="pnl__v' + (r.pass ? '' : ' pnl__v--bad') + '"><p><b>' +
        (r.under.length
          ? 'Rejected, whatever the total.'
          : (r.tot >= 10 ? 'Above every threshold.' : 'Above each criterion, below the overall threshold of 10.')) +
        '</b> ' +
        (r.under.length
          ? esc(andList(r.under)) + ' scored below the threshold of 3. ' +
            (r.under.length === 1
              ? 'A proposal that fails one criterion is out even when the other two are excellent and the ' +
                'total looks healthy — this is the failure mode that catches strong research groups, ' +
                'who put their effort where their expertise is and let one section run thin.'
              : 'Each criterion is a gate in its own right, so the sum never comes into it. A proposal ' +
                'that is respectable everywhere and strong nowhere is the commonest shape of Horizon ' +
                'Europe rejection, and the remedy is to be excellent at something rather than to lift ' +
                'everything a little.')
          : (r.tot >= 10
            ? 'Passing is not being funded. Everything above threshold goes onto a ranked list, and the ' +
              'call’s budget draws a line across it. Where proposals tie, the panel prefers those ' +
              'covering aspects of the call nobody else covered, then the higher Excellence score, then ' +
              'Impact, then gender balance among the researchers, then the spread of countries.'
            : 'Every criterion cleared its own threshold, but the sum did not reach 10 of 15. The ' +
              'proposal is eliminated on the total.')) +
        '</p></div>';

      h += '<div class="pnl__blind"><h4>What is different here</h4>' +
        '<p><b>Impact is a third of the assessment and a hard gate.</b> Not a closing paragraph: the ' +
        'evaluators are asked whether the route from your results to the outcomes the work programme ' +
        'named is credible, and whether your dissemination, exploitation and communication measures are ' +
        'suitable — three separate things that researchers routinely write as one.</p>' +
        '<p><b>Your track record is not a criterion.</b> It enters only as the capacity and role of each ' +
        'participant, inside implementation. A CV that carries an ERC application carries very little here.</p>' +
        '</div>';

      h += moveBox('heu');
      h += '<p class="pnl__src">Criteria, sub-elements, thresholds, the absence of weighting for a RIA, ' +
        'the Impact weighting of 1.5 for Innovation Actions and the ex aequo order are from the Horizon ' +
        'Europe 2026&ndash;2027 General Annexes; half-marks are stated on the Commission’s standard ' +
        'RIA evaluation form. Page limits are set per call — check the Part B template attached to ' +
        'the topic before you write to any figure, including this one.</p>';
      return h;
    }},

    erc: { tab:'ERC', sub:'Frontier grants · Europe', render:function(){
      const r = erc(state);
      let h = '<p class="pnl__ok">What the panel does with it</p>' +
        '<h3 class="pnl__nm">ERC Starting, Consolidator and Advanced Grants</h3>' +
        '<p class="pnl__meta">Excellence is the sole criterion &middot; two steps &middot; Part I up to 5 ' +
        'pages, Part II up to 7, CV and track record up to 4 per investigator</p>' +
        '<div class="pnl__crits">';
      h += crit('Step 1 &mdash; the research project', 'Are the questions important, and are the objectives ambitious enough to move the frontier?',
        chipOf(Math.round((state.gap + state.nov)/2)),
        '<p class="pnl__cd">Read from the extended synopsis alone. Methodology, working arrangements, ' +
        'timescales and resources are not assessed at this step.</p>');
      h += crit('Step 1 &mdash; the principal investigator', 'Ground-breaking work, creative and original thinking, the capacity to execute',
        chipOf(state.pi),
        '<p class="pnl__cd">Read from four pages of CV and track record, and weighted against what is ' +
        'reasonable for the career stage the scheme is for rather than against the field at large.</p>');
      h += crit('Step 1 outcome', 'A, B or C', '<b>' + r.g1 + '</b>',
        '<p class="pnl__cd">' + (r.invited
          ? 'Through to the full proposal and the interview.'
          : (r.g1 === 'A — not invited'
            ? 'A grade the ERC gives and few applicants expect: the panel judged the proposal excellent, ' +
              'and it still did not rank high enough to be read again. Nothing in it needs fixing except ' +
              'its position in the queue.'
            : 'Not carried to Step 2. A C grade also brings a restriction on reapplying, which a B does not.')) +
        '</p>', r.invited ? '' : 'pnl__c--bad');
      if(r.invited){
        h += crit('Step 2 &mdash; the full proposal and the interview',
          'Methodology and working arrangements, timescales and resources, assessed for the first time',
          '<b>' + r.g2 + '</b>',
          '<p class="pnl__cd">' + (r.g2 === 'A'
            ? 'Fully meets the excellence criterion and is recommended for funding if the budget reaches it.'
            : 'Meets some elements of the criterion and not all. A B at Step 2 will not be funded.') +
          '</p>', r.g2 === 'A' ? '' : 'pnl__c--bad');
      } else {
        h += crit('Step 2', 'Not reached', '',
          '<p class="pnl__cd">The methodology, the workplan and the budget were never read. This is the ' +
          'part applicants find hardest to believe: at Step 1 the ERC judges an idea and a person, and ' +
          'most of what a well-run lab is proud of is not in front of the panel yet.</p>', 'pnl__c--off');
      }
      h += '</div>';

      h += '<div class="pnl__v' + (r.invited && r.g2 === 'A' ? '' : ' pnl__v--bad') + '"><p><b>' +
        (r.invited ? (r.g2 === 'A' ? 'Recommended for funding, budget permitting.' : 'Not funded.')
                   : 'Does not reach Step 2.') +
        '</b> There is no numeric scale here, no weighting and no per-criterion threshold. Panels judge ' +
        'against one criterion and produce a ranked list, and the grade is the whole of the feedback.</p></div>';

      h += '<div class="pnl__blind"><h4>What earns nothing at the ERC</h4>' +
        '<p><b>Your impact pathway.</b> Excellence is the sole criterion of evaluation. There is no ' +
        'impact section to score, and pages spent on beneficiaries and exploitation are pages not spent ' +
        'on the idea — in a document capped at five pages at the step that eliminates most applicants.</p>' +
        '<p><b>Your workplan.</b> Not read at Step 1 at all. Applicants who move a Horizon Europe ' +
        'consortium proposal across to an ERC call usually arrive with exactly the wrong document.</p>' +
        '</div>';

      h += moveBox('erc');
      h += '<p class="pnl__src">The sole criterion, the assessment elements, the two-step structure, ' +
        'what is read at each step, the A/B/C grades and the page limits are from the ERC Work Programme ' +
        '2026. Interviews now sit at Step 2 for Starting, Consolidator and Advanced Grants, and a new ERC ' +
        'Plus scheme has been added. A 2027 work programme has also been adopted; check it before writing ' +
        'to a 2027 deadline.</p>';
      return h;
    }},

    wel: { tab:'Wellcome', sub:'Discovery Award · UK', render:function(){
      const r = wel(state);
      const bp = BAND(r.prop), bs = BAND(r.skil);
      let h = '<p class="pnl__ok">What the committee does with it</p>' +
        '<h3 class="pnl__nm">Wellcome Discovery Award</h3>' +
        '<p class="pnl__meta">Three criteria with published weightings &middot; shortlisting, external ' +
        'written peer review, then an interview</p>' +
        '<div class="pnl__crits">';
      h += crit('Your research proposal', 'Bold, creative, and high quality — Wellcome’s three words, in that order',
        '<span class="pnl__chip pnl__chip--' + bp[0] + '">' + bp[1] + '</span>',
        wb(r.prop, '50%') +
        '<p class="pnl__cd">Bold means a significant shift in understanding or a significant advance over ' +
        'existing methods. Creative means the approach itself is novel. High quality comes third, and it ' +
        'is the one most academic proposals lead with.</p>');
      h += crit('Your skills and experience', 'Outputs, developing and training others, leadership, the rationale for the team',
        '<span class="pnl__chip pnl__chip--' + bs[0] + '">' + bs[1] + '</span>',
        wb(r.skil, '25%') +
        '<p class="pnl__cd">Note what is in here alongside publications: a record of developing other ' +
        'people, and an explicit justification of why this team and not another.</p>');
      h += crit('Your research environment', 'Strategic alignment with the host, support for developing capability, an inclusive research culture',
        '<span class="pnl__chip pnl__chip--mid">Not set here</span>',
        '<p class="pnl__cd">A quarter of the assessment, and the quarter that is not about your science ' +
        'at all. It is largely written with your institution rather than by you, which is why it is ' +
        'usually started far too late.</p>', 'pnl__c--off');
      h += '</div>';

      h += '<div class="pnl__v"><p><b>No score is shown here, because Wellcome does not publish one.</b> ' +
        'Wellcome publishes the weightings and says that committee members score privately to reduce bias, ' +
        'that the scores are collated into a ranked list of fundable applications, and that staff then ' +
        'decide against the available budget and strategic priorities. The scale itself is not published, ' +
        'so nothing on this page invents one.</p></div>';

      h += '<div class="pnl__blind"><h4>What the weightings tell you to do</h4>' +
        '<p><b>Half the assessment is one question: is this bold?</b> A proposal that is rigorous, ' +
        'fundable elsewhere and modest in ambition is aimed at the wrong scheme, and no amount of ' +
        'polishing moves it.</p>' +
        '<p><b>A quarter of it is your environment</b>, which needs your head of department in the room ' +
        'weeks before the deadline rather than a paragraph the night before.</p></div>';

      h += moveBox('wel');
      h += '<p class="pnl__src">Criterion names, the three qualities and the 50/25/25 weightings are ' +
        'Wellcome’s own, from the Discovery Award scheme page; the assessment route and the private ' +
        'scoring are from Wellcome’s guidance on how it assesses applications. Wellcome words these ' +
        'criteria slightly differently on its general guidance page — the scheme page governs.</p>';
      return h;
    }},

    icmr: { tab:'ICMR', sub:'Extramural ad-hoc · India', render:function(){
      const r = icmr(state);
      let h = '<p class="pnl__ok">What the project review committee does with it</p>' +
        '<h3 class="pnl__nm">ICMR extramural ad-hoc research project</h3>' +
        '<p class="pnl__meta">Five published criteria &middot; submitted through the e-PMS portal &middot; ' +
        'reviewed by a Project Review Committee whose decision is final</p>' +
        '<div class="pnl__crits">';
      h += crit('Rationale', 'Is it likely to solve a priority problem?', chipOf(r.rat), '');
      h += crit('Possible impact', 'Is it likely to have an impact on health outcomes?', chipOf(r.imp), '');
      h += crit('Novelty and innovation', 'Is the study developing or testing a new idea?', chipOf(r.nov), '');
      h += crit('Methodology', 'Are the study methods appropriate to achieve the objectives?', chipOf(r.met), '');
      h += crit('Implementation strategy', 'Is the study feasible in a timely manner?', chipOf(r.impl), '');
      h += '</div>';

      h += '<div class="pnl__v"><p><b>Five criteria, and no published scale to go with them.</b> ICMR ' +
        'publishes what the committee is asked, and not how it scores, so no threshold, weighting or ' +
        'tie-break can honestly be shown here. What the guidelines do fix is the shape of the submission: ' +
        'a title of no more than twenty-five words, a summary of no more than two hundred and fifty, a ' +
        'problem statement of no more than five hundred, and each objective in twenty-five words or ' +
        'fewer.</p><p>Those caps are the assessment. A rationale that needs a page to become convincing ' +
        'will not survive five hundred words, and rewriting it to fit is most of the work.</p></div>';

      h += '<div class="pnl__blind"><h4>What is missing from the five</h4>' +
        '<p><b>Your track record is not one of the criteria</b> for an ad-hoc project, though it is ' +
        'explicit for a Centre for Advanced Research concept note, where the skill and capacity of the ' +
        'team, publications and their impact on policy or practice are assessed directly.</p>' +
        '<p><b>Impact here means health outcomes</b>, not dissemination. The question is whether patients ' +
        'or a health system are better off, and answering it in the language of a European impact ' +
        'pathway misses what is being asked.</p></div>';

      h += moveBox('icmr');
      h += '<p class="pnl__src">The five criteria, the word caps, the role of the Project Review ' +
        'Committee and the concept-note criteria for a Centre for Advanced Research are from ICMR’s ' +
        'published guidelines for the extramural research programme. ICMR does not publish a scoring ' +
        'scale, thresholds or weightings, and this page does not supply them.</p>';
      return h;
    }}
  };
  const ORDER = ['nih','heu','erc','wel','icmr'];

  /* ── wiring ────────────────────────────────────────────────────── */
  function drawTabs(){
    tabBox.innerHTML = ORDER.map(function(k){
      const f = FUND[k];
      return '<button type="button" class="pnl__tab" role="tab" data-f="' + k + '" aria-selected="' +
        (state.f === k) + '"><b>' + f.tab + '</b><span>' + f.sub + '</span></button>';
    }).join('');
  }
  function drawQs(){
    qBox.innerHTML = '<p class="pnl__ctlk">Describe the proposal</p>' + ATTRS.map(function(a){
      const cur = state[a.id];
      const segs = [2,1,0].map(function(l){
        return '<button type="button" data-a="' + a.id + '" data-l="' + l + '" aria-pressed="' +
          (cur === l) + '">' + esc(a.o[2 - l][0]) + '</button>';
      }).join('');
      return '<div class="pnl__q"><p class="pnl__k">' + a.k + '</p>' +
        '<div class="pnl__seg" role="group" aria-label="' + esc(a.k) + '">' + segs + '</div>' +
        '<p class="pnl__d">' + a.o[2 - cur][1] + '</p></div>';
    }).join('');
  }
  function draw(){
    drawTabs();
    drawQs();
    outBox.innerHTML = FUND[state.f].render();
    if(frame) frame.textContent = FUND[state.f].tab + ' · ' + FUND[state.f].sub;
  }

  root.addEventListener('click', function(e){
    const t = e.target.closest('.pnl__tab');
    if(t){ state.f = t.getAttribute('data-f'); draw(); return; }
    const s = e.target.closest('.pnl__seg button');
    if(s){
      state[s.getAttribute('data-a')] = parseInt(s.getAttribute('data-l'), 10);
      draw();
    }
  });

  draw();
})();


/* ---- design chooser: four constraints, and the design they imply ----
   The rules below are the ones a methodologist applies in the first
   conversation. They do not replace that conversation; they show what it
   consists of, and they draw the design so it can be recognised. */
(function designChooser(){
  const root = document.querySelector('[data-dsn]');
  if(!root) return;

  /* every design, with the trade-off that decides whether it is worth it
     and the objection a reviewer reaches for first */
  const D = {
    parallel: {
      n:'Parallel-group randomised trial', cat:'true',
      w:'Participants are randomised once, to intervention or control, and stay there. The comparison is between people.',
      e:'The default, and the design reviewers question least. Because between-person variation stays inside the comparison, it needs more participants than a crossover for the same precision — which is the price of not assuming anything about carry-over.',
      a:'Whether randomisation was concealed until allocation, and whether the groups were balanced on prognosis at baseline. An imbalance in a randomised trial is chance; an imbalance a reviewer can explain by the allocation method is not.',
      r:'Allocation concealment, blinding where it is possible, a pre-registered primary outcome, and CONSORT reporting with a flow diagram that reconciles.',
      fig:{ t:'Two arms, randomised once', rows:['Group A','Group B'], cols:['Baseline','Intervention period','Follow-up'],
            g:[['n','i','i'],['n','c','c']] }
    },
    cross: {
      n:'Crossover trial', cat:'true',
      w:'Each participant receives both conditions in a randomised order, separated by a washout. The comparison is within the person.',
      e:'Each participant is their own control, so between-person variation drops out of the comparison entirely. For a stable condition this commonly needs a quarter to a half the participants of a parallel trial — the largest efficiency gain available in trial design.',
      a:'Carry-over. If the first treatment is still acting during the second period the estimate is biased, and a reviewer will ask how long the washout was and how you know it was long enough.',
      r:'A condition that is chronic and stable, a treatment whose effect is reversible, a washout justified from pharmacokinetics rather than convenience, and a period effect tested for in the analysis.',
      fig:{ t:'Both conditions, order randomised', rows:['Sequence 1','Sequence 2'], cols:['Period 1','Washout','Period 2'],
            g:[['i','w','c'],['c','w','i']] }
    },
    cluster: {
      n:'Cluster-randomised trial', cat:'true',
      w:'Whole clinics, wards, practices or schools are randomised rather than individuals, because that is how the intervention is delivered.',
      e:'Randomising clusters means outcomes within a cluster are correlated, and the sample size inflates by the design effect 1 + (m − 1) × ICC. With thirty patients per cluster and an ICC of 0.02 that is a 58% increase — real, routinely forgotten, and the first thing a statistical reviewer recomputes.',
      a:'Whether the analysis accounted for clustering, and whether participants were recruited before their cluster was allocated. Recruiting afterwards lets a site that knows its arm select who enters — identification bias, and it is common.',
      r:'An ICC estimate from similar studies, enough clusters rather than enough people, recruitment before allocation, and analysis by mixed model or GEE. CONSORT has a cluster extension and reviewers use it.',
      fig:{ t:'Clusters allocated, patients follow', rows:['Clinic 1','Clinic 2','Clinic 3','Clinic 4'], cols:['Baseline','Intervention period','Follow-up'],
            g:[['n','i','i'],['n','c','c'],['n','i','i'],['n','c','c']] }
    },
    wedge: {
      n:'Stepped-wedge cluster trial', cat:'true',
      w:'Every cluster starts on control and crosses to the intervention, one group at a time, in a randomised order. By the end everyone has it.',
      e:'Often the only design that makes a study permissible at all, because nobody is denied the intervention — only asked to wait, in an order decided by chance. It also uses both between-cluster and within-cluster comparisons, so it can be more efficient than a parallel cluster trial.',
      a:'Confounding with time. Because every cluster crosses in the same direction, anything else that changed over the study period is entangled with the intervention, and the analysis has to adjust for secular trend.',
      r:'Enough steps to separate time from treatment, a pre-specified model including calendar time, and an honest account of what else changed during the rollout.',
      fig:{ t:'Everyone crosses, order randomised', rows:['Group 1','Group 2','Group 3','Group 4'],
            cols:['T1','T2','T3','T4','T5'],
            g:[['c','i','i','i','i'],['c','c','i','i','i'],['c','c','c','i','i'],['c','c','c','c','i']] }
    },
    factorial: {
      n:'Factorial trial', cat:'true',
      w:'Two interventions tested at once by randomising each participant to both questions independently, producing four groups.',
      e:'Two questions answered for close to the cost of one, provided the interventions do not interact. That proviso is the whole design: if you need to estimate the interaction rather than assume it away, the trial needs roughly four times the participants.',
      a:'Whether an interaction is plausible. A reviewer who can think of a mechanism by which the two treatments affect each other will ask whether the trial was powered to detect it, and usually it was not.',
      r:'Two interventions with independent mechanisms, a stated assumption of no interaction with its justification, and a pre-specified interaction test reported whatever it shows.',
      fig:{ t:'Two questions, one trial', rows:['A and B','A only','B only','Neither'], cols:['Intervention period'],
            g:[['ab'],['a'],['b'],['c']] }
    },
    multiarm: {
      n:'Multi-arm parallel trial', cat:'true',
      w:'Several interventions compared against one shared control group, randomised in parallel.',
      e:'Sharing a control arm across comparisons saves roughly a quarter of the participants against running the same comparisons as separate two-arm trials, and it removes the problem of comparing across trials run in different places at different times.',
      a:'Multiplicity. Three comparisons at the conventional threshold give around a fourteen per cent chance of a false positive somewhere, and a reviewer will ask what was done about it.',
      r:'A pre-specified multiplicity strategy, a stated primary comparison, and allocation weighted towards the control arm — roughly the square root of the number of experimental arms.',
      fig:{ t:'One control, several comparisons', rows:['Arm A','Arm B','Arm C','Control'], cols:['Baseline','Intervention period','Follow-up'],
            g:[['n','i','i'],['n','a','a'],['n','b','b'],['n','c','c']] }
    },
    its: {
      n:'Interrupted time series', cat:'quasi',
      w:'Repeated measurements before and after a change that was not under your control, with the pre-intervention trend acting as the comparison.',
      e:'The strongest design available when nothing can be randomised and nothing can be withheld — a policy change, a guideline, a system that went live on a date. Far stronger than a simple before-and-after, because it separates the intervention from the trend that was already running.',
      a:'Whether anything else changed at the same time. An interrupted time series cannot rule that out by design, so it has to be ruled out by argument, and the argument is what a reviewer reads.',
      r:'Enough data points on each side — usually at least eight to twelve — a segmented regression accounting for autocorrelation and seasonality, and where possible a control series that was not exposed.',
      fig:{ t:'Trend before, trend after', rows:['Population'], cols:['T1','T2','T3','T4','▾','T5','T6','T7','T8'],
            g:[['n','n','n','n','x','i','i','i','i']] }
    },
    n1: {
      n:'N-of-1 trial', cat:'true',
      w:'A single participant randomised repeatedly between conditions across multiple periods, with the outcome measured each time.',
      e:'The only design that answers what works for this patient rather than what works on average, and the right one when the population is a handful of people or the condition is rare. A series of N-of-1 trials can then be pooled to give a population estimate as well.',
      a:'Generalisability, inevitably — and the answer is that generalising was never the question. The more serious objection is carry-over, exactly as in a crossover, and period effects across a long series.',
      r:'A stable chronic condition, a rapidly reversible treatment, an outcome that can be measured often and reliably, and a randomised order with adequate washouts. Reported under the CENT extension to CONSORT.',
      fig:{ t:'One participant, many randomised periods', rows:['Participant'],
            cols:['P1','w','P2','w','P3','w','P4'],
            g:[['i','w','c','w','c','w','i']] }
    }
  };

  const QS = [
    { k:'unit', t:'Question one', q:'Is the intervention delivered to individuals, or to whole groups?',
      h:'A treatment one patient receives is delivered to an individual. Training a clinic, changing a ward protocol or altering a school curriculum reaches everyone in that place at once.',
      o:[['indiv','To individuals'],['group','To whole groups — clinics, wards, schools']] },
    { k:'hold', t:'Question two', q:'Can it ethically and practically be withheld from some participants?',
      h:'A national policy, a mandated guideline or a system that goes live for everyone cannot be withheld. If it can only be delayed rather than withheld, answer no.',
      o:[['yes','Yes — a control group is possible'],['no','No — everyone will receive it']] },
    { k:'both', t:'Question three', q:'Can one unit receive both conditions, one after the other?',
      h:'This needs a condition that is chronic and stable and a treatment whose effect wears off. A cure, a surgical procedure or anything with lasting effect rules it out.',
      o:[['yes','Yes — the effect is reversible'],['no','No — the effect persists']] },
    { k:'arms', t:'Question four', q:'Are you comparing two conditions, or more than two?',
      h:'Two interventions that act independently can often be tested together rather than sequentially, which is where a factorial design earns its keep.',
      o:[['two','Two'],['several','More than two']] }
  ];

  const state = { unit:'indiv', hold:'yes', both:'no', arms:'two', pick:null };

  /* the rules. Returns designs in order, best first. */
  function rank(s){
    const out = [];
    const push = function(){ for(let i=0;i<arguments.length;i++){
      if(out.indexOf(arguments[i]) < 0) out.push(arguments[i]); } };

    if(s.unit === 'group'){
      if(s.hold === 'no') push('wedge', 'its', 'cluster');
      else if(s.both === 'yes') push('cluster', 'wedge', 'parallel');
      else push('cluster', 'wedge', s.arms === 'several' ? 'multiarm' : 'parallel');
    } else if(s.hold === 'no'){
      push('its', 'wedge', 'n1');
    } else if(s.both === 'yes'){
      if(s.arms === 'several') push('cross', 'factorial', 'n1');
      else push('cross', 'n1', 'parallel');
    } else {
      if(s.arms === 'several') push('factorial', 'multiarm', 'parallel');
      else push('parallel', 'cluster', 'cross');
    }
    return out.slice(0, 3);
  }

  const ctl   = root.querySelector('[data-dsn-q]');
  const out   = root.querySelector('[data-dsn-out]');
  const frame = root.querySelector('[data-dsn-frame]');

  function buildQs(){
    ctl.innerHTML = QS.map(function(q){
      return '<div class="dsn__q"><p class="dsn__qt">' + q.t + '</p><p class="dsn__qs">' + q.q + '</p>' +
        '<div class="dsn__opts' + (q.o.length === 2 && q.o[0][1].length < 14 ? ' dsn__opts--2' : '') + '">' +
        q.o.map(function(o){
          return '<button type="button" class="dsn__o" data-k="' + q.k + '" data-v="' + o[0] + '" aria-pressed="' +
                 (state[q.k] === o[0]) + '">' + o[1] + '</button>'; }).join('') +
        '</div><p class="dsn__hint">' + q.h + '</p></div>';
    }).join('');
    ctl.querySelectorAll('.dsn__o').forEach(function(b){
      b.addEventListener('click', function(){
        state[b.dataset.k] = b.dataset.v;
        state.pick = null;
        ctl.querySelectorAll('[data-k="' + b.dataset.k + '"]').forEach(function(x){
          x.setAttribute('aria-pressed', String(x.dataset.v === state[b.dataset.k])); });
        render();
      });
    });
  }

  const LEG = { c:['--c','Control'], i:['--i','Intervention'], w:['--w','Washout'],
                a:['--a','Intervention A'], b:['--b','Intervention B'], ab:['--ab','Both'],
                n:['--n','No intervention yet'] };

  function figure(f){
    const cols = f.cols.length;
    const track = 'minmax(64px,auto) repeat(' + cols + ',minmax(34px,1fr))';
    let h = '<div class="dsn__fig"><p class="dsn__ft">' + f.t + '</p><div class="dsn__grid">';
    h += '<div class="dsn__rw" style="grid-template-columns:' + track + '"><span></span>' +
         f.cols.map(function(c){ return '<span class="dsn__cl">' + c + '</span>'; }).join('') + '</div>';
    f.rows.forEach(function(r, ri){
      h += '<div class="dsn__rw" style="grid-template-columns:' + track + '">' +
           '<span class="dsn__rl">' + r + '</span>' +
           f.g[ri].map(function(v){
             return '<span class="dsn__cell dsn__cell--' + v + '"></span>'; }).join('') + '</div>';
    });
    h += '</div>';
    const used = [];
    f.g.forEach(function(r){ r.forEach(function(v){ if(v !== 'x' && used.indexOf(v) < 0) used.push(v); }); });
    h += '<p class="dsn__lg">' + used.map(function(v){
      const l = LEG[v]; if(!l) return '';
      return '<span><i class="dsn__cell' + l[0].replace('--','--') + '" style="width:12px;height:12px"></i>' +
             l[1] + '</span>'; }).join('') + '</p>';
    return h + '</div>';
  }

  function render(){
    const order = rank(state);
    const key = (state.pick && order.indexOf(state.pick) > -1) ? state.pick : order[0];
    const d = D[key];
    frame.textContent = d.cat === 'true' ? 'True experimental design' : 'Quasi-experimental design';

    let h = '';
    h += '<p class="dsn__k">' + (key === order[0] ? 'What your constraints point to' : 'Alternative you selected') + '</p>';
    h += '<p class="dsn__nm">' + d.n + '</p>';
    h += '<p class="dsn__cat dsn__cat--' + d.cat + '">' +
         (d.cat === 'true' ? 'True experimental' : 'Quasi-experimental') + '</p>';
    h += figure(d.fig);
    h += '<div class="dsn__body">';
    h += '<div class="dsn__row"><i>What it is</i><span>' + d.w + '</span></div>';
    h += '<div class="dsn__row"><i>The trade</i><span>' + d.e + '</span></div>';
    h += '<div class="dsn__row dsn__row--warn"><i>What a reviewer attacks</i><span>' + d.a + '</span></div>';
    h += '<div class="dsn__row"><i>What it requires</i><span>' + d.r + '</span></div>';
    h += '</div>';

    const alts = order.filter(function(k){ return k !== key; });
    if(alts.length){
      h += '<div class="dsn__alt"><h4>Also worth considering</h4><div class="dsn__alts">' +
        alts.map(function(k){
          return '<button type="button" class="dsn__a" data-pick="' + k + '" aria-pressed="false">' +
                 '<b>' + D[k].n + '</b><span>' + D[k].w + '</span></button>'; }).join('') +
        '</div></div>';
    }
    out.innerHTML = h;
    out.querySelectorAll('[data-pick]').forEach(function(b){
      b.addEventListener('click', function(){ state.pick = b.dataset.pick; render(); });
    });
  }

  buildQs();
  render();
})();


/* ══ Free tools ═══════════════════════════════════════════════════════════
   Twelve calculators and checkers. Everything runs in the visitor's own
   browser: no input leaves the page, nothing is stored, and no result is
   held back behind an email address. Each tool states the arithmetic or the
   published rule it used, so the answer can be checked rather than trusted.
   ────────────────────────────────────────────────────────────────────────*/
(function freeTools(){
  /* The same tools are embedded on service pages as well as on the hub, so
     every [data-tls] container on the page is wired, not just the first. */
  const hubs = Array.prototype.slice.call(document.querySelectorAll('[data-tls]'));
  if(!hubs.length) return;

  /* ── small helpers ─────────────────────────────────────────────────────*/
  const $  = (r,s)=>r.querySelector(s);
  const $$ = (r,s)=>Array.prototype.slice.call(r.querySelectorAll(s));
  const esc = t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  function num(r,k,d){ const e=$(r,'[data-k="'+k+'"]'); if(!e) return d;
    const v=parseFloat(e.value); return isFinite(v)?v:d; }
  function str(r,k){ const e=$(r,'[data-k="'+k+'"]'); return e?e.value:''; }
  function chk(r,k){ const e=$(r,'[data-k="'+k+'"]'); return !!(e&&e.checked); }
  function seg(r,k){ const e=$(r,'[data-seg="'+k+'"] [aria-pressed="true"]'); return e?e.dataset.v:''; }
  function out(r,h){ const e=$(r,'[data-out]'); if(e) e.innerHTML=h; }
  function f(x,d){ if(!isFinite(x)) return '—';
    return x.toLocaleString('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d}); }
  function i0(x){ return isFinite(x)? Math.round(x).toLocaleString('en-GB') : '—'; }
  function pc(x,d){ return isFinite(x)? f(x*100,d===undefined?1:d)+'%' : '—'; }

  /* a [data-when="key:a|b"] field shows only for those values of a segmented
     control or, failing that, of a select with the same data-k */
  function whenVal(r,k){ const s=seg(r,k); return s!==''? s : str(r,k); }
  function applyWhen(r){
    $$(r,'[data-when]').forEach(function(el){
      const p = el.dataset.when.split(':');
      el.hidden = p[1].split('|').indexOf(whenVal(r,p[0])) < 0;
    });
  }
  function wire(r,fn){
    const run = function(){ applyWhen(r); fn(); };
    r.addEventListener('input',run); r.addEventListener('change',run);
    $$(r,'.tseg').forEach(function(g){
      g.addEventListener('click',function(e){
        const b=e.target.closest('button'); if(!b) return;
        $$(g,'button').forEach(function(x){ x.setAttribute('aria-pressed', x===b?'true':'false'); });
        run();
      });
    });
    run();
  }
  function copier(r){
    const b=$(r,'[data-copy]'); if(!b) return;
    b.addEventListener('click',function(){
      const t=$(r,'[data-copytext]'); if(!t) return;
      const txt=t.innerText;
      const done=function(){ const o=b.textContent; b.textContent='Copied';
        setTimeout(function(){ b.textContent=o; },1400); };
      if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done,done); }
      else{ const a=document.createElement('textarea'); a.value=txt; document.body.appendChild(a);
        a.select(); try{document.execCommand('copy');}catch(e){} a.remove(); done(); }
    });
  }

  /* ── statistics ────────────────────────────────────────────────────────
     Inverse normal: Acklam's rational approximation, accurate to about
     1e-9 — several orders of magnitude finer than any of these answers. */
  function z(p){
    const a=[-3.969683028665376e1,2.209460984245205e2,-2.759285104469687e2,1.383577518672690e2,-3.066479806614716e1,2.506628277459239],
          b=[-5.447609879822406e1,1.615858368580409e2,-1.556989798598866e2,6.680131188771972e1,-1.328068155288572e1],
          c=[-7.784894002430293e-3,-3.223964580411365e-1,-2.400758277161838,-2.549732539343734,4.374664141464968,2.938163982698783],
          d=[7.784695709041462e-3,3.224671290700398e-1,2.445134137142996,3.754408661907416];
    const pl=0.02425; let q,r;
    if(p<=0) return -Infinity; if(p>=1) return Infinity;
    if(p<pl){ q=Math.sqrt(-2*Math.log(p));
      return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    if(p>1-pl){ q=Math.sqrt(-2*Math.log(1-p));
      return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1); }
    q=p-0.5; r=q*q;
    return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q /
           (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  }
  const Z95 = 1.959963984540054;

  /* log gamma, then the regularised upper incomplete gamma Q(a,x) by series
     and continued fraction — used only for the chi-square tail on Q. */
  function lgam(x){
    const c=[76.18009172947146,-86.50532032941677,24.01409824083091,
             -1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
    let y=x, t=x+5.5; t-=(x+0.5)*Math.log(t);
    let s=1.000000000190015;
    for(let j=0;j<6;j++) s+=c[j]/++y;
    return -t+Math.log(2.5066282746310005*s/x);
  }
  function gammq(a,x){
    if(x<0||a<=0) return NaN;
    if(x<a+1){ /* series for P, then 1-P */
      let ap=a, sum=1/a, del=sum;
      for(let n=1;n<500;n++){ ap++; del*=x/ap; sum+=del; if(Math.abs(del)<Math.abs(sum)*1e-12) break; }
      return 1 - sum*Math.exp(-x+a*Math.log(x)-lgam(a));
    }
    let b=x+1-a, c=1/1e-30, d=1/b, h=d;
    for(let n=1;n<500;n++){
      const an=-n*(n-a); b+=2; d=an*d+b; if(Math.abs(d)<1e-30) d=1e-30;
      c=b+an/c; if(Math.abs(c)<1e-30) c=1e-30;
      d=1/d; const del=d*c; h*=del; if(Math.abs(del-1)<1e-12) break;
    }
    return Math.exp(-x+a*Math.log(x)-lgam(a))*h;
  }
  const chiP = (q,df)=> (df<=0||!isFinite(q)) ? NaN : gammq(df/2, q/2);
  function pTxt(p){
    if(!isFinite(p)) return '—';
    if(p<0.0001) return 'p < 0.0001';
    return 'p = ' + f(p, p<0.01?4:3);
  }

  const TOOLS = {};

  /* ════ 01 · Sample size ════════════════════════════════════════════════*/
  TOOLS.ss = function(r){ wire(r, function(){
    const kind=seg(r,'kind'), k=Math.max(0.1,num(r,'ratio',1)),
          alpha=parseFloat(str(r,'alpha'))||0.05,
          power=parseFloat(str(r,'power'))||0.9,
          drop=Math.min(0.9,Math.max(0,num(r,'drop',10)/100));
    const za=z(1-alpha/2), zb=z(power);
    let n1=NaN, ev=NaN, eff='';

    if(kind==='mean'){
      const d=num(r,'delta',0), sd=num(r,'sd',0);
      if(d>0&&sd>0){ n1=(1+1/k)*Math.pow(za+zb,2)*sd*sd/(d*d); }
      eff='Difference of '+f(d,2)+' with a standard deviation of '+f(sd,2)+
          ' (standardised effect '+f(d/sd,2)+')';
    } else if(kind==='prop'){
      const p1=num(r,'p1',0)/100, p2=num(r,'p2',0)/100;
      if(p1>0&&p1<1&&p2>0&&p2<1&&p1!==p2){
        const pb=(p1+k*p2)/(1+k);
        n1=Math.pow(za*Math.sqrt((1+1/k)*pb*(1-pb)) +
                    zb*Math.sqrt(p1*(1-p1)+p2*(1-p2)/k),2)/Math.pow(p1-p2,2);
      }
      eff=pc(p1)+' against '+pc(p2)+' — an absolute difference of '+f(Math.abs(p1-p2)*100,1)+' points';
    } else {
      const hr=num(r,'hr',0), pe=num(r,'pev',0)/100;
      if(hr>0&&hr!==1&&pe>0&&pe<=1){
        ev=Math.pow(1+k,2)/k*Math.pow(za+zb,2)/Math.pow(Math.log(hr),2);
        n1=(ev/pe)/(1+k);
      }
      eff='Hazard ratio of '+f(hr,2)+', with '+pc(pe,0)+' of those randomised expected to have the event';
    }
    if(!isFinite(n1)||n1<=0){ out(r,'<p class="tstate">Enter an effect worth detecting — the two values must differ and neither can be zero.</p>'); return; }

    const inf=1/(1-drop);
    const N1=Math.ceil(n1*inf), N2=Math.ceil(n1*k*inf), TOT=N1+N2;
    const rec1=Math.ceil(n1), rec2=Math.ceil(n1*k);

    out(r,
      '<div class="tout__hd"><span><b>'+i0(TOT)+' participants</b> to randomise</span>'+
      '<span>'+pc(power,0)+' power · two-sided '+f(alpha,2)+'</span></div>'+
      '<div class="tbig'+(kind==='surv'?' tbig--3':'')+'">'+
        '<div class="tbig__i"><p class="tbig__v">'+i0(N1)+'</p><p class="tbig__l">Group 1, allowing for loss</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+i0(N2)+'</p><p class="tbig__l">Group 2, allowing for loss</p></div>'+
        (kind==='surv'?'<div class="tbig__i"><p class="tbig__v">'+i0(Math.ceil(ev))+'</p><p class="tbig__l">Events needed at analysis</p></div>':'')+
      '</div>'+
      '<div class="trow trow--hd"><b>How that number is reached</b><i></i></div>'+
      '<div class="trow"><b>Analysable participants the test requires</b><i>'+i0(rec1)+' + '+i0(rec2)+'</i></div>'+
      '<div class="trow"><b>Inflated for '+f(drop*100,0)+'% loss to follow-up</b><i>× '+f(inf,3)+'</i></div>'+
      '<div class="trow"><b>Allocation ratio</b><i>1 : '+f(k,2)+'</i></div>'+
      '<div class="trow trow--hd"><b>Effect the study is powered for</b><i></i></div>'+
      '<div class="tverd"><p>'+eff+'. Anything smaller than this will probably not reach significance in a trial of this size, and that is the number a reviewer will ask you to justify clinically — not statistically.</p></div>'+
      '<p class="tmeth"><b>Method.</b> '+(kind==='mean'
        ? 'Two independent means, normal approximation: <code>n₁ = (1 + 1/k)(z<sub>1−α/2</sub> + z<sub>1−β</sub>)²σ² / Δ²</code>.'
        : kind==='prop'
        ? 'Two independent proportions with the pooled variance under the null: <code>n₁ = [z<sub>1−α/2</sub>√((1+1/k)p̄q̄) + z<sub>1−β</sub>√(p₁q₁ + p₂q₂/k)]² / (p₁−p₂)²</code>.'
        : 'Schoenfeld’s log-rank requirement: <code>E = (1+k)²/k · (z<sub>1−α/2</sub> + z<sub>1−β</sub>)² / (ln HR)²</code>, divided by the expected event probability to give participants.')+
      ' This is the textbook closed-form answer. A cluster design, an interim look, a non-inferiority margin, a repeated measure or a competing risk all change it, and none of them can be added by adjusting this number afterwards.</p>'
    );
  });};

  /* ════ 02 · Effect-size converter ══════════════════════════════════════*/
  TOOLS.es = function(r){ wire(r, function(){
    const from=seg(r,'from'), v=num(r,'val',NaN),
          n1=Math.max(2,num(r,'n1',30)), n2=Math.max(2,num(r,'n2',30));
    const N=n1+n2, a=N*N/(n1*n2), J=1-3/(4*N-9);
    let d=NaN;
    if(!isFinite(v)){ out(r,'<p class="tstate">Enter the effect size you have.</p>'); return; }
    if(from==='d') d=v;
    else if(from==='g') d=v/J;
    else if(from==='r'){ if(Math.abs(v)>=1){ out(r,'<p class="tstate">A correlation has to lie between −1 and 1.</p>'); return; }
      d=v*Math.sqrt(a)/Math.sqrt(1-v*v); }
    else { if(v<=0){ out(r,'<p class="tstate">An odds ratio has to be greater than zero.</p>'); return; }
      d=Math.log(v)*Math.sqrt(3)/Math.PI; }

    const se=Math.sqrt(N/(n1*n2)+d*d/(2*N));
    const lo=d-Z95*se, hi=d+Z95*se;
    const asG=x=>x*J, asR=x=>x/Math.sqrt(x*x+a), asL=x=>x*Math.PI/Math.sqrt(3);
    const row=(lab,c,l,h,dp)=>'<div class="trow"><b>'+lab+'</b><i>'+f(c,dp)+
      '  <span style="font-weight:400;color:var(--ink-3)">('+f(l,dp)+' to '+f(h,dp)+')</span></i></div>';
    const mag = Math.abs(d)<0.2?'below the conventional threshold for a small effect'
      : Math.abs(d)<0.5?'in the range usually called small'
      : Math.abs(d)<0.8?'in the range usually called moderate':'in the range usually called large';

    out(r,
      '<div class="tout__hd"><span><b>Same effect, five scales</b></span><span>95% confidence intervals</span></div>'+
      '<div class="tbig"><div class="tbig__i"><p class="tbig__v">'+f(d,3)+'</p>'+
        '<p class="tbig__l">Cohen’s d</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(asR(d),3)+'</p><p class="tbig__l">Correlation r</p></div></div>'+
      '<div class="trow trow--hd"><b>Converted</b><i>estimate (95% CI)</i></div>'+
      row('Cohen’s d',d,lo,hi,3)+
      row('Hedges’ g (small-sample corrected)',asG(d),asG(lo),asG(hi),3)+
      row('Correlation r',asR(d),asR(lo),asR(hi),3)+
      row('Log odds ratio',asL(d),asL(lo),asL(hi),3)+
      row('Odds ratio',Math.exp(asL(d)),Math.exp(asL(lo)),Math.exp(asL(hi)),2)+
      '<div class="tverd"><p>With '+i0(n1)+' and '+i0(n2)+' per group the standard error of d is '+f(se,3)+
      ', so this effect is '+mag+' and the interval '+
      ((lo<0&&hi>0)?'<b>includes zero</b> — the direction is not established at this sample size'
        :'<b>excludes zero</b>')+'.</p></div>'+
      '<p class="tmeth"><b>Method.</b> <code>g = d·J</code> with <code>J = 1 − 3/(4N−9)</code>; '+
      '<code>r = d/√(d²+a)</code> with <code>a = N²/(n₁n₂)</code>; '+
      '<code>ln OR = d·π/√3</code> (Hasselblad–Hedges). '+
      'The standard error is <code>√(N/(n₁n₂) + d²/2N)</code>; the limits are converted through the '+
      'same monotone transforms as the estimate, which is why the odds-ratio interval is not symmetric.</p>'
    );
  });};

  /* ════ 03 · Confidence interval from a p-value ═════════════════════════*/
  TOOLS.cip = function(r){ wire(r, function(){
    const scale=seg(r,'scale'), est=num(r,'est',NaN), p=num(r,'p',NaN),
          lvl=parseFloat(str(r,'lvl'))||0.95;
    if(!isFinite(est)||!isFinite(p)){ out(r,'<p class="tstate">Enter the published estimate and its p-value.</p>'); return; }
    if(p<=0||p>=1){ out(r,'<p class="tstate">The p-value has to be between 0 and 1. A paper reporting only “p &lt; 0.05” or “p = 0.000” does not carry enough information for this — that is itself a reporting failure worth noting.</p>'); return; }
    if(scale==='ratio'&&est<=0){ out(r,'<p class="tstate">A ratio measure has to be greater than zero.</p>'); return; }
    const e = scale==='ratio'? Math.log(est) : est;
    if(e===0){ out(r,'<p class="tstate">With an estimate of exactly no effect the standard error cannot be recovered this way.</p>'); return; }
    const zp=z(1-p/2), se=Math.abs(e)/zp, zc=z(1-(1-lvl)/2);
    let lo=e-zc*se, hi=e+zc*se;
    const dp = scale==='ratio'?2:3;
    if(scale==='ratio'){ lo=Math.exp(lo); hi=Math.exp(hi); }
    const crosses = scale==='ratio' ? (lo<1&&hi>1) : (lo<0&&hi>0);
    out(r,
      '<div class="tout__hd"><span><b>'+f(est,dp)+'</b> ('+f(lvl*100,0)+'% CI '+f(lo,dp)+' to '+f(hi,dp)+')</span>'+
      '<span>recovered from '+pTxt(p)+'</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+f(lo,dp)+'</p><p class="tbig__l">Lower limit</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(est,dp)+'</p><p class="tbig__l">Estimate as published</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(hi,dp)+'</p><p class="tbig__l">Upper limit</p></div>'+
      '</div>'+
      '<div class="trow"><b>z implied by the p-value</b><i>'+f(zp,3)+'</i></div>'+
      '<div class="trow"><b>Standard error'+(scale==='ratio'?' (log scale)':'')+'</b><i>'+f(se,4)+'</i></div>'+
      '<div class="trow '+(crosses?'trow--no':'trow--ok')+'"><b>Interval '+(crosses?'includes':'excludes')+' no effect</b>'+
      '<i>'+(crosses?'not significant at this level':'significant at this level')+'</i></div>'+
      '<div class="tverd"><p>This is the interval the paper should have printed. It is worth doing whenever a meta-analysis needs a variance and the source reports only an estimate and a p-value — and whenever a claim rests on a p-value alone, because the width of this interval usually settles the argument faster than the p-value does.</p></div>'+
      '<p class="tmeth"><b>Method.</b> Altman and Bland’s reverse calculation (<i>BMJ</i> 2011;343:d2090): <code>z = Φ⁻¹(1 − p/2)</code>, <code>SE = estimate / z</code>, then <code>estimate ± z<sub>crit</sub>·SE</code>. '+
      'Ratio measures are worked on the log scale and exponentiated back. It assumes the published p-value is two-sided and came from a normal or large-sample test; for a small sample or an exact test the recovered interval is approximate.</p>'
    );
  });};

  /* ════ 04 · Heterogeneity ══════════════════════════════════════════════*/
  TOOLS.het = function(r){ wire(r, function(){
    const form=seg(r,'form'), scale=seg(r,'scale'), raw=str(r,'rows');
    const ys=[], ses=[], bad=[];
    raw.split(/\n+/).forEach(function(line,idx){
      const t=line.trim(); if(!t) return;
      const p=t.split(/[,;\t]+|\s{2,}|\s+/).map(parseFloat).filter(isFinite);
      if(form==='ci'&&p.length<3){ bad.push(idx+1); return; }
      if(form==='se'&&p.length<2){ bad.push(idx+1); return; }
      let y,se;
      if(form==='ci'){
        if(scale==='ratio'){ if(p[0]<=0||p[1]<=0||p[2]<=0){ bad.push(idx+1); return; }
          y=Math.log(p[0]); se=(Math.log(p[2])-Math.log(p[1]))/(2*Z95); }
        else { y=p[0]; se=(p[2]-p[1])/(2*Z95); }
      } else {
        if(scale==='ratio'){ if(p[0]<=0){ bad.push(idx+1); return; } y=Math.log(p[0]); }
        else y=p[0];
        se=p[1];
      }
      if(!(se>0)){ bad.push(idx+1); return; }
      ys.push(y); ses.push(se);
    });
    const k=ys.length;
    if(k<2){ out(r,'<p class="tstate">Paste at least two studies, one per line. '+
      (bad.length?'Lines '+bad.join(', ')+' could not be read.':'')+'</p>'); return; }

    const w=ses.map(s=>1/(s*s)), sw=w.reduce((a,b)=>a+b,0);
    const fx=ys.reduce((a,y,i)=>a+w[i]*y,0)/sw;
    const Q=ys.reduce((a,y,i)=>a+w[i]*(y-fx)*(y-fx),0), df=k-1;
    const C=sw-w.reduce((a,x)=>a+x*x,0)/sw;
    const tau2=Math.max(0,(Q-df)/C);
    const I2=Math.max(0,(Q-df)/Q)*100;
    const H=Math.sqrt(Math.max(1,Q/df));
    const wr=ses.map(s=>1/(s*s+tau2)), swr=wr.reduce((a,b)=>a+b,0);
    const re=ys.reduce((a,y,i)=>a+wr[i]*y,0)/swr, seRe=Math.sqrt(1/swr);
    const pQ=chiP(Q,df);
    const band = I2<25?['tflag--ok','Low','are consistent enough that a pooled estimate means something']
      : I2<50?['tflag--mid','Moderate','should be pooled with a random-effects model, and the choice of model stated']
      : I2<75?['tflag--mid','Substantial','disagree enough that the disagreement has to be explained before a pooled estimate means anything']
      : ['tflag--no','Considerable','disagree so much that a single pooled estimate is likely to mislead'];
    const sh=x=>scale==='ratio'?Math.exp(x):x, dp=scale==='ratio'?2:3;

    out(r,
      '<div class="tout__hd"><span><b>'+k+' studies</b> · I² = '+f(I2,1)+'%</span>'+
      '<span>'+(scale==='ratio'?'ratio scale, pooled on log':'raw scale')+'</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+f(I2,1)+'<small>%</small></p><p class="tbig__l">I² · variation not due to chance</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(tau2,4)+'</p><p class="tbig__l">τ² · between-study variance</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(H,2)+'</p><p class="tbig__l">H · observed over expected spread</p></div>'+
      '</div>'+
      '<div class="trow trow--hd"><b>Pooled estimate</b><i>95% CI</i></div>'+
      '<div class="trow"><b>Fixed effect (inverse variance)</b><i>'+f(sh(fx),dp)+'</i></div>'+
      '<div class="trow"><b>Random effects (DerSimonian–Laird)</b><i>'+f(sh(re),dp)+
        '  <span style="font-weight:400;color:var(--ink-3)">('+f(sh(re-Z95*seRe),dp)+' to '+f(sh(re+Z95*seRe),dp)+')</span></i></div>'+
      '<div class="trow"><b>Cochran’s Q on '+df+' df</b><i>'+f(Q,2)+' · '+pTxt(pQ)+'</i></div>'+
      '<div class="tverd"><p><span class="tflag '+band[0]+'">'+band[1]+' heterogeneity</span></p>'+
      '<p>At I² = '+f(I2,1)+'% these studies '+band[2]+'. '+
      'I² is a proportion, not a test: with '+k+' studies it is imprecise, and a low I² with wide studies can still hide real disagreement. '+
      'The question a reviewer will ask is what differs between these studies clinically — population, dose, follow-up, outcome definition — and that is answered by subgroup or meta-regression, not by the number above.</p>'+
      (bad.length?'<p><b>Skipped:</b> line'+(bad.length>1?'s':'')+' '+bad.join(', ')+' could not be read.</p>':'')+'</div>'+
      '<p class="tmeth"><b>Method.</b> <code>wᵢ = 1/SEᵢ²</code>; <code>Q = Σwᵢ(yᵢ − ȳ)²</code>; '+
      '<code>I² = max(0, (Q−df)/Q)</code>; <code>τ² = max(0, (Q−df)/(Σw − Σw²/Σw))</code> (DerSimonian–Laird); '+
      'the random-effects weights are <code>1/(SEᵢ²+τ²)</code>. Q is referred to a χ² distribution on k−1 degrees of freedom. '+
      'Ratio measures are log-transformed before pooling and exponentiated afterwards.</p>'
    );
  });};

  /* ════ 05 · Absolute risk and NNT ══════════════════════════════════════*/
  TOOLS.nnt = function(r){ wire(r, function(){
    const a=num(r,'ec',NaN), n1=num(r,'nc',NaN), c=num(r,'et',NaN), n2=num(r,'nt',NaN);
    if(![a,n1,c,n2].every(isFinite)||n1<1||n2<1||a<0||c<0||a>n1||c>n2){
      out(r,'<p class="tstate">Enter the number of events and the number of participants in each arm. Events cannot exceed the arm size.</p>'); return; }
    const cer=a/n1, eer=c/n2, arr=cer-eer;
    const seArr=Math.sqrt(cer*(1-cer)/n1+eer*(1-eer)/n2);
    const aLo=arr-Z95*seArr, aHi=arr+Z95*seArr;
    const rrr=cer>0?arr/cer:NaN;
    const benefit=arr>0;
    const nnt=arr!==0?Math.abs(1/arr):Infinity;
    let rr=NaN,rrL=NaN,rrH=NaN;
    if(a>0&&c>0){ rr=eer/cer; const s=Math.sqrt(1/c-1/n2+1/a-1/n1);
      rrL=Math.exp(Math.log(rr)-Z95*s); rrH=Math.exp(Math.log(rr)+Z95*s); }
    let or=NaN,orL=NaN,orH=NaN;
    if(a>0&&c>0&&a<n1&&c<n2){ or=(c/(n2-c))/(a/(n1-a));
      const s=Math.sqrt(1/a+1/(n1-a)+1/c+1/(n2-c));
      orL=Math.exp(Math.log(or)-Z95*s); orH=Math.exp(Math.log(or)+Z95*s); }

    /* Altman's rule for an NNT interval that spans no difference */
    let nntCI;
    if(aLo<0&&aHi>0){
      nntCI='NNT to benefit '+i0(Math.abs(1/aHi))+' to ∞ to NNT to harm '+i0(Math.abs(1/aLo));
    } else {
      const x=[Math.abs(1/aLo),Math.abs(1/aHi)].sort((p,q)=>p-q);
      nntCI=i0(x[0])+' to '+i0(x[1]);
    }
    const lab=benefit?'Number needed to treat':'Number needed to harm';

    out(r,
      '<div class="tout__hd"><span><b>'+lab+' '+(isFinite(nnt)?i0(Math.ceil(nnt)):'∞')+'</b></span>'+
      '<span>'+i0(n1+n2)+' participants</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+(isFinite(nnt)?i0(Math.ceil(nnt)):'∞')+'</p><p class="tbig__l">'+lab+'</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(Math.abs(arr)*100,1)+'<small>pts</small></p><p class="tbig__l">Absolute risk '+(benefit?'reduction':'increase')+'</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+(isFinite(rrr)?f(Math.abs(rrr)*100,1):'—')+'<small>%</small></p><p class="tbig__l">Relative risk '+(benefit?'reduction':'increase')+'</p></div>'+
      '</div>'+
      '<div class="trow trow--hd"><b>Measure</b><i>estimate (95% CI)</i></div>'+
      '<div class="trow"><b>Risk without treatment</b><i>'+pc(cer,1)+'</i></div>'+
      '<div class="trow"><b>Risk with treatment</b><i>'+pc(eer,1)+'</i></div>'+
      '<div class="trow"><b>Absolute difference</b><i>'+f(arr*100,1)+' pts <span style="font-weight:400;color:var(--ink-3)">('+f(aLo*100,1)+' to '+f(aHi*100,1)+')</span></i></div>'+
      '<div class="trow"><b>'+lab+'</b><i>'+(isFinite(nnt)?i0(Math.ceil(nnt)):'∞')+' <span style="font-weight:400;color:var(--ink-3)">('+nntCI+')</span></i></div>'+
      '<div class="trow"><b>Risk ratio</b><i>'+f(rr,2)+' <span style="font-weight:400;color:var(--ink-3)">('+f(rrL,2)+' to '+f(rrH,2)+')</span></i></div>'+
      '<div class="trow"><b>Odds ratio</b><i>'+f(or,2)+' <span style="font-weight:400;color:var(--ink-3)">('+f(orL,2)+' to '+f(orH,2)+')</span></i></div>'+
      '<div class="tverd"><p>'+(isFinite(nnt)
        ? 'About <b>'+i0(Math.ceil(nnt))+' people</b> would have to be treated for one additional person to '+(benefit?'avoid':'have')+' the event, at the baseline risk in this trial.'
        : 'The two arms had the same risk, so no number needed to treat can be quoted.')+
      ' An NNT is tied to that baseline risk and to that follow-up time: quoting it for a population at a different underlying risk, or over a different period, is the most common misuse of this number. '+
      (aLo<0&&aHi>0?'Here the interval crosses no difference, so the honest statement is that this trial did not establish a direction. ':'')+
      ((a===0||c===0)?'<b>One arm had no events</b>, so the risk ratio and odds ratio are undefined and the normal approximation behind the interval on the risk difference is unreliable here. Use an exact method, or a continuity correction stated in the methods.':'')+'</p></div>'+
      '<p class="tmeth"><b>Method.</b> <code>ARR = CER − EER</code>, <code>NNT = 1/ARR</code>. '+
      'The interval on ARR uses the normal approximation <code>√(CER(1−CER)/n₁ + EER(1−EER)/n₂)</code> and is inverted for the NNT limits; '+
      'where it crosses zero the limits are reported as benefit-to-infinity-to-harm, following Altman (<i>BMJ</i> 1998;317:1309). '+
      'The risk-ratio interval uses Katz’s log method and the odds ratio Woolf’s. With zero events in an arm the ratio measures are undefined and a continuity correction is needed.</p>'
    );
  });};

  /* ════ 06 · Statistical test chooser ═══════════════════════════════════*/
  TOOLS.tst = function(r){ wire(r, function(){
    const oc=seg(r,'oc'), gp=seg(r,'gp'), dg=seg(r,'dg'), ds=seg(r,'ds'), cov=chk(r,'cov');
    const par = ds==='norm';
    let main='', alt='', rep='', asm='', err='';

    if(oc==='cont'){
      rep='The difference between groups with a 95% confidence interval, in the units you measured — not the p-value on its own, and not the two group means with a star between them.';
      asm='Look at the residuals, not at the raw outcome. Normality matters for the residuals of the model, and with reasonable group sizes the test is robust to mild departures.';
      if(gp==='one'){ main=par?'One-sample t-test':'Wilcoxon signed-rank test';
        alt=par?'Wilcoxon signed-rank test if the distribution is clearly skewed':'One-sample t-test with a bootstrap interval';
        err='Testing against a reference value that was itself estimated from the same data.'; }
      else if(gp==='two'&&dg==='ind'){ main=par?'Independent-samples t-test (Welch, not Student)':'Mann–Whitney U test';
        alt=par?'Mann–Whitney U, or a t-test on transformed data':'Welch t-test on log-transformed data, or a bootstrap difference in means';
        asm=par?'Welch’s version does not assume equal variances and should be the default; testing for equal variance first and then choosing inflates the error rate.':'Mann–Whitney tests stochastic dominance, not the difference in medians, unless the two distributions have the same shape.';
        err='Reporting a Mann–Whitney p-value beside a difference in means — the test and the estimate then disagree about what was compared.'; }
      else if(gp==='two'){ main=par?'Paired t-test on the within-person differences':'Wilcoxon signed-rank test on the differences';
        alt='A linear mixed model if any pairs are incomplete, which keeps the partial data';
        err='Analysing the two time points as independent groups. That throws away the pairing and usually loses power.'; }
      else if(dg==='ind'){ main=par?'One-way ANOVA with pre-specified contrasts':'Kruskal–Wallis test';
        alt=par?'Kruskal–Wallis, or a linear model with robust standard errors':'One-way ANOVA on ranks or on transformed data';
        err='Running every pairwise comparison after a significant omnibus test without adjusting, or without having said in advance which comparisons matter.'; }
      else { main='Linear mixed model with a random effect for participant';
        alt='Repeated-measures ANOVA if the design is balanced and complete; Friedman test if the outcome is clearly non-normal';
        asm='A mixed model handles missing time points without deleting the participant, which repeated-measures ANOVA cannot.';
        err='Dropping every participant with one missing visit, which is both wasteful and usually not missing at random.'; }
      if(cov){ main='Linear regression'+(dg==='pair'||gp==='many'&&dg==='pair'?' as a mixed model':' (ANCOVA)')+' with the covariates entered';
        rep='The adjusted difference with its 95% confidence interval, alongside the unadjusted one, and the covariates named in advance.';
        err='Choosing covariates by looking at which ones change the estimate. Pre-specify them, or the adjusted result is not interpretable.'; }
    }
    else if(oc==='bin'){
      rep='Both a relative and an absolute measure: the risk ratio or odds ratio with a 95% CI, and the risk difference. A relative effect without the baseline risk tells a reader almost nothing.';
      asm='Check expected cell counts, not observed ones. Below about five expected in any cell, use the exact test.';
      if(gp==='one'){ main='Exact binomial test'; alt='Normal approximation when np and n(1−p) both exceed about 10';
        rep='The proportion with a Wilson or Clopper–Pearson interval. The textbook Wald interval behaves badly near 0 and 1 and should not be used.';
        err='Using the Wald interval and reporting a lower limit below zero.'; }
      else if(gp==='two'&&dg==='ind'){ main='Chi-square test of independence'; alt='Fisher’s exact test when any expected count falls below five';
        err='Reporting only a p-value with no effect measure, so the reader cannot tell whether the difference matters.'; }
      else if(gp==='two'){ main='McNemar’s test on the discordant pairs'; alt='Exact binomial version when the discordant count is small';
        asm='Only the discordant pairs carry information. A large concordant count does not add power.';
        err='Using a chi-square test on paired data, which ignores the pairing and is anti-conservative.'; }
      else if(dg==='ind'){ main='Chi-square test across groups'; alt='Fisher–Freeman–Halton exact test in sparse tables';
        err='Following up with unadjusted pairwise chi-square tests.'; }
      else { main='Cochran’s Q test'; alt='Generalised estimating equations or a mixed logistic model if you need covariates';
        err='Treating repeated binary measurements on the same person as independent observations.'; }
      if(cov){ main='Logistic regression'+(dg==='pair'?' as a mixed or GEE model':'');
        rep='The adjusted odds ratio with its 95% CI, the number of events, and the events-per-variable count.';
        asm='Roughly ten events per predictor is the conventional floor; below that the estimates are unstable and the intervals too narrow.';
        err='Fitting more predictors than the events can support, then reporting three decimal places of a coefficient that the data cannot pin down.'; }
    }
    else if(oc==='ord'){
      rep='The median and interquartile range in each group, plus the proportional-odds ratio with its CI if you fit a model. Means of Likert scores are hard to defend.';
      asm='Ordinal data has order but not spacing. A test that assumes the gap from 1 to 2 equals the gap from 4 to 5 is making a claim about your scale.';
      if(gp==='two'&&dg==='ind'){ main='Mann–Whitney U test'; alt='Proportional-odds ordinal logistic regression, which gives an effect size as well as a p-value'; err='Averaging an ordinal scale and running a t-test.'; }
      else if(gp==='two'){ main='Wilcoxon signed-rank test'; alt='Ordinal mixed model'; err='Using a paired t-test on category numbers.'; }
      else if(dg==='ind'){ main='Kruskal–Wallis test'; alt='Ordinal logistic regression with the group as predictor'; err='Post-hoc Dunn tests without adjustment.'; }
      else { main='Friedman test'; alt='Ordinal mixed model with a random effect for participant'; err='Ignoring the repeated structure.'; }
      if(cov){ main='Proportional-odds ordinal logistic regression'+(dg==='pair'?' as a mixed model':'');
        asm='Check the proportional-odds assumption. If it fails, a partial-proportional-odds or multinomial model is the honest fallback.';
        err='Reporting one odds ratio when the effect is clearly different at different cut-points.'; }
    }
    else if(oc==='cnt'){
      main='Poisson regression with an offset for person-time';
      alt='Negative binomial regression when the variance exceeds the mean, which in practice it usually does';
      rep='The rate ratio with a 95% CI and the denominator it is a rate over — person-years, not just “per patient”.';
      asm='Test for overdispersion before believing a Poisson standard error. Overdispersed counts fitted as Poisson give intervals that are far too narrow.';
      err='Analysing counts collected over unequal follow-up without an offset, so that longer-followed participants look like higher-rate ones.';
      if(dg==='pair') alt='A mixed Poisson or negative binomial model with a random effect for participant';
      if(cov) rep='The adjusted rate ratio with its CI, the offset, and the dispersion parameter.';
    }
    else {
      rep='A Kaplan–Meier curve with numbers at risk under it, the median survival with its CI where reached, and the hazard ratio with a 95% CI.';
      asm='Proportional hazards is an assumption, not a formality. Check it with scaled Schoenfeld residuals or a log-minus-log plot.';
      if(!cov&&dg==='ind'){ main='Log-rank test with Kaplan–Meier estimates'; alt='Cox model when you want an effect size rather than only a test; restricted mean survival time when hazards are clearly not proportional';
        err='Reporting a hazard ratio from curves that visibly cross.'; }
      else if(dg==='pair'){ main='Stratified Cox model, or a shared-frailty model'; alt='Marginal Cox model with robust standard errors for clustered data';
        err='Treating clustered or matched survival data as independent.'; }
      else { main='Cox proportional-hazards regression'; alt='Accelerated failure time model, or Fine–Gray when a competing risk removes people from being at risk';
        err='Ignoring competing risks. Cause-specific hazards and cumulative incidence answer different questions, and the difference is not cosmetic.'; }
    }

    out(r,
      '<div class="tout__hd"><span><b>'+esc(main)+'</b></span><span>with the assumption that decides it</span></div>'+
      '<div class="trow trow--hd"><b>What to run</b><i></i></div>'+
      '<div class="tverd"><p><b>'+esc(main)+'</b></p></div>'+
      '<div class="trow trow--hd"><b>If the assumption does not hold</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(alt)+'</p></div>'+
      '<div class="trow trow--hd"><b>What to report</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(rep)+'</p></div>'+
      '<div class="trow trow--hd"><b>The assumption to check first</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(asm)+'</p></div>'+
      '<div class="trow trow--hd"><b>The mistake reviewers catch most often</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(err)+'</p></div>'+
      '<p class="tmeth"><b>How to read this.</b> A chooser gets you to a defensible starting point; it cannot see your data. '+
      'Clustering, repeated measures within a cluster, a stopping rule, a non-inferiority margin, multiple primary outcomes or missing data that is not missing at random will all override the answer above — and each of them has to be handled in the analysis plan, before the data are looked at.</p>'
    );
  });};

  /* ════ 07 · Reporting-guideline finder ═════════════════════════════════
     Verified against each guideline's own publication in September 2026.
     The two entries most likely to mislead are flagged in the tool itself:
     TRIPOD-2015 has been replaced, and CONSORT 2025 does not cover AI. */
  const GUIDE = {
    rct:{d:'Randomised controlled trial',g:'CONSORT 2025',n:'30 items plus a flow diagram',
      reg:'Prospective registration before the first participant is enrolled — ICMJE journals will not consider a trial registered afterwards.',
      also:'SPIRIT 2025 for the protocol; CONSORT-Outcomes, -Harms or -PRO if they apply.',
      note:'CONSORT 2025 supersedes CONSORT 2010, which should no longer be used. If the intervention is an AI system, you also need CONSORT-AI (2020) — which is still written against the 2010 checklist, because no 2025 AI extension exists yet. Say in the methods which two documents you followed.'},
    prot:{d:'Clinical trial protocol',g:'SPIRIT 2025',n:'34 items plus a schedule of enrolment and assessments',
      reg:'Register before enrolment and keep the registry record updated as the protocol changes.',
      also:'CONSORT 2025 for the eventual report.',
      note:'SPIRIT 2025 revised five items and removed or merged five more against SPIRIT 2013. A protocol paper written to the 2013 list will now read as incomplete.'},
    coh:{d:'Cohort study',g:'STROBE (2007)',n:'22 items',
      reg:'Not required, but pre-registration of an observational protocol is increasingly expected and is worth doing.',
      also:'RECORD if the data came from routinely collected health records.',
      note:'STROBE has separate checklist columns for cohort, case-control and cross-sectional designs; use the column for your design rather than the combined list.'},
    cc:{d:'Case-control study',g:'STROBE (2007)',n:'22 items',
      reg:'Not required.',also:'STROBE-ME for molecular epidemiology.',
      note:'Item 6 asks explicitly how cases and controls were selected and matched. It is the item most often answered too briefly to be checked.'},
    xs:{d:'Cross-sectional study',g:'STROBE (2007)',n:'22 items',
      reg:'Not required.',also:'CROSS or CHERRIES if the data were collected by questionnaire.',
      note:'A cross-sectional design measures prevalence and association, not incidence or causation, and the discussion has to respect that.'},
    rec:{d:'Study using routinely collected health data',g:'STROBE plus RECORD (2015)',n:'22 STROBE items plus 13 RECORD items',
      reg:'Not required; a published protocol strengthens the paper considerably.',
      also:'RECORD-PE for pharmacoepidemiology.',
      note:'RECORD is an extension, not a replacement. The RECORD items are numbered against the STROBE items they extend, so you complete both.'},
    sr:{d:'Systematic review or meta-analysis',g:'PRISMA 2020',n:'27 items',
      reg:'Register on PROSPERO before screening begins; registering after screening is a deviation that has to be declared.',
      also:'PRISMA-S for the search strategy, PRISMA-NMA for network meta-analysis, PRISMA-ScR for scoping reviews.',
      note:'The 2020 flow diagram distinguishes records identified from databases and from other methods. Editors do notice when a 2009-style diagram is submitted.'},
    srp:{d:'Systematic review protocol',g:'PRISMA-P 2015',n:'17 items',
      reg:'PROSPERO, before screening.',also:'PRISMA 2020 for the review itself.',
      note:'There is no PRISMA-P 2020. The 2015 checklist remains the current one for protocols.'},
    dx:{d:'Diagnostic accuracy study',g:'STARD 2015',n:'30 items',
      reg:'Registration is encouraged and required by some journals.',
      also:'STARD-AI (2025) if the index test is an AI model; QUADAS-3 if you are assessing risk of bias in such studies.',
      note:'The items most often missed are the flow of participants and the handling of indeterminate results.'},
    pred:{d:'Prediction model (development or validation)',g:'TRIPOD+AI (2024)',n:'27 items',
      reg:'Not required, but registration of the analysis plan is strongly advised for validation studies.',
      also:'PROBAST for risk-of-bias assessment; TRIPOD-LLM for large language models.',
      note:'TRIPOD+AI replaces TRIPOD 2015 and applies whether you used regression or machine learning. Citing the 2015 statement for a regression model is now out of date.'},
    cr:{d:'Case report',g:'CARE (2013)',n:'13 items',
      reg:'Not applicable. Written patient consent for publication is, and journals will ask for it.',
      also:'Specialty extensions exist, including CARE-radiology.',
      note:'A timeline figure is an explicit CARE item and is the thing most case reports leave out.'},
    qual:{d:'Qualitative research (interviews or focus groups)',g:'COREQ (2007)',n:'32 items',
      reg:'Not required.',also:'SRQR (2014, 21 items) for qualitative work that is not interview or focus-group based.',
      note:'COREQ asks about the researcher as well as the method — who conducted the interviews, their training, and their relationship to participants. Those items are not optional.'},
    econ:{d:'Economic evaluation',g:'CHEERS 2022',n:'28 items',
      reg:'Not required; the analysis plan should be stated.',
      also:'CHEERS-VOI for value-of-information analyses.',
      note:'CHEERS 2022 added items on engagement with patients and on the distributional effects of the intervention.'},
    anim:{d:'Animal research',g:'ARRIVE 2.0 (2020)',n:'10 essential items plus 11 recommended',
      reg:'Preclinical registration on a platform such as preclinicaltrials.eu is encouraged.',
      also:'PREPARE for the planning stage, before the work starts.',
      note:'The ten essential items are the minimum for the paper to be assessable. Randomisation and blinding are two of them and are still routinely left unreported.'},
    qi:{d:'Quality improvement study',g:'SQUIRE 2.0 (2015)',n:'18 items',
      reg:'Not required.',also:'SQUIRE-EDU for health professions education.',
      note:'SQUIRE asks for the rationale — the reasoning that linked the intervention to the expected outcome. It is the item that separates a QI report from an anecdote.'},
    trend:{d:'Non-randomised behavioural or public-health intervention',g:'TREND (2004)',n:'22 items',
      reg:'Registration is encouraged.',also:'TIDieR for describing the intervention itself in enough detail to replicate.',
      note:'Because allocation was not random, TREND asks you to be explicit about how groups were formed and how confounding was addressed.'},
    surv:{d:'Survey research',g:'CROSS (2021)',n:'40 items across 19 sections',
      reg:'Not required.',also:'CHERRIES (2004) is still specifically requested by some journals for internet surveys.',
      note:'Both ask for the response rate and how it was calculated. A survey reported without a denominator cannot be interpreted.'}
  };
  TOOLS.rgd = function(r){ wire(r, function(){
    const g=GUIDE[str(r,'design')]; if(!g) return;
    out(r,
      '<div class="tout__hd"><span><b>'+esc(g.g)+'</b></span><span>'+esc(g.n)+'</span></div>'+
      '<div class="trow"><b>Design</b><i>'+esc(g.d)+'</i></div>'+
      '<div class="trow"><b>Checklist</b><i>'+esc(g.g)+'</i></div>'+
      '<div class="trow"><b>Length</b><i>'+esc(g.n)+'</i></div>'+
      '<div class="trow trow--hd"><b>Registration</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(g.reg)+'</p></div>'+
      '<div class="trow trow--hd"><b>Also complete</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(g.also)+'</p></div>'+
      '<div class="trow trow--hd"><b>Worth knowing</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(g.note)+'</p></div>'+
      '<p class="tmeth"><b>Sources.</b> Each entry was checked against the guideline’s own publication or its EQUATOR Network record in September 2026. '+
      'Guidelines are revised without much warning — CONSORT and SPIRIT both changed in 2025 and TRIPOD in 2024 — so check the EQUATOR Network before you submit, and check the journal’s own instructions, which sometimes still name a retired version.</p>'
    );
  });};

  /* ════ 08 · Screening-effort estimator ═════════════════════════════════*/
  TOOLS.scr = function(r){ wire(r, function(){
    const rec=Math.max(0,num(r,'rec',0)), dup=Math.min(90,Math.max(0,num(r,'dup',25)))/100,
          ti=Math.min(100,Math.max(0,num(r,'ti',8)))/100, ft=Math.min(100,Math.max(0,num(r,'ft',35)))/100,
          mode=seg(r,'mode'), mr=Math.max(0.1,num(r,'mr',0.75)), mf=Math.max(1,num(r,'mf',20)),
          mx=Math.max(1,num(r,'mx',45)), mb=Math.max(0,num(r,'mb',25)),
          hw=Math.max(1,num(r,'hw',10)), rate=Math.max(0,num(r,'rate',150));
    if(!rec){ out(r,'<p class="tstate">Enter the number of records your search returned.</p>'); return; }
    const mult = mode==='dual'?2:1;
    const uniq=rec*(1-dup);
    const hTi=uniq*mr*mult/60;
    const fts=uniq*ti;
    const hFt=fts*mf*mult/60;
    const inc=fts*ft;
    const hEx=inc*mx*mult/60;
    const hRb=inc*mb*mult/60;
    const hRes=Math.max(1,Math.round((hTi+hFt)*0.08)); /* conflict resolution */
    const tot=hTi+hFt+hEx+hRb+(mode==='dual'?hRes:0);
    const wks=tot/(hw*mult);   /* two reviewers screen in parallel, not in series */
    const row=(l,v,h)=>'<div class="trow"><b>'+l+'</b><i>'+v+(h?' <span style="font-weight:400;color:var(--ink-3)">'+h+'</span>':'')+'</i></div>';

    out(r,
      '<div class="tout__hd"><span><b>'+i0(Math.round(tot))+' hours</b> of screening and extraction</span>'+
      '<span>'+(mode==='dual'?'two reviewers independently':'one reviewer')+'</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+i0(Math.round(tot))+'<small>h</small></p><p class="tbig__l">Total reviewer hours</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+f(wks,1)+'<small>wk</small></p><p class="tbig__l">At '+i0(hw)+' hours a week'+(mode==='dual'?' each':'')+'</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+i0(Math.round(inc))+'</p><p class="tbig__l">Studies likely to be included</p></div>'+
      '</div>'+
      '<div class="trow trow--hd"><b>Stage</b><i>volume · hours</i></div>'+
      row('Records retrieved',i0(rec))+
      row('After removing duplicates at '+f(dup*100,0)+'%',i0(Math.round(uniq)))+
      row('Title and abstract screening',i0(Math.round(hTi))+' h','· '+f(mr,2)+' min each'+(mode==='dual'?' × 2':''))+
      row('Full texts to retrieve at '+f(ti*100,0)+'% pass rate',i0(Math.round(fts)))+
      row('Full-text assessment',i0(Math.round(hFt))+' h','· '+i0(mf)+' min each'+(mode==='dual'?' × 2':''))+
      row('Studies included at '+f(ft*100,0)+'% pass rate',i0(Math.round(inc)))+
      row('Data extraction',i0(Math.round(hEx))+' h','· '+i0(mx)+' min each'+(mode==='dual'?' × 2':''))+
      row('Risk-of-bias assessment',i0(Math.round(hRb))+' h','· '+i0(mb)+' min each'+(mode==='dual'?' × 2':''))+
      (mode==='dual'?row('Resolving disagreements',i0(hRes)+' h','· allowed at 8% of screening time'):'')+
      '<div class="tverd"><p>This is reviewer time, not elapsed time. Retrieving full texts your library does not hold, waiting on authors for missing data, and the fact that nobody screens for eight hours a day all push the calendar out well beyond '+f(wks,1)+' weeks. '+
      'The single biggest lever is not speed — it is the search. A search that returns '+i0(rec)+' records to find '+i0(Math.round(inc))+' studies is spending '+i0(Math.round(hTi))+' hours to discard '+f((1-ti)*100,0)+'% of what it found, and an hour spent with an information specialist on the strategy usually saves more than an hour of screening.</p></div>'+
      '<p class="tmeth"><b>Method.</b> Straight arithmetic on the rates in the fields, which are our own defaults from completed reviews and are meant to be overwritten with yours. '+
      'Dual screening doubles the screening, assessment and extraction time and adds an allowance for resolving conflicts; it also halves the number of studies wrongly excluded, which is why Cochrane requires it. '+
      'Automation-assisted prioritisation can cut title and abstract time substantially, but it does not remove the requirement for two humans on the included set.</p>'
    );
  });};

  /* ════ 09 · Predatory-journal risk check ═══════════════════════════════*/
  const FLAGS = [
    ['The invitation to submit arrived unsolicited, and flattered your work or cited a paper only loosely related to the journal’s scope.',2],
    ['You cannot find the journal in DOAJ, PubMed Central, Scopus or Web of Science, although the website claims indexing.',3],
    ['The article processing charge is not stated anywhere on the site, or appears only after acceptance.',3],
    ['Publication is promised within about three weeks of submission, peer review included.',3],
    ['Editorial board members are listed without affiliations, or cannot be found at the institutions given.',3],
    ['The publisher gives no verifiable postal address, or gives one that turns out to be a mailbox or a home.',2],
    ['The title closely resembles that of an established journal in the field.',2],
    ['The site displays an impact factor from a body other than Clarivate — for example a “global” or “universal” impact factor.',3],
    ['One journal covers unrelated fields, such as medicine, engineering and management together.',2],
    ['There is no stated policy on peer review, corrections, retractions or digital archiving.',2],
    ['Correspondence comes from a free email account rather than a publisher or institutional domain.',2],
    ['The journal claims membership of COPE, DOAJ or OASPA, but is not listed on those organisations’ own sites.',3]
  ];
  TOOLS.prd = function(r){
    const box=$(r,'[data-flags]');
    if(box&&!box.children.length){
      box.innerHTML = FLAGS.map(function(fl,i){
        return '<label><input type="checkbox" data-fi="'+i+'"><span>'+esc(fl[0])+'</span></label>';
      }).join('');
    }
    wire(r, function(){
      let score=0, hits=[];
      $$(r,'[data-fi]').forEach(function(c){
        if(c.checked){ const i=+c.dataset.fi; score+=FLAGS[i][1]; hits.push(FLAGS[i][0]); }
      });
      const max=FLAGS.reduce((a,b)=>a+b[1],0);
      let band,cls,adv;
      if(score===0){ band='No flags raised'; cls='tflag--ok';
        adv='Nothing here points to a predatory operation. That is not the same as the journal being a good home for your paper — check the scope, the recent issues and whether the papers it publishes are ones you would cite.'; }
      else if(score<=4){ band='Check further'; cls='tflag--mid';
        adv='One or two of these can have innocent explanations. Verify the indexing claim yourself at the index’s own site, email one editorial board member and ask whether they serve, and read three recent papers before deciding.'; }
      else if(score<=9){ band='Serious concerns'; cls='tflag--mid';
        adv='This pattern is common in journals that will take the fee and publish without meaningful review. Submitting here risks your work being unfindable and, worse, uncitable by others — and most institutions will not count it.'; }
      else { band='Do not submit'; cls='tflag--no';
        adv='This is the established profile of a predatory journal. Papers published in them are difficult to withdraw, because the publisher has no functioning corrections process, and resubmitting elsewhere afterwards raises a duplicate-publication problem that is not of your making but is still yours to explain.'; }
      const pctv=Math.round(score/max*100);
      out(r,
        '<div class="tout__hd"><span><b>'+band+'</b></span><span>'+hits.length+' of '+FLAGS.length+' checks flagged</span></div>'+
        '<div class="tbig"><div class="tbig__i"><p class="tbig__v">'+score+'<small> / '+max+'</small></p>'+
        '<p class="tbig__l">Weighted concern score</p><span class="tbar"><i class="'+(score===0?'is-ok':score<=4?'is-mid':'is-no')+'" style="width:'+pctv+'%"></i></span></div>'+
        '<div class="tbig__i"><p class="tbig__v" style="font-size:1rem;padding-top:6px"><span class="tflag '+cls+'">'+band+'</span></p>'+
        '<p class="tbig__l">Verdict on what you ticked</p></div></div>'+
        '<div class="tverd"><p>'+adv+'</p></div>'+
        (hits.length?'<div class="trow trow--hd"><b>What you flagged</b><i></i></div>'+
          hits.map(h=>'<div class="trow"><b>'+esc(h)+'</b><i class="trow--no">flagged</i></div>').join(''):'')+
        '<p class="tmeth"><b>Method.</b> The twelve checks are drawn from the questions Think. Check. Submit. asks authors, and from the membership criteria published by COPE, DOAJ and OASPA. '+
        'The weights are ours: a claim that can be checked and found false — fake indexing, a fake impact factor, a fake society membership — counts more than a claim that is merely unprofessional. '+
        'No checklist can be conclusive, and a new journal from a legitimate publisher will honestly fail the indexing question for its first few years.</p>'
      );
    });
  };

  /* ════ 10 · Grant eligibility checker ══════════════════════════════════
     The rules below were read off the funders' own published documents in
     September 2026 and are stated with the call they belong to, because
     several of them moved this year. They do not replace the call text. */
  TOOLS.grn = function(r){ wire(r, function(){
    const sch=str(r,'scheme'), phd=num(r,'phd',NaN), pd=num(r,'pd',NaN),
          host=str(r,'host'), prior=chk(r,'prior'),
          parts=num(r,'parts',NaN), ctys=num(r,'ctys',NaN), ms=chk(r,'ms');
    const rows=[], notes=[];
    let verdict='check', vtext='', rule='';

    const yrs = isFinite(phd) ? (2027 - phd) : NaN; /* against the 1 Jan 2027 cut-off */

    function set(ok,txt){ verdict=ok; vtext=txt; }

    if(sch.indexOf('erc')===0){
      const euOk = host==='eu'||host==='ac';
      rows.push(['Host institution',euOk?'In an EU Member State or Associated Country':'Not in an EU Member State or Associated Country',euOk]);
      if(sch==='erc-stg'){
        rule='For the 2027 Starting Grant call the window was widened: the PhD must have been awarded more than 0 and up to 10 years before 1 January 2027 — a defence between 1 January 2017 and 31 December 2026. The familiar 2–7 year rule belonged to the 2026 call and no longer applies.';
        const ok = isFinite(yrs) && yrs>0 && yrs<=10;
        rows.push(['Years since PhD at the 1 Jan 2027 cut-off', isFinite(yrs)?f(yrs,0)+' years':'—', ok]);
        rows.push(['Minimum time on the ERC project','50% of working time, and 50% of total working time in the EU or an Associated Country',null]);
        set(ok&&euOk?'yes':'no', ok&&euOk?'On these two criteria you are inside the Starting Grant window for the 2027 call.'
          :!ok?'Outside the Starting Grant window as the 2027 call defines it.':'The host institution does not meet the ERC requirement.');
        notes.push('Extensions to the window are granted and are not discretionary: 18 months per child for maternity, the documented period for paternity or parental leave, documented long-term illness or national service over 90 days, clinical training up to four years, and periods of inability to work following disaster, displacement or violence.');
      } else if(sch==='erc-cog'){
        rule='For the 2027 Consolidator Grant call the window is more than 5 and up to 15 years post-PhD measured to 1 January 2027 — a defence between 1 January 2012 and 31 December 2021. The 7–12 year rule applied up to the 2026 call.';
        const ok = isFinite(yrs) && yrs>5 && yrs<=15;
        rows.push(['Years since PhD at the 1 Jan 2027 cut-off', isFinite(yrs)?f(yrs,0)+' years':'—', ok]);
        rows.push(['Minimum time on the ERC project','40% of working time, and 50% of total working time in the EU or an Associated Country',null]);
        set(ok&&euOk?'yes':'no', ok&&euOk?'On these two criteria you are inside the Consolidator window for the 2027 call.'
          :!ok?'Outside the Consolidator window as the 2027 call defines it. If your PhD is recent enough, check the Starting Grant instead.':'The host institution does not meet the ERC requirement.');
        notes.push('From 2027 a researcher may hold at most one Starting Grant and one Consolidator Grant across their whole career. The same extension rules apply to the window.');
      } else {
        rule='The Advanced Grant has no post-PhD window at all. What it asks for is a track record of significant achievement, presented as ten outputs with a statement of how each advanced the field. Senior applicants are told to focus on recent advances rather than lifetime achievement.';
        rows.push(['Career window','None — open to researchers at any stage',true]);
        rows.push(['Minimum time on the ERC project','30% of working time, and 50% of total working time in the EU or an Associated Country',null]);
        set(euOk?'yes':'no', euOk?'There is no career-stage barrier here. Eligibility turns on the host institution and on the track record, which this tool cannot assess.'
          :'The host institution does not meet the ERC requirement.');
      }
    }
    else if(sch==='he-ria'){
      rule='A Horizon Europe Research and Innovation Action or Innovation Action needs three legal entities independent of each other, each established in a different country: at least one in an EU Member State, and at least two more in Member States or Associated Countries.';
      const okP = isFinite(parts)&&parts>=3, okC = isFinite(ctys)&&ctys>=3;
      rows.push(['Independent legal entities', isFinite(parts)?i0(parts):'—', okP]);
      rows.push(['Different countries', isFinite(ctys)?i0(ctys):'—', okC]);
      rows.push(['At least one in an EU Member State', ms?'Yes':'No', ms]);
      const ok = okP&&okC&&ms;
      set(ok?'yes':'no', ok?'The consortium meets the minimum condition. Individual topics can and do impose more — read the topic conditions, not only the general annexes.'
        :'The consortium does not meet the minimum condition for a RIA or IA as it stands.');
      notes.push('An Associated Country does not satisfy the Member State requirement: at least one partner has to be established in an EU Member State. Topic conditions occasionally derogate from this, in either direction.');
    }
    else if(sch==='nih-esi'){
      rule='NIH counts you as an Early Stage Investigator for ten years from your terminal research degree or the end of postgraduate clinical training, whichever is later, provided you have not already competed successfully for a substantial independent NIH research award.';
      const y = isFinite(phd) ? (2026-phd) : NaN;
      const okY = isFinite(y)&&y<=10&&y>=0;
      rows.push(['Years since terminal degree or clinical training', isFinite(y)?f(y,0)+' years':'—', okY]);
      rows.push(['Previously held an R01 or equivalent', prior?'Yes':'No', !prior]);
      const ok=okY&&!prior;
      set(ok?'yes':'no', ok?'You would be treated as an Early Stage Investigator, which means your application is identified as such and considered alongside other ESI applications at award.'
        :prior?'An R01 or R01-equivalent as principal investigator ends ESI status.':'More than ten years from the qualifying date, so ESI status has lapsed unless you have an approved extension.');
      notes.push('NIH does not define “substantial” in prose — it publishes a list of smaller awards that preserve ESI status, including R03, R21, R15, R34, K awards and SBIR/STTR. R33 is on the disqualifying side, which catches people out.');
      notes.push('Extensions to the ten years are available for childbirth, family care, illness, disaster and military service, and have to be requested through the eRA Commons ESI extension process rather than assumed.');
      if(host==='us'){ notes.push('A foreign institution may still apply for a Parent R01 in its own right. What changed in 2025 is collaboration: a US-led project can no longer fund a foreign partner by subaward, and must use the dedicated linked-award route instead. NIH describes this as still being implemented.'); }
      else if(host!=='') { notes.push('Foreign organisations remain eligible to apply for a Parent R01 as the lead applicant. But since 25 September 2025 NIH no longer accepts new applications with traditional foreign subawards, so a US-led project with you as a funded partner now has to use the separate linked-award mechanism. Check the notice of funding opportunity, because this is the most volatile rule in this tool.'); }
    }
    else if(sch==='wt-ec'){
      rule='A Wellcome Early-Career Award needs a passed PhD viva, or about four years of equivalent research experience, and no more than three years of postdoctoral experience at the point of application — unless you can show why other factors affected your career.';
      const okP = isFinite(pd)&&pd<=3;
      rows.push(['Postdoctoral experience', isFinite(pd)?f(pd,1)+' years':'—', okP]);
      const okH = host==='uk'||host==='lmic';
      rows.push(['Host organisation', okH?'In an eligible country':'Outside the eligible countries from 29 October 2026', okH]);
      set(okP&&okH?'yes':okP?'no':'check', okP&&okH?'On career stage and location this scheme is open to you.'
        :!okP?'Beyond three years of postdoctoral experience the Career Development Award is usually the right scheme instead — though Wellcome will consider career breaks, part-time working and the effect of the pandemic if you explain them.'
        :'The host organisation falls outside the countries Wellcome will fund.');
      notes.push('Wellcome’s geography narrows on 29 October 2026: from that date lead applicants must be at eligible organisations in the UK, or in low- and middle-income countries in Africa, South Asia and South-East Asia. Applications before 28 October 2026 run under the wider current rules.');
    }
    else if(sch==='wt-cd'){
      rule='A Wellcome Career Development Award has no year count. It is for researchers who have completed one or two substantial periods of research after their initial training and have made important contributions to their field.';
      rows.push(['Career window','None stated — assessed on the narrative',true]);
      const okH = host==='uk'||host==='lmic';
      rows.push(['Host organisation', okH?'In an eligible country':'Outside the eligible countries from 29 October 2026', okH]);
      set(okH?'check':'no', okH?'Eligibility here turns on the strength of the case rather than a date, so no tool can decide it. What the panel is looking for is one or two substantial post-training research periods with contributions that are visibly yours.'
        :'The host organisation falls outside the countries Wellcome will fund.');
      notes.push('The same geographic narrowing applies from 29 October 2026.');
    }
    else {
      rule='ICMR extramural funding is defined by employment rather than by nationality or career stage. The principal investigator must be a regular — not contractual — employee of an Indian medical college, university, research institute, recognised R&D laboratory, government or semi-government organisation, or NGO.';
      const okH = host==='in';
      rows.push(['Host institution', okH?'Eligible Indian institution':'Not an Indian institution', okH]);
      rows.push(['Employment','Must be a regular employee, not on contract',null]);
      rows.push(['Co-investigator','At least one co-PI from the same institute is mandatory, also a regular employee',null]);
      rows.push(['Age or career stage','No limit published',true]);
      set(okH?'yes':'no', okH?'On the published general criteria you are eligible. ICMR’s own scientists cannot be principal investigators, though they may join as co-investigators without funds.'
        :'ICMR extramural grants are for principal investigators employed at Indian institutions.');
      notes.push('ICMR has rebranded its extramural schemes and the individual scheme documents may add criteria that the general guidelines do not carry. Read the specific scheme call before relying on this.');
    }

    const vf = verdict==='yes'?['tflag--ok','Meets the published criteria']
      : verdict==='no'?['tflag--no','Does not meet the published criteria']
      : ['tflag--mid','Cannot be decided from these inputs'];

    out(r,
      '<div class="tout__hd"><span><b>'+vf[1]+'</b></span><span>on the criteria this tool can check</span></div>'+
      '<div class="tverd"><p><span class="tflag '+vf[0]+'">'+vf[1]+'</span></p><p>'+esc(vtext)+'</p></div>'+
      '<div class="trow trow--hd"><b>Criterion</b><i>as entered</i></div>'+
      rows.map(function(x){
        const cls = x[2]===true?' trow--ok':x[2]===false?' trow--no':'';
        return '<div class="trow'+cls+'"><b>'+esc(x[0])+'</b><i>'+esc(x[1])+'</i></div>';
      }).join('')+
      '<div class="trow trow--hd"><b>The rule, as published</b><i></i></div>'+
      '<div class="tverd"><p>'+esc(rule)+'</p></div>'+
      (notes.length?'<div class="trow trow--hd"><b>What else decides it</b><i></i></div>'+
        '<div class="tverd">'+notes.map(n=>'<p>'+esc(n)+'</p>').join('')+'</div>':'')+
      '<p class="tmeth"><b>Sources and date.</b> Read off the funders’ own documents in September 2026: the ERC Work Programme 2027, the Horizon Europe general annexes for 2026–27, the NIH ESI policy pages and the Parent R01 notice, Wellcome’s scheme pages, and the ICMR extramural research guidelines. '+
      'Three of these moved during 2026 — both ERC career windows widened for the 2027 calls, NIH restructured international collaboration, and Wellcome’s geographic eligibility narrows on 29 October 2026 — so treat this as a first filter and read the call text before you commit six weeks to writing.</p>'
    );
  });};

  /* ════ 11 · CRediT contributor statement ═══════════════════════════════*/
  const ROLES = ['Conceptualization','Data curation','Formal analysis','Funding acquisition',
    'Investigation','Methodology','Project administration','Resources','Software','Supervision',
    'Validation','Visualization','Writing – original draft','Writing – review & editing'];
  TOOLS.crd = function(r){
    const state = {};
    const box=$(r,'[data-roles]');
    if(box&&!box.children.length){
      box.innerHTML = ROLES.map(function(x,i){
        return '<label><input type="checkbox" data-ri="'+i+'"><span>'+esc(x)+'</span></label>';
      }).join('');
    }
    const sel=$(r,'[data-k="who"]');
    function names(){ return str(r,'authors').split(/\n+/).map(s=>s.trim()).filter(Boolean); }
    function syncSel(){
      const ns=names(), cur=sel.value;
      sel.innerHTML = ns.length? ns.map(n=>'<option>'+esc(n)+'</option>').join('')
        : '<option value="">Add author names first</option>';
      if(ns.indexOf(cur)>=0) sel.value=cur;
    }
    function loadBoxes(){
      const who=sel.value, set=state[who]||{};
      $$(r,'[data-ri]').forEach(function(c){ c.checked=!!set[ROLES[+c.dataset.ri]]; });
    }
    function saveBoxes(){
      const who=sel.value; if(!who) return;
      const set={}; $$(r,'[data-ri]').forEach(function(c){ if(c.checked) set[ROLES[+c.dataset.ri]]=1; });
      state[who]=set;
    }
    function render(){
      const ns=names();
      const lines=ns.map(function(n){
        const set=state[n]||{}, got=ROLES.filter(x=>set[x]);
        return got.length? n+': '+got.join(', ')+'.' : null;
      }).filter(Boolean);
      const missing=ns.filter(n=>!(state[n]&&ROLES.some(x=>state[n][x])));
      const used={}; ns.forEach(n=>ROLES.forEach(x=>{ if(state[n]&&state[n][x]) used[x]=1; }));
      const unused=ROLES.filter(x=>!used[x]);
      const stmt = lines.length
        ? 'CRediT authorship contribution statement\n\n'+lines.join(' ')
        : '';
      out(r,
        '<div class="tout__hd"><span><b>'+ns.length+' author'+(ns.length===1?'':'s')+'</b> · '+
        (ns.length-missing.length)+' with roles assigned</span><span>CRediT, 14 roles</span></div>'+
        (stmt? '<p class="tpaste" data-copytext>'+esc(stmt)+'</p>'
             : '<p class="tstate">Paste your author list, pick an author, and tick the roles they took. The statement builds as you go.</p>')+
        (missing.length? '<div class="trow trow--no"><b>No role assigned yet</b><i>'+esc(missing.join(', '))+'</i></div>':'')+
        (ns.length? '<div class="trow"><b>Roles nobody has claimed</b><i>'+(unused.length?esc(unused.join(', ')):'none')+'</i></div>':'')+
        (stmt? '<button class="tcopy" type="button" data-copy>Copy statement</button>':'')+
        '<p class="tmeth"><b>How journals use this.</b> CRediT is a taxonomy of fourteen contributor roles, now required by most major publishers and machine-read into the article metadata. '+
        'A role is not authorship: someone who took only one role may still not qualify as an author under the ICMJE criteria, and someone who qualifies must be able to point to a role here. '+
        'Two things are worth checking before you paste — that nobody is listed with no role, and that Writing – review &amp; editing is not the only role the last author has.</p>'
      );
      copier(r);
    }
    sel.addEventListener('change',function(){ loadBoxes(); render(); });
    $(r,'[data-k="authors"]').addEventListener('input',function(){ syncSel(); loadBoxes(); render(); });
    box.addEventListener('change',function(){ saveBoxes(); render(); });
    syncSel(); loadBoxes(); render();
  };

  /* ════ 12 · Submission timeline planner ════════════════════════════════*/
  TOOLS.tml = function(r){ wire(r, function(){
    const target=str(r,'target'), st=seg(r,'state'),
          rounds=Math.max(0,Math.min(6,num(r,'rounds',2)));
    const base = st==='outline'?[['Outline to a complete first draft',20]]
      : st==='rough'?[['Rough draft to a complete draft',12]]
      : st==='full'?[['Complete draft to a polished manuscript',6]]
      : [['Revising against the reviewers’ reports and writing the response',9]];
    const plan = base.slice();
    if(chk(r,'stats')) plan.push(['Statistical analysis and the results section written from it',10]);
    if(chk(r,'ethics')) plan.push(['Ethics approval or trial registration documented',15]);
    if(chk(r,'figs')) plan.push(['Figures redrawn to the journal’s specification',4]);
    if(rounds>0) plan.push(['Co-author review, '+i0(rounds)+' round'+(rounds===1?'':'s'),5*rounds]);
    if(chk(r,'lang')) plan.push(['Language editing and a final read',5]);
    plan.push(['Formatting, cover letter, forms and submission',3]);

    const totalWd = plan.reduce((a,x)=>a+x[1],0);
    const today=new Date(); today.setHours(12,0,0,0);
    function addWd(d,n){ const x=new Date(d); let k=0;
      while(k<n){ x.setDate(x.getDate()+1); const w=x.getDay(); if(w!==0&&w!==6) k++; } return x; }
    function wdBetween(a,b){ if(b<a) return -wdBetween(b,a);
      const x=new Date(a); let k=0; while(x<b){ x.setDate(x.getDate()+1); const w=x.getDay(); if(w!==0&&w!==6) k++; } return k; }
    const fmtD=d=>d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});

    let cur=new Date(today);
    const steps=plan.map(function(p){ const end=addWd(cur,p[1]); const s=[p[0],p[1],fmtD(end)]; cur=end; return s; });
    const ready=cur;

    let verdictHtml;
    if(target){
      const t=new Date(target+'T12:00:00');
      if(isNaN(t)) verdictHtml='';
      else{
        const slack=wdBetween(ready,t);
        const ok=slack>=0;
        verdictHtml='<div class="tverd"><p><span class="tflag '+(ok?(slack>=10?'tflag--ok':'tflag--mid'):'tflag--no')+'">'+
          (ok?(slack>=10?'The date holds':'Tight but possible'):'The date does not hold')+'</span></p>'+
          '<p>'+(ok
            ? 'Working from today you would be ready on <b>'+fmtD(ready)+'</b>, which leaves <b>'+i0(slack)+' working day'+(slack===1?'':'s')+'</b> of slack before '+fmtD(t)+'. '+
              (slack<10?'That is not much. One co-author who takes a fortnight to reply removes it entirely, so agree the review window with them now rather than later.':'Build in the slack rather than starting later — it is what absorbs the reviewer who is on leave.')
            : 'On these stages the earliest realistic submission is <b>'+fmtD(ready)+'</b>, which is <b>'+i0(Math.abs(slack))+' working days</b> past '+fmtD(t)+'. '+
              'Something has to give: run the statistics in parallel with the drafting, cut a round of co-author review, or move the date. Compressing the writing itself is the one that usually costs you at review.')+
          '</p></div>';
      }
    } else {
      verdictHtml='<div class="tverd"><p>Starting today, the earliest realistic submission is <b>'+fmtD(ready)+'</b>. Enter your target date to see whether it holds.</p></div>';
    }

    out(r,
      '<div class="tout__hd"><span><b>'+i0(totalWd)+' working days</b> of work</span>'+
      '<span>ready '+fmtD(ready)+'</span></div>'+
      '<div class="tbig"><div class="tbig__i"><p class="tbig__v">'+i0(totalWd)+'<small> wd</small></p>'+
      '<p class="tbig__l">Working days across all stages</p></div>'+
      '<div class="tbig__i"><p class="tbig__v" style="font-size:1.15rem;padding-top:8px">'+fmtD(ready)+'</p>'+
      '<p class="tbig__l">Earliest submission from today</p></div></div>'+
      verdictHtml+
      '<div class="trow trow--hd"><b>Stage</b><i>working days · done by</i></div>'+
      steps.map(s=>'<div class="trow"><b>'+esc(s[0])+'</b><i>'+i0(s[1])+' wd · '+s[2]+'</i></div>').join('')+
      '<p class="tmeth"><b>Method.</b> The stage lengths are our own medians from completed projects, counted in working days and laid end to end from today, weekends excluded. '+
      'They are deliberately sequential: the two things that most often break a submission date are co-authors reviewing in series rather than in parallel, and statistics started after the discussion has been written. '+
      'Not included, because they are outside your control: ethics committee meeting cycles, which can add six weeks on their own, and the journal’s own time to first decision.</p>'
    );
  });};


  /* ════ CER and performance evaluation scoping ══════════════════════════
     Read off Regulation (EU) 2017/745 and 2017/746, MDCG guidance and
     MEDDEV 2.7/1 rev 4 in September 2026. Every branch names the article it
     rests on, because a compliance answer without a reference is not one. */
  TOOLS.cer = function(r){ wire(r, function(){
    const reg=seg(r,'reg'), route=str(r,'route'),
          legacy=chk(r,'legacy'), wet=chk(r,'wet'), change=chk(r,'change');
    const rows=[], must=[], notes=[];
    let big=[], verd='', title='', ciWhy='';

    if(reg==='mdr'){
      const cls=str(r,'mdcls'), impl=chk(r,'impl');
      const highRisk = cls==='III' || impl;
      const classI = (cls==='I' || cls==='Is');
      const CLSNAME = {'I':'Class I','Is':'Class Is, Im or Ir','IIa':'Class IIa','IIb':'Class IIb','III':'Class III'};
      title = CLSNAME[cls]+(impl?', implantable':'')+' · MDR 2017/745';

      /* clinical investigation — Article 61(4), (6) */
      let ci;
      if(!highRisk){
        ci='Not mandated'; ciWhy='Article 61 requires a clinical evaluation for every device, whatever its class, but a clinical investigation is only mandated for implantable and class III devices. Whether you need one here is decided by whether the data you already have closes the gaps your clinical evaluation plan identifies.';
      } else if(wet){
        ci='Exemption available'; ciWhy='Article 61(6)(b) exempts devices on the published well-established-technologies list from the clinical investigation requirement. That list was substantially expanded by a Commission delegated regulation in 2026 — it is no longer the original twelve entries — so check the current list rather than a summary of it. The exemption is from the investigation only: the clinical evaluation itself, based on sufficient clinical data, is still required in full.';
      } else if(legacy){
        ci='Exemption available'; ciWhy='Article 61(6)(a) exempts a device already lawfully placed on the market under the Directives, provided the clinical evaluation is based on sufficient clinical data and complies with any product-specific common specification. What "sufficient" means is set out in MDCG 2020-6, which ranks the evidence types from clinical investigations down through registries, equivalence and PMS data to bench testing — and a notified body will work down that hierarchy.';
      } else if(route==='own'){
        ci='Exemption available'; ciWhy='Article 61(4) allows an implantable or class III device to avoid a clinical investigation where all three conditions hold: the device is a modification of one you already market, equivalence is demonstrated under Annex XIV Section 3 and endorsed by your notified body, and the existing clinical evaluation is sufficient. The notified body must then check that your PMCF plan includes post-market studies.';
      } else if(route==='third'){
        ci='Required in practice'; ciWhy='Equivalence to another manufacturer’s device is the hardest route in the Regulation to actually use. Article 61(5) requires a contract giving you full access to that manufacturer’s technical documentation on an ongoing basis, and requires their original clinical evaluation to have been performed to MDR standards. Competitors rarely grant this. Plan for a clinical investigation unless the contract already exists in signed form.';
      } else {
        ci='Required'; ciWhy='For an implantable or class III device Article 61(4) requires a clinical investigation unless one of the exemptions applies — modification of your own marketed device with endorsed equivalence, a legacy device with sufficient clinical data, or a device on the well-established-technologies list. On what you have entered, none of them does.';
      }

      const sscp = highRisk ? 'Required' : 'Not required';
      const psur = classI ? 'No PSUR' : (cls==='IIa' ? 'Every 2 years' : 'Annually');

      big=[[ci,'Clinical investigation'],[sscp,'Summary of safety and clinical performance'],[psur,'Periodic safety update report']];

      rows.push(['Clinical evaluation', 'Required — Article 61(1), Annex XIV Part A', null]);
      rows.push(['Clinical investigation', ci, ci==='Required'?false:(ci==='Exemption available'?true:null)]);
      rows.push(['SSCP — Article 32', sscp + (highRisk?', published through Eudamed':''), highRisk?null:true]);
      rows.push(['PSUR — Article 86', cls==='I' ? 'Not required; a post-market surveillance report under Article 85 instead' : (cls==='IIa'?'Updated when necessary and at least every two years':'Updated at least annually'), null]);
      rows.push(['PMCF — Annex XIV Part B', 'Plan with a justified time schedule, and a PMCF evaluation report', null]);

      must.push(['Clinical evaluation plan','Annex XIV Part A(1)(a): the safety and performance requirements needing clinical support, the intended purpose, target groups with indications and contraindications, intended clinical benefits with measurable outcomes, the methods for assessing safety and performance, the parameters for benefit-risk acceptability, and a clinical development plan with milestones.']);
      must.push(['Literature search protocol and report','The systematic identification of available clinical data and, explicitly, of the gaps it leaves. Written as a protocol before the search, so that the search is reproducible and the appraisal criteria were set in advance rather than after the results were seen.']);
      must.push(['Clinical evaluation report','Annex XIV Part A(4): the analysis and the conclusions on safety, performance and benefit-risk. Favourable and unfavourable data both go into the technical documentation — leaving the unfavourable out is one of the more common non-conformities.']);
      if(route==='own'||route==='third') must.push(['Equivalence justification','Annex XIV Section 3: technical, biological and clinical characteristics compared, with no clinically significant difference in safety or performance, and demonstrated access to the data you are relying on.']);
      must.push(['PMCF plan','Annex XIV Part B(6): general and specific methods, a rationale for why they are appropriate, cross-references to the CER and the risk management file, the standards and guidance applied, and a detailed, justified time schedule.']);
      must.push(['PMCF evaluation report','Annex XIV Part B(7)–(8): the findings analysed, fed back into the clinical evaluation and the risk management file, with corrective measures where indicated.']);
      if(highRisk) must.push(['Summary of safety and clinical performance','Article 32: eight required elements, written to be clear to the intended user and, where relevant, the patient, validated by the notified body and published through Eudamed.']);

      /* update cadence */
      if(highRisk){
        verd = 'The clinical evaluation is updated <b>throughout the life cycle</b> of the device with data from your PMCF plan — that is what Article 61(11) actually says. The annual obligation in that article attaches to two documents specifically: the <b>PMCF evaluation report</b>, and the SSCP where indicated. In practice notified bodies expect the clinical evaluation report itself to be refreshed annually for a device in this class, but it is worth knowing that this is an expectation rather than the wording of the Regulation.';
      } else {
        verd = 'The Regulation sets <b>no numeric interval</b> for a device in this class. Article 61(11) requires the clinical evaluation to be updated throughout the life cycle, and Annex XIV Part B requires a justified time schedule for PMCF. The familiar two-to-five-year figure comes from MEDDEV 2.7/1 rev 4 section 6.2.3, which recommends at least annually where the device carries significant risks or is not yet well established, and every two to five years where it does not and is. That document is MDD-era guidance, not MDR law — useful for setting a defensible schedule, not a rule you can cite as a requirement.';
      }

      if(legacy){
        const dl = (cls==='III'||(cls==='IIb'&&impl)) ? '31 December 2027'
          : (cls==='I' ? 'No extension \u2014 a class I device needing no notified body had to comply from 26 May 2021'
          : '31 December 2028');
        rows.push(['Transition deadline — Regulation (EU) 2023/607', dl, null]);
        notes.push('The extended transition under Regulation (EU) 2023/607 runs to 31 December 2027 for class III and class IIb implantable devices, and to 31 December 2028 for other class IIb, class IIa and class I devices requiring notified body involvement. It is conditional: the device must still comply with the Directive, must not have changed significantly in design or intended purpose, must present no unacceptable risk, and the manufacturer must have had an MDR-compliant quality system and a lodged application by 26 May 2024 and a signed agreement with the notified body by 26 September 2024. If any of those is missing, the extension does not apply.');
      }
      if(change) notes.push('A significant change in design or intended purpose ends the transition extension for a legacy device and means the clinical evaluation has to be revisited against the new intended purpose, not amended around it. What counts as significant is set out in MDCG 2020-3.');
      if(wet) notes.push('Being a well-established technology in the MDCG 2020-6 sense — a simple, stable, long-marketed design with known performance — is not the same as being on the Article 61(6)(b) list. Only the listed device types get the statutory exemption, and the list was expanded by delegated regulation in 2026.');
      notes.push('The Commission published a substantial MDR and IVDR reform package in December 2025, which would among other things relax the third-party equivalence contract requirement. It is a proposal: it has not been adopted, and nothing in it changes what is required today.');
    }
    else {
      const cls=str(r,'ivcls');
      title = 'Class '+cls+' · IVDR 2017/746';
      const hi = cls==='C'||cls==='D';
      big=[['Performance evaluation','Required — Article 56'],['SSP',(hi?'Required':'Not required')+' — Article 29'],
           [hi?'Annually':'No PSUR','Periodic safety update report']];
      rows.push(['Performance evaluation','Required — Article 56, Annex XIII Part A',null]);
      rows.push(['Three pillars','Scientific validity, analytical performance and clinical performance',null]);
      rows.push(['Summary of safety and performance — Article 29', hi?'Required for class C and class D':'Not required', hi?null:true]);
      rows.push(['Post-market performance follow-up','PMPF plan and evaluation report — Annex XIII Part B',null]);
      rows.push(['PSUR — Article 81', hi?'Required for class C and class D, updated at least annually':'Not required; a post-market surveillance report under Article 80 instead', hi?null:true]);
      must.push(['Performance evaluation plan','Annex XIII Part A: the intended purpose, the analyte or marker, the scientific validity to be demonstrated, and the analytical and clinical performance characteristics with their acceptance criteria set in advance.']);
      must.push(['Scientific validity report','The association of the analyte with the clinical condition, established from literature, expert opinion, proof-of-concept studies or clinical performance studies.']);
      must.push(['Analytical performance report','Accuracy, precision, specificity, sensitivity, limit of detection and quantitation, measuring range, linearity, cut-off, interference and cross-reactivity, and specimen stability.']);
      must.push(['Clinical performance report','Diagnostic sensitivity and specificity, predictive values, likelihood ratios, and expected values in normal and affected populations.']);
      must.push(['Performance evaluation report','Annex XIII Part A: the three pillars brought together with the conclusion on benefit-risk.']);
      must.push(['PMPF plan and evaluation report','Annex XIII Part B, feeding back into the performance evaluation.']);
      verd = 'Article 56(6) requires the performance evaluation and its documentation to be updated throughout the life cycle, with an at-least-annual cycle for class C and class D devices. The structure mirrors the MDR: continuous updating of the evaluation itself, with the annual obligation attaching to the post-market documents.';
      const DL={'D':'31 December 2027','C':'31 December 2028','B':'31 December 2029','A-sterile':'31 December 2029','A':'No extension — non-sterile class A devices had to comply from 26 May 2022'};
      rows.push(['Transition deadline — Regulation (EU) 2024/1860', DL[cls]||'—', null]);
      notes.push('The IVDR transition deadlines under Regulation (EU) 2024/1860 are staggered by class: 31 December 2027 for IVDD-certified class D, 31 December 2028 for class C, and 31 December 2029 for class B and sterile class A. Each is conditional on an application lodged with a notified body and a signed written agreement by the dates set for that class — for class C, 26 May 2026 and 26 September 2026. Genuinely new IVDs and non-sterile class A devices get no extension at all.');
      if(cls==='C') notes.push('For class C devices the written agreement with the notified body had to be signed by 26 September 2026. If that date passed without a signed agreement, the extension to 31 December 2028 is not available and the device needs full IVDR conformity now — which is a conversation to have this week rather than next quarter.');
    }

    out(r,
      '<div class="tout__hd"><span><b>'+esc(title)+'</b></span><span>scoped on the articles, not on a template</span></div>'+
      '<div class="tbig tbig--3">'+big.map(function(x){
        return '<div class="tbig__i"><p class="tbig__v" style="font-size:1.02rem;line-height:1.35;padding-top:3px">'+esc(x[0])+'</p><p class="tbig__l">'+esc(x[1])+'</p></div>';
      }).join('')+'</div>'+
      '<div class="trow trow--hd"><b>Obligation</b><i>what applies</i></div>'+
      rows.map(function(x){
        const cls = x[2]===true?' trow--ok':x[2]===false?' trow--no':'';
        return '<div class="trow'+cls+'"><b>'+esc(x[0])+'</b><i>'+esc(x[1])+'</i></div>';
      }).join('')+
      (reg==='mdr'?'<div class="trow trow--hd"><b>Why the clinical investigation answer is what it is</b><i></i></div>'+
        '<div class="tverd"><p>'+esc(ciWhy)+'</p></div>':'')+
      '<div class="trow trow--hd"><b>How often it has to be updated</b><i></i></div>'+
      '<div class="tverd"><p>'+verd+'</p></div>'+
      '<div class="trow trow--hd"><b>The documents this scope produces</b><i>'+must.length+'</i></div>'+
      must.map(function(x){ return '<div class="tverd"><p><b>'+esc(x[0])+'</b> — '+esc(x[1])+'</p></div>'; }).join('')+
      (notes.length?'<div class="trow trow--hd"><b>What else decides it</b><i></i></div>'+
        '<div class="tverd">'+notes.map(function(n){ return '<p>'+esc(n)+'</p>'; }).join('')+'</div>':'')+
      '<p class="tmeth"><b>Sources and date.</b> Regulation (EU) 2017/745 Articles 32, 61, 85 and 86 and Annex XIV; Regulation (EU) 2017/746 Articles 29 and 56 and Annex XIII; Regulation (EU) 2023/607 and 2024/1860 for the transition periods; MDCG 2020-6 on sufficient clinical evidence for legacy devices and MDCG 2020-3 on significant change; MEDDEV 2.7/1 rev 4 where it is named as guidance rather than law. Read in September 2026. '+
      'This scopes the work — it is not regulatory advice, it cannot see your technical documentation, and your notified body’s reading of a borderline case is the one that counts.</p>'
    );
  });};

  /* ── wiring ────────────────────────────────────────────────────────────*/

  /* ════ Physician writing · 01 · Case report publishability screener ═════
     Answers the question authors actually have before they start writing:
     is this case reportable, and what is missing. Deliberately conservative
     about consent, because consent is the thing that stops a case report at
     the editor's desk and the thing that cannot be fixed afterwards. */
  TOOLS.cra = function(r){ wire(r, function(){
    const why   = seg(r,'why'),
          pub   = Math.max(0, num(r,'pub',0)),
          fu    = str(r,'fu'),
          img   = chk(r,'img'),
          tl    = chk(r,'tl'),
          surg  = chk(r,'surg'),
          adr   = chk(r,'adr'),
          cons  = seg(r,'cons'),
          ident = seg(r,'ident'),
          apc   = Math.max(0, num(r,'apc',1000));

    /* ── novelty: what is already published matters more than the label ──*/
    let nov = pub===0 ? 40 : pub<=2 ? 32 : pub<=10 ? 22 : pub<=50 ? 12 : 4;
    const WHY = { novel:12, adverse:12, rare:10, diag:8, outcome:8, teach:2 };
    nov += (WHY[why]||0);
    nov = Math.min(52, nov);

    /* ── documentation: the part authors underestimate ──────────────────*/
    const FU = { none:0, lt1:4, m16:10, m612:14, gt12:18 };
    let doc = (FU[fu]||0) + (img?8:0) + (tl?8:0);

    const score = Math.round(nov + doc);

    /* ── consent gate ───────────────────────────────────────────────────*/
    let gate='', gateK='', gateT='';
    if(cons==='written'){
      gateK='ok'; gate='Consent in order';
      gateT='Written informed consent for publication, obtained from the patient, is what the ICMJE Recommendations require before any identifying information appears in a description, photograph or pedigree. Keep the signed form — journals ask for it, and some ask to see it.';
    } else if(cons==='verbal'){
      gateK='mid'; gate='Get it in writing before you draft';
      gateT='Verbal consent is not what journals ask for. The ICMJE wording is written informed consent for publication, and an editor who asks for the form at revision stage and cannot be given one will reject the paper at that point rather than earlier. Obtain it now, while the patient is still contactable.';
    } else if(cons==='none'){
      gateK='no'; gate='This stops here until consent exists';
      gateT='Without written consent for publication, a case report containing identifiable clinical detail cannot be submitted to a journal that follows the ICMJE Recommendations, which is most of them. This is not a formality that can be worked around by removing a name: the ICMJE says explicitly that masking the eye region in a photograph is inadequate protection of anonymity, and that consent should be obtained if there is any doubt that anonymity can be maintained.';
    } else {
      gateK='mid'; gate='Untraceable or deceased — ask the journal first';
      gateT='Where the patient has died or cannot be traced, practice varies by journal and by jurisdiction: some accept consent from next of kin, some require it, and some will consider a case with institutional ethics committee approval and all identifying detail removed. Write to the editor before drafting rather than after. Do not assume a death removes the duty.';
    }
    if(ident==='no' && cons!=='written' && gateK!=='ok'){
      gateT += ' If the case genuinely carries no identifying detail — no dates, no rare combination of features, no images, no unit — the requirement softens, but "identifiable" is a lower bar than authors think: a rare diagnosis plus a city plus a year can identify one person to their own family.';
    }

    /* ── verdict ────────────────────────────────────────────────────────*/
    let verd, vk, vt;
    if(cons==='none'){
      verd='Not submittable yet'; vk='no';
      vt='The clinical material may well be publishable. The consent is what blocks it, and it is the one thing that cannot be repaired after submission.';
    } else if(score>=62){
      verd='Publishable as a full case report'; vk='ok';
      vt='Enough novelty and enough documentation to carry a full CARE-structured case report through peer review at a dedicated case report journal, and worth trying a specialty title first.';
    } else if(score>=44){
      verd='Publishable once the gaps below are closed'; vk='mid';
      vt='The case stands up. What is thin is the documentation rather than the clinical interest, and every gap listed below is one you can still close from the notes.';
    } else if(score>=28){
      verd='Better placed as an image, a letter or a short report'; vk='mid';
      vt='This is a real observation that a full case report would stretch. Images in Clinical Medicine formats, clinical images sections and letters to the editor exist precisely for it, they are read, and they are citable.';
    } else {
      verd='Not a case report in its present form'; vk='no';
      vt='Either the finding is already well described or the record will not support the narrative a reviewer needs. Neither is fatal: a case series of several similar patients, or a teaching case for a departmental meeting, may be the better home.';
    }

    /* ── CARE items at risk ─────────────────────────────────────────────*/
    const risks=[];
    if(!tl) risks.push(['The timeline','CARE asks for a dated timeline of the episode as a figure or table. It is the item most often missing and the one reviewers check first, because without it a reader cannot tell what followed what.']);
    if(fu==='none'||fu==='lt1') risks.push(['Follow-up and outcomes','A case report without an outcome is a case presentation. Reviewers read short follow-up as an unfinished story, and for a novel treatment it is the single commonest reason for rejection.']);
    if(!img) risks.push(['Diagnostic evidence','Imaging, histology or laboratory figures are what let a reader verify the diagnosis rather than accept it. Where none exist, say so explicitly in the methods rather than leaving the absence to be noticed.']);
    if(pub>10) risks.push(['The literature position','With this many similar cases published, the introduction has to say what yours adds in one sentence. If that sentence is hard to write, a reviewer will find it hard to accept.']);
    if(why==='teach') risks.push(['The reason for reporting','Teaching value alone is a weak case for a journal that publishes original observations, though it is a strong case for a specialty education section or a clinical problem-solving format.']);
    if(why==='adverse'&&!adr) risks.push(['Pharmacovigilance','If a drug is implicated, the suspected reaction should be reported to your national pharmacovigilance scheme whether or not you publish. Journals increasingly ask whether it was.']);
    if(surg) risks.push(['Surgical reporting','A case report whose substance is an operation is assessed against SCARE 2023 rather than CARE alone, and reviewers look for the technique described step by step, the equipment named and the complications reported.']);
    if(!risks.length) risks.push(['Nothing structural','On what you have entered, the CARE items are covered. What remains is the writing: one claim, a timeline a reader can follow, and a discussion that says what this case changes.']);

    /* ── where it could go ──────────────────────────────────────────────*/
    const J=[
      ['Cureus Journals','No article processing charge. An editing fee of $0–300 applies to manuscripts with substantial errors, in force until 31 December 2026.',0,'all'],
      ['Radiology Case Reports','$660. Imaging-led cases across radiology and its subspecialties.',660,'img'],
      ['JAAD Case Reports','$850 standard, $390 for Grand Rounds and Dermoscopy Case of the Month. Dermatology only.',850,'spec'],
      ['American Journal of Case Reports','$1,100, charged only on acceptance. Submission and peer review are free. All medical fields.',1100,'all'],
      ['Journal of Medical Case Reports','£1,160 / $1,775 / €1,525 for case reports. Waivers and discounts available. The first journal dedicated to case reports.',1775,'all'],
      ['Clinical Case Reports','Up to $1,910 / £1,160 / €1,340, with a waiver policy. Wiley, open access.',1910,'all'],
      ['BMJ Case Reports','No per-article charge: authors publish under an individual or institutional fellowship, and a fellow may submit an unlimited number of cases in the year. Check whether your hospital or library already holds one before paying anything.',0,'all']
    ];
    const fits = J.filter(function(j){ return j[2]<=apc; });
    const jrow = (fits.length?fits:[J[0],J[6]]).map(function(j){
      return '<div class="trow trow--txt"><b>'+esc(j[0])+'</b><span>'+j[1]+'</span></div>';
    }).join('');

    out(r,
      '<div class="tout__hd"><b>'+esc(verd)+'</b><span>screening score '+score+' / 100</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+nov+'<small>/52</small></p><p class="tbig__l">What it adds to the literature</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+doc+'<small>/34</small></p><p class="tbig__l">What the record can support</p></div>'+
        '<div class="tbig__i"><p class="tbig__v"><span class="tflag tflag--'+gateK+'">'+(gateK==='ok'?'Clear':gateK==='mid'?'Action':'Blocked')+'</span></p><p class="tbig__l">Consent position</p></div>'+
      '</div>'+
      '<div class="tverd"><p><b>'+esc(verd)+'.</b> '+vt+'</p></div>'+
      '<div class="tverd"><p><b>'+esc(gate)+'.</b> '+gateT+'</p></div>'+
      (adr?'<div class="tverd"><p><b>Report the reaction, separately from publishing it.</b> A suspected adverse drug reaction goes to your national pharmacovigilance scheme &mdash; the MHRA Yellow Card scheme in the UK, FDA MedWatch in the United States, your national competent authority feeding EudraVigilance in the EU, and the Pharmacovigilance Programme of India through CDSCO. That duty exists whether or not a journal ever accepts the case, it is usually faster than publication, and it is what actually changes a label.</p></div>':'')+
      '<p class="tsub">What a reviewer will look for that you have not got yet</p>'+
      risks.map(function(x){ return '<div class="trow trow--txt trow--flag trow--gap"><b>'+esc(x[0])+'</b><span>'+x[1]+'</span></div>'; }).join('')+
      '<p class="tsub">Journals that publish case reports, and what they charge</p>'+
      '<div class="trow trow--hd trow--txt"><b>Journal</b><span>Charge and scope</span></div>'+ jrow +
      '<p class="tmeth"><b>How this was worked out.</b> The score weights what the case adds to the literature (up to 52 points, from the number of similar cases already published and the reason for reporting) against what your record can support (up to 34, from follow-up duration, diagnostic images and a reconstructable timeline). Consent is treated as a gate rather than a score, because it is. The CARE checklist (2013, with the 2017 explanation and elaboration paper) is the reporting guideline for case reports; SCARE 2023 in the <i>International Journal of Surgery</i> applies where the substance is an operation. Consent wording follows the ICMJE Recommendations, updated January 2026. Charges were read from each journal&rsquo;s own page on 21 September 2026 and change without notice &mdash; check before you submit. <b>This is a screening aid, not an editorial decision.</b> An editor may see novelty where this does not, and vice versa.</p>'
    );
  }); };

  /* ════ Physician writing · 02 · Manuscript type router ═════════════════
     The section's real problem is that a clinician with a dataset does not
     know which article type it makes, and picking wrong costs months. This
     routes from what you have to what it is, which guideline governs it,
     roughly how long it runs, and which of our pages handles it. */
  TOOLS.mty = function(r){ wire(r, function(){
    const have = seg(r,'have'),
          n    = Math.max(1, num(r,'n',1)),
          arm  = seg(r,'arm'),
          rand = chk(r,'rand'),
          pros = chk(r,'pros'),
          stat = chk(r,'stat'),
          words= Math.max(300, num(r,'words',3000));

    /* type is decided by what the data is, then narrowed by design */
    let t, gl, glWhy, len, tat, price, page, pageN, note;

    if(have==='one'){
      if(n>=3 && n<=9){
        t='Case series';
        gl='CARE for each case, PROCESS 2023 where the substance is surgical';
        glWhy='A series is judged on how the patients were selected. A consecutive series and a series assembled from memory are different kinds of evidence, and a reviewer will ask which this is.';
        len='2,000 to 3,500 words'; tat='10 to 15 business days'; price='From $480';
        page='/services/physician-writing-services/case-report/'; pageN='Case report writing';
      } else if(n>=10){
        t='Retrospective cohort or observational study';
        gl='STROBE (2007), with RECORD where the data was routinely collected';
        glWhy='Past ten or so patients you have a denominator, and a reviewer will stop reading it as a series and start asking about selection, confounding and missing data. That is a study, and it is worth writing as one.';
        len='3,000 to 4,000 words'; tat='12 to 18 business days'; price='From $500';
        page='/services/physician-writing-services/original-research-article/'; pageN='Original research article';
      } else {
        t='Case report';
        gl='CARE (2013, with the 2017 explanation and elaboration paper); SCARE 2023 as well where the substance is an operation';
        glWhy='Thirteen items, of which the dated timeline is the one most often missing and the patient perspective the one most often skipped.';
        len='1,000 to 3,000 words'; tat='5 to 12 business days'; price='From $210';
        page='/services/physician-writing-services/case-report/'; pageN='Case report writing';
      }
    } else if(have==='trial'){
      t = rand ? 'Randomised controlled trial report' : 'Non-randomised intervention study';
      gl = rand ? 'CONSORT 2025, with the extension matching your design'
                : 'TREND (2004) for behavioural and public health evaluations; STROBE where it is observational in structure';
      glWhy = rand
        ? 'CONSORT was revised in 2025 and now runs to 30 items. Allocation concealment and who was blinded are two lines a methods reviewer looks for first, and they are the two authors delete first under a word limit.'
        : 'Without randomisation the burden shifts to showing how the groups were assembled and why they are comparable. A reviewer reads an unaddressed selection mechanism as the finding.';
      len='3,500 to 4,500 words'; tat='15 to 20 business days'; price='From $750';
      page='/services/physician-writing-services/original-research-article/'; pageN='Original research article';
      note = rand ? 'Prospective registration is a condition of consideration at ICMJE member journals, and retrospective registration is visible in the registry and permanent. If the trial is not yet registered, register it before you enrol rather than before you submit.' : '';
    } else if(have==='obs'){
      t = pros ? 'Prospective cohort study' : 'Retrospective cohort, case-control or cross-sectional study';
      gl='STROBE (2007), with RECORD for routinely collected data and STROBE-MR for Mendelian randomisation';
      glWhy='STROBE puts most of its weight on the methods: how participants were identified, how variables were defined, how confounders were chosen, and how missing data was handled. An adjusted estimate with an unexplained adjustment set is the commonest reason such a paper comes back.';
      len='3,000 to 4,000 words'; tat='12 to 18 business days'; price='From $500';
      page='/services/physician-writing-services/original-research-article/'; pageN='Original research article';
    } else if(have==='diag'){
      t='Diagnostic or prognostic accuracy study';
      gl='STARD 2015; TRIPOD+AI (2024) where the index test is a prediction model';
      glWhy='The item reviewers check first is the interval between the index test and the reference standard, and whether the people reading each were blinded to the other. Both are single sentences and both are routinely absent.';
      len='3,000 to 3,800 words'; tat='15 to 20 business days'; price='From $560';
      page='/services/physician-writing-services/original-research-article/'; pageN='Original research article';
    } else if(have==='lit'){
      t = (n>=10) ? 'Systematic review, with meta-analysis if the studies are combinable' : 'Narrative or scoping review';
      gl='PRISMA 2020, with PRISMA-S for the search and PRISMA-ScR for a scoping review';
      glWhy='PRISMA 2020 expects the protocol to exist before the search does. Registering on PROSPERO after screening has started is visible and is the point at which a reviewer stops taking the review at face value.';
      len='4,000 to 6,000 words'; tat='15 to 25 business days'; price='From $340';
      page='/services/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/'; pageN='Clinical literature review';
    } else if(have==='audit'){
      t='Clinical audit or quality improvement report';
      gl='SQUIRE 2.0 for quality improvement; local audit standards where it stays inside the institution';
      glWhy='An audit measures practice against a standard that already exists, which is a different claim from research and is judged differently. The commonest mistake is writing an audit as though it discovered something.';
      len='2,000 to 3,000 words'; tat='10 to 15 business days'; price='From $380';
      page='/services/physician-writing-services/physician-manuscripts/'; pageN='Physician manuscripts';
    } else if(have==='opinion'){
      t='Commentary, perspective or letter to the editor';
      gl='No reporting guideline. The journal’s own word limit and its rules on references and authorship govern it';
      glWhy='Letters are usually capped at 400 to 800 words with a handful of references and often a single author. They are also time-limited: most journals will not accept a letter about an article published more than a few weeks or months earlier.';
      len='400 to 1,500 words'; tat='4 to 7 business days'; price='From $180';
      page='/services/physician-writing-services/customized-writing/'; pageN='Customized writing';
    } else {
      t='Conference abstract';
      gl='The conference’s own template, and CONSORT or PRISMA for abstracts where the underlying work is a trial or a review';
      glWhy='An abstract submitted to a meeting is a publication for the purposes of later journal submission, so the overlap has to be disclosed in the cover letter when the full paper goes in.';
      len='250 to 500 words'; tat='3 to 5 business days'; price='From $150';
      page='/services/physician-writing-services/customized-writing/'; pageN='Customized writing';
    }

    /* how the word limit lands against the type */
    const lo = parseInt(len.replace(/,/g,''),10);
    const hi = parseInt(len.split('to')[1].replace(/[^0-9]/g,''),10);
    let fit, fitK;
    if(words < lo*0.75){ fit='Tight. At '+i0(words)+' words this type usually loses its methods detail first, which is the part that cannot be lost. Move background to the supplement instead.'; fitK='no'; }
    else if(words > hi*1.3){ fit='Generous. At '+i0(words)+' words there is room, and the risk shifts to a discussion that reviews the field instead of arguing one claim.'; fitK='mid'; }
    else { fit='Workable. '+i0(words)+' words sits within the normal range for this type.'; fitK='ok'; }

    const rows = [
      ['What it is', t],
      ['Reporting guideline', gl],
      ['Typical length', len+' in the body, excluding abstract and references'],
      ['Typical turnaround', tat],
      ['Indicative price', price+', with the scope cap set at quote']
    ];
    if(arm==='multi') rows.push(['More than one group compared','A comparison changes what a reviewer demands: how the groups were formed, whether they were comparable at baseline, and what was done about the differences that remained.']);
    if(stat) rows.push(['Statistical support','Included in the quote rather than added later. The model is matched to the design before drafting, because a paper written around the wrong analysis has to be rewritten rather than corrected.']);

    out(r,
      '<div class="tout__hd"><b>'+esc(t)+'</b><span>'+esc(tat)+'</span></div>'+
      rows.map(function(x){ return '<div class="trow trow--txt"><b>'+esc(x[0])+'</b><span>'+x[1]+'</span></div>'; }).join('')+
      '<div class="tverd"><p><b>Why that guideline.</b> '+glWhy+'</p>'+
        '<p><b>Your word limit.</b> <span class="tflag tflag--'+fitK+'">'+(fitK==='ok'?'Workable':fitK==='mid'?'Roomy':'Tight')+'</span> '+fit+'</p>'+
        (note?'<p><b>One thing to do now.</b> '+note+'</p>':'')+'</div>'+
      '<p class="tsub">Where this is handled</p>'+
      '<div class="trow trow--txt"><b>'+esc(pageN)+'</b><span><a class="tlink" href="'+page+'" data-nav>Open that page</a> for the process, the packages and the sample work for this article type.</span></div>'+
      '<p class="tmeth"><b>How this was worked out.</b> The article type follows from what the data is rather than from what it is called: a series of ten or more patients with a denominator is an observational study whatever the author has been calling it, and writing it as a series wastes the denominator. Guidelines and versions are as published by the issuing bodies and listed by the EQUATOR Network: CARE 2013 with the 2017 explanation and elaboration paper, SCARE 2023 and PROCESS 2023 in the <i>International Journal of Surgery</i>, CONSORT 2025 and SPIRIT 2025 at consort-spirit.org, STROBE 2007, STARD 2015, TRIPOD+AI 2024, PRISMA 2020, ARRIVE 2.0, TREND 2004. Lengths and turnarounds are our own working figures, not standards. <b>Your target journal overrides everything here</b> &mdash; word limits, structure, abstract headings and reference styles are set by the journal and vary widely.</p>'
    );
  }); };


  /* ════ Physician writing · 03 · Review type chooser ════════════════════
     "Systematic review" is used on this market as a synonym for "literature
     review", and the two are different products with different costs. This
     picks the review the question and the time actually support, and names
     the appraisal instrument that goes with the studies being appraised. */
  TOOLS.rvt = function(r){ wire(r, function(){
    const use   = seg(r,'use'),
          weeks = Math.max(1, num(r,'weeks',12)),
          revs  = Math.max(1, num(r,'revs',2)),
          scope = seg(r,'scope'),
          pool  = seg(r,'pool'),
          comb  = chk(r,'comb'),
          audit = chk(r,'audit');

    /* ── which review ───────────────────────────────────────────────────*/
    let t, why, gl, reg, dbs, wk;
    if(use==='reg'){
      t='Targeted literature review, written to a regulatory template';
      why='A regulatory literature review is judged against the submission it supports rather than against PRISMA. For an EU MDR clinical evaluation the search, appraisal and synthesis are appendices to the clinical evaluation report and have to satisfy MEDDEV-style expectations of a documented, repeatable search; for an HTA dossier the payer’s own submission template governs. A systematic review written to PRISMA is not wrong here, but it answers a different question and takes twice as long.';
      gl='The submission template governs. PRISMA 2020 is used for the search and flow reporting because it is the clearest available structure, not because the regulator requires it';
      reg='Not registered. Registration is for research questions; a regulatory literature review is a controlled document inside a technical file or dossier, with its own version history';
      dbs=4; wk=6;
    } else if(scope==='broad' || use==='map'){
      t='Scoping review';
      why='A scoping review is the right answer when the question is "what is out there", not "what is the effect". It maps the literature, identifies the study types and the gaps, and explicitly does not pool results or grade certainty. Authors reach for a systematic review here and then cannot answer the reviewer asking what the pooled estimate is, because the question never supported one.';
      gl='PRISMA-ScR, the scoping review extension of PRISMA';
      reg='Optional. Open Science Framework is the usual home; PROSPERO does not register scoping reviews';
      dbs=5; wk=10;
    } else if(pool==='revs'){
      t='Umbrella review, or overview of reviews';
      why='Where the evidence you are synthesising is itself made of systematic reviews, you are not doing a systematic review — you are appraising other people’s. That changes the appraisal instrument entirely and brings a problem unique to this design: the same primary studies appear inside several of the reviews you are including, and double-counting them is the commonest fatal error.';
      gl='PRISMA 2020 for the reporting, with the overlap between included reviews quantified and reported';
      reg='PROSPERO accepts umbrella reviews';
      dbs=4; wk=12;
    } else if(weeks<=6 || revs<2){
      t='Rapid review';
      why='A rapid review is a systematic review with its shortcuts declared. Single-reviewer screening, fewer databases, a date limit, no grey literature — each of those is defensible, and each stops being defensible the moment it is not stated. What makes a rapid review credible is the methods section saying exactly which systematic-review steps were abbreviated and why. What makes one indefensible is calling it systematic.';
      gl='PRISMA 2020, with every abbreviation to the full method declared in the methods and repeated in the limitations';
      reg='Registration still advisable, and PROSPERO accepts rapid reviews';
      dbs=3; wk=5;
    } else if(use==='paper' || use==='clin' || use==='grant'){
      t = comb ? 'Systematic review with meta-analysis' : 'Systematic review';
      why = comb
        ? 'A meta-analysis is a decision about whether the studies are similar enough to combine, not a step that automatically follows a systematic review. Heterogeneity is quantified, explained and used — an I² above about 75% with no explanation is a reason not to pool rather than a number to report and move past.'
        : 'A systematic review answers a defined question with a search anybody could repeat. The defining feature is not the number of databases; it is that the protocol existed before the search did, and that the decisions were made in advance rather than as the results came in.';
      gl='PRISMA 2020, with PRISMA-S for reporting the search strategy' + (comb?'; MOOSE where the included studies are observational':'');
      reg='PROSPERO, before screening starts. Registering after screening has begun is visible in the record and is the point at which a reviewer stops taking the review at face value';
      dbs=5; wk= comb?16:13;
    } else {
      t='Narrative review';
      why='A narrative review is a legitimate form with an honest name. It is expert synthesis, selective by design, and valuable for orienting a reader in a field. It becomes a problem only when it is dressed in the furniture of a systematic review — a flow diagram, a database list, the word "systematic" — without the method underneath. That is the commonest reviewer complaint in this category and it is entirely avoidable.';
      gl='No checklist governs narrative reviews. SANRA is the quality instrument most often used to assess them';
      reg='Not registered';
      dbs=3; wk=5;
    }

    /* ── appraisal instrument follows the studies, not the review ───────*/
    const APP = {
      rct:  ['RoB 2 (Cochrane risk-of-bias tool for randomised trials)','Domain-based, judged per outcome rather than per study — which is why a single risk-of-bias rating for a whole trial is no longer acceptable.'],
      nrsi: ['ROBINS-I','For non-randomised studies of interventions. Note that ROBINS-I V2 has been circulated as a draft and is not yet the settled version, so state which you used.'],
      diag: ['QUADAS-3','QUADAS-3 superseded QUADAS-2 in February 2026. A review submitted now that appraises diagnostic accuracy studies with QUADAS-2 will be asked about it.'],
      obs:  ['ROBINS-E for exposures, or the Newcastle-Ottawa Scale where the field expects it','Newcastle-Ottawa is widely used and widely criticised; if you use it, report the domain judgements rather than only the star count.'],
      revs: ['AMSTAR 2','The instrument for appraising systematic reviews themselves, which is what an umbrella review is doing. Its critical domains drive the overall confidence rating.'],
      qual: ['CASP qualitative checklist, with GRADE-CERQual for confidence','Qualitative evidence is synthesised, not pooled, and CERQual is what replaces GRADE for it.']
    };
    const app = APP[pool] || APP.rct;

    /* ── workload ───────────────────────────────────────────────────────*/
    const need = Math.round(wk * (pool==='revs'?1.1:1) * (dbs/5));
    const have = weeks;
    let fitK, fitT;
    if(have >= need*1.15){ fitK='ok'; fitT='Comfortable. '+have+' weeks against roughly '+need+' of work at this scale, which leaves room for the thing that always takes longer than planned — full-text retrieval.'; }
    else if(have >= need*0.8){ fitK='mid'; fitT='Tight but workable. '+have+' weeks against roughly '+need+'. It will hold if the search is run once and well rather than three times badly.'; }
    else { fitK='no'; fitT='Not deliverable as scoped. '+have+' weeks against roughly '+need+' of work. Something has to give, and the honest options are a narrower question, fewer databases with that stated, or a rapid review with its abbreviations declared — not a systematic review done quickly and called one.'; }

    const rows=[
      ['The review this supports', t],
      ['Reporting guideline', gl],
      ['Registration', reg],
      ['Databases, typically', dbs+' — and the number is not what makes a review systematic'],
      ['Appraisal instrument', '<b style="color:var(--ink)">'+app[0]+'</b>. '+app[1]],
      ['Certainty of evidence', pool==='qual' ? 'GRADE-CERQual' : 'GRADE, reported per outcome rather than per review']
    ];
    if(audit) rows.push(['Because it has to be auditable','Every search saved with its date, database, interface, full strategy and result count; every screening decision attributable to a named reviewer; every exclusion at full text given its reason. This is the difference between a review somebody can check and a review somebody has to trust.']);

    out(r,
      '<div class="tout__hd"><b>'+esc(t)+'</b><span>about '+need+' weeks of work</span></div>'+
      rows.map(function(x){ return '<div class="trow trow--txt"><b>'+esc(x[0])+'</b><span>'+x[1]+'</span></div>'; }).join('')+
      '<div class="tverd"><p><b>Why this one.</b> '+why+'</p>'+
        '<p><b>Your timeline.</b> <span class="tflag tflag--'+fitK+'">'+(fitK==='ok'?'Workable':fitK==='mid'?'Tight':'Not as scoped')+'</span> '+fitT+'</p></div>'+
      '<p class="tsub">One instrument we will not use, and why</p>'+
      '<div class="trow trow--txt trow--flag trow--gap"><b>The Jadad scale</b><span>Still cited by a great many medical writing sites. Cochrane advises against summary quality scores of this kind, because collapsing several unrelated domains into one number hides which domain was the problem &mdash; and a trial can score well while being at high risk of bias in the domain that matters for your outcome. Domain-based assessment replaced it, and RoB 2 judges risk per outcome rather than per study.</span></div>'+
      '<p class="tmeth"><b>How this was worked out.</b> The review type follows from the question and the time, not from the label the author arrived with. Guidelines are as published: PRISMA 2020 and PRISMA-S at prisma-statement.org, PRISMA-ScR for scoping reviews, MOOSE for observational meta-analyses. Appraisal instruments follow the studies being appraised rather than the review doing the appraising: RoB 2 for randomised trials, ROBINS-I for non-randomised studies of interventions, QUADAS-3 for diagnostic accuracy since February 2026, AMSTAR 2 for systematic reviews, CASP with GRADE-CERQual for qualitative evidence. Week estimates are our own working figures at the scale each type usually runs to, and they assume the search is run once by somebody who builds searches for a living. <b>A regulatory literature review is a different product from a systematic review</b> and is judged against the submission template rather than against PRISMA.</p>'
    );
  }); };


  /* ════ Physician writing · 04 · Protocol and ethics document set ═══════
     The proposal is one document; the submission is a folder. This builds
     the folder from the study and the jurisdiction, because the item that
     delays an ethics submission is almost never the protocol itself. */
  TOOLS.pro = function(r){ wire(r, function(){
    const kind  = seg(r,'kind'),
          reg   = str(r,'reg'),
          fund  = str(r,'fund'),
          drug  = chk(r,'drug'),
          dev   = chk(r,'dev'),
          minor = chk(r,'minor'),
          ident = chk(r,'ident'),
          bio   = chk(r,'bio'),
          weeks = Math.max(1, num(r,'weeks',8));

    const trial = (kind==='trial');

    /* ── the structural guideline ───────────────────────────────────────*/
    let gl, glNote;
    if(trial){
      gl='SPIRIT 2025';
      glNote='SPIRIT was revised in 2025 alongside CONSORT and now runs to 34 items plus the timeline figure. It is the protocol counterpart of CONSORT, it shares one website with it at consort-spirit.org, and writing the protocol to SPIRIT means the eventual CONSORT paper is already half structured.';
    } else if(kind==='dev'){
      gl='ISO 14155 for the clinical investigation plan, with SPIRIT used for structure where the design is interventional';
      glNote='A device clinical investigation is governed by ISO 14155 and, in the EU, by the MDR. The plan is a regulated document rather than an academic protocol, and it will be read by a notified body and a competent authority rather than by a journal.';
    } else if(kind==='obs'){
      gl='STROBE as the structural anchor, with a written analysis plan';
      glNote='There is no SPIRIT for observational studies, which is why they are so often under-specified. Writing the protocol against the STROBE items forces the decisions that otherwise get made during analysis: how confounders will be selected, how missing data will be handled, and which analyses are pre-specified.';
    } else if(kind==='sec'){
      gl='RECORD, the STROBE extension for routinely collected health data';
      glNote='Secondary analysis of routine data has its own failure mode: the data was collected for a purpose that is not yours, and RECORD exists to force that into the open — what the database actually captures, who is missing from it, and how the codes map to the clinical concepts you are claiming to study.';
    } else {
      gl='SRQR or COREQ as the structural anchor';
      glNote='Qualitative protocols are judged on reflexivity and on sampling logic rather than on power. The commonest committee query is the sample size question, which needs answering in the language of saturation and information power rather than refused.';
    }

    /* ── registration ───────────────────────────────────────────────────*/
    const REG = {
      in:  ['Clinical Trials Registry – India (CTRI)','Registration before enrolment of the first participant is required by the CTRI and expected by Indian journals. ICMR-funded work is registered regardless of design.'],
      uk:  ['ISRCTN, or ClinicalTrials.gov','With Health Research Authority approval and a Research Ethics Committee opinion obtained through the Integrated Research Application System. The HRA expects registration and publishes a research transparency requirement.'],
      us:  ['ClinicalTrials.gov','Required for applicable clinical trials under FDAAA 801 and the 2016 Final Rule, with results reporting obligations attached. NIH-funded trials are covered by the NIH policy whether or not they are applicable trials.'],
      eu:  ['The EU Clinical Trials Information System (CTIS)','A single submission under Regulation 536/2014 covering every member state in which the trial runs, replacing the separate national applications that preceded it.'],
      oth: ['A WHO ICTRP primary registry','The ICMJE requires prospective registration in a WHO primary registry or on ClinicalTrials.gov as a condition of consideration at member journals.']
    };
    const rg = REG[reg] || REG.oth;

    /* ── the document set ───────────────────────────────────────────────*/
    const docs = [
      ['The protocol itself','Written to '+gl.split(',')[0]+', with the version number and date on every page. Committees reject on version control more often than anyone expects, because an amendment referring to an unnumbered protocol cannot be traced.'],
      ['Participant information sheet','In plain language, at the reading level your population actually has rather than the one the template assumes. This is the document committees return most often, and almost always for readability rather than content.'],
      ['Informed consent form','Separate from the information sheet, signed and dated by participant and investigator, with a copy for the participant. The investigator holds responsibility for the consent process; we draft the document, we do not take the duty.'],
      ['Investigator CV and site details','Current, signed and dated, for every site. Out-of-date CVs are a routine cause of a query letter and a four-week delay.'],
      ['Case report form or data collection tool','Submitted with the protocol, because a committee reads it to check that you are not collecting more than the protocol justifies.'],
      ['Data management and monitoring plan','Who holds the data, where, for how long, who may access it and what happens at the end. Proportionate to the study: a trial needs a monitoring plan, a notes review does not.']
    ];
    if(ident) docs.push(['Data protection documentation','A privacy notice, the lawful basis for processing, and — where the processing is likely to be high risk — a data protection impact assessment. In the UK and EU this is a GDPR obligation on the sponsor, not a form for the ethics committee, and it is frequently the item that is missing on the day.']);
    if(minor) docs.push(['Assent, and parental or guardian consent','An age-appropriate assent form in addition to the consent of the person with parental responsibility, and a stated plan for re-consent if a participant reaches the age of majority during follow-up. Committees examine this closely and rightly.']);
    if(bio) docs.push(['Sample handling, storage and future use','A material transfer agreement where samples leave the institution, and separate optional consent for storage and unspecified future research — which cannot be bundled into the main consent.']);
    if(drug) docs.push(['Investigational product documentation','The investigator brochure or summary of product characteristics, the labelling, the accountability and storage arrangements, and the pharmacovigilance plan with reporting timelines for serious adverse events.']);
    if(dev) docs.push(['Device technical documentation','The instructions for use, the risk analysis to ISO 14971, evidence of conformity or the justification for investigational use, and the clinical investigation plan to ISO 14155.']);
    if(trial) docs.push(['Trial registration record','Completed and public before the first participant is enrolled. Retrospective registration is permanently visible in the registry and is a standing reason for journals to decline the eventual paper.']);
    docs.push(['Insurance and indemnity','Proof of cover appropriate to the risk. Usually institutional, occasionally not, and almost always the item nobody chases until the week of the meeting.']);

    /* ── funder annexes ─────────────────────────────────────────────────*/
    const FUND = {
      icmr: 'ICMR requires the proposal in its own format with the National Ethical Guidelines for Biomedical and Health Research Involving Human Participants applied, CTRI registration, and a budget on the prescribed heads. Its guidelines govern the ethics submission as well as the funding one.',
      dbt:  'DBT and DST submissions run through their own portals on prescribed formats, with the budget broken to their heads and a separate justification for equipment. The scientific case and the administrative forms are graded by different people, and the forms fail more proposals than the science does.',
      nih:  'An NIH application is a package rather than a proposal: Specific Aims on one page, Research Strategy to the page limit for the mechanism, biosketches in the current format, a data management and sharing plan under the 2023 policy, human subjects and clinical trials information, and resource sharing. The Specific Aims page is read first and decides how the rest is read.',
      nihr: 'NIHR expects patient and public involvement to be evidenced rather than asserted — who was involved, when, what changed as a result — alongside a plain English summary that is genuinely plain, and a research governance route through the HRA.',
      heu:  'Horizon Europe is scored on Excellence, Impact, and Quality and Efficiency of the Implementation, in that order and with those weights. The impact section is where most clinical proposals lose marks, because it asks for a pathway rather than a hope, and there is an ethics self-assessment that is mandatory and frequently left until last.',
      ind:  'An industry-sponsored study brings a clinical trial agreement, a delegation log, sponsor monitoring arrangements, and — where the results will be published — GPP 2022 alongside the ICMJE, with the sponsor’s role in any writing disclosed.',
      chy:  'Charitable funders vary widely and most publish their format. What they share is a short lay summary that carries real weight in the decision, and a growing expectation of a data sharing statement.',
      none: 'No funder annexes. The ethics submission still needs a budget or a statement that the study is unfunded, because a committee reads cost as a feasibility question.'
    };
    const fnote = FUND[fund] || FUND.none;

    /* ── timeline ───────────────────────────────────────────────────────*/
    const base = trial?7 : (kind==='dev'?7 : 4);
    const extra = (minor?1:0)+(bio?1:0)+(drug?2:0)+(dev?2:0)+(ident?1:0);
    const need = base+extra;
    let fitK,fitT;
    if(weeks>=need+3){ fitK='ok'; fitT='Comfortable. '+weeks+' weeks against roughly '+need+' to assemble and write the set, which leaves room for the query letter that most committees send.'; }
    else if(weeks>=need){ fitK='mid'; fitT='Tight. '+weeks+' weeks against roughly '+need+'. It holds only if the institutional signatures and the insurance confirmation are chased from day one rather than at the end.'; }
    else { fitK='no'; fitT='Not deliverable for that meeting. '+weeks+' weeks against roughly '+need+'. Submitting an incomplete set to hit a date is a false economy: a query letter costs a whole meeting cycle, which is usually four to eight weeks.'; }

    out(r,
      '<div class="tout__hd"><b>'+docs.length+' documents, not one</b><span>about '+need+' weeks to assemble</span></div>'+
      '<div class="tbig tbig--3">'+
        '<div class="tbig__i"><p class="tbig__v">'+docs.length+'</p><p class="tbig__l">Items in the submission set</p></div>'+
        '<div class="tbig__i"><p class="tbig__v">'+need+'<small> wk</small></p><p class="tbig__l">To assemble and write</p></div>'+
        '<div class="tbig__i"><p class="tbig__v"><span class="tflag tflag--'+fitK+'">'+(fitK==='ok'?'Workable':fitK==='mid'?'Tight':'Too tight')+'</span></p><p class="tbig__l">Against your date</p></div>'+
      '</div>'+
      '<div class="tverd"><p><b>Structural guideline: '+esc(gl)+'.</b> '+glNote+'</p>'+
        '<p><b>Your timeline.</b> '+fitT+'</p></div>'+
      '<p class="tsub">The submission set</p>'+
      docs.map(function(x){ return '<div class="trow trow--txt"><b>'+esc(x[0])+'</b><span>'+x[1]+'</span></div>'; }).join('')+
      (trial||kind==='dev' ? '<p class="tsub">Registration</p><div class="trow trow--txt"><b>'+esc(rg[0])+'</b><span>'+rg[1]+'</span></div>' : '')+
      '<p class="tsub">What your funder adds</p>'+
      '<div class="trow trow--txt"><b>Funder-specific annexes</b><span>'+fnote+'</span></div>'+
      '<p class="tmeth"><b>How this was worked out, and what it is not.</b> The set is built from the design and the jurisdiction you selected. Structural guidelines: SPIRIT 2025 for trial protocols at consort-spirit.org, ISO 14155 for device clinical investigation plans, STROBE and RECORD as anchors for observational and routine-data studies, SRQR or COREQ for qualitative work. Good clinical practice is ICH E6(R3): its Principles and Annex 1 were adopted by ICH and the CHMP on 23 July 2025 and replace E6(R2), and Annex 2, covering pragmatic and decentralised designs, reached Step 4 in June 2026 and applies in the EU from 15 January 2027. The ethical framework is the Declaration of Helsinki, most recently revised at the World Medical Association General Assembly in Helsinki in October 2024. <b>This is a planning aid, not regulatory advice, and it is not exhaustive.</b> Your ethics committee, your competent authority and your institution set the actual requirements, and they differ. <b>The investigator and the sponsor hold responsibility for the ethics submission and for the consent process.</b> We draft documents to your instruction; we do not take that duty, and no writing service can.</p>'
    );
  }); };


  /* ════ Physician writing · 05 · ICMJE authorship qualifier ═════════════
     Runs one contributor at a time against the four criteria and produces
     the wording. Deliberately blunt about honorary authorship, because
     criterion 4 is an undertaking rather than a courtesy. */
  TOOLS.aut = function(r){
    wire(r, function(){
      const role  = seg(r,'role'),
            conc  = chk(r,'conc'), acq = chk(r,'acq'), an = chk(r,'an'),
            draft = chk(r,'draft'), rev = chk(r,'rev'),
            appr  = chk(r,'appr'), acct = chk(r,'acct'),
            paid  = chk(r,'paid'),
            ai    = chk(r,'ai'),
            name  = (str(r,'name')||'').trim(),
            spon  = (str(r,'spon')||'').trim();

      const c1 = conc || acq || an;
      const c2 = draft || rev;
      const c3 = appr, c4 = acct;
      const met = [c1,c2,c3,c4].filter(Boolean).length;
      const all = met===4;

      const crit = [
        [c1,'1 · Substantial contribution','To the conception or design of the work, <i>or</i> to the acquisition, analysis or interpretation of data. Any one of those three satisfies it; the "or" is in the ICMJE wording and is routinely misread as an "and".'],
        [c2,'2 · Drafting or critical revision','Drafting the work, or reviewing it critically for important intellectual content. Reading a draft and agreeing with it does not meet this, which is the criterion honorary authors most often fail.'],
        [c3,'3 · Final approval','Of the version to be published. The easiest to satisfy and the easiest to forget to record.'],
        [c4,'4 · Accountability','Agreement to be accountable for all aspects of the work, including ensuring that questions about the accuracy or integrity of <i>any part</i> of it are appropriately investigated and resolved. This is an undertaking about the whole paper, not about your section.']
      ];

      /* ── verdict ─────────────────────────────────────────────────────*/
      let vk, vt, vb;
      if(all){
        vk='ok'; vb='Qualifies for authorship';
        vt='All four criteria are met. Note that meeting them is not optional in the other direction either: the ICMJE states that everybody designated as an author should meet all four, and that everybody who meets all four should be identified as an author. Somebody who has met them and is being left off is as much a problem as somebody who has not and is being included.';
      } else if(met===3 && !c2){
        vk='mid'; vb='Not yet an author — one criterion short, and it is fixable';
        vt='Criterion 2 is unmet: this contributor has not drafted the work or revised it critically for important intellectual content. Unlike the others, this one can still be satisfied — ask them to review the draft properly and contribute substantively to it. That is the honest fix, and it is very often what should have happened anyway.';
      } else if(met===3){
        vk='mid'; vb='Not an author on the criteria as answered';
        vt='Three of the four are met. All four are required, so on these answers the contributor is acknowledged rather than authored — but check the answers first, because the unmet criterion is frequently something the person did and nobody recorded.';
      } else {
        vk='no'; vb='Acknowledged, not authored';
        vt='Fewer than four criteria met. The ICMJE is explicit that contributors who do not meet all four should not be listed as authors and should instead be acknowledged, with their specific contribution described.';
      }

      /* ── role notes ──────────────────────────────────────────────────*/
      const ROLE = {
        inv:  ['The investigator','Usually meets all four without difficulty. The one to check is criterion 2: on multi-site studies a site investigator who recruited patients and never saw a draft has met criterion 1 and not criterion 2, and the fix is to send them the draft rather than to quietly include them.'],
        data: ['The person who collected the data','Meets criterion 1 through acquisition. Whether they meet criterion 2 is the question, and the answer is frequently no only because nobody asked them to review the draft. Registrars and research nurses are the people most often wrongly left off an author list, and the omission is almost always thoughtlessness rather than intent.'],
        stat: ['The statistician','Meets criterion 1 through analysis and interpretation, and almost always criterion 2 through the statistical sections. A statistician who designed the analysis, ran it, interpreted it and wrote those sections is an author on the criteria, and treating that as a paid service to be acknowledged is a common and indefensible arrangement.'],
        sup:  ['The supervisor or head of department','The one to be careful with. Supervision, provision of facilities, general departmental oversight and securing funding do not, on their own, meet any of the criteria — the ICMJE says so directly. Where a supervisor genuinely shaped the question and revised the work critically, they qualify easily. Where they did not, criterion 4 is the reason it matters: an author is undertaking to be accountable for the whole paper.'],
        wrt:  ['The professional writer','Writing assistance, technical editing, language editing and proofreading are listed by the ICMJE among the activities that alone do not qualify somebody for authorship. A writer who did only those is acknowledged, with written permission obtained. A writer who also shaped the design, analysed data or revised for intellectual content can meet all four — nothing bars a writer from being an author; the contribution decides, not the invoice.'],
        spon: ['An employee of the sponsor','Qualifies or does not on exactly the same four criteria as anybody else; employment by a sponsor neither confers nor removes authorship. What it does add is disclosure: the ICMJE requires the sponsor’s role in study design, data collection, analysis, interpretation and the writing of the report to be stated, and where the research is company-sponsored GPP 2022 applies alongside.']
      };
      const rn = ROLE[role] || ROLE.inv;

      /* ── wording ─────────────────────────────────────────────────────*/
      const who = name || (role==='wrt' ? '[writer name]' : '[contributor name]');
      const sp  = spon || '[the authors / sponsor name]';
      let text;
      if(all){
        text = 'CRediT-style contribution statement, for the authors’ section:\n\n'
             + who + ' contributed to '
             + [conc?'the conception and design of the study':'', acq?'the acquisition of data':'', an?'the analysis and interpretation of data':'']
                 .filter(Boolean).join('; ')
             + '; ' + (draft&&rev ? 'drafted the work and revised it critically for important intellectual content'
                       : draft ? 'drafted the work' : 'revised the work critically for important intellectual content')
             + '; approved the final version to be published; and agrees to be accountable for all aspects of the work.';
      } else {
        text = 'Acknowledgements section:\n\n'
             + 'The authors thank ' + who + ' for '
             + (role==='wrt' ? 'writing assistance and editorial support' :
                an ? 'assistance with data analysis' :
                acq ? 'assistance with data collection' : 'their contribution to this work')
             + '. ' + who + ' has given written permission to be acknowledged.'
             + (paid ? '\n\nFunding statement:\n\n' + (role==='wrt'
                 ? 'Writing assistance was provided by ' + who + ' and was funded by ' + sp + '. The sponsor had no role in the design of the study, in the collection, analysis or interpretation of data, or in the decision to submit for publication. [Amend this sentence to describe the sponsor’s actual role — the ICMJE requires it to be stated accurately, not minimised.]'
                 : 'This contribution was funded by ' + sp + '.') : '');
      }
      if(ai){
        text += '\n\nAI disclosure, per ICMJE section V (added January 2026):\n\n'
             + 'Generative AI was used in the preparation of this manuscript for [writing assistance / language editing]. The authors reviewed and edited all output and take full responsibility for the content. [If AI was used for data collection, analysis or figure generation, move this to the Methods and state the tool, the version and the prompts in enough detail to replicate the approach.]';
      }

      out(r,
        '<div class="tout__hd"><b>'+esc(vb)+'</b><span>'+met+' of 4 criteria met</span></div>'+
        crit.map(function(c){
          return '<div class="trow trow--txt trow--flag '+(c[0]?'trow--has':'trow--gap')+'"><b>'+c[1]+(c[0]?' &mdash; met':' &mdash; not met')+'</b><span>'+c[2]+'</span></div>';
        }).join('')+
        '<div class="tverd"><p><b>'+esc(vb)+'.</b> '+vt+'</p>'+
          '<p><b>'+esc(rn[0])+'.</b> '+rn[1]+'</p></div>'+
        '<p class="tsub">The wording, ready to paste</p>'+
        '<pre class="tcode" data-copytext>'+esc(text)+'</pre>'+
        '<button type="button" class="tcopy" data-copy>Copy the wording</button>'+
        '<p class="tmeth"><b>Source, and what this is not.</b> The four criteria and the treatment of non-author contributors are from the ICMJE Recommendations, updated January 2026 &mdash; note that the browsable pages on the ICMJE site still carry older text in places, so the PDF is the authoritative version. The ICMJE lists writing assistance, technical editing, language editing and proofreading among the activities that alone do not qualify a contributor for authorship, says such contributors should be acknowledged with their contribution described, and advises editors to require the corresponding author to obtain written permission from everybody acknowledged. It also requires disclosure of the sponsor&rsquo;s role including in the writing of the report. The phrase &ldquo;medical writer&rdquo; does not appear anywhere in the Recommendations, and neither does &ldquo;ghost&rdquo;; the term used is writing assistance. <b>This is a working aid, not an adjudication.</b> Your target journal&rsquo;s own authorship policy governs, several journals add requirements the ICMJE does not, and the corresponding author decides.</p>'
      );
    });
    copier(r);
  };


  /* ════ Physician writing · 06 · Boolean search string builder ══════════
     The commonest search failure is a MEDLINE strategy pasted into Embase:
     it returns records, nothing errors, and it is retrieving the wrong set.
     This writes the same concepts out in each database's own syntax so the
     difference is visible rather than assumed away. */
  TOOLS.bld = function(r){
    wire(r, function(){
      const db   = seg(r,'db'),
            yr   = Math.round(num(r,'yr',0)),
            hum  = chk(r,'hum'),
            eng  = chk(r,'eng'),
            rct  = chk(r,'rct');

      function terms(k){
        return (str(r,k)||'').split(',').map(function(t){ return t.trim(); })
               .filter(function(t){ return t.length>0; });
      }
      const C = [
        { free: terms('c1'), ctrl: terms('v1') },
        { free: terms('c2'), ctrl: terms('v2') },
        { free: terms('c3'), ctrl: terms('v3') }
      ].filter(function(c){ return c.free.length || c.ctrl.length; });

      if(!C.length){
        out(r,'<div class="tstate">Put at least one concept in and the strategy appears here, written out in the syntax of the database you have selected.</div>');
        return;
      }

      const q = function(t){ return '"'+t+'"'; };
      let lines=[], joined='', head='', note='', vocab='';

      if(db==='pubmed'){
        head='PubMed · search builder syntax';
        vocab='Controlled vocabulary is MeSH. [mh] searches the heading and explodes it by default; use [mh:noexp] where you do not want the narrower terms. [tiab] searches title and abstract; [tw] is broader and noisier.';
        lines = C.map(function(c,i){
          const parts = c.free.map(function(t){ return q(t)+'[tiab]'; })
                     .concat(c.ctrl.map(function(t){ return q(t)+'[mh]'; }));
          return '#'+(i+1)+'  ('+parts.join(' OR ')+')';
        });
        joined = C.map(function(c){
          const parts = c.free.map(function(t){ return q(t)+'[tiab]'; })
                     .concat(c.ctrl.map(function(t){ return q(t)+'[mh]'; }));
          return '('+parts.join(' OR ')+')';
        }).join('\n  AND ');
        const lim=[];
        if(yr>1900) lim.push('("'+yr+'"[dp] : "3000"[dp])');
        if(hum) lim.push('humans[mh]');
        if(eng) lim.push('english[la]');
        if(rct) lim.push('randomized controlled trial[pt]');
        if(lim.length) joined += '\n  AND ' + lim.join('\n  AND ');
      } else if(db==='ovid'){
        head = 'Ovid MEDLINE · MeSH';
        vocab = 'Controlled vocabulary is MeSH. exp explodes the heading to include its narrower terms; drop exp where you want the heading alone. .ti,ab,kw. searches title, abstract and keyword heading word. Note how different this looks from the Embase version of the same concepts — that difference is the whole point of building per database.';
        joined = C.map(function(c){
          const p=[];
          if(c.ctrl.length) p.push(c.ctrl.map(function(t){ return 'exp '+t+'/'; }).join(' or '));
          if(c.free.length) p.push('('+c.free.join(' or ')+').ti,ab,kw.');
          return '('+p.join(' or ')+')';
        }).join('\n  and ');
        const lim=[];
        if(eng) lim.push('english language');
        if(hum) lim.push('humans');
        if(yr>1900) lim.push('yr="'+yr+' -Current"');
        if(rct) lim.push('randomized controlled trial.pt.');
        if(lim.length) joined += '\n\nlimit to ('+lim.join(' and ')+')';
      } else if(db==='embase'){
        head = 'Embase.com · Emtree, and it is not MeSH';
        vocab = 'Controlled vocabulary is Emtree, Elsevier’s own thesaurus. The headings differ from MeSH, the tree structures differ, and some MeSH concepts have no Emtree equivalent at all. <b>The thesaurus terms below are reproduced as you typed them and almost certainly need changing</b> — look each one up in Emtree rather than assuming it carries across, because a term that does not exist there fails silently: the search still runs, and simply retrieves a different set. Embase also indexes conference abstracts, which MEDLINE does not, and that is a large part of why it is worth searching separately rather than instead.';
        joined = C.map(function(c){
          const p=[];
          if(c.ctrl.length) p.push(c.ctrl.map(function(t){ return "'"+t.toLowerCase()+"'/exp"; }).join(' OR '));
          if(c.free.length) p.push(c.free.map(function(t){ return "'"+t.toLowerCase()+"':ti,ab,kw"; }).join(' OR '));
          return '('+p.join(' OR ')+')';
        }).join('\n  AND ');
        const lim=[];
        if(eng) lim.push('[english]/lim');
        if(hum) lim.push('[humans]/lim');
        if(rct) lim.push('[randomized controlled trial]/lim');
        if(yr>1900) lim.push('['+yr+'-2026]/py');
        if(lim.length) joined += '\n  AND ' + lim.join('\n  AND ');
        if(C.some(function(c){ return c.ctrl.length; }))
          joined += "\n\n/* Look every '...'/exp term up in Emtree before running this. */";
      } else if(db==='central'){
        head='Cochrane CENTRAL · Wiley interface';
        vocab='Controlled vocabulary is MeSH, written [mh "Term"]. CENTRAL is where randomised trials live, including many indexed nowhere else, so a review of randomised evidence that omits it will be asked why. A trial design filter is unnecessary here and will lose records.';
        joined = C.map(function(c){
          const parts = c.free.map(function(t){ return q(t)+':ti,ab,kw'; })
                     .concat(c.ctrl.map(function(t){ return '[mh '+q(t)+']'; }));
          return '('+parts.join(' OR ')+')';
        }).join('\n  AND ');
        if(yr>1900) joined += '\n\nPublication year from '+yr+' (set in the interface, not in the string)';
      } else if(db==='scopus'){
        head='Scopus · Elsevier';
        vocab='No controlled vocabulary at all — Scopus is free-text only, so any thesaurus terms you entered are searched as phrases here. That makes truncation and synonym coverage matter far more. Scopus is strongest for citation chasing forward from papers you already have.';
        joined = C.map(function(c){
          const all = c.free.concat(c.ctrl);
          return 'TITLE-ABS-KEY('+all.map(q).join(' OR ')+')';
        }).join('\n  AND ');
        if(yr>1900) joined += '\n  AND PUBYEAR > '+(yr-1);
        if(eng)     joined += '\n  AND LANGUAGE(english)';
      } else {
        head='Web of Science Core Collection · Clarivate';
        vocab='No controlled vocabulary. TS= searches the topic field, which covers title, abstract, author keywords and Keywords Plus. Useful for conference proceedings indexed here and not elsewhere.';
        joined = C.map(function(c){
          const all = c.free.concat(c.ctrl);
          return 'TS=('+all.map(q).join(' OR ')+')';
        }).join('\n  AND ');
        if(yr>1900) joined += '\n  AND PY=('+yr+'-2026)';
        if(eng)     joined += '\n  AND LA=(English)';
      }

      const warn=[];
      if(eng) warn.push(['A language limit is a decision you have to report','Restricting to English excludes trials that exist, and it does so unevenly by topic and by region. It is sometimes defensible on resource grounds; it is never defensible silently. State it in the methods and in the limitations, and say what you think it cost you.']);
      if(rct) warn.push(['Study design filters lose records','Publication type indexing is applied by humans and applied inconsistently, so a trial filter reliably misses trials — particularly older ones and those in smaller journals. Use a validated filter rather than a hand-built one, and never use one in CENTRAL.']);
      if(yr>1900) warn.push(['A date limit needs a reason','&ldquo;Last ten years&rdquo; is a habit rather than a rationale. If the intervention was introduced in 2012 the limit is justified and should say so; if it was not, you are excluding evidence for convenience.']);
      if(C.length>3) warn.push(['More than three concepts usually means the question is too narrow','Each concept combined with AND is a filter, and four filters routinely produce a search that returns twelve records because the terms have to co-occur rather than because the evidence is thin.']);
      if(!C.some(function(c){ return c.ctrl.length; }) && (db==='pubmed'||db==='ovid'||db==='embase'||db==='central'))
        warn.push(['No controlled vocabulary terms entered','In a thesaurus-indexed database, free text alone misses papers that use a synonym you did not think of, and controlled terms alone miss papers too recent to have been indexed yet. Both, combined with OR, is the standard approach and it is not optional in a systematic review.']);

      out(r,
        '<div class="tout__hd"><b>'+esc(head)+'</b><span>'+C.length+' concept'+(C.length>1?'s':'')+', combined with AND</span></div>'+
        '<pre class="tcode" data-copytext>'+esc(joined)+'</pre>'+
        '<button type="button" class="tcopy" data-copy>Copy the strategy</button>'+
        '<div class="tverd"><p><b>Vocabulary in this database.</b> '+vocab+'</p></div>'+
        (warn.length ? '<p class="tsub">Before you run it</p>' + warn.map(function(w){
          return '<div class="trow trow--txt trow--flag trow--mid"><b>'+esc(w[0])+'</b><span>'+w[1]+'</span></div>'; }).join('') : '')+
        '<p class="tsub">The test that takes ten minutes</p>'+
        '<div class="trow trow--txt trow--flag trow--has"><b>Run it against studies you already know</b><span>Pick three or four papers that definitely belong in your review and check the search retrieves all of them. A strategy that misses a paper you already have is broken, and this is the only cheap way to find that out. It is also the check that catches a MEDLINE strategy pasted into Embase, which otherwise fails silently — it returns records, the count looks plausible, and it is retrieving the wrong set.</span></div>'+
        '<p class="tmeth"><b>What this is and is not.</b> It writes your concepts out in the syntax of the database you chose, with the field tags and limit syntax that database actually uses. It does not design your search: choosing the concepts, finding the synonyms other authors used, deciding where to truncate and picking the controlled terms from each thesaurus is the skilled part, and it is what an information specialist does. Truncation is deliberately left out here because the right truncation point differs by term and by database and a wrong one silently broadens or narrows the whole strategy. Controlled vocabulary differs between databases and is not translatable: MeSH in MEDLINE, PubMed and CENTRAL, Emtree in Embase, none at all in Scopus or Web of Science. <b>Save every strategy with its date, its interface and its result count</b> — PRISMA-S asks for it, and it is what makes a search re-runnable rather than merely described.</p>'
      );
    });
    copier(r);
  };


  /* ════ Physician writing · 07 · CME accreditation route map ════════════
     Built because the previous version of the training page offered
     "CME-accredited program content" and "ACCME format", neither of which
     is a thing a content developer can offer or that exists. This says who
     may actually accredit what, and what a developer can truthfully claim. */
  TOOLS.cme = function(r){ wire(r, function(){
    const what = seg(r,'what'),
          who  = seg(r,'who'),
          reg  = str(r,'reg'),
          hrs  = Math.max(0.25, num(r,'hrs',1)),
          cred = chk(r,'cred'),
          ind  = (who==='pharma');

    /* ── credits ────────────────────────────────────────────────────────*/
    const perDay = Math.min(8, Math.round(hrs));
    const REGN = {
      us:  ['AMA PRA Category 1 Credit™','One credit per hour of participation, designated by the accredited provider. <b>ACCME accredits providers; the AMA owns the credit.</b> The ACCME’s own glossary says the designation of credit is not within its purview — so "ACCME-accredited CME credit" is a phrase that describes nothing.'],
      eu:  ['European CME Credits (ECMEC®)','Awarded by the EACCME, an institution of the UEMS, and recognised in Europe, the United States and Canada. The EACCME accredits live events, e-learning materials and blended learning.'],
      uk:  ['Federation CPD credits','The Federation of the Royal Colleges of Physicians grants <b>CPD approval</b> — not accreditation — to external events. One credit per hour of CPD provided, capped at 8 credits per day, with hours rounded to the nearest whole number.'],
      in:  ['State medical council credit hours','Credit for continuing medical education in India is granted by state medical councils, and the requirements, the application route and the number of hours differ from state to state. There is no single national scheme, so the answer depends on where your learners are registered.'],
      mult:['More than one system, separately','Each jurisdiction accredits on its own terms and none of them recognises another’s decision automatically — with the partial exception of ECMEC®, which the EACCME states is recognised in the United States and Canada. Plan the accreditation route per region before the content is built, because the requirements shape the content.']
    };
    const rg = REGN[reg] || REGN.us;

    /* ── who may accredit ───────────────────────────────────────────────*/
    let route, routeK, canSay, cannot;
    if(who==='accred'){
      routeK='ok'; route='You accredit it yourself';
      canSay='You are the accredited provider. You plan, implement and evaluate the activity, you designate the credit, and you carry the compliance obligation. We write content to your specification and under your direction, and you remain fully responsible for it — which is the correct arrangement and the only one that works.';
      cannot='';
    } else if(who==='hosp'||who==='soc'){
      routeK='mid'; route='Either become accredited, or work with an accredited provider';
      canSay='Many hospitals, universities and medical societies are themselves accredited providers, or hold accreditation through a state medical society. If yours does, the route above applies. If it does not, the ACCME term for the arrangement is <b>joint providership</b>: an activity planned, implemented and evaluated by an accredited provider together with one or more non-accredited organisations. The accredited provider certifies the activity and designates the credit, and remains fully responsible for compliance.';
      cannot='What nobody in this arrangement can say is that the content itself &ldquo;carries&rdquo; credit before an accredited provider has certified the activity. Credit attaches to an activity, not to a slide deck.';
    } else if(ind){
      routeK='no'; route='You cannot be the provider, and in Europe you cannot apply at all';
      canSay='Under the ACCME Standards for Integrity and Independence, an <b>ineligible company</b> is one whose primary business is producing, marketing, selling, re-selling or distributing healthcare products used by or on patients — which covers pharmaceutical, device and diagnostics companies. An ineligible company cannot be an accredited provider and cannot control the content of accredited education. The available route in the United States is to fund the activity as commercial support, with the accredited provider controlling content independently, under Standard 4.';
      cannot='In Europe the position is harder and it is stated plainly by the EACCME: it will <b>not</b> consider for accreditation events where the content, format or faculty is influenced by industry, submitted by industry, or where industry is the CME provider. Applications come from physician organisations — individual specialists, university or hospital departments, scientific societies, national medical associations. A company may co-develop with a physician organisation; it cannot apply.';
    } else {
      routeK='mid'; route='You are a developer, which is a legitimate position with limits';
      canSay='An education or publishing company is <b>not</b> an ineligible company under the ACCME Standards — the ACCME’s own examples of eligible organisations include publishing and education companies. So you can work with an accredited provider under joint providership, develop content to their specification, and say so. The accredited provider plans, implements, evaluates, certifies and designates; you develop.';
      cannot='What you cannot do is accredit, certify or designate anything, or state or imply that your content carries credit in its own right. That is the position we are in ourselves, and it is why this page does not claim to accredit anything.';
    }

    /* ── what the deliverable is ────────────────────────────────────────*/
    const WHAT = {
      deck: ['A slide deck','Accreditable as part of an activity, never on its own. The credit attaches to the live event, the e-learning or the blended programme that the deck is used in.'],
      elearn:['An e-learning module','The EACCME accredits e-learning materials as a category in their own right; in the United States it is an enduring material and the accredited provider designates the credit. SCORM or xAPI packaging is a delivery question, not an accreditation one.'],
      work: ['A case-based workshop','Accredited as a live event. The EACCME accredits live events whether physical, virtual or hybrid.'],
      assess:['An assessment set','Not accreditable alone, and usually a required component of the activity it belongs to rather than an activity itself. Pre- and post-tests are what outcome claims rest on.'],
      prog: ['A full programme','Accredited as a set of activities. The requirements shape the content, so settle the accreditation route before the curriculum rather than after.']
    };
    const wt = WHAT[what] || WHAT.deck;

    const rows=[
      ['What you are making', '<b style="color:var(--ink)">'+wt[0]+'</b>. '+wt[1]],
      ['The credit system', '<b style="color:var(--ink)">'+rg[0]+'</b>. '+rg[1]],
      ['Who may accredit it', '<b style="color:var(--ink)">'+route+'</b>. '+canSay]
    ];
    if(cannot) rows.push(['What cannot be said', cannot]);
    if(cred && reg==='uk') rows.push(['Credits, if approved', 'At '+f(hrs,2)+' contact hours: <b style="color:var(--ink)">'+perDay+' credit'+(perDay===1?'':'s')+'</b>, on the Federation’s rule of one credit per hour of CPD provided, capped at 8 per day and rounded to the nearest whole number.']);
    else if(cred) rows.push(['Credits, if designated', 'At '+f(hrs,2)+' contact hours, the usual basis is one credit per hour of participation &mdash; but the number is set by the accredited provider when it designates the activity, not by the developer and not by this page.']);

    rows.push(['Standards the content is written to','The ACCME Standards for Integrity and Independence: ensure content is valid; prevent commercial bias and marketing; identify, mitigate and disclose relevant financial relationships; manage commercial support appropriately; manage ancillary activities. These have applied to all accredited activities since 1 January 2022.']);

    out(r,
      '<div class="tout__hd"><b>'+esc(route)+'</b><span>'+esc(rg[0].replace(/<[^>]+>/g,''))+'</span></div>'+
      rows.map(function(x){ return '<div class="trow trow--txt"><b>'+esc(x[0])+'</b><span>'+x[1]+'</span></div>'; }).join('')+
      '<div class="tverd"><p><b>Two phrases that do not mean anything.</b> &ldquo;ACCME format&rdquo; is not a thing: the ACCME issues <i>Accreditation Criteria</i>, <i>Standards for Integrity and Independence</i> and <i>Accreditation Policies</i>, and one of its criteria is in fact about choosing appropriate formats &mdash; so format is something the criteria address, not something the ACCME publishes. And &ldquo;CME-accredited content&rdquo; describes nothing, because accreditation attaches to a provider and credit attaches to an activity. Neither attaches to a document.</p>'+
        '<p><b>What we are.</b> A content developer. We write to an accredited provider’s specification, under their direction, and they certify and designate. We do not accredit anything, we do not certify anything, and we will not write a page that implies otherwise.</p></div>'+
      '<p class="tmeth"><b>Sources.</b> The AMA’s own requirements state that to certify activities for AMA PRA Category 1 Credit™ the sponsoring organisation must be accredited by the ACCME or by a recognised state medical society; the ACCME/AMA glossary states that the designation of credit is not within the ACCME’s purview. <b>Joint providership</b> is the ACCME’s own term for an activity provided by one or more accredited and one or more non-accredited organisations; &ldquo;education partner&rdquo; is not an ACCME term and does not appear in its glossary. The ineligible-company definition and the five Standards for Integrity and Independence are the ACCME’s, in force for all activities from 1 January 2022. The EACCME position on industry and its ECMEC® credits are the UEMS’s own published statements. The Federation of the Royal Colleges of Physicians grants CPD approval at one credit per hour, capped at 8 per day. <b>This is a route map, not accreditation advice.</b> Requirements change, several are jurisdiction-specific, and your accredited provider’s own interpretation governs.</p>'
    );
  }); };


  /* ════ Physician writing · 08 · Readability grader ═════════════════════
     Built because the previous version of the patient education page named
     SMOG, Flesch-Kincaid and PEMAT without ever stating a target grade —
     which is the one number that audience buys on. AHRQ's 5th-to-6th grade
     recommendation is the only citable federal figure; CDC and NIH decline
     to set one, and we say so rather than inventing attributions. */
  TOOLS.rdb = function(r){
    /* syllables: vowel groups, minus a silent terminal e, minimum one.
       Approximate by design — every readability formula in clinical use
       rests on an approximation of exactly this kind. */
    function syl(w){
      w = w.toLowerCase().replace(/[^a-z]/g,'');
      if(!w) return 0;
      if(w.length<=3) return 1;
      w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'');
      const m = w.match(/[aeiouy]{1,2}/g);
      return m ? m.length : 1;
    }
    const JARG = [
      ['adverse event','side effect'],['adverse events','side effects'],
      ['analgesia','pain relief'],['analgesic','painkiller'],['antipyretic','medicine that brings a fever down'],
      ['benign','not cancer'],['cardiac','heart'],['contraindicated','should not be used'],
      ['dyspnoea','shortness of breath'],['dyspnea','shortness of breath'],
      ['oedema','swelling'],['edema','swelling'],['efficacy','how well it works'],
      ['erythema','redness'],['febrile','having a fever'],['haematoma','a collection of blood under the skin'],
      ['hematoma','a collection of blood under the skin'],
      ['hypertension','high blood pressure'],['hypotension','low blood pressure'],
      ['hyperglycaemia','high blood sugar'],['hyperglycemia','high blood sugar'],
      ['hypoglycaemia','low blood sugar'],['hypoglycemia','low blood sugar'],
      ['incision','cut'],['intravenous','into a vein'],['lesion','damaged area'],
      ['malignant','cancer'],['myocardial infarction','heart attack'],
      ['oral','by mouth'],['palpitations','a racing or fluttering heartbeat'],
      ['prognosis','what is likely to happen'],['prophylaxis','prevention'],
      ['pruritus','itching'],['renal','kidney'],['subcutaneous','under the skin'],
      ['syncope','fainting'],['tachycardia','a fast heartbeat'],['titrate','change the dose slowly'],
      ['topical','put on the skin'],['vertigo','dizziness'],['ambulate','walk'],
      ['comorbidity','another health condition'],['adherence','taking it as prescribed'],
      ['compliance','taking it as prescribed'],['administer','give'],['discontinue','stop'],
      ['commence','start'],['terminate','stop'],['utilise','use'],['utilize','use'],
      ['sufficient','enough'],['approximately','about'],['prior to','before'],
      ['in order to','to'],['assist','help'],['obtain','get'],['require','need'],
      ['indicate','show'],['monitor','check'],['subsequently','then'],['additional','more'],
      ['initiate','start'],['facilitate','help'],['demonstrate','show'],['numerous','many'],
      ['nil by mouth','nothing to eat or drink'],['npo','nothing to eat or drink'],
      ['prn','when you need it'],['stat','straight away'],['bd','twice a day'],['tds','three times a day']
    ];

    wire(r, function(){
      const raw = (str(r,'txt')||'').trim();
      const target = Math.max(3, num(r,'target',6));
      if(raw.length < 60){
        out(r,'<div class="tstate">Paste at least a paragraph of the material you want graded. Nothing is sent anywhere &mdash; the arithmetic runs in this page, and closing the tab is all it takes to delete it.</div>');
        return;
      }
      const sentsRaw = raw.replace(/\s+/g,' ').split(/(?<=[.!?])\s+/).filter(function(s){ return s.trim().length>1; });
      const sents = sentsRaw.length || 1;
      const words = raw.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
      const W = words.length || 1;
      let S=0, poly=0, long=0;
      words.forEach(function(w){
        const n = syl(w); S += n;
        if(n>=3){ poly++; }
        if(w.length>=7) long++;
      });
      const wps = W/sents, spw = S/W;
      const fk  = 0.39*wps + 11.8*spw - 15.59;
      const fre = 206.835 - 1.015*wps - 84.6*spw;
      const smog = 1.0430 * Math.sqrt(poly * (30/sents)) + 3.1291;

      const worst = Math.max(fk, smog);
      let vk, vt;
      if(worst <= target){ vk='ok';
        vt='At or below the target. Both formulas put this within reach of the reading level you set. Formulas are necessary and not sufficient, though — the CDC’s own guidance is that readability scores should be used only alongside other ways of assessing whether material works, and that testing it with real members of the audience is the most reliable check there is.'; }
      else if(worst <= target+2){ vk='mid';
        vt='Close, and reachable. The usual route down is shorter sentences rather than shorter words: splitting a 28-word sentence into two moves the grade more than any amount of vocabulary substitution, because sentence length carries most of the weight in both formulas.'; }
      else { vk='no';
        vt='Above the target by enough to matter. A leaflet written several grades above its readers has obtained a signature rather than understanding, and that is an ethical point rather than a stylistic one. Start with the longest sentences listed below, then the jargon.'; }

      const longest = sentsRaw.slice().map(function(s){
        const n=(s.match(/[A-Za-z][A-Za-z'’-]*/g)||[]).length; return [n,s.trim()];
      }).sort(function(a,b){ return b[0]-a[0]; }).slice(0,3)
        .filter(function(x){ return x[0]>=18; });

      const low = ' ' + raw.toLowerCase().replace(/[^a-z\s]/g,' ').replace(/\s+/g,' ') + ' ';
      const found = [];
      JARG.forEach(function(j){
        if(low.indexOf(' '+j[0]+' ')>=0 && found.length<14 &&
           !found.some(function(f){ return f[0]===j[0]; })) found.push(j);
      });

      const rows = [
        ['Words', i0(W)], ['Sentences', i0(sents)],
        ['Average sentence length', f(wps,1)+' words'],
        ['Words of three or more syllables', i0(poly)+' ('+pc(poly/W,0)+')'],
        ['Words of seven letters or more', i0(long)+' ('+pc(long/W,0)+')'],
        ['Flesch Reading Ease', f(fre,0)+' &mdash; higher is easier; 60–70 is plain English']
      ];

      out(r,
        '<div class="tout__hd"><b>'+(vk==='ok'?'At or below your target':vk==='mid'?'Close to your target':'Above your target')+'</b><span>target: grade '+f(target,0)+'</span></div>'+
        '<div class="tbig tbig--3">'+
          '<div class="tbig__i"><p class="tbig__v">'+f(fk,1)+'</p><p class="tbig__l">Flesch–Kincaid grade</p></div>'+
          '<div class="tbig__i"><p class="tbig__v">'+f(smog,1)+'</p><p class="tbig__l">SMOG index'+(sents<30?' <b style="color:var(--accent-4)">&middot; short sample</b>':'')+'</p></div>'+
          '<div class="tbig__i"><p class="tbig__v"><span class="tflag tflag--'+vk+'">'+(vk==='ok'?'On target':vk==='mid'?'Close':'Too high')+'</span></p><p class="tbig__l">Against grade '+f(target,0)+'</p></div>'+
        '</div>'+
        '<div class="tverd"><p><b>'+(vk==='ok'?'On target.':vk==='mid'?'Close.':'Above target.')+'</b> '+vt+'</p>'+
          (sents<30?'<p><b>A caution about the SMOG figure.</b> SMOG was designed for samples of at least 30 sentences and this one has '+sents+'. The number above extrapolates and will be less stable than the Flesch–Kincaid grade on a short passage. For a real assessment, grade the whole leaflet rather than a paragraph of it.</p>':'')+'</div>'+
        (longest.length ? '<p class="tsub">Start here: your longest sentences</p>' + longest.map(function(x){
            return '<div class="trow trow--txt trow--flag trow--gap"><b>'+x[0]+' words</b><span>&ldquo;'+esc(x[1].length>230?x[1].slice(0,230)+'…':x[1])+'&rdquo;</span></div>';
          }).join('') : '')+
        (found.length ? '<p class="tsub">Words your reader may not have</p>' + found.map(function(j){
            return '<div class="trow trow--txt trow--flag trow--mid"><b>'+esc(j[0])+'</b><span>Try: '+esc(j[1])+'</span></div>';
          }).join('') : '')+
        '<p class="tsub">The numbers behind it</p>'+
        rows.map(function(x){ return '<div class="trow"><b>'+x[0]+'</b><i>'+x[1]+'</i></div>'; }).join('')+
        '<p class="tmeth"><b>What these numbers are, and which of them you can cite.</b> Flesch–Kincaid grade = 0.39 &times; (words per sentence) + 11.8 &times; (syllables per word) &minus; 15.59. SMOG = 1.0430 &times; &radic;(polysyllabic words &times; 30 / sentences) + 3.1291, from McLaughlin 1969; the CDC records that it predicts grade-level difficulty within 1.5 grades in 68% of passages. Syllables are counted by an approximation here, as they are in every implementation of these formulas. <b>On targets:</b> the AHRQ Health Literacy Universal Precautions Toolkit is the only current federal source that names a grade, and it says that to ensure wide understanding it is best for materials to be written at the <b>5th or 6th grade level</b>, noting that the average adult reads at 8th to 9th grade and about a fifth of adults read at 5th grade or below. The <b>CDC does not currently state a grade-level target</b> and the <b>NIH explicitly declines to set one</b>, saying the most important consideration is whether the document communicates clearly &mdash; so any page attributing a grade number to either is attributing something they did not say. <b>PEMAT is a separate instrument</b>, published by AHRQ, scoring understandability and actionability rather than readability, and AHRQ sets no pass mark for it: the widely quoted 70% threshold is a convention from the secondary literature, not a standard. And the CDC’s own caution is worth repeating: readability formulas should be used only alongside other means of assessing whether material works, and pretesting with real members of the audience is the most reliable evaluation there is.</p>'
      );
    });
  };


  /* ════ Physician writing · 09 · Service router ═════════════════════════
     Ten pages is too many to choose between from a list. This routes from
     what the clinician actually has in front of them to the one service
     that handles it, with the price, the cap and the turnaround. */
  TOOLS.svc = function(r){ wire(r, function(){
    const have = seg(r,'have'),
          n    = Math.max(1, num(r,'n',1)),
          wks  = Math.max(1, num(r,'wks',6)),
          sub  = chk(r,'sub'),
          stat = chk(r,'stat');

    let S;
    if(have==='patient'){
      S = (n>=10)
        ? ['Physician manuscripts','/services/physician-writing-services/physician-manuscripts/',
           'From $320','up to 3,000 words','7–10 business days',
           'Ten or more patients from a defined population is a study with a denominator, not a series — and writing it as a series throws the denominator away. The manuscript page has a router that settles the article type from your data before anything is drafted.']
        : ['Case report writing','/services/physician-writing-services/case-report/',
           'From $210','up to 1,000 words · 5–7 references','5–7 business days',
           'One patient, or a handful. Written to CARE, with SCARE 2023 alongside where the substance is an operation. Check the consent position first — it is the one thing that cannot be repaired after submission, and the screener on that page asks about it before anything else.'];
    } else if(have==='data'){
      S = ['Physician manuscripts','/services/physician-writing-services/physician-manuscripts/',
           'From $320','up to 3,000 words','7–10 business days',
           'The first question is what kind of paper your data makes, because that decides the reporting guideline, the length and which journals will consider it. The router on that page answers it in six questions, and it is free.'];
    } else if(have==='idea'){
      S = ['Research proposal and ethics set','/services/physician-writing-services/research-proposal/',
           'From $450','25–30 pages · 1 site','10–12 business days',
           'A protocol is one document; an ethics submission is a folder of nine or eleven. The builder on that page assembles the set for your study and your jurisdiction, and tells you whether your committee date is realistic — which is frequently the most useful answer.'];
    } else if(have==='question'){
      S = ['Clinical literature review','/services/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/',
           'From $340','up to 30 sources · 2 databases','7–10 business days',
           'Which review your question supports is the decision that sets the cost, and the gap between a scoping review and a systematic review is a factor of three. The chooser on that page settles it from the question and the time you have.'];
    } else if(have==='refs'){
      S = ['Literature search and citation','/services/physician-writing-services/literature-search-and-citation/',
           'From $90','1 database · up to 25 references','3–4 business days',
           'The search built in each database’s own vocabulary rather than pasted between them, tested against papers you already have, and saved so it can be re-run. Plus citations verified against source rather than matched to the sentence.'];
    } else if(have==='draft'){
      S = sub
        ? ['Physician manuscripts','/services/physician-writing-services/physician-manuscripts/',
           'From $320','up to 3,000 words','7–10 business days',
           'Send the reviewer comments with the draft. They are the most valuable thing you can give us and the thing authors most often withhold — and a resubmission that does not visibly answer them tends to collect the same criticism from a different reviewer, because specialty reviewer pools are small.']
        : ['Physician manuscripts','/services/physician-writing-services/physician-manuscripts/',
           'From $320','up to 3,000 words','7–10 business days',
           'Most drafts need structure rather than language: the methods are thin because they lost the word-limit fight to the introduction, the discussion reviews the field instead of arguing the finding, and the claims are written in the grammar of an experiment for an observational design. None of that is proofreading.'];
    } else if(have==='teach'){
      S = ['Physician training content','/services/physician-writing-services/physician-training/',
           'From $640','1 deck to 20 slides · 1 case','7–10 business days',
           'We develop the content; an accredited provider certifies the activity and designates the credit. The route map on that page tells you which accreditation route is actually open to you — and for industry in Europe the honest answer is frequently that it is not.'];
    } else if(have==='leaflet'){
      S = ['Patient education content','/services/patient-education-content/',
           'From $190','1 piece to 500 words · 1 language','3–5 business days',
           'Written to a stated reading grade — AHRQ recommends 5 to 6 — and measured with SMOG and Flesch–Kincaid rather than asserted to be plain. Grade your existing leaflet on that page first; for most departments the honest recommendation is an audit rather than new material.'];
    } else {
      S = ['Customized writing','/services/physician-writing-services/customized-writing/',
           'From $180','up to 1,200 words','4–7 business days',
           'For everything without a page of its own: a board paper, a talk, a white paper, a rebuttal, a medico-legal report, a note to referrers. The register is settled from who reads it and what they do next, which is most of the brief.'];
    }

    const tat = parseInt(S[4],10);
    const days = wks*5;
    let fitK, fitT;
    if(days >= tat*2){ fitK='ok'; fitT='Comfortable. '+wks+' weeks against a '+S[4].replace(' business days','')+'-day turnaround leaves room for your own review, which is the stage that always takes longer than people plan for.'; }
    else if(days >= tat*1.25){ fitK='mid'; fitT='Workable. '+wks+' weeks against a '+S[4].replace(' business days','')+'-day turnaround, with enough margin for one revision round but not for a change of direction.'; }
    else { fitK='no'; fitT='Tight. '+wks+' weeks against a '+S[4].replace(' business days','')+'-day turnaround leaves almost nothing for your own review or a revision. Expedited delivery exists where capacity allows and is quoted on capacity rather than on urgency — we will not charge more for the same work because your date is close, and we will tell you when a date is not achievable rather than taking the fee.'; }

    const also=[];
    if(stat) also.push(['Biostatistics and programming','/services/research-services/biostatistics-and-statistical-programming-services/','The analysis matched to the design rather than to habit, with the assumptions checked and the code returned. Quoted inside the writing package where the paper needs it, and offered on its own where it does not.']);
    if(have==='patient'||have==='data'||have==='draft') also.push(['Journal selection','/services/publication-support/journal-selection/','Which journals publish this design at this size, argued from what each has recently published rather than from an impact factor.']);
    if(have==='idea') also.push(['Grant writing','/services/research-services/grant-writing/','The competitive document a funder scores, which is a different thing from the protocol and is written to their criteria in their order and weight.']);
    if(have==='question'||have==='refs') also.push(['Systematic review writing','/services/research-services/systematic-review/','Protocol registration through to the summary of findings, where the review is itself the research output.']);

    out(r,
      '<div class="tout__hd"><b>'+esc(S[0])+'</b><span>'+esc(S[2])+' · '+esc(S[4])+'</span></div>'+
      '<div class="trow trow--txt"><b>What it costs</b><span><b style="color:var(--ink)">'+esc(S[2])+'</b> &mdash; '+esc(S[3])+'. Every price on this site carries the cap that makes &ldquo;from&rdquo; mean something.</span></div>'+
      '<div class="trow trow--txt"><b>How long</b><span>'+esc(S[4])+' from the brief being agreed.</span></div>'+
      '<div class="trow trow--txt"><b>Why this one</b><span>'+S[5]+'</span></div>'+
      '<div class="tverd"><p><b>Your timeline.</b> <span class="tflag tflag--'+fitK+'">'+(fitK==='ok'?'Comfortable':fitK==='mid'?'Workable':'Tight')+'</span> '+fitT+'</p></div>'+
      '<p class="tsub">Go here</p>'+
      '<div class="trow trow--txt"><b>'+esc(S[0])+'</b><span><a class="tlink" href="'+S[1]+'" data-nav>Open that page</a> for the process, the packages, the sample work and a tool built for that service specifically.</span></div>'+
      (also.length ? '<p class="tsub">Frequently bought alongside it</p>' + also.map(function(a){
        return '<div class="trow trow--txt"><b>'+esc(a[0])+'</b><span>'+a[2]+' <a class="tlink" href="'+a[1]+'" data-nav>See that page</a>.</span></div>'; }).join('') : '')+
      '<p class="tmeth"><b>What this does and does not do.</b> It routes from what you have to the service that handles it, with the published price and the scope cap beside it. It does not quote: a quote needs the design, the field, the target journal and the word count, and it comes back within two business days with a subject expert&rsquo;s read attached at no cost. Prices on this site are floors with their caps printed, benchmarked on 21 September 2026 against whatever competitors actually publish &mdash; which in several of these categories is nothing at all, and we say so on the page rather than implying a comparison that does not exist. <b>Turnaround runs from the brief being agreed</b>, not from the enquiry, and the difference is usually the two or three days it takes to settle what the deliverable actually is.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 01 · Submission document set ══════
     Built because the live page attributed PSURs and DSURs to ICH E2E,
     which is Pharmacovigilance Planning and governs neither. Every
     document below carries the guideline that actually governs it. */
  TOOLS.rgs = function(r){ wire(r, function(){
    const prod  = seg(r,'prod'),
          stage = seg(r,'stage'),
          reg   = str(r,'reg'),
          paed  = chk(r,'paed'),
          orph  = chk(r,'orph'),
          euct  = chk(r,'euct'),
          pv    = chk(r,'pv');

    const dev = (prod==='dev'||prod==='ivd'||prod==='samd');
    const D = [];   /* [document, governing instrument, note] */

    if(!dev){
      if(stage==='fih'){
        D.push(['Investigator’s Brochure','ICH E6(R3)','The Principles and Annex 1 were adopted by ICH and the CHMP on 23 July 2025 and replace E6(R2). Annex 2, covering pragmatic and decentralised designs, applies in the EU from 15 January 2027.']);
        D.push(['Clinical trial protocol','ICH M11 (CeSHarP), with E6(R3)','M11 was adopted on 19 November 2025 and published on 5 May 2026. It is a guideline, a template and a technical specification rather than a single document, and it changes how protocols are structured — worth adopting now rather than at the next revision.']);
        D.push(['Informed consent form','E6(R3); locally, the governing ethics framework','Written to the committee’s own format and at the reading level they specify. The investigator holds responsibility for the consent process; we draft the document.']);
        D.push([reg==='fda'?'IND application, Module 1 and the clinical sections':'Investigational Medicinal Product Dossier (IMPD)','ICH M4(R4) for the CTD structure','Module 1 is regional and is the part that differs most between agencies. Modules 2 to 5 are common.']);
        D.push(['Nonclinical written and tabulated summaries','ICH M4S(R2)','Module 2.6. Frequently the last thing written and the first thing a reviewer reads.']);
      } else if(stage==='late'){
        D.push(['Clinical study report','ICH E3 (1995), with its Q&A','E3 has never been revised. It is old, it is still the standard, and reviewers still expect its structure.']);
        D.push(['Statistical analysis plan','ICH E9, with E9(R1) on estimands','The 2019 estimands addendum is the part most SAPs still do not address properly, and it is the part a statistical reviewer will ask about.']);
        D.push(['Patient narratives and case listings','ICH E3 § 12.3','Written from the source data rather than summarised from the tables, which is the difference between a narrative that answers a query and one that generates three more.']);
        D.push(['Development Safety Update Report','ICH E2F','Not E2E. E2F is the DSUR guideline; E2E is Pharmacovigilance Planning and governs the safety specification and the pharmacovigilance plan, not any periodic report.']);
      } else if(stage==='maa'){
        D.push(['CTD Modules 2 to 5','ICH M4(R4)','Module 2 summaries and overviews, Module 3 quality, Module 4 nonclinical, Module 5 clinical. Module 1 is regional.']);
        D.push([reg==='fda'?'NDA or BLA':'Marketing Authorisation Application','Regional; CTD structure per ICH M4(R4)','']);
        D.push(['Clinical Overview and Clinical Summary','ICH M4E(R2)','Module 2.5 and 2.7. The Clinical Overview is the document that actually argues the benefit-risk case, and it is routinely written as a summary instead.']);
        D.push(['Risk Management Plan','EU GVP Module V for the EU RMP; REMS where the FDA requires one','A US REMS and an EU RMP are different instruments with different triggers, and one does not convert into the other.']);
      } else {
        D.push(['Periodic Benefit-Risk Evaluation Report (PBRER)','ICH E2C(R2)','This is the guideline that governs what most people still call a PSUR. Not E2E.']);
        D.push(['Post-approval individual case safety reports','ICH E2D(R1)','E2D(R1) reached Step 4 in September 2025 and applies in the EU from 18 March 2026, replacing the 2003 version. It adds definitions for digital platforms, social media, patient support programmes and market research programmes — which is where a great many reports now originate.']);
        D.push(['Variations, renewals and labelling changes','Regional procedures; SmPC and PIL to the agency template','']);
        D.push(['Expedited safety reporting','ICH E2A; transmitted per E2B(R3)','']);
      }
      if(pv) D.push(['Safety specification and pharmacovigilance plan','ICH E2E','This is what E2E is for. It is a planning document prepared principally for the early post-marketing period, and it is not a periodic report.']);
      if(paed) D.push(['Paediatric Investigation Plan or paediatric study plan','EU Regulation (EC) No 1901/2006; in the US, PREA and BPCA','Prepared early. A PIP agreed late is a PIP that constrains a development programme already running.']);
      if(orph) D.push(['Orphan designation application','EU Regulation (EC) No 141/2000; US Orphan Drug Act','The prevalence argument and the significant-benefit argument are the two sections that decide it, and both are literature-heavy.']);
    } else {
      const ivd = prod==='ivd', sw = prod==='samd';
      D.push([ivd?'Performance Evaluation Report (PER)':'Clinical Evaluation Report (CER)',
        ivd?'IVDR Annex XIII':'MDR Annex XIV, with MDCG 2020-6, 2020-5 and 2020-13',
        'On MEDDEV 2.7/1 rev 4: it was written under the Directives and has not been formally withdrawn, but it is not listed as current MDR guidance. MDCG 2020-6 Appendix I identifies the parts of it that remain relevant under the MDR, and that is the honest way to cite it.']);
      D.push(['Clinical investigation plan and report','ISO 14155:2026','The 2026 fourth edition. ISO 14155:2020 was withdrawn on 23 March 2026, so a plan citing the 2020 edition as current is six months out of date.']);
      D.push(['Risk management file','ISO 14971:2019','Third edition, confirmed current in the March 2025 systematic review. Unchanged, unlike the two standards above it.']);
      D.push(['Instructions for use and labelling','ISO 20417:2026','Second edition, published 17 March 2026, replacing ISO 20417:2021. Another one that changed this year.']);
      D.push(['Post-market surveillance plan and report','MDR Articles 83 to 86; MDCG 2020-7 and 2020-8 for PMCF','PMS is a continuing obligation rather than a document. The plan is written once; the reports recur, and a clinical evaluation is updated rather than finished.']);
      if(sw) D.push(['Software clinical evaluation','MDCG 2020-1, with IEC 62304 for the software lifecycle','MDCG 2020-1 is the guidance that actually addresses clinical evaluation of medical device software, and it is routinely omitted from device CERs that happen to contain software.']);
      if(sw) D.push(['Algorithm performance and validation summaries','No single harmonised standard yet','Written to the agency’s current expectations rather than to a standard, which means the position has to be checked at the time of writing rather than inherited from the last submission.']);
      D.push([reg==='fda'?'510(k) or De Novo submission':'Technical documentation for CE marking','MDR Annexes II and III; FDA guidance for the US route','']);
    }

    if(euct) D.push(['Lay summary of trial results','EU CTR 536/2014, Article 37(4) and Annex V; Good Lay Summary Practice','Due within 12 months of the end of the trial in all member states concerned, and within 6 months where the trial includes paediatric participants. Submitted through CTIS, which has been the sole route since 31 January 2023.']);

    /* ── turnaround, from the bands the live page published ─────────────*/
    let tat, tnote;
    if(stage==='maa'){ tat='25+ business days'; tnote='Complex dossiers, multi-module CTDs and full technical files.'; }
    else if(stage==='late'){ tat='15–25 business days'; tnote='Full clinical study reports.'; }
    else if(stage==='post'){ tat='15–25 business days'; tnote='Periodic reports and lifecycle documentation. A PBRER is not a short summary.'; }
    else if(dev){ tat='15–25 business days'; tnote='Clinical and performance evaluation, with the literature search inside the figure.'; }
    else { tat='7–10 business days'; tnote='Short regulatory summaries and single documents.'; }

    /* ── eCTD position, which is region-specific and widely misreported ─*/
    const ECTD = {
      fda: ['FDA','Accepting eCTD v4.0 for new applications since 16 September 2024. It is not mandatory, forward compatibility for existing v3.2.2 applications is not yet available, and the FDA has announced no date on which v4.0 becomes the only accepted version.'],
      ema: ['EMA','Optional for new centrally authorised marketing authorisation applications since 22 December 2025. Strongly recommended from Q1 2027 and mandatory for new CAP MAAs from Q1 2028. EU eCTD v4.0 validation criteria v1.1 applied from 15 July 2026.'],
      mhra:['MHRA','Submissions continue in eCTD v3.2.2. Check the agency’s current position before planning a v4.0 submission.'],
      pmda:['PMDA','Japan accepts eCTD v4.0, and the implementation guide for Japan is at v1.6.0 dated 10 March 2025. <b>PMDA has published no mandatory transition deadline.</b> Claims of a 2026 Japanese mandate circulate widely in consultancy material and we could not verify one from PMDA’s own publications — so we do not repeat it.'],
      hc:  ['Health Canada','eCTD v4.0 is not implemented. The Canadian Module 1 technical implementation guide for v4 remains in draft, and Health Canada states it will be revised once a decision to implement is confirmed. No date is set.'],
      tga: ['TGA','Submissions continue in eCTD v3.2.2 under the Australian Module 1 specification.'],
      multi:['More than one agency','Module 1 is regional and is where the work multiplies; Modules 2 to 5 are common. Plan the regional modules as separate deliverables rather than as a formatting pass on one dossier.']
    };
    const ec = ECTD[reg] || ECTD.multi;

    out(r,
      '<div class="tout__hd"><b>'+D.length+' documents in this set</b><span>'+esc(tat)+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Document</b><span>What actually governs it</span></div>'+
      D.map(function(d){
        return '<div class="trow trow--txt"><b>'+esc(d[0])+'</b><span><b style="color:var(--ink)">'+d[1]+'</b>'+(d[2]?'<br>'+d[2]:'')+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>Turnaround: '+esc(tat)+'.</b> '+tnote+' These are the bands we work to and they have not changed &mdash; short regulatory summaries 7 to 10 business days, full clinical study reports 15 to 25, complex dossiers and multi-module CTDs 25 or more. Expedited delivery is available where capacity allows and is quoted on capacity rather than on urgency.</p></div>'+
      '<p class="tsub">Submission format in your region</p>'+
      '<div class="trow trow--txt"><b>'+esc(ec[0])+'</b><span>'+ec[1]+'</span></div>'+
      '<p class="tmeth"><b>Sources, and one correction.</b> ICH is the <b>International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use</b> — renamed from &ldquo;Conference&rdquo; on 23 October 2015. Guidelines published before then carry the old name on their face and should be cited as printed. Governing instruments above are as published at database.ich.org, on the European Commission’s MDCG index and at iso.org. <b>The correction:</b> &ldquo;compliance with GVP and ICH E2E guidelines&rdquo; gets attached to packages containing PSURs and DSURs. E2E is Pharmacovigilance Planning; PBRERs are governed by E2C(R2) and DSURs by E2F. It is a small citation and exactly the kind a regulatory affairs reader notices immediately. <b>This is a planning aid, not regulatory advice</b> — your regulatory strategy, your agency interactions and your submission decisions are yours, and requirements differ by region and by product.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 02 · Desk-rejection gate check ═════
     Built against Bordage (Acad Med 2001;76:889-96), whose content analysis
     of 1,053 reviewer comments found language ranked fifth as a single
     reason and ninth as a category. The live page said we would "eliminate
     rejections due to language, formatting and scientific presentation
     issues". The evidence says language is rarely the binding constraint,
     so the tool checks the gates in the order they actually bind. */
  TOOLS.dsk = function(r){ wire(r, function(){
    const type  = seg(r,'type'),
          dsgn  = seg(r,'dsgn'),
          stage = str(r,'stage'),
          pub   = str(r,'pub'),
          reg   = chk(r,'reg'),
          rchk  = chk(r,'rchk'),
          eth   = chk(r,'eth'),
          cred  = chk(r,'cred'),
          coi   = chk(r,'coi'),
          das   = chk(r,'das'),
          ai    = chk(r,'ai'),
          eal   = chk(r,'eal');

    /* ── the reporting guideline that actually governs this design ──────
       Versions confirmed at equator-network.org and each guideline's own
       site on 21 September 2026. */
    const G = {
      rct:  ['CONSORT 2025','Published April 2025 in the <i>BMJ</i>, <i>JAMA</i>, <i>The Lancet</i>, <i>Nature Medicine</i> and <i>PLOS Medicine</i>. Thirty items and a flow diagram: seven new, three revised, one deleted. It says of its predecessor that CONSORT 2010 &ldquo;should no longer be used&rdquo;. The extensions &mdash; CONSORT-AI, CONSORT-Outcomes and the rest &mdash; have <b>not</b> yet been realigned, and the 2025 statement tells you to keep using the existing extension in the meantime.'],
      obs:  ['STROBE (2007)','Still the current version. There is no STROBE 2025 or 2026, whatever a template may imply, and the initiative describes revision as an ongoing intention rather than a published document. Note that the widely quoted &ldquo;22 items&rdquo; is not stated on strobe-statement.org itself, so we cite the statement rather than the count.'],
      dx:   ['STARD 2015','Published October 2015, replacing the 2003 statement. Extensions exist for abstracts, for dementia studies, for Bayesian latent class models and, since 2025, for AI-based diagnostic tests.'],
      pred: ['TRIPOD+AI (2024)','Published in the <i>BMJ</i> in 2024 and now the current TRIPOD statement, covering regression and machine-learning prediction models together. One live caveat from EQUATOR: the TRIPOD+AI explanation and elaboration paper is not out yet, so the 2015 E&amp;E remains the document to work from for the detail.'],
      anim: ['ARRIVE 2.0 (2020)','Current. Twenty-one items in two sets: the <b>Essential 10</b>, described as the basic minimum for any manuscript reporting animal research, and a Recommended Set of eleven more. Journals increasingly check the Essential 10 at submission rather than at review.'],
      qual: ['COREQ (2007) or SRQR (2014)','COREQ is a 32-item checklist for interviews and focus groups; SRQR is the broader qualitative standard from <i>Academic Medicine</i> in 2014. Journals differ on which they ask for, and some ask for neither &mdash; check the instructions to authors rather than assuming.'],
      econ: ['CHEERS 2022','The ISPOR task force update, superseding CHEERS 2013. Extensions exist for value-of-information analyses and for AI.'],
      sr:   ['PRISMA 2020','Still current: there is no PRISMA 2025 or 2026. One detail worth getting right, because reviewers notice it &mdash; PRISMA <i>2020</i> was <b>published in 2021</b>, in <i>PLOS Medicine</i> and four other journals. For the protocol, PRISMA-P (2015) has not been superseded. PRISMA-ScR and PRISMA-IPD are both listed as under revision.'],
      none: ['No single design-specific guideline','Which does not mean none applies. The EQUATOR Network indexes several hundred; the honest step is to search it for your design before drafting rather than to write first and retrofit a checklist afterwards.']
    };
    const g = G[dsgn] || G.none;

    /* case reports and theses have their own governing document */
    const isCase = (type==='case'), isThesis = (type==='thesis'), isAbs = (type==='abs');

    /* ── the gates, in the order they actually bind ─────────────────────
       cls: 'has' = cleared, 'mid' = check this, 'gap' = will stop you */
    const gates = [];

    /* 1 — scope */
    gates.push(['Scope and fit', 'mid',
      'The first gate and the one nothing on the manuscript fixes. In the only published study of desk-rejection reasons we could find &mdash; Wu and colleagues in <i>Communications in Transportation Research</i>, 2024 &mdash; <b>55% of desk rejections were attributed to topic and scope</b>, and the same authors warn that decision letters often do not give the real reason. Read three recent issues of the target journal before writing the cover letter, not after the rejection.']);

    /* 2 — ethics and registration */
    let eGap = !eth || (!reg && (dsgn==='rct'||dsgn==='sr'));
    gates.push(['Ethics, consent and registration', eGap?'gap':'has',
      (eth?'':'<b>No ethics approval statement.</b> Most journals screen for this before anything else, and a missing statement on human or animal work is a desk rejection rather than a query. ')+
      (dsgn==='rct'&&!reg?'<b>An unregistered trial is the hardest gate on this list.</b> The ICMJE requires prospective registration in a public registry before the first participant is enrolled as a condition of consideration, and registration after the fact does not cure it. ':'')+
      (dsgn==='sr'&&!reg?'<b>An unregistered review.</b> PROSPERO registration is not universally mandatory, but an unregistered systematic review invites the question of whether the protocol followed the results. ':'')+
      (isCase?'For a case report, written informed consent from the patient for publication is the gate, and journals ask to see the statement. ':'')+
      (eGap?'':'Approval statement present and registration in place. This is the gate that is cheapest to clear and most expensive to miss.')]);

    /* 3 — reporting completeness */
    gates.push(['Reporting completeness', rchk?'has':'gap',
      '<b>'+g[0]+'.</b> '+g[1]+(rchk?' Checklist completed and mapped to page and line numbers, which is what journals increasingly ask for rather than a ticked box.':' <b>No completed checklist.</b> A great many journals now require one at submission and screen against it before review, so this is a gate rather than a nicety. Completing it late also tends to expose a genuine reporting gap at the worst possible moment.')]);

    /* 4 — statistics and interpretation */
    gates.push(['Statistics and interpretation', 'mid',
      'The heaviest gate in the evidence, and the one least often addressed by an editing service. In Bordage&rsquo;s content analysis of 1,053 reviewer comments on 151 manuscripts, the top four reasons for rejection were <b>inappropriate or incomplete statistics (11.2%)</b>, <b>overinterpretation of results (8.7%)</b>, <b>inappropriate instrumentation (7.3%)</b> and <b>a sample too small or biased (5.6%)</b>. None of those is a writing problem, and none is fixed by a language edit. Two of them &mdash; overinterpretation and incomplete reporting of the analysis &mdash; are fixed at the writing stage, by stating what the data support rather than what the discussion wants.']);

    /* 5 — transparency */
    const tGap = (!cred?1:0)+(!coi?1:0)+(!das?1:0);
    gates.push(['Authorship, interests and data', tGap>1?'gap':(tGap?'mid':'has'),
      (!cred?'<b>Contributions not recorded.</b> The ICMJE’s four authorship criteria must all be met by every author, and &ldquo;writing assistance, technical editing, language editing, and proofreading&rdquo; do not confer authorship on anyone &mdash; they are acknowledged. CRediT, which is ANSI/NISO Z39.104-2022 and has fourteen roles, is the taxonomy most journals now use. ':'')+
      (!coi?'<b>Competing interests not declared.</b> Including the ones that feel too small to mention, which are the ones that surface later. ':'')+
      (!das?'<b>No data availability statement.</b> The January 2026 ICMJE update added a new section on authors&rsquo; access to data: all authors should be able to review the data supporting the results, and with sponsored research that access should be written into the research agreement. ':'')+
      (tGap?'':'All three present. This is also the section where a paper-mill screen looks first, which is a reason to get it right even when it feels like paperwork.')]);

    /* 6 — language */
    gates.push(['Language and presentation', eal?'mid':'has',
      eal
        ? 'Real, measurable, and smaller than the market implies. Amano and colleagues surveyed 908 environmental scientists across eight nationalities (<i>PLOS Biology</i>, 2023): <b>38.1%</b> of moderate-proficiency and <b>35.9%</b> of low-proficiency non-native English speakers reported having a paper rejected because of English writing, against <b>14.4%</b> of native speakers &mdash; a rate 2.5 to 2.6 times higher. The revision burden is starker: <b>42.5%</b> of non-native speakers are often or always asked to improve their English during revision, against <b>3.4%</b> of native speakers. Two things follow. Language editing is genuinely worth buying if this is you. And it addresses about a third of non-native-speaker rejections, not all of them &mdash; because native speakers get rejected for language too.'
        : 'Ranked fifth as a single reason in Bordage&rsquo;s analysis (&ldquo;text difficult to follow&rdquo;, 3.9% of comments) and ninth of ten as a category (9%). Worth clearing, and not worth buying a service for on its own if the first five gates are not clear.']);

    if(isThesis) gates.push(['Your institution&rsquo;s regulations', 'mid',
      'Which outrank every guideline above. Word limits, chapter structure, the declaration, the format of the reference list and the similarity threshold are set by your department, and they differ between departments in the same university. Send us the handbook and we work to it; where it conflicts with a journal style, the handbook wins for the thesis and the journal wins for the papers that come out of it.']);
    if(isAbs) gates.push(['The abstract-specific checklist', 'mid',
      'CONSORT for Abstracts and PRISMA for Abstracts are separate documents from their parent statements, and conference committees increasingly screen against them. A structured abstract that omits the primary outcome or the effect size with its interval is the commonest avoidable rejection at this stage.']);

    /* ── AI disclosure, which differs materially by publisher ───────────*/
    const AI = {
      els: ['Elsevier','Updated June 2026. A <b>separate AI declaration statement</b> in the manuscript at submission, under the heading &ldquo;Declaration of generative AI and AI-assisted technologies in the manuscript preparation process&rdquo;, which is then published with the article. Basic grammar and spelling checking is <b>exempt</b>; substantive text generation is not. Generating sections without genuine author contribution, and altering images that represent primary research data, are prohibited outright.'],
      spr: ['Springer Nature','A risk-tiered model rather than a single rule. <b>Green</b> covers language refinement, structural suggestions and data cleaning. <b>Amber</b> covers extensive editing and suggesting analytical approaches, permitted with human oversight and disclosure. <b>Red</b> covers replacing human judgement and fabricating data, and is not permitted. The governing principle is that accountability for content and for editorial decisions cannot be delegated to an AI system. The location of the disclosure is not mandated.'],
      wil: ['Wiley','Version July 2026. Disclosure at submission of all AI technology used, its purpose, whether it influenced key arguments or conclusions, and how the author personally reviewed and verified the output. Tools used <b>solely</b> for spelling, grammar and general editing are explicitly <b>outside</b> the disclosure requirement.'],
      tnf: ['Taylor &amp; Francis','The strictest of the four on detail and the only one with <b>no stated exemption for spelling and grammar tools</b>. Authors must acknowledge any use of generative AI with the tool&rsquo;s <b>full name, version number, how it was used and why</b> &mdash; in a disclosure statement for journal articles, and in the preface or introduction for books.'],
      oth: ['Your target journal','The four largest publishers differ materially on two points: whether spelling and grammar tools are exempt, and where the disclosure goes. Elsevier and Wiley exempt basic language tools; Taylor &amp; Francis does not. Read the instructions to authors rather than assuming a common standard, because there is not one. What is universal across all of them: <b>an AI system cannot be an author</b>, because it cannot take responsibility for the work.']
    };
    const a = AI[pub] || AI.oth;

    /* ── what we would actually do ──────────────────────────────────────*/
    let route, rword;
    if(stage==='desk'){
      route = 'Diagnosis before drafting';
      rword = 'A desk rejection is information, and it is usually about gate one or gate three rather than about your prose. The first thing worth buying is an hour of somebody reading the manuscript against the journal&rsquo;s scope and the reporting checklist &mdash; not an edit. If the answer is scope, the fix is a different journal and a rewritten cover letter, and no amount of editing substitutes for it.';
    } else if(stage==='rev'){
      route = 'Response to reviewers, then the manuscript';
      rword = 'A rejection after review means the gates above were cleared and the science was engaged with, which is a much better position than it feels like. The work is the point-by-point response: every comment answered, the changes shown, and the disagreements argued rather than conceded. That is a different service from editing and it is <a class="tlink" href="#/response-to-reviewers" data-nav>priced separately</a>.';
    } else if(stage==='maj'){
      route = 'Revision, with the response letter written first';
      rword = 'Write the response letter before the revisions. It forces you to decide what you are actually conceding, and it stops the manuscript drifting into a shape that answers one reviewer and contradicts another &mdash; which is the commonest way a major revision becomes a rejection.';
    } else if(stage==='draft'){
      route = 'Structure first, prose second';
      rword = 'Drafting is the cheapest point at which to fix any of this. Map the reporting checklist onto the section structure before writing, decide what the data will support before writing the discussion, and the manuscript that results needs an edit rather than a rescue.';
    } else {
      route = 'Pre-submission readiness check';
      rword = 'Complete and unsubmitted is the right moment. The readiness check reads the manuscript against the journal&rsquo;s scope, the reporting checklist and the transparency requirements, and tells you which gate would stop it &mdash; before an editor does, and while changing it is still cheap.';
    }

    const cleared = gates.filter(function(x){ return x[1]==='has'; }).length;

    out(r,
      '<div class="tout__hd"><b>'+cleared+' of '+gates.length+' gates clear</b><span>'+esc(route)+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Gate</b><span>What it is, and what the evidence says about it</span></div>'+
      gates.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>'+esc(route)+'.</b> '+rword+'</p></div>'+
      '<p class="tsub">Declaring AI use, which is not the same rule everywhere</p>'+
      '<div class="trow trow--txt"><b>'+a[0]+'</b><span>'+a[1]+(ai?' <b>You have told us AI was used in drafting.</b> We will draft the declaration with you, in the form this publisher asks for, and it goes in the manuscript rather than being decided at proof stage.':'')+'</span></div>'+
      '<p class="tmeth"><b>Sources, and a correction.</b> Rejection reasons: Bordage G, &ldquo;Reasons reviewers reject and accept manuscripts&rdquo;, <i>Academic Medicine</i> 2001;76(9):889&ndash;896 &mdash; a content analysis of 1,053 reviewer comments on 151 manuscripts. Desk-rejection reasons: Wu J et al., <i>Communications in Transportation Research</i> 2024;4:100129. Language: Amano T et al., &ldquo;The manifold costs of being a non-native English speaker in science&rdquo;, <i>PLOS Biology</i> 2023;21(7):e3002184. Guideline versions from equator-network.org and each guideline&rsquo;s own site; authorship and AI provisions from the ICMJE Recommendations PDF dated January 2026 &mdash; note that icmje.org&rsquo;s HTML pages still showed the January 2024 text when we checked, so cite the PDF. Publisher AI policies read on the publishers&rsquo; own sites. All checked 21 September 2026. <b>The correction:</b> editing is sold as a way to &ldquo;eliminate rejections due to language, formatting and scientific presentation issues&rdquo;. No service can eliminate a rejection, and the evidence above says language is not usually why papers are rejected. You will not find that claim here. <b>There is no reliable published figure for how many submissions are desk-rejected</b> &mdash; PLOS, the most transparent publisher on editorial metrics, publishes acceptance rates and decision times and does not publish a desk-rejection rate. The confident percentages circulating on this question trace back to unsourced content, not to data, so we do not quote one.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 03 · Editing level chooser ════════
     Built because "editing" is sold as one thing and is five. Level names
     follow the three published taxonomies, which do not agree with each
     other — EFA, Chicago 2.48-2.50, and Editors Canada PES 2024. The
     second half corrects the live page's "Plagiarism Check & Reduction",
     which is not what a similarity report measures. */
  TOOLS.edl = function(r){ wire(r, function(){
    const doc   = seg(r,'doc'),
          stage = str(r,'stage'),
          who   = str(r,'who'),
          wc    = Math.max(200, num(r,'wc',5000));

    const st = chk(r,'st'),   /* structure and argument */
          sn = chk(r,'sn'),   /* sentences hard to follow */
          gr = chk(r,'gr'),   /* grammar, spelling, usage */
          tm = chk(r,'tm'),   /* inconsistent terminology */
          rf = chk(r,'rf'),   /* references */
          fm = chk(r,'fm'),   /* journal formatting */
          fg = chk(r,'fg'),   /* figures and tables */
          sim= chk(r,'sim'),  /* similarity worry */
          aid= chk(r,'aid');  /* AI-detection worry */

    /* ── pick the level ────────────────────────────────────────────────*/
    let lvl;
    if(st && (sn||stage==='first')) lvl='dev';
    else if(st) lvl='sub';
    else if(sn) lvl='line';
    else if(gr||tm||rf||fm||fg) lvl='copy';
    else lvl='proof';
    /* a set of proofs is past the point where anything structural is
       worth doing, whatever the author ticked */
    if(stage==='proofs') lvl='proof';

    const L = {
      proof: {
        n:'Proofreading',
        rate:0.025, min:110, days:[2,4],
        efa:'Proofreading &mdash; and note the EFA defines it comparatively: checking the latest stage of a project against the previous one, which is narrower than &ldquo;a last read for typos&rdquo;.',
        cms:'Outside Chicago&rsquo;s manuscript-editing scheme, which covers mechanical and substantive editing (2.48&ndash;2.50). Proofreading happens after that, on proofs.',
        ecn:'Part E, Standards for Proofreading.',
        does:'Typographical errors, spelling, spacing, running heads, figure and table numbering, and anything introduced by typesetting. On a manuscript rather than a proof, a final consistency read.',
        not:'It does not touch sentences, structure, argument, terminology or references. If a paragraph is hard to follow, proofreading will return it hard to follow and correctly spelled.'
      },
      copy: {
        n:'Copyediting',
        rate:0.035, min:160, days:[3,6],
        efa:'Copyediting &mdash; spelling, grammar, usage and punctuation, cross-references checked, and a style sheet prepared.',
        cms:'Mechanical editing, Chicago 2.49. The style-sheet discipline is the part most services skip and the part that makes terminology consistent.',
        ecn:'Part D, Standards for Copy Editing.',
        does:'Grammar, usage, punctuation, spelling, consistency of terminology and abbreviations, reference styling and completeness, cross-references, journal house style, and the numbering of figures, tables and equations.',
        not:'It does not rewrite sentences for clarity and it does not touch the argument. A copyedit makes a manuscript correct; it does not make it persuasive.'
      },
      line: {
        n:'Line editing',
        rate:0.050, min:240, days:[5,8],
        efa:'Line editing &mdash; work at sentence and paragraph level, on language and style.',
        cms:'Chicago treats line editing as a pass <i>before</i> copyediting (2.53), not as a grander version of it &mdash; a distinction worth knowing when a supplier sells them as a ladder.',
        ecn:'Part C, Standards for Stylistic Editing.',
        does:'Sentence by sentence: clarity, flow, register, paragraph order within a section, redundancy, hedging that hides a finding and overstatement that inflates one. Copyediting is included alongside it here rather than charged twice.',
        not:'It does not reorder sections, rebuild an argument or decide what the paper claims. If the problem is that the discussion argues something the results do not support, this is not the level that fixes it.'
      },
      sub: {
        n:'Substantive editing',
        rate:0.075, min:450, days:[7,12],
        efa:'Between EFA line editing and developmental editing &mdash; the EFA does not name this level, which is part of why buyers cannot compare quotes.',
        cms:'Substantive editing, Chicago 2.50 &mdash; reorganising, cutting and rewriting for clarity, as distinct from mechanical editing at 2.49.',
        ecn:'Parts B and C together: Structural Editing with Stylistic Editing.',
        does:'Section order and balance; whether the introduction narrows to one question; whether the methods describe what was done; whether every number in the text matches its table; whether each claim in the discussion is supported by the result it rests on; and the reporting checklist mapped onto the structure. Line editing and copyediting included.',
        not:'It does not re-analyse your data, and it does not invent a finding. Where the answer is that the study does not support the paper, we say so &mdash; and that is a finding, not a failure of the edit.'
      },
      dev: {
        n:'Developmental editing',
        rate:0.100, min:600, days:[10,15],
        efa:'Developmental editing &mdash; content, organisation and genre.',
        cms:'Chicago treats this as manuscript development preceding manuscript editing; it is not one of the levels at 2.48&ndash;2.50.',
        ecn:'Part B, Standards for Structural Editing.',
        does:'Rebuilding rather than improving: what this paper is, what it argues, what belongs in it and what belongs in a different paper. Usually delivered as a plan you approve before any rewriting, then the rewrite, then the levels below it.',
        not:'It is not ghostwriting and it does not produce a paper you did not write. You approve the plan, the argument stays yours, and our involvement is acknowledged in the manuscript.'
      }
    }[lvl];

    /* ── price ─────────────────────────────────────────────────────────*/
    let price = Math.max(L.min, Math.round(wc*L.rate/10)*10);
    let d0=L.days[0], d1=L.days[1];
    if(wc>15000){ d0+=4; d1+=6; }
    else if(wc>8000){ d0+=2; d1+=3; }
    if(doc==='reg'){ price=Math.round(price*1.35/10)*10; d0+=2; d1+=3; }
    if(doc==='thesis'&&wc>20000){ d1+=5; }

    /* ── what this document type adds ──────────────────────────────────*/
    const DOC = {
      art:  ['Journal manuscript','Edited against the target journal&rsquo;s instructions to authors and the reporting guideline your design requires. Where no journal is chosen yet, we edit to a defensible general standard and reformat later, which is cheaper than editing twice.'],
      thesis:['Thesis or dissertation','<b>Your institution&rsquo;s regulations govern this, not ours.</b> Some universities permit language editing within stated limits, some require a declaration, some prohibit third-party assistance entirely. Send us the handbook before you send us the thesis. Where help is permitted we work inside the limits and give you written confirmation of exactly what was done, so your declaration is accurate.'],
      grant:['Grant application or proposal','Edited against the funder&rsquo;s own assessment criteria and page limits rather than against general good practice. A proposal that reads well and does not answer the criterion is a proposal that scores badly.'],
      reg:  ['Regulatory or clinical document','Priced above the standard rate because the edit includes checking that every standard and guidance document cited is still current, and that claims agree across the document set. Covered properly on our <a class="tlink" href="#/regulatory-writing" data-nav>regulatory writing</a> page.'],
      book: ['Book chapter or report','Edited to the publisher&rsquo;s or organisation&rsquo;s own style guide where one exists, and to a style sheet we build and hand over where one does not.']
    }[doc] || ['Document','Edited to the conventions of its own genre.'];

    /* ── who wrote it changes the emphasis, not the level ──────────────*/
    const WHO = {
      eal: ['Written by authors using English as an additional language','The disadvantage is documented &mdash; 38.1% of non-native speakers report a language-related rejection against 14.4% of native speakers, and 42.5% are routinely asked to improve their English during revision against 3.4% (Amano et al., <i>PLOS Biology</i> 2023). What follows is that language editing is worth buying, and that it is not a substitute for the level above it if the structure is the problem. We edit for clarity in your voice rather than flattening the paper into house prose.'],
      nat: ['Written by native English speakers','Which does not exempt a manuscript from language problems: 14.4% of native speakers also report a rejection on language grounds. Clarity is a skill, not a birthright.'],
      sup: ['Written by another supplier','We will tell you what we find, including where the previous work was sound. Independent QC of somebody else&rsquo;s writing is frequently the cheapest thing you can buy, and it is the only way to find out whether you were overcharged.'],
      tr:  ['Translated into English','Translation edits differently. The commonest problems are calqued structures that are grammatical and unidiomatic, and terminology that is consistent in the source and inconsistent in English. Send the source text as well if you can; it resolves ambiguities faster than guessing.']
    }[who] || ['Authorship','&mdash;'];

    /* ── the honest position on similarity and AI checks ───────────────*/
    let extra = '';
    if(sim) extra +=
      '<div class="trow trow--txt trow--flag trow--mid"><b>You are worried about a similarity score</b><span>'+
      '<b>A similarity score is not a measure of plagiarism, and the tool that produces it says so.</b> Turnitin&rsquo;s own guidance states that &ldquo;plagiarism cannot be determined by the similarity score alone&rdquo; and, more bluntly, that &ldquo;Turnitin does not check for plagiarism in writing&rdquo; &mdash; the number is simply the percentage of text matching other sources, and a correctly quoted and cited passage raises it exactly as a copied one does. Turnitin also states plainly that there is <b>no single acceptable or perfect similarity score</b>. '+
      '<b>There is no published threshold.</b> COPE&rsquo;s position statement says it &ldquo;does not recommend using a specific percentage of duplication or overlap as a benchmark&rdquo;. Elsevier tells its editors that a high score does not necessarily indicate plagiarised text. Springer Nature publishes triage bands for <i>editors</i> &mdash; screen quickly above 10%, check carefully above 20% &mdash; and explicitly says the individual source scores matter more than the overall index. The &ldquo;under 15%&rdquo; figure that circulates in editing-service marketing traces to no publisher, no guideline and no primary source we could find. '+
      '<b>So we do not sell similarity reduction.</b> Rewording a passage to lower a number, without fixing the attribution underneath it, is not a fix &mdash; it is the same failure with different words. What we do is run the report, read every match, and tell you which are properly quoted and cited, which need a citation added, which are your own earlier work and need handling as text recycling under COPE&rsquo;s position of 20 August 2024, and which are a genuine problem you need to resolve before submitting.</span></div>';
    if(aid) extra +=
      '<div class="trow trow--txt trow--flag trow--mid"><b>You are worried about an AI-writing detector</b><span>'+
      '<b>This is the check we are least willing to sell, because the tools are not reliable enough to be worth your money.</b> Liang and colleagues tested seven GPT detectors on TOEFL essays written by humans (<i>Patterns</i>, 2023): the average false-positive rate was <b>61.3%</b>, and <b>19.8%</b> of those human-written essays were called AI-generated by <i>every</i> detector &mdash; while essays by native-English eighth-graders were classified almost perfectly. The mechanism is text perplexity, so the tools penalise writing with less lexical variety, which means they penalise exactly the authors this page is most often bought by. '+
      'Turnitin&rsquo;s own claims have moved a long way from the &ldquo;98% confidence&rdquo; of its April 2023 launch: it now publishes no headline accuracy figure, suppresses scores below 20% entirely, warns that submissions under 300 words are less reliable, and states that an AI writing score &ldquo;should not be used as the sole basis for adverse actions&rdquo;. <b>COPE&rsquo;s September 2025 guidance is the line to hold:</b> detection tools &ldquo;should not be relied upon in isolation&rdquo;, and none is 100% accurate. '+
      'What we will do is help you write an accurate declaration of whatever AI you actually used, in the form your publisher requires &mdash; and the four largest publishers do not require the same form. What we will not do is charge you to launder a manuscript against a detector, or promise you a score.</span></div>';

    out(r,
      '<div class="tout__hd"><b>'+L.n+'</b><span>From $'+price.toLocaleString('en-US')+' &middot; '+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>Detail</span></div>'+
      '<div class="trow trow--txt trow--flag trow--has"><b>What this level does</b><span>'+L.does+'</span></div>'+
      '<div class="trow trow--txt trow--flag trow--gap"><b>What it does not do</b><span>'+L.not+'</span></div>'+
      '<div class="trow trow--txt"><b>'+DOC[0]+'</b><span>'+DOC[1]+'</span></div>'+
      '<div class="trow trow--txt"><b>'+WHO[0]+'</b><span>'+WHO[1]+'</span></div>'+
      extra+
      '<div class="trow trow--txt"><b>The price, worked</b><span>'+wc.toLocaleString('en-US')+' words at $'+L.rate.toFixed(3)+' a word'+(doc==='reg'?', plus 35% for regulatory version checking and cross-document consistency':'')+', with a minimum of $'+L.min+'. For context: the Editorial Freelancers Association&rsquo;s 2025 survey puts freelance medical copyediting at 3.0 to 5.0 cents a word and medical developmental editing at 5.3 to 6.8 cents &mdash; one editor, no project management, no second reader. Elsevier charges $0.10 a word for language editing alone at this length, and Wiley charges $0.25 a word above 6,000 words for its top tier. We sit between the two, which is where a service with a second reader and a published scope belongs. The figure is a starting point, not a quote: we read the document first and tell you if it needs a different level.</span></div>'+
      '<p class="tsub">The same level, under the three published taxonomies</p>'+
      '<div class="trow trow--txt"><b>Editorial Freelancers Association</b><span>'+L.efa+'</span></div>'+
      '<div class="trow trow--txt"><b>Chicago Manual of Style</b><span>'+L.cms+'</span></div>'+
      '<div class="trow trow--txt"><b>Editors Canada, PES 2024</b><span>'+L.ecn+'</span></div>'+
      '<div class="tverd"><p><b>Why three names for one thing.</b> There is no industry-standard taxonomy of editing levels, and that is not a quibble &mdash; it is why two quotes for &ldquo;editing&rdquo; can differ fourfold and both be honest. The EFA names four services; Chicago splits manuscript editing into mechanical and substantive and treats line editing as a separate earlier pass; Editors Canada&rsquo;s Professional Editorial Standards 2024 defines four levels under different names again, over a foundational part that is not a level at all. They do not map onto each other. So before you compare prices, make the supplier tell you which of the five things above they are actually going to do &mdash; and if they will not, that is your answer.</p></div>'+
      '<p class="tmeth"><b>Sources, and a correction.</b> Level definitions from the Editorial Freelancers Association&rsquo;s editorial services definitions and 2025 rate survey, the Chicago Manual of Style 2.48&ndash;2.50 and 2.53, and Editors Canada&rsquo;s <i>Professional Editorial Standards</i> 2024 &mdash; note that the 2016 edition is superseded. Similarity: Turnitin and iThenticate guidance pages; COPE, &ldquo;Determining acceptable levels of plagiarism/duplication&rdquo;; Elsevier PERK; Springer Nature&rsquo;s Crossref Similarity Check guide for editors. Text recycling: COPE position, 20 August 2024. AI detection: Liang W, Yuksekgonul M, Mao Y, Wu E, Zou J, &ldquo;GPT detectors are biased against non-native English writers&rdquo;, <i>Patterns</i> 2023;4(7):100779; Turnitin&rsquo;s own AI writing detection guidance; COPE, &ldquo;Emerging AI dilemmas in scholarly publishing&rdquo;, updated 17 September 2025. Language: Amano T et al., <i>PLOS Biology</i> 2023;21(7):e3002184. All checked 21 September 2026. <b>The correction:</b> &ldquo;Good Publication Practice (GPP3/GPP4)&rdquo; gets listed among the standards as though both editions were live. <b>GPP 2022 is the current guideline</b> &mdash; published in the <i>Annals of Internal Medicine</i> on 30 August 2022, stewarded by ISMPP, and the third update of the 2003 original after GPP2 in 2009 and GPP3 in 2015. There is no GPP4: that was the working title during development, and the guideline was renamed at publication. GPP3 is superseded. A supplier&rsquo;s own guideline page will often say so correctly while the page selling the work does not, which is the kind of internal contradiction a careful reader finds first.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 04 · CME activity planner ═════════
     Built because the live page named the AMA as a CME accreditation body
     (it is not — it owns the credit currency), said "our CME activities"
     (we run none), and offered to facilitate submission to accreditation
     bodies (there is no such channel for a non-accredited vendor in the
     US system). Every row below names who actually holds the obligation. */
  TOOLS.cme = function(r){ wire(r, function(){
    const fmt  = seg(r,'fmt'),
          acc  = str(r,'acc'),
          role = str(r,'role'),
          lvl  = str(r,'lvl'),
          cs   = chk(r,'cs'),    /* commercial support sought */
          ie   = chk(r,'ie'),    /* ineligible-company person as planner/faculty */
          prod = chk(r,'prod'),  /* content covers a specific product */
          anc  = chk(r,'anc'),   /* ancillary activities alongside */
          dat  = chk(r,'dat');   /* learner data to be shared */

    /* ── who accredits what, in this system ────────────────────────────*/
    const ACC = {
      accme: ['ACCME &mdash; United States',
        '<b>ACCME accredits organisations, not activities and not content.</b> The accreditation statement names the accredited provider as the organisation &ldquo;responsible for demonstrating the CME activity&rsquo;s compliance with all accreditation requirements&rdquo;. Terms run two years for Provisional Accreditation, four for Accreditation and six for Accreditation with Commendation. Activities are not accredited; they are <i>designated</i> for credit &mdash; &ldquo;designated for a maximum of X <i>AMA PRA Category 1 Credits</i>&rdquo;. The current requirements document is dated 27 April 2026 and carries eight named core criteria (Mission, Program Analysis, Program Improvements, Educational Needs, Designed to Change, Appropriate Formats, Competencies, Analyzes Change), with a separate 16-criterion menu for Commendation.'],
      joint: ['Joint Accreditation &mdash; interprofessional',
        'Founded by ACCME, ACPE and ANCC, and now awarding credit across <b>ten professions</b> &mdash; athletic trainers, dentists, dietitians, nurses, optometrists, PAs, pharmacists, physicians, psychologists and social workers &mdash; under one application, one fee structure and one set of standards. Eligibility requires eighteen months of education planned by and for the team, and at least 25% of activities designed by and for healthcare teams. Like ACCME, it accredits the organisation.'],
      eaccme:['EACCME &mdash; Europe',
        '<b>Structurally different from ACCME, and the difference matters.</b> The EACCME, run by the UEMS since 1999, accredits <i>individual activities</i> &mdash; live educational events, e-learning materials and blended learning &mdash; and awards ECMEC credits to them. So &ldquo;accredited event&rdquo; is correct in Europe and wrong in the United States. EACCME 3.0 criteria have applied since 2023, in four documents dated UEMS 2023.07.rev through 2023.10.rev. Applications are recommended eight weeks before the event, six weeks minimum, with a late fee from six weeks out and evaluation taking up to seven.'],
      uk:   ['United Kingdom &mdash; GMC and the Royal Colleges',
        'There is no credit-designation system to hit. <b>The GMC does not mandate a number of CPD points</b>, stating that CPD &ldquo;needs to be tailored to your scope of practice and needs&rdquo; and requiring reflection on what was learned and how it changed practice. The Federation of the Royal Colleges of Physicians <i>recommends</i> 50 hours of CPD a year, of which 25 external, across external, internal and personal categories, in a diary year running 1 April to 31 March &mdash; and says plainly that this is not mandatory. Content for a UK audience is therefore built round reflection and scope of practice rather than round a credit count.'],
      none: ['Not accredited yet',
        'Then the first decision is not about content. In the US you either become an accredited provider yourself &mdash; a process with published fees, a self-study and a two-year Provisional term &mdash; or you work in <b>joint providership</b> with an organisation that already is. ACCME&rsquo;s own warning on the latter is worth reading before you start: &ldquo;An accredited provider puts their own accreditation at risk when they offer joint providership to another organization.&rdquo; That is why a joint provider will scrutinise your content harder than a client normally does, and why the evidence pack below is what the relationship runs on. Note that publishing and education companies <i>are</i> eligible to be accredited; being a medical education company does not disqualify you.'],
      other:['Somewhere else, or more than one system',
        'The systems do not collapse into each other. In the US, organisations are accredited and activities are designated for credit; in Europe, activities themselves are accredited. Canada&rsquo;s Royal College MOC programme has three sections &mdash; group learning, individual learning, and feedback and improvement &mdash; on a five-year cycle. Australia requires 50 hours a year through a CPD Home, with mandated coverage of culturally safe practice, health inequities, and professionalism and ethics <i>inside</i> that 50 rather than on top of it. Tell us the audience and we will write to the right one.']
    };
    const a = ACC[acc] || ACC.other;

    /* ── the five Standards, with the evidence each one demands here ───*/
    const S = [];
    S.push(['Standard 1 &mdash; Ensure content is valid', prod?'mid':'has',
      'All recommendations for patient care must be based on current science, evidence and clinical reasoning, and must conform to generally accepted standards of experimental design, data collection, analysis and interpretation. Content must not advocate for unscientific approaches to diagnosis or therapy.'+
      (prod?' <b>You have said the content covers a specific product.</b> That is permitted and it raises the evidence bar: every clinical recommendation needs its source, off-label use has to be identified as such, and the content has to sit inside the evidence rather than inside the indication. We write the reference trace that lets your provider defend it.':'')]);

    S.push(['Standard 2 &mdash; Prevent commercial bias and marketing', (dat||anc)?'gap':'mid',
      '<b>The provider &mdash; not the funder, not the writer &mdash; must control every decision on planning, faculty selection, delivery and evaluation, without influence or involvement from owners and employees of ineligible companies.</b> Education must be free of marketing or sales. '+
      (dat?'<b>You have said learner data will be shared.</b> Standard 2 prohibits sharing learner names or contact details with an ineligible company or its agents <i>without the explicit consent of the individual learner</i>. Consent from the institution is not consent from the learner. ':'')+
      (anc?'<b>Ancillary activities alongside the education</b> fall under Standard 5 as well: exhibits, promotional material and company-run sessions have to be separated in time and space from the accredited education, and clearly identified as not accredited. ':'')+
      'An &ldquo;ineligible company&rdquo; is one whose primary business is producing, marketing, selling, re-selling or distributing healthcare products used by or on patients &mdash; which includes advertising and marketing firms serving those clients.']);

    S.push(['Standard 3 &mdash; Identify, mitigate and disclose relationships', ie?'gap':'mid',
      'Every planner, faculty member and anyone else in a position to control content must disclose all financial relationships with ineligible companies from the previous 24 months. The provider identifies them, mitigates them, and discloses them to learners <i>before</i> the education begins. '+
      (ie?'<b>You have proposed a planner or faculty member who is an owner or employee of an ineligible company. Under Standard 3 that is an unresolvable financial relationship, and they must be excluded.</b> There are exactly three narrow exceptions: content unrelated to that employer&rsquo;s business lines; basic science research that makes no care recommendations; and safe device use that makes no usage recommendations. If your programme does not sit in one of those three, the answer is no, and it is better to hear it now than from your provider a week before launch.':'Nobody on the planning committee or faculty is an owner or employee of an ineligible company, which removes the hardest problem in this Standard before it starts.')]);

    S.push(['Standard 4 &mdash; Manage commercial support', cs?'mid':'has',
      cs? '<b>You are seeking commercial support.</b> Then three things bind. The provider must make <i>all</i> decisions on receiving and disbursing the funds. The terms, conditions and purposes must be documented in a written agreement between the ineligible company and the provider &mdash; not with us, and not with the faculty. And the supporting company must be named to learners before they engage with the education. An ineligible company must not pay any expense of the education or of the learners directly; the money goes to the provider and the provider spends it.'
        : 'No commercial support is being sought, which removes an entire category of documentation and is the single biggest simplification available to a CME programme. Registration fees, institutional funding and government grants do not trigger Standard 4.']);

    S.push(['Standard 5 &mdash; Manage ancillary activities', anc?'gap':'has',
      anc? '<b>You have said there will be ancillary activities.</b> Arrangements for exhibits, promotional sessions and other non-accredited activity have to be separated from the accredited education in time and in space, must not interfere with it, and must be clearly identified to learners as not being part of it. This is the Standard most often failed by well-run conferences, because the floor plan is decided by somebody who has never read it.'
        : 'No exhibits, promotional sessions or company-run activities alongside the education, so this Standard is satisfied by the absence of the thing it governs.']);

    /* ── Moore's levels, and what each format can honestly reach ───────*/
    const FMT = {
      live: ['Live course or conference','Levels 1 to 4 comfortably; level 5 only with follow-up measurement built in from the start, which almost nobody funds.'],
      rss:  ['Regularly scheduled series','The format with the best claim to level 5, because repeated exposure over time is what the evidence actually supports. Grand rounds and journal clubs are undervalued for exactly this reason.'],
      end:  ['Enduring material','Levels 1 to 3b reliably; level 4 with case-based assessment. Level 5 requires linking to something outside the module, which is a data project rather than an education project.'],
      blend:['Blended programme','The strongest structural case for levels 4 and 5, because it combines multiple exposures with practice between them.'],
      pi:   ['Performance improvement activity','The only common format designed from the start to reach levels 5 and 6, because it measures practice, intervenes and measures again. Also the most expensive, and the one commendation criteria reward.']
    };
    const f = FMT[fmt] || FMT.live;

    const LVL = {
      p1: ['Level 1&ndash;2: participation and satisfaction','Attendance counts and evaluation scores. Every format reaches this and it tells you almost nothing about whether anything changed. Worth measuring because accreditors ask; not worth claiming as an outcome.'],
      p3: ['Level 3a&ndash;3b: declarative and procedural knowledge','Knows, and knows how. Measured with pre- and post-tests written against the learning objectives rather than against the slides. This is the level most CME actually demonstrates.'],
      p4: ['Level 4: competence','Shows how &mdash; the learner demonstrates what they would do, in a case, a simulation or a structured scenario. It requires assessment items written by somebody who understands both the clinical content and item construction, which is a specific skill and the reason this level is skipped.'],
      p5: ['Level 5: performance','Does &mdash; what the clinician actually does in practice. Requires data from outside the activity: chart audit, registry, prescribing or ordering data, with a baseline taken before the education. If the measurement is not designed before the activity runs, this level is not available afterwards.'],
      p6: ['Level 6&ndash;7: patient and community health','The levels everyone wants and almost nobody evidences. They need a data source, a comparison and a plausible causal path, and the honest position is that an education activity is one input among many. We will help design the measurement; we will not help claim the attribution.']
    };
    const L = LVL[lvl] || LVL.p3;

    /* ── what we can and cannot do ─────────────────────────────────────*/
    const ROLE = {
      prov: ['You are the accredited provider','Then the obligations above are yours and the content is ours to draft under your control. We write to your templates and your planning process, hand over the evidence documentation in the form your accreditor expects, and stay available when you are surveyed. Your planning committee makes every decision the Standards say it must.'],
      non:  ['You are working with an accredited provider','Then your provider carries the accountability and, in ACCME&rsquo;s words, puts their own accreditation at risk by working with you. Expect them to scrutinise the content properly &mdash; that is them doing their job, not obstructing yours. We write to their process, and the evidence pack is what makes their review fast rather than adversarial.'],
      sup:  ['You are a commercial supporter','Then the most useful thing on this page is the list of things you must not do. You may not select faculty, shape content, choose learning objectives, review the material before it runs, or receive learner contact details without each learner&rsquo;s explicit consent. You fund it, you are named to learners, and you let go. A supporter who cannot let go should fund something that is not accredited education and call it what it is.'],
      assoc:['You are an association or society without accreditation','Then the choice is between becoming accredited and working in joint providership, and it is a strategic decision rather than a content one. We can write the content either way; what changes is who holds the file when the accreditor asks for it.']
    };
    const ro = ROLE[role] || ROLE.non;

    const gaps = S.filter(function(x){ return x[1]==='gap'; }).length;

    out(r,
      '<div class="tout__hd"><b>'+(gaps? gaps+' Standard'+(gaps>1?'s':'')+' need work' : 'No blocking gaps in the five Standards')+'</b><span>'+esc(f[0])+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What it requires, and who holds the obligation</span></div>'+
      '<div class="trow trow--txt"><b>'+a[0]+'</b><span>'+a[1]+'</span></div>'+
      '<p class="tsub">The ACCME Standards for Integrity and Independence, against what you have told us</p>'+
      S.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<p class="tsub">Outcomes, measured on Moore&rsquo;s levels</p>'+
      '<div class="trow trow--txt"><b>'+L[0]+'</b><span>'+L[1]+'</span></div>'+
      '<div class="trow trow--txt"><b>What '+f[0].toLowerCase()+' can reach</b><span>'+f[1]+' <b>And the honest caveat on all of it:</b> the 2021 Cochrane review of continuing education meetings and workshops &mdash; 215 studies, more than 28,000 health professionals &mdash; found a median adjusted improvement in compliance with desired practice of <b>4.00 percentage points</b> (IQR 0.29% to 13.00%), at moderate certainty, and effects on patient outcomes that &ldquo;probably slightly improve&rdquo;. It also found the evidence on <i>interactive versus didactic</i> formats so weak that the reviewers state they are uncertain of the difference &mdash; which is the single most-repeated claim in CME marketing and it is not supported by the review usually cited for it. A separate synthesis of eight systematic reviews (Cervero and Gaines, 2015) does find that activities which are more interactive, use more methods, involve multiple exposures and are longer lead to more positive outcomes. Both of those can be true: CME works, modestly, and format claims should be stated at the strength of the evidence behind them.</span></div>'+
      '<p class="tsub">What we do, and what we cannot do</p>'+
      '<div class="trow trow--txt"><b>'+ro[0]+'</b><span>'+ro[1]+'</span></div>'+
      '<div class="tverd"><p><b>Three claims worth checking on any page like this one.</b> First, that we &ldquo;strictly follow ACCME, EACCME, AMA and other international CME accreditation bodies&rsquo; standards&rdquo;. <b>The AMA is not a CME accreditation body.</b> ACCME accredits organisations; the AMA owns and governs the <i>AMA PRA Category 1 Credit</i> designation through its Council on Medical Education, and is itself an ACCME-accredited provider &mdash; in the AMA&rsquo;s own words, &ldquo;those are separate functions and operate independently&rdquo;. Second, that these were &ldquo;our CME activities&rdquo;. <b>We run no CME activities and hold no accreditation.</b> We write content for organisations that do. Third, that we would facilitate &ldquo;submission to accreditation bodies&rdquo;. In the US there is no such channel for a non-accredited vendor: accreditation is held by the provider, and an activity is designated for credit rather than accredited. In Europe it is different &mdash; a provider does submit a named activity to the EACCME, with a fee and a deadline &mdash; and collapsing the two systems into one sentence is how the original claim came to be written.</p></div>'+
      '<p class="tmeth"><b>Sources.</b> ACCME accreditation rules, criteria, eligibility and joint providership rules, and the <i>Standards for Integrity and Independence in Accredited Continuing Education</i> &mdash; released December 2020, effective 1 January 2022, replacing the <i>Standards for Commercial Support</i> first adopted in 1992 and updated in 2004 &mdash; all at accme.org. Accreditation Requirements document dated 27 April 2026. AMA issue brief &ldquo;Understanding the AMA PRA Credit System&rdquo; (November 2023) and the <i>Physician&rsquo;s Recognition Award</i> booklet, 2017 revision, at ama-assn.org. Joint Accreditation at jointaccreditation.org and accme.org. EACCME criteria and process at uems.eu and eaccme.uems.eu. GMC continuing professional development guidance and the Federation of the Royal Colleges of Physicians CPD diary at gmc-uk.org and thefederation.uk. Outcomes framework: Moore DE Jr, Green JS, Gallis HA, <i>Journal of Continuing Education in the Health Professions</i> 2009;29(1):1&ndash;15, extended to interprofessional education in Moore DE Jr et al., <i>Medical Teacher</i> 2018;40(9):904&ndash;913 &mdash; note the 2018 paper re-centres on planning and does not revise the seven levels. Evidence: Forsetlund L et al., <i>Cochrane Database of Systematic Reviews</i> 2021;9:CD003030; Cervero RM and Gaines JK, <i>JCEHP</i> 2015;35(2):131&ndash;138. All checked 21 and 22 September 2026. <b>One date worth knowing:</b> the agreement under which the AMA converts EACCME-certified credit to <i>AMA PRA Category 1 Credit</i> runs <b>through 31 December 2026</b>. If your programme depends on that conversion beyond this year, confirm the renewal with the AMA rather than assuming it &mdash; and note the reverse conversion, from AMA PRA to ECMEC, is not operational at all.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 05 · Attribution router ═══════════
     Built because the live page named COPE and ICMJE as its compliance
     standards. Both govern journal publication. This page sells executive
     reports, investor white papers and ghost-written bylines, which no
     journal body governs at all — while the frameworks that DO govern
     them sat on the parent hub and were never inherited. */
  TOOLS.atr = function(r){ wire(r, function(){
    const piece = seg(r,'piece'),
          aud   = str(r,'aud'),
          who   = str(r,'who'),
          reg   = str(r,'reg'),
          pay   = chk(r,'pay'),   /* paid placement */
          med   = chk(r,'med'),   /* names a medicine or device */
          dat   = chk(r,'dat'),   /* uses company data or research */
          ai    = chk(r,'ai');    /* AI used in drafting */

    const rows = [];

    /* ── the governing framework, which depends on where it lands ──────*/
    const isJournal = (piece==='paper');
    if(isJournal){
      rows.push(['A journal article','has',
        '<b>Here, and only here, the journal bodies govern.</b> Authorship is decided by the four ICMJE criteria, all of which every author must meet; the ICMJE Recommendations were updated in January 2026, adding a section on artificial intelligence and a requirement that all authors be able to review the data supporting the results. Writing assistance, technical editing, language editing and proofreading do not confer authorship &mdash; they are acknowledged. Where the research is company-sponsored, <b>GPP 2022</b> applies alongside: published in the <i>Annals of Internal Medicine</i> on 30 August 2022, stewarded by ISMPP, the third update of the 2003 original after GPP2 in 2009 and GPP3 in 2015. Contributions are recorded in CRediT, which is ANSI/NISO Z39.104-2022 with fourteen roles.']);
    } else {
      rows.push(['Not a journal article, so not a journal body','gap',
        '<b>This is the distinction that matters here.</b> COPE and ICMJE are routinely named as the compliance standards for work like this. Both govern <i>journal publication</i>: authorship of research papers, editorial decisions, corrections, retractions, publication ethics. An executive report, an investor-facing white paper, a bylined opinion piece or a blog is none of those things, and no journal body has any jurisdiction over them. Citing COPE on a corporate content page is not a higher standard; it is a signal that the compliance section was copied from an academic page. <b>What actually governs this piece is set by where it lands, who is named on it and whether money changed hands</b> &mdash; which is what the rows below work out.']);
    }

    /* ── ghostwriting and the byline ───────────────────────────────────*/
    const WHO = {
      exec: ['A named executive is the byline', isJournal?'gap':'mid',
        isJournal
          ? '<b>Stop here.</b> A named individual who did not meet the four ICMJE criteria cannot be an author of a journal article, and a professional writer who is not acknowledged is the definition of ghostwriting. This is the one case where the journal rules bite hard and where a corporate content habit becomes a publication-ethics problem. If this is going to a journal, authorship is decided by the criteria and our involvement is acknowledged.'
          : 'Outside journals, a bylined executive article written with professional help is normal practice and nobody&rsquo;s code prohibits it &mdash; but the substance has to be theirs. Our working rule: the named person is interviewed, shapes the argument, and approves every claim before it goes out. If a piece could be published under that name without the named person having read it, it should not be published under that name. Where the piece is also going to a journal, or reports research, the journal rules take over and everything above applies.'],
      corp: ['The organisation is the author','has',
        'The simplest case. A report published by the company under the company&rsquo;s name carries no individual authorship question at all, and the only disclosure that matters is of funding and interests where the content makes claims about a product, a market or a policy.'],
      clin: ['A clinician or academic is the byline','mid',
        'The most scrutinised case outside journals, because a clinician&rsquo;s name carries clinical authority that a company&rsquo;s does not. Their relationship to the sponsor should be visible on the piece itself rather than discoverable elsewhere &mdash; and if the argument is one they would not make unpaid, the piece should not carry their name. This is the specific arrangement that has done the most reputational damage in this field.'],
      none: ['No byline','has','Published by the organisation without an individual name. Clean, and worth choosing more often than it is.']
    };
    rows.push(WHO[who] || WHO.corp);

    /* ── money ─────────────────────────────────────────────────────────*/
    if(pay) rows.push(['It is a paid placement','gap',
      '<b>Then it is advertising, and it has to look like advertising.</b> Sponsored content, native advertising, a paid byline in a trade title, a paid post from a clinician or an influencer &mdash; the common requirement across advertising regulators is that a material connection between the advertiser and the person or outlet carrying the message is disclosed, clearly and up front, not in a footer. In the UK that is the CAP Code, enforced by the Advertising Standards Authority; in the United States it is the Federal Trade Commission&rsquo;s endorsement rules. A label that a reader has to look for is not a disclosure. We write the disclosure into the piece rather than leaving it to the platform.']);
    else rows.push(['Not a paid placement','has',
      'Published on your own channels or placed on editorial merit. No advertising-disclosure obligation attaches, although funding and interests still belong on anything making a claim about a product, a market or a policy.']);

    /* ── the product question, which is where the real codes live ──────*/
    const REG = {
      uk:  ['United Kingdom','the <b>ABPI Code of Practice for the Pharmaceutical Industry, 2024 edition</b>, administered by the Prescription Medicines Code of Practice Authority (PMCPA), a division of the ABPI. It sets standards for the promotion of medicines to health professionals and other relevant decision makers, and it reaches a great deal that does not look like promotion &mdash; including material that mentions a medicine at all. The statutory backdrop is the Human Medicines Regulations 2012, under which advertising a prescription-only medicine to the general public is prohibited.'],
      eu:  ['European Union','the <b>EFPIA Code of Practice</b>, which covers the promotion of medicinal products to healthcare professionals and interactions with HCPs, healthcare organisations and patient organisations, alongside national association codes that are frequently stricter. The statutory basis is Directive 2001/83/EC, under which advertising prescription-only medicines to the general public is prohibited across the Union.'],
      us:  ['United States','<b>FDA rules on prescription drug promotion</b>, enforced by the Office of Prescription Drug Promotion, plus the industry codes &mdash; the PhRMA Code for medicines and the AdvaMed Code for devices. OPDP&rsquo;s authority runs from the Federal Food, Drug and Cosmetic Act, principally sections 201, 301 to 304 and 502, with the regulations at 21 CFR parts 200, 201 and 202. The US is one of very few countries that permits direct-to-consumer advertising of prescription medicines at all, and the rules for it tightened recently: the final rule on presenting the major statement in a <b>clear, conspicuous and neutral</b> manner in television and radio advertisements was published on 21 November 2023, took effect on 20 May 2024 and had a compliance date of <b>20 November 2024</b>, codified at 21 CFR 202.1(e)(1)(ii). Also relevant to content of this kind: the FDA&rsquo;s January 2025 final guidance on communications to healthcare providers about scientific information on unapproved uses, and its 2018 guidances on communications with payors and on communications consistent with FDA-required labeling.'],
      ca:  ['Canada','the <b>PAAB Code of Advertising Acceptance</b> for material directed at healthcare professionals, with Ad Standards handling consumer-directed material, under Health Canada&rsquo;s framework. We could not open the PAAB Code from its own site, so confirm the current edition before relying on a specific clause.'],
      au:  ['Australia','the <b>Therapeutic Goods Advertising Code</b> under the Therapeutic Goods Act 1989, with Medicines Australia&rsquo;s Code of Conduct for industry conduct. Advertising prescription medicines to the general public is prohibited. We could not open the current Code instrument from the TGA&rsquo;s own site, so confirm the instrument and year before relying on a specific provision.'],
      jp:  ['Japan','the <b>PMD Act</b> &mdash; the Act on Securing Quality, Efficacy and Safety of Products Including Pharmaceuticals and Medical Devices, which is what the Pharmaceutical Affairs Law was renamed in 2014. A page still calling it the Pharmaceutical Affairs Law is using a name that was retired twelve years ago. Alongside it sit the MHLW guidelines on sales information provision activities for prescription drugs and the JPMA code.'],
      multi:['More than one market','Then the strictest applicable rule governs the shared asset, and the differences are not cosmetic. Direct-to-consumer advertising of prescription medicines is permitted in almost no country; the EU prohibits it by Directive, the UK by regulation, Australia by its Code. Producing one global asset and localising the disclaimers is how a compliant piece in one market becomes an unlawful one in another. Plan the markets as separate deliverables from a shared evidence base.']
    };
    if(med) rows.push(['It names a medicine or a medical device', 'gap',
      '<b>Then it is no longer just content.</b> Material about a prescription medicine or a regulated device is governed by the promotional rules of every market it reaches, whatever you call the format &mdash; a white paper, a blog and a bylined article are all capable of being promotion. In <b>'+REG[reg][0]+'</b>, what governs is '+REG[reg][1]+(aud==='pub'? ' <b>And you have said the audience is the general public, which is the highest-risk combination on this page.</b> In most markets, promoting a prescription medicine to the public is simply prohibited, and disease-awareness material that stays lawful has to avoid identifying the product &mdash; a line that is easier to describe than to hold.':'')]);
    else rows.push(['No medicine or device named','has',
      'Which keeps the piece out of the promotional codes entirely and is worth being deliberate about. Where a piece can make its argument at the level of the disease, the evidence or the health-system problem rather than the product, it reaches a wider audience under far lighter rules &mdash; and it is usually the better piece.']);

    /* ── company data ──────────────────────────────────────────────────*/
    if(dat) rows.push(['It uses your own data or research','mid',
      'Then two things follow. The methods behind any figure you publish have to be stated well enough for a sceptical reader to judge it &mdash; sample, period, definition, who collected it &mdash; because an unsourced statistic in a thought-leadership piece is the thing a journalist checks first and the thing a competitor screenshots. And if the same data are going to a journal later, <b>prior publication matters</b>: check the target journal&rsquo;s policy on preprints and prior disclosure before publishing the finding in a white paper, because some journals will decline it afterwards.']);

    /* ── AI ────────────────────────────────────────────────────────────*/
    if(ai) rows.push(['An AI tool was used in drafting', isJournal?'gap':'mid',
      isJournal
        ? 'For a journal, this is declarable and the form differs by publisher &mdash; Elsevier wants a separate published declaration and exempts basic grammar checking; Wiley exempts spelling and grammar tools; Springer Nature uses a tiered model; Taylor &amp; Francis requires tool name, version, how and why, with no stated exemption. The ICMJE&rsquo;s January 2026 update added a section on it. All of them agree an AI system cannot be an author.'
        : 'Outside journals there is no single rule, which is not the same as no obligation. Two things hold regardless: a named human is accountable for every claim in a piece published under their name, and a piece that would mislead a reader about who wrote it is a problem whoever the reader is. Our position is that AI use is declared to you, a human verifies every factual claim and every citation, and where a piece carries an individual&rsquo;s byline that person knows what tools were involved before it goes out.']);

    const gaps = rows.filter(function(x){ return x[1]==='gap'; }).length;

    out(r,
      '<div class="tout__hd"><b>'+(gaps? gaps+' thing'+(gaps>1?'s':'')+' to get right' : 'Nothing here needs a disclosure you do not already have')+'</b><span>'+esc(({paper:'Journal article',report:'Executive report or white paper',byline:'Bylined article',blog:'Blog or short post',deck:'Investor or board material'})[piece]||'Content')+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Question</b><span>What actually governs it, and what has to be visible</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>The rule underneath all of it.</b> A reader should be able to tell, from the piece itself, who wrote it, who paid for it and what interest the author has in being believed. Every framework above is a specific implementation of that sentence for a particular kind of publication, and where no framework applies the sentence still does. It is also the cheapest form of risk management available to a communications team: content that discloses its own sponsorship is content nobody can later reveal.</p></div>'+
      '<p class="tmeth"><b>Sources, and what we could not confirm.</b> Authorship and acknowledgement: ICMJE Recommendations, PDF dated January 2026 &mdash; note that icmje.org&rsquo;s HTML pages still showed the January 2024 text when we checked, so cite the PDF. GPP 2022: published in the <i>Annals of Internal Medicine</i>, 30 August 2022, stewarded by ISMPP; verified at ismpp.org. CRediT: ANSI/NISO Z39.104-2022. UK: the current edition of the ABPI Code is the <b>2024 edition</b>, administered by the PMCPA &mdash; confirmed on the PMCPA&rsquo;s own site on 22 September 2026. EFPIA: scope confirmed on efpia.eu on 22 September 2026; the site does not state a version date for the consolidated Code on the page we read, so we do not quote one. United States: OPDP&rsquo;s statutory and regulatory basis and guidance dates from the FDA&rsquo;s own OPDP regulatory information page; the clear, conspicuous and neutral final rule from the <i>Federal Register</i>, 21 November 2023. <b>What we could not confirm, stated plainly rather than filled in:</b> the current version and effective date of the PhRMA Code and the AdvaMed Code, the current edition of the PAAB Code, the current Australian advertising Code instrument, and the current text of the FTC endorsement rules &mdash; those sources would not open for us. Where they matter to a specific piece we confirm them at the time of writing rather than carrying a version forward from the last project, which is the same discipline this page applies to guidelines everywhere else on this site.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 06 · Promotional claim checker ════
     Built because the live page listed COPE and ICMJE as its compliance
     standards while selling promotional healthcare content. Those govern
     journal publication. What governs promotion is the code of every
     market the material reaches — all of which the parent hub page named
     and this child never inherited. */
  TOOLS.pmc = function(r){ wire(r, function(){
    const what = seg(r,'what'),
          aud  = str(r,'aud'),
          reg  = str(r,'reg'),
          cmp  = chk(r,'cmp'),   /* comparative claim */
          off  = chk(r,'off'),   /* unapproved use */
          end  = chk(r,'end'),   /* endorsement or testimonial */
          stu  = chk(r,'stu'),   /* quotes a clinical study */
          inc  = chk(r,'inc'),   /* incentive, discount, gift */
          dig  = chk(r,'dig');   /* social or digital channel */

    const rx   = (what==='rx');
    const dev  = (what==='dev'||what==='ivd');
    const free = (what==='none');
    const pub  = (aud==='pub'||aud==='pt');

    const rows = [];

    /* ── is it even lawful for this audience here ──────────────────────*/
    const M = {
      uk: ['United Kingdom',
        'the <b>ABPI Code of Practice for the Pharmaceutical Industry, 2024 edition</b> &mdash; the current edition &mdash; administered by the Prescription Medicines Code of Practice Authority, a division of the ABPI. Over it sits the Human Medicines Regulations 2012, and the MHRA&rsquo;s guidance on advertising and promotion. The Code reaches a great deal that a marketing team would not call advertising, including material that merely mentions a medicine.'],
      eu: ['European Union',
        'the <b>EFPIA Code of Practice</b>, covering promotion of medicinal products to healthcare professionals and interactions with HCPs, healthcare organisations and patient organisations, with national association codes underneath it that are frequently stricter. The statutory basis is Directive 2001/83/EC.'],
      us: ['United States',
        '<b>FDA rules on prescription drug promotion</b>, enforced by the Office of Prescription Drug Promotion under the Federal Food, Drug and Cosmetic Act &mdash; principally sections 201, 301 to 304 and 502 &mdash; with regulations at 21 CFR parts 200, 201 and 202. Alongside them, the PhRMA Code for medicines and the AdvaMed Code for devices govern industry conduct.'],
      ca: ['Canada',
        'the <b>PAAB Code of Advertising Acceptance</b> for material directed at healthcare professionals, with Ad Standards handling consumer-directed material, inside Health Canada&rsquo;s framework.'],
      au: ['Australia',
        'the <b>Therapeutic Goods Advertising Code</b> made under the Therapeutic Goods Act 1989, with Medicines Australia&rsquo;s Code of Conduct governing industry conduct.'],
      jp: ['Japan',
        'the <b>PMD Act</b> &mdash; the Act on Securing Quality, Efficacy and Safety of Products Including Pharmaceuticals and Medical Devices, which is what the Pharmaceutical Affairs Law was renamed in 2014, and a great many pages still use the old name. Alongside it sit the MHLW guidelines on sales information provision activities for prescription drugs and the JPMA code.'],
      multi:['More than one market',
        'the code of every market the material reaches, with the strictest applicable rule governing any shared asset. Producing one global piece and localising the disclaimers is the standard way a compliant asset in one market becomes an unlawful one in another.']
    };
    const m = M[reg] || M.multi;

    if(free){
      rows.push(['Not a regulated product','has',
        'A health service, a non-regulated product, an employer brand campaign or corporate material naming nothing regulated sits outside the medicines and devices codes entirely. General advertising law still applies &mdash; claims must be capable of substantiation and must not mislead &mdash; and where you are making a health claim about anything, the evidence for it should exist before the copy does. This is the cheapest position to be in and it is worth checking whether your piece can occupy it.']);
    } else if(rx && pub && reg!=='us'){
      rows.push(['Promoting a prescription medicine to the public','gap',
        '<b>This is prohibited in '+m[0]+', and in almost every market other than the United States.</b> The EU prohibits it by Directive 2001/83/EC; the UK by the Human Medicines Regulations 2012; Australia by its advertising Code. The United States is one of a very small number of countries that permits direct-to-consumer advertising of prescription medicines at all &mdash; New Zealand is the other example usually cited. No amount of careful phrasing makes a public-facing promotional piece about a prescription medicine lawful here. <b>What is available instead</b> is disease-awareness material that does not identify the product, and that line is harder to hold than to describe: a campaign that names no medicine but is recognisably about one is the case regulators actually look at. If that is the route, it needs the code checked before the creative, not after.']);
    } else if(rx && pub && reg==='us'){
      rows.push(['Direct-to-consumer promotion in the United States','mid',
        'Lawful, and the rules for broadcast tightened recently. The FDA&rsquo;s final rule requiring the <b>major statement</b> of side effects and contraindications in direct-to-consumer television and radio advertisements to be presented in a <b>clear, conspicuous and neutral</b> manner was published on 21 November 2023, took effect on 20 May 2024, and had a compliance date of <b>20 November 2024</b>, codified at 21 CFR 202.1(e)(1)(ii). It sets five standards: consumer-friendly language; audio at least as understandable as the rest of the advertisement; dual modality on television, with concurrent text; readable text; and no audio or visual elements likely to interfere with comprehension. Standards one, two and five apply to radio; all five apply to television. Print and digital DTC carry their own requirements including the brief summary. This is also the format most closely watched by OPDP.']);
    } else if(rx){
      rows.push(['Promoting a prescription medicine to '+(aud==='hcp'?'healthcare professionals':aud==='pay'?'payers and formulary committees':'this audience'),'mid',
        'Permitted, and governed in '+m[0]+' by '+m[1]+
        (aud==='pay'&&reg==='us'?' <b>Payer communications sit in a specific place.</b> The FDA&rsquo;s guidance on communications with payors, formulary committees and similar entities &mdash; issued 12 June 2018 and updated 28 September 2021 &mdash; addresses health-care economic information and communications about investigational products, and it is not the same permission as promotion to prescribers. Material written for a formulary committee and reused as a sales aid is the commonest way that distinction gets lost.':'')+
        ' The requirement that catches most material is not a prohibition but an accompaniment: promotional material about a prescription medicine generally has to carry prescribing information, and in the UK and EU an adverse-event reporting statement, in a form and prominence the code specifies. A claim without its obligatory accompaniment is non-compliant however accurate the claim is.']);
    } else if(dev){
      rows.push([(what==='ivd'?'Promoting an in-vitro diagnostic':'Promoting a medical device'),'mid',
        'Device promotion is regulated differently from medicines and more variably between markets, which is why device material is so often written to the wrong rulebook. In '+m[0]+', the applicable framework is '+m[1]+' In the United States the AdvaMed Code governs industry conduct, and FDA rules on labelling and advertising apply to the device&rsquo;s cleared or approved indications. <b>The constraint that matters most in practice is the same everywhere:</b> you may promote the device for what it is cleared or approved to do, in the population it was cleared or approved for, and the intended-use statement is the boundary. Claims that drift beyond it are how a marketing asset becomes a regulatory matter.']);
    } else {
      rows.push(['Promoting a non-prescription medicine','mid',
        'Permitted to the public in most markets, with its own rules. In '+m[0]+' what governs is '+m[1]+' Consumer-facing medicines advertising is typically the most actively policed category of all, because it reaches the most people and the complaints come from the public rather than from competitors.']);
    }

    /* ── the specific traps ────────────────────────────────────────────*/
    if(off) rows.push(['It refers to an unapproved use','gap',
      '<b>This is the single most consequential thing on this page.</b> Promoting a medicine or device for a use outside its approved labelling is unlawful in every market here, and the cost of getting it wrong is not a corrected advertisement. What exists instead are narrow, specific channels with their own rules. In the United States the FDA issued final guidance on <b>communications to healthcare providers about scientific information on unapproved uses</b> on <b>6 January 2025</b>, and separate guidance on <i>responding to unsolicited requests</i> for off-label information dating from 27 December 2011 &mdash; note the word <i>unsolicited</i>, which is doing all the work. There is also 2018 guidance, updated in 2021, on communications that are <b>consistent with FDA-required labeling</b>, which defines what may be said inside the label rather than outside it. None of these is a route to promotion, and material produced under them is not marketing material. If your piece needs to discuss an unapproved use, it is not a marketing communication and it should not be produced by a marketing process.']);

    if(cmp) rows.push(['It makes a comparative claim','gap',
      'Comparative claims are permitted in most markets and are the claims most often challenged, usually by the competitor named. Three things have to hold. The comparison has to be fair &mdash; like for like, on a clinically meaningful measure, not a favourable subgroup. It has to be supported by data capable of substantiating it, and in medicines advertising that generally means a head-to-head study rather than a cross-trial comparison, because comparing across trials with different populations and endpoints is the commonest substantiation failure in this category. And it has to be current: a comparison that was true when the copy was written and is no longer true is a live compliance problem in an asset nobody is looking at. We write the substantiation alongside the claim, referenced, so a challenge is answered from a file rather than reconstructed.']);

    if(stu) rows.push(['It quotes a clinical study','mid',
      'Then the claim has to match what the study actually found, not what the abstract implied. The recurring failures are specific and checkable: a relative risk reduction quoted without the absolute, which makes a two-point difference sound like a third; a secondary or exploratory endpoint reported as though it were the primary; a subgroup presented without saying it was a subgroup; a statistically significant result described as clinically meaningful; and a point estimate quoted with no interval. We read the paper rather than the press release, quote the primary endpoint as the study defined it, give absolute alongside relative, and reference precisely enough that a reviewer can check us in one step.']);

    if(end) rows.push(['It uses an endorsement or testimonial','gap',
      'Two separate problems, and most material only addresses one. <b>The code problem:</b> in medicines advertising, patient and healthcare-professional testimonials are restricted or prohibited in many markets, and a clinician appearing in promotional material creates obligations about disclosure and about what they may say. <b>The advertising-law problem:</b> wherever somebody has been paid, given product or otherwise materially connected to the advertiser, that connection must be disclosed clearly and up front &mdash; the CAP Code enforced by the Advertising Standards Authority in the UK, the Federal Trade Commission&rsquo;s endorsement rules in the United States. A platform&rsquo;s own small label is not a disclosure. Check the code first, because in several markets the answer is that the testimonial cannot be used at all and the disclosure question never arises.']);

    if(inc) rows.push(['It offers an incentive, gift or hospitality','gap',
      'Transfers of value to healthcare professionals are among the most tightly governed things in this field, and the rules differ by market and are not intuitive. The industry codes &mdash; ABPI in the UK, EFPIA and national codes in Europe, PhRMA and AdvaMed in the United States &mdash; set limits on what may be given, to whom, in what circumstances, and what must be publicly disclosed. Several jurisdictions also have statutory transparency reporting. <b>This is not a copywriting question and we will not answer it in copy.</b> Anything involving a transfer of value goes to your compliance function before it goes into a draft, and we will write the material round whatever they decide rather than the other way round.']);

    if(dig) rows.push(['It is going out on a digital or social channel','mid',
      'The rules do not change because the channel does, which is the mistake this category makes most often. Three things follow. <b>Space is not a defence</b> &mdash; if a claim requires prescribing information or a safety statement, a character limit does not excuse its absence; the usual answer is that the claim does not go in that format. <b>Reach is not controllable</b> &mdash; material intended for healthcare professionals on an open channel is available to the public, and in markets that prohibit public promotion of prescription medicines that is the problem, not the intent. And <b>interaction creates content</b>: a company account replying, liking or sharing can adopt a third party&rsquo;s claim as its own, so moderation policy is a compliance document rather than a community one. On correcting misinformation about your products online, the FDA issued a revised draft guidance on 8 July 2024, replacing its 2014 draft.']);

    rows.push(['What has to accompany the claim', 'mid',
      'The part most often left to the end and most often wrong. Depending on market and audience: prescribing information or a summary of product characteristics, at the prominence the code requires; an adverse-event reporting statement; in the US, the brief summary in print and the major statement in broadcast, with fair balance between benefit and risk throughout rather than benefit in the body and risk in a block at the end; the date of preparation and a job code so the asset can be withdrawn when the label changes; and the prescribing-information version the piece was checked against. That last item is the one that saves you: when the label moves, you need to know which assets were built on the old one.']);

    const gaps = rows.filter(function(x){ return x[1]==='gap'; }).length;

    out(r,
      '<div class="tout__hd"><b>'+(gaps? gaps+' thing'+(gaps>1?'s':'')+' that will stop this' : 'Nothing here is prohibited, but read the accompaniments')+'</b><span>'+esc(m[0])+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Question</b><span>What the rules actually say</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>This is a planning aid, not regulatory or legal advice, and it does not replace your medical, legal and regulatory review.</b> That function is yours, it should be, and a supplier offering to help you around it is offering you a liability rather than a service. What we do is write material that arrives at your review already built to the code, with the substantiation referenced and the accompaniments in place, so review is a check rather than a rebuild. <b>And the distinction that matters most here:</b> COPE and ICMJE are routinely listed as the compliance standards for work like this. Those govern journal publication &mdash; authorship, editorial decisions, corrections, retractions &mdash; and they have no jurisdiction over a single asset this service produces. The frameworks above are the ones that do.</p></div>'+
      '<p class="tmeth"><b>Sources, and what we could not confirm.</b> United Kingdom: the current edition of the ABPI Code is the <b>2024 edition</b>, administered by the PMCPA &mdash; confirmed on the PMCPA&rsquo;s own site on 22 September 2026. Europe: EFPIA Code scope confirmed on efpia.eu the same day; the page we read does not state a version date for the consolidated Code, so we quote none. United States: OPDP&rsquo;s statutory and regulatory basis, and the dates of the payor, consistent-with-labeling, unsolicited-requests, SIUU and misinformation guidances, from the FDA&rsquo;s own OPDP regulatory information page; the clear, conspicuous and neutral final rule from the <i>Federal Register</i> of 21 November 2023. OPDP publishes every untitled and warning letter it issues, by company and date, so the enforcement record on any claim type is checkable rather than a matter of opinion &mdash; and it is worth reading before writing, not after. <b>What we could not confirm, stated rather than filled in:</b> the current version and effective date of the PhRMA Code and the AdvaMed Code, the current edition of the PAAB Code, the current Australian advertising Code instrument, and the current text of the FTC endorsement rules. Those sources would not open for us. Where any of them governs a specific piece we confirm the version at the time of writing rather than carrying one forward from the last project &mdash; which is the same discipline this site applies to guidelines everywhere else.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 07 · Medico-legal framework ═══════
     Built because the live page promised "standard of care analysis
     aligned with international guidelines". There is no international
     standard of care — it is jurisdiction-specific and it is the
     contested issue in almost every negligence claim. That sentence
     weakened the product it described. */
  TOOLS.mdl = function(r){ wire(r, function(){
    const jur  = seg(r,'jur'),
          type = str(r,'type'),
          side = str(r,'side'),
          stage= str(r,'stage'),
          cons = chk(r,'cons'),  /* consent is the issue */
          caus = chk(r,'caus'),  /* causation contested */
          recs = chk(r,'recs'),  /* records incomplete */
          intl = chk(r,'intl'),  /* a foreign guideline is being relied on */
          p35  = chk(r,'p35');   /* report for court */

    const rows = [];

    /* ── the test, by jurisdiction. This is the correction. ────────────*/
    const J = {
      ew: ['England and Wales',
        '<b>Breach of duty is measured against the standard of the ordinary skilled practitioner professing to have that special skill</b> &mdash; the <i>Bolam</i> test, from <i>Bolam v Friern Hospital Management Committee</i> [1957]. A doctor is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of medical opinion skilled in that particular art. <b><i>Bolitho v City and Hackney Health Authority</i> [1998] added the qualification that matters:</b> the court must be satisfied that the body of opinion relied on has a <i>logical basis</i>, and that its proponents have directed their minds to the comparative risks and benefits and reached a defensible conclusion. A practice is not reasonable merely because some practitioners follow it. An expert report that recites Bolam without engaging with Bolitho is doing half the job, and the opposing expert will say so.'],
      sc: ['Scotland',
        'The substantive test derives from <i>Hunter v Hanley</i> 1955 SC 200, which predates and parallels <i>Bolam</i>, and the House of Lords and Supreme Court authorities apply across the UK. Procedure differs materially from England and Wales &mdash; the Court of Session rules govern expert evidence rather than the Civil Procedure Rules, so a report drafted to CPR Part 35 is drafted to the wrong rulebook. This is exactly the kind of jurisdictional detail that an &ldquo;international standard&rdquo; framing obscures.'],
      us: ['United States',
        '<b>The standard of care is set state by state, and there is no national rule.</b> Most states now apply a national professional standard for specialists; some retain or modify a locality rule for general practice. Many states also require an <b>affidavit or certificate of merit</b> from a qualified expert before a malpractice claim may proceed at all, with the qualifying criteria and the deadline set by state statute &mdash; a claim can be dismissed on that alone, before anyone reaches the medicine. Expert admissibility is governed federally by <b>Federal Rule of Evidence 702</b>, amended with effect from 1 December 2023 to make explicit that the proponent must demonstrate admissibility is more likely than not and that the expert&rsquo;s opinion reflects a reliable application of the methodology to the facts &mdash; the <i>Daubert</i> line of authority, as refined. Some states continue to apply the older <i>Frye</i> general-acceptance test instead. <b>The state is the first question, not a detail.</b>'],
      in: ['India',
        'The governing authorities are <i>Jacob Mathew v State of Punjab</i> (2005) on the standard for medical negligence, applying the Bolam approach, and <i>Indian Medical Association v V P Shantha</i> (1995) bringing medical services within consumer protection. On the regulator, one correction matters: <b>the Medical Council of India no longer exists.</b> It was replaced by the <b>National Medical Commission</b>, established under the National Medical Commission Act 2019 &mdash; the NMC&rsquo;s own site refers throughout to the &ldquo;erstwhile MCI&rdquo;. A report or a compliance section naming the MCI as a live regulator is citing a body that was dissolved, and on a page whose product is legal and regulatory accuracy that is the worst available error.'],
      oth:['Another jurisdiction, or more than one',
        '<b>Then the first task is to establish which standard applies, and it is not a formality.</b> Standard of care is jurisdiction-specific and is frequently the contested issue in the case. Where treatment spanned more than one country, where a claimant was treated abroad, or where the defendant practises under a different regulator, the applicable standard has to be identified before any opinion is worth writing. Tell us the jurisdiction and we work to it.']
    };
    const j = J[jur] || J.oth;
    rows.push(['The standard of care in '+j[0], 'mid', j[1]]);

    /* ── the four elements ─────────────────────────────────────────────*/
    rows.push(['Duty, breach, causation, damage', 'has',
      'The four elements, in the order they have to be established, and the order a well-built report follows. <b>Duty</b> is usually admitted in a treatment case and is occasionally the whole argument where a duty is asserted outside a treating relationship. <b>Breach</b> is the standard-of-care question above. <b>Causation</b> is where most claims are actually won and lost &mdash; and it is where reports most often stop short. <b>Damage</b> must be a recognised injury, and proving breach without proving that the breach caused the damage complained of establishes nothing. A report that demonstrates substandard care and does not address causation has not helped the instructing solicitor.']);

    if(cons) rows.push(['Consent is in issue', jur==='ew'||jur==='sc'?'gap':'mid',
      (jur==='ew'||jur==='sc')
        ? '<b>Then Bolam does not govern, and this is the single most common error in older medico-legal reports.</b> <i>Montgomery v Lanarkshire Health Board</i> [2015] UKSC 11 &mdash; a Scottish appeal binding across the UK &mdash; replaced the professional-practice test for information disclosure with a patient-centred one: the doctor must take reasonable care to ensure the patient is aware of any <b>material risk</b> involved in the recommended treatment, and of reasonable alternatives. Materiality is judged by reference to what a reasonable person in the patient&rsquo;s position would attach significance to, or what the doctor is or should reasonably be aware that this particular patient would. A report analysing a consent failure against what a responsible body of doctors would have disclosed is applying a test that has not been the law for over a decade.'
        : 'Informed-consent doctrine varies by jurisdiction and several have moved from a professional-practice standard to a patient-centred one. Establish which applies here before the analysis is written, because the two tests can produce opposite conclusions on identical facts.']);

    if(caus) rows.push(['Causation is contested','gap',
      '<b>Then this is the case, and the report has to be built round it.</b> The starting point is the <i>but for</i> test: would the damage have occurred but for the breach? Where that cannot be satisfied on conventional principles, the law has developed narrower routes &mdash; <b>material contribution</b>, where cumulative causes operate and the breach made a more than negligible contribution, following the <i>Bailey v Ministry of Defence</i> [2008] line; and the <i>Chester v Afshar</i> [2004] approach in certain consent cases. These are exceptions with boundaries, and the boundaries have continued to be litigated. <b>Two disciplines follow for the report.</b> The chronology must be precise enough to support a counterfactual &mdash; what would have happened, and when, had the breach not occurred &mdash; which usually means timed entries rather than dated ones. And the opinion must state the standard it is applying: <i>but for</i>, material contribution, or loss of a chance, named explicitly, because an unlabelled causation opinion is the one that collapses in cross-examination.']);

    if(recs) rows.push(['The records are incomplete','gap',
      'Then say so in the report, in terms, and do not work round it. A chronology built over a gap without flagging the gap is the finding that discredits an otherwise sound report. <b>What a complete review establishes:</b> what was requested, what was received, what is missing, what was chased and what the gap prevents you from concluding. Common and consequential absences &mdash; nursing notes, observation charts, the drug chart, imaging reports as opposed to images, out-of-hours records, ambulance records, and anything held by a different provider in the same pathway. Where the missing material would be determinative, the opinion should say that the conclusion is provisional pending it, rather than expressing a view the record cannot support.']);

    if(intl) rows.push(['A guideline from another country is being relied on','gap',
      '<b>This is a sentence you will meet across this market, and it is worth explaining why it is wrong.</b> &ldquo;Standard of care analysis aligned with international guidelines&rdquo; is offered widely in this market. <b>There is no international standard of care.</b> The standard is set by the law of the jurisdiction and, in practice, by what a responsible body of practitioners in that jurisdiction would have done at the time. A guideline from elsewhere can be persuasive evidence of what reasonable practice looks like, and it can be useful where domestic guidance is silent &mdash; but it does not set the standard, and a report that leans on it in place of domestic practice is <i>weaker</i>, not stronger. Opposing counsel will make that point, and they will be right. Use foreign guidance as supporting material, identify it as such, and anchor the opinion in the standard that actually governs.']);

    /* ── evidence frameworks: the "Level A" correction ─────────────────*/
    rows.push(['Citing levels of evidence and grades of recommendation','mid',
      '<b>Name the framework, every time.</b> Letters and numbers mean different things in different systems, and &ldquo;Level A evidence&rdquo; unqualified is ambiguous rather than simply wrong &mdash; which in a report that will be cross-examined is the same problem. In the <b>ACC/AHA</b> system, <i>Level of Evidence</i> A, B-R, B-NR, C-LD and C-EO describes the evidence, while <i>Class of Recommendation</i> 1, 2a, 2b and 3 describes the strength of the recommendation &mdash; so Level A is genuinely a level of evidence there. In <b>GRADE</b>, certainty is high, moderate, low or very low and recommendations are strong or conditional; there is no Level A. The <b>Oxford Centre for Evidence-Based Medicine</b> uses numbered levels, 1 to 5, in its 2011 table. <b>SIGN</b> uses numbered levels of evidence and lettered grades of recommendation, so a SIGN &ldquo;Grade A&rdquo; and an ACC/AHA &ldquo;Level A&rdquo; are different constructs sharing a letter. A phrase such as &ldquo;integration of Level A evidence&rdquo; with no framework named beside it does not say which of these is meant, and the difference changes the claim.']);

    /* ── the expert's duties and what the report must contain ──────────*/
    if(p35 && jur==='ew'){
      rows.push(['The report is going to court in England and Wales','mid',
        '<b>Then CPR Part 35 and Practice Direction 35 govern it, and the duties are not negotiable.</b> Rule 35.3: &ldquo;It is the duty of experts to help the court on matters within their expertise&rdquo;, and &ldquo;this duty overrides any obligation to the person from whom experts have received instructions or by whom they are paid.&rdquo; PD 35 requires that expert evidence be &ldquo;the independent product of the expert uninfluenced by the pressures of litigation&rdquo;; that the expert not assume the role of advocate; that they consider all material facts <i>including those which might detract from their opinion</i>; that they make clear when a question falls outside their expertise and when they cannot reach a definite opinion; and that any material change of view be communicated without delay. Rule 35.10 requires the report to state the substance of all material instructions, written or oral, on which it was written &mdash; and that material is not protected from disclosure in the ordinary way. The report ends with the statement of truth at PD 35 paragraph 3.3, beginning &ldquo;I confirm that I have made clear which facts and matters referred to in this report are within my own knowledge and which are not.&rdquo; <b>Consider all material facts</b> is the provision most often breached in practice, and it is breached by omission rather than by anything deliberate.']);
    } else if(p35){
      rows.push(['The report is going to court','mid',
        'Then the procedural rules of that court govern its form, its contents and the expert&rsquo;s duties, and they differ between jurisdictions in ways that matter. In England and Wales it is CPR Part 35 and Practice Direction 35. In Scotland it is the Court of Session rules. In the United States, admissibility turns on Federal Rule of Evidence 702 as amended with effect from 1 December 2023, or on the state&rsquo;s own standard, with several states still applying <i>Frye</i>. A report drafted to the wrong rulebook is a report that gets challenged on its form before anybody argues about its substance. Tell us the court and we draft to its requirements.']);
    }

    /* ── what we do and do not do ──────────────────────────────────────*/
    const S = {
      c: ['Instructed by the claimant', 'The same discipline applies whichever side instructs: the material facts that cut against the case go in the report. An expert who omits them has breached the duty that overrides the instruction, and the omission is found in cross-examination rather than in the office.'],
      d: ['Instructed by the defendant', 'Where the care was substandard, the report says so. A defence report that cannot concede anything is a report that is not believed on the points where it is right, and the instructing solicitor needs to know the weaknesses before the other side finds them.'],
      i: ['Instructed by an insurer or a court', 'Where the instruction is joint or the report is for the court, the duty to the court is the only one in play, and it was always the overriding one anyway.']
    };
    const sd = S[side] || S.c;
    rows.push([sd[0],'has',sd[1]]);

    const gaps = rows.filter(function(x){ return x[1]==='gap'; }).length;
    const STG = {
      screen:['Screening','At screening the useful output is not an opinion but a triage: is there a case, on the face of the records, worth the cost of a full report? That answer is cheap and the alternative is expensive.'],
      pre:  ['Pre-action','The chronology is the work. A timed, sourced chronology with every entry referenced to a page in the bundle is what every later document is built from, and it is the artefact that survives a change of expert or counsel.'],
      rep:  ['Report required','The report is drafted to the rules of the court it is going to, and the opinion is given by a clinician in the relevant specialty who signs it and owes the duty to the court.'],
      resp: ['Responding to another expert','The task is to identify where the two reports actually disagree, which is usually narrower than it appears, and to separate disagreements of fact from disagreements of opinion. Most joint statements would be half as long if that were done first.'],
      trial:['Preparing for trial','Every proposition in the report traced back to the record that supports it, so that a question in the witness box is answered from the document rather than from memory.']
    };
    const st = STG[stage] || STG.pre;

    out(r,
      '<div class="tout__hd"><b>'+(gaps? gaps+' issue'+(gaps>1?'s':'')+' that will shape the report' : 'The framework for this case')+'</b><span>'+esc(j[0])+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Element</b><span>What the law and the rules actually require</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>'+esc(st[0])+'.</b> '+st[1]+' <b>And what we are:</b> we are a medical record review, chronology, literature and drafting service. We are not solicitors and this is not legal advice. We do not decide whether a claim should be brought, settled or defended &mdash; that is for the instructing lawyer &mdash; and we do not offer a view on quantum. Where an opinion on the medicine is required, it is given by a clinician practising in the relevant specialty, who signs it in their own name and owes the duty to the court that overrides every other obligation, including to whoever is paying. A supplier who offers a &ldquo;strong case&rdquo; is offering you something an expert cannot properly provide; what an expert provides is a <i>defensible</i> one, and the difference is the whole of the professional obligation.</p></div>'+
      '<p class="tmeth"><b>Sources, and three corrections.</b> CPR Part 35 and Practice Direction 35 read at justice.gov.uk on 22 September 2026, including rule 35.3 on the overriding duty, rule 35.10 on material instructions, and the statement of truth at PD 35 paragraph 3.3. The National Medical Commission&rsquo;s own site, nmc.org.in, read the same day, confirming its establishment under the National Medical Commission Act 2019 and describing the MCI as erstwhile. The Oxford Centre for Evidence-Based Medicine levels of evidence at cebm.ox.ac.uk. Case citations as reported. <b>What is worth checking on any medico-legal page.</b> &ldquo;Standard of care analysis aligned with international guidelines&rdquo; &mdash; there is no international standard of care, it is set by the jurisdiction. The <b>MCI</b> listed among Indian regulators, or hedged as &ldquo;MCI/NMC&rdquo;, when it no longer exists. &ldquo;Level A evidence&rdquo; with no framework named beside it. And section 43A of the Information Technology Act 2000 given as the Indian data-protection basis, when India has enacted the <b>Digital Personal Data Protection Act 2023</b>; we confirm its commencement and rules position at the start of any Indian instruction rather than asserting a status we have not checked. <b>This tool is a planning aid, not legal advice</b>, and nothing in it substitutes for the instructing lawyer&rsquo;s judgement on the law of their own jurisdiction.</p>'
    );
  }); };


  /* ════ Medical & scientific writing · 08 · Framework router (hub) ═══════
     This hub carried the best compliance section on the site and its
     children inherited none of it — Thought Leadership and Marketing
     Communication both listed COPE and ICMJE, which govern journals.
     This router is the structural fix: name the output, get the body
     that actually governs it, and the page that handles it. */
  TOOLS.smc = function(r){ wire(r, function(){
    const out_ = seg(r,'out'),
          aud  = str(r,'aud'),
          reg  = str(r,'reg'),
          prod = chk(r,'prod'),
          spon = chk(r,'spon'),
          acc  = chk(r,'acc');

    const REG = {
      uk:['United Kingdom','the <b>ABPI Code of Practice, 2024 edition</b>, administered by the PMCPA, over the Human Medicines Regulations 2012, with MHRA guidance alongside'],
      eu:['European Union','the <b>EFPIA Code of Practice</b> and the relevant national association code, over Directive 2001/83/EC'],
      us:['United States','<b>FDA rules enforced by OPDP</b> under the Federal Food, Drug and Cosmetic Act &mdash; sections 201, 301 to 304 and 502, with 21 CFR parts 200, 201 and 202 &mdash; plus the PhRMA Code for medicines and the AdvaMed Code for devices'],
      ca:['Canada','the <b>PAAB Code of Advertising Acceptance</b> for healthcare-professional material, with Ad Standards for consumer-directed material, inside Health Canada&rsquo;s framework under the Food and Drugs Act'],
      au:['Australia','the <b>Therapeutic Goods Advertising Code</b> under the Therapeutic Goods Act 1989, with Medicines Australia&rsquo;s Code of Conduct'],
      jp:['Japan','the <b>PMD Act</b> &mdash; the Act on Securing Quality, Efficacy and Safety of Products Including Pharmaceuticals and Medical Devices, which is what the <i>Pharmaceutical Affairs Law</i> was renamed in 2014. This page called it by the old name until the present rebuild, twelve years on. Alongside it, the MHLW guidelines on sales information provision activities and the JPMA code'],
      multi:['More than one market','the code of every market the material reaches, with the strictest applicable rule governing any shared asset']
    };
    const g = REG[reg] || REG.multi;

    const O = {
      paper: ['A journal article or conference abstract',
        '<b>ICMJE and COPE</b>, and this is the only output on this list they govern. The ICMJE Recommendations, updated January 2026, set the four authorship criteria &mdash; all four must be met by every author &mdash; and added a section on artificial intelligence and a requirement that all authors be able to review the data supporting the results. Writing assistance, technical editing, language editing and proofreading do not confer authorship; they are acknowledged. COPE governs publication ethics: text recycling, corrections, retractions, authorship disputes. Contributions are recorded in CRediT, ANSI/NISO Z39.104-2022, fourteen roles. The reporting guideline follows the design &mdash; CONSORT 2025, SPIRIT 2025, PRISMA 2020, STROBE, ARRIVE 2.0, STARD 2015, TRIPOD+AI, CHEERS 2022, COREQ, SRQR or CARE.',
        'Scientific and academic writing','#/scientific-writing'],
      reg: ['A regulatory or submission document',
        '<b>The ICH guidelines and the regional regulations</b>, each document governed by a specific instrument. E6(R3) for good clinical practice, M11 for protocols, E3 for clinical study reports, M4(R4) for the CTD, E2C(R2) for PBRERs, E2F for DSURs, E2E for pharmacovigilance planning. For devices, MDR Annex XIV and IVDR Annex XIII with the MDCG guidance, and ISO 14155, 14971 and 20417. <b>No journal body governs any of it</b>, and the version of each instrument has to be confirmed at project start rather than carried forward.',
        'Regulatory writing','#/regulatory-writing'],
      cme: ['An education activity for clinicians',
        acc
          ? '<b>The accreditation system’s own rules.</b> In the US, the ACCME Standards for Integrity and Independence &mdash; five Standards, effective 1 January 2022 &mdash; and the accreditation criteria; note that ACCME accredits <i>organisations</i>, and activities are <i>designated</i> for credit rather than accredited. The AMA owns the <i>AMA PRA Category 1 Credit</i> designation and is not an accreditor. In Europe the EACCME accredits individual activities under its 3.0 criteria, which is a genuinely different structure. In the UK there is no credit target: the GMC mandates no number of CPD points.'
          : 'If it is <b>not</b> accredited, no accreditation body governs it and it should not be described as CME. That is a real option and a legitimate one &mdash; training material, a scientific update, a meeting presentation. What it must not do is borrow the language of accredited education without the obligations, which is the commonest misuse in this field.',
        acc?'CME content development':'Physician training content', acc?'#/cme-content':'#/physician-training'],
      promo:['Promotional material',
        'In <b>'+g[0]+'</b>, '+g[1]+'. <b>Not COPE, and not the ICMJE</b> &mdash; which is what this hub&rsquo;s own child page listed until the present rebuild. Whether the material may be addressed to this audience at all is the first question: promoting a prescription medicine to the general public is prohibited in almost every market other than the United States.',
        'Marketing communication','#/marketing-communication'],
      lead: ['A report, white paper or bylined article',
        prod
          ? 'Because it names a product, it is capable of being promotion whatever the format is called, and in <b>'+g[0]+'</b> it is governed by '+g[1]+'. A white paper is not exempt because it is long. <b>The usual recommendation is to take the product out</b> &mdash; a piece arguing at the level of the disease, the evidence or the health-system problem reaches a wider audience under far lighter rules and is almost always the better piece.'
          : '<b>Nothing formal, and that is the honest answer.</b> No body governs corporate thought leadership, and no code certifies it. What applies is advertising-disclosure law where a placement is paid &mdash; the CAP Code and the Advertising Standards Authority in the UK, the Federal Trade Commission&rsquo;s endorsement rules in the US &mdash; and, beyond that, a house standard. Ours is one sentence: a reader should be able to tell from the piece itself who wrote it, who paid for it and what interest the author has in being believed. Citing a journal ethics body here, as our own child page did, is not a higher standard.',
        'Thought leadership and editorial design','#/thought-leadership'],
      pt:   ['Material for patients or the public',
        (prod
          ? '<b>If it names a prescription medicine and reaches the public, it is prohibited in '+g[0]+'</b> unless that market is the United States &mdash; one of very few that permits direct-to-consumer advertising of prescription medicines at all. Disease-awareness material that does not identify the product is the available route, and holding that line is harder than describing it. '
          : 'No product named, so the promotional codes do not engage. ')+
        'What governs instead is comprehensibility, and it should be measured rather than asserted &mdash; a reading level tested, not a claim that the language is plain. Where the material relates to a trial, the EU CTR requires a lay summary of results under Article 37(4) and Annex V, written to the Commission&rsquo;s Good Lay Summary Practice.',
        'Patient education content','#/patient-education-content']
    };
    const o = O[out_] || O.paper;

    const extra = [];
    if(spon) extra.push(['The research is company-sponsored','mid',
      '<b>Then GPP 2022 applies alongside whatever else governs the output.</b> Good Publication Practice for company-sponsored biomedical research, published in the <i>Annals of Internal Medicine</i> on 30 August 2022 and stewarded by ISMPP &mdash; the third update of the 2003 original after GPP2 in 2009 and GPP3 in 2015. GPP3 is superseded and there is no GPP4: that was the working title during development, and it still turns up listed as &ldquo;GPP3/GPP4&rdquo; as though both editions were live. Do not confuse GPP 2022 with the separate GPCAP recommendations on conference abstracts and presentations, updated in 2026.']);
    if(prod && out_!=='promo' && out_!=='lead' && out_!=='pt') extra.push(['It names a product','mid',
      'Which can pull a piece into the promotional codes even where its primary framework is something else. A journal article is not promotional material; a reprint used as a sales aid is. A regulatory document is not promotion; the same claim lifted into a brochure is. <b>The format does not decide it &mdash; the use does</b>, and in '+g[0]+' the applicable rules are '+g[1]+'.']);
    if(aud==='pub' && out_!=='pt') extra.push(['The audience is the general public','gap',
      '<b>Check this before anything else.</b> Most of the frameworks above assume a professional audience. Material about a prescription medicine reaching the public is prohibited in almost every market other than the United States, and reach is the test rather than intent &mdash; professional material on an open channel is public material. Where an output has to reach the public, it is usually a different piece rather than the same piece with a disclaimer.']);

    out(r,
      '<div class="tout__hd"><b>'+esc(o[0])+'</b><span>'+esc(g[0])+'</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What governs it, and where it is handled</span></div>'+
      '<div class="trow trow--txt trow--flag trow--has"><b>What governs it</b><span>'+o[1]+'</span></div>'+
      extra.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="trow trow--txt"><b>Where we handle it</b><span><a class="tlink" href="'+o[3]+'" data-nav>'+esc(o[2])+'</a> &mdash; and that page now carries the framework above on its own face, rather than relying on you having read this one.</span></div>'+
      '<div class="tverd"><p><b>Why this router exists.</b> A hub page will often carry a genuinely expert compliance section: naming the Prescription Drug Marketing Act and the Federal Food, Drug and Cosmetic Act, Directive 2001/83/EC, Health Canada and the PAAB Code, the TGA and the Therapeutic Goods Act 1989, the PhRMA Code and the AdvaMed Code of Ethics. <b>Its own child pages inherited none of it.</b> Thought Leadership and Marketing Communication both listed COPE and the ICMJE &mdash; journal publication ethics bodies &mdash; as the standards governing executive reports, investor white papers, website copy and campaign material. The right answer was one click away the entire time. That is a structural failure rather than a knowledge one, and the fix is not a better paragraph on this page; it is each child page naming what governs it, which they now do.</p></div>'+
      '<p class="tmeth"><b>Sources, and three corrections to this page.</b> ICMJE Recommendations, PDF dated January 2026 &mdash; note icmje.org&rsquo;s HTML pages still showed the January 2024 text when we checked, so cite the PDF. GPP 2022 via ismpp.org. CRediT: ANSI/NISO Z39.104-2022. ABPI Code current edition confirmed on the PMCPA&rsquo;s own site on 22 September 2026; EFPIA scope on efpia.eu the same day. FDA statutory basis from the OPDP regulatory information page. ACCME Standards and criteria, and EACCME 3.0 criteria, from accme.org and uems.eu. <b>What is worth checking on any page like this.</b> A page title beginning with the word &ldquo;Best&rdquo; &mdash; a self-declared superlative, unsupported, and a comparative-advertising risk in exactly the regulated markets this work addresses. Japan&rsquo;s <b>Pharmaceutical Affairs Law</b> listed as current, when it was renamed the PMD Act in <b>2014</b> &mdash; twelve years of citing a statute by a name it no longer has. And a compliance list naming journal bodies for work no journal body governs.</p>'
    );
  }); };


  /* ════ Editing & translation · 01 · Translation workflow scoper ════════
     Built because the live page said "To guarantee 100% quality" and
     "our certified translator" while naming neither ISO 17100 nor any
     certifying body — and displayed COPE and ICMJE, two biomedical
     journal ethics bodies with no jurisdiction over translation. */
  TOOLS.trw = function(r){ wire(r, function(){
    const doc  = seg(r,'doc'),
          dir  = str(r,'dir'),
          lang = str(r,'lang'),
          wc   = Math.max(200, num(r,'wc',5000)),
          cert = chk(r,'cert'),   /* needs a certified translation */
          mt   = chk(r,'mt'),     /* already machine-translated */
          pro  = chk(r,'pro'),    /* PRO / COA instrument */
          reg  = chk(r,'reg');    /* regulatory submission */

    const rows = [];

    /* ── what governs it ───────────────────────────────────────────────*/
    rows.push(['The standard that actually governs this','has',
      '<b>ISO 17100:2015</b> &mdash; Translation services, requirements for translation services &mdash; with Amendment 1 published 5 September 2017. It is the only translation-specific standard a provider can be certified against, and its defining requirement is the one most vendors quietly skip: <b>the target content must be revised by a person other than the translator</b>, checking it against the source. Under 17100 those words are technical. <i>Revision</i> is a bilingual examination of the target against the source. <i>Review</i> is a monolingual examination of the target alone. <i>Proofreading</i> is examining revised content before printing. <i>Check</i> is what the translator does to their own work. A provider who says &ldquo;TEP&rdquo; is using industry jargon, not ISO terminology &mdash; the standard has no such term. <b>One honest note on our own credentials:</b> Pubrica holds ISO 9001 certification for quality management. ISO 9001 contains nothing about translation, linguistics or translator competence, and it should not be read as a translation credential. Our workflow is built to ISO 17100&rsquo;s structure and we say that rather than implying the 9001 certificate covers it.']);

    /* ── the workflow ──────────────────────────────────────────────────*/
    rows.push(['The workflow you get','has',
      '<b>Translate &rarr; check &rarr; revise &rarr; review &rarr; final verification.</b> The translator translates and checks their own work. A <b>second linguist revises it against the source</b> &mdash; that is the step ISO 17100 requires and the step that separates a two-linguist service from a one-translator one. A subject editor then reviews the English alone for the conventions of your field. ']);

    /* ── language pairs ────────────────────────────────────────────────*/
    const L = {
      zh:['Chinese','Simplified and Traditional handled separately, because they are not a formatting switch. Term bases differ between mainland, Taiwan and Hong Kong usage in technical fields.'],
      ja:['Japanese','Japanese to English is among our most frequent pairs. Term bases are agreed with you before drafting, because field conventions differ more than general usage does.'],
      ko:['Korean',''],
      es:['Spanish','Regional variety agreed at the start &mdash; Iberian and Latin American conventions diverge in medical and technical register, and &ldquo;Spanish&rdquo; alone is not a specification.'],
      fr:['French',''],
      de:['German',''],
      it:['Italian',''],
      pt:['Portuguese','European and Brazilian treated as separate targets.'],
      ar:['Arabic','Right-to-left layout is a typesetting problem as well as a language one, and figures, units and embedded English terms need explicit handling.'],
      ru:['Russian',''],
      oth:['Another language','Tell us the pair. Where we cannot staff a qualified translator <i>and</i> an independent reviser in that pair, we say so and decline rather than routing it through a third language.']
    };
    const l = L[lang] || L.oth;
    rows.push([(dir==='in'? 'Into English from ':'From English into ')+l[0],'mid',
      (l[1]? l[1]+' ':'')+
      (dir==='in'
        ? 'Translating <i>into</i> English for publication is the commonest direction here, and the constraint is that the English has to read as though written by somebody working in your field &mdash; which is a subject-editing problem on top of a translation one. That is why the review step is done by an editor in the discipline rather than a generalist.'
        : 'Translating <i>out of</i> English means the reviser has to be a native speaker of the target working in that market. We do not accept a pair where we cannot staff that.')]);

    /* ── the MT question ───────────────────────────────────────────────*/
    if(mt) rows.push(['You have already machine-translated it','mid',
      'Then what you need is post-editing, not translation, and it is a different service at a different price &mdash; covered on our <a class="tlink" href="#/post-editing" data-nav>post-editing</a> page and governed by <b>ISO 18587</b> rather than ISO 17100. Note that ISO 17100 explicitly <b>excludes</b> raw machine translation output plus post-editing from its scope, so a provider cannot claim 17100 conformity for a post-editing job. One practical warning: if the machine output is poor enough, post-editing it costs more than translating from the source, and we will tell you which you are in after reading a sample rather than after invoicing you.']);

    /* ── certified translation ─────────────────────────────────────────*/
    if(cert) rows.push(['You need a &ldquo;certified&rdquo; translation','gap',
      '<b>Then the first thing to establish is what your recipient actually means, because the term does not mean the same thing in every country.</b> A certified translation is a property of the <i>document</i> &mdash; a translation accompanied by a signed statement &mdash; not a credential held by the translator. In the <b>United States</b>, 8 CFR 103.2(b)(3) requires a translation accompanied by the translator&rsquo;s own certification that it is complete and accurate and that they are competent to translate; the translator certifies themselves, and there is no government register. In the <b>United Kingdom</b> there is no sworn-translator system either: a certified translation is a document accompanied by a statement that it is a true and accurate translation, dated and naming the translator or company. In <b>civil-law jurisdictions</b> &mdash; Spain, Germany, France among others &mdash; sworn translators are court-appointed and do hold legal status, which is a genuinely different thing. <b>So &ldquo;our certified translators&rdquo;, unqualified, is marketing rather than a claim.</b> We will provide a signed certificate of translation naming the translator and the reviser; if your recipient needs a sworn translator in a jurisdiction that has them, we will tell you we are not one.']);

    /* ── PRO instruments ───────────────────────────────────────────────*/
    if(pro) rows.push(['It is a patient-reported outcome or clinical outcome assessment','mid',
      '<b>Then this is linguistic validation, not translation, and back-translation genuinely does apply here</b> &mdash; which is the one place it does. The reference document is the ISPOR Task Force report, Wild D, Grove A, Martin M et al., &ldquo;Principles of Good Practice for the Translation and Cultural Adaptation Process for Patient-Reported Outcomes (PRO) Measures&rdquo;, <i>Value in Health</i> 2005;8(2):94&ndash;104, which remains the field&rsquo;s reference and is still listed by ISPOR under Good Practices. For clinician-reported, observer-reported and performance outcome measures there is a 2020 ISOQOL companion in the <i>Journal of Patient-Reported Outcomes</i>. <b>Note what this means in the other direction:</b> back-translation appears in <i>no</i> translation standard &mdash; not ISO 17100, not 18587, not 5060, not ASTM F2575. Selling back-translation as general quality assurance on a manuscript or an instructions-for-use is selling a PRO method outside the evidence it rests on.']);

    /* ── regulatory ────────────────────────────────────────────────────*/
    if(reg) rows.push(['It is going into a regulatory submission','gap',
      '<b>Then the language requirement is set by the market, not by a general rule, and the commonest error is assuming you need all EU languages.</b> Under the EU MDR, Article 10(11) requires the information in Annex I Section 23 to accompany the device &ldquo;in an official Union language(s) <b>determined by the Member State</b> in which the device is made available&rdquo;. The European Commission maintains a table of what each state requires &mdash; Revision 3, August 2025 &mdash; and it notes that Member States are not obliged to determine a specific language at all, with several accepting English. The Summary of Safety and Clinical Performance has its own rule under MDCG 2019-9 Rev.1: translated into the languages accepted where the device will be sold, with the patient-facing part in every language required for patient IFUs, and <b>if the selected languages do not include English, an English translation as well</b>. For clinical trials under Regulation 536/2014, Part I documents are frequently accepted in English while Part II &mdash; the consent form, the participant information sheet, recruitment material &mdash; is in the national language, per Annex II of the EC and EMA question-and-answer document. The lay summary of results goes into the local language of every country where the trial ran, matched to the languages used in the participant information sheet.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATE = mt? 0.06 : 0.12;
    let price = Math.max(mt?180:240, Math.round(wc*RATE/10)*10);
    let d0 = mt? 4:6, d1 = mt? 7:10;
    if(wc>10000){ d0+=4; d1+=6; } else if(wc>5000){ d0+=2; d1+=3; }
    if(reg){ price=Math.round(price*1.25/10)*10; d0+=2; d1+=3; }
    if(pro){ price=Math.round(price*1.6/10)*10; d0+=5; d1+=8; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RATE.toFixed(2)+' a word</b>'+
      (mt?' for full post-editing to ISO 18587':' for translation with independent revision')+
      (reg?', plus 25% for regulatory version checking and terminology control':'')+
      (pro?', plus 60% for linguistic validation including forward translation, reconciliation, back-translation and cognitive debriefing':'')+
      '. <b>What the rate buys.</b> A qualified translator drafts; a <b>second qualified linguist revises the whole text against the source</b>, which is the step ISO 17100 requires and the step a cheaper quote leaves out; a subject editor then reads the English alone for the conventions of your field. You also get a free certificate of translation, unlimited questions to the translator and the reviser, and free re-translation if the quality is not what we described. Terminology is agreed with you before drafting rather than reconciled afterwards.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>What this quote promises, and what it does not.</b> It does not promise a flawless translation. ISO 5060:2024, which governs evaluation of translated output, works through an error typology with weights, severity levels and rules for counting repeated errors &mdash; you do not build a severity scale for a process that is free of error. What we do promise is bounded and has a named remedy: if you are not satisfied with the quality of the translation, we retranslate your paper at no added cost. Every rate above includes revision by a second qualified linguist against the source, which is the ISO 17100 structure and the reason this is not a $0.05 service.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>ISO 17100:2015 and Amd 1:2017, ISO 18587:2017 and ISO 5060:2024, with revision records, at iso.org &mdash; ISO 18587 is at stage 90.92 with a draft revision, ISO/DIS 18587, balloting since 4 September 2026 and retitled &ldquo;post-editing of <i>non-human</i> translation output&rdquo; to take in AI as well as classical machine translation. ISO 17100&rsquo;s own revision is an approved work item only, so a new edition is years away. Definitions of revision, review, check and proofreading from the standard&rsquo;s published terms. US certified-translation requirement from 8 CFR 103.2(b)(3) at eCFR; UK position from the Chartered Institute of Linguists. MDR language requirements from Article 10(11) and the European Commission&rsquo;s language requirements table, Revision 3, August 2025; SSCP requirements from MDCG 2019-9 Rev.1. CTR position from the EMA&rsquo;s CTIS guidance. All checked 22 September 2026. <b>Two cautions worth passing on:</b> there is no ISO 21999 &mdash; it appears in vendor marketing and certification-selling sites with no ISO catalogue entry behind it. And ISO 20771, for individual legal translators, is in a withdrawal ballot that closed on 12 August 2026, so do not buy certification against that either.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 02 · Post-editing scoper ════════════════
     Built because the live page sold full-scale and light-scale
     post-editing — correctly, in its own words — while naming neither
     ISO 18587 nor any MT engine, CAT tool or translation memory, and
     displayed COPE and ICMJE as its compliance credentials. */
  TOOLS.mtp = function(r){ wire(r, function(){
    const src  = seg(r,'src'),
          dest = str(r,'dest'),
          qual = str(r,'qual'),
          wc   = Math.max(200, num(r,'wc',5000)),
          dis  = chk(r,'dis'),   /* publisher declaration */
          term = chk(r,'term'),  /* glossary or TM exists */
          nos  = chk(r,'nos');   /* source no longer available */

    const rows = [];

    /* ── what level the destination demands ────────────────────────────*/
    const fullNeeded = (dest!=='int');
    const startOver  = (qual==='poor' && fullNeeded);

    rows.push(['The standard that governs this','has',
      '<b>ISO 18587:2017</b> &mdash; Translation services, post-editing of machine translation output, requirements &mdash; published 12 April 2017. It is the standard this service is built to, and the document that defines the two levels sold here. <b>Full post-editing</b> is defined as producing output &ldquo;comparable to a product obtained by human translation&rdquo;. <b>Light post-editing</b> is defined as producing &ldquo;a merely comprehensible text&rdquo;. Note the asymmetry most providers do not mention: <b>only full post-editing carries normative requirements.</b> Light post-editing sits in Annex B, which is informative, so a service can be built <i>to</i> ISO 18587 for full post-editing in a way it cannot for light. A second point worth your knowing: <b>ISO 17100, the translation standard, explicitly excludes machine translation plus post-editing from its scope</b> &mdash; so no provider can claim 17100 conformity for this work, and any that does is telling you they have not read it. <b>And the standard is being rewritten as you read this:</b> ISO/DIS 18587 is at stage 40.20 with its ballot opened 4 September 2026, retitled post-editing of <b>non-human</b> translation output &mdash; widening it from classical machine translation to large language model output.']);

    /* ── where the draft came from ─────────────────────────────────────*/
    const S = {
      nmt:['A neural machine translation engine','DeepL, Google Translate, Microsoft Translator and their peers. These fail in a characteristic way that is worth naming, because it determines where the post-editor has to look. <b>Neural output is fluent before it is correct.</b> It produces grammatical, confident target text that occasionally inverts a negation, drops a hedge, silently standardises a term the source deliberately varied, or omits a clause entirely without leaving a gap where the omission was. None of those show at the sentence level, which is the level at which an editor reading only the target will be working.'],
      llm:['A large language model','ChatGPT, Claude, Gemini or similar. Everything true of neural machine translation is true here, plus one failure mode of its own: <b>a language model will occasionally improve on the source.</b> It smooths an awkward sentence into a clearer claim than the author made, resolves an ambiguity the author left open, and adds a connective that asserts a causal relation the source only implied. For a research manuscript that is not a translation error, it is a <b>data integrity</b> problem, and it is invisible to anyone reading the English alone. This is also the case the standard is being revised to cover &mdash; ISO/DIS 18587 retitles itself to take in non-human translation output generally.'],
      cat:['A CAT tool with translation memory and machine translation','Trados Studio, memoQ, Phrase or similar, where segments come from a translation memory, a term base and an MT engine mixed together. <b>This is the easiest case to post-edit and the hardest to audit</b>, because segment provenance differs line by line: a 100% TM match, a fuzzy match and a raw MT segment look identical in the delivered file. Where the tool can export match rates we ask for them, because they change the price honestly &mdash; and where it cannot, we price the file as raw MT rather than guessing in our own favour.'],
      hum:['An earlier human translation','<b>Then this is not post-editing and ISO 18587 does not apply.</b> Editing a human translation against its source is <i>revision</i> under ISO 17100, and reading the target alone is <i>review</i>. The words are not interchangeable and the price is different. We have put this option in the tool because a meaningful share of enquiries described as post-editing turn out to be this, and taking the job under the wrong name would let us charge a post-editing rate for revision work or, more often, quote a revision price for a file that is actually raw machine output.'],
      unk:['You are not certain','<b>Say so rather than guessing, and the reason is not politeness.</b> Post-edited machine output looks like a human draft and behaves like neither. A translator handed it without being told reads it as a human draft and corrects at the sentence level &mdash; which is precisely the level at which its errors do not appear. We can usually tell from a sample of 300 words or so: characteristic term drift, uniform sentence rhythm, and hedges that have quietly become assertions. We will tell you what we think it is before quoting.']
    };
    const sO = S[src] || S.unk;
    rows.push(['Where the draft came from', src==='hum'?'gap':(src==='unk'?'mid':'has'), '<b>'+sO[0]+'.</b> '+sO[1]]);

    /* ── which level ───────────────────────────────────────────────────*/
    if(startOver){
      rows.push(['The honest recommendation: do not post-edit this','gap',
        '<b>You have told us the raw output is poor and that it has to reach a published or regulated standard. In that combination, post-editing costs more than translating from the source, and takes longer.</b> The reason is mechanical rather than rhetorical: a post-editor working on bad output spends their time diagnosing what the machine did to the meaning, and that diagnosis has to be done against the source, sentence by sentence &mdash; which is the whole of translation plus the overhead of untangling somebody else&rsquo;s wrong guesses. Worse, heavily post-edited bad output tends to retain its original sentence architecture, so it reads like a translation forever. <b>We will quote translation with independent revision at $0.12 a word</b> and say plainly that discarding the machine version is the cheaper answer. If you would rather we tried the post-edit anyway, we will &mdash; after a paid 500-word pilot, so the decision is made on evidence rather than on either of our opinions.']);
    } else if(fullNeeded){
      rows.push(['The level you need: full post-editing','has',
        '<b>Because it is going somewhere that will be read by people who are judging it.</b> Full post-editing under ISO 18587 aims at output comparable to human translation: accurate to the source, correct in grammar, syntax and punctuation, consistent in terminology, appropriate in register, and formatted for its destination. In practice it means the post-editor works <b>with the source open beside the target</b> throughout &mdash; which is the single operational difference from editing, and the reason post-editing cannot be done by an editor who does not read the source language.']);
    } else {
      rows.push(['The level you need: light post-editing','mid',
        '<b>Because it is for internal comprehension rather than publication.</b> Light post-editing under ISO 18587 aims at a merely comprehensible text: the meaning is right, nothing has been added or omitted, and offensive or plainly wrong output is corrected &mdash; but stylistic awkwardness is left alone. It is a legitimate, useful and much cheaper product, and it is the right buy for a document you need to <i>understand</i> rather than one you need to <i>publish</i>. Two cautions. <b>Light post-editing is in Annex B of the standard, which is informative rather than normative</b>, so nobody can be certified against it &mdash; the honest formulation is &ldquo;to the light post-editing definition in ISO 18587&rdquo;, not &ldquo;ISO 18587 certified&rdquo;. And the engagement at this level is bounded rather than absent: the post-editor still reads every sentence against the source, then stops once the text is correct.']);
    }

    /* ── the destination ───────────────────────────────────────────────*/
    const D = {
      pub:['A journal submission','Then full post-editing is the floor rather than the ceiling, and you should expect a subject-matter review of the English on top of it &mdash; because a reviewer&rsquo;s first impression of a translated manuscript is formed by whether it reads as though written by somebody in the field, which is a different question from whether it is correct.'],
      reg:['A regulatory or market-facing document','Then the terminology is not a stylistic matter: approved product terms, labelling language and the market&rsquo;s own required phrasing are fixed inputs, and the post-editor works against them rather than around them. Machine output routinely substitutes a plausible synonym for an approved term, which is invisible to a reader and material to a reviewer.'],
      web:['A website, report or marketing text','Then two things fall outside post-editing proper and are priced separately if you want them: transcreation, where the target is deliberately not a translation of the source, and layout adaptation, where text expansion or contraction breaks the design. Post-editing will give you correct target text; it will not give you a shorter headline that still works.'],
      int:['Internal understanding only','Then light post-editing is the right buy and paying for more is waste. Two boundaries worth stating: do not let an internally post-edited document become an externally published one without re-scoping it, which is the commonest way a light post-edit ends up somewhere it was never built for &mdash; and do not use it as a basis for a decision with a regulatory consequence.']
    };
    const dO = D[dest] || D.pub;
    rows.push(['Where it is going','mid','<b>'+dO[0]+'.</b> '+dO[1]]);

    /* ── the source ────────────────────────────────────────────────────*/
    if(nos) rows.push(['The source document is not available','gap',
      '<b>Then what you are buying is not post-editing, and we will not label it as such.</b> Post-editing is defined against a source: ISO 18587 requires the post-editor to compare target against source, and every one of the failure modes that makes machine output dangerous &mdash; inverted negation, dropped hedge, omitted clause, substituted term &mdash; is detectable <i>only</i> by that comparison. Without the source we can produce clean, idiomatic, internally consistent English, and we can flag sentences that read as though something has gone wrong. We cannot tell you whether the meaning is right. That is monolingual editing of machine output, we price it as <a class="tlink" href="#/manuscript-editing" data-nav>editing</a> rather than post-editing, and the limitation is stated on the delivery note rather than buried in it.']);

    /* ── glossary ──────────────────────────────────────────────────────*/
    if(term) rows.push(['You have a glossary or translation memory','has',
      'Good &mdash; it is the single input that most improves the result, and it moves the price in your favour. A term base gives the post-editor a decidable answer where the machine has produced a plausible one, which converts the slowest part of the job into the fastest. Where a translation memory exists we ask for the TMX rather than a PDF of the terms, and where match-rate data can be exported we use it to price honestly rather than treating the whole file as raw output. Your term base stays yours: it is returned at the end of the project and it is not pooled into a shared resource for other clients, which is a routine industry practice that is rarely advertised.']);

    /* ── disclosure ────────────────────────────────────────────────────*/
    if(dis) rows.push(['You need to declare this to a publisher','mid',
      '<b>Then note that there is no uniform rule, and the safe course is to disclose.</b> <b>Taylor &amp; Francis</b> lists &ldquo;copyediting, language improvement and translations&rdquo; among supported uses and requires the tool&rsquo;s full name and version number, how it was used and why. <b>Springer Nature</b> lists translation in its permitted tier, with disclosure encouraged and human accountability explicitly non-transferable. <b>Elsevier</b>, in a policy updated July 2026, permits AI &ldquo;only to improve the language and readability&rdquo; of the work and requires a declaration statement &mdash; but does not name translation. <b>Wiley</b>, July 2026, requires disclosure of AI technologies used and exempts tools used solely for spelling, grammar and general editing, without addressing translation either. The <b>ICMJE</b> added an AI section in January 2026 and does not mention translation. <b>So two of four major publishers address translation explicitly, and two do not.</b> We give you a statement naming the engine or model, the version where it is knowable, and the level of post-editing applied, so you can paste it into whichever form the journal puts in front of you.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATE = startOver? 0.12 : (fullNeeded? 0.06 : 0.035);
    const MIN  = startOver? 240  : (fullNeeded? 180  : 120);
    let price = Math.max(MIN, Math.round(wc*RATE/10)*10);
    let d0 = startOver? 6 : (fullNeeded? 4 : 3),
        d1 = startOver? 10: (fullNeeded? 7 : 5);
    if(wc>10000){ d0+=4; d1+=6; } else if(wc>5000){ d0+=2; d1+=3; }
    if(term){ price=Math.round(price*0.9/10)*10; }
    if(qual==='good' && !startOver){ price=Math.round(price*0.9/10)*10; }
    if(qual==='poor' && !startOver){ price=Math.round(price*1.2/10)*10; d0+=1; d1+=2; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RATE.toFixed(3).replace(/0$/,'')+' a word</b> for '+
      (startOver? 'translation with independent revision, because post-editing this file would cost more'
        : (fullNeeded? 'full post-editing to the ISO 18587 definition' : 'light post-editing to the Annex B definition'))+
      (term? ', less 10% because you are supplying a term base or translation memory':'')+
      (qual==='good' && !startOver? ', less 10% because the raw output is clean':'')+
      (qual==='poor' && !startOver? ', plus 20% because the raw output needs heavy intervention':'')+
      '. <b>What the rate buys.</b> A post-editor who reads the source language, working with <b>the source open beside the target</b> throughout &mdash; which is the operational difference from editing and the reason this cannot be done by an editor who reads only the output. Both ISO 18587 levels are priced here, full and light, so you are not pushed to the expensive one by default. Where the raw output is poor enough that translating afresh would cost less, we say so after reading a sample rather than after invoicing.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>Which level you are buying.</b> Accuracy sits in both: meaning right, nothing added, nothing omitted, plainly wrong output corrected. Full post-editing then takes the text to publication standard &mdash; terminology consistency, grammar and register, formatting. Light stops once the text is correct and comprehensible, and the post-editor&rsquo;s engagement with the content is deliberately bounded rather than absent. Where a supplier quotes you an acronym rather than a level &mdash; MTPE, PEMT, neither of which appears in the standard &mdash; ask which level it means: the price difference between light and full is roughly a factor of two.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>ISO 18587:2017 and its definitions of full and light post-editing, including the placement of light post-editing in informative Annex B; the revision record showing ISO/DIS 18587 at stage 40.20 with a ballot opened 4 September 2026 and the retitling to &ldquo;non-human translation output&rdquo;; ISO 17100:2015 clause 1 scope exclusion of raw MT plus post-editing; ISO 5060:2024 on evaluation &mdash; all at iso.org. Publisher policies read at springernature.com, taylorandfrancis.com, elsevier.com and wiley.com, with Elsevier and Wiley both updated July 2026, and the ICMJE Recommendations January 2026 update. All checked 22 September 2026.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 03 · Thesis editing boundary checker ═════
     Built because the live page advertised "Structure Check", "Advanced
     Commentary" and "strengthen arguments" on a thesis page, with not a
     single line about institutional policy or declaration — while the
     IPEd guidelines restrict thesis editing to copyediting and
     proofreading and prohibit corrections to content, substance or
     structure. This is the largest compliance exposure on our site. */
  TOOLS.thb = function(r){ wire(r, function(){
    const reg  = seg(r,'reg'),
          lvl  = str(r,'lvl'),
          stg  = str(r,'stg'),
          wc   = Math.max(1000, num(r,'wc',40000)),
          sup  = chk(r,'sup'),   /* supervisor approval obtained */
          pol  = chk(r,'pol'),   /* has read the institution's policy */
          ai   = chk(r,'ai'),    /* AI used in drafting */
          esl  = chk(r,'esl');   /* English an additional language */

    const rows = [];

    /* ── the boundary ──────────────────────────────────────────────────*/
    rows.push(['The line a thesis editor may not cross','has',
      '<b>Thesis editing is not manuscript editing with a different word on the cover.</b> The clearest and most current published boundary is the <b>IPEd guidelines for editing theses, July 2025</b> &mdash; retitled from the 2019 &ldquo;Guidelines for editing research theses&rdquo; and announced on 5 November 2025, so a supplier citing the 2019 document is citing a superseded one. The guidelines say that professional thesis editing services <b>should be restricted to copyediting and proofreading</b>, as detailed in Part D (Language and illustrations) and Part E (Completeness and consistency) of the IPEd standards. And they say that editors <b>should not make corrections to the content, substance or structure of the thesis</b> &mdash; Part C &mdash; <i>although they may note issues for the student&rsquo;s attention</i>. That last clause is the whole of what a legitimate thesis editor can do about a structural problem: <b>describe it, and leave it.</b> This tool exists to put that boundary in front of you before you order rather than after, because a service that quietly crosses it puts your examination at risk and not ours.']);

    /* ── what you have asked for ───────────────────────────────────────*/
    const L = {
      pf:['Proofreading only','has',
        'Within the permitted range everywhere we know of. Proofreading is the last read: typographical errors, formatting inconsistencies, and errors introduced during production. It is Part E work. It is also the level most universities describe when they say language editing is allowed, and it is the safest thing to buy if you are unsure what your institution permits.'],
      ce:['Copyediting','has',
        'Within the permitted range under the IPEd guidelines, which name copyediting and proofreading as the services thesis editing should be restricted to. This is Parts D and E: grammar, spelling, punctuation, sentence construction, terminology consistency, reference formatting, and consistency of headings, captions, tables and cross-references. It is the level most theses actually need, and it is what we sell as the standard thesis service.'],
      st:['Structural and argumentative editing','gap',
        '<b>This is outside what we will do to a thesis, and we would rather lose the work than take it.</b> Restructuring chapters, rewriting an argument, strengthening a claim, reordering a literature review or supplying analysis are Part C interventions &mdash; content, substance and structure &mdash; and the IPEd guidelines say an editor should not make them. What we <i>can</i> do, and what the same guidelines explicitly permit, is <b>note the issue for your attention</b>: a written observation that chapter four&rsquo;s argument does not follow from chapter three, handed to you to act on or ignore. You do the work; we describe the problem. If a supplier offers to restructure your thesis, ask them which guideline they are working to.'],
      ns:['You are not sure','mid',
        'Then start from what your institution permits rather than from what you want, and the order to do it in is: read your university&rsquo;s own policy first, ask your supervisor second, buy an editing level third. Most institutions permit language editing and restrict or forbid structural intervention; many require a declaration either way. If your institution publishes nothing, the IPEd guidelines are the most defensible external standard to work to, and we will quote to them.']
    };
    const lo = L[lvl] || L.ns;
    rows.push(['What you have asked for: '+lo[0], lo[1], lo[2]]);

    /* ── region ────────────────────────────────────────────────────────*/
    const R = {
      au:['Australia','gap',
        '<b>The only jurisdiction where this has statutory teeth.</b> The <b>Tertiary Education Quality and Standards Agency Amendment (Prohibiting Academic Cheating Services) Act 2020</b> criminalises providing or advertising academic cheating services to students at Australian higher education providers, and the July 2025 IPEd guidelines cite it directly. That is why the Part C line matters more here than anywhere else: an editor who rewrites your argument is not merely breaching a guideline. The guidelines also tell students to obtain <b>written approval from the principal supervisor</b> before engaging an editor, and to seek the editor&rsquo;s permission to name them in the acknowledgements. We will not take Australian thesis work above copyediting, and we will ask for the supervisor email.'],
      uk:['United Kingdom','mid',
        'No statutory instrument governs thesis editing, and there is no national register of thesis editors. The relevant professional body is the <b>Chartered Institute of Editing and Proofreading</b>, which publishes a guide, <i>Proofreading Theses and Dissertations</i>, 2nd edition, 1 January 2023 &mdash; members-only, so we cite its existence rather than its contents. What governs you in practice is <b>your own institution&rsquo;s regulations</b>, which vary widely: some universities publish a permitted-assistance statement, some require a declaration, some are silent. Where yours is silent we work to the IPEd boundary, because a published external standard is a better answer to an examiner&rsquo;s question than our own judgement.'],
      ca:['Canada','mid',
        'The reference document is <b>Editors Canada&rsquo;s Guidelines for Ethical Editing of Student Texts</b>, published 21 January 2019 in separate graduate and undergraduate versions and free to download. Its distinguishing mechanism is worth knowing before you hire anyone: <b>a permission form co-signed by the editor, the student and the supervisor</b>, stipulating what the editor may do. That is a stronger arrangement than a declaration after the fact, because it settles the scope while it can still be changed. We are happy to sign one. The underlying standards document is Professional Editorial Standards 2024.'],
      us:['United States','mid',
        '<b>There is no national guideline, and this is the gap most likely to catch you out.</b> No US professional body publishes a thesis-editing standard equivalent to IPEd&rsquo;s. So the governing document is your <b>graduate school&rsquo;s own policy</b>, which exists at most institutions, is often buried in a handbook rather than published on the web, and differs between departments at the same university more often than anyone expects. Ask your graduate program coordinator in writing and keep the reply. Where you cannot get an answer, we work to the IPEd boundary and tell you we are doing so.'],
      oth:['Elsewhere','mid',
        'Tell us where and we will look before quoting. Where a national guideline exists we will work to it; where none does, we work to the IPEd boundary &mdash; copyediting and proofreading, nothing touching content, substance or structure &mdash; because it is the clearest published standard available and being able to name the standard you worked to is worth more in a viva than being able to describe your own good intentions.']
    };
    const ro = R[reg] || R.oth;
    rows.push(['Where you are studying: '+ro[0], ro[1], ro[2]]);

    /* ── supervisor approval ───────────────────────────────────────────*/
    rows.push(['Supervisor approval and the acknowledgement', sup?'has':'gap',
      sup
        ? 'Good, and keep the email. The IPEd guidelines ask students to obtain <b>written approval from their principal supervisor</b> to use a professional editor and to provide it to the editor, and we ask for it because an editor who does not is helping you create a problem. The second half of the same requirement is the one people forget: <b>name the editor in the acknowledgements</b>, with wording the editor has agreed. We will supply a form of words naming the editor, the level of editing performed, and the standard it was performed to. A thesis whose acknowledgements say what was done is a thesis with nothing to find.'
        : '<b>Get it before you commission anything, and get it in writing.</b> The IPEd guidelines ask students to obtain written approval from their principal supervisor to use a professional editor &mdash; an email is enough &mdash; and to provide it to the editor. Two reasons this protects you rather than us. It converts a private arrangement into a disclosed one, which is the entire difference between permitted assistance and the other kind. And it surfaces any departmental restriction <i>before</i> you have paid, at the only point where the scope can still be changed. We will start work on the strength of a supervisor&rsquo;s email; we will not start without knowing whether you have one.']);

    /* ── policy read ───────────────────────────────────────────────────*/
    if(!pol) rows.push(['You have not read your institution&rsquo;s own policy','mid',
      '<b>Read it first, because it overrides every external guideline including the ones on this page.</b> Look for a document called something like &ldquo;use of third-party editing services&rdquo;, &ldquo;permitted assistance&rdquo; or &ldquo;academic integrity: proofreading&rdquo; &mdash; usually in the graduate school handbook rather than on the public website, and occasionally only in a departmental document. Three things to look for: <b>what level of editing is permitted</b>, <b>whether a declaration is required</b>, and <b>whether the editor must be named</b>. Send us what you find and we will scope to it. If you cannot find anything, say so and we will quote to the IPEd boundary, which is the most conservative published position and the easiest to defend.']);

    /* ── AI ────────────────────────────────────────────────────────────*/
    if(ai) rows.push(['You have used an AI tool in drafting','gap',
      '<b>Then note that the IPEd guidelines say nothing about it, and neither does most of the literature in this area.</b> The July 2025 revision does not cover generative AI or translation at all, which is a real gap in the best document available and worth knowing rather than discovering. So the governing rule is your institution&rsquo;s, and institutional AI policy is currently the fastest-moving area in academic regulation &mdash; a policy you read eighteen months ago is probably not the policy now. What we will do: tell you plainly which parts of your text read as machine-generated, keep our own editing within the permitted level, and record what we did. What we will not do: disguise AI-generated text, or represent machine-drafted material as your own work. If English is not your first language and you have used AI to draft rather than to check, that is a conversation to have with your supervisor before it is a conversation to have with an editor.']);

    /* ── ESL ───────────────────────────────────────────────────────────*/
    if(esl) rows.push(['English is an additional language for you','has',
      '<b>This is the case the permitted range was designed for, and you should not feel apologetic about it.</b> Language editing of a thesis written by a non-native speaker is what every guideline we have read explicitly permits: grammar, idiom, article use, sentence construction, register and consistency are Part D work. What the same guidelines do not permit, for you any more than anyone else, is an editor supplying the argument. The practical risk for you is a different one: <b>an over-enthusiastic editor smoothing your thesis into prose you could not have written</b>, which is a problem in a viva, where you will be asked to defend sentences aloud. We edit toward your own voice at its clearest rather than toward a house style, and where a sentence needs a change we cannot make within the permitted range, you get a note rather than a rewrite.']);

    /* ── stage ─────────────────────────────────────────────────────────*/
    const ST = {
      dr:['A working draft','Editing a draft that will change substantially is usually a waste of your money: most of what we correct will be rewritten. The exception is a language pass on one chapter, to establish a pattern you can apply yourself to the rest &mdash; which is the cheapest useful thing we sell to a student, and the one we recommend most often.'],
      pre:['Complete, before submission','The right moment. Everything is written, nothing is provisional, and there is time to act on notes. Allow for our turnaround plus your own time to review track changes and respond to notes &mdash; students consistently underestimate the second, which on a full thesis is a working week of real attention.'],
      cor:['Corrections after examination','<b>A different job, and a narrower one.</b> What is permitted here is set by your examiners&rsquo; report and your institution&rsquo;s corrections procedure, not by general editing guidelines &mdash; and a corrections list often <i>requires</i> substantive changes that a pre-submission editor could not have made. We will edit the language of your revised text and check that every listed correction has been addressed, and we will not draft the substantive changes themselves.']
    };
    const so = ST[stg] || ST.pre;
    rows.push(['Where the thesis is now: '+so[0],'mid',so[1]]);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATE = lvl==='pf'? 0.025 : (lvl==='st'? 0.035 : 0.035);
    let price = Math.max(240, Math.round(wc*RATE/10)*10);
    let d0 = 7, d1 = 12;
    if(wc>60000){ d0+=5; d1+=8; } else if(wc>30000){ d0+=3; d1+=4; }
    if(esl){ price=Math.round(price*1.1/10)*10; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RATE.toFixed(3).replace(/0$/,'')+' a word</b> for '+
      (lvl==='pf'? 'proofreading' : 'copyediting within the permitted range')+
      (lvl==='st'? ', because we will quote copyediting plus written notes rather than the structural work you asked for' : '')+
      (esl? ', plus 10% for the additional language pass' : '')+
      '. <b>One entry price, printed once.</b> Ours is $240, and the per-word rate above is the number the quote is built from &mdash; worth checking against any supplier whose body text and package table give you two different starting figures.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>What no thesis editor can offer you.</b> A doctoral examination is a judgement by examiners about your work and your defence of it. No editor influences that outcome, and a service offering to improve your chances of approval is describing the arrangement every academic integrity office exists to find. What is true is more useful: a thesis is read by a committee rather than by a journal, so it answers to your institution&rsquo;s regulation and to the IPEd guidelines &mdash; not to a journal&rsquo;s instructions, an impact factor or a reporting checklist. The scope above is bounded to what those guidelines permit.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div><i>IPEd guidelines for editing theses</i>, July 2025, Institute of Professional Editors, and the 5 November 2025 update notice recording the retitling from the 2019 &ldquo;Guidelines for editing research theses&rdquo; &mdash; permitted scope, the Part C prohibition, the supervisor-approval requirement and the acknowledgement requirement all quoted from that document. <i>IPEd standards for editing practice</i>, 2024, for the Part C, D and E content. TEQSA Amendment (Prohibiting Academic Cheating Services) Act 2020, cited in the IPEd guidelines. Editors Canada, <i>Guidelines for Ethical Editing of Student Texts</i>, 21 January 2019, and <i>Professional Editorial Standards</i> 2024. CIEP, <i>Proofreading Theses and Dissertations</i>, 2nd edition, 1 January 2023 &mdash; members-only, so cited by existence rather than content. All checked 22 September 2026. <b>Two limits on the above.</b> Everything here about what universities require comes from published national guidelines, not from your university &mdash; read yours, in the graduate handbook. And the July 2025 IPEd guidelines contain <b>nothing about generative AI or translation</b>, which is a genuine gap in the best document in this area.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 04 · Reporting guideline and level check ═
     The live page carried the best compliance section on the site —
     CONSORT, PRISMA, STROBE and ARRIVE correctly matched to their study
     types — and then buried it below an ungrammatical promise of
     publication in 61 days. This tool puts the good part on the face of
     the page and drops the number. */
  TOOLS.sce = function(r){ wire(r, function(){
    const des  = seg(r,'des'),
          lvl  = str(r,'lvl'),
          wc   = Math.max(500, num(r,'wc',6000)),
          rev  = chk(r,'rev'),   /* responding to reviewers */
          spon = chk(r,'spon'),  /* company-sponsored */
          ml   = chk(r,'ml'),    /* machine learning / AI methods */
          reg  = chk(r,'reg');   /* prospectively registered */

    const rows = [];

    /* ── the reporting guideline ───────────────────────────────────────*/
    const G = {
      rct:['A randomised controlled trial','<b>CONSORT 2025</b> &mdash; &ldquo;CONSORT 2025 statement: updated guideline for reporting randomised trials&rdquo;, published April 2025 simultaneously in the BMJ, JAMA, the Lancet, Nature Medicine and PLOS Medicine, with its own explanation and elaboration paper. <b>It supersedes CONSORT 2010</b>, and a manuscript prepared against a 2010 checklist in 2026 is prepared against a superseded document &mdash; which is the single most common reporting problem we see, because templates outlive guidelines. Extensions worth knowing: <b>CONSORT-Outcomes 2022</b> for outcome reporting, <b>CONSORT Harms 2022</b> for adverse events, and <b>CONSORT-AI 2020</b> where the intervention involves artificial intelligence. The protocol counterpart is <b>SPIRIT 2025</b>, published the same month in the same five journals.'],
      sr:['A systematic review or meta-analysis','<b>PRISMA 2020</b> &mdash; BMJ 2021;372:n71, and <b>it is still the current version</b>. That last point is worth stating because &ldquo;PRISMA 2026&rdquo; appears in a quantity of online writing and has no primary source behind it: there is no PRISMA 2026, the PRISMA statement site names no successor, and EQUATOR&rsquo;s under-development register lists no update to the main statement. Cite PRISMA 2020. The extensions are where the real work is: <b>PRISMA-S</b> for search reporting, <b>PRISMA-ScR</b> for scoping reviews, <b>PRISMA-IPD</b> for individual participant data, <b>PRISMA-NMA</b> for network meta-analyses, plus abstracts, protocols, harms, equity and complex interventions. Several are being updated, with a PRISMA-NMA revision registered in January 2024 and publication planned for 2026.'],
      obs:['An observational study','<b>STROBE</b>, 2007, and it is still the current version &mdash; no update has been published and none is announced, despite the statement&rsquo;s own site describing revision as an ongoing process. Nineteen years is a long time for a guideline and it is worth knowing rather than assuming a newer one exists. Where your design is more specific, an extension applies: <b>STROBE-MR</b>, 2021, for Mendelian randomisation; <b>RECORD</b> for studies using routinely collected health data; <b>STROBE-nut</b> for nutritional epidemiology. The commonest STROBE failure in submissions we edit is not a missing item at all &mdash; it is a cohort study whose methods describe one thing and whose abstract describes another, which no checklist catches and a reviewer always does.'],
      anim:['Animal research','<b>ARRIVE 2.0</b>, 2020, with its explanation and elaboration paper in PLOS Biology. Its structure is the useful part and it is frequently misread: the <b>Essential 10</b> (items 1 to 10) are &ldquo;the basic minimum that must be included in any manuscript describing animal research&rdquo;, and the <b>Recommended Set</b> (items 11 to 21) &ldquo;complement the Essential 10 and add important context&rdquo;. So a submission is not ARRIVE-compliant because it addresses some items; the Essential 10 are the floor. Randomisation and blinding reporting are where most animal manuscripts fail &mdash; not because the work was not randomised or blinded, but because the paper does not say how.'],
      diag:['A diagnostic accuracy study','<b>STARD 2015</b>, published October 2015 simultaneously in the BMJ, Radiology and Clinical Chemistry, and still the current main version. EQUATOR records a <b>STARD-AI</b> extension from 2025, which we cite as existing rather than describing in detail because we have not read the source paper &mdash; and saying so is better than paraphrasing a record. The STARD item that most often needs work in editing is the flow of participants: a diagram accounting for everybody who entered the study, including those with indeterminate results, which is exactly the population a diagnostic paper is tempted to leave out.'],
      pred:['A clinical prediction model','<b>TRIPOD+AI</b>, BMJ 2024 &mdash; &ldquo;updated guidance for reporting clinical prediction models that use regression or machine learning methods&rdquo;. Note what that title does: it <b>unifies</b> regression and machine learning under one checklist rather than adding an AI annexe to the 2015 TRIPOD. So if you have been treating TRIPOD 2015 as the statistics guideline and looking for a separate AI one, there is only the single 2024 document now. The items that most often fail here are the ones about the data: how missing data were handled, how the sample size was arrived at, and whether the model was evaluated on data it had not seen.'],
      qual:['Qualitative research','<b>COREQ</b>, 2007 &mdash; a 32-item checklist for interviews and focus groups, Tong, Sainsbury and Craig, <i>International Journal for Quality in Health Care</i> &mdash; or <b>SRQR</b>, 2014, O&rsquo;Brien et al. in <i>Academic Medicine</i>, which is broader. Neither has been updated, so both are long-standing rather than current in the way CONSORT is. Check your target journal&rsquo;s instructions, because journals differ on which they require and a few accept either. The COREQ domain that most often needs work in editing is the first: the research team and their relationship to participants, which authors routinely under-report because it feels like it is about them rather than about the study.'],
      econ:['A health economic evaluation','<b>CHEERS 2022</b> &mdash; the Consolidated Health Economic Evaluation Reporting Standards 2022 statement, published January 2022 by an ISPOR Good Research Practices task force, replacing CHEERS 2013. What changed matters for editing: the update pays much more attention to engagement with patients and affected communities, and to the reporting of distributional effects and equity considerations, which a manuscript built on the 2013 checklist will simply not contain.'],
      cas:['A case report','<b>CARE</b>, 2013, published simultaneously in seven journals, with an explanation and elaboration paper by Riley et al. in the <i>Journal of Clinical Epidemiology</i>, 2017. Extensions exist for radiology, acupuncture, physiotherapy, dry needling and therapeutic massage. The CARE item that changes acceptance more than any other is the <b>patient perspective</b>, which most drafts omit entirely &mdash; and the consent statement, which is not optional and which a number of journals check before anything else.'],
      qi:['A quality improvement study','<b>SQUIRE 2.0</b>, 2015, Ogrinc et al. &mdash; Standards for Quality Improvement Reporting Excellence, republished in several journals in 2016. The distinctive SQUIRE requirement, and the one most often missing, is the <b>rationale</b>: an explicit account of the reasoning that connects the intervention to the expected outcome, which is a different thing from a literature review and is frequently the section a quality improvement paper does not have at all.'],
      oth:['Something else','Tell us the design and we will find the guideline before editing rather than after. The <b>EQUATOR Network</b> library currently lists <b>707 reporting guidelines</b>, which is both the reason this step is useful and the reason nobody holds them in their head. Where no guideline fits your design, we will say so rather than forcing the nearest one, because a manuscript edited against the wrong checklist acquires structure it does not need and loses reporting it does.']
    };
    const g = G[des] || G.oth;
    rows.push(['The reporting guideline that governs this','has','<b>'+g[0]+'.</b> '+g[1]]);

    /* ── level ─────────────────────────────────────────────────────────*/
    const L = {
      dev:['Developmental editing','<b>The whole structure is in scope.</b> Developmental editing &mdash; also called substantive, structural or content editing &mdash; deals with content, organisation and structure. In a research manuscript that means the order of the argument, what belongs in results and what belongs in discussion, whether the introduction poses the question the paper answers, and whether the conclusions are supported by what precedes them. It is the most expensive level and the one most often needed by a paper that has been rejected without review. <b>It is also the level we will not perform on a thesis</b>, for reasons set out on our <a class="tlink" href="#/thesis-editing" data-nav>thesis editing</a> page.'],
      sub:['Substantive editing','Structure at section level rather than whole-manuscript level: tightening a discussion that repeats the results, reordering paragraphs within sections, cutting to a word limit, and rewriting passages where the meaning is buried. The commonest useful purchase for a manuscript that is sound and reads like a first draft.'],
      line:['Line editing','Line editing works at the sentence and paragraph level of a manuscript, improving the language and style of the text. Not structure, not grammar alone &mdash; the level in between, where a sentence is correct and still harder to read than it should be. This is where most of the difference in a translated or non-native-English manuscript actually lives.'],
      copy:['Copyediting','&ldquo;Correcting spelling, grammar, usage, and punctuation, checking cross-references, and preparing the style sheets that guide consistency and accuracy&rdquo;. The right purchase for a manuscript whose argument and structure are settled. If you are not sure whether you need this or line editing, send 1,000 words and we will tell you which, free.']
    };
    const lo = L[lvl] || L.sub;
    rows.push(['The editing level you have chosen: '+lo[0],'mid',lo[1]]);

    /* ── reviewers ─────────────────────────────────────────────────────*/
    if(rev) rows.push(['You are responding to reviewers','mid',
      '<b>Then the response letter is the deliverable, and it is a different piece of writing from the manuscript.</b> It has one job: to let an editor see, without cross-referencing anything, that every point has been addressed. That means each comment quoted in full, the response beneath it, and the changed text quoted with its new location &mdash; not &ldquo;we have revised the discussion accordingly&rdquo;, which obliges the editor to go and look. Two things worth saying plainly. <b>You are allowed to disagree</b>, and a courteous, evidenced refusal is read far better than a capitulation that damages the paper; editors expect it. And where two reviewers want opposite things, the letter should say so and ask the editor to adjudicate rather than quietly picking one. We edit the letter and the revised manuscript together, because a letter that describes changes the manuscript does not contain is the commonest reason a revision comes back a second time.']);

    /* ── sponsorship ───────────────────────────────────────────────────*/
    if(spon) rows.push(['The research was company-sponsored','has',
      '<b>Then GPP 2022 applies on top of the reporting guideline</b> &mdash; &ldquo;Good Publication Practice (GPP) guidelines for company-sponsored biomedical research: 2022 update&rdquo;, published in the <i>Annals of Internal Medicine</i> on 30 August 2022, the third revision after GPP 2003, GPP2 2009 and GPP3 2015. It is not a reporting checklist and does not replace CONSORT or PRISMA; it governs how the publication is <b>produced</b>: authorship criteria and how they are applied, the role and disclosure of professional medical writers, transparency about funding and sponsor involvement, and the expectation that results are published whether or not they favour the product. The ICMJE authorship criteria sit underneath it. <b>This is also where our <a class="tlink" href="#/scientific-communication" data-nav>scientific communication</a> work meets this page</b>, and it is the one context where publication ethics and commercial interests genuinely do overlap rather than being confused for each other.']);

    /* ── ML ────────────────────────────────────────────────────────────*/
    if(ml) rows.push(['The study uses machine learning or AI methods','mid',
      '<b>Then check whether an AI-specific extension applies before you edit anything, because several now exist and they are new enough that most templates predate them.</b> For a prediction model, <b>TRIPOD+AI</b> (BMJ 2024) is now the single statement covering regression and machine learning together. For a randomised trial of an AI intervention, <b>CONSORT-AI</b> (Nature Medicine 2020), with the caveat that we have not verified whether it has been realigned to CONSORT 2025 &mdash; check before relying on it. For diagnostic accuracy, EQUATOR records a <b>STARD-AI</b> extension from 2025. There is also a separate question this tool cannot answer for you: <b>whether you used a generative AI tool in writing the paper</b>, as opposed to studying one, which is a disclosure matter rather than a reporting one &mdash; publisher policies differ and our <a class="tlink" href="#/post-editing" data-nav>post-editing</a> page sets out what each of the four largest requires.']);

    /* ── registration ──────────────────────────────────────────────────*/
    if(!reg && (des==='rct'||des==='sr')) rows.push(['You have not said the study was registered','gap',
      des==='rct'
        ? '<b>For a randomised trial this is the item most likely to stop the paper before review.</b> The ICMJE requires prospective registration in a public trials registry as a condition of consideration for publication in member journals, and CONSORT 2025 asks for the registration number and the name of the registry in the abstract as well as the paper. Retrospective registration is treated differently by different journals and by some not at all. If the trial is unregistered, say so early and explicitly: an editor who discovers it is in a worse position than one who was told, and a paper that explains the omission is occasionally publishable where a paper that conceals it is not.'
        : '<b>For a systematic review this is worth settling before editing.</b> Prospective registration &mdash; PROSPERO or an equivalent &mdash; is not required by every journal, but where the review is registered PRISMA 2020 asks for the registration name and number, and where it is not, several journals now ask why. The related item is the protocol: PRISMA asks whether one was prepared and where it can be accessed, and a review whose methods differ from its protocol needs to say so rather than leaving a reader to find the difference.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATES = { dev:0.100, sub:0.075, line:0.050, copy:0.035 };
    const RATE = RATES[lvl] || 0.075;
    let price = Math.max(300, Math.round(wc*RATE/10)*10);
    let d0 = lvl==='dev'? 8 : (lvl==='sub'? 6 : (lvl==='line'? 5 : 4)),
        d1 = lvl==='dev'? 14: (lvl==='sub'? 10: (lvl==='line'? 8 : 7));
    if(wc>12000){ d0+=4; d1+=6; } else if(wc>8000){ d0+=2; d1+=3; }
    if(rev){ price += 280; d0+=2; d1+=3; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RATE.toFixed(3).replace(/0$/,'')+' a word</b> for '+lo[0].toLowerCase()+
      (rev? ', plus $280 for the response-to-reviewers letter':'')+
      ', including the reporting-guideline check against '+(g[0].charAt(0).toLowerCase()+g[0].slice(1))+
      '. <b>What the rate buys.</b> <b>Three editors</b> &mdash; one scientific editor and two native English-speaking editors reading independently of each other &mdash; plus the reporting-guideline checklist completed item by item with page and line, a simulated peer review at substantive level and above, and the query log of everything we will not answer on your behalf. <b>365-day journal revision support</b> runs from delivery, and the guideline check itself is free whether or not you buy any editing.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>What the edit is, stated as a mechanism.</b> One scientific editor and two native English-speaking editors read your manuscript, and every edit respects the accuracy of your data, your research outcomes and authorial ownership. That is a description of what happens and of what the editor will not do, and you can check both afterwards against the tracked changes and the query list. We attach no number to a publication outcome, because no editor controls one. What we do control is whether the manuscript reports what its guideline asks it to report, before a screening editor looks for it and does not find it.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>CONSORT 2025 and SPIRIT 2025, published April 2025 in the BMJ, JAMA, the Lancet, Nature Medicine and PLOS Medicine, via consort-spirit.org and the journal records; CONSORT-Outcomes 2022 (JAMA), CONSORT Harms 2022 (<i>J Clin Epidemiol</i> 2023), CONSORT-AI (<i>Nat Med</i> 2020). PRISMA 2020, BMJ 2021;372:n71, with the extension list at prisma-statement.org. STROBE 2007 at strobe-statement.org; STROBE-MR 2021. ARRIVE 2.0 at arriveguidelines.org, with the Essential 10 and Recommended Set wording quoted from that site. STARD 2015, BMJ 2015;351:h5527. TRIPOD+AI, BMJ 2024. COREQ, <i>Int J Qual Health Care</i> 2007;19(6):349&ndash;357; SRQR, <i>Acad Med</i> 2014;89(9). CHEERS 2022, ISPOR task force. CARE 2013 with E&amp;E 2017. SQUIRE 2.0, 2015. Guideline count from the EQUATOR Network home page. GPP 2022, <i>Ann Intern Med</i>, 30 August 2022, via ismpp.org. ICMJE Recommendations, January 2026, which add a new Section V on artificial intelligence in publishing and a new Section III.L.2 on authors&rsquo; access to data &mdash; note that icmje.org&rsquo;s HTML page can still serve a cached &ldquo;January 2024&rdquo;, so cite the PDF. All checked 22 September 2026. <b>Two notes on the dates.</b> EQUATOR&rsquo;s CONSORT summary gives January 2025 while the journal records give April; we use April and flag the discrepancy rather than picking silently. And there is no PRISMA 2026 &mdash; it appears in a good deal of online writing and has no primary source.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 05 · Journal style and submission pack ═══
     The live page had the best article-type list on the site and the
     worst package table: three tiers named ELITE, ADVANCED and PREMIUM
     in which PREMIUM — the word every buyer reads as "top" — was the
     weakest. It also named eight style guides and omitted Vancouver,
     claimed ISO/IEC 27001:2013 four years after it was superseded, and
     listed a citation index called "SCCJE" that does not exist. */
  TOOLS.mse = function(r){ wire(r, function(){
    const art  = seg(r,'art'),
          sty  = str(r,'sty'),
          wc   = Math.max(400, num(r,'wc',6000)),
          lim  = Math.max(0,   num(r,'lim',4000)),
          cov  = chk(r,'cov'),   /* cover letter */
          rrl  = chk(r,'rrl'),   /* reviewer responses */
          nn   = chk(r,'nn'),    /* English an additional language */
          fig  = chk(r,'fig');   /* figures need preparation */

    const rows = [];

    /* ── article type ──────────────────────────────────────────────────*/
    const A = {
      orig:['Original research article','The default, and the one every journal describes in its instructions in most detail. Structured as IMRaD with a structured abstract, and governed by the reporting guideline your design requires &mdash; CONSORT 2025 for a trial, STROBE for an observational study, and so on, set out on our <a class="tlink" href="#/scientific-editing" data-nav>scientific editing</a> page. The formatting trap here is the <b>structured abstract</b>: journals differ on the headings and on whether the word count includes them, and a mismatch is one of the things a screening editor sees first.'],
      sr:['Systematic review or meta-analysis','Reported to <b>PRISMA 2020</b>, which is still the current version &mdash; there is no PRISMA 2026, whatever a good deal of online writing says. The formatting work is heavier than for an original article and in unexpected places: the search strategy has to be reproduced in full for at least one database, usually as an appendix, per <b>PRISMA-S</b>; the flow diagram has a prescribed structure; and the included-studies table routinely runs past the journal&rsquo;s table limit and has to be split between the paper and the supplement.'],
      case:['Case report or case series','Reported to <b>CARE</b>, 2013, with its explanation and elaboration paper from 2017. Three formatting facts decide whether a case report is even considered. <b>Consent is not optional</b> and most journals want the statement in a specific form and place. Word limits are short &mdash; often 1,000 to 1,500 &mdash; and are rarely negotiable. And the <b>patient perspective</b>, which CARE asks for, is absent from most drafts entirely and is the item that most often distinguishes a published case report from a rejected one.'],
      brief:['Brief report or brief communication','A hard format, because the constraint is arithmetic rather than editorial: a fixed word count, a fixed number of figures and tables combined, and often a fixed reference count. <b>Cutting an original article into a brief report is not editing, it is triage</b>, and the decisions about what to drop are the author&rsquo;s. What we can do is show you where the words are &mdash; usually a methods section describing standard procedures at length, and a discussion that restates the results before discussing them.'],
      prot:['Protocol paper','Reported to <b>SPIRIT 2025</b>, published April 2025 alongside CONSORT 2025 in the same five journals and superseding SPIRIT 2013. The thing authors most often get wrong is tense and mood: a protocol describes what <i>will</i> be done, and a protocol paper written from a draft results manuscript reads as though the trial has already happened. Registration details, funding and the statistical analysis plan all have prescribed places.'],
      rev:['Narrative review or perspective','No reporting guideline governs a narrative review, which is worth stating rather than leaving you to look &mdash; and which is precisely why the journal&rsquo;s own instructions do all the work here. Section structure, whether subheadings are permitted, reference count ceilings and figure allowances vary more between journals for this format than for any other. <b>Check whether the journal invites reviews or only commissions them</b>, because a good many will not consider an uninvited one at all, and that is the cheapest rejection to avoid.'],
      comm:['Commentary or editorial','Short, usually unstructured, frequently invited. The formatting constraints are mostly about what is <i>not</i> allowed: often no abstract, a tight reference ceiling, sometimes no figures. Declaration of interests is read more closely here than in any other format, because a commentary is an opinion and the reader is entitled to know whose.'],
      let:['Letter to the editor','The tightest format in academic publishing: word limits commonly between 400 and 800, reference limits often five, and a submission window &mdash; many journals will not consider a letter about an article published more than four to twelve weeks earlier. <b>Check the window before anything else</b>, because it is the one constraint no amount of editing recovers.'],
      conf:['Conference abstract or proceedings paper','Governed by the society&rsquo;s own template rather than by a journal, which means the rules are stricter and more literal: a character count rather than a word count, a fixed structure, often no references and no figures. Editing to a 250-word abstract is a different skill from editing to 6,000, and the commonest failure is an abstract that reads like a compressed paper rather than a self-contained account.']
    };
    const a = A[art] || A.orig;
    rows.push(['The article type: '+a[0],'has',a[1]]);

    /* ── style ─────────────────────────────────────────────────────────*/
    const S = {
      vanc:['Vancouver','has','<b>The most important style in biomedical publishing.</b> Two things are worth knowing about what &ldquo;Vancouver&rdquo; now means. The governing document is the <b>ICMJE Recommendations</b>, updated <b>January 2026</b>, which added a new Section V on the use of artificial intelligence in publishing along with changes on authors&rsquo; access to data, sponsor agreements, scientific misconduct and trial registration. The older title, &ldquo;Uniform Requirements for Manuscripts&rdquo;, was retired in <b>August 2013</b> &mdash; a supplier or template still using it is thirteen years out of date. For the reference formats themselves, the detailed source is the National Library of Medicine&rsquo;s <i>Citing Medicine</i>, 2nd edition, 2007, last updated 5 August 2020.'],
      ama:['AMA','has','<b>AMA Manual of Style, 11th edition, published 2 March 2020</b>, from the JAMA Network editors and Oxford University Press. No twelfth edition is announced, but the committee posts rolling policy updates between editions, so the printed book is not always the last word &mdash; which matters for anything involving nomenclature, statistics reporting or terminology around race and ethnicity, where the online updates have moved. If a journal says &ldquo;AMA style&rdquo; it almost always means the 11th edition plus its own house deviations, and the house deviations are usually the part that catches authors out.'],
      apa:['APA','has','<b>Publication Manual of the American Psychological Association, seventh edition</b>, released October 2019 with a 2020 copyright. No eighth edition is announced. The seventh edition changed enough to matter: the publisher location was dropped from references, up to twenty authors are now listed before an ellipsis, and singular &ldquo;they&rdquo; is endorsed. A manuscript formatted from a sixth-edition template is immediately recognisable, and the giveaway is usually the reference list.'],
      cms:['Chicago','has','<b>The Chicago Manual of Style, 18th edition, September 2024</b> &mdash; described by the University of Chicago Press as the most extensive revision in two decades, so a template built on the 17th edition is now genuinely out of date rather than merely older. The first thing to settle is which of Chicago&rsquo;s two systems your journal wants: notes and bibliography, or author&ndash;date. They are not interchangeable and converting between them late is one of the more tedious jobs in this service.'],
      acs:['ACS','mid','<b>The ACS Style Guide has been superseded by <i>The ACS Guide to Scholarly Communication</i></b>, which the American Chemical Society announced in 2019 and launched in 2020. It is online-only, it is continuously updated rather than issued in editions &mdash; with documented update waves in November 2024, April 2025 and 2026, the most recent covering accessibility, posters, slides, references and AI &mdash; and it absorbed the content of the third edition of the old Style Guide, published 2006. <b>So a reference to &ldquo;the ACS Style Guide&rdquo; now points at a book last updated twenty years ago.</b> We will say superseded rather than discontinued, because ACS has not used that word.'],
      ieee:['IEEE','mid','IEEE does not publish a single style manual. It maintains three documents at the IEEE Author Center: the <b>IEEE Editorial Style Manual for Authors</b>, whose live version is dated 29 July 2024; the <b>IEEE Reference Guide</b>, whose live file still carries a 2018 version string &mdash; we report what the served file says rather than assuming a newer one exists; and an IEEE Mathematics Guide. Worth knowing: IEEE explicitly defers to <i>Merriam-Webster</i> for spelling and to <i>The Chicago Manual of Style</i> for grammar it does not cover itself, so an IEEE submission is governed by three documents rather than one.'],
      cse:['CSE','mid','<b>Note the title changed.</b> The ninth edition, published May 2024, is <i>The CSE Manual: Scientific Style and Format for Authors, Editors, and Publishers</i> &mdash; &ldquo;Scientific Style and Format&rdquo; is now the subtitle rather than the title, so citing &ldquo;Scientific Style and Format, 9th edition&rdquo; is imprecise. CSE offers three citation systems (citation&ndash;sequence, name&ndash;year and citation&ndash;name), and journals specify which; picking the wrong one produces a reference list that is internally consistent and entirely wrong.'],
      mla:['MLA','mid','<b>MLA Handbook, ninth edition, 2021.</b> Worth knowing if you are working from older guidance: the separate <i>MLA Style Manual</i>, the graduate and professional title, has been discontinued and the MLA says no new edition is planned &mdash; so the Handbook is now the single document. Uncommon in biomedical work; it appears here because humanities-adjacent health research does occasionally use it.'],
      oth:['Another style','mid','Tell us which and send the journal&rsquo;s instructions for authors. The style name is rarely the whole answer in any case: <b>most journals use a named style plus their own deviations</b>, and the deviations are what an author misses, because they are in the instructions rather than in the style manual. One guide we would flag if it was on your list: <i>The Cambridge Guide to English Usage</i> is a single edition from 2004 with no revised edition since &mdash; a usage reference rather than a citation style, and an old one.']
    };
    const st = S[sty] || S.oth;
    rows.push(['The reference style: '+st[0], st[1], st[2]]);

    /* ── word limit ────────────────────────────────────────────────────*/
    if(lim>0 && wc>lim){
      const over = wc-lim, pct = Math.round(over/lim*100);
      rows.push(['You are '+over.toLocaleString('en-US')+' words over the limit', pct>25?'gap':'mid',
        '<b>'+pct+'% over.</b> '+(pct>25
          ? 'That is beyond what editing alone recovers without a decision from you about what to remove. We can reliably take out 10 to 20% through compression &mdash; a methods section describing standard procedures at length, a discussion that restates results before discussing them, three sentences naming the statistical software &mdash; and past that, something has to go. <b>Which material goes is yours to decide</b>, and we will give you a length audit showing where the words actually are, section by section, rather than cutting to fit and telling you afterwards.'
          : 'Within the range compression normally reaches. The words are usually in three places, in this order: a discussion whose first several hundred words restate the results, a methods section describing standard procedures in detail the journal does not want, and hedging stacked two and three deep. We do not cut content to make a number.')+
        ' The term for it is word count reduction, and any percentage you are quoted should carry a footnote you can read: a capped figure with an unrendered asterisk is not a figure.']);
    }

    /* ── figures ───────────────────────────────────────────────────────*/
    if(fig) rows.push(['Your figures need preparation','mid',
      '<b>Figure specification is where more submissions stall than anywhere else, and almost none of it is editorial.</b> Journals specify resolution in dots per inch for line art and for halftones separately, acceptable file formats, whether fonts must be embedded or converted to outlines, minimum type size <i>at final print size</i>, column widths in millimetres, and whether colour is free online and charged in print. A figure that looks fine in a manuscript file can be rejected at production for a reason invisible on screen. Two further things worth checking before submission: <b>colour accessibility</b>, since a growing number of journals ask that figures remain readable to colour-blind readers, and <b>permissions</b> for any panel reproduced from another publication, which is a copyright matter rather than a formatting one and takes weeks rather than days.']);

    /* ── reviewer responses ────────────────────────────────────────────*/
    if(rrl) rows.push(['You are incorporating reviewer responses','mid',
      '<b>Then the response letter and the revised manuscript are one job, not two.</b> A letter describing changes the manuscript does not contain is the commonest reason a revision comes back for a second round, and it happens because the two documents are usually written days apart by different people. The letter&rsquo;s only job is to let an editor confirm, without opening the manuscript, that every point has been addressed: each comment quoted in full, the response beneath it, the changed text quoted with its new location. <b>You are allowed to disagree</b> &mdash; editors expect it, and a courteous evidenced refusal reads better than a capitulation that damages the paper. Where two reviewers ask for opposite things, the letter should say so and ask the editor to adjudicate rather than quietly picking one.']);

    /* ── non-native ────────────────────────────────────────────────────*/
    if(nn) rows.push(['English is an additional language for you','has',
      'Then two things are true and only one of them is usually said. <b>Journals do recommend professional editing for authors writing in an additional language</b>, and many publishers run or endorse such services &mdash; but a journal recommending editing is not a journal recommending any particular supplier, and a page that blurs those two things is selling you something the recommendation does not cover. <b>And editing cannot make a study more likely to be true.</b> What it does is remove the reasons a reviewer might set your paper aside before engaging with it. In practice the useful work here is line-level rather than grammatical: article use, preposition selection, and the calqued structures that are perfectly correct English and immediately identifiable as written by somebody thinking in another language. We also give you a <b>pattern note</b> &mdash; your five most frequent constructions, with what we changed &mdash; so the next paper needs less of this.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    let price = Math.max(300, Math.round(wc*0.035/10)*10) + 200;
    let d0 = 5, d1 = 9;
    if(wc>10000){ d0+=3; d1+=5; } else if(wc>6000){ d0+=2; d1+=2; }
    if(cov){ price += 120; }
    if(rrl){ price += 280; d0+=2; d1+=3; }
    if(fig){ price += 180; d0+=1; d1+=2; }
    if(nn){ price = Math.round(price*1.15/10)*10; d0+=1; d1+=2; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$0.035 a word</b> for copyediting, plus <b>$200</b> for the journal pack &mdash; formatting to the target journal, reference style, the submission checklist and the certificate of editing'+
      (cov?', plus $120 for the cover letter':'')+
      (rrl?', plus $280 for the response-to-reviewers letter':'')+
      (fig?', plus $180 for figure preparation to the journal&rsquo;s specification':'')+
      (nn?', plus 15% for the additional language pass and the pattern note':'')+
      '. Where the manuscript needs structural work rather than formatting, that is substantive or developmental editing at $0.075 or $0.100 a word, priced on our <a class="tlink" href="#/scientific-editing" data-nav>scientific editing</a> page, and we will tell you which you need before quoting. <b>What the rate buys.</b> The $0.035 is a full copyedit; the $200 is the journal pack &mdash; one named journal, its instructions read in full, its article-type rules, limits, figure specification, declarations and every deviation it makes from the style it claims to use. You also get a manuscript assessment report, a certificate of editing, and <b>re-editing free for one year</b> from delivery, however many times the journal sends it back.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>How to read the tiers above.</b> They are named for what they do rather than for how premium they sound, and they climb: each contains everything below it and adds one named step. That is worth checking on any editing quote you are given. Where tiers carry status names rather than scope names, compare the feature rows instead of the labels, because the ordering is not always what the names imply. And any asterisk on a tier should resolve to a footnote you can actually read &mdash; a qualified claim whose qualification is missing is not a claim you can rely on.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>AMA Manual of Style 11th edition, 2 March 2020, Oxford University Press. Publication Manual of the American Psychological Association, seventh edition, released October 2019, copyright 2020. The Chicago Manual of Style, 18th edition, September 2024, University of Chicago Press. MLA Handbook, ninth edition, 2021, with the separate MLA Style Manual discontinued. <i>The ACS Guide to Scholarly Communication</i>, announced 2019 and launched 2020, online-only and continuously updated, superseding <i>The ACS Style Guide</i> 3rd edition of 2006. IEEE Editorial Style Manual for Authors, live version dated 29 July 2024, and the IEEE Reference Guide, whose served file carries a 2018 version string &mdash; IEEE is a publisher and professional body, and a style, not a citation index. <i>The CSE Manual</i>, ninth edition, May 2024 &mdash; note the retitling. ASA Style Guide, seventh edition, June 2022. ICMJE Recommendations updated January 2026, adding a new Section V on artificial intelligence in publishing, with the &ldquo;Uniform Requirements for Manuscripts&rdquo; title retired in August 2013; NLM <i>Citing Medicine</i> 2nd edition 2007, last content update 5 August 2020. All checked 22 September 2026.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 06 · Book project planner ════════════════
     The live page's real asset — publisher selection, proposal, showcase
     chapter, submission management — sat under generic editing copy, and
     the page carried a "Committed to the COPE & ICMJE guidelines" badge
     on a service about books, where neither body has written anything. */
  TOOLS.bke = function(r){ wire(r, function(){
    const kind = seg(r,'kind'),
          lvl  = str(r,'lvl'),
          wc   = Math.max(5000, num(r,'wc',80000)),
          idx  = chk(r,'idx'),   /* needs an index */
          perm = chk(r,'perm'),  /* third-party material */
          oa   = chk(r,'oa'),    /* funder open access requirement */
          pub  = chk(r,'pub');   /* publisher not chosen */

    const rows = [];

    /* ── kind of book ──────────────────────────────────────────────────*/
    const K = {
      mono:['A scholarly monograph','has','The standard case for a university press, and the one the whole publishing chain is built around. Two things follow from that. <b>Peer review is real and it is at proposal stage as well as manuscript stage</b> &mdash; the Association of University Presses publishes <i>Best Practices for Peer Review of Scholarly Books</i>, second edition, September 2022, under a Creative Commons licence, and it is the document to read before you write a proposal rather than after. And the <b>commissioning editor is the audience for the proposal, not the reader of the book</b>: the proposal has to answer a list question &mdash; where does this sit in their existing catalogue &mdash; that the book itself never addresses.'],
      edit:['An edited collection','mid','<b>The hardest book to edit and the one most often underestimated, because the difficulty is not linguistic.</b> Twelve contributors produce twelve reference styles, twelve levels of English, twelve interpretations of the brief and at least two chapters that overlap. The work that matters is the consistency pass across the whole volume rather than the copyedit of any chapter: one style sheet governing everybody, terminology reconciled across contributors, cross-references between chapters that actually resolve, and a front matter apparatus that matches the chapters as they finally stand rather than as they were commissioned. Budget for the volume editor&rsquo;s time as well as ours &mdash; chasing twelve academics is the schedule risk, not the editing.'],
      text:['A textbook','mid','A different product from a monograph and priced differently by publishers, because the apparatus is most of the work: learning objectives, summaries, glossaries, question sets, figure programmes and instructor materials. Two structural notes. <b>Textbooks are explicitly excluded from the Web of Science Book Citation Index</b>, which lists them among its exclusions alongside reference books and fiction &mdash; so if indexing in that database matters to you, a textbook will not deliver it. And consistency of apparatus across chapters is the thing reviewers comment on first, which makes the style sheet the governing document from chapter one rather than an artefact produced at the end.'],
      thes:['A thesis becoming a book','gap','<b>Then the first piece of work is structural and it is not editing.</b> A thesis is written to demonstrate competence to examiners; a book is written to interest readers. The literature review that proved you had read the field becomes a paragraph, the methods chapter that showed your rigour becomes an appendix or a note, and the defensive hedging that protected you in a viva has to come out. Commissioning editors read a great many unrevised theses and recognise them instantly. <b>One thing in your favour:</b> the thesis-editing restrictions no longer apply. Once the examination is over and you are writing a book, developmental and substantive editing are entirely permissible &mdash; the bounded regime described on our <a class="tlink" href="#/thesis-editing" data-nav>thesis editing</a> page governs a thesis under examination, not a manuscript afterwards.'],
      trade:['A trade or general-readership book','mid','<b>Then almost nothing on the rest of this page applies, and we would rather say so than sell you an academic service.</b> Trade publishing runs on agents, proposals written to a different specification, and acquisition decisions made commercially rather than by peer review. There is no peer review, no press editorial board, and no scholarly indexing question. What we can do well is the editing itself &mdash; developmental, line, copyediting and proofreading at the levels below. What we will not pretend to be is a literary agency. If the book is aimed at general readers, ask us for editing and find an agent separately.'],
      ref:['A reference work or handbook','mid','Multi-contributor, heavily structured, and governed by internal consistency more than by prose quality: entry format, cross-referencing, alphabetisation or thematic ordering, and an apparatus that has to work as a navigation system rather than as reading. The index is not an afterthought here, it is a substantial part of the product, and it should be budgeted from the start. Note also that <b>reference books are excluded from the Web of Science Book Citation Index</b>, which lists them among its exclusions &mdash; worth knowing before it becomes a disappointment.']
    };
    const k = K[kind] || K.mono;
    rows.push(['What kind of book this is: '+k[0], k[1], k[2]]);

    /* ── peer review and what governs a book ───────────────────────────*/
    rows.push(['What actually governs academic book publishing','has',
      '<b>Not COPE and not the ICMJE &mdash; and a book service displaying either as a compliance badge is showing you the wrong instrument.</b> Take them in turn, carefully, because the accurate statement is narrower than the obvious one. <b>COPE</b>&rsquo;s membership categories and Core Practices are framed around peer-reviewed journals: its journal eligibility criteria require &ldquo;an editor reviewed or peer reviewed journal that publishes scholarly research&rdquo;, and its own membership FAQ tells university presses that publish journals to apply as publishers. COPE said in 2021 that it was working towards guidance for book publishers and editors; as of today the only book-focused item on its site is a member topic discussion, last updated 11 December 2024, which carries an explicit disclaimer that comments &ldquo;do not imply formal COPE advice, or consensus&rdquo;. So: journal-framed, and no book guidance published &mdash; not a statement that books are excluded. <b>The ICMJE</b> is more clear-cut: its recommendations are titled for &ldquo;Scholarly Work in Medical Journals&rdquo; and state that they are &ldquo;intended primarily for use by authors who might submit their work for publication to ICMJE member journals&rdquo;. Books appear nowhere in its scope. <b>What does govern this work:</b> the publisher&rsquo;s own contract and house style, the commissioning editor&rsquo;s judgement, and &mdash; at a university press &mdash; peer review and editorial board approval. The reference document is the <b>Association of University Presses&rsquo; <i>Best Practices for Peer Review of Scholarly Books</i>, second edition, September 2022</b>, published under a Creative Commons licence and free to read.']);

    /* ── level ─────────────────────────────────────────────────────────*/
    const RATES = { dev:0.100, line:0.050, copy:0.035, proof:0.025 };
    const L = {
      dev:['Developmental editing','The whole structure: what the book argues, in what order, and whether each chapter earns its place. It deals with content, organisation and structure. <b>For a book this is usually done on a proposal and two sample chapters rather than on a finished manuscript</b>, because restructuring 90,000 words after they are written is expensive and demoralising, and because that is the material a commissioning editor will see first anyway.'],
      line:['Line editing','Sentence and paragraph level &mdash; &ldquo;improving the language and style of the text&rdquo;. For book-length work this is where voice lives, and where the difference between a monograph that reads and one that is merely correct is actually made. It is also where a thesis most obviously remains a thesis, because the defensive constructions that protect a candidate in a viva read as timidity in a book.'],
      copy:['Copyediting','&ldquo;Correcting spelling, grammar, usage, and punctuation, checking cross-references, and preparing the style sheets that guide consistency and accuracy.&rdquo; <b>For a book the style sheet is the deliverable that matters most</b>, because it governs the proofs, the index, any second edition and, in an edited collection, every contributor. It is also what the publisher&rsquo;s own production department will ask you for.'],
      proof:['Proofreading','Comparing &ldquo;the latest stage of the project to the previous one&rdquo; &mdash; which for a book means reading typeset proofs against the copyedited manuscript, not reading the manuscript again. <b>This is the stage at which the index is compiled</b>, because an index needs final page numbers, and it is the last point at which anything can be changed without a cost the publisher will pass to you.']
    };
    const lo = L[lvl] || L.copy;
    rows.push(['The editing level: '+lo[0],'mid',lo[1]]);

    /* ── index ─────────────────────────────────────────────────────────*/
    if(idx) rows.push(['You need an index','mid',
      '<b>Then plan it into the schedule now, because an index cannot be made early.</b> Indexing is done against typeset proofs, since it needs final page numbers, which puts it at the tightest point of the production calendar &mdash; and a publisher&rsquo;s deadline for the index is usually two to three weeks after proofs arrive. The deliverable is an alphabetical list of topics, names, places and important terms used in the work, each carrying its page numbers. <b>Ours is $0.020 a word with a $450 minimum.</b> One note on style: <b>Chicago&rsquo;s 18th edition now prefers word-by-word alphabetisation</b> over letter-by-letter, which we follow unless your publisher specifies otherwise.']);

    /* ── permissions ───────────────────────────────────────────────────*/
    if(perm) rows.push(['The book reproduces third-party material','gap',
      '<b>Start this before the editing, not after it, because it is the item most likely to delay publication and it is entirely outside anyone&rsquo;s control.</b> Every figure, table, photograph, map, long quotation or verse extract you have not created yourself needs its copyright status established and, where required, permission obtained. A permissions editor verifies the copyright status and ownership of anything requiring permission to republish, and either advises you or obtains the permission on your behalf. <b>On timing, one figure we can cite rather than estimate:</b> <b>PLSclear</b>, the UK permissions clearance service run by Publishers&rsquo; Licensing Services, advises requestors to <b>allow six to eight weeks</b> for a request to be processed, noting that some publishers take longer. Individual presses publish their own; the University of Iowa Press, for instance, asks for four to six weeks. <b>Two practical consequences.</b> A permission refused or priced beyond your budget means the material comes out, which is a structural change to a chapter and therefore an editing question. And <b>Chicago&rsquo;s 18th edition substantially expanded its rights and permissions chapter</b>, including new material on AI and copyright at 4.5 &mdash; relevant if any image in the book was machine-generated.']);

    /* ── open access ───────────────────────────────────────────────────*/
    if(oa) rows.push(['A funder requires open access','mid',
      '<b>Then check the funder&rsquo;s own policy first, because books sit outside most of the open access architecture built for journals.</b> <b>Plan S did not originally cover monographs</b> &mdash; its Principle 7 acknowledged that open access for books needed a separate and due process &mdash; and cOAlition S issued a separate statement on 2 September 2021 making <b>five recommendations rather than requirements</b>: open access on publication, rights retention, Creative Commons licensing, a maximum embargo of twelve months, and dedicated funder support. <b>UKRI is the mandate to know about</b> if you are funded in the UK: for a monograph, book chapter or edited collection published on or after <b>1 January 2024</b> acknowledging UKRI funding, the output must be free to view and download &mdash; via the publisher&rsquo;s platform or an institutional or subject repository &mdash; <b>within a maximum of twelve months of publication</b>, under a Creative Commons licence with CC BY preferred. There are four exemptions, including pre-2024 publisher contracts and unobtainable third-party reuse permissions, which is the one that most often bites. For discovery, <b>DOAB</b> passed 100,000 titles and the <b>OAPEN Library</b> holds over 40,000 peer-reviewed books; both are run by not-for-profit Dutch foundations. If peer review matters to how your book is found, ask your publisher whether it supplies <b>PRISM</b> data &mdash; the Peer Review Information Service for Monographs, provided by DOAB as part of the OPERAS suite, which displays standardised peer-review information in book metadata.']);

    /* ── publisher selection ───────────────────────────────────────────*/
    if(pub) rows.push(['You have not chosen a publisher','has',
      '<b>Then this is the part of the service worth the most.</b> We produce a personalised list of three to five publishers for your specific book. What goes into it: what each press has published in your area in the last three years, whether it runs a series your book belongs in, its typical extent and format, whether it commissions or accepts unsolicited proposals, its peer-review process, its open access options against your funder&rsquo;s requirements, and whether its books are indexed where you need them to be. Then a <b>proposal written to each publisher&rsquo;s own specification</b> rather than one proposal sent everywhere &mdash; presses publish their proposal guidelines and they differ materially &mdash; and a <b>showcase chapter</b> prepared to the standard they will judge the whole manuscript by. <b>On indexing, since it often decides the list:</b> the Web of Science Book Citation Index covers 160,000-plus books from 2005, adding over 10,000 a year, and takes &ldquo;scholarly monographs or volumes in series&rdquo; while excluding reference books, textbooks, fiction and unrevised dissertations. Scopus indexes books at both book and chapter level &mdash; 470,000 stand-alone books and 1,514 book series &mdash; and selects <b>by publisher rather than by title</b>, which means the press you choose decides this for you.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATE0 = RATES[lvl] || 0.035;
    let disc = 0, dl = 'no volume discount';
    if(wc>120000){ disc=0.50; dl='50% volume discount above 120,000 words'; }
    else if(wc>60000){ disc=0.40; dl='40% volume discount above 60,000 words'; }
    else if(wc>25000){ disc=0.25; dl='25% volume discount above 25,000 words'; }
    const RATE = Math.round(RATE0*(1-disc)*1000)/1000;
    let price = Math.max(600, Math.round(wc*RATE/50)*50);
    let d0 = lvl==='dev'? 20 : (lvl==='line'? 18 : (lvl==='copy'? 15 : 10)),
        d1 = lvl==='dev'? 35 : (lvl==='line'? 30 : (lvl==='copy'? 25 : 18));
    if(wc>120000){ d0+=15; d1+=25; } else if(wc>60000){ d0+=8; d1+=14; }
    if(kind==='edit'){ price=Math.round(price*1.2/50)*50; d0+=5; d1+=10; }
    let idxP = 0;
    if(idx){ idxP = Math.max(450, Math.round(wc*0.020/50)*50); price += idxP; d0+=8; d1+=14; }
    if(perm){ price += 400; }
    if(pub){ price += 1200; d0+=10; d1+=15; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RATE.toFixed(3).replace(/0$/,'')+' a word</b> &mdash; our standard '+lo[0].toLowerCase()+' rate of $'+RATE0.toFixed(3).replace(/0$/,'')+' with a '+dl+
      (kind==='edit'? ', plus 20% for an edited collection, because reconciling twelve contributors to one style sheet is the work':'')+
      (idx? '. Indexing at $0.020 a word, $'+idxP.toLocaleString('en-US')+', compiled against typeset proofs':'')+
      (perm? '. Permissions clearance at $400, covering identification, requests and tracking &mdash; the fees the rights holders charge are separate and are yours':'')+
      (pub? '. Publisher selection, proposal and showcase chapter at $1,200 &mdash; three to five publishers, a proposal written to each one&rsquo;s own specification, and a chapter prepared to the standard they will judge the book by':'')+
      '. <b>What the rate buys.</b> The volume discount is applied automatically at 25% above 25,000 words, 40% above 60,000 and 50% above 120,000, so the per-word rate falls as the book grows. Every quote states the word count, the level and the turnaround it is built from. A <b>trial edit of up to 1,500 words is free</b> before you commit, and unlimited questions to your editor run for the length of the project.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>What governs an academic book, and what does not.</b> The publisher&rsquo;s contract and house style, the commissioning editor, and at a university press peer review and editorial board approval under AUPresses&rsquo; <i>Best Practices for Peer Review of Scholarly Books</i>, second edition September 2022. Not COPE and not the ICMJE: both are scoped to journals, so a book service displaying them as compliance is showing you the wrong instrument. Scholarly books are lengthy, highly technical and usually on a tight publication timeline, and they must meet the formatting requirements of each <i>publisher</i> &mdash; which is where compliance for a book actually lives.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>COPE membership categories, journal eligibility criteria and membership FAQ, and the topic discussion &ldquo;Ethical considerations around book publishing&rdquo;, last updated 11 December 2024 with its no-formal-advice disclaimer, at publicationethics.org &mdash; COPE has never said book publishers are excluded, only that its criteria are journal-framed and that book guidance was in progress. ICMJE Recommendations, purpose and audience statements, at icmje.org, current version January 2026. Association of University Presses, <i>Best Practices for Peer Review of Scholarly Books</i>, second edition September 2022, CC BY-NC-SA, superseding the 2016 first edition. PRISM, the Peer Review Information Service for Monographs, provided by DOAB within the OPERAS suite. DOAB and OAPEN title counts from the OAPEN and DOAB 2025 highlights. cOAlition S statement on open access for academic books, 2 September 2021, and Plan S Principle 7. UKRI open access policy for monographs, book chapters and edited collections, applying from 1 January 2024. Web of Science Book Citation Index coverage figures and Scopus content coverage guide, updated March 2026. Society of Indexers recommended rates effective 1 January 2026. American Society for Indexing FAQ, which declines to publish suggested rates. PLSclear guidance on permission processing times, page dated 1 April 2026. <i>The Chicago Manual of Style</i>, 18th edition September 2024, for the indexing chapter, the word-by-word alphabetisation preference, the expanded rights and permissions chapter and the new AI and copyright material at 4.5. All checked 22 September 2026.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 07 · Proofreading or editing? ════════════
     The live page advertised "$75 per 1,000 words" in its headline while
     its cheapest package was $0.08 a word — $80 per 1,000 — so no
     product existed at the advertised price. It also promised a
     "flawless" and "error-free" document three times in its own voice,
     and its "Our Services" block listed eight services, none of which
     was proofreading. */
  TOOLS.prf = function(r){ wire(r, function(){
    const hist = seg(r,'hist'),
          doc  = str(r,'doc'),
          wc   = Math.max(500, num(r,'wc',6000)),
          esl  = chk(r,'esl'),
          jrnl = chk(r,'jrnl'),
          refs = chk(r,'refs'),
          plag = chk(r,'plag');

    const rows = [];

    /* ── the definitions ───────────────────────────────────────────────*/
    rows.push(['What proofreading is, in somebody else&rsquo;s words','has',
      '<b>Each level, defined before it is priced.</b> <i>Proofreading</i> checks for typographical errors and formatting mistakes by comparing the latest stage of the document to the previous one. <i>Copyediting</i> corrects spelling, grammar, usage and punctuation, checks cross-references, and prepares the style sheet that keeps the document consistent. <i>Line editing</i> works at the sentence and paragraph level, improving the language and style of the text. <i>Developmental editing</i> deals with content, organisation and structure. <b>Notice what proofreading is defined against: a previous stage.</b> It assumes a document that has already been edited. That is why this page asks what has happened to the document before it quotes &mdash; buy proofreading for an unedited manuscript and you will be disappointed, and it will not be the proofreader&rsquo;s fault.']);

    /* ── the verdict ───────────────────────────────────────────────────*/
    const V = {
      typeset:['You have typeset proofs','has','proof',
        '<b>Then proofreading is exactly right and nothing else is available to you.</b> Proofs are read against the copyedited manuscript &mdash; the previous stage &mdash; not read afresh, and what is checked is what changes during typesetting: running heads, folios, captions, widows and orphans, hyphenation and line breaks, cross-references that moved, and anything a compositor introduced. At this stage the cost of a change is the publisher&rsquo;s or the journal&rsquo;s and they will pass it to you, so the discipline is to correct errors rather than to improve sentences.'],
      prof:['It has been professionally edited','has','proof',
        '<b>Then proofreading is the right purchase.</b> The previous stage exists, the argument and the language are settled, and what remains is the surface: typographical errors, the inconsistencies that appear when a document is assembled from chapters written over months, formatting that drifted, and the errors introduced by the last round of revisions &mdash; which is where most of what we find actually comes from.'],
      peer:['A colleague has read it','mid','copy',
        '<b>Then it is probably a copyedit you need, at $0.035 a word, rather than a proofread at $0.025.</b> A colleague reading for sense is not a previous editing stage: they read for whether the argument holds, which is valuable and is a different activity from checking usage, punctuation and cross-references line by line. We will tell you honestly after 1,000 words which of the two you are buying &mdash; and it is worth asking, because the difference on a 6,000-word paper is about $60 and the difference in what comes back is considerable.'],
      self:['You have revised it yourself','gap','copy',
        '<b>Then buy a copyedit, not a proofread.</b> Self-revision is not a previous stage: nobody reliably sees their own usage errors, their own comma habits or the sentence they rewrote twice and left half-rewritten, and the more carefully you have read your own work the less you see of it. This is the commonest mismatch in this service and it produces the commonest complaint &mdash; a proofread comes back with fewer marks than expected, the author feels short-changed, and the proofreader has done exactly what was bought. We would rather sell you the right thing.'],
      none:['Nobody has edited it','gap','line',
        '<b>Then proofreading is the wrong purchase and we will say so rather than take the order.</b> An unedited manuscript needs at least a copyedit and often line editing, because the problems in a first draft are not typographical: sentences that carry two ideas, paragraphs in the wrong order, terminology that drifted over three months of writing, and a discussion that restates the results. A proofreader will correct the typography of all of it, faithfully, and leave every one of those in place. <b>Send us 1,000 words and we will tell you which level the document actually needs</b>, free, and the answer is occasionally the cheaper one.']
    };
    const v = V[hist] || V.none;
    rows.push(['What has happened to the document: '+v[0], v[1], v[3]]);
    const LVL = v[2];

    /* ── document type ─────────────────────────────────────────────────*/
    const D = {
      ms:['A journal manuscript','The last read before submission. What matters most at this stage is not prose but the apparatus: the reference list against the citations, the declarations, the figure and table numbering, and the abstract against the body &mdash; because a number changed in revision and not changed in the abstract is the error that survives to publication.'],
      th:['A thesis or dissertation','<b>Proofreading is permitted essentially everywhere</b>, which is worth knowing because editing a thesis is not. The IPEd guidelines for editing theses, July 2025, restrict professional thesis editing to copyediting and proofreading, so proofreading is the safest thing to buy if you are unsure what your institution allows. The bounded version of the service is set out on our <a class="tlink" href="#/thesis-editing" data-nav>thesis editing</a> page, including the supervisor approval and acknowledgement that go with it.'],
      book:['Book proofs','Read against the copyedited manuscript, at book length and with a volume discount. This is also the stage at which the index is compiled, because an index needs final page numbers &mdash; and a publisher&rsquo;s index deadline is commonly two to three weeks from the arrival of proofs. Both are priced on our <a class="tlink" href="#/book-editing" data-nav>book editing</a> page.'],
      grant:['A grant application','Where the constraint is absolute and arithmetic: page limits, character counts, font sizes and margins that funders specify and enforce mechanically. A proofread here is as much a compliance check as a language one, and the thing most worth checking is whether the document still fits after the last round of edits.'],
      biz:['A report or business document','No reporting guideline, no journal instructions, and usually a house style that exists somewhere and is not written down. We will ask for it, and where there is none we will build a style sheet from what the document already does most often &mdash; which is both cheaper and more useful than imposing one.'],
      cv:['A CV, application or personal document','Short, high-stakes, and read by somebody looking for a reason to stop. Consistency of dates, tenses and formatting matters more here than anywhere, because inconsistency is the thing a reader notices without being able to say why. Priced at our minimum rather than per word.']
    };
    const d = D[doc] || D.ms;
    rows.push(['The document: '+d[0],'mid',d[1]]);

    /* ── ESL ───────────────────────────────────────────────────────────*/
    if(esl) rows.push(['English is an additional language for you','mid',
      '<b>Then be careful what you buy, because proofreading will probably not give you what you want.</b> Enhancing fluency without changing meaning is the right constraint. But enhancing fluency is line editing rather than proofreading: idiom, article use, preposition selection and the calqued constructions that are perfectly correct English and obviously written by somebody thinking in another language all sit above the typographical level. A proofreader will leave them. <b>We would rather sell you line editing at $0.050 a word, or a copyedit at $0.035, than a proofread you will be disappointed by.</b> Send 1,000 words and we will show you the difference on your own text rather than describe it.']);

    /* ── journal format ────────────────────────────────────────────────*/
    if(jrnl) rows.push(['You want the journal&rsquo;s formatting checked','mid',
      '<b>Then name the journal.</b> Formatting proofreading without a named style authority behind it is a promise with nothing behind it. What we check it against: the journal&rsquo;s own instructions for authors, plus whichever style manual it names &mdash; and the current editions matter, because several moved recently. <b>Vancouver</b> means the ICMJE Recommendations, updated January 2026, with the NLM&rsquo;s <i>Citing Medicine</i> for the reference forms; the name &ldquo;Uniform Requirements for Manuscripts&rdquo; was retired in August 2013. <b>AMA</b> is on its 11th edition, March 2020; <b>APA</b> the 7th; <b>Chicago</b> the 18th, September 2024; <b>CSE</b> the 9th, May 2024, and retitled <i>The CSE Manual</i>; the <b>ACS Style Guide</b> has been superseded by the online ACS Guide to Scholarly Communication. And the part that catches people: <b>journals deviate from the style they name</b>, often substantially, and the deviations live in the instructions rather than the manual. Full formatting to one journal is on our <a class="tlink" href="#/manuscript-editing" data-nav>manuscript editing</a> page.']);

    /* ── references ────────────────────────────────────────────────────*/
    if(refs) rows.push(['You want the reference list checked','has',
      '<b>Then be clear which of two checks you are buying, because they are different jobs at different prices.</b> The <b>consistency check</b> is included in a proofread: every citation in the text has an entry in the list, every entry is cited, the years match in both places, and the format is uniform. It is the single most productive hour in most proofreads &mdash; on a 6,000-word paper it routinely finds a dozen mismatches, and it is the commonest source of corrections after acceptance. The <b>accuracy check</b> is not included: verifying that each reference exists as described, that the DOI resolves to the paper cited, and that the authors and year are right. That is slower, it is priced separately, and it finds things &mdash; including, occasionally, a reference that does not support the sentence citing it. <b>We do not verify that a source says what you claim it says</b> in either check. That is scholarship and it is yours.']);

    /* ── plagiarism ────────────────────────────────────────────────────*/
    if(plag) rows.push(['You want a similarity report','mid',
      '<b>Then take the number with more care than most suppliers encourage.</b> A similarity percentage is not a plagiarism finding: quoted material, reference lists, standard methods language, instrument names and common phrases in your field all raise it, and a paper with a 22% score can be entirely clean while one at 8% is not. <b>The matches are the information; the percentage is the anxiety.</b> We read them with you rather than emailing a number. Two further points. Where your institution or publisher provides a report, use theirs &mdash; ours has no standing with them. And where we run one, your document is submitted in a way that <b>does not add it to a repository your own later submission would then match against</b>, which is a real hazard with similarity tools used casually.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    const RATES = { proof:0.025, copy:0.035, line:0.050 };
    const NAMES = { proof:'proofreading', copy:'copyediting', line:'line editing' };
    let RATE = RATES[LVL];
    if(esl && LVL!=='line') RATE = RATES.line;
    const NAME = (esl && LVL!=='line')? 'line editing' : NAMES[LVL];
    let disc = 0;
    if(doc==='book' && wc>60000) disc = 0.40;
    else if(wc>25000) disc = 0.25;
    const R = Math.round(RATE*(1-disc)*1000)/1000;
    let price = Math.max(120, Math.round(wc*R/10)*10);
    let d0 = LVL==='proof'? 2 : (LVL==='copy'? 4 : 5),
        d1 = LVL==='proof'? 4 : (LVL==='copy'? 7 : 9);
    if(wc>25000){ d0+=5; d1+=8; } else if(wc>10000){ d0+=2; d1+=3; }
    if(jrnl){ price += 200; d0+=1; d1+=2; }
    if(refs){ price += 90; }
    if(plag){ price += 80; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+R.toFixed(3).replace(/0$/,'')+' a word</b> for '+NAME+
      (disc? ' &mdash; our standard rate of $'+RATE.toFixed(3).replace(/0$/,'')+' with a '+Math.round(disc*100)+'% volume discount':'')+
      (jrnl? ', plus $200 for formatting to one named journal':'')+
      (refs? ', plus $90 for the reference accuracy check':'')+
      (plag? ', plus $80 for a similarity report read with you':'')+
      '. <b>What the rate buys.</b> One service at one rate, with a free certificate of editing and every change tracked and rejectable. One thing to watch when you compare quotes elsewhere: a proofreading tier that mentions &ldquo;style and consistency improvements&rdquo; is describing copyediting, and one that adds &ldquo;journal formatting compliance&rdquo; is describing manuscript editing. Where three services are sold under one word, the label will not tell you which one you are getting.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>One service, one rate.</b> Proofreading here is $0.025 a word, and that is the number you pay: there is no cheaper package further down the page, and no headline rate that nothing on the page matches. Two things worth checking on any quote you compare it with &mdash; that the advertised price exists at the cheapest package, and that the advertised turnaround is not slower than the tiers sold beneath it. We also do not promise a flawless or error-free document. No proofreading process delivers that, and the service is more useful to you described accurately than promised absolutely.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>Chartered Institute of Editing and Proofreading suggested minimum rates effective 1 March 2026. Scribbr and Reedsy published prices from their own pages. ICMJE Recommendations, current version January 2026, with the &ldquo;Uniform Requirements for Manuscripts&rdquo; title retired August 2013; NLM <i>Citing Medicine</i>. AMA Manual of Style 11th edition, March 2020; APA Publication Manual 7th edition; <i>The Chicago Manual of Style</i> 18th edition, September 2024; <i>The CSE Manual</i> 9th edition, May 2024; <i>The ACS Guide to Scholarly Communication</i>, which superseded the ACS Style Guide. IPEd guidelines for editing theses, July 2025, for the position on thesis proofreading. All checked 22 September 2026.</div></details>'
    );
  }); };

  /* ════ Copy editing · 09 · Which level are you buying? ═════════════════
     The live page sold four packages on turnaround alone and named no
     rate at all, while listing proofreading and line editing among the
     "types of copy editing". They are levels, so this names the level,
     prices it against the same ladder as every other page, and says when
     the answer is a different page. */
  TOOLS.cpe = function(r){ wire(r, function(){
    const hist = seg(r,'hist'),
          doc  = str(r,'doc'),
          wc   = Math.max(500, num(r,'wc',6000)),
          esl  = chk(r,'esl'),
          jrnl = chk(r,'jrnl'),
          refs = chk(r,'refs'),
          plag = chk(r,'plag');

    const rows = [];

    rows.push(['The five services, defined before they are priced','has',
      '<b>They are levels, and each starts where the one before it stops.</b> <i>Proofreading</i> is the final read for typographical and formatting error, and it is defined against a previous stage. <i>Basic copy editing</i> corrects spelling, grammar, usage, punctuation and sentence structure, checks cross-references and builds the style sheet that holds the document consistent. <i>Line editing</i> works at sentence and paragraph level on style, readability and precision. <i>Substantive copy editing</i> deals with clarity, logic and the shape of the manuscript. <i>Technical and scientific copy editing</i> is not a sixth level &mdash; it is any of these done by an editor inside your discipline, which is how terminology gets checked at all. <b>Paying for a level your manuscript does not need buys you nothing</b>, and this tool will say so.']);

    /* ── the verdict ───────────────────────────────────────────────────*/
    let PKG, LVL, RATE, NAME, why;

    if(hist === 'prof' || hist === 'typeset'){
      PKG = null; LVL = 'proof'; RATE = 0.025; NAME = 'proofreading';
      why = (hist === 'typeset')
        ? '<b>You do not want copy editing, you want proofreading, and it is on another page.</b> Typeset proofs are read against the copyedited manuscript &mdash; the previous stage &mdash; for what typesetting introduces: running heads, folios, captions, widows, hyphenation and cross-references that moved. Copyediting a set of proofs would generate changes the compositor has to key in, and somebody will be billed for them.'
        : '<b>Then a copyedit is probably not your best buy.</b> A professional edit has already settled usage, register and consistency; what is left is the error your own revisions introduced since, and that is proofreading at $0.025 a word. If two or more rounds of revision have happened since the edit, that is exactly the case proofreading exists for.';
      rows.push(['What we would sell you instead','no', why + ' <a class="tlink" href="#/proofreading" data-nav>Proofreading, $0.025 a word</a>.']);
    } else {
      PKG = 'Basic'; LVL = 'copy'; RATE = 0.035; NAME = 'basic copy editing';
      const bumps = [];
      if(hist === 'none'){ PKG = 'Standard'; bumps.push('nobody has edited it yet, so the work is not only at the surface'); }
      if(esl){ if(PKG === 'Basic'){ PKG = 'Standard'; } bumps.push('English is an additional language for you, which is where line-level work earns its price'); }
      if(doc === 'grant' && PKG === 'Basic'){ PKG = 'Standard'; bumps.push('a grant application is read by a panel against criteria, so clarity is doing more work than correctness'); }
      if(refs){ PKG = (PKG === 'Premium') ? 'Premium' : 'Advanced'; bumps.push('you have asked for reference accuracy rather than reference consistency'); }
      if(wc > 40000 && PKG !== 'Premium'){ bumps.push('at this length the terminology has to be reconciled across the whole document, not within sections'); }

      if(PKG === 'Standard'){ LVL = 'line'; RATE = 0.050; NAME = 'line editing'; }
      if(PKG === 'Advanced'){ LVL = 'line'; RATE = 0.050; NAME = 'line editing with the reference accuracy check'; }
      if(PKG === 'Premium'){ LVL = 'subst'; RATE = 0.075; NAME = 'substantive editing'; }

      rows.push(['The package that fits','has',
        '<b>' + PKG + '.</b> ' + (bumps.length
          ? 'Because ' + bumps.join('; ') + '.'
          : 'Your document has been read by somebody and the writing is sound; what it needs is the surface done properly, and nothing above Basic would find enough more to justify itself.')
        + ' You can order a level above this one and we will do it. We will not pretend it was necessary.']);
    }

    /* ── where it stops ────────────────────────────────────────────────*/
    rows.push(['What this level will not reach','mid',
      (LVL === 'proof'
        ? 'A proofread will correct the typography of a manuscript nobody has edited and leave every structural problem exactly where it is. If that is your document, come back to this page.'
        : LVL === 'copy'
          ? 'Basic copy editing does not rewrite for rhythm, does not question what a paragraph claims, and does not move anything. A sentence that is correct and hard to read stays correct and hard to read. That is line editing, one package up.'
          : LVL === 'line'
            ? 'Line editing rewrites sentences. It does not reorder sections, cut what is redundant at the level of the argument, or tell you that your discussion overreaches the design. That is the Premium package.'
            : 'Substantive editing recommends structure; it does not write the sections that are missing, and it does not invent data. Structural recommendations come to you as a report and you decide what to accept.')]);

    /* ── the special cases ─────────────────────────────────────────────*/
    if(doc === 'th'){
      rows.push(['Your institution decides this, not us','no',
        '<b>A thesis is the one document where the level is not yours to choose.</b> Most institutions permit copyediting and proofreading and forbid anything structural, and a few forbid third-party editing altogether. We work to the Institute of Professional Editors&rsquo; guidelines, ask for your supervisor&rsquo;s approval in writing, and supply the acknowledgement wording naming the level applied. <a class="tlink" href="#/thesis-editing" data-nav>Thesis editing has the detail</a>, including where we decline the work.']);
    }
    if(doc === 'cv'){
      rows.push(['We do not take this work','no',
        '<b>CV and application editing is not something we sell.</b> It answers to a different standard and a different reader, and grouping it with scientific and medical editing would misrepresent both. We would rather say so here than take the order.']);
    }
    if(doc === 'book'){
      rows.push(['A book is a chain, not an edit','mid',
        'Copyediting a monograph is one link. The publisher selection, the proposal per press, the style sheet handed to production, the index and the permissions all decide publication too, and they are priced together at a volume discount. <a class="tlink" href="#/book-editing" data-nav>Book editing covers the chain</a>.']);
    }
    if(jrnl){
      rows.push(['Formatting to one named journal','has',
        'A copyedit makes a manuscript consistent. It does not make it compliant with a particular journal, because that means its article-type rules, word and reference limits, figure specification, declarations and every place it departs from the style it claims to follow. That is the $200 journal pack, and it is the same $200 on every page of this site.']);
    }

    /* ── the price ─────────────────────────────────────────────────────*/
    const disc = wc > 120000 ? 0.50 : wc > 60000 ? 0.40 : wc > 25000 ? 0.25 : 0;
    const R = RATE * (1 - disc);
    let price = Math.round(wc * R);
    let d0 = LVL === 'proof' ? 2 : LVL === 'copy' ? 3 : LVL === 'line' ? 5 : 10;
    let d1 = LVL === 'proof' ? 4 : LVL === 'copy' ? 5 : LVL === 'line' ? 7 : 14;
    if(refs && LVL === 'line'){ d0 = 7; d1 = 10; }
    if(wc > 25000){ d0 += 5; d1 += 8; } else if(wc > 10000){ d0 += 2; d1 += 3; }
    if(jrnl){ price += 200; d0 += 1; d1 += 2; }
    if(refs){ price += 90; }
    if(plag){ price += 80; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US') + ' words at <b>$' + R.toFixed(3).replace(/0$/,'') + ' a word</b> for ' + NAME +
      (disc ? ' &mdash; our standard rate of $' + RATE.toFixed(3).replace(/0$/,'') + ' with a ' + Math.round(disc*100) + '% volume discount' : '') +
      (jrnl ? ', plus $200 for formatting to one named journal' : '') +
      (refs ? ', plus $90 for the reference accuracy check' : '') +
      (plag ? ', plus $80 for a similarity report read with you' : '') +
      '. Every order includes tracked changes, a query list, the style sheet and a certificate of editing naming the level and the editor.']);

    out(r,
      '<div class="tout__hd"><b>From $' + price.toLocaleString('en-US') + '</b><span>' + d0 + '&ndash;' + d1 + ' business days</span></div>' +
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>' +
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--' + x[1] + '"><b>' + x[0] + '</b><span>' + x[2] + '</span></div>';
      }).join('') +
      '<div class="tverd"><p><b>The same ladder on every page.</b> Copyediting is $0.035 a word here, on the manuscript editing page and in the rate card, and line and substantive editing are $0.050 and $0.075 wherever you meet them. A package that is sold on turnaround alone is not telling you what level of work you are buying, and turnaround is the one thing about an edit that does not describe the edit. We also do not promise a flawless document. No editing process delivers that, and the service is more useful to you described accurately than promised absolutely.</p></div>' +
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>Level definitions follow the Editorial Freelancers Association&rsquo;s published editing levels and <i>The Chicago Manual of Style</i> 18th edition, September 2024. AMA Manual of Style 11th edition, March 2020; APA Publication Manual 7th edition; <i>The CSE Manual</i> 9th edition, May 2024; <i>The ACS Guide to Scholarly Communication</i>, which superseded the ACS Style Guide; ICMJE Recommendations, current version January 2026, with NLM <i>Citing Medicine</i> for Vancouver. IPEd guidelines for editing research theses, July 2025, for the position on thesis work. All checked 22 September 2026.</div></details>'
    );
  }); };


  /* ════ Editing & translation · 08 · Service and level router ════════════
     The hub listed "14 types of editing" and delivered 13, cited PRISMA
     and MARS as compliance credentials on a page selling CV editing and
     software localisation, named not one language pair while selling
     translation, and claimed 800,000 researchers helped. */
  TOOLS.edr = function(r){ wire(r, function(){
    const need = seg(r,'need'),
          doc  = str(r,'doc'),
          wc   = Math.max(500, num(r,'wc',6000)),
          nn   = chk(r,'nn'),    /* English an additional language */
          mach = chk(r,'mach'),  /* machine or AI translated */
          pol  = chk(r,'pol'),   /* institutional policy limits apply */
          jrnl = chk(r,'jrnl');  /* going to a named journal */

    const rows = [];

    /* ── route ─────────────────────────────────────────────────────────*/
    /* service, rate, route, label */
    let svc, rate, route, label, why;

    if(mach){
      svc='Post-editing'; rate=0.06; route='#/post-editing'; label='full post-editing to ISO 18587';
      why='<b>Because a machine has already been through it, and that changes the service, the standard and the price.</b> Machine output fails fluently: it produces confident, grammatical English that occasionally inverts a negation, drops a hedge, omits a clause without leaving a gap, or standardises a term the source deliberately varied &mdash; and a language model adds a failure of its own by <i>improving</i> on the author, resolving an ambiguity or adding a causal connective that was not there. None of that is visible to a reader of the English alone, which is why post-editing is done against the source. It is governed by <b>ISO 18587:2017</b> rather than ISO 17100, which explicitly excludes machine translation plus post-editing from its scope. Two levels exist: full post-editing, output &ldquo;comparable to a product obtained by human translation&rdquo;, and light post-editing, &ldquo;a merely comprehensible text&rdquo; &mdash; and only full post-editing carries normative requirements, because light sits in an informative annex.';
    } else if(need==='tran'){
      svc='Translation with editing'; rate=0.12; route='#/translation-with-editing'; label='translation with independent revision';
      why='<b>Because the document has to exist in another language, and the thing that separates a translation service from one translator working alone is a second linguist.</b> <b>ISO 17100:2015</b> requires that target content be <i>revised by a person other than the translator</i>, checked against the source &mdash; that is the defining requirement, and it is the step a per-word marketplace rate does not include. The standard&rsquo;s terms are precise and routinely blurred: <i>revision</i> is bilingual, <i>review</i> is monolingual, <i>proofreading</i> is examining revised content before printing, and <i>check</i> is what the translator does to their own work. &ldquo;TEP&rdquo; is industry jargon and appears nowhere in the standard.';
    } else if(need==='struct'){
      svc='Scientific editing'; rate=0.075; route='#/scientific-editing'; label='substantive editing, with the reporting-guideline check';
      why='<b>Because the problem is the argument rather than the sentences, and that is a different activity performed by a different person.</b> It also comes with the check that matters most and costs least: your manuscript read against the reporting guideline its design requires, at the current version. <b>CONSORT 2025</b> for a randomised trial &mdash; which superseded CONSORT 2010 in April 2025, so a saved checklist is now a superseded document. <b>PRISMA 2020</b> for a systematic review, and it is still current; there is no PRISMA 2026 whatever a good deal of online writing says. <b>STROBE</b> for observational studies, unchanged since 2007. <b>ARRIVE 2.0</b> for animal research, where the Essential 10 is a floor rather than a menu. <b>TRIPOD+AI</b> for prediction models. The EQUATOR library lists 707 guidelines, which is why matching one to your design is a step rather than an assumption.';
    } else if(need==='fmt'){
      svc='Manuscript editing'; rate=0.035; route='#/manuscript-editing'; label='copyediting plus the journal pack';
      why='<b>Because the language is settled and the document has to fit one named journal &mdash; and journals deviate from the style they claim to use.</b> On the sample published on that page, a journal saying it uses Vancouver departed from it in twenty-three documented ways: author-list conventions, abstract headings, where declarations belong, table size thresholds, whether a reporting checklist is required at submission. None of those appear in any style manual; they live in the instructions for authors. Formatting to a style in the abstract gets all twenty-three wrong while being, narrowly, correct.';
    } else if(need==='fin'){
      svc='Proofreading'; rate=0.025; route='#/proofreading'; label='proofreading';
      why='<b>Because the document is finished and what remains is the surface.</b> One condition applies, and it decides whether this is the right purchase at all: proofreading compares the latest stage of a document to the previous one, so it presupposes a document that has already been edited. If nobody has edited yours, a proofreader will correct its typography faithfully and leave every structural problem in place. Most of what a proofread actually finds was introduced <i>after</i> the editing, by the revision rounds: on the sample published on that page, 61 of 247 corrections were artefacts of the last two revisions, and the most consequential single find was a figure changed everywhere except the abstract.';
    } else {
      svc='Manuscript editing'; rate=0.035; route='#/manuscript-editing'; label='copyediting';
      why='<b>Because the writing needs to be right and the structure does not need to change.</b> Copyediting means correcting spelling, grammar, usage and punctuation, checking cross-references, and preparing the style sheet that keeps the document consistent. Every level in this section is defined before it is priced, so you can tell which one a quote is actually for.';
    }

    /* ── overrides by document ─────────────────────────────────────────*/
    if(doc==='th' && (need==='struct') && !mach){
      svc='Thesis editing'; rate=0.035; route='#/thesis-editing'; label='copyediting, with structural issues noted rather than changed';
      why='<b>Because it is a thesis, and what you asked for is outside what a thesis editor may do.</b> The <b>IPEd guidelines for editing theses, July 2025</b> &mdash; retitled from the 2019 version and announced in November 2025 &mdash; say professional thesis editing &ldquo;should be restricted to copyediting and proofreading&rdquo;, and that editors &ldquo;should not make corrections to the content, substance or structure of the thesis&rdquo;, <i>although they may note issues for the student&rsquo;s attention</i>. That last clause is the whole of what a legitimate thesis editor can do about a structural problem: describe it, and leave it. In Australia this has statutory force through the TEQSA Amendment (Prohibiting Academic Cheating Services) Act 2020, which the guidelines cite directly.';
    } else if(doc==='th' && !mach && need!=='tran'){
      svc='Thesis editing'; rate=(need==='fin'?0.025:0.035); route='#/thesis-editing'; label=(need==='fin'?'proofreading':'copyediting')+', within the permitted range';
      why='<b>Because a thesis is bounded in a way no other document is.</b> The IPEd guidelines for editing theses, July 2025, restrict professional thesis editing to <b>copyediting and proofreading</b> &mdash; Parts D and E of the IPEd standards &mdash; and prohibit corrections to content, substance or structure. What you have asked for is inside that range. Two further requirements go with it: <b>written approval from your principal supervisor</b> before an editor is engaged, and the editor named in your acknowledgements with agreed wording. We ask for the first and supply the second.';
    } else if(doc==='book' && !mach && need!=='tran'){
      svc='Book editing'; route='#/book-editing';
      rate = need==='struct'? 0.060 : (need==='fin'? 0.015 : 0.021);
      label = (need==='struct'? 'developmental editing' : (need==='fin'? 'proofreading' : 'copyediting'))+' at book length';
      why='<b>Because a book is priced and scheduled differently, and because most of what matters happens before the editing.</b> Volume discounts apply &mdash; 25% above 25,000 words, 40% above 60,000, 50% above 120,000 &mdash; and the chain around the edit is what actually decides publication: a personalised list of three to five presses, a proposal written to each one&rsquo;s own published specification, a showcase chapter, permissions started early because clearance runs six to eight weeks per request, and an index that can only be compiled against typeset proofs. Note also what does <i>not</i> govern a book: the ICMJE is scoped by its own title to medical journals, and COPE&rsquo;s criteria are journal-framed with no book guidance published. What governs is the publisher&rsquo;s contract, the commissioning editor, and at a university press peer review against the AUPresses best-practice document, second edition September 2022.';
    }

    rows.push(['What you need: '+svc,'has',
      why+' <a class="tlink" href="'+route+'" data-nav>The '+svc.toLowerCase()+' page</a> sets out the whole service, with a sample deliverable published on it.']);

    /* ── non-native ────────────────────────────────────────────────────*/
    if(nn && svc!=='Translation with editing' && svc!=='Post-editing'){
      rows.push(['English is an additional language for you','mid',
        '<b>Then consider line editing at $0.050 a word rather than the level above, and be careful what a cheaper service will actually reach.</b> The useful work here is not grammatical: article use, preposition selection, idiom, and the calqued structures that are perfectly correct English and immediately identifiable as written by somebody thinking in another language. A proofreader will leave every one of them, which is why a proofread bought in this situation disappoints. Two further points. The editing should move toward <b>your</b> voice at its clearest rather than toward a house style &mdash; particularly for a thesis, which you will defend aloud. And it is true that journals recommend professional editing for authors writing in an additional language; it is not true that any journal recommends a particular supplier, and a page that blurs those two things is selling you something the recommendation does not cover.']);
    }

    /* ── policy ────────────────────────────────────────────────────────*/
    if(pol) rows.push(['An institutional policy limits what an editor may do','gap',
      '<b>Then read it before you buy anything, because it overrides every external guideline including the ones we cite.</b> Look for a document called &ldquo;use of third-party editing services&rdquo;, &ldquo;permitted assistance&rdquo; or &ldquo;academic integrity: proofreading&rdquo; &mdash; usually in a graduate handbook rather than on a public website, and occasionally differing between departments in one university. Three things to look for: <b>what level of editing is permitted</b>, <b>whether a declaration is required</b>, and <b>whether the editor must be named</b>. Where your institution publishes nothing, we work to the IPEd boundary and say so on the order, because naming the published standard you worked to is a better answer to an examiner than describing your own intentions. <b>One disclosure:</b> we did not verify any individual university&rsquo;s policy from its primary source while building these pages, so nothing here describes yours.']);

    /* ── journal ───────────────────────────────────────────────────────*/
    if(jrnl && svc!=='Book editing' && svc!=='Thesis editing') rows.push(['It is going to a named journal','mid',
      '<b>Then add the journal pack at $200, and name the journal rather than the style.</b> What it covers: the article type&rsquo;s own requirements, the abstract type and headings, word and reference limits, table and figure allowances, declaration wording and placement, the reference style at its current edition, and every deviation the journal makes from the style it claims to use. <b>The current editions matter, because four moved recently and templates do not:</b> Chicago is on its 18th edition of September 2024; the CSE Manual on its 9th of May 2024, retitled; the ACS Style Guide has been superseded by the online ACS Guide to Scholarly Communication; and Vancouver means the ICMJE Recommendations, updated January 2026, whose older name &mdash; &ldquo;Uniform Requirements for Manuscripts&rdquo; &mdash; was retired in August 2013.']);

    /* ── what does not apply ───────────────────────────────────────────*/
    rows.push(['What does <i>not</i> govern this, whatever a badge says','gap',
      '<b>COPE and ICMJE are displayed as compliance credentials right across this section of the market, including on pages selling CV editing, software localisation and book publishing.</b> Here is the accurate position. The <b>ICMJE</b> Recommendations are titled for &ldquo;Scholarly Work in Medical Journals&rdquo; and state they are &ldquo;intended primarily for use by authors who might submit their work for publication to ICMJE member journals&rdquo;; the January 2026 update added a section on artificial intelligence and still says nothing about books, translation or proofreading. <b>COPE</b>&rsquo;s membership categories and Core Practices are framed around peer-reviewed journals; it said in 2021 it was working towards book guidance, and as of today has published none beyond a member topic discussion explicitly marked as not being formal COPE advice. <b>PRISMA and MARS</b> get listed as general compliance credentials: PRISMA is a reporting guideline for systematic reviews and MARS is APA&rsquo;s reporting standard for meta-analyses. Neither is an editing or translation standard, and neither has anything to do with a CV, a patent or a website. <b>And the three that were missing:</b> ISO 17100:2015 for translation, ISO 18587:2017 for post-editing, ISO 5060:2024 for evaluating translation output &mdash; named nowhere in this section, on pages selling all three.']);

    /* ── price ─────────────────────────────────────────────────────────*/
    let R = rate;
    if(nn && ['Manuscript editing','Thesis editing','Proofreading'].indexOf(svc)>=0 && need!=='fin') R = Math.max(rate, 0.050);
    let disc = 0;
    if(svc==='Book editing'){ disc = 0; } else if(wc>25000){ disc = 0.25; }
    const RR = Math.round(R*(1-disc)*1000)/1000;
    let price = Math.max(120, Math.round(wc*RR/10)*10);
    if(jrnl && svc!=='Book editing' && svc!=='Thesis editing') price += 200;
    let d0 = 4, d1 = 8;
    if(svc==='Book editing'){ d0=15; d1=25; }
    else if(svc==='Translation with editing'){ d0=6; d1=10; }
    else if(svc==='Post-editing'){ d0=4; d1=7; }
    else if(need==='struct'){ d0=6; d1=10; }
    else if(need==='fin'){ d0=2; d1=4; }
    if(wc>25000){ d0+=6; d1+=10; } else if(wc>10000){ d0+=2; d1+=3; }

    rows.push(['The price, worked','mid',
      wc.toLocaleString('en-US')+' words at <b>$'+RR.toFixed(3).replace(/0$/,'')+' a word</b> for '+label+
      (disc? ' &mdash; our standard rate of $'+R.toFixed(3).replace(/0$/,'')+' with a 25% volume discount above 25,000 words':'')+
      (jrnl && svc!=='Book editing' && svc!=='Thesis editing'? ', plus $200 for the journal pack':'')+
      '. <b>The whole ladder, in one place:</b> proofreading $0.025, copyediting $0.035, line editing $0.050, substantive $0.075, developmental $0.100; translation with independent revision $0.12; full post-editing $0.06 and light post-editing $0.035; book work at a volume discount of 25 to 50%; indexing $0.020. <b>What comes with all of them.</b> A free first step on your own document before you commit. Unlimited questions to the editor or translator who did the work. A certificate of editing naming the level, the editors and the standard applied. And, wherever the destination is a journal, <b>re-editing free for 365 days</b> from delivery.']);

    out(r,
      '<div class="tout__hd"><b>From $'+price.toLocaleString('en-US')+'</b><span>'+d0+'&ndash;'+d1+' business days</span></div>'+
      '<div class="trow trow--hd trow--txt"><b>Item</b><span>What applies, and why</span></div>'+
      rows.map(function(x){
        return '<div class="trow trow--txt trow--flag trow--'+x[1]+'"><b>'+x[0]+'</b><span>'+x[2]+'</span></div>';
      }).join('')+
      '<div class="tverd"><p><b>Why this hub asks questions instead of listing services.</b> &ldquo;What do you offer&rdquo; is the wrong question to answer first; &ldquo;which one do I need&rdquo; is the useful one, and it turns on four things: what is wrong with the document, what kind of document it is, whether a machine or another language has been involved, and whether anything constrains what an editor is allowed to do to it. That is what the router above asks, and what the seven rates on this page are organised around. In two of its outcomes it recommends a service cheaper than the one most people arrive looking for.</p></div>'+
      '<details class="tmeth"><summary>Sources, standards and versions</summary><div>CIEP suggested minimum rates effective 1 March 2026. ISO 17100:2015 and Amd 1:2017, ISO 18587:2017 with ISO/DIS 18587 balloting since 4 September 2026, and ISO 5060:2024, at iso.org. CONSORT 2025 and SPIRIT 2025, April 2025; PRISMA 2020; STROBE 2007; ARRIVE 2.0; TRIPOD+AI 2024; guideline count from the EQUATOR Network. ICMJE Recommendations, January 2026. COPE membership criteria and the book-publishing topic discussion of 11 December 2024. IPEd guidelines for editing theses, July 2025, and the TEQSA Amendment (Prohibiting Academic Cheating Services) Act 2020. AUPresses <i>Best Practices for Peer Review of Scholarly Books</i>, second edition September 2022. Style manuals at their current editions: AMA 11th 2020, APA 7th 2019, Chicago 18th September 2024, <i>The CSE Manual</i> 9th May 2024, MLA 9th 2021, ASA 7th June 2022, and the ACS Guide to Scholarly Communication superseding the ACS Style Guide of 2006. Competitor prices from each company&rsquo;s own published page. All checked 22 September 2026.</div></details>'
    );
  }); };

  hubs.forEach(function(hub){
  $$(hub,'[data-tool]').forEach(function(root){
    const fn=TOOLS[root.dataset.tool];
    if(fn){ try{ fn(root); }catch(e){ /* one broken tool must not take the page down */ } }
  });

  /* accordion: one open at a time keeps the page navigable on a phone.
     A container holding a single tool opens that tool straight away. */
  const solo = $$(hub,'.tk').length === 1;
  $$(hub,'.tk').forEach(function(card){
    const btn=$(card,'.tk__t button'), body=$(card,'.tk__body');
    if(!btn||!body) return;
    btn.setAttribute('aria-expanded','false');
    btn.addEventListener('click',function(){
      const open = card.dataset.open==='1';
      $$(hub,'.tk').forEach(function(o){
        if(o===card) return;
        o.dataset.open='0';
        const b=$(o,'.tk__t button'), y=$(o,'.tk__body');
        if(b) b.setAttribute('aria-expanded','false');
        if(y) y.hidden=true;
      });
      card.dataset.open = open?'0':'1';
      btn.setAttribute('aria-expanded', open?'false':'true');
      body.hidden = open;
      if(!open && window.matchMedia('(max-width:719px)').matches){
        btn.scrollIntoView({block:'start',behavior:'smooth'});
      }
    });
    /* set directly rather than clicking: a click would also scroll the page */
    if(solo){ card.dataset.open='1'; btn.setAttribute('aria-expanded','true'); body.hidden=false; }
  });
  });

  /* deep link: /free-tools/#sample-size opens that tool */
  function openFromHash(){
    const h=location.hash.replace(/^#/,'');
    if(!h) return;
    let card=null;
    try{ card=document.querySelector('#'+(window.CSS&&CSS.escape?CSS.escape(h):h)); }catch(e){ return; }
    if(card&&card.classList.contains('tk')&&card.dataset.open!=='1'){ $(card,'.tk__t button').click(); }
  }
  window.addEventListener('hashchange',openFromHash);
  openFromHash();
})();


  /* ---- article contents: highlight the section you are in ---- */
  (function(){
    function wire(){
      const toc = document.querySelector('.view:not([hidden]) .arttoc');
      if(!toc) return;
      const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
      if(!links.length) return;
      const heads = links.map(function(a){
        return document.getElementById(a.getAttribute('href').slice(1));
      }).filter(Boolean);
      if(!heads.length) return;

      let active = null;
      function mark(){
        let cur = heads[0];
        for(let i = 0; i < heads.length; i++){
          if(heads[i].getBoundingClientRect().top <= 140) cur = heads[i];
        }
        if(cur === active) return;
        active = cur;
        links.forEach(function(a){
          a.classList.toggle('is-here', a.getAttribute('href') === '#' + cur.id);
        });
      }
      mark();
      window.addEventListener('scroll', mark, { passive:true });

      /* a contents link is an in-page jump, not a route change */
      toc.addEventListener('click', function(e){
        const a = e.target.closest('a[href^="#"]');
        if(!a) return;
        const el = document.getElementById(a.getAttribute('href').slice(1));
        if(!el) return;
        e.preventDefault();
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96,
                          behavior:'smooth' });
        const d = toc.closest('details');
        if(d && window.matchMedia('(max-width:1039px)').matches) d.open = false;
      });
    }
    /* the router calls this after every render, the same way it rebuilds the
       section bar - there is no route event to listen for */
    window.__articleToc = wire;
    wire();
  })();


(function(){
  const LIBKINDS=[{k:"article",l:"Article"},{k:"template",l:"Template"},{k:"guideline",l:"Guideline"},{k:"flow",l:"Flow chart"},{k:"checklist",l:"Checklist"},{k:"example",l:"Example"},{k:"info",l:"Infographic"},{k:"video",l:"Video"},{k:"workshop",l:"Workshop"},{k:"question",l:"Q&amp;A"},{k:"book",l:"Book"},{k:"concept",l:"Concept"}];
  const LIBCATS=[{k:"writing",l:"Research Writing"},{k:"data",l:"Research Data Analytics &amp; AI"},{k:"publication",l:"Research Publication"},{k:"promotion",l:"Research Promotion"}];
  const LIBTOPICS=[{k:"w-language",l:"Language and clarity",c:"writing"},{k:"w-structure",l:"Structure and argument",c:"writing"},{k:"w-figures",l:"Tables and figures",c:"writing"},{k:"w-refs",l:"Referencing and citation",c:"writing"},{k:"w-reporting",l:"Reporting guidelines",c:"writing"},{k:"w-thesis",l:"Thesis and dissertation",c:"writing"},{k:"w-plain",l:"Writing for non-specialists",c:"writing"},{k:"d-design",l:"Study design and sample size",c:"data"},{k:"d-stats",l:"Statistical analysis",c:"data"},{k:"d-interpret",l:"Interpreting results",c:"data"},{k:"d-synthesis",l:"Evidence synthesis",c:"data"},{k:"d-repro",l:"Reproducibility and code",c:"data"},{k:"d-predict",l:"Prediction and machine learning",c:"data"},{k:"d-ai",l:"AI in research writing",c:"data"},{k:"p-journal",l:"Journal selection",c:"publication"},{k:"p-submit",l:"Manuscript submission",c:"publication"},{k:"p-review",l:"Peer review and response",c:"publication"},{k:"p-ethics",l:"Publication ethics",c:"publication"},{k:"p-oa",l:"Open access and funder rules",c:"publication"},{k:"p-after",l:"After acceptance",c:"publication"},{k:"p-market",l:"Understanding the market",c:"publication"},{k:"r-congress",l:"Congress and conference",c:"promotion"},{k:"r-visual",l:"Visual and video abstracts",c:"promotion"},{k:"r-online",l:"Online media",c:"promotion"},{k:"r-profile",l:"Scholar digital profile",c:"promotion"},{k:"r-press",l:"Press and public engagement",c:"promotion"},{k:"r-reach",l:"Measuring reach",c:"promotion"}];
  const LIBSV=[{k:"bio",l:"Biostatistics",u:"/services/research-services/biostatistics-and-statistical-programming-services/"},{k:"book",l:"Book editing",u:"/services/editing-and-translation/book-editing/"},{k:"cts",l:"Clinical trial support",u:"/services/research-services/product-development/clinical-trial-support/"},{k:"comp",l:"Compliance statement checking",u:"/services/academic-editorial-services/compliance-statement-checking/"},{k:"cov",l:"Cover letter writing",u:"/services/publication-support/cover-letter/"},{k:"dmp",l:"Data management plan",u:"/services/research-services/data-management-plan/"},{k:"art",l:"Figure and artwork preparation",u:"/services/publication-support/art-work-preparation/"},{k:"jsel",l:"Journal selection",u:"/services/publication-support/journal-selection/"},{k:"jsub",l:"Journal submission",u:"/services/publication-support/journal-submission/"},{k:"lit",l:"Literature review",u:"/services/research-services/literature-review-and-gap/"},{k:"mchk",l:"Manuscript check",u:"/services/publication-support/manuscript-check/"},{k:"edit",l:"Manuscript editing",u:"/services/editing-and-translation/manuscript-editing/"},{k:"mw",l:"Medical writing",u:"/services/research-services/medical-writing/"},{k:"ma",l:"Meta-analysis",u:"/services/research-services/meta-analysis/"},{k:"pat",l:"Patient education content",u:"/services/patient-education-content/"},{k:"plag",l:"Plagiarism services",u:"/services/publication-support/plagiarism-services/"},{k:"post",l:"Poster preparation",u:"/services/publication-support/poster-preparation/"},{k:"proof",l:"Proofreading",u:"/services/editing-and-translation/proofreading/"},{k:"gov",l:"Publication governance",u:"/services/scientific-communication/publication-governance-sop-and-steering-committee/"},{k:"reg",l:"Regulatory writing",u:"/services/medical-writing/regulatory-writing/"},{k:"chk",l:"Reporting checklist review",u:"/services/publication-support/reporting-checklist-review/"},{k:"data",l:"Research data service",u:"/services/publication-support/research-data-service/"},{k:"prop",l:"Research proposal",u:"/services/physician-writing-services/research-proposal/"},{k:"rev",l:"Response to reviewers",u:"/services/publication-support/responding-to-reviewers/"},{k:"resub",l:"Resubmission support",u:"/services/publication-support/resubmission-support/"},{k:"scop",l:"Scoping review",u:"/services/research-services/scoping-review/"},{k:"sap",l:"Statistical analysis plan",u:"/services/research-services/statistical-analysis-plan/"},{k:"sr",l:"Systematic review",u:"/services/research-services/systematic-review/"},{k:"thes",l:"Thesis editing",u:"/services/editing-and-translation/thesis-editing/"}];
  const LIBSB=[{k:"animal-science",l:"Animal science",u:""},{k:"cancer-research",l:"Cancer research",u:""},{k:"cardiology",l:"Cardiology",u:""},{k:"public-health",l:"Public health",u:""}];
  const LIBTA=[{k:"cardiovascular",l:"Cardiovascular",u:""},{k:"oncology-haematology",l:"Oncology &amp; haematology",u:""}];
  const LIBIN=[{k:"publishing",l:"Academic publishing",u:""},{k:"cro",l:"Contract research organisations",u:""},{k:"pharmaceutical",l:"Pharmaceutical",u:""}];
  /* Insights runs in three streams; the Academy has none, so this list is
     only ever used by a .lib that sets data-lib-src. */
  const LIBSTREAM=[{k:"lab",l:"Inside the lab"},{k:"reg",l:"Regulatory"},{k:"res",l:"Latest research"}];
  const LIBITEMS=[{k:"article",c:"publication",t:"The NIH Public Access Policy changed on 1 July",d:"The embargo is gone. What that means for the version you deposit and when you have to deposit it.",s:"NIH",st:"ready",sr:"reg",u:"/insights/nih-public-access-policy-2025/",sv:"jsl",sb:"",ta:"",in:"",tp:"p-oa",dt:"2026-07-01",mn:5,au:"Pubrica Insights",kw:"open access|NIH|public access policy|embargo|PubMed Central"},
    {k:"article",c:"publication",t:"Japan now requires immediate open access for publicly funded research",d:"Who it binds, from which funding year, and the repository route that satisfies it without an APC.",s:"Japan Cabinet Office",st:"ready",sr:"reg",u:"/insights/japan-immediate-open-access/",sv:"jsl",sb:"",ta:"",in:"",tp:"p-oa",dt:"2026-04-07",mn:5,au:"Pubrica Insights",kw:"open access|Japan|immediate OA|repository|funder mandate"},
    {k:"article",c:"publication",t:"Horizon Europe will not reimburse a hybrid journal APC",d:"What the rule actually says, which route still qualifies, and what to do if your target title is hybrid.",s:"Horizon Europe",st:"ready",sr:"reg",u:"/insights/horizon-europe-article-processing-charges/",sv:"jsl",sb:"",ta:"",in:"",tp:"p-oa",dt:"2026-05-19",mn:6,au:"Pubrica Insights",kw:"open access|APC|Horizon Europe|hybrid journal|funder mandate"},
    {k:"article",c:"publication",t:"Responding to reviewer comments: a point-by-point rebuttal framework",d:"How to structure a rebuttal an editor can adjudicate, including what to concede and what to defend.",s:"ICMJE",st:"ready",u:"/academy/response-to-reviewer/responding-to-reviewer-comments-rebuttal-letter/",sv:"rev",sb:"",ta:"",in:"",tp:"p-review",dt:"2026-09-11",mn:9,au:"Pubrica Academy",kw:"peer review|rebuttal letter|reviewer comments|revision|ICMJE"},
    {k:"article",c:"publication",t:"Answering a statistical objection",d:"A reviewer doubts the analysis. What a convincing answer contains, and what makes one read as evasive.",s:"ICH E9",st:"ready",sr:"lab",u:"/insights/response-to-reviewers/",sv:"bio",sb:"",ta:"",in:"",tp:"p-review",dt:"2026-02-04",mn:5,au:"Pubrica Academy",kw:"peer review|biostatistics|estimand|sensitivity analysis|ICH E9"},
    {k:"article",c:"publication",t:"Reading a desk rejection properly",d:"Four sentences from an editor usually contain the real reason. How to find it before resubmitting anywhere.",s:"",st:"ready",sr:"lab",u:"/insights/desk-rejection-diagnosis/",sv:"resub",sb:"",ta:"",in:"",tp:"p-review",dt:"2026-01-15",mn:4,au:"Pubrica Academy",kw:"desk rejection|journal selection|resubmission|scope"},
    {k:"article",c:"publication",t:"How to choose an academic publisher",d:"Series fit, extent, peer review, open access routes and indexing, and why Scopus selecting by publisher settles more than you think.",s:"",st:"ready",sr:"res",u:"/insights/choosing-an-academic-publisher/",sv:"jsel",sb:"",ta:"",in:"publishing",tp:"p-journal",dt:"2026-01-22",mn:4,au:"Pubrica Academy",kw:"academic publishing|monograph|book proposal|series|indexing"},
    {k:"article",c:"publication",t:"Choosing a journal for a case report",d:"Which journals still publish them, what they ask for, and how to read a scope statement that says yes but means no.",s:"CARE",st:"ready",sr:"res",u:"/insights/how-should-physicians-choose-the-right-journal-for-submitting-a-case-report/",sv:"jsel",sb:"",ta:"",in:"",tp:"p-journal",dt:"2026-01-29",mn:4,au:"Pubrica Academy",kw:"case report|CARE guideline|journal selection|consent"},
    {k:"article",c:"publication",t:"How to declare an editor in your acknowledgements",d:"What has to be disclosed, in whose words, and wording that satisfies a university without overstating the help.",s:"ICMJE",st:"ready",sr:"res",u:"/insights/declaring-thesis-editing/",sv:"edit",sb:"",ta:"",in:"",tp:"p-ethics",dt:"2026-03-12",mn:4,au:"Pubrica Academy",kw:"acknowledgements|disclosure|thesis editing|ICMJE|AI disclosure"},
    {k:"article",c:"publication",t:"How to read an editing rate card, including ours",d:"What per-word pricing hides, which passes are counted separately, and the questions that make two quotes comparable.",s:"",st:"ready",sr:"lab",u:"/insights/reading-an-editing-rate-card/",sv:"edit",sb:"",ta:"",in:"",tp:"p-market",dt:"2026-03-19",mn:5,au:"Pubrica Academy",kw:"editing rates|copyediting|proofreading|pricing"},
    {k:"article",c:"writing",t:"Turning a thesis chapter into a journal article",d:"A chapter argues completeness; an article argues one finding. What comes out, and what has to be rewritten.",s:"",st:"ready",sr:"res",u:"/insights/thesis-chapter-to-journal-article/",sv:"thes",sb:"",ta:"",in:"",tp:"w-thesis",dt:"2026-02-05",mn:4,au:"Pubrica Academy",kw:"thesis|manuscript|reporting guideline|text recycling"},
    {k:"article",c:"writing",t:"The three things that make a thesis read like a thesis",d:"Examiners want the working shown. Readers do not. The three habits that mark a manuscript as unrevised.",s:"",st:"ready",sr:"res",u:"/insights/thesis-to-monograph/",sv:"book",sb:"",ta:"",in:"",tp:"w-thesis",dt:"2026-02-26",mn:4,au:"Pubrica Academy",kw:"thesis|monograph|academic writing|literature review"},
    {k:"article",c:"writing",t:"Writing patient education materials that change adherence",d:"Reading level, structure and what to cut, for text a patient will actually act on.",s:"",st:"ready",sr:"res",u:"/insights/how-physicians-can-write-clear-and-impactful-patient-education-materials/",sv:"pat",sb:"public-health",ta:"",in:"",tp:"w-plain",dt:"2026-02-18",mn:4,au:"Pubrica Academy",kw:"patient education|health literacy|readability|risk communication|adherence"},
    {k:"article",c:"writing",t:"Why figures fail at production, not at review",d:"Resolution, embedded fonts and colour space pass peer review and stop a paper at production.",s:"",st:"ready",sr:"lab",u:"/insights/figures-that-fail-at-production/",sv:"art",sb:"",ta:"",in:"",tp:"w-figures",dt:"2026-03-11",mn:4,au:"Pubrica Academy",kw:"figures|resolution|vector|colour accessibility|image integrity"},
    {k:"article",c:"writing",t:"The same passage, marked both ways",d:"One paragraph, proofread and copyedited side by side, so the difference stops being a word on a price list.",s:"",st:"ready",sr:"lab",u:"/insights/proofreading-vs-copyediting/",sv:"proof",sb:"",ta:"",in:"",tp:"w-language",dt:"2026-04-02",mn:4,au:"Pubrica Academy",kw:"proofreading|copyediting|editorial levels|STROBE"},
    {k:"article",c:"writing",t:"A document revised four times has been proofread none",d:"What repeated revision does to a file, and why the last pass has to happen after the last change.",s:"",st:"ready",sr:"lab",u:"/insights/revision-damage/",sv:"proof",sb:"",ta:"",in:"",tp:"w-language",dt:"2026-04-09",mn:4,au:"Pubrica Academy",kw:"revision|proofreading|version control|co-authors"},
    {k:"article",c:"data",t:"What is experimental research design? Definition, types and examples",d:"Manipulation, control and randomisation; between- and within-subjects, factorial, RCT and crossover; and the reporting standard each one commits you to.",s:"CONSORT 2025",st:"ready",u:"/academy/experimental-design/experimental-research-design-definition-types-examples/",sv:"sap",sb:"",ta:"",in:"",tp:"d-design",dt:"2026-10-02",mn:7,au:"Pubrica Academy",kw:"experimental design|randomisation|control group|factorial design|crossover|CONSORT 2025|within-subjects"},
    {k:"article",c:"data",t:"Types of pre-experimental research design",d:"One-shot case study, one-group pretest-posttest and static group comparison: what each can show, and the causal claim none of them supports.",s:"STROBE",st:"ready",u:"/academy/experimental-design/types-of-pre-experimental-research-design/",sv:"sap",sb:"",ta:"",in:"",tp:"d-design",dt:"2026-10-02",mn:6,au:"Pubrica Academy",kw:"pre-experimental design|one-group pretest-posttest|static group comparison|pilot study|regression to the mean"},
    {k:"book",c:"data",t:"Medical Statistics Made Easy",d:"Harris M, Taylor G. Martin Dunitz / Taylor &amp; Francis, 2003. Describing data, confidence and p-values, tests of difference, risk ratios and NNT, correlation and regression, survival analysis, sensitivity and specificity. Republished here with permission.",s:"Free PDF",st:"ready",u:"https://pubrica.com/wp-content/uploads/2021/07/Medical-Statistics-final.pdf",sv:"bio",sb:"",ta:"",in:"",tp:"d-stats",dt:"2021-07-01",mn:0,au:"Harris M, Taylor G",kw:"medical statistics|p-values|confidence intervals|odds ratio|number needed to treat|survival analysis|sensitivity and specificity"},
    {k:"checklist",c:"writing",t:"SRQR: Standards for Reporting Qualitative Research",d:"The reporting checklist for qualitative studies: design and approach, participant selection, data collection, researcher reflexivity, analysis and the techniques used to establish trustworthiness.",s:"SRQR",st:"ready",u:"",sv:"mw",sb:"",ta:"",in:"",tp:"w-reporting",dt:"2026-10-02",mn:0,au:"Pubrica Academy",kw:"SRQR|qualitative research|reporting guideline|reflexivity|trustworthiness|EQUATOR"},
    {k:"concept",c:"writing",t:"PICO framework",d:"Population, Intervention, Comparison, Outcome: the four-part structure that turns a vague question into a searchable one, with the variants built on it and where it stops working.",s:"Richardson 1995",st:"ready",u:"/academy/concepts-definitions/pico-framework/",sv:"sr",sb:"",ta:"",in:"",tp:"w-structure",dt:"2026-10-02",mn:6,au:"Pubrica Academy",kw:"PICO|research question|evidence-based practice|systematic review|PICOT|PECO|SPIDER"},
    {k:"concept",c:"data",t:"What are the limitations of case studies?",d:"Why depth costs generalisability, the six limitations that follow from the design, and how a well-conducted case study answers them in advance.",s:"CARE",st:"ready",u:"/academy/concepts-definitions/what-are-the-limitations-of-case-studies/",sv:"sr",sb:"",ta:"",in:"",tp:"d-design",dt:"2026-10-02",mn:6,au:"Pubrica Academy",kw:"case study|generalisability|researcher bias|triangulation|CARE|qualitative research"},
    {k:"article",c:"writing",t:"What is a literature review in research methodology?",d:"The types, the steps, the structure, and the difference between a literature review and a systematic review that reviewers keep having to point out.",s:"PRISMA 2020",st:"ready",u:"/academy/literature-review/literature-review-in-research-methodology/",sv:"lit",sb:"",ta:"",in:"",tp:"w-structure",dt:"2026-10-02",mn:7,au:"Pubrica Academy",kw:"literature review|narrative review|systematic review|scoping review|research methodology|critical appraisal"},
    {k:"article",c:"writing",t:"What is the purpose and importance of literature reviews in research?",d:"The four things a review establishes that no other section can, and what separates one that works from one that summarises.",s:"",st:"ready",sr:"res",u:"/insights/study-guide/what-is-the-purpose-and-importance-of-literature-reviews-in-research/",sv:"lit",sb:"",ta:"",in:"",tp:"w-structure",dt:"2026-10-02",mn:5,au:"Pubrica Academy",kw:"literature review|research gap|theoretical framework|research justification"},
    {k:"article",c:"publication",t:"Common types of plagiarism",d:"Direct, self, mosaic, paraphrasing and accidental, plus where generative tools sit, and the four habits that prevent most of it.",s:"COPE",st:"ready",u:"/academy/plagiarism-service/common-types-of-plagiarism/",sv:"plag",sb:"",ta:"",in:"",tp:"p-ethics",dt:"2026-10-02",mn:7,au:"Pubrica Academy",kw:"plagiarism|self-plagiarism|mosaic plagiarism|text recycling|COPE|research integrity|AI disclosure"},
    {k:"article",c:"writing",t:"How to write a research proposal: a complete guide",d:"The standard sections, the methodology detail reviewers look for, and the sample size objection that sinks most of them.",s:"",st:"ready",u:"/academy/research-proposal/how-to-write-a-research-proposal-a-complete-guide/",sv:"prop",sb:"",ta:"",in:"",tp:"w-structure",dt:"2026-10-02",mn:7,au:"Pubrica Academy",kw:"research proposal|problem statement|methodology|sample size|ethics approval|grant writing"},
    {k:"article",c:"publication",t:"Journal quartiles explained: Q1 to Q4, and how to choose",d:"What a quartile measures, why the same journal can be Q1 and Q3 at once, how JCR, SJR and CiteScore differ, and what DORA says about using them.",s:"DORA",st:"ready",u:"/academy/journal-selection/journal-quartiles-q1-q2-q3-q4-ranking-guide/",sv:"jsel",sb:"",ta:"",in:"",tp:"p-journal",dt:"2026-10-02",mn:7,au:"Pubrica Academy",kw:"journal quartiles|impact factor|SCImago|CiteScore|journal selection|DORA|Scopus"},
    {k:"article",c:"data",t:"What is research design? Types, methods and best practices",d:"The four design families, exploratory against confirmatory, and the reporting guideline each design commits you to.",s:"EQUATOR",st:"ready",u:"/services/physician-writing-services/research-proposal/research-design-types-methods-best-practices/",sv:"sap",sb:"",ta:"",in:"",tp:"d-design",dt:"2026-10-02",mn:8,au:"Pubrica Academy",kw:"research design|study design|research methodology|descriptive|correlational|experimental|exploratory|confirmatory|sample size"},
    {k:"article",c:"writing",t:"Cardiology manuscripts and trial reporting under CONSORT 2025",d:"What changed in the 2025 update, and the items cardiovascular submissions most often fail on.",s:"CONSORT 2025",st:"ready",u:"/academy/journal-submission/cardiology-manuscripts-consort-2025-compliance/",sv:"mw",sb:"cardiology",ta:"cardiovascular",in:"",tp:"w-reporting",dt:"2026-05-14",mn:4,au:"Pubrica Academy",kw:"CONSORT 2025|cardiology|composite endpoint|trial registration|harms"},
    {k:"article",c:"writing",t:"Oncology manuscripts: CONSORT, RECIST and high-impact submission",d:"Aligning response criteria reporting with what high-impact oncology journals expect to see.",s:"RECIST 1.1",st:"ready",u:"/academy/journal-submission/oncology-manuscripts-consort-recist-submission/",sv:"mw",sb:"cancer-research",ta:"oncology-haematology",in:"",tp:"w-reporting",dt:"2026-05-21",mn:4,au:"Pubrica Academy",kw:"RECIST|iRECIST|oncology|progression-free survival|CTCAE"},
    {k:"template",c:"writing",t:"Manuscript templates by article type",d:"IMRaD shells for original research, case report, narrative review and brief communication, with the section order and word allocation journals expect.",s:"",st:"prep",u:"",sv:"edit",sb:"",ta:"",in:"",tp:"w-structure",dt:"",mn:0,au:"",kw:""},
    {k:"template",c:"writing",t:"Reporting checklists to complete",d:"CONSORT 2025, PRISMA 2020, STROBE and ARRIVE 2.0 as fillable checklists, with where in a manuscript each item is usually satisfied.",s:"CONSORT 2025",st:"prep",u:"",sv:"chk",sb:"",ta:"",in:"",tp:"w-reporting",dt:"",mn:0,au:"",kw:""},
    {k:"template",c:"publication",t:"Cover letter and rebuttal shells",d:"A cover letter an editor can scan in thirty seconds, and a rebuttal table separating what you concede from what you defend.",s:"",st:"prep",u:"",sv:"cov",sb:"",ta:"",in:"",tp:"p-submit",dt:"",mn:0,au:"",kw:""},
    {k:"template",c:"publication",t:"Declaration and disclosure wording",d:"Authorship, funding, conflicts, data availability and editing-assistance statements worded to satisfy ICMJE and the major publishers.",s:"ICMJE",st:"prep",u:"",sv:"comp",sb:"",ta:"",in:"",tp:"p-ethics",dt:"",mn:0,au:"",kw:""},
    {k:"template",c:"data",t:"Data management plan outlines",d:"The structure funders ask for, with the sections most often left thin marked and explained.",s:"FAIR",st:"prep",u:"",sv:"dmp",sb:"",ta:"",in:"",tp:"d-repro",dt:"",mn:0,au:"",kw:""},
    {k:"guideline",c:"writing",t:"CONSORT 2025 and its extensions",d:"The edition that replaced CONSORT 2010 in April 2025, with the pilot, cluster and non-inferiority extensions and what an old checklist now fails.",s:"CONSORT 2025",st:"prep",u:"",sv:"cts",sb:"",ta:"",in:"",tp:"w-reporting",dt:"",mn:0,au:"",kw:""},
    {k:"guideline",c:"data",t:"PRISMA 2020 and GRADE",d:"The 27-item checklist and flow diagram, and certainty of evidence reported per outcome rather than per review.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"guideline",c:"data",t:"STROBE, STARD and TRIPOD+AI",d:"Observational studies, diagnostic accuracy, and prediction models including machine-learned ones, the fastest-moving of the three.",s:"TRIPOD+AI",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-design",dt:"",mn:0,au:"",kw:""},
    {k:"guideline",c:"writing",t:"ARRIVE 2.0 for animal work",d:"The Essential 10 and the Recommended Set, with sample size justification and randomisation reporting.",s:"ARRIVE 2.0",st:"prep",u:"",sv:"mw",sb:"animal-science",ta:"",in:"",tp:"w-reporting",dt:"",mn:0,au:"",kw:""},
    {k:"guideline",c:"publication",t:"ICMJE, COPE and GPP 2022",d:"Authorship and contributorship, publication ethics casework, and good publication practice for industry-sponsored research.",s:"ICMJE",st:"prep",u:"",sv:"gov",sb:"",ta:"",in:"publishing",tp:"p-ethics",dt:"",mn:0,au:"",kw:""},
    {k:"flow",c:"data",t:"PRISMA study selection flow",d:"Identification, screening, eligibility and inclusion, with the counts at each stage and where records disappear unrecorded.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"flow",c:"publication",t:"Submission to first decision",d:"What happens between upload and decision, who touches the manuscript, and the two places weeks are usually lost.",s:"",st:"prep",u:"",sv:"jsub",sb:"",ta:"",in:"publishing",tp:"p-submit",dt:"",mn:0,au:"",kw:""},
    {k:"flow",c:"publication",t:"Peer review and revision cycle",d:"The major and minor revision paths, what each round is deciding, and when a further round stops adding anything.",s:"",st:"prep",u:"",sv:"rev",sb:"",ta:"",in:"publishing",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"flow",c:"data",t:"Systematic review, protocol to publication",d:"Registration through to submission, marking the steps that cannot be reordered without invalidating what follows.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"flow",c:"writing",t:"Regulatory document sequence",d:"Protocol, analysis plan, study report and clinical overview, and which depends on which being finished first.",s:"ICH E3",st:"prep",u:"",sv:"reg",sb:"",ta:"",in:"pharmaceutical",tp:"w-structure",dt:"",mn:0,au:"",kw:""},
    {k:"checklist",c:"publication",t:"Before you submit",d:"Declarations, reporting checklist, figure specifications and reference check, in the order a screening editor applies them.",s:"ICMJE",st:"prep",u:"",sv:"mchk",sb:"",ta:"",in:"",tp:"p-submit",dt:"",mn:0,au:"",kw:""},
    {k:"checklist",c:"data",t:"Before you start a review",d:"Protocol registered, question framed, search peer-reviewed, screening rules agreed: the four that cannot be retrofitted.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"checklist",c:"data",t:"Before database lock",d:"Analysis plan finalised, estimands defined, derivations specified and blinding arrangements written down.",s:"ICH E9",st:"prep",u:"",sv:"sap",sb:"",ta:"",in:"cro",tp:"d-stats",dt:"",mn:0,au:"",kw:""},
    {k:"checklist",c:"publication",t:"Before you respond to reviewers",d:"Every comment numbered, every change located, every disagreement evidenced.",s:"",st:"prep",u:"",sv:"rev",sb:"",ta:"",in:"",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"checklist",c:"data",t:"Before you publish data",d:"De-identification, licence, repository, metadata and the availability statement that points at all four.",s:"FAIR",st:"prep",u:"",sv:"data",sb:"",ta:"",in:"",tp:"d-repro",dt:"",mn:0,au:"",kw:""},
    {k:"example",c:"publication",t:"Annotated rebuttals",d:"A real objection answered two ways, with the reasoning for each marked in the margin.",s:"",st:"prep",u:"",sv:"rev",sb:"",ta:"",in:"",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"example",c:"writing",t:"Before and after editing",d:"The same paragraph proofread and copyedited, so the difference stops being a word on a price list.",s:"",st:"prep",u:"",sv:"edit",sb:"",ta:"",in:"",tp:"w-language",dt:"",mn:0,au:"",kw:""},
    {k:"example",c:"data",t:"Search strategies that can be repeated",d:"A full strategy with every database, string, limit and record count, as an assessor would need it.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"example",c:"writing",t:"Figures that passed and failed production",d:"The same figure at review resolution and at production resolution, with the fault named.",s:"",st:"prep",u:"",sv:"art",sb:"",ta:"",in:"",tp:"w-figures",dt:"",mn:0,au:"",kw:""},
    {k:"example",c:"publication",t:"Declarations that satisfy and do not",d:"Real disclosure wording, with what each publisher actually asked for alongside it.",s:"ICMJE",st:"prep",u:"",sv:"comp",sb:"",ta:"",in:"",tp:"p-ethics",dt:"",mn:0,au:"",kw:""},
    {k:"info",c:"writing",t:"Which reporting guideline does my design need?",d:"One page from design to guideline to extension, covering the eight designs that account for most submissions.",s:"CONSORT 2025",st:"prep",u:"",sv:"chk",sb:"",ta:"",in:"",tp:"w-reporting",dt:"",mn:0,au:"",kw:""},
    {k:"info",c:"writing",t:"What each editing pass changes",d:"Proofreading, copy-editing, substantive editing and developmental editing, side by side.",s:"",st:"prep",u:"",sv:"edit",sb:"",ta:"",in:"",tp:"w-language",dt:"",mn:0,au:"",kw:""},
    {k:"info",c:"publication",t:"Open access routes compared",d:"Gold, green, diamond and hybrid, with what each costs, who pays and what funders accept.",s:"",st:"prep",u:"",sv:"jsel",sb:"",ta:"",in:"publishing",tp:"p-oa",dt:"",mn:0,au:"",kw:""},
    {k:"info",c:"data",t:"Reading a forest plot",d:"Every element labelled, including the ones most often misread.",s:"",st:"prep",u:"",sv:"ma",sb:"",ta:"",in:"",tp:"d-interpret",dt:"",mn:0,au:"",kw:""},
    {k:"info",c:"publication",t:"The peer review decision tree",d:"What each decision letter means and what it does not.",s:"",st:"prep",u:"",sv:"jsub",sb:"",ta:"",in:"",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"video",c:"data",t:"Building a reproducible search",d:"An information specialist constructing a strategy from a question, narrating the decisions.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"video",c:"data",t:"Reading a forest plot",d:"What each element is, and the two things people most often misread.",s:"",st:"prep",u:"",sv:"ma",sb:"",ta:"",in:"",tp:"d-interpret",dt:"",mn:0,au:"",kw:""},
    {k:"video",c:"publication",t:"Structuring a rebuttal",d:"A real comment set worked through from first read to finished letter.",s:"",st:"prep",u:"",sv:"rev",sb:"",ta:"",in:"",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"video",c:"writing",t:"Preparing figures for production",d:"Resolution, fonts and colour space, done once properly.",s:"",st:"prep",u:"",sv:"art",sb:"",ta:"",in:"",tp:"w-figures",dt:"",mn:0,au:"",kw:""},
    {k:"video",c:"data",t:"Registering a protocol on PROSPERO",d:"The fields that cause the most rejections, filled in.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"workshop",c:"writing",t:"Writing to a reporting guideline",d:"Half a day, built around manuscripts your group is writing now.",s:"CONSORT 2025",st:"prep",u:"",sv:"mw",sb:"",ta:"",in:"",tp:"w-reporting",dt:"",mn:0,au:"",kw:""},
    {k:"workshop",c:"data",t:"Systematic review methods",d:"Two sessions: question and search, then screening and synthesis.",s:"PRISMA 2020",st:"prep",u:"",sv:"sr",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"workshop",c:"data",t:"Interpreting your own analysis",d:"For researchers who commission statistics rather than run them.",s:"",st:"prep",u:"",sv:"bio",sb:"",ta:"",in:"",tp:"d-interpret",dt:"",mn:0,au:"",kw:""},
    {k:"workshop",c:"publication",t:"Responding to reviewers",d:"A real comment set worked through together, with the rebuttal drafted in the session.",s:"",st:"prep",u:"",sv:"rev",sb:"",ta:"",in:"",tp:"p-review",dt:"",mn:0,au:"",kw:""},
    {k:"workshop",c:"promotion",t:"Presenting research at congress",d:"Poster and slide design, and answering the question you were hoping nobody would ask.",s:"",st:"prep",u:"",sv:"post",sb:"",ta:"",in:"",tp:"r-congress",dt:"",mn:0,au:"",kw:""},
    {k:"question",c:"publication",t:"How do I know whether a journal is predatory?",d:"The checks that settle it, in the order that resolves most cases in under ten minutes.",s:"",st:"ready",u:"/free-tools/",sv:"jsel",sb:"",ta:"",in:"",tp:"p-journal",dt:"",mn:0,au:"",kw:""},
    {k:"question",c:"data",t:"Do I need to register a protocol for a scoping review?",d:"What PRISMA-ScR expects, where registration is available, and what to do when it is not.",s:"PRISMA-ScR",st:"prep",u:"",sv:"scop",sb:"",ta:"",in:"",tp:"d-synthesis",dt:"",mn:0,au:"",kw:""},
    {k:"question",c:"writing",t:"Can I reuse a figure from my own thesis?",d:"Usually yes, and what the licence and the acknowledgement have to say.",s:"",st:"prep",u:"",sv:"art",sb:"",ta:"",in:"",tp:"w-figures",dt:"",mn:0,au:"",kw:""}];

  const MONTHS = ['January','February','March','April','May','June','July',
                  'August','September','October','November','December'];
  function fmtDate(iso){
    const p = iso.split('-');
    if(p.length !== 3) return iso;
    return parseInt(p[2], 10) + ' ' + MONTHS[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }
  const esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  const KL = {}, CL = {}, TL = {};
  LIBKINDS.forEach(function(x){ KL[x.k] = x.l; });
  LIBCATS.forEach(function(x){ CL[x.k] = x.l; });
  LIBTOPICS.forEach(function(x){ TL[x.k] = x.l; });
  const RL = {};
  [LIBSV, LIBSB, LIBTA, LIBIN].forEach(function(v){
    v.forEach(function(x){ RL[x.k] = x; }); });
  function reg(i){
    return [['sv', i.sv], ['sb', i.sb], ['ta', i.ta], ['in', i['in']]]
      .filter(function(p){ return p[1] && RL[p[1]]; })
      .map(function(p){ return '<span class="libreg libreg--' + p[0] + '">' + RL[p[1]].l + '</span>'; })
      .join('');
  }

  function wire(root){
    if(root.__wired) return;
    root.__wired = true;
    const only  = root.getAttribute('data-lib') || '';
    const onlyc = root.getAttribute('data-lib-cat') || '';
    /* a path prefix, so one list can hold everything published under
       /insights/ without the Academy's own shelves changing */
    const src   = root.getAttribute('data-lib-src') || '';
    const pool  = LIBITEMS.filter(function(i){
      if(only && i.k !== only) return false;
      if(onlyc && i.c !== onlyc) return false;
      if(src && (i.u || '').indexOf(src) !== 0) return false;
      return true; });
    const PAGE = 10;  /* rows per page; "show more" adds another PAGE */
    const state = { q:'', kinds:[], cats:[], tops:[], status:[], sv:[], sb:[], ta:[], in:[], sr:[], sort:'new', shown:PAGE };

    const facets = root.querySelector('[data-lib-facets]');
    const fwrap  = root.querySelector('.libfacd');
    if(fwrap){
      /* The summary is hidden above 1000px, so a panel left closed on a phone
         would have no way back open after a resize. Follow the query instead
         of setting it once. */
      const wide = window.matchMedia('(min-width:1000px)');
      const sync = function(){ fwrap.open = wide.matches; };
      sync();
      if(wide.addEventListener) wide.addEventListener('change', sync);
      else if(wide.addListener) wide.addListener(sync);
    }
    const rows   = root.querySelector('[data-lib-rows]');
    const count  = root.querySelector('[data-lib-count]');
    const more   = root.querySelector('[data-lib-more]');
    const search = root.querySelector('[data-lib-search]');
    const sort   = root.querySelector('[data-lib-sort]');
    const chips  = root.querySelector('[data-lib-chips]');
    const quiet  = root.getAttribute('data-lib-quiet') || '';
    const cap    = parseInt(root.getAttribute('data-lib-cap') || '0', 10);
    const rest   = root.querySelector('[data-lib-rest]');
    const idle   = quiet ? document.querySelector(quiet) : null;

    function match(i, skip){
      if(state.q){
        const q = state.q.toLowerCase();
        const hay = i.t + ' ' + i.d + ' ' + i.s + ' ' + (TL[i.tp] || '') + ' ' + i.kw.split('|').join(' ') + ' ' + i.au + ' ' +
          [i.sv, i.sb, i.ta, i['in']].map(function(k){ return RL[k] ? RL[k].l : ''; }).join(' ');
        if(hay.toLowerCase().indexOf(q) < 0) return false;
      }
      if(skip !== 'stream' && state.sr.length && state.sr.indexOf(i.sr) < 0) return false;
      if(skip !== 'kind'   && state.kinds.length  && state.kinds.indexOf(i.k) < 0) return false;
      if(skip !== 'cat'    && state.cats.length   && state.cats.indexOf(i.c) < 0) return false;
      if(skip !== 'topic'  && state.tops.length   && state.tops.indexOf(i.tp) < 0) return false;
      if(skip !== 'status' && state.status.length && state.status.indexOf(i.st) < 0) return false;
      if(skip !== 'sv' && state.sv.length && state.sv.indexOf(i.sv) < 0) return false;
      if(skip !== 'sb' && state.sb.length && state.sb.indexOf(i.sb) < 0) return false;
      if(skip !== 'ta' && state.ta.length && state.ta.indexOf(i.ta) < 0) return false;
      if(skip !== 'in' && state['in'].length && state['in'].indexOf(i['in']) < 0) return false;
      return true;
    }
    function results(){ return pool.filter(function(i){ return match(i); }); }

    function group(title, name, opts, sel, swatch){
      const html = opts.map(function(o){
        const n = pool.filter(function(i){
          const f = { kind:'k', cat:'c', topic:'tp', status:'st', sv:'sv', sb:'sb', ta:'ta', 'in':'in',
                      stream:'sr' }[name];
          return match(i, name) && i[f] === o.v;
        }).length;
        if(!n && sel.indexOf(o.v) < 0) return '';
        return '<label><input type="checkbox" data-f="' + name + '" value="' + o.v + '"' +
               (sel.indexOf(o.v) >= 0 ? ' checked' : '') + '>' +
               (swatch ? '<span class="libfac__sw libsw--' + o.v + '"></span>' : '') +
               '<span>' + o.l + '</span><span class="libfac__n">' + n + '</span></label>';
      }).join('');
      return html ? '<div class="libfac__g"><p class="libfac__h">' + title + '</p>' + html + '</div>' : '';
    }

    function paint(){
      const r = results();
      if(quiet){
        /* Until the reader types, the list has nothing to say that the three
           featured articles beside it do not say better. */
        const asleep = !state.q;
        if(idle) idle.hidden = !asleep;
        rows.hidden = asleep;
        if(count) count.hidden = asleep;
        if(rest) rest.hidden = true;
        if(asleep){ rows.innerHTML = ''; return; }
      }
      if(chips){
        /* The sub-topics a category was published with, as the way into the
           list rather than a second copy of it. A topic with nothing under it
           yet is named and disabled, so the shelf shows what is coming. */
        /* Only where a category is fixed. Across all four the row would be
           twenty-seven chips, most of them empty, which indexes nothing - the
           sidebar facet covers that case. */
        const av = onlyc ? LIBTOPICS.filter(function(x){ return x.c === onlyc; }) : [];
        chips.innerHTML = av.length ? av.map(function(x){
          const n = pool.filter(function(i){ return match(i, 'topic') && i.tp === x.k; }).length;
          const on = state.tops.indexOf(x.k) >= 0;
          return '<button type="button" class="libchipf' + (on ? ' is-on' : '') +
                 (n ? '' : ' is-empty') + '" data-topic="' + x.k + '"' + (n ? '' : ' disabled') +
                 '>' + x.l + '<span>' + (n || 'soon') + '</span></button>';
        }).join('') : '';
      }
      if(facets){
        let h = '';
        if(src) h += group('Stream', 'stream',
          LIBSTREAM.map(function(x){ return { v:x.k, l:x.l }; }), state.sr);
        if(!only) h += group('Resource type', 'kind',
          LIBKINDS.map(function(x){ return { v:x.k, l:x.l }; }), state.kinds, true);
        if(!onlyc) h += group('Category', 'cat',
          LIBCATS.map(function(x){ return { v:x.k, l:x.l }; }), state.cats);
        h += group('Sub-topic', 'topic', LIBTOPICS
          .filter(function(x){ return !onlyc || x.c === onlyc; })
          .map(function(x){ return { v:x.k, l:x.l }; }), state.tops);
        h += group('Availability', 'status',
          [{v:'ready',l:'Available now'},{v:'prep',l:'In preparation'}], state.status);
        h += group('Service', 'sv', LIBSV.map(function(x){ return { v:x.k, l:x.l }; }), state.sv);
        h += group('Subject', 'sb', LIBSB.map(function(x){ return { v:x.k, l:x.l }; }), state.sb);
        h += group('Therapy area', 'ta', LIBTA.map(function(x){ return { v:x.k, l:x.l }; }), state.ta);
        h += group('Industry', 'in', LIBIN.map(function(x){ return { v:x.k, l:x.l }; }), state['in']);
        const any = state.sr.length || state.kinds.length || state.cats.length || state.tops.length || state.status.length ||
                    state.sv.length || state.sb.length || state.ta.length || state['in'].length || state.q;
        if(any) h += '<button type="button" class="libfac__clear" data-lib-clear>Clear all filters</button>';
        facets.innerHTML = h;
      }
      if(count) count.innerHTML = '<b>' + r.length + '</b> ' +
        (r.length === 1 ? 'resource' : 'resources') + (only ? '' : (function(){
          const n = new Set(r.map(function(i){ return i.k; })).size;
          return n ? ' across ' + n + (n === 1 ? ' type' : ' types') : ''; })());

      const s = r.slice();
      /* undated items (a template has no publication date) sort last rather
         than pretending to be old */
      if(state.sort === 'new') s.sort(function(a,b){
        if(a.dt === b.dt) return a.t.localeCompare(b.t);
        if(!a.dt) return 1;
        if(!b.dt) return -1;
        return b.dt.localeCompare(a.dt); });
      if(state.sort === 'az') s.sort(function(a,b){ return a.t.localeCompare(b.t); });
      if(state.sort === 'za') s.sort(function(a,b){ return b.t.localeCompare(a.t); });
      if(state.sort === 'ready') s.sort(function(a,b){
        return (a.st === b.st) ? a.t.localeCompare(b.t) : (a.st === 'ready' ? -1 : 1); });
      if(state.sort === 'type') s.sort(function(a,b){
        return (a.k === b.k) ? a.t.localeCompare(b.t) : a.k.localeCompare(b.k); });

      const page = s.slice(0, (quiet && cap) ? cap : state.shown);
      rows.innerHTML = page.length ? page.map(function(i){
        const tag = i.u ? 'a' : 'div';
        /* an off-site resource opens in a new tab; the router only intercepts
           same-origin paths, but the rel is needed either way */
        const ext = i.u && /^https?:/.test(i.u);
        return '<' + tag + (i.u ? ' href="' + i.u + '"' : '') +
          (ext ? ' target="_blank" rel="noopener"' : '') +
          ' class="librow' + (i.u ? '' : ' librow--x') + '">' +
          '<span class="librow__m">' +
            '<span class="libchip libchip--' + i.k + '">' + KL[i.k] + '</span>' +
            '<span class="libcat">' + CL[i.c] + '</span>' +
            (i.s ? '<span class="libstd">' + esc(i.s) + '</span>' : '') +
            '<span class="libst libst--' + i.st + '">' +
              (i.st === 'ready' ? 'Available' : 'In preparation') + '</span>' +
          '</span>' +
          '<p class="librow__t">' + esc(i.t) + '</p>' +
          '<p class="librow__d">' + esc(i.d) + '</p>' +
          (function(){
            const bits = [];
            if(i.dt) bits.push('<span><b>Posted</b> ' + fmtDate(i.dt) + '</span>');
            if(i.mn) bits.push('<span><b>Reading time</b> ' + i.mn + ' min</span>');
            if(i.au) bits.push('<span><b>By</b> ' + esc(i.au) + '</span>');
            return bits.length ? '<span class="librow__by">' + bits.join('') + '</span>' : '';
          })() +
          (i.kw ? '<span class="librow__kw">' + i.kw.split('|').slice(0,6)
             .map(function(w){ return '<span>' + esc(w) + '</span>'; }).join('') + '</span>' : '') +
          (reg(i) ? '<span class="librow__r">' + reg(i) + '</span>' : '') +
        '</' + tag + '>';
      }).join('') : (function(){
        /* A sub-topic that is named but not yet written is a different answer
           from a filter combination that happens to match nothing. */
        if(state.tops.length === 1 && !state.q && !state.kinds.length &&
           !pool.some(function(i){ return i.tp === state.tops[0]; })){
          return '<p class="libnone">Nothing is published under <b>' + esc(TL[state.tops[0]]) +
                 '</b> yet. It is named here because it is on the list to write &mdash; ' +
                 '<a class="tlink" href="/contact-us/">say it would help</a> and it moves up the queue.</p>';
        }
        return '<p class="libnone">Nothing matches those filters. Clear one and try again &mdash; or <a class="tlink" href="/contact-us/">tell us what you were looking for</a>, which is how most of this was commissioned.</p>';
      })();

      if(rest){
        const over = s.length - page.length;
        rest.hidden = over <= 0;
        rest.innerHTML = over > 0
          ? over + ' more match' + (over === 1 ? '' : 'es') +
            ' &mdash; <a class="tlink" href="/academy/library/?q=' +
            encodeURIComponent(state.q) + '" data-lib-carry="' + esc(state.q) +
            '">open them in the library</a>'
          : '';
      }
      if(more){
        const left = s.length - page.length;
        more.hidden = left <= 0;
        more.textContent = 'Show ' + Math.min(PAGE, left) + ' more';
      }
    }

    root.__setQuery = function(v){
      state.q = v; state.shown = PAGE;
      if(search) search.value = v;
      paint();
    };

    root.__setTopic = function(v){
      state.tops = (state.tops.length === 1 && state.tops[0] === v) ? [] : [v];
      state.shown = PAGE; paint();
    };

    root.addEventListener('change', function(e){
      const b = e.target.closest('input[data-f]');
      if(b){
        const key = b.getAttribute('data-f');
        const arr = key === 'kind' ? state.kinds : key === 'cat' ? state.cats
                  : key === 'topic' ? state.tops : key === 'status' ? state.status
                  : key === 'stream' ? state.sr : state[key];
        const at = arr.indexOf(b.value);
        if(b.checked && at < 0) arr.push(b.value);
        if(!b.checked && at >= 0) arr.splice(at, 1);
        state.shown = PAGE; paint(); return;
      }
      if(e.target === sort){ state.sort = sort.value; paint(); }
    });
    root.addEventListener('click', function(e){
      if(e.target.closest('[data-lib-clear]')){
        state.kinds = []; state.cats = []; state.tops = []; state.status = []; state.sr = [];
        state.sv = []; state.sb = []; state.ta = []; state['in'] = []; state.q = '';
        if(search) search.value = ''; state.shown = PAGE; paint();
      }
      const chip = e.target.closest('[data-topic]');
      if(chip){
        const v = chip.getAttribute('data-topic');
        const at = state.tops.indexOf(v);
        if(at < 0) state.tops.push(v); else state.tops.splice(at, 1);
        state.shown = PAGE; paint(); return;
      }
      if(e.target.closest('[data-lib-more]')){ state.shown += PAGE; paint(); }
    });
    if(search) search.addEventListener('input', function(){
      state.q = search.value.trim(); state.shown = PAGE; paint();
      /* Two boxes on one page showing two different queries is a page arguing
         with itself, so the hero follows the list as well as leading it. */
      const view = root.closest('.view') || document;
      view.querySelectorAll('[data-lib-hero]').forEach(function(f){
        if(f.value !== search.value) f.value = search.value; });
    });

    paint();
  }


  /* ---- Explore: related items, picked from the register ----------------
     Same sub-topic first, then same category, available before in preparation.
     Done here rather than hand-listed on each article so a new piece joins
     its neighbours' "explore" strips the moment it is added. */
  function related(root){
    if(root.__wired) return;
    root.__wired = true;
    const here = root.getAttribute('data-lib-related') || '';
    const me = LIBITEMS.filter(function(i){ return i.u === here; })[0];
    if(!me){ root.closest('section').hidden = true; return; }
    const score = function(i){
      if(i.u === here) return -1;
      let n = 0;
      if(i.tp && i.tp === me.tp) n += 6;
      if(i.c === me.c) n += 3;
      if(i.sv && i.sv === me.sv) n += 2;
      if(i.st === 'ready') n += 2;
      if(i.k === 'article') n += 1;
      if(!i.u) n -= 4;
      return n;
    };
    const picks = LIBITEMS.filter(function(i){ return i.u && i.u !== here; })
      .map(function(i){ return { i:i, n:score(i) }; })
      .filter(function(x){ return x.n > 0; })
      .sort(function(a,b){
        if(b.n !== a.n) return b.n - a.n;
        return (b.i.dt || '').localeCompare(a.i.dt || ''); })
      .slice(0, 3).map(function(x){ return x.i; });
    if(!picks.length){ root.closest('section').hidden = true; return; }
    root.innerHTML = picks.map(function(i){
      const meta = [];
      if(i.dt) meta.push(fmtDate(i.dt));
      if(i.mn) meta.push(i.mn + ' min read');
      return '<a class="librel__c" href="' + i.u + '">' +
        '<span class="libchip libchip--' + i.k + '">' + KL[i.k] + '</span>' +
        '<p class="librel__t">' + esc(i.t) + '</p>' +
        '<p class="librel__d">' + esc(i.d) + '</p>' +
        (meta.length ? '<p class="librel__m">' + meta.join(' &middot; ') + '</p>' : '') +
        '</a>'; }).join('');
  }

  function scan(){
    document.querySelectorAll('.view:not([hidden]) [data-lib]').forEach(wire);
    document.querySelectorAll('.view:not([hidden]) [data-lib-related]').forEach(related);
  }
  /* A search box in a page hero drives the list further down the same page,
     so the reader types where they already are and the answer appears once
     rather than after a jump and a second box. */
  document.addEventListener('input', function(e){
    const f = e.target.closest('[data-lib-hero]');
    if(!f) return;
    const view = f.closest('.view') || document;
    const lib = view.querySelector('.lib:not(.lib--q)') || view.querySelector('.lib');
    if(lib && lib.__setQuery) lib.__setQuery(f.value.trim());
  });
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Enter') return;
    const f = e.target.closest('[data-lib-hero]');
    if(!f) return;
    e.preventDefault();
    const view = f.closest('.view') || document;
    const lib = view.querySelector('.lib:not(.lib--q)') || view.querySelector('.lib');
    if(lib) lib.scrollIntoView({ behavior:'smooth', block:'start' });
  });

  /* A sub-topic named in a page hero filters the list it scrolls to, rather
     than only landing the reader beside it. */
  document.addEventListener('click', function(e){
    const a = e.target.closest('[data-lib-topic]');
    if(!a) return;
    const view = a.closest('.view') || document;
    const lib = view.querySelector('.lib');
    if(!lib || !lib.__setTopic) return;
    lib.__setTopic(a.getAttribute('data-lib-topic'));
  });

  /* Carry a home-page search into the full library rather than dropping the
     reader at an empty box. The query rides the link for a real page load and
     this variable for a routed one. */
  let carried = '';
  /* Capture phase: the router intercepts this same click on the bubble phase
     and has already rendered the library by the time a bubble listener here
     would run, so the query has to be stashed on the way down. */
  document.addEventListener('click', function(e){
    const a = e.target.closest('[data-lib-carry]');
    if(a) carried = a.getAttribute('data-lib-carry');
  }, true);
  function applyCarried(){
    let q = carried;
    if(!q){
      const m = location.search.match(/[?&]q=([^&]*)/);
      if(m) { try { q = decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch(_){ q = m[1]; } }
    }
    if(!q) return;
    carried = '';
    const view = document.querySelector('.view:not([hidden])') || document;
    const lib = view.querySelector('.lib:not(.lib--q)');
    if(lib && lib.__setQuery){
      lib.__setQuery(q);
      const hero = view.querySelector('[data-lib-hero]');
      if(hero) hero.value = q;
    }
  }

  window.__libScan = function(){ scan(); applyCarried(); };
  scan();
  applyCarried();
})();
(function(){
  function wire(box){
    if(box.__wired) return;
    box.__wired = true;
    const scopes = box.getAttribute('data-regfilt').split(',')
      .map(function(s){ return document.querySelector(s.trim()); })
      .filter(Boolean);
    if(!scopes.length) return;
    const input = box.querySelector('input');
    const nEl   = box.querySelector('.regfilt__n');
    const noun  = box.getAttribute('data-regfilt-noun') || 'entries';

    const units = [];
    scopes.forEach(function(sc){
      sc.querySelectorAll('.incl__i').forEach(function(g){
        const links = [].slice.call(g.querySelectorAll('span > a.tlink'));
        const head = (g.querySelector('b') || {}).textContent || '';
        if(links.length){
          links.forEach(function(a){
            units.push({ el:a, group:g, sec:sc,
              t:(a.textContent + ' ' + head).toLowerCase() });
          });
        } else {
          units.push({ el:g, group:null, sec:sc, t:g.textContent.toLowerCase() });
        }
      });
      sc.querySelectorAll('a.read').forEach(function(a){
        units.push({ el:a, group:null, sec:sc, t:a.textContent.toLowerCase() });
      });
    });
    if(!units.length) return;

    const nones = scopes.map(function(sc){
      let p = sc.querySelector('.regfilt__none');
      if(!p){
        p = document.createElement('p');
        p.className = 'regfilt__none is-regoff';
        (sc.querySelector('.wrap') || sc).appendChild(p);
      }
      return p;
    });

    function paint(){
      const q = input.value.trim().toLowerCase();
      let hit = 0;
      units.forEach(function(u){
        const on = !q || u.t.indexOf(q) >= 0;
        u.el.classList.toggle('is-regoff', !on);
        if(on) hit++;
      });
      /* a group, then a section, hides once everything inside it has */
      const groups = new Set();
      units.forEach(function(u){ if(u.group) groups.add(u.group); });
      groups.forEach(function(g){
        const any = [].slice.call(g.querySelectorAll('span > a.tlink'))
          .some(function(a){ return !a.classList.contains('is-regoff'); });
        g.classList.toggle('is-regoff', !any);
      });
      scopes.forEach(function(sc, i){
        const any = units.some(function(u){
          return u.sec === sc && !u.el.classList.contains('is-regoff'); });
        sc.querySelectorAll('.reads, .incl__g').forEach(function(w){
          w.classList.toggle('is-regoff', !any); });
        nones[i].classList.toggle('is-regoff', any);
        nones[i].innerHTML = any ? '' :
          'Nothing here matches &ldquo;' + input.value.replace(/[<>&]/g, '') +
          '&rdquo;. The register runs wider than the page &mdash; ' +
          '<a class="tlink" href="/contact-us/">ask and we will tell you who covers it</a>.';
      });
      if(nEl) nEl.innerHTML = q
        ? '<b>' + hit + '</b> of ' + units.length
        : '<b>' + units.length + '</b> ' + noun;
    }

    input.addEventListener('input', paint);
    paint();
  }

  function scan(){
    document.querySelectorAll('.view:not([hidden]) [data-regfilt]').forEach(wire);
  }
  window.__regScan = scan;
  scan();
})();