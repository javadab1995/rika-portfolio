
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Locale } from "@/src/types/common";
import { getDictionary } from "@/src/lib/i18n";
import SectionHeader from "@/src/components/headers/SectionHeader";
import { BsInstagram } from "react-icons/bs";

type ContactPageProps = {
  locale: Locale;
};

export default function ContactPage({ locale }: ContactPageProps) {
  const t = getDictionary(locale);
  const isEnglish = locale === "en";

  const socials = [
    {
      label: t.contactPage.social.instagram.label,
      value: t.contactPage.social.instagram.username,
      href: t.contactPage.social.instagram.href,
      icon: BsInstagram,
    },
    {
      label: t.contactPage.social.telegram.label,
      value: t.contactPage.social.telegram.username,
      href: t.contactPage.social.telegram.href,
      icon: Send,
    },
    {
      label: t.contactPage.social.whatsapp.label,
      value: t.contactPage.social.whatsapp.username,
      href: t.contactPage.social.whatsapp.href,
      icon: MessageCircle,
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20  lg:py-24">
        {/* Header */}
        <section className="my-8 max-w-3xl ">
          <SectionHeader
            eyebrow={t.contactPage.eyebrow}
            title={t.contactPage.title}
            description={t.contactPage.description}
          />
        </section>

        {/* Contact Information */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* Contact */}
          <div className="rounded-md  border border-border p-8 lg:p-12">
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-foreground">
                {t.contactPage.contactInfo.title}
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <a
                href={t.contactPage.contactInfo.email.href}
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-sec text-accent transition-transform duration-300 group-hover:-translate-y-1">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-muted">
                    {t.contactPage.contactInfo.email.label}
                  </div>

                  <div className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    {t.contactPage.contactInfo.email.value}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={t.contactPage.contactInfo.phone.href}
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-sec text-accent transition-transform duration-300 group-hover:-translate-y-1">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-muted">
                    {t.contactPage.contactInfo.phone.label}
                  </div>

                  <div className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    {t.contactPage.contactInfo.phone.value}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-sec text-accent">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-muted">
                    {t.contactPage.contactInfo.location.label}
                  </div>

                  <div className="mt-1 text-sm font-medium text-foreground">
                    {t.contactPage.contactInfo.location.value}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="rounded-md bg-accent-light/30 p-8 lg:p-12">
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-foreground">
                {t.contactPage.social.title}
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                {t.contactPage.social.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-md border border-border bg-background p-4 transition-all duration-300 hover:border-accent hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-sec text-accent">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {social.label}
                        </div>

                        <div className="mt-1 text-xs text-muted">
                          {social.value}
                        </div>
                      </div>
                    </div>

                    {isEnglish ? (
                      <ArrowRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                    ) : (
                      <ArrowLeft className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="mt-8 rounded-md bg-navy p-8 text-accent-light md:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t.contactPage.emailCta.title}
              </h2>

              <p className="mt-3 text-sm leading-6 opacity-70">
                {t.contactPage.emailCta.description}
              </p>
            </div>

            <Link
              href="mailto:hello@structura.com"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-accent px-5 py-3 text-sm font-medium text-accent-light transition-colors hover:bg-accent hover:text-navy"
            >
              <span>{t.contactPage.emailCta.button}</span>

              {isEnglish ? (
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              ) : (
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              )}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
;
