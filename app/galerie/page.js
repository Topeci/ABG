import Link from "next/link";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import { EDITIONS } from "../../lib/editions";

export const metadata = {
  title: "Galerie — Indénié Brunch",
  description: "Revis les éditions précédentes de l'Indénié Brunch en images.",
};

export default function GaleriePage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            margin: "24px 0 40px",
          }}
        >
          <h2 style={{ fontSize: 34, textTransform: "uppercase", margin: 0 }}>Galerie</h2>
        </div>
        <div className="editions-grid">
          {EDITIONS.map((e) => (
            <Link key={e.slug} href={`/editions/${e.slug}`} className="edition-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.cover} alt={e.title} />
              <span>{e.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
