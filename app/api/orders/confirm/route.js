import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../../lib/supabase";
import { sendTicketEmail } from "../../../../lib/email";

// ⚠️ TEMPORAIRE — ce endpoint simule un paiement réussi pour tester le
// flux de bout en bout (commande → email → QR code) avant que CinetPay
// soit branché. Une fois CinetPay configuré, ce fichier sera remplacé par
// un vrai webhook qui reçoit la confirmation de paiement de CinetPay.
export async function POST(request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "id manquant" }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();

    const { data: ticket, error: fetchError } = await supabase
      .from("tickets")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !ticket) {
      return NextResponse.json(
        { error: "Billet introuvable" },
        { status: 404 }
      );
    }

    const { error: updateError } = await supabase
      .from("tickets")
      .update({ payment_status: "paid", payment_ref: "TEST-MANUAL" })
      .eq("id", id);

    if (updateError) throw updateError;

    await sendTicketEmail(ticket);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erreur lors de la confirmation" },
      { status: 500 }
    );
  }
}
