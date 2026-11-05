import css from "../Hero/HeroBanner.module.css";

export function OrbitPoster() {
  return (
    <svg
      className={css.heroPosterArtwork}
      viewBox="0 0 800 860"
      role="img"
      aria-label="SHIFT Originals poster"
    >
      <defs>
        <radialGradient id="shift-orbit-bg">
          <stop stopColor="#262929" />
          <stop offset="1" stopColor="#090a0b" />
        </radialGradient>

        <linearGradient
          id="shift-orbit-ring"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#f8d5ad" />
          <stop offset=".25" stopColor="#ff7937" />
          <stop offset=".48" stopColor="#ff3f15" />
          <stop offset=".65" stopColor="#7a1600" />
          <stop offset=".82" stopColor="#ff885d" />
          <stop offset="1" stopColor="#ffd2b1" />
        </linearGradient>

        <filter
          id="shift-orbit-glow"
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur stdDeviation="31" />
        </filter>
      </defs>

      <rect
        width="800"
        height="860"
        fill="url(#shift-orbit-bg)"
      />

      <circle
        cx="423"
        cy="392"
        r="232"
        fill="#f84e1f"
        opacity=".22"
        filter="url(#shift-orbit-glow)"
      />

      <g transform="translate(396 400) rotate(-28) scale(.94 1.22)">
        <circle
          r="242"
          fill="none"
          stroke="url(#shift-orbit-ring)"
          strokeWidth="86"
        />
        <circle
          r="247"
          fill="none"
          stroke="#ffe8dc"
          strokeWidth="2"
          opacity=".7"
        />
        <circle
          r="190"
          fill="none"
          stroke="#1a0e0a"
          strokeWidth="4"
          opacity=".6"
        />
      </g>

      <g
        fill="#f6f3ec"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        <text x="46" y="66" fontSize="19" letterSpacing="5">
          SHIFT ORIGINALS / 001
        </text>

        <text
          x="49"
          y="733"
          fontSize="92"
          letterSpacing="-7"
          fontWeight="900"
        >
          OWN THE
        </text>

        <text
          x="49"
          y="813"
          fontSize="92"
          letterSpacing="-7"
          fontWeight="900"
        >
          MOMENT.
        </text>
      </g>
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg className={css.headerButtonIcon}>
      <use href="/icons/icon.svg#icon-external-link"></use>
    </svg>
  );
}