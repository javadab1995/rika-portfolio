import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Locale } from "@/src/types/common";

type Project = {
  slug: string;
  year: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  index: number;
};

export default function ProjectCard({
  project,
  locale,
  index,
}: ProjectCardProps) {
  const isFa = locale === "fa";

  return (
    <article className="group border-t border-border">
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="grid gap-6 py-8 transition-colors md:py-10 lg:grid-cols-[60px_1fr_1.1fr] lg:items-center lg:gap-10"
      >
        <span className="text-sm tabular-nums text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{project.year}</span>

            <span className="h-1 w-1 rounded-full bg-accent" />

            <span>{project.category}</span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm font-medium text-foreground">
            <span>{project.location}</span>

            {isFa ? (
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </div>
        </div>

        <div className="relative aspect-16/10 overflow-hidden rounded-md bg-surface-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
}
