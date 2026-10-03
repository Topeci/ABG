import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../../lib/supabase";

export async function POST(request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json(
        { status: "invalid", message: "Token manquant" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    const { data: ticket, error } = await supabase
      .from("tickets")
      .select("*")
      .eq("qr_token", token)
      .single();

    if (error || !ticket) {
      return NextResponse.json({ status: "invalid", message: "Billet inconnu" });
    }

    if (ticket.payment_status !== "paid") {
      return NextResponse.json({
        status: "unpaid",
        message: "Billet non payé",
        full_name: ticket.full_name,
      });
    }

    const maxCheckins = ticket.max_checkins ?? 1;
    const checkinCount = ticket.checkin_count ?? 0;

    if (checkinCount >= maxCheckins) {
      return NextResponse.json({
        status: "already_used",
        message:
          maxCheckins > 1
            ? "Toutes les entrées de ce billet ont déjà été utilisées"
            : "Billet déjà scanné",
        full_name: ticket.full_name,
        tier: ticket.tier,
        checkin_count: checkinCount,
        max_checkins: maxCheckins,
        checked_in_at: ticket.checked_in_at,
      });
    }

    const newCount = checkinCount + 1;

    const { error: updateError } = await supabase
      .from("tickets")
      .update({
        checkin_count: newCount,
        checked_in: newCount >= maxCheckins,
        checked_in_at: new Date().toISOString(),
      })
      .eq("id", ticket.id);

    if (updateError) throw updateError;

    return NextResponse.json({
      status: "valid",
      message:
        maxCheckins > 1
          ? `Accès autorisé — entrée ${newCount}/${maxCheckins}`
          : "Accès autorisé",
      full_name: ticket.full_name,
      tier: ticket.tier,
      checkin_count: newCount,
      max_checkins: maxCheckins,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "error", message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
