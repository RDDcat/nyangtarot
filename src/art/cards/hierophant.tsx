// V. THE HIEROPHANT — 교황 오드아이 흰냥: tall mitre, blessing paw, two crossed keys, between two temple pillars.
import { Cat } from '../Cat.tsx'
import { PAL, Pillar, Sparkle } from '../props.tsx'

const INK = PAL.ink
const WINE = '#8c3050'
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

/** Tall mitre in canonical cat space, sitting on the head top (120,80). */
function Mitre() {
  return (
    <g>
      <path d="M92 94 C88 60 102 30 120 14 C138 30 152 60 148 94 Q120 84 92 94 Z" fill={PAL.white} {...ln(3)} />
      <path d="M120 16 L120 88" {...ln(9, PAL.gold400)} />
      <path d="M113 16 L113 88 M127 16 L127 88" fill="none" {...ln(2)} opacity={0.6} />
      <path d="M92 94 Q120 84 148 94 L148 84 Q120 74 92 84 Z" fill={PAL.gold400} {...ln(2.5)} />
      <path d="M112 50 L128 50 M120 42 L120 60" {...ln(7)} />
      <path d="M112 50 L128 50 M120 42 L120 60" {...ln(3.5, WINE)} />
      <circle cx="120" cy="14" r="4" fill={PAL.gold400} {...ln(2)} />
    </g>
  )
}

function Key({ rot, color }: { rot: number; color: string }) {
  return (
    <g transform={`rotate(${rot})`}>
      <path d="M0 -30 L0 26 M0 20 L8 20 M0 12 L6 12" fill="none" {...ln(8)} />
      <path d="M0 -30 L0 26 M0 20 L8 20 M0 12 L6 12" fill="none" {...ln(3.5, color)} />
      <circle cx="0" cy="-36" r="9" fill={color} {...ln(2.5)} />
      <circle cx="0" cy="-36" r="3.5" fill={WINE} {...ln(1.6)} />
    </g>
  )
}

export default function HierophantArt() {
  return (
    <g>
      <defs>
        <linearGradient id="hierophant-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.paper} />
          <stop offset="1" stopColor={PAL.paper2} />
        </linearGradient>
        <linearGradient id="hierophant-arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8405e" />
          <stop offset="1" stopColor={WINE} />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#hierophant-wall)" />
      {/* temple arch backdrop */}
      <path d="M46 300 L46 110 C46 58 80 30 120 30 C160 30 194 58 194 110 L194 300 Z" fill="url(#hierophant-arch)" {...ln(3)} />
      <path d="M58 300 L58 112 C58 68 86 44 120 44 C154 44 182 68 182 112 L182 300" fill="none" {...ln(2.5, PAL.gold400)} />
      <Sparkle x={70} y={70} size={5} color={PAL.gold300} />
      <Sparkle x={172} y={78} size={4} color={PAL.gold300} />

      <Pillar x={24} y={290} h={260} w={24} />
      <Pillar x={216} y={290} h={260} w={24} />

      {/* floor */}
      <path d="M0 262 L240 262 L240 300 L0 300 Z" fill={PAL.stone} {...ln(3)} />
      <path d="M0 280 L240 280 M60 262 L50 300 M120 262 L120 300 M180 262 L190 300" fill="none" {...ln(1.8, '#b8acd0')} />

      <Cat
        uid="hierophant-cat" x={120} y={270} scale={0.76}
        fur="#fbf7f0" eyeColor="#6fb6ff" eyeColor2="#f5d04a" expression="smile" pose="paw-up" tail="curl"
        collar={WINE}
        front={
          <g>
            <Mitre />
            {/* crossed gold & silver keys worn as a pendant on the collar (bows down, papal style) */}
            <path d="M120 186 L120 199" {...ln(3, PAL.gold400)} />
            <g transform="translate(120 224) scale(0.82)">
              <Key rot={140} color="#c3c9da" />
              <Key rot={-140} color={PAL.gold400} />
            </g>
            <circle cx="120" cy="200" r="4.5" fill={PAL.gold400} {...ln(2)} />
          </g>
        }
      />

    </g>
  )
}
