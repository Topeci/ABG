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
    image: "/images/visit/palais-ceremonie.jpg",
  },
  {
    slug: "cathedrale-sainte-therese",
    page: true,
    name: "Basilique Sainte-Thérèse",
    category: "Patrimoine",
    teaser: "Une grande tour de briques et une nef lumineuse au cœur d'Abengourou.",
    image: "/images/visit/basilique-tour.jpg",
  },
  {
    slug: "musee-binger-zaranou",
    page: true,
    name: "Musée de Zaranou",
    category: "Histoire",
    teaser: "Parures, poids à peser l'or et objets d'histoire, à Zaranou.",
    image: "/images/visit/musee-zaranou.jpg",
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
    slug: "rochers-abengourou",
    page: true,
    name: "Les Rochers d'Abengourou",
    category: "Nature",
    teaser: "Des géants de pierre, témoins silencieux du temps : un trésor naturel à découvrir.",
    image: "/images/visit/rochers-abengourou.jpg",
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
export const LODGINGS = [
  {
    name: "Villa Belle Étape",
    type: "Résidence meublée · piscine",
    price: "Piscine : 2 000 FCFA / 2h30",
    image: "/images/visit/vbe-1-drone.jpg",
    href: "/visit-abengourou/villa-belle-etape",
  },
];
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

export const BASILIQUE = {
  slug: "cathedrale-sainte-therese",
  title: "La basilique Sainte-Thérèse",
  tagline: "Une tour de briques qui veille sur Abengourou.",
  hero: "/images/visit/basilique-hero.jpg",
  facts: [
    { k: "Lieu", v: "Abengourou" },
    { k: "Dédiée à", v: "Sainte Thérèse" },
    { k: "Statut", v: "Cathédrale du diocèse" },
    { k: "À voir", v: "La tour en briques" },
  ],
  sections: [
    {
      title: "Le siège du diocèse d'Abengourou",
      text: [
        "Que l'on dise la basilique ou la cathédrale, c'est le même lieu : la cathédrale Sainte-Thérèse-de-l'Enfant-Jésus, siège du diocèse d'Abengourou. Elle est dédiée à sainte Thérèse et célèbre selon le rite romain.",
        "C'est l'un des repères majeurs de la ville et un lieu de rassemblement pour les fidèles de toute la région.",
      ],
    },
    {
      title: "Une tour de briques qui se voit de loin",
      text: [
        "Le bâtiment se reconnaît tout de suite à sa haute tour carrée en briques ocre, couronnée de créneaux, avec sa grande arche d'entrée, sa rosace et ses ouvertures à claires-voies. On y accède par un grand escalier de pierre claire.",
        "À l'intérieur, la nef est simple et lumineuse : de hautes colonnes blanches, des arcs, un plafond en bois et des bancs alignés jusqu'au chœur, où se dresse le grand crucifix.",
      ],
    },
    {
      title: "Un lieu de mémoire",
      text: [
        "Mgr Bruno Kouamé repose dans la cathédrale. Un grand portrait en son hommage orne la façade et rappelle l'histoire de l'Église à Abengourou.",
      ],
    },
    {
      title: "Visiter la basilique",
      text: [
        "La basilique est avant tout un lieu de culte : visite avec respect, tenue correcte, et silence pendant les offices. Renseigne-toi sur place pour les horaires des messes et des visites.",
      ],
    },
  ],
  gallery: [
    { src: "/images/visit/basilique-tour.jpg", alt: "La tour de la basilique sous un grand ciel bleu" },
    { src: "/images/visit/basilique-escalier.jpg", alt: "Le grand escalier et la tour en briques" },
    { src: "/images/visit/basilique-nef.jpg", alt: "La nef de la basilique, ses colonnes blanches et son plafond en bois" },
    { src: "/images/visit/basilique-vue-aerienne.jpg", alt: "Vue aérienne de la basilique et de la ville" },
  ],
  archiveNote: "Vue aérienne : Donald Koumassou.",
};

export const MUSEE = {
  slug: "musee-binger-zaranou",
  title: "Le Musée de Zaranou",
  tagline: "Parures, poids à peser l'or et objets d'histoire, dans la région de l'Indénié-Djuablin.",
  hero: "/images/visit/musee-zaranou.jpg",
  facts: [
    { k: "Lieu", v: "Zaranou" },
    { k: "Région", v: "Indénié-Djuablin" },
    { k: "Bâtiment de", v: "1901" },
    { k: "À voir", v: "Parures et poids d'or" },
  ],
  sections: [
    {
      title: "Un musée dans la mémoire de Binger",
      text: [
        "Le Musée Binger de Zaranou est installé à Zaranou, une sous-préfecture de la région de l'Indénié-Djuablin, dans la zone d'Abengourou. Son bâtiment date de 1901 et rappelle le souvenir de Louis-Gustave Binger, premier gouverneur de la Côte d'Ivoire française (1893-1895).",
      ],
    },
    {
      title: "Ce qu'on y découvre",
      text: [
        "C'est un musée ethnologique et archéologique : il conserve des parures, des poids à peser l'or et des objets historiques qui racontent le patrimoine de la région et des peuples agni.",
        "Les poids à peser l'or, en particulier, sont de petits objets de laiton : un témoignage précieux de l'histoire des échanges et des savoir-faire akan.",
      ],
    },
    {
      title: "Un lieu accueillant",
      text: [
        "Le musée se présente avec un grand bâtiment à toit de tuiles, ses murs ornés de fresques colorées et de symboles traditionnels, et un jardin fleuri à l'entrée.",
      ],
    },
    {
      title: "Préparer ta visite",
      text: [
        "Avant de partir, renseigne-toi sur place pour les horaires et les conditions de visite. Les routes peuvent être difficiles en saison des pluies : prévois ton trajet en conséquence.",
      ],
    },
  ],
  gallery: [],
  archiveNote: "",
};

export const VILLA = {
  slug: "villa-belle-etape",
  title: "Villa Belle Étape",
  tagline: "Résidence meublée à Abengourou : chambres confortables, piscine, jacuzzi et service traiteur. Vous êtes chez vous.",
  hero: "/images/visit/vbe-1-drone.jpg",
  phone: "0716393954",
  slider: true,
  facts: [
    { k: "Type", v: "Résidence meublée" },
    { k: "Détente", v: "Piscine, jacuzzi, billard" },
    { k: "Restauration", v: "Service traiteur" },
    { k: "Piscine", v: "2 000 FCFA · 2h30" },
  ],
  sections: [
    {
      title: "Comme à la maison",
      text: [
        "La Villa Belle Étape est une résidence meublée d'Abengourou. Derrière son portail coloré se cache une adresse pensée pour la détente, le confort et le bien-être : « Vous êtes chez vous ».",
        "Pour l'Indénié Brunch, c'est un point de chute idéal pour dormir sur place, se reposer et profiter de la ville entre deux moments de fête.",
      ],
    },
    {
      title: "Les chambres",
      text: [
        "Des chambres meublées et climatisées, avec literie soignée, peignoirs et chaussons de bienvenue. Une salle de bain avec jacuzzi à deux places, ornée d'une grande fresque végétale, complète l'ambiance.",
      ],
    },
    {
      title: "Piscine, billard et soirées colorées",
      text: [
        "La cour s'organise autour d'une piscine éclairée, avec son fauteuil suspendu, ses ballons de basket et ses guirlandes lumineuses. Un espace couvert accueille une table de billard et des tables hautes pour prolonger la soirée.",
        "Tu n'es pas client de la résidence ? Le ticket piscine est à 2 000 FCFA pour 2h30 (nom et prénom, heure de début et de fin notés à l'accueil).",
      ],
    },
    {
      title: "Service traiteur & menu",
      text: [
        "Le service traiteur propose des plats principaux de 2 000 à 6 000 F (spaghetti, poulet braisé, frit ou soupe, lapin à la crème, poisson braisé ou frit, soupe de poisson, ragoût de pomme à la viande, petit pois à la viande, chawarma) et des garnitures de 500 à 1 000 F (alloco, frites, attiéké, riz, igname).",
        "Service en chambre ou sur place, commande à la réception. Le menu complet est dans la galerie ci-dessous.",
      ],
    },
    {
      title: "Réserver ou commander",
      text: ["Pour réserver une chambre, la piscine ou commander au traiteur, appelle directement la Villa Belle Étape au 07 16 39 39 54."],
    },
  ],
  gallery: [
    { src: "/images/visit/vbe-1-drone.jpg", alt: "Vue aérienne de la cour et de la piscine" },
    { src: "/images/visit/vbe-2-jacuzzi.jpg", alt: "Salle de bain avec jacuzzi" },
    { src: "/images/visit/vbe-3-piscine.jpg", alt: "La piscine de nuit" },
    { src: "/images/visit/vbe-4-chaussons.jpg", alt: "Chaussons de bienvenue Villa Belle Étape" },
    { src: "/images/visit/vbe-5-billard.jpg", alt: "Espace billard et piscine" },
    { src: "/images/visit/vbe-6-chambre.jpg", alt: "Chambre" },
    { src: "/images/visit/vbe-7-portail.jpg", alt: "Entrée de la résidence" },
    { src: "/images/visit/vbe-8-ticket.jpg", alt: "Ticket piscine" },
    { src: "/images/visit/vbe-9-menu.jpg", alt: "Menu du service traiteur" },
  ],
  archiveNote: "",
};

export const ROCHERS = {
  slug: "rochers-abengourou",
  title: "Les Rochers d'Abengourou",
  tagline: "Un trésor naturel à découvrir : des géants de pierre, témoins silencieux du temps qui passe.",
  hero: "/images/visit/rochers-abengourou.jpg",
  facts: [
    { k: "Lieu", v: "Abengourou" },
    { k: "Région", v: "Est de la Côte d'Ivoire" },
    { k: "Type", v: "Site naturel" },
    { k: "Idéal pour", v: "Randonnée & nature" },
  ],
  sections: [
    {
      title: "Un trésor naturel à découvrir",
      text: [
        "Imposants, mystérieux et majestueux, ces géants de pierre sont les témoins silencieux du temps qui passe. Un site paisible, authentique et vibrant d'énergie positive.",
      ],
    },
    {
      title: "Pour qui ?",
      text: [
        "Parfait pour les amoureux de randonnée, les passionnés de nature et tous ceux en quête de lieux atypiques à explorer pendant les vacances. Une escapade incontournable dans l'Est de la Côte d'Ivoire !",
      ],
    },
  ],
  gallery: [],
  archiveNote: "",
};
