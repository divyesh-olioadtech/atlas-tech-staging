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
    "stationary-concrete-batching-plant-planetary-mixer",
    "atmix-plus-45-planetary"
  );

  const product = {
    title: "ATMIX PLUS 45 (Planetary) Stationary Concrete Batching Plant",
    subtitle:
      "Planetary Mixer (750 Liters, 45M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PLUS 45 (Planetary) delivers precision mixing and uniformity for medium-scale precast, self-compacting concrete (SCC), and high-performance concrete applications. With a rated output of 45 m³/hr, it is built for consistent quality, reduced cycle times, and long-term reliability, all essential for professional precast and architectural concrete production.",
      "Perfect for medium-size precast factories, infrastructure elements, and SCC production, the ATMIX PLUS 45 (Planetary) combines Atlas’s robust stationary plant framework with the overlapping, high-torque planetary mixing system to produce superior concrete homogeneity and surface finish.",
    ],
    features: ["Superior Finish", "Consistent Performance", "Precise Control"],
    images: [
      "/images/concrete-plants/atmix-plus-45-planetary-1.jpg",
      "/images/concrete-plants/atmix-plus-45-planetary-2.jpg",
      "/images/concrete-plants/atmix-plus-45-planetary-3.jpg",
      "/images/concrete-plants/atmix-plus-45-planetary-4.jpg",
    ],
  };
  const featureData = [
    {
      title: "Reliable 45 m³/hr Capacity",
      desc: (
        <span>
          Provides balanced production for mid-scale precast, RMC, or SCC
          projects where surface quality and mix consistency are key.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-45-planetary-1.jpg",
    },
    {
      title: "Planetary Mixer (Approx. 0.75 m³ Batch)",
      desc: (
        <span>
          Multi-directional overlapping blades ensure total material circulation
          and high torque for dense, high-strength mixes.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-45-planetary-2.jpg",
    },
    {
      title: "Advanced PLC + HMI Automation",
      desc: (
        <span>
          Siemens/B&R/Delta PLC with SCADA readiness, for recipe storage, data
          logging, and remote batch monitoring.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-45-planetary-3.jpg",
    },
    {
      title: "Accurate Load-Cell Batching",
      desc: (
        <span>
          Aggregate, cement, water, and admixtures are weighed individually for
          tight control and repeatable accuracy.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-45-planetary-4.jpg",
    },
  ];
  const featuresGridData = [
    {
      title: "Mixing Excellence",
      desc: (
        <span>
          Planetary-type mixer ensures exceptional dispersion of fibres,
          pigments, and high-strength ingredients with minimal segregation.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Optimised for Specialty Concrete",
      desc: (
        <span>
          Specifically suited for precast, SCC, and UHPC applications where
          surface quality, micro-structure, and batch repeatability are key.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Compact but Robust",
      desc: (
        <span>
          Despite its smaller capacity, the plant uses heavy-duty fabrication,
          replaceable Ni-Hard liners, and wear-resistant mixing blades for
          longevity.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Smart Control & Ease of Maintenance",
      desc: (
        <span>
          Load-cell weighings, recipe storage, and modular design ensure smooth
          operation; access platforms and guarded drives ease servicing.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Heavy-Duty Structure",
      desc: (
        <span>
          Atlas’s stationary chassis and PU-coated steel components ensure
          strength and durability under continuous duty.
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
            • Four bins (≈ 10 m³ each) with pneumatically operated discharge
            gates.
          </li>
          <li>
            • Constructed from 5 mm mild steel with a vibrator for steady flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor & Transfer System",
      desc: (
        <ul>
          <li>
            • 800 mm, 4-ply belt (≈ 11 m length) mounted on load cells (≈ 2 m³
            capacity).
          </li>
          <li>• Belt scraper and emergency stop switch included.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt driven by ≈ a 15 HP motor.</li>
          <li>• Adjustable tensioning for smooth transfer to the mixer.</li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (Approx. 0.75 m³)",
      desc: (
        <ul>
          <li>• Overlapping blade system for multi-directional mixing.</li>
          <li>• Ni-Hard liners and wear-resistant cast blades.</li>
          <li>
            • Pneumatic/hydraulic discharge with auto grease system and manual
            override.
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: ≈ 850 kg with vibrator motor.</li>
          <li>• Water hopper: ≈ 400 L with pneumatic valve.</li>
          <li>• Additive hopper: ≈ 10 L acrylic tank on a load cell.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 5 HP compressor providing ~12 kg/cm² pressure.</li>
          <li>
            • FRLs, solenoid valves, and nylon pipes for reliable air
            distribution.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>• Insulated steel cabin with LED lighting and optional AC.</li>
          <li>• Houses main PLC panel, HMI touchscreen, and data printer.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed support jacks.</li>
          <li>
            • Loading height ≈ 4.1 m under mixer outlet for direct truck
            loading.
          </li>
        </ul>
      ),
    },
  ];
  const faqData = [
    {
      title:
        "1. What is the main advantage of a planetary mixer in this model?",
      content: (
        <p>
          The planetary mixing pattern creates complete material circulation and
          superior uniformity, making it great for SCC, precast, and coloured
          concretes.
        </p>
      ),
    },
    {
      title: "2. Can it handle fibre-reinforced and high-strength mixes?",
      content: (
        <p>
          Yes. The overlapping blades and high torque provide excellent fibre
          dispersion and uniform mix density for UHPC and fibre mixes.
        </p>
      ),
    },
    {
      title: "3. How accurate is the batching process?",
      content: (
        <p>
          All weighing systems are load-cell-based with PLC automation for
          precise, repeatable batching accuracy.
        </p>
      ),
    },
    {
      title: "4. What safety features are included?",
      content: (
        <p>
          Emergency stop buttons, mixer cover interlocks, overload protection,
          and guarding on moving parts ensure safe operation.
        </p>
      ),
    },
    {
      title:
        "5. Does the ATMIX PLUS 45 (Planetary) support SCADA and remote control?",
      content: (
        <p>
          Yes. It offers SCADA integration and Wi-Fi connectivity for remote
          monitoring and data management.
        </p>
      ),
    },
    {
      title: "6. What is the maintenance schedule like?",
      content: (
        <p>
          Periodic lubrication through the auto-grease system and routine
          inspection of wear liners and blades ensure long service life.
        </p>
      ),
    },
    {
      title: "7. Can it be used as a standard RMC plant?",
      content: (
        <p>
          Yes, while optimized for specialty mixes, it can operate as a
          conventional ready-mix plant for high-quality RMC production.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PLUS-45 | 45 m³/hr Planetary Mixer Plant | Atlas</title>
        <meta name="description" content="ATMIX PLUS-45 — 45 m³/hr planetary mixer, overlapping blades for SCC, fibre-reinforced and architectural concrete. For precast plants. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant-planetary-mixer/atmix-plus-45"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "ATMIX PLUS 45 (Planetary): Medium-Scale Precision for Specialty Concrete"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Accuracy, Uniformity, and Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PLUS 45 (Planetary)"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PLUS 45 (Planetary) ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Every subsystem of the ATMIX PLUS 45 (Planetary) is built for accuracy, durability, and easy maintenance."
        }
        components={components}
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
