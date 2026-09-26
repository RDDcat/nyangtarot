import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'devil',
  number: 15,
  roman: 'XV',
  nameKo: '악마',
  nameEn: 'The Devil',
  catName: '유혹의 초코냥',
  keywords: ['유혹', '몰입', '길티 플레저'],
  theme: {
    title: '못 끊는 작은 유혹',
    subtitle: '알면서도 빠져드는 나만의 길티 플레저 대공개',
    emoji: '😈',
  },
  reading: {
    headline: '솔직한 고백 하나가 분위기를 녹이는 날',
    summary:
      '악마 카드는 끊기 힘든 유혹을 뜻하지만, 오늘은 그 유혹이 무기예요! 츄르 앞의 고양이처럼 좋아하는 걸 솔직하게 털어놓으면, 같은 것에 빠진 동지가 금방 나타나요.',
    networkerType: '솔직 고백 매력형',
    stats: [
      { label: '친화력', score: 86, comment: '허당 매력에 무장해제' },
      { label: '대화운', score: 93, comment: '덕질 얘기면 끝이 없음' },
      { label: '인연운', score: 66, comment: '취향 동지 한 명은 확실' },
      { label: '에너지', score: 81, comment: '신나면 멈추지 못함' },
    ],
    luckyTopic: '요즘 빠져 있는 덕질',
    luckyItem: '주머니 속 젤리',
    caution: '최애 이야기에 신나서 혼자 5분 넘게 말하고 있진 않은지 살짝 체크!',
    checklist: [
      '나의 길티 플레저 하나 먼저 고백하기',
      '상대의 최애 콘텐츠 하나 메모하기',
      '"저도요!"를 외칠 공통 취향 찾기',
    ],
    catAdvice: '"츄르 딱 하나만 더"는 절대 하나로 안 끝난다냥. 그래도 행복하다냥.',
    bestMatch: 'high-priestess',
  },
  questions: [
    {
      q: '"딱 한 편만" 하고 보다가 밤새 정주행한 드라마나 영상은 뭐예요?',
      level: 1,
      followUp: '그중 누군가에게 꼭 권하고 싶은 건요?',
    },
    {
      q: '편의점에 가면 계획에 없어도 꼭 집어 오는 간식은 뭐예요?',
      level: 1,
      followUp: '그 간식의 최고 조합을 알려줄래요?',
    },
    {
      q: '고양이에게 상자가 있다면, 한번 들어가면 못 나오는 나만의 "늪"은 어디예요?',
      level: 1,
      followUp: '거기서 주로 뭘 하며 시간을 보내요?',
    },
    {
      q: '알람 미루기처럼, 알면서도 못 끊는 소소한 습관은 뭐예요?',
      level: 1,
      followUp: '그 습관을 사수하는 나만의 핑계는요?',
    },
    {
      q: '장바구니에 넣었다 뺐다만 몇 번째 반복 중인 물건이 있다면 뭐예요?',
      level: 2,
      followUp: '결국 산다면 어떤 핑계를 댈 것 같아요?',
    },
    {
      q: '남들은 의외라고 할 만한, 몰래 엄청 좋아하는 노래나 장르는 뭐예요?',
      level: 2,
      followUp: '그 노래는 주로 언제 꺼내 들어요?',
    },
    {
      q: '책상 정리처럼, 마감 직전만 되면 괜히 하게 되는 딴짓은 뭐예요?',
      level: 2,
      followUp: '그 딴짓에서 건진 의외의 수확이 있다면요?',
    },
    {
      q: '누군가를 무언가에 입덕시켰거나, 반대로 입덕당한 경험이 있다면요?',
      level: 2,
      followUp: '입덕의 결정적 한 방은 뭐였어요?',
    },
    {
      q: '나의 길티 플레저가 사실 나에게 주는 좋은 점이 있다면 뭘까요?',
      level: 3,
      followUp: '그걸 즐길 때 나만의 선은 어디까지예요?',
    },
    {
      q: '유혹을 이겨내고 끝까지 해낸 작은 일이 있다면, 그때 무엇이 힘이 됐어요?',
      level: 3,
      followUp: '해낸 뒤에 나에게 준 보상은 뭐였어요?',
    },
  ],
}

export default card
