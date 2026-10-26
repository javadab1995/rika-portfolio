// src/app/[locale]/credentials/page.tsx

import Footer from "@/src/components/Footer";
import { getDictionary } from "@/src/lib/i18n";

import type { Locale } from "@/src/types/common";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function CredentialsPage({ params }: PageProps) {
  const { locale } = await params;

  const t = getDictionary(locale);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col gap-24 px-6 xl:px-0 py-24">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t.credentialsPage.eyebrow}
            </span>

            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {t.credentialsPage.title}
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
            {t.credentialsPage.description}
          </p>
        </div>

        {/* Stats */}
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-0 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t.credentialsPage.eyebrow}
            </span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {t.credentialsPage.title}
            </h2>

            <div className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:items-start">
              <button
                type="button"
                className="rounded-full border border-accent bg-accent px-4 py-2 text-sm text-navy-secondary transition-colors"
              >
                {t.credentialsPage.filters.all}
              </button>

              <button
                type="button"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {t.credentialsPage.filters.certification}
              </button>

              <button
                type="button"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {t.credentialsPage.filters.qualification}
              </button>

              <button
                type="button"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {t.credentialsPage.filters.achievement}
              </button>

              <button
                type="button"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {t.credentialsPage.filters.recognition}
              </button>
            </div>
          </aside>

          {/* Items */}
          <div className="divide-y divide-border border-t border-border">
            {t.credentialsPage.items.map((item, index) => (
              <article
                key={item.id}
                className="group grid gap-6 py-8 md:grid-cols-[80px_1fr_180px] md:items-center md:gap-10 md:py-10"
              >
                {/* Number / Year */}
                <div>
                  <span className="text-sm font-medium text-accent">
                    {item.year}
                  </span>

                  <div className="mt-2 text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted">
                    {item.type}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-accent">
                    {item.issuer}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <button
                  type="button"
                  className="relative aspect-4/3 overflow-hidden rounded-md border border-border bg-surface-secondary"
                  aria-label={item.title}
                >
                  {/* بعداً اینجا Modal Preview اضافه می‌کنیم */}

                  <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs text-muted">
                    {item.title}
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
