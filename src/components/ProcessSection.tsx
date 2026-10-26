import Link from "next/link";
import { Locale } from "../types/common";

import { getDictionary } from "../lib/i18n";
import ProcessStep from "./ProcessStep";
import Button from "./Button";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import SectionHeader from "./headers/SectionHeader";

type HeaderProps = {
  locale: Locale;
};
export default function ProcessSection({ locale }: HeaderProps) {
    const t = getDictionary(locale);
  return (
    <section className="p-6 md:p-8 lg:p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeader
            eyebrow={t.home.process.eyebrow}
            title={t.home.process.title}
            className="max-w-75"
          />

          <Button>
            <Link href="/process" className="flex items-center gap-2">
              <span>{t.home.process.viewFullProcess}</span>

              {locale === "en" ? (
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              ) : (
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              )}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.home.process.steps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}