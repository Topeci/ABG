"use client";

import { useEffect, useRef, useState } from "react";

// Compteur animé : affiche la valeur finale tant que JS n'a pas démarré.
export default function Counter({ to, suffix = "", duration = 1600, plain = false }) {
  const ref = useRef(null);
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const io = new IntersectionObserver(
      ([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / duration);
          setVal(Math.round(to * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        setVal(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <b ref={ref}>
      {plain ? String(val) : val.toLocaleString("fr-FR")}
      {suffix}
    </b>
  );
}
