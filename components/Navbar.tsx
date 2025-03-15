"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-[var(--dark-1)] px-6 py-4 lg:px-10 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/icons/logo.svg" 
          width={32} 
          height={32} 
          alt="Yoom Logo" 
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          LinkUp
        </p>
      </Link>

      {/* Navigation Right Side (User Button / Sign In / Mobile Nav) */}
      <div className="flex items-center gap-5"> 
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton /> {/* ✅ Fixed missing closing tag */}
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;


