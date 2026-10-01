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
    title: "Drum Decanter (Customizable)",
    subtitle: "4–10 TPH | 27–60 Barrels | 9–25 Tons",
    description: [
      "Atlas Drum Decanters are built for contractors who require flexible, high-efficiency bitumen melting across varied project sizes. With customizable capacities ranging from 4 TPH to 10 TPH, these units safely convert drummed bitumen into liquid form using indirect thermic-oil heating, providing consistent binder quality and energy-efficient performance.",
      "Ideal for asphalt contractors, road developers, and government infrastructure agencies, Atlas Drum Decanters combine advanced safety systems, modular designs, and automation features to deliver reliable melting in every terrain and climate.",
    ],
    features: ["Flexible Capacities", "Safe Operation", "Energy Efficient"],
    images: [
      "/images/bitumen-decanter/acm-4-1.png",
      "/images/bitumen-decanter/acm-7-1.png",
      "/images/bitumen-decanter/acm-9-1.png",
      "/images/bitumen-decanter/acm-11-1.png",
    ],
  };

  const faqData = [
    {
      title:
        "1. What makes Atlas Drum Decanters different from traditional melting methods?",
      content: (
        <>
          <p>
            They use <strong>indirect thermic-oil heating</strong> instead of
            direct fire, preserving <strong>bitumen quality</strong> and
            eliminating <strong>open-flame risk</strong>.
          </p>
        </>
      ),
    },
    {
      title: "2. Can I choose the capacity based on project size?",
      content: (
        <>
          <p>
            Yes. Atlas offers multiple models (<strong>ACM-4 to ACM-11</strong>)
            covering capacities from <strong>4 TPH to 10 TPH</strong> to suit
            different project requirements.
          </p>
        </>
      ),
    },
    {
      title: "3. What fuel types can be used?",
      content: (
        <>
          <p>
            <strong>Diesel, LDO, and gas burners</strong> are supported,
            allowing users to adapt to <strong>local fuel availability</strong>{" "}
            and <strong>costs</strong>.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it compatible with existing asphalt plants?",
      content: (
        <>
          <p>
            Yes. Each unit can be connected to{" "}
            <strong>storage or binder plants</strong> through standardized{" "}
            <strong>pump and pipeline interfaces</strong>.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Flexible Capacity Range",
      desc: (
        <span>
          Available in <strong>4 TPH, 6 TPH, 8 TPH, and 10 TPH</strong>{" "}
          variants, accommodating <strong>27–60 drums per batch</strong> and{" "}
          <strong>9–25 tons of storage</strong>. Ideal for small contractors and
          large plant operators alike.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-4-1.png",
    },
    {
      title: "Indirect Heating with Thermic-Oil System",
      desc: (
        <span>
          Three-pass <strong>oil circulation</strong> ensures even melting and
          prevents bitumen degradation by eliminating{" "}
          <strong>direct flame contact</strong>. Maintains{" "}
          <strong>stable viscosity</strong> throughout operation.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-7-1.png",
    },
    {
      title: "Hydraulic Handling for Ease and Safety",
      desc: (
        <span>
          <strong>Hydraulic lifts</strong> enable smooth loading and unloading
          of drums with minimal manual intervention, ensuring{" "}
          <strong>operator safety</strong> and steady throughput.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-9-1.png",
    },
    {
      title: "Modular Design & Smart Integration",
      desc: (
        <span>
          Compact <strong>skid-mounted units</strong> integrate seamlessly with{" "}
          <strong>asphalt plants, binder storage systems,</strong> or{" "}
          <strong>bitumen tankers</strong>, thereby providing{" "}
          <strong>easy mobility</strong> and <strong>low maintenance</strong>.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-11-1.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Customizable for Every Operation",
      desc: (
        <span>
          With output options from <strong>4 to 10 TPH</strong>, the system can
          be configured for <strong>on-site melting</strong> or integration with{" "}
          <strong>stationary plants</strong>, depending on your production
          demands.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uniform Melting & Superior Bitumen Quality",
      desc: (
        <span>
          <strong>Indirect heating</strong> maintains precise temperature
          control, ensuring the bitumen remains <strong>pure</strong> and free
          of <strong>oxidation</strong> throughout the process.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Low Fuel Consumption & Cost Efficiency",
      desc: (
        <span>
          <strong>High-grade insulation</strong> and{" "}
          <strong>optimized burner systems</strong> reduce fuel usage by up to{" "}
          <strong>10%</strong>. Operators can choose{" "}
          <strong>diesel, LDO, or gas</strong> to match local fuel availability.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Safety-Focused Automation",
      desc: (
        <span>
          <strong>Auto-level control</strong>,{" "}
          <strong>hydraulic loading</strong>, and{" "}
          <strong>pressure-relief valves</strong> reduce handling risks and
          prevent overheating during long operational cycles.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Proven Global Support Network",
      desc: (
        <span>
          Atlas offers <strong>installation, training,</strong> and{" "}
          <strong>spare parts support</strong> across{" "}
          <strong>50+ countries</strong>, backed by{" "}
          <strong>local engineering partners</strong> for reliable after-sales
          service.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/comman/slider.png",
      title: "ACM-4",
      desc: "27 Barrel/Batch | 9–10 Tons | 4 TPH",
      url: "/bitumen-decanter/acm-4",
      img: "/images/bitumen-decanter/acm-4-1.png",
    },
    {
      img: "/images/comman/slider.png",
      title: "ACM-7 ",
      desc: "40 Barrel/Batch | 15 Tons | 6 TPH",
      url: "/bitumen-decanter/acm-7",
      img: "/images/bitumen-decanter/acm-7-1.png",
    },
    {
      img: "/images/comman/slider.png",
      title: "ACM-9 ",
      desc: "50 Barrel/Batch | 20 Tons | 8 TPH",
      url: "/bitumen-decanter/acm-9",
      img: "/images/bitumen-decanter/acm-9-1.png",
    },
    {
      img: "/images/comman/slider.png",
      title: "ACM-11 ",
      desc: "60 Barrel/Batch | 25 Tons | 10 TPH",
      url: "/bitumen-decanter/acm-11",
      img: "/images/bitumen-decanter/acm-11-1.png",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "Drum Decanter (Customizable)",
    //       desc: "27–60 Barrel/Batch | 9–25 Tons | 4–10 TPH",
    //       url: "/bitumen-decanter/acm-11",
    //       img: "/images/bitumen-decanter/acm-11-1.jpeg",
    //     },
  ];

  const components = [
    {
      title: "Thermic-Oil Heater",
      desc: (
        <ul>
          <li>
            • Automatic diesel/LDO/gas burner maintains oil temperature at
            200–240 °C.
          </li>
          <li>
            • Multi-pass coil arrangement ensures rapid heat transfer and fuel
            efficiency.
          </li>
        </ul>
      ),
    },
    {
      title: "Melting Chamber",
      desc: (
        <ul>
          <li>• Double-insulated steel chamber accommodates 27 to 60 drums.</li>
          <li>
            • Coil layout provides uniform melting and easy cleaning access.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Drum Loader",
      desc: (
        <ul>
          <li>
            • Safe hydraulic lift and tilt system handles 200 kg drums with
            minimal effort.
          </li>
          <li>• Reverse function for empty-drum removal post-melting.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Collection Tank",
      desc: (
        <ul>
          <li>• Holds 9–25 tons of molten bitumen (depending on model).</li>
          <li>
            • Equipped with an agitator, a temperature gauge, and a sampling
            valve.
          </li>
        </ul>
      ),
    },
    {
      title: "Transfer Pump",
      desc: (
        <ul>
          <li>
            • Heavy-duty gear pump for viscous materials; optional variable
            speed control.
          </li>
          <li>
            • Leak-proof flanges ensure smooth bitumen transfer to storage
            tanks.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety System",
      desc: (
        <ul>
          <li>
            • The central PLC or relay panel controls the burner and pump
            cycles.
          </li>
          <li>
            • Pressure relief valves, auto-cutoff, and emergency stop ensure
            safe operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Drum Bitumen Decanter | 9–25 TPH | Thermic Oil | Atlas India</title>
        <meta name="description" content="Atlas drum bitumen decanter — thermic oil heating, no direct flame, three-pass circulation for even melting across 9 to 25 TPH capacity. Get specs and factory price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/bUngymeJ5Lo"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-decanter/drum-decanters"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-35-1.jpeg"
        videoUrl="https://www.youtube.com/embed/bUngymeJ5Lo"
        title={
          "Atlas Drum Decanter: Versatile Bitumen Melting for Projects of Every Scale"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Safe and Consistent Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas Drum Decanter"
        subtitle="The Atlas Drum Decanter range is designed to bridge performance and flexibility, suitable for diverse project sizes that require a safe and sustainable bitumen melting solution."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Atlas Drum Decanter series is built for long service life and steady melting performance under continuous load conditions."
        }
        components={components}
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
