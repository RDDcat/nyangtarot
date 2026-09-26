import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'hierophant',
  number: 5,
  roman: 'V',
  nameKo: '교황',
  nameEn: 'The Hierophant',
  catName: '오드아이 스승냥',
  keywords: ['배움', '멘토', '가치관'],
  theme: {
    title: '나를 만든 배움',
    subtitle: '배움의 순간, 고마운 멘토, 마음에 새긴 조언',
    emoji: '📜',
  },
  reading: {
    headline: '오늘 들은 한마디가 내일의 지도가 돼요',
    summary:
      '교황 카드는 가르침과 전통, 믿고 따를 수 있는 지혜를 뜻해요. 오늘은 배우는 자리에도, 가르치는 자리에도 복이 있어요. 오드아이 두 눈처럼 배움과 나눔을 함께 챙기면 좋은 인연이 열쇠처럼 맞물려요.',
    networkerType: '지혜 나눔 멘토형',
    stats: [
      { label: '친화력', score: 79, comment: '믿음직한 첫인상' },
      { label: '대화운', score: 70, comment: '경청할수록 운이 올라요' },
      { label: '인연운', score: 93, comment: '귀인을 만날 기운' },
      { label: '에너지', score: 61, comment: '차분하고 은은하게' },
    ],
    luckyTopic: '인생 책과 인생 조언',
    luckyItem: '밑줄 그은 책 한 권',
    caution: '좋은 조언도 청할 때 빛나요. 가르치기 전에 상대의 생각부터 물어봐요.',
    checklist: ['오늘 누군가에게 배운 것 하나 메모하기', '내가 아는 꿀팁 하나 나눠주기', '인상 깊은 사람에게 추천 책 묻기'],
    catAdvice: '열쇠 하나는 배움, 또 하나는 나눔이다냥',
    bestMatch: 'hanged-man',
  },
  questions: [
    {
      q: '최근에 누군가에게 배운 소소한 꿀팁 하나를 알려줄래요?',
      level: 1,
      followUp: '그 꿀팁을 누구에게 제일 먼저 전하고 싶어요?',
    },
    {
      q: '학창 시절 좋아했던 과목이나 수업 하나를 꼽는다면요?',
      level: 1,
      followUp: '그 수업의 어떤 점이 좋았어요?',
    },
    {
      q: '유튜브, 책, 강의, 사람 중 요즘 주로 어디서 배우는 편이에요?',
      level: 1,
      followUp: '최근에 거기서 건진 최고의 배움은요?',
    },
    {
      q: '시간만 있다면 당장 배워보고 싶은 것 하나를 고른다면 뭐예요?',
      level: 1,
      followUp: '누구에게 배우면 제일 좋을 것 같아요?',
    },
    {
      q: '살면서 들은 조언 중 아직도 자주 꺼내 쓰는 한마디는 뭐예요?',
      level: 2,
      followUp: '그 말은 어떤 상황에서 듣게 됐어요?',
    },
    {
      q: '선배든 작가든 유튜버든, 내가 멘토라고 부르고 싶은 사람은 누구예요?',
      level: 2,
      followUp: '그분에게 배운 것 중 지금도 써먹는 건요?',
    },
    {
      q: '혼자 깨우치느라 오래 걸렸던 것 중 남에게 미리 알려주고 싶은 건 뭐예요?',
      level: 2,
      followUp: '그걸 더 일찍 알았다면 뭐가 달라졌을까요?',
    },
    {
      q: '누군가를 가르치다가 오히려 내가 더 많이 배웠던 경험을 들려줄래요?',
      level: 2,
      followUp: '가르치면서 새로 깨달은 건 뭐였어요?',
    },
    {
      q: '지금의 나를 만든 책, 사람, 경험 중 하나를 꼽는다면 뭐예요?',
      level: 3,
      followUp: '그게 없었다면 지금 나는 어땠을까요?',
    },
    {
      q: '일이든 일상이든 요즘 내가 가장 지키고 싶은 원칙 하나는 뭐예요?',
      level: 3,
      followUp: '그 원칙은 어떤 계기로 생겼어요?',
    },
  ],
}

export default card
