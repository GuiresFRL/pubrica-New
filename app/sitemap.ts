import type { MetadataRoute } from 'next';
import { routes, SITE_URL } from '@/lib/routes';

export const dynamic = 'force-static';

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
