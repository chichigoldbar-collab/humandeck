export type CompanyType =
  | "adaptation"
  | "endurance"
  | "leadership"
  | "avoidance"
  | "analysis"
  | "social"
  | "stress"
  | "loyalty";

export type CompanyAnswerMap = Record<string, string>;

export type CompanyOption = {
  text: string;
  scores: Partial<Record<CompanyType, number>>;
};

export type CompanyQuestion = {
  id: number;
  text: string;
  options: CompanyOption[];
};

export type CompanyCharacter = {
  type: CompanyType;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  title: string;
  summary: string;
  detail: string;
  strengths: string[];
  risks: string[];
  workplace: string[];
  advice: string;
};

type CompanyScores = Record<CompanyType, number>;

export const companyQuestions: CompanyQuestion[] = [
  {
    id: 1,
    text: "출근하자마자 상사가 '잠깐 보자'라고 한다.",
    options: [
      { text: "무슨 일인지 빠르게 예상한다", scores: { adaptation: 2, analysis: 1 } },
      { text: "일단 가서 듣는다", scores: { loyalty: 2, endurance: 1 } },
      { text: "괜히 긴장해서 머리가 하얘진다", scores: { stress: 2, avoidance: 1 } },
    ],
  },
  {
    id: 2,
    text: "업무 지시가 애매하게 내려왔다.",
    options: [
      { text: "바로 질문해서 명확히 한다", scores: { leadership: 2, analysis: 1 } },
      { text: "일단 해보고 수정한다", scores: { endurance: 1, loyalty: 1, adaptation: 1 } },
      { text: "눈치 보면서 넘긴다", scores: { adaptation: 2, avoidance: 1 } },
    ],
  },
  {
    id: 3,
    text: "회의 중 누가 말도 안 되는 의견을 냈다.",
    options: [
      { text: "논리적으로 반박한다", scores: { analysis: 2, leadership: 1 } },
      { text: "그냥 듣고 넘긴다", scores: { endurance: 1, loyalty: 1 } },
      { text: "분위기를 보면서 맞춘다", scores: { adaptation: 2, social: 1 } },
    ],
  },
  {
    id: 4,
    text: "갑자기 급한 업무가 추가됐다.",
    options: [
      { text: "우선순위를 다시 정리한다", scores: { analysis: 2, leadership: 1 } },
      { text: "일단 손부터 움직인다", scores: { endurance: 2, loyalty: 1 } },
      { text: "스트레스부터 받는다", scores: { stress: 2, avoidance: 1 } },
    ],
  },
  {
    id: 5,
    text: "동료가 일을 제대로 안 하고 있다.",
    options: [
      { text: "직접 말한다", scores: { leadership: 2, analysis: 1 } },
      { text: "참고 내가 처리한다", scores: { loyalty: 2, endurance: 1 } },
      { text: "모른 척 한다", scores: { avoidance: 2, adaptation: 1 } },
    ],
  },
  {
    id: 6,
    text: "점심시간 대화에서 나는",
    options: [
      { text: "분위기에 맞춰 대화를 이끈다", scores: { social: 2, adaptation: 1 } },
      { text: "듣는 쪽에 가깝다", scores: { endurance: 1, loyalty: 1 } },
      { text: "조용히 있는 편이다", scores: { avoidance: 1, stress: 1, analysis: 1 } },
    ],
  },
  {
    id: 7,
    text: "내가 실수했다.",
    options: [
      { text: "바로 인정하고 해결한다", scores: { leadership: 2, analysis: 1 } },
      { text: "상황 설명을 먼저 한다", scores: { adaptation: 1, loyalty: 1, endurance: 1 } },
      { text: "최대한 티 안 나게 덮으려 한다", scores: { avoidance: 2, stress: 1 } },
    ],
  },
  {
    id: 8,
    text: "야근 상황이 생겼다.",
    options: [
      { text: "끝까지 책임지고 한다", scores: { loyalty: 2, endurance: 1 } },
      { text: "적당히 맞춰서 한다", scores: { adaptation: 1, endurance: 1, analysis: 1 } },
      { text: "최대한 피하려 한다", scores: { avoidance: 2, stress: 1 } },
    ],
  },
  {
    id: 9,
    text: "팀 분위기가 이상하다.",
    options: [
      { text: "내가 정리하려 한다", scores: { leadership: 2, social: 1 } },
      { text: "그냥 지켜본다", scores: { analysis: 1, endurance: 1 } },
      { text: "불편해서 빠진다", scores: { stress: 2, avoidance: 1 } },
    ],
  },
  {
    id: 10,
    text: "누가 나를 평가하는 느낌이 든다.",
    options: [
      { text: "더 잘하려고 한다", scores: { loyalty: 2, adaptation: 1 } },
      { text: "신경 쓰이지만 유지한다", scores: { endurance: 1, analysis: 1, adaptation: 1 } },
      { text: "부담이 느껴진다", scores: { stress: 2, avoidance: 1 } },
    ],
  },
  {
    id: 11,
    text: "업무가 너무 많아졌다.",
    options: [
      { text: "구조부터 정리한다", scores: { analysis: 2, leadership: 1 } },
      { text: "하나씩 처리한다", scores: { endurance: 2, loyalty: 1 } },
      { text: "머리가 복잡해지면서 멈춘다", scores: { stress: 2, avoidance: 1 } },
    ],
  },
  {
    id: 12,
    text: "퇴근 직전 새 업무가 들어왔다.",
    options: [
      { text: "처리하고 간다", scores: { loyalty: 2, leadership: 1 } },
      { text: "상황 보고 결정한다", scores: { analysis: 2, adaptation: 1 } },
      { text: "내일로 미룬다", scores: { avoidance: 2, stress: 1 } },
    ],
  },
];

