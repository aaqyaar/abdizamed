import React, { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <div className="relative w-full h-96 bg-gray-200 rounded dark:bg-secondary">
        <Image
          src={"/code.png"}
          fill
          alt="Abdi Zamed Mohamed"
          className="object-cover rounded"
        />
      </div>
      <div className="flex justify-between relative">
        <div className="absolute -top-32 w-40 h-40 ml-3 md:ml-8">
          <Image
            src={"/icon.png"}
            fill
            alt="Abdi Zamed Mohamed"
            className="rounded-full shadow-lg border-4"
          />
        </div>

        <Link href={"https://www.github.com/aaqyaar"} target="_blank">
          <Button className="absolute right-2 md:right-10 space-x-4 -bottom-12 md:-bottom-[4.7rem]">
            Follow
            <FaGithub className="h-5 w-5 ml-3" />
          </Button>
        </Link>
      </div>

      <div className="ml-4 md:ml-12 mt-12">
        <h1 className="text-2xl font-bold">
          Abdi Zamed Mohamed <span className="text-sm">(@aaqyaar)</span>
        </h1>
        <p className="py-4 font-light">Brings ideas to life with code! ✨</p>
        <p className="font-light max-w-md md:max-w-2xl lg:max-w-4xl">
          Passionate and creative software engineer with a strong interest in
          web & mobile development. I have a strong passion for learning new
          things and using them to solve real-world problems. I am currently
          based in from Somalia 🇸🇴
        </p>
      </div>
    </>
  );
}
