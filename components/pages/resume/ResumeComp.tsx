"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import englishResume from "../../../public/resumes/resume.jpg";
import japaneseResume from "../../../public/resumes/rirekisho1.jpg";
import japaneseResume2 from "../../../public/resumes/rirekisho2.jpg";
import { Button } from "@nextui-org/react";

import React from "react";
import useDownloader from "react-use-downloader";

export default function ResumeComp() {
  const { download } = useDownloader();
  //TODO: update resumes
  const resumes = [
    {
      language: "Japanese",
      images: [japaneseResume, japaneseResume2],
      fileUrl: "",
      filename: "履歴書",
    },
    {
      language: "English",
      images: [englishResume],
      fileUrl: "",
      filename: "Resume",
    },
  ];

  return (
    <div className="flex w-full flex-col ">
      <Tabs
        aria-label="Options"
        className="xl:ml-28 mt-10 "
        variant="underlined"
      >
        {resumes.map((resume) => (
          <Tab
            key={resume.language}
            title={resume.language}
            className="flex flex-col items-center"
          >
            <Button
              className="bg-accent mb-5"
              onClick={() => download(resume.fileUrl, resume.filename)}
            >
              Download
            </Button>
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