export const companyLabels: Record<CompanyType, string> = {
  adaptation: "상황 적응력",
  endurance: "버티는 힘",
  leadership: "주도권",
  avoidance: "회피 성향",
  analysis: "구조 분석력",
  social: "분위기 메이킹",
  stress: "멘붕도",
  loyalty: "조직 충성도",
};

export const companyCharacters: Record<CompanyType, CompanyCharacter> = {
  adaptation: {
    type: "adaptation",
    name: "눈치장인 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/company-fox.svg",
    accent: "company-fox",
    title: "분위기 파악이 제일 빠른 타입",
    summary: "당신은 일을 잘한다기보다 상황을 빨리 읽고 무난하게 살아남는 쪽에 강합니다.",
    detail:
      "당신은 회사에서 누가 말하지 않아도 분위기를 먼저 읽고, 어디까지 나서야 하는지 감을 잡는 편입니다. 직접 부딪히기보다 흐름을 먼저 파악해 손해를 줄이는 현실 적응형에 가깝습니다.",
    strengths: ["상황 파악이 빠름", "조직 안에서 마찰을 줄이는 감각", "말하지 않아도 흐름을 읽는 능력"],
    risks: ["계속 눈치를 보다 피로가 쌓임", "내 기준보다 분위기에 끌릴 수 있음", "하고 싶은 말이 늦어질 수 있음"],
    workplace: ["팀 분위기가 달라질 때 먼저 감지함", "애매한 지시에도 대충 흐름을 맞춰감", "회사 생존력은 높은데 감정 소모도 큰 편"],
    advice: "상황을 읽는 능력은 강점이지만, 항상 맞추기만 하면 결국 내 기준은 흐려질 수 있습니다.",
  },
  endurance: {
    type: "endurance",
    name: "버티기 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/company-bear.svg",
    accent: "company-bear",
    title: "일단 참고 버티는 타입",
    summary: "당신은 회사에서 감정보다 생존을 우선 두고, 묵묵히 버티는 쪽에 가깝습니다.",
    detail:
      "당신은 답답하거나 부당한 상황이 와도 바로 드러내기보다 일단 버티는 쪽을 선택합니다. 감정적으로 튀지 않고 묵직하게 가는 힘이 있지만, 오래 누적되면 지치기 쉬운 타입이기도 합니다.",
    strengths: ["꾸준히 견디는 힘", "한번 맡은 일은 끝까지 가는 편", "튀지 않고 조직을 유지하는 안정감"],
    risks: ["쌓이다가 한 번에 번아웃이 올 수 있음", "내가 너무 많이 떠안는 구조가 생기기 쉬움", "도움 요청이 늦어짐"],
    workplace: ["애매한 일도 참고 처리하는 경우가 많음", "야근이나 급한 일에서 버티는 힘이 강함", "겉으론 괜찮아 보여도 속은 피곤할 수 있음"],
    advice: "버티는 힘이 강한 사람일수록, 못 버티겠다고 말하는 타이밍을 일부러 만들어둘 필요가 있습니다.",
  },
  leadership: {
    type: "leadership",
    name: "주도형 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/company-wolf.svg",
    accent: "company-wolf",
    title: "답답하면 내가 하는 타입",
    summary: "당신은 회사에서 일이 굴러가지 않으면 결국 내가 움직여야 한다고 느끼는 편입니다.",
    detail:
      "당신은 회사에서 애매함과 비효율을 오래 견디기보다 직접 정리하고 방향을 잡으려는 성향이 강합니다. 책임감과 추진력이 장점이지만, 과하게 떠안는 순간 피로도도 빨리 올라갈 수 있습니다.",
    strengths: ["판단과 실행이 빠름", "애매한 상황을 정리하는 힘", "리더 역할을 자연스럽게 맡는 편"],
    risks: ["내가 다 해야 한다는 감각이 커질 수 있음", "강하게 보이면서 마찰이 생길 수 있음", "지치면 예민함이 바로 드러날 수 있음"],
    workplace: ["회의나 갈등 상황에서 정리하려 듦", "동료가 느리면 직접 처리해버릴 때가 있음", "답답함을 오래 참지 못함"],
    advice: "주도권은 강점이지만, 모든 문제를 내 책임처럼 가져오면 오래 버티기 어려워집니다.",
  },
  avoidance: {
    type: "avoidance",
    name: "회피형 토끼",
    slug: "rabbit",
    emblem: "🐰",
    imagePath: "/assets/company-rabbit.svg",
    accent: "company-rabbit",
    title: "문제 생기면 최대한 피하는 타입",
    summary: "당신은 회사에서 갈등과 부담이 커질수록 일단 거리를 두는 쪽을 택합니다.",
    detail:
      "당신은 문제를 몰라서가 아니라, 그 장면이 주는 긴장과 소모가 너무 커서 피하고 싶어지는 편입니다. 에너지 관리 차원에선 자연스러운 반응일 수 있지만, 계속 누적되면 더 큰 부담으로 돌아올 수 있습니다.",
    strengths: ["위험 신호에 민감함", "쓸데없는 충돌을 줄이려는 감각", "상황을 키우지 않으려는 본능"],
    risks: ["해야 할 말과 정리가 계속 미뤄질 수 있음", "평가 불안이 커지기 쉬움", "문제가 뒤늦게 더 커질 수 있음"],
    workplace: ["야근, 갈등, 실수 상황에서 피하고 싶어짐", "상사나 동료의 시선이 부담이 크게 느껴짐", "애매한 지시를 그냥 넘기고 뒤에서 스트레스 받음"],
    advice: "회피는 잠깐 숨을 주지만, 오래 가면 부담을 키웁니다. 작은 질문 하나라도 먼저 던져보는 연습이 필요합니다.",
  },
  analysis: {
    type: "analysis",
    name: "분석형 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/company-owl.svg",
    accent: "company-owl",
    title: "감정보다 구조 먼저 보는 타입",
    summary: "당신은 회사에서 사람보다 일의 구조와 흐름부터 읽으려는 편입니다.",
    detail:
      "당신은 회사에서 감정적으로 휘둘리기보다, 우선순위와 맥락을 정리하며 움직이는 타입입니다. 감정 소모가 덜한 대신 차갑게 보일 수 있고, 지나치게 분석하다 결정이 늦어질 수도 있습니다.",
    strengths: ["구조를 빠르게 정리함", "감정보다 사실과 흐름을 먼저 봄", "문제 상황에서 침착함을 유지하기 쉬움"],
    risks: ["사람 감정을 놓칠 수 있음", "너무 따지다 타이밍을 놓칠 수 있음", "거리감 있게 보일 수 있음"],
    workplace: ["업무량이 많아질수록 구조화부터 시도함", "회의에서 논리적 허점을 빨리 잡음", "감정보다 시스템을 먼저 개선하려는 편"],
    advice: "분석은 강력한 무기지만, 회사에서는 때로 논리보다 관계 속도가 더 빨리 작동한다는 점도 같이 봐야 합니다.",
  },
  social: {
    type: "social",
    name: "분위기형 원숭이",
    slug: "monkey",
    emblem: "🐵",
    imagePath: "/assets/company-monkey.svg",
    accent: "company-monkey",
    title: "어색함을 못 견디는 타입",
    summary: "당신은 회사에서 일 자체보다 사람 사이 공기와 분위기에 더 빠르게 반응하는 편입니다.",
    detail:
      "당신은 팀 안의 어색함, 불편함, 침묵 같은 장면을 오래 두고 보지 못합니다. 그래서 분위기를 풀거나 연결하는 역할로 자연스럽게 움직이지만, 그만큼 감정노동이 많아질 수 있습니다.",
    strengths: ["어색한 순간을 풀어내는 힘", "사람들 사이 연결감 형성", "팀 분위기를 부드럽게 만드는 감각"],
    risks: ["분위기를 혼자 책임지려 들 수 있음", "내 컨디션보다 타인 반응에 더 민감해짐", "업무 집중이 흐트러질 수 있음"],
    workplace: ["점심시간이나 회의 전후 분위기를 많이 살핌", "불편한 장면에서 농담이나 연결을 시도함", "사람 문제로 쉽게 피로해질 수 있음"],
    advice: "분위기를 살리는 건 재능이지만, 그 역할을 늘 내가 맡아야 하는 건 아니라는 기준도 필요합니다.",
  },
  stress: {
    type: "stress",
    name: "멘붕형 문어",
    slug: "octopus",
    emblem: "🐙",
    imagePath: "/assets/company-octopus.svg",
    accent: "company-octopus",
    title: "상황 많아지면 뇌 정지 오는 타입",
    summary: "당신은 일이 한꺼번에 몰릴수록 의지보다 먼저 멘탈이 흔들리는 편입니다.",
    detail:
      "당신은 능력이 없는 게 아니라, 압박과 복잡함이 한 번에 겹치는 순간 에너지가 급격히 떨어지는 타입입니다. 정리할 시간이 없을수록 머리가 멈추고, 감정 소모도 빨라질 수 있습니다.",
    strengths: ["세밀한 긴장 신호를 빨리 감지함", "리스크를 가볍게 넘기지 않음", "무리한 상황의 위험성을 민감하게 포착함"],
    risks: ["업무가 많아질수록 멈춤이 커질 수 있음", "평가나 갈등에 과하게 압박을 느낄 수 있음", "한 번 흔들리면 회복까지 시간이 걸림"],
    workplace: ["퇴근 직전 추가 업무, 애매한 지시, 다중 작업에 특히 취약함", "머리로는 알아도 실행이 느려질 수 있음", "혼자 멘붕을 수습하느라 더 지침"],
    advice: "멘붕은 의지 부족이 아니라 과부하 신호일 수 있습니다. 구조를 줄이고, 결정 단위를 잘게 쪼개는 것이 먼저입니다.",
  },
  loyalty: {
    type: "loyalty",
    name: "충성형 강아지",
    slug: "dog",
    emblem: "🐶",
    imagePath: "/assets/company-dog.svg",
    accent: "company-dog",
    title: "시키면 끝까지 하는 타입",
    summary: "당신은 회사에서 맡은 역할을 끝까지 해내야 마음이 놓이는 조직 순응형에 가깝습니다.",
    detail:
      "당신은 회사에서 주어진 역할과 책임을 무겁게 받아들이는 편입니다. 말이 떨어지면 끝까지 하려는 힘이 강하고, 인정받고 싶다는 마음도 일의 동력으로 작동할 수 있습니다.",
    strengths: ["책임감이 강함", "지시를 실행으로 옮기는 속도가 빠름", "팀에서 믿고 맡기기 쉬운 편"],
    risks: ["부탁을 거절하기 어렵고 과부하가 오기 쉬움", "조직 기준을 내 기준처럼 받아들일 수 있음", "내 상태를 뒤로 미루기 쉬움"],
    workplace: ["퇴근 직전 일도 쉽게 놓지 못함", "평가를 의식하면 더 열심히 하게 됨", "맡은 일은 끝내야 직성이 풀림"],
    advice: "책임감은 큰 장점이지만, 회사가 요구하는 만큼만 내 삶도 같이 지켜야 오래 갑니다.",
  },
};

function getInitialScores(): CompanyScores {
  return {
    adaptation: 0,
    endurance: 0,
    leadership: 0,
    avoidance: 0,
    analysis: 0,
    social: 0,
    stress: 0,
    loyalty: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(55 + score * 4)));
}

export function calculateCompanyResult(answers: CompanyAnswerMap) {
  const scores = getInitialScores();

  companyQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as CompanyType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [CompanyType, number][];
  const mainType = sorted[0]?.[0] ?? "adaptation";
  const subType = sorted[1]?.[0] ?? "analysis";

  return {
    scores,
    profile: companyCharacters[mainType],
    subProfile: companyCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}

export function buildCompanySharedResult(scores: Record<CompanyType, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [CompanyType, number][];
  const mainType = sorted[0]?.[0] ?? "adaptation";
  const subType = sorted[1]?.[0] ?? "analysis";

  return {
    scores,
    profile: companyCharacters[mainType],
    subProfile: companyCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}
