import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-transparent lg:h-20 fixed left-0 right-0 top-0 z-50 md:h-10">
      <ul className="flex flex-row lg:gap-4 lg:text-xl md:text-sm md:gap-2">
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
