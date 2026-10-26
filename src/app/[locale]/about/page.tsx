
import AboutSection from '@/src/components/pages/AboutSection';
import { Locale } from '@/src/types/common';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function page({ params } : PageProps) {
    const { locale } = await params;
  return (
    <div>
      <AboutSection locale={locale} />
    </div>
  )
}
