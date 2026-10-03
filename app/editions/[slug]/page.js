import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";
import { EDITIONS, getEdition } from "../../../lib/editions";

export function generateStaticParams() {
  return EDITIONS.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const edition = getEdition(params.slug);
  if (!edition) return {};
  return {
    title: `${edition.title} — Indénié Brunch`,
    description: `Album photo de l'${edition.title} de l'Indénié Brunch à Abengourou.`,
  };
}

export default function EditionPage({ params }) {
  const edition = getEdition(params.slug);
  if (!edition) notFound();

  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading">
          <span className="eyebrow-label">GALERIE</span>
          <h2>{edition.title}</h2>
        </div>
        <Link href="/galerie" className="pill-outline" style={{ display: "inline-block", marginBottom: 32 }}>
          ← Retour à la galerie
        </Link>
        <div className="edition-photos-grid">
          {edition.photos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src + i} src={src} alt={`${edition.title} — photo ${i + 1}`} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
