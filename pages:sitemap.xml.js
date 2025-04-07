// src/pages/sitemap.xml.js
import { getServerSideSitemapLegacy } from 'next-sitemap';

export default function Sitemap() {
  // This is just a placeholder. In a real app, you might fetch pages dynamically
  const pages = [
    {
      loc: 'https://lola-martin.vercel.app/',
      lastmod: new Date().toISOString(),
      priority: 1.0,
      changefreq: 'daily'
    },
    {
      loc: 'https://lola-martin.vercel.app/about',
      lastmod: new Date().toISOString(),
      priority: 0.8,
      changefreq: 'weekly'
    },
    {
      loc: 'https://lola-martin.vercel.app//menu',
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: 'weekly'
    },
    {
      loc: 'https://lola-martin.vercel.app//contact',
      lastmod: new Date().toISOString(),
      priority: 0.6,
      changefreq: 'weekly'
    }
  ];

  return getServerSideSitemapLegacy(pages);
}

export const config = {
  api: {
    responseLimit: false,
  },
};