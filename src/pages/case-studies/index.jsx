"use client";
import { useState } from "react";
import Head from "next/head";
import CaseStudyHero from "../../../components/casestudy/CaseStudyHero";
import CaseStudyListing from "../../../components/casestudy/CaseStudyListing";
import CaseStudyCTA from "../../../components/casestudy/CaseStudyCTA";
import FAQSection2 from "../../../components/category/faq2";
import ConsultationModal from "../../../components/homepage/ConsultationModal";

const faqData = [
  {
    title: "1. How does Atlas support international project deployment?",
    content: (
      <p>
        Atlas provides export-ready plant configurations, containerized shipment planning,
        onsite commissioning (on-location installation and testing), and operator training
        to ensure faster project readiness across global locations.
      </p>
    ),
  },
  {
    title: "2. What industries are these case studies from?",
    content: (
      <p>
        Our case studies cover highways, municipal engineering, industrial infrastructure,
        airport paving, and export-led construction projects.
      </p>
    ),
  },
  {
    title: "3. Can Atlas customize plants for project-specific requirements?",
    content: (
      <p>
        Yes. From burner configuration and RAP (Reclaimed Asphalt Pavement) integration
        to mobile chassis layouts and output capacities, every plant can be configured
        to match project needs.
      </p>
    ),
  },
  {
    title: "4. How quickly can a mobile plant be commissioned?",
    content: (
      <p>
        Depending on configuration and site readiness, Atlas mobile plants can typically
        be installed and commissioned within a week.
      </p>
    ),
  },
];

export default function CaseStudiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const listingCTA = {
    title: "Planning Your Next Infrastructure Project?",
    description:
      "Speak with Atlas experts to identify the right plant configuration, deployment model, and capacity for your project timeline and output requirements.",
    buttons: [
      { label: "Schedule a Call →", onClick: () => setIsModalOpen(true), primary: true },
    ],
  };

  return (
    <>
      <Head>
        <title>Case Studies – Atlas Technologies</title>
        <meta
          name="description"
          content="Explore real-world case studies from Atlas Technologies — road construction projects across 60+ countries powered by our asphalt plants, concrete batching plants, and machinery."
        />
      </Head>

      <CaseStudyHero />
      <CaseStudyListing />
      <CaseStudyCTA cta={listingCTA} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
