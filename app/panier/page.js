import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import CartPanel from "../components/CartPanel";

export const metadata = {
  title: "Mon panier — Indénié Brunch",
  description: "Récapitulatif de ta commande de billets pour l'Indénié Brunch.",
};

export default function PanierPage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading">
          <span className="eyebrow-label">MON PANIER</span>
          <h2>Récapitule ta commande</h2>
        </div>

        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <CartPanel showEmptyState />
        </div>

        <div className="payment-note">
          <span>
            Paiement sécurisé disponible via <strong>Wave</strong>, Orange Money et carte
            bancaire
          </span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
