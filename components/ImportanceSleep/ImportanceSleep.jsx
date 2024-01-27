import React from "react";
import { useTranslation } from "next-i18next";

const ImportanceSleep = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="importance-sleep">
      <h1>{t("why_sleep_important")}</h1>
      <div className="importance-sleep-reasons">
        <div className="importance-sleep-reason">
          <h2>{t("physical_restoration")}</h2>
          <p>{t("importance_sleep_text1")}</p>
        </div>
        <div className="importance-sleep-reason">
          <h2>{t("mental_health_support")}</h2>
          <p>{t("importance_sleep_text2")}</p>
        </div>
        <div className="importance-sleep-reason">
          <h2>{t("memory_consolidation")}</h2>
          <p>{t("importance_sleep_text3")}</p>
        </div>
        <div className="importance-sleep-reason">
          <h2>{t("metabolism_regulation")}</h2>
          <p>{t("importance_sleep_text4")}</p>
        </div>
        <div className="importance-sleep-reason">
          <h2>{t("immune_system_enhancement")}</h2>
          <p>{t("importance_sleep_text5")}</p>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSleep;
