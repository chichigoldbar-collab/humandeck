export type BaseballType =
  | "bluff"
  | "analysis"
  | "emotional"
  | "follower"
  | "rationalizer"
  | "trivia"
  | "confident"
  | "indifferent";

export type BaseballAnswerMap = Record<string, string>;

export type BaseballOption = {
  text: string;
  scores: Partial<Record<BaseballType, number>>;
};

export type BaseballQuestion = {
  id: number;
  text: string;
  options: BaseballOption[];
};

export type BaseballCharacter = {
  type: BaseballType;
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

type BaseballScores = Record<BaseballType, number>;

export const baseballQuestions: BaseballQuestion[] = [
  {
    id: 1,
    text: "친구가 '요즘 이 팀 왜 이렇게 못함?'이라고 물었다.",
    options: [
      { text: '"투수 운용이 문제야" 같은 말부터 던진다', scores: { bluff: 2, confident: 1 } },
      { text: '"그냥 요즘 흐름이 안 좋아" 정도로 말한다', scores: { emotional: 1, rationalizer: 1 } },
      { text: '"잘 모르겠는데?"라고 말한다', scores: { indifferent: 2, analysis: 1 } },
    ],
  },
  {
    id: 2,
    text: "경기 보다가 해설이 어려운 용어를 썼다.",
    options: [
      { text: "아는 척하면서 고개를 끄덕인다", scores: { bluff: 2, follower: 1 } },
      { text: "대충 느낌으로 이해하고 넘긴다", scores: { emotional: 1, follower: 1, rationalizer: 1 } },
      { text: "그냥 흘려듣는다", scores: { indifferent: 2, emotional: 1 } },
    ],
  },
  {
    id: 3,
    text: "경기 끝나고 결과가 나왔다.",
    options: [
      { text: '"내가 말했잖아" 느낌으로 설명한다', scores: { rationalizer: 2, confident: 1 } },
      { text: "결과를 보고 이유를 맞춰 생각한다", scores: { analysis: 1, rationalizer: 2 } },
      { text: "그냥 결과만 보고 끝낸다", scores: { indifferent: 2, emotional: 1 } },
    ],
  },
  {
    id: 4,
    text: "야구 얘기하다가 의견이 갈렸다.",
    options: [
      { text: "내 의견을 계속 밀어붙인다", scores: { confident: 2, bluff: 1 } },
      { text: '"그럴 수도 있지" 하고 넘긴다', scores: { analysis: 1, emotional: 1, indifferent: 1 } },
      { text: "남들 의견에 맞춰간다", scores: { follower: 2, bluff: 1 } },
    ],
  },
  {
    id: 5,
    text: "선수 이름이 헷갈릴 때 나는?",
    options: [
      { text: "아는 척하면서 얼버무린다", scores: { bluff: 2, confident: 1 } },
      { text: "기억나는 만큼만 말한다", scores: { analysis: 1, emotional: 1 } },
      { text: "그냥 검색해서 확인한다", scores: { analysis: 2, trivia: 1 } },
    ],
  },
  {
    id: 6,
    text: "누가 깊은 분석을 하기 시작했다.",
    options: [
      { text: "맞장구 치면서 끼어든다", scores: { follower: 1, bluff: 1, trivia: 1 } },
      { text: "듣고만 있다", scores: { analysis: 1, indifferent: 1 } },
      { text: "관심이 확 떨어진다", scores: { indifferent: 2, emotional: 1 } },
    ],
  },
  {
    id: 7,
    text: "경기 중 작전 상황이 나왔다.",
    options: [
      { text: '"이건 무조건 번트지" 같은 말이 바로 나온다', scores: { confident: 2, bluff: 1 } },
      { text: "상황을 보고 천천히 생각한다", scores: { analysis: 2, rationalizer: 1 } },
      { text: "솔직히 잘 모르겠다", scores: { indifferent: 2, follower: 1 } },
    ],
  },
  {
    id: 8,
    text: "야구 커뮤니티 글을 봤다.",
    options: [
      { text: "내가 아는 내용 위주로 공감한다", scores: { bluff: 1, confident: 1, emotional: 1 } },
      { text: "새로운 정보면 끝까지 읽어본다", scores: { analysis: 2, trivia: 1 } },
      { text: "그냥 넘긴다", scores: { indifferent: 2, emotional: 1 } },
    ],
  },
  {
    id: 9,
    text: "친구들이 야구 얘기할 때 나는?",
    options: [
      { text: "중심에서 이야기를 이끈다", scores: { confident: 2, bluff: 1 } },
      { text: "적당히 끼어든다", scores: { emotional: 1, follower: 1, analysis: 1 } },
      { text: "거의 안 끼어든다", scores: { indifferent: 2, emotional: 1 } },
    ],
  },
  {
    id: 10,
    text: "경기 중 해설이 틀린 것 같으면?",
    options: [
      { text: '"저거 아닌데"라고 바로 반응한다', scores: { confident: 2, trivia: 1 } },
      { text: "맞나 생각해본다", scores: { analysis: 2, rationalizer: 1 } },
      { text: "크게 신경 안 쓴다", scores: { indifferent: 2, follower: 1 } },
    ],
  },
  {
    id: 11,
    text: "야구를 볼 때 나는?",
    options: [
      { text: "흐름, 작전, 선수까지 다 본다", scores: { analysis: 2, trivia: 1 } },
      { text: "주요 장면 위주로 본다", scores: { emotional: 2, rationalizer: 1 } },
      { text: "그냥 틀어만 둔다", scores: { indifferent: 2, follower: 1 } },
    ],
  },
  {
    id: 12,
    text: '누가 "야구 잘 아네?"라고 하면?',
    options: [
      { text: "더 설명하려고 한다", scores: { trivia: 2, confident: 1 } },
      { text: "그냥 웃고 넘긴다", scores: { analysis: 1, emotional: 1 } },
      { text: "부담스럽다", scores: { indifferent: 2, follower: 1 } },
    ],
  },
];

export const baseballLabels: Record<BaseballType, string> = {
  bluff: "아는 척 지수",
  analysis: "진짜 분석력",
  emotional: "감정 응원력",
  follower: "분위기 적응력",
  rationalizer: "결과 합리화력",
  trivia: "잡지식 축적도",
  confident: "확신 밀어붙임",
  indifferent: "무관심도",
};

export const baseballCharacters: Record<BaseballType, BaseballCharacter> = {
  bluff: {
    type: "bluff",
    name: "얕은지식 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/baseball-fox.png",
    accent: "baseball-fox",
    title: "키워드만 알고 전문가처럼 말하는 타입",
    summary: "당신은 정보를 아는 것보다 아는 것처럼 보이는 흐름을 더 잘 타는 편입니다.",
    detail:
      "당신은 야구를 깊게 분석하기보다 핵심 키워드를 활용해 상황을 설명하는 데 익숙한 타입입니다. 완전히 모르는 상태는 불편해서, 최소한 흐름을 잡고 대화에는 들어가려는 경향이 있습니다.",
    reasons: [
      "대화 흐름을 놓치고 싶지 않음",
      "완전히 모른다는 느낌이 불편함",
      "짧은 정보로 빠르게 맥락을 잡으려 함",
    ],
    daily: [
      '"투수 운용 문제" 같은 말이 자주 먼저 나옴',
      "결과가 나온 뒤엔 설명이 더 자연스러워짐",
      "깊은 질문이 들어오면 살짝 얼버무릴 수 있음",
    ],
    advice: "모르면 모른다고 말하는 편이 오히려 더 설득력 있고, 진짜 관심도 더 빨리 자랍니다.",
  },
  analysis: {
    type: "analysis",
    name: "진짜분석 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/baseball-owl.png",
    accent: "baseball-owl",
    title: "데이터와 흐름을 같이 보는 진짜 팬",
    summary: "당신은 단순 결과보다 경기 흐름, 작전, 상황 맥락까지 같이 보려는 편입니다.",
    detail:
      "당신은 야구를 볼 때 눈앞의 점수보다 왜 그런 결과가 나왔는지까지 같이 보려는 타입입니다. 단순 응원이 아니라 경기 구조를 읽는 재미를 알고 있는 쪽에 가깝습니다.",
    reasons: [
      "표면적 결과보다 원인을 보고 싶어함",
      "상황 맥락과 흐름에 관심이 큼",
      "알수록 더 재밌어지는 종목으로 느끼는 편임",
    ],
    daily: [
      "해설의 맥락이나 작전 선택까지 같이 보게 됨",
      "커뮤니티에서 새로운 정보가 나오면 끝까지 읽어봄",
      "결과를 설명할 때도 왜 그랬는지를 먼저 말함",
    ],
    advice: "분석력은 강점이지만, 가끔은 그냥 좋아하는 팀을 편하게 보는 시간도 같이 가져가면 더 오래 즐길 수 있습니다.",
  },
  emotional: {
    type: "emotional",
    name: "감정응원 강아지",
    slug: "dog",
    emblem: "🐶",
    imagePath: "/assets/baseball-dog.png",
    accent: "baseball-dog",
    title: "이성보다 응원이 먼저인 타입",
    summary: "당신은 분석보다 팀과 선수에게 마음이 먼저 가는 응원형 팬에 가깝습니다.",
    detail:
      "당신에게 야구는 정보 싸움이라기보다 감정이 움직이는 경험입니다. 논리보다 기세, 분위기, 내가 응원하는 쪽의 흐름이 더 크게 느껴질 수 있습니다.",
    reasons: [
      "야구를 감정 경험으로 받아들이는 편임",
      "이성적 판단보다 응원 에너지가 먼저 움직임",
      "경기보다 팀에 대한 애착이 크기 쉬움",
    ],
    daily: [
      "잘하면 기세가 좋다고 느끼고, 못하면 분위기가 가라앉음",
      "분석보다 응원 포인트가 더 또렷함",
      "팀 얘기할 때 감정 표현이 자연스럽게 먼저 나옴",
    ],
    advice: "응원은 감정이 강점이지만, 한 발 떨어져 보면 야구가 더 오래 재밌어지는 장면도 분명 있습니다.",
  },
  follower: {
    type: "follower",
    name: "분위기타는 원숭이",
    slug: "monkey",
    emblem: "🐵",
    imagePath: "/assets/baseball-monkey.png",
    accent: "baseball-monkey",
    title: "남들 말에 맞춰서 아는 척하는 타입",
    summary: "당신은 내 확신보다 그 자리의 흐름과 분위기에 맞춰 움직이는 편입니다.",
    detail:
      "당신은 야구를 깊게 파고들기보다, 사람들이 떠드는 포인트를 따라가며 자연스럽게 끼어드는 타입입니다. 대화에서 소외되기보다는 무난하게 흐름을 타는 쪽이 더 편할 수 있습니다.",
    reasons: [
      "모임 흐름을 맞추는 데 익숙함",
      "내 의견보다 분위기를 먼저 살피는 편임",
      "야구를 정보보다 대화 소재로 받아들이는 경향이 있음",
    ],
    daily: [
      "주변 반응에 맞춰 고개를 끄덕이는 장면이 많음",
      "커뮤니티나 친구들 말에서 포인트를 가져오는 편임",
      "깊게 들어가기보단 적당히 맞춰가는 쪽이 편함",
    ],
    advice: "흐름을 잘 타는 것도 장점이지만, 한두 가지 기준만 제대로 잡아도 훨씬 자신 있게 말할 수 있습니다.",
  },
  rationalizer: {
    type: "rationalizer",
    name: "합리화 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/baseball-bear.png",
    accent: "baseball-bear",
    title: "결과가 나오면 항상 설명 가능한 타입",
    summary: "당신은 보기 전보다 본 뒤에 더 강해지는 해석형 팬입니다.",
    detail:
      "당신은 야구를 예측하기보다, 결과가 나온 다음 흐름을 정리하는 데 더 능숙한 편입니다. 장면이 지나간 뒤엔 왜 그랬는지 꽤 그럴듯하게 설명할 수 있습니다.",
    reasons: [
      "과정보다 정리 단계에서 힘이 살아남",
      "결과를 바탕으로 구조를 맞춰 생각하는 편임",
      "뒤늦게 그림을 그리는 감각이 좋음",
    ],
    daily: [
      '"결국 이래서 진 거야" 같은 말이 잘 나옴',
      "경기 끝난 뒤 설명이 더 자연스러워짐",
      "예측보다 사후 해석에서 자신감이 생김",
    ],
    advice: "정리 능력은 좋지만, 가끔은 결과가 나오기 전 기준도 스스로 세워보면 더 단단한 해석이 됩니다.",
  },
  trivia: {
    type: "trivia",
    name: "잡지식 문어",
    slug: "octopus",
    emblem: "🐙",
    imagePath: "/assets/baseball-octopus.png",
    accent: "baseball-octopus",
    title: "쓸데없이 많이 아는데 핵심은 흐릴 수 있는 타입",
    summary: "당신은 자잘한 정보와 맥락을 폭넓게 쌓아두는 편이라, 말이 길어질수록 더 강해집니다.",
    detail:
      "당신은 핵심 한 줄보다 주변 이야기, 선수 이력, 세세한 맥락을 많이 담아두는 타입입니다. 깊이는 분명 있지만, 가끔은 정보가 너무 많아서 정작 포인트가 흐려질 수 있습니다.",
    reasons: [
      "이것저것 연결해서 보는 재미를 느낌",
      "정보 자체를 쌓는 데 거부감이 적음",
      "야구를 파고드는 과정 자체를 즐기는 편임",
    ],
    daily: [
      "사람들이 모르는 디테일을 꺼내는 경우가 많음",
      "얘기하다 보면 곁가지 정보가 계속 붙음",
      "핵심보다 TMI가 먼저 튀어나올 때도 있음",
    ],
    advice: "아는 게 많은 건 강점입니다. 다만 한 문장으로 먼저 정리하고 디테일을 붙이면 훨씬 더 잘 전달됩니다.",
  },
  confident: {
    type: "confident",
    name: "확신과잉 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/baseball-wolf.png",
    accent: "baseball-wolf",
    title: "근거 없어도 확신으로 밀어붙이는 타입",
    summary: "당신은 정보가 모자라도 목소리와 확신으로 먼저 경기 해석을 밀어붙이는 편입니다.",
    detail:
      "당신은 야구 얘기를 할 때 판단의 속도가 빠르고, 주장이 선명한 편입니다. 문제는 근거가 충분하지 않아도 결론이 먼저 나오는 순간이 있다는 점입니다.",
    reasons: [
      "주저하기보다 말부터 나가는 편임",
      "확신 있는 태도가 대화에서 편하게 느껴짐",
      "정답을 빨리 내리고 싶어하는 경향이 있음",
    ],
    daily: [
      '"이건 무조건이지" 같은 표현이 자주 나옴',
      "해설이나 다른 의견에 빠르게 반응함",
      "근거보다 결론이 먼저 보일 때가 있음",
    ],
    advice: "확신은 힘이 되지만, 한 번만 더 근거를 붙이면 말의 무게가 훨씬 커집니다.",
  },
  indifferent: {
    type: "indifferent",
    name: "무관심 고양이",
    slug: "cat",
    emblem: "🐱",
    imagePath: "/assets/baseball-cat.png",
    accent: "baseball-cat",
    title: "아는 척도 귀찮은 타입",
    summary: "당신은 야구 지식을 드러내는 일 자체에 큰 에너지를 쓰지 않는 편입니다.",
    detail:
      "당신은 야구 얘기에서 앞서 나가려는 욕구가 강하지 않습니다. 굳이 자세히 몰라도 괜찮다고 느끼고, 경기나 커뮤니티를 틀어만 두는 쪽이 더 편할 수 있습니다.",
    reasons: [
      "야구를 깊게 말하는 데 큰 필요를 못 느낌",
      "모르는 걸 감추기보다 그냥 안 끼는 편이 편함",
      "관심을 크게 쓰지 않는 태도가 기본값일 수 있음",
    ],
    daily: [
      "결과만 대충 보고 넘어가는 날이 많음",
      "해설이나 작전 얘기에 크게 반응하지 않음",
      "아는 척보다는 무심한 쪽이 자연스러움",
    ],
    advice: "굳이 깊게 파지 않아도 괜찮습니다. 다만 정말 재밌는 포인트 하나만 잡아도 보는 재미가 꽤 달라질 수 있습니다.",
  },
};

function getInitialScores(): BaseballScores {
  return {
    bluff: 0,
    analysis: 0,
    emotional: 0,
    follower: 0,
    rationalizer: 0,
    trivia: 0,
    confident: 0,
    indifferent: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.2)));
}

export function calculateBaseballResult(answers: BaseballAnswerMap) {
  const scores = getInitialScores();

  baseballQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as BaseballType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [BaseballType, number][];
  const mainType = sorted[0]?.[0] ?? "analysis";
  const subType = sorted[1]?.[0] ?? "confident";

  return {
    scores,
    profile: baseballCharacters[mainType],
    subProfile: baseballCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}

export function buildBaseballSharedResult(scores: Record<BaseballType, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [BaseballType, number][];
  const mainType = sorted[0]?.[0] ?? "analysis";
  const subType = sorted[1]?.[0] ?? "confident";

  return {
    scores,
    profile: baseballCharacters[mainType],
    subProfile: baseballCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}
