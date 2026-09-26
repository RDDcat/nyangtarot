// XIII Death — gentle rebirth: a hooded black cat with white socks carries a white-rose flag; sunrise between two towers.
import { Cat } from '../Cat.tsx'
import { PAL, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const HOOD = '#4a3a7a'

function Rose({ x, y, r = 10, leaves = true }: { x: number; y: number; r?: number; leaves?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r / 10})`}>
      {leaves && <path d="M-4 7 C-14 8 -18 14 -16 18 C-10 18 -6 14 -4 7 Z M4 7 C14 8 18 14 16 18 C10 18 6 14 4 7 Z" fill={PAL.grass} {...ln(1.8)} />}
      <path d="M-11 -2 C-12 -10 -6 -12 -4 -8 C-2 -13 4 -13 5 -8 C8 -12 13 -9 11 -2 C12 6 6 11 0 11 C-6 11 -12 6 -11 -2 Z" fill={PAL.white} {...ln(2.2)} />
      <path d="M0.5 -1 C-1.5 -3.5 -4.5 -1 -3 2 C-1 5.5 5 4 5 -0.5 C5 -5.5 -1 -7.5 -5.5 -4.5 M-8.5 1 C-7 7 2 9.5 7 5" fill="none" {...ln(1.6)} />
    </g>
  )
}

function Butterfly({ x, y, color, rotate = 0, s = 1 }: { x: number; y: number; color: string; rotate?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s})`}>
      <path d="M0 0 C-6 -12 -16 -12 -14 -4 C-13 1 -6 2 0 0 Z M0 0 C6 -12 16 -12 14 -4 C13 1 6 2 0 0 Z" fill={color} {...ln(2)} />
      <path d="M0 0 C-4 8 -12 9 -10 3 C-9 1 -4 0 0 0 Z M0 0 C4 8 12 9 10 3 C9 1 4 0 0 0 Z" fill={PAL.white} {...ln(2)} />
      <path d="M0 -5 L0 5 M0 -5 L-3 -10 M0 -5 L3 -10" fill="none" {...ln(1.8)} />
    </g>
  )
}

function Tower({ x, h }: { x: number; h: number }) {
  const top = 212 - h
  return (
    <g>
      <path d={`M${x - 14} 214 L${x - 14} ${top} L${x - 14} ${top - 9} L${x - 7} ${top - 9} L${x - 7} ${top - 3} L${x} ${top - 3} L${x} ${top - 9} L${x + 7} ${top - 9} L${x + 7} ${top - 3} L${x + 14} ${top - 3} L${x + 14} ${top - 9} L${x + 14} 214 Z`} fill="#7a68b0" {...ln(2.5)} />
      <path d={`M${x - 3} ${top + 16} L${x - 3} ${top + 8} Q${x} ${top + 3} ${x + 3} ${top + 8} L${x + 3} ${top + 16} Z`} fill={PAL.gold300} {...ln(1.8)} />
    </g>
  )
}

/** Hood + cape, drawn behind the cat (canonical space). */
const Hood = (
  <g>
    <path d="M44 272 C36 230 44 196 70 176 L170 176 C196 196 204 230 196 272 Z" fill={HOOD} {...ln(3)} />
    <path d="M48 176 C38 120 50 76 80 58 C98 46 112 40 120 30 C128 40 142 46 160 58 C190 76 202 120 192 176 C170 196 70 196 48 176 Z" fill={HOOD} {...ln(3)} />
  </g>
)

/** Hood brim across the forehead + clasp (drawn over the head). */
const Brim = (
  <g>
    <path d="M60 112 C74 76 166 76 180 112" fill="none" {...ln(14)} />
    <path d="M60 112 C74 76 166 76 180 112" fill="none" {...ln(8, HOOD)} />
    <circle cx="120" cy="186" r="6" fill={PAL.gold400} {...ln(2.2)} />
  </g>
)

/** Flag pole held at the raised paw (canonical space). */
const Flag = (
  <g>
    <path d="M184 256 L184 36" {...ln(8)} />
    <path d="M184 256 L184 36" {...ln(3.5, PAL.gold300)} />
    <path d="M186 42 C204 36 222 48 246 40 L246 104 C222 112 204 100 186 106 Z" fill="#2e2446" {...ln(3)} />
    <Rose x={216} y={72} r={17} leaves={false} />
    <circle cx="184" cy="32" r="6" fill={PAL.gold400} {...ln(2.2)} />
  </g>
)

export default function DeathArt() {
  return (
    <g>
      <defs>
        <linearGradient id="death-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.violet300} />
          <stop offset="0.45" stopColor="#f3b4c8" />
          <stop offset="0.75" stopColor="#ffb38a" />
          <stop offset="1" stopColor="#ffd9a8" />
        </linearGradient>
        <radialGradient id="death-sunglow">
          <stop offset="0" stopColor="#fff4d6" />
          <stop offset="1" stopColor="#fff4d6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#death-sky)" />
      {/* big rising sun between two towers — it frames the dark hood */}
      <circle cx="120" cy="214" r="150" fill="url(#death-sunglow)" />
      {[-72, -54, -36, -18, 18, 36, 54, 72].map((a) => <path key={a} transform={`translate(120 214) rotate(${a})`} d="M0 -112 L0 -128" {...ln(4, '#fff4d6')} />)}
      <path d="M18 214 A102 102 0 0 1 222 214 Z" fill="#ffd98a" {...ln(3)} />
      <path d="M36 214 A84 84 0 0 1 204 214 Z" fill="#ffeab5" />
      <Tower x={26} h={96} />
      <Tower x={214} h={88} />
      {/* gentle hills + river */}
      <path d="M0 212 L240 212 L240 300 L0 300 Z" fill="#9b87c9" />
      <path d="M0 212 L240 212" {...ln(3)} />
      <path d="M0 238 C60 226 100 250 160 236 C200 228 224 236 240 232 L240 300 L0 300 Z" fill="#7d69b3" />
      <Cat
        uid="death-cat"
        x={110}
        y={282}
        scale={0.8}
        fur="#352d42"
        belly={PAL.white}
        socks
        eyeColor="#f5d04a"
        rim={PAL.violet300}
        pose="paw-up"
        tail="down"
        behind={Hood}
        held={Flag}
        front={Brim}
      />
      <Rose x={30} y={276} r={9} />
      <Rose x={212} y={284} r={8} />
      <Butterfly x={42} y={100} color={PAL.pink300} rotate={-15} />
      <Butterfly x={40} y={170} color={PAL.violet300} rotate={10} s={0.8} />
      <Butterfly x={206} y={160} color={PAL.pink300} rotate={20} s={0.85} />
      <Sparkle x={72} y={56} size={5} color={PAL.white} />
      <Sparkle x={216} y={126} size={4} color={PAL.white} />
    </g>
  )
}
