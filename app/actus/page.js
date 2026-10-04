import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import { ACTUS } from "../../lib/actus";

export const metadata = {
  title: "Actus — Indénié Brunch",
  description: "Les dernières actualités de l'Indénié Brunch.",
};

function FacebookIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#733B1A" strokeWidth="1.4">
      <path d="M14 9h3V6h-3c-2 0-3 1-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.5.5-1 1-1z" />
    </svg>
  );
}

export default function ActusPage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="news-split" style={{ marginTop: 40 }}>
          <div className="news-split-heading">
            <h2>Actus</h2>
            <p>
              Chaque édition a sa propre couleur. Découvre ce que la ville
              nous réserve.
            </p>
          </div>
          <div className="news-grid-3">
            {ACTUS.map((a) => (
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FacebookIcon />
                  </div>
                )}
                <span className="news-date">{a.dateLabel}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="pill-outline">
                  {a.type === "video" ? "Voir la vidéo" : "Lire l'article"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
