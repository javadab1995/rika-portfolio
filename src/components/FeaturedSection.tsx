"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import type { Locale } from "../types/common";
import { getDictionary } from "../lib/i18n";
import ProjectCard from "./ProjectCard";
import ServiceItem from "./ServiceItem";
import Button from "./Button";
import SectionHeader from "./headers/SectionHeader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeaderProps = {
  locale: Locale;
};

export default function FeaturedSection({ locale }: HeaderProps) {
  const t = getDictionary(locale);
  const sectionRef = useRef<HTMLElement>(null);

 

useGSAP(
  () => {
    const section = sectionRef.current;
    if (!section) return;

    const headings = section.querySelectorAll("[data-reveal='heading']");
    const projectCards = section.querySelectorAll("[data-reveal='project']");
    const serviceItems = section.querySelectorAll("[data-reveal='service']");

    const elements = [...headings, ...projectCards, ...serviceItems];

    let hasLeftViewport = false;
    let timeline: gsap.core.Timeline | null = null;

    const playAnimation = () => {
      timeline?.kill();
      gsap.killTweensOf(elements);

      gsap.set(elements, {
        autoAlpha: 0,
        y: 36,
      });

      timeline = gsap.timeline();

      timeline
        .to(headings, {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.16,
          ease: "power3.out",
        })
        .to(
          projectCards,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          serviceItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.3",
        );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 78%",
      end: "bottom 22%",

      onLeave: () => {
        hasLeftViewport = true;
      },

      onLeaveBack: () => {
        hasLeftViewport = true;
      },

      onEnter: () => {
        if (!hasLeftViewport) return;
        playAnimation();
      },

      onEnterBack: () => {
        if (!hasLeftViewport) return;
        playAnimation();
      },
    });

    return () => {
      trigger.kill();
      timeline?.kill();
      gsap.killTweensOf(elements);
    };
  },
  { scope: sectionRef },
);



  return (
    <section ref={sectionRef} className="mt-24 w-full">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12 xl:gap-16">
        {/* Projects */}
        <div className="border-y border-border">
          <div
            data-reveal="heading"
            className="flex flex-wrap items-center justify-between gap-4 py-5"
          >
            <SectionHeader
              title={t.projectsSection.title.toUpperCase()}
              className="max-w-97.5 space-y-4"
            />

            <Button>
              <span>{t.projectsSection.cta}</span>

              {locale === "en" ? (
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              ) : (
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              )}
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.projectsSection.projects.map((project) => (
              <div key={project.title} data-reveal="project">
                <ProjectCard project={project} locale={locale} />
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="rounded-xl bg-accent-light/50 p-8">
          <div
            data-reveal="heading"
            className="mb-8 flex items-center justify-between gap-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-[0.08em] text-foreground md:text-base">
              {t.servicesSection.title}
            </h2>

            <Button>
              <span>{t.servicesSection.cta}</span>

              {locale === "en" ? (
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              ) : (
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {t.servicesSection.services.map((service) => (
              <div key={service.title} data-reveal="service">
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
