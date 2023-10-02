import React from "react";
import { IWorkExperience } from "@/lib/types";

const workExperience: IWorkExperience[] = [
  {
    company: "Freelance",
    position: "Software Developer",
    startDate: "2022-01-01",
    endDate: "Present",
    description:
      "In the realm of freelance development, I have consistently demonstrated an unwavering commitment to bringing both local and remote clients' visions into reality. Drawing from a refined technological repertoire, I've specialized in harnessing the power of <strong>ASP.NET</strong> and <strong>Node.js</strong> for backend development, ensuring robust, secure, and scalable server-side solutions. On the frontend, my proficiency with <strong>React.js</strong> and <strong>Next.js</strong> has been instrumental in devising dynamic, responsive, and intuitively interactive user interfaces. Furthermore, my adeptness with <strong>PostgreSQL</strong> guarantees efficient, structured, and reliable data management. This comprehensive tech stack not only underscores my versatility but also my dedication to delivering products that resonate with the envisioned idea.",
  },
  {
    company: "Silicon Solutions",
    position: "MERN Stack Developer",
    startDate: "2022-02-01",
    endDate: "2022-07-01",
    description:
      "During my time at Silicon.so, I assumed the role of a software developer, where I actively contributed to a range of projects, gaining valuable experience in the software development industry. In this capacity, I undertook various responsibilities, such as coding, designing, and implementing software solutions. My collaborative efforts with the team were instrumental in achieving successful project outcomes. Throughout the development process, I actively engaged in all stages, from gathering requirements to conducting testing and overseeing deployment.",
  },
  {
    company: "BixiHQ",
    position: "Mobile App Developer",
    startDate: "2023-03-01",
    endDate: "Present",

    description:
      "In my current role as a Mobile App Developer at Bixi, I am entrusted with the responsibility of conceptualizing, developing, and implementing new features for mobile applications. My primary focus lies in creating user-friendly and innovative apps, which entails leveraging cutting-edge technologies like <strong>React Native</strong> to build dynamic and responsive interfaces. Additionally, I am deeply committed to optimizing app performance to ensure seamless user experiences. As part of my role, I actively participate in various stages of the app development process, from initial ideation and design to rigorous testing and final deployment. I also collaborate with cross-functional teams to define, design, and ship new features. I am also responsible for continuously discovering, evaluating, and implementing new technologies to maximize development efficiency.",
  },
];

export default function WorkExperiencePage() {
  return (
    <main className="mt-16 mb-20 max-w-4xl mx-4 lg:mx-auto">
      <div className="bg-[url(/grid.svg)] h-full px-4">
        <h1
          className="text-4xl font-bold pt-2"
          style={{
            WebkitTextStroke: "1px",
            WebkitTextFillColor: "transparent",
          }}
        >
          Work Experience
        </h1>
        <div className="flex flex-col gap-4">
          {workExperience.map((work, index) => (
            <div key={index} className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extralight">{work.company}</h2>
                <h2 className="font-thin">
                  {work.startDate} - {work.endDate}
                </h2>
              </div>
              <h3 className="text-xl font-bold">{work.position}</h3>
              <p
                className="font-light"
                dangerouslySetInnerHTML={{
                  __html: work.description,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
