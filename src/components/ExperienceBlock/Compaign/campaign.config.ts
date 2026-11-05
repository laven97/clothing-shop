import { ObjectiveConfig } from "@/src/interfaces/Objective.config.interface";
import { CampaignObjective } from "@/src/types/Compaign.type";

export const BUDGET = {
  min: 500,
  max: 10000,
  step: 500,
  initial: 3500,
} as const;

export const objectiveOptions: Record<CampaignObjective, ObjectiveConfig> = {
  awareness: {
    label: "Awareness",
    headline: "MAKE IT UNMISSABLE.",
    reachMultiplier: 2400,
    engagementMultiplier: 12,
    ctr: 3.8,
  },

  traffic: {
    label: "Traffic",
    headline: "TURN ATTENTION INTO ACTION.",
    reachMultiplier: 1800,
    engagementMultiplier: 16,
    ctr: 4.6,
  },

  conversions: {
    label: "Conversions",
    headline: "MAKE EVERY MOMENT COUNT.",
    reachMultiplier: 1100,
    engagementMultiplier: 10,
    ctr: 5.2,
  },
};

export const objectiveKeys: CampaignObjective[] = [
  "awareness",
  "traffic",
  "conversions",
];

export function getCampaignMetrics(
  objective: CampaignObjective,
  budget: number
) {
  const config = objectiveOptions[objective];

  return {
    reach: Math.round(budget * config.reachMultiplier),
    engagement: Math.round(budget * config.engagementMultiplier),
    ctr: config.ctr,
  };
}

export const formatBudget = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

export const formatMetric = (value: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
