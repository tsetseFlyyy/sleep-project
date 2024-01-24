import React from "react";

const Phases = () => {
  return (
    <section className="phases">
      <h1 className="phases-main-title">Sleep Phases</h1>
      <div className="phases-col-1 phases-col">
        <div className="phases-col-1-img"></div>
        <div className="phases-col-1-hover hover-tab">
          <h1>Non-REM Sleep</h1>
          <p>
            Non-REM (NREM) sleep comprises phases of sleep without rapid eye
            movements. It includes three stages: light sleep, true sleep, and
            deep sleep. During Non-REM sleep, the body undergoes physical
            restoration, tissue growth, and repair. It is a period when the
            organism actively replenishes energy and prepares for the next sleep
            cycle.
          </p>
        </div>
        <h1 className="phases-col-title">NON-REM SLEEP</h1>
      </div>
      <div className="phases-col-2 phases-col">
        <div className="phases-col-2-img"></div>
        <div className="phases-col-2-hover hover-tab">
          <h1>REM Sleep</h1>
          <p>
            Rapid Eye Movement (REM) sleep is a phase characterized by rapid eye
            movements, intense brain activity, and vivid dreaming. In REM sleep,
            muscles experience temporary paralysis to prevent physical enactment
            of dreams. This stage is considered crucial for mental recovery,
            emotional processing, and memory consolidation.
          </p>
        </div>
        <h1 className="phases-col-title">REM SLEEP</h1>
      </div>
    </section>
  );
};

export default Phases;
