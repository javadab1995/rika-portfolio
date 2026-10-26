import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import SectionHeader from "@/src/components/headers/SectionHeader";
import { getDictionary } from "@/src/lib/i18n";

import type { Locale } from "@/src/types/common";
import Button from "@/src/components/Button";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  const t = getDictionary(locale);

  const isFa = locale === "fa";

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-0 lg:py-24">
        {/* Header */}

        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:items-end">
          <SectionHeader
            eyebrow={t.servicesPage.eyebrow}
            title={t.servicesPage.title}
          />

          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
            {t.servicesPage.description}
          </p>
        </div>

        {/* Services */}

        <div className="divide-y divide-border">
          {t.servicesPage.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="grid gap-8 py-12 lg:grid-cols-[100px_1fr_1fr]"
              >
                {/* Number */}

                <div className="text-sm text-accent">{service.number}</div>

                {/* Main */}

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-sec">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Details */}

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm leading-7 text-muted">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <Check className="h-4 w-4 shrink-0 text-accent" />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}

      <section className="border-y border-border bg-surface-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-0 lg:py-24">
          <div className="mb-14">
            <SectionHeader
              eyebrow={t.servicesPage.process.eyebrow}
              title={t.servicesPage.process.title}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.servicesPage.process.steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-accent pt-5"
              >
                <span className="text-sm text-accent">{step.number}</span>

                <h3 className="mt-6 text-xl font-medium">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-0 lg:py-24">
        <div className="flex flex-col justify-between gap-8 rounded-lg border border-accent bg-accent-light/40 p-8 md:flex-row md:items-end lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.servicesPage.cta.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted md:text-base">
              {t.servicesPage.cta.description}
            </p>
          </div>
          <Button maxW={!isFa ? "max-w-42" : "max-w-[135px]"}>
            <Link
              href={`/${locale}/contact`}
              className="flex gap-4 items-center "
            >
              {t.servicesPage.cta.button}

              {isFa ? (
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
