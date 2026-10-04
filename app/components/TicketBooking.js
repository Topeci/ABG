"use client";

import { useMemo, useState } from "react";
import {
  getCurrentStandardTier,
  SALONS,
  STANDARD_INCLUDES,
} from "../../lib/pricing";
import { useCart } from "../../lib/cart-context";

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

const MAX_QTY_PER_OFFER = 10;

export default function TicketBooking() {
  const { cart, addToCart: addToSharedCart, changeQty: changeSharedQty, removeFromCart: removeFromSharedCart, clearCart } = useCart();
  const [form, setForm] = useState({ full_name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | pending | confirming | done | error
  const [orderIds, setOrderIds] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const locked = status === "pending" || status === "confirming" || status === "done";

  const cartItems = useMemo(
    () =>
      OFFERS.filter((o) => cart[o.id] > 0).map((o) => ({
        ...o,
        qty: cart[o.id],
      })),
    [cart]
  );
  const totalQty = cartItems.reduce((n, i) => n + i.qty, 0);
  const totalAmount = cartItems.reduce((n, i) => n + i.qty * i.amount, 0);

  function addToCart(id) {
    if (locked) return;
    addToSharedCart(id, MAX_QTY_PER_OFFER);
  }

  function changeQty(id, delta) {
    if (locked) return;
    changeSharedQty(id, delta, MAX_QTY_PER_OFFER);
  }

  function removeFromCart(id) {
    if (locked) return;
    removeFromSharedCart(id);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: cartItems.map((i) => ({ tier_id: i.id, qty: i.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setOrderIds(data.ids);
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
        body: JSON.stringify({ ids: orderIds }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      clearCart();
    } catch {
      setErrorMsg("Impossible de confirmer le paiement de test.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="tickets-grid tickets-grid-offers">
        {OFFERS.map((t) => {
          const qty = cart[t.id] || 0;
          return (
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

              {qty === 0 ? (
                <button
                  type="button"
                  onClick={() => addToCart(t.id)}
                  disabled={locked}
                  className={t.featured ? "btn-gold" : "btn-line"}
                  style={
                    t.featured
                      ? { textAlign: "center", background: "#733B1A", color: "#FFFFFF" }
                      : { textAlign: "center" }
                  }
                >
                  Ajouter au panier
                </button>
              ) : (
                <div className="cart-stepper cart-stepper-card">
                  <button
                    type="button"
                    onClick={() => changeQty(t.id, -1)}
                    disabled={locked}
                    aria-label="Retirer une unité"
                  >
                    −
                  </button>
                  <span>{qty} au panier</span>
                  <button
                    type="button"
                    onClick={() => changeQty(t.id, 1)}
                    disabled={locked || qty >= MAX_QTY_PER_OFFER}
                    aria-label="Ajouter une unité"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-panel">
          <div className="cart-panel-header">
            <span className="eyebrow-label">
              PANIER — {totalQty} billet{totalQty > 1 ? "s" : ""}
            </span>
          </div>

          <div className="cart-lines">
            {cartItems.map((i) => (
              <div key={i.id} className="cart-line">
                <div className="cart-line-info">
                  <span className="cart-line-label">{i.label}</span>
                  <span className="cart-line-unit">
                    {formatFCFA(i.amount)} / unité
                  </span>
                </div>
                <div className="cart-stepper">
                  <button
                    type="button"
                    onClick={() => changeQty(i.id, -1)}
                    disabled={locked}
                    aria-label="Retirer une unité"
                  >
                    −
                  </button>
                  <span>{i.qty}</span>
                  <button
                    type="button"
                    onClick={() => changeQty(i.id, 1)}
                    disabled={locked || i.qty >= MAX_QTY_PER_OFFER}
                    aria-label="Ajouter une unité"
                  >
                    +
                  </button>
                </div>
                <span className="cart-line-total">
                  {formatFCFA(i.qty * i.amount)}
                </span>
                {!locked && (
                  <button
                    type="button"
                    onClick={() => removeFromCart(i.id)}
                    className="cart-line-remove"
                    aria-label="Supprimer cette ligne"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="cart-total-row">
            <span>Total</span>
            <span className="cart-total-amount">{formatFCFA(totalAmount)}</span>
          </div>

          {status !== "done" ? (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 20 }}
            >
              <input
                required
                placeholder="Nom complet"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                style={inputStyle}
                disabled={locked}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                disabled={locked}
              />
              <input
                required
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                disabled={locked}
              />

              {status !== "pending" && status !== "confirming" && (
                <button type="submit" className="btn-gold" disabled={status === "submitting"}>
                  {status === "submitting" ? "Enregistrement…" : "Commander"}
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
                    (Test) Simuler le paiement et recevoir {totalQty > 1 ? "les billets" : "le billet"}
                  </button>
                </div>
              )}

              {status === "confirming" && (
                <span>{totalQty > 1 ? "Envoi des billets…" : "Envoi du billet…"}</span>
              )}
              {status === "error" && (
                <span style={{ color: "#b42318", fontSize: 13.5 }}>
                  {errorMsg}
                </span>
              )}
            </form>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
              <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                {totalQty > 1 ? "Billets envoyés 🎉" : "Billet envoyé 🎉"}
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
