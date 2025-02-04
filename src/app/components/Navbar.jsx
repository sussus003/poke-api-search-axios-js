import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className=" bg-yellow-200 mx-auto flex justify-center items-center py-4 shadow-md ">
      <ul>
        <li className="font-bold">
          <Link href="/">Search Pokemon APP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
