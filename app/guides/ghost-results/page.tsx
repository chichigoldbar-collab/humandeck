import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공포 반응 테스트 해설 | 휴먼덱",
  description:
    "귀신을 얼마나 느끼는 타입일까 테스트가 보는 감각 민감도, 공포 반응, 상상 개입도를 설명하는 가이드입니다.",
};

export default function GhostGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>공포 반응 테스트는 무엇을 보여주는 걸까</h1>
        <p>
          귀신을 얼마나 느끼는 타입일까 테스트는 실제 초자연 현상을 판정하기 위한 것이 아닙니다.
          낯선 분위기, 작은 소리, 어두운 공간 같은 자극에 감각이 얼마나 먼저 반응하는지, 공포가
          얼마나 오래 남는지, 상상이 얼마나 크게 개입하는지를 가볍게 살펴보는 공포 콘셉트 테스트에
          가깝습니다.
        </p>

        <div className="policy-section">
          <h2>1. 공포 반응은 감각과 상상의 조합으로 나타납니다</h2>
          <p>
            어떤 사람은 기척과 분위기를 먼저 느끼고, 어떤 사람은 논리적으로 설명하려 하며, 또
            어떤 사람은 상상력이 더 크게 작동합니다. 이 차이는 겁이 많다 적다보다 반응 방식의
            차이로 이해하는 것이 자연스럽습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 공포 콘텐츠에 오래 남는 사람도 있습니다</h2>
          <p>
            무서운 장면을 보고 금방 잊는 사람도 있지만, 오래 생각나거나 뒤를 한 번 더 보게 되는
            사람도 있습니다. 테스트는 이런 잔상과 반응 속도의 차이를 가볍게 읽어내는 구조로
            설계되어 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 즐기는 방법</h2>
          <p>
            이 테스트는 현실적인 진단이 아니라 분위기형 콘텐츠로 보는 것이 가장 적절합니다.
            친구들과 같은 질문에 답해본 뒤 서로 어떤 장면에서 반응하는지가 다른지 비교하면 결과가
            더 재밌고 납득되게 느껴질 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
