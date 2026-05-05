import type { Metadata } from "next";
import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { buildBreadcrumbList, buildCollectionPage, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "읽을거리 | 휴먼덱",
  description:
    "스트레스, 번아웃, 자기이해, 테스트 해석, 취향과 생활 패턴을 다루는 휴먼덱 설명형 글 모음입니다.",
  path: "/articles",
  keywords: ["스트레스 관리", "번아웃", "과생각", "회피형 패턴", "자기이해 콘텐츠", "심리테스트 해석", "성격테스트 읽는 법"],
});

const articles: {
  href:
    | "/articles/stress-reactions"
    | "/articles/burnout-signs"
    | "/articles/avoidance-patterns"
    | "/articles/overthinking-patterns"
    | "/articles/stress-habits"
    | "/articles/personality-test-why-relatable"
    | "/articles/how-to-read-test-results"
    | "/articles/taste-tests-and-self-understanding"
    | "/articles/workplace-survival-patterns"
    | "/articles/relationship-test-reading"
    | "/articles/psychology-vs-personality-tests"
    | "/articles/why-situation-based-tests-work"
    | "/articles/how-to-choose-a-test";
  title: string;
  summary: string;
}[] = [
  {
    href: "/articles/stress-reactions",
    title: "스트레스를 받을 때 사람마다 반응이 다른 이유",
    summary:
      "같은 스트레스 상황에서도 누군가는 멈추고, 누군가는 움직이며, 누군가는 계속 생각하는 이유를 생활 패턴 중심으로 설명합니다.",
  },
  {
    href: "/articles/burnout-signs",
    title: "번아웃 오기 쉬운 사람의 특징",
    summary:
      "버티는 습관, 과한 책임감, 쉬는 방식의 부재가 왜 소진으로 이어질 수 있는지 정리한 글입니다.",
  },
  {
    href: "/articles/avoidance-patterns",
    title: "회피형 스트레스 대처를 줄이는 방법",
    summary:
      "미루기, 도피, 무기력처럼 보이는 반응이 어떻게 생기고, 일상에서 어떻게 완화할 수 있는지 설명합니다.",
  },
  {
    href: "/articles/overthinking-patterns",
    title: "생각이 많아서 더 지치는 사람의 패턴",
    summary:
      "과생각이 단순한 신중함과 다른 이유, 그리고 실행 타이밍을 늦추는 과정을 생활 장면으로 풀어봅니다.",
  },
  {
    href: "/articles/stress-habits",
    title: "스트레스 관리 습관을 만드는 법",
    summary:
      "거창한 계획보다 작은 루틴이 더 효과적인 이유와, 회복 습관을 붙이는 현실적인 방법을 정리했습니다.",
  },
  {
    href: "/articles/personality-test-why-relatable",
    title: "심리테스트 결과가 유난히 잘 맞는 것처럼 느껴지는 이유",
    summary:
      "행동 기반 질문, 자기 기억, 반복 패턴이 왜 테스트 결과를 더 현실적으로 느끼게 만드는지 설명합니다.",
  },
  {
    href: "/articles/how-to-read-test-results",
    title: "성향 테스트 결과를 너무 믿지 않으면서 잘 활용하는 방법",
    summary:
      "테스트 결과를 과신하지 않으면서도 생활 힌트로 활용할 수 있는 현실적인 읽는 법을 정리했습니다.",
  },
  {
    href: "/articles/taste-tests-and-self-understanding",
    title: "취향 테스트가 자기이해에 도움이 되는 이유",
    summary:
      "음악, 영화, 음식 같은 취향 테스트가 감정 처리와 생활 습관을 돌아보는 데 왜 유용한지 설명합니다.",
  },
  {
    href: "/articles/workplace-survival-patterns",
    title: "회사에서 사람마다 버티는 방식이 다른 이유",
    summary:
      "같은 회사 생활 안에서도 왜 누군가는 버티고, 누군가는 주도하고, 누군가는 멘붕이 오는지 설명합니다.",
  },
  {
    href: "/articles/relationship-test-reading",
    title: "관계 테스트 결과를 읽을 때 가장 먼저 봐야 할 것",
    summary:
      "메인 캐릭터보다 반복 선택과 관계 맥락을 먼저 봐야 하는 이유를 설명하는 결과 해석 글입니다.",
  },
  {
    href: "/articles/psychology-vs-personality-tests",
    title: "심리테스트와 성격테스트는 어떻게 다를까",
    summary:
      "심리테스트와 성격테스트가 무엇을 다르게 묻고, 어떻게 함께 보면 좋은지 정리한 설명형 글입니다.",
  },
  {
    href: "/articles/why-situation-based-tests-work",
    title: "상황형 질문 테스트가 더 몰입되는 이유",
    summary:
      "행동형·상황형 질문이 왜 더 답하기 쉽고 결과가 더 잘 맞는 것처럼 느껴지는지 설명합니다.",
  },
  {
    href: "/articles/how-to-choose-a-test",
    title: "나한테 맞는 심리테스트를 고르는 방법",
    summary:
      "관계형, 생활 패턴형, 취향형 테스트 중 지금 내 상황에 맞는 주제를 어떻게 고르면 좋은지 정리했습니다.",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <SeoJsonLd
        data={buildCollectionPage({
          name: "휴먼덱 읽을거리",
          description: "스트레스, 번아웃, 생활 패턴, 자기이해와 관련된 휴먼덱 설명형 글 모음",
          path: "/articles",
          items: articles.map((article) => ({
            name: article.title,
            path: article.href,
            description: article.summary,
          })),
        })}
      />
      <SeoJsonLd
        data={buildBreadcrumbList([
          { name: "홈", path: "/" },
          { name: "읽을거리", path: "/articles" },
        ])}
      />
      <main className="policy-shell">
        <section className="policy-card">
          <span className="eyebrow">Articles</span>
          <h1>휴먼덱 읽을거리</h1>
          <p>
            휴먼덱은 테스트 결과만 제공하는 데서 끝나지 않고, 생활 패턴과 자기이해에 관한
            설명형 글도 함께 제공합니다. 아래 글은 스트레스, 번아웃, 과생각 같은 생활 패턴뿐
            아니라 심리테스트를 읽는 법, 취향 테스트가 자기이해에 도움이 되는 이유, 회사와
            관계 안에서 반복되는 반응 같은 주제를 중심으로 정리한 원본 콘텐츠입니다.
          </p>

          <div className="faq-list">
            {articles.map((article) => (
              <article key={article.href} className="faq-card">
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <div className="content-link-row">
                  <Link href={article.href}>글 읽기</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
