import React from "react";
import { useTranslation } from "next-i18next";

const Conclusion = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="conclusion">
      <h1 className="conclusion-title title">{t("conclusion")}</h1>
      <p className="conclusion-text">{t("conclusion_text")}</p>
    </section>
  );
};

export default Conclusion;
