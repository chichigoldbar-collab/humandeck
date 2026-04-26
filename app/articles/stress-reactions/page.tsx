import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스트레스를 받을 때 사람마다 반응이 다른 이유 | 휴먼덱",
  description:
    "같은 스트레스 상황에서도 사람마다 멈추거나, 풀거나, 해결하거나, 생각이 길어지는 이유를 설명합니다.",
};

export default function StressReactionsArticle() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Article</span>
        <h1>스트레스를 받을 때 사람마다 반응이 다른 이유</h1>
        <p>
          스트레스를 받는다는 사실 자체보다 더 중요한 것은, 그 스트레스를 어떤 방식으로
          처리하느냐입니다. 같은 상황을 겪어도 누군가는 일단 멈추고, 누군가는 먹거나
          수다로 풀고, 누군가는 계획을 다시 세우며, 또 다른 누군가는 계속 생각만 할 수
          있습니다. 이 차이는 의지의 크기보다 익숙한 대응 패턴의 차이로 이해하는 편이
          현실적입니다.
        </p>

        <div className="policy-section">
          <h2>멈추는 사람은 회복을 먼저 찾는 경우가 많습니다</h2>
          <p>
            겉으로 보기에는 회피처럼 보일 수 있지만, 어떤 사람은 스트레스가 크게 오면 몸과
            ذهن이 동시에 멈추는 쪽으로 반응합니다. 이때는 문제를 모르는 것이 아니라, 일단
            자극을 줄이고 에너지를 회복하려는 방향으로 움직이는 경우가 많습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>감정을 푸는 사람은 외부 배출이 중요합니다</h2>
          <p>
            다른 사람에게 털어놓거나, 먹거나, 잠깐 즐기는 활동으로 기분을 바꾸는 사람도
            있습니다. 이런 반응은 문제 해결이 없다는 뜻이 아니라, 감정을 먼저 낮춰야 다음
            행동이 가능해지는 구조일 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>해결형과 과생각형은 비슷해 보여도 다릅니다</h2>
          <p>
            둘 다 문제를 오래 붙잡는 것처럼 보일 수 있지만, 해결형은 행동 계획이 붙고,
            과생각형은 원인과 가능성만 계속 늘어나는 경우가 많습니다. 그래서 겉으로는 둘 다
            진지해 보여도 실제 피로도와 결과는 꽤 다르게 나타날 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
