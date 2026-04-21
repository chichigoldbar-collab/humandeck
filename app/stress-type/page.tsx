import type { Metadata } from "next";
import { StressTypeExperience } from "@/components/StressTypeExperience";

export const metadata: Metadata = {
  title: "스트레스 관리 스타일 테스트 | 휴먼덱",
  description:
    "스트레스를 받을 때 피하는지, 푸는지, 해결하는지, 생각만 많아지는지 보여주는 자기이해형 테스트",
};

export default function StressTypePage() {
  return <StressTypeExperience />;
}
