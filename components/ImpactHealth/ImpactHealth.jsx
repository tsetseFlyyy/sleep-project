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
            width="350"
            height="350"
            viewBox="0 0 72 72"
            id="emoji"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="color"></g> <g id="hair"></g>{" "}
              <g id="skin">
                {" "}
                <path
                  fill="#FCEA2B"
                  stroke="none"
                  d="M63.1103,54.1648c-10.9692,9.4397-26.3611,11.6803-46.4096,11.5634c0,0-3.7408,1.1495-4.5981-3.5655 c0,0-0.7696-20.8863,3.809-35.5476c0,0-0.1948-5.9814,0.0293-9.8976c0.0389-0.6722,0.3312-1.2957,0.828-1.7535 c5.7574-5.319,8.3487-6.0983,8.3487-6.0983l8.3682-1.4808c1.3249,0.906,4.2279,4.1792,3.7505,9.995l0.1071-0.3994l3.2148,0.9012 c1.1226,0.3416,1.8585,1.525,1.8412,2.6546c-0.0098,1.169-2.8056,2.0457-2.8056,2.0457c-6.1178,1.3834-6.1178,1.3834-6.1178,1.3834 c-1.8314,2.8738-5.5937,3.1758-7.279,3.0979c-0.0877-0.2435-0.5927-0.0195-0.1933,0c0.5942,1.5002,1.2893,5.1144,1.9225,11.807 l0.1753,1.8606c0.0487,0.5261,0.3166,4.7286,0.3847,7.4757c1.812-4.413,6.6361-12.5609,15.7348-13.8468 c13.4631-1.9192,20.1654,8.4948,20.1654,8.4948s0.2338,0.2728,0.526,0.7696C66.9778,47.0728,66.1595,51.5345,63.1103,54.1648z"
                ></path>{" "}
                <path
                  fill="#FCEA2B"
                  stroke="none"
                  d="M26.5081,26.81c-0.41-0.02-0.74-0.06-0.94-0.09l0.64-0.49C26.3181,26.37,26.4181,26.56,26.5081,26.81z"
                ></path>{" "}
                <path
                  fill="#FCEA2B"
                  stroke="none"
                  d="M26.5081,26.81c-0.41-0.02-0.74-0.06-0.94-0.09l0.64-0.49C26.3181,26.37,26.4181,26.56,26.5081,26.81z"
                ></path>{" "}
              </g>{" "}
              <g id="skin-shadow">
                {" "}
                <path
                  fill="#F1B31C"
                  stroke="none"
                  d="M21.9216,26.23c0,0,5.3444-4.9857,1.6152-6.3791l12.7609-0.4198l0.6708-1.142l0.2196-1.8442 c1.0717,0.1781,3.365,0.9463,3.6416,1.0119c0,0,2.4043,1.8731,0.4487,4.0933l-7.7788,2.2345 C33.4996,23.7845,28.7764,27.5881,21.9216,26.23z"
                ></path>{" "}
                <path
                  fill="#F1B31C"
                  stroke="none"
                  d="M21.9216,26.23c0.7946,9.2179,2.5603,25.6411,2.0697,27.7452c-0.0446,0.6989,0.6552,0.8094,1.0129,0.2954 c0.8285-0.6666,2.7669-2.5969,3.8182-5.1942c0-5.762-0.6668-12.458-2.2191-22.2629C26.0331,25.229,23.664,25.2485,21.9216,26.23z"
                ></path>{" "}
                <path
                  fill="#F1B31C"
                  stroke="none"
                  d="M48.1988,34.0995c0,0,10.2391,6.9729,3.106,16.4198c0,0,2.1324,8.5167,0.1552,9.8508 c-1.9772,1.3341,20.619-5.5453,12.1362-18.5633C63.5963,41.8069,58.4379,34.2341,48.1988,34.0995z"
                ></path>{" "}
              </g>{" "}
              <g id="line">
                {" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M27.4684,40.5519c-0.4282-4.2794-1.1326-12.7197-1.9548-13.7543c0,0,5.2009,1.1102,7.8117-2.9736"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M34.5031,53.0878c0,0,10.8019,2.7012,19.2868-4.3269"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M27.7195,50.6312c0,0,2.8688-14.4737,16.3682-16.3928s20.2138,8.5143,20.2138,8.5143s0.2302,0.2755,0.5269,0.7704 c2.0724,3.4564,1.2505,7.9342-1.8035,10.5637C52.0326,63.551,36.5991,65.7993,16.5066,65.6836c0,0-3.7502,1.1456-4.6096-3.574 c0,0-0.7689-20.9388,3.8178-35.6261c0,0-0.1965-6.0013,0.0307-9.9287c0.0388-0.67,0.3337-1.2971,0.827-1.7521 c5.7789-5.3313,8.3742-6.1149,8.3742-6.1149l8.3881-1.4838c1.436,0.9837,4.7256,4.7388,3.5707,11.4953"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M25.5888,19.2948c0,0,1.8163,2.5911,3.6325-0.2835V16l-0.46-1.6583l-0.3606-0.278"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M29.5442,19.2948c0,0,1.8163,2.5911,3.6325-0.2835V16l-0.8731-2.1254"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M36.8203,19.0113c-1.9616,1.8889-3.3207,0-3.3207,0"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M25.2376,19.2948"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M20.301,16.4465c0.5038,0.4387,1.1429,1.2206,1.2784,2.4327c0.0322,0.2877,0.131,0.5691,0.3359,0.7736 c0.595,0.5939,1.9586,1.5167,3.3223-0.6415V16l-0.6351-1.2677"
                ></path>{" "}
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M40.3564,18.289c1.9261,0.5697,2.2618,3.4266-0.7028,4.0993c-6.3283,1.4358-6.3283,1.4358-6.3283,1.4358"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <h2>Physical Health</h2>
        </div>
        <div className="health" onClick={setModalMental}>
          <svg
            width="350"
            height="350"
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
