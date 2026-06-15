import Link from "next/link";
import React from "react";

const signUpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <h1 className="text-8xl fieldset-legend">Flex.gg</h1>
        <div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Sign Up</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username"></input>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <Link href={"/src/auth/signIn"} className="btn btn-neutral mt-4">
              Create Account
            </Link>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default signUpPage;
