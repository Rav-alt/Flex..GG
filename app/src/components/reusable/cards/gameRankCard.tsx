export type GameEntry = {
  name: string;
  rank: string;
  role: string;
  hours: string;
};

type GameRankRowProps = {
  index: number;
  game: GameEntry;
  onChange: (updated: GameEntry) => void;
  onRemove: () => void;
};

const RANK_OPTIONS = [
  "Unranked",
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Ascendant",
  "Immortal",
  "Radiant",
  "Master",
  "Grandmaster",
  "Challenger",
  "Top 500",
  "Champion",
  "Global Elite",
  "Legend",
  "NG+7",
  "Other",
];

export default function GameRankRow({
  index,
  game,
  onChange,
  onRemove,
}: GameRankRowProps) {
  const id = `game-${index}`;

  function update(field: keyof GameEntry, value: string) {
    onChange({ ...game, [field]: value });
  }

  return (
    <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex flex-col gap-3">
      {/* Row header — game name + remove */}
      <div className="flex items-center gap-3">
        {/* Index badge */}
        <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-bold text-accent tabular-nums">
            {index + 1}
          </span>
        </div>

        {/* Game name */}
        <input
          id={`${id}-name`}
          type="text"
          className="input input-sm flex-1 text-sm"
          placeholder="Game name (e.g. Valorant)"
          value={game.name}
          onChange={(e) => update("name", e.target.value)}
          aria-label={`Game ${index + 1} name`}
        />

        {/* Remove */}
        <button
          type="button"
          onClick={onRemove}
          className="btn btn-ghost btn-square btn-sm text-base-content/30 hover:text-error hover:bg-error/10 transition-colors"
          aria-label={`Remove game ${index + 1}`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="2" y1="2" x2="13" y2="13" />
            <line x1="13" y1="2" x2="2" y2="13" />
          </svg>
        </button>
      </div>

      {/* Fields grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Rank */}
        <div className="form-control gap-1">
          <label
            htmlFor={`${id}-rank`}
            className="text-xs text-base-content/50 font-medium"
          >
            Rank
          </label>
          <select
            id={`${id}-rank`}
            className="select select-sm text-sm"
            value={game.rank}
            onChange={(e) => update("rank", e.target.value)}
          >
            <option value="" disabled>
              Select rank
            </option>
            {RANK_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Role / main */}
        <div className="form-control gap-1">
          <label
            htmlFor={`${id}-role`}
            className="text-xs text-base-content/50 font-medium"
          >
            Role / main
          </label>
          <input
            id={`${id}-role`}
            type="text"
            className="input input-sm text-sm"
            placeholder="e.g. Duelist"
            value={game.role}
            onChange={(e) => update("role", e.target.value)}
            aria-label={`Game ${index + 1} role`}
          />
        </div>

        {/* Hours */}
        <div className="form-control gap-1">
          <label
            htmlFor={`${id}-hours`}
            className="text-xs text-base-content/50 font-medium"
          >
            Hours played
          </label>
          <input
            id={`${id}-hours`}
            type="number"
            min="0"
            className="input input-sm text-sm"
            placeholder="e.g. 500"
            value={game.hours}
            onChange={(e) => update("hours", e.target.value)}
            aria-label={`Game ${index + 1} hours`}
          />
        </div>

        {/* Win rate */}
        <div className="form-control gap-1">
          <label
            htmlFor={`${id}-wr`}
            className="text-xs text-base-content/50 font-medium"
          >
            Win rate %
          </label>
          <input
            id={`${id}-wr`}
            type="number"
            min="0"
            max="100"
            className="input input-sm text-sm"
            placeholder="e.g. 58"
            value={""}
            onChange={() => {}}
            aria-label={`Game ${index + 1} win rate`}
          />
        </div>
      </div>
    </div>
  );
}
