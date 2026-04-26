export type FocusDimension = "focus" | "multi" | "impulse";

export type FocusResultType =
  | "focusOwl"
  | "multiMonkey"
  | "scatterButterfly"
  | "balancedDolphin"
  | "impulseDog";

export type FocusAnswerMap = Record<string, number>;

export type FocusQuestion = {
  id: number;
  text: string;
  dimension: FocusDimension;
  reverse: boolean;
};

export type FocusResultProfile = {
  type: FocusResultType;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  headline: string;
  description: string;
  meme: string;
  summaryBody: string;
  reasonBullets: string[];
  advice: string;
};

type DimensionScores = Record<FocusDimension, number>;

type SharedResult = {
  focus: number;
  multi: number;
  impulse: number;
};

export const focusQuestions: FocusQuestion[] = [
  { id: 1, text: "한 가지 일을 시작하면 끝까지 하는 편이다", dimension: "focus", reverse: false },
  { id: 2, text: "일을 하다가 다른 일이 떠오르면 바로 바꾼다", dimension: "impulse", reverse: false },
  { id: 3, text: "여러 일을 동시에 처리하는 것이 편하다", dimension: "multi", reverse: false },
  { id: 4, text: "작업 중간에 다른 앱이나 일을 자주 확인한다", dimension: "impulse", reverse: false },
  { id: 5, text: "집중하면 시간 가는 줄 모른다", dimension: "focus", reverse: false },
  { id: 6, text: "여러 일을 동시에 하면 효율이 더 좋다고 느낀다", dimension: "multi", reverse: false },
  { id: 7, text: "하던 일을 끝내기 전에 다른 일을 시작하는 경우가 많다", dimension: "impulse", reverse: false },
  { id: 8, text: "하나의 일에 오래 집중하는 것이 어렵다", dimension: "focus", reverse: true },
  { id: 9, text: "일을 순서대로 처리하는 것이 편하다", dimension: "focus", reverse: false },
  { id: 10, text: "여러 가지를 동시에 하는 것이 자연스럽다", dimension: "multi", reverse: false },
  { id: 11, text: "집중하다가도 쉽게 딴 생각이 든다", dimension: "impulse", reverse: false },
  { id: 12, text: "하나씩 처리하는 것이 더 효율적이라고 느낀다", dimension: "focus", reverse: false },
];

export const focusDimensionLabels: Record<FocusDimension, string> = {
  focus: "집중 몰입",
  multi: "동시 처리",
  impulse: "중간 이탈",
};

