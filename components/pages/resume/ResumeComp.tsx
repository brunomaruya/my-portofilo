"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import englishResume from "../../../public/resumes/resume.jpg";
import japaneseResume from "../../../public/resumes/rirekisho1.jpg";
import japaneseResume2 from "../../../public/resumes/rirekisho2.jpg";

import React from "react";

export default function ResumeComp() {
  const resumes = [
    { language: "Japanese", images: [japaneseResume, japaneseResume2] },
    { language: "English", images: [englishResume] },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        {resumes.map((resume, index) => (
          <Tab key={resume.language} title={resume.language}>
            {resume.images.map((image, index) => (
              <Image
                key={index}
                width={1000}
                height={1000}
                alt="image"
                src={image}
              />
            ))}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
