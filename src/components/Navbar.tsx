"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            item="Home"
            active={active}
            setActive={setActive}
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Web Development</HoveredLink>
            <HoveredLink href="#">app Development</HoveredLink>
            <HoveredLink href="#">react Development</HoveredLink>
            <HoveredLink href="#">Next Development</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem active={active} setActive={setActive} item="Contact">
            
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
