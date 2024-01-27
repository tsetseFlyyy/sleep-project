import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTranslation } from "next-i18next";

export default function StackedBarChart() {
  const { t, i18n } = useTranslation();

  const uData = [17, 15, 14, 13, 11, 10, 9, 8];
  const pData = [14, 12, 11, 10, 9, 8, 7, 7];
  const xLabels = [
    `${t("newborns")}`,
    `${t("infants")}`,
    `${t("babies")}`,
    `${t("kids")}`,
    `${t("school")}`,
    `${t("teens")}`,
    `${t("adults")}`,
    `${t("olds")}`,
  ];
  return (
    <BarChart
      width={1800}
      height={700}
      series={[
        { data: pData, label: `${t("min")}`, id: "pvId", stack: "total1" },
        { data: uData, label: `${t("max")}`, id: "uvId", stack: "total2" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
