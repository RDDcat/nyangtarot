import type { TarotCardContent } from '../types'

const card: TarotCardContent = {
  id: 'judgement',
  number: 20,
  roman: 'XX',
  nameKo: '심판',
  nameEn: 'Judgement',
  catName: '나팔수 천사냥',
  keywords: ['깨달음', '재회', '새 출발'],
  theme: {
    title: '다시 한다면',
    subtitle: '지난 시간을 돌아보며 얻은 깨달음과 새로운 다짐',
    emoji: '🎺',
  },
  reading: {
    headline: '반가운 재회와 새로운 부름이 찾아오는 날',
    summary:
      '천사냥의 나팔 소리에 잠자던 인연들이 기지개를 켜요. 지나온 경험이 오늘 대화의 보물이 되고, 뜻밖의 반가운 얼굴을 만날지도 몰라요. 돌아본 만큼 앞으로 나아가는 날이에요.',
    networkerType: '인연 소환 나팔수형',
    stats: [
      { label: '친화력', score: 73, comment: '진솔함이 마음을 열어요' },
      { label: '대화운', score: 84, comment: '경험담이 곧 명강의' },
      { label: '인연운', score: 91, comment: '옛 인연이 다시 울려요' },
      { label: '에너지', score: 66, comment: '차분하게 깨어나는 중' },
    ],
    luckyTopic: '다시 해보고 싶은 경험',
    luckyItem: '손때 묻은 수첩',
    caution: "지난 이야기가 길어지면 '라떼'가 돼요. 회고는 짧게, 깨달음은 굵게!",
    checklist: [
      '자기소개를 평소와 다른 버전으로 해보기',
      '최근에 배운 점 하나를 대화에서 나누기',
      '오늘 대화에서 얻은 깨달음 한 줄 메모하기',
    ],
    catAdvice: '상자에서 쏙 나온 고양이처럼, 오늘은 언제든 새로 시작해도 된다냥',
    bestMatch: 'chariot',
  },
  questions: [
    { q: "올해 한 일 중 스스로 '잘했다' 도장을 꽝 찍어주고 싶은 건 뭐예요?", level: 1, followUp: '그 도장 옆에 한마디 적는다면요?' },
    { q: '되감기 버튼을 딱 한 번 쓸 수 있다면, 이번 주 중 어느 순간으로 돌아갈래요?', level: 1, followUp: '돌아가면 뭘 다르게 해볼 거예요?' },
    { q: '첫 직장이나 첫 프로젝트의 첫날, 가장 기억나는 장면은 뭐예요?', level: 1, followUp: '그날의 나에게 팁을 하나 준다면요?' },
    { q: "최근에 '아, 이래서 그랬구나!' 하고 뒤늦게 깨달은 게 있다면요?", level: 1, followUp: '무엇 덕분에 깨닫게 됐어요?' },
    { q: '다시 한다면 완전히 다르게 해보고 싶은 프로젝트나 일이 있다면요?', level: 2, followUp: '무엇을 가장 먼저 바꿀 것 같아요?' },
    { q: '한때 열심히 하다 멈춘 취미 중에 다시 해보고 싶은 건 뭐예요?', level: 2, followUp: '다시 한다면 이번엔 어떻게 즐기고 싶어요?' },
    { q: '지난 1년을 영화로 만든다면 제목과 명장면은 뭘까요?', level: 2, followUp: '관객 한 줄 평을 남긴다면 뭐라고 쓸까요?' },
    { q: '그땐 귀찮았는데 지나고 보니 고마운 경험이나 잔소리가 있다면요?', level: 2, followUp: '그 덕분에 지금 잘 써먹고 있는 건 뭐예요?' },
    { q: '일이나 배움에서 나를 한 뼘 자라게 한 순간은 언제였어요?', level: 3, followUp: '그 뒤로 달라진 나만의 습관은 뭐예요?' },
    { q: '1년 전의 나에게 딱 한 문장만 보낼 수 있다면 뭐라고 쓸 거예요?', level: 3, followUp: '그럼 1년 뒤의 나에게는 뭐라고 쓸래요?' },
  ],
}

export default card
