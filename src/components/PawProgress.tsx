import { Icon } from './Icon.tsx'

interface PawProgressProps {
  /** 1-based current step */
  current: number
  total: number
}

/** Row of paw prints: done = gold, current = pink + bounce, upcoming = faint. */
export function PawProgress({ current, total }: PawProgressProps) {
  return (
    <div className="paws" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={current} aria-label={`질문 ${current} / ${total}`}>
      {Array.from({ length: total }, (_, i) => {
        const state = i + 1 < current ? 'done' : i + 1 === current ? 'current' : 'todo'
        return <Icon key={i} name="paw" className={`paws__paw paws__paw--${state}`} />
      })}
    </div>
  )
}
