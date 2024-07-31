"use client";
import React from "react";
// import { projects } from "./projects";
import Image from "next/image";
import { Card } from "@nextui-org/react";
import chriztiank from "../../../public/thumbnails/chriztiank.png";
import sketchshare from "../../../public/thumbnails/sketchshare.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BiGlobeAlt } from "react-icons/bi";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import { CgGlobeAlt } from "react-icons/cg";

export default function ProjectsComp() {
  const t = useTranslations("Projects");
  const projects = [
    {
      title: "ChriztianK",
      description: t("ChriztianK"),
      image: chriztiank,
      link: "https://chriztiank.vercel.app/",
      github: "https://github.com/brunomaruya/chriztianzk-portfolio-v2",
    },
    {
      title: "SketchShare",
      description: t("SketchShare"),
      image: sketchshare,
      link: "https://sketchshare.vercel.app/",
      github:
        "https://github.com/brunomaruya/sketchshare-v4?tab=readme-ov-file",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl lg:text-5xl font-extrabold">
        My <span className="text-primary ">Projects</span>
      </h1>
      <h6 className="mt-5 lg:text-xl mb-10">Here are a few of my projects</h6>
      <div className="flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <Link href={project.link} target="_blank">
            <Card
              key={index}
              className="flex flex-col items-center justify-between  border border-primary w-96 bg-background rounded-md p-5 md:p-10"
            >
              <div>
                <Image
                  className="h-40 w-80 object-cover object-top  mb-5"
                  width={500}
                  height={500}
                  alt="image"
                  src={project.image}
                />

                <h1 className="text-xl mb-3">{project.title}</h1>
                <p>{project.description}</p>
              </div>

              <div className="flex gap-3 mt-3 ">
                <Link href={project.link} target="_blank">
                  <CgGlobeAlt className="text-2xl" />
                </Link>
                <Link href={project.github} target="_blank">
                  <GithubLogo className="text-2xl" />
                </Link>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
