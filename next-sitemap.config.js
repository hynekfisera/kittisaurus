/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kittisaurus.hynekfisera.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
