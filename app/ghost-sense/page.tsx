import type { Metadata } from "next";
import { GhostSenseExperience } from "@/components/GhostSenseExperience";

export const metadata: Metadata = {
  title: "귀신 보이는지 테스트 | 휴먼덱",
  description:
    "감각 민감도, 공포 반응, 상상/착각으로 보는 공포 콘셉트 테스트",
};

export default function GhostSensePage() {
  return <GhostSenseExperience />;
}

