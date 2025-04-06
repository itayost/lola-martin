/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    localeDetection: false,
  },
  // Turbopack configuration
  experimental: {
    turbo: {
      // Any Turbopack-specific rules can go here
      resolveAlias: {
        // If you need to alias any modules
      },
    },
  },
};

module.exports = nextConfig;