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
    "atmix-pro-30"
  );

  const product = {
    title: "ASCB 30/ATMIX PRO-30 | 30 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 500 Liters | Twin Shaft (0.5 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 30 T Stationary Concrete Batching Plant is a compact yet powerful solution designed for consistent, high-quality concrete production. With a rated output of 30 cubic meters per hour, this model combines precision batching, durable construction, and automation to deliver superior performance in confined or urban job sites.",
      "Ideal for small-to-medium concrete works, such as building foundations, municipal roads, and precast applications. The ATMIX PRO 30 T integrates Atlas’s robust, PAN MIXER, PLANETARY MIXER & twin-shaft mixing technology with PLC-based automation for optimum accuracy and reduced operational downtime.",
    ],
    features: ["High Consistency", "Compact Design", "Smart Automation"],
    images: [
      "/images/concrete-plants/atmix-pro-30-4.JPG",
      "/images/concrete-plants/atmix-pro-30-5.JPG",
      "/images/concrete-plants/atmix-pro-30-6.JPG",
      "/images/concrete-plants/atmix-pro-30-1.jpg",
      "/images/concrete-plants/atmix-pro-30-2.jpg",
      "/images/concrete-plants/atmix-pro-30-3.JPG",
    ],
  };

  const faqData = [
    {
      title: "1. What kind of projects is ATMIX PRO 30 T best suited for?",
      content: (
        <>
          <p>
            Ideal for urban construction, municipal projects, precast units, and
            rural infrastructure works where compact setup and consistent output
            are essential.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is the batching system?",
      content: (
        <>
          <p>
            All major components, aggregate, cement, water, and additives, are
            load-cell-based, ensuring precise material proportioning and
            consistent output.
          </p>
        </>
      ),
    },
    {
      title: "3. What kind of mixer does it use?",
      content: (
        <>
          <p>
            An Atlas twin-shaft mixer with wear-resistant Ni-Hard liners and
            automatic grease lubrication for long service life and homogenous
            mixing.
          </p>
        </>
      ),
    },
    {
      title: "4. Can it be operated remotely or automated?",
      content: (
        <>
          <p>
            Yes. The plant includes a PLC + HMI system supporting SCADA, Wi-Fi
            connectivity, and remote control via tablet or smartphone.
          </p>
        </>
      ),
    },
    {
      title: "5. Is a cement silo required for ATMIX PRO 30 T?",
      content: (
        <>
          <p>
            Optional. It can feed cement via a 1.5-ton cement hopper and screw
            conveyor or through an external 100-ton silo for higher production
            needs.
          </p>
        </>
      ),
    },
    {
      title: "6. What makes this model durable for long-term use?",
      content: (
        <>
          <p>
            Atlas uses Ni-Hard cast components and ISI-grade motors to ensure
            corrosion resistance and long operational life.
          </p>
        </>
      ),
    },
    {
      title: "7. How much power does the plant require?",
      content: (
        <>
          <p>
            Total connected load is 122.5 HP, and Atlas recommends a 150 kVA
            genset for optimal performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Compact Output, Big Performance",
      desc: (
        <span>
          30 m³/hr rated output for reliable, consistent production in
          small-to-medium jobs.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-30-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer, Pan Mixer & Planetary Mixer(750/500 L)",
      desc: (
        <span>
          Fast, homogeneous mixing with Ni-Hard liners and cast-iron blades for
          long life.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-30-t-2.jpeg",
    },
    {
      title: "PLC Control with Remote Access",
      desc: (
        <span>
          HMI touchscreen (Siemens/B&R/Delta) + SCADA-ready; remote monitoring
          and mobile operation.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-30-t-3.jpeg",
    },
    {
      title: "Four-Bin Feeder System",
      desc: (
        <span>
          Four individual 7.5 m³ bins with pneumatic gates and load-cell
          proportioning for steady fee.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-30-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          0.5 m³ batches mixed in ~60s with the auto grease system and manual
          emergency discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Installation & Operator Comfort",
      desc: (
        <span>
          Pre-wired units plus insulated control cabin for fast setup and
          comfortable operation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durability by Design",
      desc: (
        <span>
          Rolled-steel chassis, PU finish, guarded drives, and ISI-grade motors
          for corrosion and wear resistance.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safety & Maintainability",
      desc: (
        <span>
          Guarding, emergency stops, easy-access platforms and replaceable wear
          parts reduce downtime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Water & Additive Dosing",
      desc: (
        <span>
          Load-cell hoppers deliver precise water and chemical dosing to ensure
          mix consistency.
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
          <li>• Four bins (7.5 m³ each) with pneumatic gates.</li>
          <li>• Mild steel construction (5 mm thick).</li>
          <li>• Single vibrator only in the sand bin for smooth discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm, 4-ply vulcanized belt (11.16 m length).</li>
          <li>• Load-cell-based weighing (1 m³ total capacity).</li>
          <li>• Emergency stop switch and belt scraper for safety.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt for material transfer to the mixer.</li>
          <li>• 10 HP gear motor with adjustable tensioning system.</li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (750/500 L)",
      desc: (
        <ul>
          <li>• 0.5 m³ batch capacity with automatic discharge door.</li>
          <li>• Ni-Hard wear liners and 600 HB cast iron blades.</li>
          <li>• 415V, 3-phase, 50Hz drive system.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 500 kg capacity with 0.25 HP vibrator.</li>
          <li>• Water hopper: 300 L capacity with pneumatic valve.</li>
          <li>• Additive hopper: 10 L transparent acrylic tank.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor with 12 kg/cm² pressure capacity.</li>
          <li>
            • Cylinders, solenoid valves, and nylon piping for reliability.
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
          <li>• Houses main control panel and HMI terminal.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed support jacks.</li>
          <li>• 4.1 m loading height under mixer outlet chute.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-30 | 30 m³/hr Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ATMIX PRO-30 — 30 m³/hr, twin-shaft mixer, load-cell weighing, PLC control. For RMC, building foundations and infrastructure. Get specs and price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-30"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-30-t-4.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "ATMIX PRO 30 T: Compact Power for Consistent Concrete Production"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Tailor Made for Strength, Accuracy, and Durability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 30 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 30 T ensures consistent output, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PRO 30 T integrates all essential modules of a professional-grade batching plant, engineered to deliver accuracy and long service life."
        }
        components={components}
        img=  "/images/concrete-plants/atmix-pro-30-2.jpg"
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
