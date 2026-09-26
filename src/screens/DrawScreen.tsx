import { useCallback, useState } from 'react'
import { CARDS, CARD_BY_ID, type CardId } from '../data/index.ts'
import { CardSpread, useDeal } from '../components/CardSpread.tsx'
import { RevealOverlay, type PickOrigin } from '../components/RevealOverlay.tsx'
import { Mascot } from '../components/Mascot.tsx'
import { Icon } from '../components/Icon.tsx'
import { useDocumentTitle } from '../lib/hooks.ts'
import { APP_NAME } from '../lib/format.ts'
import '../styles/draw.css'

const ALL_IDS = CARDS.map((c) => c.id)

export function DrawScreen() {
  useDocumentTitle(`${APP_NAME} — 고양이가 점쳐주는 오늘의 네트워킹`)
  const { order, phase, shuffle } = useDeal(ALL_IDS)
  const [picked, setPicked] = useState<{ id: CardId; origin: PickOrigin } | null>(null)

  function handlePick(id: CardId, el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    const rotate = Number.parseFloat(el.style.getPropertyValue('--r')) || 0
    setPicked({
      id,
      origin: { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2, width: el.offsetWidth, rotate },
    })
  }

  const close = useCallback(() => setPicked(null), [])

  return (
    <main className="screen draw">
      <header className="draw__hero">
        <Mascot className="draw__cat" />
        <p className="eyebrow">✦ Tarot for networking ✦</p>
        <h1 className="draw__title">
          <span className="draw__title-main">냥타로</span>
          <span className="draw__title-sub">아이스브레이킹</span>
        </h1>
        <p className="draw__subtitle">고양이가 점쳐주는 오늘의 네트워킹</p>
      </header>

      <p className="draw__hint">
        <Icon name="paw" />
        마음이 끌리는 카드를 한 장 골라주세요
        <Icon name="paw" />
      </p>

      <CardSpread order={order} phase={phase} hiddenId={picked?.id ?? null} dimmed={picked !== null} onPick={handlePick} />

      <div className="draw__actions">
        <button type="button" className="btn btn--ghost" onClick={shuffle} disabled={phase === 'stacked' || picked !== null}>
          <Icon name="shuffle" />
          카드 섞기
        </button>
      </div>
      <p className="draw__foot">22장의 고양이 타로 · 카드마다 대화 질문 10개</p>

      {picked && <RevealOverlay card={CARD_BY_ID[picked.id]} origin={picked.origin} onClose={close} />}
    </main>
  )
}
