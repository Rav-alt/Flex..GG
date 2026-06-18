"use client";

import React, { useState } from "react";
import GameCard from "@/app/src/components/reusable/cards/gameCard";
import { Game } from "@/app/src/data/game";

const CreateProfile = () => {
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

  return (
    <div className="flex flex-row items-center justify-center gap-10 p-10">
      {/* Create Profile */}

      <div className="card bg-accent w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="profile"
            className="rounded-xl"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">Create Profile</h2>

          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">User Information</legend>

            <label className="fieldset-legend">Display Name</label>

            <input type="text" className="input" placeholder="Username" />

            <label className="fieldset-legend">Profile URL</label>

            <div className="join">
              <span className="join-item flex items-center px-4 bg-base-200 border border-base-300 text-sm">
                flex.gg/
              </span>

              <input
                type="text"
                className="input join-item"
                placeholder="yourtag"
              />
            </div>

            <label className="fieldset-legend">Bio</label>

            <textarea className="textarea" placeholder="Bio" />

            <label className="fieldset-legend">Visibility</label>

            <select className="select">
              <option>Public - Everyone can see</option>

              <option>Private - Only you</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* Games */}

      <div className="card bg-accent w-[500px] shadow-sm">
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
    </div>
  );
};

export default CreateProfile;
