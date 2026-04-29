import type { Metadata } from "next";
import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildBreadcrumbList, buildCollectionPage, buildPageMetadata } from "@/lib/seo";

const psychologyTests = [
  {
    href: "/character",
    title: "내 인간 캐릭터 테스트",
    summary: "관계, 자극, 생각 습관, 자존감, 의사결정을 다섯 축으로 보는 대표 심리테스트",
  },
  {
    href: "/judgment",
    title: "내 판단은 얼마나 틀렸을까?",
    summary: "확증편향, 손실회피, 과잉확신 같은 인지편향을 읽는 심리테스트",
  },
  {
    href: "/stimulation",
    title: "내 도파민은 얼마나 흔들릴까?",
    summary: "스크롤과 충동구매, 집중 분산처럼 자극 반응을 보는 심리테스트",
  },
  {
    href: "/stress-type",
    title: "스트레스 관리 스타일 테스트",
    summary: "회피, 해소, 해결, 과생각으로 스트레스 처리 방식을 정리하는 자기이해 테스트",
  },
  {
    href: "/persona-type",
    title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까?",
    summary: "사람들 앞에서 드러나는 겉모습 패턴을 읽는 페르소나 심리테스트",
  },
  {
    href: "/focus-type",
    title: "집중 vs 멀티태스킹 성향 테스트",
    summary: "집중 몰입, 동시 처리, 중간 이탈 습관을 보는 자기계발 심리테스트",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "심리테스트 모음 | 휴먼덱",
  description:
    "관계, 인지편향, 도파민, 스트레스, 페르소나, 집중 습관까지 한곳에서 볼 수 있는 휴먼덱 심리테스트 모음입니다.",
  path: "/psychology-tests",
  keywords: ["심리테스트", "심리테스트 모음", "재미있는 심리테스트", "성향 심리테스트"],
});

export default function PsychologyTestsPage() {
  return (
    <>
      <SeoJsonLd
        data={buildCollectionPage({
          name: "심리테스트 모음",
          description:
            "관계, 인지편향, 도파민, 스트레스, 페르소나, 집중 습관을 읽어보는 휴먼덱 심리테스트 모음",
          path: "/psychology-tests",
          items: psychologyTests.map((test) => ({
            name: test.title,
            path: test.href,
            description: test.summary,
          })),
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "심리테스트 모음", path: "/psychology-tests" },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Psychology Tests</span>
          <h1>심리테스트 모음</h1>
          <p>
            휴먼덱의 심리테스트는 복잡한 진단 대신, 일상에서 반복되는 반응 패턴을 짧고 선명하게
            읽어내는 데 초점을 둡니다. 관계, 판단, 자극 반응, 스트레스 처리처럼 실제 생활에서 자주
            체감되는 주제를 중심으로 결과 카드와 상세 해설을 함께 제공합니다.
          </p>

          <div className="policy-section">
            <h2>어떤 심리테스트를 먼저 해보면 좋을까요?</h2>
            <p>
              내 성향을 넓게 보고 싶다면 인간 캐릭터 테스트, 내 판단 습관을 보고 싶다면 인지편향
              테스트, 자극 추구와 집중 흔들림이 궁금하다면 도파민 테스트가 잘 맞습니다. 스트레스와
              사회적 페르소나처럼 조금 더 현실적인 주제를 보고 싶다면 자기이해형 테스트부터 시작하는
              것도 좋습니다.
            </p>
          </div>

          <div className="faq-list">
            {psychologyTests.map((test) => (
              <article key={test.href} className="faq-card">
                <h2>{test.title}</h2>
                <p>{test.summary}</p>
                <div className="content-link-row">
                  <Link href={test.href}>심리테스트 시작하기</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
