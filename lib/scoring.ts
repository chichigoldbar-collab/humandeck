import {
  attachmentProfiles,
  biasProfiles,
  decisionProfiles,
  dopamineProfiles,
  questions,
  selfWorthProfiles,
} from "@/lib/questions";
import {
  AttachmentType,
  BiasType,
  DecisionType,
  DopamineType,
  SelfWorthType,
} from "@/lib/types";

export type AnswerMap = Record<string, string>;

export type ResultKeys = {
  attachment: AttachmentType;
  dopamine: DopamineType;
  bias: BiasType;
  selfWorth: SelfWorthType;
  decision: DecisionType;
};

type Totals = {
  attachment: Record<AttachmentType, number>;
  dopamine: Record<DopamineType, number>;
  bias: Record<BiasType, number>;
  selfWorth: Record<SelfWorthType, number>;
  decision: Record<DecisionType, number>;
};

export function calculateResult(answers: AnswerMap) {
  const totals: Totals = {
    attachment: { wolf: 0, spark: 0, lion: 0 },
    dopamine: { hunter: 0, scroller: 0, goal: 0 },
    bias: { loss: 0, belief: 0, luck: 0 },
    selfWorth: { mask: 0, wall: 0, rooted: 0 },
    decision: { flash: 0, delay: 0, strategist: 0 },
  };

  for (const question of questions) {
    const selectedId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedId);

    if (!selectedOption) continue;

    if (selectedOption.score.attachment) {
      for (const [key, value] of Object.entries(selectedOption.score.attachment) as [
        AttachmentType,
        number,
      ][]) {
        totals.attachment[key] += value ?? 0;
      }
    }

    if (selectedOption.score.dopamine) {
      for (const [key, value] of Object.entries(selectedOption.score.dopamine) as [
        DopamineType,
        number,
      ][]) {
        totals.dopamine[key] += value ?? 0;
      }
    }

    if (selectedOption.score.bias) {
      for (const [key, value] of Object.entries(selectedOption.score.bias) as [
        BiasType,
        number,
      ][]) {
        totals.bias[key] += value ?? 0;
      }
    }

    if (selectedOption.score.selfWorth) {
      for (const [key, value] of Object.entries(selectedOption.score.selfWorth) as [
        SelfWorthType,
        number,
      ][]) {
        totals.selfWorth[key] += value ?? 0;
      }
    }

    if (selectedOption.score.decision) {
      for (const [key, value] of Object.entries(selectedOption.score.decision) as [
        DecisionType,
        number,
      ][]) {
        totals.decision[key] += value ?? 0;
      }
    }
  }

  const attachment = pickTop(totals.attachment) as AttachmentType;
  const dopamine = pickTop(totals.dopamine) as DopamineType;
  const bias = pickTop(totals.bias) as BiasType;
  const selfWorth = pickTop(totals.selfWorth) as SelfWorthType;
  const decision = pickTop(totals.decision) as DecisionType;

  return buildResult({
    attachment,
    dopamine,
    bias,
    selfWorth,
    decision,
  });
}

function pickTop<T extends string>(scores: Record<T, number>) {
  const entries = Object.entries(scores) as [T, number][];
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

export function buildResult(keys: ResultKeys) {
  return {
    ...keys,
    attachmentProfile: attachmentProfiles[keys.attachment],
    dopamineProfile: dopamineProfiles[keys.dopamine],
    biasProfile: biasProfiles[keys.bias],
    selfWorthProfile: selfWorthProfiles[keys.selfWorth],
    decisionProfile: decisionProfiles[keys.decision],
    shareCopy: `${attachmentProfiles[keys.attachment].emoji} ${attachmentProfiles[keys.attachment].name}\n${dopamineProfiles[keys.dopamine].emoji} ${dopamineProfiles[keys.dopamine].name}\n${biasProfiles[keys.bias].emoji} ${biasProfiles[keys.bias].name}\n${selfWorthProfiles[keys.selfWorth].emoji} ${selfWorthProfiles[keys.selfWorth].name}\n${decisionProfiles[keys.decision].emoji} ${decisionProfiles[keys.decision].name}\n\n이게 지금 내 인간 캐릭터 세트.`,
  };
}
