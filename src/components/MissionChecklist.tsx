import { useState } from 'react'
import type { CardId } from '../data/index.ts'
import { readStored, writeStored } from '../lib/storage.ts'
import { Icon } from './Icon.tsx'

interface MissionChecklistProps {
  cardId: CardId
  items: readonly string[]
}

const isBoolArray = (value: unknown): value is boolean[] =>
  Array.isArray(value) && value.every((v) => typeof v === 'boolean')

/** 오늘의 미션 — tappable paw checkboxes, remembered per card in localStorage. */
export function MissionChecklist({ cardId, items }: MissionChecklistProps) {
  const key = `nyang-tarot:missions:${cardId}`
  const [checked, setChecked] = useState<boolean[]>(() => readStored(key, [], isBoolArray))
  const doneCount = items.filter((_, i) => checked[i]).length

  function toggle(index: number) {
    setChecked((prev) => {
      const next = items.map((_, i) => (i === index ? !prev[i] : Boolean(prev[i])))
      writeStored(key, next)
      return next
    })
  }

  return (
    <div className="missions">
      <ul className="missions__list">
        {items.map((item, i) => (
          <li key={item}>
            <button
              type="button"
              role="checkbox"
              aria-checked={Boolean(checked[i])}
              className="mission"
              onClick={() => toggle(i)}
            >
              <span className="mission__box" aria-hidden="true">
                <Icon name="paw" />
              </span>
              <span className="mission__text">{item}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="missions__count" aria-live="polite">
        {doneCount === items.length ? '미션 올클리어! 오늘 네트워킹 만렙이다냥 🎉' : `${doneCount} / ${items.length} 완료`}
      </p>
    </div>
  )
}
