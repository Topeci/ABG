import { Resend } from "resend";
import { generateTicketImage } from "./ticket";

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

// Notifie l'équipe (par email) d'une nouvelle demande de partenariat /
// contenu reçue via le formulaire de la section "Partenaire". La demande
// est de toute façon déjà enregistrée en base avant cet envoi.
export async function sendPartnerNotification({ name, email, phone, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress = process.env.EMAIL_FROM || "onboarding@resend.dev";
  const notifyTo = process.env.PARTNER_NOTIFY_EMAIL || process.env.EMAIL_FROM;

  if (!notifyTo) return; // pas d'adresse configurée, on s'arrête là

  await resend.emails.send({
    from: `Indénié Brunch — Site <${fromAddress}>`,
    to: notifyTo,
    subject: `Nouvelle demande partenaire — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1A1712;">
        <p><strong>Nom / Marque :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "—"}</p>
        <p><strong>Message :</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `,
  });
}

export async function sendTicketEmail(ticket) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const ticketBuffer = await generateTicketImage(ticket);

  const fromAddress = process.env.EMAIL_FROM || "onboarding@resend.dev";
  const firstName = ticket.full_name.trim().split(" ")[0];

  await resend.emails.send({
    from: `Indénié Brunch <${fromAddress}>`,
    to: ticket.email,
    subject: "Ton billet — Indénié Brunch, Édition festival",
    attachments: [
      { filename: "billet-indenie-brunch.png", content: ticketBuffer },
    ],
    html: `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #733B1A;">

  <!-- Header -->
  <div style="padding: 32px 40px 20px; display: flex; align-items: center; justify-content: space-between;">
    <div style="font-family: Georgia, serif; font-weight: bold; font-size: 20px; letter-spacing: 1px; color: #733B1A;">
      INDÉNIÉ BRUNCH
    </div>
    <div style="text-align: right; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px; letter-spacing: 1.5px; color: #7A6F5C; line-height: 1.6;">
      ABENGOUROU<br/>19 DÉCEMBRE 2026
    </div>
  </div>
  <div style="padding: 0 40px;">
    <div style="border-top: 1px solid #E4D9BF;"></div>
    <p style="text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px; letter-spacing: 2.5px; color: #BF814B; margin: 14px 0 20px;">
      ÉDITION FESTIVAL &nbsp;·&nbsp; DRESS CODE BLANC
    </p>
  </div>

  <!-- Body -->
  <div style="padding: 20px 40px 40px;">
    <p style="font-family: Georgia, serif; font-style: italic; font-size: 34px; color: #733B1A; margin: 0 0 4px;">
      Merci
    </p>
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; color: #8C6A4A; margin: 0 0 28px;">
      pour ta confiance
    </p>

    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14.5px; line-height: 1.7; color: #733B1A; margin: 0 0 18px;">
      Bonjour ${firstName},
    </p>
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14.5px; line-height: 1.7; color: #733B1A; margin: 0 0 24px;">
      Nous avons le plaisir de te confirmer ta participation à la prochaine
      édition de l'Indénié Brunch, qui se tiendra le :
    </p>

    <table role="presentation" width="100%" style="margin-bottom: 24px;">
      <tr>
        <td style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #733B1A; padding-right: 16px; vertical-align: top;">
          <strong style="letter-spacing: 0.5px;">SAMEDI 19 DÉCEMBRE 2026</strong><br/>
          <span style="color: #7A6F5C;">À partir de 18h</span>
        </td>
        <td style="width: 1px; background: #E4D9BF;"></td>
        <td style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #733B1A; padding-left: 16px; vertical-align: top;">
          <strong style="letter-spacing: 0.5px;">ABENGOUROU</strong><br/>
          <span style="color: #7A6F5C;">Côte d'Ivoire</span>
        </td>
      </tr>
    </table>

    <div style="background: #FAF6EE; padding: 14px 18px; margin-bottom: 26px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #733B1A;">
      Formule : <strong>${ticket.tier}</strong> · ${formatFCFA(ticket.amount)}
      ${ticket.max_checkins > 1 ? `<br/><span style="color: #7A6F5C; font-size: 12.5px;">Billet salon valable pour ${ticket.max_checkins} entrées — un seul QR code, à présenter à chaque entrée/consommation.</span>` : ""}
    </div>

    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14.5px; line-height: 1.7; color: #733B1A; margin: 0 0 18px;">
      Ton billet est disponible en pièce jointe. Tu pourras le présenter
      directement depuis ton téléphone ou en version imprimée le jour de
      l'événement — le QR code est unique et ne fonctionne qu'une seule fois.
    </p>
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14.5px; line-height: 1.7; color: #733B1A; margin: 0 0 30px;">
      Nous avons hâte de t'accueillir pour cette après-midi placée sous le
      signe du partage, de la musique et de l'élégance.
    </p>

    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14.5px; color: #733B1A; margin: 0 0 24px;">
      À très bientôt,
    </p>

    <p style="font-family: Georgia, serif; font-style: italic; font-size: 22px; color: #733B1A; margin: 0 0 2px;">
      L'équipe Indénié Brunch
    </p>
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px; letter-spacing: 1.5px; color: #7A6F5C; margin: 0;">
      ORGANISATION
    </p>
  </div>

  <!-- Footer -->
  <div style="border-top: 1px solid #E4D9BF; padding: 20px 40px; text-align: center;">
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px; letter-spacing: 1.5px; color: #9a9083; margin: 0 0 6px;">
      ABENGOUROU &nbsp;·&nbsp; ÉDITION FESTIVAL 2026
    </p>
    <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; color: #7A6F5C; margin: 0;">
      Infoline : 07 47 75 02 73 · +33 7 49 04 57 58 (WhatsApp)
    </p>
  </div>
</div>
    `,
  });
}
