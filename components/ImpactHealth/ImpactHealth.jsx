import React, { useRef, useState } from "react";

const ImpactHealth = () => {
  const [modalTitle, setModalTitle] = useState();
  const [modalList, setModalList] = useState();
  const [modalConclusion, setModalConclusion] = useState();

  const modalRef = useRef();

  const setModalPhysical = () => {
    modalRef.current.style.display = "flex";
    setModalTitle("Physical Restoration");
    setModalList([
      "<span>Tissue Repair:</span> During deep sleep, the body releases growth hormone, promoting tissue repair and regeneration.",
      "<span>Energy Conservation:</span> Sleep helps conserve energy, supporting overall physical well-being and stamina.",
      "<span>Immune System Support:</span> Adequate sleep enhances the immune system's ability to defend against infections and illnesses.",
      "<span>Hormone Regulation:</span> Sleep influences the balance of hormones involved in metabolism, appetite regulation, and stress response.",
      "<span>Cardiovascular Health:</span> Quality sleep contributes to a healthy cardiovascular system, regulating blood pressure and reducing the risk of heart-related issues.",
    ]);
    setModalConclusion(
      "Highlighting the impact of sleep on physical health emphasizes its role in promoting overall vitality and resilience."
    );
  };

  const setModalMental = () => {
    modalRef.current.style.display = "flex";
    setModalTitle("Mental Well-being");
    setModalList([
      "<span>Emotional Resilience:</span> Sufficient sleep fosters emotional resilience, reducing susceptibility to stress and mood disorders.",
      "<span>Memory Consolidation:</span> REM sleep, in particular, plays a crucial role in consolidating and organizing memories, aiding cognitive function.",
      "<span>Stress Reduction:</span> Quality sleep is linked to lower levels of cortisol, the stress hormone, contributing to better stress management.",
      "<span>Improved Concentration:</span> Adequate sleep enhances focus, attention, and overall cognitive performance in daily activities.",
      "<span>Emotional Processing:</span> Dreams during REM sleep facilitate emotional processing, helping individuals cope with and understand emotions.",
    ]);
    setModalConclusion(
      "By addressing the impact of sleep on mental health, this slide emphasizes the crucial connection between quality sleep and emotional well-being."
    );
  };

  window.addEventListener("click", function (event) {
    if (event.target === modalRef.current) {
      modalRef.current.style.display = "none";
    }
  });

  return (
    <section className="impact-health">
      <h1 className="impact-health-title">Impact on health</h1>
      <div className="impact-health-container">
        <div className="health" onClick={setModalPhysical}>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M368.75 210C368.75 193.125 358.125 178.75 343.75 172.5C349.375 166.875 353.125 158.75 353.125 150C353.125 132.5 338.75 118.125 321.25 118.125C320 118.125 318.75 118.125 318.125 118.125C320 113.75 321.25 108.75 321.25 103.75C321.25 86.25 306.875 71.875 289.375 71.875C283.75 71.875 278.75 73.125 274.375 75.625C270 63.125 258.125 52.5 244.375 52.5C226.875 52.5 213.125 68.75 212.5 81.25V300H213.125C213.125 322.5 231.25 340 253.75 340C273.75 340 290 325.625 293.75 306.875C297.5 308.125 301.875 308.75 306.25 308.75C328.75 308.75 346.875 290.625 346.875 268.125C346.875 261.25 345 254.375 341.875 248.125C356.875 243.125 368.75 228.125 368.75 210Z"
              fill="#F0908B"
            />
            <path
              d="M31.25 210C31.25 193.125 41.875 178.75 56.25 172.5C50.625 166.875 46.875 158.75 46.875 150C46.875 132.5 61.25 118.125 78.75 118.125C80 118.125 81.25 118.125 81.875 118.125C80 113.75 78.75 108.75 78.75 103.75C78.75 86.25 93.125 71.875 110.625 71.875C116.25 71.875 121.25 73.125 125.625 75.625C130 63.125 141.875 52.5 155.625 52.5C173.125 52.5 186.875 68.75 187.5 81.25V300H186.875C186.875 322.5 168.75 340 146.25 340C126.25 340 110 325.625 106.25 306.875C102.5 308.125 98.125 308.75 93.75 308.75C71.25 308.75 53.125 290.625 53.125 268.125C53.125 261.25 55 254.375 58.125 248.125C43.125 243.125 31.25 228.125 31.25 210Z"
              fill="#F0908B"
            />
            <path
              d="M368.75 210C368.75 193.125 358.125 178.75 343.75 172.5C349.375 166.875 353.125 158.75 353.125 150C353.125 132.5 338.75 118.125 321.25 118.125C320 118.125 318.75 118.125 318.125 118.125C320 113.75 321.25 108.75 321.25 103.75C321.25 86.25 306.875 71.875 289.375 71.875C283.75 71.875 278.75 73.125 274.375 75.625C270 63.125 258.125 52.5 244.375 52.5C226.875 52.5 213.125 68.75 212.5 81.25V300H213.125C213.125 322.5 231.25 340 253.75 340C273.75 340 290 325.625 293.75 306.875C297.5 308.125 301.875 308.75 306.25 308.75C328.75 308.75 346.875 290.625 346.875 268.125C346.875 261.25 345 254.375 341.875 248.125C356.875 243.125 368.75 228.125 368.75 210Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.25 210C31.25 193.125 41.875 178.75 56.25 172.5C50.625 166.875 46.875 158.75 46.875 150C46.875 132.5 61.25 118.125 78.75 118.125C80 118.125 81.25 118.125 81.875 118.125C80 113.75 78.75 108.75 78.75 103.75C78.75 86.25 93.125 71.875 110.625 71.875C116.25 71.875 121.25 73.125 125.625 75.625C130 63.125 141.875 52.5 155.625 52.5C173.125 52.5 186.875 68.75 187.5 81.25V300H186.875C186.875 322.5 168.75 340 146.25 340C126.25 340 110 325.625 106.25 306.875C102.5 308.125 98.125 308.75 93.75 308.75C71.25 308.75 53.125 290.625 53.125 268.125C53.125 261.25 55 254.375 58.125 248.125C43.125 243.125 31.25 228.125 31.25 210Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M96.875 220C96.875 220 125.625 215.625 138.125 243.75C151.875 275 133.75 298.125 106.875 306.875"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M160 128.75C160 128.75 144.375 153.75 116.25 147.5C88.125 141.25 82.5 118.125 82.5 118.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M160 185C159.375 184.375 151.875 158.125 119.375 148.75"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M271.25 188.75C271.25 188.75 263.75 216.25 287.5 237.5C298.75 247.5 321.25 250.625 340.625 248.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M262.5 137.5C262.5 137.5 279.375 148.125 293.75 143.75C308.125 139.375 318.125 118.125 318.125 118.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M250 275C250 275 258.125 243.125 295.625 243.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>Physical Health</h2>
        </div>
        <div className="health" onClick={setModalMental}>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M368.75 210C368.75 193.125 358.125 178.75 343.75 172.5C349.375 166.875 353.125 158.75 353.125 150C353.125 132.5 338.75 118.125 321.25 118.125C320 118.125 318.75 118.125 318.125 118.125C320 113.75 321.25 108.75 321.25 103.75C321.25 86.25 306.875 71.875 289.375 71.875C283.75 71.875 278.75 73.125 274.375 75.625C270 63.125 258.125 52.5 244.375 52.5C226.875 52.5 213.125 68.75 212.5 81.25V300H213.125C213.125 322.5 231.25 340 253.75 340C273.75 340 290 325.625 293.75 306.875C297.5 308.125 301.875 308.75 306.25 308.75C328.75 308.75 346.875 290.625 346.875 268.125C346.875 261.25 345 254.375 341.875 248.125C356.875 243.125 368.75 228.125 368.75 210Z"
              fill="#F0908B"
            />
            <path
              d="M31.25 210C31.25 193.125 41.875 178.75 56.25 172.5C50.625 166.875 46.875 158.75 46.875 150C46.875 132.5 61.25 118.125 78.75 118.125C80 118.125 81.25 118.125 81.875 118.125C80 113.75 78.75 108.75 78.75 103.75C78.75 86.25 93.125 71.875 110.625 71.875C116.25 71.875 121.25 73.125 125.625 75.625C130 63.125 141.875 52.5 155.625 52.5C173.125 52.5 186.875 68.75 187.5 81.25V300H186.875C186.875 322.5 168.75 340 146.25 340C126.25 340 110 325.625 106.25 306.875C102.5 308.125 98.125 308.75 93.75 308.75C71.25 308.75 53.125 290.625 53.125 268.125C53.125 261.25 55 254.375 58.125 248.125C43.125 243.125 31.25 228.125 31.25 210Z"
              fill="#F0908B"
            />
            <path
              d="M368.75 210C368.75 193.125 358.125 178.75 343.75 172.5C349.375 166.875 353.125 158.75 353.125 150C353.125 132.5 338.75 118.125 321.25 118.125C320 118.125 318.75 118.125 318.125 118.125C320 113.75 321.25 108.75 321.25 103.75C321.25 86.25 306.875 71.875 289.375 71.875C283.75 71.875 278.75 73.125 274.375 75.625C270 63.125 258.125 52.5 244.375 52.5C226.875 52.5 213.125 68.75 212.5 81.25V300H213.125C213.125 322.5 231.25 340 253.75 340C273.75 340 290 325.625 293.75 306.875C297.5 308.125 301.875 308.75 306.25 308.75C328.75 308.75 346.875 290.625 346.875 268.125C346.875 261.25 345 254.375 341.875 248.125C356.875 243.125 368.75 228.125 368.75 210Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.25 210C31.25 193.125 41.875 178.75 56.25 172.5C50.625 166.875 46.875 158.75 46.875 150C46.875 132.5 61.25 118.125 78.75 118.125C80 118.125 81.25 118.125 81.875 118.125C80 113.75 78.75 108.75 78.75 103.75C78.75 86.25 93.125 71.875 110.625 71.875C116.25 71.875 121.25 73.125 125.625 75.625C130 63.125 141.875 52.5 155.625 52.5C173.125 52.5 186.875 68.75 187.5 81.25V300H186.875C186.875 322.5 168.75 340 146.25 340C126.25 340 110 325.625 106.25 306.875C102.5 308.125 98.125 308.75 93.75 308.75C71.25 308.75 53.125 290.625 53.125 268.125C53.125 261.25 55 254.375 58.125 248.125C43.125 243.125 31.25 228.125 31.25 210Z"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M96.875 220C96.875 220 125.625 215.625 138.125 243.75C151.875 275 133.75 298.125 106.875 306.875"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M160 128.75C160 128.75 144.375 153.75 116.25 147.5C88.125 141.25 82.5 118.125 82.5 118.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M160 185C159.375 184.375 151.875 158.125 119.375 148.75"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M271.25 188.75C271.25 188.75 263.75 216.25 287.5 237.5C298.75 247.5 321.25 250.625 340.625 248.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M262.5 137.5C262.5 137.5 279.375 148.125 293.75 143.75C308.125 139.375 318.125 118.125 318.125 118.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M250 275C250 275 258.125 243.125 295.625 243.125"
              stroke="#2C3E50"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>Mental Health</h2>
        </div>
      </div>
      <div id="modal" ref={modalRef}>
        <div id="modal-content">
          <h2>{modalTitle}</h2>
          <ol>
            {modalList &&
              modalList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
          </ol>
          <p>{modalConclusion}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactHealth;
