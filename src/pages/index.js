import FAQSection2 from "../../components/category/faq2";
import Blog from "../../components/homepage/blog";
import Expolreproducts from "../../components/homepage/exploreproducts";
import FeatureGrid from "../../components/homepage/FeatureGrid";
import HeroSection from "../../components/homepage/herosection";
import Intro from "../../components/homepage/intro";
import MapView from "../../components/homepage/mapview";
import CaseStudySlider from "../../components/homepage/project";
import Youtube_slider from "../../components/homepage/youtube_slider";
import Head from "next/head";
import Certified from "../../components/homepage/certified";
import WhyChooseUs from "../../components/homepage/whychooseus";
import BuiltForScale from "../../components/homepage/builtforscale";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Atlas Technologies ensure the durability of its construction machinery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our machinery is built using high-grade materials and state-of-the-art technology, rigorously tested for performance in diverse environments to ensure long-term reliability and minimal maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atlas Technologies equipment handle large scale and small-scale projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our product range includes portable, mobile, and stationary solutions, catering to both small-scale projects and large-scale infrastructure developments with equal efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atlas customize equipment for specific project requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Atlas Technologies specializes in customized solutions tailored to individual client needs, such as adding RAP material up to 25–30 percent, liquid additives, and designing bitumen sprayers to fit specific truck sizes.",
      },
    },
  ],
};

export default function Home() {
  const faqData = [
    {
      title:
        "1. How does Atlas Technologies ensure the durability of its construction machinery?",
      content: (
        <>
          <p>
            Our machinery is built using{" "}
            <b>high-grade materials and state-of-the-art technology,</b>{" "}
            rigorously <b>tested for performance in diverse environments</b> to
            ensure long-term reliability and minimal maintenance.
          </p>
        </>
      ),
    },
    {
      title:
        "2. Can Atlas Technologies' equipment handle large Scale and small-scale projects?",
      content: (
        <>
          <p>
            Yes, our product range includes{" "}
            <b>portable, mobile, and stationary solutions,</b> catering to both
            small-scale projects and large Scale infrastructure developments
            with equal efficiency.
          </p>
        </>
      ),
    },
    {
      title:
        "3. Can Atlas customize equipment for specific project requirements?",
      content: (
        <>
          <p>
            Absolutely! Atlas Technologies specializes in{" "}
            <b>customized solutions</b>
            tailored to the needs of individual clients, such as adding RAP
            material (up to 25-30%), liquid additives, and designing bitumen
            sprayers to fit specific truck sizes.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          Road Construction Equipment & Machinery Manufacturers in India - Atlas
          Technologies
        </title>
        <meta name="description" content="Atlas Technologies manufactures asphalt plants, drum mix plants, concrete batching equipment & more in India. 35+ years | 2,500+ installations | 50+ countries. Get a free quote." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <HeroSection />
      <BuiltForScale />
      <Intro />
      <Expolreproducts />
      <WhyChooseUs />
      <Certified
        title={"Our Clients"}
        images={[
          "/images/comman/client/Frame 1.png",
          "/images/comman/client/Frame 2.png",
          "/images/comman/client/Frame 3.png",
          "/images/comman/client/Frame 4.png",
          "/images/comman/client/Frame 5.png",
          "/images/comman/client/Frame 6.png",
          "/images/comman/client/Frame 7.png",
          "/images/comman/client/Frame 8.png",
          "/images/comman/client/Frame 10.png",
          "/images/comman/client/Frame 11.png",
          "/images/comman/client/Frame 12.png",
        ]}
      />
      <MapView />
      <Youtube_slider />
      {/* <FeatureGrid /> */}
      <Certified
        title={"Powering Projects for India's Leading Builders & Organisations"}
      />
      <CaseStudySlider />
      <Blog />
      
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}