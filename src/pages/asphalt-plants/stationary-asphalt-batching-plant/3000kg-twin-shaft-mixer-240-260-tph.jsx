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
import ProductSchema from "../../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "ABP 260 Stationary Asphalt Batch Plant",
    subtitle:
      "Up to 260 TPH Production | 3000kg Twin-Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP Series 260 is a stationary, fully automatic asphalt batching plant designed for very high-capacity projects. With a rated output of up to 260 tons per hour (at 3% aggregate moisture and 150°C output temperature), it is ideal for mega projects such as highways, airports, and expressways.",
      "The ABP 260 combines Atlas’s proven durability with modular construction for easier transport, quick setup, and reliable operation in large-scale asphalt production.",
    ],
    // price: "4,15,00,000",
    features: [
      "Extreme Capacity",
      "Intelligent Production",
      "Atlas Durability",
    ],
    images: [
      "/images/sabp/asphalt-stationary-3000-new-five.webp",
      "/images/sabp/asphalt-stationary-3000-new-one.webp",
      "/images/sabp/asphalt-stationary-3000-new-two.webp",
      "/images/sabp/asphalt-stationary-3000-new-three.webp",
     "/images/sabp/asphalt-stationary-3000-new-four.webp",
      "/images/sabp/asphalt-stationary-3000-new-six.webp",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 260?",
      content: (
        <>
          <p>
            The ABP 260 delivers up to <strong>260 TPH</strong> at standard
            conditions (<strong>3% aggregate moisture</strong>,{" "}
            <strong>150°C output temperature</strong>).
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 260 handle RAP?",
      content: (
        <>
          <p>
            Yes, it supports <strong>RAP integration</strong> with optional cold
            and hot recycling systems.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 260 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <>
          <p>
            Yes, SMA production is possible with optional system upgrades such
            as:
          </p>
          <ul className="pl-5 list-disc">
            <li>Spray bar</li>
            <li>Filler silo</li>
            <li>Extended mixing cycle</li>
          </ul>
        </>
      ),
    },
    {
      title: "What type of control system does the ABP 260 use?",
      content: (
        <>
          <p>
            It is equipped with a{" "}
            <strong>PLC/SCADA-based automatic control system</strong> featuring
            manual override, recipe storage, and real-time monitoring.
          </p>
        </>
      ),
    },
    {
      title: "What makes the ABP 260 suited for mega projects?",
      content: (
        <>
          <p>
            Its high <strong>260 TPH capacity</strong>, modular design, and
            automation make it ideal for <strong>expressways</strong>,{" "}
            <strong>airport runways</strong>, and{" "}
            <strong>large-scale highway projects</strong>.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Design",
      desc: (
        <span>
          Rated up to <strong>260 TPH</strong> production capacity at standard
          conditions
        </span>
      ),
      image: "/images/sabp/abp-260-1.JPG",
    },
    {
      title: "Reliable Mixing",
      desc: (
        <span>
          Twin-shaft pugmill mixer delivers consistent, homogenous asphalt mix{" "}
          <em>(exact batch size to be confirmed with Atlas)</em>
        </span>
      ),
      image: "/images/sabp/abp-260-2.jpg",
    },
    {
      title: "Dust & Emissions Control",
      desc: (
        <span>
          Large-capacity <strong>baghouse filter</strong> ensures emissions
          within <strong>international environmental norms</strong>
        </span>
      ),
      image: "/images/sabp/abp-260-3.jpg",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          <strong>PLC/SCADA-based system</strong> with manual override,
          free-fall compensation, alarms, and mix design storage (50+ recipes)
        </span>
      ),
      image: "/images/sabp/abp-260-4.jpg",
    },
    {
      title: "Sustainable Operation",
      desc: (
        <span>
          Supports <strong>RAP</strong> and <strong>SMA</strong> configurations,
          enabling more eco-friendly asphalt production
        </span>
      ),
      image: "/images/sabp/abp-260-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Global Leadership",
      desc: "2500+ installations across every geographic region - across the continents",
      icon: "/images/comman/logo/globe.png", // Globe represents worldwide dominance
    },
    {
      title: "24/7 Mega-Project Support",
      desc: (
        <span>
          <strong>48 hours</strong> guaranteed parts delivery worldwide from{" "}
          <strong>6 continental warehouses</strong>
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // Rapid emphasizes fast response time
    },
    {
      title: "Custom Engineering",
      desc: (
        <span>
          Plant configurations are tailored to{" "}
          <strong>local materials, climates, and project requirements</strong>
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Engineering represents technical customization
    },
    {
      title: "Sustainability at Scale",
      desc: (
        <span>
          Up to <strong>30% RAP integration</strong> reduces carbon footprint of
          your project
        </span>
      ),
      icon: "/images/comman/logo/recycle.png", // Recycle clearly shows RAP focus
    },
    {
      title: "Best Return-on-Investment",
      desc: (
        <span>
          <strong>Lowest cost per ton</strong> in the{" "}
          <strong>260TPH class</strong> in the entire industry
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // Direct ROI representation
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_4.JPG",
      title: "ABP (80) Mixer",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
    },
    {
      img: "/images/sabp/abp_80_1.JPG",
      title: "ABP (100) Mixer",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
    },
    {
      img: "/images/sabp/abp-120-img-1.jpg",
      title: "ABP (120) Mixer",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
    },
    {
      img: "/images/sabp/abp-140-1.jpg",
      title: "ABP (140) Mixer",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
    },
    {
      img: "/images/sabp/abponesixty-newfour.jpeg",
      title: "ABP (160) Mixer",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
    },
    {
      img: "/images/sabp/abp-180-5.JPG",
      title: "ABP (180) Mixer",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
    },
    {
      img: "/images/sabp/abp-200-1.JPG",
      title: "ABP (200) Mixer",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
    },
    {
      img: "/images/sabp/abp-320-1.jpg",
      title: "ABP (320) Mixer",
      desc: "5000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph",
    },
    {
      img: "/images/sabp/abp-400-1.jpg",
      title: "ABP (400) Mixer",
      desc: "10000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/10000kg-twin-shaft-mixer-240-260-tph",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>Multi-bin configuration (commonly 5-bin)</li>
          <li>Anti-bridging design with frequency-controlled feeders</li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>Multi-deck vibrating screen for precise aggregate gradation</li>
          <li>Conveyor system for smooth transfer to dryer</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>Counterflow type with optimized flights</li>
          <li>
            Equipped with a thermocouple for outlet temperature monitoring
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>Modulating, air-atomized burner (diesel/LDO standard)</li>
          <li>Optional multi-fuel compatibility</li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>Cyclone or pre-separator for coarse dust recovery</li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>Reverse-pulse baghouse system</li>
          <li>Ensures compliance with emission norms</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Insulated tanks with thermic oil heating</li>
          <li>Jacketed pipelines to maintain bitumen temperature</li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>Vertical tanks with safety features and transfer pumps</li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>Enclosed bucket elevator for reliable aggregate transfer</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>Screw conveyor with hopper</li>
          <li>Optional silo + elevator system for high-volume filler</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>Heavy-duty pugmill design with wear liners</li>
          <li>Air-operated wide discharge gate</li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing System",
      desc: (
        <ul>
          <li>Aggregate, bitumen, and filler weigh hoppers with load cells</li>
          <li>Automatic accumulating and individual weighing</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>PLC/SCADA-based fully automatic control with manual override</li>
          <li>Mix recipe storage, alarms, and production data logging</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 260 | Stationary Asphalt Batching Plant | Atlas Technologies</title>
        <meta name="description" content="ABP 260 — 240 TPH, 3000kg twin-shaft mixer, RAP up to 60%, SMA-ready, CPCB-compliant baghouse, SCADA automation. For mega highway and expressway projects. Get specs." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/b5X7lYPn-WM"
        videoThumbnail="/images/sabp/abp-260-1.JPG"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp-260-1.JPG"
        videoUrl="https://www.youtube.com/embed/b5X7lYPn-WM"
        title={"See the ABP (260) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (260) a leader in top-notch quality and capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Why is the ABP (260) the right choice for mega-scale asphalt production?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/sabp/new-component.webp"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
