/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    localeDetection: false,
  },

  images: {
    // Use remotePatterns instead of domains (deprecated)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lola-martin.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      // Next.js static assets - אלה נשארים עם cache ארוך
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      
      // Next.js image optimization - cache מתון יותר
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' }, // 24 שעות
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      
      // Videos - נשארים עם cache ארוך כי הם כבדים
      {
        source: '/videos/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },

      // ====== תמונות מחולקות לפי סוג ======
      
      // לוגואים ואייקונים - cache ארוך (לא משתנים בד"כ)
      {
        source: '/images/logos/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=2592000, immutable' }, // 30 ימים
        ],
      },
      
      // אייקונים - cache ארוך
      {
        source: '/images/icons/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'image/svg+xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=2592000, immutable' }, // 30 ימים
        ],
      },
      
      // תמונות גלריה - cache בינוני
      {
        source: '/images/gallery/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }, // 7 ימים
        ],
      },
      
      // תמונות תפריט - cache בינוני (יכולות להשתנות)
      {
        source: '/images/menu/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' }, // 24 שעות
        ],
      },
      
      // תמונות Hero ו-Highlights - cache קצר (משתנות לעיתים קרובות)
      {
        source: '/images/hero/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=1800' }, // שעה אחת
        ],
      },
      
      {
        source: '/images/highlights/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=1800' }, // שעה אחת
        ],
      },
      
      // תמונות About ו-Contact - cache קצר (משתנות לעיתים קרובות)
      {
        source: '/images/about/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=1800' }, // שעה אחת
        ],
      },
      
      {
        source: '/images/contact/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=1800' }, // שעה אחת
        ],
      },
      
      // כל שאר התמונות - cache מתון (ברירת מחדל)
      {
        source: '/images/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' }, // 24 שעות
        ],
      },
      
      // Default rules for all other content
      {
        source: '/((?!videos/|images/|_next/).*)',
        headers: [
          // אבטחה בסיסית
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },

          // Cache מתון לתוכן כללי
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=1800', // שעה אחת
          },
        ],
      },
      
      // Webmanifest
      {
        source: '/site.webmanifest',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'application/manifest+json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' },
        ],
      },
      
      // Google Maps API requests
      {
        source: '/api/maps/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
      
      // External Google Maps API requests
      {
        source: '/:path(.*)googleapis.com/:params*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      
      {
        source: '/:path(.*)mapsresources-pa.googleapis.com/:params*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      
      {
        source: '/:path(.*)maps.gstatic.com/:params*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
    ];
  },

  turbopack: {
    resolveAlias: {
      // כאן אפשר להוסיף alias אם תצטרך
    },
  },
};

module.exports = nextConfig;