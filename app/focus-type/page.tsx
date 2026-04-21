import type { Metadata } from "next";
import { FocusTypeExperience } from "@/components/FocusTypeExperience";

export const metadata: Metadata = {
  title: "집중 vs 멀티태스킹 성향 테스트 | 휴먼덱",
  description:
    "한 가지에 몰입하는지, 여러 일을 동시에 돌리는지, 중간에 쉽게 끌리는지 보여주는 자기계발형 테스트",
};

export default function FocusTypePage() {
  return <FocusTypeExperience />;
}
