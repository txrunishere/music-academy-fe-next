"use client";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC<{ className?: string }> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem active={active} setActive={setActive} item="Home" />
        </Link>
        <MenuItem active={active} setActive={setActive} item="Courses">
          <div className="flex flex-col">
            <HoveredLink href={"/courses"}>All Courses</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Advanced Composition</HoveredLink>
            <HoveredLink href="/">Songwriting</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem active={active} setActive={setActive} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
