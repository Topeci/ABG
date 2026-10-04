import Link from "next/link";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";
import { getCurrentStandardTier, STANDARD_INCLUDES } from "../lib/pricing";
import { ACTUS } from "../lib/actus";

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default function Home() {
  const currentStandard = getCurrentStandardTier();
  const latestActus = ACTUS.slice(0, 2);
  return (
    <main>
      <NavBar />

      {/* HERO — full bleed, video alone with a flashy clickable teaser badge */}
      <section className="hero-full">
        <video
          className="hero-video"
          src="/videos/hero-teaser.mp4"
          poster="/images/hero-foule.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <Link href="/edition-5" className="hero-teaser-badge hero-teaser-badge-flashy">
          <span>Découvrez la nouvelle édition 5 →</span>
        </Link>
      </section>

      {/* INFOS PRATIQUES */}
      <section className="section" style={{ background: "#733B1A", padding: "56px 64px" }}>
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
      </section>

      {/* ÉVÉNEMENT — aperçu */}
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">L&apos;ÉVÉNEMENT</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Un rendez-vous devenu culte à Abengourou
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Une seule couleur, le blanc. Un seul rendez-vous, deux fois par
              an. L&apos;Indénié Brunch réunit la jeunesse d&apos;Abengourou
              pour une après-midi hors du temps, entre musique, retrouvailles
              et éclat.
            </p>
            <div style={{ marginTop: 8 }}>
              <Link
                href="/evenement"
                className="pill-outline"
                style={{ borderColor: "var(--accent-gold)", color: "var(--accent-gold)" }}
              >
                Découvrir le concept →
              </Link>
            </div>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-09-trio-hommes.jpg" alt="Ambiance Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* BILLETTERIE — aperçu */}
      <section className="section" style={{ background: "#FBF8F2" }}>
        <div className="section-heading" style={{ textAlign: "center" }}>
          <span className="eyebrow-label">BILLETTERIE</span>
          <h2>Réserve ta place</h2>
          <p style={{ marginTop: 10, color: "var(--ink-muted)" }}>
            Billet Standard à partir de{" "}
            <strong style={{ color: "var(--ink)" }}>{formatFCFA(currentStandard.amount)}</strong>{" "}
            — {STANDARD_INCLUDES.toLowerCase()}.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/billetterie" className="btn-gold">
              Réserver ma place →
            </Link>
          </div>
        </div>
      </section>

      {/* ACTUS — aperçu */}
      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <span className="eyebrow-label">ACTUS</span>
            <h2 style={{ margin: "6px 0 0" }}>Les dernières nouvelles</h2>
          </div>
          <Link href="/actus" className="pill-outline">
            Voir toutes les actus →
          </Link>
        </div>
        <div className="news-grid-3" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {latestActus.map((a) => (
            <a key={a.id} href={a.url} target="_blank" rel="noopener noreferrer" className="news-card">
              {a.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.image} alt={a.title} />
              ) : (
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/10",
                    background: "#F2F2F2",
                  }}
                />
              )}
              <span className="news-date">{a.dateLabel}</span>
              <h3>{a.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
