/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onlinejsonviewer.com/',
  generateRobotsTxt: true, // (optional)
  transform: async (config, path) => {
    // Array of page names to exclude from the sitemap
    const excludedPages = ['/format-json-online'];
    let priority = config.priority; // Default priority from configuration
    // Check if the path exists in the excludedPages array
    if (excludedPages.indexOf(path) !== -1) {
      return null; // Exclude the page from the sitemap
    }
    else if (path === '/about') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.2,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    else if (path === '/') {
      return {
        loc: path,
        changefreq: 'always',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
