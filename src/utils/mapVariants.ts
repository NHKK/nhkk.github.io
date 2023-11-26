import type { TailwindColor } from "./types/tailwind";

const MAP_COLOR_VARIANT_TO_BG: Record<TailwindColor, string> = {
  orange: "bg-orange-500",
  violet: "bg-violet-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-violet-500",
  cyan: "bg-cyan-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  purple: "bg-purple-500",
  fushia: "bg-fushia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500",
  sky: "bg-sky-300",
  embarkspace0: "bg-[#100E23]",
  embarkspace1: "bg-[#1E1C31]",
  embarkspace2: "bg-[#2D2B40]",
  embarkspace3: "bg-[#3E3859]",
  embarkspace4: "bg-[#585273]",
  embarkgreen: "bg-[#A1EFD3]"
};

const MAP_COLOR_VARIANT_TO_TEXT: Record<TailwindColor, string> = {
  orange: "text-orange-500",
  violet: "text-violet-500",
  red: "text-red-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-violet-500",
  cyan: "text-cyan-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  purple: "text-purple-500",
  fushia: "text-fushia-500",
  pink: "text-pink-500",
  rose: "text-rose-500",
  sky: "text-sky-300",
  embarkspace0: "text-[#100E23]",
  embarkspace1: "text-[#1E1C31]",
  embarkspace2: "text-[#2D2B40]",
  embarkspace3: "text-[#3E3859]",
  embarkspace4: "text-[#585273]",
  embarkgreen: "text-[#A1EFD3]"
};

export { MAP_COLOR_VARIANT_TO_BG, MAP_COLOR_VARIANT_TO_TEXT };
