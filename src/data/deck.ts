import type { CardId } from './types'

/** Canonical order + identity of the 22 Major Arcana cat cards. Content lives in ./cards/<id>.ts */
export interface DeckEntry {
  id: CardId
  number: number
  roman: string
  nameKo: string
  nameEn: string
  /** Icebreaking topic direction the card's questions must follow. */
  topicHint: string
}

export const DECK: DeckEntry[] = [
  { id: 'fool', number: 0, roman: '0', nameKo: '바보', nameEn: 'The Fool', topicHint: '새로운 시작 · 첫 경험 · 즉흥과 모험' },
  { id: 'magician', number: 1, roman: 'I', nameKo: '마법사', nameEn: 'The Magician', topicHint: '나만의 재능 · 스킬 · 숨은 능력' },
  { id: 'high-priestess', number: 2, roman: 'II', nameKo: '여사제', nameEn: 'The High Priestess', topicHint: '직관 · 취향 · 남들이 잘 모르는 관심사' },
  { id: 'empress', number: 3, roman: 'III', nameKo: '여황제', nameEn: 'The Empress', topicHint: '풍요 · 좋아하는 음식과 공간 · 나를 채우는 것' },
  { id: 'emperor', number: 4, roman: 'IV', nameKo: '황제', nameEn: 'The Emperor', topicHint: '일과 커리어 · 리더십 · 나의 일하는 방식' },
  { id: 'hierophant', number: 5, roman: 'V', nameKo: '교황', nameEn: 'The Hierophant', topicHint: '배움 · 멘토 · 나를 만든 조언과 가치관' },
  { id: 'lovers', number: 6, roman: 'VI', nameKo: '연인', nameEn: 'The Lovers', topicHint: '선택 · 케미 · 함께 일하고 싶은 사람 (연애 질문 금지)' },
  { id: 'chariot', number: 7, roman: 'VII', nameKo: '전차', nameEn: 'The Chariot', topicHint: '목표 · 추진력 · 요즘 달리고 있는 것' },
  { id: 'strength', number: 8, roman: 'VIII', nameKo: '힘', nameEn: 'Strength', topicHint: '용기 · 강점 · 버텨낸 경험' },
  { id: 'hermit', number: 9, roman: 'IX', nameKo: '은둔자', nameEn: 'The Hermit', topicHint: '혼자만의 시간 · 취미 · 나를 충전하는 법' },
  { id: 'wheel-of-fortune', number: 10, roman: 'X', nameKo: '운명의 수레바퀴', nameEn: 'Wheel of Fortune', topicHint: '우연 · 운 · 인생의 터닝포인트' },
  { id: 'justice', number: 11, roman: 'XI', nameKo: '정의', nameEn: 'Justice', topicHint: '원칙 · 균형 · 나만의 기준과 소신' },
  { id: 'hanged-man', number: 12, roman: 'XII', nameKo: '매달린 사람', nameEn: 'The Hanged Man', topicHint: '관점 전환 · 거꾸로 보기 · 생각이 바뀐 순간' },
  { id: 'death', number: 13, roman: 'XIII', nameKo: '죽음', nameEn: 'Death', topicHint: '변화 · 끝과 새 챕터 · 떠나보낸 습관 (죽음·상실 직접 언급 금지)' },
  { id: 'temperance', number: 14, roman: 'XIV', nameKo: '절제', nameEn: 'Temperance', topicHint: '균형 · 루틴 · 워라밸과 나만의 페이스' },
  { id: 'devil', number: 15, roman: 'XV', nameKo: '악마', nameEn: 'The Devil', topicHint: '길티 플레저 · 빠져있는 것 · 못 끊는 소소한 유혹' },
  { id: 'tower', number: 16, roman: 'XVI', nameKo: '탑', nameEn: 'The Tower', topicHint: '반전 · 예상 밖의 사건 · 유쾌한 실수담' },
  { id: 'star', number: 17, roman: 'XVII', nameKo: '별', nameEn: 'The Star', topicHint: '꿈 · 희망 · 버킷리스트' },
  { id: 'moon', number: 18, roman: 'XVIII', nameKo: '달', nameEn: 'The Moon', topicHint: '상상 · 밤 · 엉뚱한 상상과 미스터리' },
  { id: 'sun', number: 19, roman: 'XIX', nameKo: '태양', nameEn: 'The Sun', topicHint: '행복 · 즐거움 · 에너지 충전 순간' },
  { id: 'judgement', number: 20, roman: 'XX', nameKo: '심판', nameEn: 'Judgement', topicHint: '회고 · 깨달음 · 다시 한다면' },
  { id: 'world', number: 21, roman: 'XXI', nameKo: '세계', nameEn: 'The World', topicHint: '여행 · 넓은 세상 · 성취와 완성' },
]
