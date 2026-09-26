import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'hermit',
  number: 9,
  roman: 'IX',
  nameKo: '은둔자',
  nameEn: 'The Hermit',
  catName: '등불지기 스모키냥',
  keywords: ['충전', '취미', '고요함'],
  theme: {
    title: '나만의 충전 시간',
    subtitle: '혼자만의 시간, 좋아하는 취미와 나를 충전하는 법',
    emoji: '🕯️',
  },
  reading: {
    headline: '북적임보다 1:1 대화에서 빛나는 날',
    summary:
      '은둔자 카드는 고요한 성찰과 마음속 등불을 뜻해요. 오늘은 여럿과 떠들기보다 한 사람과 천천히 깊게 이야기할 때 운이 열려요. 조용한 구석 자리가 오늘의 명당이에요.',
    networkerType: '1:1 딥토크 장인형',
    stats: [
      { label: '친화력', score: 55, comment: '낯가림 살짝 발동' },
      { label: '대화운', score: 90, comment: '한 명과는 끝없이 수다' },
      { label: '인연운', score: 80, comment: '오래갈 인연 하나' },
      { label: '에너지', score: 47, comment: '틈틈이 혼자 충전 필요' },
    ],
    luckyTopic: '혼자 즐기는 취미',
    luckyItem: '작은 수첩과 펜',
    caution: '조용히 있다 보면 먼저 다가온 사람을 놓칠 수 있어요. 눈인사는 잊지 말아요.',
    checklist: [
      '한 사람과 10분 이상 깊게 대화하기',
      '상대가 추천한 것 하나 메모하기',
      '쉬는 시간에 혼자 숨 고르기',
    ],
    catAdvice: '혼자 있는 시간도 마음의 등불을 채우는 시간이다냥',
    bestMatch: 'sun',
  },
  questions: [
    {
      q: '카페, 공원, 방 한구석처럼 혼자 있기 좋은 나만의 아지트는 어디예요?',
      level: 1,
      followUp: '그곳에서 꼭 하는 일은 뭐예요?',
    },
    {
      q: '혼자 있을 때 꼭 틀어두는 음악이나 영상 채널이 있다면 뭐예요?',
      level: 1,
      followUp: '처음 듣는 사람에게 딱 하나 추천한다면요?',
    },
    {
      q: '혼밥, 혼영, 혼코노 중 가장 자신 있는 혼자 놀기는 뭐예요?',
      level: 1,
      followUp: '처음 혼자 해봤을 때 기분은 어땠어요?',
    },
    {
      q: '나는 사람을 만나며 충전하는 편이에요, 혼자 쉬며 충전하는 편이에요?',
      level: 1,
      followUp: '충전이 다 됐다는 나만의 신호는 뭐예요?',
    },
    {
      q: '시간 가는 줄 모르고 푹 빠져서 하게 되는 일은 뭐예요?',
      level: 2,
      followUp: '그걸 할 때 꼭 챙기는 준비물이나 간식은 뭐예요?',
    },
    {
      q: '혼자 조용히 파고들다 보니 꽤 잘 알게 된 분야가 있다면 뭐예요?',
      level: 2,
      followUp: '입문자에게 추천하는 첫걸음은 뭐예요?',
    },
    {
      q: '유난히 지친 날, 나를 다시 켜주는 충전 코스를 순서대로 말해본다면요?',
      level: 2,
      followUp: '그중 절대 빠질 수 없는 단계는 뭐예요?',
    },
    {
      q: '산책, 일기, 메모처럼 혼자 생각을 정리할 때 쓰는 나만의 방법은 뭐예요?',
      level: 2,
      followUp: '그렇게 정리하다 떠오른 좋은 아이디어가 있다면요?',
    },
    {
      q: '혼자만의 시간을 보내다가 새롭게 알게 된 내 모습이 있다면 뭐예요?',
      level: 3,
      followUp: '그 모습을 알고 나서 달라진 점은 뭐예요?',
    },
    {
      q: '딱 한 달, 아무 방해 없는 시간이 생긴다면 무엇을 깊이 파고들고 싶어요?',
      level: 3,
      followUp: '그 한 달의 마지막 날, 나는 어떤 모습일까요?',
    },
  ],
}

export default card
