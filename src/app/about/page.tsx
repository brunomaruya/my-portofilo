import React from "react";
import AboutComp from "../../../components/pages/about/AboutComp";
import SkillSet from "../../../components/pages/about/SkillSet";
import DaysICode from "../../../components/pages/about/DaysICode";

export default function About() {
  return (
    <div className="flex flex-col gap-20 justify-between">
      <AboutComp />
      <SkillSet />
      <DaysICode />
    </div>
  );
}
