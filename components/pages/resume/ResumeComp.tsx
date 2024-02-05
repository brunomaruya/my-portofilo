"use client";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import englishResume from "../../../public/resumes/EnglishResume.jpg";
import japaneseResume from "../../../public/resumes/rirekisho1.jpg";
import japaneseResume2 from "../../../public/resumes/rirekisho2.jpg";
import { Button } from "@nextui-org/react";
import React from "react";
import useDownloader from "react-use-downloader";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ResumeComp() {
  const { download } = useDownloader();
  const t = useTranslations("Resume");
  //TODO: update resumes
  const resumes = [
    {
      language: t("language.Japanese"),
      images: [japaneseResume, japaneseResume2],
      fileUrl: "",
      filename: "履歴書",
      open: "",
    },
    {
      language: t("language.English"),
      images: [englishResume],
      fileUrl: "/resumes/EnglishResumePDF.pdf",
      filename: "BrunoMaruyaResume.pdf",
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
            <div className="mb-5 flex gap-3">
              <Button
                className="bg-accent "
                onClick={() => download(resume.fileUrl, resume.filename)}
              >
                Download
              </Button>
              <Button className="bg-accent ">
                <Link href={resume.fileUrl}>Open</Link>
              </Button>
            </div>

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
