import Link from "next/link";

type TestPath =
  | "/character"
  | "/judgment"
  | "/stimulation"
  | "/eat-type"
  | "/couple-type"
  | "/ghost-sense"
  | "/focus-type"
  | "/stress-type"
  | "/persona-type"
  | "/music-type"
  | "/movie-type";

const tests: {
  href: TestPath;
  badge: string;
  title: string;
  summary: string;
}[] = [
  {
    href: "/character",
    badge: "인간 캐릭터",
    title: "내 인간 캐릭터 테스트",
    summary: "관계, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 테스트",
  },
  {
    href: "/judgment",
    badge: "인지편향",
    title: "내 판단은 얼마나 틀렸을까?",
    summary: "확증편향, 손실회피, 앵커링 같은 판단 습관을 캐릭터처럼 보는 테스트",
  },
  {
    href: "/stimulation",
    badge: "도파민",
    title: "내 도파민은 얼마나 흔들릴까?",
    summary: "스크롤, 충동구매, 집중력 붕괴처럼 자극 반응 패턴을 보는 테스트",
  },
  {
    href: "/eat-type",
    badge: "먹는 방식",
    title: "먹는 방식 성격 테스트",
    summary: "라면, 배달 앱, 뷔페 선택만으로 캐릭터처럼 보는 먹는 습관 테스트",
  },
  {
    href: "/couple-type",
    badge: "부부 관계",
    title: "부부 관계 분석 테스트",
    summary: "갈등, 연결, 생활, 애정 네 축으로 관계 패턴을 보는 테스트",
  },
  {
    href: "/ghost-sense",
    badge: "공포 콘셉트",
    title: "귀신을 얼마나 느끼는 타입일까?",
    summary: "어두운 공간, 작은 소리, 이상한 기척에 어떻게 반응하는지 보는 어두운 테마 테스트",
  },
  {
    href: "/focus-type",
    badge: "자기계발",
    title: "집중 vs 멀티태스킹 성향 테스트",
    summary: "한 가지에 몰입하는지, 여러 일을 동시에 돌리는지 보는 작업 성향 테스트",
  },
  {
    href: "/stress-type",
    badge: "자기이해",
    title: "스트레스 관리 스타일 테스트",
    summary: "스트레스를 피하는지, 푸는지, 해결하는지 보는 스트레스 처리 패턴 테스트",
  },
  {
    href: "/persona-type",
    badge: "페르소나",
    title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까?",
    summary: "사람들 앞에서 반복해서 보여주는 겉모습 패턴을 캐릭터로 보는 테스트",
  },
  {
    href: "/music-type",
    badge: "플레이리스트",
    title: "내 플레이리스트가 말해주는 나의 진짜 성향",
    summary: "감정 정리, 집중, 추억, 즉흥 재생 등 음악 사용 패턴을 보는 테스트",
  },
  {
    href: "/movie-type",
    badge: "영화 취향",
    title: "내 영화 취향이 말해주는 나의 진짜 성향",
    summary: "스토리, 감정, 자극, 연출 중 어디에 먼저 몰입하는지 보는 영화 취향 테스트",
  },
];

export function RelatedTests({ current }: { current: TestPath }) {
  const visibleTests = tests.filter((test) => test.href !== current);

  return (
    <section className="panel related-tests-panel">
      <div className="panel-header">
        <span>다른 테스트도 이어서 보기</span>
        <h2>결과를 봤다면 다른 각도로도 나를 보면 더 재밌습니다</h2>
      </div>
      <div className="related-tests-grid">
        {visibleTests.map((test) => (
          <Link key={test.href} href={test.href} className="related-test-card">
            <span className="related-test-badge">{test.badge}</span>
            <strong>{test.title}</strong>
            <p>{test.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
