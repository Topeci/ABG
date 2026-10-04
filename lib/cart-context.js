"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "indenie-brunch-cart";

// Panier partagé entre toutes les pages (billetterie, édition 5, nav...),
// avec persistance dans le navigateur pour qu'il survive à une navigation
// ou un rechargement de page.
export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {
      // stockage indisponible (navigation privée, etc.) — on continue avec un panier vide
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart, hydrated]);

  const totalQty = useMemo(
    () => Object.values(cart).reduce((n, q) => n + q, 0),
    [cart]
  );

  function addToCart(id, max = 10) {
    setCart((c) => ({ ...c, [id]: Math.min((c[id] || 0) + 1, max) }));
  }

  function changeQty(id, delta, max = 10) {
    setCart((c) => {
      const next = Math.max(0, Math.min((c[id] || 0) + delta, max));
      const copy = { ...c };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  }

  function removeFromCart(id) {
    setCart((c) => {
      const copy = { ...c };
      delete copy[id];
      return copy;
    });
  }

  function clearCart() {
    setCart({});
  }

  return (
    <CartContext.Provider
      value={{ cart, totalQty, addToCart, changeQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un <CartProvider>");
  return ctx;
}
