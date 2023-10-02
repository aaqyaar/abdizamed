import React from "react";
import { IWorkExperienceList, IWorkExperience } from "@/lib/types/about.types";

interface WorkExperienceProps {
  workExperience: IWorkExperienceList;
}

export default function WorkExperience({
  workExperience,
}: WorkExperienceProps) {
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
          {workExperience.map((work: IWorkExperience, index) => (
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
