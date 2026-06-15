import React from "react";
import Loginbutton from "../../components/signInButton";
import Link from "next/link";

const signInPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <h1 className="text-8xl fieldset-legend">Flex.gg</h1>
        <div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Sign In</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <Link className="btn btn-neutral mt-4" href={"/src/main/home"}>
              Sign In
            </Link>
            <p>
              Don't have an account?{" "}
              <Link className="link" href={"/src/auth/signUp"}>
                Create an Account
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default signInPage;
