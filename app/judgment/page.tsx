import type { Metadata } from "next";
import { JudgmentExperience } from "@/components/JudgmentExperience";

export const metadata: Metadata = {
  title: "내 판단은 얼마나 틀렸을까? | 휴먼덱",
  description:
    "12문항으로 보는 인지편향 테스트. 확증편향, 손실회피, 앵커링, 과잉확신, 후광효과, 선택 과부하를 캐릭터로 분석합니다.",
};

export default function JudgmentPage() {
  return <JudgmentExperience />;
}
