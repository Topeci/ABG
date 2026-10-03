"use client";

import { useEffect, useRef, useState } from "react";

// Mot de passe simple pour protéger l'accès au scan le jour J.
// TODO: change-le avant l'événement (et partage-le uniquement à l'équipe à l'entrée).
const SCAN_PASSWORD = "indenie2026";

export default function ScanPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [result, setResult] = useState(null); // { status, message, full_name }
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);
  const lockRef = useRef(false); // avoid double-scans while a request is in flight

  useEffect(() => {
    if (!unlocked) return;

    let html5QrCode;
    let cancelled = false;

    import("html5-qrcode").then(({ Html5Qrcode }) => {
      if (cancelled) return;
      html5QrCode = new Html5Qrcode("qr-reader");
      scannerRef.current = html5QrCode;

      html5QrCode
        .start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 260 },
          (decodedText) => onScan(decodedText)
        )
        .then(() => setScanning(true))
        .catch((err) => {
          console.error(err);
          setResult({
            status: "error",
            message: "Impossible d'accéder à la caméra.",
          });
        });
    });

    return () => {
      cancelled = true;
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [unlocked]);

  async function onScan(token) {
    if (lockRef.current) return;
    lockRef.current = true;
    try {
      const res = await fetch("/api/tickets/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ status: "error", message: "Erreur réseau" });
    }
    setTimeout(() => {
      lockRef.current = false;
    }, 2500);
  }

  if (!unlocked) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110D",
          padding: 24,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (passwordInput === SCAN_PASSWORD) setUnlocked(true);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: "100%",
            maxWidth: 320,
          }}
        >
          <span style={{ color: "#FAF6EE", fontFamily: "Georgia, serif", fontSize: 22 }}>
            Scan — Indénié Brunch
          </span>
          <input
            type="password"
            placeholder="Mot de passe"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.06)",
              color: "#FAF6EE",
              fontSize: 15,
            }}
          />
          <button
            type="submit"
            style={{
              padding: "14px 16px",
              borderRadius: 999,
              border: "none",
              background: "#C9A227",
              color: "#14110D",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Entrer
          </button>
        </form>
      </main>
    );
  }

  const colors = {
    valid: "#1a7f37",
    already_used: "#b45309",
    unpaid: "#b42318",
    invalid: "#b42318",
    error: "#b42318",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#14110D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px",
        gap: 20,
      }}
    >
      <span style={{ color: "#FAF6EE", fontFamily: "Georgia, serif", fontSize: 20 }}>
        Scanner un billet
      </span>

      <div
        id="qr-reader"
        style={{
          width: "100%",
          maxWidth: 360,
          borderRadius: 16,
          overflow: "hidden",
        }}
      />

      {!scanning && (
        <span style={{ color: "#B7AF9E", fontSize: 13 }}>
          Ouverture de la caméra…
        </span>
      )}

      {result && (
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            padding: 20,
            borderRadius: 14,
            background: colors[result.status] || "#333",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            {result.status === "valid" && "✓ Accès autorisé"}
            {result.status === "already_used" && "⚠ Déjà scanné"}
            {result.status === "unpaid" && "✗ Non payé"}
            {result.status === "invalid" && "✗ Billet invalide"}
            {result.status === "error" && "✗ Erreur"}
          </div>
          {result.full_name && (
            <div style={{ marginTop: 6, fontSize: 15 }}>{result.full_name}</div>
          )}
          {result.tier && <div style={{ fontSize: 13, opacity: 0.85 }}>{result.tier}</div>}
          {result.max_checkins > 1 && (
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.9 }}>
              Entrée {result.checkin_count}/{result.max_checkins}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
