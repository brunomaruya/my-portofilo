import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export default function SkillSet() {
  const skills = [
    { name: "Javascript", icon: <IoLogoJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "NextJs", icon: <TbBrandNextjs /> },
    { name: "TailwindCss", icon: <SiTailwindcss /> },
  ];
  return (
    <div className="flex flex-col items-center mt-10 ">
      <h1 className="text-primary font-extrabold text-5xl text-center mb-20">
        SkillSet
      </h1>
      <div className="flex flex-wrap gap-6 justify-center max-w-[1000px]">
        {skills.map((skill, index) => (
          <div
            className="border border-primary rounded-md grow  text-6xl lg:text-8xl  px-6 py-4 lg:px-10  flex flex-wrap justify-around items-center max-w-[120px] lg:max-w-[200px]"
            key={index}
          >
            <div>{skill.icon}</div>
            <div className="text-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
