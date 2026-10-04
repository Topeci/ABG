"use client";

import { useState } from "react";

const SUBJECTS = [
  "Question générale",
  "Billetterie",
  "Partenariat / Presse",
  "Autre",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
      <div className="contact-form-card">
        <span style={{ fontWeight: 600, color: "var(--ink)" }}>
          Message envoyé 🎉
        </span>
        <p style={{ marginTop: 8, fontSize: 14, color: "var(--ink-muted)" }}>
          Merci {form.name.trim().split(" ")[0]}, on te répond au plus vite
          par email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-card">
      <input
        required
        placeholder="Nom complet"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={inputStyle}
        disabled={status === "submitting"}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={inputStyle}
        disabled={status === "submitting"}
      />
      <input
        placeholder="Téléphone (optionnel)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        style={inputStyle}
        disabled={status === "submitting"}
      />
      <select
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        style={inputStyle}
        disabled={status === "submitting"}
      >
        {SUBJECTS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <textarea
        required
        placeholder="Ton message"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
        disabled={status === "submitting"}
      />

      <button type="submit" className="btn-gold" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi…" : "Envoyer"}
      </button>

      {status === "error" && (
        <span style={{ color: "#b42318", fontSize: 13.5 }}>
          Une erreur est survenue. Réessaie, ou écris-nous directement sur
          WhatsApp ci-dessous.
        </span>
      )}
    </form>
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(115,59,26,0.2)",
  fontSize: 14,
  fontFamily: "inherit",
};
