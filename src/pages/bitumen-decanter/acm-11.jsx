import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
import FeatureGrid from "../../../components/others/FeatureGrid";
import FeatureSlider from "../../../components/others/FeatureSlider;";
import Productfaq from "../../../components/others/productFaq";
import ProductSlider2 from "../../../components/others/productSlider";
import Video from "../../../components/others/video";
import ProductOverview from "../../../components/products/productslider";
import ProductSlider from "../../../components/products/productslider";
import Head from "next/head";
import ProductSchema from "../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "ACM-11 Bitumen Decanter",
    subtitle: "11-12 TPH | 60 Barrels | 25 Tons",
    description: [
      "The Atlas ACM-11 Bitumen Decanter is the largest model in our drum-melting range, engineered for 60 barrels per batch and an output of 10 TPH. It combines high-capacity melting with automated control, ensuring consistent, safe, and economical bitumen delivery for mega-scale infrastructure projects.",
      "Ideal for expressways, airports, and industrial paving works, ACM-11 delivers uninterrupted performance through its heavy-duty thermic-oil system, precision heating controls, and rugged construction that withstands continuous operation.",
    ],
    features: ["Maximum Capacity", "Advanced Automation", "Energy Efficient"],
    images: [
      "/images/bitumen-decanter/acm-11-1.png",
      "/images/bitumen-decanter/acm-11-2.png",
      "/images/bitumen-decanter/acm-11-3.png",
      // "/images/bitumen-decanter/acm-11-4.jpeg",
      // "/images/bitumen-decanter/acm-11-5.jpeg",
      // "/images/bitumen-decanter/acm-11-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What project scale is ACM-11 best suited for?",
      content: (
        <>
          <p>
            ACM-11 is designed for{" "}
            <strong>large asphalt and infrastructure plants</strong> requiring
            continuous bitumen melting and storage capacity beyond{" "}
            <strong>20 tons</strong>.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it run round-the-clock?",
      content: (
        <>
          <p>
            Yes. Its <strong>heavy-duty components</strong> and{" "}
            <strong>thermic-oil heating</strong> allow safe{" "}
            <strong>24/7 operation</strong> with consistent temperature control
            and minimal downtime.
          </p>
        </>
      ),
    },
    {
      title: "3. How does it maintain bitumen quality?",
      content: (
        <>
          <p>
            <strong>Indirect heating</strong> avoids overheating and oxidation,
            ensuring bitumen retains its <strong>adhesive</strong> and{" "}
            <strong>viscosity properties</strong> throughout the melting cycle.
          </p>
        </>
      ),
    },
    {
      title: "4. Is the ACM-11 customizable?",
      content: (
        <>
          <p>
            Yes. Atlas offers <strong>custom tank sizes</strong>,{" "}
            <strong>pump configurations</strong>, and{" "}
            <strong>automation packages</strong> to meet specific regional and
            project requirements.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Efficiency Thermic-Oil Heating",
      desc: (
        <span>
          Three-pass <strong>indirect heating</strong> keeps temperature uniform
          across <strong>60 drums</strong>, eliminating direct flame exposure
          and preserving binder properties during prolonged operation.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-11-1.png",
    },
    {
      title: "Heavy-Duty Hydraulic Drum Handling",
      desc: (
        <span>
          Twin <strong>hydraulic lifters</strong> enable simultaneous loading of{" "}
          <strong>multiple drums</strong>, improving throughput while minimizing
          manual handling risks.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-11-2.png",
    },
    {
      title: "Reinforced Industrial Design",
      desc: (
        <span>
          A <strong>skid-mounted steel frame</strong>,{" "}
          <strong>thick-layer insulation</strong>, and{" "}
          <strong>corrosion-resistant coils</strong> ensure stability and
          durability under 24/7 operation in challenging environments.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-11-3.png",
    },
    {
      title: "Automated Controls & Low Maintenance",
      desc: (
        <span>
          Fully automatic <strong>PLC/relay panel</strong> regulates oil
          temperature, burner cycles, and pump activity - reducing manual
          supervision and extending service life.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-11-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for Mega-Scale Throughput",
      desc: (
        <span>
          Delivering <strong>10 TPH output</strong> with a{" "}
          <strong>25-ton storage tank</strong>, ACM-11 handles the demands of
          heavy-duty, continuous melting operations where productivity and
          uptime are critical.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uninterrupted Performance",
      desc: (
        <span>
          The <strong>three-pass thermic-oil system</strong> maintains a stable
          temperature even during long production cycles, ensuring consistent
          melting quality without overheating or residue build-up.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Fuel Optimization & Cost Control",
      desc: (
        <span>
          <strong>Insulated panels</strong> and{" "}
          <strong>automated burner controls</strong> reduce heat loss and fuel
          consumption by up to <strong>25%</strong>. Compatible with{" "}
          <strong>diesel, LDO, and gas</strong> for on-site flexibility.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Operator Safety & Automation",
      desc: (
        <span>
          <strong>Hydraulic loading</strong> and{" "}
          <strong>auto-level controls</strong> eliminate manual risks, while{" "}
          <strong>pressure relief valves</strong> and{" "}
          <strong>emergency shutoffs</strong> ensure safe operation in
          high-temperature conditions.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Worldwide Service & Customization",
      desc: (
        <span>
          Atlas supports <strong>installations in 40+ countries</strong> with{" "}
          <strong>on-site training</strong> and <strong>spare supply</strong>.
          Units can be customized with <strong>dual pumps</strong>,{" "}
          <strong>remote monitoring</strong>, or{" "}
          <strong>integrated storage modules</strong> for specific project
          needs.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img:  "/images/bitumen-decanter/acm-4-3.png",
      title: "ACM-4",
      desc: "27 Barrel/Batch | 9–10 Tons | 4 TPH",
      url: "/bitumen-decanter/acm-4",
      // img: "/images/bitumen-decanter/acm-4-1.jpeg",
    },
    {
      img:  "/images/bitumen-decanter/acm-7-3.png",
      title: "ACM-7 ",
      desc: "40 Barrel/Batch | 15 Tons | 6 TPH",
      url: "/bitumen-decanter/acm-7",
      // img: "/images/bitumen-decanter/acm-7-1.jpeg",
    },
    {
      img: "/images/bitumen-decanter/acm-9-2.png",
      title: "ACM-9 ",
      desc: "50 Barrel/Batch | 20 Tons | 8 TPH",
      url: "/bitumen-decanter/acm-9",
      // img: "/images/bitumen-decanter/acm-9-1.jpeg",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "ACM-11 ",
    //       desc: "60 Barrel/Batch | 25 Tons | 10 TPH",
    //       url: "/bitumen-decanter/acm-11",
    //       img: "/images/bitumen-decanter/acm-11-1.jpeg",
    //     },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "Drum Decanter (Customizable)",
    //   desc: "27–60 Barrel/Batch | 9–25 Tons | 4–10 TPH",
    //   url: "/bitumen-decanter/acm-11",
    //   img: "/images/bitumen-decanter/acm-11-1.jpeg",
    // },
  ];

  const components = [
    {
      title: "Thermic-Oil Heater",
      desc: (
        <ul>
          <li>
            • Fully automatic diesel/LDO/gas burner maintains oil temperature at
            200–240 °C.
          </li>
          <li>
            • Larger coil surface area ensures rapid melting and energy
            efficiency.
          </li>
        </ul>
      ),
    },
    {
      title: "Melting Chamber",
      desc: (
        <ul>
          <li>• Double-insulated housing accommodates 60 drums per batch.</li>
          <li>
            • Optimized coil layout delivers even heat distribution and easy
            drum removal.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Drum Loader",
      desc: (
        <ul>
          <li>
            • Dual hydraulic lifts enable safe, synchronized drum handling under
            high load.
          </li>
          <li>
            • Reverse function for smooth ejection of empty drums post-melting.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Collection Tank",
      desc: (
        <ul>
          <li>
            • 25-ton capacity tank beneath melting bay with temperature sensor
            and agitator.
          </li>
          <li>
            • Thermally insulated to retain heat and maintain a homogeneous mix.
          </li>
        </ul>
      ),
    },
    {
      title: "Transfer Pump",
      desc: (
        <ul>
          <li>
            • High-flow gear pump feeds bitumen to plants or storage tanks.
          </li>
          <li>
            • Optional dual-pump system for simultaneous transfer and
            circulation.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety System",
      desc: (
        <ul>
          <li>
            • PLC/relay panel manages the burner, oil pump, and hydraulic
            functions.
          </li>
          <li>
            • Includes pressure relief, auto-level cut-off, and emergency stop
            features.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACM-11 Bitumen Decanter | 25 TPH | High Capacity | Atlas India</title>
        <meta name="description" content="ACM-11 — 25 TPH, Atlas's highest-capacity bitumen decanter. Indirect thermic oil heating, no direct flame. For high-volume drum bitumen operations. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/qa2BDftjnLM"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-decanter/acm-11"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-decanter/acm-11-1.png"
        videoUrl="https://www.youtube.com/embed/qa2BDftjnLM"
        title={
          "ACM-11: High-Capacity & Automated Bitumen Melting for Mega Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Continuous Large-Scale Operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ACM-11"
        subtitle="The ACM-11 is purpose-built for contractors running large asphalt or binder plants that require high-volume, continuous bitumen supply with uncompromised safety and thermal efficiency."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACM Series of Bitumen Decanting Machine offers quick startup and continuous flow of molten bitumen."
        }
        components={components}
        img = "/images/bitumen-decanter/acm-11-1.png"
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
