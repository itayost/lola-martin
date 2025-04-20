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
      {
        source: '/(.*)',
        headers: [
          // אבטחה בסיסית
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none';" },

          // המלצה להסרת X-Frame-Options ו-X-XSS-Protection
          // { key: 'X-Frame-Options', value: 'DENY' },  ← מיותר כיום
          // { key: 'X-XSS-Protection', value: '1; mode=block' }, ← מיותר כיום

          // ביצועים / מטמון
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
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