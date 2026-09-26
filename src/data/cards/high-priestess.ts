import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'high-priestess',
  number: 2,
  roman: 'II',
  nameKo: '여사제',
  nameEn: 'The High Priestess',
  catName: '달빛 러시안블루냥',
  keywords: ['직관', '취향', '비밀노트'],
  theme: {
    title: '나만 아는 취향',
    subtitle: '직감으로 고른 것들, 남들은 잘 모르는 관심사 이야기',
    emoji: '🔮',
  },
  reading: {
    headline: '말보다 눈빛이 먼저 통하는 날',
    summary:
      '여사제 카드는 고요한 직관과 숨겨진 지혜를 뜻해요. 오늘은 많이 말하기보다 잘 듣는 쪽에 운이 있어요. 첫인상에서 오는 촉을 믿어보세요. 그 촉, 고양이 수염만큼 정확하다냥.',
    networkerType: '촉 좋은 관찰자형',
    stats: [
      { label: '친화력', score: 52, comment: '처음엔 살짝 도도하게' },
      { label: '대화운', score: 78, comment: '일대일 대화에 강해요' },
      { label: '인연운', score: 91, comment: '촉이 오면 그 사람!' },
      { label: '에너지', score: 47, comment: '조용히 아껴 써요' },
    ],
    luckyTopic: '남들은 모르는 나의 최애',
    luckyItem: '손바닥만 한 수첩',
    caution: '관찰만 하다 보면 신비주의로 오해받아요. 내 취향도 하나쯤 먼저 공개해 봐요.',
    checklist: ['첫인상에 촉이 온 사람과 대화하기', '상대의 말을 끝까지 듣고 질문하기', '나만의 취향 하나 먼저 털어놓기'],
    catAdvice: '베일 뒤에 숨은 이야기가 제일 재밌는 법이다냥',
    bestMatch: 'sun',
  },
  questions: [
    {
      q: '주변 사람들이 들으면 의외라고 할 만한 내 취향은 뭐예요?',
      level: 1,
      followUp: '그 취향은 어떻게 생기게 됐어요?',
    },
    {
      q: '요즘 알고리즘이 나에게 자꾸 보여주는 콘텐츠는 뭐예요?',
      level: 1,
      followUp: '알고리즘이 본 나는 어떤 사람일까요?',
    },
    {
      q: '첫 소절이나 첫 장만 보고 "이거다!" 싶었던 노래나 책은 뭐예요?',
      level: 1,
      followUp: '어떤 부분이 마음을 확 끌었어요?',
    },
    {
      q: '메뉴나 선물을 고를 때 오래 비교하는 편이에요, 촉으로 바로 고르는 편이에요?',
      level: 1,
      followUp: '촉으로 바로 골랐다가 대성공한 건 뭐였어요?',
    },
    {
      q: '누가 알려주지 않았는데 혼자 깊이 파고든 분야나 장르는 뭐예요?',
      level: 2,
      followUp: '처음 빠져들게 된 입구는 뭐였어요?',
    },
    {
      q: '내 취향을 제대로 보여줄 물건 세 가지를 고른다면 뭘 고를래요?',
      level: 2,
      followUp: '그중 딱 하나만 남긴다면 뭐예요?',
    },
    {
      q: '논리보다 직감을 믿었는데 결과가 좋았던 선택을 들려줄래요?',
      level: 2,
      followUp: '직감이 올 때는 어떤 느낌이 들어요?',
    },
    {
      q: '남들은 그냥 지나치는데 나는 유독 눈여겨보는 디테일은 뭐예요?',
      level: 2,
      followUp: '그 디테일이 눈에 들어오게 된 계기는요?',
    },
    {
      q: '예전엔 별로였는데 지금은 좋아하게 된 취향이 있다면 뭐예요?',
      level: 3,
      followUp: '무엇이 그 취향을 바꿔놓았을까요?',
    },
    {
      q: '처음 만난 사람과 대화하다 어떤 순간에 "우리 잘 통하겠다"는 촉이 와요?',
      level: 3,
      followUp: '그 촉이 딱 맞았던 경험을 들려줄래요?',
    },
  ],
}

export default card
