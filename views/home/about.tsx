import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InboxArrowDownIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { FaFileDownload } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { AiOutlineSmallDash } from "react-icons/ai";

export function About() {
  return (
    <div className="md:ml-12 mx-4 my-4">
      <div>
        <AiOutlineSmallDash className="text-4xl" />
        <h1 className="text-xl font-bold hover:underline hover:underline-offset-4">
          About Me
        </h1>
      </div>

      <div className="my-4 mt-4">
        <p className="font-light">
          {" I'm "}Abdi Zamed Mohamed, a diligent full-stack developer based in
          the dynamic city of Mogadishu, Somalia. My journey in the tech world
          began out of sheer passion and has, over the years, transformed into a
          thriving profession. With more than three years of intensive
          experience in the industry, I have consistently turned imaginative
          ideas into tangible, robust software products.
          <br />
          <br />
          Despite not having begun my career with a formal university backdrop,
          the tech landscape of Mogadishu has provided me with unparalleled
          opportunities. It has been a vibrant playground where I have been able
          to not only hone my skills but also contribute to the growing digital
          ecosystem. Each project I embark upon, I view as a challenge to push
          the boundaries, aiming to not only cater to user needs but also
          elevate the standards of technological innovation. My resilience,
          combined with an insatiable curiosity, has been my driving force,
          allowing me to craft innovative digital solutions even when faced with
          the most intricate challenges.
        </p>

        <div className="mt-4">
          <span className="font-bold inline-flex items-center gap-2 text-lg">
            <BookOpenIcon className="h-5 w-5" /> Education:
          </span>
          <div>
            <div className="flex justify-between font-light mt-2">
              <p>Alfajr High School</p> <p>2012-2020</p>
            </div>
            <p className="font-extralight mt-4">
              A significant phase of my life where I built the foundational
              skills and developed a penchant for technology.
            </p>
          </div>
          <Separator className="opacity-50 my-4" />
          <div>
            <div className="flex justify-between font-light mt-2">
              <p>Jamhuriya University of Science and Technology</p>
              <p>2023-2024 (Not Finished Yet)</p>
            </div>

            <p className="font-extralight mt-4">
              My pursuit of formal education, though a recent endeavor, has been
              invigorating. At Jamhuriya University, I am expanding my horizons,
              diving deeper into the technical realm, and getting exposed to
              global tech trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
