import React from "react";
import { projects } from "./projects";
import Image from "next/image";
import { Card } from "@nextui-org/react";

export default function ProjectsComp() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl lg:text-5xl font-extrabold">
        My <span className="text-primary ">Projects</span>
      </h1>
      <h6 className="mt-5 lg:text-xl mb-10">Here are a few of my projects</h6>
      <div className="flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col items-center  border border-primary w-96 bg-background rounded-md p-5 md:p-10"
          >
            <Image
              className="h-40 w-80 object-cover object-top  mb-5"
              width={500}
              height={500}
              alt="image"
              src={project.image}
            />

            <h1 className="text-xl mb-3">{project.title}</h1>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
