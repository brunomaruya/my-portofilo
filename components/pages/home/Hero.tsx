import { useTranslations } from "next-intl";
import React from "react";

export default function Hero() {
  const t = useTranslations("Index.Hero");
  return (
    <div className="h-screen w-full bg-hero mt-[-64px]">
      <div className="  h-screen  backdrop-brightness-[.3] flex flex-col sm:items-start items-center pt-72">
        <div className="margin">
          <h1 className="text-4xl md:text-4xl">{t("Hi There!")}</h1>
          <h1 className="text-4xl md:text-5xl mt-3">
            {t("I'm")}
            <span className=" text-primary ">{t("Bruno Maruya")}</span>
          </h1>
          <h2 className="text-primary mt-5 text-3xl md:text-3xl">
            {t("A WEB DEVELOPER")}
          </h2>
        </div>
      </div>
    </div>
  );
}
