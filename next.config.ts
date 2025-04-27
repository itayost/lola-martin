/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    localeDetection: false,
  },

  images: {
    domains: ['localhost', 'lola-martin.vercel.app'],
    formats: ['image/avif', 'image/webp'],
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      // Next.js static assets
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Next.js image optimization
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
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
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },

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
      // Specific rules for SVG images
      {
        source: '/images/icons/:path*.svg',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'image/svg+xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      // Rules for JPEG images
      {
        source: '/images/:path*.jpg',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Type', value: 'image/jpeg; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      // Rules for other images
      {
        source: '/images/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      // Google Maps API requests
      {
        source: '/api/maps/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' }
        ]
      },
      // External Google Maps API requests - proper cache control
      {
        source: '/:path(.*)googleapis.com/:params*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }
        ]
      }
    ];
  },

  turbopack: {
    resolveAlias: {
      // כאן אפשר להוסיף alias אם תצטרך
    },
  },
};

module.exports = nextConfig;