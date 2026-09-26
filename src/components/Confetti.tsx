import type { CSSProperties } from 'react'

const COLORS = ['var(--gold-400)', 'var(--pink-300)', 'var(--mint-300)', 'var(--sky-300)', 'var(--violet-300)']

const PIECES = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: ((i * 53) % 90) / 100,
  duration: 2.4 + ((i * 29) % 12) / 10,
  drift: ((i * 71) % 60) - 30,
  color: COLORS[i % COLORS.length],
  shape: i % 3,
}))

/** One-shot CSS confetti fall. Hidden entirely for reduced motion. */
export function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className={`confetti__piece confetti__piece--${p.shape}`}
          style={
            {
              left: `${p.left}%`,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}vw`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
