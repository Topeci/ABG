"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = "2026-12-19T18:00:00Z"; // Côte d'Ivoire = UTC+0

function getTimeLeft() {
  const diff = new Date(EVENT_DATE).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    over: false,
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  // null tant que pas monté côté client, pour éviter un écart serveur/navigateur
  const [t, setT] = useState(null);

  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t || t.over) return null;

  const UNITS = [
    { label: "Jours", value: t.days, pad: false },
    { label: "Heures", value: t.hours, pad: true },
    { label: "Minutes", value: t.minutes, pad: true },
    { label: "Secondes", value: t.seconds, pad: true },
  ];

  return (
    <div className="countdown-wrap">
      <span className="countdown-label">L&apos;édition festival, c&apos;est dans</span>
      <div className="countdown-frame">
        {UNITS.map((u, i) => (
          <div key={u.label} className="countdown-unit-group">
            <div className="countdown-unit">
              <span className="countdown-value">{u.pad ? pad(u.value) : u.value}</span>
              <span className="countdown-unit-label">{u.label}</span>
            </div>
            {i < UNITS.length - 1 && <span className="countdown-sep">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
