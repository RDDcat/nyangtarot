import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'strength',
  number: 8,
  roman: 'VIII',
  nameKo: '힘',
  nameEn: 'Strength',
  catName: '사자 후드 아비냥',
  keywords: ['용기', '강점', '다정함'],
  theme: {
    title: '나의 용기와 강점',
    subtitle: '작은 용기를 낸 순간과 나를 버티게 한 힘',
    emoji: '🦁',
  },
  reading: {
    headline: '부드러운 용기가 사자도 골골송 부르게 해요',
    summary:
      '힘 카드는 억센 힘이 아니라 다정함으로 사자를 길들이는 내면의 힘을 뜻해요. 오늘은 조용히 들어주고 따뜻하게 반응하는 것만으로 사람들이 마음을 열어요. 작은 용기 한 스푼이면 충분해요.',
    networkerType: '다정한 사자 조련사형',
    stats: [
      { label: '친화력', score: 93, comment: '다정함이 곧 무기' },
      { label: '대화운', score: 78, comment: '들어주면 술술 풀려요' },
      { label: '인연운', score: 66, comment: '천천히 깊어지는 사이' },
      { label: '에너지', score: 84, comment: '지치지 않는 뒷심' },
    ],
    luckyTopic: '요즘 용기 낸 일',
    luckyItem: '따뜻한 차 한 잔',
    caution: '강해 보이려고 애쓸 필요는 없어요. 모르는 건 모른다고 말하는 게 진짜 힘이에요.',
    checklist: [
      '혼자 있는 사람에게 먼저 말 걸기',
      '상대의 강점 하나를 찾아 칭찬하기',
      '평소라면 안 했을 질문 하나 던지기',
    ],
    catAdvice: '진짜 센 고양이는 발톱 대신 꾹꾹이를 쓴다냥',
    bestMatch: 'tower',
  },
  questions: [
    {
      q: '"여기요!" 부르기, 전화 주문처럼 사소하지만 은근 용기가 필요한 일은 뭐예요?',
      level: 1,
      followUp: '그럴 때 쓰는 나만의 요령은 뭐예요?',
    },
    {
      q: '주변 사람들이 나에게 유독 자주 부탁하는 일은 뭐예요?',
      level: 1,
      followUp: '그 부탁을 받으면 솔직히 어떤 기분이에요?',
    },
    {
      q: '해보기 전엔 무서웠는데 막상 해보니 별거 아니었던 일, 하나만 꼽는다면요?',
      level: 1,
      followUp: '그 뒤로 용기 내서 도전해본 다른 일은 뭐예요?',
    },
    {
      q: '내 강점은 사자의 용기, 고양이의 유연함, 거북이의 끈기 중 어디에 가까워요?',
      level: 1,
      followUp: '그걸 고른 이유가 된 에피소드가 있다면요?',
    },
    {
      q: '처음엔 서툴렀지만 꾸준히 해서 결국 잘하게 된 일은 뭐예요?',
      level: 2,
      followUp: '그만두고 싶을 때 버티게 한 건 뭐였어요?',
    },
    {
      q: '일이 한꺼번에 몰려 정신없던 시기를 버텨낸 나만의 비법은 뭐였어요?',
      level: 2,
      followUp: '그때 배운 걸 지금은 어떻게 써먹고 있어요?',
    },
    {
      q: '누군가에게 "덕분에 힘이 났어요"라는 말을 들었던 일, 어떤 일이었어요?',
      level: 2,
      followUp: '그 일로 새로 알게 된 내 강점은 뭐예요?',
    },
    {
      q: '세게 밀어붙이기보다 부드럽게 설득해서 일이 풀렸던 경험을 들려줄래요?',
      level: 2,
      followUp: '그때 통했던 말이나 행동은 뭐였어요?',
    },
    {
      q: '예전의 나라면 못 했을 텐데, 지금은 해낼 수 있게 된 일은 뭐예요?',
      level: 3,
      followUp: '무엇이 나를 그렇게 바꿔 놓았을까요?',
    },
    {
      q: '용기가 필요한 누군가에게 내 경험을 담아 한마디 해준다면 뭐라고 할래요?',
      level: 3,
      followUp: '그 한마디가 나온 내 경험을 살짝 들려줄래요?',
    },
  ],
}

export default card
