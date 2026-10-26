import Link from "next/link";
import { Locale } from "../types/common";
import Image from "next/image";


export default function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="relative  text-xl font-semibold tracking-tight"
    >
      <Image
        src="/images/Logo.png"
        alt="Logo"
        width={150}
        height={120}
        priority
        className={`object-cover rounded-lg`}
       
      />
    </Link>
  );
}
