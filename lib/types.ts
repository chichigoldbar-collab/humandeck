export type Axis =
  | "attachment"
  | "dopamine"
  | "bias"
  | "selfWorth"
  | "decision";

export type AttachmentType = "wolf" | "spark" | "lion";
export type DopamineType = "hunter" | "scroller" | "goal";
export type BiasType = "loss" | "belief" | "luck";
export type SelfWorthType = "mask" | "wall" | "rooted";
export type DecisionType = "flash" | "delay" | "strategist";

export type CharacterId =
  | AttachmentType
  | DopamineType
  | BiasType
  | SelfWorthType
  | DecisionType;

export type AxisScoreMap = {
  attachment?: Partial<Record<AttachmentType, number>>;
  dopamine?: Partial<Record<DopamineType, number>>;
  bias?: Partial<Record<BiasType, number>>;
  selfWorth?: Partial<Record<SelfWorthType, number>>;
  decision?: Partial<Record<DecisionType, number>>;
};

export type QuestionOption = {
  id: string;
  label: string;
  score: AxisScoreMap;
};

export type Question = {
  id: string;
  axis: Axis;
  prompt: string;
  options: QuestionOption[];
};

export type CharacterProfile = {
  id: CharacterId;
  emoji: string;
  imagePath: string;
  name: string;
  hook: string;
  summary: string;
  aura: string;
  accent: string;
  keywords: string[];
  detail: string[];
  pattern: string;
  trigger: string;
  weakness: string;
  advice: string;
};
