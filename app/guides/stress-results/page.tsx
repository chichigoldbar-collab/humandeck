import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스트레스 관리 스타일 해설 | 휴먼덱",
  description:
    "스트레스 관리 스타일 테스트가 보는 회피, 해소, 해결, 과생각 패턴을 생활 반응과 연결해 설명합니다.",
};

export default function StressGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>스트레스 관리 스타일 결과는 어떻게 읽으면 좋을까</h1>
        <p>
          이 테스트는 스트레스를 많이 받는지보다, 스트레스를 받을 때 어떤 방식으로 반응하는지에
          초점을 둡니다. 회피하는지, 사람이나 소비로 해소하는지, 문제를 직접 해결하려 하는지,
          생각만 많아지는지를 나눠보면 평소의 생활 리듬이 더 선명하게 보일 수 있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 같은 스트레스도 반응 방식은 다릅니다</h2>
          <p>
            어떤 사람은 일단 멈추고, 어떤 사람은 바로 움직이고, 어떤 사람은 오래 생각합니다.
            그래서 결과는 성격 낙인보다 현재 자주 쓰는 대응 방식으로 읽는 것이 좋습니다. 특히
            회피형과 과생각형, 해소형과 해결형은 겉보기에는 비슷해도 실제 작동 방식이 다를 수
            있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 스트레스 반응은 장점과 한계가 함께 있습니다</h2>
          <p>
            해결 중심은 실행력이 강점이고, 해소형은 감정을 밖으로 빼는 능력이 장점일 수 있습니다.
            반대로 회피는 회복 시간을 주기도 하지만 방치로 이어질 수 있고, 과생각은 분석력이
            있지만 시작을 늦추는 요소가 될 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용하는 현실적인 방법</h2>
          <p>
            자신의 반응을 고치려 하기보다 먼저 알아차리는 것이 중요합니다. 스트레스가 왔을 때
            내가 멈추는지, 누군가에게 털어놓는지, 정리부터 시작하는지, 생각만 길어지는지를
            알게 되면 그 다음부터는 대처 방식을 조금 더 의식적으로 조정할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
