"use client";

import { useState } from "react";
import {
  getCurrentStandardTier,
  SALONS,
  STANDARD_INCLUDES,
} from "../../lib/pricing";

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

const currentStandard = getCurrentStandardTier();

const OFFERS = [
  {
    id: "standard",
    label: "STANDARD",
    amount: currentStandard.amount,
    badge: currentStandard.shortLabel,
    features: [STANDARD_INCLUDES, "Accès général", "Place en zone commune"],
    featured: false,
    image: "/images/standard-ticket.jpg",
  },
  ...SALONS.map((s) => ({
    id: s.id,
    label: s.name.toUpperCase(),
    amount: s.amount,
    badge: "6 entrées",
    features: [s.includes, "1 billet, scannable 6 fois"],
    featured: s.id === "salon-3",
    image: s.image,
  })),
];

export default function TicketBooking() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | pending | confirming | done | error
  const [orderId, setOrderId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const tier = OFFERS.find((t) => t.id === selectedTier);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tier_id: tier.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setOrderId(data.id);
      setStatus("pending");
    } catch (err) {
      setErrorMsg("Une erreur est survenue. Réessaie.");
      setStatus("error");
    }
  }

  // TEMPORAIRE : simule la confirmation de paiement (en attendant CinetPay).
  // À supprimer une fois le vrai paiement branché — le paiement confirmera
  // automatiquement via un webhook côté serveur.
  async function handleTestConfirm() {
    setStatus("confirming");
    try {
      const res = await fetch("/api/orders/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setErrorMsg("Impossible de confirmer le paiement de test.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="tickets-grid tickets-grid-offers">
        {OFFERS.map((t) => (
          <div
            key={t.id}
            className={`ticket-card${t.featured ? " featured" : ""}`}
          >
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
            <button
              type="button"
              onClick={() => {
                setSelectedTier(t.id);
                setStatus("idle");
                setErrorMsg("");
              }}
              className={t.featured ? "btn-gold" : "btn-line"}
              style={
                t.featured
                  ? { textAlign: "center", background: "#733B1A", color: "#FFFFFF" }
                  : { textAlign: "center" }
              }
            >
              Réserver
            </button>
          </div>
        ))}
      </div>

      {tier && (
        <div
          style={{
            marginTop: 32,
            padding: 32,
            border: "1px solid rgba(115,59,26,0.12)",
            borderRadius: 18,
            maxWidth: 480,
          }}
        >
          {status !== "done" ? (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                Réservation — {tier.label} ({formatFCFA(tier.amount)})
              </span>
              <input
                required
                placeholder="Nom complet"
                value={form.full_name}
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
                style={inputStyle}
                disabled={status === "pending" || status === "confirming"}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                disabled={status === "pending" || status === "confirming"}
              />
              <input
                required
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                disabled={status === "pending" || status === "confirming"}
              />

              {status !== "pending" && status !== "confirming" && (
                <button type="submit" className="btn-gold" disabled={status === "submitting"}>
                  {status === "submitting" ? "Enregistrement…" : "Continuer"}
                </button>
              )}

              {status === "pending" && (
                <div
                  style={{
                    fontSize: 13.5,
                    color: "var(--ink-muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span>
                    Commande enregistrée. Le vrai paiement Wave / Orange Money
                    n&apos;est pas encore branché.
                  </span>
                  <button
                    type="button"
                    onClick={handleTestConfirm}
                    className="btn-line"
                    style={{ textAlign: "center" }}
                  >
                    (Test) Simuler le paiement et recevoir le billet
                  </button>
                </div>
              )}

              {status === "confirming" && <span>Envoi du billet…</span>}
              {status === "error" && (
                <span style={{ color: "#b42318", fontSize: 13.5 }}>
                  {errorMsg}
                </span>
              )}
            </form>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                Billet envoyé 🎉
              </span>
              <span style={{ fontSize: 14, color: "var(--ink-muted)" }}>
                Vérifie la boîte mail {form.email} (et les spams).
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(115,59,26,0.2)",
  fontSize: 14,
  fontFamily: "inherit",
};
