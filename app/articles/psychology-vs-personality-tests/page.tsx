import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "심리테스트와 성격테스트는 어떻게 다를까 | 휴먼덱",
  description:
    "심리테스트와 성격테스트가 비슷해 보이지만 무엇을 다르게 묻고 어떻게 다르게 읽으면 좋은지 설명합니다.",
  path: "/articles/psychology-vs-personality-tests",
  type: "article",
  keywords: ["심리테스트", "성격테스트", "심리테스트 차이", "성격테스트 차이"],
});

export default function PsychologyVsPersonalityTestsArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "심리테스트와 성격테스트는 어떻게 다를까",
          description:
            "심리테스트와 성격테스트가 비슷해 보이지만 무엇을 다르게 묻고 어떻게 다르게 읽으면 좋은지 설명합니다.",
          path: "/articles/psychology-vs-personality-tests",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "심리테스트와 성격테스트는 어떻게 다를까",
            path: "/articles/psychology-vs-personality-tests",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>심리테스트와 성격테스트는 어떻게 다를까</h1>
          <p>
            심리테스트와 성격테스트는 온라인에서 거의 같은 말처럼 쓰이지만, 실제로는 초점을
            조금 다르게 두는 경우가 많습니다. 심리테스트가 현재의 반응 패턴이나 판단 습관,
            감정 처리 방식을 넓게 다룬다면, 성격테스트는 반복적으로 드러나는 캐릭터나 취향,
            관계 방식처럼 조금 더 익숙한 자기 이미지를 보여주는 쪽에 가깝습니다.
          </p>

          <div className="policy-section">
            <h2>심리테스트는 반응과 상태를 더 자주 다룹니다</h2>
            <p>
              인지편향, 스트레스 처리, 도파민 반응, 공포 반응 같은 주제는 “내가 어떤 사람인가”
              보다 “어떤 상황에서 어떻게 반응하는가”를 묻는 편에 가깝습니다. 그래서 결과도
              현재의 패턴이나 생활 리듬을 해석하는 방향으로 읽는 것이 더 자연스럽습니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>성격테스트는 더 익숙하고 공유하기 쉬운 언어를 씁니다</h2>
            <p>
              음식, 음악, 영화, 사람들 앞의 모습처럼 일상 속 장면을 통해 성격을 읽어내는 테스트는
              상대적으로 부담이 적고 결과를 친구와 공유하기 쉽습니다. 그래서 성격테스트는 취향이나
              관계 장면을 캐릭터화해서 보여주는 경우가 많고, 결과 문장도 더 가볍고 직관적인 편입니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>실제로는 둘을 함께 보는 편이 더 도움이 됩니다</h2>
            <p>
              한 사람 안에는 성격과 상태가 같이 존재합니다. 예를 들어 평소엔 차분한 사람도 압박을
              받으면 충동적으로 반응할 수 있고, 외향적으로 보이는 사람도 혼자 있을 때는 감정 정리에
              오래 머물 수 있습니다. 그래서 심리테스트와 성격테스트를 함께 보면 한 방향보다 더 입체적인
              힌트를 얻을 수 있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
