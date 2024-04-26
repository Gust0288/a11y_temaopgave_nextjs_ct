import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="flex gap-2 md:gap-5 justify-center p-6">
      <Link href={"/"} className="border-2 rounded-md sm:w-25 md:w-40 lg:w-xl text-center border-brand-turquoise-50 bg-brand-grey-00 text-brand-orange-70">Home</Link>
      <p className="text-brand-orange-70">*</p>
      <Link href={"/wiki"} className="border-2 rounded-md sm:w-25 md:w-40 lg:w-xl text-center border-brand-turquoise-50 bg-brand-grey-00 text-brand-orange-70">Wiki</Link>
    </nav>
  );
}

export default Header;
