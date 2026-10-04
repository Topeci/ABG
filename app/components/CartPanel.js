"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "../../lib/cart-context";
import { OFFERS, MAX_QTY_PER_OFFER, formatFCFA } from "../../lib/offers";

// Panier + formulaire de commande, partagé entre /billetterie, /edition-5 et /panier.
export default function CartPanel({ showEmptyState = false }) {
  const { cart, changeQty: changeSharedQty, removeFromCart: removeFromSharedCart, clearCart } = useCart();
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

  if (cartItems.length === 0) {
    if (!showEmptyState) return null;
    return (
      <div className="cart-panel cart-panel-empty">
        <span className="eyebrow-label">PANIER</span>
        <p style={{ margin: "14px 0 20px", color: "var(--ink-muted)", fontSize: 15 }}>
          Ton panier est vide pour le moment.
        </p>
        <Link href="/billetterie" className="btn-gold" style={{ textAlign: "center", display: "inline-block" }}>
          Voir les billets disponibles
        </Link>
      </div>
    );
  }

  return (
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
              <span className="cart-line-unit">{formatFCFA(i.amount)} / unité</span>
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
            <span className="cart-line-total">{formatFCFA(i.qty * i.amount)}</span>
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
            <span style={{ color: "#b42318", fontSize: 13.5 }}>{errorMsg}</span>
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
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(115,59,26,0.2)",
  fontSize: 14,
  fontFamily: "inherit",
};
