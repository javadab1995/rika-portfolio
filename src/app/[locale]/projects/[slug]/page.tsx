import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getDictionary } from "@/src/lib/i18n";

import type { Locale } from "@/src/types/common";

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function SingleProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;

  const t = getDictionary(locale);

  const project = t.projectsPage.projects.find(
    (project) => project.slug === slug,
  );

  if (!project) {
    notFound();
  }

  const currentIndex = t.projectsPage.projects.findIndex(
    (item) => item.slug === slug,
  );

  const nextProject =
    t.projectsPage.projects[
      (currentIndex + 1) % t.projectsPage.projects.length
    ];

  const isFa = locale === "fa";

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-0 lg:py-16">
        {/* Back */}

        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          {isFa ? (
            <ArrowRight className="h-4 w-4" />
          ) : (
            <ArrowLeft className="h-4 w-4" />
          )}

          {t.projectsPage.backToProjects}
        </Link>

        {/* Header */}

        <header className="grid gap-10 py-14 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{project.year}</span>

              <span className="h-1 w-1 rounded-full bg-accent" />

              <span>{project.category}</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </div>

          <p className="text-base leading-8 text-muted">
            {project.description}
          </p>
        </header>

        {/* Hero Image */}

        <div className="relative aspect-16/8 overflow-hidden rounded-lg bg-surface-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Project Info */}

        <section className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-border py-8 md:grid-cols-4">
          <div>
            <span className="text-xs text-muted">
              {t.projectsPage.labels.year}
            </span>

            <p className="mt-2 text-sm font-medium">{project.year}</p>
          </div>

          <div>
            <span className="text-xs text-muted">
              {t.projectsPage.labels.location}
            </span>

            <p className="mt-2 text-sm font-medium">{project.location}</p>
          </div>

          <div>
            <span className="text-xs text-muted">
              {t.projectsPage.labels.scope}
            </span>

            <p className="mt-2 text-sm font-medium">{project.scope}</p>
          </div>

          <div>
            <span className="text-xs text-muted">
              {t.projectsPage.labels.area}
            </span>

            <p className="mt-2 text-sm font-medium">{project.area}</p>
          </div>
        </section>

        {/* Overview */}

        <section className="grid gap-10 py-20 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {t.projectsPage.overview}
            </span>
          </div>

          <p className="max-w-3xl text-xl leading-9 text-foreground md:text-2xl md:leading-10">
            {project.overview}
          </p>
        </section>

        {/* Gallery */}

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{t.projectsPage.gallery}</h2>

            <span className="text-sm text-muted">
              {String(project.gallery.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-md bg-surface-secondary ${
                  index === 0
                    ? "aspect-4/3 md:col-span-2 md:aspect-16/7"
                    : "aspect-4/3"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Next Project */}

        <section className="mt-24 border-t border-border pt-10">
          <Link
            href={`/${locale}/projects/${nextProject.slug}`}
            className="group flex items-end justify-between gap-6"
          >
            <div>
              <span className="text-sm text-muted">
                {t.projectsPage.nextProject}
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                {nextProject.title}
              </h2>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:bg-accent">
              {isFa ? (
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              )}
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
