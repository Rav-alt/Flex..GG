/**
 * SectionHeader — consistent header used at the top of every form card
 * (Identity, Games & Ranks, Social links). Gives each section a number,
 * a title, and an optional right-aligned count/status.
 *
 * Usage:
 * ```tsx
 * <SectionHeader step={2} title="Games & Ranks" right={`${games.length} / 8`} />
 * ```
 */
type SectionHeaderProps = {
  step: number;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

export default function SectionHeader({
  step,
  title,
  subtitle,
  right,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3 mb-1">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-bold text-accent">{step}</span>
        </div>
        <div>
          <h2 className="font-semibold text-base text-base-content leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-base-content/45 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {right && (
        <span className="text-xs text-base-content/35 mt-1 whitespace-nowrap">
          {right}
        </span>
      )}
    </div>
  );
}
