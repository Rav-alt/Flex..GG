"use client";

type Profile = {
  displayName: string;
  profileUrl: string;
  bio: string;
};

type Props = {
  profile: Profile;

  games: any[];

  socials: {
    platform: string;
    url: string;
  }[];
};

export default function ProfilePreviewCard({ profile, games, socials }: Props) {
  return (
    <div className="card bg-accent shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Profile Preview</h2>

        <div className="flex gap-4 items-center">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-xl">
                {profile.displayName ? profile.displayName[0] : "?"}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              {profile.displayName || "Your Name"}
            </h3>

            <p className="text-sm opacity-70">
              flex.gg/
              {profile.profileUrl || "yourtag"}
            </p>
          </div>
        </div>

        <p className="mt-4">{profile.bio || "Your bio will appear here"}</p>

        <div className="divider">Games</div>

        <div className="flex flex-wrap gap-2">
          {games
            .filter((g) => g.name)
            .map((game, index) => (
              <div key={index} className="badge badge-outline p-4">
                {game.name}

                {game.rank && ` • ${game.rank}`}
              </div>
            ))}
        </div>

        <div className="divider">Socials</div>

        <div className="space-y-1">
          {socials
            .filter((s) => s.url)
            .map((social, index) => (
              <p key={index}>
                {social.platform}

                {" - "}

                {social.url}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
