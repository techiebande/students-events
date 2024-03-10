import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filmoType = localFont({
  src: "../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});
