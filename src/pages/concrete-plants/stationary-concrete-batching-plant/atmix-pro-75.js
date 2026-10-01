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
    "atmix-pro-75",
  );

  const product = {
    title: "ASCB 75/ATMIX PRO-75 | 75 m³/hr | Stationary Concrete Batching Plant",
    subtitle:
      "Mixer: 1200 Liters | Twin Shaft (1.0 m³/batch) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas ATMIX PRO 75 T Stationary Concrete Batching Plant delivers robust performance and precise concrete production for mid-to-large construction projects. With a rated capacity of 75 cubic meters per hour, this plant combines high-efficiency mixing, accurate weighing, and automated operation for consistent results under continuous load conditions.",
      "Ideal for RMC producers, industrial foundations, multi-storey structures, and infrastructure works, the ATMIX PRO 75 T merges Atlas’s twin-shaft mixing technology with PLC-based automation to ensure strength, uniformity, and smooth production cycles.",
    ],
    features: ["High Accuracy", "Rugged Design", "Continuous Productivity"],
    // price: "48,00,000",
    images: [
      
     "/images/concrete-plants/atmix-pro-1000-three.jpg",
     "/images/concrete-plants/atmix-pro-1000-two.jpg",
      "/images/concrete-plants/atmix-pro-1000-one.jpg",
      
      
      "/images/concrete-plants/atmix-pro-1000-five.jpg",
      "/images/concrete-plants/atmix-pro-1000-four.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What types of projects is the ATMIX PRO 75 T ideal for?",
      content: (
        <>
          <p>
            Perfect for RMC plants, multi-storey construction, industrial
            complexes, and infrastructure projects requiring continuous,
            high-capacity concrete supply.
          </p>
        </>
      ),
    },
    {
      title: "2. How precise is the batching system?",
      content: (
        <>
          <p>
            All major components, aggregate, cement, water, and additives, are
            load-cell integrated, ensuring consistent, high-accuracy batching.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of mixer is used in this model?",
      content: (
        <>
          <p>
            A twin-shaft mixer (1875/1250 L) with Ni-Hard liners, 600 HB blades,
            and hydraulic discharge for fast, homogenous mixing.
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
            cycles, with SCADA and Wi-Fi remote operation options.
          </p>
        </>
      ),
    },
    {
      title: "5. Does it require a cement silo?",
      content: (
        <>
          <p>
            Optional. The plant supports a 2.5-ton cement hopper or a 100-ton
            silo with a screw conveyor for large-scale operations.
          </p>
        </>
      ),
    },
    {
      title: "6. What ensures its long-term durability?",
      content: (
        <>
          <p>
            Atlas uses heavy-duty steel framing, PU paint protection, and
            ISI-certified motors for corrosion resistance and structural
            strength.
          </p>
        </>
      ),
    },
    {
      title: "7. What is the power requirement?",
      content: (
        <>
          <p>
            The total connected load is 175 HP, and Atlas recommends a 300 kVA
            genset for optimal performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Reliable 75 m³/hr Output",
      desc: (
        <span>
          Delivers continuous production for RMC plants and mid-size
          infrastructure projects with high accuracy and uniformity.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-75-t-1.jpeg",
    },
    {
      title: "Twin-Shaft Mixer (1875/1250 L)",
      desc: (
        <span>
          Produces 1.2 m³ per batch using wear-resistant Ni-Hard liners and cast
          blades for exceptional durability and mix quality.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-75-t-2.jpeg",
    },
    {
      title: "PLC + HMI Control with SCADA Option",
      desc: (
        <span>
          Fully automated batching with remote access, recipe storage, and
          real-time monitoring through Siemens/B&R/Delta systems.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-75-t-3.jpeg",
    },
    {
      title: "Four-Bin Feeder Design",
      desc: (
        <span>
          Four 15 m³ bins with pneumatic gates and load-cell proportioning
          ensure steady, uninterrupted aggregate flow.
        </span>
      ),
      image: "/images/concrete-plants/atmix-pro-75-t-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Mixing Cycle",
      desc: (
        <span>
          1.25 m³ batches mixed in ~60 seconds with automatic grease lubrication
          and emergency manual discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Installation & Operator Comfort",
      desc: (
        <span>
          Pre-wired assemblies and an insulated control cabin for fast setup and
          efficient management.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Built to Last",
      desc: (
        <span>
          Heavy-duty rolled steel chassis, PU paint finish, and ISI-grade motors
          ensure strength and corrosion resistance.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safe and Service-Friendly Design",
      desc: (
        <span>
          Guarded drives, emergency stops, and elevated access platforms make
          operation and maintenance simple and safe.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Water & Additive Control",
      desc: (
        <span>
          Load-cell-mounted hoppers maintain consistent water-cement ratios for
          uniform strength and workability.
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
          <li>• Heavy-duty 5 mm mild steel construction.</li>
          <li>• Single vibrator for smooth aggregate discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>• 800 mm, 4-ply vulcanized belt (11.16 m length).</li>
          <li>• Load-cell weighing (2 m³ total capacity).</li>
          <li>• Fitted with belt scraper and emergency stop switch.</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>• 800 mm chevron belt powered by 15 HP motor.</li>
          <li>
            • Adjustable tensioning for steady transfer and reduced spillage.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (1875/1250 L)",
      desc: (
        <ul>
          <li>• 1.25 m³ batch output with automatic hydraulic discharge.</li>
          <li>• Ni-Hard liners and cast-iron blades for extended lifespan.</li>
          <li>• 415V, 3-phase, 50Hz drive system with auto grease pump.</li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>• Cement hopper: 850 kg capacity with vibrator motor.</li>
          <li>• Water hopper: 400 L capacity with pneumatic valve.</li>
          <li>• Additive hopper: 10 L acrylic tank for precision dosing.</li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 7.5 HP compressor with 12 kg/cm² pressure.</li>
          <li>
            • Solenoid valves, FRLs, and nylon pipework for reliable actuation.
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
          <li>• Houses PLC-based control panel and touchscreen HMI.</li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Rolled steel chassis with fixed jacks for stability.</li>
          <li>• 4.1 m clearance under mixer outlet for truck loading.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ATMIX PRO-75 | 75 m³/hr Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ATMIX PRO-75 — 75 m³/hr, twin-shaft mixer, PLC + HMI automation, four-bin aggregate feeder. For highway and large commercial projects. Get specs from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/atmix-pro-75.jpg"
        pageUrl="/concrete-plants/stationary-concrete-batching-plant/atmix-pro-75"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/atmix-pro-75.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"ATMIX PRO 75 T: Designed for Heavy-Duty Productivity"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Tailored for Capacity, Accuracy, and Long-Term Durability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ATMIX PRO 75 T"
        subtitle="Built for dependable, low-maintenance operation, the ATMIX PRO 75 T ensures consistent batching accuracy, reduced downtime, and long-term structural reliability"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ATMIX PRO 75 T integrates proven Atlas engineering with modular components for reliable, high-precision concrete production."
        }
        components={components}
        img="/images/concrete-plants/atmix-pro-1000-one.jpg"
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
