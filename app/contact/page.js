import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Contact — Indénié Brunch",
  description: "Contacte l'équipe de l'Indénié Brunch et reste informé des prochaines éditions.",
};

export default function ContactPage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading">
          <span className="eyebrow-label">CONTACT</span>
          <h2>On reste en contact</h2>
          <p style={{ marginTop: 12, color: "var(--ink-muted)" }}>
            Une question, une demande presse ou juste envie de dire bonjour ?
            Écris-nous sur WhatsApp ou appelle l&apos;infoline :{" "}
            <strong style={{ color: "var(--ink)" }}>07 47 75 02 73</strong> ·{" "}
            <strong style={{ color: "var(--ink)" }}>+33 7 49 04 57 58 (WhatsApp)</strong>
          </p>
        </div>
      </section>

      <div className="newsletter" style={{ border: "none" }}>
        <div>
          <h2>Ne rate aucune édition</h2>
          <p>Inscris-toi pour recevoir la date de la prochaine édition en avant-première.</p>
        </div>
        <form>
          <label
            htmlFor="newsletter-email"
            style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}
          >
            Adresse e-mail
          </label>
          <input id="newsletter-email" type="email" placeholder="Ton adresse e-mail" />
          <button type="submit" className="btn-gold">
            S&apos;inscrire
          </button>
        </form>
      </div>

      <SiteFooter />
    </main>
  );
}
