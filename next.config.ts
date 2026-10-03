import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Every URL on the live site ends in a slash; keeping that avoids a
     redirect on each one and keeps the canonical tags honest. */
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'] },
  /* Pages whose content was folded into another page keep their address
     working: a 301 holds on to the inbound links and the search ranking
     they already have, which deleting the URL would throw away. */
  async redirects() {
    return [
      { source: '/scientific-editor-profile', destination: '/about-us/our-editors/', permanent: true },
      { source: '/editor-speak',              destination: '/about-us/our-editors/', permanent: true },
      { source: '/therapeutic-expertise',     destination: '/therapeutics/', permanent: true },
      { source: '/case-report-writing',       destination: '/services/physician-writing-services/case-report/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/site.js',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
