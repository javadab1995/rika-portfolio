"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Locale } from "../types/common";
import { getDictionary } from "../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type StatsProps = {
  locale: Locale;
};

type ParsedStat = {
  number: number;
  prefix: string;
  suffix: string;
};

function normalizeDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function parseStatValue(value: string): ParsedStat {
  const normalized = normalizeDigits(value);
  const match = normalized.match(/\d+/);

  if (!match || match.index === undefined) {
    return { number: 0, prefix: value, suffix: "" };
  }

  const start = match.index;
  const end = start + match[0].length;

  return {
    number: Number(match[0]),
    prefix: value.slice(0, start),
    suffix: value.slice(end),
  };
}

function formatNumber(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(
    Math.round(value),
  );
}

export default function StatsComponent({ locale }: StatsProps) {
  const t = getDictionary(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-stat]",
        containerRef.current,
      );

      items.forEach((item, index) => {
        const numberElement =
          item.querySelector<HTMLElement>("[data-stat-number]");

        if (!numberElement) return;

        const rawValue = numberElement.dataset.value;
        if (!rawValue) return;

        const { number, prefix, suffix } = parseStatValue(rawValue);

        const prefixElement =
          item.querySelector<HTMLElement>("[data-stat-prefix]");
        const suffixElement =
          item.querySelector<HTMLElement>("[data-stat-suffix]");

        if (prefixElement) prefixElement.textContent = prefix;
        if (suffixElement) suffixElement.textContent = suffix;

        const counter = { value: 0 };

        numberElement.textContent = formatNumber(0, locale);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });

        timeline.fromTo(
          item,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: "power3.out",
            delay: index * 0.04,
          },
        );

        timeline.to(
          counter,
          {
            value: number,
            duration: 1.7,
            ease: "power2.out",
            onUpdate: () => {
              numberElement.textContent = formatNumber(counter.value, locale);
            },
          },
          "-=0.25",
        );
      });
    },
    {
      scope: containerRef,
      dependencies: [locale],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={containerRef} className="relative z-20 mx-auto mt-4 w-full px-4">
      <div
        className="
      mx-auto grid max-w-3xl grid-cols-2
      divide-x divide-y divide-border/60
      overflow-hidden rounded-md border border-border/60
      bg-accent-light/30 backdrop-blur
      md:grid-cols-4 md:divide-y-0
    "
      >
        {t.stats.map((stat, index) => {
          const { prefix, suffix } = parseStatValue(stat.value);

          return (
            <div
              key={`${stat.label}-${index}`}
              data-stat
              className="
    flex min-h-20 flex-col items-center justify-center
    gap-1 px-2 py-3 text-center
    md:min-h-24 md:px-3 md:py-3
  "
            >
              <div
                dir="ltr"
                className="
    flex items-baseline justify-center gap-0.5
    whitespace-nowrap text-xl font-semibold
    leading-tight tracking-tight tabular-nums
    sm:text-2xl
  "
              >
                <span data-stat-prefix>{prefix}</span>

                <span data-stat-number data-value={stat.value}>
                  {formatNumber(0, locale)}
                </span>

                <span data-stat-suffix>{suffix}</span>
              </div>

              <span
                className="
    max-w-full text-xs font-medium leading-4
    text-text/60
  "
              >
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
