import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import FeatureGrid from "../../../../components/others/FeatureGrid";
import FeatureSlider from "../../../../components/others/FeatureSlider;";
import Productfaq from "../../../../components/others/productFaq";
import ProductSlider2 from "../../../../components/others/productSlider";
import Video from "../../../../components/others/video";
import ProductOverview from "../../../../components/products/productslider";
import ProductSlider from "../../../../components/products/productslider";
import Head from "next/head";
import ProductSchema from "../../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "CF 65 Counterflow Asphalt Plant",
    subtitle:
      "120–150 TPH Production | Dual-Drum Counterflow | Heavy-Duty & RAP Compatible",
    description: [
      "The Atlas CF 65 is the largest standard model in the counterflow drum mix plant series, delivering 120–150 tons per hour of high-quality hot mix asphalt. With its dual-drum counterflow design, aggregates are dried in the first drum and mixed in the second, away from the burner flame. This ensures excellent heat transfer, lower emissions, and consistent asphalt quality at high capacities.",
      "Engineered for expressways, airports, and national highway projects, the CF 65 combines heavy-duty construction, advanced controls, and RAP compatibility to meet the demands of large-scale, continuous asphalt production.",
    ],
    features: [
      "High-Capacity Reliability",
      "High-End Durability",
      "Advanced Process Control",
    ],
    images: [
      "/images/plants/counter-flow/cfatlasnewpic.webp",
      "/images/plants/counter-flow/cf-2.jpg",
      "/images/plants/counter-flow/cf-3.jpg",
       "/images/plants/counter-flow/cf-new-7.jpeg",
      "/images/plants/counter-flow/cf-new-8.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of CF 65?",
      content: (
        <>
          <p>
            The CF 65 produces 120–150 TPH under standard conditions (3%
            aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "How does the counterflow system help at high capacity?",
      content: (
        <>
          <p>
            It maximizes heat transfer efficiency, reduces stack temperatures,
            and protects bitumen from overheating.
          </p>
        </>
      ),
    },
    {
      title: "Is CF 65 available in mobile versions?",
      content: (
        <>
          <p>
            Yes, skid-mounted or chassis-mounted options allow relocation
            between projects.
          </p>
        </>
      ),
    },
    {
      title: "What emission control is provided?",
      content: (
        <>
          <p>
            Standard venturi wet scrubber; optional baghouse filter for stricter
            norms.
          </p>
        </>
      ),
    },
    {
      title: "Can RAP be used in CF 65?",
      content: (
        <>
          <p>
            Yes. RAP integration is supported for cost savings and sustainable
            production.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Counterflow Dual Drum",
      desc: (
        <span>
          Efficient separation of drying and mixing ensures fuel savings and
          superior mix quality.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-1.jpg",
    },
    {
      title: "High Throughput",
      desc: (
        <span>
          Rated for <strong>120–150 TPH</strong>, ideal for expressways and
          airport works.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-6.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Supports diesel, LDO, FO, or gas-fired burners to suit diverse site
          requirements.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-2.jpg",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          An optional RAP system enables recycled asphalt for cost and
          environmental savings.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-3.jpg",
    },
    {
      title: "Automated Control",
      desc: (
        <span>
          Semi-automatic or PLC-based system with operator-friendly interface
          and safety interlocks.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Capacity",
      desc: "Handles large projects requiring continuous, uninterrupted asphalt supply.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Emission Control",
      desc: "Equipped with a venturi-type wet scrubber, and an optional baghouse filter for strict norms.",
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Heavy-Duty Build",
      desc: "Reinforced structure with abrasion-resistant liners ensures durability under heavy loads.",
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Accurate Feeding",
      desc: "Cold aggregate feeders with variable-speed drives allow precise material control.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco Efficiency",
      desc: "Counterflow design reduces stack temperature and fuel use, while RAP cuts raw material needs.",
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const products = [
    {
      img: "/images/plants/counter-flow/cf-1.jpg",
      title: "CF 45 Counter Flow Drum Mix Plant",
      desc: "40–60 TPH | Compact & Efficient",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-45-40-60-tph",
    },
    {
      img: "/images/plants/counter-flow/cf-2.jpg",
      title: "CF 50 Counter Flow Drum Mix Plant",
      desc: "60–90 TPH | Dust-Controlled System",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-50-60-90-tph",
    },
    {
      img: "/images/plants/counter-flow/cf-3.jpg",
      title: "CF 60 Counter Flow Drum Mix Plant",
      desc: "90–120 TPH | Eco-Friendly Design",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-60-90-120-tph",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "CF (65) Counter Flow Drum Mix Plant",
    //   desc: "120–150 TPH | High Capacity Output",
    //   url: "/asphalt-plants/counter-flow-asphalt-plant/cf-65-120-150-tph",
    // },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>4 bins with variable-speed drives</li>
          <li>Vibrators prevent material bridging</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Heat-resistant belt conveyor for continuous feed</li>
          <li>Smooth operation with dedicated drive</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Large drum (~2.0 m dia class) with counterflow heating</li>
          <li>Internal flights ensure uniform aggregate heating</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Isolated from direct flame</li>
          <li>Ensures thorough blending of aggregates, bitumen, and filler</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>High-capacity modulating burner</li>
          <li>Diesel/LDO standard; FO/gas optional</li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Wet venturi scrubber standard</li>
          <li>Baghouse filter optional for enhanced emission compliance</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated tanks with heating coils</li>
          <li>Maintains consistent bitumen temperature</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Hopper with screw conveyor for controlled addition</li>
          <li>Optional filler silo for bulk handling</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Inclined conveyor transfers asphalt into trucks or silos</li>
          <li>Heat- and wear-resistant belt for long service life</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated and pre-wired operator cabin</li>
          <li>PLC-based or semi-auto controls with alarms and displays</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>CF-65 | 120–150 TPH | Counterflow | Atlas Technologies India</title>
        <meta name="description" content="CF-65 — 120–150 TPH counterflow plant, Atlas's highest-capacity counter flow model. Reverse airflow, RAP up to 30%, CPCB-compliant baghouse. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/uLu8GuoMOMI"
      videoThumbnail="/images/plants/counter-flow/cf-1.jpg"
        pageUrl="/asphalt-plants/counter-flow-asphalt-plant/cf-65-120-150-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/counter-flow/cf-1.jpg"
        videoUrl="https://www.youtube.com/embed/uLu8GuoMOMI"
        title={"CF 65: The Choice for National Infrastructure Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Industrial engineering for extreme asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas CF 65?"
        subtitle="Discover why the CF 65 is the ultimate choice for large-scale industrial projects with demanding requirements."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each system in the CF-Series is engineered for operational simplicity, cost efficiency, and peak performance."
        }
        components={components}
        img = "/images/plants/counter-flow/dmcomponent65.webp"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
