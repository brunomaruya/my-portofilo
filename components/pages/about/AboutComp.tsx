import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AboutComp() {
  const t = useTranslations("AboutMe");
  return (
    <div className="mt-[64px] flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-20 items-center justify-between">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-8">
            {t.rich("title", {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h1>
          <p>{t("first paragraph")}</p>
          <p>{t("second paragraph")}</p>
          <p>{t("third paragraph")}</p>
        </div>
        <Image
          width={500}
          height={500}
          alt="image"
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
