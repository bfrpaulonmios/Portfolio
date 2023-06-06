import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items">
      <div>
        <div />
        <span>Portfolio</span>
      </div>
      <div>
        <Link href="#">Home</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
