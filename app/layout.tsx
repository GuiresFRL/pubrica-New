import type { Metadata, Viewport } from 'next';
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

const organization = {"@context":"https://schema.org","@type":"Organization","name":"Pubrica","url":"https://pubrica.com/","description":"Research, writing and publication support for science. A trading name of Guires, registered in England and Wales and in India.","areaServed":"Worldwide","knowsAbout":["Journal selection","Medical writing","Systematic review","Statistical analysis","Scientific editing","Peer review","Regulatory writing","Evidence-based writing"]};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
