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

const RADIUS = 42;
const CIRC = 2 * Math.PI * RADIUS;

function Ring({ value, max, label }) {
  const frac = Math.min(1, value / max);
  const dash = CIRC * frac;

  return (
    <div className="countdown-ring">
      <div className="countdown-ring-circle">
        <svg viewBox="0 0 100 100">
          <circle className="countdown-ring-track" cx="50" cy="50" r={RADIUS} />
          <circle
            className="countdown-ring-arc"
            cx="50"
            cy="50"
            r={RADIUS}
            strokeDasharray={`${dash} ${CIRC - dash}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <span className="countdown-ring-value">{pad(value)}</span>
      </div>
      <span className="countdown-ring-label">{label}</span>
    </div>
  );
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

  return (
    <div className="countdown-row">
      <Ring value={t.days} max={60} label="Jours" />
      <Ring value={t.hours} max={24} label="Heures" />
      <Ring value={t.minutes} max={60} label="Minutes" />
      <Ring value={t.seconds} max={60} label="Secondes" />
    </div>
  );
}
