import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "나한테 맞는 심리테스트를 고르는 방법 | 휴먼덱",
  description:
    "관계, 판단, 스트레스, 취향 테스트 중 지금 내 상황에 맞는 테스트를 고르는 기준을 정리했습니다.",
  path: "/articles/how-to-choose-a-test",
  type: "article",
  keywords: ["심리테스트 추천", "성격테스트 추천", "나한테 맞는 테스트", "테스트 고르는 법"],
});

export default function HowToChooseATestArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "나한테 맞는 심리테스트를 고르는 방법",
          description:
            "관계, 판단, 스트레스, 취향 테스트 중 지금 내 상황에 맞는 테스트를 고르는 기준을 정리했습니다.",
          path: "/articles/how-to-choose-a-test",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "나한테 맞는 심리테스트를 고르는 방법",
            path: "/articles/how-to-choose-a-test",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>나한테 맞는 심리테스트를 고르는 방법</h1>
          <p>
            심리테스트가 많아질수록 오히려 어떤 걸 먼저 해야 할지 애매해질 수 있습니다. 중요한 건
            “정답 테스트”를 찾는 것이 아니라, 지금 내가 가장 궁금한 장면과 가까운 주제를 고르는 것입니다.
            관계가 궁금한지, 판단 습관이 궁금한지, 스트레스 처리나 취향 패턴이 궁금한지에 따라 시작점이
            달라질 수 있습니다.
          </p>

          <div className="policy-section">
            <h2>관계가 신경 쓰이면 관계형 테스트가 먼저입니다</h2>
            <p>
              연애, 인간관계, 부부 관계처럼 타인과의 반복 패턴이 궁금하다면 관계형 테스트가 가장 먼저
              잘 맞습니다. 이런 테스트는 감정 표현, 거리감, 갈등 처리처럼 사람 사이에서 튀어나오는 반응을
              보여주기 때문에 현재 고민과 더 직접적으로 닿는 경우가 많습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>내 생활 리듬이 궁금하면 스트레스, 도파민, 집중 테스트가 좋습니다</h2>
            <p>
              요즘 왜 자꾸 흐트러지는지, 왜 미루는지, 왜 집중이 안 되는지가 궁금하다면 생활 패턴형 테스트가
              더 도움이 됩니다. 스트레스 관리, 도파민 반응, 집중 성향 테스트는 생활 리듬과 피로도를 읽는
              데 더 직접적입니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>가볍게 시작하고 싶다면 취향 테스트가 편합니다</h2>
            <p>
              음악, 영화, 음식처럼 취향을 다루는 테스트는 진입 장벽이 낮고 결과를 거부감 없이 읽기 좋습니다.
              그래서 처음 휴먼덱을 보는 사람이라면 취향 테스트로 시작한 뒤, 더 궁금한 축이 생기면 관계형이나
              생활 패턴형 테스트로 넘어가는 흐름도 잘 맞습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
