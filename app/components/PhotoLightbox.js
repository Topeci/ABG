"use client";

import { useEffect, useState } from "react";

export default function PhotoLightbox({ photos, title }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, photos.length]);

  return (
    <>
      <div className="edition-photos-grid">
        {photos.map((src, i) => (
          <button
            key={src + i}
            type="button"
            className="edition-photo-btn"
            onClick={() => setOpenIndex(i)}
            aria-label={`Agrandir la photo ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`${title} — photo ${i + 1}`} />
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-backdrop" onClick={() => setOpenIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setOpenIndex(null)}
            aria-label="Fermer"
          >
            ✕
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i - 1 + photos.length) % photos.length);
              }}
              aria-label="Photo précédente"
            >
              ‹
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[openIndex]}
            alt={`${title} — photo ${openIndex + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i + 1) % photos.length);
              }}
              aria-label="Photo suivante"
            >
              ›
            </button>
          )}

          <a
            href={photos[openIndex]}
            download
            onClick={(e) => e.stopPropagation()}
            className="btn-gold lightbox-download"
          >
            Télécharger
          </a>
        </div>
      )}
    </>
  );
}
