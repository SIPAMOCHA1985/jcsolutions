/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jcsolutionsenterprise.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
