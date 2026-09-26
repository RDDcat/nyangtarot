import { memo } from 'react'

interface Star {
  x: number
  y: number
  r: number
  delay: number
  twinkle: boolean
}

/** Deterministic pseudo-random generator so the sky is identical on every render. */
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rand = mulberry32(22)
const STARS: Star[] = Array.from({ length: 90 }, () => ({
  x: rand() * 1000,
  y: rand() * 1000,
  r: 0.9 + rand() * rand() * 2.6,
  delay: rand() * 6,
  twinkle: rand() < 0.45,
}))

const SPARKLES = [
  { x: 120, y: 150, s: 1 },
  { x: 880, y: 90, s: 0.8 },
  { x: 930, y: 560, s: 0.7 },
  { x: 60, y: 720, s: 0.6 },
]

/** Fixed night-sky backdrop: gradient + twinkling stars + a soft moon glow. Purely decorative. */
export const Starfield = memo(function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield__glow" />
      <svg className="starfield__svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            className={s.twinkle ? 'star star--twinkle' : 'star'}
            style={s.twinkle ? { animationDelay: `${s.delay.toFixed(2)}s` } : undefined}
          />
        ))}
        {SPARKLES.map((s, i) => (
          <path
            key={`sp${i}`}
            className="star star--sparkle"
            style={{ animationDelay: `${i * 1.3}s` }}
            transform={`translate(${s.x} ${s.y}) scale(${s.s})`}
            d="M0-14C1.4-3.6 3.6-1.4 14 0 3.6 1.4 1.4 3.6 0 14-1.4 3.6-3.6 1.4-14 0-3.6-1.4-1.4-3.6 0-14Z"
          />
        ))}
      </svg>
    </div>
  )
})
