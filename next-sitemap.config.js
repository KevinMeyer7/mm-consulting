/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mm-consulting.ai", // ← full canonical origin
  generateRobotsTxt: true, // write /robots.txt for you
  generateIndexSitemap: true, // 1 × index + 1 × sitemap-0.xml
  exclude: ["/admin/**", "/drafts/**"], // paths you never want indexed
  changefreq: "weekly",
  priority: 0.7,
};
