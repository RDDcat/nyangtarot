// XVIII The Moon — seal-point siamese on a winding path between two towers, gazing up at a big sleepy moon; crayfish in the pond.
import { Cat } from '../Cat.tsx'
import { PAL, Starfield, Sparkle, blobPath } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const STONE = '#8e84b8'

/** Tapering S-shaped road: narrow at the horizon (t=0), wide at the pond (t=1). */
const PATH = (() => {
  const L: string[] = []
  const R: string[] = []
  for (let i = 0; i <= 12; i++) {
    const t = i / 12
    const y = 214 + t * 72
    const cx = 170 + Math.sin(t * Math.PI * 1.6) * 16 * (0.4 + t)
    const hw = 2 + t * t * 30 + t * 4
    L.push(`${(cx - hw).toFixed(1)} ${y.toFixed(1)}`)
    R.push(`${(cx + hw).toFixed(1)} ${y.toFixed(1)}`)
  }
  return `M${L.join(' L')} L${R.reverse().join(' L')} Z`
})()
const STONE_DK = '#6c6196'

/** Stone tower. Origin = bottom centre. */
function Tower({ x, y, h, w = 36 }: { x: number; y: number; h: number; w?: number }) {
  const hw = w / 2
  const top = y - h
  const m = 4 // merlon half width
  return (
    <g>
      <path d={`M${x - hw} ${y} L${x - hw + 2} ${top} L${x + hw - 2} ${top} L${x + hw} ${y} Z`} fill={STONE} {...ln(3)} />
      <path d={`M${x - hw - 4} ${top} L${x + hw + 4} ${top} L${x + hw + 4} ${top - 10} L${x + hw + 4 - 2 * m} ${top - 10} L${x + hw + 4 - 2 * m} ${top - 4} L${x + m} ${top - 4} L${x + m} ${top - 10} L${x - m} ${top - 10} L${x - m} ${top - 4} L${x - hw - 4 + 2 * m} ${top - 4} L${x - hw - 4 + 2 * m} ${top - 10} L${x - hw - 4} ${top - 10} Z`} fill={STONE} {...ln(3)} />
      <path d={`M${x - hw + 5} ${top + 30} L${x + hw - 5} ${top + 30} M${x - hw + 4} ${top + 62} L${x + hw - 4} ${top + 62}`} {...ln(1.8, STONE_DK)} />
      <path d={`M${x - 6} ${top + 22} L${x - 6} ${top + 14} C${x - 6} ${top + 7} ${x + 6} ${top + 7} ${x + 6} ${top + 14} L${x + 6} ${top + 22} Z`} fill={PAL.gold400} {...ln(2.2)} />
    </g>
  )
}

/** Pincer claw, base at origin, pointing up (a tulip with a notch). */
const CLAW = 'M0 0 C-9 -2 -11 -15 -6 -21 C-4 -16 -2 -13 0 -12 C2 -13 4 -16 6 -21 C11 -15 9 -2 0 0 Z'

/** Little crayfish peeking out of the pond, claws up. Origin = waterline centre. */
function Crayfish({ x, y }: { x: number; y: number }) {
  const shell = '#ff8a5c'
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* arms */}
      <path d="M-8 -6 C-13 -10 -15 -14 -15 -18 M8 -6 C13 -10 15 -14 15 -18" fill="none" {...ln(7)} />
      <path d="M-8 -6 C-13 -10 -15 -14 -15 -18 M8 -6 C13 -10 15 -14 15 -18" fill="none" {...ln(3, shell)} />
      <path d={CLAW} transform="translate(-15 -16) rotate(-18)" fill={shell} {...ln(2.2)} />
      <path d={CLAW} transform="translate(15 -16) rotate(18)" fill={shell} {...ln(2.2)} />
      {/* antennae */}
      <path d="M-3 -12 C-6 -20 -2 -26 2 -30 M3 -12 C4 -20 10 -24 14 -26" fill="none" {...ln(1.6)} />
      {/* head/body above the water */}
      <path d="M-11 2 C-12 -12 12 -12 11 2 Z" fill={shell} {...ln(2.5)} />
      <circle cx="-4.5" cy="-4" r="2.1" fill={INK} />
      <circle cx="4.5" cy="-4" r="2.1" fill={INK} />
      <circle cx="-5" cy="-4.8" r="0.8" fill="#fff" />
      <circle cx="4" cy="-4.8" r="0.8" fill="#fff" />
    </g>
  )
}

/** Eyes gazing up (drawn over the Cat's own open eyes, in canonical head space). */
function LookUpEyes({ color }: { color: string }) {
  return (
    <g>
      {[96, 144].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy={133} rx={12.5} ry={14} fill={color} />
          <ellipse cx={x} cy={139} rx={9} ry={6} fill="#b7dcff" opacity={0.7} />
          <ellipse cx={x + 1} cy={126} rx={7} ry={8.5} fill={INK} />
          <circle cx={x - 3.5} cy={123} r={3.8} fill="#fff" />
          <circle cx={x + 4.5} cy={132} r={1.8} fill="#fff" />
          <ellipse cx={x} cy={133} rx={12.5} ry={14} fill="none" stroke={INK} strokeWidth={2.6} />
        </g>
      ))}
    </g>
  )
}

