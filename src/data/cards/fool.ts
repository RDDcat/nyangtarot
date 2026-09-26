import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'fool',
  number: 0,
  roman: '0',
  nameKo: '바보',
  nameEn: 'The Fool',
  catName: '모험가 치즈냥',
  keywords: ['새출발', '즉흥', '호기심'],
  theme: {
    title: '처음과 모험',
    subtitle: '첫 경험, 즉흥적인 선택, 설레는 새 출발 이야기',
    emoji: '🎒',
  },
  reading: {
    headline: '발 닿는 곳마다 새 인연이 폴짝!',
    summary:
      '바보 카드는 두려움 없는 첫걸음의 카드예요. 오늘 당신은 낯선 사람에게도 꼬리를 번쩍 세우고 다가가는 모험가냥! 계획보다 호기심을 따라가면 뜻밖의 인연이 기다려요.',
    networkerType: '첫 인사 개척자형',
    stats: [
      { label: '친화력', score: 92, comment: '처음 봐도 오래 본 듯' },
      { label: '대화운', score: 58, comment: '화제가 자꾸 튀어요' },
      { label: '인연운', score: 81, comment: '우연한 만남이 대박' },
      { label: '에너지', score: 97, comment: '지치지 않는 폴짝 모드' },
    ],
    luckyTopic: '최근에 처음 해본 것',
    luckyItem: '가벼운 에코백',
    caution: '신나서 말하다 보면 상대가 끼어들 틈이 없어요. 한 박자 쉬고 질문을 건네 봐요.',
    checklist: ['처음 보는 사람에게 먼저 인사하기', '평소 안 가던 쪽 테이블에 합류하기', '오늘 처음 해보는 일 하나 만들기'],
    catAdvice: '절벽 끝이라도 일단 한 발! 착지는 고양이 특기다냥',
    bestMatch: 'world',
  },
  questions: [
    {
      q: '최근에 난생처음 해본 일이 있다면 뭐예요?',
      level: 1,
      followUp: '막상 해보니 생각했던 거랑 어땠어요?',
    },
    {
      q: '발길 닿는 대로 들어갔다가 단골이 된 가게나 골목은 어디예요?',
      level: 1,
      followUp: '거기를 처음 가게 된 계기는 뭐였어요?',
    },
    {
      q: '메뉴판에 처음 보는 메뉴가 있으면 도전파예요, 아는 맛파예요?',
      level: 1,
      followUp: '가장 기억에 남는 도전 메뉴는 뭐였어요?',
    },
    {
      q: '계획 없이 즉흥으로 보낸 날 중 제일 재밌었던 하루를 들려줄래요?',
      level: 1,
      followUp: '그날 가장 뜻밖이었던 장면은 뭐예요?',
    },
    {
      q: '첫 출근이나 첫 모임 날, 아직도 생생하게 떠오르는 장면은 뭐예요?',
      level: 2,
      followUp: '그날의 나에게 한마디 해준다면 뭐라고 할래요?',
    },
    {
      q: '요즘 새로 시작해 보고 싶은데 아직 첫발을 못 뗀 건 뭐예요?',
      level: 2,
      followUp: '첫발을 떼려면 뭐가 있으면 좋을까요?',
    },
    {
      q: '낯선 모임에 처음 갈 때 나만의 적응 요령은 뭐예요?',
      level: 2,
      followUp: '오늘 이 자리에선 그 요령이 얼마나 통했어요?',
    },
    {
      q: '잘 몰라서 오히려 겁 없이 뛰어들었던 경험을 들려줄래요?',
      level: 2,
      followUp: '다 알고 난 지금이라면 뭘 다르게 해볼 것 같아요?',
    },
    {
      q: '처음엔 서툴렀지만 시작하길 정말 잘했다 싶은 일은 뭐예요?',
      level: 3,
      followUp: '그 시작을 가능하게 해준 건 뭐였어요?',
    },
    {
      q: '망설여지는 시작 앞에서 결국 나를 한 발 내딛게 하는 건 뭐예요?',
      level: 3,
      followUp: '그 힘을 가장 크게 느꼈던 순간은 언제였어요?',
    },
  ],
}

export default card
