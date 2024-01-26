import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [17, 15, 14, 13, 11, 10, 9, 8];
const pData = [14, 12, 11, 10, 9, 8, 7, 7];
const xLabels = [
  "Newborns (0-3 months)",
  "Infants (4-11 months)",
  "Toddlers (1-2 years)",
  "Preschoolers (3-5 years)",
  "School-age children (6-13 years)",
  "Adolescents (14-17 years)",
  "Adults (18-64 years)",
  "Older adults (65 years and older)",
];

export default function StackedBarChart() {
  return (
    <BarChart
      width={800}
      height={500}
      series={[
        { data: pData, label: "min", id: "pvId", stack: "total" },
        { data: uData, label: "max", id: "uvId", stack: "total" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
