export const areas = [
  {
    slug: "palatka",
    city: "Palatka",
  }
] as const;

export type Area = typeof areas[number];
