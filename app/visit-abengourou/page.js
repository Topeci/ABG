import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import VisitExplorer from "../components/VisitExplorer";
import { PLACES, LODGINGS, RESTAURANTS, VIDEOS } from "../../lib/visit";

export const metadata = {
  title: "Visit Abengourou — Indénié Brunch",
  description:
    "Visite Abengourou, cité royale du royaume de l'Indénié : palais royal, patrimoine, traditions, où dormir et où manger.",
};

function Listing({ id, title, lead, items, emptyText, cta }) {
  return (
    <section id={id} className="visit-sec">
      <h2>{title}</h2>
      <p className="visit-lead">{lead}</p>
      {items.length === 0 ? (
        <p className="visit-empty">{emptyText}</p>
      ) : (
        <div className="vh-grid">
          {items.map((h) => (
            <article key={h.name} className="vh">
              <div
                className="vh-img"
                style={h.image ? { backgroundImage: `url(${h.image})` } : undefined}
              />
              <div className="vh-body">
                <span>{h.type}</span>
                <b>{h.name}</b>
                {h.price && <i>{h.price}</i>}
                {h.url && (
                  <a href={h.url} target="_blank" rel="noopener noreferrer">
                    {cta} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default function VisitPage() {
  return (
    <main className="visit-page">
      <NavBar />

      <VisitExplorer places={PLACES} />

      <Listing
        id="se-loger"
        title="Où se loger"
        lead="Dors à Abengourou, vis la fête sans stress"
        items={LODGINGS}
        emptyText="Notre sélection d'hôtels arrive très bientôt."
        cta="Réserver"
      />
      <Listing
        id="se-regaler"
        title="Où se régaler"
        lead="Les bonnes tables de la ville"
        items={RESTAURANTS}
        emptyText="Notre sélection de restaurants arrive très bientôt."
        cta="Voir"
      />

      {VIDEOS.length > 0 && (
        <section id="videos" className="visit-sec">
          <h2>Abengourou en vidéo</h2>
          <p className="visit-lead">La ville en mouvement</p>
          <div className="vv-grid">
            {VIDEOS.map((v) => (
              <a
                key={v.url}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vv"
                style={v.image ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.7)), url(${v.image})` } : undefined}
              >
                <span className="vv-play">▶</span>
                <b>{v.title}</b>
                <em>Voir sur {v.source}</em>
              </a>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
