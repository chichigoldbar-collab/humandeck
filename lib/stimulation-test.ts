export type StimulationType =
  | "instantReward"
  | "noveltySeeking"
  | "impulsivity"
  | "attentionScatter"
  | "stimulationTolerance"
  | "rewardDependence";

export type StimulationAnswerMap = Record<string, string>;

export type StimulationOption = {
  id: string;
  text: string;
  scores: Partial<Record<StimulationType, number>>;
};

export type StimulationQuestion = {
  id: string;
  type: StimulationType;
  text: string;
  options: StimulationOption[];
};

export type StimulationCharacter = {
  type: StimulationType;
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

type ScoreTotals = Record<StimulationType, number>;

type SharedResultKeys = {
  mainType: StimulationType;
  subType: StimulationType;
};

const percentMap: Record<number, number> = {
  0: 18,
  1: 36,
  2: 58,
  3: 79,
  4: 92,
};

export const stimulationQuestions: StimulationQuestion[] = [
  {
    id: "sq1",
    type: "instantReward",
    text: "해야 할 일이 남아 있는데 재밌는 영상이 눈에 들어오면 나는?",
    options: [
      { id: "sq1a", text: "딱 하나만 보고 하자고 생각한다", scores: { instantReward: 2 } },
      { id: "sq1b", text: "해야 할 일 먼저 끝내려고 한다", scores: { instantReward: 0 } },
      {
        id: "sq1c",
        text: "둘 다 신경 쓰이다가 결국 영상부터 본다",
        scores: { instantReward: 2, attentionScatter: 1 },
      },
    ],
  },
  {
    id: "sq2",
    type: "noveltySeeking",
    text: "드라마, 게임, 취미를 즐길 때 나는?",
    options: [
      { id: "sq2a", text: "재밌어도 금방 질리고 다른 걸 찾는다", scores: { noveltySeeking: 2 } },
      { id: "sq2b", text: "하나 마음에 들면 오래 가는 편이다", scores: { noveltySeeking: 0 } },
      {
        id: "sq2c",
        text: "여러 개를 동시에 조금씩 건드린다",
        scores: { noveltySeeking: 1, attentionScatter: 1 },
      },
    ],
  },
  {
    id: "sq3",
    type: "impulsivity",
    text: "쇼핑하다 할인 문구를 보면 나는?",
    options: [
      { id: "sq3a", text: "필요 없어도 지금 사야 할 것 같다", scores: { impulsivity: 2 } },
      { id: "sq3b", text: "일단 장바구니 넣고 생각한다", scores: { impulsivity: 1 } },
      { id: "sq3c", text: "진짜 필요한지 먼저 본다", scores: { impulsivity: 0 } },
    ],
  },
  {
    id: "sq4",
    type: "attentionScatter",
    text: "공부나 일을 하다가 알림이 오면 나는?",
    options: [
      { id: "sq4a", text: "거의 바로 확인한다", scores: { attentionScatter: 2 } },
      { id: "sq4b", text: "잠깐 참고 하던 걸 마무리한다", scores: { attentionScatter: 1 } },
      { id: "sq4c", text: "무음이거나 끝날 때까지 안 본다", scores: { attentionScatter: 0 } },
    ],
  },
  {
    id: "sq5",
    type: "stimulationTolerance",
    text: "예전엔 재밌던 콘텐츠가 요즘 심심하게 느껴질 때 나는?",
    options: [
      { id: "sq5a", text: "더 강하고 빠른 걸 찾는다", scores: { stimulationTolerance: 2 } },
      { id: "sq5b", text: "쉬었다가 다시 본다", scores: { stimulationTolerance: 1 } },
      { id: "sq5c", text: "그냥 지금 흥미가 떨어진 것 같다", scores: { stimulationTolerance: 0 } },
    ],
  },
  {
    id: "sq6",
    type: "rewardDependence",
    text: "열심히 한 일에 반응이 없으면 나는?",
    options: [
      { id: "sq6a", text: "갑자기 의욕이 확 떨어진다", scores: { rewardDependence: 2 } },
      { id: "sq6b", text: "좀 아쉽지만 계속 한다", scores: { rewardDependence: 1 } },
      { id: "sq6c", text: "반응 없어도 내가 의미 있으면 한다", scores: { rewardDependence: 0 } },
    ],
  },
  {
    id: "sq7",
    type: "instantReward",
    text: "장기적으로 좋은 선택과 지금 당장 즐거운 선택 중 하나를 고르면?",
    options: [
      { id: "sq7a", text: "지금 당장 즐거운 쪽이 더 끌린다", scores: { instantReward: 2 } },
      { id: "sq7b", text: "상황 따라 다르다", scores: { instantReward: 1 } },
      { id: "sq7c", text: "미래에 도움이 되는 쪽을 택한다", scores: { instantReward: 0 } },
    ],
  },
  {
    id: "sq8",
    type: "noveltySeeking",
    text: "앱, 서비스, 음식, 콘텐츠에서 새로 나온 게 보이면 나는?",
    options: [
      { id: "sq8a", text: "일단 해보고 싶다", scores: { noveltySeeking: 2 } },
      { id: "sq8b", text: "반응 좀 보고 결정한다", scores: { noveltySeeking: 1 } },
      { id: "sq8c", text: "익숙한 게 더 좋다", scores: { noveltySeeking: 0 } },
    ],
  },
  {
    id: "sq9",
    type: "impulsivity",
    text: "기분이 안 좋을 때 나는?",
    options: [
      { id: "sq9a", text: "뭔가 바로 사거나 먹거나 본다", scores: { impulsivity: 2 } },
      { id: "sq9b", text: "일단 쉬고 나서 판단한다", scores: { impulsivity: 1 } },
      { id: "sq9c", text: "감정이 가라앉을 때까지 결정 안 한다", scores: { impulsivity: 0 } },
    ],
  },
  {
    id: "sq10",
    type: "attentionScatter",
    text: "영상 하나 보려고 앱을 켰다가 딴짓하게 되는 편인가?",
    options: [
      { id: "sq10a", text: "거의 매번 그렇다", scores: { attentionScatter: 2 } },
      { id: "sq10b", text: "가끔 그렇다", scores: { attentionScatter: 1 } },
      { id: "sq10c", text: "목적 없이 오래 보는 편은 아니다", scores: { attentionScatter: 0 } },
    ],
  },
  {
    id: "sq11",
    type: "stimulationTolerance",
    text: "휴식할 때 조용히 쉬는 것보다 나는?",
    options: [
      { id: "sq11a", text: "뭔가 틀어놓거나 계속 자극이 있어야 한다", scores: { stimulationTolerance: 2 } },
      { id: "sq11b", text: "조용한 것도 괜찮지만 심심할 때가 많다", scores: { stimulationTolerance: 1 } },
      { id: "sq11c", text: "조용히 쉬는 것도 잘 한다", scores: { stimulationTolerance: 0 } },
    ],
  },
  {
    id: "sq12",
    type: "rewardDependence",
    text: "운동, 공부, 작업을 꾸준히 하려면 나는?",
    options: [
      { id: "sq12a", text: "눈에 보이는 결과나 칭찬이 있어야 한다", scores: { rewardDependence: 2 } },
      { id: "sq12b", text: "작은 성과라도 보이면 버틴다", scores: { rewardDependence: 1 } },
      { id: "sq12c", text: "보상 없어도 루틴 자체로 유지 가능하다", scores: { rewardDependence: 0 } },
    ],
  },
];

export const stimulationCharacters: Record<StimulationType, StimulationCharacter> = {
  instantReward: {
    type: "instantReward",
    name: "스파크몽키",
    slug: "sparkmonkey",
    emblem: "🐵",
    imagePath: "/assets/sparkmonkey.png",
    accent: "sparkmonkey",
    label: "즉각보상 추구",
    headline: "지금 당장 재밌는 게 중요한 타입",
    cardSummary: "즉각보상 반응이 높은 당신은, 긴 기다림보다 빠른 만족에 더 강하게 끌립니다.",
    shortComment: "참는 능력이 없는 게 아니라, 지금 보상에 너무 민감한 타입일 수 있습니다.",
    summaryBody: "당신은 해야 할 일이 있어도 눈앞의 재미나 편한 선택에 쉽게 반응할 수 있습니다. 의지가 약하다기보다, 뇌가 '지금 보상'에 아주 민감하게 움직이는 편입니다.",
    reasonBullets: [
      "해야 할 일이 남아 있어도 짧은 재미를 먼저 건드리는 경향이 있습니다.",
      "장기적 이득보다 지금 바로 오는 만족이 더 크게 느껴질 수 있습니다.",
    ],
    dailyBullets: [
      "할 일 전에 영상 하나만 보려다가 오래 머무를 수 있어요.",
      "장기 목표보다 지금 편한 선택이 더 크게 느껴질 수 있어요.",
      "꾸준함보다 빠른 보상이 있을 때 훨씬 잘 움직입니다.",
    ],
    advice: "큰 목표보다 즉시 보상 구조를 작게 심어두는 게 훨씬 잘 맞습니다.",
  },
  noveltySeeking: {
    type: "noveltySeeking",
    name: "노바캣",
    slug: "novacat",
    emblem: "🐱",
    imagePath: "/assets/novacat.png",
    accent: "novacat",
    label: "새로움 추구",
    headline: "새로운 자극을 쫓는 타입",
    cardSummary: "새로움 추구 성향이 높은 당신은 익숙함보다 신선함에서 에너지를 얻습니다.",
    shortComment: "잘 꽂히는 만큼 잘 식는 편이라, 늘 새 자극이 필요해질 수 있습니다.",
    summaryBody: "당신은 반복보다 변화에서 더 크게 반응합니다. 문제는 쉽게 흥미가 붙는 만큼, 쉽게 흥미가 식을 수도 있다는 점입니다.",
    reasonBullets: [
      "하던 걸 마무리하기 전에 새로운 걸 시작하고 싶어질 수 있습니다.",
      "익숙한 것보다 낯선 콘텐츠와 취미가 더 강하게 당깁니다.",
    ],
    dailyBullets: [
      "새 앱, 새 취미, 새 콘텐츠에 쉽게 꽂힐 수 있어요.",
      "하나를 오래 유지하기보다 계속 다른 걸 찾을 수 있어요.",
      "흥미는 빠르게 붙지만 유지력은 흔들릴 수 있습니다.",
    ],
    advice: "새로움 자체를 끊기보다, 새로움의 범위를 제한하는 게 더 효과적입니다.",
  },
  impulsivity: {
    type: "impulsivity",
    name: "펀치래빗",
    slug: "punchrabbit",
    emblem: "🐰",
    imagePath: "/assets/punchrabbit.png",
    accent: "punchrabbit",
    label: "충동성",
    headline: "생각보다 손이 먼저 움직이는 타입",
    cardSummary: "충동 반응이 높은 당신은 감정과 순간 분위기에 빠르게 반응합니다.",
    shortComment: "속도는 빠르지만, 그만큼 '왜 샀지?' '왜 눌렀지?'가 따라오기 쉬운 타입입니다.",
    summaryBody: "당신은 결정을 오래 끌기보다 바로 반응하는 편입니다. 속도는 장점이지만, 감정 상태가 판단을 흔드는 순간도 적지 않습니다.",
    reasonBullets: [
      "할인, 한정, 마감 문구에 감정이 먼저 반응할 수 있습니다.",
      "기분이 흔들릴 때 소비나 행동으로 바로 튀는 편일 수 있습니다.",
    ],
    dailyBullets: [
      "할인, 한정, 마감 문구에 약할 수 있어요.",
      "기분 안 좋을 때 소비나 먹는 걸로 푸는 편일 수 있어요.",
      "하고 나서 '왜 그랬지?' 하는 일이 생길 수 있어요.",
    ],
    advice: "결제나 선택 전 10분 유예만 둬도 결과가 꽤 달라질 수 있습니다.",
  },
  attentionScatter: {
    type: "attentionScatter",
    name: "스크롤햄스터",
    slug: "scrollhamster",
    emblem: "🐹",
    imagePath: "/assets/scrollhamster.png",
    accent: "scrollhamster",
    label: "집중 분산",
    headline: "멈추고 싶은데 계속 굴러가는 타입",
    cardSummary: "집중 분산 성향이 높은 당신은 자극이 많은 환경에서 쉽게 흐름을 잃습니다.",
    shortComment: "집중력이 없는 게 아니라, 끼어드는 자극이 너무 쉽게 주의를 가져가는 타입일 수 있습니다.",
    summaryBody: "당신은 하나에 몰입하는 능력이 없는 게 아니라, 끼어드는 자극이 너무 쉽게 주의를 가져갑니다. 짧고 빠른 콘텐츠 구조에 특히 취약할 가능성이 큽니다.",
    reasonBullets: [
      "알림과 피드, 쇼츠처럼 끼어드는 자극에 흐름이 잘 끊깁니다.",
      "원래 하려던 목적보다 딴짓으로 새어 나가기가 쉽습니다.",
    ],
    dailyBullets: [
      "알림 하나 확인하다가 원래 할 일을 잊을 수 있어요.",
      "앱 하나 켰다가 전혀 다른 걸 보고 있게 될 수 있어요.",
      "짧은 자극에 자주 끊겨서 몰입이 어려울 수 있어요.",
    ],
    advice: "의지보다 환경 차단이 먼저입니다. 알림, 탭, 앱 노출을 줄이세요.",
  },
  stimulationTolerance: {
    type: "stimulationTolerance",
    name: "핫폭스",
    slug: "hotfox",
    emblem: "🦊",
    imagePath: "/assets/hotfox.png",
    accent: "hotfox",
    label: "자극 내성",
    headline: "평범한 재미로는 잘 안 차는 타입",
    cardSummary: "자극 내성이 높은 당신은 점점 더 강한 재미를 원하게 될 수 있습니다.",
    shortComment: "예전엔 충분하던 재미가 밋밋하게 느껴진다면, 이미 자극 기준이 높아졌을 수 있습니다.",
    summaryBody: "당신은 이미 빠르고 강한 자극에 익숙해져 있을 수 있습니다. 그래서 예전엔 재밌던 것도 지금은 밋밋하게 느껴질 수 있습니다.",
    reasonBullets: [
      "짧고 센 콘텐츠를 계속 찾는 흐름이 강해졌을 수 있습니다.",
      "조용한 휴식이나 느린 재미가 답답하게 느껴질 가능성이 큽니다.",
    ],
    dailyBullets: [
      "짧고 센 콘텐츠를 계속 찾게 될 수 있어요.",
      "조용한 휴식이 오히려 심심하고 답답하게 느껴질 수 있어요.",
      "재미 기준이 점점 세지고 빨라질 수 있어요.",
    ],
    advice: "자극을 더 올리기보다, 기준선을 낮추는 회복 시간이 필요할 수 있습니다.",
  },
  rewardDependence: {
    type: "rewardDependence",
    name: "트로피울프",
    slug: "trophywolf",
    emblem: "🐺",
    imagePath: "/assets/trophywolf.png",
    accent: "trophywolf",
    label: "보상 의존",
    headline: "보상이 보여야 움직이는 타입",
    cardSummary: "보상 의존 성향이 높은 당신은 결과, 반응, 인정이 동력의 핵심입니다.",
    shortComment: "게으른 게 아니라, 반응과 성과가 보여야 엔진이 켜지는 타입일 가능성이 큽니다.",
    summaryBody: "당신은 게으른 게 아니라, 의미가 보이고 반응이 보일 때 훨씬 강하게 움직이는 타입입니다. 문제는 외부 보상이 없을 때 급격히 흥미가 식을 수 있다는 점입니다.",
    reasonBullets: [
      "칭찬, 숫자, 성과처럼 눈에 보이는 반응이 있어야 동기가 크게 붙습니다.",
      "반응이 없으면 루틴 유지가 급격히 어려워질 수 있습니다.",
    ],
    dailyBullets: [
      "칭찬이나 숫자 반응이 있으면 더 열심히 할 수 있어요.",
      "결과가 안 보이면 루틴 유지가 어려울 수 있어요.",
      "혼자 하는 일보다 피드백 있는 일이 더 잘 맞을 수 있어요.",
    ],
    advice: "외부 보상만 기다리지 말고, 직접 보이는 체크포인트를 만들어두세요.",
  },
};

const defaultScores: ScoreTotals = {
  instantReward: 0,
  noveltySeeking: 0,
  impulsivity: 0,
  attentionScatter: 0,
  stimulationTolerance: 0,
  rewardDependence: 0,
};

export function calculateStimulationResult(answers: StimulationAnswerMap) {
  const scores = { ...defaultScores };

  for (const question of stimulationQuestions) {
    const selectedId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedId);

    if (!selectedOption) continue;

    for (const [type, value] of Object.entries(selectedOption.scores) as [StimulationType, number][]) {
      scores[type] += value ?? 0;
    }
  }

  return buildStimulationResultFromScores(scores);
}

export function buildStimulationSharedResult(keys: SharedResultKeys) {
  const mainCharacter = stimulationCharacters[keys.mainType];
  const subCharacter = stimulationCharacters[keys.subType];

  return {
    scores: {
      ...defaultScores,
      [keys.mainType]: 4,
      [keys.subType]: 3,
    },
    mainType: keys.mainType,
    subType: keys.subType,
    mainCharacter,
    subCharacter,
    mainPercent: toDisplayPercent(4),
    subPercent: toDisplayPercent(3),
  };
}

function buildStimulationResultFromScores(scores: ScoreTotals) {
  const sorted = (Object.entries(scores) as [StimulationType, number][])
    .sort((a, b) => b[1] - a[1]);
  const [mainType, mainScore] = sorted[0];
  const [subType, subScore] = sorted[1];

  return {
    scores,
    mainType,
    subType,
    mainCharacter: stimulationCharacters[mainType],
    subCharacter: stimulationCharacters[subType],
    mainPercent: toDisplayPercent(mainScore),
    subPercent: toDisplayPercent(subScore),
  };
}

export function toDisplayPercent(score: number) {
  return percentMap[score] ?? 50;
}
