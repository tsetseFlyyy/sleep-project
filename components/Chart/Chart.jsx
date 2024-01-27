import React from "react";
import StackedBarChart from "./BarChart/StackedBarChart";
import { useTranslation } from "next-i18next";

const Chart = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="chart">
      <div className="chart__container">
        <h1>{t("normal_amount")}</h1>
        <StackedBarChart />
      </div>
    </section>
  );
};

export default Chart;
