import React from "react";
import YouTube from "react-youtube";
import { useTranslation } from 'next-i18next';

const SleepRecommendations = () => {
	const { t, i18n } = useTranslation();
  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section className="sleeprecommendations">
      <h1>{t('recommendations')}</h1>
      <div className="video-wrapper">
        <YouTube videoId={"t0kACis_dJE"} opts={opts} />
      </div>
    </section>
  );
};

export default SleepRecommendations;
