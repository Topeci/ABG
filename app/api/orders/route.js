import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../lib/supabase";
import { resolveTier } from "../../../lib/pricing";

const MAX_QTY_PER_ITEM = 10;
const MAX_ITEMS = 20;

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, items } = body;

    if (
      !full_name ||
      !email ||
      !phone ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }
    if (items.length > MAX_ITEMS) {
      return NextResponse.json(
        { error: "Panier trop volumineux" },
        { status: 400 }
      );
    }

    // Le prix, le libellé et le nombre d'entrées ne sont jamais pris depuis
    // le client : pour chaque ligne du panier, on recalcule ici la formule
    // côté serveur, à partir du seul identifiant envoyé. Chaque unité de
    // quantité devient sa propre ligne "tickets" (donc son propre QR code).
    const rows = [];
    for (const item of items) {
      const qty = Math.floor(Number(item?.qty));
      if (!qty || qty < 1 || qty > MAX_QTY_PER_ITEM) {
        return NextResponse.json(
          { error: "Quantité invalide" },
          { status: 400 }
        );
      }
      const tier = resolveTier(item?.tier_id);
      if (!tier) {
        return NextResponse.json(
          { error: "Formule inconnue" },
          { status: 400 }
        );
      }
      for (let i = 0; i < qty; i++) {
        rows.push({
          full_name,
          email,
          phone,
          tier: tier.label,
          amount: tier.amount,
          max_checkins: tier.maxCheckins,
          checkin_count: 0,
          payment_status: "pending",
        });
      }
    }

    const supabase = getSupabaseServerClient();

    const { data, error } = await supabase
      .from("tickets")
      .insert(rows)
      .select("id");

    if (error) throw error;

    return NextResponse.json({ ids: data.map((r) => r.id) });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible de créer la commande" },
      { status: 500 }
    );
  }
}
