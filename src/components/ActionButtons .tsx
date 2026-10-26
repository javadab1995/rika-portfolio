
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "../types/common";

type ActionButtonsProps = {
  locale: Locale;
  contactButton: string;
};

export default function ActionButtons({
  locale,
  contactButton,
}: ActionButtonsProps) {
  const pathname = usePathname();

  const languagePath =
    locale === "fa"
      ? pathname.replace(/^\/fa(?=\/|$)/, "/en")
      : pathname.replace(/^\/en(?=\/|$)/, "/fa");

  return (
    <div className="flex gap-3">
      <Link
        className="hidden items-center justify-center rounded-full bg-accent-light px-3 py-1.5 text-navy-sec transition-colors hover:bg-accent sm:flex"
        href={`/${locale}/contact`}
      >
        {contactButton}
      </Link>

      <Link
        href={languagePath}
        hrefLang={locale === "fa" ? "en" : "fa"}
        className="flex items-center justify-center rounded-full bg-navy px-2 py-1.5 text-sm font-medium uppercase tracking-wider text-accent-light transition-colors hover:text-accent"
      >
        {locale === "fa" ? "EN" : "FA"}
      </Link>
    </div>
  );
}
