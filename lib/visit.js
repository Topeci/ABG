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
    page: true,
    name: "Hippos d'Aniassué",
    category: "Nature",
    teaser: "Un parc naturel sur le fleuve Comoé, célèbre pour ses hippopotames.",
    image: "/images/visit/hippo-portrait.jpg",
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
    page: true,
    name: "Fête de l'igname",
    category: "Tradition",
    teaser: "La grande fête annuelle du royaume, entre remerciement aux ancêtres, tambours et danses.",
    image: "/images/visit/igname-danse.jpg",
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

export const HIPPOS = {
  slug: "hippopotames-aniassue",
  title: "Les hippopotames d'Aniassué",
  tagline: "Un parc naturel sur le fleuve Comoé, dans le département d'Abengourou.",
  hero: "/images/visit/hippo-groupe.jpg",
  facts: [
    { k: "Village", v: "Aniassué" },
    { k: "Département", v: "Abengourou" },
    { k: "Cours d'eau", v: "Fleuve Comoé" },
    { k: "À voir", v: "Les hippopotames" },
  ],
  sections: [
    {
      title: "Un parc naturel au bord du Comoé",
      text: [
        "Le village d'Aniassué abrite en son sein un parc naturel connu pour les hippopotames qu'il accueille. Le village est traversé par le fleuve Comoé.",
        "Situé à l'est de la Côte d'Ivoire, dans le département d'Abengourou, c'est l'un des sites naturels les plus emblématiques de la région de l'Indénié-Djuablin.",
      ],
    },
    {
      title: "Les hippopotames dans leur bief",
      text: [
        "Le site se présente comme un bief du fleuve où l'on peut observer les hippopotames dans l'eau. Ils passent leurs journées immergés : on voit souvent émerger seulement les yeux, les oreilles et les narines, puis des groupes entiers qui se pressent dans l'eau.",
        "Reste à bonne distance et suis les consignes sur place : l'hippopotame est un animal puissant qui se respecte.",
      ],
    },
    {
      title: "Aniassué, bien plus que ses hippos",
      text: [
        "Aniassué est une sous-préfecture du département d'Abengourou. Son centre compte environ 9 300 habitants (recensement de 2014).",
        "Le village abrite aussi l'École des Komians, un lieu culturel traditionnel : une belle occasion de mêler nature et culture lors de ta visite.",
        "Avant de partir, renseigne-toi sur place pour les horaires et les conditions de visite.",
      ],
      figure: {
        src: "/images/visit/pont-aniassue.jpg",
        alt: "Le pont d'Aniassué",
        caption: "Le pont d'Aniassué",
      },
    },
  ],
  gallery: [
    { src: "/images/visit/hippo-groupe.jpg", alt: "Un groupe d'hippopotames dans le fleuve" },
    { src: "/images/visit/hippo-portrait.jpg", alt: "Portrait d'un hippopotame" },
    { src: "/images/visit/hippo-eau.jpg", alt: "Deux hippopotames affleurant à la surface" },
    { src: "/images/visit/hippo-duo.jpg", alt: "Deux hippopotames dans l'eau" },
  ],
  archiveNote: "",
};

export const IGNAME = {
  slug: "fete-de-l-igname",
  title: "La Fête de l'igname",
  tagline: "Chaque année, le royaume de l'Indénié remercie les ancêtres au son du tambour parleur.",
  hero: "/images/visit/igname-cour.jpg",
  facts: [
    { k: "Rythme", v: "Chaque année" },
    { k: "Période", v: "Février – mars" },
    { k: "Lieu", v: "Palais royal" },
    { k: "Édition 2026", v: "La 281e" },
  ],
  sections: [
    {
      title: "Remercier les esprits et les ancêtres",
      text: [
        "La fête de l'igname est l'une des plus importantes manifestations du royaume des N'dénian, en pays agni Indénié. C'est l'occasion de remercier de façon solennelle les esprits et les ancêtres.",
        "Elle est le trait d'union entre les vivants et les morts : un moment de purification, de réjouissance pour les récoltes, d'accomplissement de promesses et d'échanges de cadeaux.",
      ],
    },
    {
      title: "Le jour J, de l'aube à la cour royale",
      text: [
        "Les préparatifs commencent par des cérémonies rituelles menées par les prêtresses, les komian. Le grand jour, au son du tambour parleur, le peuple se rassemble à la cour royale.",
        "Le roi est conduit au marigot pour sa purification, puis revêtu de ses plus beaux vêtements et de ses bijoux. L'après-midi, la cour est aspergée d'eau lustrale et l'on rend hommage aux ancêtres par la libation et les offrandes.",
      ],
    },
    {
      title: "Tambours, pagnes et danses",
      text: [
        "Pendant la fête, la cour vibre au rythme des tambours. On y danse le Kinianpli et l'Abodan, dans des pagnes aux couleurs éclatantes : la fête est aussi une vitrine du pagne traditionnel.",
        "Chefs, notables, jeunes et familles se retrouvent autour du roi, dans le respect des traditions transmises de génération en génération.",
      ],
    },
    {
      title: "La 281e édition, en 2026",
      text: [
        "La 281e fête de l'igname s'est tenue le vendredi 6 mars 2026 au palais royal d'Abengourou, autour du roi Nanan Boa Kouassi III, 17e roi du royaume de l'Indénié, en présence d'autres rois de la région.",
        "À l'occasion, le roi a appelé à préserver la paix, à renforcer la cohésion sociale et à adopter des comportements responsables sur les routes.",
      ],
    },
  ],
  gallery: [
    { src: "/images/visit/igname-cour.jpg", alt: "La cour royale rassemblée autour des tambours" },
    { src: "/images/visit/igname-danse.jpg", alt: "Danseuses et tambours à la fête de l'igname" },
    { src: "/images/visit/igname-tambour.jpg", alt: "Tambourinaires en pagnes colorés" },
    { src: "/images/visit/igname-geants.jpg", alt: "Grandes marionnettes dans la cour du palais" },
  ],
  archiveNote: "",
};
