import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import SunMark from "../components/SunMark";
import { STEPS } from "../../lib/programme";

export const metadata = {
  title: "Programme — Indénié Brunch",
  description: "Le déroulé de l'Indénié Brunch, moment par moment.",
};

export default function ProgrammePage() {
  return (
    <main>
      <NavBar />

      <section className="section" style={{ background: "#FBF8F2", paddingTop: 90 }}>
        <div className="section-mark">
          <SunMark />
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: 34,
            textTransform: "uppercase",
            margin: "24px 0 56px",
            color: "var(--ink)",
          }}
        >
          Moment par moment
        </h2>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.title} className="step-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} className="step-circle" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
