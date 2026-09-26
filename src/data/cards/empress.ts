import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'empress',
  number: 3,
  roman: 'III',
  nameKo: '여황제',
  nameEn: 'The Empress',
  catName: '풍요의 페르시안냥',
  keywords: ['풍요', '미식', '아늑함'],
  theme: {
    title: '나를 채우는 것',
    subtitle: '좋아하는 음식과 공간, 나를 든든하게 채우는 것들',
    emoji: '🧺',
  },
  reading: {
    headline: '곳간 가득, 마음도 인연도 풍년이에요',
    summary:
      '여황제 카드는 풍요와 돌봄, 오감의 즐거움을 뜻해요. 오늘 당신은 곁에 있기만 해도 편안한 푹신한 쿠션 같은 존재예요. 맛있는 이야기를 꺼내면 대화가 골골송처럼 부드럽게 이어질 거예요.',
    networkerType: '다정한 분위기 메이커형',
    stats: [
      { label: '친화력', score: 96, comment: '누구든 포근하게 품어요' },
      { label: '대화운', score: 81, comment: '맛 얘기면 끝이 없어요' },
      { label: '인연운', score: 73, comment: '천천히 익어가는 인연' },
      { label: '에너지', score: 64, comment: '느긋하게 충전 중' },
    ],
    luckyTopic: '최근에 먹은 인생 메뉴',
    luckyItem: '나눠 먹을 작은 간식',
    caution: '챙겨주다 보면 정작 내 이야기는 못 할 수 있어요. 오늘은 받는 연습도 해봐요.',
    checklist: ['상대의 최애 맛집 하나 알아내기', '옆 사람에게 간식이나 음료 권하기', '상대의 취향이나 아이디어 칭찬하기'],
    catAdvice: '배가 든든해야 마음도 말랑해진다냥. 츄르 먼저다냥',
    bestMatch: 'emperor',
  },
  questions: [
    {
      q: '오늘 이 모임 끝나고 딱 하나 먹으러 간다면 뭘 먹을래요?',
      level: 1,
      followUp: '그 메뉴는 어디서 먹어야 제일 맛있어요?',
    },
    {
      q: '이맘때가 되면 꼭 챙겨 먹는 제철 음식이 있다면 뭐예요?',
      level: 1,
      followUp: '그걸 먹으면 어떤 장면이 떠올라요?',
    },
    {
      q: '집이든 밖이든 앉기만 하면 마음이 풀리는 나만의 자리는 어디예요?',
      level: 1,
      followUp: '그 자리에서는 주로 뭘 하면서 시간을 보내요?',
    },
    {
      q: '요즘 나를 기분 좋게 만드는 냄새나 소리가 있다면 뭐예요?',
      level: 1,
      followUp: '그 냄새나 소리를 만나면 떠오르는 장면은요?',
    },
    {
      q: '누군가를 꼭 데려가고 싶은 나만의 단골 가게를 소개해 줄래요?',
      level: 2,
      followUp: '거기서 꼭 시켜야 하는 메뉴는 뭐예요?',
    },
    {
      q: '이상하게 일이나 공부가 술술 풀리는 나만의 명당은 어디예요?',
      level: 2,
      followUp: '그 공간의 어떤 점이 집중을 도와줘요?',
    },
    {
      q: '기운 없는 날 나를 확실하게 채워주는 한 끼는 뭐예요?',
      level: 2,
      followUp: '그 한 끼가 가장 맛있었던 날은 언제였어요?',
    },
    {
      q: '요즘 내 공간에 새로 들인 것 중 제일 만족스러운 건 뭐예요?',
      level: 2,
      followUp: '그걸 들이고 나서 뭐가 달라졌어요?',
    },
    {
      q: '물건이 아니면서 나를 가장 풍요롭게 채워주는 건 뭐예요?',
      level: 3,
      followUp: '최근에 그걸 가득 느낀 순간은 언제였어요?',
    },
    {
      q: '누군가를 챙겨줄 때 나만의 방식이 있다면 어떤 거예요?',
      level: 3,
      followUp: '반대로 나는 어떻게 챙김받을 때 제일 좋아요?',
    },
  ],
}

export default card
