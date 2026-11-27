import { getCurrentStandardTier, SALONS, STANDARD_INCLUDES } from "./pricing";

const currentStandard = getCurrentStandardTier();

export const OFFERS = [
  {
    id: "standard",
    label: "STANDARD",
    amount: currentStandard.amount,
    features: [STANDARD_INCLUDES, "Accès général", "Place en zone commune"],
    featured: false,
    image: "/images/standard-ticket.jpg",
  },
  ...SALONS.map((s) => ({
    id: s.id,
    label: s.name.toUpperCase(),
    amount: s.amount,
    badge: "6 entrées",
    features: [s.includes, "1 billet pour 6 personnes"],
    featured: s.id === "salon-3",
    image: s.image,
  })),
];

export const MAX_QTY_PER_OFFER = 10;

// Billet Standard : vente sur la plateforme partenaire (plus de paiement sur le site).
export const STANDARD_TICKET_URL = "https://zekin.me/billetterie/brunch-de-lindenie";

// Salons VIP : demande envoyée par WhatsApp à l'équipe.
export const SALON_WHATSAPP_NUMBER = "33749045758"; // +33 7 49 04 57 58

export function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}
