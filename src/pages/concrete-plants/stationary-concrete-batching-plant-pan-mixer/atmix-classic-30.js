import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import FeatureGrid from "../../../../components/others/FeatureGrid";
import FeatureSlider from "../../../../components/others/FeatureSlider;";
import Productfaq from "../../../../components/others/productFaq";
import ProductSlider2 from "../../../../components/others/productSlider";
import Video from "../../../../components/others/video";
import ProductOverview from "../../../../components/products/productslider";

import Head from "next/head";
import useCategoryProducts from "../../../../hooks/useCategoryProducts";
import ProductSchema from "../../../../components/schema/ProductSchema";

export default function ATMIXCLASSIC30() {
  const { getOtherProducts } = useCategoryProducts();

  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-pan-mixer",
    "atmix-classic-30-pan"
  );

  const product = {
    title: "ATMIX CLASSIC 30 (Pan Mixer) Stationary Concrete Batching Plant",
    subtitle:
      "Pan Mixer (400 Litres, 25 m³/hr) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The ATMIX CLASSIC 30 (Pan Mixer) by Atlas Technologies is an economical, reliable, stationary concrete batching plant designed for standard concrete applications at medium scale. With a rated output of 30 m³ per hour, it combines cost-efficient pan-mixer technology with Atlas’s stationary plant architecture to deliver dependable performance for everyday concrete needs.",
      "Ideal for precast block production, standard commercial concrete, rural road works, and small-scale RMC plants, this plant offers a compact footprint, simpler maintenance, and lower operating cost while delivering the quality concrete output contractors expect.",
    ],
    features: ["Smart Budgeting", "Reliable Output", "Minimal Maintenance"],
    images: [
      "/images/concrete-plants/atmixthirty.webp",
      // "/images/concrete-plants/atmix-classic-30-pan-1.jpg",
      // "/images/concrete-plants/atmix-classic-30-pan-2.jpg",
      // "/images/concrete-plants/atmix-classic-30-pan-3.jpg",
      // "/images/concrete-plants/atmix-classic-30-pan-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "30 m³/hr Capacity with Pan Mixer",
      desc: (
        <span>
          Delivers steady production for standard mixes without the complexity
          or cost of high-performance mixing systems.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-30-pan-1.jpg",
    },
    {
      title: "Pan Mixer Technology",
      desc: (
        <span>
          Gentle, economical mixing action ideal for M20–M40 concrete grades
          with normal slump ranges (75–100 mm).
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-30-pan-2.jpg",
    },
    {
      title: "PLC + HMI Automated Control",
      desc: (
        <span>
          Load-cell-based weighing for aggregates, cement, water, and additives,
          with recipe storage and optional SCADA integration.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-30-pan-3.jpg",
    },
    {
      title: "Compact Footprint & Simple Maintenance",
      desc: (
        <span>
          Smaller structure, easy-access mixer, and reduced wear components
          minimize downtime and operating cost.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-30-pan-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Economical Operation",
      desc: (
        <span>
          Pan mixer design consumes less power than twin-shaft or planetary
          mixers and is ideal for standard concrete demands.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Simplicity with Quality",
      desc: (
        <span>
          Provides sufficient mixing uniformity for everyday concrete while
          keeping maintenance simple and affordable.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Configurable & Future-Ready",
      desc: (
        <span>
          Optional cement silos (30–100 T), multi-admixture dosing, and diesel
          power packs support future expansion.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Robust Stationary Plant Build",
      desc: (
        <span>
          All-steel construction, replaceable liners and blades, and a walk-in
          control cabin ensure durability and long service life.
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
          <li>• Four bins (~7–8 m³ each) with pneumatic discharge gates.</li>
          <li>• 5 mm mild steel construction with vibrator motor.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor & Transfer System",
      desc: (
        <ul>
          <li>• 800 mm wide, 4-ply belt (~11 m length).</li>
          <li>• Load-cell weighing (~1 m³ capacity).</li>
          <li>• Slinger or chevron conveyor feeding the pan mixer.</li>
        </ul>
      ),
    },
    {
      title: "Pan Mixer (Approx. 0.5 m³ Batch)",
      desc: (
        <ul>
          <li>• Pan-type mixer with replaceable liners and blades.</li>
          <li>• Hydraulic or pneumatic discharge door.</li>
          <li>• 415 V, 3-phase drive motor.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: ~500 kg with vibrator.</li>
          <li>• Water hopper: ~300 L with pneumatic valve.</li>
          <li>• Additive hopper: ~10 L acrylic tank on load cell.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor delivering ~12 kg/cm² pressure.</li>
          <li>• Solenoid valves and FRLs for system actuation.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin & Automation",
      desc: (
        <ul>
          <li>• Insulated steel cabin with LED lighting and optional AC.</li>
          <li>• PLC (Siemens/B&R/Delta), HMI touchscreen, USB backup.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed support jacks.</li>
          <li>• Loading height ~4.0 m for direct truck/skip discharge.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What concrete mixes are best suited for a pan mixer?",
      content: (
        <p>
          Pan mixers are ideal for standard M20–M40 concrete grades with normal
          slump ranges (75–100 mm), commonly used in precast blocks and standard
          RMC.
        </p>
      ),
    },
    {
      title: "2. How does a pan mixer compare with a twin-shaft mixer?",
      content: (
        <p>
          Pan mixers consume less power and are easier to maintain, while
          twin-shaft mixers are better suited for high-strength or specialty
          concrete.
        </p>
      ),
    },
    {
      title: "3. Can I upgrade the automation later?",
      content: (
        <p>
          Yes, the PLC architecture supports SCADA integration and future
          automation upgrades.
        </p>
      ),
    },
    {
      title: "4. Is this plant suitable for fibre-reinforced concrete?",
      content: (
        <p>
          It can handle basic fibre mixes, but planetary or twin-shaft mixers
          are recommended for complex or high-performance concrete.
        </p>
      ),
    },
    {
      title: "5. What optional equipment is available?",
      content: (
        <p>
          Optional cement silos (30–100 T), multi-admixture dosing systems, and
          diesel power packs are available.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX CLASSIC-30 | 30 m³/hr Pan Mixer Plant | Atlas India</title>
        <meta name="description" content="ATMIX CLASSIC-30 — 30 m³/hr pan mixer batching plant, lower power than twin-shaft, handles M20–M40 mixes. For standard RMC and precast blocks. Get price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/atmix-classic-30-pan-2.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant-pan-mixer/atmix-classic-30"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/atmix-30-thumbnail.jpeg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title="ATMIX CLASSIC 30 (Pan Mixer): Practical Mixing for Medium-Scale Projects"
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Efficiency, Reliability, and Cost-Effectiveness"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose ATMIX CLASSIC 30 (Pan Mixer)"
        subtitle="Built for dependable, low-maintenance operation with consistent output and reduced operating cost."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="The ATMIX CLASSIC 30 (Pan Mixer) integrates all the essential modules for dependable, everyday concrete production."
        components={components}
        img="/images/concrete-plants/atmixthirty.webp"
      />

      <ProductSlider2
        sectionTitle="Explore Other Models"
        sectionDesc="Discover more stationary concrete batching plants from Atlas."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
