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
    "atmix-plus-30-planetary"
  );

  const product = {
    title: "ATMIX PLUS 30 (Planetary) Stationary Concrete Batching Plant",
    subtitle:
      "Planetary Mixer (500 Liters, 30M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PLUS 30 (Planetary) is purpose-designed for high-precision, specialty concrete production, including precast elements, self-compacting concrete (SCC), fibre-reinforced mixes, architectural finishes, and ultra-high-strength applications.",
      "Tailored for small-to-medium precast yards, SCC batching operations, and architectural concrete producers, the ATMIX PLUS 30 (Planetary) offers fine mix control, premium finish quality, and stable batch-to-batch consistency. With a rated capacity of 30 m³ per hour, it combines the heavy-duty structural build of Atlas stationary plants with the refined mixing action of planetary blades to produce very homogeneous, high-quality concrete.",
    ],
    features: [
      "Superior Homogeneity",
      "Specialized Mix Capability",
      "Compact Reliability",
    ],
    images: [
      "/images/concrete-plants/atmix-plus-30-planetary-1.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-2.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-3.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "30 m³/hr Capacity with Planetary Mixing",
      desc: (
        <span>
          Delivers continuous production for specialty concretes where finish,
          uniformity, and repeatability matter.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-30-planetary-1.jpg",
    },
    {
      title: "Planetary Mixer Option",
      desc: (
        <span>
          Features overlapping blades and high-torque mixing action for full
          material circulation and superior homogeneity.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-30-planetary-2.jpg",
    },
    {
      title: "Advanced PLC + HMI Automation",
      desc: (
        <span>
          Accurate recipe control, load-cell weighing systems for aggregate,
          cement, water & admixtures, and optional SCADA connectivity for data
          logging.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-30-planetary-3.jpg",
    },
    {
      title: "Precision Batching System",
      desc: (
        <span>
          Individual load-cell hoppers for water, cement, and additives ensure
          precise dosing, critical for high-performance mixes.
        </span>
      ),
      image: "/images/concrete-plants/atmix-plus-30-planetary-4.jpg",
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
      title: "Rugged Stationary Plant Architecture",
      desc: (
        <span>
          The stationary plant chassis and module structure provide durability,
          stability, and long-term performance for continuous operation.
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
            • Four bins (approx. 7–8 m³ each) with pneumatic gates and vibrator
            motor.
          </li>
          <li>
            • Robust mild steel construction (5 mm plate) and smooth discharge
            surfaces.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor & Transfer System",
      desc: (
        <ul>
          <li>• 800 mm wide, 4-ply belting (≈11 m length).</li>
          <li>• Load-cell weighing (≈1 m³ capacity).</li>
          <li>
            • Chevron-style charging conveyor transfers weighed aggregates to
            the planetary mixer.
          </li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (Approx. 0.6 m³ batch)",
      desc: (
        <ul>
          <li>• High-torque planetary mixing unit with overlapping blades.</li>
          <li>• Ni-Hard liners and wear-resistant cast-iron components.</li>
          <li>• Automatic discharge door and pneumatic/hydraulic actuation.</li>
          <li>• 415 V, 3-phase drive; automatic grease lubrication system.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: ~500 kg with vibrator.</li>
          <li>• Water hopper: ~300 L with pneumatic butterfly valve.</li>
          <li>
            • Additive hopper: ~10 L transparent acrylic, mounted on a load
            cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor providing ~12 kg/cm² pressure.</li>
          <li>• Solenoid valves and nylon tubing for actuator control.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin & Automation",
      desc: (
        <ul>
          <li>
            • Fixed insulated steel cabin with LED lighting and optional AC.
          </li>
          <li>
            • Houses PLC panel (Siemens/B&R/Delta), HMI touchscreen, USB backup,
            and recipe storage.
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
            • Loading height ~4.0 m under mixer outlet for direct truck/skip
            loading.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. Why use a planetary mixer for specialty concrete?",
      content: (
        <p>
          Planetary mixers offer overlapping blade movement and high torque,
          ensuring full material circulation and superior homogeneity,
          especially for SCC, fiber-reinforced, and coloured concretes.
        </p>
      ),
    },
    {
      title: "2. Can this plant handle fibre-reinforced concrete mixes?",
      content: (
        <p>
          Yes, the high-torque planetary mixing mechanism ensures fibres are
          well dispersed without balling or segregation.
        </p>
      ),
    },
    {
      title:
        "3. How does the planetary mixer manage high-strength or ultra-high-performance concrete (UHPC)?",
      content: (
        <p>
          The overlapping blades and high-torque drive ensure dense, uniform
          mixes without segregation. It’s ideal for high-strength,
          architectural, or performance-grade concretes.
        </p>
      ),
    },
    {
      title: "4. What safety and maintenance features are included?",
      content: (
        <p>
          Includes emergency stop system, sealed mixer cover interlocks,
          overload motor protection, guarded drives, and access platforms for
          maintenance ease.
        </p>
      ),
    },
    {
      title: "5. What kind of batching accuracy can I expect?",
      content: (
        <p>
          All major feeds, aggregates, cement, water, and additives are weighed
          via load cells. The PLC control system, with recipe storage, ensures
          repeatable precision across batches.
        </p>
      ),
    },
    {
      title:
        "6. Does the planetary option increase maintenance costs compared to twin-shaft?",
      content: (
        <p>
          Not significantly; although mixing dynamics differ, Atlas designs the
          planetary mixer with wear-resistant Ni-Hard liners and cast blades to
          ensure long service life with standard maintenance.
        </p>
      ),
    },
    {
      title:
        "7. Is the ATMIX PLUS 30 (Planetary) suitable for standard ready-mix work too?",
      content: (
        <p>
          Yes, while optimised for specialty applications, it can also operate
          as a standard RMC plant for high-quality concrete, providing
          flexibility.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PLUS-30 | 30 m³/hr Planetary Mixer Plant | Atlas</title>
        <meta name="description" content="ATMIX PLUS-30 — 30 m³/hr planetary mixer, overlapping blades, high torque for SCC and fibre-reinforced mixes. For precast and specialty concrete. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant-planetary-mixer/atmix-plus-30"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PLUS 30 (Planetary): Specialty Concrete with Precision"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for High-Quality, Specialty Concrete Production"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PLUS 30 (Planetary)"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PLUS 30 (Planetary) ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PLUS 30 (Planetary) includes all critical modules tailored for specialty batching with durability and precision."
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
