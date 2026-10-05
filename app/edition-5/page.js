import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import TicketBooking from "../components/TicketBooking";
import Countdown from "../components/Countdown";

export const metadata = {
  title: "Édition 5 — Festival — Indénié Brunch",
  description:
    "Tout savoir sur la nouvelle édition de l'Indénié Brunch, édition festival, le 19 décembre 2026 à Abengourou.",
};


const CHAPTERS = [
  {
    n: "01",
    eyebrow: "L'ÉLÉGANCE",
    title: "Le blanc, rien que le blanc.",
    text: [
      "Une seule règle, et elle change tout : le blanc. Lin fluide, chemise ouverte, robe légère — le blanc ne cache rien, il révèle l'allure, le sourire, la présence.",
      "Ici, chaque invité devient sa propre mise en scène. Viens avec ton style, repars avec tes plus belles photos.",
    ],
    img: "couple",
    alt: "Un couple tout en blanc, Indénié Brunch Édition festival",
  },
  {
    n: "02",
    eyebrow: "LES RETROUVAILLES",
    title: "On vient pour la fête, on reste pour eux.",
    text: [
      "Les accolades qui durent, les fous rires qui partent tout seuls, la photo qu'on gardera longtemps. L'Indénié Brunch, c'est d'abord le plaisir d'être ensemble, entouré de ceux qui comptent.",
      "Prends ta bande, ramène les cousins, invite ceux qui ne sont jamais venus : le plus beau décor, c'est eux.",
    ],
    img: "trio",
    alt: "Trois amis souriants lors de l'Indénié Brunch",
    reverse: true,
  },
  {
    n: "03",
    eyebrow: "LA COMMUNAUTÉ",
    title: "Une jeunesse qui rayonne.",
    text: [
      "Des amis de toujours et des rencontres de l'après-midi : la jeunesse de l'Indénié se retrouve, s'habille de blanc et prend toute la lumière.",
      "Chaque édition grandit grâce à ceux qui la vivent. Cette année, on change d'échelle — place au festival.",
    ],
    img: "groupe",
    alt: "Groupe d'invités en tenue blanche, Indénié Brunch",
  },
];

const CHAPTERS_2 = [
  {
    n: "05",
    eyebrow: "LE STYLE",
    title: "Le détail qui fait la signature.",
    text: [
      "Une coiffure audacieuse, un bijou qui capte la lumière, un sourire qui fait tout : le style est un langage, et l'Indénié Brunch lui offre le plus bel écrin.",
      "Ose la couleur, la coupe, l'accessoire. Le blanc est ta toile, à toi de signer.",
    ],
    img: "solo",
    alt: "Invitée à la chevelure cuivrée, Indénié Brunch Édition festival",
    reverse: true,
  },
  {
    n: "06",
    eyebrow: "LA COMPLICITÉ",
    title: "Les meilleurs moments ne se posent pas.",
    text: [
      "Entre deux musiques, deux verres et deux éclats de rire, les plus belles images arrivent sans prévenir. Une lumière dorée, une amie, un regard — et l'instant est déjà un souvenir.",
      "On ne vient pas seulement voir l'Indénié Brunch : on y laisse une trace.",
    ],
    img: "duo",
    alt: "Deux amies complices en robe blanche, Indénié Brunch",
  },
  {
    n: "07",
    eyebrow: "L'ART DE RECEVOIR",
    title: "Quand la fête se vit en salon.",
    text: [
      "Une table dressée de blanc, des bouteilles qui s'ouvrent à l'heure juste, un espace rien que pour vous et vos invités : l'expérience premium de l'édition.",
      "Les salons Niablé, Zaranou et San Kadiokro sont pensés pour ceux qui aiment célébrer en grand. Les places sont limitées — réservez avant les autres.",
    ],
    img: "table",
    alt: "Table dressée en blanc avec seau à champagne, Indénié Brunch",
    reverse: true,
    cta: true,
  },
];

