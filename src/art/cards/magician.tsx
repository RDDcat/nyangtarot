// I. THE MAGICIAN — 마술사 턱시도냥: wand raised, ∞ above the head, tools laid out on a red-and-gold table.
import { Cat, getCatAnchors } from '../Cat.tsx'
import { PAL, Starfield, Wand, MilkCup, Fish, YarnBall, Star, Sparkle } from '../props.tsx'

const INK = PAL.ink
const RED = '#d8434f'
const RED_DK = '#a82c3c'
const ln = (w: number, c: string = INK) => ({ stroke: c, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

const LEMNISCATE = 'M120 56 C112 46 98 46 98 56 C98 66 112 66 120 56 C128 46 142 46 142 56 C142 66 128 66 120 56 Z'

function Curtain({ side }: { side: 1 | -1 }) {
  return (
    <g transform={side === -1 ? 'matrix(-1 0 0 1 240 0)' : undefined}>
      <path d="M-4 -4 L64 -4 C56 30 40 58 14 74 C18 110 12 150 -4 170 Z" fill={RED} {...ln(3)} />
      <path d="M22 -2 C22 30 16 52 6 70 M42 -2 C38 26 30 46 18 62" fill="none" {...ln(2, RED_DK)} />
      <path d="M-4 -4 L64 -4 L60 8 L-4 8 Z" fill={PAL.gold400} {...ln(2.5)} />
      <path d="M14 74 L20 80 L16 94" fill="none" {...ln(2.5)} />
      <circle cx="16" cy="96" r="5" fill={PAL.gold400} {...ln(2.2)} />
    </g>
  )
}

export default function MagicianArt() {
  const cat = { x: 120, y: 262, scale: 0.8, pose: 'paw-up' as const }
  const a = getCatAnchors(cat)
  return (
    <g>
      <defs>
        <linearGradient id="magician-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={PAL.night700} />
          <stop offset="1" stopColor={PAL.violet500} />
        </linearGradient>
        <radialGradient id="magician-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={PAL.gold300} stopOpacity="0.85" />
          <stop offset="0.6" stopColor={PAL.gold400} stopOpacity="0.35" />
          <stop offset="1" stopColor={PAL.gold400} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="300" fill="url(#magician-bg)" />
      <Starfield seed={11} count={26} h={220} sparkles={4} />
      <circle cx="120" cy="150" r="98" fill="url(#magician-glow)" />
      <circle cx="120" cy="150" r="72" fill="none" {...ln(2, PAL.gold300)} strokeDasharray="2 7" opacity={0.8} />
      <Curtain side={1} />
      <Curtain side={-1} />

      <Cat
        uid="magician-cat" {...cat}
        fur="#3a3148" pattern="tuxedo" eyeColor="#f5d04a" expression="wink" rim={PAL.violet300} tail="down"
        collar={RED} bell
        held={<Wand x={184} y={186} rotate={14} scale={1.2} tip={PAL.gold300} />}
        front={
          <g>
            <path d={LEMNISCATE} fill="none" {...ln(9)} transform="translate(0 -14)" />
            <path d={LEMNISCATE} fill="none" {...ln(4.5, PAL.gold400)} transform="translate(0 -14)" />
          </g>
        }
      />
      <Sparkle x={a.raisedPaw.x + 34} y={a.raisedPaw.y - 66} size={5} />

      {/* table */}
      <path d="M8 234 L232 234 L232 250 L8 250 Z" fill={PAL.wood} {...ln(3)} />
      <path d="M14 248 L226 248 L222 300 L18 300 Z" fill={RED} {...ln(3)} />
      <path d="M14 256 L226 256" {...ln(5, PAL.gold400)} />
      <path d="M40 262 L36 300 M120 262 L120 300 M200 262 L204 300" fill="none" {...ln(2, RED_DK)} />
      {[36, 78, 120, 162, 204].map((x) => <Star key={x} x={x} y={280} r={5} color={PAL.gold400} outline={false} />)}

      {/* tools: cup, fish, coin, yarn */}
      <MilkCup x={36} y={236} scale={0.82} emblem={RED} />
      <Fish x={80} y={230} scale={0.68} />
      {/* pentacle coin standing on its rim */}
      <g transform="translate(164 222) rotate(-8)">
        <circle r="12" fill={PAL.gold400} {...ln(2.5)} />
        <circle r="8" fill="none" {...ln(1.6, '#b9842f')} />
        <Star r={6} color={PAL.gold300} />
      </g>
      <YarnBall x={204} y={224} r={11} color={PAL.pink300} thread={false} />
    </g>
  )
}
