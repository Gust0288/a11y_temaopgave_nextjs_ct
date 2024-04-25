import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex gap-5">
      <Link href={"/"}>Home</Link>

      <Link href={"/wiki"}>Wiki</Link>
    </nav>
  );
}

export default Header;
