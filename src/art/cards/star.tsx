// XVII The Star — cream tabby kneeling at a starlit pond, pouring water from two jugs under a big 8-point star.
import { Cat } from '../Cat.tsx'
import { PAL, Star, Starfield, Sparkle, blobPath } from '../props.tsx'

const INK = PAL.ink
const WATER = '#6fb6ff'
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

/** Pitcher held around its belly (origin), mouth pointing up before rotation. Canonical cat space.
 *  The handle sits on the side that ends up on top after rotating (opposite the pour). */
function Jug({ x, y, rotate, color }: { x: number; y: number; rotate: number; color: string }) {
  const h = rotate > 0 ? -1 : 1 // handle side (local x)
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(1.4)`}>
      <path d={`M${h * 8} -12 C${h * 22} -14 ${h * 24} 6 ${h * 13} 9`} fill="none" {...ln(7)} />
      <path d={`M${h * 8} -12 C${h * 22} -14 ${h * 24} 6 ${h * 13} 9`} fill="none" {...ln(3, color)} />
      <path d="M-7 -13 L-8 -20 C-10 -22 -11 -24 -11 -26 L11 -26 C11 -24 10 -22 8 -20 L7 -13 C16 -9 18 2 16 10 C14 19 8 22 0 22 C-8 22 -14 19 -16 10 C-18 2 -16 -9 -7 -13 Z" fill={color} {...ln(3)} />
      <ellipse cx="0" cy="-26" rx="11" ry="3.2" fill="#8a5a2b" {...ln(2.2)} />
      <path d="M-14 3 C-6 7 6 7 14 3" fill="none" {...ln(2, PAL.gold500)} />
      <ellipse cx="-8" cy="0" rx="2.4" ry="5" fill="#fff" opacity={0.55} />
    </g>
  )
}

/** Pouring stream (outlined tube). */
function Stream({ d }: { d: string }) {
  return (
    <g fill="none">
      <path d={d} {...ln(9)} />
      <path d={d} {...ln(4.5, WATER)} />
      <path d={d} {...ln(1.5, '#dff1ff')} strokeDasharray="4 7" />
    </g>
  )
}

export default function StarArt() {
  const cat = { x: 120, y: 258, scale: 0.78, pose: 'paws-up' as const, tail: 'curl' as const }
  // 7 little 8-point stars around the big one (x, y, r)
  const small: [number, number, number][] = [
    [30, 40, 10], [210, 40, 10], [72, 18, 7.5], [168, 18, 7.5], [22, 106, 8], [218, 106, 8], [196, 150, 6.5],
  ]
  return (
    <g>
      <defs>
        <linearGradient id="star-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#101c45" />
          <stop offset="0.6" stopColor="#23407d" />
          <stop offset="1" stopColor="#4f7fc0" />
        </linearGradient>
        <radialGradient id="star-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={PAL.gold300} stopOpacity="0.55" />
          <stop offset="1" stopColor={PAL.gold300} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#star-sky)" />
      <Starfield seed={17} count={34} h={190} sparkles={3} />

      {/* big star + 7 little stars */}
      <circle cx="120" cy="44" r="54" fill="url(#star-glow)" />
      <Star x={120} y={44} r={31} points={8} inner={0.46} color={PAL.gold400} />
      {small.map(([sx, sy, r], i) => (
        <g key={i}>
          <circle cx={sx} cy={sy} r={r * 1.1} fill="url(#star-glow)" />
          <Star x={sx} y={sy} r={r} points={8} inner={0.42} color={PAL.gold300} outline={false} />
        </g>
      ))}

      {/* distant hills + ground */}
      <path d="M0 208 C40 192 80 198 112 208 C150 192 200 190 240 204 L240 300 L0 300 Z" fill="#2b4f7a" {...ln(3)} />
      <path d="M0 232 C60 222 180 222 240 232 L240 300 L0 300 Z" fill="#35705f" {...ln(3)} />

      {/* pond (front right) */}
      <path d={blobPath(166, 286, 84, 18, 5, 0.06)} fill={WATER} {...ln(3)} />
      <path d="M112 288 C140 292 186 293 232 286" fill="none" {...ln(2, '#b9e0ff')} />
      <Sparkle x={150} y={280} size={3.5} color={PAL.gold300} />

      {/* grass tufts & flowers on the bank */}
      <path d="M14 286 l3 -8 l3 7 l3 -9 l3 9 M58 290 l3 -7 l3 6 l3 -8 l3 8" fill="none" {...ln(2, '#1f4d44')} />
      <circle cx="24" cy="248" r="3.5" fill={PAL.pink300} {...ln(1.8)} />
      <circle cx="62" cy="274" r="3.2" fill={PAL.white} {...ln(1.8)} />
      <circle cx="220" cy="246" r="3.2" fill={PAL.pink300} {...ln(1.8)} />
      {/* little puddle where the left jug waters the land */}
      <ellipse cx="28" cy="266" rx="16" ry="4.5" fill={WATER} {...ln(2)} />

      <Cat
        {...cat}
        uid="star-cat"
        fur="#f3d7a8"
        pattern="tabby"
        patternColor="#d9a063"
        eyeColor="#6fb6ff"
        expression="smile"
        held={
          <g>
            <Stream d="M238 210 C250 222 250 262 234 304" />
            <Stream d="M2 210 C-10 222 -12 252 0 284" />
            <Jug x={205} y={195} rotate={115} color={PAL.gold400} />
            <Jug x={35} y={195} rotate={-115} color={PAL.gold400} />
          </g>
        }
      />
      {/* splash rings */}
      <ellipse cx="207" cy="283" rx="12" ry="3.5" fill="none" {...ln(2, '#dff1ff')} />
      <ellipse cx="28" cy="265" rx="8" ry="2.4" fill="none" {...ln(2, '#dff1ff')} />
    </g>
  )
}
