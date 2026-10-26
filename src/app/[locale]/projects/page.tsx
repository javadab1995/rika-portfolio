
import ProjectsContent from "@/src/components/projects/ProjectsContent";
import { getDictionary } from "@/src/lib/i18n";
import type { Locale } from "@/src/types/common";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <header className="mt-8 grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t.projectsPage.eyebrow}
            </span>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {t.projectsPage.title}
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
            {t.projectsPage.description}
          </p>
        </header>

        <ProjectsContent
          projects={t.projectsPage.projects}
          filters={t.projectsPage.filters}
          locale={locale}
        />
      </section>
    </main>
  );
}
