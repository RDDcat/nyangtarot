import type { TarotCardContent } from '../data/index.ts'
import { TarotCardFace } from '../components/TarotCardFace.tsx'
import { Mascot } from '../components/Mascot.tsx'
import { Confetti } from '../components/Confetti.tsx'
import { ShareButton } from '../components/ShareButton.tsx'
import { Icon } from '../components/Icon.tsx'
import { routeToHash } from '../lib/router.ts'
import { useDocumentTitle } from '../lib/hooks.ts'
import '../styles/done.css'

interface DoneScreenProps {
  card: TarotCardContent
}

export function DoneScreen({ card }: DoneScreenProps) {
  useDocumentTitle(`대화 완료! · ${card.nameKo} 카드 · 냥타로`)

  return (
    <main className="screen done">
      <Confetti />
      <div className="done__hero">
        <div className="done__visual">
          <TarotCardFace card={card} className="done__card" />
          <Mascot className="done__cat" expression="wink" pose="paws-up" tail="up" />
        </div>
        <p className="eyebrow">✦ Mission complete ✦</p>
        <h1 className="done__title">
          10개의 질문을
          <br />
          모두 나눴어요!
        </h1>
        <p className="done__text">
          <span aria-hidden="true">{card.theme.emoji}</span> ‘{card.theme.title}’ 이야기, 즐거우셨나요?
          <br />
          오늘 만난 인연이 오래 이어지길 바란다냥.
        </p>
      </div>

      <div className="done__actions">
        <a className="btn btn--primary btn--block" href={routeToHash({ name: 'draw' })}>
          <Icon name="cards" />
          다른 카드 뽑기
        </a>
        <a className="btn btn--ghost btn--block" href={routeToHash({ name: 'deck', id: card.id, n: 1 })}>
          <Icon name="redo" />이 카드 질문 다시 보기
        </a>
        <ShareButton card={card} className="btn--block" />
      </div>
      <a className="done__back" href={routeToHash({ name: 'result', id: card.id })}>
        검사표 다시 보기
      </a>
    </main>
  )
}
