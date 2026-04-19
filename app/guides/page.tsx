import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "해설 가이드 | 휴먼덱",
  description:
    "휴먼덱 테스트를 더 깊게 이해할 수 있도록 각 테스트 주제와 결과 해석 포인트를 정리한 가이드 모음입니다.",
};

const guides: {
  href:
    | "/guides/character-results"
    | "/guides/judgment-results"
    | "/guides/stimulation-results";
  title: string;
  summary: string;
}[] = [
  {
    href: "/guides/character-results",
    title: "인간 캐릭터 테스트는 무엇을 보는 걸까",
    summary:
      "애착, 자극, 생각 습관, 자존감, 의사결정을 함께 보는 이유와 결과를 읽을 때 참고하면 좋은 포인트를 정리했습니다.",
  },
  {
    href: "/guides/judgment-results",
    title: "인지편향 테스트 결과는 어떻게 해석하면 좋을까",
    summary:
      "확증편향, 손실회피, 과잉확신처럼 판단을 흔드는 요인을 일상 선택에 어떻게 연결해서 볼 수 있는지 설명합니다.",
  },
  {
    href: "/guides/stimulation-results",
    title: "도파민 반응 테스트가 말해주는 생활 패턴",
    summary:
      "빠른 보상, 충동성, 집중 분산 같은 반응이 왜 나타나는지와 결과를 실생활에 적용하는 방법을 정리했습니다.",
  },
];

export default function GuidesPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guides</span>
        <h1>휴먼덱 해설 가이드</h1>
        <p>
          테스트 결과는 짧고 직관적으로 보이지만, 각 결과가 어떤 질문 패턴에서 나왔는지
          함께 보면 더 도움이 됩니다. 아래 가이드는 휴먼덱 테스트를 조금 더 깊게 읽고 싶은
          이용자를 위해 정리한 설명형 콘텐츠입니다.
        </p>

        <div className="faq-list">
          {guides.map((guide) => (
            <article key={guide.href} className="faq-card">
              <h2>{guide.title}</h2>
              <p>{guide.summary}</p>
              <div className="content-link-row">
                <Link href={guide.href}>가이드 읽기</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
