"use client";

import React, { useState } from "react";
import GameCard from "@/app/src/components/reusable/cards/gameCard";
import { Game } from "@/app/src/data/game";
import SocialCard from "@/app/src/components/reusable/cards/socialLinkCard";
import { socialPresets } from "@/app/src/data/socials";
import ProfilePreviewCard from "@/app/src/components/reusable/cards/profilePreviewCard";
import SectionHeader from "@/app/src/components/layout/sectionHeader";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    displayName: "",
    profileUrl: "",
    bio: "",
    visibility: "Public",
  });

  const [games, setGames] = useState<Game[]>([
    { name: "", rank: "", hours: "", role: "", winrate: "" },
  ]);

  const addGame = () => {
    if (games.length >= 8) return;
    setGames([
      ...games,
      { name: "", rank: "", hours: "", role: "", winrate: "" },
    ]);
  };

  const updateGame = (index: number, field: keyof Game, value: string) => {
    const updated = [...games];
    updated[index] = { ...updated[index], [field]: value };
    setGames(updated);
  };

  const removeGame = (index: number) => {
    setGames(games.filter((_, i) => i !== index));
  };

  const [socials, setSocials] = useState([
    { platform: "Twitch", url: "" },
    { platform: "YouTube", url: "" },
    { platform: "Discord", url: "" },
    { platform: "TikTok", url: "" },
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
    setSocials((prev) => [...prev, { platform: "Custom", url: "" }]);
  };

  // slug validation — mirrors the hint text shown under the field
  const slugValue = profile.profileUrl.toLowerCase().replace(/[^a-z0-9_]/g, "");
  const slugTouched = profile.profileUrl.length > 0;
  const slugValid = slugValue.length >= 3 && slugValue.length <= 20;

  const canSubmit = profile.displayName.trim().length > 0 && slugValid;

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ── Page header ── */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {["Identity", "Games", "Links"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="badge badge-sm badge-outline border-accent/40 text-accent">
                  {i + 1}
                </span>
                <span className="text-xs text-base-content/40 hidden sm:inline">
                  {s}
                </span>
                {i < 2 && (
                  <div className="w-5 h-px bg-base-300" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-base-content">
            Create your profile
          </h1>
          <p className="text-sm text-base-content/50 mt-1">
            Fill in the sections below — your preview updates live on the right.
          </p>
        </div>

        {/* ── Two-column layout: form (left) + sticky preview (right) ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          {/* ━━━ FORM COLUMN ━━━ */}
          <div className="flex flex-col gap-6">
            {/* Identity */}
            <div className="card bg-base-200 border border-base-300/50">
              <div className="card-body gap-4 p-5">
                <SectionHeader
                  step={1}
                  title="Identity"
                  subtitle="How you'll appear to everyone"
                />

                <div className="form-control gap-1.5">
                  <label className="text-sm font-medium text-base-content/70">
                    Display name
                  </label>
                  <input
                    type="text"
                    className="input input-sm text-sm"
                    placeholder="e.g. ShadowXV"
                    value={profile.displayName}
                    maxLength={32}
                    onChange={(e) =>
                      setProfile({ ...profile, displayName: e.target.value })
                    }
                  />
                </div>

                <div className="form-control gap-1.5">
                  <label className="text-sm font-medium text-base-content/70">
                    Profile URL
                  </label>
                  <div className="join">
                    <span className="join-item flex items-center px-3 bg-base-100 border border-base-300 text-sm text-base-content/40 whitespace-nowrap">
                      flex.gg/
                    </span>
                    <input
                      type="text"
                      className={`input input-sm join-item flex-1 text-sm ${
                        slugTouched && !slugValid
                          ? "input-error"
                          : slugTouched && slugValid
                            ? "input-success"
                            : ""
                      }`}
                      placeholder="yourtag"
                      maxLength={20}
                      value={profile.profileUrl}
                      onChange={(e) =>
                        setProfile({ ...profile, profileUrl: e.target.value })
                      }
                    />
                  </div>
                  <p
                    className={`text-xs ${slugTouched && !slugValid ? "text-error" : "text-base-content/40"}`}
                  >
                    {slugTouched && !slugValid
                      ? "3–20 characters: letters, numbers, and underscores only."
                      : "Only letters, numbers, and underscores. 3–20 characters."}
                  </p>
                </div>

                <div className="form-control gap-1.5">
                  <label className="text-sm font-medium text-base-content/70">
                    Bio{" "}
                    <span className="text-base-content/30 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered text-sm resize-none"
                    placeholder="Competitive FPS player · Content creator · Top 500"
                    rows={2}
                    maxLength={160}
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                  />
                  <p className="text-xs text-base-content/30 text-right">
                    {profile.bio.length} / 160
                  </p>
                </div>

                <div className="form-control gap-1.5">
                  <label className="text-sm font-medium text-base-content/70">
                    Visibility
                  </label>
                  <select
                    className="select select-sm text-sm"
                    value={profile.visibility}
                    onChange={(e) =>
                      setProfile({ ...profile, visibility: e.target.value })
                    }
                  >
                    <option value="Public">
                      Public — anyone with the link can view
                    </option>
                    <option value="Private">
                      Private — only you can see this
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Games */}
            <div className="card bg-base-200 border border-base-300/50">
              <div className="card-body gap-4 p-5">
                <SectionHeader
                  step={2}
                  title="Games & ranks"
                  subtitle="Add every game you play"
                  right={`${games.length} / 8`}
                />

                {games.length === 0 ? (
                  <p className="text-xs text-base-content/35 italic py-2">
                    No games added yet — add your first one below.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3">
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
                )}

                {games.length < 8 && (
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm border border-dashed border-base-300/60 hover:border-accent/40 hover:bg-accent/5 text-base-content/50 hover:text-accent transition-colors"
                    onClick={addGame}
                  >
                    + Add another game
                  </button>
                )}
              </div>
            </div>

            {/* Social links */}
            <div className="card bg-base-200 border border-base-300/50">
              <div className="card-body gap-4 p-5">
                <SectionHeader
                  step={3}
                  title="Social & streaming links"
                  subtitle="All optional"
                />

                <div className="flex flex-col gap-2.5">
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

                <button
                  type="button"
                  className="btn btn-ghost btn-sm border border-dashed border-base-300/60 hover:border-accent/40 hover:bg-accent/5 text-base-content/50 hover:text-accent transition-colors"
                  onClick={addCustomLink}
                >
                  + Add custom link
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3 pb-6">
              <button className="btn btn-accent flex-1" disabled={!canSubmit}>
                Create profile &amp; go live
              </button>
              <button type="button" className="btn btn-ghost">
                Save draft
              </button>
            </div>
          </div>

          {/* ━━━ PREVIEW COLUMN ━━━ */}
          <ProfilePreviewCard
            profile={profile}
            games={games}
            socials={socials}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
