import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../lib/supabase";
import { resolveTier } from "../../../lib/pricing";

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, tier_id } = body;

    if (!full_name || !email || !phone || !tier_id) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    // Le prix et le nombre d'entrées ne sont jamais pris depuis le client :
    // on les recalcule ici, côté serveur, à partir de l'identifiant de formule.
    const tier = resolveTier(tier_id);
    if (!tier) {
      return NextResponse.json(
        { error: "Formule inconnue" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    const { data, error } = await supabase
      .from("tickets")
      .insert({
        full_name,
        email,
        phone,
        tier: tier.label,
        amount: tier.amount,
        max_checkins: tier.maxCheckins,
        checkin_count: 0,
        payment_status: "pending",
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ id: data.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible de créer la commande" },
      { status: 500 }
    );
  }
}
