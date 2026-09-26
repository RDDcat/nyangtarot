// VII. The Chariot — a Bengal riding a cardboard-box chariot under a starry canopy, two sphinx cats in front.
import { Cat } from '../Cat.tsx'
import { PAL, Box, Star, Starfield } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function Wheel({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={PAL.cardboard} {...ln(3)} />
      <circle cx={x} cy={y} r={r - 7} fill="#f0c48e" {...ln(2)} />
      {[0, 45, 90, 135].map((a) => (
        <path key={a} d={`M${x} ${y - r + 7} L${x} ${y + r - 7}`} transform={`rotate(${a} ${x} ${y})`} {...ln(2.5, '#b57c46')} />
      ))}
      <circle cx={x} cy={y} r={5} fill={PAL.gold400} {...ln(2)} />
    </g>
  )
}

export default function ChariotArt() {
  const boxY = 252
  return (
    <g>
      <defs>
        <linearGradient id="chariot-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night700} />
          <stop offset="0.5" stopColor="#c0587a" />
          <stop offset="0.8" stopColor="#ff9f5a" />
          <stop offset="1" stopColor="#ffc987" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#chariot-sky)" />
      <Starfield seed={21} count={18} h={110} sparkles={3} />
      {/* distant city walls */}
      <path d="M0 214 L0 196 L14 196 L14 188 L26 188 L26 196 L44 196 L44 182 L56 172 L68 182 L68 196 L172 196 L172 182 L184 172 L196 182 L196 196 L214 196 L214 188 L226 188 L226 196 L240 196 L240 214 Z" fill="#8a3f6a" opacity={0.75} />
      {/* road */}
      <path d="M-10 220 L250 220 L250 310 L-10 310 Z" fill="#e7a86b" {...ln(3)} />
      <path d="M102 222 L90 300 M138 222 L150 300" {...ln(2, '#c98a52')} />

      {/* canopy poles + starry canopy */}
      <path d="M46 230 L46 50 M194 230 L194 50" {...ln(8)} />
      <path d="M46 230 L46 50 M194 230 L194 50" {...ln(3.5, PAL.gold400)} />
      <path d="M32 50 C70 26 170 26 208 50 L208 62 C197 71 186 62 175 71 C164 62 153 71 142 64 C131 71 120 64 109 71 C98 64 87 71 76 64 C65 71 54 62 43 71 C36 67 32 64 32 62 Z" fill={PAL.night600} {...ln(3)} />
      <Star x={76} y={49} r={6} color={PAL.gold300} outline={false} />
      <Star x={120} y={42} r={7} color={PAL.gold300} outline={false} />
      <Star x={164} y={49} r={6} color={PAL.gold300} outline={false} />
      <circle cx="32" cy="56" r="5" fill={PAL.gold400} {...ln(2)} />
      <circle cx="208" cy="56" r="5" fill={PAL.gold400} {...ln(2)} />

      {/* the charioteer in the box */}
      <Cat uid="chariot-cat" x={120} y={250} scale={0.78} fur="#e8a94f" pattern="spotted" eyeColor="#8fd16a" expression="smile" tail="down" shadow={false}
        front={<Star x={120} y={78} r={13} color={PAL.gold400} />} />
      <Box x={120} y={boxY} w={156} h={50} />
      {[94, 146].map((px) => (
        <g key={px}>
          <ellipse cx={px} cy={boxY - 50} rx={11} ry={8} fill="#e8a94f" {...ln(2.5)} />
          <path d={`M${px - 3.5} ${boxY - 53} L${px - 3.5} ${boxY - 47} M${px + 3.5} ${boxY - 53} L${px + 3.5} ${boxY - 47}`} {...ln(1.8)} />
        </g>
      ))}
      <Wheel x={46} y={252} r={26} />
      <Wheel x={194} y={252} r={26} />

      {/* sphinx cats */}
      <Cat uid="chariot-sphinx1" x={80} y={288} scale={0.3} flip fur="#352d42" belly="#4a4058" collar={PAL.gold400} eyeColor="#f5d04a" expression="serene" rim={PAL.gold300} tail="down" />
      <Cat uid="chariot-sphinx2" x={160} y={288} scale={0.3} fur={PAL.white} collar={PAL.gold400} eyeColor="#6fb6ff" expression="serene" tail="down" />
    </g>
  )
}
