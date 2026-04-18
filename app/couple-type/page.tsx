import type { Metadata } from "next";
import { CoupleTypeExperience } from "@/components/CoupleTypeExperience";

export const metadata: Metadata = {
  title: "부부 관계 분석 테스트 | 휴먼덱",
  description:
    "갈등 처리, 정서적 연결, 생활 협업, 애정 표현으로 보는 부부 관계 분석 테스트",
};

export default function CoupleTypePage() {
  return <CoupleTypeExperience />;
}
