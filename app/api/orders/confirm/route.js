import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../../lib/supabase";
import { sendTicketEmail } from "../../../../lib/email";

// ⚠️ TEMPORAIRE — ce endpoint simule un paiement réussi pour tester le
// flux de bout en bout (commande → email → QR code) avant que CinetPay
// soit branché. Une fois CinetPay configuré, ce fichier sera remplacé par
// un vrai webhook qui reçoit la confirmation de paiement de CinetPay.
// Accepte un ou plusieurs billets (panier) : { ids: [...] }.
export async function POST(request) {
  try {
    const body = await request.json();
    const ids = Array.isArray(body.ids)
      ? body.ids
      : body.id
      ? [body.id]
      : [];
    if (ids.length === 0) {
      return NextResponse.json({ error: "id manquant" }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();

    const { data: tickets, error: fetchError } = await supabase
      .from("tickets")
      .select("*")
      .in("id", ids);

    if (fetchError || !tickets || tickets.length === 0) {
      return NextResponse.json(
        { error: "Billet introuvable" },
        { status: 404 }
      );
    }

    const { error: updateError } = await supabase
      .from("tickets")
      .update({ payment_status: "paid", payment_ref: "TEST-MANUAL" })
      .in("id", ids);

    if (updateError) throw updateError;

    // Un seul email, avec tous les billets du panier en pièces jointes.
    await sendTicketEmail(tickets);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erreur lors de la confirmation" },
      { status: 500 }
    );
  }
}
