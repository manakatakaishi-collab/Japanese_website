import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://manaka-japanese.fr/sitemap.xml',
    host: 'https://manaka-japanese.fr',
  };
}
