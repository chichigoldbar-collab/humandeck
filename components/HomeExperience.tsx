import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

const tests: {
  href: "/character" | "/judgment" | "/stimulation";
  badge: string;
  title: string;
  summary: string;
  meta: string;
  pickFor: string;
  accent: string;
}[] = [
  {
    href: "/character",
    badge: "인기 테스트",
    title: "내 인간 캐릭터 테스트",
    summary: "관계, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 읽어내는 휴먼덱 대표 테스트",
    meta: "15문항 · 결과 5개",
    pickFor: "내 패턴을 넓게 보고 싶을 때",
    accent: "home-card-character",
  },
  {
    href: "/judgment",
    badge: "신규 테스트",
    title: "내 판단은 얼마나 틀렸을까?",
    summary: "확증편향부터 선택 과부하까지, 내 판단 습관이 어디서 흔들리는지 보여주는 테스트",
    meta: "12문항 · 메인 편향 + 서브 성향",
    pickFor: "내 선택 습관을 찔러보고 싶을 때",
    accent: "home-card-judgment",
  },
  {
    href: "/stimulation",
    badge: "신규 테스트",
    title: "내 도파민은 얼마나 흔들릴까?",
    summary: "스크롤, 충동구매, 집중력 붕괴처럼 일상 속 도파민 반응 패턴을 보는 테스트",
    meta: "12문항 · 메인 결과 + 서브 성향",
    pickFor: "내 뇌 습관과 도파민 패턴이 궁금할 때",
    accent: "home-card-stimulation",
  },
];

export function HomeExperience() {
  return (
    <main className="shell">
      <section className="hero-card home-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">가볍게 눌렀는데 생각보다 오래 남는 테스트</span>
          <h1>
            지금의 나를
            <br />
            조금 더 선명하게
            <br />
            보는 방법
          </h1>
          <div className="hero-inline-copy">
            <span>3분 안에 끝나는 테스트</span>
            <span>공유하고 싶은 결과 카드</span>
            <span>친구랑 비교하면 더 재밌음</span>
          </div>
        </div>

        <div className="hero-preview home-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">대표 테스트</span>
            <strong>내 인간 캐릭터 테스트</strong>
            <p>왜 늘 비슷한 관계 패턴이 반복되는지 캐릭터처럼 읽어내는 테스트</p>
          </article>
          <article className="preview-card secondary">
            <strong>내 판단은 얼마나 틀렸을까?</strong>
            <p>확신, 첫인상, 손해 회피가 판단을 어떻게 흔드는지 보는 테스트</p>
          </article>
          <article className="preview-quote">
            <p>"재밌게 했는데, 결과가 너무 나 같아서 저장하게 된다."</p>
          </article>
        </div>
      </section>

      <section className="panel home-intro-panel">
        <div className="panel-header">
          <span>이렇게 시작해보세요</span>
          <h2>지금 보고 싶은 게 무엇인지에 따라 고르면 됩니다</h2>
        </div>
        <div className="home-intro-grid">
          <article className="home-intro-card">
            <strong>내 성향을 넓게 보고 싶다면</strong>
            <p>관계, 자극, 생각 습관까지 한 번에 묶어서 보는 인간 캐릭터 테스트가 더 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>내 판단 습관을 찔러보고 싶다면</strong>
            <p>확증편향, 과잉확신, 선택 과부하처럼 선택의 흔들림을 보는 판단 테스트가 더 재밌어요.</p>
          </article>
          <article className="home-intro-card">
            <strong>둘 다 해도 결과 결이 다릅니다</strong>
            <p>하나는 내가 어떤 사람인지, 다른 하나는 내가 어떻게 판단하는지를 보여줍니다.</p>
          </article>
          <article className="home-intro-card">
            <strong>내 도파민 반응이 궁금하다면</strong>
            <p>왜 자꾸 폰을 보게 되는지, 왜 빠른 재미에 끌리는지 보는 도파민 테스트가 잘 맞아요.</p>
          </article>
        </div>
      </section>

      <section className="panel home-panel">
        <div className="panel-header">
          <span>지금 열려 있는 테스트</span>
          <h2>오늘은 어떤 쪽부터 볼까요?</h2>
        </div>

        <div className="home-test-grid">
          {tests.map((test) => (
            <article key={test.href} className={`home-test-card ${test.accent}`}>
              <span className="home-test-badge">{test.badge}</span>
              <h3>{test.title}</h3>
              <p>{test.summary}</p>
              <div className="home-test-meta">
                <strong>{test.meta}</strong>
                <span>{test.pickFor}</span>
              </div>
              <Link className="primary-button home-test-link" href={test.href}>
                이 테스트 시작하기
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
