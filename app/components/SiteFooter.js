import Link from "next/link";

// Pied de page partagé (sans newsletter — elle vit sur la page /contact).
export default function SiteFooter() {
  return (
    <div className="site-footer">
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 64px 0" }}>
        <div className="footer-social">
          <span>Reste connecté</span>
          <a
            href="https://www.instagram.com/indenie_brunch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(115,59,26,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#733B1A" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/indeniebrunch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(115,59,26,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#733B1A" strokeWidth="1.6">
              <path d="M14 9h3V6h-3c-2 0-3 1-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.5.5-1 1-1z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(115,59,26,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#733B1A" strokeWidth="1.6">
              <path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1121 11.5z" />
            </svg>
          </a>
        </div>

        <div className="footer-nav-row">
          <nav className="footer-nav-links">
            <Link href="/evenement">L&apos;événement</Link>
            <Link href="/actus">Actus</Link>
            <Link href="/programme">Programme</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/billetterie">Billetterie</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/partenaire">Partenaire</Link>
          </nav>
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Indénié Brunch" style={{ height: 40 }} />
          </Link>
        </div>

        <div className="footer-legal-row">
          <span>© 2026 Indénié Brunch — Tous droits réservés</span>
          <span>Infoline : 07 47 75 02 73 · +33 7 49 04 57 58 (WhatsApp)</span>
        </div>
      </div>
    </div>
  );
}
