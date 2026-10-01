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
    "atmix-pro-120",
  );

  const product = {
    title: "ASCB 120/ATMIX PRO-120 | 120 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 3000 Liters | Twin Shaft (3.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 120 T Stationary Concrete Batching Plant is engineered for high-volume concrete production with exceptional precision and efficiency. Delivering 120 cubic meters per hour, it is built to perform in large-scale commercial, industrial, and infrastructure projects demanding continuous, high-strength concrete output.",
      "Tailored for ready-mix producers, industrial complexes, metro projects, and large bridge or road developments, the ATMIX PRO 120 T integrates advanced twin-shaft mixing technology with intelligent PLC automation to maximize output consistency and minimize cycle time.",
    ],
    features: ["High Capacity", "Heavy-Duty Design", "Intelligent Automation"],
    // price: "1,20,00,000",
    images: [
      "/images/concrete-plants/atmix-120-newpage.webp",
      "/images/concrete-plants/atmix-pro-120-t-1.png",
      
      "/images/concrete-plants/atmix-pro-120-t-3.JPG",
      "/images/concrete-plants/atmix-pro-120-t-4.JPG",
      "/images/concrete-plants/atmix-pro-120-t-5.JPG",
      // "/images/concrete-plants/atmix-pro-120-t-6.JPG",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is ATMIX PRO 120 T ideal for?",
      content: (
        <>
          <p>
            Perfect for RMC plants, metro and bridge projects, industrial sites,
            and large-scale infrastructure requiring continuous concrete output.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is the batching system?",
      content: (
        <>
          <p>
            All weighing systems — aggregates, cement, water, and additives —
            use load-cell technology for consistent and precise material dosing.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer does this model use?",
      content: (
        <>
          <p>
            A twin-shaft mixer (4500/3000 L) with Ni-Hard liners and 600 HB
            blades, ensuring homogenous and dense concrete in every batch.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <>
          <p>
            Yes. The Siemens PLC + HMI system automates all batching functions,
            with SCADA and Wi-Fi connectivity for remote monitoring and control.
          </p>
        </>
      ),
    },
    {
      title: "5. Does the plant support a cement silo?",
      content: (
        <>
          <p>
            Yes. It’s compatible with a 100-ton cement silo and screw conveyor
            system, or can operate with a 2.5-ton hopper for smaller setups.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures long service life?",
      content: (
        <>
          <p>
            Heavy-duty steel fabrication, PU coating, and precision-engineered
            parts ensure durability and low maintenance over years of operation.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement?",
      content: (
        <>
          <p>
            The total connected load is 355 HP, and Atlas recommends a 320 kVA
            genset for uninterrupted operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Reliable 120 m³/hr Output",
      desc: (
        <span>
          Ideal for high-demand RMC plants and infrastructure works needing
          continuous, precise concrete supply.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-120-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (4500/3000 L)",
      desc: (
        <span>
          Produces 3.0 m³ per batch with Ni-Hard liners, 600 HB blades, and
          hydraulic discharge for consistent, dense mixing.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-120-t-2.jpeg",
    },
    {
      title: "PLC + HMI Control with SCADA",
      desc: (
        <span>
          Siemens S7-1200 PLC with data logging, USB connectivity, and
          Wi-Fi-enabled remote operation for total batching control.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-120-t-3.jpeg",
    },
    {
      title: "Four-Bin Aggregate Feeder",
      desc: (
        <span>
          Four 25 m³ bins with pneumatic discharge gates and load-cell
          monitoring for uniform material feeding.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-120-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "High-Efficiency Mixing Cycle",
      desc: (
        <span>
          3.0 m³ batches mixed in ~90 seconds with automatic grease lubrication
          and manual discharge backup.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Setup, Easy Operation",
      desc: (
        <span>
          Pre-wired system with insulated, air-conditioned control cabin for
          comfortable and efficient plant management.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Rugged and Long-Lasting",
      desc: (
        <span>
          Heavy-gauge steel structure, PU finish, and ISI-standard motors ensure
          strength and corrosion protection in all environments.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Built for Safety and Maintainability",
      desc: (
        <span>
          Equipped with emergency stops, guarded drives, and accessible
          platforms for safe and simple maintenance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Weighing & Dosing",
      desc: (
        <span>
          Load-cell-based cement, water, and additive hoppers ensure precise
          proportioning and consistent batch quality.
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
          <li>• Four bins (25 m³ each) with pneumatically operated gates.</li>
          <li>• Mild steel (5 mm) construction for longevity.</li>
          <li>• One vibrator for efficient discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 1000 mm, 4-ply vulcanized belt (12.8 m length).</li>
          <li>• Load-cell weighing system with 4.5 m³ capacity.</li>
          <li>• Includes belt scraper and emergency stop switch.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 1000 mm chevron belt powered by a 40 HP gear motor.</li>
          <li>
            • Adjustable tensioning and robust design for smooth transfer.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (4500/3000 L)",
      desc: (
        <ul>
          <li>• 3.0 m³ batch capacity with automatic hydraulic discharge.</li>
          <li>
            • Ni-Hard liners and anti-wear blades for long-term reliability.
          </li>
          <li>• 415V, 3-phase, 50Hz drive system with auto grease pump.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 2,000 kg capacity with vibrator motor.</li>
          <li>• Water hopper: 1,200 L with pneumatic butterfly valve.</li>
          <li>• Additive hopper: 20 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 15 HP compressor delivering 10 kg/cm² pressure.</li>
          <li>
            • Solenoid valves, FRLs, and nylon pipes for reliable operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fixed, insulated steel cabin with LED lighting and AC option.
          </li>
          <li>
            • Equipped with main PLC panel, touchscreen HMI, and data printer.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Heavy rolled steel chassis with fixed jacks.</li>
          <li>• 4.2 m clearance under mixer outlet chute for truck loading.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-120 | 120 m³/hr | 3000L Mixer | SCADA | Atlas</title>
        <meta name="description" content="ATMIX PRO-120 — 120 m³/hr, 4500/3000L twin-shaft mixer, Siemens S7-1200 PLC + SCADA, Wi-Fi remote operation. For high-volume RMC and infrastructure. Get specs." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/atmix-pro-120-t-1.png"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-120"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-120-t-1.png"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "ATMIX PRO 120 T: High-Volume Precision, Engineered for Performance"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Accuracy, Durability, and Continuous Operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 120 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 120 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Every module of the ATMIX PRO 120 T is engineered for high throughput, precise weighing, and durability under continuous production."
        }
        components={components}
        img= "/images/concrete-plants/atmix-pro-120-t-3.JPG"
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
