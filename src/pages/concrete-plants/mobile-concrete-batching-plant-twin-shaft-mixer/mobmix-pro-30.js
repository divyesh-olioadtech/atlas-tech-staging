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
    "mobile-concrete-batching-plant-twin-shaft",
    "mobmix-pro-30",
  );

  const product = {
    title: "MOBMIX PRO 30 Mobile Concrete Batching Plant (Twin Shaft)",
    subtitle:
      "Twin Shaft Mixer (500 Liters, 30M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PRO 30 Mobile Concrete Batching Plant combines true mobility with the reliable performance of a stationary twin-shaft plant. Built on a single chassis, it delivers high-quality concrete production with fast installation and easy transportation.",

      "Ideal for small-to-medium infrastructure projects, rural bridges, roads, and building works, this mobile plant offers stationary-level quality with faster setup and compact design. With a rated output of 30 m³/hr, the MOBMIX PRO 30 offers flexibility for contractors managing multiple job sites or remote projects.",
    ],
    features: ["Maximum Mobility", "High-Quality Mixing", "Compact Design"],
    // price: "27,50,000",
    images: [
      "/images/concrete-plants/mobmixnewimage-01.webp",
      "/images/concrete-plants/mobmix-pro-30-1.jpeg",
      "/images/concrete-plants/mobmix-pro-30-2.jpg",
      "/images/concrete-plants/mobmix-pro-30-2-new.webp",
      "/images/concrete-plants/mobmix-pro-30-3-new.webp",
      "/images/concrete-plants/mobmix-pro-30-6.jpg",
      "/images/concrete-plants/mobmix-pro-60-2.webp",
    ],
  };

  const faqData = [
    {
      title: "1. How does the MOBMIX PRO 30 compare to a stationary plant?",
      content: (
        <>
          <p>
            It delivers the same mix quality and control as stationary plants
            but with the advantage of faster setup and site-to-site mobility.
          </p>
        </>
      ),
    },
    {
      title: "2. What types of concrete can it produce?",
      content: (
        <>
          <p>
            Suitable for standard RMC, high-strength mixes, PQC, and RCC
            concretes with a slump range from low to high.
          </p>
        </>
      ),
    },
    {
      title: "3. What power supply is recommended?",
      content: (
        <>
          <p>
            Total connected load ≈ 104 HP; Atlas recommends a 100 kVA genset for
            on-site operation.
          </p>
        </>
      ),
    },
    {
      title: "4. Is the plant fully automated?",
      content: (
        <>
          <p>
            Yes — the PLC + HMI system offers automatic batch sequencing, data
            logging, and optional SCADA remote monitoring.
          </p>
        </>
      ),
    },
    {
      title: "5. Can it use a cement silo?",
      content: (
        <>
          <p>
            Yes — compatible with Atlas 100-ton vertical silos and optional
            1.5-ton hopper with 219 mm × 10 m screw conveyor.
          </p>
        </>
      ),
    },
    {
      title: "6. What are the key safety features?",
      content: (
        <>
          <p>
            Emergency stop switches, safety guards over belts and gears,
            interlocked inspection gates, and motor overload protection.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the maintenance requirement?",
      content: (
        <>
          <p>
            Routine lubrication, inspection of liners and blades, and compressor
            filter service keep the plant operational with minimal downtime.
          </p>
        </>
      ),
    },
  ];
  const featureData = [
    {
      title: "Compact 30 m³/hr Output",
      desc: (
        <span>
          Efficient production for small-to-medium concrete works with a 0.5 m³
          twin-shaft mixer delivering 60-second cycles.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-30-1.jpeg",
    },
    {
      title: "Twin Shaft Mixer (750/500 L)",
      desc: (
        <span>
          Atlas-make mixer with wear-resistant Ni-Hard liners, cast-iron blades
          (600 HB), and hydraulic discharge.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-30-2.jpeg",
    },
    {
      title: "Single Chassis Mobile Design",
      desc: (
        <span>
          All major modules (aggregate bins, mixer unit, weighing & control
          cabin) are mounted on one frame for quick relocation and setup.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-30-3.jpeg",
    },
    {
      title: "PLC + HMI Automation",
      desc: (
        <span>
          5.7” colour touch panel (B&R / Delta) with recipe storage, production
          logging, and optional SCADA or Wi-Fi remote operation.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-30-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "True Mobility",
      desc: (
        <span>
          Mounted on a single chassis for fast transport and setup without
          foundation requirements on will mounted.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Stationary-Grade Quality Anywhere",
      desc: (
        <span>
          Twin-shaft mixing delivers uniform strength and workability equal to
          fixed plants.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Compact and Low Power Design",
      desc: (
        <span>
          Smaller footprint and optimized drive systems reduce energy
          consumption and maintenance
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Operator-Friendly Automation",
      desc: (
        <span>
          Fully-automatic PLC desk with manual override ensures smooth control
          and a quick learning curve.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Load-Cell Based Weighing System",
      desc: (
        <span>
          Aggregates, cement, water, and additives are measured on dedicated
          load cells for precise batching.
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
            • Two / Four bins (5 m³ each) made of 5 mm MS plate with pneumatic
            gates and vibrator.
          </li>
          <li>• Loading width 2.87 m; height 5 m.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>
            • 800 mm 4-ply chevron belt (8 m length) with vulcanized joint.
          </li>
          <li>
            • Mounted on four 1800 kg S-type load cells (1 m³ total capacity).
          </li>
          <li>• Driven by a 15 HP gear motor.</li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (750/500 L)",
      desc: (
        <ul>
          <li>• 0.5 m³ batch capacity of vibrated concrete.</li>
          <li>
            • Ni-Hard wear liners (12 mm), 600 HB cast blades, automatic grease
            pump, and emergency manual discharge.
          </li>
          <li>• Powered by dual 12.5 HP motors (25 HP total).</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: 500 kg capacity with 3× 450 kg shear-beam load
            cells with pneumatic discharge.
          </li>
          <li>• Water hopper: 300 L capacity with pneumatic valve.</li>
          <li>
            • Additive hopper: 10 L acrylic tank with 50 kg S-type load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>
            • 3 HP compressor (12 kg/cm² pressure, 10.8 CFM displacement).
          </li>
          <li>• Solenoid valves and nylon pipework for precise air control.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Tiltable corrugated-steel cabin folding into the underframe for
            transport.
          </li>
          <li>
            • Insulated walls (30 mm mineral wool), LED lighting, optional AC,
            and a door with a lock.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>
            • Rolled-steel chassis with fixed support jacks; 3.4 m clearance
            under mixer outlet.
          </li>
          <li>• Includes maintenance platform with ladder and handrails.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Mobile asphalt drum mix plant – 35-30-40 Tph Capacity</title>
        <meta
          name="description"
          content="The 35–40 TPH mobile asphalt drum mix plant from Atlas is suitable for on-site mixing in mid-size projects. Offered by a reliable mobile asphalt drum mix plant manufacturer in India."
        />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/mobmix-pro-30-1.jpeg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-30"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/mobmix-pro-30-1.jpeg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"MOBMIX PRO 30: Stationary Quality in a Mobile Package"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Mobility, Efficiency, and Reliable Mixing"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose MOBMIX PRO 30 (Twin Shaft Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PRO 30 ensures consistent batching accuracy, reduced downtime, and long-term reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Every assembly of the MOBMIX PRO 30 is designed for maximum portability and precision under continuous field operation."
        }
        components={components}
        img= "/images/concrete-plants/mobmix-pro-30-3-new.webp"
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
