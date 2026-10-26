import AboutSection from "@/src/components/AboutSection";
import ContactCTA from "@/src/components/ContactCTA";
import FeaturedSection from "@/src/components/FeaturedSection";
import InsightsSection from "@/src/components/InsightsSection";
import ProcessSection from "@/src/components/ProcessSection";
import CredentialsSection from "@/src/components/sections/CredentialsSection";
import HeroSection from "@/src/components/sections/hero/HeroSection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import type { Locale } from "@/src/types/common";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <HeroSection locale={locale} />

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 xl:px-0">
        <FeaturedSection locale={locale} />
        <section className="relative grid overflow-hidden rounded-md border border-accent lg:grid-cols-2">
          <AboutSection locale={locale} />

          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-accent/40 lg:block" />

          <div className="border-t border-accent lg:border-t-0">
            <ProcessSection locale={locale} />
          </div>
        </section>

        <CredentialsSection locale={locale} />

        <section className="grid gap-8 rounded-md bg-accent-light/50 p-8 lg:grid-cols-2 lg:p-12">
          <TestimonialsSection locale={locale} />
          <InsightsSection locale={locale} />
        </section>

        <ContactCTA locale={locale} />
      </div>

   
    </main>
  );
}
