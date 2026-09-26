import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'emperor',
  number: 4,
  roman: 'IV',
  nameKo: '황제',
  nameEn: 'The Emperor',
  catName: '대장 메인쿤냥',
  keywords: ['리더십', '체계', '책임감'],
  theme: {
    title: '나의 일하는 방식',
    subtitle: '일과 커리어, 리더십, 그리고 나만의 업무 스타일',
    emoji: '💼',
  },
  reading: {
    headline: '오늘은 판을 짜는 사람이 주인공!',
    summary:
      '황제 카드는 질서와 책임, 든든한 리더십을 상징해요. 오늘 당신의 말에는 묵직한 신뢰감이 실려요. 흩어진 대화를 정리하고 사람들을 이어주면 모두가 기대고 싶은 든든한 대장냥이 될 거예요.',
    networkerType: '든든한 판짜기형',
    stats: [
      { label: '친화력', score: 55, comment: '첫인상은 살짝 근엄' },
      { label: '대화운', score: 76, comment: '핵심을 콕 짚어요' },
      { label: '인연운', score: 84, comment: '일로 맺는 인연 강세' },
      { label: '에너지', score: 90, comment: '추진력 풀 충전' },
    ],
    luckyTopic: '요즘 맡고 있는 프로젝트',
    luckyItem: '깔끔한 명함 지갑',
    caution: '정답을 알려주고 싶어도 잠깐 참아요. 조언보다 질문이 사람을 더 끌어당겨요.',
    checklist: ['대화에서 소외된 사람 한 명 불러오기', '서로 도움 될 두 사람 연결해 주기', '오늘 만난 사람에게 후속 인사 보내기'],
    catAdvice: '왕좌도 좋지만 가끔은 배를 보여줘야 친해진다냥',
    bestMatch: 'fool',
  },
  questions: [
    {
      q: '지금 하는 일이나 공부를 초등학생에게 한 문장으로 설명한다면요?',
      level: 1,
      followUp: '그 설명을 들은 아이가 뭐라고 할 것 같아요?',
    },
    {
      q: '일을 시작하기 전 나만의 시동 버튼 같은 행동은 뭐예요?',
      level: 1,
      followUp: '그게 없는 날은 하루가 어떻게 달라져요?',
    },
    {
      q: '일할 때 메신저파, 전화파, 직접 만나서파 중 나는 어느 쪽이에요?',
      level: 1,
      followUp: '그 방식이 편한 이유는 뭐예요?',
    },
    {
      q: '일할 때 없으면 안 되는 나만의 필수템이나 최애 툴은 뭐예요?',
      level: 1,
      followUp: '그걸 200% 활용하는 나만의 꿀팁이 있다면요?',
    },
    {
      q: '내가 팀을 이끌게 된다면 제일 먼저 만들고 싶은 규칙 하나는 뭐예요?',
      level: 2,
      followUp: '그 규칙이 떠오른 데에는 어떤 경험이 있었어요?',
    },
    {
      q: '팀에서 나는 주로 기획자, 해결사, 분위기 메이커 중 어떤 역할을 맡게 돼요?',
      level: 2,
      followUp: '그 역할을 자꾸 맡게 되는 이유는 뭘까요?',
    },
    {
      q: '일이 꼬였을 때 판을 다시 짜서 해결했던 경험을 들려줄래요?',
      level: 2,
      followUp: '그때 가장 먼저 한 일은 뭐였어요?',
    },
    {
      q: '요즘 일하면서 시간 가는 줄 모르고 몰입하는 순간은 언제예요?',
      level: 2,
      followUp: '그 몰입을 더 자주 만들려면 뭐가 필요할까요?',
    },
    {
      q: '"이 사람이라면 따라가고 싶다"고 느꼈던 리더의 순간은 언제였어요?',
      level: 3,
      followUp: '그 모습 중 나도 닮고 싶은 건 뭐예요?',
    },
    {
      q: '5년 뒤의 나는 어떤 방식으로 일하고 있으면 좋겠어요?',
      level: 3,
      followUp: '그 모습에 가까워지려면 지금 뭘 해볼 수 있을까요?',
    },
  ],
}

export default card
