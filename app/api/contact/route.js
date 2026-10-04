import { NextResponse } from "next/server";
import { sendContactMessage } from "../../../lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    await sendContactMessage({ name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message" },
      { status: 500 }
    );
  }
}
