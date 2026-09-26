// XII The Hanged Man — a Scottish Fold hangs upside-down by one hind leg from a leafy living-wood crossbar, serene, haloed.
import { Cat } from '../Cat.tsx'
import { PAL, Leaf, Hill, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

const FUR = '#b4b8c4'

/** A hind leg as an outlined tube ending in a paw (scene space). */
function Leg({ d, paw, rot = 0 }: { d: string; paw: { x: number; y: number }; rot?: number }) {
  return (
    <g>
      <path d={d} fill="none" {...ln(19)} />
      <path d={d} fill="none" {...ln(13, FUR)} />
      <g transform={`rotate(${rot} ${paw.x} ${paw.y})`}>
        <ellipse cx={paw.x} cy={paw.y} rx="10.5" ry="7.5" fill={FUR} {...ln(2.6)} />
        <path d={`M${paw.x - 3.5} ${paw.y - 7} L${paw.x - 3.5} ${paw.y - 3} M${paw.x + 3.5} ${paw.y - 7} L${paw.x + 3.5} ${paw.y - 3}`} {...ln(1.8)} />
      </g>
    </g>
  )
}

export default function HangedManArt() {
  // rotate 180 → the (flat) seat of the body at the top, head hanging near the bottom
  const place = { x: 120, y: 100, rotate: 180, scale: 0.72 }
  const headY = 100 + (275 - 128) * 0.72
  return (
    <g>
      <defs>
        <linearGradient id="hanged-man-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6fbf2" />
          <stop offset="1" stopColor={PAL.mint300} />
        </linearGradient>
        <radialGradient id="hanged-man-glow">
          <stop offset="0" stopColor="#fff6c9" />
          <stop offset="0.6" stopColor={PAL.gold300} stopOpacity="0.8" />
          <stop offset="1" stopColor={PAL.gold300} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#hanged-man-sky)" />
      {/* distant hills */}
      <path d="M0 236 C40 214 80 220 120 232 C160 218 200 212 240 228 L240 300 L0 300 Z" fill="#b5ecd6" />
      <Hill x={120} y={270} w={320} depth={50} color="#6fcf97" tufts={PAL.grassDark} flowers={4} seed={12} />
      {/* living-wood gate: two trunks + leafy crossbar */}
      <path d="M8 272 C16 220 18 120 14 40 L38 40 C34 120 36 220 44 272 Z" fill={PAL.wood} {...ln(3)} />
      <path d="M232 272 C224 220 222 120 226 40 L202 40 C206 120 204 220 196 272 Z" fill={PAL.wood} {...ln(3)} />
      <path d="M24 90 Q27 150 25 220 M216 110 Q213 170 215 240" fill="none" {...ln(1.8, '#8a5a36')} />
      <rect x="4" y="28" width="232" height="22" rx="11" fill={PAL.wood} {...ln(3)} />
      <path d="M26 40 L90 40 M150 38 L212 38" {...ln(1.8, '#8a5a36')} />
      <Leaf x={20} y={32} rotate={-40} color="#6fcf97" />
      <Leaf x={30} y={30} rotate={-8} scale={0.8} color={PAL.grass} />
      <Leaf x={220} y={32} rotate={40} color="#6fcf97" />
      <Leaf x={210} y={30} rotate={8} scale={0.8} color={PAL.grass} />
      <Leaf x={72} y={30} rotate={-15} scale={0.7} color={PAL.grass} />
      <Leaf x={168} y={30} rotate={15} scale={0.7} color={PAL.grass} />
      {/* halo glow behind the head */}
      <circle cx="120" cy={headY} r="70" fill="url(#hanged-man-glow)" />
      <circle cx="120" cy={headY} r="58" fill="none" {...ln(3, PAL.gold400)} opacity={0.9} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <path key={a} transform={`translate(120 ${headY}) rotate(${a})`} d="M0 -64 L0 -74" {...ln(3, PAL.gold400)} />
      ))}
      {/* ribbon from the branch down to the ankle */}
      <path d="M134 48 C130 56 138 62 134 70" fill="none" {...ln(8)} />
      <path d="M134 48 C130 56 138 62 134 70" fill="none" {...ln(4, PAL.pink400)} />
      {/* free hind leg bent behind (the classic "4"), then the tied leg hanging straight */}
      <Leg d="M104 104 C94 92 96 80 110 78" paw={{ x: 113, y: 77 }} rot={-80} />
      <Leg d="M136 106 L135 76" paw={{ x: 135, y: 72 }} rot={180} />
      <Cat
        uid="hanged-man-cat"
        {...place}
        shadow={false}
        fur={FUR}
        ears="folded"
        eyeColor="#e0894a"
        expression="serene"
        pose="paws-up"
        tail="up"
      />
      {/* ribbon wrapped around the ankle + bow */}
      <path d="M124 80 Q135 84 146 80" fill="none" {...ln(8)} />
      <path d="M124 80 Q135 84 146 80" fill="none" {...ln(4, PAL.pink400)} />
      <path d="M144 80 L158 70 C162 77 160 85 154 87 Z M144 82 L156 94 C150 97 145 94 144 90 Z" fill={PAL.pink400} {...ln(2.2)} />
      <circle cx="145" cy="82" r="4" fill={PAL.pink300} {...ln(2)} />
      {/* bow knot on the branch */}
      <path d="M134 44 L122 36 C119 42 121 49 126 50 Z M134 44 L146 36 C149 42 147 49 142 50 Z" fill={PAL.pink400} {...ln(2.2)} />
      <circle cx="134" cy="45" r="4.5" fill={PAL.pink300} {...ln(2)} />
      <Sparkle x={48} y={112} size={7} color={PAL.gold400} />
      <Sparkle x={194} y={150} size={6} color={PAL.gold400} />
      <Sparkle x={186} y={98} size={4} color={PAL.gold400} />
    </g>
  )
}
