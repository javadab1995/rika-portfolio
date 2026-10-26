"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "../types/common";

type NavItem = {
  title: string;
  href: string;
};

export default function DesktopNav({
  locale,
  nav,
}: {
  locale: Locale;
  nav: readonly NavItem[];
}) {
 const pathname = usePathname();

 
  return (
    <nav id="nav-warper" className="hidden lg:block">
      <ul className="flex gap-6">
        {nav
          .filter((n) => n.href !== "/contact")
          .map((item) => {
            const href = `/${locale}${item.href}`;
            const isActive =
              pathname === `/${locale}${item.href}` ||
              (item.href !== "" &&
                pathname.startsWith(`/${locale}${item.href}/`));

            return (
              <li key={item.href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block text-sm transition-colors duration-200 hover:text-accent ${
                    isActive ? "text-accent font-semibold " : "opacity-75 "
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
