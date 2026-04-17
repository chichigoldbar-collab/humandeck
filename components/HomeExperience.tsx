import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

const tests: {
  href: "/character" | "/judgment";
  badge: string;
  title: string;
  summary: string;
  meta: string;
  reaction: string;
  accent: string;
}[] = [
  {
    href: "/character",
    badge: "인기 테스트",
    title: "내 인간 캐릭터 테스트",
    summary: "관계, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 휴먼덱 대표 테스트",
    meta: "15문항 · 결과 5개",
    reaction: "친구랑 같이 돌려보면 더 재밌는 타입",
    accent: "home-card-character",
  },
  {
    href: "/judgment",
    badge: "신규 테스트",
    title: "내 판단은 얼마나 틀렸을까?",
    summary: "확증편향부터 선택 과부하까지, 내 판단 습관이 어디서 흔들리는지 보여주는 테스트",
    meta: "12문항 · 메인 편향 + 서브 성향",
    reaction: "웃으면서 시작했다가 조금 뜨끔해지는 타입",
    accent: "home-card-judgment",
  },
];

export function HomeExperience() {
  return (
    <main className="shell">
      <section className="hero-card home-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">가볍게 시작해도, 결과는 은근 오래 남습니다</span>
          <h1>
            휴먼덱
            <br />
            테스트 홈
          </h1>
          <p>
            지금은 두 가지 테스트가 열려 있습니다.
            <br />
            내 인간관계 패턴을 볼 수도 있고,
            <br />
            내 판단 습관이 얼마나 흔들리는지도 볼 수 있어요.
          </p>
          <div className="hero-inline-copy">
            <span>모바일 우선</span>
            <span>공유하기 좋은 결과 카드</span>
            <span>광고 흐름 포함</span>
          </div>
        </div>

        <div className="hero-preview home-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">대표 테스트</span>
            <strong>내 인간 캐릭터 테스트</strong>
            <p>내 관계 패턴과 자극 성향을 캐릭터처럼 읽어내는 테스트</p>
          </article>
          <article className="preview-card secondary">
            <strong>내 판단은 얼마나 틀렸을까?</strong>
            <p>확신, 첫인상, 손해 회피가 판단을 어떻게 흔드는지 보는 테스트</p>
          </article>
          <article className="preview-quote">
            <p>"가볍게 눌렀는데 생각보다 나를 잘 안다."</p>
          </article>
        </div>
      </section>

      <section className="panel home-panel">
        <div className="panel-header">
          <span>지금 열려 있는 테스트</span>
          <h2>원하는 방향부터 바로 들어가세요</h2>
        </div>

        <div className="home-test-grid">
          {tests.map((test) => (
            <article key={test.href} className={`home-test-card ${test.accent}`}>
              <span className="home-test-badge">{test.badge}</span>
              <h3>{test.title}</h3>
              <p>{test.summary}</p>
              <div className="home-test-meta">
                <strong>{test.meta}</strong>
                <span>{test.reaction}</span>
              </div>
              <Link className="primary-button home-test-link" href={test.href}>
                테스트 보러가기
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="panel final-cta-panel home-bottom-panel">
        <div className="final-cta-copy">
          <span>계속 추가될 예정</span>
          <h2>하나씩 늘려가는 휴먼덱 테스트 컬렉션</h2>
          <p>
            지금은 캐릭터와 판단 테스트가 먼저 열려 있습니다.
            <br />
            다음엔 연애, 소비, 일 스타일 같은 흐름도 같은 구조로 붙일 수 있어요.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
