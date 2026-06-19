"use client";

import React, { useState } from "react";
import GameCard from "@/app/src/components/reusable/cards/gameCard";
import { Game } from "@/app/src/data/game";
import SocialCard from "@/app/src/components/reusable/cards/socialLinkCard";
import { socialPresets } from "@/app/src/data/socials";
import ProfilePreviewCard from "@/app/src/components/reusable/cards/profilePreviewCard";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    displayName: "",
    profileUrl: "",
    bio: "",
    visibility: "Public",
  });

  const [games, setGames] = useState([
    {
      name: "",
      rank: "",
      hours: "",
      role: "",
      winrate: "",
    },
  ]);

  const addGame = () => {
    setGames([
      ...games,
      {
        name: "",
        rank: "",
        hours: "",
        role: "",
        winrate: "",
      },
    ]);
  };

  const updateGame = (
    index: number,
    field: keyof Game, // ← was: string
    value: string,
  ) => {
    const updated = [...games];
    updated[index] = { ...updated[index], [field]: value };
    setGames(updated);
  };

  const removeGame = (index: number) => {
    setGames(games.filter((_, i) => i !== index));
  };

  const [socials, setSocials] = useState([
    {
      platform: "Twitch",
      url: "",
    },

    {
      platform: "YouTube",
      url: "",
    },

    {
      platform: "Discord",
      url: "",
    },

    {
      platform: "TikTok",
      url: "",
    },
  ]);

  const updateSocial = (index: number, value: string) => {
    setSocials((prev) =>
      prev.map((social, i) =>
        i === index ? { ...social, url: value } : social,
      ),
    );
  };

  const removeSocial = (index: number) => {
    setSocials((prev) => prev.filter((_, i) => i !== index));
  };

  const addCustomLink = () => {
    setSocials((prev) => [
      ...prev,

      {
        platform: "Custom",
        url: "",
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-10 p-10">
      {/* Create Profile */}

      <div className="flex flex-wrap justify-center gap-10">
        <div className="card bg-accent w-96 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create Profile</h2>

            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">User Information</legend>

              <label className="fieldset-legend">Display Name</label>

              <input
                type="text"
                className="input"
                placeholder="Username"
                value={profile.displayName}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    displayName: e.target.value,
                  })
                }
              />

              <label className="fieldset-legend">Profile URL</label>

              <div className="join">
                <span className="join-item flex items-center px-4 bg-base-200 border border-base-300 text-sm">
                  flex.gg/
                </span>

                <input
                  type="text"
                  className="input join-item"
                  placeholder="yourtag"
                  value={profile.profileUrl}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      profileUrl: e.target.value,
                    })
                  }
                />
              </div>

              <label className="fieldset-legend">Bio</label>

              <textarea
                className="textarea"
                placeholder="Bio"
                value={profile.bio}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    bio: e.target.value,
                  })
                }
              />

              <label className="fieldset-legend">Visibility</label>

              <select
                className="select"
                value={profile.visibility}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    visibility: e.target.value,
                  })
                }
              >
                <option>Public</option>

                <option>Private</option>
              </select>
            </fieldset>
          </div>
        </div>

        {/* Games */}

        <div className="card bg-accent w-125 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Games & Ranks</h2>

            <div className="space-y-4">
              {games.map((game, index) => (
                <GameCard
                  key={index}
                  game={game}
                  index={index}
                  onChange={updateGame}
                  onRemove={removeGame}
                />
              ))}
            </div>

            <button className="btn btn-outline mt-4" onClick={addGame}>
              + Add another game
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="card bg-accent shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Social & Streaming Links</h2>

              <div className="space-y-3">
                {socials.map((social, index) => {
                  const preset = socialPresets.find(
                    (item) => item.name === social.platform,
                  );

                  return (
                    <SocialCard
                      key={index}
                      social={social}
                      index={index}
                      icon={preset?.icon ?? "🔗"}
                      placeholder={preset?.placeholder ?? "Enter custom URL"}
                      onChange={updateSocial}
                      onRemove={removeSocial}
                    />
                  );
                })}
              </div>

              <button className="btn btn-outline mt-4" onClick={addCustomLink}>
                + Add custom link
              </button>
            </div>
          </div>
        </div>

        {/* Profile Preview Card */}
        <ProfilePreviewCard profile={profile} games={games} socials={socials} />
      </div>
    </div>
  );
};

export default CreateProfile;
