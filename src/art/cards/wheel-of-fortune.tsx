// X. Wheel of Fortune — a tortoiseshell cat perched on a big golden wheel of symbols, among clouds and stars.
import { Cat } from '../Cat.tsx'
import { PAL, Cloud, PawPrint, Sparkle, Star, Starfield } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

const CX = 120
const CY = 224
const R = 72

/** Small symbols placed around the wheel's inner ring (drawn around 0,0). */
const SYMBOLS = [
  <circle key="s0" r={5} fill="none" {...ln(2.5)} />,
  <path key="s1" d="M0 -6 L6 5 L-6 5 Z" fill="none" {...ln(2.5)} />,
  <path key="s2" d="M-5 -5 L5 5 M5 -5 L-5 5" {...ln(2.5)} />,
  <path key="s3" d="M3 -6 A6 6 0 1 0 3 6 A4.5 4.5 0 1 1 3 -6 Z" fill={INK} />,
  <path key="s4" d="M0 -6 L0 6 M-5 0 L5 0" {...ln(2.5)} />,
  <path key="s5" d="M0 6 L6 -5 L-6 -5 Z" fill="none" {...ln(2.5)} />,
  <path key="s6" d="M-6 0 L0 -6 L6 0 L0 6 Z" fill="none" {...ln(2.5)} />,
  <path key="s7" d="M-5 3 Q0 -7 5 3" fill="none" {...ln(2.5)} />,
]

function Wheel() {
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45)
  return (
    <g>
      <circle cx={CX} cy={CY} r={R + 6} fill={PAL.gold300} opacity={0.25} />
      <circle cx={CX} cy={CY} r={R} fill={PAL.gold400} {...ln(3)} />
      <circle cx={CX} cy={CY} r={R - 16} fill="#6fcfb8" {...ln(3)} />
      {SYMBOLS.map((s, i) => {
        const a = ((i * 45 + 22.5 - 90) * Math.PI) / 180
        const x = CX + Math.cos(a) * (R - 8)
        const y = CY + Math.sin(a) * (R - 8)
        return <g key={i} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>{s}</g>
      })}
      <circle cx={CX} cy={CY} r={R - 34} fill={PAL.mint300} {...ln(2.5)} />
      {spokes.map((a) => (
        <path key={a} d={`M${CX} ${CY - 16} L${CX} ${CY - R + 16}`} transform={`rotate(${a} ${CX} ${CY})`} {...ln(3)} />
      ))}
      <circle cx={CX} cy={CY} r={16} fill={PAL.gold400} {...ln(3)} />
      <PawPrint x={CX} y={CY + 3} scale={0.6} color={PAL.pink400} />
    </g>
  )
}

export default function WheelOfFortuneArt() {
  return (
    <g>
      <defs>
        <radialGradient id="wheel-of-fortune-sky" cx="0.5" cy="0.6" r="0.75">
          <stop offset="0" stopColor={PAL.violet500} />
          <stop offset="0.6" stopColor={PAL.night600} />
          <stop offset="1" stopColor={PAL.night800} />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#wheel-of-fortune-sky)" />
      <Starfield seed={31} count={34} sparkles={6} color={PAL.gold300} />

      {/* four corner clouds (the four winged guardians) — the lower pair drifts in front of the wheel */}
      <Cloud x={30} y={60} scale={0.6} shade="#d8cff2" />
      <Cloud x={212} y={60} scale={0.6} shade="#d8cff2" />

      <Wheel />
      <Cat uid="wheel-of-fortune-cat" x={CX} y={CY - R + 6} scale={0.64} fur="#3b3040" pattern="tortie" eyeColor="#f0a23a" expression="wink" tail="curl" rim={PAL.gold300} shadow={false} />

      <Cloud x={26} y={298} scale={0.62} shade="#d8cff2" />
      <Cloud x={214} y={298} scale={0.62} shade="#d8cff2" />
      <Star x={30} y={160} r={9} color={PAL.gold400} />
      <Star x={210} y={160} r={9} color={PAL.gold400} />
      <Sparkle x={60} y={112} size={6} color={PAL.mint300} />
      <Sparkle x={182} y={110} size={6} color={PAL.mint300} />
    </g>
  )
}
