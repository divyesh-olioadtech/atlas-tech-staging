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
    title: "ACM-9 Bitumen Decanter",
    subtitle: "9-10 TPH | 50 Barrels | 20 Tons",
    description: [
      "The Atlas ACM-9 Bitumen Decanter is engineered for higher-capacity melting requirements, handling 50 barrels per batch with an output of 8 TPH. Its three-pass thermic-oil system delivers uniform indirect heating for superior bitumen quality without thermal degradation or residue formation.",
      "Suitable for large-scale road and infrastructure projects, ACM-9 ensures continuous melting performance, reduced fuel consumption, and minimal manual handling. The model’s durable construction and enhanced automation make it a reliable solution for demanding, round-the-clock operations.",
    ],
    features: ["High Throughput", "Reliable Performance", "Fuel-Efficient"],
    images: [
      "/images/bitumen-decanter/acm-9-1.png",
      "/images/bitumen-decanter/acm-9-2.png",
      // "/images/bitumen-decanter/acm-9-3.jpeg",
      // "/images/bitumen-decanter/acm-9-4.jpeg",
      // "/images/bitumen-decanter/acm-9-5.jpeg",
      // "/images/bitumen-decanter/acm-9-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What makes ACM-9 suitable for large projects?",
      content: (
        <>
          <p>
            Its <strong>8 TPH output</strong> and{" "}
            <strong>50-drum capacity</strong> provide a continuous supply of
            melted bitumen for batch mix or drum mix plants operating on tight
            production schedules.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it operate continuously for long hours?",
      content: (
        <>
          <p>
            Yes. The ACM-9 is built for <strong>24/7 operation</strong> with{" "}
            <strong>advanced insulation</strong> and{" "}
            <strong>automated temperature controls</strong> to maintain
            consistent melting without thermal loss.
          </p>
        </>
      ),
    },
    {
      title: "3. How does it handle safety under high load?",
      content: (
        <>
          <p>
            Integrated <strong>pressure-relief valves</strong>,{" "}
            <strong>auto-level control</strong>, and{" "}
            <strong>sealed indirect heating</strong> prevent spillage,
            overheating, and operator exposure to open flames.
          </p>
        </>
      ),
    },
    {
      title: "4. What custom options are available?",
      content: (
        <>
          <p>
            Users can add <strong>larger storage tanks</strong>,{" "}
            <strong>variable-speed pumps</strong>, or{" "}
            <strong>digital monitoring systems</strong> to suit plant
            integration needs and regional standards.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Indirect Thermic-Oil Heating",
      desc: (
        <span>
          Three-pass circulation melts <strong>50 drums evenly</strong> without{" "}
          <strong>direct flame contact</strong>, ensuring consistent heating and
          maintaining binder viscosity throughout each operating cycle.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-9-1.png",
    },
    {
      title: "Hydraulic Drum Handling System",
      desc: (
        <span>
          Heavy-duty <strong>hydraulic lifters</strong> enable smooth batch
          loading of <strong>50 drums</strong>, minimizing manual intervention
          and boosting productivity on large job sites.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-9-2.png",
    },
    {
      title: "Heavy-Duty, Site-Ready Design",
      desc: (
        <span>
          A reinforced <strong>skid-mounted frame</strong> with{" "}
          <strong>advanced insulation</strong> and{" "}
          <strong>corrosion-resistant heating coils</strong> ensures stability
          and long-term performance in rugged environments.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-9-2.png",
    },
    {
      title: "Integrated Automation & Easy Maintenance",
      desc: (
        <span>
          <strong>Automated temperature regulation</strong> and{" "}
          <strong>quick-access service panels</strong> simplify operation and
          maintenance, reducing downtime and increasing system life.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-9-2.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for High Output and Consistency",
      desc: (
        <span>
          ACM-9 delivers <strong>8 TPH throughput</strong> with stable
          performance over extended runs. Its expanded heating chamber
          accommodates <strong>50 barrels per batch</strong>, ensuring sustained
          melting capacity during peak operations.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uniform Heating for Quality Control",
      desc: (
        <span>
          <strong>Indirect heating</strong> keeps temperature variation within
          tight limits, preserving <strong>bitumen properties</strong> and
          preventing oxidation, even under continuous use.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Energy-Efficient Operation",
      desc: (
        <span>
          <strong>Advanced insulation</strong> and optimized burner design lower
          fuel consumption and emissions. Multiple fuel options (
          <strong>diesel, LDO, gas</strong>) provide cost flexibility based on
          regional availability.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Automated Safety and Ease of Use",
      desc: (
        <span>
          <strong>Hydraulic systems</strong>,{" "}
          <strong>auto-level control</strong>, and{" "}
          <strong>emergency cut-offs</strong> reduce handling risks. An{" "}
          <strong>optional PLC panel</strong> automates process parameters and
          pump functions for round-the-clock efficiency.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Global Support & Custom Configurations",
      desc: (
        <span>
          Atlas provides <strong>installation, operator training,</strong> and{" "}
          <strong>spare parts support</strong> in <strong>40+ countries</strong>
          . ACM-9 units can be customized with <strong>larger tanks</strong>,{" "}
          <strong>dual-pump systems</strong>, or{" "}
          <strong>remote-monitoring modules</strong>.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/bitumen-decanter/acm-4-3.png",
      title: "ACM-4",
      desc: "27 Barrel/Batch | 9–10 Tons | 4 TPH",
      url: "/bitumen-decanter/acm-4",
      // img: "/images/bitumen-decanter/acm-4-1.jpeg",
    },
    {
      img: "/images/bitumen-decanter/acm-7-2.png",
      title: "ACM-7 ",
      desc: "40 Barrel/Batch | 15 Tons | 6 TPH",
      url: "/bitumen-decanter/acm-7",
      // img: "/images/bitumen-decanter/acm-7-1.jpeg",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "ACM-9 ",
    //       desc: "50 Barrel/Batch | 20 Tons | 8 TPH",
    //       url: "/bitumen-decanter/acm-9",
    //       img: "/images/bitumen-decanter/acm-9-1.jpeg",
    //     },
    {
      img: "/images/bitumen-decanter/acm-11-2.png",
      title: "ACM-11 ",
      desc: "60 Barrel/Batch | 25 Tons | 10 TPH",
      url: "/bitumen-decanter/acm-11",
      // img: "/images/bitumen-decanter/acm-11-1.jpeg",
    },
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
            • Fully automatic diesel/LDO/gas burner with thermostatic control
            maintains 200–240 °C oil temperature.
          </li>
          <li>
            • Large-volume coil array boosts efficiency for sustained
            high-throughput melting.
          </li>
        </ul>
      ),
    },
    {
      title: "Melting Chamber",
      desc: (
        <ul>
          <li>• Insulated double-walled chamber holds 50 drums per batch.</li>
          <li>
            • Triple-pass oil coils distribute heat uniformly; inspection doors
            ease cleaning.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Drum Loader",
      desc: (
        <ul>
          <li>• Heavy-duty lifters raise and invert drums securely.</li>
          <li>
            • Reverse-hydraulic mechanism allows safe ejection of empty drums
            post-melt.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Collection Tank",
      desc: (
        <ul>
          <li>
            • Located beneath the melting bay, holds ~20 tons of liquid bitumen.
          </li>
          <li>
            • Includes agitator, thermometer, and sampling port for quality
            monitoring.
          </li>
        </ul>
      ),
    },
    {
      title: "Transfer Pump",
      desc: (
        <ul>
          <li>
            • High-capacity gear pump transfers bitumen to asphalt or binder
            tanks.
          </li>
          <li>
            • Optional dual-pump setup for simultaneous feed and storage
            operations.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety System",
      desc: (
        <ul>
          <li>
            • Centralized PLC/relay panel with auto-cutoff and emergency stop.
          </li>
          <li>
            • Pressure-relief valves, level sensors, and thermal alarms ensure
            safe operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACM-9 Bitumen Decanter | 20 TPH | Thermic Oil | Atlas India</title>
        <meta name="description" content="ACM-9 — 20 TPH bitumen decanter, indirect thermic oil, three-pass circulation for uniform melting. No direct flame, no binder quality loss. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/xnLwIM86Mu0"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-decanter/acm-9"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-decanter/acm-9-1.png"
        videoUrl="https://www.youtube.com/embed/xnLwIM86Mu0"
        title={
          "ACM-9: High-Capacity & Reliable Bitumen Decanting for Continuous Operations"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for High-Volume Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ACM-9"
        subtitle="The ACM-9 is purpose-built for large infrastructure projects. It offers a balanced combination of throughput, efficiency, and operational safety."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACM Series of Bitumen Decanting Machine offers quick startup and continuous flow of molten bitumen."
        }
        components={components}
        img = "/images/bitumen-decanter/acm-9-1.png"
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
