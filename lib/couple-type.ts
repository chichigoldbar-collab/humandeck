export type CoupleDimension =
  | "conflict"
  | "connection"
  | "partnership"
  | "affection";

export type CoupleResultType =
  | "stableBear"
  | "teamAnt"
  | "carefulFox"
  | "directTiger"
  | "avoidTurtle"
  | "distancePenguin";

export type CoupleAnswerMap = Record<string, number>;

export type CoupleQuestion = {
  id: number;
  text: string;
  dimension: CoupleDimension;
  reverse: boolean;
};

export type CoupleResultProfile = {
  type: CoupleResultType;
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

type DimensionScores = Record<CoupleDimension, number>;

type SharedResult = {
  conflict: number;
  connection: number;
  partnership: number;
  affection: number;
};

export const coupleQuestions: CoupleQuestion[] = [
  { id: 1, text: "문제가 생기면 대화를 통해 해결하려 한다", dimension: "conflict", reverse: false },
  { id: 2, text: "싸움이 나면 감정이 먼저 앞선다", dimension: "conflict", reverse: true },
  { id: 3, text: "불편한 일은 그냥 넘어가는 편이다", dimension: "conflict", reverse: true },
  { id: 4, text: "같은 문제로 반복해서 다툰다", dimension: "conflict", reverse: true },
  { id: 5, text: "배우자와 함께 있으면 정서적으로 편안하다", dimension: "connection", reverse: false },
  { id: 6, text: "배우자가 나를 잘 이해해준다고 느낀다", dimension: "connection", reverse: false },
  { id: 7, text: "요즘 배우자와 거리감이 느껴진다", dimension: "connection", reverse: true },
  { id: 8, text: "고민을 배우자보다 다른 사람에게 먼저 말한다", dimension: "connection", reverse: true },
  { id: 9, text: "집안일과 책임은 비교적 공정하게 나눠져 있다", dimension: "partnership", reverse: false },
  { id: 10, text: "생활 문제를 함께 논의한다", dimension: "partnership", reverse: false },
  { id: 11, text: "한 사람이 더 많이 책임진다고 느낀다", dimension: "partnership", reverse: true },
  { id: 12, text: "약속이나 역할이 자주 지켜지지 않는다", dimension: "partnership", reverse: true },
  { id: 13, text: "나는 충분히 사랑받고 있다고 느낀다", dimension: "affection", reverse: false },
  { id: 14, text: "애정 표현이 꾸준히 있는 편이다", dimension: "affection", reverse: false },
  { id: 15, text: "애정 표현이 부족하다고 느낀다", dimension: "affection", reverse: true },
  { id: 16, text: "서운함을 표현하지 못하고 쌓아두는 편이다", dimension: "affection", reverse: true },
];

export const coupleDimensionLabels: Record<CoupleDimension, string> = {
  conflict: "갈등 처리",
  connection: "정서적 연결",
  partnership: "생활 협업",
  affection: "애정 표현",
};

export const coupleResults: Record<CoupleResultType, CoupleResultProfile> = {
  stableBear: {
    type: "stableBear",
    name: "안정형 곰 부부",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/couple-bear.png",
    accent: "couple-bear",
    headline: "편안하고 균형 잡힌 관계",
    description: "갈등, 정서, 생활, 애정 네 축이 비교적 고르게 안정된 편입니다.",
    meme: "조용히 오래 가는 부부",
    summaryBody: "두 사람은 극적으로 요란하지 않아도 관계의 기본 체력이 꽤 좋은 편입니다. 갈등을 다루는 힘, 함께 사는 감각, 정서적 안정감이 전반적으로 균형을 이루고 있습니다.",
    reasonBullets: [
      "네 가지 축 점수가 전반적으로 높고 큰 구멍이 적었습니다.",
      "편안함과 협업, 애정 표현이 동시에 유지되는 쪽에 가까웠습니다.",
    ],
    advice: "지금의 안정감을 당연하게 여기지 말고, 작은 감사 표현을 꾸준히 유지하는 게 오래 갑니다.",
  },
  teamAnt: {
    type: "teamAnt",
    name: "팀플형 개미 부부",
    slug: "ant",
    emblem: "🐜",
    imagePath: "/assets/couple-ant.png",
    accent: "couple-ant",
    headline: "현실은 잘 돌아가지만 감정은 부족한 관계",
    description: "생활은 잘 굴러가는데 애정 표현과 정서적 온도가 상대적으로 약한 편입니다.",
    meme: "잘 사는 것 같은데 정이 없음",
    summaryBody: "두 사람은 함께 사는 운영 능력은 괜찮지만, 감정의 온도와 애정 표현이 그만큼 따라오지 못할 수 있습니다. 겉으로는 안정적이지만 속으로는 메마름을 느낄 수 있습니다.",
    reasonBullets: [
      "생활 협업 점수는 높지만 애정 표현 점수는 낮게 나왔습니다.",
      "문제 해결과 역할 분담은 되는데 관계의 말랑함이 부족할 수 있습니다.",
    ],
    advice: "효율이 좋아도 친밀감은 자동으로 따라오지 않습니다. 사소한 애정 표현을 루틴처럼 넣어보세요.",
  },
  carefulFox: {
    type: "carefulFox",
    name: "눈치형 여우 부부",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/couple-fox.png",
    accent: "couple-fox",
    headline: "싸움은 적지만 속으로 쌓이는 관계",
    description: "겉으론 조용하지만 불편함이 말없이 누적될 여지가 있는 편입니다.",
    meme: "조용한데 건강한 건 아닐 수도 있음",
    summaryBody: "둘 다 관계를 크게 흔들고 싶지 않아 조용히 넘어가는 일이 많을 수 있습니다. 문제는 평화처럼 보이는 침묵이 꼭 해결은 아니라는 점입니다.",
    reasonBullets: [
      "정서적 연결은 완전히 낮지 않지만 갈등 관련 점수가 어정쩡하게 흔들렸습니다.",
      "직접 부딪히기보다 분위기를 유지하려는 경향이 읽혔습니다.",
    ],
    advice: "크게 싸우지 않는 것보다, 작은 불편을 제때 말하는 습관이 더 중요할 수 있습니다.",
  },
  directTiger: {
    type: "directTiger",
    name: "직진형 호랑이 부부",
    slug: "tiger",
    emblem: "🐯",
    imagePath: "/assets/couple-tiger.png",
    accent: "couple-tiger",
    headline: "감정 표현은 강하지만 충돌도 잦은 관계",
    description: "가까움과 애정은 있지만 갈등을 다루는 방식이 거칠어질 수 있는 편입니다.",
    meme: "싸울 땐 전쟁, 평소엔 붙어다님",
    summaryBody: "서로에게 마음이 없어서가 아니라, 오히려 감정 에너지가 강해서 부딪힐 수 있는 타입입니다. 애정은 있지만 갈등 처리 기술이 흔들릴 때 관계 피로가 커질 수 있습니다.",
    reasonBullets: [
      "애정 표현은 비교적 살아 있는데 갈등 축 점수는 낮게 나왔습니다.",
      "감정은 활발하지만 해결 과정이 매끄럽지 않을 가능성이 보였습니다.",
    ],
    advice: "감정을 숨길 필요는 없지만, 타이밍과 표현 강도를 조절하는 연습이 필요합니다.",
  },
  avoidTurtle: {
    type: "avoidTurtle",
    name: "회피형 거북이 부부",
    slug: "turtle",
    emblem: "🐢",
    imagePath: "/assets/couple-turtle.png",
    accent: "couple-turtle",
    headline: "문제를 피하면서 버티는 관계",
    description: "겉으론 조용해도, 건드리기 어려운 문제들이 미뤄져 있을 가능성이 큽니다.",
    meme: "안 싸우는 게 아니라 못 건드리는 중",
    summaryBody: "둘 다 버티는 힘은 있을지 몰라도, 해결하는 힘은 따로 필요합니다. 조용하다는 이유로 건강하다고 보기엔 미뤄진 감정과 문제들이 남아 있을 수 있습니다.",
    reasonBullets: [
      "갈등 처리 점수가 낮고 직접 부딪히지 않는 흐름이 보였습니다.",
      "불편함을 덮어두는 방식이 반복될 가능성이 있습니다.",
    ],
    advice: "큰 대화를 한 번에 하려 하지 말고, 가벼운 불편부터 짧게 말하는 루틴을 먼저 만들어보세요.",
  },
  distancePenguin: {
    type: "distancePenguin",
    name: "거리두기형 펭귄 부부",
    slug: "penguin",
    emblem: "🐧",
    imagePath: "/assets/couple-penguin.png",
    accent: "couple-penguin",
    headline: "정서적으로 멀어진 상태의 관계",
    description: "생활은 이어가도 감정의 연결감은 많이 옅어졌을 수 있습니다.",
    meme: "같이 살지만 따로 사는 느낌",
    summaryBody: "함께 있는 시간과 정서적 연결은 다를 수 있습니다. 이 관계는 겉보기보다 마음의 거리가 더 큰 이슈일 수 있으며, 먼저 회복해야 할 축도 연결감입니다.",
    reasonBullets: [
      "정서적 연결 점수가 가장 낮게 나왔습니다.",
      "편안함과 이해받는 감각보다 거리감이 더 크게 느껴질 가능성이 보입니다.",
    ],
    advice: "문제 해결보다 먼저 연결 회복이 필요합니다. 하루 10분이라도 감정 이야기를 나누는 시간을 만들어보세요.",
  },
};

function scoreValue(answerValue: number, reverse: boolean) {
  return reverse ? 6 - answerValue : answerValue;
}

function getInitialScores(): DimensionScores {
  return {
    conflict: 0,
    connection: 0,
    partnership: 0,
    affection: 0,
  };
}

function resolveResultType(scores: DimensionScores): CoupleResultType {
  const { conflict, connection, partnership, affection } = scores;

  if (
    conflict >= 16 &&
    connection >= 16 &&
    partnership >= 16 &&
    affection >= 16
  ) {
    return "stableBear";
  }

  if (partnership >= 16 && affection <= 10) {
    return "teamAnt";
  }

  if (connection <= 10) {
    return "distancePenguin";
  }

  if (conflict <= 10 && affection >= 14) {
    return "directTiger";
  }

  if (conflict <= 10) {
    return "avoidTurtle";
  }

  if (conflict <= 13 && connection <= 15) {
    return "carefulFox";
  }

  return "stableBear";
}

export function calculateCoupleResult(answers: CoupleAnswerMap) {
  const scores = getInitialScores();

  for (const question of coupleQuestions) {
    const answerValue = answers[String(question.id)];
    if (!answerValue) continue;
    scores[question.dimension] += scoreValue(answerValue, question.reverse);
  }

  return buildCoupleResultFromScores(scores);
}

export function buildCoupleSharedResult(input: SharedResult) {
  const scores: DimensionScores = {
    conflict: input.conflict,
    connection: input.connection,
    partnership: input.partnership,
    affection: input.affection,
  };

  return buildCoupleResultFromScores(scores);
}

function buildCoupleResultFromScores(scores: DimensionScores) {
  const resultType = resolveResultType(scores);
  const profile = coupleResults[resultType];
  const strongestDimension = (Object.entries(scores) as [CoupleDimension, number][])
    .sort((a, b) => b[1] - a[1])[0][0];

  return {
    scores,
    resultType,
    profile,
    strongestDimension,
  };
}

