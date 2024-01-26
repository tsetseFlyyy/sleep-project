import React from "react";
import StackedBarChart from "./BarChart/StackedBarChart";

const Chart = () => {
  return (
    <section className="chart">
      <div className="chart__container">
        <h1>normal amount of sleep</h1>
        <StackedBarChart />
      </div>
    </section>
  );
};

export default Chart;
