export type JudgmentBiasType =
  | "confirmation"
  | "lossAversion"
  | "anchoring"
  | "overconfidence"
  | "haloEffect"
  | "choiceOverload";

export type JudgmentAnswerMap = Record<string, string>;

export type JudgmentOption = {
  id: string;
  text: string;
  scores: Partial<Record<JudgmentBiasType, number>>;
};

export type JudgmentQuestion = {
  id: string;
  bias: JudgmentBiasType;
  text: string;
  options: JudgmentOption[];
};

export type JudgmentCharacter = {
  biasType: JudgmentBiasType;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  biasLabel: string;
  headline: string;
  cardSummary: string;
  shortComment: string;
  summaryBody: string;
  reasonBullets: string[];
  dailyBullets: string[];
  advice: string;
};

type ScoreTotals = Record<JudgmentBiasType, number>;

type SharedResultKeys = {
  mainBias: JudgmentBiasType;
  subBias: JudgmentBiasType;
};

const percentMap: Record<number, number> = {
  0: 18,
  1: 39,
  2: 58,
  3: 77,
  4: 91,
};

export const judgmentQuestions: JudgmentQuestion[] = [
  {
    id: "jq1",
    bias: "confirmation",
    text: "내가 좋아하는 브랜드나 인물이 논란에 휩싸였을 때 나는?",
    options: [
      {
        id: "jq1a",
        text: "그래도 오해일 가능성이 크다고 먼저 생각한다",
        scores: { confirmation: 2 },
      },
      {
        id: "jq1b",
        text: "일단 비판하는 쪽과 옹호하는 쪽을 둘 다 본다",
        scores: { confirmation: 0 },
      },
      {
        id: "jq1c",
        text: "별 관심 없어서 넘긴다",
        scores: { confirmation: 1 },
      },
    ],
  },
  {
    id: "jq2",
    bias: "lossAversion",
    text: "새로운 걸 도전하면 이득이 있을 수도 있지만 실패할 수도 있다. 이럴 때 나는?",
    options: [
      {
        id: "jq2a",
        text: "실패 가능성이 있으면 웬만하면 안 한다",
        scores: { lossAversion: 2 },
      },
      {
        id: "jq2b",
        text: "계산해보고 괜찮으면 해본다",
        scores: { lossAversion: 1 },
      },
      {
        id: "jq2c",
        text: "손해를 봐도 일단 해보는 편이다",
        scores: { lossAversion: 0 },
      },
    ],
  },
  {
    id: "jq3",
    bias: "anchoring",
    text: "원래 20만원이던 제품이 9만 9천원으로 할인 중이면 나는?",
    options: [
      {
        id: "jq3a",
        text: "원래 가격이 먼저 보여서 엄청 싸게 느껴진다",
        scores: { anchoring: 2 },
      },
      {
        id: "jq3b",
        text: "할인율도 보지만 실제 필요성을 먼저 본다",
        scores: { anchoring: 1 },
      },
      {
        id: "jq3c",
        text: "애초에 원가가 적당했는지 의심한다",
        scores: { anchoring: 0 },
      },
    ],
  },
  {
    id: "jq4",
    bias: "overconfidence",
    text: "중요한 일을 준비할 때 나는 보통?",
    options: [
      {
        id: "jq4a",
        text: "감으로도 충분히 잘할 수 있다고 느낀다",
        scores: { overconfidence: 2 },
      },
      {
        id: "jq4b",
        text: "어느 정도는 준비해야 안심된다",
        scores: { overconfidence: 1 },
      },
      {
        id: "jq4c",
        text: "늘 부족할까 봐 꽤 많이 확인한다",
        scores: { overconfidence: 0 },
      },
    ],
  },
  {
    id: "jq5",
    bias: "haloEffect",
    text: "말도 잘하고 인상도 좋은 사람을 보면 나는?",
    options: [
      {
        id: "jq5a",
        text: "능력도 좋을 것 같다고 느낀다",
        scores: { haloEffect: 2 },
      },
      {
        id: "jq5b",
        text: "인상과 실력은 따로 보려고 한다",
        scores: { haloEffect: 1 },
      },
      {
        id: "jq5c",
        text: "오히려 더 의심하는 편이다",
        scores: { haloEffect: 0 },
      },
    ],
  },
  {
    id: "jq6",
    bias: "choiceOverload",
    text: "고를 수 있는 옵션이 너무 많으면 나는?",
    options: [
      {
        id: "jq6a",
        text: "오히려 더 좋은 걸 찾을 수 있어서 좋다",
        scores: { choiceOverload: 1 },
      },
      {
        id: "jq6b",
        text: "적당히 비교하고 하나를 정한다",
        scores: { choiceOverload: 0 },
      },
      {
        id: "jq6c",
        text: "비교하다가 더 피곤해지고 결정이 늦어진다",
        scores: { choiceOverload: 2 },
      },
    ],
  },
  {
    id: "jq7",
    bias: "confirmation",
    text: "정치, 사회, 연애 문제처럼 의견이 갈리는 주제를 볼 때 나는?",
    options: [
      {
        id: "jq7a",
        text: "내 생각과 비슷한 글이 더 설득력 있게 느껴진다",
        scores: { confirmation: 2 },
      },
      {
        id: "jq7b",
        text: "반대 의견도 읽어보려고 한다",
        scores: { confirmation: 0 },
      },
      {
        id: "jq7c",
        text: "애초에 피곤해서 잘 안 본다",
        scores: { confirmation: 1 },
      },
    ],
  },
  {
    id: "jq8",
    bias: "lossAversion",
    text: "중고 거래나 투자처럼 조금이라도 손해 볼 수 있는 상황이면 나는?",
    options: [
      {
        id: "jq8a",
        text: "손해 볼 바엔 안 한다",
        scores: { lossAversion: 2 },
      },
      {
        id: "jq8b",
        text: "적정선이면 감수한다",
        scores: { lossAversion: 1 },
      },
      {
        id: "jq8c",
        text: "잃더라도 경험이 남으면 괜찮다",
        scores: { lossAversion: 0 },
      },
    ],
  },
  {
    id: "jq9",
    bias: "anchoring",
    text: "누군가를 처음 만났을 때 첫인상이 별로면 나는?",
    options: [
      {
        id: "jq9a",
        text: "나중에 괜찮아 보여도 처음 느낌이 계속 간다",
        scores: { anchoring: 2 },
      },
      {
        id: "jq9b",
        text: "시간 지나며 다시 판단할 수 있다",
        scores: { anchoring: 1 },
      },
      {
        id: "jq9c",
        text: "첫인상은 거의 안 믿는다",
        scores: { anchoring: 0 },
      },
    ],
  },
  {
    id: "jq10",
    bias: "overconfidence",
    text: "내가 잘 아는 분야의 일이라고 생각하면 나는?",
    options: [
      {
        id: "jq10a",
        text: "대충 봐도 감이 온다고 생각한다",
        scores: { overconfidence: 2 },
      },
      {
        id: "jq10b",
        text: "그래도 체크는 해본다",
        scores: { overconfidence: 1 },
      },
      {
        id: "jq10c",
        text: "익숙해도 실수할 수 있다고 본다",
        scores: { overconfidence: 0 },
      },
    ],
  },
  {
    id: "jq11",
    bias: "haloEffect",
    text: "SNS에서 감각적으로 보이는 사람의 추천을 보면 나는?",
    options: [
      {
        id: "jq11a",
        text: "뭔가 믿을 만하다고 느낀다",
        scores: { haloEffect: 2 },
      },
      {
        id: "jq11b",
        text: "내용 보고 판단한다",
        scores: { haloEffect: 1 },
      },
      {
        id: "jq11c",
        text: "분위기 좋은 건 그냥 분위기라고 본다",
        scores: { haloEffect: 0 },
      },
    ],
  },
  {
    id: "jq12",
    bias: "choiceOverload",
    text: "넷플릭스, 쇼핑몰, 메뉴판처럼 고를 게 많으면 나는?",
    options: [
      {
        id: "jq12a",
        text: "오래 보다가 결국 익숙한 걸 고른다",
        scores: { choiceOverload: 1 },
      },
      {
        id: "jq12b",
        text: "기준 하나 정하고 빨리 고른다",
        scores: { choiceOverload: 0 },
      },
      {
        id: "jq12c",
        text: "비교를 너무 많이 해서 지친다",
        scores: { choiceOverload: 2 },
      },
    ],
  },
];

