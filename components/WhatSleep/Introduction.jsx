import React from "react";
import { useTranslation } from "next-i18next";

const Introduction = ({ id }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="whatsleep" id={id}>
      <div className="whatsleep__wrapper">
        <div className="whatsleep__images">
          <img src="/images/Vector.png" alt="sleeping girls" />
        </div>
        <div className="whatsleep__container">
          <h1 className="whatsleep__container-title">{t("introduction")}</h1>
          <h2 className="whatsleep__container-subtitle">
            {t("sleep_definition")}
          </h2>
          <p className="whatsleep__container-text">
            {t("whatsleep__container-text1")}
          </p>
          <br />
          <p className="whatsleep__container-text">
            {t("whatsleep__container-text2")}
          </p>
          <br />
          <p className="whatsleep__container-text">
            {t("whatsleep__container-text3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
