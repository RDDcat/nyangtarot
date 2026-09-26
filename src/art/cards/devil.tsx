// XV The Devil — a smug havana-brown cat in a horn headband on a pedestal, yarn "chains" tied to its temptations.
import { Cat } from '../Cat.tsx'
import { PAL, YarnBall, Box, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const HORN = '#e0405a'
const WING = '#5a1f4f'

function Churu({ x, y, rotate = 0, color = '#ff9f5a', s = 1 }: { x: number; y: number; rotate?: number; color?: string; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s})`}>
      <path d="M-5 -22 L5 -22 L6 20 L-6 20 Z" fill={color} {...ln(2.2)} />
      <path d="M-5 -22 L-3 -26 L-1 -22 L1 -26 L3 -22 L5 -26" fill="none" {...ln(1.8)} />
      <rect x="-4" y="-8" width="8" height="10" rx="2" fill={PAL.white} {...ln(1.6)} />
      <path d="M-6 14 L6 14" {...ln(1.6)} />
    </g>
  )
}

/** Bat wings behind the cat (canonical space). */
const BatWings = (
  <g>
    {[1, -1].map((sx) => (
      <g key={sx} transform={`translate(120 0) scale(${sx} 1) translate(-120 0)`}>
        <path d="M100 196 C80 150 44 118 8 116 C18 132 18 144 12 156 C26 152 36 158 36 172 C48 164 60 170 62 184 C72 178 86 184 100 196 Z" fill={WING} {...ln(3)} />
        <path d="M100 196 C80 164 56 142 26 130 M92 190 C74 176 58 168 42 164" fill="none" {...ln(1.8, '#8a3a7a')} />
      </g>
    ))}
  </g>
)

/** Horn headband (canonical head space, over the head). */
const Horns = (
  <g>
    {[1, -1].map((sx) => (
      <path key={sx} transform={`translate(120 0) scale(${sx} 1) translate(-120 0)`} d="M88 92 C82 76 84 60 94 50 C94 62 100 74 108 84 Z" fill={HORN} {...ln(2.6)} />
    ))}
    <path d="M78 104 C92 80 148 80 162 104" fill="none" {...ln(9)} />
    <path d="M78 104 C92 80 148 80 162 104" fill="none" {...ln(4, '#2e1a2e')} />
  </g>
)

/** Pitchfork-free devil tail tip + raised churu. */
const Held = <Churu x={188} y={150} rotate={12} color={PAL.gold400} s={1.45} />
const TailTip = <path d="M219 158 L208 146 L226 140 Z" fill={HORN} {...ln(2.4)} />

export default function DevilArt() {
  return (
    <g>
      <defs>
        <radialGradient id="devil-bg" cx="0.5" cy="0.42" r="0.7">
          <stop offset="0" stopColor="#e0629a" />
          <stop offset="0.45" stopColor="#c2417a" />
          <stop offset="1" stopColor="#3a1033" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#devil-bg)" />
      {[[26, 40], [214, 58], [40, 150], [204, 170], [120, 24]].map(([x, y], i) => (
        <Sparkle key={i} x={x} y={y} size={i % 2 ? 4 : 6} color={PAL.gold300} />
      ))}
      {/* floor */}
      <path d="M0 256 L240 256 L240 300 L0 300 Z" fill="#4a1840" />
      <path d="M0 256 L240 256" {...ln(3)} />
      {/* pedestal */}
      <path d="M58 226 L182 226 L176 274 L64 274 Z" fill="#7a3a6e" {...ln(3)} />
      <rect x="50" y="216" width="140" height="14" rx="4" fill="#9a4a88" {...ln(3)} />
      <circle cx="94" cy="248" r="7" fill="none" {...ln(3.5, PAL.gold400)} />
      <circle cx="146" cy="248" r="7" fill="none" {...ln(3.5, PAL.gold400)} />
      {/* loose yarn "chains" from the pedestal rings to the temptations */}
      <path d="M88 252 C70 276 56 252 40 266" fill="none" {...ln(7)} />
      <path d="M88 252 C70 276 56 252 40 266" fill="none" {...ln(3.5, PAL.pink300)} />
      <path d="M152 252 C168 274 180 254 190 262" fill="none" {...ln(7)} />
      <path d="M152 252 C168 274 180 254 190 262" fill="none" {...ln(3.5, PAL.mint300)} />
      <Cat
        uid="devil-cat"
        x={120}
        y={220}
        scale={0.74}
        fur="#6b4032"
        eyeColor="#8fd16a"
        expression="smug"
        tail="up"
        pose="paw-up"
        rim={PAL.gold300}
        shadow={false}
        behind={BatWings}
        held={Held}
        front={<g>{Horns}{TailTip}</g>}
      />
      {/* temptations: yarn, churu, and the irresistible box */}
      <YarnBall x={32} y={268} r={17} color={PAL.pink300} thread={false} />
      <Churu x={206} y={250} rotate={18} color={PAL.gold400} s={0.75} />
      <Box x={198} y={286} w={52} h={30} />
      <Churu x={78} y={282} rotate={-72} color="#ff9f5a" s={0.85} />
      <Churu x={146} y={283} rotate={84} color={PAL.mint300} s={0.8} />
    </g>
  )
}
