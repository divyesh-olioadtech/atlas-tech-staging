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

export default function MOBMIX45() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-mobmix",
    "mobmix-plus-45"
  );

  const product = {
    title: "MOBMIX PLUS 45 Mobile Concrete Batching Plant (Planetary Mixer)",
    subtitle:
      "Planetary Mixer (750 Liters, 45M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PLUS 45 Mobile Concrete Batching Plant delivers stationary-grade concrete performance with the convenience of true mobility. Designed for medium-scale precast production, SCC, and high-finish architectural concretes, this 45 m³/hr mobile plant offers exceptional mix quality, fast installation, and compact transportability.",
      "The MOBMIX PLUS 45 integrates a high-torque planetary mixer with Atlas’s heavy-duty single-chassis layout, ensuring unmatched homogeneity, accurate dosing, and reliable production control in every batch. It’s an excellent fit for dynamic job sites or multi-location precast operations.",
    ],
    features: ["High Homogeneity", "Mobility Optimized", "Smart Automation"],
    images: [
      "/images/concrete-plants/mobmix-plus-45-1.jpg",
      "/images/concrete-plants/mobmix-plus-45-2.jpg",
      "/images/concrete-plants/mobmix-plus-45-3.jpg",
      "/images/concrete-plants/mobmix-plus-45-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "45 m³/hr Capacity with Planetary Mixing",
      desc: (
        <span>
          Provides continuous, uniform production for medium precast and RMC
          applications requiring superior surface finish.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-45-1.jpg",
    },
    {
      title: "Planetary Mixer (≈ 0.75 m³ Batch)",
      desc: (
        <span>
          High-torque planetary mixing mechanism with overlapping blades ensures
          full material circulation and dense, uniform concrete.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-45-2.jpg",
    },
    {
      title: "Mobile Single-Chassis Construction",
      desc: (
        <span>
          All major assemblies, aggregate bins, mixer, weigh hoppers, and
          control cabin are mounted on one frame for rapid deployment and
          mobility.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-45-3.jpg",
    },
    {
      title: "PLC + HMI Automation",
      desc: (
        <span>
          Fully automated batching with recipe management, production data
          logging, and optional SCADA/Wi-Fi remote monitoring.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-45-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Unmatched Mix Consistency",
      desc: (
        <span>
          Planetary mixing achieves superior homogeneity — ideal for SCC,
          high-strength, and fiber-reinforced concretes.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Rapid Deployment & Mobility",
      desc: (
        <span>
          Foldable legs, pre-wired systems, and single-chassis portability allow
          installation within hours.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Built for Continuous Operation",
      desc: (
        <span>
          Heavy-duty steel fabrication, PU paint finish, and ISI-certified
          motors ensure durability under extended production cycles.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Smart Controls & Convenience",
      desc: (
        <span>
          User-friendly PLC interface with automatic/manual control, recipe
          storage, and real-time data display.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Precision Mobile Architecture",
      desc: (
        <span>
          Single-chassis integration of bins, mixer, and control cabin reduces
          setup time and simplifies site relocation.
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
            • Four bins (≈ 7.5 m³ each) with pneumatic gates and vibrator motor.
          </li>
          <li>• 5 mm MS construction; loading height ≈ 5 m.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm 4-ply belt (≈ 8.3 m length).</li>
          <li>• Mounted on load cells (≈ 1.5 m³ capacity).</li>
          <li>
            • Driven by a 15 HP motor with belt scraper and adjustable tension.
          </li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (≈ 0.75 m³)",
      desc: (
        <ul>
          <li>• High-torque planetary mixing for dense, uniform batches.</li>
          <li>• Ni-Hard liners (12 mm) and 600 HB cast blades.</li>
          <li>• Hydraulic discharge with automatic grease pump.</li>
          <li>• Driven by ≈ 30 HP motor via planetary gearbox.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: ≈ 850 kg with 3 load cells and vibrator motor.
          </li>
          <li>
            • Water hopper: ≈ 400 L with 3 load cells and pneumatic valve.
          </li>
          <li>
            • Additive hopper: ≈ 10 L acrylic tank on 50 kg S-type load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor providing 12 kg/cm² pressure.</li>
          <li>
            • Solenoid valves, nylon pipes, and FRL units for reliable
            actuation.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Foldable corrugated steel cabin with 30 mm insulation, LED lights,
            optional AC.
          </li>
          <li>• Houses PLC panel, HMI touchscreen, and data printer.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled-steel mobile chassis with fixed support jacks.</li>
          <li>• Mixer discharge height ≈ 4.0 m for truck loading.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What type of projects is MOBMIX PLUS 45 best for?",
      content: (
        <p>
          Ideal for medium precast yards, SCC production plants, and high-finish
          architectural or fiber-reinforced concretes.
        </p>
      ),
    },
    {
      title: "2. How is it different from twin-shaft or pan mixers?",
      content: (
        <p>
          Planetary mixers offer multi-axis overlapping motion for superior
          homogeneity and surface finish in specialty concretes.
        </p>
      ),
    },
    {
      title: "3. Is the plant automated?",
      content: (
        <p>
          Yes — PLC + HMI automation handles weighing, mixing, and discharge
          cycles, with manual override and optional SCADA monitoring.
        </p>
      ),
    },
    {
      title: "4. What is the power requirement?",
      content: (
        <p>
          Total connected load ≈ 80 HP; Atlas recommends a 100 kVA generator for
          on-site operation.
        </p>
      ),
    },
    {
      title: "5. Can it be paired with cement silos?",
      content: (
        <p>
          Yes — compatible with Atlas vertical (50–100 T) and horizontal (20–40
          T) silos, depending on site layout.
        </p>
      ),
    },
    {
      title: "6. How long does it take to set up?",
      content: (
        <p>
          All modules are pre-wired and pre-tested; the plant can be
          commissioned within a few hours of arrival.
        </p>
      ),
    },
    {
      title: "7. What maintenance is required?",
      content: (
        <p>
          Regular greasing, liner inspection, and periodic replacement of mixing
          tips ensure optimal longevity and mix efficiency.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MOBMIX PLUS 45 Mobile Concrete Batching Plant – 45m³/hr</title>
        <meta
          name="description"
          content="The Atlas MOBMIX PLUS 45 Mobile Concrete Batching Plant with planetary mixer delivers 45 m³/hr for precast, SCC, and specialty concrete applications. PLC + HMI control with optional SCADA."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/VIDEO_ID_HERE"
      videoThumbnail="/images/concrete-plants/mobmix-plus-45-1.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-planetary-mixer/mobmix-plus-45"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/mobmix-plus-45-1.jpg"
        videoUrl="https://www.youtube.com/embed/VIDEO_ID_HERE"
        title={
          "MOBMIX PLUS 45: Precision and Mobility for Modern Precast Applications"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Uniformity, Durability, and On-Site Agility"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose MOBMIX PLUS 45 (Planetary Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PLUS 45 ensures consistent batching accuracy, reduced downtime, and long-term reliability."
        features={featuresGridData}
      />

      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each sub-assembly of the MOBMIX PLUS 45 is optimized for reliability, ease of maintenance, and accurate mobile operation."
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
