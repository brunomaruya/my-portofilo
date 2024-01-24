import Image from "next/image";
import Hero from "../../components/pages/home/Hero";
import Introduce from "../../components/pages/home/Introduce";
import FindMe from "../../components/pages/home/FindMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduce />
      <FindMe />
    </>
  );
}
