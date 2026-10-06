"use client";

import { useMemo, useRef, useState } from "react";
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
  const scroller = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const filtering = q.trim() !== "" || cat !== "Tout";

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return places.filter(
      (p) =>
        (cat === "Tout" || p.category === cat) &&
        (!s || (p.name + " " + p.category + " " + p.teaser).toLowerCase().includes(s))
    );
  }, [q, cat, places]);

  function slide(dir) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: "smooth" });
  }
  function onDown(e) {
    if (e.pointerType !== "mouse") return;
    const el = scroller.current;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
  }
  function onMove(e) {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    scroller.current.scrollLeft = d.left - dx;
  }
  function onUp() {
    drag.current.down = false;
  }
  function onClickCapture(e) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

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
          <div className="vc-carousel">
            <button type="button" className="vc-arrow vc-prev" onClick={() => slide(-1)} aria-label="Lieux précédents">
              ‹
            </button>
            <div
              className="vc-scroll"
              ref={scroller}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerLeave={onUp}
              onClickCapture={onClickCapture}
            >
              {list.map((p) => (
                <Card key={p.slug} p={p} />
              ))}
            </div>
            <button type="button" className="vc-arrow vc-next" onClick={() => slide(1)} aria-label="Lieux suivants">
              ›
            </button>
          </div>
        )}
      </section>
    </>
  );
}
