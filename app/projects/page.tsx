import React from "react";
import Projects from "@/views/projects";
import { Projects as ProjectsType } from "@/lib/types";

const projects: ProjectsType = [
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
    id: 3,
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

  {
    id: 4,
    images: ["/sooyaal/1.png", "/sooyaal/2.png", "/sooyaal/3.png"],
    title: "Sooyaal (App)",
    github: "https://www.github.com/aaqyaar/alhilaal-real-state",
    technologies: ["React Native", "Expo", "Nest.js", "MongoDB"],
    description:
      "Sooyaal (App) is a social media app that allows somalian users to share their thoughts, ideas, and events. Also included is a chat feature that allows users to chat with each other. and also a somali people can able to see the somali weekly events. The frontend is built with React Native and Expo. The backend is built with Nest.js and MongoDB.",
  },
];

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}
