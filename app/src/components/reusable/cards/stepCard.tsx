/**
 * StepCard — numbered step for the "how it works" section.
 * Steps are genuinely sequential so the number encodes real information.
 */
type StepCardProps = {
  step: number;
  title: string;
  description: string;
};

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4 items-start">
      {/* Step number */}
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
        <span className="text-sm font-bold text-accent tabular-nums">
          {step}
        </span>
      </div>
      {/* Content */}
      <div className="pt-1">
        <h3 className="font-semibold text-base text-base-content mb-1">
          {title}
        </h3>
        <p className="text-sm text-base-content/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
