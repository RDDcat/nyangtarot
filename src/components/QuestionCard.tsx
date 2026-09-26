import { useId, useState, type HTMLAttributes, type Ref } from 'react'
import type { Question, QuestionLevel, TarotCardContent } from '../data/index.ts'
import { Icon } from './Icon.tsx'

const LEVEL_LABEL: Record<QuestionLevel, string> = { 1: '몸풀기', 2: '알아가기', 3: '한 뼘 더' }

interface QuestionCardProps extends HTMLAttributes<HTMLElement> {
  card: TarotCardContent
  question: Question
  /** 1-based */
  number: number
  total: number
  cardRef?: Ref<HTMLElement>
  /** Visual-only copy (the card flying away) — hidden from assistive tech and not interactive. */
  ghost?: boolean
}

/** One paper question card: level badge, number, big question, and a 꼬리 질문 reveal. */
export function QuestionCard({ card, question, number, total, cardRef, ghost = false, className = '', ...rest }: QuestionCardProps) {
  const [showFollowUp, setShowFollowUp] = useState(false)
  const followUpId = useId()

  return (
    <article
      ref={cardRef}
      className={`qcard qcard--lv${question.level} ${className}`}
      aria-hidden={ghost || undefined}
      inert={ghost || undefined}
      aria-roledescription={ghost ? undefined : '질문 카드'}
      aria-label={ghost ? undefined : `질문 ${number} / ${total}`}
      {...rest}
    >
      <div className="qcard__inner">
        <header className="qcard__top">
          <span className="qcard__level">
            <span className="qcard__level-dots" aria-hidden="true">
              {[1, 2, 3].map((l) => (
                <i key={l} className={l <= question.level ? 'on' : undefined} />
              ))}
            </span>
            Lv.{question.level} {LEVEL_LABEL[question.level]}
          </span>
          <span className="qcard__num">
            Q<b>{String(number).padStart(2, '0')}</b>
          </span>
        </header>

        <p className="qcard__q">{question.q}</p>

        <div className="qcard__follow">
          <button
            type="button"
            className="qcard__follow-btn"
            aria-expanded={showFollowUp}
            aria-controls={followUpId}
            onClick={() => setShowFollowUp((v) => !v)}
          >
            <span aria-hidden="true">🐾</span>
            {showFollowUp ? '꼬리 질문 접기' : '꼬리 질문 보기'}
            <Icon name="chevron-down" className={showFollowUp ? 'is-open' : undefined} />
          </button>
          <div id={followUpId} className="qcard__follow-panel" hidden={!showFollowUp}>
            <p>
              <span className="qcard__follow-mark" aria-hidden="true">
                ↳
              </span>
              {question.followUp}
            </p>
          </div>
        </div>

        <footer className="qcard__foot" aria-hidden="true">
          <span>
            {card.roman} · {card.nameEn}
          </span>
          <span>
            {card.theme.emoji} {card.theme.title}
          </span>
        </footer>
      </div>
    </article>
  )
}
