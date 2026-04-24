export type MusicType =
  | "emotional"
  | "stimulus"
  | "focus"
  | "nostalgia"
  | "background"
  | "curation"
  | "spontaneous"
  | "immersive";

export type MusicAnswerMap = Record<string, string>;

export type MusicOption = {
  text: string;
  scores: Partial<Record<MusicType, number>>;
};

export type MusicQuestion = {
  id: number;
  text: string;
  options: MusicOption[];
};

export type MusicCharacter = {
  type: MusicType;
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

type MusicScores = Record<MusicType, number>;

export const musicQuestions: MusicQuestion[] = [
  {
    id: 1,
    text: "퇴근하거나 집에 돌아오는 길, 이어폰을 꽂았다. 가장 먼저 하는 행동은?",
    options: [
      { text: "오늘 기분에 맞는 노래부터 찾는다", scores: { emotional: 2, immersive: 1 } },
      { text: "늘 듣던 플레이리스트를 틀어둔다", scores: { background: 1, focus: 1 } },
      { text: "아무거나 추천 리스트에서 틀어본다", scores: { spontaneous: 2, stimulus: 1 } },
    ],
  },
  {
    id: 2,
    text: "기분이 확 가라앉은 날이다.",
    options: [
      { text: "일부러 더 슬픈 노래를 찾아서 듣는다", scores: { emotional: 2, nostalgia: 1 } },
      { text: "분위기 바꿀 수 있는 밝은 음악을 튼다", scores: { stimulus: 2, spontaneous: 1 } },
      { text: "그냥 음악 없이 가만히 있는다", scores: { immersive: 1, background: 1 } },
    ],
  },
  {
    id: 3,
    text: "작업이나 공부를 시작할 때 나는?",
    options: [
      { text: "집중 잘 되는 음악을 따로 틀어둔다", scores: { focus: 2, curation: 1 } },
      { text: "음악은 있는데 크게 신경 안 쓴다", scores: { background: 2, focus: 1 } },
      { text: "음악 있으면 오히려 집중 안 된다", scores: { immersive: 1, spontaneous: 1 } },
    ],
  },
  {
    id: 4,
    text: "플레이리스트를 만들 때 나는?",
    options: [
      { text: "분위기/흐름까지 생각해서 정리한다", scores: { curation: 2, focus: 1 } },
      { text: "좋아하는 곡 그냥 모아둔다", scores: { background: 1, spontaneous: 1 } },
      { text: "플레이리스트 잘 안 만든다", scores: { spontaneous: 2, immersive: 1 } },
    ],
  },
  {
    id: 5,
    text: "예전에 자주 듣던 노래를 우연히 들었다.",
    options: [
      { text: "그 시절 기억이 확 떠오른다", scores: { nostalgia: 2, emotional: 1 } },
      { text: "그냥 좋네 하고 듣는다", scores: { background: 1, focus: 1 } },
      { text: "금방 다른 노래로 넘어간다", scores: { spontaneous: 2, stimulus: 1 } },
    ],
  },
  {
    id: 6,
    text: "운동하거나 이동할 때 음악은?",
    options: [
      { text: "텐션 올라가는 음악 위주", scores: { stimulus: 2, spontaneous: 1 } },
      { text: "상황에 맞게 아무거나", scores: { background: 1, spontaneous: 1 } },
      { text: "굳이 음악 안 듣기도 함", scores: { focus: 1, immersive: 1 } },
    ],
  },
  {
    id: 7,
    text: "음악을 듣다가 마음에 드는 곡이 나오면?",
    options: [
      { text: "바로 저장하고 플레이리스트에 넣는다", scores: { curation: 2, background: 1 } },
      { text: "그냥 듣고 넘긴다", scores: { background: 2, focus: 1 } },
      { text: "반복해서 계속 듣는다", scores: { immersive: 2, emotional: 1 } },
    ],
  },
  {
    id: 8,
    text: "혼자 있는 시간에 음악을 듣는다면?",
    options: [
      { text: "깊게 몰입해서 듣는다", scores: { immersive: 2, emotional: 1 } },
      { text: "배경처럼 틀어둔다", scores: { background: 2, focus: 1 } },
      { text: "그때그때 생각나는 걸 튼다", scores: { spontaneous: 2, stimulus: 1 } },
    ],
  },
  {
    id: 9,
    text: "노래 한 곡을 듣다가 질리면?",
    options: [
      { text: "바로 다른 곡으로 넘어간다", scores: { spontaneous: 2, stimulus: 1 } },
      { text: "끝까지 듣는다", scores: { focus: 2, immersive: 1 } },
      { text: "비슷한 느낌의 곡 더 찾는다", scores: { curation: 1, nostalgia: 1 } },
    ],
  },
  {
    id: 10,
    text: "새로운 음악을 찾는 방식은?",
    options: [
      { text: "내가 직접 찾고 탐색한다", scores: { curation: 2, immersive: 1 } },
      { text: "추천 리스트나 알고리즘 본다", scores: { background: 1, spontaneous: 1 } },
      { text: "친구나 SNS에서 발견", scores: { stimulus: 1, spontaneous: 2 } },
    ],
  },
  {
    id: 11,
    text: "감정이 복잡할 때 나는?",
    options: [
      { text: "음악으로 정리하려 한다", scores: { emotional: 2, immersive: 1 } },
      { text: "음악보단 다른 걸 한다", scores: { focus: 1, background: 1 } },
      { text: "음악 틀어놓고 그냥 흘려보낸다", scores: { background: 2, nostalgia: 1 } },
    ],
  },
  {
    id: 12,
    text: "나에게 음악은?",
    options: [
      { text: "감정을 정리하는 도구", scores: { emotional: 2, nostalgia: 1 } },
      { text: "집중이나 분위기 만드는 요소", scores: { focus: 2, background: 1 } },
      { text: "그냥 습관처럼 있는 것", scores: { background: 2, spontaneous: 1 } },
    ],
  },
];

export const musicLabels: Record<MusicType, string> = {
  emotional: "감정 해소형",
  stimulus: "자극 추구형",
  focus: "몰입형",
  nostalgia: "추억형",
  background: "배경형",
  curation: "큐레이션형",
  spontaneous: "즉흥형",
  immersive: "자기세계형",
};

export const musicCharacters: Record<MusicType, MusicCharacter> = {
  emotional: {
    type: "emotional",
    name: "감정잠수 고래",
    slug: "whale",
    emblem: "🐋",
    imagePath: "/assets/music-whale.png",
    accent: "music-whale",
    title: "감정을 음악으로 끝까지 파고드는 타입",
    summary: "당신은 음악을 듣는 게 아니라 감정을 깊게 내려가는 도구로 사용합니다.",
    detail:
      "당신은 음악을 단순한 배경이 아니라 감정을 직접 건드리는 도구로 사용하는 타입입니다.",
    reasons: ["감정을 외부로 표현하기보다 음악으로 흡수함", "혼자 정리하는 시간이 중요함", "분위기보다 감정 깊이가 중요함"],
    daily: ["슬플 때 일부러 더 깊은 음악 찾음", "특정 시기와 음악이 강하게 연결됨", "플레이리스트가 감정 기록 역할을 함"],
    advice: "감정에 잠수하는 것도 좋지만, 가끔은 밖으로 꺼내는 것도 필요합니다.",
  },
  stimulus: {
    type: "stimulus",
    name: "비트중독 치타",
    slug: "cheetah",
    emblem: "🐆",
    imagePath: "/assets/music-cheetah.png",
    accent: "music-cheetah",
    title: "텐션과 비트로 기분을 끌어올리는 타입",
    summary: "당신에게 음악은 감상보다 에너지를 끌어올리는 스위치에 가깝습니다.",
    detail:
      "기분이 가라앉을 때도, 몸을 움직여야 할 때도 당신은 빠르고 강한 자극으로 상태를 끌어올리는 음악을 찾는 편입니다.",
    reasons: ["정적인 감정보다 에너지 전환이 중요함", "비트가 감정보다 먼저 들어옴", "몸의 리듬과 텐션에 민감함"],
    daily: ["운동이나 이동 중 템포 빠른 곡 선호", "지루하면 바로 더 센 곡으로 넘어감", "기분 조절을 음악으로 즉시 시도함"],
    advice: "기분을 끌어올리는 음악이 강점이지만, 가끔은 텐션을 낮추는 음악도 회복에 도움이 됩니다.",
  },
  focus: {
    type: "focus",
    name: "집중장인 부엉이",
    slug: "owl",
    emblem: "🦉",
    imagePath: "/assets/music-owl.png",
    accent: "music-owl",
    title: "작업과 몰입을 위해 음악을 쓰는 타입",
    summary: "당신에게 음악은 감정 표현보다 몰입 환경을 만드는 도구에 가깝습니다.",
    detail:
      "당신은 음악을 감상용보다 집중용으로 활용하는 편입니다. 상황에 맞는 소리와 흐름이 작업 리듬을 잡아주는 쪽에 더 가깝습니다.",
    reasons: ["집중 상태를 만들기 위해 음악을 씀", "감정보다 효율과 흐름을 중요하게 봄", "방해 없는 배경을 선호함"],
    daily: ["공부/작업용 플레이리스트를 따로 둠", "소리 자체보다 집중 유지가 중요함", "반복 재생에도 크게 지루하지 않음"],
    advice: "익숙한 몰입 루틴이 강점이지만, 쉬는 시간에는 완전히 소리를 끄는 회복도 필요합니다.",
  },
  nostalgia: {
    type: "nostalgia",
    name: "회상형 해달",
    slug: "otter",
    emblem: "🦦",
    imagePath: "/assets/music-otter.png",
    accent: "music-otter",
    title: "과거와 감정, 기억에 잠기는 타입",
    summary: "당신은 음악을 들을 때 곡 자체보다 그때의 장면과 감정이 함께 살아납니다.",
    detail:
      "당신에게 음악은 현재의 배경이 아니라 기억의 보관함 같은 역할을 합니다. 한 곡이 시절과 사람, 감정을 통째로 불러오는 편입니다.",
    reasons: ["기억과 감정 연결이 강함", "과거의 공기를 음악으로 다시 느끼고 싶어함", "노래가 시간 기록처럼 남아 있음"],
    daily: ["예전 노래 한 곡에 오래 머묾", "특정 시절 플레이리스트가 따로 있음", "추억이 음악 선택에 큰 영향을 줌"],
    advice: "회상은 당신의 감수성이지만, 현재 기분을 위해 새 음악을 들이는 공간도 조금 남겨두면 좋습니다.",
  },
  background: {
    type: "background",
    name: "배경소음 카피바라",
    slug: "capybara",
    emblem: "🐿",
    imagePath: "/assets/music-capybara.png",
    accent: "music-capybara",
    title: "그냥 틀어놓는 것이 중요한 타입",
    summary: "당신에게 음악은 감상 대상이라기보다 생활의 배경을 채우는 공기와 비슷합니다.",
    detail:
      "당신은 음악을 집중하거나 감정 정리하는 도구로 적극적으로 쓰기보다, 일상에 자연스럽게 깔아두는 편입니다. 조용함보다 적당한 소리가 있는 상태가 더 편할 수 있습니다.",
    reasons: ["침묵보다 익숙한 소리가 편함", "음악이 생활 리듬의 일부가 됨", "선곡보다 존재감 자체가 중요함"],
    daily: ["집이나 이동 중 늘 틀어둠", "곡 하나보다 전체 분위기가 중요함", "추천 리스트나 늘 듣던 목록에 익숙함"],
    advice: "배경형의 편안함도 강점이지만, 가끔은 한 곡에만 집중해보는 경험이 감정 해석에 도움 될 수 있습니다.",
  },
  curation: {
    type: "curation",
    name: "플레이리스트 장인 여우",
    slug: "fox",
    emblem: "🦊",
    imagePath: "/assets/music-fox.png",
    accent: "music-fox",
    title: "선곡과 흐름, 감성을 중요하게 보는 타입",
    summary: "당신은 음악을 소비하는 것보다 구성하고 배열하는 과정까지 즐기는 편입니다.",
    detail:
      "당신은 노래 하나보다 플레이리스트 전체 흐름을 중요하게 봅니다. 어떤 곡이 다음에 와야 하는지, 감정선이 어떻게 이어지는지가 꽤 중요할 수 있습니다.",
    reasons: ["음악에도 흐름과 장면이 중요함", "좋은 선곡 자체에 만족감을 느낌", "취향을 정리하는 과정이 즐거움"],
    daily: ["상황별 플레이리스트를 잘 만듦", "새 곡을 찾으면 저장부터 함", "순서와 분위기에 민감함"],
    advice: "큐레이션이 강점인 만큼, 가끔은 계획 없이 흘러가는 음악도 들어보면 취향이 더 넓어질 수 있습니다.",
  },
  spontaneous: {
    type: "spontaneous",
    name: "즉흥재생 토끼",
    slug: "rabbit",
    emblem: "🐰",
    imagePath: "/assets/music-rabbit.png",
    accent: "music-rabbit",
    title: "그때그때 끌리는 대로 듣는 타입",
    summary: "당신은 계획된 선곡보다 지금 당장 귀에 꽂히는 음악을 더 신뢰합니다.",
    detail:
      "당신은 플레이리스트를 치밀하게 관리하기보다 그 순간의 기분과 상황에 맞춰 바로바로 음악을 고르는 편입니다. 빠른 전환과 즉흥성이 당신의 핵심 패턴입니다.",
    reasons: ["그날 기분 변화가 큼", "정리된 목록보다 즉시 반응이 중요함", "새롭고 낯선 음악에도 비교적 열려 있음"],
    daily: ["질리면 바로 다음 곡으로 넘어감", "추천 알고리즘과 우연한 발견을 즐김", "한 곡에 오래 머무르지 않음"],
    advice: "즉흥성이 당신의 재미라면, 정말 좋았던 곡만 따로 남기는 작은 습관을 만들어보세요.",
  },
  immersive: {
    type: "immersive",
    name: "혼자몰입 늑대",
    slug: "wolf",
    emblem: "🐺",
    imagePath: "/assets/music-wolf.png",
    accent: "music-wolf",
    title: "혼자만의 세계에 깊게 들어가는 타입",
    summary: "당신은 음악을 통해 외부보다 내 안쪽으로 더 깊이 들어가는 편입니다.",
    detail:
      "당신은 음악을 틀어두는 것이 아니라, 음악 안으로 들어가는 쪽에 가깝습니다. 한 곡이나 한 분위기에 오래 머물며 자기만의 세계에 깊게 잠기는 타입입니다.",
    reasons: ["혼자 있는 시간의 밀도가 중요함", "곡 하나에 오래 머무는 편", "외부 소음보다 내 감각 안쪽에 집중함"],
    daily: ["좋아하는 곡을 반복 재생함", "혼자 듣는 시간이 더 중요함", "음악이 감정뿐 아니라 세계관 역할을 함"],
    advice: "혼자 깊게 들어가는 힘은 강점이지만, 가끔은 밖의 리듬과 연결되는 음악도 회복에 도움이 됩니다.",
  },
};

function getInitialScores(): MusicScores {
  return {
    emotional: 0,
    stimulus: 0,
    focus: 0,
    nostalgia: 0,
    background: 0,
    curation: 0,
    spontaneous: 0,
    immersive: 0,
  };
}

function toPercent(score: number) {
  return Math.min(96, Math.max(58, Math.round(56 + score * 4.2)));
}

export function calculateMusicResult(answers: MusicAnswerMap) {
  const scores = getInitialScores();

  musicQuestions.forEach((question) => {
    const answerKey = answers[String(question.id)];
    if (!answerKey) return;

    const selected = question.options[Number(answerKey)];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([type, value]) => {
      scores[type as MusicType] += value ?? 0;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [MusicType, number][];
  const mainType = sorted[0]?.[0] ?? "emotional";
  const subType = sorted[1]?.[0] ?? "nostalgia";

  return {
    scores,
    mainType,
    subType,
    percent: toPercent(sorted[0]?.[1] ?? 0),
    profile: musicCharacters[mainType],
    subProfile: musicCharacters[subType],
  };
}

export function buildMusicSharedResult(shared: MusicScores) {
  const sorted = Object.entries(shared).sort((a, b) => b[1] - a[1]) as [MusicType, number][];
  const mainType = sorted[0]?.[0] ?? "emotional";
  const subType = sorted[1]?.[0] ?? "nostalgia";

  return {
    scores: shared,
    mainType,
    subType,
    percent: toPercent(sorted[0]?.[1] ?? 0),
    profile: musicCharacters[mainType],
    subProfile: musicCharacters[subType],
  };
}
