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

export default function ATMIXPLUS60() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-planetary-mixer",
    "atmix-plus-60-planetary"
  );

  const product = {
    title: "ATMIX PLUS 60 (Planetary) Stationary Concrete Batching Plant",
    subtitle:
      "Planetary Mixer (1000 Liters, 60M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PLUS 60 (Planetary) is a high-capacity, stationary batching plant designed for precast, SCC, and high-performance concrete production where precision and consistency are critical. Delivering 60 cubic meters per hour, it combines the proven durability of the stationary design with the superior homogeneity of a planetary mixer, ensuring excellent concrete surface finish and structural integrity.",
      "Ideal for large precast plants, infrastructure components, RMC operations, and SCC manufacturing, the ATMIX PLUS 60 (Planetary) offers advanced automation, precision batching, and unmatched mixing uniformity for demanding applications.",
    ],
    features: [
      "High Capacity",
      "Exceptionally Uniform Mix",
      "Automated Control",
    ],
    images: [
      "/images/concrete-plants/atmix-plus-60-planetary-1.jpg",
      "/images/concrete-plants/atmix-plus-60-planetary-2.jpg",
      "/images/concrete-plants/atmix-plus-60-planetary-3.jpg",
      "/images/concrete-plants/atmix-plus-60-planetary-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "Reliable 60 m³/hr Output",
      desc: (
        <span>
          Ensures uninterrupted production for precast, SCC, and specialty
          concrete plants requiring continuous supply.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-60-planetary-1.jpg",
    },
    {
      title: "Planetary Mixer (Approx. 1 m³ Batch)",
      desc: (
        <span>
          Overlapping, multi-directional blades provide full material
          circulation and high torque, delivering homogenous, air-free concrete
          mixes.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-60-planetary-2.jpg",
    },
    {
      title: "Automated PLC + HMI Control",
      desc: (
        <span>
          Siemens/B&R/Delta system with SCADA integration offers recipe
          management, production logs, and remote plant operation.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-60-planetary-3.jpg",
    },
    {
      title: "Precision Load-Cell Batching",
      desc: (
        <span>
          Aggregates, cement, water, and admixtures are measured on independent
          load cells for consistent proportioning.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-60-planetary-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Superior Mix Quality",
      desc: (
        <span>
          Planetary mixing delivers complete dispersion of pigments, fibres, and
          aggregates. It’s ideal for SCC and high-strength concretes.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Optimised for Large Precast Production",
      desc: (
        <span>
          Perfect for heavy precast elements, segments, and high-precision mould
          casting where mix consistency is non-negotiable.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Advanced Automation & Ease of Operation",
      desc: (
        <span>
          Pre-wired modules and a user-friendly control cabin simplify
          installation and daily operations.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Long-Life Design & Safety",
      desc: (
        <span>
          Replaceable Ni-Hard liners, guarded drives, overload protection, and
          emergency stops ensure safe, durable performance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Heavy-Duty Stationary Construction",
      desc: (
        <span>
          Fabricated steel structure, PU paint finish, and industrial-grade
          components ensure strength, stability, and longevity.
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
            • Four bins (≈ 15 m³ each) with pneumatically controlled discharge
            gates.
          </li>
          <li>
            • Constructed from 5 mm mild steel with a vibrator for uniform
            material flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor & Transfer System",
      desc: (
        <ul>
          <li>
            • 800 mm, 4-ply belt (≈ 11 m length) on load cells (≈ 2 m³
            capacity).
          </li>
          <li>• Includes belt scraper and emergency stop switch for safety.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt driven by a 20 HP gear motor.</li>
          <li>
            • Adjustable tension and robust frame for steady aggregate transfer.
          </li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (Approx. 1.0 m³)",
      desc: (
        <ul>
          <li>
            • Overlapping planetary blades for multi-axis mixing and high
            torque.
          </li>
          <li>
            • Ni-Hard liners, anti-wear mixing arms, and pneumatic/hydraulic
            discharge gate.
          </li>
          <li>
            • Auto grease system with manual backup and 415 V, 3-phase drive.
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: ≈ 850 kg capacity with vibrator motor.</li>
          <li>• Water hopper: ≈ 400 L with pneumatic butterfly valve.</li>
          <li>
            • Additive hopper: ≈ 10–20 L transparent acrylic tank on load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 7.5 HP compressor providing ≈ 12 kg/cm² pressure.</li>
          <li>
            • Solenoid valves, FRLs, and nylon pipework for reliable air
            operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fixed, insulated steel cabin with LED lighting and optional AC.
          </li>
          <li>
            • Houses main PLC control panel and touchscreen HMI interface.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled-steel chassis with fixed support jacks.</li>
          <li>
            • Loading height ≈ 4.1 m under the mixer outlet for truck or bucket
            loading.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title:
        "1. What makes the planetary mixer ideal for precast and SCC applications?",
      content: (
        <p>
          Overlapping blades create complete material circulation and dense,
          homogenous mixes with excellent surface finish, perfect for SCC and
          architectural concrete.
        </p>
      ),
    },
    {
      title:
        "2. Can this plant handle fibre-reinforced and high-strength concrete?",
      content: (
        <p>
          Yes. The high-torque mixer ensures even distribution of fibres and
          uniform hydration of high-strength mixes.
        </p>
      ),
    },
    {
      title: "3. How accurate is the batching system?",
      content: (
        <p>
          All materials are weighed on independent load cells with PLC
          integration for precise and repeatable batching.
        </p>
      ),
    },
    {
      title: "4. What safety features are included?",
      content: (
        <p>
          Emergency stop system, interlocked mixer covers, motor overload
          protection, and guarding on moving parts.
        </p>
      ),
    },
    {
      title: "5. Does the plant support remote operation?",
      content: (
        <p>
          Yes, it’s SCADA-ready and supports Wi-Fi/tablet control for remote
          operation and data access.
        </p>
      ),
    },
    {
      title: "6. What ensures its long-term durability?",
      content: (
        <p>
          Heavy-gauge steel frame, Ni-Hard liners, and PU paint finish protect
          against wear and corrosion.
        </p>
      ),
    },
    {
      title: "7. Can it operate as a standard RMC plant too?",
      content: (
        <p>
          Yes, it can produce standard ready-mix concrete with the same batch
          consistency as specialty mixes.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PLUS-60 | 60 m³/hr Planetary Mixer Plant | Atlas</title>
        <meta name="description" content="ATMIX PLUS-60 — 60 m³/hr planetary mixer, high-torque overlapping blades, SCC and ultra-high-strength grade ready. For large precast operations. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-plus-60-planetary-1.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant-planetary-mixer/atmix-plus-60"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/atmix-plus-60-planetary-1.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title="ATMIX PLUS 60 (Planetary): High-Volume Precision for Advanced Concrete Applications"
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Accuracy, Durability, and Continuous Operation"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose ATMIX PLUS 60 (Planetary)"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PLUS 60 (Planetary) ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Each module of the ATMIX PLUS 60 (Planetary) is engineered for longevity and precise material handling in continuous operation."
        components={components}
      />

      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg="#E7F1E9" />
    </>
  );
}
