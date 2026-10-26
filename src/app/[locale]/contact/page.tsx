import ContactPage from '@/src/components/pages/Contact'
import { Locale } from '@/src/types/common';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function page({ params } : PageProps) {
    const { locale } = await params;
  return (
    <div>
      <ContactPage locale={locale} />
    </div>
  )
}
