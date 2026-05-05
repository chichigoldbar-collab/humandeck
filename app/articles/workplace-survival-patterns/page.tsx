import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "회사에서 사람마다 버티는 방식이 다른 이유 | 휴먼덱",
  description:
    "같은 회사 생활에서도 누군가는 눈치로 버티고, 누군가는 주도하고, 누군가는 멘붕이 오는 이유를 설명합니다.",
  path: "/articles/workplace-survival-patterns",
  type: "article",
  keywords: ["회사 생활", "직장인 심리", "회사 스트레스", "직장 생존 패턴"],
});

export default function WorkplaceSurvivalPatternsArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "회사에서 사람마다 버티는 방식이 다른 이유",
          description:
            "같은 회사 생활에서도 누군가는 눈치로 버티고, 누군가는 주도하고, 누군가는 멘붕이 오는 이유를 설명합니다.",
          path: "/articles/workplace-survival-patterns",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "회사에서 사람마다 버티는 방식이 다른 이유",
            path: "/articles/workplace-survival-patterns",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>회사에서 사람마다 버티는 방식이 다른 이유</h1>
          <p>
            회사는 단순히 일을 처리하는 공간이 아니라 평가, 속도, 인간관계, 책임이 동시에
            작동하는 공간입니다. 그래서 같은 업무를 하더라도 누군가는 눈치로 살아남고,
            누군가는 버티고, 누군가는 바로 주도권을 잡으려 하고, 또 누군가는 쉽게 과부하를
            느낄 수 있습니다.
          </p>

          <div className="policy-section">
            <h2>회사 안의 반응은 능력보다 긴장 관리와 더 가까울 수 있습니다</h2>
            <p>
              업무 역량이 충분한 사람도 평가 상황이나 애매한 지시 앞에서는 쉽게 긴장할 수
              있습니다. 반대로 아주 완벽하지 않아도 상황을 잘 읽고 무난하게 적응하는 사람도
              있습니다. 그래서 직장 내 피로는 능력 부족보다 긴장 처리 방식에서 오는 경우가
              적지 않습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>버티는 사람과 주도하는 사람은 에너지를 쓰는 방식이 다릅니다</h2>
            <p>
              버티기형은 조용히 책임을 감당하며 소모되는 편이고, 주도형은 답답함을 줄이기 위해
              앞에 나서며 에너지를 씁니다. 겉으로는 둘 다 열심히 일하는 것처럼 보일 수 있지만,
              피로의 원인과 회복 방식은 전혀 다를 수 있습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>회사 생존 패턴을 알면 덜 소모되는 환경을 찾기 쉬워집니다</h2>
            <p>
              내가 어떤 상황에서 멘붕이 오는지, 어떤 순간에 눈치를 과하게 보는지, 왜 자꾸
              참고 넘기게 되는지를 알면 일하는 방식을 조금씩 조정할 수 있습니다. 자기이해는
              회사를 그만두기 위한 도구가 아니라, 덜 무너지는 구조를 만들기 위한 힌트가 될 수
              있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
