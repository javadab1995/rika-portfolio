import { Locale } from "../types/common";
import { getDictionary } from "../lib/i18n";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./headers/SectionHeader";

type HeaderProps = {
  locale: Locale;
};

export default function TestimonialsSection({ locale }: HeaderProps) {
  const t = getDictionary(locale);

  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-8 ">
          <SectionHeader
            eyebrow={t.home.testimonials.eyebrow}
            title={t.home.testimonials.title}
            className="max-w-97.5 space-y-4"
          />

          {t.home.testimonials.items.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
