import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Locale } from "../types/common";
import Button from "./Button";

type Project = {
  year: string;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border card">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Year */}
        <span className="absolute left-4 top-4 z-10 text-sm font-medium text-foreground/40">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate  font-medium tracking-[-0.02em]">
              {project.title}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text/50">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
            </div>
          </div>

          <Button>
            {locale === "en" ? (
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            ) : (
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
