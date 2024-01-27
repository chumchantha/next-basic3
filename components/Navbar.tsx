import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-transparent h-20 fixed left-0 right-0 top-0 z-50">
      <ul className="flex flex-row gap-4 text-xl ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movie">Movie</Link>
        </li>
        <li>
          <Link href="/drama">Drama</Link>
        </li>
        <li>
          <Link href="/mylist">My list</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
