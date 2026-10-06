import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";
import PhotoLightbox from "../../components/PhotoLightbox";
import { PLACES, PALAIS } from "../../../lib/visit";

const PAGES = { "palais-royal": PALAIS };

export function generateStaticParams() {
  return PLACES.filter((p) => p.page).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const d = PAGES[params.slug];
  if (!d) return {};
  return {
    title: `${d.title} — Visit Abengourou`,
    description: d.tagline,
    openGraph: { images: [d.hero] },
  };
}

export default function PlacePage({ params }) {
  const d = PAGES[params.slug];
  if (!d) notFound();

  return (
    <main className="visit-page">
      <NavBar />
      <header
        className="place-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(20,10,4,.25), rgba(20,10,4,.78)), url(${d.hero})` }}
      >
        <div className="place-hero-inner">
          <Link href="/visit-abengourou" className="place-back">← Visit Abengourou</Link>
          <h1>{d.title}</h1>
          <p>{d.tagline}</p>
        </div>
      </header>

      <section className="place-facts">
        {d.facts.map((f) => (
          <div key={f.k}>
            <span>{f.k}</span>
            <b>{f.v}</b>
          </div>
        ))}
      </section>

      <article className="place-body">
        {d.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.text.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="visit-sec place-gallery">
        <h2>En images</h2>
        <PhotoLightbox photos={d.gallery.map((g) => g.src)} title={d.title} />
        <p className="place-note">{d.archiveNote}</p>
      </section>

      <section className="place-cta">
        <h2>Viens vivre Abengourou</h2>
        <p>Rendez-vous le 19 décembre pour l&apos;Indénié Brunch, Édition 5.</p>
        <div>
          <Link href="/billetterie" className="btn-gold">Réserver ma place</Link>
          <Link href="/visit-abengourou" className="btn-line">Voir les autres lieux</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
