import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { TarotCardContent } from '../data/index.ts'
import { CardBack } from '../art/CardBack.tsx'
import { routeToHash } from '../lib/router.ts'
import { usePrefersReducedMotion } from '../lib/hooks.ts'
import { TarotCardFace } from './TarotCardFace.tsx'
import { Icon } from './Icon.tsx'

/** Where the picked card sat in the spread (viewport px, unrotated size). */
export interface PickOrigin {
  cx: number
  cy: number
  width: number
  rotate: number
}

interface RevealOverlayProps {
  card: TarotCardContent
  origin: PickOrigin
  onClose: () => void
}

type Stage = 'fly' | 'flip' | 'revealed'

const FLIP_AT = 320
const REVEAL_AT = 980

/** Dialog that flies the picked card from the spread to the centre, flips it and offers the CTA. */
export function RevealOverlay({ card, origin, onClose }: RevealOverlayProps) {
  const reduced = usePrefersReducedMotion()
  const [stage, setStage] = useState<Stage>(reduced ? 'revealed' : 'fly')
  const flyRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  // FLIP: start the card exactly over the tapped one, then let CSS transition it home.
  useLayoutEffect(() => {
    const el = flyRef.current
    if (!el || reduced) return
    const box = el.getBoundingClientRect()
    const dx = origin.cx - (box.left + box.width / 2)
    const dy = origin.cy - (box.top + box.height / 2)
    const scale = origin.width / box.width
    el.style.transition = 'none'
    el.style.transform = `translate(${dx}px, ${dy}px) rotate(${origin.rotate}deg) scale(${scale})`
    void el.offsetWidth
    el.style.transition = ''
    el.style.transform = ''
  }, [origin, reduced])

  useEffect(() => {
    if (reduced) return
    const t1 = window.setTimeout(() => setStage('flip'), FLIP_AT)
    const t2 = window.setTimeout(() => setStage('revealed'), REVEAL_AT)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [reduced])

  useEffect(() => {
    if (stage === 'revealed') ctaRef.current?.focus({ preventScroll: true })
  }, [stage])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const root = document.documentElement
    root.classList.add('is-locked')
    return () => {
      window.removeEventListener('keydown', onKey)
      root.classList.remove('is-locked')
    }
  }, [onClose])

  return (
    <div className={`reveal reveal--${stage}`} role="dialog" aria-modal="true" aria-labelledby="reveal-title">
      <div className="reveal__backdrop" />
      <div className="reveal__body">
        <p className="eyebrow reveal__eyebrow">
          <Icon name="sparkle" /> Your card today <Icon name="sparkle" />
        </p>
        <div className="reveal__stage">
          <div className="reveal__rays" aria-hidden="true" />
          <div className="reveal__fly" ref={flyRef}>
            <div className="reveal__flipper">
              <div className="reveal__face reveal__face--back">
                <CardBack />
              </div>
              <div className="reveal__face reveal__face--front">
                <TarotCardFace card={card} labelled />
              </div>
            </div>
          </div>
          <div className="reveal__burst" aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <Icon key={i} name="sparkle" className={`reveal__spark reveal__spark--${i}`} />
            ))}
          </div>
        </div>
        <div className="reveal__text">
          <h2 id="reveal-title" className="reveal__title">
            {card.nameKo} 카드가 나왔어요!
          </h2>
          <p className="reveal__theme">
            <span aria-hidden="true">{card.theme.emoji}</span> 오늘의 대화 주제 · <strong>{card.theme.title}</strong>
          </p>
          <div className="reveal__actions">
            <a ref={ctaRef} className="btn btn--primary" href={routeToHash({ name: 'result', id: card.id })}>
              검사표 보기
              <Icon name="arrow-right" />
            </a>
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              다시 고르기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
