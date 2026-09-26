import type { TarotCardContent } from '../types'

// PLACEHOLDER — to be replaced by real content.
const card: TarotCardContent = {
  id: 'world',
  number: 21,
  roman: 'XXI',
  nameKo: '세계',
  nameEn: 'The World',
  catName: '세계 냥이',
  keywords: ['준비', '중', '냥'],
  theme: { title: '세계의 주제', subtitle: '(준비 중) 주제 설명', emoji: '🐾' },
  reading: {
    headline: '(준비 중) 한 줄 운세',
    summary: '(준비 중) 오늘의 네트워킹 요약입니다.',
    networkerType: '준비 중 유형',
    stats: [
      { label: '친화력', score: 70, comment: '준비 중' },
      { label: '대화운', score: 70, comment: '준비 중' },
      { label: '인연운', score: 70, comment: '준비 중' },
      { label: '에너지', score: 70, comment: '준비 중' },
    ],
    luckyTopic: '준비 중',
    luckyItem: '준비 중',
    caution: '(준비 중) 주의할 점',
    checklist: ['미션 하나', '미션 둘', '미션 셋'],
    catAdvice: '준비 중이다냥',
    bestMatch: 'sun',
  },
  questions: [
    { q: '(준비 중) 세계 질문 1', level: 1, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 2', level: 1, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 3', level: 1, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 4', level: 1, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 5', level: 2, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 6', level: 2, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 7', level: 2, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 8', level: 2, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 9', level: 3, followUp: '(준비 중) 꼬리 질문' },
    { q: '(준비 중) 세계 질문 10', level: 3, followUp: '(준비 중) 꼬리 질문' },
  ],
}

export default card
