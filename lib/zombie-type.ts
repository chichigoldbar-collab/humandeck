export type ZombieType =
  | "breaker"
  | "strategist"
  | "avoider"
  | "holder"
  | "impulsive"
  | "calculator"
  | "cooperative"
  | "panic";

export type ZombieAnswerMap = Record<string, string>;

export type ZombieOption = {
  text: string;
  scores: Partial<Record<ZombieType, number>>;
};

export type ZombieQuestion = {
  id: number;
  text: string;
  options: ZombieOption[];
};

export type ZombieCharacter = {
  type: ZombieType;
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

type ZombieScores = Record<ZombieType, number>;

export const zombieQuestions: ZombieQuestion[] = [
  {
    id: 1,
    text: "뉴스 속보: 좀비 바이러스 확산. 밖에서 비명 소리가 들린다.",
    options: [
      { text: "바로 상황 확인하러 나간다", scores: { breaker: 2, impulsive: 1 } },
      { text: "문 잠그고 뉴스부터 계속 확인한다", scores: { strategist: 2, calculator: 1 } },
      { text: "일단 멍해진다", scores: { panic: 2, avoider: 1 } },
    ],
  },
  {
    id: 2,
    text: "마트 안, 사람들이 물건을 쓸어담는다.",
    options: [
      { text: "필요한 것만 빠르게 챙긴다", scores: { calculator: 2, strategist: 1 } },
      { text: "최대한 많이 확보한다", scores: { holder: 2, breaker: 1 } },
      { text: "사람들 따라 움직인다", scores: { cooperative: 1, panic: 1, avoider: 1 } },
    ],
  },
  {
    id: 3,
    text: "누군가 '여기 위험하다, 이동해야 한다'고 말한다.",
    options: [
      { text: "바로 따라간다", scores: { cooperative: 2, breaker: 1 } },
      { text: "상황을 보고 판단한다", scores: { strategist: 2, calculator: 1 } },
      { text: "혼자 다른 선택을 고민한다", scores: { avoider: 1, calculator: 1, panic: 1 } },
    ],
  },
  {
    id: 4,
    text: "좀비가 가까이 나타났다.",
    options: [
      { text: "도망치면서 길을 찾는다", scores: { breaker: 2, impulsive: 1 } },
      { text: "숨을 곳부터 찾는다", scores: { avoider: 2, strategist: 1 } },
      { text: "순간 얼어붙는다", scores: { panic: 2, holder: 1 } },
    ],
  },
  {
    id: 5,
    text: "같이 있던 사람이 다쳤다.",
    options: [
      { text: "도울 방법을 찾는다", scores: { cooperative: 2, breaker: 1 } },
      { text: "위험을 판단한 뒤 결정한다", scores: { calculator: 2, strategist: 1 } },
      { text: "일단 나부터 살려고 한다", scores: { avoider: 2, impulsive: 1 } },
    ],
  },
  {
    id: 6,
    text: "밤이 됐다. 안전한 장소를 골라야 한다.",
    options: [
      { text: "이동해서 더 좋은 곳을 찾는다", scores: { breaker: 2, strategist: 1 } },
      { text: "지금 있는 곳에서 버틴다", scores: { holder: 2, calculator: 1 } },
      { text: "판단을 못 하고 오래 고민한다", scores: { panic: 2, avoider: 1 } },
    ],
  },
  {
    id: 7,
    text: "식량이 부족하다.",
    options: [
      { text: "위험을 감수하고 구하러 간다", scores: { breaker: 2, impulsive: 1 } },
      { text: "아껴 쓰면서 버틴다", scores: { holder: 2, calculator: 1 } },
      { text: "남들 따라 움직인다", scores: { cooperative: 2, panic: 1 } },
    ],
  },
  {
    id: 8,
    text: "누군가 리더 역할을 맡으려 한다.",
    options: [
      { text: "내가 맡는다", scores: { breaker: 1, strategist: 1, cooperative: 1 } },
      { text: "상황을 보면서 따른다", scores: { cooperative: 1, calculator: 1, holder: 1 } },
      { text: "그냥 뒤에 있는다", scores: { avoider: 1, panic: 1, holder: 1 } },
    ],
  },
  {
    id: 9,
    text: "팀원이 위험한 선택을 하려 한다.",
    options: [
      { text: "강하게 말린다", scores: { breaker: 1, strategist: 1, cooperative: 1 } },
      { text: "의견만 전달한다", scores: { calculator: 2, cooperative: 1 } },
      { text: "그냥 지켜본다", scores: { holder: 1, avoider: 1, panic: 1 } },
    ],
  },
  {
    id: 10,
    text: "탈출 가능성이 있는 루트를 발견했다.",
    options: [
      { text: "바로 실행한다", scores: { breaker: 2, impulsive: 1 } },
      { text: "확실히 분석한 뒤 결정한다", scores: { strategist: 2, calculator: 1 } },
      { text: "불안해서 계속 망설인다", scores: { panic: 2, avoider: 1 } },
    ],
  },
  {
    id: 11,
    text: "사람들이 서로 의견 충돌을 시작한다.",
    options: [
      { text: "내가 정리하려 한다", scores: { cooperative: 2, breaker: 1 } },
      { text: "상황을 지켜본다", scores: { strategist: 1, holder: 1, calculator: 1 } },
      { text: "스트레스 받아서 빠진다", scores: { avoider: 2, panic: 1 } },
    ],
  },
  {
    id: 12,
    text: "결정의 순간. 위험하지만 가능성 있는 선택 vs 안전하지만 불확실한 선택.",
    options: [
      { text: "위험하지만 가능성이 있는 선택", scores: { breaker: 2, impulsive: 1 } },
      { text: "상황을 보고 계산한다", scores: { calculator: 2, strategist: 1 } },
      { text: "안전한 쪽을 고른다", scores: { avoider: 2, holder: 1 } },
    ],
  },
];

export const zombieLabels: Record<ZombieType, string> = {
  breaker: "돌파력",
  strategist: "전략 판단",
  avoider: "위험 회피",
  holder: "버티는 힘",
  impulsive: "즉흥 행동",
  calculator: "현실 계산",
  cooperative: "협력 성향",
  panic: "멘붕 반응",
};

export const zombieCharacters: Record<ZombieType, ZombieCharacter> = {
  breaker: {
    type: "breaker",
    name: "돌파형 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/zombie-wolf.svg",
    accent: "zombie-wolf",
    title: "위험해도 밀고 나가는 타입",
    summary: "당신은 위기 앞에서 완벽한 계획보다 돌파구를 만드는 움직임을 먼저 선택합니다.",
    detail:
      "당신은 위기 상황에서 오래 머뭇거리기보다 길을 만들면서 나가려는 사람에 가깝습니다. 위험을 보더라도 멈추는 쪽보다 밀고 나가는 쪽이 더 자연스럽게 느껴질 수 있습니다.",
    reasons: [
      "정지 상태가 더 위험하게 느껴짐",
      "결정하고 움직여야 머리가 맑아짐",
      "불확실성보다 정체를 더 견디기 어려워함",
    ],
    daily: [
      "위험 상황에서 남들보다 반응 속도가 빠름",
      "과감한 선택이 장점이자 리스크가 됨",
      "행동하면서 상황을 수정하는 편임",
    ],
    advice: "돌파력은 강한 무기지만, 아주 큰 리스크 앞에서는 5초만 더 점검해도 생존율이 크게 달라질 수 있습니다.",
  },
  strategist: {
    type: "strategist",
    name: "전략형 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/zombie-owl.svg",
    accent: "zombie-owl",
    title: "살아남는 건 계산이라고 믿는 타입",
    summary: "당신은 불안한 상황일수록 현재 자원과 리스크를 먼저 정리하려는 편입니다.",
    detail:
      "당신은 좀비 상황 같은 극단적 위기에서도 감정에 바로 휩쓸리기보다, 구조를 파악하고 안전한 선택지를 확보하려는 타입입니다. 판단의 질을 중시하는 생존자에 가깝습니다.",
    reasons: [
      "움직임보다 정보 정리가 먼저임",
      "근거 없는 선택을 특히 불안하게 느낌",
      "리스크를 낮추는 방식으로 생존하려 함",
    ],
    daily: [
      "위기 상황에서 의외로 차분하다는 인상을 줌",
      "분석이 길어지면 기회를 놓칠 수도 있음",
      "사람들이 의지할 만한 판단 기준을 만들 수 있음",
    ],
    advice: "전략은 큰 강점입니다. 다만 모든 수가 완벽해지기만 기다리면 좋은 타이밍도 함께 지나갈 수 있습니다.",
  },
  avoider: {
    type: "avoider",
    name: "회피형 토끼",
    slug: "rabbit",
    emblem: "🐰",
    imagePath: "/assets/zombie-rabbit.svg",
    accent: "zombie-rabbit",
    title: "안전이 최우선인 타입",
    summary: "당신은 생존 상황에서 정면 돌파보다 위험을 줄이는 선택을 먼저 택하는 편입니다.",
    detail:
      "당신은 위기에서 무작정 앞으로 나가기보다, 일단 안전거리를 확보하고 피해를 최소화하려는 성향이 강합니다. 겁이 많다기보다 위험 감지가 빠르게 켜지는 쪽에 가깝습니다.",
    reasons: [
      "잘못된 선택의 비용을 크게 느낌",
      "리스크를 먼저 피해야 마음이 진정됨",
      "공격보다 방어가 자연스러운 전략임",
    ],
    daily: [
      "위험한 상황에서 뒤로 한 발 물러나는 편임",
      "안전 기준이 높아서 결정이 느려질 수 있음",
      "결과적으로 큰 손실을 줄이는 경우도 많음",
    ],
    advice: "안전을 중시하는 태도는 분명 장점입니다. 다만 아주 작은 위험까지 모두 피하면 움직여야 할 순간도 함께 놓칠 수 있습니다.",
  },
  holder: {
    type: "holder",
    name: "버티기 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/zombie-bear.svg",
    accent: "zombie-bear",
    title: "움직이기보다 버티는 타입",
    summary: "당신은 위기 속에서 급하게 방향을 틀기보다 현재 자리를 지키는 데 강한 편입니다.",
    detail:
      "당신은 좀비 세상처럼 불안정한 상황에서도 에너지를 아끼고, 확보한 안전을 최대한 오래 유지하려는 타입입니다. 쉽게 무너지지 않는 인내력이 생존의 중심이 됩니다.",
    reasons: [
      "무리한 이동보다 현재 안정이 중요함",
      "체력과 자원을 오래 유지하는 데 강함",
      "계속 바꾸기보다 버티며 기회를 봄",
    ],
    daily: [
      "급한 상황에서도 쉽게 흐트러지지 않음",
      "답답해 보일 수 있지만 소모가 적음",
      "한 번 자리 잡으면 오래 버틸 수 있음",
    ],
    advice: "버티는 힘은 큰 자산입니다. 다만 상황이 이미 바뀌었을 때는 고정된 안전도 위험이 될 수 있다는 점을 함께 기억해야 합니다.",
  },
  impulsive: {
    type: "impulsive",
    name: "충동형 원숭이",
    slug: "monkey",
    emblem: "🐒",
    imagePath: "/assets/zombie-monkey.svg",
    accent: "zombie-monkey",
    title: "생각보다 몸이 먼저 나가는 타입",
    summary: "당신은 위기에서 깊게 생각하기보다 반사적으로 움직이는 힘이 큰 편입니다.",
    detail:
      "당신은 긴장감이 높아질수록 판단보다 행동 속도가 먼저 올라갑니다. 그 덕분에 빠른 탈출이 가능할 때도 있지만, 반대로 위험을 키우는 선택으로 이어질 때도 있습니다.",
    reasons: [
      "멈춰 있는 시간이 더 답답함",
      "직감과 몸 반응이 빠름",
      "행동 후에 이유를 붙이는 편임",
    ],
    daily: [
      "위기 상황에서 일단 달리는 장면이 많음",
      "빠른 대응이 장점이지만 실수도 생김",
      "나중에 보면 너무 급했던 선택이 섞여 있음",
    ],
    advice: "반응 속도는 강력한 장점입니다. 다만 큰 위험 앞에선 한 번만 더 확인해도 살 길이 훨씬 선명해질 수 있습니다.",
  },
  calculator: {
    type: "calculator",
    name: "계산형 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/zombie-fox.svg",
    accent: "zombie-fox",
    title: "리스크 계산하면서 움직이는 타입",
    summary: "당신은 감정에 휩쓸리기보다 어떤 선택이 덜 위험한지 먼저 따져보는 편입니다.",
    detail:
      "당신은 생존 상황에서도 무조건적인 용기나 무조건적인 회피 대신, 손해와 이득을 같이 재보며 움직이는 타입입니다. 방향을 고를 때 감보다 조건을 더 믿는 쪽에 가깝습니다.",
    reasons: [
      "확률과 자원 계산을 중요하게 여김",
      "근거 없는 돌진을 선호하지 않음",
      "최소 손실로 살아남는 방식에 강함",
    ],
    daily: [
      "갈림길에서 흔적, 시간, 자원을 같이 봄",
      "감정보다 현실 조건이 판단에 큰 영향을 줌",
      "다소 차갑게 보일 수 있지만 실수는 적은 편임",
    ],
    advice: "계산력은 생존에 유리합니다. 다만 모든 변수를 다 보려 하면 움직여야 할 타이밍은 늦어질 수 있습니다.",
  },
  cooperative: {
    type: "cooperative",
    name: "협력형 강아지",
    slug: "dog",
    emblem: "🐶",
    imagePath: "/assets/zombie-dog.svg",
    accent: "zombie-dog",
    title: "혼자보다 같이 살아남는 타입",
    summary: "당신은 위기에서 개인 플레이보다 팀의 움직임과 연결을 더 중요하게 보는 편입니다.",
    detail:
      "당신은 좀비 세상 같은 극단적 상황에서도 관계와 협력을 생존 자원으로 쓰는 타입입니다. 누군가와 같이 움직일 때 판단도 선명해지고, 역할을 나누는 쪽에서 힘이 살아납니다.",
    reasons: [
      "연결이 곧 생존 확률을 높인다고 느낌",
      "혼자 감당하는 것보다 같이 움직일 때 강함",
      "갈등보다 조율을 먼저 생각하는 편임",
    ],
    daily: [
      "혼자보다 팀 안에서 더 안정적임",
      "도움을 주고받는 구조를 빨리 만들 수 있음",
      "고립되면 판단력이 확 떨어질 수 있음",
    ],
    advice: "협력은 훌륭한 생존 전략입니다. 다만 팀이 흔들릴 때를 대비해 혼자 움직일 최소 기준도 함께 만들어두는 편이 좋습니다.",
  },
  panic: {
    type: "panic",
    name: "멘붕형 문어",
    slug: "octopus",
    emblem: "🐙",
    imagePath: "/assets/zombie-octopus.svg",
    accent: "zombie-octopus",
    title: "생각이 많아져서 멈추는 타입",
    summary: "당신은 위기에서 위험 감지가 너무 빠르게 커져서 오히려 행동 타이밍을 놓칠 가능성이 큽니다.",
    detail:
      "당신은 좀비 상황처럼 압박이 큰 장면에서 선택의 무게를 크게 느끼는 타입입니다. 그래서 가능한 시나리오를 너무 많이 떠올리고, 그 결과 몸이 멈춰버리는 순간이 생길 수 있습니다.",
    reasons: [
      "실수 비용을 크게 체감함",
      "정보 부족이 바로 불안으로 이어짐",
      "한 번의 선택이 모든 걸 바꾼다고 느끼기 쉬움",
    ],
    daily: [
      "머리는 빨리 돌아가는데 몸은 늦어질 수 있음",
      "선택지가 많을수록 더 멈추는 편임",
      "나중에 보면 망설임이 가장 큰 손실처럼 느껴질 수 있음",
    ],
    advice: "멘붕은 약함이 아니라 과부하 반응입니다. 위기일수록 전체 해답보다 다음 한 행동만 정하는 방식이 실제로 더 도움이 됩니다.",
  },
};

function getInitialScores(): ZombieScores {
  return {
    breaker: 0,
    strategist: 0,
    avoider: 0,
    holder: 0,
    impulsive: 0,
    calculator: 0,
    cooperative: 0,
    panic: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.2)));
}

export function calculateZombieResult(answers: ZombieAnswerMap) {
  const scores = getInitialScores();

  zombieQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as ZombieType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [ZombieType, number][];
  const mainType = sorted[0]?.[0] ?? "strategist";
  const subType = sorted[1]?.[0] ?? "calculator";

  return {
    scores,
    profile: zombieCharacters[mainType],
    subProfile: zombieCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}

export function buildZombieSharedResult(scores: Record<ZombieType, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [ZombieType, number][];
  const mainType = sorted[0]?.[0] ?? "strategist";
  const subType = sorted[1]?.[0] ?? "calculator";

  return {
    scores,
    profile: zombieCharacters[mainType],
    subProfile: zombieCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}
