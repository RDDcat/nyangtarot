import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'temperance',
  number: 14,
  roman: 'XIV',
  nameKo: '절제',
  nameEn: 'Temperance',
  catName: '우유 천사 랙돌',
  keywords: ['균형', '조화', '내 페이스'],
  theme: {
    title: '나만의 페이스',
    subtitle: '루틴과 워라밸, 지치지 않고 가는 나만의 속도',
    emoji: '🥛',
  },
  reading: {
    headline: '딱 알맞은 온도로 스며드는 날',
    summary:
      '절제 카드는 두 잔 사이로 우유를 흘리지 않고 옮기는 조화의 카드예요. 너무 뜨겁지도 차갑지도 않은 거리감이 오늘의 매력 포인트! 내 페이스를 지키며 천천히 스며드세요.',
    networkerType: '적정 온도 조율형',
    stats: [
      { label: '친화력', score: 82, comment: '누구와도 무난히 섞임' },
      { label: '대화운', score: 69, comment: '말보다 리액션이 무기' },
      { label: '인연운', score: 77, comment: '오래 가는 인연 예감' },
      { label: '에너지', score: 60, comment: '과열 없이 딱 적당' },
    ],
    luckyTopic: '나만의 하루 리듬',
    luckyItem: '따뜻한 라떼 한 잔',
    caution: '모두에게 맞춰주다 방전되지 않게, 중간중간 숨 고르기를 잊지 마세요.',
    checklist: [
      '한 사람과 10분 이상 천천히 대화하기',
      '대화 사이사이 물 한 모금으로 쉬어가기',
      '상대와 겹치는 루틴 하나 찾아내기',
    ],
    catAdvice: '꾹꾹이도 너무 세면 아프다냥. 적당히가 최고다냥.',
    bestMatch: 'tower',
  },
  questions: [
    {
      q: '아침형과 저녁형 중 나는 어느 쪽이고, 가장 쌩쌩한 시간은 언제예요?',
      level: 1,
      followUp: '그 시간엔 주로 어떤 일을 해요?',
    },
    {
      q: '하루를 시작할 때 꼭 하는 나만의 작은 의식이 있다면 뭐예요?',
      level: 1,
      followUp: '그걸 못 한 날은 하루가 어떻게 달라져요?',
    },
    {
      q: '커피, 차, 물 중에서 나의 하루를 버티게 해주는 음료는 뭐예요?',
      level: 1,
      followUp: '나만의 최애 레시피나 조합은 뭐예요?',
    },
    {
      q: '일에서 휴식 모드로 스위치를 끄는 나만의 신호는 뭐예요?',
      level: 1,
      followUp: '스위치가 잘 안 꺼지는 날엔 어떻게 해요?',
    },
    {
      q: '평일의 나와 주말의 나, 속도가 얼마나 다른 편이에요?',
      level: 2,
      followUp: '주말 모드의 나를 한 단어로 표현한다면요?',
    },
    {
      q: '일을 몰아서 하는 편과 조금씩 꾸준히 하는 편 중, 나는 어느 쪽이에요?',
      level: 2,
      followUp: '그 스타일의 장점과 단점을 하나씩 꼽는다면요?',
    },
    {
      q: '"요즘 좀 과속하고 있구나" 하고 깨닫게 되는 순간은 언제예요?',
      level: 2,
      followUp: '그럴 땐 속도를 어떻게 늦춰요?',
    },
    {
      q: '할 일이 넘칠 때, 나만의 우선순위 정하는 법은 뭐예요?',
      level: 2,
      followUp: '결국 뒤로 미뤄지는 건 주로 어떤 일이에요?',
    },
    {
      q: '나에게 딱 맞는 일과 쉼의 비율은 몇 대 몇이에요? 그렇게 생각한 이유는요?',
      level: 3,
      followUp: '1년 전의 나는 몇 대 몇이었을까요?',
    },
    {
      q: '오래 지치지 않고 가기 위해, 요즘 일부러 덜 하려고 하는 건 뭐예요?',
      level: 3,
      followUp: '그걸 덜 하니까 어떤 점이 달라졌어요?',
    },
  ],
}

export default card
