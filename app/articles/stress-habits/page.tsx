import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스트레스 관리 습관을 만드는 법 | 휴먼덱",
  description:
    "큰 결심보다 작은 회복 루틴이 왜 더 효과적인지, 스트레스 관리 습관을 만드는 현실적인 방법을 정리했습니다.",
};

export default function StressHabitsArticle() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Article</span>
        <h1>스트레스 관리 습관을 만드는 법</h1>
        <p>
          스트레스 관리는 큰 결심으로 오래 가기 어렵습니다. 오히려 작고 반복 가능한 회복
          습관이 쌓일 때 더 안정적으로 유지되는 경우가 많습니다. 중요한 것은 완벽한 루틴보다,
          내가 지칠 때 실제로 다시 돌아올 수 있는 작은 기준을 만드는 것입니다.
        </p>

        <div className="policy-section">
          <h2>회복은 남는 시간에 하는 일이 아닙니다</h2>
          <p>
            바쁜 날이 끝나고 남는 시간에만 회복하려고 하면, 대부분의 날은 그 시간이 오지
            않습니다. 그래서 짧더라도 정해진 시점에 넣는 회복 습관이 훨씬 현실적입니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>나에게 맞는 방식이 먼저입니다</h2>
          <p>
            어떤 사람은 사람과 이야기하며 풀고, 어떤 사람은 정리와 운동이 더 잘 맞고, 어떤
            사람은 혼자 조용히 회복하는 쪽이 더 필요할 수 있습니다. 그래서 좋은 습관의 기준은
            일반론보다 내 패턴과 맞는가에 가깝습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>기록보다 반복 가능성이 더 중요합니다</h2>
          <p>
            멋진 계획을 세우는 것보다, 오늘도 할 수 있는 작은 기준을 만드는 편이 오래 갑니다.
            예를 들어 하루 10분 정리, 잠깐의 산책, 자기 전 화면 끄기 같은 단순한 행동이 오히려
            지속 가능한 회복 습관이 될 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
