"use client";

import { useCart } from "../../lib/cart-context";
import { OFFERS, MAX_QTY_PER_OFFER, formatFCFA } from "../../lib/offers";
import CartPanel from "./CartPanel";

export default function TicketBooking() {
  const { cart, addToCart: addToSharedCart, changeQty: changeSharedQty } = useCart();

  function addToCart(id) {
    addToSharedCart(id, MAX_QTY_PER_OFFER);
  }

  function changeQty(id, delta) {
    changeSharedQty(id, delta, MAX_QTY_PER_OFFER);
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
                    aria-label="Retirer une unité"
                  >
                    −
                  </button>
                  <span>{qty} au panier</span>
                  <button
                    type="button"
                    onClick={() => changeQty(t.id, 1)}
                    disabled={qty >= MAX_QTY_PER_OFFER}
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

      <CartPanel />
    </>
  );
}
