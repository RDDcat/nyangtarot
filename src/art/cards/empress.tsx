// III. THE EMPRESS — 여황제 크림 페르시안: lounging on a plush cushion in a wheat & flower meadow, flower crown, heart shield.
import { Cat } from '../Cat.tsx'
import { PAL, Flower, Heart, Hill, Sun, blobPath } from '../props.tsx'

const INK = PAL.ink
const WHEAT = '#f2c66d'
const TILT = 8
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

function Wheat({ x, y, s = 1, r = 0 }: { x: number; y: number; s?: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0 L0 -40" fill="none" {...ln(2, '#b98a3c')} />
      {[-40, -32, -24, -16].map((yy) => (
        <g key={yy}>
          <ellipse cx="-4" cy={yy + 2} rx="3.2" ry="5.5" transform={`rotate(-28 -4 ${yy + 2})`} fill={WHEAT} {...ln(1.5)} />
          <ellipse cx="4" cy={yy + 2} rx="3.2" ry="5.5" transform={`rotate(28 4 ${yy + 2})`} fill={WHEAT} {...ln(1.5)} />
        </g>
      ))}
      <ellipse cx="0" cy="-44" rx="3" ry="5.5" fill={WHEAT} {...ln(1.5)} />
    </g>
  )
}

/** Flower crown in canonical cat space (sits on the head top). */
function FlowerCrown() {
  const pts: [number, number, string][] = [[84, 96, PAL.pink300], [100, 86, PAL.white], [120, 82, PAL.pink400], [140, 86, PAL.white], [156, 96, PAL.pink300]]
  // front={} is not head space, so follow the cat's headTilt (pivot = neck 120,182)
  return (
    <g transform={`rotate(${TILT} 120 182)`}>
      <path d="M80 100 Q120 72 160 100" fill="none" {...ln(4, PAL.grassDark)} />
      {pts.map(([x, y, c]) => <Flower key={x} x={x} y={y} r={6.5} color={c} />)}
    </g>
  )
}

export default function EmpressArt() {
  return (
    <g>
      <defs>
        <linearGradient id="empress-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc7d6" />
          <stop offset="1" stopColor="#fff0de" />
        </linearGradient>
      </defs>
      <rect width="240" height="300" fill="url(#empress-sky)" />
      <Sun x={40} y={46} r={16} color="#ffe08a" rayColor="#fff0b8" />

      {/* cypress trees, wheat field and meadow */}
      {[[26, 150, 22, 44, 3], [212, 140, 24, 52, 7], [184, 158, 16, 34, 2]].map(([x, y, rx, ry, sd]) => (
        <g key={x}>
          <path d={`M${x} ${y + ry - 4} L${x} ${y + ry + 16}`} {...ln(6)} />
          <path d={`M${x} ${y + ry - 4} L${x} ${y + ry + 16}`} {...ln(2.5, PAL.wood)} />
          <path d={blobPath(x, y, rx, ry, sd, 0.1)} fill={PAL.grassDark} {...ln(3)} />
          <path d={`M${x - rx * 0.4} ${y - ry * 0.3} q${rx * 0.2} ${-ry * 0.3} ${rx * 0.5} ${-ry * 0.4}`} fill="none" {...ln(2, PAL.grass)} />
        </g>
      ))}
      <Hill x={120} y={186} w={360} depth={120} color={PAL.grass} tufts={PAL.grassDark} flowers={6} seed={4} />
      <path d="M-6 216 C50 206 190 206 246 216 L246 238 L-6 238 Z" fill={WHEAT} {...ln(2.5)} />
      {/* wheat stalks rising from the field on both sides */}
      {[[6, -8], [20, 4], [34, -4], [48, 8], [192, -6], [206, 6], [220, -4], [234, 8]].map(([x, r]) => (
        <Wheat key={x} x={x} y={232} s={0.62} r={r} />
      ))}

      {/* plush cushion */}
      <ellipse cx="120" cy="270" rx="100" ry="23" fill={PAL.pink400} {...ln(3)} />
      <path d="M28 262 Q120 242 212 262" fill="none" {...ln(2, '#e35a80')} />
      {[64, 176].map((x) => <circle key={x} cx={x} cy="277" r="3" fill="#e35a80" {...ln(1.6)} />)}

      <Cat
        uid="empress-cat" x={122} y={258} scale={0.78} headTilt={TILT}
        fur="#f6e3c3" longHair eyeColor="#e0894a" expression="smile" tail="down" shadow={false}
        front={<FlowerCrown />}
      />

      {/* wheat in front, bottom-right corner */}
      <Wheat x={218} y={304} s={0.95} r={-8} />
      <Wheat x={230} y={306} s={0.8} r={4} />

      {/* heart shield with a Venus sign */}
      <g transform="translate(40 262) rotate(-10)">
        <Heart scale={1.9} color={PAL.pink400} />
        <circle cx="0" cy="-5" r="6" fill="none" {...ln(3, PAL.gold300)} />
        <path d="M0 1 L0 11 M-5 7 L5 7" fill="none" {...ln(3, PAL.gold300)} />
      </g>
    </g>
  )
}
