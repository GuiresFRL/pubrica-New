'use client';
import Script from 'next/script';

/* The behaviour layer: accordions, tabs, the library filters, the free
   tools, the application form. It is the same bundle the static build
   ships and it expects one view in the DOM, which is what each route
   renders. Loaded after hydration so it never blocks paint. */
export default function SiteRuntime() {
  return <Script src="/site.js" strategy="afterInteractive" />;
}
