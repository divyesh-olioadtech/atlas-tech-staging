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
    "atmix-pro-160"
  );

  const product = {
    title: "ASCB 120/ATMIX PRO-160 | 160 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 4000 Liters | Twin Shaft (4.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 160 T Stationary Concrete Batching Plant delivers large-scale concrete production with unmatched precision, strength, and efficiency. With a rated capacity of 160 cubic meters per hour, it is engineered for heavy infrastructure projects that demand high output, reliability, and superior mix consistency.",
      "Built for large commercial projects, highways, precast plants, and industrial infrastructure, the ATMIX PRO 160 T integrates Atlas’s proven twin-shaft mixing technology with advanced PLC automation, ensuring continuous operation and uniform quality across every batch.",
    ],
    features: ["High Productivity", "Accurate Batching", "Rugged Reliability"],
    images: [
      "/images/concrete-plants/atmix-pro-160-five.jpeg",
      "/images/concrete-plants/atmix-pro-160-three.jpeg",
      "/images/concrete-plants/atmix-pro-160-four.jpeg",
      "/images/concrete-plants/atmix-pro-160-one.jpeg",
      "/images/concrete-plants/atmix-pro-160-two.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is ATMIX PRO 160 T best suited for?",
      content: (
        <>
          <p>
            Ideal for large infrastructure, precast manufacturing, RMC supply,
            and industrial projects requiring continuous concrete output.
          </p>
        </>
      ),
    },
    {
      title: "2. How precise is its batching system?",
      content: (
        <>
          <p>
            All major materials, aggregate, cement, water, and additives, are
            weighed using high-accuracy load cells for exact proportioning.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer does it use?",
      content: (
        <>
          <p>
            A twin-shaft mixer (6000/4000 L) with Ni-Hard liners, wear-resistant
            blades, and automatic grease lubrication.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <>
          <p>
            Yes. The PLC + HMI system manages all batching and discharge
            operations, with SCADA and Wi-Fi options for remote control.
          </p>
        </>
      ),
    },
    {
      title: "5. Does it support a cement silo?",
      content: (
        <>
          <p>
            Yes. It can be paired with a 100-ton cement silo and screw conveyor
            or operated with a smaller 2.5-ton hopper setup.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures its long-term reliability?",
      content: (
        <>
          <p>
            High-strength steel, anti-wear Ni-Hard components, and PU coatings
            ensure extended service life under continuous use.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement?",
      content: (
        <>
          <p>
            Total connected load is 410 HP, and Atlas recommends a 600 kVA
            genset for uninterrupted plant operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Reliable 160 m³/hr Output",
      desc: (
        <span>
          Ideal for high-volume RMC and infrastructure projects requiring
          continuous production and minimal downtime.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-160-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (6000/4000 L)",
      desc: (
        <span>
          Produces 4.0 m³ of compacted concrete per batch with Ni-Hard liners
          and cast-iron blades for uniform mixing.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-160-t-2.jpeg",
    },
    {
      title: "Smart PLC + HMI Control",
      desc: (
        <span>
          Siemens PLC system with SCADA compatibility, data storage, USB access,
          and Wi-Fi connectivity for remote operation.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-160-t-3.jpeg",
    },
    {
      title: "Four-Bin Aggregate Feeder",
      desc: (
        <span>
          Four 30 m³ bins with pneumatically operated discharge gates and
          load-cell weighing for precise aggregate feeding.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-160-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Fast and Reliable Mixing Cycle",
      desc: (
        <span>
          4.0 m³ batches mixed in ~90 seconds with an automatic grease system
          and emergency manual discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Assembly & Operator Comfort",
      desc: (
        <span>
          Modular pre-wired design and insulated control cabin enable rapid
          setup and smooth day-to-day operation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durability by Design",
      desc: (
        <span>
          Rolled-steel chassis, PU-coated frame, and industrial-grade motors
          ensure corrosion protection and long life.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safety and Easy Maintenance",
      desc: (
        <span>
          Guarded drives, emergency stops, and service platforms ensure safety
          and quick access for maintenance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Dosing & Water Management",
      desc: (
        <span>
          Dedicated load-cell-mounted cement, water, and additive hoppers ensure
          perfect material ratios and consistent strength.
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
          <li>• Four bins (30 m³ each) with pneumatic discharge gates.</li>
          <li>
            • Heavy 5 mm mild steel construction with one vibrator for smooth
            flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 1000 mm, 4-ply vulcanized belt (13 m length).</li>
          <li>• Load-cell weighing capacity: 5.5 m³.</li>
          <li>• Includes belt scraper and emergency stop switch.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 1000 mm chevron belt driven by a 50 HP gear motor.</li>
          <li>
            • Adjustable tensioning and reinforced structure for continuous
            duty.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (6000/4000 L)",
      desc: (
        <ul>
          <li>• 4.0 m³ batch output with automatic hydraulic discharge.</li>
          <li>
            • Ni-Hard liners and high-wear blades ensure long-term durability.
          </li>
          <li>
            • 415V, 3-phase, 50Hz motor drive with auto grease lubrication.
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 1,900 kg capacity with vibrator.</li>
          <li>• Water hopper: 1,100 L with pneumatic butterfly valve.</li>
          <li>• Additive hopper: 20 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 10 HP compressor delivering 12 kg/cm² pressure.</li>
          <li>
            • Includes FRLs, solenoid valves, and nylon piping for precise
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
            • Fixed, insulated steel cabin with LED lighting and optional air
            conditioning.
          </li>
          <li>
            • Equipped with a PLC control panel and a 7-inch touchscreen HMI.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated rolled-steel chassis with fixed jacks.</li>
          <li>• 4.2 m clearance under mixer outlet for truck loading.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-160 | 160 m³/hr | High-Volume RMC | Atlas India</title>
        <meta name="description" content="ATMIX PRO-160 — 160 m³/hr high-volume batching plant, twin-shaft mixer, SCADA automation. For large RMC and mega infrastructure projects. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-160"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-160-five.jpeg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "ATMIX PRO 160 T: High-Capacity Precision for Heavy-Duty Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Strength, Accuracy, and Continuous Operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 160 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 160 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PRO 160 T integrates precision engineering and durable components for reliable, uninterrupted performance."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-160-four.jpeg"
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
