import Link from "next/link";
import { Locale } from "../types/common";

import { getDictionary } from "../lib/i18n";
import InsightCard from "./InsightCard";
import SectionHeader from "./headers/SectionHeader";
import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import Button from "./Button";

type HeaderProps = {
  locale: Locale;
};

export default function InsightsSection({ locale }: HeaderProps) {
  const t = getDictionary(locale);
  return (
    <section className=" w-full">
      <div className="w-full">
        <div className="w-full">
          <div className="flex items-center flex-wrap justify-between ">
            <SectionHeader
              eyebrow={t.home.insights.eyebrow}
              title={t.home.insights.title}
              className="max-w-97.5 space-y-4"
            />
            <Button>
              <span>{t.home.insights.viewAll}</span>
              <Link href="/about">
                {locale === "en" ? (
                  <ArrowRightIcon className="transition-transform duration-300 group-hover:-translate-x-0.5 w-4 h-4" />
                ) : (
                  <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5 w-4 h-4" />
                )}
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 lg:mt-8">
            {t.home.insights.items.slice(0, 2).map((item) => (
              <InsightCard
                key={item.title}
                item={item}
                readMore={t.home.insights.readMore}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
