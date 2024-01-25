import Hero from "@/components/Hero/Hero";
import { useState } from "react";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import nextI18NextConfig from "../next-18next.config";
import { useRouter } from "next/router";
import Agenda from "@/components/Agenda/Agenda";
import Introduction from "@/components/WhatSleep/Introduction";
import Phases from "@/components/Phases/Phases";
import ImportanceSleep from "@/components/ImportanceSleep/ImportanceSleep";
import SleepStages from "@/components/SleepStages/SleepStages";
import ImpactHealth from "@/components/ImpactHealth/ImpactHealth";
import SleepRecommendations from "@/components/SleepRecommendations/SleepRecommendations";
import Consequences from "@/components/Consequences/Consequences";
import Conclusion from "@/components/Conclusion/Conclustion";
import Chart from "@/components/Chart/Chart";

export default function Home() {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered)
    return (
      <main>
        <div className="locales">
          <span>
            <Link href="" locale="kk">
              KK
            </Link>
          </span>
          <span>
            <Link href="" locale="ru">
              RU
            </Link>
          </span>
          <span>
            <Link href="" locale="en">
              EN
            </Link>
          </span>
        </div>
        <Hero />
        <Agenda />
        <Introduction />
        <ImportanceSleep />
        <Phases />
        <SleepStages />
        <ImpactHealth />
        <Consequences />
        <Chart />
        <SleepRecommendations />
        <Conclusion />
      </main>
    );
  return null;
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["translate"],
        nextI18NextConfig
      )),
    },
  };
};
