import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'hanged-man',
  number: 12,
  roman: 'XII',
  nameKo: '매달린 사람',
  nameEn: 'The Hanged Man',
  catName: '거꾸로 폴드냥',
  keywords: ['관점 전환', '기다림', '내려놓기'],
  theme: {
    title: '거꾸로 보는 세상',
    subtitle: '생각이 뒤집힌 순간과 새로운 관점을 나눠요',
    emoji: '🙃',
  },
  reading: {
    headline: '거꾸로 보면 인연이 보이는 날',
    summary:
      '매달린 사람은 잠시 멈춰 세상을 뒤집어 보는 카드예요. 서두르지 않고 상대의 시선으로 바라볼 때 뜻밖의 공통점이 떠올라요. 오늘은 느긋한 골골송 모드로 가보세요.',
    networkerType: '뜻밖의 시선 발견형',
    stats: [
      { label: '친화력', score: 68, comment: '느긋해서 편안한 인상' },
      { label: '대화운', score: 88, comment: '의외의 한마디가 적중' },
      { label: '인연운', score: 74, comment: '천천히 스며드는 인연' },
      { label: '에너지', score: 47, comment: '오늘은 충전 우선 모드' },
    ],
    luckyTopic: '요즘 생각이 바뀐 것',
    luckyItem: '양면으로 쓰는 메모지',
    caution: '답을 서두르지 마세요. 잠깐의 침묵도 좋은 대화의 일부예요.',
    checklist: [
      '"그렇게도 볼 수 있네요" 한 번 말하기',
      '평소라면 지나쳤을 사람에게 인사하기',
      '대화 중 3초 멈추고 한 번 더 듣기',
    ],
    catAdvice: '거꾸로 매달려 보니 세상이 더 귀여워 보인다냥.',
    bestMatch: 'chariot',
  },
  questions: [
    {
      q: '처음엔 별로였는데 지금은 좋아하게 된 음식은 뭐예요?',
      level: 1,
      followUp: '어떤 계기로 그 맛에 눈을 떴어요?',
    },
    {
      q: '낮잠의 소중함처럼, 어릴 땐 몰랐는데 지금은 공감되는 건 뭐예요?',
      level: 1,
      followUp: '반대로 지금도 여전히 이해 안 되는 건요?',
    },
    {
      q: '고양이처럼 거꾸로 매달려 이 공간을 본다면, 뭐가 제일 웃겨 보일까요?',
      level: 1,
      followUp: '고개를 살짝 기울여 보면, 실제로 뭐가 달라 보여요?',
    },
    {
      q: '남들은 다 좋다는데 나만 "글쎄?" 싶은 유행이나 인기템은 뭐예요?',
      level: 1,
      followUp: '반대로 남들은 잘 모르는데 나만 좋아하는 건요?',
    },
    {
      q: '일하다가 순서를 거꾸로 해봤더니 오히려 잘 풀린 경험이 있다면요?',
      level: 2,
      followUp: '그 발상은 어디서 떠올랐어요?',
    },
    {
      q: '다른 직무나 분야 사람의 한마디에 시야가 확 넓어졌던 적은 언제예요?',
      level: 2,
      followUp: '그 뒤로 일하는 방식이 어떻게 달라졌어요?',
    },
    {
      q: '첫인상과 정반대였던 일이나 프로젝트가 있다면 어떤 거였어요?',
      level: 2,
      followUp: '언제 "어, 이게 아니네" 하고 느꼈어요?',
    },
    {
      q: '막혔던 고민이 샤워나 산책 중에 불쑥 풀렸던 순간이 있다면요?',
      level: 2,
      followUp: '나만의 "생각이 잘 풀리는 장소"는 어디예요?',
    },
    {
      q: '최근 1~2년 사이, 일이나 생활에서 생각이 180도 바뀐 게 있다면 뭐예요?',
      level: 3,
      followUp: '생각이 바뀌는 데 결정적이었던 건 뭐예요?',
    },
    {
      q: '10년 뒤의 내가 오늘의 나를 돌아본다면, 어떤 점을 칭찬해 줄 것 같아요?',
      level: 3,
      followUp: '반대로 "그건 걱정 안 해도 돼"라고 해줄 건요?',
    },
  ],
}

export default card
