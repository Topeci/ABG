import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import SunMark from "../components/SunMark";
import PartnerForm from "../components/PartnerForm";

export const metadata = {
  title: "Partenaire — Indénié Brunch",
  description: "Devenez partenaire de l'Indénié Brunch à Abengourou.",
};

const PARTNERS = [
  { name: "Hennessy Prestige" },
  { name: "Global Fine Wines and Champagnes", img: "/images/gallery/partner-global-wines.jpg" },
  { name: "Location de Mobilier Haut Standing", img: "/images/gallery/partner-lm-mobilier.jpg" },
  { name: "Topeci", img: "/images/gallery/partner-topeci.jpg" },
];

export default function PartenairePage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-mark">
          <SunMark />
        </div>
        <div className="section-heading">
          <span className="eyebrow-label">PARTENAIRE</span>
          <h2>Ils soutiennent l&apos;Indénié Brunch</h2>
        </div>

        <div className="partners-grid">
          {PARTNERS.map((p) =>
            p.img ? (
              <div key={p.name} className="partner-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} />
              </div>
            ) : (
              <div key={p.name} className="partner-logo partner-logo-text">
                {p.name}
              </div>
            )
          )}
        </div>

        <PartnerForm />
      </section>

      <SiteFooter />
    </main>
  );
}
