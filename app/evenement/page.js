import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "L'événement — Indénié Brunch",
  description:
    "Découvrez l'Indénié Brunch, le rendez-vous en blanc devenu culte à Abengourou.",
};

export default function EvenementPage() {
  return (
    <main>
      <NavBar />

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
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-muted)", marginTop: 16 }}>
              Né à Abengourou, l&apos;Indénié Brunch réunit tous les six mois la
              jeunesse de la région dans un concept unique : une seule couleur,
              le blanc, pour une après-midi de partage, de musique live et de
              retrouvailles. Édition après édition, le rendez-vous s&apos;est
              imposé comme un temps fort du calendrier social de l&apos;Indénié.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hennessy-prestige.jpg" alt="Ambiance Hennessy Prestige à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
