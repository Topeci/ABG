export default function SunMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="6" stroke="#BF814B" strokeWidth="1.4" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 17 + Math.cos(angle) * 10;
        const y1 = 17 + Math.sin(angle) * 10;
        const x2 = 17 + Math.cos(angle) * 16;
        const y2 = 17 + Math.sin(angle) * 16;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#BF814B"
            strokeWidth="1.4"
          />
        );
      })}
    </svg>
  );
}