function Chapter({ c }) {
  return (
    <article className={`e5-chapter${c.reverse ? " reverse" : ""}`}>
      <figure className="e5-chapter-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/edition-5/${c.img}.jpg`} alt={c.alt} loading="lazy" />
      </figure>
      <div className="e5-chapter-text">
        <span className="e5-chapter-num">{c.n}</span>
        <span className="eyebrow-label">{c.eyebrow}</span>
        <h3>{c.title}</h3>
        {c.text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
        {c.cta && (
          <a className="e5-cta" href="#billetterie">
            Réserver mon salon
          </a>
        )}
      </div>
    </article>
  );
}

export default function Edition5Page() {
  return (
    <main className="edition5-page">
      <div className="e5-deco" aria-hidden="true">
        {/* voile de lumière floue (blanc chaud / gris très clair) */}
        <span className="e5-glow" style={{ width: 620, height: 620, top: "14%", left: -260, background: "rgba(190,178,160,0.5)" }} />
        <span className="e5-glow" style={{ width: 460, height: 460, top: "2%", right: -160, background: "rgba(180,188,176,0.55)" }} />
        <span className="e5-glow" style={{ width: 560, height: 560, bottom: "3%", right: -220, background: "rgba(190,178,160,0.5)" }} />
        {/* bokeh : petits disques lumineux flous */}
        {[[1,26,52],[4,31,34],[2,38,66],[6,45,40],[3,52,28],[5,59,46],[92,10,44],[95,17,30],[89,23,58],[94,64,50],[90,72,34],[96,79,62],[88,86,40]].map(([l,t,d],i)=>(
          <span key={"b"+i} className="e5-bokeh" style={{ left: l+"%", top: t+"%", width: d, height: d, animationDelay: (i%5)*0.7+"s" }} />
        ))}
        {/* palmes : seulement quelques feuilles qui dépassent des bords */}
        <img className="e5-frond" src="/images/decor/palm-frond.svg" alt="" style={{ width: "min(46vw, 660px)", top: -40, right: -170, transform: "scaleX(-1) rotate(30deg)", filter: "blur(1.2px)" }} />
        <img className="e5-frond" src="/images/decor/palm-frond.svg" alt="" style={{ width: "min(34vw, 480px)", top: "33%", left: -250, transform: "rotate(-14deg)", filter: "blur(2px)", opacity: 0.95 }} />
        <img className="e5-frond" src="/images/decor/palm-frond.svg" alt="" style={{ width: "min(38vw, 540px)", bottom: -90, right: -190, transform: "scaleX(-1) rotate(206deg)", filter: "blur(1px)" }} />
        <img className="e5-frond" src="/images/decor/palm-frond.svg" alt="" style={{ width: "min(26vw, 380px)", bottom: -30, left: -170, transform: "rotate(-58deg)", filter: "blur(6px)", opacity: 0.75 }} />
      </div>
      <NavBar />

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="section-heading">
          <span className="eyebrow-label">NOUVELLE ÉDITION</span>
          <h2>Édition 5 — Festival</h2>
          <p style={{ marginTop: 12, color: "var(--ink-muted)", fontSize: 16, lineHeight: 1.75, maxWidth: 680 }}>
            Cette fois, l&apos;Indénié Brunch voit plus grand : une édition
            festival, avec encore plus de surprises, de musique et de
            moments à partager. Toujours le même dress code — tout blanc —
            et toujours le même esprit : une après-midi hors du temps entre
            la jeunesse d&apos;Abengourou.
          </p>
        </div>

        <div className="about" style={{ marginTop: 40 }}>
          <div className="about-text">
            <h3 style={{ fontSize: 24, color: "var(--ink)", marginBottom: 12 }}>
              Visuels de communication
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Les premières affiches de l&apos;édition festival sont déjà
              dehors — encore plus d&apos;infos et de surprises à venir.
            </p>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/evt-17-flyer-edition-festival.jpg"
              alt="Affiche Indénié Brunch — Édition festival"
            />
          </div>
        </div>
      </section>


      <section className="section e5-journal">
        <header className="e5-manifesto">
          <span className="eyebrow-label">LE JOURNAL DE L&apos;ÉDITION</span>
          <h2>
            Une après-midi tout de blanc vêtue,
            <br />
            <em>une signature verte.</em>
          </h2>
          <p>
            Il y a des fêtes qu&apos;on oublie. Et il y a l&apos;Indénié Brunch.
            Pour cette édition festival, Abengourou s&apos;habille de blanc,
            s&apos;offre des palmes, des lumières dorées et une promesse :
            une journée d&apos;élégance pensée comme une invitation — pas comme
            un simple événement.
          </p>
          <span className="e5-ornament" aria-hidden="true" />
        </header>

        {CHAPTERS.map((c) => (
          <Chapter key={c.n} c={c} />
        ))}

        <blockquote className="e5-quote">
          <p>
            Le blanc pour la lumière.
            <br />
            Le vert pour les racines.
            <br />
            Abengourou pour décor.
          </p>
        </blockquote>

        <article className="e5-chapter e5-program">
          <figure className="e5-chapter-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/edition-5/affiche.jpg"
              alt="Affiche officielle Indénié Brunch — Édition festival, 19 décembre à Abengourou"
              loading="lazy"
            />
          </figure>
          <div className="e5-chapter-text">
            <span className="e5-chapter-num">04</span>
            <span className="eyebrow-label">AU PROGRAMME</span>
            <h3>Trois promesses, et bien d&apos;autres surprises.</h3>
            <ul className="e5-pillars">
              <li>
                <strong>Food &amp; Chill</strong>
                <span>Une table généreuse, une ambiance détendue, le temps de savourer.</span>
              </li>
              <li>
                <strong>Ambiance DJ</strong>
                <span>Des sets qui montent en puissance, du brunch jusqu&apos;à la nuit.</span>
              </li>
              <li>
                <strong>Orchestre live</strong>
                <span>Le frisson du direct, pour un festival qui se vit en musique.</span>
              </li>
            </ul>
            <p className="e5-teaser">
              Et le reste ? Nous le gardons secret. Une seule chose à savoir :
              ce sera le <strong>19 décembre</strong>, à Abengourou, tout en blanc.
            </p>
          </div>
        </article>

        {CHAPTERS_2.map((c) => (
          <Chapter key={c.n} c={c} />
        ))}

        <div className="e5-final">
          <h3>Ta place t&apos;attend.</h3>
          <p>Le blanc, la musique, la lumière — il ne manque plus que toi.</p>
          <a className="e5-cta" href="#billetterie">
            Réserver ma place
          </a>
        </div>
      </section>

      <section className="section e5-band" style={{ padding: "48px 64px 44px" }}>
        <div className="practical-strip">
          <div className="practical-item">
            <span className="label">Date</span>
            <span className="value">19 déc. 2026</span>
          </div>
          <div className="practical-item">
            <span className="label">Heure</span>
            <span className="value">Dès 18h</span>
          </div>
          <div className="practical-item">
            <span className="label">Lieu</span>
            <span className="value">Abengourou</span>
          </div>
          <div className="practical-item">
            <span className="label">Dress code</span>
            <span className="value">Tout blanc</span>
          </div>
        </div>

        <div className="countdown-divider" />
        <span className="countdown-eyebrow">C&apos;est dans</span>
        <Countdown />
      </section>

      <section className="section" id="billetterie">
        <div className="section-heading">
          <span className="eyebrow-label">BILLETTERIE — ÉDITION FESTIVAL</span>
          <h2>Réserve ta place pour l&apos;édition festival</h2>
        </div>
        <TicketBooking />
        <div className="payment-note">
          <span>
            Paiement sécurisé disponible via <strong>Wave</strong>, Orange Money et carte
            bancaire
          </span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
