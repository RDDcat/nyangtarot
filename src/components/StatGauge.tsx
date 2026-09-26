import type { CSSProperties } from 'react'
import type { Stat } from '../data/index.ts'
import { Icon } from './Icon.tsx'

interface StatGaugeProps {
  stat: Stat
  index: number
}

/** One 검사표 meter: label, animated fill bar tipped with a paw, score and a short comment. */
export function StatGauge({ stat, index }: StatGaugeProps) {
  const score = Math.min(Math.max(Math.round(stat.score), 0), 100)
  const style = { '--score': `${score}%`, '--i': index } as CSSProperties
  return (
    <li className={`gauge gauge--${index}`} style={style}>
      <div className="gauge__head">
        <span className="gauge__label">{stat.label}</span>
        <span className="gauge__score">
          {score}
          <small>점</small>
        </span>
      </div>
      <div className="gauge__track" aria-hidden="true">
        <div className="gauge__fill">
          <Icon name="paw" className="gauge__paw" />
        </div>
      </div>
      <p className="gauge__comment">{stat.comment}</p>
    </li>
  )
}
