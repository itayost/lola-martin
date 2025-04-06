// src/pages/robots.txt.js
export default function Robots() {
  return `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://www.lolamartin.co.il/sitemap.xml

# OG Image API Routes
Allow: /api/og/*`;
}

export const config = {
  contentType: 'text/plain',
};