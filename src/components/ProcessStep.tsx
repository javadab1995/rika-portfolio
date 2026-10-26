import { ComponentIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  
};

export default function ProcessStep({ step }: { step:Step }) {
  return (
    <div className="space-y-2 mt-1">
      <div className=" flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-light/50  text-accent">
          <ComponentIcon />
        </div>

        <div className=" h-px flex-1 bg-accent lg:block" />
      </div>
      <div className="flex gap-2 items-center">
        <span className=" text-foreground/50">{step.number}</span>

        <h3 className=" text-sm font-medium">{step.title}</h3>
      </div>

      <p className="mt-2 max-w-72 text-sm leading-5 text-foreground/50">
        {step.description}
      </p>
    </div>
  );
}

