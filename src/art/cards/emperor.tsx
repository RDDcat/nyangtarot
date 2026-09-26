// IV. THE EMPEROR — 황제 메인쿤: on a ram-horned stone throne, crowned, red robe, ankh scepter, mountains behind.
import { Cat } from '../Cat.tsx'
import { PAL, Crown } from '../props.tsx'

const INK = PAL.ink
const RED = '#e06a5a'
const RED_DK = '#b8404a'
const STONE = '#b7aec6'
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function RamHorn({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <path d="M0 0 C-16 -2 -20 -20 -8 -24 C2 -27 8 -16 0 -12 C-5 -10 -7 -16 -3 -17" fill="none" {...ln(9)} />
      <path d="M0 0 C-16 -2 -20 -20 -8 -24 C2 -27 8 -16 0 -12 C-5 -10 -7 -16 -3 -17" fill="none" {...ln(4.5, PAL.gold300)} />
    </g>
  )
}

/** Ankh-topped scepter, canonical cat space, grip at the raised paw (184,180). */
function Scepter() {
  return (
    <g transform="rotate(15 184 180)">
      <path d="M184 192 L184 118" {...ln(9)} />
      <path d="M184 192 L184 118" {...ln(4.5, PAL.gold400)} />
      <path d="M172 120 L196 120" {...ln(9)} />
      <path d="M172 120 L196 120" {...ln(4.5, PAL.gold400)} />
      <ellipse cx="184" cy="104" rx="8" ry="11" fill="none" {...ln(9)} />
      <ellipse cx="184" cy="104" rx="8" ry="11" fill="none" {...ln(4.5, PAL.gold400)} />
    </g>
  )
}

/** Red robe draped behind the cat (canonical space). */
function Robe() {
  return (
    <g>
      <path d="M84 162 C46 172 30 226 22 276 L218 276 C210 226 194 172 156 162 Z" fill={RED} {...ln(3)} />
      <path d="M40 236 L32 276 M200 236 L208 276 M56 200 L48 240" fill="none" {...ln(2, RED_DK)} />
      <path d="M84 162 C100 176 140 176 156 162 C146 158 94 158 84 162 Z" fill={PAL.white} {...ln(2.5)} />
    </g>
  )
}

export default function EmperorArt() {
  return (
    <g>
      <defs>
        <linearGradient id="emperor-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8f63" />
          <stop offset="1" stopColor="#ffc98a" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#emperor-sky)" />
      <path d="M-10 170 L30 110 L54 140 L84 92 L120 150 L152 100 L184 146 L214 108 L250 160 L250 300 L-10 300 Z" fill="#b8604a" {...ln(2.5)} />
      <path d="M-10 196 L40 152 L80 180 L130 140 L180 178 L220 150 L250 170 L250 300 L-10 300 Z" fill="#8c4a42" {...ln(2.5)} />

      {/* stone throne */}
      <path d="M34 300 L34 118 C34 96 58 84 120 84 C182 84 206 96 206 118 L206 300 Z" fill={STONE} {...ln(3)} />
      <path d="M50 300 L50 126 C50 110 70 102 120 102 C170 102 190 110 190 126 L190 300" fill="none" {...ln(2, '#948aa6')} />
      <RamHorn x={44} y={99} />
      <RamHorn x={196} y={99} flip />
      <path d="M20 262 L220 262 L226 300 L14 300 Z" fill={STONE} {...ln(3)} />
      <path d="M20 274 L220 274" {...ln(2, '#948aa6')} />

      <Cat
        uid="emperor-cat" x={120} y={264} scale={0.86}
        fur="#9a6a44" pattern="tabby" patternColor="#4e3322" ears="tufted" longHair eyeColor="#f0a23a"
        expression="determined" pose="paw-up" tail="down" shadow={false}
        behind={<Robe />}
        held={<Scepter />}
        front={<Crown x={120} y={88} scale={1.15} gem={RED} />}
      />
      {/* golden orb */}
      <g transform="translate(44 254)">
        <circle r="11" fill={PAL.gold400} {...ln(2.5)} />
        <path d="M-11 0 L11 0" {...ln(2)} />
        <path d="M0 -11 L0 -20 M-4 -16 L4 -16" {...ln(2.5)} />
        <circle cx="-4" cy="-4" r="2.5" fill="#fff" opacity={0.6} />
      </g>
    </g>
  )
}
