import Link from "next/link";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";
import Countdown from "./components/Countdown";
import { getCurrentStandardTier, STANDARD_INCLUDES, STANDARD_TIERS } from "../lib/pricing";
import { ACTUS } from "../lib/actus";
import { EDITIONS } from "../lib/editions";
import { STEPS } from "../lib/programme";

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

function formatDateFR(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}

export default function Home() {
  const currentStandard = getCurrentStandardTier();
  const currentTierIndex = STANDARD_TIERS.findIndex((t) => t.id === currentStandard.id);
  const nextTier = STANDARD_TIERS[currentTierIndex + 1];
  const latestActus = ACTUS.slice(0, 2);
  const programmePreview = STEPS.slice(0, 3);
  const galeriePreview = EDITIONS.slice(0, 4);
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

      <Countdown />

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

      {/* PROGRAMME — aperçu */}
      <section className="section" style={{ background: "#FBF8F2" }}>
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
            <span className="eyebrow-label">PROGRAMME</span>
            <h2 style={{ margin: "6px 0 0" }}>Moment par moment</h2>
          </div>
          <Link href="/programme" className="pill-outline">
            Voir le programme complet →
          </Link>
        </div>
        <div className="steps-grid">
          {programmePreview.map((s) => (
            <div key={s.title} className="step-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} className="step-circle" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIE — aperçu */}
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
            <span className="eyebrow-label">GALERIE</span>
            <h2 style={{ margin: "6px 0 0" }}>Revis les éditions précédentes</h2>
          </div>
          <Link href="/galerie" className="pill-outline">
            Voir toute la galerie →
          </Link>
        </div>
        <div className="editions-grid">
          {galeriePreview.map((e) => (
            <Link key={e.slug} href={`/editions/${e.slug}`} className="edition-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.cover} alt={e.title} />
              <span>{e.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BILLETTERIE — zone marketing */}
      <section className="section">
        <div className="billet-promo">
          <span className="billet-promo-notch billet-promo-notch-left" />
          <span className="billet-promo-notch billet-promo-notch-right" />

          <span className="billet-promo-eyebrow">⚡ Places limitées — Édition Festival</span>
          <h2 className="billet-promo-title">Réserve ta place</h2>
          <p className="billet-promo-sub">
            {STANDARD_INCLUDES}. Accès général, ambiance garantie — ne laisse
            pas tes amis y aller sans toi.
          </p>

          <div className="billet-promo-price">
            <span className="billet-promo-price-tag">{currentStandard.shortLabel}</span>
            <span className="billet-promo-price-amount">{formatFCFA(currentStandard.amount)}</span>
          </div>

          <Link href="/billetterie" className="billet-promo-cta">
            Je réserve ma place →
          </Link>

          {nextTier && (
            <p className="billet-promo-urgency">
              Le tarif passe à <strong>{formatFCFA(nextTier.amount)}</strong> dès
              le {formatDateFR(currentStandard.until)} — réserve avant pour payer
              moins cher.
            </p>
          )}

          <div className="billet-promo-perks">
            <span>✓ Paiement Wave &amp; Orange Money</span>
            <span>✓ Billet avec QR code envoyé par email</span>
            <span>✓ Salons VIP disponibles</span>
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
