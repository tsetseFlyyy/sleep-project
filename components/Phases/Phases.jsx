import React, { useState } from "react";
import { useTranslation } from "next-i18next";

const Phases = ({id}) => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [tabTitle, setTabTitle] = useState();
  const [tabText, setTabText] = useState();

  const setNonREM = () => {
    setTabTitle("non_rem_sleep");
    setTabText("non_rem_text");
    setIsHovered(true);
  };

  const setREM = () => {
    setTabTitle("rem_sleep");
    setTabText("rem_text");
    setIsHovered(true);
  };

  return (
    <section className="phases" id={id}>
      <h1 className="phases-main-title">{t("sleep_phases")}</h1>
      <div className="phases-wrapper">
        <div
          className="phases-col"
          onMouseOver={setNonREM}
          onMouseOut={() => setIsHovered(false)}
        >
          <img
            className="phases-col-1-img"
            src="https://media-public.canva.com/MACZWNJeHmI/1/screen.jpg"
            alt=""
          />
          <h1>{t("non_rem_sleep")}</h1>
        </div>
        <div
          className="phases-col"
          onMouseOver={setREM}
          onMouseOut={() => setIsHovered(false)}
        >
          <img
            className="phases-col-2-img"
            src="https://media-public.canva.com/MACZhyPXPRk/1/screen.jpg"
            alt=""
          />
          <h1>{t("rem_sleep")}</h1>
        </div>
      </div>
      {isHovered && (
        <div className="hover-tab" onMouseOver={() => setIsHovered(true)}>
          <h1>{t(tabTitle)}</h1>
          <p>{t(tabText)}</p>
        </div>
      )}
    </section>
  );
};

export default Phases;
