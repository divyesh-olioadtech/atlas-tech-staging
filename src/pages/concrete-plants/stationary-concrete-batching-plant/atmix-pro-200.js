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
    "atmix-pro-200"
  );

  const product = {
    title: "ASCB 200/ATMIX PRO-200 | 200 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 6000 Liters | Twin Shaft (6.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 200 T Stationary Concrete Batching Plant represents the pinnacle of high-output, heavy-duty concrete production. With a rated capacity of 200 cubic meters per hour, this plant is built for mega infrastructure projects requiring uninterrupted production, superior batching accuracy, and industrial-grade reliability.",
      "Ideal for expressways, dams, airports, industrial foundations, and high-capacity RMC operations, the ATMIX PRO 200 T integrates Atlas’s powerful twin-shaft mixer and advanced PLC automation for seamless control, precision, and continuous performance.",
    ],
    features: ["Maximum Output", "High Precision", "24/7 Performance"],
    images: [
      "/images/concrete-plants/atmixpro-200-component.webp",
      // "/images/concrete-plants/atmix-pro-200-t-1.jpg",
      // "/images/concrete-plants/atmix-pro-200-t-2.jpg",
      // "/images/concrete-plants/atmix-pro-200-t-3.jpg",
      // "/images/concrete-plants/atmix-pro-200-t-4.jpg",
      // "/images/concrete-plants/atmix-pro-200-t-5.jpg",
      // "/images/concrete-plants/atmix-pro-200-t-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is ATMIX PRO 200 T best for?",
      content: (
        <>
          <p>
            Ideal for expressways, dams, airports, metro projects, and
            industrial RMC plants that require continuous high-volume concrete
            supply.
          </p>
        </>
      ),
    },
    {
      title: "2. How precise is the batching system?",
      content: (
        <>
          <p>
            All aggregate, cement, water, and additive systems use load-cell
            measurement for accurate weighing and consistent batch quality.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer is used in this plant?",
      content: (
        <>
          <p>
            A twin-shaft mixer (9000/6000 L) with Ni-Hard liners, cast blades,
            and hydraulic discharge for fast, uniform mixing.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <>
          <p>
            Yes. The PLC + HMI system automates weighing, mixing, and discharge
            cycles and supports SCADA and Wi-Fi remote operation.
          </p>
        </>
      ),
    },
    {
      title: "5. Can it work with a cement silo?",
      content: (
        <>
          <p>
            Yes. The plant supports a 150-ton cement silo and screw conveyor for
            bulk feeding or optional 2.5-ton hopper systems.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures its long-term durability?",
      content: (
        <>
          <p>
            Atlas uses Ni-Hard castings, heavy-gauge steel, PU paint, and
            ISI-standard electrical components for maximum life and minimum
            maintenance.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement?",
      content: (
        <>
          <p>
            Total connected load is 533 HP, and Atlas recommends a 500 kVA
            genset for optimal plant performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Massive 200 m³/hr Output",
      desc: (
        <span>
          Designed for continuous operation across the largest construction and
          RMC projects with uniform batching precision.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-200-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (9000/6000 L)",
      desc: (
        <span>
          Produces 6.0 m³ of compacted concrete per batch with Ni-Hard liners
          and cast-iron blades for high wear resistance.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-200-t-2.jpeg",
    },
    {
      title: "Advanced PLC + HMI Automation",
      desc: (
        <span>
          Fully automated Siemens/Delta/B&R system with SCADA connectivity, data
          storage, and remote control via Wi-Fi or tablet.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-200-t-3.jpeg",
    },
    {
      title: "Four-Bin Aggregate Feeding System",
      desc: (
        <span>
          Four 50 m³ bins with pneumatic gates and load-cell weighing ensure
          accurate aggregate proportioning and steady feed.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-200-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          6.0 m³ batches mixed in ~110 seconds with automatic grease lubrication
          and manual emergency discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Rapid Setup & Operator Efficiency",
      desc: (
        <span>
          Pre-wired construction and a fully insulated control cabin enable
          quick installation and streamlined operation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Industrial-Grade Durability",
      desc: (
        <span>
          Reinforced steel frame, PU finish, Ni-Hard components, and ISI-grade
          motors ensure robustness and corrosion protection.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safe & Easy Maintenance",
      desc: (
        <span>
          Guarded drives, emergency stops, and access platforms simplify
          servicing while ensuring operator safety.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Precision Weighing and Dosing",
      desc: (
        <span>
          Cement, water, and additive hoppers mounted on load cells maintain
          perfect ratios for consistent concrete quality.
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
            • Four bins (50 m³ each) with pneumatically controlled discharge
            gates.
          </li>
          <li>
            • 5 mm mild steel construction with dual vibrators for efficient
            flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 1000 mm 4-ply belt (13 m length).</li>
          <li>• Load-cell capacity: 9 m³.</li>
          <li>• Belt scraper and emergency stop switch included.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 1000 mm chevron belt powered by a 40 HP motor.</li>
          <li>
            • Adjustable tensioning and heavy-duty structure for steady feed.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (9000/6000 L)",
      desc: (
        <ul>
          <li>
            • 6.0 m³ batch capacity with hydraulic discharge and auto grease
            system.
          </li>
          <li>
            • Ni-Hard liners, cast-iron blades, and dual 55 kW motors (4 total =
            300 HP drive).
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: 2,500 kg capacity with vibrator and butterfly
            valve.
          </li>
          <li>• Water hopper: 1,500 L capacity with pneumatic discharge.</li>
          <li>• Additive hopper: 20 kg capacity with S-type load cells.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 15 HP compressor at 12 kg/cm² pressure.</li>
          <li>
            • Fitted with solenoid valves, FRLs, and nylon pipework for
            precision control.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>• Fixed steel cabin with LED lighting and optional AC.</li>
          <li>
            • Houses main PLC control panel and HMI for batching management.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated rolled steel chassis with fixed supports.</li>
          <li>
            • 4.2 m loading clearance beneath the mixer for truck operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-200 | 200 m³/hr | Largest Capacity | Atlas India</title>
        <meta name="description" content="ATMIX PRO-200 — Atlas's largest batching plant at 200 m³/hr. Twin-shaft mixer, full SCADA automation. For mega RMC, expressways and industrial projects. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-200"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmixpro-200-component.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "ATMIX PRO 200 T: High-Capacity Concrete for Mega Infrastructure"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Strength, Scale, and Reliable Performance Everytime"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 200 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 200 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Every module of the ATMIX PRO 200 T is engineered for maximum throughput and durability in continuous production conditions."
        }
        components={components}
        img="/images/concrete-plants/atmixpro-200-component.webp"
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
