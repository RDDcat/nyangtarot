// XIV Temperance — a winged ragdoll pours milk between two cups, one foot in the pond; irises and a path to the sunrise.
import { Cat } from '../Cat.tsx'
import { PAL, MilkCup, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function Iris({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 40 L0 0" {...ln(2.5, PAL.grassDark)} />
      <path d="M-2 40 C-10 26 -10 14 -6 6 M3 40 C12 28 12 18 9 12" fill="none" {...ln(3, PAL.grass)} />
      <path d="M0 -2 C-8 -10 -6 -22 0 -24 C6 -22 8 -10 0 -2 Z" fill="#8b6be0" {...ln(2)} />
      <path d="M0 -2 C-8 -4 -16 -2 -15 6 C-10 8 -4 5 0 -2 Z M0 -2 C8 -4 16 -2 15 6 C10 8 4 5 0 -2 Z" fill={PAL.violet500} {...ln(2)} />
      <path d="M-8 1 L-3 -1" {...ln(2, PAL.gold400)} />
    </g>
  )
}

/** Soft feathered angel wings (canonical cat space, behind the body): rounded tips, scalloped feather edge. */
const WING = 'M0 0 C-12 -30 -44 -52 -68 -42 C-78 -38 -78 -26 -68 -22 C-76 -14 -70 -4 -60 -6 C-64 4 -54 12 -44 6 C-46 16 -34 20 -28 12 C-26 20 -12 18 -8 10 C-5 7 -2 4 0 0 Z'
const AngelWings = (
  <g>
    {[1, -1].map((sx) => (
      <g key={sx} transform={`translate(${120 - sx * 34} 222) scale(${sx * 1.35} 1.35) rotate(${sx > 0 ? 36 : 30})`}>
        <path d={WING} fill={PAL.white} {...ln(2.7)} />
        <path d="M-14 -8 C-26 -18 -42 -26 -58 -28 M-18 2 C-28 -4 -40 -8 -50 -8" fill="none" {...ln(1.8, '#bcd7ee')} />
      </g>
    ))}
  </g>
)

/** Tilted cup at the raised paw pouring milk down (canonical cat space; the cat is flipped, so +x = outward). */
const Pour = (
  <g>
    <path d="M208 190 C228 194 242 212 244 238" fill="none" {...ln(11)} />
    <path d="M208 190 C228 194 242 212 244 238" fill="none" {...ln(5.5, '#ffffff')} />
    <MilkCup x={182} y={184} rotate={108} scale={1.2} color={PAL.gold400} emblem={PAL.sky300} />
  </g>
)

export default function TemperanceArt() {
  return (
    <g>
      <defs>
        <linearGradient id="temperance-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fc3f7" />
          <stop offset="0.55" stopColor="#cdeeff" />
          <stop offset="0.8" stopColor="#fff0cf" />
        </linearGradient>
        <linearGradient id="temperance-pond" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.sky300} />
          <stop offset="1" stopColor="#5fa8e0" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#temperance-sky)" />
      {/* soft rainbow */}
      {['#ff9fb8', '#ffd98a', PAL.mint300, '#b9a4f5'].map((c, i) => (
        <path key={c} d={`M${-20 + i * 9} 214 A${140 - i * 9} ${150 - i * 9} 0 0 1 ${260 - i * 9} 214`} fill="none" stroke={c} strokeWidth="9" opacity={0.55} />
      ))}
      {/* sunrise with a crown of rays at the end of the path, far right */}
      <path d="M170 216 L196 186 L218 216 Z" fill="#a6cfbd" {...ln(2.5)} />
      <g transform="translate(224 214)">
        {[-70, -45, -20, 5].map((a) => <path key={a} transform={`rotate(${a})`} d="M0 -28 L0 -40" {...ln(3, PAL.gold400)} />)}
        <circle r="20" fill="#ffe08a" {...ln(2.5)} />
      </g>
      <path d="M0 214 L240 214 L240 300 L0 300 Z" fill={PAL.mint300} />
      <path d="M0 214 L240 214" {...ln(3)} />
      {/* winding path to the sunrise */}
      <path d="M196 214 C200 222 186 230 194 240 C200 248 186 256 180 262 L214 262 C220 254 212 246 208 240 C202 230 212 222 204 214 Z" fill="#fff0cf" {...ln(2.2)} />
      {/* pond */}
      <ellipse cx="172" cy="280" rx="86" ry="26" fill="url(#temperance-pond)" {...ln(3)} />
      <path d="M204 270 Q214 266 224 270 M190 292 Q200 288 210 292" fill="none" {...ln(2, '#ffffff')} opacity={0.8} />
      <Cat
        uid="temperance-cat"
        x={134}
        y={272}
        scale={0.86}
        flip
        fur="#f5e9d6"
        pattern="pointed"
        patternColor="#8a6650"
        longHair
        eyeColor="#6fb6ff"
        expression="smile"
        pose="paw-up"
        behind={AngelWings}
        held={Pour}
      />
      {/* irises growing at the water's edge */}
      <Iris x={206} y={252} s={0.7} />
      <Iris x={224} y={240} s={0.9} />
      {/* ground cup catching the milk */}
      <MilkCup x={29} y={271} scale={1.05} color={PAL.gold400} emblem={PAL.sky300} />
      {/* ripples around the paw in the water */}
      <path d="M126 270 C136 276 158 276 168 270" fill="none" {...ln(2.2, '#ffffff')} />
      <path d="M118 276 C132 284 164 284 178 276" fill="none" {...ln(1.8, '#ffffff')} opacity={0.7} />
      <Sparkle x={16} y={200} size={5} color={PAL.gold300} />
      <Sparkle x={200} y={40} size={6} color={PAL.white} />
      <Sparkle x={30} y={70} size={5} color={PAL.white} />
    </g>
  )
}
