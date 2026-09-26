// 0. THE FOOL — 모험가 치즈냥: an orange tabby with a bindle, stepping merrily toward the cliff edge.
import { Cat } from '../Cat.tsx'
import { PAL, Sun, Cloud, Flower, PawPrint } from '../props.tsx'

const INK = PAL.ink
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

/** Bindle stick + polka-dot bundle, in canonical cat space (grip at the raised paw 184,180). */
function Bindle() {
  const CLOTH = '#5aa6f0'
  return (
    <g>
      {/* stick first: the bundle hangs over its tip */}
      <path d="M180 196 L219 88" {...ln(9)} />
      <path d="M180 196 L219 88" {...ln(4.5, PAL.wood)} />
      {/* polka-dot bandana sack, cinched at the top */}
      <path d="M211 104 C186 110 184 152 212 154 L228 154 C256 152 252 110 226 104 Z" fill={CLOTH} {...ln(3)} />
      <path d="M198 144 C210 150 232 150 244 142" fill="none" {...ln(2, '#3f7fc4')} />
      {[[200, 128], [214, 119], [231, 121], [242, 132], [208, 141], [224, 135], [236, 146]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill={PAL.white} />
      ))}
      {/* knot ears */}
      <path d="M214 104 L198 90 L202 107 Z M222 104 L238 90 L234 107 Z" fill={CLOTH} {...ln(2.2)} />
      <circle cx="217.5" cy="103" r="5" fill={CLOTH} {...ln(2.4)} />
    </g>
  )
}

function Butterfly({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-14)`}>
      <path d="M0 0 C-6 -14 -18 -14 -16 -4 C-15 2 -6 3 0 0 Z" fill={PAL.pink300} {...ln(2)} />
      <path d="M0 0 C6 -14 18 -14 16 -4 C15 2 6 3 0 0 Z" fill={PAL.pink300} {...ln(2)} />
      <path d="M0 0 C-5 4 -12 10 -8 12 C-4 13 -1 6 0 0 Z" fill="#ffd166" {...ln(1.8)} />
      <path d="M0 0 C5 4 12 10 8 12 C4 13 1 6 0 0 Z" fill="#ffd166" {...ln(1.8)} />
      <path d="M0 -6 L0 8 M0 -6 L-3 -12 M0 -6 L3 -12" fill="none" {...ln(1.8)} />
    </g>
  )
}

export default function FoolArt() {
  return (
    <g>
      <defs>
        <linearGradient id="fool-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#86c6ff" />
          <stop offset="0.55" stopColor="#cfe7ff" />
          <stop offset="1" stopColor="#fff1c9" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#fool-sky)" />
      <Sun x={194} y={48} r={20} color="#ffd166" rayColor="#ffe8a3" face />
      <Cloud x={52} y={72} scale={0.5} />
      <Cloud x={150} y={112} scale={0.34} opacity={0.9} />

      {/* distant mountains */}
      <path d="M-10 214 L34 168 L58 190 L96 150 L140 198 L172 172 L214 206 L250 186 L250 300 L-10 300 Z" fill="#b8b0ea" {...ln(2)} />
      <path d="M34 168 L44 178 L50 172 L58 190 M96 150 L108 164 L116 158 L126 182 M172 172 L182 182 L190 178" fill="none" {...ln(1.6)} />
      <path d="M26 176 L34 168 L44 178 L38 181 Z M86 160 L96 150 L108 164 L100 166 L94 162 Z M164 180 L172 172 L182 182 Z" fill={PAL.white} />
      <path d="M-10 262 C40 252 90 258 140 254 C180 251 214 258 250 252 L250 300 L-10 300 Z" fill="#e4e0fa" />
      <path d="M186 272 C200 268 216 272 232 268" fill="none" {...ln(1.6, '#c9c2ee')} />

      {/* cliff */}
      <path d="M-6 246 C40 238 120 236 188 244 L196 252 L190 266 L200 280 L194 304 L-6 304 Z" fill="#d49e6e" {...ln(3)} />
      <path d="M196 252 L186 262 M190 266 L178 272 M200 280 L186 290" fill="none" {...ln(2, '#a86f45')} />
      <path d="M-6 244 C40 236 120 234 190 242 C194 244 196 248 194 252 C150 248 60 252 -6 258 Z" fill={PAL.grass} {...ln(3)} />
      <path d="M-6 272 C30 268 70 272 110 268" fill="none" {...ln(2, '#a86f45')} opacity={0.6} />
      <PawPrint x={16} y={274} scale={0.36} rotate={80} color="#a86f45" opacity={0.7} />
      <PawPrint x={36} y={284} scale={0.36} rotate={80} color="#a86f45" opacity={0.7} />
      <Flower x={172} y={252} r={4} color={PAL.white} />
      <Flower x={20} y={252} r={3.4} color={PAL.white} />

      <Cat
        uid="fool-cat" x={112} y={254} scale={0.8} flip rotate={7}
        fur="#f4a24c" pattern="tabby" eyeColor="#8fd16a" expression="smile" pose="paw-up" tail="curl"
        held={<Bindle />}
      />
      <Butterfly x={206} y={152} />
    </g>
  )
}
