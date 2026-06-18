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
    <div className="border rounded-xl p-5 space-y-4">
      {/* Game name — dropdown so preset lookup always matches */}
      <div className="flex gap-3">
        <input
          className="input input-accent w-full"
          placeholder="Game name"
          value={game.name}
          list={`game-suggestions-${index}`}
          onChange={(e) => onChange(index, "name", e.target.value)}
        />
        <datalist id={`game-suggestions-${index}`}>
          {Object.keys(gamePresets).map((g) => (
            <option key={g} value={g} />
          ))}
        </datalist>
        <button className="btn btn-square" onClick={() => onRemove(index)}>
          ✕
        </button>
      </div>

      {/* Rank */}
      {preset ? (
        <select
          className="select w-full"
          value={game.rank}
          onChange={(e) => onChange(index, "rank", e.target.value)}
        >
          <option value="">Select rank</option>
          {preset.ranks.map((rank) => (
            <option key={rank} value={rank}>
              {" "}
              {/* ← value added */}
              {rank}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input w-full"
          placeholder="Rank"
          value={game.rank}
          onChange={(e) => onChange(index, "rank", e.target.value)}
        />
      )}

      <input
        className="input w-full"
        placeholder="Hours played"
        value={game.hours}
        type="number"
        min={0}
        onChange={(e) => onChange(index, "hours", e.target.value)}
      />

      {/* Role */}
      {preset ? (
        <select
          className="select w-full"
          value={game.role}
          onChange={(e) => onChange(index, "role", e.target.value)}
        >
          <option value="">Select role</option>
          {preset.roles.map((role) => (
            <option key={role} value={role}>
              {" "}
              {/* ← value added */}
              {role}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input w-full"
          placeholder="Role"
          value={game.role}
          onChange={(e) => onChange(index, "role", e.target.value)}
        />
      )}

      <input
        className="input w-full"
        placeholder="Win rate"
        value={game.winrate}
        onChange={(e) => onChange(index, "winrate", e.target.value)}
      />
    </div>
  );
}
