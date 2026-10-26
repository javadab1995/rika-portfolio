import Image from "next/image";
type Props = {
  quote: string;
  image: string;
  name: string;
  role: string;
};
    

export default function TestimonialCard({ testimonial }: {testimonial: Props }) {
  return (
    <article className="relative rounded-lg bg-accent/75 p-6">
      <div className="flex gap-1 text-yellow-200">
        {"★★★★★".split("").map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>

      <p className="mt-5 max-w-105 text-base leading-6">{testimonial.quote}</p>

      <div className="mt-5 flex items-center aspect-3/0.5 gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <div className="text-sm font-medium">{testimonial.name}</div>

          <div className="mt-0.5 text-sm text-foreground/75">
            {testimonial.role}
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-7 flex gap-2 ">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
        <span className="h-1.5 w-1.5 rounded-full bg-navy/75" />
        <span className="h-1.5 w-1.5 rounded-full bg-navy/75" />
        <span className="h-1.5 w-1.5 rounded-full bg-navy/75" />
      </div>
    </article>
  );
}
