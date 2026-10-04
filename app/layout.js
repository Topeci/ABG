import { Work_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../lib/cart-context";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Indénié Brunch — Abengourou",
  description:
    "Le brunch en blanc de la jeunesse de l'Indénié à Abengourou, Côte d'Ivoire. Édition 6 le 19 décembre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={workSans.variable}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
