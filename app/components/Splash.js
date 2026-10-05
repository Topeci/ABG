"use client";

import { useEffect, useState } from "react";

// Écran d'attente : logo qui scintille, visible dès le premier affichage
// (rendu côté serveur) puis qui disparaît une fois la page prête.
export default function Splash() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const done = () => {
      const wait = Math.max(0, 900 - (Date.now() - start));
      setTimeout(() => {
        setHide(true);
        setTimeout(() => setGone(true), 600);
      }, wait);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    const safety = setTimeout(done, 5000);
    return () => clearTimeout(safety);
  }, []);

  if (gone) return null;
  return (
    <div className={`splash${hide ? " splash-hide" : ""}`} aria-hidden="true">
      <div className="splash-logo-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="" className="splash-logo" />
        <span className="splash-star s1" />
        <span className="splash-star s2" />
        <span className="splash-star s3" />
        <span className="splash-star s4" />
      </div>
    </div>
  );
}
