import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'world',
  number: 21,
  roman: 'XXI',
  nameKo: '세계',
  nameEn: 'The World',
  catName: '세계여행 턱시도냥',
  keywords: ['완성', '여행', '성취'],
  theme: {
    title: '세상 한 바퀴',
    subtitle: '여행의 추억부터 한 사이클을 완주한 성취까지',
    emoji: '🌍',
  },
  reading: {
    headline: '무대가 넓어지는 날, 어디서든 통하는 당신',
    summary:
      '세계 카드는 긴 여정의 완성을 뜻해요. 한 사이클을 끝낸 당신에겐 여유와 자신감이 흘러요. 오늘은 분야도 배경도 다른 사람과 만날수록 대화가 풍성해지는 날이에요.',
    networkerType: '경계 없는 세계인형',
    stats: [
      { label: '친화력', score: 89, comment: '누구와도 금세 어울려요' },
      { label: '대화운', score: 79, comment: '경험담 보따리가 두둑' },
      { label: '인연운', score: 86, comment: '먼 분야의 인연이 가까이' },
      { label: '에너지', score: 68, comment: '완주 후 여유로운 리듬' },
    ],
    luckyTopic: '기억에 남는 여행지',
    luckyItem: '여행지에서 산 키링',
    caution: '경험 자랑이 길어지지 않게 주의! 상대의 세계에도 여권 도장을 찍어봐요.',
    checklist: [
      '나와 다른 분야의 사람과 대화 나누기',
      '상대가 추천한 장소 하나 메모하기',
      "마무리 인사로 '덕분에 즐거웠어요' 말하기",
    ],
    catAdvice: '리본 흔들며 한 바퀴 돌고 나면, 어디든 우리 동네가 된다냥',
    bestMatch: 'fool',
  },
  questions: [
    { q: '지금 바로 순간이동할 수 있다면 어느 도시로 가고 싶어요?', level: 1, followUp: '도착하자마자 제일 먼저 할 일은요?' },
    { q: '여행 갈 때 꼭 챙기는 나만의 필수템은 뭐예요?', level: 1, followUp: '그걸 꼭 챙기게 된 사연은 뭐예요?' },
    { q: '여럿이 여행 가면 나는 계획, 맛집, 사진 중 주로 뭘 맡는 편이에요?', level: 1, followUp: '그 역할 덕분에 생긴 에피소드가 있다면요?' },
    { q: '동네 산책도 좋아요, 최근에 새로 발견한 마음에 드는 장소는 어디예요?', level: 1, followUp: '거기서 가장 기억에 남는 한 장면은요?' },
    { q: '여행 중 계획에 없던 일 덕분에 오히려 더 좋았던 순간이 있다면요?', level: 2, followUp: '그 순간을 사진 한 장으로 남긴다면요?' },
    { q: '다른 나라나 지역에서 보고 내 일상에 들여온 습관이 있다면 뭐예요?', level: 2, followUp: '그 습관을 본 주변 반응은 어땠어요?' },
    { q: '큰일을 끝까지 마쳤을 때 나만의 자축 의식은 뭐예요?', level: 2, followUp: '가장 기억에 남는 자축은 언제였어요?' },
    { q: '세계 어디서든 일할 수 있다면 어느 곳에서 어떤 일을 해보고 싶어요?', level: 2, followUp: '그곳을 고른 결정적인 이유는 뭐예요?' },
    { q: '지금까지의 여정을 지도로 그린다면 꼭 표시하고 싶은 지점은 어디예요?', level: 3, followUp: '다음 목적지로 찍어두고 싶은 곳은요?' },
    { q: "나에게 '드디어 완성됐다'는 느낌은 어떤 순간에 찾아와요?", level: 3, followUp: '요즘 완성을 향해 가고 있는 건 뭐예요?' },
  ],
}

export default card
