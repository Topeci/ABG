"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="partner-form-wrap">
        <div className="partner-form-done">
          Merci ! Ta demande a bien été envoyée, on revient vers toi rapidement.
        </div>
      </div>
    );
  }

  return (
    <div className="partner-form-wrap">
      <h3>Devenir partenaire ou partager du contenu</h3>
      <p>
        Marque intéressée pour sponsoriser une prochaine édition, ou tu as des
        photos/vidéos de l&apos;événement à nous transmettre ? Écris-nous.
      </p>
      <form onSubmit={handleSubmit} className="partner-form">
        <input
          required
          placeholder="Nom / Marque"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          disabled={status === "submitting"}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          disabled={status === "submitting"}
        />
        <input
          placeholder="Téléphone (optionnel)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          disabled={status === "submitting"}
        />
        <textarea
          required
          placeholder="Ton message (partenariat, contenu à partager, lien vers tes photos/vidéos...)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          disabled={status === "submitting"}
          rows={4}
        />
        <button type="submit" className="btn-gold" disabled={status === "submitting"}>
          {status === "submitting" ? "Envoi…" : "Envoyer"}
        </button>
        {status === "error" && (
          <span style={{ color: "#b42318", fontSize: 13.5 }}>
            Une erreur est survenue. Réessaie.
          </span>
        )}
      </form>
    </div>
  );
}
