import Image from "next/image";
import Link from "next/link";
type Item = {
  image: string;
  title: string;
  
  date: string;
};

export default function InsightCard({ item, readMore }: { item: Item; readMore: string }) {
  return (
    <article className="group border border-border rounded-xl  min-w-48  space-y-0.5 p-5">
      <div className="relative aspect-3/1.5 overflow-hidden ">
        
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
      </div>

      <div className="border-border border-t p-0.5 ">
        <time className="text-xs">{item.date}</time>

        <h3 className="mt-1 text-sm font-medium leading-5">{item.title}</h3>

        <Link
          href="/blog"
          className=" flex items-center justify-between text-xs mt-3"
        >
          <span>{readMore}</span>
          <span className="text-sm"></span>
        </Link>
      </div>
    </article>
  );
}
