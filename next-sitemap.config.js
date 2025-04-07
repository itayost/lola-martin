/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.lolamartin.co.il',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { 
        userAgent: '*', 
        allow: '/',
        disallow: ['/private', '/admin']
      }
    ],
    additionalSitemaps: [
      'https://www.lolamartin.co.il/sitemap.xml'
    ]
  },
  exclude: [
    '/private/*',
    '/admin/*'
  ],
  trailingSlash: true,
  transform: async (config, path) => {
    // Modify pages priority and changefreq if needed
    const customPriorities = {
      '/': 1.0,
      '/about': 0.8,
      '/menu': 0.7,
      '/contact': 0.6
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: customPriorities[path] || 0.5,
      lastmod: new Date().toISOString()
    };
  }
};