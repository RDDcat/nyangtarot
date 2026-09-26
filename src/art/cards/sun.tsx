// XIX The Sun — ginger-and-white kitten waving a banner in front of a sunflower garden wall under a big smiling sun.
import { Cat } from '../Cat.tsx'
import { PAL, Sun, Leaf, PawPrint, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const BANNER = '#ff7c5c'

function Sunflower({ x, y, r = 12, stem = 0 }: { x: number; y: number; r?: number; stem?: number }) {
  return (
    <g>
      {stem > 0 && <path d={`M${x} ${y} L${x} ${y + stem}`} {...ln(6)} />}
      {stem > 0 && <path d={`M${x} ${y} L${x} ${y + stem}`} {...ln(2.5, PAL.grassDark)} />}
      <g transform={`translate(${x} ${y})`}>
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse key={i} cx="0" cy={-r} rx={r * 0.38} ry={r * 0.62} transform={`rotate(${i * 30})`} fill={PAL.gold400} {...ln(1.8)} />
        ))}
        <circle r={r * 0.62} fill="#8a5a33" {...ln(2.2)} />
        <circle cx={-r * 0.18} cy={-r * 0.18} r={r * 0.16} fill="#b98050" />
      </g>
    </g>
  )
}

export default function SunArt() {
  const bricks: string[] = []
  for (let row = 0; row < 3; row++) {
    const y = 206 + row * 13
    bricks.push(`M0 ${y} L240 ${y}`)
    for (let bx = row % 2 ? 14 : 0; bx < 240; bx += 28) bricks.push(`M${bx} ${y - 13} L${bx} ${y}`)
  }
  return (
    <g>
      <defs>
        <linearGradient id="sun-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd35c" />
          <stop offset="0.7" stopColor="#ffe9a6" />
          <stop offset="1" stopColor="#fff5d6" />
        </linearGradient>
        <radialGradient id="sun-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.3" stopColor="#fff8dc" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff8dc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#sun-sky)" />

      {/* smiling sun */}
      <circle cx="84" cy="57" r="72" fill="url(#sun-glow)" />
      <Sun x={84} y={57} r={30} rays={14} color={PAL.gold400} rayColor="#ffb13b" face />
      <Sparkle x={184} y={28} size={6} color="#fff" outline />
      <Sparkle x={26} y={130} size={5} color="#fff" outline />

      {/* sunflowers peeking over the garden wall */}
      <Sunflower x={22} y={170} r={14} stem={30} />
      <Sunflower x={58} y={182} r={11} stem={20} />
      <Sunflower x={186} y={176} r={12} stem={26} />
      <Sunflower x={222} y={164} r={14} stem={34} />

      {/* garden wall */}
      <rect x="-4" y="193" width="248" height="42" fill="#efe3cf" {...ln(3)} />
      <path d={bricks.join(' ')} fill="none" {...ln(1.8, '#cdbb9d')} />
      <path d="M-4 193 L244 193" {...ln(3)} />

      {/* meadow */}
      <path d="M-4 236 C60 228 180 228 244 236 L244 304 L-4 304 Z" fill={PAL.grass} {...ln(3)} />
      <path d="M26 262 l2.5 -6 l2.5 5 l2.5 -7 l2.5 8 M200 272 l2.5 -6 l2.5 5 l2.5 -7 l2.5 8" fill="none" {...ln(1.8, PAL.grassDark)} />

      <Cat
        uid="sun-cat"
        x={104}
        y={272}
        scale={0.74}
        kitten
        pose="paw-up"
        fur="#f4a24c"
        pattern="bicolor"
        eyeColor="#8fd16a"
        expression="happy"
        held={
          <g>
            <path d="M182 214 L232 22" {...ln(9)} />
            <path d="M182 214 L232 22" {...ln(4, PAL.wood)} />
            <circle cx="233" cy="18" r="7" fill={PAL.gold400} {...ln(2.5)} />
            <path d="M231 30 C256 18 276 40 304 26 L300 96 C274 110 254 88 216 100 Z" fill={BANNER} {...ln(3.5)} />
            <path d="M220 90 C252 80 272 102 298 88" fill="none" {...ln(2.5, '#ffb199')} />
            <PawPrint x={262} y={64} scale={1} color={PAL.white} />
          </g>
        }
      />

      {/* foreground sunflowers */}
      <Leaf x={18} y={300} rotate={-30} scale={1.1} />
      <Sunflower x={16} y={262} r={15} stem={40} />
      <Leaf x={226} y={300} rotate={30} scale={1.1} />
      <Sunflower x={226} y={250} r={16} stem={50} />
    </g>
  )
}
