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

export default function MOBMIXPLUS30() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "stationary-concrete-batching-plant-mobmix",
    "mobmix-plus-30"
  );

  const product = {
    title: "MOBMIX PLUS 30 Mobile Concrete Batching Plant (Planetary Mixer)",
    subtitle:
      "Planetary Mixer (500 Liters, 30M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PLUS 30 brings together planetary-mixer precision and true mobile batching flexibility. Designed for specialty and precast concrete applications, it produces 30 m³ of high-quality concrete per hour, with superior homogeneity and control.",
      "Ideal for small precast yards, SCC production, fiber-reinforced concretes, and architectural finishes, this mobile plant ensures consistent concrete properties with minimal setup time and low operational cost. Mounted on a single chassis, the MOBMIX PLUS 30 offers quick setup, easy relocation, and efficient performance for contractors who need both mobility and mix perfection.",
    ],
    features: ["Precision Mixing", "Compact Mobility", "Reliable Automation"],
    images: [
      "/images/concrete-plants/atmix-plus-30-planetary-1.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-2.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-3.jpg",
      "/images/concrete-plants/atmix-plus-30-planetary-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "30 m³/hr Rated Output",
      desc: (
        <span>
          Ideal for specialty concrete works and small-scale precast production
          requiring repeatable quality.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-30-1.jpg",
    },
    {
      title: "Planetary Mixer (≈ 0.5 m³ Batch)",
      desc: (
        <span>
          Multi-directional, overlapping mixing blades ensure complete material
          circulation, best for SCC, high-strength, and coloured concrete.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-30-2.jpg",
    },
    {
      title: "Mobile Single-Chassis Layout",
      desc: (
        <span>
          Compact, towable design integrates bins, mixer, and control cabin on
          one frame for fast site setup and relocation.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-30-3.jpg",
    },
    {
      title: "Replaceable Wear Components",
      desc: (
        <span>
          Ni-Hard liners and wear-resistant mixing blades ensure longevity and
          reduce maintenance downtime.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-plus-30-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Superior Mix Uniformity",
      desc: (
        <span>
          Planetary mixer provides high shear and complete blending, critical
          for SCC, UHPC, and precast concretes.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Compact Mobility",
      desc: (
        <span>
          All modules are pre-wired and pre-tested for quick assembly. It can be
          easily towed to new sites.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Reliable Automation",
      desc: (
        <span>
          Siemens/B&R PLC system ensures accurate dosing and real-time
          monitoring with auto/manual control modes.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Durable Build Quality",
      desc: (
        <span>
          Fabricated steel chassis, PU paint finish, and industrial-grade motors
          guarantee longevity and ruggedness.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "PLC + HMI Automation",
      desc: (
        <span>
          Load-cell-based batching with recipe storage, production logging, and
          optional SCADA/Wi-Fi for remote access and monitoring.
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
          <li>• Four bins (≈ 5 m³ each) with pneumatic discharge gates.</li>
          <li>• 5 mm MS plate construction; vibrator for material flow.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>
            • 800 mm 4-ply belt (≈ 8 m length) mounted on load cells (1 m³
            capacity).
          </li>
          <li>
            • Driven by a 15 HP motor with a troughed idler frame and belt
            scraper.
          </li>
        </ul>
      ),
    },
    {
      title: "Planetary Mixer (≈ 0.5 m³ Batch)",
      desc: (
        <ul>
          <li>
            • Six-arm planetary mixing mechanism with Ni-Hard tips and 12 mm
            replaceable liners.
          </li>
          <li>• Automatic discharge door and grease lubrication system.</li>
          <li>• Driven by a 20 HP motor through a planetary gearbox.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper ≈ 500 kg capacity with vibrator and 3 load cells.
          </li>
          <li>• Water hopper ≈ 300 L with pneumatic valve and 3 load cells.</li>
          <li>• Additive tank ≈ 10 L on 50 kg S-type load cell.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor (≈ 12 kg/cm² pressure).</li>
          <li>
            • Cylinders, solenoid valves, and nylon tubing for precise control.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Insulated steel foldable cabin with LED lighting and optional AC.
          </li>
          <li>• PLC panel with HMI touchscreen and USB data logging.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled-steel mobile chassis with support jacks.</li>
          <li>• Mixer discharge height ≈ 3.8–4.0 m for truck loading.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. Why use a planetary mixer in a mobile plant?",
      content: (
        <p>
          Planetary mixers provide overlapping blade motion for uniform
          dispersion. It’s ideal for SCC, UHPC, and architectural concretes.
        </p>
      ),
    },
    {
      title: "2. How mobile is the MOBMIX PLUS 30?",
      content: (
        <p>
          Fully mounted on a single towable chassis with foldable legs and
          pre-wired modules for fast relocation.
        </p>
      ),
    },
    {
      title: "3. What types of concrete can it produce?",
      content: (
        <p>
          Handles SCC, fiber-reinforced, colored, precast, and standard RMC
          mixes.
        </p>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <p>
          Yes — PLC + HMI automates batch sequences, with manual override and
          optional SCADA integration for remote monitoring.
        </p>
      ),
    },
    {
      title: "5. What power does it require?",
      content: (
        <p>
          Total connected load ≈ 55–60 HP; Atlas recommends a 75 kVA generator
          for optimal performance.
        </p>
      ),
    },
    {
      title: "6. Can it be paired with cement silos?",
      content: (
        <p>
          Yes — compatible with Atlas vertical (50–100 T) or horizontal (20–40
          T) silos, depending on site height limitations.
        </p>
      ),
    },
    {
      title: "7. What makes it different from pan or twin-shaft plants?",
      content: (
        <p>
          Planetary mixers offer more homogeneous blending and higher
          workability for specialty mixes while retaining mobility.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          MOBMIX PLUS 30 Mobile Concrete Batching Plant – Planetary Mixer
        </title>
        <meta
          name="description"
          content="The MOBMIX PLUS 30 Mobile Concrete Batching Plant with Planetary Mixer delivers 30 m³/hr high-precision specialty concrete production with PLC + HMI automation."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/mobmix-plus-30-1.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-planetary-mixer/mobmix-plus-30"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/mobmix-plus-30-1.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"MOBMIX PLUS 30 (Planetary): Specialty Concrete with Precision"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Accuracy, Mobility, and Performance"
        features={featureData}
      />
      <FeatureGrid
        title="Why Choose MOBMIX PLUS 30 (Planetary Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PLUS 30 ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each system in the MOBMIX PLUS 30 is optimized for precision batching, smooth operation, and field mobility."
        }
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
