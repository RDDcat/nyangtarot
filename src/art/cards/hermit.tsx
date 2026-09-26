// IX. The Hermit — a smoky long-haired cat in a hooded cloak on a snowy peak at night, star lantern + staff.
import { Cat, getCatAnchors } from '../Cat.tsx'
import { PAL, Crescent, Star, Starfield } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })
const CLOAK = '#8a6a5a'
const CLOAK_DARK = '#6a4e44'

/** Hood behind the head with a soft point on top (canonical cat space). */
function Hood() {
  return (
    <g>
      <path d="M120 40 C150 52 196 80 198 136 C200 170 180 190 150 196 L90 196 C60 190 40 170 42 136 C44 80 90 52 120 40 Z" fill={CLOAK} {...ln(3)} />
      <path d="M120 58 C150 68 180 92 182 136 C182 160 170 176 150 182 L90 182 C70 176 58 160 58 136 C60 92 90 68 120 58 Z" fill={CLOAK_DARK} />
      {/* cloak falling behind the body */}
      <path d="M78 190 C58 220 46 252 40 278 L200 278 C194 252 182 220 162 190 Z" fill={CLOAK} {...ln(3)} />
    </g>
  )
}

/** Capelet over the shoulders, with a gold clasp (canonical cat space). */
function Capelet() {
  return (
    <g>
      <path d="M80 172 C92 184 106 190 120 190 C134 190 148 184 160 172 C172 186 180 206 178 222 C160 214 140 212 120 218 C100 212 80 214 62 222 C60 206 68 186 80 172 Z" fill={CLOAK} {...ln(3)} />
      <path d="M100 200 L96 214 M140 200 L144 214" {...ln(2, CLOAK_DARK)} />
      <circle cx="120" cy="192" r="6" fill={PAL.gold400} {...ln(2)} />
    </g>
  )
}

/** Star lantern hanging from its handle at (x, y) — handle top is where the paw grips (canonical cat space). */
function StarLantern({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(1.2)`}>
      <path d="M-6 6 C-6 -3 6 -3 6 6" fill="none" {...ln(2.4)} />
      <rect x={-13} y={6} width="26" height="7" rx="2" fill={PAL.night700} {...ln(2.2)} />
      <path d="M-14 13 L14 13 L11 44 L-11 44 Z" fill="#fff3c4" {...ln(2.5)} />
      <Star x={0} y={29} r={8} color={PAL.gold400} outline />
      <rect x={-15} y={44} width="30" height="7" rx="2" fill={PAL.night700} {...ln(2.2)} />
    </g>
  )
}

/** Walking staff gripped by the other raised paw (canonical cat space, drawn behind the body). */
function Staff() {
  return (
    <g>
      <path d="M64 280 L44 44" {...ln(9)} />
      <path d="M64 280 L44 44" {...ln(4, PAL.wood)} />
      <circle cx="43" cy="40" r="7" fill={PAL.wood} {...ln(2.5)} />
    </g>
  )
}

export default function HermitArt() {
  const cat = { x: 124, y: 262, scale: 0.8, flip: true, pose: 'paws-up' as const }
  const a = getCatAnchors(cat)
  const lx = a.raisedPaw.x
  const ly = a.raisedPaw.y
  return (
    <g>
      <defs>
        <linearGradient id="hermit-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night950} />
          <stop offset="0.7" stopColor={PAL.night800} />
          <stop offset="1" stopColor="#2a2c5c" />
        </linearGradient>
        <radialGradient id="hermit-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff3c4" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff3c4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#hermit-sky)" />
      <Starfield seed={9} count={40} h={200} sparkles={5} />
      <Crescent x={200} y={40} r={16} rotate={-30} color={PAL.gold300} />
      {/* far peaks */}
      <path d="M-10 230 L40 170 L70 200 L110 150 L160 214 L190 180 L250 236 L250 300 L-10 300 Z" fill="#2c2f5e" {...ln(2.5)} />
      <path d="M30 182 L40 170 L52 184 L44 190 L38 184 Z M98 166 L110 150 L124 168 L116 174 L108 166 L102 172 Z M182 188 L190 180 L200 190 L192 194 Z" fill="#dfe6ff" />
      {/* snowy summit the hermit stands on */}
      <path d="M-10 300 L-10 262 C30 250 70 242 120 242 C170 242 210 250 250 262 L250 300 Z" fill="#eef2ff" {...ln(3)} />
      <path d="M20 270 q10 -4 20 0 M180 266 q12 -4 24 0 M96 284 q12 -4 24 0" fill="none" {...ln(2, '#b9c3ec')} />

      <circle cx={lx} cy={ly + 26} r={50} fill="url(#hermit-glow)" />
      <Cat uid="hermit-cat" {...cat} fur="#6f6a7c" furShade="#4d4859" longHair eyeColor="#f5d04a" expression="smile" tail="down"
        behind={<><Hood /><Staff /></>} front={<Capelet />}
        held={<StarLantern x={184} y={178} />} />
    </g>
  )
}
