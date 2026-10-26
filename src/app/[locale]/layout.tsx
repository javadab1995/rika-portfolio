import { notFound } from "next/navigation";

import "@/src/styles/globals.css"

import { isValidLocale } from "@/src/lib/i18n";
import Header from "@/src/components/Header";

import localFont from "next/font/local";
import SmoothScroll from "@/src/components/providers/SmoothScroll";
import Footer from "@/src/components/Footer";

const IranYekan = localFont({
  src: [
    {
      path: "../../../public/fonts/IRANYekanX-Black.woff2",
      weight: "700",
    },
    {
      path: "../../../public/fonts/IRANYekanX-Bold.woff2",
      weight: "600",
    },
    {
      path: "../../../public/fonts/IRANYekanX-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../public/fonts/IRANYekanX-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../public/fonts/IRANYekanX-Thin.woff2",
      weight: "300",
    },
  ],
  variable: "--font-fa",
});

const roboto_Mono = localFont({
  src: [
    {
      path: "../../../public/fonts/RobotoMono-Bold.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/RobotoMono-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/RobotoMono-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/RobotoMono-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/RobotoMono-Thin.ttf",
      weight: "300",
    },
  ],
  variable: "--font-en",
});




// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-en",
// });

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }
  const isFa = locale === "fa";

  return (
    <html
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      className={`${IranYekan.variable} ${roboto_Mono.variable} `}
    >
      <body>
        <Header locale={locale} />
        <SmoothScroll >{children}</SmoothScroll>
        <Footer locale={locale} />
      </body> 
    </html>
  );
}