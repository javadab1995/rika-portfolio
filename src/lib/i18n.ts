import { en } from "@/src/locales/en";
import { fa } from "@/src/locales/fa";
import { locales, type Locale } from "@/src/types/common";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return locale === "fa" ? fa : en;
}
