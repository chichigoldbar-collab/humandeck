export type EatTrait =
  | "impulsive"
  | "patient"
  | "random"
  | "logical"
  | "balanced"
  | "social"
  | "leader"
  | "obsessive"
  | "lazy"
  | "direct";

export type EatAnswerMap = Record<string, string>;

export type EatOption = {
  id: string;
  text: string;
  scores: Partial<Record<EatTrait, number>>;
};

export type EatQuestion = {
  id: string;
  text: string;
  options: EatOption[];
};

export type EatCharacter = {
  type: EatTrait;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  label: string;
  headline: string;
  cardSummary: string;
  shortComment: string;
  summaryBody: string;
  reasonBullets: string[];
  dailyBullets: string[];
  advice: string;
};

type ScoreTotals = Record<EatTrait, number>;

type SharedResultKeys = {
  mainTrait: EatTrait;
  subTrait: EatTrait;
};

const percentMap: Record<number, number> = {
  0: 18,
  1: 34,
  2: 49,
  3: 63,
  4: 77,
  5: 88,
  6: 94,
};

export const eatQuestions: EatQuestion[] = [
  {
    id: "eq1",
    text: "라면이 나오자마자 나는?",
    options: [
      { id: "eq1a", text: "일단 한 입부터 바로 간다", scores: { impulsive: 2, direct: 1 } },
      { id: "eq1b", text: "후후 불고 가장 맛있을 때를 기다린다", scores: { patient: 2 } },
      { id: "eq1c", text: "사진 각도부터 보고 젓가락을 든다", scores: { social: 2, obsessive: 1 } },
    ],
  },
  {
    id: "eq2",
    text: "배달 앱에서 메뉴를 고를 때 나는?",
    options: [
      { id: "eq2a", text: "할인 뜬 거 보고 바로 정한다", scores: { impulsive: 2, lazy: 1 } },
      { id: "eq2b", text: "리뷰, 가격, 양까지 비교한다", scores: { logical: 2, obsessive: 1 } },
      { id: "eq2c", text: "사람들 반응 좋은 걸 무난하게 고른다", scores: { balanced: 2, social: 1 } },
    ],
  },
  {
    id: "eq3",
    text: "뷔페에 가면 첫 움직임은?",
    options: [
      { id: "eq3a", text: "먹고 싶은 것부터 닥치는 대로 담는다", scores: { random: 2, impulsive: 1 } },
      { id: "eq3b", text: "동선 계산해서 효율 좋게 돈다", scores: { logical: 2, leader: 1 } },
      { id: "eq3c", text: "일단 한 바퀴 다 보고 시작한다", scores: { patient: 2, balanced: 1 } },
    ],
  },
  {
    id: "eq4",
    text: "친구들과 메뉴를 맞춰야 할 때 나는?",
    options: [
      { id: "eq4a", text: "분위기 보면서 다수 의견을 따른다", scores: { social: 2, balanced: 1 } },
      { id: "eq4b", text: "내가 먹고 싶은 걸 먼저 말한다", scores: { leader: 2, direct: 1 } },
      { id: "eq4c", text: "고르기 귀찮아서 아무거나 괜찮다", scores: { lazy: 2, patient: 1 } },
    ],
  },
  {
    id: "eq5",
    text: "음식이 정말 맛있으면 나는?",
    options: [
      { id: "eq5a", text: "같은 메뉴를 한동안 계속 먹는다", scores: { obsessive: 2, patient: 1 } },
      { id: "eq5b", text: "주변 사람한테 바로 추천한다", scores: { social: 2, leader: 1 } },
      { id: "eq5c", text: "좋긴 한데 다음엔 또 다른 걸 찾는다", scores: { random: 2, balanced: 1 } },
    ],
  },
  {
    id: "eq6",
    text: "먹는 속도는 보통 어떤 편이야?",
    options: [
      { id: "eq6a", text: "빠르게 끝내고 다음 걸 본다", scores: { direct: 2, impulsive: 1 } },
      { id: "eq6b", text: "천천히 먹으면서 흐름을 즐긴다", scores: { patient: 2, balanced: 1 } },
      { id: "eq6c", text: "먹다 쉬다 폰 보다가 또 먹는다", scores: { lazy: 2, random: 1 } },
    ],
  },
  {
    id: "eq7",
    text: "새로 나온 디저트를 보면 나는?",
    options: [
      { id: "eq7a", text: "궁금해서 일단 먹어본다", scores: { random: 2, impulsive: 1 } },
      { id: "eq7b", text: "후기 먼저 보고 실패 확률을 줄인다", scores: { logical: 2, patient: 1 } },
      { id: "eq7c", text: "원래 먹던 걸 고른다", scores: { balanced: 2, obsessive: 1 } },
    ],
  },
  {
    id: "eq8",
    text: "치킨을 시킬 때 가장 중요한 건?",
    options: [
      { id: "eq8a", text: "먹고 싶은 맛이냐", scores: { direct: 2, leader: 1 } },
      { id: "eq8b", text: "가성비와 양이냐", scores: { logical: 2, balanced: 1 } },
      { id: "eq8c", text: "지금 귀찮지 않게 빨리 오느냐", scores: { lazy: 2, impulsive: 1 } },
    ],
  },
  {
    id: "eq9",
    text: "먹을 때 제일 자주 듣는 말은?",
    options: [
      { id: "eq9a", text: "너 진짜 빨리 먹는다", scores: { direct: 2, impulsive: 1 } },
      { id: "eq9b", text: "너 왜 이렇게 깐깐하게 고르냐", scores: { obsessive: 2, logical: 1 } },
      { id: "eq9c", text: "너 은근 사람들 취향 잘 맞춘다", scores: { social: 2, balanced: 1 } },
    ],
  },
  {
    id: "eq10",
    text: "혼밥할 때 가장 가까운 모습은?",
    options: [
      { id: "eq10a", text: "먹고 싶은 게 생기면 바로 나간다", scores: { impulsive: 2, leader: 1 } },
      { id: "eq10b", text: "집에 있는 걸로 적당히 해결한다", scores: { lazy: 2, balanced: 1 } },
      { id: "eq10c", text: "오늘 먹을 걸 미리 정해둔 편이다", scores: { obsessive: 2, patient: 1 } },
    ],
  },
];

