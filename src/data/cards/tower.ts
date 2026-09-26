import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'tower',
  number: 16,
  roman: 'XVI',
  nameKo: '탑',
  nameEn: 'The Tower',
  catName: '캣타워 탈출냥',
  keywords: ['반전', '돌발 상황', '웃음'],
  theme: {
    title: '예상 밖의 반전',
    subtitle: '웃으며 말할 수 있는 실수담과 뜻밖의 사건들',
    emoji: '⚡',
  },
  reading: {
    headline: '와장창! 뜻밖의 순간이 인연 되는 날',
    summary:
      '탑 카드는 갑작스러운 변화의 카드지만, 오늘은 웃음의 카드예요. 계획이 틀어지고 말이 꼬여도 괜찮아요. 무너지는 캣타워에서도 멋지게 착지하면 그게 최고의 스토리니까요.',
    networkerType: '반전 매력 폭탄형',
    stats: [
      { label: '친화력', score: 79, comment: '허당미에 다들 웃음' },
      { label: '대화운', score: 98, comment: '실수담 하나로 대폭발' },
      { label: '인연운', score: 71, comment: '돌발 인연 주의보' },
      { label: '에너지', score: 52, comment: '들쑥날쑥 번개 모드' },
    ],
    luckyTopic: '웃픈 실수 에피소드',
    luckyItem: '보조배터리',
    caution: '돌발 상황에 당황해도 괜찮아요. 남의 실수담은 놀림 대신 공감으로 받아주세요.',
    checklist: [
      '나의 웃픈 실수담 하나 먼저 풀기',
      '예정에 없던 사람과 대화 시작하기',
      '계획이 틀어지면 "오히려 좋아" 외치기',
    ],
    catAdvice: '떨어져도 네 발로 착지하면 된다냥. 그게 고양이 클래스다냥.',
    bestMatch: 'star',
  },
  questions: [
    {
      q: '엉뚱한 사람이나 단톡방에 메시지를 잘못 보냈던 웃픈 경험이 있다면요?',
      level: 1,
      followUp: '그때 어떻게 수습했어요?',
    },
    {
      q: '길 찾기 앱만 믿고 가다가 전혀 엉뚱한 곳에 도착한 적이 있다면요?',
      level: 1,
      followUp: '그곳에서 결국 어떻게 빠져나왔어요?',
    },
    {
      q: '스포 없이 추천한다면, 반전에 가장 놀랐던 영화나 드라마는 뭐예요?',
      level: 1,
      followUp: '그 반전을 본 순간 어떤 반응이 나왔어요?',
    },
    {
      q: '말이 꼬이거나 단어를 헷갈려서 분위기가 빵 터졌던 순간이 있다면요?',
      level: 1,
      followUp: '그 순간 주변 반응은 어땠어요?',
    },
    {
      q: '계획이 완전히 뒤집혔는데 결과는 오히려 좋았던 일이 있다면 뭐예요?',
      level: 2,
      followUp: '뒤집힌 순간 가장 먼저 한 행동은 뭐였어요?',
    },
    {
      q: '"설마 이게 되겠어?" 했는데 진짜 돼버린 일이 있다면 뭐예요?',
      level: 2,
      followUp: '그 일 이후로 달라진 게 있다면요?',
    },
    {
      q: '처음 만난 사람들이 "의외다!"라고 말하는 나의 반전 포인트는 뭐예요?',
      level: 2,
      followUp: '그 반전 포인트는 어쩌다 생겼어요?',
    },
    {
      q: '발표나 회의 중 돌발 상황이 터졌을 때, 나만의 수습 기술은 뭐예요?',
      level: 2,
      followUp: '가장 아찔했던 순간 하나만 들려줄래요?',
    },
    {
      q: '그땐 "망했다!" 싶었는데 지금은 웃으며 말할 수 있는 일은 뭐예요?',
      level: 3,
      followUp: '그 일에서 얻은 교훈을 한 줄로 말한다면요?',
    },
    {
      q: '계획대로 안 풀릴 때 나를 다시 일으켜 세우는 나만의 주문이나 방법은 뭐예요?',
      level: 3,
      followUp: '최근에 그 주문을 써먹은 순간은 언제였어요?',
    },
  ],
}

export default card
