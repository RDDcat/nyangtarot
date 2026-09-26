// 냥타로 아이스브레이킹 — shared data contract.
// Every card file in src/data/cards/<id>.ts default-exports a `TarotCardContent`.

export type CardId =
  | 'fool'
  | 'magician'
  | 'high-priestess'
  | 'empress'
  | 'emperor'
  | 'hierophant'
  | 'lovers'
  | 'chariot'
  | 'strength'
  | 'hermit'
  | 'wheel-of-fortune'
  | 'justice'
  | 'hanged-man'
  | 'death'
  | 'temperance'
  | 'devil'
  | 'tower'
  | 'star'
  | 'moon'
  | 'sun'
  | 'judgement'
  | 'world'

/** The four gauges on the 검사표, always in this order. */
export const STAT_LABELS = ['친화력', '대화운', '인연운', '에너지'] as const
export type StatLabel = (typeof STAT_LABELS)[number]

export interface Stat {
  label: StatLabel
  /** 0–100 */
  score: number
  /** ≤ 18 Korean chars, e.g. "먼저 말 걸면 대박" */
  comment: string
}

/** 1 = 가볍게 몸풀기, 2 = 조금 더 알아가기, 3 = 한 뼘 더 깊게 */
export type QuestionLevel = 1 | 2 | 3

export interface Question {
  /** The question itself, polite 해요체, ≤ 60 chars. */
  q: string
  level: QuestionLevel
  /** Optional 꼬리 질문 to keep the conversation going, ≤ 40 chars. */
  followUp: string
}

export interface Reading {
  /** 오늘의 네트워킹 한 줄 운세, ≤ 30 chars. */
  headline: string
  /** 2–3 sentences, ≤ 140 chars total. */
  summary: string
  /** 오늘의 네트워커 유형, e.g. "첫 인사 개척자형", ≤ 14 chars. */
  networkerType: string
  /** Exactly 4, labels in STAT_LABELS order. */
  stats: Stat[]
  /** 행운의 대화 주제, ≤ 20 chars. */
  luckyTopic: string
  /** 행운의 아이템 (something plausible at a meetup), ≤ 16 chars. */
  luckyItem: string
  /** 주의할 점, ≤ 50 chars. */
  caution: string
  /** 오늘의 미션 체크리스트 — exactly 3 short actionable items, each ≤ 28 chars. */
  checklist: [string, string, string]
  /** 고양이의 한마디 — playful 냥체 sentence ending in ~냥, ≤ 50 chars. */
  catAdvice: string
  /** Another card that pairs well today (궁합 좋은 카드). Must differ from own id. */
  bestMatch: CardId
}

export interface Theme {
  /** Icebreaking topic title, ≤ 14 chars, e.g. "새로운 시작" */
  title: string
  /** One-line description of the topic, ≤ 40 chars. */
  subtitle: string
  /** One emoji representing the topic. */
  emoji: string
}

export interface TarotCardContent {
  id: CardId
  /** 0–21 */
  number: number
  /** Roman numeral as printed on the card: '0', 'I', ... 'XXI' */
  roman: string
  /** Original tarot name in Korean, e.g. '바보' */
  nameKo: string
  /** Original tarot name in English, e.g. 'The Fool' */
  nameEn: string
  /** The cat persona of this card, e.g. '모험가 치즈냥', ≤ 10 chars. */
  catName: string
  /** Exactly 3 keywords, each ≤ 6 chars. */
  keywords: [string, string, string]
  theme: Theme
  reading: Reading
  /** Exactly 10 questions: indexes 0–3 level 1, 4–7 level 2, 8–9 level 3. */
  questions: Question[]
}
