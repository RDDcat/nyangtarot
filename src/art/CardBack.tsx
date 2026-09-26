// Face-down card design (240×380). Symmetric night-violet back with gold foil frame and a crescent-cradled cat.
// All ids are prefixed 'cardback-' (many backs render on one page; identical defs are harmless).
import { PAL, PawPrint, Sparkle, rng } from './props.tsx'

interface CardBackProps {
  className?: string
}

const GOLD = 'url(#cardback-gold)'

// deterministic background stars, mirrored left/right for symmetry
const STARS = (() => {
  const r = rng(2024)
  const out: { x: number; y: number; r: number; o: number }[] = []
  for (let i = 0; i < 26; i++) {
    const x = 22 + r() * 96
    const y = 22 + r() * 336
    const d = Math.hypot(x - 120, y - 190)
    if (d < 100) continue
    const s = { x: +x.toFixed(1), y: +y.toFixed(1), r: +(0.6 + r() * 1.1).toFixed(2), o: +(0.35 + r() * 0.5).toFixed(2) }
    out.push(s, { ...s, x: +(240 - s.x).toFixed(1) })
  }
  return out
})()

/** Corner flourish drawn for the top-left corner; mirrored for the others. */
function Corner() {
  return (
    <g fill="none" stroke={GOLD} strokeLinecap="round">
      <path d="M15 52 C15 30 30 15 52 15" strokeWidth="2" />
      <path d="M22 44 C24 32 32 24 44 22" strokeWidth="1.3" opacity="0.8" />
      <circle cx="31" cy="31" r="3" fill={PAL.gold400} stroke="none" />
      <path d="M15 60 L15 68 M60 15 L68 15" strokeWidth="2" />
      <circle cx="15" cy="74" r="1.6" fill={PAL.gold400} stroke="none" />
      <circle cx="74" cy="15" r="1.6" fill={PAL.gold400} stroke="none" />
    </g>
  )
}

/** Sitting cat silhouette, origin = feet centre, ≈ 34×52. */
const CAT_SIL =
  'M-13 0 C-17 -9 -16 -19 -10 -25 C-14 -29 -15 -35 -13 -40 L-14 -52 L-5 -45 C-2 -46 2 -46 5 -45 L14 -52 L13 -40 C15 -35 14 -29 10 -25 C16 -19 17 -9 13 0 Z'

