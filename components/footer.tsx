import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mt-8 my-4">
      <div className="flex gap-4">
        <Link
          href={"https://www.facebook.com/profile.php?id=100081114242360"}
          target="_blank"
        >
          <Button variant={"ghost"} size={"icon"}>
            <FaFacebook className="h-7 w-7" />
          </Button>
        </Link>
        <Link href={"https://twitter.com/abdizamedmo"} target="_blank">
          <Button variant={"ghost"} size={"icon"}>
            <FaTwitter className="h-7 w-7" />
          </Button>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abdi-zamed-mohamed-79a647225/"}
          target="_blank"
        >
          <Button variant={"ghost"} size={"icon"}>
            <FaLinkedin className="h-7 w-7" />
          </Button>
        </Link>
        <Link href={"https://www.github.com/aaqyaar"} target="_blank">
          <Button variant={"ghost"} size={"icon"}>
            <FaGithub className="h-7 w-7" />
          </Button>
        </Link>
      </div>
      <Separator className="my-2" />

      <p className="font-light">
        Made with ❤️ by <span className="font-bold">Abdi Zamed Mohamed</span> ©{" "}
        {new Date().getFullYear()}
      </p>

      <p className="font-light"></p>
    </footer>
  );
}
