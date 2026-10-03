// Éditions passées, affichées dans la section Galerie de la page d'accueil
// et sur leurs pages dédiées (/editions/1 ... /editions/4).
//
// Photos réelles de l'événement (dossier public/images/gallery/).

export const EDITIONS = [
  {
    slug: "1",
    title: "Édition 1",
    cover: "/images/gallery/evt-02-photobooth-hennessy-3h.jpg",
    photos: [
      "/images/gallery/evt-02-photobooth-hennessy-3h.jpg",
      "/images/gallery/evt-10-photobooth-shots.jpg",
      "/images/gallery/evt-11-robe-blanche-hennessy.jpg",
    ],
  },
  {
    slug: "2",
    title: "Édition 2",
    cover: "/images/gallery/evt-07-trio-champagne.jpg",
    photos: [
      "/images/gallery/evt-07-trio-champagne.jpg",
      "/images/gallery/evt-08-groupe-5-femmes.jpg",
      "/images/gallery/evt-03-selfie-amies.jpg",
    ],
  },
  {
    slug: "3",
    title: "Édition 3",
    cover: "/images/gallery/evt-09-trio-hommes.jpg",
    photos: [
      "/images/gallery/evt-09-trio-hommes.jpg",
      "/images/gallery/evt-04-groupe-amis-blanc.jpg",
      "/images/gallery/evt-06-duo-cheveux-rouges.jpg",
    ],
  },
  {
    slug: "4",
    title: "Édition 4",
    cover: "/images/gallery/evt-16-grande-tablee.jpg",
    photos: [
      "/images/gallery/evt-16-grande-tablee.jpg",
      "/images/gallery/evt-05-groupe-nuit.jpg",
      "/images/gallery/evt-15-duo-assises.jpg",
      "/images/gallery/evt-13-portrait-crop-blanc.jpg",
    ],
  },
];

export function getEdition(slug) {
  return EDITIONS.find((e) => e.slug === slug) || null;
}
