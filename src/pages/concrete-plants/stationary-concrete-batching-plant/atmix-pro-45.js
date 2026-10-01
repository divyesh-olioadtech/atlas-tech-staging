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
    "atmix-pro-45",
  );

  const product = {
    title: "ASCB 45/ATMIX PRO-45 | 45 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
    "Mixer: 750 Liters | Twin Shaft (0.75 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 45 T Stationary Concrete Batching Plant delivers efficient, high-precision concrete production for medium-sized projects. With a rated capacity of 45 cubic meters per hour, it ensures consistent output, low maintenance, and long-term dependability for both infrastructure and commercial applications.",
      "Designed for builders and contractors handling urban developments, small bridges, precast units, and municipal roads, the ATMIX PRO 45 T integrates Atlas’s twin-shaft mixing system with PLC-based automation for uniform quality and smooth operation in every batch.",
    ],
    features: ["High Strength", "Consistent Quality", "Compact Reliability"],
    // price: "34,50,000",
    images: [
      "/images/concrete-plants/atmix-pro-45-t-1.jpg",
      "/images/concrete-plants/atmix-pro-45-t-2.jpg",
      "/images/concrete-plants/atmix-pro-45-t-3.jpg",
      "/images/concrete-plants/atmix-pro-45-t-4.jpg",
      "/images/concrete-plants/atmix-pro-45-t-5.jpg",
      "/images/concrete-plants/atmix-pro-45-t-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What types of projects can the ATMIX PRO 45 T handle?",
      content: (
        <>
          <p>
            Ideal for urban construction, precast manufacturing, road
            development, and infrastructure projects requiring medium-scale
            concrete output.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is the batching process?",
      content: (
        <>
          <p>
            All weighing systems—aggregate, cement, water, and additives—use
            high-precision load cells, ensuring uniform batching and zero
            material wastage.
          </p>
        </>
      ),
    },
    {
      title: "3. What mixer is used in this model?",
      content: (
        <>
          <p>
            A twin-shaft mixer (1125/750 L) designed for fast, homogenous mixing
            with Ni-Hard liners and heavy-duty cast blades.
          </p>
        </>
      ),
    },
    {
      title: "4. Is the plant automated?",
      content: (
        <>
          <p>
            Yes. The PLC + HMI system automates weighing, mixing, and discharge,
            with SCADA and Wi-Fi options for remote operation.
          </p>
        </>
      ),
    },
    {
      title: "5. Does the ATMIX PRO 45 T require a cement silo?",
      content: (
        <>
          <p>
            It’s optional — the plant supports either a 2.5-ton cement hopper or
            an external 100-ton silo with a screw conveyor.
          </p>
        </>
      ),
    },
    {
      title: "6. What makes it reliable for long-term operation?",
      content: (
        <>
          <p>
            Heavy-gauge steel structure, anti-wear components, and
            corrosion-resistant coatings ensure long service life in all
            conditions.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement for ATMIX PRO 45 T?",
      content: (
        <>
          <p>
            The total connected load is 128.5 HP, and Atlas recommends a 150 kVA
            generator for optimal operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Optimized for Mid-Sized Projects",
      desc: (
        <span>
          Rated at 45 m³/hr, the plant ensures steady concrete production for
          diverse construction needs without interruption.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-45-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (1125/750 L)",
      desc: (
        <span>
          Produces 0.75 m³ per batch using wear-resistant Ni-Hard liners and
          cast-iron blades for long service life.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-45-t-2.jpeg",
    },
    {
      title: "Advanced PLC + HMI Control",
      desc: (
        <span>
          Siemens/B&R/Delta interface with SCADA-ready functionality for recipe
          storage and production tracking.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-45-t-3.jpeg",
    },
    {
      title: "Efficient Four-Bin Feeding System",
      desc: (
        <span>
          Four 10 m³ bins with pneumatically operated gates and load-cell-based
          proportioning for accurate aggregate feeding.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-45-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          0.75 m³ batches mixed in ~60 seconds with automatic grease lubrication
          and emergency manual discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Setup & Operator Comfort",
      desc: (
        <span>
          Pre-wired units with insulated control cabins enable fast installation
          and easy plant management.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durable, Heavy-Duty Construction",
      desc: (
        <span>
          Rolled steel chassis, PU paint finish, and ISI-grade motors ensure
          corrosion resistance and mechanical stability.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safety & Maintenance Ease",
      desc: (
        <span>
          Guarded drives, emergency stops, and service platforms minimize risk
          and simplify regular upkeep.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Water & Additive Dosing",
      desc: (
        <span>
          Load-cell-mounted hoppers ensure consistent mix ratios and moisture
          levels for durable, high-performance concrete.
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
          <li>• Four bins (10 m³ each) with pneumatic discharge gates.</li>
          <li>• Constructed from 5 mm mild steel with smooth material flow.</li>
          <li>• Fitted with a vibrator for uniform discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm 4-ply vulcanized belt (11.16 m length).</li>
          <li>• Load-cell weighing system (2 m³ total capacity).</li>
          <li>• Equipped with belt scraper and emergency stop switch.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt driven by a 10 HP motor.</li>
          <li>• Adjustable tensioning for steady material transfer.</li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (1125/750 L)",
      desc: (
        <ul>
          <li>• Produces 0.75 m³ of compacted concrete per batch.</li>
          <li>• Ni-Hard liners and cast-iron blades.</li>
          <li>• 415V, 3-phase, 50Hz drive.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 850 kg capacity with 0.25 HP vibrator.</li>
          <li>• Water hopper: 400 L with pneumatic valve.</li>
          <li>• Additive hopper: 10 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor (12 kg/cm² pressure).</li>
          <li>• Solenoid valves, nylon pipes and fittings included.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fixed, insulated steel cabin with LED lighting & AC provision.
          </li>
          <li>• Equipped with PLC, control panel and touchscreen interface.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled-steel chassis with fixed jacks for stability.</li>
          <li>• 4.1 m clearance under mixer outlet for discharge.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-45 | 45 m³/hr Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ATMIX PRO-45 — 45 m³/hr, twin-shaft mixer with Ni-Hard liners, PLC + HMI, load-cell weighing. For RMC plants and mid-scale infrastructure. Get specs and price." />

      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/atmix-pro-45-t-1.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-45"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-45-t-1.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PRO 45 T: Precision Concrete for Every Project"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Tailor-Made for Accuracy, Reliability, and Continuous Output"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 45 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 45 T ensures consistent batching accuracy, reduced downtime, and long-term operational reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each module in the ATMIX PRO 45 T is engineered to deliver reliability, easy access, and consistent concrete quality."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-45-t-5.jpg"
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
