import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { FaFileDownload, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Links() {
  return (
    <div className="mx-4 md:mx-12 mt-4 grid grid-cols-1  gap-2 md:grid-cols-4">
      <Button
        className="inline-flex items-center gap-2 cursor-default w-full"
        variant={"secondary"}
      >
        <BriefcaseIcon className="h-5 w-5" />{" "}
        <span className="font-light">
          Developer at <span className="font-bold">Bixi</span>
        </span>
      </Button>

      <Button className="inline-flex items-center gap-2" variant={"ghost"}>
        <FaFileDownload className="h-5 w-5" />
        Get Resume
      </Button>

      <Link href={"https://twitter.com/abdizamedmo"} target="_blank">
        <Button
          className="inline-flex items-center w-full gap-2"
          variant={"ghost"}
        >
          <FaTwitter className="h-5 w-5 " />{" "}
          <span className="font-light">Connect with me on X</span>
        </Button>
      </Link>

      <Link
        href={"https://www.linkedin.com/in/abdi-zamed-mohamed-79a647225/"}
        target="_blank"
      >
        <Button
          className="inline-flex items-center w-full gap-2"
          variant={"ghost"}
        >
          <FaLinkedin className="h-5 w-5 " />{" "}
          <span className="font-light">Connect with Linkedin</span>
        </Button>
      </Link>
    </div>
  );
}
