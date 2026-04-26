export type MovieType =
  | "narrative"
  | "emotional"
  | "stimulus"
  | "analysis"
  | "casual"
  | "visual"
  | "escape"
  | "explorer";

export type MovieAnswerMap = Record<string, string>;

export type MovieOption = {
  text: string;
  scores: Partial<Record<MovieType, number>>;
};

export type MovieQuestion = {
  id: number;
  text: string;
  options: MovieOption[];
};

export type MovieCharacter = {
  type: MovieType;
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

type MovieScores = Record<MovieType, number>;

export const movieQuestions: MovieQuestion[] = [
  {
    id: 1,
    text: "영화를 고르려고 OTT를 켰다. 가장 먼저 보는 건?",
    options: [
      { text: "평점, 리뷰부터 확인한다", scores: { narrative: 2, analysis: 1 } },
      { text: "썸네일이나 분위기 보고 끌리는 걸 고른다", scores: { visual: 2, emotional: 1 } },
      { text: "그냥 지금 기분에 맞는 걸 고른다", scores: { casual: 1, escape: 1, explorer: 1 } },
    ],
  },
  {
    id: 2,
    text: "영화 시작 10분이 지났는데 살짝 지루하다.",
    options: [
      { text: "참고 본다. 스토리가 궁금해서", scores: { narrative: 2, analysis: 1 } },
      { text: "그냥 끈다", scores: { stimulus: 2, casual: 1 } },
      { text: "배속하거나 대충 넘긴다", scores: { stimulus: 2, escape: 1 } },
    ],
  },
  {
    id: 3,
    text: "영화를 보고 나서 가장 오래 남는 건?",
    options: [
      { text: "스토리 구조나 전개", scores: { narrative: 2, analysis: 1 } },
      { text: "캐릭터 감정", scores: { emotional: 2, escape: 1 } },
      { text: "특정 장면이나 연출", scores: { visual: 2, explorer: 1 } },
    ],
  },
  {
    id: 4,
    text: "친구가 '이 영화 어려워'라고 한다.",
    options: [
      { text: "오히려 더 보고 싶어진다", scores: { analysis: 2, explorer: 1 } },
      { text: "굳이 안 본다", scores: { casual: 2, stimulus: 1 } },
      { text: "상황 보고 결정한다", scores: { explorer: 1, narrative: 1, emotional: 1 } },
    ],
  },
  {
    id: 5,
    text: "눈물 나는 장면이 나오면?",
    options: [
      { text: "감정이 확 올라온다", scores: { emotional: 2, escape: 1 } },
      { text: "상황은 이해하지만 덜 몰입한다", scores: { narrative: 1, casual: 1 } },
      { text: "연출이 더 눈에 들어온다", scores: { visual: 2, analysis: 1 } },
    ],
  },
  {
    id: 6,
    text: "액션 영화 볼 때 나는?",
    options: [
      { text: "시원하고 좋다", scores: { stimulus: 2, escape: 1 } },
      { text: "적당하면 괜찮다", scores: { explorer: 1, casual: 1 } },
      { text: "너무 많으면 피곤하다", scores: { narrative: 1, emotional: 1, casual: 1 } },
    ],
  },
  {
    id: 7,
    text: "영화 엔딩이 애매하게 끝났다.",
    options: [
      { text: "의미 해석하려고 찾아본다", scores: { analysis: 2, narrative: 1 } },
      { text: "그냥 그런가보다 한다", scores: { casual: 2, explorer: 1 } },
      { text: "찝찝해서 별로다", scores: { narrative: 2, emotional: 1 } },
    ],
  },
  {
    id: 8,
    text: "영화 고를 때 나는?",
    options: [
      { text: "특정 장르 위주로 본다", scores: { narrative: 1, stimulus: 1, emotional: 1 } },
      { text: "그때그때 다르다", scores: { casual: 1, explorer: 2 } },
      { text: "새로운 장르도 자주 시도한다", scores: { explorer: 2, analysis: 1 } },
    ],
  },
  {
    id: 9,
    text: "느리고 잔잔한 영화는?",
    options: [
      { text: "잘 맞는다", scores: { emotional: 1, analysis: 1, visual: 1 } },
      { text: "상황 따라 다름", scores: { explorer: 1, casual: 1 } },
      { text: "거의 못 본다", scores: { stimulus: 2, escape: 1 } },
    ],
  },
  {
    id: 10,
    text: "영화 보면서 나는?",
    options: [
      { text: "집중해서 본다", scores: { narrative: 1, emotional: 1, analysis: 1 } },
      { text: "중간중간 딴 생각한다", scores: { casual: 2, escape: 1 } },
      { text: "폰도 같이 본다", scores: { stimulus: 2, casual: 1 } },
    ],
  },
  {
    id: 11,
    text: "영화 추천 받을 때 나는?",
    options: [
      { text: "평 좋은 작품 위주", scores: { narrative: 2, analysis: 1 } },
      { text: "취향 맞는 사람 추천", scores: { emotional: 2, visual: 1 } },
      { text: "그냥 끌리는 것", scores: { casual: 1, explorer: 1, stimulus: 1 } },
    ],
  },
  {
    id: 12,
    text: "영화는 나에게?",
    options: [
      { text: "이야기 경험", scores: { narrative: 2, analysis: 1 } },
      { text: "감정 경험", scores: { emotional: 2, escape: 1 } },
      { text: "시간 보내기", scores: { casual: 2, stimulus: 1 } },
    ],
  },
];

export const movieLabels: Record<MovieType, string> = {
  narrative: "스토리 집착형",
  emotional: "감정 몰입형",
  stimulus: "자극 추구형",
  analysis: "해석 분석형",
  casual: "가벼움 추구형",
  visual: "연출 집착형",
  escape: "몰입 도피형",
  explorer: "취향 확장형",
};

export const movieCharacters: Record<MovieType, MovieCharacter> = {
  narrative: {
    type: "narrative",
    name: "서사집착 사자",
    slug: "lion",
    emblem: "🦁",
    imagePath: "/assets/movie-lion.svg",
    accent: "movie-lion",
    title: "이야기가 말이 돼야 몰입하는 타입",
    summary:
      "당신은 '이 장면 왜 이렇게 됐지?'가 납득되지 않으면 아무리 화려해도 쉽게 빠져들지 않습니다.",
    detail:
      "당신은 영화에서 가장 중요하게 보는 것이 이야기의 흐름과 완성도입니다. 감정이나 비주얼보다 먼저 전개가 설득력 있는지부터 보게 되는 편입니다.",
    reasons: [
      "논리적인 전개를 중요하게 생각함",
      "감정보다 구조를 먼저 보는 경향이 있음",
      "몰입 기준이 꽤 높은 편임",
    ],
    daily: [
      "스토리 허술하면 바로 집중이 식음",
      "반전, 구조, 떡밥 회수를 특히 좋아함",
      "'이걸 왜 이렇게 풀었지?'를 자주 생각함",
    ],
    advice: "가끔은 완벽하지 않은 이야기라도 장면과 감정만으로 즐겨보는 여유도 필요합니다.",
  },
  emotional: {
    type: "emotional",
    name: "감정몰입 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/movie-wolf.svg",
    accent: "movie-wolf",
    title: "캐릭터 감정에 깊게 빠지는 타입",
    summary:
      "당신은 영화 속 사건보다 사람의 감정선과 관계 변화에 더 오래 머무는 편입니다.",
    detail:
      "당신은 영화를 볼 때 줄거리보다 캐릭터가 어떤 마음으로 움직이는지를 더 크게 받아들입니다. 감정이 살아 있으면 느린 영화도 충분히 몰입할 수 있는 타입입니다.",
    reasons: [
      "사람의 감정선을 강하게 따라가는 편임",
      "관계 변화와 분위기에 민감함",
      "기억에 남는 건 사건보다 사람인 경우가 많음",
    ],
    daily: [
      "슬픈 장면에서 감정이 크게 올라옴",
      "좋아하는 캐릭터가 생기면 영화 전체가 더 좋아짐",
      "추천할 때도 줄거리보다 감정을 먼저 말함",
    ],
    advice: "감정 몰입이 강점이지만, 가끔은 한 발 떨어져 구조를 보면 작품이 더 풍부하게 읽힐 수 있습니다.",
  },
  stimulus: {
    type: "stimulus",
    name: "자극추구 치타",
    slug: "cheetah",
    emblem: "🐆",
    imagePath: "/assets/movie-cheetah.svg",
    accent: "movie-cheetah",
    title: "지루하면 바로 집중 끊기는 타입",
    summary:
      "당신은 속도, 에너지, 긴장감이 있어야 영화 안으로 빠르게 들어가는 편입니다.",
    detail:
      "당신은 호흡이 느리거나 전개가 오래 준비되는 작품보다, 초반부터 에너지가 살아 있는 영화를 선호합니다. 영화는 몰입보다 체감이 먼저여야 하는 타입에 가깝습니다.",
    reasons: [
      "정적인 장면보다 움직임과 텐션에 반응함",
      "전개가 느리면 집중을 유지하기 어려움",
      "영화를 경험보다 자극으로 받아들이는 편임",
    ],
    daily: [
      "지루하면 금방 다른 작품으로 넘어감",
      "액션, 스릴러, 빠른 편집에 강하게 반응함",
      "영화 보면서 폰을 보게 되는 순간이 빨리 옴",
    ],
    advice: "빠른 몰입이 강점이지만, 느린 작품을 가끔 끝까지 보면 취향이 의외로 넓어질 수 있습니다.",
  },
  analysis: {
    type: "analysis",
    name: "해석중독 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/movie-owl.svg",
    accent: "movie-owl",
    title: "보고 나서 생각하는 게 더 중요한 타입",
    summary:
      "당신은 영화를 보는 시간만큼 보고 난 뒤 의미를 해석하는 시간을 중요하게 여깁니다.",
    detail:
      "당신은 영화가 끝난 다음에야 진짜 감상이 시작되는 타입입니다. 상징, 메시지, 숨은 의미를 찾는 과정 자체가 영화 경험의 큰 부분을 차지합니다.",
    reasons: [
      "장면과 대사의 의미를 연결해보는 걸 좋아함",
      "여운과 해석 과정에서 만족을 느낌",
      "난해한 작품도 오히려 더 흥미롭게 느낄 수 있음",
    ],
    daily: [
      "엔딩 해석이나 리뷰를 찾아보는 편임",
      "보고 나서 한참 생각이 이어짐",
      "메시지가 없는 작품은 다소 허전하게 느껴질 수 있음",
    ],
    advice: "해석하는 힘은 분명한 강점이지만, 모든 작품을 꼭 풀어야 한다는 부담은 조금 내려놔도 괜찮습니다.",
  },
  casual: {
    type: "casual",
    name: "가벼움추구 다람쥐",
    slug: "squirrel",
    emblem: "🐿",
    imagePath: "/assets/movie-squirrel.svg",
    accent: "movie-squirrel",
    title: "편하게 볼 수 있는 게 중요한 타입",
    summary:
      "당신은 영화를 과하게 무겁게 보기보다 편안하고 부담 없이 즐길 수 있는지부터 보는 편입니다.",
    detail:
      "당신에게 영화는 분석 과제보다 쉬는 시간에 가까운 경험입니다. 너무 무겁거나 소모적인 작품보다는 편하게 볼 수 있는 작품에 더 마음이 갑니다.",
    reasons: [
      "에너지를 너무 많이 쓰는 작품은 피곤하게 느껴짐",
      "가볍게 쉬면서 볼 수 있는 작품을 선호함",
      "복잡한 해석보다 자연스러운 재미가 중요함",
    ],
    daily: [
      "코미디나 힐링물에 손이 자주 감",
      "애매한 엔딩도 그냥 흘려보내는 편임",
      "영화를 볼 때 편안한 분위기를 중요하게 여김",
    ],
    advice: "편안함을 우선하는 취향도 분명한 취향입니다. 가끔은 조금 낯선 작품을 하나씩 섞어보는 것도 재미가 됩니다.",
  },
  visual: {
    type: "visual",
    name: "연출집착 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/movie-fox.svg",
    accent: "movie-fox",
    title: "스토리보다 어떻게 보여주느냐를 보는 타입",
    summary:
      "당신은 이야기 그 자체보다 장면의 구성, 색감, 미장센, 연출 톤에 더 강하게 끌립니다.",
    detail:
      "당신은 영화가 무엇을 말하느냐만큼 어떻게 보여주느냐를 중요하게 봅니다. 잘 짜인 한 장면이 전체 서사만큼 오래 기억에 남는 타입입니다.",
    reasons: [
      "비주얼과 분위기에 반응하는 감각이 큼",
      "장면의 결이나 톤에 예민함",
      "영화를 이미지 경험으로 받아들이는 편임",
    ],
    daily: [
      "특정 장면과 컷이 오래 남음",
      "스토리보다 감독 연출이 먼저 떠오를 때가 있음",
      "예고편, 포스터, 썸네일의 영향도 큰 편임",
    ],
    advice: "연출을 읽는 감각이 좋다면, 가끔은 구조가 단단한 영화도 같이 보면 취향의 깊이가 더 살아납니다.",
  },
  escape: {
    type: "escape",
    name: "현실회피 곰",
    slug: "bear",
    emblem: "🐻",
    imagePath: "/assets/movie-bear.svg",
    accent: "movie-bear",
    title: "현실을 잊으려고 영화 보는 타입",
    summary:
      "당신은 영화를 분석보다 잠깐 다른 세계로 들어가는 도피처처럼 쓰는 편입니다.",
    detail:
      "당신에게 영화는 단순한 콘텐츠가 아니라 현실을 잠시 끊어주는 몰입 공간에 가깝습니다. 스토리나 장르보다 현재 기분을 얼마나 데려가 주는지가 더 중요할 수 있습니다.",
    reasons: [
      "영화가 감상보다 휴식과 도피 역할을 함",
      "현실과 다른 리듬으로 넘어가고 싶어함",
      "감정보다 몰입 공간 자체를 찾는 편임",
    ],
    daily: [
      "피곤한 날엔 더 영화가 당김",
      "지금 기분과 맞는 작품을 고르는 편임",
      "다 보고 나면 내용보다 쉬었다는 느낌이 큼",
    ],
    advice: "영화가 좋은 피난처가 될 수 있지만, 너무 지칠 때는 짧은 휴식 자체도 같은 만큼 필요할 수 있습니다.",
  },
  explorer: {
    type: "explorer",
    name: "취향확장 문어",
    slug: "octopus",
    emblem: "🐙",
    imagePath: "/assets/movie-octopus.svg",
    accent: "movie-octopus",
    title: "장르 안 가리고 이것저것 보는 타입",
    summary:
      "당신은 한 장르에 머무르기보다 새로운 영화 언어와 취향을 계속 넓혀가는 편입니다.",
    detail:
      "당신은 영화 취향을 고정하기보다 계속 탐색하는 타입입니다. 오늘은 잔잔한 영화, 내일은 실험적인 영화도 괜찮은 식으로 스스로의 폭을 넓히는 데 거부감이 적습니다.",
    reasons: [
      "낯선 장르에도 비교적 열려 있음",
      "한 가지 패턴에 오래 머무르지 않음",
      "새로운 영화 경험에서 재미를 느낌",
    ],
    daily: [
      "추천 받으면 일단 저장해두는 편임",
      "장르를 바꿔가며 보는 일이 많음",
      "한 가지 취향으로만 설명되지 않는 편임",
    ],
    advice: "탐색력이 큰 강점이지만, 정말 잘 맞는 취향 몇 개를 스스로 정리해두면 만족도가 더 높아질 수 있습니다.",
  },
};

function getInitialScores(): MovieScores {
  return {
    narrative: 0,
    emotional: 0,
    stimulus: 0,
    analysis: 0,
    casual: 0,
    visual: 0,
    escape: 0,
    explorer: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.2)));
}

export function calculateMovieResult(answers: MovieAnswerMap) {
  const scores = getInitialScores();

  movieQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as MovieType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [MovieType, number][];
  const mainType = sorted[0]?.[0] ?? "narrative";
  const subType = sorted[1]?.[0] ?? "analysis";

  return {
    scores,
    profile: movieCharacters[mainType],
    subProfile: movieCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}

export function buildMovieSharedResult(scores: Record<MovieType, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [MovieType, number][];
  const mainType = sorted[0]?.[0] ?? "narrative";
  const subType = sorted[1]?.[0] ?? "analysis";

  return {
    scores,
    profile: movieCharacters[mainType],
    subProfile: movieCharacters[subType],
    percent: toPercent(scores[mainType]),
  };
}
