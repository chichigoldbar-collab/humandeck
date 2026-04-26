import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "생각이 많아서 더 지치는 사람의 패턴 | 휴먼덱",
  description:
    "과생각이 신중함과 어떻게 다르고, 왜 실행 타이밍을 늦추며 피로를 키우는지 생활 장면으로 설명합니다.",
};

export default function OverthinkingPatternsArticle() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Article</span>
        <h1>생각이 많아서 더 지치는 사람의 패턴</h1>
        <p>
          생각이 많다는 말은 종종 신중함처럼 들리지만, 실제로는 결정과 시작을 계속 늦추는
          피로 구조가 되기도 합니다. 문제를 잘 이해하고 싶고 실수하고 싶지 않아서 더 오래
          붙잡게 되지만, 그 시간이 길어질수록 실행 에너지는 더 줄어들 수 있습니다.
        </p>

        <div className="policy-section">
          <h2>과생각은 정보 부족이 아니라 종료 기준 부족일 수 있습니다</h2>
          <p>
            계속 검색하고, 비교하고, 복기하는 이유가 꼭 정보가 없어서만은 아닐 수 있습니다.
            어디까지 생각하면 충분한지 정하는 기준이 없으면, 생각은 쉽게 끝나지 않습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>감정이 걸린 문제일수록 더 오래 붙잡게 됩니다</h2>
          <p>
            인간관계, 실수, 평가처럼 감정이 섞인 문제는 과생각이 훨씬 길어지기 쉽습니다.
            이때는 실제 해결보다 해석과 상상이 반복되면서 더 큰 피로를 만들 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>생각을 줄이는 것보다 생각의 끝을 만드는 편이 낫습니다</h2>
          <p>
            무조건 생각하지 말자고 다짐하는 것보다, 오늘은 여기까지만 본다고 정하거나,
            결정 시간을 따로 정하는 편이 더 현실적입니다. 과생각형 패턴은 의지보다 구조를
            바꿀 때 훨씬 줄어드는 경우가 많습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
