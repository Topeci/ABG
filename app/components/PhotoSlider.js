"use client";

import { useRef, useState } from "react";

// Défilement de photos directement sur la page (flèches, glisser, points).
export default function PhotoSlider({ photos }) {
  const box = useRef(null);
  const [i, setI] = useState(0);
  const drag = useRef({ down: false, x: 0, left: 0 });

  function go(n) {
    const el = box.current;
    if (!el) return;
    const k = Math.max(0, Math.min(photos.length - 1, n));
    el.scrollTo({ left: k * el.clientWidth, behavior: "smooth" });
    setI(k);
  }
  function onScroll() {
    const el = box.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className="ps">
      <div
        className="ps-track"
        ref={box}
        onScroll={onScroll}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          drag.current = { down: true, x: e.clientX, left: box.current.scrollLeft };
          box.current.classList.add("ps-drag");
        }}
        onPointerMove={(e) => {
          if (!drag.current.down) return;
          box.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => {
          if (!drag.current.down) return;
          drag.current.down = false;
          box.current.classList.remove("ps-drag");
          const el = box.current;
          go(Math.round(el.scrollLeft / el.clientWidth));
        }}
        onPointerLeave={() => {
          if (drag.current.down) {
            drag.current.down = false;
            box.current.classList.remove("ps-drag");
            go(Math.round(box.current.scrollLeft / box.current.clientWidth));
          }
        }}
      >
        {photos.map((p, k) => (
          <figure key={p.src} className="ps-slide">
            <div className="ps-bg" style={{ backgroundImage: `url(${p.src})` }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} draggable="false" loading={k < 2 ? "eager" : "lazy"} />
          </figure>
        ))}
      </div>
      <button type="button" className="ps-arrow ps-prev" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Photo précédente">‹</button>
      <button type="button" className="ps-arrow ps-next" onClick={() => go(i + 1)} disabled={i === photos.length - 1} aria-label="Photo suivante">›</button>
      <div className="ps-count">{i + 1} / {photos.length}</div>
      <div className="ps-dots">
        {photos.map((p, k) => (
          <button key={p.src} type="button" className={k === i ? "on" : ""} onClick={() => go(k)} aria-label={`Photo ${k + 1}`} />
        ))}
      </div>
    </div>
  );
}
