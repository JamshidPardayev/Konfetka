"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Bokor } from "next/font/google";
import { Bonbon } from "next/font/google"; 
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { FaCandyCane } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const bokor = Bokor({
  subsets: ["latin"],
  weight: "400",
});

const bonbon = Bonbon({
  subsets: ["latin"],
  weight: "400", 
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={bokor.className}>
      <div className="relative z-20 max-w-[1200px] mx-auto min-h-[100px] text-white text-[20px] px-[20px] flex items-center justify-center gap-x-[40px] max-md:justify-between">
        <ul className="hidden md:flex items-center gap-x-[20px]">
          <Link href={"/header"}>
            <li className="hover:text-[#E2603B] duration-300">Home</li>
          </Link>
          <Link href={"/gallery"}>
            <li className="hover:text-[#E2603B] duration-300">Gallery</li>
          </Link>
          <Link href={"/chocolates"}>
            <li className="hover:text-[#E2603B] duration-300">Chocolates</li>
          </Link>
        </ul>

        <div className={bonbon.className}>
          <h1 className="flex items-center text-[50px] text-[#E2603B] font-medium max-sm:text-[40px]">
            Konfetka <FaCandyCane className="text-[30px]" />
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-x-[20px]">
          <Link href={"/about"}>
            <li className="hover:text-[#E2603B] duration-300">About</li>
          </Link>
          <Link href={"contact"}>
            <li className="hover:text-[#E2603B] duration-300">Contact</li>
          </Link>
          <Link href={"products"}>
            <li className="hover:text-[#E2603B] duration-300">Products</li>
          </Link>
        </ul>

        <div className="md:hidden" onClick={toggleMenu}>
          <IoMdMenu className="text-[30px] hover:text-[#E2603B] duration-300 cursor-pointer" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-50  md:hidden">
          <div className="flex justify-end p-5">
            <FaXmark
              className="text-[30px] text-white cursor-pointer hover:text-[#E2603B] duration-300"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center gap-y-[20px] text-white text-[25px]">
            <Link href={"/header"}>
              <li className="hover:text-[#E2603B] duration-300">Home</li>
            </Link>
            <Link href={"/gallery"}>
              <li className="hover:text-[#E2603B] duration-300">Gallery</li>
            </Link>
            <Link href={"/chocolates"}>
              <li className="hover:text-[#E2603B] duration-300">Chocolates</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-[#E2603B] duration-300">About</li>
            </Link>
            <Link href={"contact"}>
              <li className="hover:text-[#E2603B] duration-300">Contact</li>
            </Link>
            <Link href={"products"}>
              <li className="hover:text-[#E2603B] duration-300">Products</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
