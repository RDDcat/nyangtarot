import type { TarotCardContent } from '../data/index.ts'
import { CardArt } from '../art/CardArt.tsx'
import '../styles/tarot-card.css'

interface TarotCardFaceProps {
  card: TarotCardContent
  /** `mini` hides the Korean sub-line for thumbnails under ~120px wide. */
  variant?: 'full' | 'mini'
  className?: string
  /** Set when the face is the main visual (announced to screen readers). */
  labelled?: boolean
}

/**
 * Front of a tarot card (240×380 proportions). Sized entirely by its width — give it a width via
 * `className` and everything inside scales with container query units.
 */
/** Font size (cqw) that keeps a single-line label inside the plate. */
function fitSize(text: string, max: number, budget: number): string {
  return `${Math.min(max, budget / text.length).toFixed(2)}cqw`
}

export function TarotCardFace({ card, variant = 'full', className = '', labelled = false }: TarotCardFaceProps) {
  return (
    <div
      className={`tcard tcard--${variant} ${className}`}
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? `${card.roman}번 ${card.nameKo} 카드 — ${card.catName}` : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      <div className="tcard__frame">
        <div className="tcard__numeral">
          <span className="tcard__orn" />
          {card.roman}
          <span className="tcard__orn" />
        </div>
        <div className="tcard__art">
          <CardArt id={card.id} />
        </div>
        <div className="tcard__plate">
          <span className="tcard__en" style={{ fontSize: fitSize(card.nameEn, variant === 'mini' ? 8.4 : 7.2, 88) }}>
            {card.nameEn}
          </span>
          {variant === 'full' && (
            <span className="tcard__ko" style={{ fontSize: fitSize(`${card.nameKo} · ${card.catName}`, 5.6, 80) }}>
              {card.nameKo} · {card.catName}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
