"use client";
import React from "react";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        {/* Hamburger Menu Button */}
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={32}
            height={32}
            alt="Hamburger Menu"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="border-none bg-[var(--dark-1)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="Yoom Logo"
              className="max-sm:size-9"
            />
            <p className="text-[24px] font-extrabold text-white">LinkUp</p>
          </Link>

          {/* Sidebar Links */}
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-auto pt-14">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route || (link.route !== "/" && pathname.startsWith(link.route));

              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    className={cn(
                      "flex gap-3 items-center p-3 rounded-lg justify-start transition-colors duration-200 text-white text-base md:text-lg", // ✅ Slightly increased text size
                      { "bg-[var(--blue-1)] text-white": isActive }
                    )}
                  >
                    <Image src={link.imgUrl} alt={link.label} width={22} height={22} />
                    <p className="text-base md:text-lg font-medium">{link.label}</p> {/* ✅ Slightly larger font */}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

