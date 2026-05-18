import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCleanSiteUrl() {
  const siteUrl = process.env.SITE_URL || "https://greymarketipo.com";
  return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
}
