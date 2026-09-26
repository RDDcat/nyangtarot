// II. THE HIGH PRIESTESS — 여사제 러시안블루: seated between a dark and a light pillar, moon crown, veil and scroll.
import { Cat } from '../Cat.tsx'
import { PAL, Pillar, Crescent, Starfield } from '../props.tsx'

const INK = PAL.ink
const VEIL = '#34508f'
const FUR = '#8a9bb8'
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function Pomegranate({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="5" fill="#e0526a" {...ln(1.6)} />
      <path d="M-2.5 -4.5 L-1.5 -7.5 L0 -5 L1.5 -7.5 L2.5 -4.5" fill="#e0526a" {...ln(1.4)} />
    </g>
  )
}

/** Triple-moon crown in canonical cat space (sits on the head top 120,80). */
function MoonCrown() {
  return (
    <g>
      {/* ☽○☾ ornaments first, the circlet overlaps their bases so they sit on it */}
      <Crescent x={95} y={75} r={13} rotate={180} color={PAL.gold300} />
      <Crescent x={145} y={75} r={13} color={PAL.gold300} />
      <circle cx="120" cy="70" r="13" fill={PAL.white} {...ln(3)} />
      <circle cx="115.5" cy="65.5" r="3.2" fill={PAL.sky300} opacity={0.6} />
      <path d="M88 96 Q120 80 152 96" fill="none" {...ln(9)} />
      <path d="M88 96 Q120 80 152 96" fill="none" {...ln(4.5, PAL.gold400)} />
    </g>
  )
}

/** Rolled scroll lying across the front paws (scene space). */
function Scroll() {
  return (
    <g transform="translate(120 257) rotate(-3)">
      <rect x="-42" y="-9" width="84" height="18" rx="4" fill={PAL.paper} {...ln(2.5)} />
      <path d="M-30 -3.5 L28 -3.5" fill="none" {...ln(1.6, PAL.inkSoft)} />
      <ellipse cx="-42" cy="0" rx="5.5" ry="10.5" fill={PAL.paper2} {...ln(2.5)} />
      <ellipse cx="42" cy="0" rx="5.5" ry="10.5" fill={PAL.paper2} {...ln(2.5)} />
      <circle cx="-42" cy="0" r="2" fill={PAL.inkSoft} />
      <circle cx="42" cy="0" r="2" fill={PAL.inkSoft} />
    </g>
  )
}

/** The cat's ground paws redrawn on top of the scroll (matches <Cat> GroundPaw at x=120,y=270,scale 0.8). */
function FrontPaw({ x, color }: { x: number; color: string }) {
  const y = 270 + (267 - 275) * 0.8
  return (
    <g>
      <ellipse cx={x} cy={y} rx="11.6" ry="6.8" fill={color} {...ln(2.4)} />
      <path d={`M${x - 3.6} ${y - 3.2} L${x - 3.6} ${y + 1.2} M${x + 3.6} ${y - 3.2} L${x + 3.6} ${y + 1.2}`} {...ln(1.6)} />
    </g>
  )
}

export default function HighPriestessArt() {
  const dots: [number, number][] = []
  for (let r = 0; r < 5; r++) for (let c = 0; c < 4; c++) {
    const d: [number, number] = [62 + c * 39 + (r % 2) * 19, 60 + r * 38]
    if (!(d[0] === 120 && d[1] === 98)) dots.push(d) // keep the crown area clean
  }
  return (
    <g>
      <defs>
        <linearGradient id="high-priestess-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night900} />
          <stop offset="1" stopColor="#1f2f66" />
        </linearGradient>
        <radialGradient id="high-priestess-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={PAL.sky300} stopOpacity="0.7" />
          <stop offset="1" stopColor={PAL.sky300} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#high-priestess-bg)" />
      <Starfield seed={22} count={24} sparkles={3} color={PAL.sky300} />

      {/* veil hung between the pillars */}
      <path d="M40 40 L200 40 L200 262 L40 262 Z" fill={VEIL} {...ln(3)} />
      <path d="M40 40 Q80 54 120 40 Q160 54 200 40" fill="none" {...ln(2.5, PAL.gold400)} />
      {dots.map(([x, y]) => <Pomegranate key={`${x}-${y}`} x={x} y={y} />)}
      <circle cx="120" cy="128" r="70" fill="url(#high-priestess-glow)" />

      <Pillar x={26} y={296} h={268} w={30} color="#3a3148" shade="#221a33" />
      <Pillar x={214} y={296} h={268} w={30} color={PAL.paper} shade={PAL.stone} />

      {/* stone dais */}
      <path d="M40 262 L200 262 L208 300 L32 300 Z" fill={PAL.night700} {...ln(3)} />
      <path d="M36 280 L204 280" {...ln(2, PAL.night600)} />

      <Cat
        uid="high-priestess-cat" x={120} y={270} scale={0.8}
        fur={FUR} eyeColor="#7fd67a" expression="smile" tail="down"
        front={<MoonCrown />}
      />
      <Scroll />
      <FrontPaw x={108} color={FUR} />
      <FrontPaw x={132} color={FUR} />
    </g>
  )
}
