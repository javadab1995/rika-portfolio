import Link from "next/link";
import type { Locale } from "../../../types/common";
import { getDictionary } from "../../../lib/i18n";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);

  return (
    <div className="mx-auto flex w-full max-w-7xl px-6 py-6 md:py-10 ">
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <div data-hero-item className="mb-7 flex gap-4">
          <span className="text-xl font-medium tracking-[0.25em] text-accent mt-20">
            {t.hero.eyebrow.toUpperCase()}
          </span>
        </div>

        {/* Heading */}
        <h1
          data-hero-item
          className="whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-navy sm:text-3xl md:text-4xl lg:text-5xl mt-20 md:mt-0"
        >
          {t.hero.title.toUpperCase()}
        </h1>

        {/* Description */}
        <p
          data-hero-item
          className="mt-8 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8"
        >
          {t.hero.description}
        </p>

        {/* Actions */}
        <div
          data-hero-item
          className="mt-10 flex flex-wrap items-center justify-between gap-4 md:justify-start"
        >
          <Link
            href={`/${locale}/project`}
            className="inline-flex min-w-48 items-center justify-center rounded-full border border-accent bg-accent-light px-10 py-2.5 text-sm font-medium text-navy-sec transition"
          >
            {t.hero.primaryCta}
          </Link>

          <Link
            href={`/${locale}/account`}
            className="inline-flex min-w-48 items-center justify-center rounded-full bg-navy px-10 py-2.5 text-sm font-medium text-accent-light backdrop-blur-sm transition"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
