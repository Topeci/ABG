import Link from "next/link";
import CartBadge from "./CartBadge";

// Nav partagée par toutes les pages publiques du site.
// Chaque onglet pointe vers une vraie page (route), plus d'ancres (#...).
export default function NavBar() {
  return (
    <>
    <Link href="/billetterie" className="topbar" aria-label="Lieu dévoilé : Stade HKB, Abengourou, le 19 décembre 2026">
      <div className="topbar-track" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="topbar-set" key={k}>
            {[0, 1, 2].map((n) => (
              <span key={n}>
                📍 LIEU DÉVOILÉ : STADE HKB, ABENGOUROU <i>✦</i> 19 DÉCEMBRE 2026 · DÈS 16H <i>✦</i> TOUT EN BLANC <i>✦</i> RÉSERVE TA PLACE <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </Link>
    <nav className="nav">
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="Logo Indénié Brunch" />
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle-checkbox" />
      <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="nav-links">
        <Link href="/">Accueil</Link>
        <Link href="/evenement">L&apos;événement</Link>
        <Link href="/programme">Programme</Link>
        <Link href="/galerie">Galerie</Link>
        <Link href="/billetterie">Billetterie</Link>
        <Link href="/actus">Actus</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/partenaire">Partenaire</Link>
        <Link href="/visit-abengourou" className="nav-visit">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="7" cy="16" r="4" />
            <circle cx="17" cy="16" r="4" />
            <path d="M7 12V5h3.5v7M13.5 12V5H17v7M11 15h2" />
          </svg>
          Visit Abengourou
        </Link>
      </div>
      <div className="nav-actions">
        <CartBadge />
        <Link href="/billetterie" className="btn-gold nav-cta">
          Réserver ma place
        </Link>
      </div>
    </nav>
    </>
  );
}
