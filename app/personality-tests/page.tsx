import type { Metadata } from "next";
import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildBreadcrumbList, buildCollectionPage, buildPageMetadata } from "@/lib/seo";

const personalityTests = [
  {
    href: "/character",
    title: "내 인간 캐릭터 테스트",
    summary: "관계, 자극, 생각 습관, 자존감, 의사결정까지 함께 보는 종합 성격테스트",
  },
  {
    href: "/eat-type",
    title: "먹는 방식 성격 테스트",
    summary: "메뉴 선택과 먹는 습관으로 일상 성향을 읽는 생활형 성격테스트",
  },
  {
    href: "/music-type",
    title: "내 플레이리스트가 말해주는 나의 진짜 성향",
    summary: "음악을 쓰는 방식으로 감정과 몰입 패턴을 읽는 취향 성격테스트",
  },
  {
    href: "/movie-type",
    title: "내 영화 취향이 말해주는 나의 진짜 성향",
    summary: "스토리, 감정, 자극, 연출 중 어디에 먼저 몰입하는지 보는 취향 성격테스트",
  },
  {
    href: "/persona-type",
    title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까?",
    summary: "사람들 앞에서 반복해서 보여주는 겉모습 패턴을 읽는 사회적 성격테스트",
  },
  {
    href: "/focus-type",
    title: "집중 vs 멀티태스킹 성향 테스트",
    summary: "일과 공부 장면에서 드러나는 집중 습관을 읽는 자기계발 성격테스트",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "성격테스트 모음 | 휴먼덱",
  description:
    "관계, 먹는 습관, 음악, 영화, 페르소나, 집중 습관까지 다양한 주제를 다루는 휴먼덱 성격테스트 모음입니다.",
  path: "/personality-tests",
  keywords: ["성격테스트", "성격테스트 모음", "재미있는 성격테스트", "취향 성격테스트"],
});

export default function PersonalityTestsPage() {
  return (
    <>
      <SeoJsonLd
        data={buildCollectionPage({
          name: "성격테스트 모음",
          description:
            "관계, 먹는 습관, 음악, 영화, 페르소나, 집중 습관을 읽어보는 휴먼덱 성격테스트 모음",
          path: "/personality-tests",
          items: personalityTests.map((test) => ({
            name: test.title,
            path: test.href,
            description: test.summary,
          })),
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "성격테스트 모음", path: "/personality-tests" },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Personality Tests</span>
          <h1>성격테스트 모음</h1>
          <p>
            휴먼덱의 성격테스트는 성격을 딱 잘라 규정하기보다, 생활 습관과 취향 속에서 반복해서
            드러나는 반응 패턴을 캐릭터와 해설 문장으로 정리하는 데 목적이 있습니다. 부담 없이
            시작할 수 있으면서도 결과는 꽤 찔리는 방향으로 구성되어 있습니다.
          </p>

          <div className="policy-section">
            <h2>가볍게 시작하기 좋은 성격테스트는 무엇인가요?</h2>
            <p>
              먹는 방식, 음악 취향, 영화 취향처럼 일상과 취향을 다루는 테스트는 진입 장벽이 낮고
              공유하기도 쉽습니다. 반면 인간 캐릭터 테스트나 페르소나 테스트는 조금 더 넓은 패턴을
              함께 보기에 스스로를 길게 해석하고 싶은 이용자에게 잘 맞습니다.
            </p>
          </div>

          <div className="faq-list">
            {personalityTests.map((test) => (
              <article key={test.href} className="faq-card">
                <h2>{test.title}</h2>
                <p>{test.summary}</p>
                <div className="content-link-row">
                  <Link href={test.href}>성격테스트 시작하기</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
