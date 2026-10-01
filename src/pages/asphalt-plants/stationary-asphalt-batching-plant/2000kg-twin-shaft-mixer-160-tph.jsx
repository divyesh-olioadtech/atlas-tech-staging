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
    title: "ABP 160 Stationary Asphalt Batch Plant",
    subtitle: "160 TPH Production | 2000kg Twin Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP 160 is a stationary, fully automatic asphalt batching plant engineered for large-scale, high-output projects. With its 160 tons per hour rated capacity, 2000 kg twin-shaft mixer, and advanced PLC-based controls, it consistently delivers high-quality asphalt mix for highways, expressways, airports, and heavy-duty infrastructure projects.",
      "Built for performance and long service life, the ABP 160 combines modular construction with durable components to minimize downtime and maximize productivity. Key advantages include: High Capacity, Precision, Reliability.",
    ],
    features: ["High Capacity", "Precision", "Reliability"],
    images: [
      "/images/sabp/abponesixty-newfive.jpeg",
      "/images/sabp/abponesixty-newone.jpeg",
      // "/images/sabp/asphaltbatchingseven.webp",
      "/images/sabp/abponesixty-newtwo.jpeg",
     "/images/sabp/abponesixty-newthree.jpeg",
      "/images/sabp/abponesixty-newfour.jpeg",
      "/images/sabp/abponesixty-newsix.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 160?",
      content: (
        <p>
          The ABP 160 delivers up to 160 TPH with a 2000 kg batch size and 80
          mixing cycles per hour, based on 3% aggregate moisture and 150°C
          output temperature.
        </p>
      ),
    },
    {
      title: "Can the ABP 160 use RAP?",
      content: (
        <p>
          Yes, it supports up to 40% cold RAP and 60% hot RAP with the optional
          HRC system.
        </p>
      ),
    },
    {
      title: "What makes the ABP 160’s twin-shaft mixer effective?",
      content: (
        <p>
          It delivers 2000 kg batch capacity, with wear-resistant liners,
          specially designed arms, and homogenous mixing performance.
        </p>
      ),
    },
    {
      title: "How efficient is the dust collection system?",
      content: (
        <p>
          The baghouse filter has 252 bags with 330 m² filtration area, keeping
          emissions ≤0.1 g/m³.
        </p>
      ),
    },
    {
      title: "Can the ABP 160 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <p>
          Yes, with optional upgrades such as a dedicated SMA spray bar,
          additional filler silo, and extended mixing time adjustment.
        </p>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Volume Production",
      desc: "160 TPH rated output with 2000 kg batch size, supporting up to 80 mixing cycles per hour",
      image: "/images/sabp/abp-160-new-1.png",
    },
    {
      title: "Precision Mixing",
      desc: "Twin-shaft pugmill mixer with replaceable wear liners ensures uniform mixing and consistent asphalt quality",
      image: "/images/sabp/abp-160-new-2.png",
    },
    {
      title: "Dust Emission Control",
      desc: "Baghouse filter with 330 m² filtration area and 252 bags reduces dust emissions to ≤0.1 g/m³",
      image: "/images/sabp/abp-160-new-3.png",
    },
    {
      title: "Automated Controls",
      desc: "PLC-based automatic sequence control with manual override, mix design storage (50+), alarms, and free-fall compensation",
      image: "/images/sabp/abp-160-new-4.png",
    },
    {
      title: "Sustainable Operation",
      desc: "Supports up to 40% cold RAP and 60% hot RAP with HRC system; SMA and foam bitumen production possible with optional accessories",
      image: "/images/sabp/abp-160-new-5.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Optimized Transport & Setup",
      desc: "Modular, container-friendly construction simplifies freight and installation",
      icon: "/images/comman/logo/star.png", // you can replace with a suitable icon if needed
    },
    {
      title: "Energy-Efficient Drying",
      desc: "Counterflow dryer drum (2.1 m × 8.0 m) with optimized flights and 11 MW modulating burner for reliable heating performance",
      icon: "/images/comman/logo/globe.png",
    },
    {
      title: "Accurate Weighing",
      desc: "Aggregate hopper: 2600 kg, Bitumen: 180 kg, Filler: 225 kg — all supported by dedicated load cells",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Reliable Operation",
      desc: "Heavy-duty construction, wear-resistant liners, and centralized lubrication reduce downtime",
      icon: "/images/comman/logo/recycle.png",
    },
    {
      title: "RAP Integration",
      desc: "Designed for cold and hot recycling, enabling sustainable production and reduced material costs",
      icon: "/images/comman/logo/money.png",
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_4.JPG",
      title: "ABP 80",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
    },
    {
      img: "/images/sabp/abp_80_1.JPG",
      title: "ABP 100",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
      img: "/images/sabp/abp-120-img-1.jpg",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 140",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
      img: "/images/sabp/abp-140-1.jpg",
    },
    // {
    //   // img: "/images/comman/slider.png",
    //   title: "ABP 160",
    //   desc: "2000 Kg | Twin Shaft | 160 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
    //   img: "/images/sabp/abponesixty-newfour.jpeg",
    // },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 180",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp-180-5.JPG",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 200",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
      img: "/images/sabp/abp-200-1.JPG",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 260",
      desc: "3000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-260-1.JPG",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 320",
      desc: "5000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-320-1.jpg",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>4 bins, 10 m³ each (40 m³ total capacity)</li>
          <li>Anti-bridging design and variable-speed drives</li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>4-deck vibrating screen, 160 TPH capacity</li>
          <li>Quick-change panels, oversize rejection system</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>Counterflow type, 2.1 m × 8.0 m</li>
          <li>Max outlet temperature: 300°C</li>
        </ul>
      ),
    },
    {
      title: "Multi-Fuel Burner System",
      desc: (
        <ul>
          <li>11 MW modulating burner (diesel/LDO standard)</li>
          <li>Optional FO/gas/CNG compatibility</li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>Cyclone separator with fines return conveyor</li>
        </ul>
      ),
    },
    {
      title: "Advanced Bag Filter Unit",
      desc: (
        <ul>
          <li>252 bags, 330 m² filtration area</li>
          <li>Reverse-air pulse cleaning; ≤0.1 g/m³ emissions</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Two insulated tanks, 30,000 liters each</li>
          <li>Thermic oil heating with jacketed pipelines</li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>Vertical tank, up to 18,000 liters capacity</li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>Enclosed bucket elevator, 170 TPH capacity</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>Standard: 3T hopper with screw conveyor</li>
          <li>Optional: high-volume silo + elevator system</li>
        </ul>
      ),
    },
    {
      title: "Multi-Deck Vibrating Screen",
      desc: (
        <ul>
          <li>4-deck design with duplex springs</li>
          <li>Circular motion reduces clogging</li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Storage Bins",
      desc: (
        <ul>
          <li>4 compartments, 12 m³ total</li>
          <li>Pneumatic gates with sampling ports</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>2000 kg batch capacity</li>
          <li>Wide opening air-operated discharge gate</li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>Aggregate: 2600 kg</li>
          <li>Bitumen: 180 kg</li>
          <li>Filler: 225 kg</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>PLC-based with touchscreen HMI</li>
          <li>
            Stores 50+ mix designs, with safety interlocks and manual override
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 160 | 160 TPH | CNG Burner Option | Atlas Technologies</title>
        <meta name="description" content="ABP 160 — 160 TPH, 2000kg twin-shaft mixer, CNG natural gas burner option available, RAP-ready, SCADA automation. Multi-fuel burner standard. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/P4KKLAW9dcs"
      videoThumbnail="/images/sabp/abp-160-new-3.png"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/asphaltbatchingone-1700-component.webp"
        videoUrl="https://www.youtube.com/embed/P4KKLAW9dcs"
        title={"See the ABP (160) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (160) a leader in high-capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Why is the Stationary Asphalt Batch Plants (ABP) the ultimate choice for asphalt production in the road construction industry?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the ABP (160) is designed for maximum efficiency and reliability"
        }
        img="/images/sabp/abponesixty-newfour.jpeg"
        components={components}
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
