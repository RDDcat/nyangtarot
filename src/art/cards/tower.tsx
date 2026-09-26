// XVI The Tower — lightning topples a cat tower; a startled silver tabby leaps out mid-air, crown flying.
import { Cat } from '../Cat.tsx'
import { PAL, Crown, Sparkle, Starfield, YarnBall } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const BOLT = '#ffd166'
const CARPET = '#e9d3b0'
const SISAL = '#c99a5e'

function Post({ y1, y2 }: { y1: number; y2: number }) {
  const rings = []
  for (let y = y1 - 7; y > y2 + 2; y -= 7) rings.push(y)
  return (
    <g>
      <rect x="-9" y={y2} width="18" height={y1 - y2} fill={SISAL} {...ln(2.5)} />
      {rings.map((y) => <path key={y} d={`M-8 ${y} L8 ${y - 3}`} {...ln(1.5, '#8a6236')} />)}
    </g>
  )
}

/** Cat tower in local space: base at (0,0), grows up to y ≈ -196. */
function CatTower() {
  return (
    <g>
      <rect x="-42" y="-12" width="84" height="12" rx="4" fill={CARPET} {...ln(2.8)} />
      <Post y1={-12} y2={-84} />
      <rect x="-36" y="-94" width="72" height="11" rx="4" fill={CARPET} {...ln(2.8)} />
      <Post y1={-94} y2={-110} />
      <rect x="-32" y="-152" width="64" height="44" rx="6" fill="#b89bdc" {...ln(2.8)} />
      <circle cx="0" cy="-130" r="13" fill={PAL.night900} {...ln(2.4)} />
      <path d="M-7 -121 C-8 -130 -2 -132 0 -138 C3 -132 8 -130 7 -121 Z" fill="#ff9f5a" {...ln(1.6)} />
      <path d="M-3 -121 C-3 -126 0 -127 0 -130 C1 -127 3 -126 3 -121 Z" fill={BOLT} />
      <Post y1={-152} y2={-182} />
      <rect x="-28" y="-192" width="56" height="11" rx="4" fill={CARPET} {...ln(2.8)} />
      {/* dangling pompom toy */}
      <path d="M-30 -86 L-30 -64" {...ln(1.8)} />
      <circle cx="-30" cy="-60" r="5" fill={PAL.pink400} {...ln(2)} />
    </g>
  )
}

export default function TowerArt() {
  return (
    <g>
      <defs>
        <linearGradient id="tower-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night900} />
          <stop offset="1" stopColor={PAL.night600} />
        </linearGradient>
        <radialGradient id="tower-flash">
          <stop offset="0" stopColor="#fff3c4" stopOpacity="0.9" />
          <stop offset="1" stopColor={BOLT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#tower-sky)" />
      <Starfield seed={16} count={26} h={180} sparkles={3} opacity={0.8} />
      <circle cx="46" cy="84" r="70" fill="url(#tower-flash)" />
      {/* lightning bolt */}
      <path d="M118 -4 L86 38 L104 42 L58 84 L78 50 L62 46 L84 -4 Z" fill={BOLT} {...ln(3)} />
      {/* ground */}
      <path d="M0 270 C60 258 180 258 240 270 L240 300 L0 300 Z" fill={PAL.night700} {...ln(3)} />
      {/* toppling cat tower */}
      <g transform="translate(80 284) rotate(-13)">
        <CatTower />
      </g>
      {/* impact burst at the top */}
      <path d="M52 70 L60 58 L62 72 L76 66 L68 78 L82 84 L66 88 L70 102 L58 92 L48 104 L48 90 L34 92 L44 82 L32 72 L46 74 Z" fill={BOLT} {...ln(2.4)} opacity={0.95} />
      <Crown x={24} y={56} rotate={-32} scale={0.62} />
      {/* the cat is airborne: shadow on the ground far below + leap arcs trailing back to the tower */}
      <ellipse cx="156" cy="274" rx="44" ry="6" fill={PAL.night950} opacity={0.35} />
      <Cat
        uid="tower-cat"
        x={150}
        y={240}
        rotate={14}
        scale={0.72}
        shadow={false}
        fur="#c9ccd6"
        pattern="tabby"
        patternColor="#3d3a4a"
        eyeColor="#8fd16a"
        expression="surprised"
        pose="paws-up"
        tail="curl"
      />
      <path d="M138 266 L136 254 M154 268 L153 256 M170 266 L171 254" fill="none" {...ln(3.2, PAL.violet300)} />
      {/* comic shock lines above the head */}
      <path d="M144 56 L140 44 M160 54 L164 42 M130 64 L120 56" {...ln(3, BOLT)} />
      <YarnBall x={124} y={264} r={11} color={PAL.pink300} rotate={20} />
      <Sparkle x={210} y={96} size={8} color={BOLT} />
      <Sparkle x={226} y={140} size={5} color={BOLT} />
      <Sparkle x={128} y={108} size={6} color={BOLT} />
      <Sparkle x={28} y={130} size={5} color={BOLT} />
    </g>
  )
}
