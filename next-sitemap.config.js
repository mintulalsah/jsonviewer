/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://onlinejsonviewer.com',
  generateRobotsTxt: true, // (optional)
  transform: async (config, path) => {
    let priority = config.priority; // Default priority from configuration

    // Set custom priorities for specific pages
    if (path === '/json-formatter-online') {
      priority = 0.1;
    } else if (path === '/contact') {
      priority = 0.5;
    } else if (path === '/products') {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
