"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpLeft } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Locale } from "@/src/types/common";
import { getDictionary } from "@/src/lib/i18n";
import CredentialCard from "../cards/CredentialCard";
import SectionHeader from "../headers/SectionHeader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeaderProps = {
  locale: Locale;
};

export default function CredentialsSection({
  locale,
}: HeaderProps) {
  const t = getDictionary(locale);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const intro = section.querySelector<HTMLElement>(
        "[data-credentials-intro]",
      );

      const items = gsap.utils.toArray<HTMLElement>(
        "[data-credential-item]",
        section,
      );

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        if (intro) {
          timeline.fromTo(
            intro,
            {
              y: 30,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
            },
          );
        }

        timeline.fromTo(
          items,
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            stagger: 0.16,
            ease: "power3.out",
          },
          "-=0.35",
        );

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    {
      scope: sectionRef,
      dependencies: [locale],
    },
  );

  const isEnglish = locale === "en";
  const ArrowIcon = isEnglish ? ArrowRight : ArrowLeft;

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-border px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Introduction */}
          <div
            data-credentials-intro
            className="flex flex-col items-start lg:sticky lg:top-28 lg:self-start"
          >
            <SectionHeader
              eyebrow={t.home.credentials.eyebrow}
              title={t.home.credentials.title}
              description={t.home.credentials.description}
              className="max-w-xl"
            />

            <Link
              href={`/${locale}/credentials`}
              className="
                group mt-8 inline-flex items-center gap-3
                border-b border-border pb-2
                text-sm font-medium
                transition-colors duration-300
                hover:border-accent hover:text-accent
              "
            >
              <span>{t.home.credentials.viewAll}</span>

              <ArrowIcon
                className={`
                  h-4 w-4 transition-transform duration-300
                  ${isEnglish
                    ? "group-hover:translate-x-1"
                    : "group-hover:-translate-x-1"}
                `}
              />
            </Link>

            <div className="mt-12 hidden w-full max-w-xs border-t border-border pt-4 lg:block">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/45"
                dir="ltr"
              >
                RIKA / CREDENTIALS
              </span>
            </div>
          </div>

          {/* Credentials */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-text/50">
                {isEnglish ? "Selected credentials" : "مدارک منتخب"}
              </span>

              <span
                className="font-mono text-xs tabular-nums text-text/40"
                dir="ltr"
              >
                {String(t.home.credentials.items.slice(0, 2).length).padStart(
                  2,
                  "0",
                )}
                {" / "}
                {String(t.home.credentials.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {t.home.credentials.items.slice(0, 2).map((item, index) => (
                <article
                  key={item.title}
                  data-credential-item
                  className="group relative min-w-0 py-6 sm:py-8"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span
                      className="font-mono text-xs tabular-nums text-text/40 transition-colors duration-300 group-hover:text-accent"
                      dir="ltr"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpLeft
                      aria-hidden="true"
                      className="
                        h-4 w-4 text-text/35
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-accent
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <CredentialCard item={item} locale={locale} />
                  </div>
                </article>
              ))}
            </div>

            <Link
              href={`/${locale}/credentials`}
              className="
                group mt-5 inline-flex items-center gap-2
                text-xs text-text/55 transition-colors
                hover:text-accent sm:hidden
              "
            >
              <span>{t.home.credentials.viewAll}</span>
              <ArrowIcon
                className={`
                  h-3.5 w-3.5 transition-transform duration-300
                  ${isEnglish
                    ? "group-hover:translate-x-1"
                    : "group-hover:-translate-x-1"}
                `}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
 }