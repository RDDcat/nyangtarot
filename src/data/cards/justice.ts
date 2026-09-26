import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'justice',
  number: 11,
  roman: 'XI',
  nameKo: '정의',
  nameEn: 'Justice',
  catName: '저울지기 젖소냥',
  keywords: ['균형', '공정', '소신'],
  theme: {
    title: '나만의 기준과 소신',
    subtitle: '절대 양보 못 하는 원칙부터 사소한 나만의 룰까지',
    emoji: '⚖️',
  },
  reading: {
    headline: '균형 잡힌 한마디가 신뢰를 부르는 날',
    summary:
      '젖소냥의 저울이 딱 수평을 가리켜요. 말하기와 듣기의 균형이 맞을수록 인연의 무게도 묵직해져요. 오늘은 솔직하고 공정한 태도가 최고의 명함이에요.',
    networkerType: '공정한 저울 중재자형',
    stats: [
      { label: '친화력', score: 72, comment: '듣기 반 말하기 반' },
      { label: '대화운', score: 80, comment: '논리 있는 대화에 강세' },
      { label: '인연운', score: 85, comment: '믿음 가는 인연이 쑥' },
      { label: '에너지', score: 58, comment: '차분하게 아껴 쓰기' },
    ],
    luckyTopic: '각자의 사소한 생활 규칙',
    luckyItem: '반듯하게 정리된 명함',
    caution: '옳고 그름을 가리기보다, 서로 다른 기준을 궁금해해 주세요.',
    checklist: [
      '내가 말한 만큼 상대 이야기 들어주기',
      '다른 의견에 "왜 그렇게 생각해요?" 묻기',
      '처음 만난 사람 이름 정확히 기억하기',
    ],
    catAdvice: '생선도 털실도 못 고르겠으면 저울에 반반 올리면 된다냥.',
    bestMatch: 'hierophant',
  },
  questions: [
    {
      q: '부먹·찍먹처럼 절대 양보 못 하는 나만의 음식 원칙은 뭐예요?',
      level: 1,
      followUp: '누가 그 원칙을 깨면 어떤 기분이 들어요?',
    },
    {
      q: '책상이나 컴퓨터 바탕화면, 나는 어떤 규칙으로 정리하는 편이에요?',
      level: 1,
      followUp: '그 규칙은 언제부터, 왜 생겼어요?',
    },
    {
      q: '약속 시간, 나는 "칼같이 정각"파예요 "5분 여유"파예요? 이유는요?',
      level: 1,
      followUp: '상대가 늦을 때, 나만의 기다림 한계선은 몇 분이에요?',
    },
    {
      q: '두 가지 선택지 사이에서 고민될 때, 나만의 결정 방법은 뭐예요?',
      level: 1,
      followUp: '그 방법으로 고른 것 중 제일 잘한 선택은 뭐예요?',
    },
    {
      q: '회의나 모임에서 "이건 꼭 지켜줬으면" 싶은 매너 하나는 뭐예요?',
      level: 2,
      followUp: '반대로 나도 모르게 자꾸 어기게 되는 매너는요?',
    },
    {
      q: '일할 때 속도와 완성도 중 하나만 고른다면, 어느 쪽을 왜 골라요?',
      level: 2,
      followUp: '그 선택 덕분에 잘 풀렸던 일을 들려줄래요?',
    },
    {
      q: '"이 사람 참 공정하다"라고 느꼈던 사람은 어떤 행동을 했어요?',
      level: 2,
      followUp: '그중 나도 따라 해보고 싶은 건 뭐예요?',
    },
    {
      q: '팀에서 의견이 팽팽하게 갈릴 때, 나는 어떻게 균형을 맞추는 편이에요?',
      level: 2,
      followUp: '그 방법이 잘 통했던 장면을 하나 들려줄래요?',
    },
    {
      q: '누군가 나를 "이것만큼은 확실한 사람"이라고 소개한다면, 뭐라고 해주면 좋겠어요?',
      level: 3,
      followUp: '그 모습을 지키려고 평소에 챙기는 건 뭐예요?',
    },
    {
      q: '"이것만큼은 손해를 봐도 지킨다" 싶은 일의 원칙이 있다면 뭐예요?',
      level: 3,
      followUp: '그 원칙을 지켜서 뿌듯했던 순간은 언제였어요?',
    },
  ],
}

export default card
