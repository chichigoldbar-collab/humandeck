import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "위기 대응 테스트 해설 | 휴먼덱",
  description:
    "숲에서 길을 잃는 상황으로 보는 위기 대응 테스트가 판단, 감정, 행동 패턴을 어떻게 읽는지 설명합니다.",
};

export default function SurvivalGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>위기 대응 테스트는 왜 몰입형 질문으로 만들어졌을까</h1>
        <p>
          위기 대응 테스트는 사용자가 스스로 생각하는 성격보다, 압박 상황에서 실제로 어떤
          선택을 먼저 떠올리는지를 보기 위해 만들어졌습니다. 숲에서 길을 잃은 설정은 단순한
          장식이 아니라, 판단과 감정, 행동 순서를 자연스럽게 드러내기 위한 장치입니다.
        </p>

        <div className="policy-section">
          <h2>1. 빠르게 움직이는 사람과 오래 계산하는 사람의 차이</h2>
          <p>
            어떤 사람은 완벽하지 않아도 먼저 움직이는 쪽을 선택하고, 어떤 사람은 상황을 더
            오래 파악하려고 합니다. 둘 중 어느 쪽이 무조건 좋다고 보기보다, 압박 속에서 내
            뇌가 어떤 방향으로 먼저 반응하는지 읽는 것이 핵심입니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 멘붕형은 약함보다 과부하에 가깝습니다</h2>
          <p>
            긴장이나 공포가 올라오면 바로 실행이 안 되는 사람도 있습니다. 이때는 겁이 많다기보다
            동시에 고려해야 할 요소가 많아져 뇌가 멈추는 패턴으로 보는 편이 더 현실적입니다.
            테스트는 이런 과부하 반응도 하나의 위기 대응 방식으로 다룹니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 현실에서 읽을 때 중요한 포인트</h2>
          <p>
            결과를 볼 때는 메인 타입 하나만 보기보다, 서브 성향과 함께 읽는 것이 더 좋습니다.
            예를 들어 행동형이면서 계산형이 섞여 있으면 과감하지만 손익 계산도 하는 편일 수
            있고, 회피형에 멘붕형이 섞여 있으면 압박이 클수록 결정이 더 늦어질 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
