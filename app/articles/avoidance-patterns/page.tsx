import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회피형 스트레스 대처를 줄이는 방법 | 휴먼덱",
  description:
    "미루기, 도피, 멈춤처럼 나타나는 회피형 스트레스 반응이 왜 생기고 어떻게 다루면 좋은지 설명합니다.",
};

export default function AvoidancePatternsArticle() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Article</span>
        <h1>회피형 스트레스 대처를 줄이는 방법</h1>
        <p>
          스트레스가 쌓일수록 오히려 아무것도 못 하게 되는 사람이 있습니다. 해야 할 일은
          더 분명해졌는데, 몸은 눕고 싶고, 다른 콘텐츠로 도망가고 싶고, 나중에 하자는 말만
          반복하게 됩니다. 이 반응은 게으름 하나로 설명하기보다, 자극을 줄이고 싶어지는
          회피 패턴으로 이해하는 편이 더 정확합니다.
        </p>

        <div className="policy-section">
          <h2>작게 시작할 수 있는 구조가 필요합니다</h2>
          <p>
            회피형 패턴은 일을 한 번에 크게 바라볼수록 더 강해집니다. 그래서 해야 할 일을
            줄이는 것보다, 시작 단위를 극단적으로 작게 쪼개는 편이 실제로 더 도움이 됩니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>회피를 줄이려면 죄책감부터 낮춰야 합니다</h2>
          <p>
            미뤘다는 사실 자체보다, 미룬 뒤 스스로를 과하게 비난하는 시간이 더 피로를
            키우는 경우가 많습니다. 죄책감이 커질수록 다음 행동은 더 늦어지고, 그게 다시
            회피를 강화하는 구조로 이어질 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>환경을 바꾸는 것이 의지보다 빠를 때가 많습니다</h2>
          <p>
            폰, 탭, 침대, 누워서 보기 쉬운 콘텐츠처럼 바로 도망갈 수 있는 환경이 가까우면
            회피 반응은 더 빨리 작동합니다. 그래서 자기 통제보다 먼저 물리적인 거리와 환경을
            조정하는 것이 현실적인 방법일 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
