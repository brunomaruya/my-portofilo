import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import indeedIcon from "../public/icons/indeed.svg";

export const contacts = [
  {
    link: "https://www.linkedin.com/in/bruno-maruya/",
    icon: <LinkedinLogo />,
  },
  {
    link: "https://profile.indeed.com/?hl=ja_JP&co=JP&from=gnav-homepage&_ga=2.223791771.1006469367.1706534040-861890169.1698108449",
    icon: (
      <Image
        src={indeedIcon}
        width={25}
        height={25}
        alt="indeed icon"
        className="filter"
      />
    ),
  },
  {
    link: "https://github.com/brunomaruya",
    icon: <GithubLogo />,
  },
];
