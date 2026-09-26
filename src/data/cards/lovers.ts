import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'lovers',
  number: 6,
  roman: 'VI',
  nameKo: '연인',
  nameEn: 'The Lovers',
  catName: '삼색·고등어 단짝냥',
  keywords: ['선택', '케미', '협업'],
  theme: {
    title: '케미와 선택',
    subtitle: '함께 일하고 싶은 사람, 그리고 나의 선택 기준',
    emoji: '🤝',
  },
  reading: {
    headline: '오늘은 찰떡 케미가 기다리는 날',
    summary:
      '연인 카드는 마음이 통하는 만남과 중요한 선택을 뜻해요. 오늘은 유난히 말이 잘 통하는 사람이 꼭 한 명 나타날 운세! 코끝 인사하는 고양이들처럼 공통점부터 찾아보세요.',
    networkerType: '찰떡 케미 탐지형',
    stats: [
      { label: '친화력', score: 88, comment: '눈만 마주쳐도 통해요' },
      { label: '대화운', score: 82, comment: '공통점 찾으면 술술' },
      { label: '인연운', score: 96, comment: '운명의 협업 파트너 등장' },
      { label: '에너지', score: 63, comment: '둘이 있을 때 충전돼요' },
    ],
    luckyTopic: '같이 일하고 싶은 사람',
    luckyItem: '나눠 먹을 간식',
    caution: '케미가 좋다고 한 사람하고만 수다 떨면 다른 인연을 놓칠 수 있어요.',
    checklist: [
      '나와 공통점이 3개인 사람 찾기',
      '대화한 사람과 명함이나 SNS 교환하기',
      '두 사람을 서로에게 소개해주기',
    ],
    catAdvice: '코끝 인사 한 번이면 우린 벌써 단짝이다냥',
    bestMatch: 'temperance',
  },
  questions: [
    {
      q: '최근에 가장 오래 고민하다가 고른 물건은 뭐였어요?',
      level: 1,
      followUp: '결국 그걸 고른 결정적인 이유는 뭐였나요?',
    },
    {
      q: '밸런스 게임! 말이 잘 통하는 동료와 손발이 척척 맞는 동료, 어느 쪽을 고를래요?',
      level: 1,
      followUp: '반대쪽을 포기한 이유는 뭐예요?',
    },
    {
      q: '처음 만난 사람과 금방 친해지게 해주는 나만의 필살 대화 소재는 뭐예요?',
      level: 1,
      followUp: '그 소재로 친해졌던 에피소드를 들려줄래요?',
    },
    {
      q: '몸으로 말해요, 스피드 퀴즈 같은 2인 1조 게임이라면 어떤 게임이 제일 자신 있어요?',
      level: 1,
      followUp: '그 게임에서 파트너에게 바라는 역할은 뭐예요?',
    },
    {
      q: '함께 일하거나 공부한 사람 중 최고의 파트너를 떠올리면, 어떤 점이 좋았나요?',
      level: 2,
      followUp: '그 사람에게 배워서 지금도 쓰는 습관은 뭐예요?',
    },
    {
      q: '팀에서 나는 아이디어 담당, 정리 담당, 분위기 담당 중 어디에 가까워요?',
      level: 2,
      followUp: '그 역할을 맡게 된 계기는 뭐였어요?',
    },
    {
      q: '나와 정반대 스타일인 사람과 일해보고 의외로 좋았던 경험을 들려줄래요?',
      level: 2,
      followUp: '그 뒤로 일하는 방식에서 달라진 점은 뭐예요?',
    },
    {
      q: '오늘 여기 모인 사람들과 뭔가를 함께 만든다면, 어떤 걸 해보고 싶어요?',
      level: 2,
      followUp: '그 프로젝트에 꼭 필요한 역할은 뭘까요?',
    },
    {
      q: '중요한 선택을 할 때 나는 직감, 논리, 주변의 조언 중 무엇을 가장 믿어요?',
      level: 3,
      followUp: '그렇게 내린 선택 중 가장 뿌듯했던 건 뭐예요?',
    },
    {
      q: '누군가 나를 "같이 일하고 싶은 사람"이라고 한다면, 어떤 이유였으면 좋겠어요?',
      level: 3,
      followUp: '그런 동료가 되려고 요즘 신경 쓰는 건 뭐예요?',
    },
  ],
}

export default card
