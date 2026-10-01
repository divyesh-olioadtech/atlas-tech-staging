import Head from "next/head";
import CareersHero from "../../../components/careers/CareersHero";
import FounderMessage from "../../../components/careers/FounderMessage";
import WhatDefinesUs from "../../../components/careers/WhatDefinesUs";
import LifeAtAtlas from "../../../components/careers/LifeAtAtlas";
import JobAlerts from "../../../components/careers/JobAlerts";

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers – Atlas Technologies</title>
        <meta
          name="description"
          content="Join the Atlas family — be part of a team shaping roads, infrastructure, and industrial progress across India and global markets."
        />
      </Head>

      <CareersHero />
      <FounderMessage />
      <WhatDefinesUs />
      <LifeAtAtlas />
      <JobAlerts />
    </>
  );
}
