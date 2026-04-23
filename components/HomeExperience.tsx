import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

const tests: {
  href:
    | "/character"
    | "/judgment"
    | "/stimulation"
    | "/eat-type"
    | "/couple-type"
    | "/ghost-sense"
    | "/focus-type"
    | "/stress-type"
    | "/persona-type";
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
  {
    href: "/eat-type",
    badge: "신규 테스트",
    title: "먹는 방식 성격 테스트",
    summary: "라면 먹는 순서, 메뉴 고르는 방식만으로 캐릭터처럼 보는 먹는 성격 테스트",
    meta: "10문항 · 메인 결과 + 보조 성향",
    pickFor: "내 먹는 습관이 밈처럼 궁금할 때",
    accent: "home-card-eattype",
  },
  {
    href: "/couple-type",
    badge: "신규 테스트",
    title: "부부 관계 분석 테스트",
    summary: "갈등, 연결, 생활, 애정 네 축으로 관계 패턴을 보는 부부 관계 테스트",
    meta: "16문항 · 관계 유형 + 4축 그래프",
    pickFor: "관계의 결을 차분하게 보고 싶을 때",
    accent: "home-card-couple",
  },
  {
    href: "/ghost-sense",
    badge: "신규 테스트",
    title: "귀신을 얼마나 느끼는 타입일까?",
    summary: "어두운 공간, 작은 소리, 이상한 기척에 어떻게 반응하는지 보는 공포 콘셉트 테스트",
    meta: "12문항 · 결과 6개 · 어두운 테마",
    pickFor: "무서운 분위기에서 나는 어떤 타입인지 궁금할 때",
    accent: "home-card-ghost",
  },
  {
    href: "/focus-type",
    badge: "신규 테스트",
    title: "집중 vs 멀티태스킹 성향 테스트",
    summary: "한 가지에 깊게 몰입하는지, 여러 일을 동시에 돌리는지 보는 자기계발형 테스트",
    meta: "12문항 · 결과 5개 · 3축 그래프",
    pickFor: "내 작업 습관과 집중 패턴이 궁금할 때",
    accent: "home-card-focus",
  },
  {
    href: "/stress-type",
    badge: "신규 테스트",
    title: "스트레스 관리 스타일 테스트",
    summary: "스트레스를 피하는지, 푸는지, 해결하는지 보여주는 자기이해형 스트레스 패턴 테스트",
    meta: "12문항 · 결과 7개 · 4축 그래프",
    pickFor: "내가 지칠 때 어떤 방식으로 반응하는지 알고 싶을 때",
    accent: "home-card-stress",
  },
  {
    href: "/persona-type",
    badge: "신규 테스트",
    title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까?",
    summary: "착한 척, 괜찮은 척, 무심한 척처럼 사람들 앞에서 보이는 겉모습 패턴 테스트",
    meta: "12문항 · 결과 8개 · 메인 + 서브",
    pickFor: "내가 사람들 앞에서 맡는 역할이 궁금할 때",
    accent: "home-card-persona",
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
          <article className="home-intro-card">
            <strong>먹는 습관으로 성격을 보고 싶다면</strong>
            <p>라면, 배달 앱, 치킨 고르는 방식처럼 너무 현실적인 질문으로 보는 먹는 방식 테스트가 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>부부 관계 패턴을 보고 싶다면</strong>
            <p>안정적인지, 거리감이 있는지, 생활은 잘 굴러가는데 감정이 빈 건 아닌지 네 축으로 보는 관계 테스트가 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>공포 콘셉트로 몰입하고 싶다면</strong>
            <p>어두운 공간, 작은 소리, 이상한 기척에 어떻게 반응하는지 보는 공포 반응 테스트가 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>집중 습관을 점검하고 싶다면</strong>
            <p>한 가지에 깊게 파는 타입인지, 여러 일을 동시에 굴리는 타입인지 보는 집중 성향 테스트가 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>스트레스 처리 방식을 알고 싶다면</strong>
            <p>회피하는지, 푸는지, 해결하는지, 생각만 많아지는지 보는 스트레스 관리 스타일 테스트가 잘 맞아요.</p>
          </article>
          <article className="home-intro-card">
            <strong>사람들 앞의 내 모습이 궁금하다면</strong>
            <p>착한 척, 괜찮은 척, 유능한 척처럼 관계 안에서 반복되는 겉모습 패턴 테스트가 잘 맞아요.</p>
          </article>
        </div>
      </section>

      <section className="panel home-service-panel">
        <div className="panel-header">
          <span>휴먼덱 소개</span>
          <h2>휴먼덱은 다양한 선택 패턴을 가볍게 읽어내는 테스트 아카이브입니다</h2>
        </div>
        <div className="home-service-grid">
          <article className="home-service-card">
            <strong>왜 이런 테스트를 만드나요?</strong>
            <p>
              휴먼덱은 관계, 판단, 자극 반응, 생활 습관처럼 일상에서 자주 드러나는
              패턴을 짧은 질문으로 정리해보는 웹 서비스입니다. 무겁게 진단하는 대신,
              스스로를 조금 더 선명하게 이해할 수 있는 가벼운 출발점을 만드는 데
              초점을 둡니다.
            </p>
          </article>
          <article className="home-service-card">
            <strong>결과는 어떻게 만들어지나요?</strong>
            <p>
              각 테스트는 질문별 응답 패턴을 바탕으로 점수를 계산하고, 가장 가까운
              유형을 캐릭터 형태로 보여줍니다. 결과는 재미 요소를 포함하지만, 사용자가
              자신의 습관과 반응을 돌아보게 만드는 해석형 콘텐츠로 설계되어 있습니다.
            </p>
          </article>
          <article className="home-service-card">
            <strong>어떤 테스트를 볼 수 있나요?</strong>
            <p>
              현재는 인간 캐릭터, 인지편향, 도파민 반응, 먹는 방식, 부부 관계, 공포
              반응 테스트를 제공하고 있습니다. 각 테스트는 서로 다른 주제를 다루기
              때문에 하나만 해도 되고, 여러 개를 이어서 보면 패턴 차이를 비교하기 더
              좋습니다.
            </p>
          </article>
        </div>
      </section>

      <section className="panel home-service-panel">
        <div className="panel-header">
          <span>읽어보기</span>
          <h2>테스트만 끝내지 않고, 결과를 해석하는 글도 함께 볼 수 있습니다</h2>
        </div>
        <div className="home-service-grid">
          <article className="home-service-card">
            <strong>인간 캐릭터 테스트 해설</strong>
            <p>
              다섯 축으로 결과가 나오는 이유와, 여러 카드가 함께 보일 때 무엇을 먼저 읽으면
              좋은지 정리한 설명형 가이드입니다.
            </p>
            <div className="content-link-row">
              <Link href="/guides/character-results">가이드 읽기</Link>
            </div>
          </article>
          <article className="home-service-card">
            <strong>인지편향 테스트 해설</strong>
            <p>
              확증편향, 손실회피, 과잉확신 같은 결과가 일상에서 어떤 선택으로 이어지는지
              연결해서 읽어볼 수 있습니다.
            </p>
            <div className="content-link-row">
              <Link href="/guides/judgment-results">가이드 읽기</Link>
            </div>
          </article>
          <article className="home-service-card">
            <strong>도파민 반응 테스트 해설</strong>
            <p>
              빠른 보상 선호, 집중 분산, 충동 반응을 생활 패턴과 연결해서 보는 방법을
              정리한 설명 페이지입니다.
            </p>
            <div className="content-link-row">
              <Link href="/guides/stimulation-results">가이드 읽기</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="panel home-panel">
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
