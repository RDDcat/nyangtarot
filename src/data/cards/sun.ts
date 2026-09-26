import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'sun',
  number: 19,
  roman: 'XIX',
  nameKo: '태양',
  nameEn: 'The Sun',
  catName: '해바라기 아기냥',
  keywords: ['기쁨', '활력', '성공'],
  theme: {
    title: '행복 충전 타임',
    subtitle: '나를 환하게 웃게 만드는 소소한 행복과 즐거움',
    emoji: '🌞',
  },
  reading: {
    headline: '존재만으로 분위기를 밝히는 햇살의 날',
    summary:
      '태양은 타로에서 가장 환한 카드예요. 오늘 당신의 웃음은 주변까지 환하게 번져요. 먼저 반갑게 인사하면 어색함이 햇볕 아래 버터처럼 스르르 녹아요.',
    networkerType: '인간 비타민형',
    stats: [
      { label: '친화력', score: 96, comment: '처음 봐도 오랜 친구처럼' },
      { label: '대화운', score: 87, comment: '웃음 터지는 대화 예약' },
      { label: '인연운', score: 78, comment: '밝은 첫인상이 인연을 불러요' },
      { label: '에너지', score: 98, comment: '골골송이 멈추지 않아요' },
    ],
    luckyTopic: '요즘 나를 웃게 한 순간',
    luckyItem: '노란색 소품',
    caution: '텐션이 높은 날일수록 조용한 사람의 속도를 조금 기다려 주세요.',
    checklist: [
      '눈 마주친 사람에게 먼저 웃으며 인사하기',
      '들은 이야기 중 좋았던 점 콕 집어 칭찬하기',
      '헤어지기 전 오늘 즐거웠던 순간 나누기',
    ],
    catAdvice: '햇볕 좋은 창가처럼, 오늘은 네 곁으로 다들 모여들 거다냥',
    bestMatch: 'hermit',
  },
  questions: [
    { q: '이번 주에 나를 피식 웃게 만든 순간은 뭐였어요?', level: 1, followUp: '그 순간을 짤 하나로 표현한다면요?' },
    { q: '축 처질 때 틀면 바로 텐션이 살아나는 노래 한 곡은 뭐예요?', level: 1, followUp: '그 노래는 어떻게 알게 됐어요?' },
    { q: '햇살 좋은 날 딱 한 시간이 생긴다면 어디서 뭘 하고 싶어요?', level: 1, followUp: '그걸 하면 기분이 몇 도쯤 올라가요?' },
    { q: '어릴 때 해가 질 때까지 신나게 했던 놀이는 뭐였어요?', level: 1, followUp: '지금 어른 버전으로 즐긴다면 어떻게 할래요?' },
    { q: '아주 사소한데 확실하게 행복해지는 나만의 순간은 언제예요?', level: 2, followUp: '그 순간을 더 자주 만들려면 뭐가 필요할까요?' },
    { q: "일하다가 '오늘 좀 즐거운데?' 싶었던 날은 어떤 날이었어요?", level: 2, followUp: '그날의 분위기를 한 단어로 표현한다면요?' },
    { q: '최근에 누군가를 활짝 웃게 만든 적이 있다면, 어떤 일이었어요?', level: 2, followUp: '상대의 반응 중 기억에 남는 건요?' },
    { q: '여럿이 함께할 때 에너지가 가장 차오르는 활동은 뭐예요?', level: 2, followUp: '오늘 모인 사람들과 한다면 어떻게 해볼래요?' },
    { q: "살면서 '아, 행복하다' 하고 소리 내어 말했던 장면이 있다면요?", level: 3, followUp: '그때의 소리, 냄새, 풍경 중 뭐가 제일 선명해요?' },
    { q: '나만의 행복 공식을 만든다면, 어떤 재료들이 꼭 들어갈까요?', level: 3, followUp: '그중 오늘 이미 채운 재료는 뭐예요?' },
  ],
}

export default card
