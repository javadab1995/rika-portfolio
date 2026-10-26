import { Locale } from "@/src/types/common";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
type Credential = {
  year: string;
  issuer: string;
  description: string;
  type: string;
    image: string;
    title: string;


};

type CredentialCardProps = {
  item: Credential;
  locale: Locale;
};
export default function CredentialCard({ item, locale }: CredentialCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border card  transition-transform duration-500 hover:-translate-y-1">
      {/* Certificate / Award Image */}
      <div className="relative aspect-3/1 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <span className="absolute left-4 top-4 z-10 text-sm font-medium text-foreground/40">
          {item.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <Button>
          <span>{item.type}</span>
          <Link href="/credentials">
            {locale === "en" ? (
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-x-0.5 w-4 h-4" />
            ) : (
              <ArrowUpLeft className="transition-transform duration-300 group-hover:-translate-x-0.5 w-4 h-4" />
            )}
          </Link>
        </Button>

        <h3 className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text/50">
          {item.title}
        </h3>

        <p className="mt-2  leading-5 ">{item.description}</p>

        <div className="mt-5 border-t border-border  pt-3">
          <span className=" ">{item.issuer}</span>
        </div>
      </div>
    </article>
  );
}
