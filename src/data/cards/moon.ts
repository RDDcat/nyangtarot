import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'moon',
  number: 18,
  roman: 'XVIII',
  nameKo: '달',
  nameEn: 'The Moon',
  catName: '몽상가 샴냥',
  keywords: ['상상', '직감', '신비'],
  theme: {
    title: '한밤의 엉뚱 상상',
    subtitle: "'만약에'로 시작하는 엉뚱한 상상과 작은 미스터리",
    emoji: '🌙',
  },
  reading: {
    headline: '첫인상 너머에 숨은 재미를 발견하는 날',
    summary:
      '달빛 아래선 모든 게 조금씩 달라 보여요. 조용해 보이던 사람이 알고 보니 최고의 입담꾼일지도 몰라요. 직감은 믿되, 엉뚱한 상상은 마음껏 풀어놓으세요.',
    networkerType: '야행성 상상가형',
    stats: [
      { label: '친화력', score: 64, comment: '낯가림은 달빛 탓이에요' },
      { label: '대화운', score: 88, comment: '엉뚱한 얘기에 대박 조짐' },
      { label: '인연운', score: 71, comment: '의외의 사람과 통해요' },
      { label: '에너지', score: 49, comment: '살짝 졸린 샴냥 모드' },
    ],
    luckyTopic: '어젯밤 꾼 이상한 꿈',
    luckyItem: '반짝이는 은색 볼펜',
    caution: '첫인상만으로 사람을 단정하지 말아요. 달빛은 모든 걸 조금 다르게 비추거든요.',
    checklist: [
      '조용해 보이는 사람에게 먼저 말 걸기',
      "'만약에~'로 시작하는 질문 하나 던지기",
      '대화 중 떠오른 엉뚱한 상상 공유하기',
    ],
    catAdvice: '졸린 눈이어도 귀는 쫑긋, 재밌는 얘기는 원래 밤에 나오는 법이다냥',
    bestMatch: 'sun',
  },
  questions: [
    { q: '하룻밤 동안 고양이가 된다면 제일 먼저 뭘 하고 싶어요?', level: 1, followUp: '사람으로 돌아와서도 기억하고 싶은 건요?' },
    { q: '밤하늘에 나만의 별자리를 하나 만든다면, 어떤 모양을 그려 넣을래요?', level: 1, followUp: '그 별자리에 얽힌 전설도 하나 지어볼래요?' },
    { q: '최근에 꾼 꿈 중에 제일 황당했던 장면은 뭐였어요?', level: 1, followUp: '그 꿈을 해몽해본다면 무슨 뜻일까요?' },
    { q: '달 뒷면에 비밀 가게를 하나 연다면, 뭘 파는 가게일까요?', level: 1, followUp: '가게 이름이랑 대표 메뉴도 정해볼까요?' },
    { q: '사라진 양말 한 짝처럼, 일상 속 풀리지 않은 미스터리가 있다면요?', level: 2, followUp: '내가 세운 가장 그럴듯한 가설은 뭐예요?' },
    { q: '잠들기 전에 자주 빠지는 엉뚱한 상상은 어떤 거예요?', level: 2, followUp: '그 상상 속 나는 주로 어떤 모습이에요?' },
    { q: '영화나 게임 속 세계 하나에 들어가 살 수 있다면 어디를 고를래요?', level: 2, followUp: '그 세계에서 나는 어떤 역할을 맡을까요?' },
    { q: '첫인상과 실제가 완전 딴판이었던 장소나 물건, 음식이 있다면요?', level: 2, followUp: '그 반전을 알게 된 계기는 뭐였어요?' },
    { q: '낮의 나와 밤의 내가 조금 다르다면, 밤의 나는 어떤 사람이에요?', level: 3, followUp: '밤의 나에게서 낮에도 빌려오고 싶은 모습은요?' },
    { q: '어릴 때 진짜라고 믿었던 상상 중에 아직도 조금은 믿고 싶은 건 뭐예요?', level: 3, followUp: '그 믿음이 지금의 나에게 남긴 건 뭘까요?' },
  ],
}

export default card
