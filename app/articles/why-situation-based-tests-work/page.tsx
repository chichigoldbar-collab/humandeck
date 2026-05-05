import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "상황형 질문 테스트가 더 몰입되는 이유 | 휴먼덱",
  description:
    "추상적인 자기평가보다 상황형 질문 테스트가 더 재미있고 결과가 납득되는 이유를 설명합니다.",
  path: "/articles/why-situation-based-tests-work",
  type: "article",
  keywords: ["상황형 질문", "심리테스트 질문", "몰입형 테스트", "성향 테스트"],
});

export default function WhySituationBasedTestsWorkArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "상황형 질문 테스트가 더 몰입되는 이유",
          description:
            "추상적인 자기평가보다 상황형 질문 테스트가 더 재미있고 결과가 납득되는 이유를 설명합니다.",
          path: "/articles/why-situation-based-tests-work",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "상황형 질문 테스트가 더 몰입되는 이유",
            path: "/articles/why-situation-based-tests-work",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>상황형 질문 테스트가 더 몰입되는 이유</h1>
          <p>
            “당신은 내향적인가요?” 같은 질문보다 “대화가 끊긴 자리에서 먼저 말을 꺼내는 편인가요?”
            같은 질문이 훨씬 잘 떠오르고 답하기 쉬운 이유가 있습니다. 사람은 추상적인 자기개념보다
            구체적인 장면 속 반응을 더 빠르게 떠올리기 때문입니다. 상황형 질문은 바로 그 점을 활용합니다.
          </p>

          <div className="policy-section">
            <h2>장면이 떠오르면 답이 더 빨라집니다</h2>
            <p>
              실제로 겪어본 비슷한 장면이 떠오르면 사람은 길게 계산하지 않고도 답을 고를 수 있습니다.
              이 과정이 자연스럽기 때문에 테스트가 덜 부담스럽고, 몰입감도 더 높아집니다. 짧은 시간 안에
              패턴이 모이기 쉬운 이유도 여기에 있습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>행동 질문은 방어를 조금 줄여줍니다</h2>
            <p>
              성격을 직접 묻는 질문은 “나는 그런 사람 아니야”라고 방어하기 쉽지만, 행동을 묻는 질문은
              “생각해보니 그럴 때가 있네”처럼 받아들이기 쉽습니다. 그래서 결과도 더 찔리면서도 납득되는
              경우가 많습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>몰입형 테스트가 재미있는 이유는 스토리성 때문입니다</h2>
            <p>
              숲에서 길을 잃거나, 좀비 상황을 상상하거나, 회사 안에서 애매한 지시를 받는 장면처럼 작은
              서사가 붙으면 사용자는 자연스럽게 자신을 대입합니다. 이 몰입감이 결과에 대한 관심도와 공유
              욕구를 함께 높여줍니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
