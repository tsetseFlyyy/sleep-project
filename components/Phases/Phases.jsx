import React, { useState } from "react";

const Phases = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [tabTitle, setTabTitle] = useState();
  const [tabText, setTabText] = useState();

  const setNonREM = () => {
    setTabTitle("Non-REM Sleep");
    setTabText(
      "Non-REM sleep encompasses three distinct stages, starting with the light sleep of Stage 1, a transitional phase from wakefulness to sleep. Stage 2 follows, characterized by sleep spindles and K-complexes, marking a deeper level of sleep. The most profound restorative phase, Stage 3, involves slow-wave sleep (SWS) with delta brain waves, crucial for physical repair and growth. During NREM sleep, heart rate and blood pressure decrease, muscle activity is reduced, and dreaming is limited, as the primary focus is on physical recovery and maintenance."
    );
    setIsHovered(true);
  };

  const setREM = () => {
    setTabTitle("REM Sleep");
    setTabText(
      "Rapid Eye Movement (REM) sleep is a distinctive stage characterized by vivid dreaming and rapid, random eye movements. While brain activity during REM is similar to wakefulness, the body undergoes temporary muscle paralysis to prevent physical actions corresponding to dream content. REM sleep is associated with memory consolidation, particularly for procedural and emotional memories. It plays a crucial role in cognitive restoration, learning, problem-solving, and emotional regulation. Throughout the night, individuals cycle through multiple NREM and REM episodes, with REM duration increasing in later sleep cycles, contributing significantly to overall sleep quality and mental well-being."
    );
    setIsHovered(true);
  };

  return (
    <section className="phases">
      <h1 className="phases-main-title">Sleep Phases</h1>
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
          <h1>Non-REM Sleep</h1>
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
          <h1>REM Sleep</h1>
        </div>
      </div>
      {isHovered && (
        <div className="hover-tab" onMouseOver={() => setIsHovered(true)}>
          <h1>{tabTitle}</h1>
          <p>{tabText}</p>
        </div>
      )}
    </section>
  );
};

export default Phases;
