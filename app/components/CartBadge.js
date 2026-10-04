"use client";

import Link from "next/link";
import { useCart } from "../../lib/cart-context";

export default function CartBadge() {
  const { totalQty } = useCart();

  return (
    <Link href="/panier" className="nav-cart" aria-label="Voir mon panier">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="21" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="19" cy="21" r="1.4" fill="currentColor" stroke="none" />
        <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21.5 7H6" />
      </svg>
      {totalQty > 0 && <span className="nav-cart-badge">{totalQty}</span>}
    </Link>
  );
}
