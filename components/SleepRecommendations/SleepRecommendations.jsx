import React from "react";
import YouTube from "react-youtube";

const SleepRecommendations = () => {
  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section className="sleeprecommendations">
      <h1>Sleep Recommendations</h1>
      <div className="video-wrapper">
        <YouTube videoId={"t0kACis_dJE"} opts={opts} />
      </div>
    </section>
  );
};

export default SleepRecommendations;
