import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Indénié Brunch — Abengourou",
  description:
    "Le brunch en blanc de la jeunesse de l'Indénié à Abengourou, Côte d'Ivoire. Édition 6 le 19 décembre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
