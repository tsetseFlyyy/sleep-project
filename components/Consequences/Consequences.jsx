import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

const Consequences = () => {
  const consequencesArray = [
    "Impaired Cognitive Function",
    "Increased Stress Levels",
    "Weakened Immune System",
    "Weight Gain and Metabolic Issues",
    "Cardiovascular Risks",
    "Mood Disorders",
    "Reduced Physical Performance",
    "Increased Risk of Accidents",
    "Bad Impact on Mental Health",
    "Decreased Quality of Life",
  ];

  return (
    <section className="consequences">
      <h1 className="consequences-title title">Dangers of Sleep Deprivation</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {consequencesArray.map((item, index) => (
          <SwiperSlide key={index}>
            <h3 className="swiper-slide-title">{item}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Consequences;
