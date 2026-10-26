"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/src/components/cards/ProjectCard";
import type { Locale } from "@/src/types/common";
import { getDictionary } from "@/src/lib/i18n";

type Dictionary = ReturnType<typeof getDictionary>;
type Project = Dictionary["projectsPage"]["projects"][number];

type FilterKey =
  | "all"
  | "ministryOfInterior"
  | "judiciaryExperts"
  | "postgraduate"
  | "engineeringOrganization";

type CategorizedProject = Project & {
  organization?: Exclude<FilterKey, "all">;
};

type ProjectsContentProps = {
  projects: Dictionary["projectsPage"]["projects"];
  filters: Dictionary["projectsPage"]["filters"];
  locale: Locale;
};
const FILTER_KEYS: FilterKey[] = [
  "all",
  "ministryOfInterior",
  "judiciaryExperts",
  "postgraduate",
  "engineeringOrganization",
];

export default function ProjectsContent({
  projects,
  filters,
  locale,
}: ProjectsContentProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

const filteredProjects = useMemo(() => {
  if (activeFilter === "all") return projects;

  return projects.filter(
    (project) => (project as CategorizedProject).organization === activeFilter,
  );
}, [projects, activeFilter]);

    
  return (
    <div className="grid gap-10 py-10 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
      <aside className="md:sticky md:top-28 md:h-fit">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {locale === "fa" ? "دسته‌بندی پروژه‌ها" : "PROJECT CATEGORIES"}
        </p>

        <nav
          aria-label={
            locale === "fa" ? "دسته‌بندی پروژه‌ها" : "Project categories"
          }
          className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-1 md:overflow-visible md:pb-0"
        >
          {FILTER_KEYS.map((key) => {
            const isActive = activeFilter === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                aria-pressed={isActive}
                className={`flex shrink-0 items-center justify-between gap-3 border-s-2 px-4 py-3 text-start text-sm transition-colors duration-200 md:w-full ${
                  isActive
                    ? "border-accent bg-accent/5 font-medium text-foreground"
                    : "border-transparent text-muted hover:border-border hover:text-foreground"
                }`}
              >
                <span>{filters[key]}</span>

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-sm font-medium text-foreground">
            {filters[activeFilter]}
          </h2>

          <span className="text-xs tabular-nums text-muted">
            {String(filteredProjects.length).padStart(2, "0")}
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                index={index}
              />
            ))}

            <div className="border-t border-border" />
          </div>
        ) : (
          <div className="flex min-h-56 flex-col items-center justify-center border-b border-border px-6 py-16 text-center">
            <span className="text-xs uppercase tracking-[0.18em] text-accent">
              {locale === "fa" ? "به‌زودی" : "COMING SOON"}
            </span>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              {locale === "fa"
                ? "پروژه‌های این دسته هنوز اضافه نشده‌اند."
                : "Projects in this category have not been added yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