export const judgmentCharacters: Record<JudgmentBiasType, JudgmentCharacter> = {
  confirmation: {
    biasType: "confirmation",
    name: "픽스폭스",
    slug: "pixfox",
    emblem: "🦊",
    imagePath: "/assets/pixfox.png",
    accent: "pixfox",
    biasLabel: "확증편향",
    headline: "보고 싶은 것만 골라 믿는 타입",
    cardSummary:
      "확증편향이 강한 당신은, 정보를 찾는 과정에서도 이미 결론이 정해져 있을 수 있습니다.",
    shortComment:
      "당신은 정보를 찾는 것 같지만, 사실은 이미 믿고 싶은 결론을 확인하고 있을지도 모릅니다.",
    summaryBody:
      "당신은 어떤 문제를 판단할 때 객관적으로 보고 있다고 느끼지만, 실제로는 내 생각과 맞는 쪽 정보가 더 설득력 있게 다가올 가능성이 큽니다.",
    reasonBullets: [
      "논란이 생긴 대상에게 먼저 유리한 해석을 떠올리는 편입니다.",
      "의견이 갈리는 주제에서 내 생각과 비슷한 글이 더 자연스럽게 믿깁니다.",
    ],
    dailyBullets: [
      "뉴스나 이슈를 볼 때 내 입장과 맞는 정보만 더 자주 소비할 수 있어요.",
      "연애나 인간관계에서도 내가 믿고 싶은 해석을 더 강하게 받아들일 수 있어요.",
      "소비나 투자에서도 처음 세운 판단을 쉽게 수정하지 않을 수 있어요.",
    ],
    advice: "반대 의견을 읽을 때 방어하지 말고, '이게 맞다면?'을 먼저 떠올려보세요.",
  },
  lossAversion: {
    biasType: "lossAversion",
    name: "그랩옥토",
    slug: "grabocto",
    emblem: "🐙",
    imagePath: "/assets/grabocto.png",
    accent: "grabocto",
    biasLabel: "손실회피",
    headline: "잃지 않으려다 기회를 놓치는 타입",
    cardSummary:
      "손실회피 성향이 강해서, 얻는 기쁨보다 잃는 불편을 더 크게 느끼는 편입니다.",
    shortComment:
      "안전하게 가고 있다고 느끼지만, 사실은 손해를 피하려다 좋은 타이밍을 놓칠 수 있습니다.",
    summaryBody:
      "당신은 안정적인 선택을 선호하고, 손해 가능성이 보이면 행동을 보류하는 경우가 많습니다. 신중함은 장점이지만 지나치면 기회를 놓치게 됩니다.",
    reasonBullets: [
      "실패 가능성이 보이면 시도 자체를 미루는 경향이 있습니다.",
      "조금이라도 손해 보는 상황이면 아예 안 하는 쪽이 더 편하게 느껴집니다.",
    ],
    dailyBullets: [
      "새로운 일이나 관계를 시작할 때 리스크가 먼저 크게 보일 수 있어요.",
      "중고 거래, 투자, 협상처럼 득실을 따지는 상황에서 행동이 늦어질 수 있어요.",
      "결국 아무 변화도 없는 상태를 가장 안전하다고 느끼게 될 수 있어요.",
    ],
    advice: "실패 가능성만 보지 말고, 안 했을 때의 손실도 함께 계산해보세요.",
  },
  anchoring: {
    biasType: "anchoring",
    name: "앵커웨일",
    slug: "anchorwhale",
    emblem: "🐋",
    imagePath: "/assets/anchorwhale.png",
    accent: "anchorwhale",
    biasLabel: "앵커링 효과",
    headline: "처음 본 기준에서 잘 못 벗어나는 타입",
    cardSummary: "당신의 판단은 첫 정보의 영향을 꽤 오래 받습니다.",
    shortComment:
      "첫 가격, 첫인상, 첫 설명이 생각보다 오래 남아서 이후 판단의 기준이 되고 있을 수 있습니다.",
    summaryBody:
      "가격, 첫인상, 첫 설명처럼 처음 접한 정보가 이후 판단의 기준점이 되는 편입니다. 새로운 정보가 들어와도 출발점을 바꾸는 데 시간이 걸릴 수 있습니다.",
    reasonBullets: [
      "할인 전 가격이나 첫 제안처럼 초반 정보의 영향이 꽤 크게 남습니다.",
      "사람을 볼 때도 첫 느낌이 바뀌기까지 시간이 필요한 편입니다.",
    ],
    dailyBullets: [
      "쇼핑할 때 처음 본 가격이 할인 체감에 큰 영향을 줄 수 있어요.",
      "첫인상이 좋거나 나쁘면 그 사람을 다시 보기가 쉽지 않을 수 있어요.",
      "회의나 협상에서도 처음 제시된 숫자에 판단이 끌릴 수 있어요.",
    ],
    advice: "첫 느낌은 참고만 하고, 최종 판단은 꼭 한 번 더 미루세요.",
  },
  overconfidence: {
    biasType: "overconfidence",
    name: "블레이즈치타",
    slug: "blazecheetah",
    emblem: "🐆",
    imagePath: "/assets/blazecheetah.png",
    accent: "blazecheetah",
    biasLabel: "과잉확신",
    headline: "틀려도 자신 있게 밀어붙이는 타입",
    cardSummary:
      "과잉확신 성향이 강한 당신은, 실제보다 더 잘 알고 있다고 느끼기 쉽습니다.",
    shortComment:
      "속도는 빠르지만, 확신이 강한 순간일수록 체크를 덜 하고 있을 가능성이 큽니다.",
    summaryBody:
      "빠른 판단력과 추진력은 장점이지만, 준비나 검토보다 감과 확신을 더 믿는 경향이 있습니다. 익숙한 분야일수록 오히려 실수를 놓칠 수 있습니다.",
    reasonBullets: [
      "준비가 충분하지 않아도 감으로 밀어붙여도 된다고 느끼는 순간이 있습니다.",
      "내가 잘 아는 분야일수록 확인 절차를 줄이는 편일 수 있습니다.",
    ],
    dailyBullets: [
      "업무나 공부에서 체크리스트 없이 바로 결론을 내릴 수 있어요.",
      "익숙한 일일수록 더 큰 실수를 놓칠 수 있어요.",
      "자신감이 강해 보여도 정확도는 그와 다를 수 있어요.",
    ],
    advice: "확신이 강할수록 체크리스트를 더 짧게라도 꼭 돌리세요.",
  },
  haloEffect: {
    biasType: "haloEffect",
    name: "할로피콕",
    slug: "halopeacock",
    emblem: "🦚",
    imagePath: "/assets/halopeacock.png",
    accent: "halopeacock",
    biasLabel: "후광효과",
    headline: "겉모습 하나로 전체를 판단하는 타입",
    cardSummary:
      "당신은 분위기, 인상, 말투 같은 표면적 요소에 꽤 영향을 받습니다.",
    shortComment:
      "좋아 보이는 느낌이 실제 가치보다 먼저 들어와서, 사람과 브랜드를 더 후하게 볼 수 있습니다.",
    summaryBody:
      "세련된 사람은 더 유능해 보이고, 말 잘하는 사람은 더 믿음직해 보일 수 있습니다. 이 성향은 사람뿐 아니라 브랜드, 콘텐츠, 상품 평가에도 영향을 줍니다.",
    reasonBullets: [
      "인상 좋은 사람을 보면 실력도 좋을 것 같다고 느끼는 편입니다.",
      "감각적인 추천이나 분위기 있는 계정에 더 쉽게 신뢰를 부여할 수 있습니다.",
    ],
    dailyBullets: [
      "브랜드, 인플루언서, 콘텐츠를 겉 분위기로 먼저 판단할 수 있어요.",
      "말을 잘하는 사람에게 더 높은 점수를 줄 수 있어요.",
      "실제 내용보다 이미지가 강하게 남는 선택을 할 수 있어요.",
    ],
    advice: "좋아 보이는 느낌과 실제 가치가 같은지는 분리해서 보세요.",
  },
  choiceOverload: {
    biasType: "choiceOverload",
    name: "멀티앤트",
    slug: "multiant",
    emblem: "🐜",
    imagePath: "/assets/multiant.png",
    accent: "multiant",
    biasLabel: "선택 과부하",
    headline: "너무 많이 따지다가 결국 못 고르는 타입",
    cardSummary:
      "선택 과부하 성향이 강한 당신은, 선택지가 많아질수록 결정이 어려워집니다.",
    shortComment:
      "충분히 비교하고 싶어 하지만, 옵션이 많아질수록 더 좋은 선택보다 더 큰 피로가 먼저 옵니다.",
    summaryBody:
      "충분히 비교하고 싶어 하는 마음은 좋지만, 옵션이 많아질수록 피로가 커지고 만족도는 오히려 떨어질 수 있습니다. 고민이 길수록 더 좋은 선택을 하기보다 더 지치게 되는 타입입니다.",
    reasonBullets: [
      "선택지가 많을수록 판단이 쉬워지기보다 더 피곤해지는 편입니다.",
      "기준을 세우기 전까지는 비교가 계속 늘어나고 결정은 늦어질 수 있습니다.",
    ],
    dailyBullets: [
      "메뉴판, 쇼핑몰, OTT처럼 선택지가 많은 곳에서 에너지가 빨리 빠질 수 있어요.",
      "고민 시간이 길수록 만족도가 올라가기보다 후회가 남을 수 있어요.",
      "결국 익숙한 선택으로 돌아가며 스스로 답답함을 느낄 수 있어요.",
    ],
    advice: "비교 기준을 3개만 정하고, 그 기준 안에서 빠르게 결정해보세요.",
  },
};

