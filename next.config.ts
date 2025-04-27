/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    localeDetection: false,
  },

  images: {
    // מאפשר טעינה מאתרים חיצוניים כמו Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // אם אתה משתמש גם בלוגואים מגוגל
      },
    ],
  },

  async headers() {
    return [
      // Exclude videos from CSP and other default rules
      {
        source: '/videos/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      // Default rules for all other content
      {
        source: '/((?!videos/).*)',
        headers: [
          // אבטחה בסיסית
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none';" },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },

          // המלצה להסרת X-Frame-Options ו-X-XSS-Protection
          // { key: 'X-Frame-Options', value: 'DENY' },  ← מיותר כיום
          // { key: 'X-XSS-Protection', value: '1; mode=block' }, ← מיותר כיום

          // ביצועים / מטמון - Default for most content
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Specific rules for webmanifest files
      {
        source: '/site.webmanifest',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'application/manifest+json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }
        ],
      },
      // Specific rules for images
      {
        source: '/images/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'image/svg+xml; charset=utf-8', has: { type: ['header'], key: 'content-type', value: 'image/svg+xml' } },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
    ];
  },

  experimental: {
    turbo: {
      resolveAlias: {
        // כאן אפשר להוסיף alias אם תצטרך
      },
    },
  },
};

module.exports = nextConfig;