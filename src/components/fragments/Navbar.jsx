"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1a1630] text-white p-4 shadow-xl absolute top-0 left-0 right-0 z-50 md:px-20 lg:px-40">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-lg font-bold">Profile App</span>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex md:space-x-6">
          <Link href="/" className="relative hover:text-gray-300 group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="relative hover:text-gray-300 group">
            About
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible only when hamburger is clicked) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#1a1630] text-white p-4 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <Link href="/" className="block py-2 px-4 hover:bg-[#4c476a]">
          Home
        </Link>
        <Link href="/about" className="block py-2 px-4 hover:bg-[#4c476a]">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
