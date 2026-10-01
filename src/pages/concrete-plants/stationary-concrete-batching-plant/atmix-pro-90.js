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
    "atmix-pro-90",
  );

  const product = {
    title: "ASCB 90/ ATMIX PRO-90 | 90 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 2000 Liters | Twin Shaft (2.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 90 T Stationary Concrete Batching Plant is a powerful, high-output solution for medium-to-large infrastructure projects and commercial concrete production. Delivering 90 cubic meters per hour, it combines intelligent automation, robust structure, and efficient mixing for reliable and continuous operation.",
      "Built for ready-mix producers, precast plants, bridge construction, and large urban projects, the ATMIX PRO 90 T ensures consistent batching precision, energy efficiency, and long-lasting durability under demanding site conditions.",
    ],
    features: ["High Output", "Intelligent Automation", "Proven Reliability"],
    // price: "85,00,000",
    images: [
      "/images/concrete-plants/atmix-pro-90-one.jpg",
      "/images/concrete-plants/atmix-pro-90-two.jpg",
      "/images/concrete-plants/atmix-pro-90-three.jpg",

     "/images/concrete-plants/atmix-pro-90-four.jpg",
     "/images/concrete-plants/atmix-pro-90-five.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects suit the ATMIX PRO 90 T best?",
      content: (
        <>
          <p>
            Ideal for RMC plants, bridge and road projects, industrial
            foundations, and precast applications requiring large, consistent
            output.
          </p>
        </>
      ),
    },
    {
      title: "2. How precise is the batching system?",
      content: (
        <>
          <p>
            All major components—aggregates, cement, water, and additives—use
            load-cell-based weighing, ensuring high accuracy and repeatability.
          </p>
        </>
      ),
    },
    {
      title: "3. What kind of mixer does this plant use?",
      content: (
        <>
          <p>
            A twin-shaft mixer (3000/2000 L) with Ni-Hard liners and high-speed
            cast blades for fast, uniform mixing.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <>
          <p>
            Yes. The PLC + HMI setup automates weighing, mixing, and discharge
            cycles, with SCADA and Wi-Fi for remote operation.
          </p>
        </>
      ),
    },
    {
      title: "5. Does it support a cement silo?",
      content: (
        <>
          <p>
            Yes. It can operate with a 100-ton cement silo and screw conveyor or
            a 2.5-ton hopper for compact setups.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures its long-term reliability?",
      content: (
        <>
          <p>
            Atlas’s use of wear-resistant steel, ISI-certified motors, and PU
            coatings ensures longevity even under continuous operation.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement for ATMIX PRO 90 T?",
      content: (
        <>
          <p>
            The total connected load is 265 HP, and Atlas recommends a 250 kVA
            genset for optimal performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "90 m³/hr Continuous Output",
      desc: (
        <span>
          Delivers steady production for RMC and infrastructure projects,
          meeting high daily demand efficiently.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-90-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (3000/2000 L)",
      desc: (
        <span>
          Produces 2 m³ of vibrated concrete per batch using Ni-Hard liners and
          cast blades for exceptional mixing uniformity.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-90-t-2.jpeg",
    },
    {
      title: "Advanced PLC + HMI System",
      desc: (
        <span>
          Siemens/B&R/Delta automation platform with SCADA readiness for digital
          control, real-time data, and remote access.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-90-t-3.jpeg",
    },
    {
      title: "Four-Bin Aggregate Feeder",
      desc: (
        <span>
          22 m³ bins with pneumatically operated gates and load-cell-controlled
          weighing for precise material proportioning.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-90-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          2 m³ batches mixed in ~80 seconds with an automatic grease system and
          manual emergency discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Fast Setup, Smooth Operation",
      desc: (
        <span>
          Pre-wired units with an insulated, air-conditioned control cabin
          simplify setup and daily operation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durability You Can Count On",
      desc: (
        <span>
          Heavy-duty rolled steel frame, PU paint protection, and
          industrial-grade motors guarantee long service life.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safety and Easy Maintenance",
      desc: (
        <span>
          Emergency stops, guarded drives, and maintenance platforms ensure
          operator safety and quick serviceability.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Water & Additive Management",
      desc: (
        <span>
          Load-cell-mounted hoppers ensure consistent mix moisture and chemical
          dosage for high-quality concrete output.
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
          <li>• Four bins (22 m³ each) with pneumatic gates.</li>
          <li>
            • 5 mm steel construction with smooth, non-stick discharge surfaces.
          </li>
          <li>• One vibrator for consistent material flow.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 1000 mm 4-ply vulcanized belt (12.8 m length).</li>
          <li>• Load-cell weighing capacity of 4.5 m³.</li>
          <li>• Belt scraper and emergency stop switch for safety.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 1000 mm chevron belt driven by a 30 HP motor.</li>
          <li>
            • Adjustable tensioning and robust structure for continuous
            operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (3000/2000 L)",
      desc: (
        <ul>
          <li>
            • 2.0 m³ batch output with automatic pneumatic discharge door.
          </li>
          <li>
            • Ni-Hard liners, cast-iron blades, and 415V, 3-phase, 50Hz drive.
          </li>
          <li>
            • Equipped with auto grease lubrication and a manual release system.
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 1600 kg capacity with vibrator.</li>
          <li>• Water hopper: 700 L with pneumatic butterfly valve.</li>
          <li>• Additive hopper: 20 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 10 HP compressor (10 kg/cm² pressure).</li>
          <li>• Solenoid valves, FRLs, and nylon piping for smooth control.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fixed, insulated steel cabin with LED lights and optional air
            conditioning.
          </li>
          <li>• Houses the PLC, control desk, and touchscreen HMI.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed supports.</li>
          <li>
            • 4.14 m clearance under mixer outlet chute for truck loading.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-90 | 90 m³/hr Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ATMIX PRO-90 — 90 m³/hr, twin-shaft mixer with 600 HB blades, Siemens PLC + SCADA optional, four 25m³ aggregate bins. For large RMC and infrastructure. Get quote." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/atmix-pro-90.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-90"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-90.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PRO 75 T: Designed for Heavy-Duty Productivity"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Productivity, Precision, and Long-Term Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 90 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 90 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PRO 90 T integrates advanced Atlas engineering to ensure high efficiency, ease of maintenance, and uniform concrete quality."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-90-one.jpg"
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
