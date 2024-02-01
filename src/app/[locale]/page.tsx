import Hero from "../../../components/pages/home/Hero";
import Introduce from "../../../components/pages/home/Introduce";
import FindMe from "../../../components/pages/home/FindMe";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduce />
      <FindMe />
    </>
  );
}
