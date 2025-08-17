/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // השתמש בדומיין הסופי שלך (בלי www)
  siteUrl: 'https://lolamartin.co.il',
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
      'https://lolamartin.co.il/sitemap.xml'
    ]
  },
  exclude: [
    '/private/*',
    '/admin/*'
  ],
  trailingSlash: false, // שונה מtrue ל-false
  transform: async (config, path) => {
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