import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "번아웃 오기 쉬운 사람의 특징 | 휴먼덱",
  description:
    "계속 버티는 습관, 쉬지 못하는 생활 패턴, 감정을 뒤로 미루는 방식이 왜 번아웃으로 이어질 수 있는지 설명합니다.",
};

export default function BurnoutSignsArticle() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Article</span>
        <h1>번아웃 오기 쉬운 사람의 특징</h1>
        <p>
          번아웃은 단순히 바쁜 사람만 겪는 것이 아닙니다. 쉬는 방법을 모르는 사람, 감정을
          계속 뒤로 미루는 사람, 해야 할 일을 끝낼 때까지 멈추지 못하는 사람에게도 자주
          나타납니다. 중요한 것은 업무량보다, 오랫동안 어떤 방식으로 버텨왔는가입니다.
        </p>

        <div className="policy-section">
          <h2>괜찮은 척 오래 버티는 사람</h2>
          <p>
            힘들어도 티를 내지 않는 사람은 주변에서는 안정적으로 보일 수 있지만, 실제로는
            도움 요청 타이밍을 계속 놓치기 쉽습니다. 겉으로 멀쩡해 보일수록 내부 피로가
            누적되는 경우가 많습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>쉬는 시간을 회복이 아닌 방치로 쓰는 사람</h2>
          <p>
            아무것도 하지 않는 시간이 꼭 회복이 되는 것은 아닙니다. 피곤해서 멈췄지만
            죄책감만 커지거나, 쉬는 동안에도 계속 생각이 이어진다면 몸은 쉬어도 ذهن은
            회복되지 않을 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>성과가 있어야만 움직이는 사람</h2>
          <p>
            외부 반응, 칭찬, 숫자 결과에 크게 움직이는 사람은 성과가 보일 때는 강하게
            달리지만, 보상이 줄어들면 급격히 지치는 패턴이 생길 수 있습니다. 이 경우 작은
            내부 기준을 함께 만들어두는 것이 중요합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
