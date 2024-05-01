"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";

function Error() {
  return (
    <div className=" flex flex-col items-center  mt-10 md:mt-40">
      <h1 className="text-center mb-5">
        Could not find the Wiki-page your where looking for.
      </h1>
      <h2>It either has not been made or does not exist.</h2>
      <p>
        Please return{" "}
        <Link href={"/"} className="text-brand-orange-70 underline">
          Home
        </Link>{" "}
        and try again
      </p>
    </div>
  );
}

export default Error;
