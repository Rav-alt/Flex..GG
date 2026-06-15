import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type GameEntry = {
  name: string;
  rank: string;
  /** Tailwind / DaisyUI badge color variant, e.g. "badge-warning" */
  badgeClass?: string;
  /** Bullet color as a Tailwind text class, e.g. "text-warning" */
  dotClass?: string;
};

type UserCardProps = {
  /** Gamer tag displayed with a leading # */
  tag: string;
  /** Short profile URL shown beneath the tag */
  profileUrl?: string;
  /** 1–2 letter initials shown in the avatar when no image is supplied */
  initials?: string;
  /** Optional avatar image src — falls back to initials */
  avatarSrc?: string;
  /** List of games with their rank and optional styling */
  games?: GameEntry[];
  /** Extra classes forwarded to the outer card element */
  className?: string;
};

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_GAMES: GameEntry[] = [
  {
    name: "Valorant",
    rank: "Diamond III",
    badgeClass: "badge-info",
    dotClass: "text-info",
  },
  {
    name: "League of Legends",
    rank: "Plat I",
    badgeClass: "badge-success",
    dotClass: "text-success",
  },
  {
    name: "Apex Legends",
    rank: "Gold II",
    badgeClass: "badge-warning",
    dotClass: "text-warning",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * UserCard — reusable gamer profile card
 *
 * Designed for the DaisyUI `forest` theme.
 *
 * Usage:
 * ```tsx
 * <UserCard
 *   tag="ShadowXV"
 *   profileUrl="gamertag.gg/shadowxv"
 *   initials="SX"
 *   games={[
 *     { name: "Valorant", rank: "Diamond III", badgeClass: "badge-info", dotClass: "text-info" },
 *     { name: "Apex Legends", rank: "Gold II", badgeClass: "badge-warning", dotClass: "text-warning" },
 *   ]}
 * />
 * ```
 */
export default function UserCard({
  tag = "ShadowXV",
  profileUrl = "gamertag.gg/shadowxv",
  initials = "SX",
  avatarSrc,
  games = DEFAULT_GAMES,
  className = "",
}: UserCardProps) {
  return (
    <div
      className={[
        // card shell — forest theme surface + amber border accent
        "card w-72 bg-base-200 border border-warning/30 shadow-lg",
        className,
      ].join(" ")}
    >
      <div className="card-body gap-4 p-5">
        {/* ── Header ── */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar placeholder">
            <div
              className={[
                "w-12 rounded-xl border-2 border-warning",
                avatarSrc ? "" : "bg-neutral text-neutral-content",
              ].join(" ")}
            >
              {avatarSrc ? (
                <img src={avatarSrc} alt={`${tag} avatar`} />
              ) : (
                <span className="text-sm font-semibold">{initials}</span>
              )}
            </div>
          </div>

          {/* Name + URL */}
          <div className="min-w-0">
            <p className="text-base font-semibold text-base-content leading-tight truncate">
              <span className="text-warning">#</span>
              {tag}
            </p>
            <p className="text-xs text-base-content/40 truncate">
              {profileUrl}
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="divider my-0" />

        {/* ── Games list ── */}
        <ul className="flex flex-col gap-2">
          {games.map((game) => (
            <li key={game.name} className="flex items-center gap-2">
              {/* Bullet */}
              <span
                className={[
                  "h-2 w-2 rounded-full flex-shrink-0",
                  // use bg variant derived from dotClass (text-warning → bg-warning)
                  game.dotClass
                    ? game.dotClass.replace("text-", "bg-")
                    : "bg-base-content/40",
                ].join(" ")}
              />

              {/* Game name */}
              <span className="flex-1 text-sm text-base-content/80 truncate">
                {game.name}
              </span>

              {/* Rank badge */}
              <span
                className={[
                  "badge badge-sm font-medium",
                  game.badgeClass ?? "badge-ghost",
                ].join(" ")}
              >
                {game.rank}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
