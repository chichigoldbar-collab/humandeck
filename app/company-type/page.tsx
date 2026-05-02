import type { Metadata } from "next";
import { CompanyTypeExperience } from "@/components/CompanyTypeExperience";
import { TestStaticInfo } from "@/components/TestStaticInfo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "회사에서 당신은 어떤 인간일까 | 휴먼덱",
  description:
    "회사에서 드러나는 적응력, 버티는 힘, 주도권, 멘탈 패턴을 읽어보는 회사 생존 캐릭터 테스트",
  path: "/company-type",
  keywords: ["회사 테스트", "직장인 테스트", "회사 성향 테스트", "회사 심리테스트"],
});

export default function CompanyTypePage() {
  return (
    <>
      <CompanyTypeExperience />
      <TestStaticInfo
        title="회사 테스트는 무엇을 보는 페이지일까요?"
        intro={[
          "이 테스트는 일을 얼마나 잘하느냐보다, 회사 안에서 어떤 방식으로 버티고 반응하는지 보는 현실형 콘텐츠입니다. 지시가 애매할 때, 분위기가 이상할 때, 일이 몰릴 때, 상사와 동료 앞에서 어떤 패턴이 먼저 튀는지 읽어냅니다.",
          "회사에서는 능력만큼이나 적응 방식이 중요합니다. 누군가는 눈치로 살아남고, 누군가는 참고 버티고, 누군가는 바로 나서고, 누군가는 멘붕이 옵니다. 이 테스트는 그 차이를 캐릭터처럼 정리합니다.",
        ]}
        sections={[
          {
            title: "1. 왜 회사 안에서의 패턴을 따로 보나요?",
            body: [
              "같은 사람이더라도 회사 안에서는 전혀 다른 얼굴을 꺼내는 경우가 많기 때문입니다. 책임, 평가, 눈치, 속도, 인간관계가 동시에 얽히는 공간이라 일상 성향과는 다른 회사 생존 방식이 자주 드러납니다.",
            ],
          },
          {
            title: "2. 결과는 어떻게 활용하면 좋을까요?",
            body: [
              "결과는 직장 적응의 좋고 나쁨을 판정하는 도구가 아니라, 스트레스를 받을 때 내가 어떤 쪽으로 움직이는지 확인하는 도구로 보는 것이 좋습니다. 특히 자주 지치는 이유, 회사에서 반복되는 피로 지점을 찾을 때 도움이 됩니다.",
            ],
          },
          {
            title: "3. 가장 현실적으로 봐야 할 포인트",
            body: [
              "메인 결과보다 더 중요한 건 어떤 질문에서 내가 비슷한 답을 반복했는지입니다. 회피, 버티기, 주도, 분석, 충성, 멘붕 중 무엇이 반복되는지 보면 회사 안에서 에너지가 새는 지점이 더 명확해집니다.",
            ],
          },
        ]}
      />
    </>
  );
}
