import React from "react";

const createProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="card bg-accent w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body bg-accent items-center text-center">
            <h2 className="card-title">Create Profile</h2>

            <div className="card-actions">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">User Information</legend>

                <label className="fieldset-legend">Display Name</label>
                <input type="text" className="input" placeholder="Username" />

                <label className="fieldset-legend">Profile URL</label>
                <div className="join w-full sm:w-auto">
                  <span className="join-item flex items-center px-4 bg-base-200 border border-base-300 text-base-content/40 text-sm select-none whitespace-nowrap">
                    flex.gg/
                  </span>
                  <input
                    type="text"
                    className="input join-item"
                    placeholder="yourtag"
                    aria-label="Choose your Flex.GG tag"
                  />
                </div>
                <p className="text-xs text-gray-700">
                  Only letters, numbers, and underscores. 3–20 characters.
                </p>

                <label className="fieldset-legend">Bio/Tagline</label>
                <textarea className="textarea" placeholder="Bio"></textarea>

                <legend className="fieldset-legend">Visibility</legend>
                <select
                  defaultValue="Public - Everyone can see"
                  className="select"
                >
                  <option disabled={true}>Public - Everyone can see</option>
                  <option>Private - You can only see</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default createProfile;
