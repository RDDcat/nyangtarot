/** Round "냥" seal in pink-red ink, slightly rotated — decorative. */
export function Stamp() {
  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <defs>
          <path id="stamp-ring" d="M50 50m-34 0a34 34 0 1 1 68 0a34 34 0 1 1-68 0" />
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text className="stamp__ring">
          <textPath href="#stamp-ring" startOffset="0">
            NYANG ✦ TAROT ✦ CERTIFIED ✦
          </textPath>
        </text>
      </svg>
      <span className="stamp__nyang">냥</span>
    </div>
  )
}
