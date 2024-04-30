import React from "react";
import Image from "next/image";
import diversaLogo from "../assets/diversa.svg";
import Link from "next/link";
import "./globals.css";

function NotFound() {
  return (
    <div className=" flex flex-col items-center mt-10 md:mt-40">
      <Image
        src={diversaLogo}
        alt="Diversa logo"
        className=" w-full md:w-1/2 xl:w-[600px] mb-4 md:mb-10"
        sizes="(max-width: 768px) 80svw,	
      (max-width: 1200px) 50svw,   
      600px"
      />
      <h1>Something went wrong.</h1>
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

export default NotFound;
