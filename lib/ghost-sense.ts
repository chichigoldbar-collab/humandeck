export type GhostDimension = "sensitivity" | "fear" | "imagination";

export type GhostResultType =
  | "instinctWolf"
  | "numbBear"
  | "immersiveCat"
  | "suspiciousOwl"
  | "sensingFox"
  | "rationalAnt";

export type GhostAnswerMap = Record<string, number>;

export type GhostQuestion = {
  id: number;
  text: string;
  dimension: GhostDimension;
  reverse: boolean;
};

export type GhostProfile = {
  type: GhostResultType;
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

type DimensionScores = Record<GhostDimension, number>;

type SharedScores = {
  sensitivity: number;
  fear: number;
  imagination: number;
};

export const ghostQuestions: GhostQuestion[] = [
  { id: 1, text: "어두운 공간에 혼자 있으면 주변이 신경 쓰인다", dimension: "sensitivity", reverse: false },
  { id: 2, text: "작은 소리에도 바로 반응한다", dimension: "sensitivity", reverse: false },
  { id: 3, text: "낯선 공간에서 분위기를 먼저 느낀다", dimension: "sensitivity", reverse: false },
  { id: 4, text: "누가 보는 느낌을 자주 받는다", dimension: "sensitivity", reverse: false },
  { id: 5, text: "공포 콘텐츠를 보면 오래 생각난다", dimension: "fear", reverse: false },
  { id: 6, text: "혼자 있을 때 상상력이 커진다", dimension: "fear", reverse: false },
  { id: 7, text: "거울이나 어두운 곳을 다시 보게 된다", dimension: "fear", reverse: false },
  { id: 8, text: "이상한 기척을 느낀 적이 있다", dimension: "fear", reverse: false },
  { id: 9, text: "이상한 소리는 신경 쓰지 않는다", dimension: "imagination", reverse: true },
  { id: 10, text: "모든 현상은 논리적으로 설명된다고 생각한다", dimension: "imagination", reverse: true },
  { id: 11, text: "혼자 있어도 뒤를 확인하지 않는다", dimension: "imagination", reverse: true },
  { id: 12, text: "무서운 장소도 금방 익숙해진다", dimension: "imagination", reverse: true },
];

export const ghostDimensionLabels: Record<GhostDimension, string> = {
  sensitivity: "감각 민감도",
  fear: "공포 반응",
  imagination: "상상/착각",
};

export const ghostProfiles: Record<GhostResultType, GhostProfile> = {
  instinctWolf: {
    type: "instinctWolf",
    name: "직감형 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/ghost-wolf.svg",
    accent: "ghost-wolf",
    headline: "남들보다 먼저 기척을 느끼는 타입",
    description: "분위기와 작은 변화에 유독 빨리 반응하는 편입니다.",
    meme: "너는 먼저 보는 인간임",
    summaryBody: "당신은 겁이 많아서보다 감각이 먼저 열려 있는 쪽에 가깝습니다. 남들은 그냥 지나갈 기척이나 분위기를 더 빨리 잡아내는 편일 수 있습니다.",
    reasonBullets: [
      "감각 민감도 축이 높고, 공포 반응은 상대적으로 덜 과열됐습니다.",
      "무서워서 멈추는 타입보다 먼저 눈치채는 타입에 가깝습니다.",
    ],
    advice: "느낌이 빠른 건 강점이지만, 모든 기척을 의미로 연결하진 않는 연습도 필요합니다.",
  },
  numbBear: {
    type: "numbBear",
    name: "둔감형 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/ghost-bear.svg",
    accent: "ghost-bear",
    headline: "옆에 있어도 잘 못 느끼는 타입",
    description: "주변 분위기나 기척에 상대적으로 둔감하고 쉽게 휘둘리지 않는 편입니다.",
    meme: "귀신 와도 그냥 잠",
    summaryBody: "당신은 공포 컨셉 자체에 크게 흔들리지 않는 편입니다. 작은 소리나 낯선 분위기도 비교적 금방 흘려보내는 타입일 가능성이 큽니다.",
    reasonBullets: [
      "감각 민감도와 상상/착각 축이 모두 낮게 나왔습니다.",
      "기척을 크게 의미 부여하지 않고 금방 익숙해지는 흐름이 보였습니다.",
    ],
    advice: "둔감함은 편안함을 주지만, 너무 무심하게 넘기는 습관이 생기지 않게 균형만 보면 됩니다.",
  },
  immersiveCat: {
    type: "immersiveCat",
    name: "과몰입형 고양이",
    slug: "cat",
    emblem: "🐱",
    imagePath: "/assets/ghost-cat.svg",
    accent: "ghost-cat",
    headline: "없는데도 있다고 느끼는 타입",
    description: "상상과 공포 반응이 결합돼, 없는 기척도 만들어낼 수 있는 편입니다.",
    meme: "없는데 네가 만들어냄",
    summaryBody: "당신은 무서운 분위기에 몰입하는 힘이 강합니다. 그래서 공포 콘텐츠나 어두운 공간에서 머릿속이 빠르게 이야기를 만들어낼 수 있습니다.",
    reasonBullets: [
      "상상/착각 축과 공포 반응 축이 동시에 높게 나왔습니다.",
      "이상한 소리와 기척을 논리보다 분위기로 받아들이기 쉬운 흐름입니다.",
    ],
    advice: "몰입감은 재밌는 감각이지만, 무서움이 커질 땐 눈앞 사실부터 하나씩 확인하는 게 도움이 됩니다.",
  },
  suspiciousOwl: {
    type: "suspiciousOwl",
    name: "의심형 올빼미",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/ghost-owl.svg",
    accent: "ghost-owl",
    headline: "계속 확인하는 타입",
    description: "믿지도 않지만 완전히 넘기지도 못해서 한 번 더 확인하게 되는 편입니다.",
    meme: "한 번 더 뒤돌아보는 인간",
    summaryBody: "당신은 쉽게 과몰입하지도, 완전히 무시하지도 않는 중간 지점에 있습니다. 그래서 무섭진 않은데도 한 번 더 돌아보는 행동이 자주 나올 수 있습니다.",
    reasonBullets: [
      "세 축이 모두 중간대에서 고르게 분포했습니다.",
      "믿지 않는다고 말하면서도 확인 행동이 남는 흐름이 보였습니다.",
    ],
    advice: "확인하는 습관이 길어질수록 더 신경 쓰일 수 있습니다. 확인은 한 번까지만 정해두는 게 좋습니다.",
  },
  sensingFox: {
    type: "sensingFox",
    name: "감각형 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/ghost-fox.svg",
    accent: "ghost-fox",
    headline: "느끼긴 하는데 확신 못하는 타입",
    description: "뭔가 있는 것 같긴 한데, 그걸 명확히 설명하진 못하는 편입니다.",
    meme: "느낌은 있는데 설명 못함",
    summaryBody: "당신은 감각이 아주 닫혀 있진 않지만, 그 감각을 확신으로 밀어붙이지도 않습니다. 그래서 애매한 느낌과 찝찝함이 오래 남을 수 있습니다.",
    reasonBullets: [
      "감각 민감도는 중간 이상인데, 판단은 끝까지 확정하지 않는 흐름이 나왔습니다.",
      "느낌은 잡지만 논리와 상상이 동시에 잡아당기는 타입입니다.",
    ],
    advice: "애매한 느낌을 오래 붙잡을수록 더 커질 수 있습니다. 느껴도 결론까지 급하게 가지 않는 게 좋습니다.",
  },
  rationalAnt: {
    type: "rationalAnt",
    name: "이성형 개미",
    slug: "ant",
    emblem: "🐜",
    imagePath: "/assets/ghost-ant.svg",
    accent: "ghost-ant",
    headline: "논리로 모든 걸 판단하는 타입",
    description: "이상한 상황도 먼저 설명 가능한 쪽으로 해석하는 편입니다.",
    meme: "이건 다 착각이라고 생각함",
    summaryBody: "당신은 분위기보다 설명을 먼저 찾습니다. 공포 자극이 들어와도 머릿속에서 빠르게 현실적인 이유를 찾으려는 편입니다.",
    reasonBullets: [
      "상상/착각 축이 낮고, 무서운 자극을 바로 의미화하지 않는 경향이 보였습니다.",
      "논리적 설명을 우선하는 흐름이 강합니다.",
    ],
    advice: "이성은 강점이지만, 감각 자체를 무시해버리면 오히려 몸이 긴장할 수 있습니다. 느끼되 해석은 천천히 해도 됩니다.",
  },
};

function initialScores(): DimensionScores {
  return {
    sensitivity: 0,
    fear: 0,
    imagination: 0,
  };
}

function scoreValue(value: number, reverse: boolean) {
  return reverse ? 6 - value : value;
}

function resolveGhostResult(scores: DimensionScores): GhostResultType {
  const { sensitivity, fear, imagination } = scores;

  if (sensitivity >= 16 && fear <= 13) return "instinctWolf";
  if (sensitivity <= 10 && imagination <= 10) return "numbBear";
  if (imagination >= 16 && fear >= 16) return "immersiveCat";
  if (imagination <= 10 && fear <= 12) return "rationalAnt";
  if (
    sensitivity >= 11 &&
    sensitivity <= 15 &&
    fear >= 11 &&
    fear <= 15 &&
    imagination >= 11 &&
    imagination <= 15
  ) {
    return "suspiciousOwl";
  }
  if (sensitivity >= 12) return "sensingFox";
  return "suspiciousOwl";
}

export function calculateGhostResult(answers: GhostAnswerMap) {
  const scores = initialScores();

  for (const question of ghostQuestions) {
    const answerValue = answers[String(question.id)];
    if (!answerValue) continue;
    scores[question.dimension] += scoreValue(answerValue, question.reverse);
  }

  return buildGhostResultFromScores(scores);
}

export function buildGhostSharedResult(input: SharedScores) {
  return buildGhostResultFromScores({
    sensitivity: input.sensitivity,
    fear: input.fear,
    imagination: input.imagination,
  });
}

function buildGhostResultFromScores(scores: DimensionScores) {
  const resultType = resolveGhostResult(scores);
  return {
    scores,
    resultType,
    profile: ghostProfiles[resultType],
  };
}