export const eatCharacters: Record<EatTrait, EatCharacter> = {
  impulsive: {
    type: "impulsive",
    name: "충동형 하이에나",
    slug: "hyena",
    emblem: "🦴",
    imagePath: "/assets/eattype-hyena.png",
    accent: "eattype-impulsive",
    label: "충동형",
    headline: "보이면 바로 먹는 타입",
    cardSummary: "참고 고르기보다 눈앞의 끌림에 먼저 반응하는 먹는 습관입니다.",
    shortComment: "너 인생도 일단 질러놓고 생각하는 편일 가능성이 큽니다.",
    summaryBody: "당신은 먹는 순간에도 계산보다 끌림이 먼저 움직이는 편입니다. 배고픔, 할인, 지금 땡기는 메뉴가 생각보다 큰 결정권을 갖고 있습니다.",
    reasonBullets: [
      "당장 먹고 싶은 것에 빠르게 반응하는 선택이 많았습니다.",
      "조금 더 기다리거나 비교하는 흐름보다 지금 끌리는 쪽을 택하는 경향이 강했습니다.",
    ],
    dailyBullets: [
      "배달 앱을 열고 몇 분 안에 결제까지 끝낼 수 있어요.",
      "한정 메뉴나 할인 문구에 꽤 약할 수 있어요.",
      "먹고 나서도 후회보다 '일단 맛있었음'이 먼저 남습니다.",
    ],
    advice: "배고플 때 결정하지 않는 것만으로도 선택이 꽤 달라질 수 있습니다.",
  },
  patient: {
    type: "patient",
    name: "인내형 거북이",
    slug: "turtle",
    emblem: "🐢",
    imagePath: "/assets/eattype-turtle.png",
    accent: "eattype-patient",
    label: "인내형",
    headline: "맛의 타이밍을 기다리는 타입",
    cardSummary: "급하게 먹기보다 가장 괜찮은 순간을 기다리는 편입니다.",
    shortComment: "먹는 것도 삶도 일단 한 템포 쉬고 보는 사람에 가깝습니다.",
    summaryBody: "당신은 서두르기보다 적당한 타이밍을 보는 편입니다. 먹는 속도와 선택 방식 모두 차분해서 쉽게 흔들리지 않는 안정감이 있습니다.",
    reasonBullets: [
      "충동적으로 고르기보다 상황과 타이밍을 보는 선택이 많았습니다.",
      "먹는 속도와 선택 모두 한 번 더 보고 정하는 경향이 보였습니다.",
    ],
    dailyBullets: [
      "뜨거운 음식도 급하게 덤비지 않고 적당할 때를 봅니다.",
      "새 메뉴도 바로 뛰어들기보다 조금 지켜보는 편입니다.",
      "식사 템포가 안정적이라 남이 보기엔 느긋해 보일 수 있어요.",
    ],
    advice: "신중함은 강점이지만, 가끔은 바로 끌리는 선택도 해봐야 즐거움이 커집니다.",
  },
  random: {
    type: "random",
    name: "즉흥형 원숭이",
    slug: "monkey",
    emblem: "🐒",
    imagePath: "/assets/eattype-monkey.png",
    accent: "eattype-random",
    label: "즉흥형",
    headline: "그날 끌리는 대로 먹는 타입",
    cardSummary: "일관성보다 재미와 새로운 기분에 더 쉽게 흔들립니다.",
    shortComment: "어제의 나와 오늘의 내가 먹는 방식부터 다를 수 있습니다.",
    summaryBody: "당신은 익숙함보다 그날의 기분과 재미에 더 반응합니다. 그래서 먹는 취향이 넓고 재밌지만, 동시에 한결같지는 않을 수 있습니다.",
    reasonBullets: [
      "새로운 메뉴나 예상 밖의 선택에 긍정적으로 반응했습니다.",
      "계속 같은 패턴보다 바뀌는 재미를 선호하는 경향이 보였습니다.",
    ],
    dailyBullets: [
      "맛집 리스트보다 '오늘 뭐 땡기지?'가 더 중요할 수 있어요.",
      "새로운 디저트나 한정 메뉴에 쉽게 꽂힐 수 있어요.",
      "먹는 취향이 자주 바뀌어서 주변이 종잡기 어렵다고 느낄 수 있습니다.",
    ],
    advice: "즉흥성을 살리되, 기본 선택지 하나쯤은 정해두면 만족도가 더 안정적입니다.",
  },
  logical: {
    type: "logical",
    name: "계산형 개미",
    slug: "ant",
    emblem: "🐜",
    imagePath: "/assets/eattype-ant.png",
    accent: "eattype-logical",
    label: "계산형",
    headline: "먹는 순간에도 효율을 보는 타입",
    cardSummary: "가격, 양, 만족도까지 생각보다 꼼꼼하게 계산하는 편입니다.",
    shortComment: "밥 한 끼도 데이터처럼 고르는 사람일 가능성이 큽니다.",
    summaryBody: "당신은 먹는 선택에도 나름의 기준과 효율이 있습니다. 감정만으로 고르기보다 실패 확률을 줄이는 쪽에 더 강합니다.",
    reasonBullets: [
      "후기, 양, 가격 같은 기준을 따지는 선택이 많이 나왔습니다.",
      "즉흥보다 손해 없는 선택을 선호하는 경향이 드러났습니다.",
    ],
    dailyBullets: [
      "배달 앱에서도 메뉴보다 리뷰를 먼저 볼 수 있어요.",
      "가성비와 만족도를 함께 챙기는 편입니다.",
      "남들이 보기엔 조금 깐깐해 보여도 실패는 덜 합니다.",
    ],
    advice: "가끔은 정답 같은 메뉴보다 그냥 먹고 싶은 메뉴를 고르는 연습도 필요합니다.",
  },
  balanced: {
    type: "balanced",
    name: "안정형 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/eattype-bear.png",
    accent: "eattype-balanced",
    label: "안정형",
    headline: "튀지 않지만 만족도가 높은 타입",
    cardSummary: "극단적으로 치우치지 않고 무난하게 잘 고르는 편입니다.",
    shortComment: "먹는 방식에서도 결국 평균 이상 안정감을 뽑아내는 사람입니다.",
    summaryBody: "당신은 무리한 선택보다 무난하지만 만족도 높은 쪽을 잘 압니다. 그래서 큰 실패는 적고, 꾸준히 괜찮은 선택을 만드는 타입입니다.",
    reasonBullets: [
      "과한 충동이나 과한 계산보다 적당한 균형을 택하는 선택이 많았습니다.",
      "혼자만의 취향보다 전체 만족도까지 함께 보는 경향이 보였습니다.",
    ],
    dailyBullets: [
      "처음 가는 곳에서도 평균 이상은 뽑는 편이에요.",
      "단체 식사에서 무난하게 분위기를 맞출 수 있어요.",
      "식사 때문에 크게 스트레스 받는 일이 적습니다.",
    ],
    advice: "안정감은 강점이지만, 가끔은 예상 밖 취향을 시험해보면 재미가 커집니다.",
  },
  social: {
    type: "social",
    name: "눈치형 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/eattype-fox.png",
    accent: "eattype-social",
    label: "눈치형",
    headline: "먹을 때도 분위기를 읽는 타입",
    cardSummary: "내 취향만큼이나 함께 먹는 사람의 반응과 분위기를 중요하게 봅니다.",
    shortComment: "입맛보다 분위기를 먼저 챙기는 순간이 꽤 많은 사람입니다.",
    summaryBody: "당신은 혼자만 만족하는 식사보다 함께 괜찮은 식사를 더 선호합니다. 그래서 메뉴를 고를 때도 분위기와 반응을 자연스럽게 계산합니다.",
    reasonBullets: [
      "사람들 반응과 전체 분위기를 고려하는 선택이 많았습니다.",
      "추천하거나 같이 맞추는 흐름에서 강점이 드러났습니다.",
    ],
    dailyBullets: [
      "단체 메뉴 정할 때 의외로 중재를 잘하는 편이에요.",
      "혼밥보다 같이 먹을 때 만족도가 더 커질 수 있어요.",
      "맛보다 분위기 좋은 식사 경험을 더 오래 기억할 수 있습니다.",
    ],
    advice: "분위기를 챙기는 건 강점이지만, 가끔은 내 입맛을 먼저 말해도 괜찮습니다.",
  },
  leader: {
    type: "leader",
    name: "주도형 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/eattype-wolf.png",
    accent: "eattype-leader",
    label: "주도형",
    headline: "메뉴판 앞에서도 리드하는 타입",
    cardSummary: "고를 때 망설이기보다 방향을 먼저 정하는 힘이 있습니다.",
    shortComment: "먹는 자리에서도 은근히 흐름을 끌고 가는 편입니다.",
    summaryBody: "당신은 '아무거나'보다 분명한 취향과 선택 기준이 있습니다. 그래서 메뉴판 앞에서도 결정을 미루기보다 흐름을 먼저 잡는 쪽에 가깝습니다.",
    reasonBullets: [
      "원하는 메뉴를 먼저 말하고 흐름을 만드는 선택이 많았습니다.",
      "고르기 어려운 상황에서 방향을 정하는 편에 가까웠습니다.",
    ],
    dailyBullets: [
      "단체 식사에서 메뉴 정리가 빠른 편입니다.",
      "먹고 싶은 게 있으면 비교적 분명하게 말합니다.",
      "우유부단한 사람과 함께 있을 때 더 리더십이 드러납니다.",
    ],
    advice: "결정력은 강점이지만, 가끔은 남의 입맛도 먼저 물어보면 만족도가 더 높아집니다.",
  },
  obsessive: {
    type: "obsessive",
    name: "집착형 판다",
    slug: "panda",
    emblem: "🐼",
    imagePath: "/assets/eattype-panda.png",
    accent: "eattype-obsessive",
    label: "집착형",
    headline: "꽂히면 그것만 파는 타입",
    cardSummary: "한 번 마음에 들면 오래, 깊게, 반복해서 즐기는 편입니다.",
    shortComment: "좋아하는 메뉴 하나 생기면 거의 세계관까지 만들어버릴 수 있습니다.",
    summaryBody: "당신은 '괜찮다'보다 '이거다'가 생기면 강해지는 타입입니다. 먹는 취향도 반복과 애정이 깊어서 꽂히면 오래 갑니다.",
    reasonBullets: [
      "마음에 드는 메뉴를 오래 반복하는 선택이 많이 나왔습니다.",
      "익숙한 만족을 다시 찾는 흐름이 강하게 보였습니다.",
    ],
    dailyBullets: [
      "좋아하는 가게를 꾸준히 반복해서 갈 수 있어요.",
      "한 메뉴에 꽂히면 한동안 그것만 찾을 수 있어요.",
      "입맛 취향이 은근 선명해서 바꾸기 어렵기도 합니다.",
    ],
    advice: "확실한 취향은 강점이지만, 가끔은 새로운 메뉴 하나쯤 섞어줘야 폭이 넓어집니다.",
  },
  lazy: {
    type: "lazy",
    name: "미루기형 나무늘보",
    slug: "sloth",
    emblem: "🦥",
    imagePath: "/assets/eattype-sloth.png",
    accent: "eattype-lazy",
    label: "미루기형",
    headline: "귀찮음이 선택을 좌우하는 타입",
    cardSummary: "먹고 싶은 것보다 지금 덜 귀찮은 쪽이 더 크게 작용할 수 있습니다.",
    shortComment: "입맛보다 귀찮음이 메뉴판에서 더 큰 권한을 갖고 있을 수 있습니다.",
    summaryBody: "당신은 게으르다기보다, 식사 결정에 에너지를 크게 쓰고 싶지 않은 편입니다. 그래서 편의성과 귀찮지 않음이 생각보다 중요한 기준이 됩니다.",
    reasonBullets: [
      "멀리 생각하기보다 지금 덜 번거로운 쪽을 택하는 선택이 많았습니다.",
      "고르기 귀찮아서 무난한 선택으로 가는 경향이 드러났습니다.",
    ],
    dailyBullets: [
      "배달이 빠른지, 집에 있는 걸로 해결되는지가 중요할 수 있어요.",
      "메뉴 고르는 시간이 길어지면 더 귀찮아질 수 있어요.",
      "한 번 정해둔 루틴 식단이 은근 잘 맞을 수 있습니다.",
    ],
    advice: "귀찮음을 줄이는 기본 메뉴 3개만 정해두면 만족도와 효율이 같이 올라갑니다.",
  },
  direct: {
    type: "direct",
    name: "직진형 호랑이",
    slug: "tiger",
    emblem: "🐯",
    imagePath: "/assets/eattype-tiger.png",
    accent: "eattype-direct",
    label: "직진형",
    headline: "먹고 싶은 게 생기면 바로 가는 타입",
    cardSummary: "우회 없이 원하는 맛으로 직진하는 취향이 강합니다.",
    shortComment: "고민보다 선택이 빠르고, 선택보다 실행이 더 빠른 사람입니다.",
    summaryBody: "당신은 애매하게 맞추기보다 지금 원하는 맛을 분명하게 고르는 편입니다. 먹는 속도와 선택 방식 모두 직선적인 힘이 있습니다.",
    reasonBullets: [
      "먹고 싶은 메뉴를 빠르게 정하는 선택이 많았습니다.",
      "우회보다 직선적인 결정이 더 편한 흐름이 드러났습니다.",
    ],
    dailyBullets: [
      "메뉴판을 오래 안 봐도 결정을 빨리 내릴 수 있어요.",
      "먹고 싶은 게 생기면 비교적 바로 실행하는 편입니다.",
      "함께 먹을 땐 너무 빠르게 정해서 남이 놀랄 수도 있어요.",
    ],
    advice: "빠른 선택은 장점이지만, 가끔은 한 번만 더 둘러보면 더 좋은 발견이 생깁니다.",
  },
};

