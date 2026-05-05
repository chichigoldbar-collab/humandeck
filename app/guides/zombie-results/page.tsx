import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "좀비 생존 테스트 해설 | 휴먼덱",
  description:
    "좀비 아포칼립스 설정으로 보는 생존 본능 테스트가 리더십, 회피, 협력, 혼란 반응을 어떻게 읽는지 설명합니다.",
};

export default function ZombieGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>좀비 생존 테스트는 무엇을 재미있게 보여줄까</h1>
        <p>
          좀비 테스트는 공포 연출보다 생존 장면에서 어떤 본능이 튀어나오는지를 보는 데
          초점을 둡니다. 위험할 때 앞장서는지, 문을 잠그고 버티는지, 혼자보다 팀을 찾는지,
          아니면 생각이 많아져 멈추는지를 스토리형 선택으로 읽어냅니다.
        </p>

        <div className="policy-section">
          <h2>1. 리더형과 협력형은 둘 다 강점이 있습니다</h2>
          <p>
            위기 상황에서 무조건 앞에 서는 사람만 필요한 것은 아닙니다. 누군가는 방향을
            정하는 데 강하고, 누군가는 사람을 묶고 분위기를 유지하는 데 강합니다. 테스트는
            이 차이를 행동 선택으로 분리해서 보여주려 합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 회피형과 버티기형은 비슷하지만 결이 다릅니다</h2>
          <p>
            둘 다 움직임이 적어 보일 수 있지만, 회피형은 위험을 줄이기 위해 빠지는 쪽이고,
            버티기형은 현재 자원을 최대한 지키며 견디는 쪽에 가깝습니다. 그래서 같은
            소극성처럼 보여도 심리는 꽤 다를 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 일상 패턴으로 옮겨보면</h2>
          <p>
            생존 설정은 극단적이지만, 실제로는 급한 일, 돌발 상황, 팀 갈등, 갑작스러운
            선택 앞에서 내가 어떤 쪽으로 움직이는지를 돌아보게 만듭니다. 그래서 결과는
            단순한 세계관 놀이가 아니라 현실 반응을 가볍게 비춰보는 장치가 될 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
