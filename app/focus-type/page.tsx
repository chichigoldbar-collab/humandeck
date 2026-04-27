import type { Metadata } from "next";
import { FocusTypeExperience } from "@/components/FocusTypeExperience";
import { TestStaticInfo } from "@/components/TestStaticInfo";

export const metadata: Metadata = {
  title: "집중 vs 멀티태스킹 성향 테스트 | 휴먼덱",
  description:
    "한 가지에 몰입하는지, 여러 일을 동시에 돌리는지, 중간에 쉽게 끌리는지 보여주는 자기계발형 테스트",
};

export default function FocusTypePage() {
  return (
    <>
      <FocusTypeExperience />
      <TestStaticInfo
        title="집중 vs 멀티태스킹 테스트는 어떤 차이를 보나요?"
        intro={[
          "이 테스트는 단순히 집중력이 좋은지 나쁜지를 가르기보다, 한 가지에 몰입하는 편인지 여러 일을 동시에 돌리는 편인지, 아니면 중간 자극에 쉽게 끌리는 편인지 보는 자기계발형 테스트입니다.",
          "실제 생활에서 생산성을 흔드는 요인은 능력 하나보다 습관의 조합인 경우가 많습니다. 끝까지 파고드는 사람, 동시에 이것저것 건드리는 사람, 자꾸 딴생각으로 이탈하는 사람은 같은 바쁨 앞에서도 전혀 다른 하루를 보냅니다.",
        ]}
        sections={[
          {
            title: "1. 왜 세 가지 축으로 보나요?",
            body: [
              "한 가지에 깊게 몰입하는 힘, 여러 일을 동시에 다루는 익숙함, 중간에 흥미를 따라 쉽게 이탈하는 충동성은 서로 다르기 때문입니다. 집중형처럼 보이더라도 자극에 쉽게 흔들릴 수 있고, 멀티태스킹이 익숙해도 실제 효율은 낮을 수 있습니다.",
            ],
          },
          {
            title: "2. 결과를 읽을 때 중요한 포인트",
            body: [
              "결과는 생산성 우열표가 아닙니다. 어떤 방식에서 힘을 쓰고, 어떤 방식에서 피로를 더 느끼는지 확인하는 도구에 가깝습니다. 그래서 메인 결과뿐 아니라 세 축 점수를 같이 보면 실제 업무나 공부 습관과 더 잘 연결됩니다.",
            ],
          },
          {
            title: "3. 누구에게 특히 도움이 될까요?",
            body: [
              "할 일은 많은데 계속 분산되는 느낌이 있거나, 반대로 한 가지 일에 지나치게 오래 붙잡혀 속도가 느려지는 분들에게 유용합니다. 현재의 집중 스타일을 알면 환경 조정이나 루틴 설계도 훨씬 현실적으로 할 수 있습니다.",
            ],
          },
        ]}
      />
    </>
  );
}
