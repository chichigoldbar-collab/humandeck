import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사 생존 테스트 해설 | 휴먼덱",
  description:
    "회사에서 어떤 방식으로 버티고 반응하는지 보여주는 직장 생존 캐릭터 테스트 해설입니다.",
};

export default function CompanyGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>회사 생존 테스트는 어떤 패턴을 읽는 걸까</h1>
        <p>
          회사 생존 테스트는 일을 잘하느냐보다, 회사 안에서 어떤 방식으로 긴장을 처리하고
          살아남는지를 보는 콘텐츠입니다. 상사의 한마디, 애매한 지시, 급한 업무, 미묘한
          분위기처럼 현실적인 장면 속에서 내가 주로 꺼내는 반응을 캐릭터처럼 정리합니다.
        </p>

        <div className="policy-section">
          <h2>1. 회사 안의 나는 일상 속 나와 다를 수 있습니다</h2>
          <p>
            회사는 평가와 책임, 눈치와 속도가 동시에 작동하는 공간입니다. 그래서 평소에는
            차분한 사람도 회사에서는 멘붕이 오기 쉽고, 조용한 사람도 답답하면 주도권을 잡는
            식으로 다른 얼굴을 보일 수 있습니다. 이 테스트는 그런 직장 내 반응의 차이를
            드러내는 데 초점을 둡니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 버티는 타입과 회피하는 타입은 다릅니다</h2>
          <p>
            겉보기엔 둘 다 조용히 넘어가는 것처럼 보일 수 있지만, 버티기형은 책임감과
            생존 본능으로 견디는 경우가 많고, 회피형은 갈등과 압박을 줄이기 위해 스스로를
            뒤로 빼는 경우가 많습니다. 결과를 읽을 때는 이 차이를 구분해서 보는 것이 좋습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용하는 현실적인 방법</h2>
          <p>
            메인 결과 하나보다 반복적으로 선택한 장면을 다시 보는 편이 더 도움이 됩니다.
            특히 애매한 지시, 급한 업무, 야근, 평가 상황에서 어떤 답을 고르는지 보면 내가
            회사에서 가장 쉽게 지치는 지점을 더 선명하게 찾을 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
