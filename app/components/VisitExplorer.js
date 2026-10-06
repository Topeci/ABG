"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Counter from "./Counter";
import VisitFX from "./VisitFX";

function Card({ p, saved, onToggle, hot }) {
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
  return (
    <div className={`vc${hot ? " vc-hot" : ""}`} data-slug={p.slug} data-cat={p.category}>
      <button
        type="button"
        className={`vc-heart${saved ? " on" : ""}`}
        onClick={() => onToggle(p.slug)}
        aria-label={saved ? "Retirer de mon voyage" : "Ajouter à mon voyage"}
        aria-pressed={saved}
      >
        {saved ? "♥" : "♡"}
      </button>
      {p.page ? (
        <Link href={`/visit-abengourou/${p.slug}`} className="vc-link">
          {inner}
        </Link>
      ) : (
        <div className="vc-link">{inner}</div>
      )}
    </div>
  );
}

const MOODS = [
  { label: "🏛️ Culture & histoire", cats: ["Culture", "Patrimoine", "Histoire"] },
  { label: "🌿 Nature", cats: ["Nature"] },
  { label: "🥁 Fête & traditions", cats: ["Tradition"] },
];

export default function VisitExplorer({ places }) {
  const scroller = useRef(null);
  const [saved, setSaved] = useState([]);
  const [panel, setPanel] = useState(false);
  const [hot, setHot] = useState(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem("visit-voyage") || "[]");
      if (Array.isArray(v)) setSaved(v.filter((x) => places.some((p) => p.slug === x)));
    } catch (e) {}
  }, [places]);

  function toggle(slug) {
    setSaved((cur) => {
      const next = cur.includes(slug) ? cur.filter((x) => x !== slug) : [...cur, slug];
      try {
        localStorage.setItem("visit-voyage", JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  }

  function pickMood(cats) {
    const target = places.find((p) => cats.includes(p.category));
    if (!target) return;
    const el = scroller.current;
    const card = el && el.querySelector(`[data-slug="${target.slug}"]`);
    document.getElementById("a-voir-cartes")?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (card) el.scrollTo({ left: Math.max(0, card.offsetLeft - 24), behavior: "smooth" });
    setHot(target.slug);
    setTimeout(() => setHot(null), 2600);
  }

  const savedPlaces = places.filter((p) => saved.includes(p.slug));
  const waText = encodeURIComponent(
    "Mon voyage à Abengourou : " +
      savedPlaces.map((p) => p.name).join(", ") +
      " — découvre tout sur https://www.indeniebrunch.com/visit-abengourou"
  );

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

      <section className="visit-intro reveal">
        <div className="visit-intro-text">
          <span className="visit-intro-eyebrow">Bienvenue</span>
          <h2>Abengourou, cité royale de l&apos;Indénié</h2>
          <p>
            Abengourou, c&apos;est d&apos;abord un petit campement de chasseurs, appelé
            M&apos;Kpékro, à la fin du XIXe siècle. Son nom vient de l&apos;ashanti et
            signifie « je n&apos;aime pas les histoires » : une appellation qui colle au
            calme de la ville, surnommée la cité de la paix. Mian Kouadio, venu du
            Ghana, en est considéré comme le fondateur.
          </p>
          <p>
            Chef-lieu du centre de l&apos;Indénié en 1916, chef-lieu du département de
            l&apos;Est dès 1963, la ville est aujourd&apos;hui le chef-lieu de la région de
            l&apos;Indénié-Djuablin. Fief des Agni, un peuple originaire du Ghana arrivé
            en Côte d&apos;Ivoire avec le grand groupe akan, elle garde la mémoire d&apos;un
            royaume fondé en 1745, toujours vivant aujourd&apos;hui.
          </p>
        </div>
        <ul className="visit-stats">
          <li><Counter to={1745} plain /><span>Fondation du royaume de l&apos;Indénié</span></li>
          <li><Counter to={210} suffix=" km" /><span>d&apos;Abidjan, à l&apos;est du pays</span></li>
          <li><Counter to={455104} /><span>habitants dans le département (2023)</span></li>
          <li><Counter to={6920} suffix=" km²" /><span>de superficie du département</span></li>
        </ul>
      </section>

      <section id="a-voir" className="visit-sec reveal">
        <h2>À voir &amp; à vivre</h2>
        <p className="visit-lead">Les lieux et traditions qui font l&apos;Indénié</p>
        <div className="visit-moods">
          <span>Aujourd&apos;hui, j&apos;ai envie de…</span>
          {MOODS.map((m) => (
            <button key={m.label} type="button" onClick={() => pickMood(m.cats)}>
              {m.label}
            </button>
          ))}
        </div>
        <div className="vc-carousel" id="a-voir-cartes">
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
              <Card key={p.slug} p={p} saved={saved.includes(p.slug)} onToggle={toggle} hot={hot === p.slug} />
            ))}
          </div>
          <button type="button" className="vc-arrow vc-next" onClick={() => slide(1)} aria-label="Lieux suivants">
            ›
          </button>
        </div>
      </section>

      <VisitFX />

      {saved.length > 0 && (
        <button type="button" className="voyage-fab" onClick={() => setPanel(true)}>
          🧳 Mon voyage <span>{saved.length}</span>
        </button>
      )}
      {panel && (
        <div className="voyage-backdrop" onClick={() => setPanel(false)}>
          <aside className="voyage-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Mon voyage">
            <header>
              <b>🧳 Mon voyage à Abengourou</b>
              <button type="button" onClick={() => setPanel(false)} aria-label="Fermer">
                ✕
              </button>
            </header>
            {savedPlaces.length === 0 ? (
              <p className="voyage-empty">Ajoute des lieux avec le ♡ pour préparer ton voyage.</p>
            ) : (
              <ul>
                {savedPlaces.map((p) => (
                  <li key={p.slug}>
                    <span className="voyage-thumb" style={p.image ? { backgroundImage: `url(${p.image})` } : undefined} />
                    <div>
                      <b>{p.name}</b>
                      <small>{p.category}</small>
                      {p.page && (
                        <Link href={`/visit-abengourou/${p.slug}`} onClick={() => setPanel(false)}>
                          Voir la fiche →
                        </Link>
                      )}
                    </div>
                    <button type="button" onClick={() => toggle(p.slug)} aria-label={`Retirer ${p.name}`}>
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {savedPlaces.length > 0 && (
              <a className="voyage-share" href={`https://wa.me/?text=${waText}`} target="_blank" rel="noopener noreferrer">
                Envoyer mon voyage sur WhatsApp
              </a>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
