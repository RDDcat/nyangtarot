import type { TarotCardContent } from '../data/index.ts'

const dateFormat = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
})

/** e.g. "2026년 9월 26일 (토)" */
export function formatKoreanDate(date: Date): string {
  return dateFormat.format(date)
}

/** e.g. "0. 바보" */
export function cardTitle(card: TarotCardContent): string {
  return `${card.roman}. ${card.nameKo}`
}

export const APP_NAME = '냥타로 아이스브레이킹'

/** Picks 을/를 for the word's last syllable (falls back to 을(를) for non-Hangul endings). */
export function objectParticle(word: string): string {
  const code = word.trim().charCodeAt(word.trim().length - 1)
  if (code < 0xac00 || code > 0xd7a3) return '을(를)'
  return (code - 0xac00) % 28 === 0 ? '를' : '을'
}
