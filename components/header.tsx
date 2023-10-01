import React from "react";
import { ToggleMode } from "./toggle-mode";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-2 max-w-4xl mx-4 lg:mx-auto flex justify-between items-center">
      <div className="relative w-14 h-14">
        <Link href={"/"}>
          <Image
            src={"https://www.github.com/aaqyaar.png"}
            fill
            alt="Abdi Zamed Mohamed"
            className="rounded-full"
          />
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link href={"/works"}>
          <Button variant={"ghost"}>Works</Button>
        </Link>
        <Link href={"/projects"}>
          <Button variant={"ghost"}>Projects</Button>
        </Link>
        <ToggleMode />
      </nav>
    </header>
  );
}
