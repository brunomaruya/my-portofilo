import { useTranslations } from "next-intl";
import chriztiank from "../../../public/thumbnails/chriztiank.png";
import sketchshare from "../../../public/thumbnails/sketchshare.png";

export const projects = [
  {
    title: "ChriztianK",
    description:
      "Welcome to the online portfolio of Chistian Kenji, a passionate photographer capturing the essence of Japan through his lens. Immerse yourself in the beauty of Japanese landscapes, culture, and moments frozen in time.",
    image: chriztiank,
    link: "https://chriztiank.vercel.app/",
  },
  {
    title: "SkecthShare",
    description:
      "SketchShare is a vibrant online community where users can share images, add descriptions, and interact with other users' posts. The platform allows users to create accounts and log in to personalize their experience.",
    image: sketchshare,
    link: "https://sketchshare.vercel.app/",
  },
];
