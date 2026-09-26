import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'chariot',
  number: 7,
  roman: 'VII',
  nameKo: '전차',
  nameEn: 'The Chariot',
  catName: '돌격대장 벵갈냥',
  keywords: ['추진력', '목표', '전진'],
  theme: {
    title: '목표를 향한 질주',
    subtitle: '요즘 달리고 있는 것, 그리고 나를 움직이는 엔진',
    emoji: '🏁',
  },
  reading: {
    headline: '박스 전차 출발! 거침없이 다가가요',
    summary:
      '전차 카드는 강한 의지와 앞으로 나아가는 힘을 뜻해요. 오늘은 망설이던 인사도, 궁금했던 질문도 먼저 던지면 길이 열리는 날! 목표를 하나 정하고 힘차게 달려보세요. 부릉부릉냥.',
    networkerType: '목표 직진 돌파형',
    stats: [
      { label: '친화력', score: 68, comment: '돌진 전 눈인사 필수' },
      { label: '대화운', score: 77, comment: '목표가 뚜렷하면 술술' },
      { label: '인연운', score: 72, comment: '같은 방향 동료 발견' },
      { label: '에너지', score: 97, comment: '엔진 과열 주의보' },
    ],
    luckyTopic: '요즘 도전 중인 목표',
    luckyItem: '할 일 적힌 메모장',
    caution: '너무 달리다 보면 상대의 속도를 놓칠 수 있어요. 가끔은 브레이크도 밟아요.',
    checklist: [
      '오늘 인사할 사람 수 목표 정하기',
      '처음 보는 사람에게 먼저 질문하기',
      '요즘 내 목표를 한 문장으로 소개하기',
    ],
    catAdvice: '목적지는 정했냥? 그럼 바로 출발이다냥',
    bestMatch: 'star',
  },
  questions: [
    {
      q: '요즘 가장 열심히 달리고 있는 일이나 목표를 한 단어로 표현하면 뭐예요?',
      level: 1,
      followUp: '왜 그 단어가 가장 먼저 떠올랐어요?',
    },
    {
      q: '올해 초에 세운 목표 중 아직 살아남은 것, 혹은 장렬히 전사한 것은 뭐예요?',
      level: 1,
      followUp: '살아남은 비결, 혹은 전사한 이유는 뭐였어요?',
    },
    {
      q: '일이나 공부에 시동을 걸 때 꼭 하는 나만의 준비 의식은 뭐예요?',
      level: 1,
      followUp: '그 의식을 건너뛰면 어떤 일이 생겨요?',
    },
    {
      q: '요즘 내 속도를 탈것에 비유하면 킥보드, KTX, 유람선 중 뭐에 가까워요?',
      level: 1,
      followUp: '갈아탈 수 있다면 어떤 탈것으로 바꾸고 싶어요?',
    },
    {
      q: '작은 것도 좋아요. 목표를 세우고 끝까지 밀어붙여 결국 이뤄낸 일은 뭐예요?',
      level: 2,
      followUp: '포기하고 싶던 순간은 어떻게 넘겼어요?',
    },
    {
      q: '나는 꼼꼼히 계획하고 출발하는 편이에요, 일단 출발하고 길을 찾는 편이에요?',
      level: 2,
      followUp: '그 스타일 덕분에 잘 풀렸던 일은 뭐예요?',
    },
    {
      q: '나를 가장 잘 달리게 하는 연료는 마감, 칭찬, 경쟁, 재미 중 무엇이에요?',
      level: 2,
      followUp: '반대로 엔진을 꺼뜨리는 건 뭐예요?',
    },
    {
      q: '빨리 해내고 싶은데 좀처럼 속도가 안 붙는 목표가 있다면 뭐예요?',
      level: 2,
      followUp: '누가 어떤 도움을 주면 속도가 붙을까요?',
    },
    {
      q: '전차를 끄는 두 스핑크스처럼, 나를 앞으로 끌고 가는 두 가지 힘은 뭐예요?',
      level: 3,
      followUp: '둘 중 요즘 더 힘이 센 쪽은 어느 쪽이에요?',
    },
    {
      q: '1년 뒤 결승선에 도착한 나는 어떤 모습이면 좋겠어요?',
      level: 3,
      followUp: '그 모습에 가까워지려면 이번 달엔 뭐부터 해볼래요?',
    },
  ],
}

export default card
