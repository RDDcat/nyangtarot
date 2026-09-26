import type { TarotCardContent } from '../data/index.ts'
import { cardUrl } from './router.ts'
import { APP_NAME } from './format.ts'

export type ShareOutcome = 'shared' | 'copied' | 'cancelled' | 'failed'

export function shareText(card: TarotCardContent): string {
  return `오늘의 네트워킹 카드는 ‘${card.roman}. ${card.nameKo} – ${card.catName}’! 나도 뽑아보기 👉`
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.append(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  } catch {
    return false
  }
}

/** Native share sheet when available, otherwise copies "text + link" to the clipboard. */
export async function shareCard(card: TarotCardContent): Promise<ShareOutcome> {
  const url = cardUrl(card.id)
  const text = shareText(card)
  if (typeof navigator.share === 'function') {
    try {
      await navigator.share({ title: APP_NAME, text, url })
      return 'shared'
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return 'cancelled'
    }
  }
  return (await copyText(`${text} ${url}`)) ? 'copied' : 'failed'
}
