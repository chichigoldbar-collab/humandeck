import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "관계 테스트 결과를 읽을 때 가장 먼저 봐야 할 것 | 휴먼덱",
  description:
    "관계·부부·페르소나 테스트 결과를 볼 때 메인 캐릭터보다 더 먼저 체크하면 좋은 포인트를 정리했습니다.",
  path: "/articles/relationship-test-reading",
  type: "article",
  keywords: ["관계 테스트", "부부 테스트", "페르소나 테스트", "결과 해석"],
});

export default function RelationshipTestReadingArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "관계 테스트 결과를 읽을 때 가장 먼저 봐야 할 것",
          description:
            "관계·부부·페르소나 테스트 결과를 볼 때 메인 캐릭터보다 더 먼저 체크하면 좋은 포인트를 정리했습니다.",
          path: "/articles/relationship-test-reading",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "관계 테스트 결과를 읽을 때 가장 먼저 봐야 할 것",
            path: "/articles/relationship-test-reading",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>관계 테스트 결과를 읽을 때 가장 먼저 봐야 할 것</h1>
          <p>
            관계 테스트를 하고 나면 보통 가장 먼저 캐릭터 이름에 시선이 갑니다. 하지만 실제로
            더 중요한 건 왜 그 결과가 나왔는지, 어떤 질문에서 비슷한 선택을 반복했는지 보는
            과정입니다. 메인 캐릭터는 요약이고, 패턴은 질문 안에 더 많이 들어 있습니다.
          </p>

          <div className="policy-section">
            <h2>메인 결과는 라벨, 반복 선택은 패턴입니다</h2>
            <p>
              예를 들어 회피형처럼 보이는 결과가 나와도, 실제로는 갈등을 피해서인지, 감정을
              숨겨서인지, 상대를 배려하느라 뒤로 빠지는지에 따라 해석이 달라집니다. 그래서
              결과 이름만 보지 말고 어떤 장면에서 같은 방향의 답을 골랐는지 확인하는 것이 더
              중요합니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>관계 결과는 혼자 있을 때의 나와 다를 수 있습니다</h2>
            <p>
              관계 테스트는 보통 타인 앞에서의 반응을 다룹니다. 평소엔 차분한 사람도 가까운
              관계 안에서는 훨씬 불안하거나 예민해질 수 있고, 반대로 감정 표현이 많은 사람도
              회사나 낯선 관계에서는 무심한 척할 수 있습니다. 그래서 결과는 맥락과 함께 읽는
              것이 좋습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>결과를 대화의 단서로 쓰면 더 유용합니다</h2>
            <p>
              관계 테스트는 나를 단정하기보다, “나는 이런 장면에서 이런 반응을 자주 하는구나”
              하는 대화의 시작점으로 쓰일 때 더 유용합니다. 특히 가까운 사람과 함께 보면,
              서로의 반복 패턴을 가볍게 꺼내 보는 계기가 될 수 있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
