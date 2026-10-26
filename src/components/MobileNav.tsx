
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Locale } from "../types/common";
import { X, ArrowUpLeft } from "lucide-react";
import { LucideIcon } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export default function MobileNav({
  locale,
  nav,
  contactButton,
  isOpen,
  toggle,
}: {
  locale: Locale;
  nav: readonly NavItem[];
  contactButton: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggle();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  const isEnglish = locale === "en";

  return (
    <div
      aria-hidden={!isOpen}
      className={`
        fixed inset-0 z-999 lg:hidden
        transition-[visibility] duration-300
        ${isOpen ? "visible" : "invisible"}
      `}
    >
      {/* Background */}
      <button
        type="button"
        aria-label="Close navigation"
        tabIndex={isOpen ? 0 : -1}
        onClick={toggle}
        className={`
          absolute inset-0 h-full w-full cursor-default
          bg-black/25 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Menu panel */}
      <div
        dir={isEnglish ? "ltr" : "rtl"}
        className={`
          absolute inset-y-0 w-full max-w-md
          border-border bg-surface
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isEnglish ? "right-0 border-l" : "left-0 border-r"}
          ${
            isOpen
              ? "translate-x-0"
              : isEnglish
                ? "translate-x-full"
                : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col px-6 pb-6 pt-5 sm:px-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <Link
              href={`/${locale}`}
              onClick={toggle}
              className="text-sm font-semibold tracking-[0.18em]"
            >
              RIKA
              <span className="ml-2 font-mono text-[10px] font-normal text-text/40">
                / MENU
              </span>
            </Link>

            <button
              type="button"
              onClick={toggle}
              aria-label={isEnglish ? "Close menu" : "بستن منو"}
              tabIndex={isOpen ? 0 : -1}
              className="
                flex h-10 w-10 items-center justify-center
                border border-border
                transition-colors duration-200
                hover:border-accent hover:text-accent
              "
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation */}
          <nav
            aria-label={isEnglish ? "Main navigation" : "منوی اصلی"}
            className="mt-8"
          >
            <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-text/40">
              {isEnglish ? "NAVIGATION" : "فهرست"}
            </p>

            <ul className="divide-y divide-border border-y border-border">
              {nav.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={toggle}
                      tabIndex={isOpen ? 0 : -1}
                      className="
                        group flex min-h-17 items-center gap-4 py-4
                        transition-colors duration-200
                        hover:text-accent
                      "
                    >
                      <span
                        dir="ltr"
                        className="
                          w-6 shrink-0 font-mono text-[11px]
                          tabular-nums text-text/35
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-lg font-medium">
                        {item.title}
                      </span>

                      <Icon
                        className="
                          h-4.5 w-4.5 shrink-0
                          text-text/45 transition-colors duration-200
                          group-hover:text-accent
                        "
                        strokeWidth={1.5}
                      />

                      <ArrowUpLeft
                        className={`
                          h-4 w-4 shrink-0 text-text/35
                          transition-all duration-200
                          group-hover:text-accent
                          ${isEnglish ? "rotate-90" : ""}
                        `}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <Link
              href={`/${locale}/contact`}
              onClick={toggle}
              tabIndex={isOpen ? 0 : -1}
              className="
                group flex min-h-14 items-center justify-between
                bg-foreground px-5 py-4 text-background
                transition-colors duration-300 hover:bg-accent
              "
            >
              <span className="text-sm font-medium">
                {contactButton}
              </span>

              <ArrowUpLeft
                className={`
                  h-4 w-4 transition-transform duration-300
                  group-hover:-translate-y-0.5
                  ${isEnglish ? "rotate-90" : ""}
                `}
                strokeWidth={1.5}
              />
            </Link>

            <div
              dir="ltr"
              className="
                mt-5 flex items-center justify-between
                font-mono text-[9px] tracking-[0.16em]
                text-text/35
              "
            >
              <span>RIKA / ENGINEERING</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
