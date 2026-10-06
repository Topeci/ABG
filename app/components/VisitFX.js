"use client";

import { useEffect } from "react";

// Effets d'apparition au défilement (sans JS, tout reste visible).
export default function VisitFX() {
  useEffect(() => {
    const root = document.querySelector(".visit-page");
    if (!root) return;
    root.classList.add("reveal-on");
    const els = root.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
