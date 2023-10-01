import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export function Links() {
  return (
    <div className="ml-12 mt-4 flex gap-4 items-center">
      <Button
        className="inline-flex items-center gap-2 cursor-default"
        variant={"secondary"}
      >
        <BriefcaseIcon className="h-5 w-5" />{" "}
        <span className="font-light">
          Software Engineer at <span className="font-bold">Bixi</span>
        </span>
      </Button>

      <Link href={"https://twitter.com/abdizamedmo"} target="_blank">
        <Button className="inline-flex items-center gap-2" variant={"ghost"}>
          <FaTwitter className="h-5 w-5 " />{" "}
          <span className="font-light">Connect with me on X</span>
        </Button>
      </Link>

      <Link
        href={"https://www.linkedin.com/in/abdi-zamed-mohamed-79a647225/"}
        target="_blank"
      >
        <Button className="inline-flex items-center gap-2" variant={"ghost"}>
          <FaLinkedin className="h-5 w-5 " />{" "}
          <span className="font-light">Connect with me on Linkedin</span>
        </Button>
      </Link>
    </div>
  );
}
