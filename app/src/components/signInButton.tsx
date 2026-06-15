"use client";
import Link from "next/link";
import React from "react";

const Loginbutton = () => {
  return (
    <>
      <Link className="btn btn-neutral mt-4" href={"/src/auth/signUp"}>
        Sign In
      </Link>
    </>
  );
};

export default Loginbutton;