const defaultScores: ScoreTotals = {
  confirmation: 0,
  lossAversion: 0,
  anchoring: 0,
  overconfidence: 0,
  haloEffect: 0,
  choiceOverload: 0,
};

export function calculateJudgmentResult(answers: JudgmentAnswerMap) {
  const scores = { ...defaultScores };

  for (const question of judgmentQuestions) {
    const selectedId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedId);

    if (!selectedOption) continue;

    for (const [bias, value] of Object.entries(selectedOption.scores) as [
      JudgmentBiasType,
      number,
    ][]) {
      scores[bias] += value ?? 0;
    }
  }

  return buildJudgmentResultFromScores(scores);
}

export function buildJudgmentSharedResult(keys: SharedResultKeys) {
  const mainCharacter = judgmentCharacters[keys.mainBias];
  const subCharacter = judgmentCharacters[keys.subBias];

  return {
    scores: {
      ...defaultScores,
      [keys.mainBias]: 4,
      [keys.subBias]: 3,
    },
    mainBias: keys.mainBias,
    subBias: keys.subBias,
    mainCharacter,
    subCharacter,
    mainPercent: toDisplayPercent(4),
    subPercent: toDisplayPercent(3),
  };
}

function buildJudgmentResultFromScores(scores: ScoreTotals) {
  const sorted = (Object.entries(scores) as [JudgmentBiasType, number][])
    .sort((a, b) => b[1] - a[1]);
  const [mainBias, mainScore] = sorted[0];
  const [subBias, subScore] = sorted[1];

  return {
    scores,
    mainBias,
    subBias,
    mainCharacter: judgmentCharacters[mainBias],
    subCharacter: judgmentCharacters[subBias],
    mainPercent: toDisplayPercent(mainScore),
    subPercent: toDisplayPercent(subScore),
  };
}

export function toDisplayPercent(score: number) {
  return percentMap[score] ?? 50;
}
