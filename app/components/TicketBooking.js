"use client";

import { useRef, useState } from "react";
import { OFFERS, STANDARD_TICKET_URL, SALON_WHATSAPP_NUMBER, formatFCFA } from "../../lib/offers";

const SALONS = OFFERS.filter((o) => o.id !== "standard");

export default function TicketBooking() {
  const formRef = useRef(null);
  const [salon, setSalon] = useState(SALONS[0].id);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function chooseSalon(id) {
    setSalon(id);
    setError("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function send(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Indique ton nom et ton numéro WhatsApp.");
      return;
    }
    const s = SALONS.find((o) => o.id === salon);
    const lines = [
      "Bonjour Indénié Brunch, je souhaite réserver un salon VIP :",
      "",
      `• Salon : ${s.label}`,
      `• Quantité : ${qty} (${formatFCFA(s.amount * qty)})`,
      `• Nom : ${name.trim()}`,
      `• Téléphone : ${phone.trim()}`,
    ];
    if (note.trim()) lines.push(`• Message : ${note.trim()}`);
    const url = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <div className="tickets-grid tickets-grid-offers">
        {OFFERS.map((t) => {
          const isStandard = t.id === "standard";
          return (
            <div key={t.id} className={`ticket-card${t.featured ? " featured" : ""}`}>
              {t.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.image} alt={t.label} className="ticket-card-img" />
              )}
              <div className="ticket-card-top">
                <span className="ticket-label">{t.label}</span>
                {t.badge && <span className="ticket-badge">{t.badge}</span>}
              </div>
              <span className="ticket-price">{formatFCFA(t.amount)}</span>
              <div className="ticket-features">
                {t.features.map((f) => (
                  <span key={f}>· {f}</span>
                ))}
              </div>

              {isStandard ? (
                <a
                  href={STANDARD_TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line"
                  style={{ textAlign: "center" }}
                >
                  Acheter mon billet
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => chooseSalon(t.id)}
                  className={t.featured ? "btn-gold" : "btn-line"}
                  style={
                    t.featured
                      ? { textAlign: "center", background: "#733B1A", color: "#FFFFFF" }
                      : { textAlign: "center" }
                  }
                >
                  Réserver ce salon
                </button>
              )}
            </div>
          );
        })}
      </div>

      <form ref={formRef} className="salon-form" onSubmit={send}>
        <h3>Réserver un salon VIP</h3>
        <p>Remplis ce formulaire : ta demande part directement sur WhatsApp vers l&apos;équipe, qui confirme avec toi.</p>

        <label>
          Salon
          <select value={salon} onChange={(e) => setSalon(e.target.value)}>
            {SALONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label} — {formatFCFA(s.amount)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Nombre de salons
          <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label>
          Nom complet
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label>
          Numéro WhatsApp
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="+225 …" required />
        </label>
        <label>
          Message (facultatif)
          <textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
        {error && <p className="salon-form-error">{error}</p>}
        <button type="submit" className="btn-gold salon-form-submit">
          Envoyer ma demande sur WhatsApp
        </button>
      </form>
    </>
  );
}
