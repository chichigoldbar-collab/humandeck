import type { Metadata } from "next";
import { GhostSenseExperience } from "@/components/GhostSenseExperience";

export const metadata: Metadata = {
  title: "귀신을 얼마나 느끼는 타입일까? | 휴먼덱",
  description:
    "어두운 공간, 작은 소리, 이상한 기척에 당신이 반응하는 방식을 분석합니다",
};

export default function GhostSensePage() {
  return <GhostSenseExperience />;
}
