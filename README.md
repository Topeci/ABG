# Indénié Brunch — Site

Site vitrine + billetterie Next.js pour l'Indénié Brunch (Abengourou, Côte d'Ivoire).

## Développement local

```bash
npm install
npm run dev
```

## Variables d'environnement

À ajouter dans Vercel (Project Settings → Environment Variables), JAMAIS dans le code ni dans Git :

- `SUPABASE_URL` — URL du projet Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — clé service_role Supabase (secrète, ne jamais exposer)
- `RESEND_API_KEY` — clé API Resend
- `EMAIL_FROM` — adresse d'envoi (optionnel, par défaut onboarding@resend.dev en attendant un domaine vérifié)
- `PARTNER_NOTIFY_EMAIL` — adresse qui reçoit les demandes du formulaire "Partenaire" (optionnel, sinon `EMAIL_FROM` est utilisé)

## ⚠️ Mise à jour Supabase requise

Ce lot de modifications ajoute la gestion des Salons VIP (billet scannable
plusieurs fois) et le formulaire Partenaire. **Avant de déployer**, exécute
le script `supabase/migration.sql` dans Supabase (SQL Editor) pour mettre à
jour le schéma.

## Billetterie

- `/` section Billetterie : formulaire de réservation (app/components/TicketBooking.js)
- `lib/pricing.js` : grille tarifaire qui fait foi — paliers Standard par date (prévente/dernière chance/tarif porte) + les 3 Salons VIP. C'est le seul endroit à modifier pour changer un prix ou une date de palier.
- `/api/orders` : crée une commande en attente (le prix est recalculé côté serveur depuis `lib/pricing.js`, jamais pris du navigateur)
- `/api/orders/confirm` : ⚠️ TEMPORAIRE, simule un paiement réussi — à remplacer par le vrai webhook CinetPay
- `/api/tickets/checkin` : valide un billet scanné (utilisé par /scan). Un billet Standard = 1 scan max ; un billet Salon = jusqu'à 6 scans (compteur `checkin_count` / `max_checkins`)
- `/scan` : page de scan des billets le jour J (mot de passe dans app/scan/page.js, à changer avant l'événement)

## Partenaire

- `/` section Partenaire : logos des partenaires actuels (`PARTNERS` dans app/page.js — à compléter avec les vrais fichiers logo dès qu'ils sont fournis, un seul badge texte "Hennessy Prestige" en attendant) + formulaire de contact
- `/api/partners` : enregistre la demande dans la table Supabase `partner_requests` ET envoie un email de notification à `PARTNER_NOTIFY_EMAIL`

## Déploiement

Ce projet est prêt pour Vercel : connecter le dépôt GitHub, Vercel détecte
automatiquement Next.js.

## À faire

- Fournir les vrais logos partenaires (voir section Partenaire ci-dessus)
- Brancher CinetPay (remplace /api/orders/confirm par un vrai webhook)
- Vérifier un domaine dans Resend pour envoyer à n'importe quelle adresse
- Changer le mot de passe de /scan avant l'événement
- Écrire les vrais articles dans la section Actus
