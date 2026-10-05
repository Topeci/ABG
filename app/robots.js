export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/scan", "/panier"] }],
    sitemap: "https://www.indeniebrunch.com/sitemap.xml",
  };
}
