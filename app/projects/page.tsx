"use client";

import { Project as ProjectType, Projects } from "@/lib/types";
import React from "react";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Separator } from "@/components/ui/separator";

const projects: Projects = [
  {
    id: 1,
    images: [
      "/alhilaal/1.png",
      "/alhilaal/2.png",
      "/alhilaal/3.png",
      "/alhilaal/4.png",
      "/alhilaal/5.png",
    ],
    title: "Al Hilaal Real State",
    github: "https://www.github.com/aaqyaar/alhilaal-real-state",
    technologies: ["Next.js", "TailwindCSS", "PostgreSQL"],
    description:
      "Al Hilaal is a real state management company that is based in Mogadishu, Somalia. I was tasked with building a website that would showcase their properties and allow users to contact them. I built the website using Next.js, TailwindCSS, and PostgreSQL for the database. I also built a custom CMS for the client to manage the properties.",
  },
  {
    id: 2,
    images: [
      "/apartment/1.png",
      "/apartment/2.png",
      "/apartment/3.png",
      "/apartment/4.png",
    ],
    title: "A Private Apartment",
    github: "https://www.github.com/aaqyaar/alhilaal-real-state",
    technologies: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A Private Apartment is an online booking platform with a sleek design powered by React.js and Material UI. The robust backend uses Node.js and Express.js for efficient user request handling. Data is stored in MongoDB, and a custom CMS allows easy property and content management. The website is hosted on Heroku and the database on MongoDB Atlas.",
  },

  {
    id: 4,
    images: [
      "/simple-bank/1.png",
      "/simple-bank/1.png",
      "/simple-bank/1.png",
      "/simple-bank/1.png",
    ],
    title: "Simple Bank",
    github: "https://www.github.com/aaqyaar/alhilaal-real-state",
    technologies: ["React.js", "Material UI", "ASP.NET", "PostgreSQL"],
    description:
      "Simple Bank is a simple banking system that allows users to create accounts, deposit, withdraw, and transfer money. The frontend is built with React.js and Material UI. The backend is built with ASP.NET and PostgreSQL. Also included is a custom CMS for the admin to manage users and transactions and a REST API for the frontend to consume.",
  },
];

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  fade: true,
};

export default function ProjectsPage() {
  return (
    <div className="my-8 max-w-4xl mx-4 md:mx-auto">
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
            <div className="w-[30rem]">
              <Slider {...settings}>
                {images.map((image, i) => (
                  // add overlay to images
                  <div
                    key={i}
                    className="w-full h-[18rem] relative bg-gray-100 dark:bg-neutral-900 rounded"
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
