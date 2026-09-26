// VI. The Lovers — 삼색이 + 고등어 태비 nose-to-nose under a winged sun, a tree on each side.
import { Cat } from '../Cat.tsx'
import { PAL, Cloud, Heart, Sparkle, Sun, blobPath } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function Tree({ x, fruit, crown, seed }: { x: number; fruit: string; crown: string; seed: number }) {
  return (
    <g>
      <path d={`M${x - 6} 262 C${x - 4} 230 ${x - 4} 190 ${x - 2} 160 L${x + 4} 160 C${x + 5} 190 ${x + 6} 230 ${x + 9} 262 Z`} fill={PAL.wood} {...ln(3)} />
      <path d={blobPath(x + 2, 140, 40, 44, seed, 0.14)} fill={crown} {...ln(3)} />
      <path d={blobPath(x - 8, 128, 16, 14, seed + 3, 0.2)} fill="#fff" opacity={0.28} />
      {[[-18, 124], [14, 118], [-4, 152], [22, 150], [-22, 158], [4, 132]].map(([dx, dy], i) => (
        <circle key={i} cx={x + dx} cy={dy} r={5} fill={fruit} {...ln(2)} />
      ))}
    </g>
  )
}

export default function LoversArt() {
  return (
    <g>
      <defs>
        <linearGradient id="lovers-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb3c8" />
          <stop offset="0.55" stopColor="#ffd6e0" />
          <stop offset="1" stopColor="#fff1e6" />
        </linearGradient>
        <radialGradient id="lovers-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6c9" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff6c9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#lovers-sky)" />
      <circle cx="120" cy="58" r="78" fill="url(#lovers-glow)" />
      <Cloud x={34} y={96} scale={0.55} color={PAL.white} shade="#ffe3ea" opacity={0.9} />
      <Cloud x={208} y={86} scale={0.5} color={PAL.white} shade="#ffe3ea" opacity={0.9} />

      {/* angel: winged sun */}
      {[1, -1].map((sx) => (
        <g key={sx} transform={`translate(120 56) scale(${sx} 1)`}>
          <path d="M14 -2 C26 -26 58 -36 84 -28 C80 -22 76 -19 70 -17 C78 -13 78 -7 72 -4 C66 0 58 0 52 -2 C56 4 52 9 44 10 C32 11 20 8 14 -2 Z" fill={PAL.white} {...ln(3)} />
          <path d="M30 -10 C42 -18 56 -22 70 -22 M34 -2 C42 -6 50 -8 58 -8" fill="none" {...ln(2, '#ffc2d2')} />
        </g>
      ))}
      <Sun x={120} y={52} r={22} rays={12} face color={PAL.gold400} rayColor={PAL.gold300} />

      {/* garden floor */}
      <path d="M-10 262 C50 248 190 248 250 262 L250 310 L-10 310 Z" fill={PAL.grass} {...ln(3)} />
      <Tree x={20} crown="#8fd79c" fruit={PAL.pink300} seed={4} />
      <Tree x={218} crown="#7fcf8e" fruit="#ff6b6b" seed={9} />

      {/* the two cats, cheek to cheek — tails curl outward so nothing crosses between them */}
      <Cat uid="lovers-cat1" x={76} y={276} scale={0.66} flip pattern="calico" fur={PAL.white} eyeColor="#f0a23a" headTilt={-7} expression="happy" tail="curl" />
      <Cat uid="lovers-cat2" x={164} y={276} scale={0.66} fur="#9aa0ad" pattern="mackerel" eyeColor="#8fd16a" headTilt={-7} expression="happy" tail="curl" />

      <Heart x={120} y={110} scale={1.4} color={PAL.pink400} />
      <Sparkle x={92} y={92} size={5} color={PAL.pink400} />
      <Sparkle x={150} y={96} size={4} color={PAL.pink400} />
      <Heart x={60} y={286} scale={0.5} color={PAL.pink300} />
      <Heart x={184} y={288} scale={0.45} color={PAL.pink300} />
    </g>
  )
}
