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

import useCategoryProducts from "../../../../hooks/useCategoryProducts";
import ProductSchema from "../../../../components/schema/ProductSchema";

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant",
    "atmix-pro-180"
  );

  const product = {
    title: "ASCB 180/ATMIX PRO-180 | 180 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 5000 Liters | Twin Shaft (5.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 180 T Stationary Concrete Batching Plant delivers large-scale concrete production with precision and efficiency. Rated for 180 cubic meters per hour, it is engineered for demanding infrastructure projects where reliability, uniformity, and continuous operation are critical.",
      "Ideal for expressways, metro corridors, large bridges, and high-volume RMC plants, the ATMIX PRO 180 T combines Atlas’s heavy-duty twin-shaft mixer with intelligent PLC automation to ensure consistent batching accuracy and smooth production cycles.",
    ],
    features: [
      "High Throughput",
      "Continuous Operation",
      "Automation Excellence",
    ],
    images: [
      "/images/concrete-plants/atmix-pro-160-five.jpeg",
      "/images/concrete-plants/atmix-pro-160-three.jpeg",
      "/images/concrete-plants/160-newimagethree.jpeg",
      "/images/concrete-plants/160-newimagetwo.jpeg",
      "/images/concrete-plants/160-newimage.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. Which projects suit ATMIX PRO 180 T best?",
      content: (
        <>
          <p>
            Perfect for expressways, metro corridors, bridges, and RMC
            production plants requiring continuous, high-capacity output.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is its batching system?",
      content: (
        <>
          <p>
            All aggregate, cement, water, and additive feed systems use
            load-cell technology for precise and repeatable dosing.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer is used?",
      content: (
        <>
          <p>
            A twin-shaft mixer (7500/5000 L) with Ni-Hard liners, hydraulic
            discharge, and automatic grease lubrication.
          </p>
        </>
      ),
    },
    {
      title: "4. Is the plant automated?",
      content: (
        <>
          <p>
            Yes. It features a PLC + HMI system with SCADA connectivity and
            Wi-Fi for remote control and data access.
          </p>
        </>
      ),
    },
    {
      title: "5. Can it be paired with a cement silo?",
      content: (
        <>
          <p>
            Yes. It supports a 150-ton cement silo and screw conveyor for bulk
            feeding, or an optional 2.5-ton hopper for smaller setups.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures its longevity?",
      content: (
        <>
          <p>
            Heavy-duty steel, Ni-Hard components, PU paint, and ISI-certified
            motors ensure durability in continuous operations.
          </p>
        </>
      ),
    },
    {
      title: "7. What is its power requirement?",
      content: (
        <>
          <p>
            Total connected load is 410 HP, and Atlas recommends a 380–400 kVA
            genset for optimal performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Reliable 180 m³/hr Capacity",
      desc: (
        <span>
          Provides continuous high-volume output for major RMC and
          infrastructure projects with uniform batch consistency.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-180-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (7500/5000 L)",
      desc: (
        <span>
          Produces 5.0 m³ of compacted concrete per batch with Ni-Hard liners
          and wear-resistant blades for superior mix quality.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-180-t-2.jpeg",
    },
    {
      title: "Intelligent PLC + HMI Automation",
      desc: (
        <span>
          Siemens/B&R/Delta PLC with SCADA integration for remote monitoring,
          recipe management, and data logging via USB.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-180-t-3.jpeg",
    },
    {
      title: "Four/Five-Bin Aggregate Feeder",
      desc: (
        <span>
          Up to 25 m³ bins with pneumatic gates and load-cell controls for
          accurate and efficient material proportioning.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-180-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Efficient Mixing Cycle",
      desc: (
        <span>
          5.0 m³ batches mixed in ~95 seconds with the auto grease system and
          manual emergency discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Fast Installation & Smooth Operation",
      desc: (
        <span>
          Modular, pre-wired assemblies and an insulated control cabin enable
          quick setup and operator comfort.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Built to Last",
      desc: (
        <span>
          Heavy-duty rolled steel frame, PU paint finish, and ISI-grade motors
          ensure longevity under continuous use.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safe and Service-Friendly",
      desc: (
        <span>
          Guarded drives, emergency stops, and wide maintenance platforms make
          the plant safe and easy to service.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Material Weighing",
      desc: (
        <span>
          Load-cell hoppers for cement, water, and additives ensure precise
          dosage and consistent batch strength.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Four or five bins (25 m³ each) with pneumatic discharge gates.
          </li>
          <li>
            • 5 mm steel construction with dual vibrators for steady flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 1000 mm 4-ply belt (13 m length).</li>
          <li>
            • Load-cell capacity 6.5 m³; belt scraper and emergency stop
            included.
          </li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 1000 mm chevron belt driven by a 40 HP motor.</li>
          <li>
            • Reinforced structure and adjustable tensioning for continuous
            feed.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (7500/5000 L)",
      desc: (
        <ul>
          <li>
            • 5.0 m³ batch capacity with hydraulic discharge and an auto grease
            pump.
          </li>
          <li>
            • Ni-Hard liners and 600 HB blades ensure longevity and efficient
            mixing.
          </li>
          <li>
            • Dual motor drive (125 HP × 2) with 415 V, 3-phase, 50 Hz supply.
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 2,700 kg capacity with vibrator.</li>
          <li>• Water hopper: 1,500 L capacity with pneumatic valve.</li>
          <li>• Additive hopper: 20 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 10 HP compressor at 12 kg/cm² pressure.</li>
          <li>
            • FRLs, solenoid valves, and nylon pipe network for reliable air
            control.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>• Fixed, insulated cabin with LED lighting and optional AC.</li>
          <li>• Houses the main PLC panel and touchscreen HMI interface.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated steel chassis with fixed jacks for support.</li>
          <li>• 4.2 m clearance below the mixer for truck loading.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-180 | 180 m³/hr | Ultra High-Volume | Atlas India</title>
        <meta name="description" content="ATMIX PRO-180 — 180 m³/hr ultra high-volume stationary batching plant, twin-shaft mixer, SCADA. For expressways, airports and mega project RMC. Get quote from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-180"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail= "/images/concrete-plants/atmix-pro-160-three.jpeg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PRO 180 T: Power and Precision for Mega Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for High Performance, Efficiency, and Longevity"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 180 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 180 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PRO 180 T is designed for maximum productivity, easy maintenance, and superior mix consistency."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-160-four.jpeg"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={otherProducts}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
