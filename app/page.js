import Link from "next/link";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
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

      <section className="section" style={{ textAlign: "center", padding: "56px 64px" }}>
        <Link href="/billetterie" className="btn-gold">
          Réserver ma place
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
