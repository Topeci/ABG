import { Poppins } from "next/font/google";
import "./globals.css";
import Splash from "./components/Splash";
import { CartProvider } from "../lib/cart-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://www.indeniebrunch.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Indénié Brunch — Abengourou",
    description:
      "Le brunch en blanc de la jeunesse de l'Indénié à Abengourou. Édition 5 le 19 décembre 2026.",
    url: "https://www.indeniebrunch.com",
    siteName: "Indénié Brunch",
    images: ["/images/hero-foule.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  title: "Indénié Brunch — Abengourou",
  description:
    "Le brunch en blanc de la jeunesse de l'Indénié à Abengourou, Côte d'Ivoire. Édition 5 le 19 décembre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <Splash />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
