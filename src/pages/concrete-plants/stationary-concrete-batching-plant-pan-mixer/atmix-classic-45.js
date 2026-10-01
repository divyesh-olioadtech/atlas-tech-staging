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

export default function ATMIXCLASSIC45() {
  const { getOtherProducts } = useCategoryProducts();

  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-pan-mixer",
    "atmix-classic-45-pan"
  );

  const product = {
    title: "ATMIX CLASSIC 45 (Pan Mixer) Stationary Concrete Batching Plant",
    subtitle:
      "Pan Mixer (500 Litres, 30 m³/hr) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX CLASSIC 45 (Pan Mixer) delivers dependable and economical concrete production for mid-scale construction and RMC applications. With a rated output of 45 m³/hr, it combines Atlas’s heavy-duty stationary framework with the proven reliability of pan-mixer technology, ideal for consistent quality, low-maintenance operation, and budget-friendly performance.",
      "Perfect for standard concrete production, block manufacturing, small precast operations, and medium-scale RMC plants, this configuration ensures smooth batching cycles, uniform mixing, and straightforward operation at a lower running cost.",
    ],
    features: ["Economical Performance", "Reliable Mixing", "Low Maintenance"],
    images: [
      "/images/concrete-plants/atmixcomponent45.webp",
       "/images/concrete-plants/atmixcomponent45-02-new.jpeg",
      // "/images/concrete-plants/atmix-classic-45-pan-2.jpg",
      // "/images/concrete-plants/atmix-classic-45-pan-3.jpg",
      // "/images/concrete-plants/atmix-classic-45-pan-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "45 m³/hr Rated Capacity",
      desc: (
        <span>
          Provides continuous, uniform output for medium-scale construction or
          RMC production.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-45-pan-1.jpg",
    },
    {
      title: "Pan Mixer (1125/750 L)",
      desc: (
        <span>
          Six-arm mixing spider driven by high-efficiency twin-stage planetary
          gearboxes (94 % efficiency).
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-45-pan-2.jpg",
    },
    {
      title: "Smart PLC + HMI Automation",
      desc: (
        <span>
          Weighing and mixing controlled via 5.7&quot; TFT touchscreen HMI (B&R
          / Delta) with recipe storage, USB data backup, and optional
          SCADA/Wi-Fi operation.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-45-pan-3.jpg",
    },
    {
      title: "Load-Cell Based Weighing System",
      desc: (
        <span>
          Four-bin aggregate feeder, cement, water, and additive hoppers mounted
          on load cells for accurate material proportioning.
        </span>
      ),
      image: "/images/concrete-plants/atmix-classic-45-pan-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Economical Mixing System",
      desc: (
        <span>
          Pan mixer design delivers uniform standard concrete at lower power
          consumption than twin-shaft or planetary options.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Durability and Ease of Service",
      desc: (
        <span>
          12 mm replaceable anti-wear liners and Ni-Hard tips minimize
          maintenance time and cost.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Simple Automation & Operation",
      desc: (
        <span>
          Semi-automatic PLC desk with manual override enables smooth batching
          and easy operator training.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Flexible Configuration",
      desc: (
        <span>
          Optional cement silo (100 T), screw conveyor, and diesel generator
          integration adapt the plant to site conditions.
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
            • Four bins (10 m³ each) with pneumatic discharge gates and
            vibrator.
          </li>
          <li>• 5 mm mild steel construction, loading height ≈ 4.3 m.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm 4-ply belt (11.16 m length) driven by 15 HP motor.</li>
          <li>
            • Mounted on four 2,000 kg S-type load cells for accurate weighing.
          </li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt (13.2 m) with 10 HP motor.</li>
          <li>• Adjustable tension bolts for smooth aggregate transfer.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Hoppers",
      desc: (
        <ul>
          <li>
            • Cement: 850 kg, three 450 kg shear-beam load cells, 0.25 HP
            vibrator.
          </li>
          <li>
            • Water: 400 L, three 225 kg shear-beam load cells, pneumatic valve.
          </li>
          <li>• Additive: 10 L acrylic tank on 50 kg S-type load cell.</li>
        </ul>
      ),
    },
    {
      title: "Pan Mixer (1125/750 L)",
      desc: (
        <ul>
          <li>
            • Six-arm mixing spider with Ni-Hard tips, 12 mm replaceable liners.
          </li>
          <li>• Twin-stage planetary gearboxes (94% efficiency).</li>
          <li>• Driven by 40 HP electric motor.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor delivering 12 kg/cm² (10.8 CFM).</li>
          <li>• Includes cylinders, solenoid valves, and pipework.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fixed corrugated-steel cabin, 30 mm insulation, LED lighting,
            optional AC.
          </li>
          <li>• PLC panel, HMI display, printer for production logging.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>
            • Rolled-steel chassis with support jacks; loading height ≈ 4.1 m.
          </li>
          <li>• Maintenance platform with handrails and ladders.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title:
        "1. What type of projects is the ATMIX CLASSIC 45 (Pan Mixer) best for?",
      content: (
        <p>
          Ideal for medium-scale RMC plants, block manufacturing, and standard
          construction sites requiring consistent quality concrete.
        </p>
      ),
    },
    {
      title: "2. What are the main advantages of a pan mixer system?",
      content: (
        <p>
          Lower power consumption, gentle mixing for standard grades, simpler
          maintenance, and uniform M20–M40 concrete.
        </p>
      ),
    },
    {
      title: "3. How accurate is the batching process?",
      content: (
        <p>
          Aggregates, cement, water, and additives are weighed on load cells and
          controlled via PLC + HMI for precise proportioning.
        </p>
      ),
    },
    {
      title: "4. What is the power requirement for this plant?",
      content: (
        <p>
          Total connected load ≈ 140 HP; Atlas recommends a 250 kVA generator
          for efficient operation.
        </p>
      ),
    },
    {
      title: "5. Does the plant support cement silo integration?",
      content: (
        <p>
          Yes, compatible with Atlas 100-ton cement silo and optional screw
          conveyor (219 mm × 12 m).
        </p>
      ),
    },
    {
      title: "6. What ensures the durability of the plant?",
      content: (
        <p>
          12 mm replaceable wear liners, PU paint finish, ISI-grade motors, and
          robust steel fabrication.
        </p>
      ),
    },
    {
      title: "7. What control options are available?",
      content: (
        <p>
          Standard PLC + HMI desk with manual override; optional SCADA for
          remote monitoring.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX CLASSIC-45 | 45 m³/hr Pan Mixer Plant | Atlas India</title>
        <meta name="description" content="ATMIX CLASSIC-45 — 45 m³/hr pan mixer plant, lower energy use, M20–M40 mix grades, simple maintenance. For budget-conscious RMC and precast operations. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-classic-45-pan-2.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant-pan-mixer/atmix-classic-45"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/atmix-45-thumbail.jpeg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title="ATMIX CLASSIC 45 (Pan Mixer): Efficient Mixing for Everyday Concrete Production"
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Practical Design for Reliability, Efficiency, and Ease of Use"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose ATMIX CLASSIC 45 (Pan Mixer)"
        subtitle="Designed for dependable, low-maintenance operation with consistent batching accuracy and reduced downtime."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Each component of the ATMIX CLASSIC 45 (Pan Mixer) is engineered for efficiency, longevity, and safe operation."
        components={components}
        img="/images/concrete-plants/atmixcomponent45.webp"
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
