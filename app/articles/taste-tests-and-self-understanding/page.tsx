import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildArticleSchema, buildBreadcrumbList, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "취향 테스트가 자기이해에 도움이 되는 이유 | 휴먼덱",
  description:
    "음악, 영화, 음식 같은 취향 테스트가 왜 성격과 생활 패턴을 돌아보는 데 도움이 되는지 설명합니다.",
  path: "/articles/taste-tests-and-self-understanding",
  type: "article",
  keywords: ["취향 테스트", "음악 테스트", "영화 테스트", "자기이해"],
});

export default function TasteTestsAndSelfUnderstandingArticle() {
  return (
    <>
      <SeoJsonLd
        data={buildArticleSchema({
          headline: "취향 테스트가 자기이해에 도움이 되는 이유",
          description:
            "음악, 영화, 음식 같은 취향 테스트가 왜 성격과 생활 패턴을 돌아보는 데 도움이 되는지 설명합니다.",
          path: "/articles/taste-tests-and-self-understanding",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
          {
            name: "취향 테스트가 자기이해에 도움이 되는 이유",
            path: "/articles/taste-tests-and-self-understanding",
          },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Article</span>
          <h1>취향 테스트가 자기이해에 도움이 되는 이유</h1>
          <p>
            취향 테스트는 가볍고 재미있어 보여도 의외로 많은 생활 정보를 담고 있습니다. 어떤
            음악에 끌리는지, 어떤 영화에 몰입하는지, 음식을 어떻게 고르는지는 단순한 기분을
            넘어서 감정 처리 방식, 집중 방식, 일상의 속도를 보여주기도 합니다.
          </p>

          <div className="policy-section">
            <h2>취향은 결국 반복 선택의 기록입니다</h2>
            <p>
              한 번의 취향보다 중요한 건 반복입니다. 비슷한 장르를 계속 찾고, 특정 분위기에
              자주 반응하고, 같은 순간마다 비슷한 선택을 한다면 그 안에는 생각보다 선명한
              패턴이 있습니다. 취향 테스트는 그 반복성을 짧은 질문으로 드러내려는 시도입니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>감정형 취향과 습관형 취향은 다르게 읽어야 합니다</h2>
            <p>
              어떤 사람은 취향을 감정 정리 도구로 쓰고, 어떤 사람은 배경처럼 생활에 깔아두는
              쪽으로 씁니다. 같은 음악이나 영화라도 누군가에게는 몰입의 대상이고, 누군가에게는
              익숙함을 주는 루틴일 수 있습니다. 그래서 취향 결과는 좋고 나쁨이 아니라 사용
              방식의 차이로 읽는 편이 더 현실적입니다.
            </p>
          </div>

          <div className="policy-section">
            <h2>취향 테스트는 나를 덜 방어적으로 보게 만듭니다</h2>
            <p>
              관계나 성격을 직접 묻는 질문은 방어심을 자극할 수 있지만, 취향 질문은 상대적으로
              부담이 적습니다. 그래서 오히려 더 자연스럽게 “나는 이런 순간에 이런 걸 찾는구나”
              하는 패턴을 확인하게 됩니다. 자기이해 콘텐츠로서 취향 테스트가 꾸준히 사랑받는
              이유도 여기에 있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
