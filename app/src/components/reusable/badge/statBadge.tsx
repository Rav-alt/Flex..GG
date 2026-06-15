/**
 * StatBadge — a single stat pill used in the social-proof strip.
 * e.g. <StatBadge value="48K" label="Profiles created" />
 */
type StatBadgeProps = {
  value: string;
  label: string;
};

export default function StatBadge({ value, label }: StatBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl font-bold text-accent tabular-nums">
        {value}
      </span>
      <span className="text-xs text-base-content/50 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
