import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'death',
  number: 13,
  roman: 'XIII',
  nameKo: '죽음',
  nameEn: 'Death',
  catName: '새 챕터 양말냥',
  keywords: ['변화', '새 챕터', '정리'],
  theme: {
    title: '끝과 새 챕터',
    subtitle: '떠나보낸 습관, 바뀐 일상, 새로 열린 페이지 이야기',
    emoji: '🦋',
  },
  reading: {
    headline: '묵은 껍질을 벗고 새 인연을 맞는 날',
    summary:
      '이 카드는 무서운 카드가 아니라 한 챕터를 닫고 새 장을 여는 변화의 카드예요. 익숙한 자기소개 대신 요즘의 나로 인사해 보세요. 새벽처럼 산뜻한 인연이 찾아와요.',
    networkerType: '새 챕터 리부트형',
    stats: [
      { label: '친화력', score: 63, comment: '처음엔 살짝 낯가림' },
      { label: '대화운', score: 76, comment: '변화 이야기에 강세' },
      { label: '인연운', score: 91, comment: '새로운 인연 대방출' },
      { label: '에너지', score: 70, comment: '해 뜨듯 서서히 상승' },
    ],
    luckyTopic: '요즘 새로 바꾼 습관',
    luckyItem: '막 개시한 새 노트',
    caution: '예전 이야기에만 머물지 말고, 지금의 나를 소개하는 데 집중해 보세요.',
    checklist: [
      '자기소개를 "요즘 저는~"으로 시작하기',
      '평소 안 가던 테이블에 합류해 보기',
      '오늘 새로 알게 된 것 하나 메모하기',
    ],
    catAdvice: '털갈이는 끝이 아니라 새 털의 시작이다냥.',
    bestMatch: 'sun',
  },
  questions: [
    {
      q: '최근에 과감하게 떠나보낸 소소한 습관이 있다면 뭐예요?',
      level: 1,
      followUp: '그만두고 나서 가장 먼저 달라진 건 뭐예요?',
    },
    {
      q: '플레이리스트나 음료처럼, 계절이 바뀌면 제일 먼저 바꾸는 건 뭐예요?',
      level: 1,
      followUp: '다가오는 계절엔 뭘 새로 바꿔 볼 거예요?',
    },
    {
      q: '한때 매일 썼지만 이제는 안 쓰는 앱이나 물건은 뭐예요?',
      level: 1,
      followUp: '그 자리를 대신하게 된 건 뭐예요?',
    },
    {
      q: '올해 바꾼 것 중 "진작 바꿀 걸!" 싶은 건 뭐예요?',
      level: 1,
      followUp: '왜 그동안은 못 바꾸고 있었을까요?',
    },
    {
      q: '이사나 팀 이동처럼 환경이 바뀔 때, 나만의 적응 비법이 있다면요?',
      level: 2,
      followUp: '적응이 끝났다고 느끼는 신호는 뭐예요?',
    },
    {
      q: '지금의 나를 한 권의 책이라고 하면, 몇 번째 챕터이고 제목은 뭘까요?',
      level: 2,
      followUp: '다음 챕터 제목은 뭐가 되면 좋겠어요?',
    },
    {
      q: '물건이나 일정을 과감하게 정리했더니 오히려 홀가분해진 경험이 있다면요?',
      level: 2,
      followUp: '다음으로 정리하고 싶은 건 뭐예요?',
    },
    {
      q: '예전엔 당연했지만 지금은 졸업한 나의 일하는 방식은 뭐예요?',
      level: 2,
      followUp: '그 방식을 졸업하게 된 계기는 뭐였어요?',
    },
    {
      q: '마무리를 잘 지었다고 느끼는 프로젝트나 시기가 있다면, 어떤 점이 좋았어요?',
      level: 3,
      followUp: '좋은 마무리를 위해 내가 꼭 챙기는 건요?',
    },
    {
      q: '새 챕터를 위해 요즘 일부러 비워내고 있는 습관이나 일은 뭐예요?',
      level: 3,
      followUp: '비워진 자리를 무엇으로 채우고 싶어요?',
    },
  ],
}

export default card
