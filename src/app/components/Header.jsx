import React from "react";
import Link from "next/link";
import Image from "next/image";
import diversaLogo from "../../assets/diversa_icon.svg";

function Header() {
  return (
    <nav className="">
      <ul className="flex justify-center items-center gap-2 md:gap-5  p-3 max-w-full md:max-w-96 rounded-lg mx-auto">
        <li tabIndex="1">
          <Link
            href={"/"}
            className="-mr-10 px-2 border-2 rounded-md w-25 md:w-40 lg:w-xl text-center border-brand-turquoise-50 bg-brand-grey-00 text-brand-orange-70"
          >
            Home
          </Link>
        </li>
        <Image src={diversaLogo} alt="Diversa logo" className="h-20" />
        {/* ^Erstat med diversea logo^ */}
        <li tabIndex="0">
          <Link
            href={"/wiki"}
            className="-ml-10 px-2 border-2 rounded-md sm:w-25 md:w-40 lg:w-xl text-center border-brand-turquoise-50 bg-brand-grey-00 text-brand-orange-70"
          >
            Wiki
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
