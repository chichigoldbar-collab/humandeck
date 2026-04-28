export type SurvivalType =
  | "instinct"
  | "strategic"
  | "avoidant"
  | "endure"
  | "impulsive"
  | "calculated"
  | "dependent"
  | "panic";

export type SurvivalAnswerMap = Record<string, string>;

export type SurvivalOption = {
  text: string;
  scores: Partial<Record<SurvivalType, number>>;
};

export type SurvivalQuestion = {
  id: number;
  text: string;
  options: SurvivalOption[];
};

export type SurvivalCharacter = {
  type: SurvivalType;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  title: string;
  summary: string;
  detail: string;
  reasons: string[];
  daily: string[];
  advice: string;
};

type SurvivalScores = Record<SurvivalType, number>;

export const survivalQuestions: SurvivalQuestion[] = [
  {
    id: 1,
    text: "숲에서 길을 잃었다. 폰 배터리는 10% 남았다.",
    options: [
      { text: "지도부터 확인한다", scores: { strategic: 2, calculated: 1 } },
      { text: "일단 이동하면서 길을 찾는다", scores: { instinct: 2, impulsive: 1 } },
      { text: "아무것도 못 하고 잠깐 멍해진다", scores: { panic: 2, avoidant: 1 } },
    ],
  },
  {
    id: 2,
    text: "주변에 아무 소리도 안 들린다.",
    options: [
      { text: "침착하게 주변을 관찰한다", scores: { strategic: 2, calculated: 1 } },
      { text: "무서워서 빠르게 이동한다", scores: { avoidant: 2, instinct: 1 } },
      { text: "누가 있는지 소리쳐본다", scores: { dependent: 2, impulsive: 1 } },
    ],
  },
  {
    id: 3,
    text: "갈림길이 나왔다.",
    options: [
      { text: "흔적 있는 길을 고른다", scores: { calculated: 2, strategic: 1 } },
      { text: "느낌 가는 쪽으로 간다", scores: { instinct: 2, impulsive: 1 } },
      { text: "그냥 멈춰서 오래 고민한다", scores: { panic: 2, strategic: 1 } },
    ],
  },
  {
    id: 4,
    text: "점점 해가 지기 시작한다.",
    options: [
      { text: "밤을 대비할 준비를 한다", scores: { strategic: 2, endure: 1 } },
      { text: "서둘러 더 움직인다", scores: { instinct: 2, impulsive: 1 } },
      { text: "불안해서 판단이 잘 안 된다", scores: { panic: 2, avoidant: 1 } },
    ],
  },
  {
    id: 5,
    text: "멀리서 이상한 소리가 들렸다.",
    options: [
      { text: "조용히 멈추고 상황을 파악한다", scores: { strategic: 2, calculated: 1 } },
      { text: "반대 방향으로 이동한다", scores: { avoidant: 2, instinct: 1 } },
      { text: "일단 뛴다", scores: { impulsive: 2, panic: 1 } },
    ],
  },
  {
    id: 6,
    text: "배가 고프기 시작했다.",
    options: [
      { text: "먹을 것을 찾아본다", scores: { instinct: 1, strategic: 1, calculated: 1 } },
      { text: "참고 계속 이동한다", scores: { endure: 2, instinct: 1 } },
      { text: "아무것도 못 하고 스트레스가 커진다", scores: { panic: 2, avoidant: 1 } },
    ],
  },
  {
    id: 7,
    text: "물 흐르는 소리를 들었다.",
    options: [
      { text: "물 따라 이동한다", scores: { instinct: 1, strategic: 1, calculated: 1 } },
      { text: "근처에서 쉬면서 더 판단한다", scores: { endure: 2, strategic: 1 } },
      { text: "그냥 지나친다", scores: { panic: 1, impulsive: 1, avoidant: 1 } },
    ],
  },
  {
    id: 8,
    text: "혼자라는 생각이 강하게 든다.",
    options: [
      { text: "감정을 눌러서 집중한다", scores: { strategic: 1, calculated: 1, endure: 1 } },
      { text: "불안이 확 올라온다", scores: { avoidant: 2, panic: 1 } },
      { text: "누군가를 찾으려 한다", scores: { dependent: 2, instinct: 1 } },
    ],
  },
  {
    id: 9,
    text: "길을 잘못 온 것 같다는 느낌이 든다.",
    options: [
      { text: "다시 돌아간다", scores: { calculated: 2, strategic: 1 } },
      { text: "그냥 계속 간다", scores: { instinct: 2, impulsive: 1 } },
      { text: "멈춰서 오래 고민한다", scores: { panic: 2, calculated: 1 } },
    ],
  },
  {
    id: 10,
    text: "밤이 됐다.",
    options: [
      { text: "안전한 자리를 먼저 찾는다", scores: { strategic: 2, endure: 1 } },
      { text: "계속 이동해보려 한다", scores: { instinct: 2, impulsive: 1 } },
      { text: "아무것도 못 하고 가만히 있게 된다", scores: { panic: 2, avoidant: 1 } },
    ],
  },
  {
    id: 11,
    text: "희미하게 불빛이 보인다.",
    options: [
      { text: "조심스럽게 접근한다", scores: { strategic: 2, calculated: 1 } },
      { text: "바로 달려간다", scores: { instinct: 2, impulsive: 1 } },
      { text: "위험할까 고민만 길어진다", scores: { panic: 2, calculated: 1 } },
    ],
  },
  {
    id: 12,
    text: "결국 선택해야 한다.",
    options: [
      { text: "확신 없어도 일단 결정한다", scores: { instinct: 2, impulsive: 1 } },
      { text: "최대한 계산하고 선택한다", scores: { strategic: 2, calculated: 1 } },
      { text: "선택을 최대한 미룬다", scores: { avoidant: 2, panic: 1 } },
    ],
  },
];

