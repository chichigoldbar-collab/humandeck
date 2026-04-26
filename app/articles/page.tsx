import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "읽을거리 | 휴먼덱",
  description:
    "스트레스, 번아웃, 생활 패턴, 자기이해와 관련된 휴먼덱 설명형 글 모음입니다.",
};

const articles: {
  href:
    | "/articles/stress-reactions"
    | "/articles/burnout-signs"
    | "/articles/avoidance-patterns"
    | "/articles/overthinking-patterns"
    | "/articles/stress-habits";
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
];

export default function ArticlesPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Articles</span>
        <h1>휴먼덱 읽을거리</h1>
        <p>
          휴먼덱은 테스트 결과만 제공하는 데서 끝나지 않고, 생활 패턴과 자기이해에 관한
          설명형 글도 함께 제공합니다. 아래 글은 스트레스, 번아웃, 과생각, 회피 패턴처럼
          많은 이용자가 궁금해하는 주제를 중심으로 정리한 원본 콘텐츠입니다.
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
  );
}