export const focusResults: Record<FocusResultType, FocusResultProfile> = {
  focusOwl: {
    type: "focusOwl",
    name: "집중형 올빼미",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/focus-owl.svg",
    accent: "focus-owl",
    headline: "한 가지에 깊게 몰입하는 타입",
    description: "하나를 붙잡으면 오래 파고드는 힘이 강한 편입니다.",
    meme: "너 한 번 꽂히면 끝까지 파는 인간임",
    summaryBody:
      "당신은 일을 벌이기보다 하나를 깊게 파는 쪽에 더 강점이 있습니다. 집중 흐름이 한번 잡히면 외부 자극에 비교적 덜 흔들리는 편입니다.",
    reasonBullets: [
      "집중 축 점수가 높고, 중간에 다른 일로 이탈하는 성향은 상대적으로 낮았습니다.",
      "여러 일을 동시에 돌리기보다 순서대로 밀어붙일 때 더 효율이 나는 쪽에 가깝습니다.",
    ],
    advice: "몰입이 강한 대신 시작이 무거워질 수 있으니, 시작 장벽을 낮추는 루틴을 같이 만들어두면 더 좋습니다.",
  },
  multiMonkey: {
    type: "multiMonkey",
    name: "멀티형 원숭이",
    slug: "monkey",
    emblem: "🐒",
    imagePath: "/assets/focus-monkey.svg",
    accent: "focus-monkey",
    headline: "여러 일을 동시에 처리하는 타입",
    description: "여러 창을 열어두고 움직일 때 오히려 리듬이 살아나는 편입니다.",
    meme: "여러 개 건드리는데 다 애매하게 끝냄",
    summaryBody:
      "당신은 한 가지에만 오래 매달리기보다 여러 일을 병행할 때 자연스러움을 느끼는 편입니다. 다만 흐름이 많아질수록 마무리 감각이 흐려질 수 있습니다.",
    reasonBullets: [
      "동시 처리 축 점수가 높고, 동시에 여러 작업을 운영하는 데 거부감이 적었습니다.",
      "효율을 높이기 위해 한 작업만 붙드는 방식보다 병렬 처리 쪽을 더 선호하는 흐름이 보였습니다.",
    ],
    advice: "멀티태스킹이 강점이어도 마감 직전에는 한 작업만 남기는 시간이 필요합니다.",
  },
  scatterButterfly: {
    type: "scatterButterfly",
    name: "산만형 나비",
    slug: "butterfly",
    emblem: "🦋",
    imagePath: "/assets/focus-butterfly.svg",
    accent: "focus-butterfly",
    headline: "쉽게 집중이 흐트러지는 타입",
    description: "몰입하려 해도 다른 자극이 자주 끼어드는 편입니다.",
    meme: "집중하려다 계속 딴 데 감",
    summaryBody:
      "당신은 능력이 없어서가 아니라, 외부 자극과 생각의 전환이 빨라서 집중을 오래 유지하기 어려울 수 있습니다. 환경 영향을 크게 받는 타입에 가깝습니다.",
    reasonBullets: [
      "중간 이탈 성향은 높고, 집중 축 점수는 상대적으로 낮게 나왔습니다.",
      "하던 일을 끝내기 전에 다른 생각이나 다른 할 일로 자주 이동하는 흐름이 보였습니다.",
    ],
    advice: "의지로 버티기보다 방해 요소를 먼저 줄이는 쪽이 훨씬 효과적일 수 있습니다.",
  },
  balancedDolphin: {
    type: "balancedDolphin",
    name: "균형형 돌고래",
    slug: "dolphin",
    emblem: "🐬",
    imagePath: "/assets/focus-dolphin.svg",
    accent: "focus-dolphin",
    headline: "상황에 따라 집중과 분산을 조절하는 타입",
    description: "하나를 파야 할 때와 여러 일을 돌릴 때를 비교적 현실적으로 구분하는 편입니다.",
    meme: "필요할 때 집중하는 현실형 인간",
    summaryBody:
      "당신은 완전한 몰입형도, 완전한 멀티형도 아니고 상황에 따라 방식을 바꾸는 쪽에 가깝습니다. 환경과 일의 성격에 따라 효율이 달라지는 현실적인 타입입니다.",
    reasonBullets: [
      "집중 축과 멀티 축이 모두 중간 이상이면서 극단적으로 한쪽으로 기울지는 않았습니다.",
      "무조건 한 가지만 하거나 무조건 여러 개를 돌리는 방식보다 상황 판단을 먼저 하는 흐름이 보였습니다.",
    ],
    advice: "당신은 방식 선택이 중요한 타입입니다. 일의 성격에 따라 싱글태스킹과 멀티태스킹을 의식적으로 나눠보세요.",
  },
  impulseDog: {
    type: "impulseDog",
    name: "충동형 강아지",
    slug: "dog",
    emblem: "🐶",
    imagePath: "/assets/focus-dog.svg",
    accent: "focus-dog",
    headline: "흥미 있는 것에 바로 반응하는 타입",
    description: "계획보다 순간적으로 눈에 들어오는 것에 먼저 움직일 가능성이 큽니다.",
    meme: "계획보다 순간이 중요한 인간",
    summaryBody:
      "당신은 해야 할 순서보다 지금 더 흥미롭거나 급해 보이는 것에 먼저 반응하는 경향이 있습니다. 속도는 빠르지만 흐름이 자주 바뀌어 피로해질 수 있습니다.",
    reasonBullets: [
      "중간 이탈 성향이 높고, 동시에 여러 가지를 건드리는 흐름도 강하게 나타났습니다.",
      "계획 자체보다 눈앞의 자극과 흥미가 우선순위를 바꾸는 경우가 많을 수 있습니다.",
    ],
    advice: "우선순위를 머릿속으로만 잡지 말고, 화면 밖에 적어두는 습관이 흐름을 지키는 데 도움이 됩니다.",
  },
};

function scoreValue(answerValue: number, reverse: boolean) {
  return reverse ? 6 - answerValue : answerValue;
}

function getInitialScores(): DimensionScores {
  return {
    focus: 0,
    multi: 0,
    impulse: 0,
  };
}

function resolveResultType(scores: DimensionScores): FocusResultType {
  const { focus, multi, impulse } = scores;

  if (focus >= 18 && impulse <= 12) {
    return "focusOwl";
  }

  if (impulse >= 16 && multi >= 15) {
    return "impulseDog";
  }

  if (multi >= 17 && impulse <= 16) {
    return "multiMonkey";
  }

  if (impulse >= 17 && focus <= 13) {
    return "scatterButterfly";
  }

  return "balancedDolphin";
}

export function calculateFocusResult(answers: FocusAnswerMap) {
  const scores = getInitialScores();

  focusQuestions.forEach((question) => {
    const answerValue = answers[String(question.id)];
    if (!answerValue) return;
    scores[question.dimension] += scoreValue(answerValue, question.reverse);
  });

  const resultType = resolveResultType(scores);
  const strongestDimension = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "focus") as FocusDimension;

  return {
    scores,
    strongestDimension,
    profile: focusResults[resultType],
  };
}

export function buildFocusSharedResult(shared: SharedResult) {
  const scores: DimensionScores = {
    focus: shared.focus,
    multi: shared.multi,
    impulse: shared.impulse,
  };

  const resultType = resolveResultType(scores);
  const strongestDimension = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "focus") as FocusDimension;

  return {
    scores,
    strongestDimension,
    profile: focusResults[resultType],
  };
}
