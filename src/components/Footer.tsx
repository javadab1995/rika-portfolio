import Link from "next/link";
import { Locale } from "../types/common";
import { getDictionary } from "../lib/i18n";
type HeaderProps = {
  locale: Locale;
};

export default function Footer({ locale }: HeaderProps) {
     const t = getDictionary(locale)
  return (
    <footer className=" w-full max-w-7xl mx-auto relative z-30 -mt-4">
      <div className="rounded-lg bg-navy  py-6 text-accent px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-[0.08em]">
              {t.home.footer.brand.name}
            </div>

            <div className="mt-1 text-sm uppercase tracking-[0.15em] text-accent-light">
              {t.home.footer.brand.subtitle}
            </div>

            <p className="mt-7 max-w-55  leading-5 text-accent-light">
              {t.home.footer.brand.description}
            </p>

            <div className="mt-7 flex gap-4 text-xs text-accent-light">
              <span>in</span>
              <span>◎</span>
              <span>G</span>
            </div>
          </div>

          <FooterColumn
            title={t.home.footer.company.title}
            links={t.home.footer.company.links}
          />

          <FooterColumn
            title={t.home.footer.services.title}
            links={t.home.footer.services.links}
          />

          <FooterColumn
            title={t.home.footer.resources.title}
            links={t.home.footer.resources.links}
          />

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase ">
              {t.home.footer.contact.title}
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-5 text-accent-light/80">
              <Link
                href={`mailto:${t.home.footer.contact.email}`}
                className="block hover:text-accent"
              >
                {t.home.footer.contact.email}
              </Link>

              <Link
                href={`tel:${t.home.footer.contact.phone}`}
                className="block hover:text-accent"
              >
                {t.home.footer.contact.phone}
              </Link>

              <p>
                {t.home.footer.contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/50 pt-5  text-accent/75 md:flex-row md:items-center md:justify-between">
          <span>{t.home.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly {
    label: string;
    
  }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-widest">
        {title}
      </h3>

      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <div
              
              className="text-sm text-accent-light/80 transition-colors hover:text-accent"
            >
              {link.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}