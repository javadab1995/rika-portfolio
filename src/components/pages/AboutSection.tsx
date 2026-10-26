"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  MapPin,
  BriefcaseBusiness,
  ArrowUpLeft,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getDictionary } from "@/src/lib/i18n";
import type { Locale } from "@/src/types/common";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type AboutSectionProps = {
  locale: Locale;
};

export default function AboutSection({
  locale,
}: AboutSectionProps) {
  const t = getDictionary(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const isEnglish = locale === "en";

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const image = section.querySelector<HTMLElement>(
        "[data-about-image]",
      );
      const content = section.querySelectorAll<HTMLElement>(
        "[data-about-content]",
      );
      const details = gsap.utils.toArray<HTMLElement>(
        "[data-about-detail]",
        section,
      );
      const stats = gsap.utils.toArray<HTMLElement>(
        "[data-about-stat]",
        section,
      );

      const animatedElements = [
        ...(image ? [image] : []),
        ...Array.from(content),
        ...details,
        ...stats,
      ];

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reset = () => {
          gsap.set(image, {
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
          });

          gsap.set(content, {
            autoAlpha: 0,
            y: 24,
          });

          gsap.set(details, {
            autoAlpha: 0,
            x: isEnglish ? 18 : -18,
          });

          gsap.set(stats, {
            autoAlpha: 0,
            y: 20,
          });
        };

        const play = () => {
          gsap.killTweensOf(animatedElements);
          reset();

          const timeline = gsap.timeline();

          if (image) {
            timeline.to(image, {
              autoAlpha: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.15,
              ease: "power3.inOut",
            });
          }

          timeline.to(
            content,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.65",
          );

          timeline.to(
            details,
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.4",
          );

          timeline.to(
            stats,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.3",
          );
        };

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 78%",
          end: "bottom 15%",
          onEnter: play,
          onEnterBack: play,
          onLeave: reset,
          onLeaveBack: reset,
        });

        return () => {
          trigger.kill();
          gsap.killTweensOf(animatedElements);
        };
      });

      return () => mm.revert();
    },
    {
      scope: sectionRef,
      dependencies: [locale],
    },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-5 border-b border-border pb-6 sm:mb-14 lg:mb-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t.about.eyebrow}
            </span>

            <h2 className="mt-3 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
          </div>

          <span
            dir="ltr"
            className="shrink-0 pb-1 font-mono text-xs tabular-nums text-text/40 sm:text-sm"
          >
            {t.about.number}
          </span>
        </div>

        {/* Profile */}
        <div
          className={`grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 ${
            isEnglish ? "" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`lg:col-span-5 ${
              isEnglish ? "lg:order-1" : "lg:order-1"
            }`}
          >
            <div
              data-about-image
              className="relative aspect-4/5 overflow-hidden bg-surface-secondary"
            >
              <Image
                src="/images/about.jpg"
                alt={t.about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/60 to-transparent px-5 pb-5 pt-16 text-white sm:px-6 sm:pb-6">
                <span className="font-mono text-[10px] tracking-[0.16em] sm:text-xs">
                  RIKA / PROFILE
                </span>

                <ArrowUpLeft
                  aria-hidden="true"
                  className={`h-5 w-5 ${
                    isEnglish ? "rotate-90" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.12em] text-text/45 sm:text-xs">
              <span>{isEnglish ? "Professional profile" : "پروفایل حرفه‌ای"}</span>
              <span dir="ltr">RIKA / 01</span>
            </div>
          </div>

          {/* Biography and details */}
          <div className="flex min-w-0 flex-col lg:col-span-7 lg:pt-2">
            <p
              data-about-content
              className="max-w-2xl whitespace-pre-line text-base leading-8 text-text/75 sm:text-lg sm:leading-9"
            >
              {t.about.description}
            </p>

            <div className="mt-9 border-t border-border">
              <div
                data-about-detail
                className="grid grid-cols-[28px_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[36px_1fr] sm:gap-5"
              >
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="mt-1 h-4.5 w-4.5 text-accent"
                  strokeWidth={1.5}
                />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-text/45 sm:text-xs">
                    {t.about.roleLabel}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-foreground sm:text-base">
                    {t.about.role}
                  </p>
                </div>
              </div>

              <div
                data-about-detail
                className="grid grid-cols-[28px_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[36px_1fr] sm:gap-5"
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-4.5 w-4.5 text-accent"
                  strokeWidth={1.5}
                />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-text/45 sm:text-xs">
                    {t.about.locationLabel}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-foreground sm:text-base">
                    {t.about.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 border-y border-border sm:grid-cols-3 lg:mt-16">
          {t.about.stats.map((stat, index) => (
            <div
              key={stat.label}
              data-about-stat
              className={`
                flex min-w-0 items-start justify-between gap-4 py-5
                sm:flex-col sm:justify-start sm:gap-3 sm:px-6 sm:py-7
                ${
                  index !== 0
                    ? "border-t border-border sm:border-t-0"
                    : ""
                }
                ${
                  index > 0
                    ? isEnglish
                      ? "sm:border-l"
                      : "sm:border-r"
                    : ""
                }
                border-border
                ${
                  index === 0
                    ? isEnglish
                      ? "sm:pl-0"
                      : "sm:pr-0"
                    : ""
                }
              `}
            >
              <p
                className="order-2 max-w-[55%] text-xs leading-5 text-text/55 sm:order-1 sm:max-w-none sm:text-sm"
              >
                {stat.label}
              </p>

              <p
                dir="auto"
                className="order-1 text-3xl font-semibold leading-none tracking-tight text-foreground tabular-nums sm:order-2 sm:text-4xl"
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
