import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'star',
  number: 17,
  roman: 'XVII',
  nameKo: '별',
  nameEn: 'The Star',
  catName: '소원술사 크림냥',
  keywords: ['희망', '영감', '치유'],
  theme: {
    title: '반짝이는 버킷리스트',
    subtitle: '언젠가 꼭 해보고 싶은 꿈과 작은 소원 이야기',
    emoji: '🌟',
  },
  reading: {
    headline: '당신의 반짝임이 누군가의 길잡이가 되는 날',
    summary:
      '폭풍이 지나간 밤하늘에 별이 뜨듯, 오늘은 솔직한 꿈 이야기가 사람을 끌어당겨요. 거창한 자기소개보다 "요즘 이런 걸 해보고 싶어요" 한마디가 인연의 물꼬를 터 줘요.',
    networkerType: '희망 전파 별빛형',
    stats: [
      { label: '친화력', score: 82, comment: '말투에 별빛이 묻어나요' },
      { label: '대화운', score: 76, comment: '꿈 이야기로 술술 풀려요' },
      { label: '인연운', score: 94, comment: '오래갈 인연이 반짝' },
      { label: '에너지', score: 58, comment: '잔잔하게 오래 빛나요' },
    ],
    luckyTopic: '요즘 가장 설레는 계획',
    luckyItem: '투명한 물병',
    caution: '꿈 이야기가 즐거워도 상대의 꿈을 평가하진 말아요. 응원이 먼저예요.',
    checklist: [
      '처음 만난 사람에게 요즘 설레는 계획 묻기',
      '상대의 꿈에 진심 어린 응원 한마디 건네기',
      '내 버킷리스트 하나를 소리 내어 말해보기',
    ],
    catAdvice: '별은 혼자 봐도 예쁘지만, 같이 보면 더 반짝이는 거다냥',
    bestMatch: 'magician',
  },
  questions: [
    { q: '별똥별이 떨어지는 순간, 오늘 안에 이뤄질 소원 하나를 빈다면 뭘 빌래요?', level: 1, followUp: '그 소원이 이뤄지면 제일 먼저 뭘 할래요?' },
    { q: '어릴 때 꿈꿨던 장래희망 중에 제일 엉뚱했던 건 뭐예요?', level: 1, followUp: '그 꿈의 흔적이 지금도 남아 있다면 뭘까요?' },
    { q: "휴대폰에 '언젠가 꼭 가봐야지' 하고 저장해 둔 장소나 경험은 뭐예요?", level: 1, followUp: '그걸 저장한 순간, 뭐에 마음이 끌렸어요?' },
    { q: '아주 작지만 올해 안에 꼭 해보고 싶은 소소한 버킷리스트는 뭐예요?', level: 1, followUp: '달력에 그날을 찍는다면 언제로 할래요?' },
    { q: '꿈꾸기만 하다가 실제로 해본 일 중에 제일 뿌듯했던 건 뭐예요?', level: 2, followUp: '해보니 상상과 달랐던 점은 뭐였어요?' },
    { q: '별이 쏟아지는 밤하늘이나 오로라처럼, 언젠가 꼭 보고 싶은 장면이 있다면요?', level: 2, followUp: '그 장면 앞에서 나는 뭘 하고 있을 것 같아요?' },
    { q: '혼자보다 여럿이 하면 더 신날 버킷리스트가 있다면 뭐예요?', level: 2, followUp: '여기서 멤버를 모은다면 몇 명이 필요해요?' },
    { q: '요즘 나에게 영감이나 희망을 준 사람, 책, 영상이 있다면 소개해줄래요?', level: 2, followUp: '거기서 어떤 부분이 제일 마음에 남았어요?' },
    { q: '지금과 전혀 다른 인생을 하나 더 살 수 있다면, 어떤 꿈을 꾸고 싶어요?', level: 3, followUp: '그 꿈에서 지금 삶으로 가져오고 싶은 건요?' },
    { q: "오래 품어온 꿈 중에 '이것만은 꼭 지키고 싶다' 싶은 건 뭐예요?", level: 3, followUp: '그 꿈에 한 걸음 다가가려면 올해 뭘 해볼래요?' },
  ],
}

export default card
