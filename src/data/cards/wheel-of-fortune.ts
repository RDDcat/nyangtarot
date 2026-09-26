import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'wheel-of-fortune',
  number: 10,
  roman: 'X',
  nameKo: '운명의 수레바퀴',
  nameEn: 'Wheel of Fortune',
  catName: '행운의 카오스냥',
  keywords: ['우연', '행운', '전환점'],
  theme: {
    title: '우연과 터닝포인트',
    subtitle: '뜻밖의 행운, 그리고 인생의 방향이 바뀐 순간',
    emoji: '🎡',
  },
  reading: {
    headline: '돌고 도는 바퀴가 뜻밖의 인연을 데려와요',
    summary:
      '운명의 수레바퀴는 흐름이 바뀌고 행운이 찾아오는 전환점을 뜻해요. 오늘은 우연히 옆자리에 앉은 사람, 줄 서다 나눈 한마디가 큰 기회로 굴러올 수 있어요. 흐름에 몸을 맡겨보세요.',
    networkerType: '우연 인연 수집가형',
    stats: [
      { label: '친화력', score: 74, comment: '누구와도 데굴데굴' },
      { label: '대화운', score: 64, comment: '타이밍이 반은 먹고 가요' },
      { label: '인연운', score: 98, comment: '우연이 인연 되는 날' },
      { label: '에너지', score: 81, comment: '흐름 타면 쭉쭉' },
    ],
    luckyTopic: '뜻밖의 행운 에피소드',
    luckyItem: '주사위 모양 키링',
    caution: '운이 좋다고 기다리기만 하면 바퀴가 멈춰요. 한 번은 먼저 굴려봐요.',
    checklist: [
      '자리를 한 번 옮겨 새 사람 옆에 앉기',
      '처음 만난 사람과 우연한 공통점 찾기',
      '대화한 사람에게 다른 사람 소개받기',
    ],
    catAdvice: '굴러온 기회는 앞발로 톡 잡아야 한다냥',
    bestMatch: 'magician',
  },
  questions: [
    {
      q: '최근에 겪은 소소하지만 확실한 행운은 뭐였어요?',
      level: 1,
      followUp: '그날 운이 좋았던 비결은 뭘까요?',
    },
    {
      q: '나만의 행운 루틴이나 은근히 믿는 징크스가 있다면 뭐예요?',
      level: 1,
      followUp: '그게 통했던 날 이야기를 해줄래요?',
    },
    {
      q: '오늘 이 자리에 오게 된 건 어떤 우연이나 계기 덕분이에요?',
      level: 1,
      followUp: '오늘 여기서 기대하는 뜻밖의 수확은 뭐예요?',
    },
    {
      q: '인형 뽑기, 경품 추첨, 자리 뽑기에서 가장 기억에 남는 당첨 혹은 꽝 에피소드는요?',
      level: 1,
      followUp: '그 뒤로 생긴 나만의 뽑기 요령은 뭐예요?',
    },
    {
      q: '우연히 시작했는데 지금은 내 일상의 일부가 된 것은 뭐예요?',
      level: 2,
      followUp: '그 우연이 없었다면 지금 뭘 하고 있을까요?',
    },
    {
      q: '우연히 만난 사람의 한마디나 정보가 뜻밖에 큰 도움이 됐던 적은 언제예요?',
      level: 2,
      followUp: '그 사람과는 어떻게 처음 만났어요?',
    },
    {
      q: '계획대로 안 됐는데 오히려 더 잘 풀린 일, 하나만 들려줄래요?',
      level: 2,
      followUp: '그 일로 얻은 교훈을 한마디로 하면 뭐예요?',
    },
    {
      q: '지금의 나를 만든 운과 실력의 비율, 몇 대 몇이라고 생각해요?',
      level: 2,
      followUp: '운이 실력으로 이어졌던 경험이 있다면요?',
    },
    {
      q: '책 한 권, 수업 하나처럼 지금의 나를 만든 작은 터닝포인트는 뭐였어요?',
      level: 3,
      followUp: '그 전과 후, 가장 크게 달라진 건 뭐예요?',
    },
    {
      q: '수레바퀴가 한 바퀴 돌아온 5년 뒤, 나에게 어떤 우연이 찾아오면 좋겠어요?',
      level: 3,
      followUp: '그 우연을 만나려면 지금 뭘 준비해 둘까요?',
    },
  ],
}

export default card
