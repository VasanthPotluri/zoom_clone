"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";  
import { cn } from "@/lib/utils";
import Image from "next/image";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[var(--dark-1)] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          // ✅ Fix: Prevent Home from always being active
          const isActive =
            pathname === link.route || (link.route !== "/" && pathname.startsWith(link.route));

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-[var(--blue-1)]": isActive } // ✅ Uses correct active state logic
              )}
            >
              <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
              <p className="text-lg md:text-xl font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AppSidebar;



