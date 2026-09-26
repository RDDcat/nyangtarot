// XI Justice — a cow-pattern cat on a throne between pillars, sword raised, scales balanced (fish vs yarn).
import { Cat } from '../Cat.tsx'
import { PAL, Crown, Fish, YarnBall, Pillar, Sparkle } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

/** Sword, grip at origin, blade up (canonical cat space). */
function Sword() {
  return (
    <g transform="translate(56 180) rotate(-9)">
      <path d="M-6 -12 L-6 -118 L0 -132 L6 -118 L6 -12 Z" fill="#eef2fb" {...ln(2.5)} />
      <path d="M0 -16 L0 -116" {...ln(1.6, '#b9c2da')} />
      <rect x="-17" y="-16" width="34" height="8" rx="4" fill={PAL.gold400} {...ln(2.4)} />
      <path d="M0 -8 L0 14" {...ln(9)} />
      <path d="M0 -8 L0 14" {...ln(4.5, '#8a5fc8')} />
      <circle cy="18" r="5.5" fill={PAL.gold400} {...ln(2.2)} />
    </g>
  )
}

/** Balanced scales hanging from the raised paw (canonical cat space). */
function Scales() {
  const px = 186, by = 204, l = 150, r = 222, py = 240
  const pan = (x: number) => (
    <g>
      <path d={`M${x} ${by} L${x - 17} ${py} M${x} ${by} L${x + 17} ${py}`} {...ln(1.8, '#8a6a2a')} />
      <path d={`M${x - 19} ${py} Q${x} ${py + 17} ${x + 19} ${py} Z`} fill={PAL.gold400} {...ln(2.4)} />
    </g>
  )
  return (
    <g>
      <path d={`M184 180 L${px} ${by}`} {...ln(4, '#8a6a2a')} />
      <Fish x={l} y={py - 6} scale={0.72} color={PAL.sky300} />
      <YarnBall x={r} y={py - 9} r={10.5} color={PAL.pink300} thread={false} />
      {pan(l)}
      {pan(r)}
      <rect x={l - 2} y={by - 3.5} width={r - l + 4} height="7" rx="3.5" fill={PAL.gold400} {...ln(2.4)} />
      <circle cx={px} cy={by} r="5" fill={PAL.gold300} {...ln(2.2)} />
    </g>
  )
}

export default function JusticeArt() {
  const fold = (x: number) => <path key={x} d={`M${x} 26 C${x - 4} 90 ${x + 4} 170 ${x} 246`} fill="none" {...ln(2.2, '#4a2f8f')} opacity={0.55} />
  return (
    <g>
      <defs>
        <linearGradient id="justice-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe7ff" />
          <stop offset="1" stopColor={PAL.paper} />
        </linearGradient>
        <linearGradient id="justice-curtain" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6a47c2" />
          <stop offset="0.5" stopColor="#8b6be0" />
          <stop offset="1" stopColor="#6a47c2" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#justice-wall)" />
      {/* curtain between the pillars */}
      <rect x="30" y="0" width="180" height="248" fill="url(#justice-curtain)" />
      {[52, 78, 162, 188].map(fold)}
      <path d="M30 0 L210 0 L210 26 Q195 40 180 26 Q165 40 150 26 Q135 40 120 26 Q105 40 90 26 Q75 40 60 26 Q45 40 30 26 Z" fill="#5a3aa8" {...ln(2.5)} />
      <path d="M30 26 Q45 40 60 26 Q75 40 90 26 Q105 40 120 26 Q135 40 150 26 Q165 40 180 26 Q195 40 210 26" fill="none" {...ln(3, PAL.gold400)} />
      {/* pillars */}
      <Pillar x={22} y={252} h={262} w={24} />
      <Pillar x={218} y={252} h={262} w={24} />
      {/* floor */}
      <rect x="0" y="246" width="240" height="54" fill={PAL.paper2} />
      <path d="M0 246 L240 246" {...ln(3)} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${i * 48 - 4} 300 L${i * 48 + 18} 246`} {...ln(1.6, '#e2cfae')} />
      ))}
      <path d="M0 272 L240 272" {...ln(1.6, '#e2cfae')} />
      {/* throne */}
      <path d="M52 250 L52 104 C52 72 78 54 120 54 C162 54 188 72 188 104 L188 250 Z" fill={PAL.gold400} {...ln(3)} />
      <path d="M64 250 L64 110 C64 84 86 68 120 68 C154 68 176 84 176 110 L176 250 Z" fill={PAL.sky300} {...ln(2.4)} />
      <circle cx="52" cy="98" r="7" fill={PAL.gold300} {...ln(2.4)} />
      <circle cx="188" cy="98" r="7" fill={PAL.gold300} {...ln(2.4)} />
      <circle cx="120" cy="50" r="7" fill={PAL.pink400} {...ln(2.4)} />
      <rect x="44" y="252" width="152" height="32" rx="6" fill="#8b6be0" {...ln(3)} />
      <path d="M52 266 L188 266" {...ln(2, PAL.gold400)} />
      <Cat
        uid="justice-cat"
        x={120}
        y={258}
        scale={0.8}
        fur={PAL.white}
        pattern="cow"
        eyeColor="#8fd16a"
        pose="paws-up"
        expression="determined"
        tail="down"
        held={<g><Sword /><Scales /></g>}
        front={<Crown x={120} y={88} scale={0.95} />}
      />
      <Sparkle x={40} y={40} size={6} color={PAL.gold300} />
      <Sparkle x={206} y={60} size={5} color={PAL.gold300} />
    </g>
  )
}
