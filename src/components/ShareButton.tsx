import { useState } from 'react'
import type { TarotCardContent } from '../data/index.ts'
import { shareCard } from '../lib/share.ts'
import { Icon } from './Icon.tsx'
import { useToast } from './Toast.tsx'

interface ShareButtonProps {
  card: TarotCardContent
  /** `icon` renders a round icon-only button; `button` a labelled pill. */
  variant?: 'icon' | 'button'
  className?: string
}

export function ShareButton({ card, variant = 'button', className = '' }: ShareButtonProps) {
  const toast = useToast()
  const [busy, setBusy] = useState(false)

  async function handleClick() {
    if (busy) return
    setBusy(true)
    const outcome = await shareCard(card)
    setBusy(false)
    if (outcome === 'copied') toast('링크를 복사했어요! 친구에게 붙여넣어 보세요')
    else if (outcome === 'failed') toast('앗, 공유에 실패했어요. 주소창의 링크를 복사해 주세요')
  }

  if (variant === 'icon') {
    return (
      <button type="button" className={`icon-btn ${className}`} onClick={handleClick} aria-label="공유하기">
        <Icon name="share" />
      </button>
    )
  }
  return (
    <button type="button" className={`btn btn--ghost ${className}`} onClick={handleClick}>
      <Icon name="share" />
      공유하기
    </button>
  )
}
