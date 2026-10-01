import Head from "next/head";
import { allCaseStudies } from "../../../data/case-studies/index";
import CaseStudyInternalHero from "../../../components/casestudy/CaseStudyInternalHero";
import CaseStudyFriction from "../../../components/casestudy/CaseStudyFriction";
import CaseStudyEngineering from "../../../components/casestudy/CaseStudyEngineering";
import CaseStudyVictory from "../../../components/casestudy/CaseStudyVictory";
import CaseStudyQuote from "../../../components/casestudy/CaseStudyQuote";
import CaseStudyCTA from "../../../components/casestudy/CaseStudyCTA";
import FAQSection2 from "../../../components/category/faq2";

const internalCTA = {
  title: "Need High-Performance Monitoring Without the Payload?",
  description:
    "We can replicate this lightweight architecture for your specific site requirements and connectivity constraints.",
  buttons: [
    { label: "Consult on This Solution", href: "/contact-us", primary: true },
    { label: "View Other Case Studies", href: "/case-studies", primary: false },
  ],
};

const faqData = [
  {
    title: "1. Can this solution work on remote sites with poor connectivity?",
    content: (
      <p>
        Yes. The lightweight binary protocol is specifically designed for low-bandwidth
        environments, ensuring reliable telemetry even on sites with intermittent connections.
      </p>
    ),
  },
  {
    title: "2. How quickly can Atlas deploy this monitoring system?",
    content: (
      <p>
        Deployment typically takes 5–7 days per site, including hardware installation,
        edge configuration, and remote dashboard setup.
      </p>
    ),
  },
  {
    title: "3. What equipment is compatible with this system?",
    content: (
      <p>
        The system is compatible with all Atlas MABP, ABP, and DM series plants,
        as well as most third-party plant equipment with standard sensor interfaces.
      </p>
    ),
  },
  {
    title: "4. Is the data accessible in real time from any location?",
    content: (
      <p>
        Yes. The edge-processed data is synced to a cloud dashboard accessible from
        any browser, globally, with sub-2 second latency under normal conditions.
      </p>
    ),
  },
];

export async function getStaticPaths() {
  const paths = allCaseStudies.map((s) => ({
    params: { slug: s.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const study = allCaseStudies.find((s) => s.slug === params.slug);
  return { props: { study } };
}

export default function CaseStudyDetail({ study }) {
  return (
    <>
      <Head>
        <title>{`${study.heroQuote} – Atlas Technologies`}</title>
        <meta
          name="description"
          content={`${study.tag} case study — ${study.equipment} deployed in ${study.location}. ${study.metaValue}.`}
        />
      </Head>

      <CaseStudyInternalHero study={study} />
      <CaseStudyFriction friction={study.friction} />
      {study.engineering && <CaseStudyEngineering engineering={study.engineering} />}
      {study.victory && <CaseStudyVictory victory={study.victory} />}
      {study.quote && <CaseStudyQuote quote={study.quote} />}
      <CaseStudyCTA cta={study.cta || internalCTA} />
      <FAQSection2 faqData={study.faqs || faqData} bg={"#E7F1E9"} />
    </>
  );
}
