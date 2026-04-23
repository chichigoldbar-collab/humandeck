export type PersonaType =
  | "coping"
  | "pleasing"
  | "aloof"
  | "competent"
  | "cheerful"
  | "dominant"
  | "defensive"
  | "performative";

export type PersonaAnswerMap = Record<string, string>;

export type PersonaOption = {
  text: string;
  scores: Partial<Record<PersonaType, number>>;
};

export type PersonaQuestion = {
  id: number;
  text: string;
  options: PersonaOption[];
};

export type PersonaCharacter = {
  type: PersonaType;
  name: string;
  slug: string;
  emblem: string;
  imagePath: string;
  accent: string;
  title: string;
  summary: string;
  detail: string;
  reasons: string[];
  viewedAs: string[];
  risks: string[];
  advice: string;
};

type PersonaScores = Record<PersonaType, number>;

export const personaQuestions: PersonaQuestion[] = [
  {
    id: 1,
    text: "친구들과 모인 자리에서 대화가 끊기면 나는?",
    options: [
      { text: "먼저 아무 얘기라도 꺼낸다", scores: { cheerful: 2, dominant: 1 } },
      { text: "누가 말하길 기다린다", scores: { pleasing: 1, coping: 1 } },
      { text: "폰 보거나 자연스럽게 빠진다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 2,
    text: "부탁을 받았는데 내 상황이 애매할 때 나는?",
    options: [
      { text: "일단 해주고 나중에 후회한다", scores: { pleasing: 2, coping: 1 } },
      { text: "상황 설명하고 조율한다", scores: { competent: 1, dominant: 1 } },
      { text: "애매하게 넘기거나 피한다", scores: { aloof: 1, defensive: 2 } },
    ],
  },
  {
    id: 3,
    text: "모르는 얘기가 나왔을 때 나는?",
    options: [
      { text: "아는 척 하면서 맞장구 친다", scores: { competent: 2, performative: 1 } },
      { text: "솔직하게 모른다고 한다", scores: { coping: 1, dominant: 1 } },
      { text: "그냥 듣고 넘어간다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 4,
    text: "단체 대화방에서 분위기가 이상해지면?",
    options: [
      { text: "농담 던지면서 풀어보려 한다", scores: { cheerful: 2, pleasing: 1 } },
      { text: "그냥 지켜본다", scores: { aloof: 1, coping: 1 } },
      { text: "아예 말을 줄인다", scores: { defensive: 2, aloof: 1 } },
    ],
  },
  {
    id: 5,
    text: "내가 실수했을 때 반응은?",
    options: [
      { text: "괜찮은 척 넘긴다", scores: { coping: 2, competent: 1 } },
      { text: "바로 인정하고 정리한다", scores: { competent: 2, dominant: 1 } },
      { text: "변명하거나 상황 설명한다", scores: { defensive: 1, performative: 1 } },
    ],
  },
  {
    id: 6,
    text: "새로운 사람을 만났을 때 나는?",
    options: [
      { text: "먼저 분위기 풀려고 한다", scores: { cheerful: 2, performative: 1 } },
      { text: "상대 반응 보면서 맞춘다", scores: { pleasing: 2, coping: 1 } },
      { text: "거리 두면서 천천히 본다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 7,
    text: "누가 나를 살짝 무시하는 느낌이 들면?",
    options: [
      { text: "아무렇지 않은 척한다", scores: { coping: 2, aloof: 1 } },
      { text: "은근히 티 낸다", scores: { performative: 1, defensive: 1 } },
      { text: "바로 선 긋는다", scores: { defensive: 2, dominant: 1 } },
    ],
  },
  {
    id: 8,
    text: "여러 명이 같이 결정해야 할 때 나는?",
    options: [
      { text: "방향을 정하려고 한다", scores: { dominant: 2, competent: 1 } },
      { text: "의견을 따라간다", scores: { pleasing: 2, coping: 1 } },
      { text: "굳이 끼지 않는다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 9,
    text: "칭찬을 들었을 때 나는?",
    options: [
      { text: "아닌 척 하지만 속으로 신경 쓴다", scores: { coping: 1, performative: 1 } },
      { text: "자연스럽게 받아들인다", scores: { competent: 1, dominant: 1 } },
      { text: "더 잘 보이고 싶어진다", scores: { performative: 2, competent: 1 } },
    ],
  },
  {
    id: 10,
    text: "내 상태가 안 좋을 때 주변 사람들 앞에서는?",
    options: [
      { text: "티 안 내려고 한다", scores: { coping: 2, competent: 1 } },
      { text: "조금은 드러낸다", scores: { pleasing: 1, cheerful: 1 } },
      { text: "아예 거리 둔다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 11,
    text: "SNS에 글이나 사진 올릴 때 나는?",
    options: [
      { text: "반응을 꽤 신경 쓴다", scores: { performative: 2, pleasing: 1 } },
      { text: "그냥 기록 느낌으로 올린다", scores: { competent: 1, coping: 1 } },
      { text: "잘 안 올린다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
  {
    id: 12,
    text: "어색한 상황에서 나의 기본 행동은?",
    options: [
      { text: "내가 나서서 분위기 바꾼다", scores: { cheerful: 2, dominant: 1 } },
      { text: "적당히 맞춘다", scores: { pleasing: 1, coping: 1 } },
      { text: "조용히 빠져나온다", scores: { aloof: 2, defensive: 1 } },
    ],
  },
];

export const personaLabels: Record<PersonaType, string> = {
  coping: "괜찮은 척",
  pleasing: "착한 척",
  aloof: "무심한 척",
  competent: "유능한 척",
  cheerful: "분위기 메이커",
  dominant: "주도권",
  defensive: "방어형",
  performative: "연출형",
};

export const personaCharacters: Record<PersonaType, PersonaCharacter> = {
  coping: {
    type: "coping",
    name: "괜찮은척 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/persona-fox.png",
    accent: "persona-fox",
    title: "힘들어도 아무렇지 않은 척하는 타입",
    summary: "당신은 무너지는 순간에도 티를 내지 않는 쪽을 선택합니다.",
    detail:
      "사람들 앞에서 감정이나 상태를 그대로 드러내기보다, 괜찮은 모습으로 정리해서 보여주려는 경향이 있습니다.",
    reasons: ["분위기를 깨고 싶지 않아서", "약해 보이는 게 싫어서", "상대에게 부담 주기 싫어서"],
    viewedAs: ["안정적인 사람", "문제 없는 사람", "하지만 속을 잘 모르는 사람"],
    risks: ["혼자 쌓이는 스트레스", "타인이 상태를 눈치 못 챔", "도움 요청 타이밍을 놓침"],
    advice: "괜찮지 않을 때 괜찮지 않다고 말해도 관계는 생각보다 쉽게 깨지지 않습니다.",
  },
  pleasing: {
    type: "pleasing",
    name: "착한척 사슴",
    slug: "deer",
    emblem: "🦌",
    imagePath: "/assets/persona-deer.png",
    accent: "persona-deer",
    title: "싫어도 싫다고 못 하는 타입",
    summary: "당신은 거절보다 맞춰주는 쪽을 먼저 고르는 사람일 수 있습니다.",
    detail:
      "사람들 앞에서 갈등을 만들기보다 상대가 편한 방향으로 맞추는 역할을 자주 맡습니다.",
    reasons: ["상대가 실망하는 게 불편해서", "분위기가 어색해지는 게 싫어서", "좋은 사람으로 보이고 싶어서"],
    viewedAs: ["배려심 많은 사람", "잘 맞춰주는 사람", "하지만 속마음은 알기 어려운 사람"],
    risks: ["원치 않는 일까지 떠안음", "서운함이 늦게 폭발함", "내 기준이 흐려짐"],
    advice: "착한 사람으로 보이는 것보다, 가능한 선을 정확히 말하는 게 관계를 더 오래 지킵니다.",
  },
  aloof: {
    type: "aloof",
    name: "무심한척 고양이",
    slug: "cat",
    emblem: "🐱",
    imagePath: "/assets/persona-cat.png",
    accent: "persona-cat",
    title: "신경 쓰면서도 안 쓰는 척하는 타입",
    summary: "당신은 관심이 있어도 먼저 들키는 걸 별로 좋아하지 않습니다.",
    detail:
      "사람들 앞에서 너무 많은 감정이나 관심을 드러내기보다, 한 발 떨어져 관찰하는 모습을 보이기 쉽습니다.",
    reasons: ["괜히 들키고 싶지 않아서", "먼저 다가갔다가 머쓱해지는 게 싫어서", "상대 반응을 먼저 보고 싶어서"],
    viewedAs: ["쿨한 사람", "독립적인 사람", "가까워지기 어려운 사람"],
    risks: ["관심이 없는 사람처럼 보임", "관계가 느리게 깊어짐", "오해가 쌓일 수 있음"],
    advice: "무심한 척이 편해도, 중요한 사람에게는 작은 관심 표시를 남겨두는 게 좋습니다.",
  },
  competent: {
    type: "competent",
    name: "유능한척 사자",
    slug: "lion",
    emblem: "🦁",
    imagePath: "/assets/persona-lion.png",
    accent: "persona-lion",
    title: "모르면 안 될 것 같아서 아는 척하는 타입",
    summary: "당신은 빈틈보다 능력 있어 보이는 이미지를 먼저 지키려 합니다.",
    detail:
      "사람들 앞에서 실수하거나 모르는 모습을 보이기보다, 정리된 사람처럼 보이려는 압력이 큰 편입니다.",
    reasons: ["실망시키고 싶지 않아서", "허술해 보이는 게 싫어서", "기대받는 역할에 익숙해서"],
    viewedAs: ["믿음직한 사람", "똑똑한 사람", "하지만 부담을 안고 사는 사람"],
    risks: ["모르는 걸 숨김", "도움 요청이 늦어짐", "완벽해야 한다는 압박"],
    advice: "모른다고 말하는 순간에도 당신의 신뢰가 바로 무너지지는 않습니다.",
  },
  cheerful: {
    type: "cheerful",
    name: "분위기메이커 원숭이",
    slug: "monkey",
    emblem: "🐵",
    imagePath: "/assets/persona-monkey.png",
    accent: "persona-monkey",
    title: "어색함을 못 참고 분위기를 띄우는 타입",
    summary: "당신은 침묵이 길어지면 자연스럽게 무대 위로 올라가는 사람입니다.",
    detail:
      "사람들 앞에서 분위기가 가라앉는 걸 그냥 두기보다, 농담이나 리액션으로 공기를 바꾸는 역할을 맡기 쉽습니다.",
    reasons: ["어색한 침묵이 불편해서", "사람들이 편해졌으면 해서", "내가 나서야 할 것 같아서"],
    viewedAs: ["재밌는 사람", "편하게 만드는 사람", "하지만 혼자 피곤해지는 사람"],
    risks: ["늘 밝아야 한다는 부담", "진지한 감정을 숨김", "내 컨디션보다 분위기를 먼저 봄"],
    advice: "항상 분위기를 살리지 않아도 괜찮습니다. 침묵도 관계의 일부입니다.",
  },
  dominant: {
    type: "dominant",
    name: "주도권 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/persona-wolf.png",
    accent: "persona-wolf",
    title: "조용히 있으면 불안해서 이끄는 타입",
    summary: "당신은 흐름이 애매할 때 자연스럽게 방향을 잡으려 합니다.",
    detail:
      "사람들 앞에서 결정이 느려지거나 방향이 없으면 직접 나서서 정리하고 이끄는 역할을 맡기 쉽습니다.",
    reasons: ["애매한 상태를 견디기 어려워서", "결정이 늦어지는 게 답답해서", "책임지는 편이 더 편해서"],
    viewedAs: ["리더십 있는 사람", "결단력 있는 사람", "가끔은 강하게 느껴지는 사람"],
    risks: ["다른 사람 의견을 놓침", "혼자 책임을 떠안음", "통제하려는 사람처럼 보일 수 있음"],
    advice: "방향을 잡기 전에 한 번만 더 물어보면, 주도권이 압박이 아니라 안정감이 됩니다.",
  },
  defensive: {
    type: "defensive",
    name: "방어형 고슴도치",
    slug: "hedgehog",
    emblem: "🦔",
    imagePath: "/assets/persona-hedgehog.png",
    accent: "persona-hedgehog",
    title: "상처받기 전에 선 긋는 타입",
    summary: "당신은 가까워지기 전에 안전거리를 먼저 확인합니다.",
    detail:
      "사람들 앞에서 쉽게 열리기보다, 상대가 어떤 사람인지 확인할 때까지 방어적인 태도를 유지하기 쉽습니다.",
    reasons: ["상처받는 상황을 피하고 싶어서", "가까워졌다가 실망하는 게 싫어서", "내 영역을 지키고 싶어서"],
    viewedAs: ["선이 분명한 사람", "쉽게 흔들리지 않는 사람", "다가가기 어려운 사람"],
    risks: ["좋은 관계도 늦게 열림", "오해받기 쉬움", "방어가 습관이 됨"],
    advice: "선은 필요하지만, 모든 사람에게 같은 높이의 벽이 필요하진 않습니다.",
  },
  performative: {
    type: "performative",
    name: "연출형 공작",
    slug: "peacock",
    emblem: "🦚",
    imagePath: "/assets/persona-peacock.png",
    accent: "persona-peacock",
    title: "보여지는 나를 꽤 신경 쓰는 타입",
    summary: "당신은 내 모습이 어떻게 읽히는지 꽤 민감하게 보는 사람입니다.",
    detail:
      "사람들 앞에서 있는 그대로보다 조금 더 정리되고 인상적인 모습으로 보이고 싶은 마음이 강할 수 있습니다.",
    reasons: ["좋게 기억되고 싶어서", "평가받는 시선을 의식해서", "내 이미지를 직접 관리하고 싶어서"],
    viewedAs: ["센스 있는 사람", "인상적인 사람", "조금은 연출된 사람"],
    risks: ["진짜 상태와 이미지가 멀어짐", "반응에 흔들림", "있는 그대로 쉬기 어려움"],
    advice: "잘 보이고 싶은 마음은 자연스럽지만, 모든 순간을 무대처럼 살 필요는 없습니다.",
  },
};

function getInitialScores(): PersonaScores {
  return {
    coping: 0,
    pleasing: 0,
    aloof: 0,
    competent: 0,
    cheerful: 0,
    dominant: 0,
    defensive: 0,
    performative: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.3)));
}

export function calculatePersonaResult(answers: PersonaAnswerMap) {
  const scores = getInitialScores();

  personaQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as PersonaType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [PersonaType, number][];
  const mainType = sorted[0]?.[0] ?? "coping";
  const subType = sorted[1]?.[0] ?? "aloof";

  return {
    scores,
    mainType,
    subType,
    percent: toPercent(sorted[0]?.[1] ?? 0),
    profile: personaCharacters[mainType],
    subProfile: personaCharacters[subType],
  };
}

export function buildPersonaSharedResult(shared: PersonaScores) {
  const sorted = Object.entries(shared).sort((a, b) => b[1] - a[1]) as [PersonaType, number][];
  const mainType = sorted[0]?.[0] ?? "coping";
  const subType = sorted[1]?.[0] ?? "aloof";

  return {
    scores: shared,
    mainType,
    subType,
    percent: toPercent(sorted[0]?.[1] ?? 0),
    profile: personaCharacters[mainType],
    subProfile: personaCharacters[subType],
  };
}
