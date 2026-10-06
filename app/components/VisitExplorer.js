"use client";

import { useRef } from "react";
import Link from "next/link";

function Card({ p }) {
  const imgStyle = p.image ? { backgroundImage: `url(${p.image})` } : undefined;
  const inner = (
    <>
      <div className={`vc-img${p.image ? "" : " vc-img-plain"}`} style={imgStyle} />
      <div className="vc-body">
        <span className="vc-cat">{p.category}</span>
        <b className="vc-name">{p.name}</b>
        <p className="vc-teaser">{p.teaser}</p>
        <div className="vc-foot">
          <span className="vc-loc">📍 Abengourou</span>
          {p.page ? <em className="vc-more">Découvrir →</em> : <em className="vc-soon">Bientôt</em>}
        </div>
      </div>
    </>
  );
  return p.page ? (
    <Link href={`/visit-abengourou/${p.slug}`} className="vc">
      {inner}
    </Link>
  ) : (
    <div className="vc">{inner}</div>
  );
}

export default function VisitExplorer({ places }) {
  const scroller = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  function slide(dir) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: "smooth" });
  }
  function onDown(e) {
    if (e.pointerType !== "mouse") return;
    drag.current = { down: true, x: e.clientX, left: scroller.current.scrollLeft, moved: false };
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
          <p>Cité royale, terre agni, capitale du cacao et du café.</p>
        </div>
      </header>

      <section id="a-voir" className="visit-sec">
        <h2>À voir &amp; à vivre</h2>
        <p className="visit-lead">Les lieux et traditions qui font l&apos;Indénié</p>
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
            {places.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
          <button type="button" className="vc-arrow vc-next" onClick={() => slide(1)} aria-label="Lieux suivants">
            ›
          </button>
        </div>
      </section>
    </>
  );
}
