type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  className = "",
  description,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.12em] ">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/50 text-xs leading-tight tracking-[-0.02em] mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
