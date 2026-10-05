import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import TicketBooking from "../components/TicketBooking";

export const metadata = {
  title: "Billetterie — Indénié Brunch",
  description: "Réserve ta place pour l'Indénié Brunch, édition du 19 décembre 2026.",
};

export default function BilletteriePage() {
  return (
    <main>
      <NavBar />

      <div className="billetterie-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/billetterie-banner-16h.jpg" alt="Indénié Brunch — Dress code tout blanc" />
      </div>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="section-heading">
          <span className="eyebrow-label">BILLETTERIE — ÉDITION FESTIVAL</span>
          <h2>Places limitées. Réservez avant le 19 décembre.</h2>
        </div>
        <TicketBooking />
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
