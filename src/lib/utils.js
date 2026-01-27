import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return inputs
    .flatMap((a) => {
      if (!a) return [];
      if (typeof a === "string") return a.split(" ");
      if (Array.isArray(a)) return a;
      if (typeof a === "object") return Object.entries(a).filter(([, v]) => v).map(([k]) => k);
      return [];
    })
    .filter(Boolean)
    .join(" ");
}