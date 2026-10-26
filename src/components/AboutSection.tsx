"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Locale } from "../types/common";
import { getDictionary } from "../lib/i18n";
import Button from "./Button";
import SectionHeader from "./headers/SectionHeader";


gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeaderProps = {
  locale: Locale;
};

export default function AboutSection({ locale }: HeaderProps) {
  const t = getDictionary(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      const reveal = revealRef.current;
      const line = lineRef.current;

      if (!section || !image || !reveal || !line) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(reveal, {
          scaleX: 1,
          transformOrigin: locale === "fa" ? "right center" : "left center",
        });

        gsap.set(line, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .fromTo(
            image,
            { y: 35, clipPath: "inset(8% 8% 8% 8%)" },
            {
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power3.out",
            },
          )
          .to(
            reveal,
            {
              scaleX: 0,
              duration: 1.25,
              ease: "power4.inOut",
            },
            "-=0.75",
          )
          .to(
            line,
            {
              scaleY: 1,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.55",
          )
          .from(
            section.querySelectorAll("[data-about-text]"),
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.14,
              ease: "power3.out",
            },
            "-=0.95",
          );

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [locale] },
  );

  return (
    <section
      ref={sectionRef}
      className="grid w-full grid-cols-1 items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28"
    >
      {/* Text */}
      <div className="flex flex-col items-start gap-8">
        <div data-about-text>
          <SectionHeader
            eyebrow={t.home.about.eyebrow}
            title={t.home.about.title}
            description={t.home.about.description}
            className="max-w-97.5"
          />
        </div>

        <div data-about-text>
          <Button maxW="max-w-40">
            <Link
              href={`/${locale}/about`}
              className="group flex items-center gap-2"
            >
              <span>{t.home.about.learnMore}</span>

              {locale === "en" ? (
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              ) : (
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              )}
            </Link>
          </Button>
        </div>
      </div>

      {/* Architectural image reveal */}
      <div className="relative mx-auto w-full max-w-140 lg:mx-0 lg:ml-auto">
        <div
          ref={imageRef}
          className="relative aspect-4/5 overflow-hidden rounded-sm bg-surface-secondary"
        >
          <Image
            src="/images/hero.jpg"
            alt={
              locale === "fa"
                ? "مهندس در حال بررسی پروژه عمرانی"
                : "Engineer inspecting a civil engineering project"
            }
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />

          {/* Technical drawing overlay */}
          <div
            ref={revealRef}
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-[#d9ded8]"
          >
            <svg
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              <g stroke="#52645e" strokeWidth="0.8" opacity="0.75">
                <path d="M45 420V110H355V420H45Z" />
                <path d="M45 180H355M45 250H355M45 320H355" />
                <path d="M115 110V420M185 110V420M255 110V420M325 110V420" />
                <path d="M30 110H18M30 420H18M24 110V420" />
                <path d="M45 95V80M355 95V80M45 87H355" />
                <path d="M60 390L175 275L235 315L345 190" strokeWidth="1.2" />
              </g>

              <g stroke="#52645e" strokeWidth="0.6" opacity="0.5">
                <path d="M0 50H400M0 450H400" strokeDasharray="4 5" />
                <path d="M200 0V500" strokeDasharray="4 5" />
                <circle cx="200" cy="250" r="115" strokeDasharray="3 5" />
              </g>

              <g fill="#52645e" fontSize="8" fontFamily="monospace">
                <text x="28" y="100">
                  SECTION A-A
                </text>
                <text x="275" y="75">
                  RIKA / 001
                </text>
                <text x="28" y="440">
                  STRUCTURAL STUDY
                </text>
              </g>
            </svg>
          </div>

          {/* Vertical drafting line */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 z-20 w-px bg-white/80"
          />

          {/* Image label */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-background/90 px-4 py-3 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-foreground">
              RIKA / ENGINEERING
            </span>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute -right-3 -top-3 h-12 w-12 border-r border-t border-border lg:-right-5 lg:-top-5"
        />

        <span
          aria-hidden="true"
          className="absolute -bottom-3 -left-3 h-12 w-12 border-b border-l border-border lg:-bottom-5 lg:-left-5"
        />
      </div>
    </section>
  );
}
