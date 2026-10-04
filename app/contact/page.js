import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact — Indénié Brunch",
  description: "Contacte l'équipe de l'Indénié Brunch et reste informé des prochaines éditions.",
};

const WHATSAPP_NUMBER = "33749045758"; // +33 7 49 04 57 58
const WHATSAPP_MESSAGE = "Bonjour l'équipe Indénié Brunch, j'ai une question :";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function ContactPage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading" style={{ textAlign: "center" }}>
          <span className="eyebrow-label">CONTACT</span>
          <h2>On reste en contact</h2>
          <p style={{ marginTop: 12, color: "var(--ink-muted)", maxWidth: 520, margin: "12px auto 0" }}>
            Une question, une demande presse ou juste envie de dire bonjour ?
            Remplis le formulaire ou écris-nous directement sur WhatsApp — à
            toi de choisir.
          </p>
        </div>

        <div className="contact-split">
          <ContactForm />

          <div className="contact-whatsapp-card">
            <div className="contact-whatsapp-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                <path d="M12.01 2C6.49 2 2 6.47 2 11.98c0 1.98.58 3.83 1.58 5.39L2 22l4.79-1.55a10.02 10.02 0 0 0 5.22 1.47h.01c5.52 0 10-4.47 10-9.98C22 6.47 17.53 2 12.01 2zm5.86 14.11c-.25.69-1.24 1.26-2.01 1.42-.53.11-1.23.2-3.57-.77-2.99-1.24-4.93-4.26-5.08-4.45-.14-.19-1.21-1.61-1.21-3.07 0-1.46.75-2.17 1.02-2.47.27-.3.58-.37.78-.37.19 0 .39.002.56.01.18.01.42-.07.65.5.25.6.84 2.08.92 2.23.08.15.13.33.03.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.37 1.47.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.35.07.13.07.74-.17 1.42z" />
              </svg>
            </div>
            <h3 style={{ margin: "14px 0 6px", color: "var(--ink)" }}>
              Écris-nous sur WhatsApp
            </h3>
            <p style={{ fontSize: 14, color: "var(--ink-muted)", marginBottom: 20 }}>
              La réponse la plus rapide : discute directement avec l&apos;équipe.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                textAlign: "center",
                background: "#25D366",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              Ouvrir la discussion
            </a>
            <p style={{ fontSize: 12.5, color: "var(--ink-muted)", marginTop: 14 }}>
              +33 7 49 04 57 58
              <br />
              Infoline : 07 47 75 02 73
            </p>
          </div>
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
