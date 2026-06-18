export const gamePresets = {
  Valorant: {
    ranks: [
      "Iron", "Bronze", "Silver", "Gold", "Platinum",
      "Diamond I", "Diamond II", "Diamond III",
      "Ascendant", "Immortal", "Radiant",
    ],
    roles: ["Duelist", "Controller", "Initiator", "Sentinel"],
  },
  "League of Legends": {
    ranks: [
      "Iron", "Bronze", "Silver", "Gold", "Platinum I",
      "Emerald", "Diamond", "Master", "Grandmaster", "Challenger",
    ],
    roles: ["Top", "Jungle", "Mid", "ADC", "Support"],
  },
} as const;

export type GamePresetKey = keyof typeof gamePresets;

export type Game = {
  name: string;
  rank: string;
  hours: string;
  role: string;
  winrate: string;
};