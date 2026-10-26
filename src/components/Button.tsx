import React from 'react'
interface ButtonProps {
  children: React.ReactNode;
  maxW?: string;
}

export default function Button({children, maxW = "max-w-72"}: ButtonProps) {
  return (
    <button
      type="button"
      className={`mt-3 group flex shrink-0 items-center gap-3 rounded-full border border-accent  text-foreground hover:text-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 ${maxW}`}
    >
      {children}
    </button>
  );
}
