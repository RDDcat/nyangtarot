// VIII. Strength — an Abyssinian in a cute lion-mane hood, gently holding a flower; ∞ above, flower garland.
import { Cat } from '../Cat.tsx'
import { PAL, Flower, Hill, Leaf, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const MANE = '#7a3a1c'
const MANE_LIGHT = '#9a4c24'

/** Scalloped lion mane around the head (canonical cat space). */
function Mane() {
  const n = 14
  const cx = 120, cy = 124
  const petals = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2
    return { x: cx + Math.cos(a) * 70, y: cy + Math.sin(a) * 62, rot: (a * 180) / Math.PI + 90 }
  })
  return (
    <g>
      {petals.map((p, i) => (
        <ellipse key={i} cx={p.x} cy={p.y} rx={20} ry={26} transform={`rotate(${p.rot} ${p.x} ${p.y})`} fill={i % 2 ? MANE : MANE_LIGHT} {...ln(3)} />
      ))}
      <ellipse cx={cx} cy={cy} rx={72} ry={64} fill={MANE} />
    </g>
  )
}

/** Flower garland draped across the chest (canonical cat space). */
function Garland() {
  const pts = [[82, 196], [96, 206], [110, 212], [124, 213], [138, 210], [152, 203], [164, 193]]
  return (
    <g>
      <path d="M78 190 Q120 228 168 188" fill="none" {...ln(7)} />
      <path d="M78 190 Q120 228 168 188" fill="none" {...ln(3.5, PAL.grassDark)} />
      {pts.map(([x, y], i) => (
        <Flower key={i} x={x} y={y} r={5.2} color={i % 2 ? PAL.white : PAL.pink300} center={PAL.gold400} />
      ))}
    </g>
  )
}

export default function StrengthArt() {
  const cat = { x: 120, y: 272, scale: 0.84, pose: 'paw-up' as const }
  return (
    <g>
      <defs>
        <linearGradient id="strength-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe6a6" />
          <stop offset="0.6" stopColor="#ffc36b" />
          <stop offset="1" stopColor="#ffb057" />
        </linearGradient>
        <radialGradient id="strength-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffbe6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fffbe6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#strength-sky)" />
      <circle cx="120" cy="120" r="120" fill="url(#strength-sun)" />
      {/* distant blue mountain */}
      <path d="M150 232 L196 176 L214 196 L226 184 L260 232 Z" fill="#9cb8e8" {...ln(2.5)} />
      <path d="M186 188 L196 176 L206 187 L200 192 L194 186 L190 191 Z" fill={PAL.white} />
      <path d="M-20 240 C10 214 50 212 84 236 Z" fill="#9cb8e8" {...ln(2.5)} />
      <Hill x={120} y={236} w={340} depth={70} color={PAL.grass} tufts={PAL.grassDark} flowers={9} seed={8} />

      {/* ∞ lemniscate */}
      <path d="M120 38 C108 24 88 24 88 38 C88 52 108 52 120 38 C132 24 152 24 152 38 C152 52 132 52 120 38 Z" fill="none" {...ln(9)} />
      <path d="M120 38 C108 24 88 24 88 38 C88 52 108 52 120 38 C132 24 152 24 152 38 C152 52 132 52 120 38 Z" fill="none" {...ln(4.5, PAL.gold400)} />
      <Sparkle x={74} y={30} size={5} color={PAL.white} />
      <Sparkle x={166} y={46} size={4} color={PAL.white} />

      <Cat uid="strength-cat" {...cat} fur="#c9793f" pattern="ticked" eyeColor="#f0a23a" expression="smile" tail="down"
        behind={<Mane />}
        front={<Garland />}
        held={
          <g>
            <path d="M184 190 C192 176 200 160 206 140" fill="none" {...ln(6)} />
            <path d="M184 190 C192 176 200 160 206 140" fill="none" {...ln(2.5, PAL.grassDark)} />
            <Leaf x={196} y={166} rotate={60} scale={0.75} />
            <Flower x={207} y={132} r={11} color={PAL.pink400} center={PAL.gold400} />
          </g>
        } />
    </g>
  )
}
