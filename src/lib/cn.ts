import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};
