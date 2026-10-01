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
export default function MOBMIX60() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-mobmix",
    "mobmix-plus-60"
  );

  const product = {
    title: "MOBMIX PLUS 60 Mobile Concrete Batching Plant (Planetary Mixer)",
    subtitle:
      "Planetary Mixer (1000 Liters, 60M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PLUS 60 Mobile Concrete Batching Plant combines premium planetary mixing performance with true mobility. Designed for large precast yards, SCC, fiber-reinforced, and architectural concrete production, it delivers 60 m³/hr of high-quality, homogenous concrete with reliable automation and rapid site setup.",
      "Built for RMC producers and large infrastructure projects requiring flexible yet precise concrete batching, the MOBMIX PLUS 60 offers the strength of a stationary plant in a towable single-chassis design — minimizing downtime and maximizing productivity.",
    ],
    features: ["High Productivity", "Homogenous Mixing", "True Portability"],
    images: [
      "/images/concrete-plants/mobmix-plus-60-1.jpg",
      "/images/concrete-plants/mobmix-plus-60-2.jpg",
      "/images/concrete-plants/mobmix-plus-60-3.jpg",
      "/images/concrete-plants/mobmix-plus-60-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "60 m³/hr Capacity",
      desc: (
        <span>
          High-output configuration ensures efficient and consistent concrete
          production for large-scale jobs.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-60-1.jpg",
    },
    {
      title: "Planetary Mixer (≈ 1.0 m³ Batch)",
      desc: (
        <span>
          Overlapping blades and high-torque drive ensure complete material
          circulation and homogenous blending.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-60-2.jpg",
    },
    {
      title: "Mobile Modular Construction",
      desc: (
        <span>
          Single-chassis layout with pre-wired modules enables easy transport
          and assembly in hours without civil foundation work.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-60-3.jpg",
    },
    {
      title: "Accurate Load-Cell Batching",
      desc: (
        <span>
          Individual load-cell systems for aggregate, cement, water, and
          admixtures ensure precise proportioning across every batch.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-60-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Superior Mixing Dynamics",
      desc: (
        <span>
          Planetary blades achieve full material circulation, delivering
          high-quality concrete ideal for SCC and UHPC.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Rapid Setup & Relocation",
      desc: (
        <span>
          Foldable legs, retractable supports, and plug-in electrical
          connections simplify movement and reinstallation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Built to Last",
      desc: (
        <span>
          PU-painted steel chassis, Ni-Hard liners, and heavy-duty gear drives
          withstand continuous, high-volume operations.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Smart Operation",
      desc: (
        <span>
          Automated batching, real-time data monitoring, and manual override
          enhance productivity and operational safety.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Advanced PLC + HMI Control",
      desc: (
        <span>
          Siemens/B&R/Delta-based automation for recipe storage, production
          logging, and optional SCADA/Wi-Fi for remote diagnostics.
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
            • Four bins (≈ 10 m³ each) with pneumatic discharge gates and
            vibrator motor.
          </li>
          <li>
            • 5 mm thick mild steel construction; loading width ≈ 3.6 m, height
            ≈ 5.5 m.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>
            • 800 mm, 4-ply vulcanized belt (≈ 8.3 m length) on load cells (≈
            1.5 m³ total capacity).
          </li>
          <li>
            • Driven by a 20 HP gear motor with adjustable tensioning and belt
            scraper.
          </li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (≈ 1.0 m³ Batch)",
      desc: (
        <ul>
          <li>
            • Six-arm planetary mixing spider with Ni-Hard tips and 12 mm
            replaceable wear liners.
          </li>
          <li>• Hydraulic discharge with automatic grease pump.</li>
          <li>
            • Driven by a 40 HP motor via planetary gearboxes (94% efficiency).
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: ≈ 850 kg with vibrator and 3 load cells.</li>
          <li>• Water hopper: ≈ 400 L with pneumatic butterfly valve.</li>
          <li>
            • Additive hopper: ≈ 10 L acrylic tank with 50 kg S-type load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>
            • 5 HP compressor (12 kg/cm² pressure) with solenoid valves, FRLs,
            and nylon pipe network.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Foldable, insulated steel cabin with LED lighting and optional
            air-conditioning.
          </li>
          <li>
            • Equipped with PLC panel, touchscreen HMI, and USB/SCADA
            connectivity.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated steel mobile chassis with fixed support jacks.</li>
          <li>
            • Mixer discharge height ≈ 4.0–4.2 m for direct truck loading.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What type of projects is the MOBMIX PLUS 60 best suited for?",
      content: (
        <p>
          Ideal for large precast plants, RMC production, and infrastructure
          projects needing high-quality, specialized concrete output.
        </p>
      ),
    },
    {
      title: "2. What advantage does the planetary mixer provide?",
      content: (
        <p>
          It ensures thorough material circulation, making it perfect for SCC,
          architectural, fiber-reinforced, and high-strength concretes.
        </p>
      ),
    },
    {
      title: "3. Is it fully automated?",
      content: (
        <p>
          Yes — PLC + HMI system manages weighing, mixing, and discharge
          automatically, with manual override and SCADA-ready functionality.
        </p>
      ),
    },
    {
      title: "4. How accurate is the batching system?",
      content: (
        <p>
          All major components use load-cell weighing under PLC control,
          offering ±1% dosing precision.
        </p>
      ),
    },
    {
      title: "5. What power is required?",
      content: (
        <p>
          Total connected load ≈ 95 HP; Atlas recommends a 125 kVA generator for
          optimal performance.
        </p>
      ),
    },
    {
      title: "6. Can it be integrated with cement silos?",
      content: (
        <p>
          Yes — compatible with Atlas vertical silos (50–100 T) and horizontal
          silos (20–40 T).
        </p>
      ),
    },
    {
      title: "7. How does it compare to a twin-shaft mobile plant?",
      content: (
        <p>
          While twin-shaft mixers offer faster cycles, planetary mixers deliver
          higher homogeneity and superior surface finish for specialty
          concretes.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MOBMIX PLUS 60 Mobile Concrete Batching Plant – 60m³/hr</title>
        <meta
          name="description"
          content="Atlas MOBMIX PLUS 60 Mobile Concrete Batching Plant with planetary mixer delivers 60 m³/hr for precast, SCC, and specialty concrete. PLC + HMI control with optional SCADA."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/VIDEO_ID_HERE"
      videoThumbnail="/images/concrete-plants/mobmix-plus-60-1.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-planetary-mixer/mobmix-plus-60"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/mobmix-plus-60-1.jpg"
        videoUrl="https://www.youtube.com/embed/VIDEO_ID_HERE"
        title={"MOBMIX PLUS 60: Stationary-Quality Concrete, Mobile Efficiency"}
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Precision, Productivity, and Portability"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose MOBMIX PLUS 60 (Planetary Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PLUS 60 ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />

      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each module of the MOBMIX PLUS 60 is designed for durability, mobility, and high-precision concrete batching."
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
