"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";

function Error({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const paramsString = params.toString();
  return (
    <div className=" flex flex-col items-center mt-10 md:mt-40">
      <h1>Something went wrong when reading: {paramsString}</h1>
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
