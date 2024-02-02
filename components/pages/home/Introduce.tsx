import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Introduce() {
  const t = useTranslations("Index.Introduce");
  return (
    <div className="mt-32 flex flex-col lg:flex-row items-center gap-8">
      <div>
        <h1 className="text-4xl mb-6">
          {t("LET ME")} <span className="text-primary">{t("INTRODUCE")}</span>
          {t("MYSELF")}
        </h1>
        <p className="mb-3">
          {t.rich("first paragraph", {
            span: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </p>
        <p className="mb-3">
          {t.rich("second paragraph", {
            span: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </p>
        <p className="mb-3">
          {t.rich("third paragraph", {
            span: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </p>
      </div>
      <div className="rounded-md overflow-hidden ">
        <Image
          width={500}
          height={500}
          alt="image"
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
        />
      </div>
    </div>
  );
}
