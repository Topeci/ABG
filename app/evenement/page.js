import Link from "next/link";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "L'événement — Indénié Brunch",
  description:
    "Découvrez l'Indénié Brunch, le rendez-vous en blanc devenu culte à Abengourou : histoire, expérience, chiffres clés et vision.",
};

export default function EvenementPage() {
  return (
    <main>
      <NavBar />

      {/* Intro */}
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">L&apos;ÉVÉNEMENT</span>
            <h2 style={{ fontSize: 38, lineHeight: 1.15, color: "var(--ink)" }}>
              Un rendez-vous devenu culte à Abengourou
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Une seule couleur, le blanc. Un seul rendez-vous, deux fois par
              an. L&apos;Indénié Brunch réunit la jeunesse d&apos;Abengourou
              pour une après-midi hors du temps, entre musique, retrouvailles
              et éclat.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hennessy-prestige.jpg" alt="Ambiance Hennessy Prestige à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* L'HISTOIRE */}
      <section className="section">
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">L&apos;HISTOIRE</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              D&apos;une idée à un mouvement
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Ce qui n&apos;était au départ qu&apos;un simple moment de
              rencontre entre amis est devenu l&apos;un des événements les
              plus attendus de l&apos;Indénié. Au fil des éditions,
              l&apos;Indénié Brunch a rassemblé des centaines de participants
              venus célébrer l&apos;élégance, la convivialité et la fierté de
              leur région.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-12-vue-tentes-foule.jpg" alt="L'Indénié Brunch rassemble la foule" />
          </div>
        </div>
      </section>

      {/* L'EXPÉRIENCE */}
      <section className="section" style={{ background: "#FBF8F2" }}>
        <div className="about about-reverse">
          <div className="about-text">
            <span className="eyebrow-label">L&apos;EXPÉRIENCE</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Bien plus qu&apos;un brunch
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              L&apos;Indénié Brunch, c&apos;est une immersion dans une
              ambiance unique :
            </p>
            <div className="chips">
              <span className="chip gold">Dress code 100% blanc</span>
              <span className="chip gold">DJ et performances live</span>
              <span className="chip gold">Espaces photos et animations</span>
              <span className="chip gold">Gastronomie et cocktails</span>
              <span className="chip gold">Rencontres et networking</span>
              <span className="chip gold">Ambiance chic et décontractée</span>
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Chaque détail est pensé pour offrir aux participants une
              expérience mémorable.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-02-photobooth-hennessy-3h.jpg" alt="Espace photobooth à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* LES CHIFFRES CLÉS */}
      <section className="section">
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">LES CHIFFRES CLÉS</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Une communauté qui grandit à chaque édition
            </h2>
            <div className="chips">
              <span className="chip">Plusieurs éditions organisées avec succès</span>
              <span className="chip">Des centaines de participants à chaque rendez-vous</span>
              <span className="chip">Des milliers d&apos;interactions sur les réseaux sociaux</span>
              <span className="chip">Artistes, influenceurs et personnalités invités</span>
              <span className="chip">Deux éditions par an</span>
            </div>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-08-groupe-5-femmes.jpg" alt="Communauté de l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* POURQUOI LE BLANC */}
      <section className="section" style={{ background: "#FBF8F2" }}>
        <div className="about about-reverse">
          <div className="about-text">
            <span className="eyebrow-label">POURQUOI LE BLANC ?</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Plus qu&apos;une couleur, un symbole
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Le blanc symbolise l&apos;unité, l&apos;élégance et le
              renouveau. En réunissant tous les participants autour d&apos;un
              même dress code, l&apos;Indénié Brunch crée une atmosphère
              visuelle spectaculaire et une identité immédiatement
              reconnaissable.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-11-robe-blanche-hennessy.jpg" alt="Dress code tout blanc à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* NOTRE VISION */}
      <section className="section">
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">NOTRE VISION</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Faire rayonner l&apos;Indénié
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              À travers cet événement, nous souhaitons promouvoir les talents
              locaux, valoriser la culture de notre région et créer un cadre
              où les générations se rencontrent, échangent et construisent
              ensemble l&apos;avenir de l&apos;Indénié.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-14-dj-etincelles.jpg" alt="Performance live à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* CE QUI VOUS ATTEND */}
      <section className="section" style={{ background: "#FBF8F2" }}>
        <div className="about about-reverse">
          <div className="about-text">
            <span className="eyebrow-label">CE QUI VOUS ATTEND</span>
            <h2 style={{ fontSize: 32, lineHeight: 1.15, color: "var(--ink)" }}>
              Une journée inoubliable
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-muted)" }}>
              Entre prestations artistiques, musique, gastronomie, séances
              photos, rencontres inspirantes et moments de partage, chaque
              édition réserve son lot de surprises pour faire vivre aux
              participants une expérience exceptionnelle.
            </p>
            <div style={{ marginTop: 8 }}>
              <Link href="/billetterie" className="btn-gold">
                Réserver ma place
              </Link>
            </div>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gallery/evt-16-grande-tablee.jpg" alt="Grande tablée à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* L'ÉQUIPE */}
      <section className="section team-section">
        <div className="team-head">
          <span className="eyebrow-label">L&apos;ÉQUIPE</span>
          <h2>C&apos;est grâce à eux que ça existe</h2>
          <p>
            Derrière chaque tenue blanche, chaque sourire et chaque photo de
            groupe, il y a une équipe qui court partout, installe, accueille,
            règle les petits soucis… et trouve encore le temps de poser pour
            la photo.
          </p>
        </div>
        <figure className="team-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/edition-5/equipe.jpg"
            alt="L'équipe de l'Indénié Brunch, tout en blanc, badges staff au cou"
            loading="lazy"
          />
        </figure>
        <p className="team-thanks">
          Un grand merci à tous ceux qui travaillent dans l&apos;ombre (et
          parfois dans le stress) pour que tu t&apos;enjailles à chaque
          édition. Lors de nos événements, quand tu croises quelqu&apos;un
          avec un badge « STAFF », un sourire et un « merci » suffisent.
          <strong>Respect à l&apos;équipe Indénié Brunch ! 🤍</strong>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
