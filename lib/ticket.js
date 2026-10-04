import QRCode from "qrcode";
import { Resvg } from "@resvg/resvg-js";
import { imageSize } from "image-size";
import fs from "fs";
import path from "path";

// Reference layout, measured on the original 1199×388 export.
// Everything below is stored as a FRACTION of that reference, so the
// whole layout scales automatically if you swap in a higher-resolution
// version of the same design (same proportions).
const REF_WIDTH = 1199;
const REF_HEIGHT = 388;

const ZONE_X_FRAC = 4961 / 6250;
const PRICE_BOX_FRAC = { x: 3520 / 6250, y: 1370 / 2022, w: 1250 / 6250, h: 310 / 2022 };

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

// Splits a name onto at most 2 lines so it never overflows the white zone.
// Uses a rough average-glyph-width estimate (same spirit as the tier
// shrink-to-fit below) just to decide WHERE to break — the actual fit is
// then guaranteed per-line via textLength, so the estimate doesn't need
// to be exact.
function wrapNameLines(rawName, maxWidthPx, fontSizePx) {
  const name = rawName.trim().replace(/\s+/g, " ");
  const estWidth = (s) => s.length * fontSizePx * 0.56;

  if (estWidth(name) <= maxWidthPx) return [name];

  const words = name.split(" ");
  if (words.length === 1) return [name]; // single long word: can't break further

  let line1 = "";
  let i = 0;
  for (; i < words.length; i++) {
    const candidate = line1 ? `${line1} ${words[i]}` : words[i];
    if (!line1 || estWidth(candidate) <= maxWidthPx) {
      line1 = candidate;
    } else {
      break;
    }
  }
  const line2 = words.slice(i).join(" ");
  return line2 ? [line1, line2] : [line1];
}

export async function generateTicketImage(ticket) {
  const templatePath = path.join(process.cwd(), "assets", "ticket-template.png");
  const templateBuffer = fs.readFileSync(templatePath);
  const templateBase64 = templateBuffer.toString("base64");

  // Read the ACTUAL size of the template, whatever resolution it is.
  const { width: WIDTH, height: HEIGHT } = imageSize(templateBuffer);

  const ZONE_X = ZONE_X_FRAC * WIDTH;
  const ZONE_WIDTH = WIDTH - ZONE_X;
  const PRICE_BOX = {
    x: PRICE_BOX_FRAC.x * WIDTH,
    y: PRICE_BOX_FRAC.y * HEIGHT,
    w: PRICE_BOX_FRAC.w * WIDTH,
    h: PRICE_BOX_FRAC.h * HEIGHT,
  };
  // Scale factor vs. the reference, used to size text/QR proportionally.
  const scale = WIDTH / REF_WIDTH;

  const antonPath = path.join(process.cwd(), "assets", "fonts", "Anton-Regular.ttf");
  const workSansPath = path.join(process.cwd(), "assets", "fonts", "WorkSans-Bold.ttf");

  const qrDataUrl = await QRCode.toDataURL(ticket.qr_token, {
    width: Math.round(320 * scale),
    margin: 1,
    color: { dark: "#14110D", light: "#FFFFFFFF" },
  });

  const maxCheckins = ticket.max_checkins ?? 1;
  const tierSuffix = maxCheckins > 1 ? ` · ${maxCheckins} ENTRÉES` : "";
  const tier = escapeXml(ticket.tier.toUpperCase() + tierSuffix);
  const price = escapeXml(formatFCFA(ticket.amount));

  const zoneCenterX = ZONE_X + ZONE_WIDTH / 2;
  const maxPriceTextWidth = PRICE_BOX.w - 16 * scale;
  const maxNameTextWidth = ZONE_WIDTH - 24 * scale;
  const maxTierTextWidth = ZONE_WIDTH - 24 * scale;
  const qrSize = 176 * scale;

  // Client name — wrapped onto 2 lines when it's long, each line
  // individually shrunk-to-fit with textLength so it never overflows the
  // white zone regardless of how rough the wrap-point estimate was.
  const nameLines = wrapNameLines(ticket.full_name, maxNameTextWidth, 19 * scale);
  const nameFontSize = nameLines.length > 1 ? 17 * scale : 19 * scale;
  const nameLineHeight = 21 * scale;
  const nameBaseY = 240 * scale;
  const nameTextElements = nameLines
    .map((line, idx) => {
      const escaped = escapeXml(line);
      const estWidth = escaped.length * nameFontSize * 0.56;
      const lengthAttr =
        estWidth > maxNameTextWidth
          ? `textLength="${maxNameTextWidth}" lengthAdjust="spacingAndGlyphs"`
          : "";
      const y =
        nameLines.length > 1
          ? nameBaseY - nameLineHeight / 2 + idx * nameLineHeight
          : nameBaseY;
      return `<text x="${zoneCenterX}" y="${y}" font-family="Work Sans" font-size="${nameFontSize}"
    font-weight="700" fill="#14110D" text-anchor="middle" ${lengthAttr}>${escaped}</text>`;
    })
    .join("\n  ");

  // Shrink-to-fit for the tier line: estimate its natural width (rough
  // average glyph width for Anton with 1px letter-spacing) and only
  // compress it with textLength when it would overflow the zone — short
  // tier names (e.g. "STANDARD") stay at full size instead of being
  // artificially stretched.
  const tierFontSize = 20 * scale;
  const estimatedTierWidth = tier.length * tierFontSize * 0.62 + tier.length * 1;
  const tierTextLengthAttr =
    estimatedTierWidth > maxTierTextWidth
      ? `textLength="${maxTierTextWidth}" lengthAdjust="spacingAndGlyphs"`
      : "";

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <!-- Base ticket design (Canva template supplied by the client) -->
  <image x="0" y="0" width="${WIDTH}" height="${HEIGHT}" href="data:image/png;base64,${templateBase64}"/>

  <!-- Cover the static placeholder price with an opaque chip, same spot -->
  <rect x="${PRICE_BOX.x}" y="${PRICE_BOX.y}" width="${PRICE_BOX.w}" height="${PRICE_BOX.h}"
    rx="${8 * scale}" fill="#BF814B"/>
  <text x="${PRICE_BOX.x + PRICE_BOX.w / 2}" y="${PRICE_BOX.y + PRICE_BOX.h / 2 + 10 * scale}"
    font-family="Anton" font-size="${27 * scale}" textLength="${maxPriceTextWidth}" lengthAdjust="spacingAndGlyphs"
    fill="#FFFFFF" text-anchor="middle">${price}</text>

  <!-- QR code, centered in the white zone -->
  <image x="${zoneCenterX - qrSize / 2}" y="${34 * scale}" width="${qrSize}" height="${qrSize}"
    href="${qrDataUrl}"/>

  <!-- Client name, below the QR code (wraps to 2 lines when long) -->
  ${nameTextElements}

  <!-- One line at the bottom of the zone: the tier / formule -->
  <text x="${zoneCenterX}" y="${358 * scale}" font-family="Anton" font-size="${tierFontSize}"
    ${tierTextLengthAttr} fill="#14110D" text-anchor="middle" letter-spacing="1">${tier}</text>
</svg>`;

  const resvg = new Resvg(svg, {
    font: {
      fontFiles: [antonPath, workSansPath],
      loadSystemFonts: false,
      defaultFontFamily: "Work Sans",
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}
