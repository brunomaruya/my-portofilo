import Hero from "../../../components/pages/home/Hero";
import Introduce from "../../../components/pages/home/Introduce";
import FindMe from "../../../components/pages/home/FindMe";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Hero />
      <h1>{t("title")}</h1>
      <div>
        <Link href="/en">en</Link>
      </div>
      <div>
        <Link href="/jp">jp</Link>
      </div>
      <Introduce />
      <FindMe />
    </>
  );
}
