;
import { getDictionary } from "../lib/i18n";
import { Locale } from "../types/common";
type HeaderProps = {
  locale: Locale;
};
export default function ContactCTA({ locale }: HeaderProps) {
    const t = getDictionary(locale)
  return (
    <section className=" bg-border/30 mt-10 w-full rounded-xl">
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 " />

        <div className="relative z-10 grid min-h-57.5 grid-cols-1 items-center gap-8 px-4 py-6 lg:grid-cols-[1.2fr_0.8fr_1.5fr] lg:px-6">
          <h2 className="whitespace-pre-line  text-2xl leading-[0.95] tracking-[-0.04em] md:text-3xl font-bold">
            {t.home.cta.title}
          </h2>

          <div>
            <p className="text-sm font-medium">{t.home.cta.projectQuestion}</p>

            <p className="mt-1 text-xs ">{t.home.cta.description}</p>
          </div>

          <form className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder={t.home.cta.form.name}
              className="h-12 rounded-md border border-border bg-surface-sec  px-4 text-xs outline-none "
            />

            <input
              type="email"
              placeholder={t.home.cta.form.email}
              className="h-12 rounded-md  border border-border bg-surface-sec  px-4 text-xs outline-none "
            />

            <select
              defaultValue=""
              className="h-12 rounded-md   border border-border bg-surface-sec px-4 text-xs  outline-none"
            >
              <option value="" disabled>
                {t.home.cta.form.projectType}
              </option>

              <option value="commercial">
                {t.home.cta.form.projectTypes.commercial}
              </option>

              <option value="infrastructure">
                {t.home.cta.form.projectTypes.infrastructure}
              </option>

              <option value="residential">
                {t.home.cta.form.projectTypes.residential}
              </option>
            </select>

            <button
              type="submit"
              className="h-12 rounded-md  border border-border bg-accent text-surface-sec px-2 text-xs font-medium  "
            >
              {t.home.cta.form.submit} 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
