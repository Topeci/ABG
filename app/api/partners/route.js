import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "../../../lib/supabase";
import { sendPartnerNotification } from "../../../lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("partner_requests").insert({
      name,
      email,
      phone: phone || null,
      message,
    });

    if (error) throw error;

    // Best-effort : si l'email de notification échoue, la demande reste
    // quand même enregistrée en base (consultable plus tard dans Supabase).
    try {
      await sendPartnerNotification({ name, email, phone, message });
    } catch (emailErr) {
      console.error("Notification email failed:", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible d'envoyer la demande" },
      { status: 500 }
    );
  }
}