const defaultScores: ScoreTotals = {
  impulsive: 0,
  patient: 0,
  random: 0,
  logical: 0,
  balanced: 0,
  social: 0,
  leader: 0,
  obsessive: 0,
  lazy: 0,
  direct: 0,
};

export function calculateEatResult(answers: EatAnswerMap) {
  const scores = { ...defaultScores };

  for (const question of eatQuestions) {
    const selectedId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedId);

    if (!selectedOption) continue;

    for (const [type, value] of Object.entries(selectedOption.scores) as [EatTrait, number][]) {
      scores[type] += value ?? 0;
    }
  }

  return buildEatResultFromScores(scores);
}

export function buildEatSharedResult(keys: SharedResultKeys) {
  const mainCharacter = eatCharacters[keys.mainTrait];
  const subCharacter = eatCharacters[keys.subTrait];

  return {
    scores: {
      ...defaultScores,
      [keys.mainTrait]: 6,
      [keys.subTrait]: 4,
    },
    mainTrait: keys.mainTrait,
    subTrait: keys.subTrait,
    mainCharacter,
    subCharacter,
    mainPercent: toEatDisplayPercent(6),
    subPercent: toEatDisplayPercent(4),
  };
}

function buildEatResultFromScores(scores: ScoreTotals) {
  const sorted = (Object.entries(scores) as [EatTrait, number][])
    .sort((a, b) => b[1] - a[1]);
  const [mainTrait, mainScore] = sorted[0];
  const [subTrait, subScore] = sorted[1];

  return {
    scores,
    mainTrait,
    subTrait,
    mainCharacter: eatCharacters[mainTrait],
    subCharacter: eatCharacters[subTrait],
    mainPercent: toEatDisplayPercent(mainScore),
    subPercent: toEatDisplayPercent(subScore),
  };
}

export function toEatDisplayPercent(score: number) {
  return percentMap[score] ?? 58;
}
