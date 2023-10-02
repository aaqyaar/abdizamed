"use client";

import { Project as ProjectType, Projects } from "@/lib/types";
import React from "react";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { Separator } from "@/components/ui/separator";
import { settings } from "@/lib/utils";

interface ProjectProps {
  projects: Projects;
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="my-16 max-w-4xl mx-4 md:mx-auto">
      <div>
        <h1
          className="text-4xl font-bold"
          style={{
            WebkitTextStroke: "1px ",
            WebkitTextFillColor: "transparent",
          }}
        >
          Some of my projects
        </h1>
        <p
          className="font-light"
          style={{
            WebkitTextStroke: "1px",
            WebkitTextFillColor: "transparent",
          }}
        >
          I have worked on many projects, here are some of my favorites. while
          in freelancing.
        </p>
      </div>

      <div className="mt-4">
        {projects.map(({ images, title, description }: ProjectType, i) => (
          <div key={i} className="py-4 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[30rem]">
              <Slider {...settings}>
                {images.map((image, i) => (
                  <div
                    key={i}
                    className="w-full h-[13rem] md:h-[18rem] relative bg-gray-100 dark:bg-neutral-900 rounded"
                  >
                    <Image
                      src={image}
                      alt={title}
                      className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 object-cover object-top"
                      fill
                      quality={100}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div id="content">
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-3.5 text-md font-light">{description}</p>

              <Button className="mt-3">
                Check it out <TbWorld className="h-5 w-5 ml-3" />
              </Button>
            </div>

            <Separator className="block md:hidden" />
          </div>
        ))}
      </div>
    </div>
  );
}
