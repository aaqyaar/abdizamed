import React from "react";
import { ToggleMode } from "./toggle-mode";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-2 max-w-5xl mx-4 gap-4 lg:mx-auto flex justify-between items-center">
      <div className="relative w-14 h-14">
        <Link href={"/"}>
          <Image
            src={"/icon.png"}
            fill
            alt="Abdi Zamed Mohamed"
            className="border-4 rounded-full"
          />
        </Link>
      </div>
      <nav className="flex items-center gap-2">
        <Link href={"/work-experience"}>
          <Button variant={"ghost"}>Work Experience</Button>
        </Link>
        <Link href={"/projects"}>
          <Button variant={"ghost"}>Projects</Button>
        </Link>
        <ToggleMode />
      </nav>
    </header>
  );
}
