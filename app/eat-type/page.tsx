import type { Metadata } from "next";
import { EatTypeExperience } from "@/components/EatTypeExperience";

export const metadata: Metadata = {
  title: "먹는 방식 성격 테스트 | 휴먼덱",
  description:
    "라면 먹는 순서, 메뉴 고르는 방식으로 알아보는 먹는 방식 성격 테스트",
};

export default function EatTypePage() {
  return <EatTypeExperience />;
}
