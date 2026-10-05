const BASE = "https://www.indeniebrunch.com";
const PAGES = ["", "/evenement", "/edition-5", "/billetterie", "/programme", "/editions", "/galerie", "/actus", "/partenaire", "/contact"];

export default function sitemap() {
  return PAGES.map((p) => ({
    url: BASE + p,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
