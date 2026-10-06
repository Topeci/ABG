"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "../../lib/visit";

function Card({ p }) {
  const style = p.image
    ? { backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(0,0,0,.78)), url(${p.image})` }
    : undefined;
  const inner = (
    <>
      <span className="vc-cat">{p.category}</span>
      <b className="vc-name">{p.name}</b>
      {p.page ? <em className="vc-more">Découvrir →</em> : <em className="vc-soon">Bientôt</em>}
    </>
  );
  return p.page ? (
    <Link href={`/visit-abengourou/${p.slug}`} className={`vc${p.image ? "" : " vc-plain"}`} style={style}>
      {inner}
    </Link>
  ) : (
    <div className={`vc${p.image ? "" : " vc-plain"}`} style={style}>
      {inner}
    </div>
  );
}

export default function VisitExplorer({ places }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tout");
  const filtering = q.trim() !== "" || cat !== "Tout";

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return places.filter(
      (p) =>
        (cat === "Tout" || p.category === cat) &&
        (!s || (p.name + " " + p.category + " " + p.teaser).toLowerCase().includes(s))
    );
  }, [q, cat, places]);

  function go() {
    document.getElementById("a-voir")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="visit-hero">
        <div className="visit-hero-inner">
          <span className="visit-eyebrow">Fondé en 1745 · Royaume de l&apos;Indénié</span>
          <h1>
            Vis l&apos;expérience
            <br />
            Abengourou
          </h1>
          <p>
            Cité royale, terre agni, capitale du cacao et du café. Viens pour la
            fête, reste pour la ville.
          </p>
      <form
        className="visit-search"
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Que veux-tu vivre ? Palais, musée, nature…"
          aria-label="Rechercher un lieu ou une activité"
        />
        <button type="submit">Explorer</button>
      </form>
      <div className="visit-chips">
        {["Tout", ...CATEGORIES].map((c) => (
          <button
            key={c}
            type="button"
            className={c === cat ? "on" : ""}
            onClick={() => {
              setCat(c);
              go();
            }}
          >
            {c}
          </button>
        ))}
      </div>
        </div>
      </header>

      <div className="visit-band">
        <b>1745</b>
        <span>Un royaume, des siècles d&apos;histoire, une jeunesse debout.</span>
      </div>

      <section id="a-voir" className="visit-sec">
        <h2>À voir &amp; à vivre</h2>
        <p className="visit-lead">Les lieux et traditions qui font l&apos;Indénié</p>
        {list.length === 0 ? (
          <p className="visit-empty">Aucun résultat pour cette recherche.</p>
        ) : filtering || list.length < 4 ? (
          <div className="vc-grid">
            {list.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <div className="vc-marquee">
            <div className="vc-track">
              {[...list, ...list].map((p, i) => (
                <Card key={p.slug + i} p={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
