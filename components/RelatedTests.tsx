import Link from "next/link";

type TestPath = "/character" | "/judgment" | "/stimulation";

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
