import { getCurrentStandardTier, SALONS, STANDARD_INCLUDES } from "./pricing";

const currentStandard = getCurrentStandardTier();

export const OFFERS = [
  {
    id: "standard",
    label: "STANDARD",
    amount: currentStandard.amount,
    badge: currentStandard.shortLabel,
    features: [STANDARD_INCLUDES, "Accès général", "Place en zone commune"],
    featured: false,
    image: "/images/standard-ticket.jpg",
  },
  ...SALONS.map((s) => ({
    id: s.id,
    label: s.name.toUpperCase(),
    amount: s.amount,
    badge: "6 entrées",
    features: [s.includes, "1 billet, scannable 6 fois"],
    featured: s.id === "salon-3",
    image: s.image,
  })),
];

export const MAX_QTY_PER_OFFER = 10;

export function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}
