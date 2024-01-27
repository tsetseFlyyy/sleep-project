import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import { useTranslation } from "next-i18next";

const Consequences = () => {
  const { t, i18n } = useTranslation();
  const consequencesArray = [
    "consequence1",
    "consequence2",
    "consequence3",
    "consequence4",
    "consequence5",
    "consequence6",
    "consequence7",
    "consequence8",
    "consequence9",
    "consequence10",
  ];

  return (
    <section className="consequences">
      <h1 className="consequences-title title">{t("negative_effects")}</h1>
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
            <h3 className="swiper-slide-title">{t(item)}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Consequences;
