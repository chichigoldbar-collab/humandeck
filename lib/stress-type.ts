export type StressDimension = "avoid" | "release" | "solve" | "overthink";

export type StressResultType =
  | "avoidSloth"
  | "releasePanda"
  | "solveWolf"
  | "scatterMonkey"
  | "overthinkFox"
  | "burstBoar"
  | "neglectPenguin";

export type StressAnswerMap = Record<string, string>;

export type StressOption = {
  text: string;
  score: Partial<Record<StressDimension, number>>;
};

export type StressQuestion = {
  id: number;
  text: string;
  options: StressOption[];
};

export type StressResultProfile = {
  type: StressResultType;
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

type DimensionScores = Record<StressDimension, number>;

type SharedResult = {
  avoid: number;
  release: number;
  solve: number;
  overthink: number;
};

export const stressQuestions: StressQuestion[] = [
  {
    id: 1,
    text: "해야 할 일이 몰려서 머리가 복잡할 때 나는 보통",
    options: [
      { text: "일단 미루고 다른 걸 하면서 잊으려고 한다", score: { avoid: 2 } },
      { text: "친구나 주변 사람에게 털어놓으면서 푼다", score: { release: 2 } },
      { text: "할 일 순서를 정해서 하나씩 처리한다", score: { solve: 2 } },
      { text: "계속 생각만 하다가 시작이 늦어진다", score: { overthink: 2 } },
    ],
  },
  {
    id: 2,
    text: "하루가 너무 꼬였던 날 집에 오면",
    options: [
      { text: "아무것도 하기 싫어서 그냥 눕는다", score: { avoid: 2 } },
      { text: "먹거나 쇼핑하거나 보면서 기분을 푼다", score: { release: 2 } },
      { text: "왜 힘들었는지 정리하고 내일 계획을 다시 세운다", score: { solve: 2 } },
      { text: "그 장면을 계속 곱씹으면서 생각이 많아진다", score: { overthink: 2 } },
    ],
  },
  {
    id: 3,
    text: "누군가와 갈등이 생겼을 때 나는",
    options: [
      { text: "일단 피하고 거리를 둔다", score: { avoid: 2 } },
      { text: "감정을 털어놓거나 표출하면서 푼다", score: { release: 2 } },
      { text: "대화해서 빨리 정리하려고 한다", score: { solve: 2 } },
      { text: "내가 뭘 잘못했는지 상대가 왜 그랬는지 계속 생각한다", score: { overthink: 2 } },
    ],
  },
  {
    id: 4,
    text: "계획했던 일이 틀어졌을 때 나는",
    options: [
      { text: "그냥 포기하고 흐름에 맡긴다", score: { avoid: 2 } },
      { text: "짜증을 풀 수 있는 다른 걸 찾는다", score: { release: 2 } },
      { text: "다시 일정이나 방법을 수정한다", score: { solve: 2 } },
      { text: "왜 꼬였는지 머릿속으로 계속 복기한다", score: { overthink: 2 } },
    ],
  },
  {
    id: 5,
    text: "스트레스를 받을 때 가장 자주 하는 행동은",
    options: [
      { text: "게임, 유튜브, 낮잠처럼 현실에서 잠깐 도망간다", score: { avoid: 2 } },
      { text: "먹거나 소비하거나 수다로 푼다", score: { release: 2 } },
      { text: "운동, 청소, 정리처럼 몸을 움직이며 해결한다", score: { solve: 2 } },
      { text: "혼자 생각 정리를 하다가 시간이 간다", score: { overthink: 2 } },
    ],
  },
  {
    id: 6,
    text: "일이 잘 안 풀릴 때 나는",
    options: [
      { text: "잠깐 손을 놓고 나중에 다시 하려고 한다", score: { avoid: 2 } },
      { text: "답답함을 말하거나 표정으로 바로 드러낸다", score: { release: 2 } },
      { text: "방법을 바꿔서라도 끝까지 해본다", score: { solve: 2 } },
      { text: "왜 안 되는지 원인만 계속 파고든다", score: { overthink: 2 } },
    ],
  },
  {
    id: 7,
    text: "스트레스가 며칠째 이어질 때 나는",
    options: [
      { text: "점점 아무것도 하기 싫어지고 멈춘다", score: { avoid: 2 } },
      { text: "먹거나 즐기거나 쉬는 걸 더 세게 한다", score: { release: 2 } },
      { text: "문제의 원인을 하나씩 정리해본다", score: { solve: 2 } },
      { text: "같은 생각을 반복하면서 스스로 더 지친다", score: { overthink: 2 } },
    ],
  },
  {
    id: 8,
    text: "중요한 일을 앞두고 부담이 클 때 나는",
    options: [
      { text: "딴짓을 하면서 긴장을 피한다", score: { avoid: 2 } },
      { text: "누군가에게 말하면서 불안을 덜어낸다", score: { release: 2 } },
      { text: "준비를 더 해서 불안을 줄이려 한다", score: { solve: 2 } },
      { text: "실수할 장면을 계속 상상한다", score: { overthink: 2 } },
    ],
  },
  {
    id: 9,
    text: "실수를 했을 때 나는",
    options: [
      { text: "생각 안 하려고 덮어버린다", score: { avoid: 2 } },
      { text: "속상함이나 짜증을 바로 드러낸다", score: { release: 2 } },
      { text: "원인을 찾고 다음엔 안 그러려고 한다", score: { solve: 2 } },
      { text: "그 장면이 계속 떠오르고 오래 붙잡는다", score: { overthink: 2 } },
    ],
  },
  {
    id: 10,
    text: "할 일이 많은 날의 나는",
    options: [
      { text: "미루다가 결국 급하게 몰아서 한다", score: { avoid: 2 } },
      { text: "중간중간 쉬거나 풀면서 버틴다", score: { release: 2 } },
      { text: "작은 것부터 빠르게 처리한다", score: { solve: 2 } },
      { text: "뭘 먼저 해야 할지 고민만 많아진다", score: { overthink: 2 } },
    ],
  },
  {
    id: 11,
    text: "기분이 가라앉을 때 나는",
    options: [
      { text: "사람도 피하고 혼자 가만히 있는다", score: { avoid: 2 } },
      { text: "누군가와 이야기하거나 웃긴 걸 보며 푼다", score: { release: 2 } },
      { text: "무엇 때문인지 파악하고 바꾸려 한다", score: { solve: 2 } },
      { text: "이유를 계속 생각하다가 더 가라앉는다", score: { overthink: 2 } },
    ],
  },
  {
    id: 12,
    text: "스트레스를 풀기 위해 가장 자주 택하는 방식은",
    options: [
      { text: "그냥 쉬고 현실을 잠깐 끊는다", score: { avoid: 2 } },
      { text: "먹기, 소비, 수다처럼 기분 전환을 한다", score: { release: 2 } },
      { text: "정리하거나 움직이면서 해결감을 만든다", score: { solve: 2 } },
      { text: "혼자 생각 정리를 하다가 시간이 다 간다", score: { overthink: 2 } },
    ],
  },
];

export const stressDimensionLabels: Record<StressDimension, string> = {
  avoid: "회피",
  release: "해소",
  solve: "해결",
  overthink: "과생각",
};

export const stressResults: Record<StressResultType, StressResultProfile> = {
  avoidSloth: {
    type: "avoidSloth",
    name: "회피형 나무늘보",
    slug: "sloth",
    emblem: "🦥",
    imagePath: "/assets/stress-sloth.png",
    accent: "stress-sloth",
    headline: "스트레스를 받으면 멈추거나 피하는 타입",
    description: "버티기보다 잠깐 끊고 멀어지는 방식으로 스트레스를 다루는 편입니다.",
    meme: "일단 도망부터 치는 인간",
    summaryBody:
      "당신은 스트레스가 커질수록 정면 돌파보다 잠깐 거리를 두는 쪽으로 반응할 가능성이 큽니다. 회피가 게으름이라기보다 과부하를 줄이는 생존 방식처럼 작동할 수 있습니다.",
    reasonBullets: [
      "회피 축 점수가 가장 높고, 해소나 해결 쪽 점수는 상대적으로 높지 않았습니다.",
      "압박이 커질수록 멈추거나 딴 데로 빠지는 장면이 반복될 가능성이 보였습니다.",
    ],
    advice: "완전히 도망가기보다 시작 장벽이 낮은 작은 행동 하나만 먼저 만드는 편이 더 잘 맞을 수 있습니다.",
  },
  releasePanda: {
    type: "releasePanda",
    name: "해소형 판다",
    slug: "panda",
    emblem: "🐼",
    imagePath: "/assets/stress-panda.png",
    accent: "stress-panda",
    headline: "먹고 쉬고 즐기면서 스트레스를 푸는 타입",
    description: "감정을 밖으로 빼내거나 기분 전환으로 해소하는 흐름이 강한 편입니다.",
    meme: "스트레스 = 먹거나 소비로 해결",
    summaryBody:
      "당신은 스트레스 자체를 분석하기보다 일단 기분을 풀 수 있는 행동으로 균형을 되찾으려는 편입니다. 이 방식은 회복에 도움이 되지만, 문제 해결이 뒤로 밀릴 수도 있습니다.",
    reasonBullets: [
      "해소 축이 가장 높고, 회피보다 감정 배출과 기분 전환 쪽 반응이 더 강했습니다.",
      "먹기, 쉬기, 소비, 수다처럼 감정을 풀어주는 행동으로 먼저 반응할 가능성이 큽니다.",
    ],
    advice: "기분 전환 자체는 유지하되, 풀고 난 뒤 정리할 문제 하나만 다시 집어오는 흐름을 같이 만들어보세요.",
  },
  solveWolf: {
    type: "solveWolf",
    name: "해결형 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/stress-wolf.png",
    accent: "stress-wolf",
    headline: "문제를 직접 정리하고 해결하려는 타입",
    description: "스트레스를 감정으로만 두지 않고 처리 대상으로 보는 편입니다.",
    meme: "스트레스 오면 바로 처리 들어감",
    summaryBody:
      "당신은 스트레스를 단순히 견디는 것보다 구조화해서 다루려는 성향이 강합니다. 계획을 다시 세우고, 원인을 찾고, 해결 행동으로 연결할 때 심리적 안정감이 올라가는 타입에 가깝습니다.",
    reasonBullets: [
      "해결 축 점수가 가장 높고, 회피 성향은 상대적으로 낮게 나왔습니다.",
      "부담이 생겨도 정리와 실행을 통해 균형을 되찾는 쪽이 자연스러운 흐름으로 보였습니다.",
    ],
    advice: "해결 성향이 강한 사람일수록 감정 자체를 무시하기 쉽습니다. 정리 전에 감정 이름을 먼저 붙여보는 것도 도움이 됩니다.",
  },
  scatterMonkey: {
    type: "scatterMonkey",
    name: "분산형 원숭이",
    slug: "monkey",
    emblem: "🐒",
    imagePath: "/assets/stress-monkey.png",
    accent: "stress-monkey",
    headline: "이것저것 건드리며 집중을 흩트리는 타입",
    description: "스트레스 상황에서 한 흐름으로 가지 못하고 여러 방향으로 분산될 수 있습니다.",
    meme: "일은 안 하고 딴 거 계속함",
    summaryBody:
      "당신은 스트레스를 받으면 해결도, 해소도, 회피도 한 방향으로 가지 않고 이것저것 건드리면서 흐름이 흩어질 수 있습니다. 바쁘게 움직이지만 정작 마음은 더 산만해질 가능성이 있습니다.",
    reasonBullets: [
      "회피, 해소, 과생각 축이 같이 높게 움직이면서 반응이 한 방향으로 정리되지 않았습니다.",
      "스트레스를 받으면 딴짓, 기분 전환, 생각의 확장이 동시에 커질 수 있는 패턴이 보였습니다.",
    ],
    advice: "지금 필요한 건 더 많은 반응이 아니라 하나의 방향입니다. 오늘은 어떤 방식 하나만 쓸지 먼저 정해보세요.",
  },
  overthinkFox: {
    type: "overthinkFox",
    name: "분석형 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/stress-fox.png",
    accent: "stress-fox",
    headline: "생각은 많지만 실행이 늦는 타입",
    description: "문제를 잘 느끼고 잘 읽지만, 그만큼 머릿속에 오래 붙잡아두는 편입니다.",
    meme: "생각만 하다 시간 다 감",
    summaryBody:
      "당신은 스트레스를 대충 넘기지 못하고 계속 곱씹는 경향이 있습니다. 문제를 이해하려는 힘은 있지만, 생각이 길어질수록 시작이 늦어지고 피로가 더 쌓일 수 있습니다.",
    reasonBullets: [
      "과생각 축 점수가 가장 높고, 감정이나 문제를 오래 붙드는 흐름이 강하게 드러났습니다.",
      "원인을 따져보는 힘은 있지만, 실행보다 해석이 앞서는 장면이 반복될 수 있습니다.",
    ],
    advice: "정리와 반추는 다릅니다. 일정 시간이 지나면 생각을 멈추고 행동 하나로 넘어가는 기준을 정해두세요.",
  },
  burstBoar: {
    type: "burstBoar",
    name: "폭발형 멧돼지",
    slug: "boar",
    emblem: "🐗",
    imagePath: "/assets/stress-boar.png",
    accent: "stress-boar",
    headline: "참다가 한 번에 감정이 터지는 타입",
    description: "스트레스를 쌓아두다가 해소와 회피가 함께 크게 터질 수 있는 편입니다.",
    meme: "참다가 한 번에 터지는 인간",
    summaryBody:
      "당신은 스트레스를 조용히 품고 있다가 어느 순간 크게 표출하는 장면이 나올 수 있습니다. 감정 배출 욕구는 큰데, 그 전까지 버티거나 미루는 흐름도 같이 있어서 피로가 누적되기 쉽습니다.",
    reasonBullets: [
      "해소 축과 회피 축이 동시에 높게 나와, 참다가 풀어버리는 패턴이 함께 읽혔습니다.",
      "쌓일 때는 오래 쌓이고, 한 번 풀릴 때는 강하게 푸는 반응이 반복될 가능성이 있습니다.",
    ],
    advice: "터뜨리기 전 단계의 작은 배출구를 만드는 게 중요합니다. 아주 작은 표현이라도 중간중간 분산해보세요.",
  },
  neglectPenguin: {
    type: "neglectPenguin",
    name: "방치형 펭귄",
    slug: "penguin",
    emblem: "🐧",
    imagePath: "/assets/stress-penguin.png",
    accent: "stress-penguin",
    headline: "문제는 알지만 그냥 놔두는 타입",
    description: "스트레스를 강하게 표출하지도 해결하지도 못한 채 방치하는 쪽에 가까울 수 있습니다.",
    meme: "알면서도 안 하는 타입",
    summaryBody:
      "당신은 스트레스를 분명 느끼지만, 그렇다고 뚜렷한 해소나 해결 행동으로 이어지지 않을 수 있습니다. 큰 반응이 없어서 괜찮아 보일 수 있지만, 실제론 피로가 조용히 누적되는 흐름일 수 있습니다.",
    reasonBullets: [
      "전반적으로 점수 차가 크지 않으면서 해결 축이 충분히 올라오지 않았습니다.",
      "문제를 느끼지만 적극적으로 다루기보다 일단 두는 패턴이 반복될 가능성이 있습니다.",
    ],
    advice: "방치의 반대는 완벽한 해결이 아닙니다. 오늘 하나만 손보는 작은 개입이 훨씬 현실적일 수 있습니다.",
  },
};

function getInitialScores(): DimensionScores {
  return {
    avoid: 0,
    release: 0,
    solve: 0,
    overthink: 0,
  };
}

function resolveResultType(scores: DimensionScores): StressResultType {
  const { avoid, release, solve, overthink } = scores;
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const highest = sorted[0]?.[0] as StressDimension;
  const highestValue = sorted[0]?.[1] ?? 0;
  const secondValue = sorted[1]?.[1] ?? 0;

  if (avoid >= 5 && release >= 5 && overthink >= 5) {
    return "scatterMonkey";
  }

  if (release >= 5 && avoid >= 5) {
    return "burstBoar";
  }

  if (solve >= 6 && avoid <= 2) {
    return "solveWolf";
  }

  if (overthink === highestValue) {
    return "overthinkFox";
  }

  if (avoid === highestValue && release <= 2) {
    return "avoidSloth";
  }

  if (release === highestValue && avoid <= 2) {
    return "releasePanda";
  }

  if (highestValue <= 4 && Math.abs(highestValue - secondValue) <= 1 && solve <= 3) {
    return "neglectPenguin";
  }

  if (highest === "solve") return "solveWolf";
  if (highest === "release") return "releasePanda";
  if (highest === "avoid") return "avoidSloth";
  return "overthinkFox";
}

export function calculateStressResult(answers: StressAnswerMap) {
  const scores = getInitialScores();

  stressQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.score).forEach(([dimension, value]) => {
      scores[dimension as StressDimension] += value ?? 0;
    });
  });

  const resultType = resolveResultType(scores);
  const strongestDimension = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "avoid") as StressDimension;

  return {
    scores,
    strongestDimension,
    profile: stressResults[resultType],
  };
}

export function buildStressSharedResult(shared: SharedResult) {
  const scores: DimensionScores = {
    avoid: shared.avoid,
    release: shared.release,
    solve: shared.solve,
    overthink: shared.overthink,
  };

  const resultType = resolveResultType(scores);
  const strongestDimension = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "avoid") as StressDimension;

  return {
    scores,
    strongestDimension,
    profile: stressResults[resultType],
  };
}
