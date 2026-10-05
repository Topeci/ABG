// Grille tarifaire — Billet Standard (paliers par date) + Salons VIP.
// Toutes les dates sont interprétées en UTC (la Côte d'Ivoire est en UTC+0,
// donc pas de décalage à gérer).

export const STANDARD_TIERS = [
  {
    id: "standard-prevente",
    label: "Standard — Prévente",
    shortLabel: "Prévente",
    amount: 2000,
    from: null,
    until: "2026-12-13T23:59:59Z",
  },
  {
    id: "standard-derniere-chance",
    label: "Standard — Dernière chance",
    shortLabel: "Dernière chance",
    amount: 2500,
    from: "2026-12-14T00:00:00Z",
    until: "2026-12-18T23:59:59Z",
  },
  {
    id: "standard-porte",
    label: "Standard — Tarif porte",
    shortLabel: "Tarif porte",
    amount: 3000,
    from: "2026-12-19T00:00:00Z",
    until: null,
  },
];

// Le billet Standard donne droit à des shooters de bienvenue à volonté,
// à l'entrée uniquement (pas d'open bar).
export const STANDARD_INCLUDES = "Shooters de bienvenue à volonté, à l'entrée";

export function getCurrentStandardTier(now = new Date()) {
  for (const tier of STANDARD_TIERS) {
    const afterFrom = !tier.from || now >= new Date(tier.from);
    const beforeUntil = !tier.until || now <= new Date(tier.until);
    if (afterFrom && beforeUntil) return tier;
  }
  // Sécurité : si on est hors de toutes les fenêtres définies, on applique
  // le tarif porte (le plus élevé) plutôt que de bloquer la vente.
  return STANDARD_TIERS[STANDARD_TIERS.length - 1];
}

// Chaque Salon VIP = 1 billet nominatif, scannable jusqu'à 6 fois
// (6 entrées/consommations incluses sur un seul QR code).
export const SALONS = [
  {
    id: "salon-1",
    name: "Salon 1 — Pass Niablé",
    amount: 100000,
    includes: "Vin aromatisé + 6 Veuve du Versant + shooters de bienvenue",
    image: "/images/salon-1.jpg",
    maxCheckins: 6,
  },
  {
    id: "salon-2",
    name: "Salon 2 — Zaranou",
    amount: 100000,
    includes: "1 Hennessy + 3 Veuve du Versant + Softs + shooters de bienvenue",
    image: "/images/salon-2.jpg",
    maxCheckins: 6,
  },
  {
    id: "salon-3",
    name: "Salon 3 — San Kadiokro",
    amount: 160000,
    includes: "2 Moët & Chandon + 1 Hennessy + Softs + shooters de bienvenue",
    image: "/images/salon-3.jpg",
    maxCheckins: 6,
  },
];

// Résout un identifiant de formule (envoyé par le client) en tarif
// "faisant foi" côté serveur — jamais le montant envoyé par le client.
export function resolveTier(id, now = new Date()) {
  const currentStandard = getCurrentStandardTier(now);
  if (id === "standard") {
    return {
      id: currentStandard.id,
      label: currentStandard.label,
      amount: currentStandard.amount,
      maxCheckins: 1,
      kind: "standard",
    };
  }
  const salon = SALONS.find((s) => s.id === id);
  if (salon) {
    return {
      id: salon.id,
      label: salon.name,
      amount: salon.amount,
      maxCheckins: salon.maxCheckins,
      kind: "salon",
    };
  }
  return null;
}
