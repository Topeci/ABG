// Contenu de la rubrique « Visit Abengourou ».
// Pour ajouter un lieu : une entrée dans PLACES (page: true quand sa fiche existe).
// Pour ajouter un hôtel / restaurant : une entrée dans LODGINGS / RESTAURANTS.

export const PLACES = [
  {
    slug: "palais-royal",
    page: true,
    name: "Palais royal",
    category: "Culture",
    teaser: "Le cœur du royaume de l'Indénié, entre tradition et mémoire des rois.",
    image: "/images/visit/palais-royal.jpg",
  },
  {
    slug: "cathedrale-sainte-therese",
    page: false,
    name: "Cathédrale Sainte-Thérèse",
    category: "Patrimoine",
    teaser: "Un bijou architectural de la région.",
    image: null,
  },
  {
    slug: "musee-binger-zaranou",
    page: false,
    name: "Musée Binger de Zaranou",
    category: "Histoire",
    teaser: "Parures, poids à peser l'or et objets d'histoire.",
    image: null,
  },
  {
    slug: "hippopotames-aniassue",
    page: false,
    name: "Hippos d'Aniassué",
    category: "Nature",
    teaser: "Un bassin à hippopotames à observer dans la nature.",
    image: null,
  },
  {
    slug: "tam-tam-parleur",
    page: false,
    name: "Tam-tam parleur",
    category: "Tradition",
    teaser: "La danse royale Kinyankpli et le tam-tam qui parle.",
    image: null,
  },
  {
    slug: "fete-de-l-igname",
    page: false,
    name: "Fête de l'igname",
    category: "Tradition",
    teaser: "La grande célébration annuelle, chaque année en février.",
    image: null,
  },
];

export const CATEGORIES = ["Culture", "Patrimoine", "Histoire", "Nature", "Tradition"];

// { name, type, image, price: "25 000 FCFA", url }
export const LODGINGS = [];
export const RESTAURANTS = [];

// { title, url, image?, source: "TikTok" | "YouTube" }
export const VIDEOS = [
  {
    title: "Abengourou en vidéo",
    source: "TikTok",
    url: "https://vt.tiktok.com/ZSbXaCLjN/",
    image: "/images/visit/akwaba.jpg",
  },
];

export const PALAIS = {
  slug: "palais-royal",
  title: "Le Palais royal de l'Indénié",
  tagline: "Là où l'histoire des rois de l'Indénié se raconte encore.",
  hero: "/images/visit/palais-ceremonie.jpg",
  facts: [
    { k: "Lieu", v: "Abengourou" },
    { k: "Construit en", v: "1883" },
    { k: "Par le roi", v: "Amoikon Dihyé II" },
    { k: "À voir", v: "Le musée royal" },
  ],
  sections: [
    {
      title: "Le siège de la royauté Indénié",
      text: [
        "Le Palais royal de l'Indénié est un site culturel majeur d'Abengourou : c'est le palais du peuple Indénié, au cœur de l'héritage agni. Ce lieu historique porte les traditions et la mémoire de la monarchie ivoirienne.",
        "Son architecture est impressionnante : une rotonde coiffée d'un grand toit conique, des colonnes rouges, des balustrades blanches et des statues de bronze qui montent la garde dans la cour.",
      ],
    },
    {
      title: "Un palais construit en 1883",
      text: [
        "Le palais a été construit en 1883 par le roi Amoikon Dihyé II. Il abrite un musée qui renferme des objets d'art retraçant l'histoire des rois qui ont occupé le trône.",
        "Parures royales, objets de culte et symboles du pouvoir : on y lit la lignée royale et les pratiques culturelles du peuple Indénié.",
      ],
    },
    {
      title: "Quand la cour se met en fête",
      text: [
        "Lors des cérémonies, la cour royale se rassemble sous les grands parasols. Pagnes brodés, tenues blanches, perles et bijoux d'or : le palais devient une scène vivante où la tradition agni s'exprime dans toute sa splendeur.",
      ],
    },
  ],
  gallery: [
    { src: "/images/visit/palais-ceremonie.jpg", alt: "Cérémonie à la cour du palais royal" },
    { src: "/images/visit/palais-royal.jpg", alt: "La rotonde du palais royal d'Abengourou" },
    { src: "/images/visit/palais-porte.jpg", alt: "Le portail du palais, gardé par deux statues de bronze" },
    { src: "/images/visit/amoacon-roi-indenie.jpg", alt: "Photo d'archive : Amoacon, roi de l'Indénié, et sa cour" },
  ],
  archiveNote: "Photo d'archive : « Amoacon, roi de l'Indénié et sa cour ».",
};
