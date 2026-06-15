/**
 * FeatureCard — icon + title + description card for the features grid.
 *
 * Usage:
 * ```tsx
 * <FeatureCard
 *   icon={<TrophyIcon />}
 *   title="Ranks & stats"
 *   description="Display your rank, win rate, hours played..."
 * />
 * ```
 */
type FeatureCardProps = {
  /** Rendered icon — any 24×24 SVG or icon component */
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="card bg-base-200 border border-base-300/50 hover:border-accent/30 transition-colors duration-200">
      <div className="card-body gap-3 p-5">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-semibold text-base text-base-content">{title}</h3>
        <p className="text-sm text-base-content/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
