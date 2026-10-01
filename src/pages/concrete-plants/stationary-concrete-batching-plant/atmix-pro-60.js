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
    "atmix-pro-60"
  );

  const product = {
    title: "ASCB 60/ATMIX PRO-60 | 60 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 1000 Liters | Twin Shaft (1.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 60 T Stationary Concrete Batching Plant is designed for precision-driven, medium-capacity concrete production. Delivering a rated output of 60 cubic meters per hour, it ensures reliable performance, high batch accuracy, and long-term durability for demanding commercial and infrastructure projects.",
      "Ideal for housing projects, small bridges, roadworks, and RMC applications, the ATMIX PRO 60 T combines Atlas’s proven twin-shaft technology with PLC-controlled automation for optimal efficiency and consistent concrete quality.",
    ],
    features: ["High Accuracy", "Rugged Design", "Continuous Productivity"],
    images: [
      "/images/concrete-plants/atmix-pro-1000-one.jpg",
      "/images/concrete-plants/atmix-pro-1000-three.jpg",
      
      "/images/concrete-plants/atmix-pro-1000-two.jpg",
      "/images/concrete-plants/atmix-pro-1000-four.jpg",
      // "/images/concrete-plants/atmix-pro-1000-five.jpg",
      
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects can ATMIX PRO 60 T handle?",
      content: (
        <>
          <p>
            Perfect for housing developments, road projects, small bridges, and
            ready-mix applications requiring steady mid-range output.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is its batching system?",
      content: (
        <>
          <p>
            The plant’s aggregate, cement, water, and additive weighing systems
            use high-precision load cells for unmatched batching accuracy.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer does it use?",
      content: (
        <>
          <p>
            A twin-shaft mixer (1500/1000 L) built with Ni-Hard liners, 600 HB
            blades, and an automatic grease pump for durable mixing performance.
          </p>
        </>
      ),
    },
    {
      title: "4. Is the plant fully automated?",
      content: (
        <>
          <p>
            Yes. The PLC + HMI system controls weighing, batching, and discharge
            cycles, with SCADA and Wi-Fi options for remote operation.
          </p>
        </>
      ),
    },
    {
      title: "5. Can it work with a cement silo?",
      content: (
        <>
          <p>
            Yes. It supports either a 2.5-ton cement hopper or an external
            100-ton silo with a screw conveyor for bulk feeding.
          </p>
        </>
      ),
    },
    {
      title: "6. How is the plant protected for long-term use?",
      content: (
        <>
          <p>
            Corrosion-resistant PU paint, heavy-duty steel, and ISI-standard
            motors ensure reliable, long-lasting operation.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement for ATMIX PRO 60 T?",
      content: (
        <>
          <p>
            Total connected load is 161 HP, and Atlas recommends a 200 kVA
            genset for optimal power support.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Optimized for High-Demand Projects",
      desc: (
        <span>
          Rated at 60 m³/hr, the plant delivers continuous production for
          mid-to-large-scale infrastructure and RMC jobs.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-60-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (1500/1000 L)",
      desc: (
        <span>
          Produces 1 m³ of compacted concrete per batch with Ni-Hard liners and
          600 HB wear plates for long service life.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-60-t-2.jpeg",
    },
    {
      title: "Smart PLC + HMI Control",
      desc: (
        <span>
          Siemens/B&R/Delta interface with SCADA-ready automation for recipe
          control, production logs, and remote operation.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-60-t-3.jpeg",
    },
    {
      title: "Four-Bin Aggregate Feeding System",
      desc: (
        <span>
          15 m³ bins with pneumatic gates and load-cell monitoring for precise
          aggregate proportioning.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-60-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          1 m³ batches mixed in ~60 seconds with an automatic grease pump and
          manual emergency discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Setup & User-Friendly Design",
      desc: (
        <span>
          Pre-wired structure and insulated control cabin allow easy
          installation and efficient on-site management.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durable Construction for Long Life",
      desc: (
        <span>
          Heavy-duty rolled steel frame, PU paint finish, and ISI-grade motors
          for corrosion and wear protection.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safe and Easy to Maintain",
      desc: (
        <span>
          Safety guards, emergency stops, and maintenance platforms ensure
          secure and hassle-free operation.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Dosing for Water & Additives",
      desc: (
        <span>
          Dedicated load-cell-mounted hoppers ensure consistent water-cement
          ratios and uniform concrete strength.
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
          <li>• Four bins (15 m³ each) with pneumatic discharge gates.</li>
          <li>• Mild steel construction (5 mm thick).</li>
          <li>• One vibrator for smooth, uninterrupted material flow.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm 4-ply vulcanized belt (11.16 m length).</li>
          <li>• Load-cell weighing system (2 m³ total capacity).</li>
          <li>• Belt scraper and emergency stop switch for added safety.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt driven by a 20 HP gear motor.</li>
          <li>• Adjustable tensioning for smooth transfer to the mixer.</li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (1500/1000 L)",
      desc: (
        <ul>
          <li>
            • 1 m³ batch capacity with an automatic pneumatic discharge door.
          </li>
          <li>
            • Ni-Hard liners and cast-iron blades ensure high wear resistance.
          </li>
          <li>• 415V, 3-phase, 50Hz drive with auto grease lubrication.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 850 kg capacity with 0.25 HP vibrator.</li>
          <li>• Water hopper: 400 L with pneumatic butterfly valve.</li>
          <li>• Additive hopper: 10 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 5 HP compressor (12 kg/cm² pressure capacity).</li>
          <li>
            • Fitted with solenoid valves, nylon pipes, and FRLs for precision
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
            • Fixed, insulated steel cabin with LED lighting and AC provision.
          </li>
          <li>• Houses main PLC control desk and touchscreen HMI.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed jacks for a stable setup.</li>
          <li>• 4.14 m clearance under mixer outlet for discharge.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-60 | 60 m³/hr Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ATMIX PRO-60 — 60 m³/hr, twin-shaft mixer, Siemens PLC + HMI, load-cell dosing for cement, water and admixtures. For bridges, roads and RMC plants. Get quote." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-pro-60-t-2.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-60"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-60-t-2.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PRO 60 T: Steady Output, Superior Mix Quality"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Tailored for Accuracy, Reliability, and Continuous Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 60 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 60 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Every assembly in the ATMIX PRO 60 T is engineered for precision, endurance, and operational ease."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-1000-two.jpg"
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
