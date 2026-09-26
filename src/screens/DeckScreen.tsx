import { useEffect, useState, type CSSProperties } from 'react'
import type { TarotCardContent } from '../data/index.ts'
import { QuestionCard } from '../components/QuestionCard.tsx'
import { PawProgress } from '../components/PawProgress.tsx'
import { Icon } from '../components/Icon.tsx'
import { navigate, routeToHash } from '../lib/router.ts'
import { useDocumentTitle, useLatest } from '../lib/hooks.ts'
import { fullscreenSupported, toggleFullscreen, useIsFullscreen } from '../lib/fullscreen.ts'
import { useSwipe } from '../lib/useSwipe.ts'
import '../styles/deck.css'

interface DeckScreenProps {
  card: TarotCardContent
  /** 1-based question number (already clamped by the router) */
  n: number
}

type Direction = 'next' | 'prev'

interface Exit {
  n: number
  dir: Direction
  fromX: number
  key: number
}

function isTypingTarget(target: EventTarget | null): boolean {
  return target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
}

export function DeckScreen({ card, n }: DeckScreenProps) {
  const total = card.questions.length
  const index = Math.min(n, total)
  const question = card.questions[index - 1]
  useDocumentTitle(`질문 ${index}/${total} · ${card.nameKo} 카드 · 냥타로`)

  const [exit, setExit] = useState<Exit | null>(null)
  const [lastDir, setLastDir] = useState<Direction | null>(null)
  const [canFullscreen] = useState(fullscreenSupported)
  const isFullscreen = useIsFullscreen()

  function go(dir: Direction, fromX = 0) {
    if (dir === 'prev' && index <= 1) return
    if (dir === 'next' && index >= total) {
      navigate({ name: 'done', id: card.id })
      return
    }
    const target = dir === 'next' ? index + 1 : index - 1
    setExit({ n: index, dir, fromX, key: Date.now() })
    setLastDir(dir)
    navigate({ name: 'deck', id: card.id, n: target }, { replace: true })
  }

  const swipe = useSwipe<HTMLElement>({
    canSwipe: (d) => d === 'left' || index > 1,
    onSwipe: (d, dx) => go(d === 'left' ? 'next' : 'prev', dx),
  })

  const goRef = useLatest(go)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        goRef.current('next')
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goRef.current('prev')
      } else if (e.key === ' ' && !(e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement)) {
        e.preventDefault()
        goRef.current('next')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goRef])

  const clearExit = (key: number) => setExit((cur) => (cur?.key === key ? null : cur))
  const remaining = total - index

  return (
    <main className={`screen deck ${isFullscreen ? 'is-presenting' : ''}`}>
      <header className="deck__top">
        <a className="icon-btn" href={routeToHash({ name: 'result', id: card.id })} aria-label="검사표로 돌아가기">
          <Icon name="arrow-left" />
        </a>
        <div className="deck__theme">
          <p className="deck__theme-title">
            <span aria-hidden="true">{card.theme.emoji}</span>
            <span>{card.theme.title}</span>
          </p>
          <p className="deck__theme-sub">{card.theme.subtitle}</p>
        </div>
        {canFullscreen ? (
          <button
            type="button"
            className="icon-btn"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? '전체 화면 끝내기' : '전체 화면으로 보기'}
            aria-pressed={isFullscreen}
          >
            <Icon name={isFullscreen ? 'compress' : 'expand'} />
          </button>
        ) : (
          <span className="deck__spacer" aria-hidden="true" />
        )}
      </header>

      <div className="deck__progress">
        <PawProgress current={index} total={total} />
        <span className="deck__count" aria-hidden="true">
          <b>{index}</b> / {total}
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        질문 {index}. {question.q}
      </p>

      <div className="deck__stage">
        {Array.from({ length: Math.min(remaining, 3) }, (_, i) => (
          <div key={i} className={`qcard-back qcard-back--${i + 1}`} aria-hidden="true" />
        ))}
        {exit?.dir === 'prev' && (
          <ExitingCard exit={exit} card={card} total={total} onDone={clearExit} />
        )}
        <QuestionCard
          key={index}
          card={card}
          question={question}
          number={index}
          total={total}
          cardRef={swipe.ref}
          className={`qcard--current qcard--enter-${lastDir ?? 'initial'}`}
          {...swipe.handlers}
        />
        {exit?.dir === 'next' && (
          <ExitingCard exit={exit} card={card} total={total} onDone={clearExit} />
        )}
      </div>

      <nav className="deck__nav" aria-label="질문 이동">
        <button type="button" className="btn btn--ghost deck__prev" onClick={() => go('prev')} disabled={index <= 1}>
          <Icon name="arrow-left" />
          이전
        </button>
        <button type="button" className="btn btn--primary deck__next" onClick={() => go('next')}>
          {index >= total ? '마무리하기' : '다음 질문'}
          <Icon name="arrow-right" />
        </button>
      </nav>

      <p className="deck__tip">
        <span className="deck__tip-touch">카드를 옆으로 밀어서 넘길 수 있어요</span>
        <span className="deck__tip-keys">
          <kbd>←</kbd> <kbd>→</kbd> 또는 <kbd>Space</kbd> 키로 넘길 수 있어요
        </span>
      </p>
    </main>
  )
}

interface ExitingCardProps {
  exit: Exit
  card: TarotCardContent
  total: number
  onDone: (key: number) => void
}

/** Copy of the card being left behind, animating away (next) or sinking into the stack (prev). */
function ExitingCard({ exit, card, total, onDone }: ExitingCardProps) {
  return (
    <QuestionCard
      key={exit.key}
      ghost
      card={card}
      question={card.questions[exit.n - 1]}
      number={exit.n}
      total={total}
      className={`qcard--exit-${exit.dir}`}
      style={{ '--from-x': `${exit.fromX}px`, '--from-r': `${exit.fromX * 0.04}deg` } as CSSProperties}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) onDone(exit.key)
      }}
    />
  )
}
