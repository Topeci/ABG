import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import SunMark from "../components/SunMark";

export const metadata = {
  title: "Programme — Indénié Brunch",
  description: "Le déroulé de l'Indénié Brunch, moment par moment.",
};

const STEPS = [
  {
    img: "/images/gallery/evt-04-groupe-amis-blanc.jpg",
    title: "Le Rassemblement",
    text: "Tout le monde converge vers Abengourou, habillé tout en blanc, valise de bonne humeur à la main.",
  },
  {
    img: "/images/gallery/evt-12-vue-tentes-foule.jpg",
    title: "L'Arrivée",
    text: "Un océan de blanc envahit le lieu en quelques minutes. L'ambiance monte, les retrouvailles commencent.",
  },
  {
    img: "/images/gallery/evt-14-dj-etincelles.jpg",
    title: "Le Cracker Show",
    text: "Le signal est donné : étincelles, cris de joie, tout le monde sait que la fête peut commencer.",
  },
  {
    img: "/images/gallery/evt-01-cigare-telephone.jpg",
    title: "Food & Chill",
    text: "On s'installe, on partage, on savoure — le brunch bat son plein entre amis et nouvelles rencontres.",
  },
  {
    img: "/images/gallery/evt-09-trio-hommes.jpg",
    title: "Orchestre Live",
    text: "Le son monte, les corps bougent. DJ et orchestre live prennent le relais jusqu'à la tombée de la nuit.",
  },
  {
    img: "/images/gallery/evt-06-duo-cheveux-rouges.jpg",
    title: "Au Revoir",
    text: "La soirée s'achève comme un rêve — il ne reste que les souvenirs, jusqu'à la prochaine édition.",
  },
];

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
