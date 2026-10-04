import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import DrumMark from "../components/DrumMark";
import PartnerForm from "../components/PartnerForm";
import { PARTNERS } from "../../lib/partners";

export const metadata = {
  title: "Partenaire — Indénié Brunch",
  description: "Devenez partenaire de l'Indénié Brunch à Abengourou.",
};

export default function PartenairePage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-mark">
          <DrumMark />
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