export const survivalLabels: Record<SurvivalType, string> = {
  instinct: "생존 본능",
  strategic: "전략 판단",
  avoidant: "위험 회피",
  endure: "버티는 힘",
  impulsive: "즉흥 행동",
  calculated: "현실 계산",
  dependent: "도움 요청",
  panic: "멘붕 반응",
};

export const survivalCharacters: Record<SurvivalType, SurvivalCharacter> = {
  instinct: {
    type: "instinct",
    name: "생존본능 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/survival-wolf.svg",
    accent: "survival-wolf",
    title: "빠르게 판단하고 움직이는 타입",
    summary: "당신은 완벽하지 않아도 일단 움직이는 쪽을 선택하는 사람에 가깝습니다.",
    detail:
      "당신은 위기 상황에서 정보가 다 모일 때까지 기다리기보다, 몸을 먼저 움직여 상황을 돌파하려는 경향이 있습니다. 위험 앞에서 얼어붙기보다 방향을 정하고 나가는 쪽이 더 자연스럽습니다.",
    reasons: [
      "가만히 있는 시간이 더 불안하게 느껴짐",
      "틀리더라도 일단 움직여야 감이 잡힘",
      "행동하면서 상황을 수정하는 데 익숙함",
    ],
    daily: [
      "위기 상황에서 남들보다 결정이 빠른 편임",
      "생각보다 몸이 먼저 나가는 순간이 있음",
      "나중에 돌아보면 성급했던 장면도 섞여 있음",
    ],
    advice: "움직이는 힘은 큰 장점입니다. 다만 위험이 큰 장면에선 잠깐의 점검이 결과를 더 좋게 만들 수 있습니다.",
  },
  strategic: {
    type: "strategic",
    name: "전략가 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/survival-owl.svg",
    accent: "survival-owl",
    title: "상황 파악이 먼저인 타입",
    summary: "당신은 불안한 상황에서도 먼저 구조를 읽고 안전한 선택지를 만들려는 편입니다.",
    detail:
      "당신은 위기 상황에서 감정에 바로 휩쓸리기보다, 현재 자원과 위험 요소를 빠르게 정리하려는 타입입니다. 움직임보다 판단 구조를 먼저 잡아야 마음이 놓이는 경향이 있습니다.",
    reasons: [
      "정보를 정리해야 행동도 선명해짐",
      "근거 없는 움직임을 불안하게 느낌",
      "리스크를 줄이는 선택에 강함",
    ],
    daily: [
      "위기에서 오히려 더 차분해 보일 수 있음",
      "대비책과 우선순위를 빨리 세우는 편임",
      "행동이 느리다는 인상을 줄 때도 있음",
    ],
    advice: "판단의 질은 분명 강점입니다. 다만 모든 정보가 완벽하지 않아도 움직일 타이밍을 놓치지 않는 연습이 도움이 됩니다.",
  },
  avoidant: {
    type: "avoidant",
    name: "불안회피 토끼",
    slug: "rabbit",
    emblem: "🐰",
    imagePath: "/assets/survival-rabbit.svg",
    accent: "survival-rabbit",
    title: "위험하면 피하는 타입",
    summary: "당신은 위기 앞에서 정면 돌파보다 위험에서 거리를 두는 쪽을 먼저 택합니다.",
    detail:
      "당신은 상황이 꼬일수록 불안을 줄이는 방향으로 반응하는 편입니다. 문제 자체를 해결하기보다, 일단 위험에서 벗어나는 선택이 더 안전하게 느껴질 수 있습니다.",
    reasons: [
      "강한 압박이 오면 판단보다 안전 욕구가 먼저 커짐",
      "잘못된 선택 자체를 크게 두려워함",
      "문제보다 불안 반응을 먼저 다루게 됨",
    ],
    daily: [
      "확실하지 않은 상황을 오래 버티기 힘든 편임",
      "리스크가 커 보이면 일단 피하는 선택을 함",
      "돌아보면 움직이지 못한 장면이 아쉽게 남기도 함",
    ],
    advice: "피하는 건 약함이 아니라 방어 반응입니다. 다만 작은 결정부터 직접 해보는 연습이 불안을 줄이는 데 도움이 됩니다.",
  },
  endure: {
    type: "endure",
    name: "버티기 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/survival-bear.svg",
    accent: "survival-bear",
    title: "움직이기보다 버티는 타입",
    summary: "당신은 위기 상황에서 급하게 흔들리기보다 현재 자리를 지켜내는 힘이 있는 편입니다.",
    detail:
      "당신은 불확실한 상황에서 무리하게 움직이기보다, 체력을 아끼고 타이밍을 보며 버티는 쪽에 가까운 사람입니다. 쉽게 패닉에 빠지지 않고 오래 견디는 힘이 장점이 될 수 있습니다.",
    reasons: [
      "움직임보다 안정 확보를 중요하게 느낌",
      "급하게 바꾸기보다 현재를 지키는 데 강함",
      "체력과 리듬을 지키는 선택이 자연스러움",
    ],
    daily: [
      "쉽게 소모되지 않는 편이라는 인상을 줄 수 있음",
      "움직임이 적어 답답해 보일 때도 있음",
      "한 번 버티기로 마음먹으면 오래 가는 편임",
    ],
    advice: "버티는 힘은 분명 자산입니다. 다만 상황이 바뀌었을 때 움직일 타이밍까지 같이 챙기면 더 강해집니다.",
  },
  impulsive: {
    type: "impulsive",
    name: "즉흥행동 원숭이",
    slug: "monkey",
    emblem: "🐒",
    imagePath: "/assets/survival-monkey.svg",
    accent: "survival-monkey",
    title: "생각보다 몸이 먼저 나가는 타입",
    summary: "당신은 위기에서 오래 생각하기보다 직감과 반사적으로 반응하는 편입니다.",
    detail:
      "당신은 긴장감이 높아질수록 판단보다 행동 속도가 먼저 올라가는 타입입니다. 어떤 면에선 재빠르지만, 다른 면에선 위험을 과하게 키우는 선택으로 이어질 수 있습니다.",
    reasons: [
      "멈춰 있는 시간이 더 힘들게 느껴짐",
      "순간 반응 속도가 빠름",
      "행동하고 나서 생각을 붙이는 편임",
    ],
    daily: [
      "위기 장면에서 갑자기 확 움직일 수 있음",
      "빠른 결정이 장점이자 리스크가 됨",
      "돌아보면 굳이 안 뛰어도 됐던 순간이 생김",
    ],
    advice: "반응 속도는 강점입니다. 다만 큰 결정을 내릴 때는 3초만 더 버텨도 결과가 꽤 달라질 수 있습니다.",
  },
  calculated: {
    type: "calculated",
    name: "계산형 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/survival-fox.svg",
    accent: "survival-fox",
    title: "리스크와 이득을 같이 계산하는 타입",
    summary: "당신은 감정보다 현실 조건을 먼저 보고, 손해가 덜한 방향을 고르려는 편입니다.",
    detail:
      "당신은 위기에서 감정에 휩쓸리기보다 무엇이 더 안전하고 효율적인지 계산하려는 타입입니다. 방향, 자원, 확률을 따져보는 습관이 있어 실수를 줄이는 데 강점이 있습니다.",
    reasons: [
      "위험과 이득을 같이 보는 편임",
      "직감보다 근거를 더 믿음",
      "최소한의 손실로 가는 선택을 선호함",
    ],
    daily: [
      "갈림길에서 흔적과 조건을 먼저 보게 됨",
      "모험보다 현실성을 먼저 따지는 편임",
      "때로는 지나치게 계산적으로 보일 수 있음",
    ],
    advice: "판단의 정교함은 분명 강점입니다. 다만 계산이 길어질수록 기회를 놓치는 순간도 함께 생길 수 있습니다.",
  },
  dependent: {
    type: "dependent",
    name: "의존형 강아지",
    slug: "dog",
    emblem: "🐶",
    imagePath: "/assets/survival-dog.svg",
    accent: "survival-dog",
    title: "혼자보단 같이 해결하고 싶은 타입",
    summary: "당신은 위기 상황에서 혼자 버티기보다 연결과 도움을 먼저 떠올리는 편입니다.",
    detail:
      "당신은 문제를 혼자만의 판단으로 끌고 가기보다, 누군가와 함께 풀고 싶어하는 경향이 있습니다. 위기에서 관계를 찾는 반응이 약함이라기보다 안전 자원을 외부에서 확보하려는 방식일 수 있습니다.",
    reasons: [
      "혼자 감당하는 것보다 같이 풀 때 안정됨",
      "연결이 있어야 판단도 선명해짐",
      "위기에서 도움 요청을 자연스럽게 떠올림",
    ],
    daily: [
      "혼자 결정하는 장면에서 불안이 커질 수 있음",
      "누군가와 상의하면 금방 안정을 찾는 편임",
      "고립감이 커질수록 판단력이 떨어질 수 있음",
    ],
    advice: "도움 요청은 좋은 전략입니다. 다만 아무도 없을 때를 대비한 나만의 기본 대응 순서도 같이 만들어두면 더 강해집니다.",
  },
  panic: {
    type: "panic",
    name: "멘붕형 문어",
    slug: "octopus",
    emblem: "🐙",
    imagePath: "/assets/survival-octopus.svg",
    accent: "survival-octopus",
    title: "생각이 많아져서 멈추는 타입",
    summary: "당신은 위기에서 생각은 빠르게 많아지지만, 그만큼 몸이 굳어버릴 가능성도 큰 편입니다.",
    detail:
      "당신은 위험을 크게 감지하는 대신 그만큼 선택의 무게도 크게 느끼는 타입입니다. 그래서 멈춰서 고민하는 시간이 길어지고, 그 사이 행동 타이밍이 늦어질 수 있습니다.",
    reasons: [
      "실수 가능성을 크게 체감하는 편임",
      "선택 하나의 무게가 과하게 커질 수 있음",
      "정보 부족이 곧바로 불안으로 이어지기 쉬움",
    ],
    daily: [
      "생각은 많아지는데 몸이 잘 안 움직일 수 있음",
      "확실한 기준이 없으면 멈추는 편임",
      "나중에 보면 망설임이 가장 큰 손실이 될 때도 있음",
    ],
    advice: "멘붕은 약함이 아니라 과부하 반응입니다. 위기일수록 다음 한 행동만 정하는 방식이 실제로 도움이 됩니다.",
  },
};

function getInitialScores(): SurvivalScores {
  return {
    instinct: 0,
    strategic: 0,
    avoidant: 0,
    endure: 0,
    impulsive: 0,
    calculated: 0,
    dependent: 0,
    panic: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.2)));
}

export function calculateSurvivalResult(answers: SurvivalAnswerMap) {
  const scores = getInitialScores();

  survivalQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as SurvivalType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [SurvivalType, number][];
  const mainType = sorted[0]?.[0] ?? "strategic";
  const subType = sorted[1]?.[0] ?? "calculated";

  return {
    scores,
    profile: survivalCharacters[mainType],
    subProfile: survivalCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}

export function buildSurvivalSharedResult(scores: Record<SurvivalType, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [SurvivalType, number][];
  const mainType = sorted[0]?.[0] ?? "strategic";
  const subType = sorted[1]?.[0] ?? "calculated";

  return {
    scores,
    profile: survivalCharacters[mainType],
    subProfile: survivalCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}
