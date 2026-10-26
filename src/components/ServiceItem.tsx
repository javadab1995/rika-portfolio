import type { ElementType } from "react";

type Service = {
  title: string;
  description: string;
  icon: ElementType;
};

export default function ServiceItem({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <article className="group relative flex min-w-0 gap-4 border-t border-border/80 pt-5">
      <span
        aria-hidden="true"
        className="pt-0.5 font-mono text-[11px] tabular-nums tracking-wider text-muted/70"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-border bg-surface text-foreground transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-accent">
            <Icon
              aria-hidden="true"
              className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>

          <span
            aria-hidden="true"
            className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </div>

        <h3 className="text-base font-semibold leading-5 text-foreground">
          {service.title}
        </h3>

        <p className="mt-2 max-w-sm text-xs leading-5 text-muted">
          {service.description}
        </p>
      </div>
    </article>
  );
}
