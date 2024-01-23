import React from "react";

const Introduction = () => {
  return (
    <section className="whatsleep">
      <div className="whatsleep__wrapper">
        <div className="whatsleep__images">
          <img
            src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MYQEU44PIHOFGIR7ND52GTUYZ4.jpg&w=1200"
            alt="one"
          />
          <img
            src="https://cdn.bcm.edu/sites/default/files/2023-08/sleep-photo.jpg"
            alt="two"
          />
        </div>
        <div className="whatsleep__container">
          <h1 className="whatsleep__container-title">Introduction</h1>
          <h2 className="whatsleep__container-subtitle">
            Definition of sleep and its role for the body
          </h2>
          <p className="whatsleep__container-text">
            Sleep is a physiological process characterized by a temporary state
            of rest, relaxation, and organism recovery. It occurs cyclically and
            consists of several stages, including rapid eye movement (REM) sleep
            and non-REM sleep. The process of sleep is carefully regulated by
            the hypothalamus and other parts of the brain.
          </p>
          <br />
          <p className="whatsleep__container-text">
            Sleep typically progresses through several stages, including rapid
            eye movement sleep (REM) and slow-wave sleep. REM sleep is often
            associated with dreaming, and non-REM sleep includes phases of deep
            sleep when the body regains energy.
          </p>
          <br />
          <p className="whatsleep__container-text">
            Sleep typically progresses through several stages, including rapid
            eye movement sleep (REM) and slow-wave sleep. REM sleep is often
            associated with dreaming, and non-REM sleep includes phases of deep
            sleep when the body regains energy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
