import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { CardId } from '../data/index.ts'
import { CardBack } from '../art/CardBack.tsx'
import { useMediaQuery } from '../lib/hooks.ts'
import { shuffled } from '../lib/shuffle.ts'

/** Card centre (x, y) in % of the spread's width, rotation in degrees. */
interface Slot {
  x: number
  y: number
  r: number
}

interface SpreadLayout {
  /** card width in % of spread width */
  cardW: number
  /** spread height in % of its width */
  height: number
  slots: Slot[]
}

const CARD_RATIO = 380 / 240

/** Small stable jitter in [-1, 1] so the table spread looks hand-placed, not gridded. */
const jitter = (n: number) => (((n * 37) % 17) / 8 - 1)

/** Phones: four staggered, slightly arced rows (6/5/6/5) — every card keeps a ≥50px-wide tap strip. */
function tableLayout(count: number): SpreadLayout {
  const cardW = 20
  const cardH = cardW * CARD_RATIO
  const rows = [6, 5, 6, 5]
  const step = (100 - cardW - 4) / 5
  const rowStep = 17
  const slots: Slot[] = []
  rows.forEach((perRow, row) => {
    const offset = perRow === 6 ? 0 : step / 2
    for (let j = 0; j < perRow && slots.length < count; j++) {
      const t = perRow === 1 ? 0 : (j / (perRow - 1)) * 2 - 1
      const k = slots.length
      slots.push({
        x: 2 + cardW / 2 + offset + j * step,
        y: 2 + cardH / 2 + row * rowStep + t * t * 1.6 + jitter(k) * 0.6,
        r: t * 6 + jitter(k + 3) * 3,
      })
    }
  })
  return { cardW, height: 4 + cardH + (rows.length - 1) * rowStep + 2, slots }
}

/** Wide screens: one sweeping fan of all cards. */
function fanLayout(count: number): SpreadLayout {
  const cardW = 10.5
  const cardH = cardW * CARD_RATIO
  const margin = 6
  const step = (100 - cardW - margin * 2) / (count - 1)
  const slots: Slot[] = Array.from({ length: count }, (_, i) => {
    const t = (i / (count - 1)) * 2 - 1
    return { x: margin + cardW / 2 + i * step, y: 3 + cardH / 2 + t * t * 7, r: t * 26 }
  })
  return { cardW, height: 3 + cardH + 7 + 5, slots }
}

interface CardSpreadProps {
  /** Card ids in their current shuffled order (slot i gets order[i]). */
  order: CardId[]
  /** 'stacked' gathers every card in the middle (deal / shuffle); 'spread' lays them out. */
  phase: 'stacked' | 'spread'
  hiddenId: CardId | null
  dimmed: boolean
  onPick: (id: CardId, el: HTMLElement) => void
}

export function CardSpread({ order, phase, hiddenId, dimmed, onPick }: CardSpreadProps) {
  const wide = useMediaQuery('(min-width: 720px)')
  const layout = wide ? fanLayout(order.length) : tableLayout(order.length)
  const disabled = phase === 'stacked' || dimmed
  // DOM order stays fixed (moving nodes would cancel their CSS transitions); stacking comes from zIndex.
  const stableIds = [...order].sort()

  return (
    <div
      className={`spread ${dimmed ? 'is-dimmed' : ''}`}
      style={{ '--card-w': layout.cardW, aspectRatio: `100 / ${layout.height}` } as CSSProperties}
      role="group"
      aria-label={`뒤집힌 카드 ${order.length}장`}
    >
      {stableIds.map((id) => {
        const i = order.indexOf(id)
        const slot =
          phase === 'spread'
            ? layout.slots[i]
            : { x: 50 + jitter(i) * 1.2, y: layout.height / 2 - i * 0.12, r: jitter(i + 5) * 5 }
        return (
          <button
            key={id}
            type="button"
            className={`spread__card ${id === hiddenId ? 'is-picked' : ''}`}
            style={
              {
                '--x': slot.x,
                '--y': slot.y,
                '--r': `${slot.r}deg`,
                '--delay': phase === 'spread' ? `${i * 16}ms` : '0ms',
                zIndex: i,
              } as CSSProperties
            }
            disabled={disabled}
            aria-label={`${i + 1}번째 카드 고르기`}
            onClick={(e) => onPick(id, e.currentTarget)}
          >
            <span className="spread__lift">
              <CardBack />
            </span>
          </button>
        )
      })}
    </div>
  )
}

/** Runs the deal-in animation once on mount and exposes a reshuffle that gathers → re-deals. */
export function useDeal(ids: readonly CardId[]) {
  const [order, setOrder] = useState(() => shuffled(ids))
  const [phase, setPhase] = useState<'stacked' | 'spread'>('stacked')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    // two frames so the stacked position is painted before the spread transition starts
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setPhase('spread'))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      window.clearTimeout(timer.current)
    }
  }, [])

  function shuffle() {
    if (phase === 'stacked') return
    setPhase('stacked')
    timer.current = window.setTimeout(() => {
      setOrder(shuffled(ids))
      setPhase('spread')
    }, 420)
  }

  return { order, phase, shuffle }
}
