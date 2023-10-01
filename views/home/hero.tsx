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
        <div className="absolute -top-32 w-40 h-40 ml-8 ">
          <Image
            src={"https://www.github.com/aaqyaar.png"}
            fill
            alt="Abdi Zamed Mohamed"
            className="rounded-full shadow-lg border-4"
          />
        </div>

        <Link href={"https://www.github.com/aaqyaar"} target="_blank">
          <Button className="absolute right-10 space-x-4 -bottom-[4.7rem]">
            Follow
            <FaGithub className="h-5 w-5 ml-3" />
          </Button>
        </Link>
      </div>

      <div className="ml-12 mt-12">
        <h1 className="text-2xl font-bold">
          Abdi Zamed Mohamed <span className="text-sm">(@aaqyaar)</span>
        </h1>
        <p className="py-4 font-light">Brings ideas to life with code! ✨</p>
        <p className="font-light">
          Passionate and creative software engineer with a strong interest in
          web & mobile development. I have a strong passion for learning new
          things and using them to solve real-world problems. I am currently
          based in from Somalia 🇸🇴
        </p>
      </div>
    </>
  );
}
