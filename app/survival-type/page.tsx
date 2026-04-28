import type { Metadata } from "next";
import { SurvivalTypeExperience } from "@/components/SurvivalTypeExperience";
import { TestStaticInfo } from "@/components/TestStaticInfo";

export const metadata: Metadata = {
  title: "당신은 위기 상황에서 어떤 인간일까 | 휴먼덱",
  description:
    "숲에서 길을 잃은 상황을 바탕으로 빠른 판단형인지, 분석형인지, 회피형인지 읽어보는 위기 대응 테스트",
};

export default function SurvivalTypePage() {
  return (
    <>
      <SurvivalTypeExperience />
      <TestStaticInfo
        title="위기 대응 테스트는 어떤 반응을 읽는 페이지일까요?"
        intro={[
          "이 테스트는 숲에서 길을 잃은 설정을 바탕으로, 실제 위기 상황에서 당신이 어떤 인간으로 움직이는지 보는 몰입형 콘텐츠입니다. 판단력, 감정 반응, 행동 방식이 동시에 드러나도록 상황형 질문으로 구성했습니다.",
          "머리로는 차분할 것 같아도 실제론 바로 움직일 수 있고, 평소엔 강해 보여도 압박이 커지면 멈출 수 있습니다. 휴먼덱은 그 차이를 '좋다 나쁘다'보다 위기 앞에서 자주 튀는 기본 패턴으로 해석합니다.",
        ]}
        sections={[
          {
            title: "1. 왜 숲에서 길을 잃는 설정을 썼나요?",
            body: [
              "위기 상황은 추상적으로 물으면 모두 비슷하게 답하기 쉽습니다. 하지만 시간 압박, 불안, 방향 상실, 혼자라는 감각이 동시에 들어오는 장면을 상상하면, 실제 행동 스타일이 훨씬 자연스럽게 드러납니다.",
            ],
          },
          {
            title: "2. 결과는 어떻게 읽는 게 좋을까요?",
            body: [
              "메인 결과는 위기에서 가장 먼저 튀어나오는 기본 반응을, 서브 결과는 그 반응을 보완하거나 흔드는 두 번째 패턴을 보여줍니다. 예를 들어 생존본능 늑대와 계산형 여우가 같이 나오면, 빠르게 움직이되 완전히 무작정은 아닌 타입으로 읽을 수 있습니다.",
            ],
          },
          {
            title: "3. 실제 생활과 어떻게 연결되나요?",
            body: [
              "이 테스트는 정말 숲에 갔을 때만 의미가 있는 게 아니라, 압박이 큰 상황, 급한 선택, 예상치 못한 문제 앞에서 내가 어떻게 반응하는지 돌아보는 데 도움이 됩니다. 길을 잃는 장면을 통해 일상 속 위기 대응 습관을 더 선명하게 보는 셈입니다.",
            ],
          },
        ]}
      />
    </>
  );
}
