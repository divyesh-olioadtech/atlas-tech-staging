import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import FeatureGrid from "../../../../components/others/FeatureGrid";
import FeatureSlider from "../../../../components/others/FeatureSlider;";
import Productfaq from "../../../../components/others/productFaq";
import ProductSlider2 from "../../../../components/others/productSlider";
import Video from "../../../../components/others/video";
import ProductOverview from "../../../../components/products/productslider";
import ProductSlider from "../../../../components/products/productslider";
import ProductComponentBreakdown from "../../../../components/others/ProductComponentBreakdown";

import Head from "next/head";

import useCategoryProducts from "../../../../hooks/useCategoryProducts";
import ProductSchema from "../../../../components/schema/ProductSchema";

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mobile-concrete-batching-plant-twin-shaft",
    "mobmix-pro-75"
  );

  const product = {
    title: "MOBMIX PRO 75 Mobile Concrete Batching Plant (Twin Shaft)",
    subtitle:
      "Twin Shaft Mixer  (1250 Liters, 60M3/HR)  | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PRO 75 Mobile Concrete Batching Plant combines high-capacity concrete production with full mobility. Delivering 60 m³ per hour, it brings stationary-grade twin-shaft mixing performance to sites that demand fast relocation, short setup times, and reliable on-site concrete supply.",
      "Built for large-scale infrastructure, road, dam, and airport projects, the MOBMIX PRO 60 is a heavy-duty, single-chassis mobile plant engineered for durability, consistency, and ease of operation.",
    ],
    features: ["High Output", "Stationary-Quality Mix", "True Mobility"],
    images: [
        "/images/concrete-plants/mobmix-75-six.webp",
      "/images/concrete-plants/mobmix-75-two.webp",
      "/images/concrete-plants/mobmix-75-one.webp",
      "/images/concrete-plants/mobmix-75-three.webp",
      "/images/concrete-plants/mobmix-75-four.webp",
      "/images/concrete-plants/mobmix-75-five.webp",
      
      
    ],
  };

  const featureData = [
    {
      title: "60 m³/hr Production Capacity",
      desc: (
        <span>
          The high capacity of this plant makes it ideal for high-volume
          concrete demands in infrastructure and RMC projects.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-60-1.jpeg",
    },
    {
      title: "Twin Shaft Mixer (1500/1250 L)",
      desc: (
        <span>
          Produces 1 m³ vibrated concrete per cycle; Ni-Hard bottom (16 mm) and
          side (12 mm) liners, cast-iron blades (600 HB), automatic grease pump,
          and hydraulic discharge.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-60-2.jpeg",
    },
    {
      title: "Mobile Single-Chassis Construction",
      desc: (
        <span>
          Aggregate bins, mixer, and control cabin mounted on a fabricated
          chassis for rapid setup and site relocation.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-60-3.jpeg",
    },
    {
      title: "Smart PLC + HMI Automation",
      desc: (
        <span>
          7&quot; TFT touchscreen (HMI – EXOR / Delta) with recipe storage, data
          logging, USB backup, Ethernet remote access, and optional SCADA/Wi-Fi
          control.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-60-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Stationary-Level Mix Quality",
      desc: (
        <span>
          Twin-shaft mixing achieves uniform density and workability for all
          concrete types, including RCC and PQC.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Rapid Setup & Mobility",
      desc: (
        <span>
          All assemblies are pre-wired and mounted for quick erection without a
          civil foundation.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Heavy-Duty Design for Continuous Use",
      desc: (
        <span>
          PU-painted steel structure, ISI-grade motors, and Atlas quality gear
          units ensure durability in harsh environments.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Operator-Friendly Control",
      desc: (
        <span>
          Fully Automatic and manual modes with recipe control and production
          logging make the plant easy to run and monitor.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Load-Cell Weighing System",
      desc: (
        <span>
          Aggregates, cement, water, and admixtures are individually weighed for
          accurate, consistent mix ratios.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    // {
    //   title: "Mobmix Pro 60 - Plant ",

    //   image: "/images/plants-render/mobmix-pro-60.png",

    //   desc: (
    //     <ul>

    //     </ul>
    //   ),
    // },


    {
      title: "Aggregate Feeder Bins",

      image: "/images/plants-render/aggregator.png",

      desc: (
        <ul>
          <li>• Four bins with pneumatic discharge gates and vibrator.</li>
          <li>• Heavy-duty construction for continuous operation.</li>
        </ul>
      ),
    },

    {
      title: "Weigh Conveyor System",

      image: "/images/plants-render/weigh-one.png",

      desc: (
        <ul>
          <li>• Precision weighing system with load cells.</li>
          <li>• Designed for accurate aggregate feeding.</li>
        </ul>
      ),
    },

    {
      title: "Twin Shaft Mixer (1500/1000 L)",

      image: "/images/plants-render/twin-shaft-mixer.png",

      desc: (
        <ul>
          <li>• Produces uniform concrete mixing.</li>
          <li>• Heavy-duty mixing blades for durability.</li>
        </ul>
      ),
    },

    {
      title: "Cement, Water & Additive Weigh Hoppers",

      image: "/images/plants-render/render-dummy.png",

      desc: (
        <ul>
          <li>• Individual weighing system for accuracy.</li>
          <li>• Ensures consistent concrete quality.</li>
        </ul>
      ),
    },

    {
      title: "Pneumatics & Compressor",

      image: "/images/plants-render/pneumatics.png",

      desc: (
        <ul>
          <li>• Controls pneumatic operations.</li>
          <li>• Reliable air distribution system.</li>
        </ul>
      ),
    },

    {
      title: "Control Cabin",

      image: "/images/plants-render/control.png",

      desc: (
        <ul>
          <li>• Operator-friendly control environment.</li>
          <li>• Easy monitoring and operation.</li>
        </ul>
      ),
    },

    {
      title: "Underframe & Structure",

      image: "/images/plants-render/underframe.png",

      desc: (
        <ul>
          <li>• Strong fabricated chassis design.</li>
          <li>• Built for mobility and transportation.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What type of projects is the MOBMIX PRO 60 best suited for?",
      content: (
        <>
          <p>
            Perfect for large-scale RMC, airport runways, dams, and
            infrastructure projects requiring continuous on-site concrete
            supply.
          </p>
        </>
      ),
    },
    {
      title: "2. How accurate is the batching process?",
      content: (
        <>
          <p>
            All aggregate, cement, water, and additive feeds use load-cell
            weighing under PLC control for ±1% accuracy.
          </p>
        </>
      ),
    },
    {
      title: "3. What kind of concrete can the twin shaft mixer produce?",
      content: (
        <>
          <p>
            Designed for RMC, RCC, PQC, and high-strength structural mixes with
            low or zero slump.
          </p>
        </>
      ),
    },
    {
      title: "4. Is it fully automated?",
      content: (
        <>
          <p>
            Yes – the PLC + HMI system runs automatic batch sequences with
            manual override, USB backup, and optional SCADA monitoring.
          </p>
        </>
      ),
    },
    {
      title: "5. Does the plant support cement silo integration?",
      content: (
        <>
          <p>
            Yes – compatible with Atlas 100 T vertical silo and 10 m screw
            conveyor (219 mm dia).
          </p>
        </>
      ),
    },
    {
      title: "6. What is the power requirement?",
      content: (
        <>
          <p>
            Total connected load ≈ 145 HP; Atlas recommends a 150 kVA generator
            for optimal performance.
          </p>
        </>
      ),
    },
    {
      title: "7. How portable is the MOBMIX PRO 60?",
      content: (
        <>
          <p>
            All modules (pre-wired and pre-tested) mount on a towable chassis;
            setup and commissioning take only a few hours.
          </p>
        </>
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
        videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-60"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/mobmix-75-one.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"MOBMIX PRO 75: Reliable Concrete Production On the Move"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Portability, Consistency, and Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose MOBMIX PRO 75 (Twin Shaft Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PRO 45 ensures consistent batching accuracy, reduced downtime, and long-term reliability."
        features={featuresGridData}
      />
      {/* <ProductComponentBreakdown
        title="Components Breakdown"
        para="Each sub-system of the MOBMIX PRO 45 is engineered for accuracy, safety, and ease of transport."
        components={components}
        img="/images/concrete-plants/mobmix-pro-60-5.JPG"
      /> */}
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each sub-system of the MOBMIX PRO 45 is engineered for accuracy, safety, and ease of transport."
        }
        components={components}
        img="/images/concrete-plants/mobmix-75-six.webp"
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
