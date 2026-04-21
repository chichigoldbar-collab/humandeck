import Link from "next/link";

type TestPath =
  | "/character"
  | "/judgment"
  | "/stimulation"
  | "/eat-type"
  | "/couple-type"
  | "/ghost-sense"
  | "/focus-type";

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
