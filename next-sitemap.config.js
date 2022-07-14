/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kittisaurus.fisera.co",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