export default function MoonArt() {
  const tilt = 8 // flipped cat: + tilts the head up towards the moon
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2
    const r1 = 46, r2 = i % 2 ? 51 : 56
    return `M${(120 + Math.cos(a) * r1).toFixed(1)} ${(60 + Math.sin(a) * r1).toFixed(1)} L${(120 + Math.cos(a) * r2).toFixed(1)} ${(60 + Math.sin(a) * r2).toFixed(1)}`
  }).join(' ')
  return (
    <g>
      <defs>
        <linearGradient id="moon-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#170f33" />
          <stop offset="0.65" stopColor="#3a2872" />
          <stop offset="1" stopColor="#6a4f9e" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.5" stopColor="#dfe9ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#dfe9ff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="moon-disc">
          <circle cx="120" cy="60" r="38" />
        </clipPath>
      </defs>
      <rect width="240" height="300" fill="url(#moon-sky)" />
      <Starfield seed={18} count={30} h={200} sparkles={4} />

      {/* full moon holding a sleepy crescent face (tarot style), soft pale rays */}
      <circle cx="120" cy="60" r="66" fill="url(#moon-glow)" />
      <path d={rays} fill="none" {...ln(2.2, '#e8eefc')} opacity={0.55} />
      <circle cx="120" cy="60" r="38" fill="#c9d3ef" {...ln(3)} />
      <g clipPath="url(#moon-disc)">
        {/* lit crescent on the left, shadowed side on the right */}
        <circle cx="101" cy="56" r="40" fill="#fff6d8" />
        <circle cx="142" cy="46" r="6" fill="#b3bddf" />
        <circle cx="146" cy="76" r="4" fill="#b3bddf" />
      </g>
      <circle cx="120" cy="60" r="38" fill="none" {...ln(3)} />
      <path d="M96 58 C100 63 106 63 110 58 M122 58 C126 63 132 63 136 58" fill="none" {...ln(2.5)} />
      <path d="M109 72 C113 75 117 75 121 72" fill="none" {...ln(2.2)} />
      <ellipse cx="96" cy="69" rx="5" ry="3" fill={PAL.pink300} opacity={0.7} />
      <ellipse cx="128" cy="69" rx="4.5" ry="3" fill={PAL.pink300} opacity={0.6} />
      <path d="M146 30 l6 0 l-6 7 l6 0 M156 20 l4 0 l-4 5 l4 0" fill="none" {...ln(1.8, '#e8eefc')} />
      {/* falling dew drops (yods) */}
      {[[62, 112], [178, 112], [72, 140], [168, 140]].map(([dx, dy], i) => (
        <path key={i} d={`M${dx} ${dy - 5} C${dx + 3.5} ${dy} ${dx + 3.5} ${dy + 3.5} ${dx} ${dy + 3.5} C${dx - 3.5} ${dy + 3.5} ${dx - 3.5} ${dy} ${dx} ${dy - 5} Z`} fill={PAL.gold300} {...ln(1.6)} />
      ))}

      {/* far mountains + meadow */}
      <path d="M0 206 L30 186 L56 200 L92 176 L120 196 L150 178 L186 198 L212 184 L240 200 L240 300 L0 300 Z" fill="#4a3a80" {...ln(3)} />
      <path d="M0 222 C60 212 180 212 240 222 L240 300 L0 300 Z" fill="#2f5566" {...ln(3)} />

      {/* moonlit path winding from the pond towards the far mountains, between the towers */}
      <path d={PATH} fill="#a797d6" {...ln(2.5)} />
      <g fill="#c9bdf0">
        <ellipse cx="160" cy="236" rx="3" ry="1.5" />
        <ellipse cx="186" cy="254" rx="3.5" ry="1.8" />
        <ellipse cx="166" cy="272" rx="4.5" ry="2.2" />
      </g>

      <Tower x={24} y={246} h={128} w={32} />
      <Tower x={216} y={246} h={128} w={32} />

      <Cat
        uid="moon-cat"
        x={94}
        y={264}
        flip
        scale={0.66}
        fur="#f3e6d2"
        pattern="pointed"
        eyeColor="#6fb6ff"
        expression="smile"
        headTilt={tilt}
        tail="up"
        front={<g transform={`rotate(${tilt} 120 182)`}><LookUpEyes color="#6fb6ff" /></g>}
      />

      {/* pond with a crayfish */}
      <path d={blobPath(120, 292, 134, 20, 9, 0.06)} fill="#3f7fc8" {...ln(3)} />
      <path d="M140 288 C160 291 186 291 208 287 M76 295 C92 297 108 297 122 295" fill="none" {...ln(2, '#8cc4ff')} />
      <Sparkle x={200} y={293} size={4} color={PAL.gold300} />
      <Crayfish x={198} y={284} />
      <path d="M182 286 C190 289 206 289 214 286" fill="none" {...ln(2, '#8cc4ff')} />
    </g>
  )
}
