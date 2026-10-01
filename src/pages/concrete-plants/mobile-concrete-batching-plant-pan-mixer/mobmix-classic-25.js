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

export default function MOBMIXCLASSIC25() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mobile-concrete-batching-plant-planetary-mixer-classic",
    "mobmix-classic-25"
  );

  const product = {
    title: "MOBMIX CLASSIC 25 (Pan Mixer) Mobile Concrete Batching Plant",
    subtitle:
      "Pan Mixer (400 Liters, 25M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX CLASSIC 25 (Pan Mixer) is a compact, fully mobile batching solution designed for cost-efficient concrete production on small to mid-scale projects. Delivering 25 m³/hr, it combines the strength of Atlas's stationary technology with a towable single-chassis layout, ideal for rural and remote construction sites.",
      "Perfect for rural road construction, housing foundations, precast block production, and small RMC jobs, this plant delivers reliable concrete quality, quick setup, and low maintenance, ensuring smooth performance even on limited-space sites.",
    ],
    features: ["Compact Design", "Economical Mixing", "Reliable Output"],
    images: [
      "/images/concrete-plants/mobmix-classic-25-1.jpg",
      "/images/concrete-plants/mobmix-classic-25-2.jpg",
      "/images/concrete-plants/mobmix-classic-25-3.jpg",
      "/images/concrete-plants/mobmix-classic-25-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "25 m³/hr Capacity with Pan Mixer",
      desc: "Provides steady output for small-scale infrastructure, block plants, and general concreting.",
      image: "/images/concrete-plants/mobmix-classic-25-1.jpg",
    },
    {
      title: "Atlas Pan Mixer (500/350 L)",
      desc: "Six-arm spider with Ni-Hard tips and dual-stage planetary gearboxes (94 % efficiency) ensures uniform, gentle mixing and low wear.",
      image: "/images/concrete-plants/mobmix-classic-25-2.jpg",
    },
    {
      title: "Single-Chassis Portable Design",
      desc: "Mixer, aggregate bins, and weighing cabin are mounted on one steel frame for easy towing and quick site setup.",
      image: "/images/concrete-plants/mobmix-classic-25-3.jpg",
    },
    {
      title: "Compact and Efficient Operation",
      desc: "Low power consumption (≈ 49 HP total) and minimal maintenance make it ideal for budget-sensitive projects.",
      image: "/images/concrete-plants/mobmix-classic-25-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Economical Performance",
      desc: "Lower energy use and fewer moving parts mean reduced operating costs over time.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Simplified Setup and Mobility",
      desc: "Towable unit with pre-wired sections and fixed support jacks enables rapid deployment.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Reliable Mixing Mechanism",
      desc: "Ni-Hard tips and 12 mm replaceable liners ensure consistent mix quality and durability.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Flexible Configuration",
      desc: "Optional cement silos (30–100 T), screw conveyor (219 mm × 10 m), and diesel genset adapt the plant to varied site needs.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Load-Cell Batching",
      desc: "Aggregates, cement, water, and additives are individually weighed for precise material control.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Four bins (3.5 m³ each) made from 5 mm MS plate with pneumatic
            discharge gates.
          </li>
          <li>
            • Single vibrator motor for material flow; loading height ≈ 4 m.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 650 mm 4-ply belt (8 m length), driven by a 10 HP motor.</li>
          <li>
            • Mounted on four 1100 kg shear-beam load cells (0.7 m³ capacity).
          </li>
        </ul>
      ),
    },
    {
      title: "Pan Mixer (500/350 L)",
      desc: (
        <ul>
          <li>• 0.35 m³ batch capacity with 6-arm mixing spider.</li>
          <li>
            • Ni-Hard tips and 12 mm anti-wear liners; dual-stage planetary gear
            drive (94 % efficiency).
          </li>
          <li>• Driven by a 20 HP motor.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: 350 kg capacity, 3 × 200 kg load cells, 0.25 HP
            vibrator.
          </li>
          <li>
            • Water hopper: 250 L, 3 × 200 kg load cells, 100 mm pneumatic
            valve.
          </li>
          <li>
            • Additive hopper: 10 L acrylic tank with 50 kg S-type load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor (12 kg/cm² pressure, 10.04 CFM).</li>
          <li>
            • Solenoid valves, cylinders, and nylon pipework for air control.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated rolled-steel chassis with 6 fixed support jacks.</li>
          <li>• Loading height 4.1 m under mixer outlet.</li>
        </ul>
      ),
    },
    {
      title: "Control System",
      desc: (
        <ul>
          <li>
            • PLC + HMI (5.7&quot; TFT touch panel – B&R / Delta) with recipe
            storage, USB backup, and optional SCADA/Wi-Fi remote access.
          </li>
          <li>• Pre-wired sections with a junction box for quick assembly.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What projects is the MOBMIX CLASSIC 25 best for?",
      content: (
        <p>
          Perfect for rural road construction, housing foundations, and small
          RMC plants requiring low power and easy mobility.
        </p>
      ),
    },
    {
      title: "2. What are its main advantages over twin-shaft plants?",
      content: (
        <p>
          It’s more economical and gentler in mixing — ideal for standard grades
          (M20–M40) without requiring high-shear mixing.
        </p>
      ),
    },
    {
      title: "3. What is the power requirement?",
      content: (
        <p>
          Total connected load ≈ 49 HP; Atlas recommends a 62 kVA generator for
          optimum operation.
        </p>
      ),
    },
    {
      title: "4. Can I pair it with a cement silo?",
      content: (
        <p>
          Yes — supports 1.5 T bag hopper or vertical/horizontal silos up to 100
          T with screw conveyor (219 mm × 10 m).
        </p>
      ),
    },
    {
      title: "5. How accurate is the batching?",
      content: (
        <p>
          All materials are load-cell weighed and PLC-controlled for consistent
          proportioning.
        </p>
      ),
    },
    {
      title: "6. Is the plant easy to transport?",
      content: (
        <p>
          Yes — single-chassis layout with pre-wired modules for quick folding
          and relocation.
        </p>
      ),
    },
    {
      title: "7. What safety features are included?",
      content: (
        <p>
          Safety guards on drives, emergency stops, and motor overload
          protection for operator safety.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          MOBMIX CLASSIC 25 Mobile Concrete Batching Plant – Pan Mixer
        </title>
        <meta
          name="description"
          content="The MOBMIX CLASSIC 25 (Pan Mixer) Mobile Concrete Batching Plant delivers 25 m³/hr cost-efficient concrete production with PLC + HMI automation for rural and small-scale projects."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/mobmix-classic-25-1.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-pan-mixer/mobmix-classic-25"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/mobmix-classic-25-1.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "MOBMIX CLASSIC 25 (Pan Mixer): Affordable On-Site Concrete Production"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Mobility, Consistency, and Cost-Efficiency"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose MOBMIX CLASSIC 25 (Pan Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX CLASSIC 25 ensures consistent batching accuracy, reduced downtime, and long-term reliability."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Every element of the MOBMIX CLASSIC 25 is engineered for durability, mobility, and accurate batching in field conditions."
        components={components}
      />

      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of mobile plants designed for exceptional performance and reliability."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