/** Face-down card design, 240×380 viewBox (same aspect as a full tarot card). */
export function CardBack({ className }: CardBackProps) {
  const cx = 120
  const cy = 190
  // crescent opening upwards, cradling the cat
  const R = 46
  const d = 27
  const h = Math.sqrt(R * R - (d / 2) ** 2)
  const mcY = 200 // crescent disc centre
  const crescent = `M${cx - h} ${mcY - d / 2} A${R} ${R} 0 1 0 ${cx + h} ${mcY - d / 2} A${R} ${R} 0 0 1 ${cx - h} ${mcY - d / 2} Z`
  return (
    <svg viewBox="0 0 240 380" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardback-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0" stopColor={PAL.night600} />
          <stop offset="0.55" stopColor={PAL.night700} />
          <stop offset="1" stopColor={PAL.night900} />
        </radialGradient>
        <linearGradient id="cardback-gold" x1="0" y1="0" x2="240" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={PAL.gold300} />
          <stop offset="0.3" stopColor={PAL.gold500} />
          <stop offset="0.5" stopColor={PAL.gold300} />
          <stop offset="0.75" stopColor={PAL.gold500} />
          <stop offset="1" stopColor={PAL.gold400} />
        </linearGradient>
        <radialGradient id="cardback-glow" cx={cx} cy={cy} r="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={PAL.violet300} stopOpacity="0.38" />
          <stop offset="0.6" stopColor={PAL.violet500} stopOpacity="0.16" />
          <stop offset="1" stopColor={PAL.violet500} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cardback-moon" x1="0" y1="150" x2="0" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={PAL.gold300} />
          <stop offset="1" stopColor={PAL.gold500} />
        </linearGradient>
      </defs>

      {/* ground */}
      <rect width="240" height="380" rx="16" fill="url(#cardback-bg)" />
      <rect x="15" y="15" width="210" height="350" rx="7" fill={PAL.night950} opacity="0.18" />
      {STARS.map((s, i) => <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={PAL.gold300} opacity={s.o} />)}

      {/* frame */}
      <rect x="7" y="7" width="226" height="366" rx="11" fill="none" stroke={GOLD} strokeWidth="3.5" />
      <rect x="15" y="15" width="210" height="350" rx="7" fill="none" stroke={GOLD} strokeWidth="1.6" />
      <Corner />
      <g transform="matrix(-1 0 0 1 240 0)"><Corner /></g>
      <g transform="matrix(1 0 0 -1 0 380)"><Corner /></g>
      <g transform="matrix(-1 0 0 -1 240 380)"><Corner /></g>

      {/* side diamonds */}
      {[15, 225].map((x) => (
        <path key={x} d={`M${x} 176 L${x + 7} 190 L${x} 204 L${x - 7} 190 Z`} fill={PAL.night800} stroke={GOLD} strokeWidth="1.6" strokeLinejoin="round" />
      ))}

      {/* top & bottom paw emblems with stems */}
      {[1, -1].map((dir) => {
        const y = dir === 1 ? 58 : 322
        return (
          <g key={dir}>
            <path d={`M${cx} ${y + dir * 16} L${cx} ${cy - dir * 96}`} stroke={GOLD} strokeWidth="1.4" strokeDasharray="1 5" strokeLinecap="round" />
            <circle cx={cx} cy={y} r="17" fill={PAL.night800} stroke={GOLD} strokeWidth="1.6" />
            <PawPrint x={cx} y={y + 3} scale={0.72} color={PAL.gold400} />
            <Sparkle x={cx - 34} y={y} size={5} color={PAL.gold300} />
            <Sparkle x={cx + 34} y={y} size={5} color={PAL.gold300} />
            <circle cx={cx - 50} cy={y} r="1.6" fill={PAL.gold400} />
            <circle cx={cx + 50} cy={y} r="1.6" fill={PAL.gold400} />
          </g>
        )
      })}

      {/* medallion */}
      <circle cx={cx} cy={cy} r="96" fill="url(#cardback-glow)" />
      <g stroke={GOLD} strokeLinecap="round">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2
          const r1 = 76
          const r2 = i % 2 ? 84 : 92
          return (
            <path key={i} d={`M${(cx + Math.cos(a) * r1).toFixed(1)} ${(cy + Math.sin(a) * r1).toFixed(1)} L${(cx + Math.cos(a) * r2).toFixed(1)} ${(cy + Math.sin(a) * r2).toFixed(1)}`} strokeWidth={i % 2 ? 1.2 : 1.8} opacity={i % 2 ? 0.6 : 0.9} />
          )
        })}
      </g>
      <circle cx={cx} cy={cy} r="70" fill={PAL.night800} stroke={GOLD} strokeWidth="3" />
      <circle cx={cx} cy={cy} r="62" fill="none" stroke={GOLD} strokeWidth="1.2" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2 + Math.PI / 12
        return <circle key={i} cx={+(cx + Math.cos(a) * 66).toFixed(1)} cy={+(cy + Math.sin(a) * 66).toFixed(1)} r="1.5" fill={PAL.gold400} />
      })}

      {/* crescent cradling a cat */}
      <path d={crescent} fill="url(#cardback-moon)" stroke={PAL.gold500} strokeWidth="1.2" />
      <g transform={`translate(${cx} ${mcY + R - d - 2})`}>
        <path d="M11 -3 C24 -3 28 -14 22 -22" fill="none" stroke={PAL.gold300} strokeWidth="6.2" strokeLinecap="round" />
        <path d="M11 -3 C24 -3 28 -14 22 -22" fill="none" stroke={PAL.night950} strokeWidth="3.4" strokeLinecap="round" />
        <path d={CAT_SIL} fill={PAL.night950} stroke={PAL.gold300} strokeWidth="1.4" strokeLinejoin="round" />
        <ellipse cx="-5.5" cy="-34.5" rx="2.6" ry="2.3" fill={PAL.gold300} />
        <ellipse cx="5.5" cy="-34.5" rx="2.6" ry="2.3" fill={PAL.gold300} />
        <path d="M-5.5 -36.2 L-5.5 -32.8 M5.5 -36.2 L5.5 -32.8" stroke={PAL.night950} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M-1.6 -30.5 L1.6 -30.5 L0 -28.8 Z" fill={PAL.pink300} />
      </g>
      <Sparkle x={cx - 34} y={cy - 32} size={6} color={PAL.gold300} />
      <Sparkle x={cx + 36} y={cy - 26} size={4} color={PAL.gold300} />
      <circle cx={cx + 26} cy={cy - 44} r="1.8" fill={PAL.gold300} />
      <circle cx={cx - 20} cy={cy - 50} r="1.3" fill={PAL.gold300} />
    </svg>
  )
}
