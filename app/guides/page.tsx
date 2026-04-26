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
    | "/guides/stimulation-results"
    | "/guides/focus-results"
    | "/guides/stress-results"
    | "/guides/persona-results"
    | "/guides/music-results"
    | "/guides/movie-results"
    | "/guides/eat-results"
    | "/guides/couple-results"
    | "/guides/ghost-results";
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
  {
    href: "/guides/focus-results",
    title: "집중 성향 테스트는 어떤 작업 습관을 보여줄까",
    summary:
      "몰입, 동시 처리, 중간 이탈이 일과 공부 습관에 어떻게 드러나는지 읽어보는 설명형 가이드입니다.",
  },
  {
    href: "/guides/stress-results",
    title: "스트레스 관리 스타일 결과는 어떻게 읽으면 좋을까",
    summary:
      "회피, 해소, 해결, 과생각 반응이 생활 리듬과 피로도에 어떻게 연결되는지 정리했습니다.",
  },
  {
    href: "/guides/persona-results",
    title: "페르소나 테스트는 왜 겉모습 패턴을 볼까",
    summary:
      "사람들 앞에서 반복해서 꺼내는 사회적 반응 방식을 어떻게 이해하면 좋을지 정리한 가이드입니다.",
  },
  {
    href: "/guides/music-results",
    title: "플레이리스트 테스트는 무엇을 읽어내는 걸까",
    summary:
      "음악을 감정 정리용으로 쓰는지, 집중 배경으로 쓰는지, 습관처럼 두는지 해석하는 페이지입니다.",
  },
  {
    href: "/guides/movie-results",
    title: "영화 취향 테스트는 어디에서 몰입이 시작되는지를 보여줍니다",
    summary:
      "스토리, 감정, 자극, 해석, 연출 중 어떤 포인트가 취향의 핵심인지 설명형으로 정리했습니다.",
  },
  {
    href: "/guides/eat-results",
    title: "먹는 방식 테스트가 성향을 보여주는 이유",
    summary:
      "음식 선택 장면이 왜 일상 의사결정과 연결되는지 가볍고 현실적인 예시로 설명합니다.",
  },
  {
    href: "/guides/couple-results",
    title: "부부 관계 분석 테스트는 왜 네 축을 함께 볼까",
    summary:
      "갈등, 연결, 협업, 애정이 관계의 결을 어떻게 다르게 보여주는지 설명하는 관계 가이드입니다.",
  },
  {
    href: "/guides/ghost-results",
    title: "공포 반응 테스트는 무엇을 보여주는 걸까",
    summary:
      "감각 민감도, 공포 반응, 상상 개입도가 분위기 자극에 어떻게 작동하는지 정리한 가이드입니다.",
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
