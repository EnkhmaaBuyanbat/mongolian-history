export function MeanderLine({ className = '' }) {
  return (
    <svg
      className={`meander ${className}`}
      viewBox="0 0 240 14"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 7 H12 V3 H24 V11 H36 V3 H48 V11 H60 V3 H72 V11 H84 V7 H240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}

export function CornerFrame() {
  return (
    <span className="corner-frame" aria-hidden="true">
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />
    </span>
  )
}
