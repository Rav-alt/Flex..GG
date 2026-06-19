"use client";

import { Game } from "@/app/src/data/game";
import { Social } from "@/app/src/type/social";

type Profile = {
  displayName: string;
  profileUrl: string;
  bio: string;
};

type Props = {
  profile: Profile;
  games: Game[];
  socials: Social[];
};

export default function ProfilePreviewCard({ profile, games, socials }: Props) {
  const initials = profile.displayName.trim()
    ? profile.displayName.trim().slice(0, 2).toUpperCase()
    : "?";

  const filledGames = games.filter((g) => g.name);
  const filledSocials = socials.filter((s) => s.url);

  return (
    // sticky so the preview stays visible while the user scrolls the form
    <div className="card bg-base-200 border border-accent/20 shadow-sm lg:sticky lg:top-6">
      <div className="card-body gap-4 p-5">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-sm text-base-content/50 uppercase tracking-wide">
            Live preview
          </h2>
          <span className="badge badge-accent badge-sm">Auto-updates</span>
        </div>

        {/* Header — avatar + name + url */}
        <div className="flex gap-3 items-center">
          <div className="avatar placeholder">
            <div className="bg-accent text-accent-content rounded-xl w-12">
              <span className="text-base font-semibold">{initials}</span>
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-base-content truncate">
              <span className="text-accent">#</span>
              {profile.displayName || "Your Name"}
            </h3>
            <p className="text-xs text-base-content/40 truncate">
              flex.gg/{profile.profileUrl || "yourtag"}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-base-content/60 leading-relaxed">
          {profile.bio || "Your bio will appear here."}
        </p>

        <div className="divider my-0 text-xs text-base-content/30">Games</div>

        {/* Games */}
        {filledGames.length > 0 ? (
          <div className="flex flex-col gap-2">
            {filledGames.map((game, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="flex-1 text-base-content/75 truncate">
                  {game.name}
                </span>
                {game.rank && (
                  <span className="badge badge-sm badge-outline border-accent/30 text-accent">
                    {game.rank}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-base-content/30 italic">
            Add a game to see it here.
          </p>
        )}

        <div className="divider my-0 text-xs text-base-content/30">Socials</div>

        {/* Socials */}
        {filledSocials.length > 0 ? (
          <div className="flex flex-col gap-1.5">
            {filledSocials.map((social, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-base-content/40 text-xs w-16 flex-shrink-0">
                  {social.platform}
                </span>
                <span className="text-base-content/70 truncate">
                  {social.url}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-base-content/30 italic">
            Add a link to see it here.
          </p>
        )}
      </div>
    </div>
  );
}
