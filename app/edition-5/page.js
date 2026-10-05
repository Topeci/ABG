import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import TicketBooking from "../components/TicketBooking";
import Countdown from "../components/Countdown";
import BackToTop from "../components/BackToTop";

export const metadata = {
  title: "Édition 5 — Festival — Indénié Brunch",
  description:
    "Tout savoir sur la nouvelle édition de l'Indénié Brunch, édition festival, le 19 décembre 2026 à Abengourou.",
};


const CHAPTERS = [
  {
    n: "01",
    eyebrow: "L'ÉLÉGANCE",
    title: "Le blanc, sinon rien",
    text: [
      "Le dress code est simple.\n\nBlanc.",
      "Pas blanc cassé.\nPas beige.\nPas « à distance ça ressemble au blanc ».\n\nDu vrai blanc.",
      "Parce que quand tout le monde joue le jeu, le spectacle est juste magnifique.",
      "Et entre nous, c'est aussi l'occasion de sortir cette tenue que tu gardes depuis des mois dans l'armoire en attendant « une bonne occasion ».\n\nLa bonne occasion est arrivée.",
    ],
    img: "couple",
    alt: "Un couple tout en blanc, Indénié Brunch Édition festival",
  },
  {
    n: "02",
    eyebrow: "LA BANDE",
    title: "Viens avec ta bande",
    text: [
      "Le plus beau dans l'Indénié Brunch, ce n'est pas la décoration.\nCe ne sont pas les lumières.\nCe ne sont même pas les artistes.\n\nC'est vous.",
      "Les amis qui se retrouvent.\nLes cousins qui débarquent ensemble.\nLes photos de groupe où quelqu'un ferme toujours les yeux.\nLes fous rires qui commencent sans raison.",
      "Plus on est nombreux, plus c'est doux.",
    ],
    img: "trio",
    alt: "Trois amis souriants lors de l'Indénié Brunch",
    reverse: true,
  },
  {
    n: "03",
    eyebrow: "LA COMMUNAUTÉ",
    title: "La jeunesse de l'Indénié au rendez-vous",
    text: [
      "À chaque édition, la famille grandit.",
      "Des étudiants, des entrepreneurs, des artistes, des travailleurs, des jeunes venus de partout. Pendant une journée, tout le monde se retrouve au même endroit.",
      "Cette année, on voit plus grand.\nPlus d'espace.\nPlus d'animations.\nPlus de surprises.\nEt surtout plus de bons souvenirs.",
      "Ya foye garanti.",
    ],
    img: "groupe",
    alt: "Groupe d'invités en tenue blanche, Indénié Brunch",
  },
];

const CHAPTERS_2 = [
  {
    n: "05",
    eyebrow: "LE STYLE",
    title: "Sors ton plus beau style",
    text: [
      "L'Indénié Brunch, c'est aussi le podium d'Abengourou.",
      "Les plus belles robes.\nLes plus belles chemises.\nLes lunettes.\nLes montres.\nLes chaussures toutes neuves.",
      "On sait déjà que certains préparent leur tenue depuis plusieurs semaines.\n\nEt ils ont raison.",
    ],
    img: "solo",
    alt: "Invitée à la chevelure cuivrée, Indénié Brunch Édition festival",
    reverse: true,
  },
  {
    n: "06",
    eyebrow: "LES SOUVENIRS",
    title: "Les souvenirs se fabriquent ici",
    text: [
      "Une photo entre amis.\nUn coucher de soleil.\nUne chanson qui passe au bon moment.\nUn éclat de rire.",
      "Ce sont ces petits instants qui restent.",
      "Des années plus tard, tu regarderas les photos et tu diras :\n« J'y étais. »",
    ],
    img: "duo",
    alt: "Deux amies complices en robe blanche, Indénié Brunch",
  },
  {
    n: "07",
    eyebrow: "LES SALONS",
    title: "Pour ceux qui aiment les choses en grand",
    text: [
      "Tu veux vivre l'événement dans les meilleures conditions ?\nLes espaces salons sont là pour toi.",
      "Plus de confort.\nPlus d'espace.\nPlus de tranquillité.",
      "Parfait pour venir entre amis, en famille ou avec tes invités.",
      "Mais attention.\nLes places partent vite.\nTrès vite.",
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
        </div>

        <figure className="e5-flyer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/evt-17-flyer-edition-festival.jpg"
            alt="Affiche Indénié Brunch — Édition festival"
          />
        </figure>
      </section>


      <section className="section e5-journal">
        <header className="e5-manifesto">
          <span className="eyebrow-label">MANIFESTE</span>
          <h2>
            Tout le monde en blanc,
            <br />
            <em>personne n&apos;a le droit de se tâcher</em>
          </h2>
          <p>
            {"Il y a les événements où tu viens, tu manges et tu rentres.\nEt puis il y a l'Indénié Brunch."}
          </p>
          <p>
            {"Le 19 décembre, Abengourou va encore se mettre sur son 31. Du blanc partout, de la bonne musique, des retrouvailles, des selfies à n'en plus finir et une ambiance qui va faire parler pendant des semaines."}
          </p>
          <p>{"Même ton ami qui dit toujours « moi je ne sors plus » sera là."}</p>
          <p>
            <strong>Cette année, on passe en mode Festival.</strong>
          </p>
          <p>{"Prépare seulement ta tenue.\nLe reste, on s'en occupe."}</p>
          <span className="e5-ornament" aria-hidden="true" />
        </header>

        {CHAPTERS.map((c) => (
          <Chapter key={c.n} c={c} />
        ))}

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
            <h3>Ce qui t&apos;attend</h3>
            <ul className="e5-pillars">
              <li>
                <strong>Manger</strong>
                <span>Parce qu&apos;une bonne fête commence toujours par un bon plat.</span>
              </li>
              <li>
                <strong>Danser</strong>
                <span>Avec des DJ prêts à te faire oublier que tu avais prévu de rentrer tôt.</span>
              </li>
              <li>
                <strong>Chanter</strong>
                <span>Avec des prestations live qui vont mettre l&apos;ambiance comme il faut.</span>
              </li>
              <li>
                <strong>Profiter</strong>
                <span>Prendre des photos, rencontrer du monde et vivre simplement le moment.</span>
              </li>
            </ul>
            <p className="e5-teaser">
              Pour le reste…
              <br />
              <strong>On garde quelques surprises.</strong>
            </p>
          </div>
        </article>

        {CHAPTERS_2.map((c) => (
          <Chapter key={c.n} c={c} />
        ))}

        <blockquote className="e5-quote">
          <p>
            Le blanc pour l&apos;élégance.
            <br />
            Le vert pour nos racines.
            <br />
            Abengourou pour la fête.
          </p>
        </blockquote>

        <div className="e5-final">
          <h3>Ta place t&apos;attend</h3>
          <p>
            {"Le 19 décembre.\n\nLa musique sera là.\nL'ambiance sera là.\nLes photos seront là.\nTes amis seront là.\n\nLa vraie question est simple :"}
          </p>
          <p className="e5-final-question">Est-ce que toi aussi tu seras là ? 🔥🤍</p>
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
            <span className="value">Dès 16h</span>
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
      <BackToTop />
    </main>
  );
}
