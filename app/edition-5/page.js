import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import TicketBooking from "../components/TicketBooking";
import Countdown from "../components/Countdown";

export const metadata = {
  title: "Édition 5 — Festival — Indénié Brunch",
  description:
    "Tout savoir sur la nouvelle édition de l'Indénié Brunch, édition festival, le 19 décembre 2026 à Abengourou.",
};

export default function Edition5Page() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading">
          <span className="eyebrow-label">NOUVELLE ÉDITION</span>
          <h2>Édition 5 — Festival</h2>
          <p style={{ marginTop: 12, color: "var(--ink-muted)", fontSize: 16, lineHeight: 1.75, maxWidth: 680 }}>
            Cette fois, l&apos;Indénié Brunch voit plus grand : une édition
            festival, avec encore plus de surprises, de musique et de
            moments à partager. Toujours le même dress code — tout blanc —
            et toujours le même esprit : une après-midi hors du temps entre
            la jeunesse d&apos;Abengourou.
          </p>
        </div>

        <div className="about" style={{ marginTop: 40 }}>
          <div className="about-text">
            <h3 style={{ fontSize: 24, color: "var(--ink)", marginBottom: 12 }}>
              Visuels de communication
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Les premières affiches de l&apos;édition festival sont déjà
              dehors — encore plus d&apos;infos et de surprises à venir.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/evt-17-flyer-edition-festival.jpg"
              alt="Affiche Indénié Brunch — Édition festival"
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#733B1A", padding: "48px 64px 44px" }}>
        <div className="practical-strip">
          <div className="practical-item">
            <span className="label" style={{ color: "#BF814B" }}>Date</span>
            <span className="value" style={{ color: "#FAF6EE" }}>19 déc. 2026</span>
          </div>
          <div className="practical-item">
            <span className="label" style={{ color: "#BF814B" }}>Heure</span>
            <span className="value" style={{ color: "#FAF6EE" }}>Dès 18h</span>
          </div>
          <div className="practical-item">
            <span className="label" style={{ color: "#BF814B" }}>Lieu</span>
            <span className="value" style={{ color: "#FAF6EE" }}>Abengourou</span>
          </div>
          <div className="practical-item">
            <span className="label" style={{ color: "#BF814B" }}>Dress code</span>
            <span className="value" style={{ color: "#FAF6EE" }}>Tout blanc</span>
          </div>
        </div>

        <div className="countdown-divider" />
        <span className="countdown-eyebrow">C&apos;est dans</span>
        <Countdown />
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow-label">BILLETTERIE — ÉDITION FESTIVAL</span>
          <h2>Réserve ta place pour l&apos;édition festival</h2>
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
