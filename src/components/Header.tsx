"use client";
import type { Locale } from "@/src/types/common";
import { getDictionary } from "@/src/lib/i18n";
import { useScrollThreshold } from "@/src/hooks/useScroll";
import { useState } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import ActionButtons from "./ActionButtons ";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";

type HeaderProps = {
  locale: Locale;
};
export default function Header({ locale }: HeaderProps) {
  const t = getDictionary(locale);
  const isScrolled = useScrollThreshold(30);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow bg-background/10 backdrop-blur" : ""}`}
      >
        <div className="mx-auto flex h-20 px-6 2xl:px-0 max-w-7xl items-center justify-between">
          <button
            className="md:hidden p-2 text-accent-light bg-navy rounded-md"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
          <Logo locale={locale} />

          <DesktopNav locale={locale} nav={t.nav} />

          <ActionButtons locale={locale} contactButton={t.contact.button} />
        </div>
      </header>

      <MobileNav
        locale={locale}
        nav={t.nav}
        isOpen={isMobileMenuOpen}
        toggle={toggleMobileMenu}
        contactButton={t.contact.button}
      />
    </>
  );
}