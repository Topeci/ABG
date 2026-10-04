// Petite icône "tam-tam" (djembé), dans le même esprit graphique que le
// logo (tam-tam inscrit dans le "U" de BRUNCH), pour remplacer le soleil
// utilisé en haut de certaines sections.
export default function DrumMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {/* Peau du tambour */}
      <ellipse cx="17" cy="8" rx="9" ry="3" stroke="#BF814B" strokeWidth="1.4" />
      {/* Corps en forme de calice */}
      <path
        d="M8 8c-1 4 2 6 2.5 9 .5 2.5-1.5 3.5-1 6 .5 2.5 2.5 4 2.5 6.5"
        stroke="#BF814B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M26 8c1 4-2 6-2.5 9-.5 2.5 1.5 3.5 1 6-.5 2.5-2.5 4-2.5 6.5"
        stroke="#BF814B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Base */}
      <path d="M12 29.5h10" stroke="#BF814B" strokeWidth="1.4" strokeLinecap="round" />
      {/* Collerette / corde de tension */}
      <path
        d="M9.5 10.5c2.3 1.6 5 2.5 7.5 2.5s5.2-.9 7.5-2.5"
        stroke="#BF814B"
        strokeWidth="1.2"
      />
      {/* Lacets verticaux */}
      {[-6, -3.2, -0.4, 2.4, 5.2].map((dx, i) => (
        <line
          key={i}
          x1={17 + dx}
          y1="9.5"
          x2={17 + dx * 0.78}
          y2="16.5"
          stroke="#BF814B"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
