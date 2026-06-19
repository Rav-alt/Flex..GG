"use client";
import { gamePresets, Game } from "@/app/src/data/game";

type Props = {
  game: Game;
  index: number;
  onChange: (index: number, field: keyof Game, value: string) => void;
  onRemove: (index: number) => void;
};

export default function GameCard({ game, index, onChange, onRemove }: Props) {
  const preset = gamePresets[game.name as keyof typeof gamePresets];

  return (
    <div className="bg-base-100 border border-base-300/60 rounded-xl p-4 flex flex-col gap-3">
      {/* Row header — index badge + game name + remove */}
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-base-300/70 flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-bold text-base-content/50 tabular-nums">
            {index + 1}
          </span>
        </div>

        <input
          className="input input-sm flex-1 text-sm"
          placeholder="Game name (e.g. Valorant)"
          value={game.name}
          list={`game-suggestions-${index}`}
          onChange={(e) => onChange(index, "name", e.target.value)}
          aria-label={`Game ${index + 1} name`}
        />
        <datalist id={`game-suggestions-${index}`}>
          {Object.keys(gamePresets).map((g) => (
            <option key={g} value={g} />
          ))}
        </datalist>

        <button
          type="button"
          className="btn btn-ghost btn-square btn-sm text-base-content/30 hover:text-error hover:bg-error/10 transition-colors flex-shrink-0"
          onClick={() => onRemove(index)}
          aria-label={`Remove game ${index + 1}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>
      </div>

      {/* Fields — 2-column grid instead of stacked full-width rows */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Rank */}
        <div className="form-control gap-1">
          <label className="text-xs text-base-content/50 font-medium">
            Rank
          </label>
          {preset ? (
            <select
              className="select select-sm text-sm"
              value={game.rank}
              onChange={(e) => onChange(index, "rank", e.target.value)}
            >
              <option value="">Select rank</option>
              {preset.ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="input input-sm text-sm"
              placeholder="e.g. Diamond III"
              value={game.rank}
              onChange={(e) => onChange(index, "rank", e.target.value)}
            />
          )}
        </div>

        {/* Role */}
        <div className="form-control gap-1">
          <label className="text-xs text-base-content/50 font-medium">
            Role
          </label>
          {preset ? (
            <select
              className="select select-sm text-sm"
              value={game.role}
              onChange={(e) => onChange(index, "role", e.target.value)}
            >
              <option value="">Select role</option>
              {preset.roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="input input-sm text-sm"
              placeholder="e.g. Support"
              value={game.role}
              onChange={(e) => onChange(index, "role", e.target.value)}
            />
          )}
        </div>

        {/* Hours played */}
        <div className="form-control gap-1">
          <label className="text-xs text-base-content/50 font-medium">
            Hours played
          </label>
          <input
            className="input input-sm text-sm"
            placeholder="e.g. 500"
            value={game.hours}
            type="number"
            min={0}
            onChange={(e) => onChange(index, "hours", e.target.value)}
          />
        </div>

        {/* Win rate */}
        <div className="form-control gap-1">
          <label className="text-xs text-base-content/50 font-medium">
            Win rate
          </label>
          <div className="relative">
            <input
              className="input input-sm text-sm w-full pr-7"
              placeholder="58"
              value={game.winrate}
              type="number"
              min={0}
              max={100}
              onChange={(e) => onChange(index, "winrate", e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-base-content/30 pointer-events-none">
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
