import React from "react";
import { projects } from "./projects";
import Image from "next/image";

export default function ProjectsComp() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl lg:text-5xl font-extrabold">
        My <span className="text-primary ">Projects</span>
      </h1>
      <h6 className="mt-5 lg:text-xl">Here are a few of my projects</h6>
      <div className="flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-96 border border-primary rounded-md p-10"
          >
            <Image
              className="h-52 w-80 object-cover object-top"
              width={500}
              height={500}
              alt="image"
              src={project.image}
            />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
