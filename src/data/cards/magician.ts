import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'magician',
  number: 1,
  roman: 'I',
  nameKo: '마법사',
  nameEn: 'The Magician',
  catName: '마술사 턱시도냥',
  keywords: ['재능', '실행력', '손재주'],
  theme: {
    title: '숨은 재능 발견',
    subtitle: '나만 가진 스킬과 아무도 몰랐던 숨은 능력',
    emoji: '🪄',
  },
  reading: {
    headline: '테이블 위 재료는 이미 다 갖췄어요',
    summary:
      '마법사 카드는 가진 것으로 원하는 걸 만들어내는 실행의 카드예요. 오늘은 말 한마디에도 마법이 실리는 날! 재능을 살짝 꺼내 보이면 우유 접시에 모이듯 사람들이 모여들 거예요.',
    networkerType: '재능 시연 마술사형',
    stats: [
      { label: '친화력', score: 74, comment: '매너 있는 턱시도 매력' },
      { label: '대화운', score: 95, comment: '말에 마법이 실려요' },
      { label: '인연운', score: 66, comment: '보여줘야 이어져요' },
      { label: '에너지', score: 83, comment: '손끝까지 반짝반짝' },
    ],
    luckyTopic: '요즘 연마 중인 스킬',
    luckyItem: '잘 써지는 펜 한 자루',
    caution: '재주 자랑이 길어지면 원맨쇼가 돼요. 상대의 재능도 꼭 무대에 올려주세요.',
    checklist: ['내 특기를 한 문장으로 소개하기', '상대의 숨은 재능 하나 찾아내기', '내가 아는 작은 팁 하나 나눠주기'],
    catAdvice: '재능은 숨기면 털뭉치, 꺼내 보이면 마법이다냥',
    bestMatch: 'star',
  },
  questions: [
    {
      q: '남들이 보면 신기해하는 나만의 사소한 재주는 뭐예요?',
      level: 1,
      followUp: '그 재주는 언제 처음 발견했어요?',
    },
    {
      q: '주변 사람들이 뭔가 막히면 꼭 나한테 물어보는 분야가 있다면요?',
      level: 1,
      followUp: '어쩌다 그 분야 담당이 됐어요?',
    },
    {
      q: '일할 때만 쓸 수 있는 초능력 하나를 고른다면 뭘 고를래요?',
      level: 1,
      followUp: '그 능력으로 제일 먼저 뭘 해결할래요?',
    },
    {
      q: '요리, 조립, 정리, 그리기처럼 손으로 하는 일 중 제일 자신 있는 건 뭐예요?',
      level: 1,
      followUp: '그 솜씨로 만든 것 중 제일 뿌듯한 건 뭐예요?',
    },
    {
      q: '최근에 새로 익힌 스킬 중 제일 뿌듯한 건 뭐예요?',
      level: 2,
      followUp: '익히는 데 가장 도움이 된 방법은 뭐였어요?',
    },
    {
      q: '누구에게든 10분 안에 가르쳐줄 수 있는 것 하나를 고른다면요?',
      level: 2,
      followUp: '가르칠 때 제일 먼저 알려주는 핵심 요령은 뭐예요?',
    },
    {
      q: '취미나 딴짓으로 길렀는데 일할 때 의외로 쓸모 있는 능력은 뭐예요?',
      level: 2,
      followUp: '그 능력이 제대로 빛났던 순간을 들려줄래요?',
    },
    {
      q: '최근에 옆에서 보고 감탄한 다른 사람의 재능은 뭐였어요?',
      level: 2,
      followUp: '나라면 그 재능을 어떻게 배워볼 것 같아요?',
    },
    {
      q: '아직 제대로 꺼내 쓰지 못한 나의 숨은 능력이 있다면 뭘까요?',
      level: 3,
      followUp: '그 능력을 펼칠 무대는 어디일까요?',
    },
    {
      q: '내가 가진 재주들을 조합해 무언가 하나를 만든다면 뭘 만들고 싶어요?',
      level: 3,
      followUp: '그걸 만들려면 어떤 재료가 더 필요할까요?',
    },
  ],
}

export default card
