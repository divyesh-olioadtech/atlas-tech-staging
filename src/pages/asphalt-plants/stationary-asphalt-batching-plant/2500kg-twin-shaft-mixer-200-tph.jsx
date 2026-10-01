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
    title: "ABP 200 Stationary Asphalt Batch Plant",
    subtitle:
      "200 TPH Production | 2500kg Twin-Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP 200 is a stationary, fully automatic asphalt batching plant built for very high-capacity projects. With its 200 tons per hour rated capacity, 2500 kg twin-shaft mixer, and advanced PLC-based controls",
      "it delivers consistent, large-volume asphalt production for expressways, airports, and national infrastructure projects.",
      "Designed for long service life and efficiency, the ABP 200 features modular construction, durable components, and advanced automation, ensuring reliable operation with minimized downtime.",
    ],
    features: [
      "Extreme Capacity",
      "Intelligent Production",
      "Atlas Durability",
    ],
    images: [
      "/images/sabp/sabp-200-1-new.webp",
      "/images/sabp/sabp-200-2-new.webp",
      
      
      "/images/sabp/abp-260-5.jpg", 
      "/images/sabp/stationary-2000kg-component-two.webp",
      "/images/sabp/stationary-2000kg-component-one.webp",

    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 260?",
      content: (
        <>
          <p>
            The ABP 260 delivers up to <strong>260 TPH</strong> at standard
            conditions (3% aggregate moisture, 150°C output temperature).
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
            Yes, <strong>SMA production</strong> is possible with optional
            system upgrades, such as:
          </p>
          <ul className="pl-5 list-disc">
            <li>
              <strong>Spray bar</strong>
            </li>
            <li>
              <strong>Filler silo</strong>
            </li>
            <li>
              <strong>Extended mixing cycle</strong>
            </li>
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
            <strong>PLC/SCADA-based automatic control system</strong> featuring:
          </p>
          <ul className="pl-5 list-disc">
            <li>Manual override</li>
            <li>Recipe storage</li>
            <li>Real-time monitoring</li>
          </ul>
        </>
      ),
    },
    {
      title: "What makes the ABP 260 suited for mega projects?",
      content: (
        <>
          <p>
            Its high <strong>260 TPH capacity</strong>, modular design, and
            automation make it ideal for:
          </p>
          <ul className="pl-5 list-disc">
            <li>Expressways</li>
            <li>Airport runways</li>
            <li>Large-scale highway projects</li>
          </ul>
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
      image: "/images/sabp/sabp-200-1.jpg",
    },
    {
      title: "Reliable Mixing",
      desc: (
        <span>
          Twin-shaft pugmill mixer delivers{" "}
          <strong>consistent, homogenous asphalt mix</strong> (exact batch size
          to be confirmed with Atlas)
        </span>
      ),
      image: "/images/sabp/sabp-200-2.jpg",
    },
    {
      title: "Dust & Emissions Control",
      desc: (
        <span>
          Large-capacity <strong>baghouse filter</strong> ensures emissions
          within international environmental norms
        </span>
      ),
      image: "/images/sabp/sabp-200-3.jpg",
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
          Supports <strong>RAP and SMA configurations</strong>, enabling more
          eco-friendly asphalt production
        </span>
      ),
      image: "/images/sabp/abp-260-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Modular Construction",
      desc: (
        <span>
          Container-friendly, <strong>modular units</strong> simplify freight,
          installation, and servicing
        </span>
      ),
      icon: "/images/comman/logo/star.png", // Star represents modular excellence
    },
    {
      title: "Efficient Heating",
      desc: (
        <span>
          Counterflow drying drum with <strong>modulating burner</strong> for
          consistent aggregate heating and energy-efficient operation
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Gear/Engineering for heating & mechanical systems
    },
    {
      title: "Accurate Weighing",
      desc: (
        <span>
          Load-cell-based weighing for{" "}
          <strong>aggregates, bitumen, and filler</strong> ensures precise
          dosing
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // Money icon can represent precision/cost saving
    },
    {
      title: "Durable Design",
      desc: (
        <span>
          Heavy-duty dryer, mixer, and bag filter units built for{" "}
          <strong>long service life</strong>
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // Reliable icon for durability
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          Supports RAP addition with optional{" "}
          <strong>cold and hot recycling systems</strong> for reduced costs and
          improved sustainability
        </span>
      ),
      icon: "/images/comman/logo/recycle.png", // Recycle represents RAP recycling
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
      img: "/images/comman/slider.png",
      title: "ABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
      img: "/images/sabp/abp-120-img-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 140",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
      img: "/images/sabp/abp-140-1.jpg",
    },
  {
      // img: "/images/comman/slider.png",
      title: "ABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abponesixty-newfour.jpeg",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 180",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp-180-5.JPG",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "ABP 200",
    //   desc: "2500 Kg | Twin Shaft | 200 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
    //   img: "/images/sabp/abp-200-1.JPG",
    // },
    {
      img: "/images/comman/slider.png",
      title: "ABP 260",
      desc: "3000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-260-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
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
          <li>
            <span className="font-bold">Multi-bin configuration</span> (commonly
            5-bin)
          </li>
          <li>
            <span className="font-bold">Anti-bridging design</span> with
            frequency-controlled feeders
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Multi-deck vibrating screen</span> for
            precise aggregate gradation
          </li>
          <li>
            <span className="font-bold">Conveyor system</span> for smooth
            transfer to dryer
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow type</span> with optimized
            flights
          </li>
          <li>
            <span className="font-bold">Thermocouple monitoring</span> for
            outlet temperature
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Modulating, air-atomized burner</span>{" "}
            (diesel/LDO standard)
          </li>
          <li>
            <span className="font-bold">Optional multi-fuel compatibility</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Cyclone or pre-separator</span> for
            coarse dust recovery
          </li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Reverse-pulse baghouse system</span>
          </li>
          <li>
            <span className="font-bold">Emission compliance</span> ensured
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Insulated tanks</span> with thermic oil
            heating
          </li>
          <li>
            <span className="font-bold">Jacketed pipelines</span> to maintain
            bitumen temperature
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tanks</span> with safety
            features and transfer pumps
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket elevator</span> for
            reliable aggregate transfer
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Screw conveyor with hopper</span>
          </li>
          <li>
            <span className="font-bold">Optional silo + elevator system</span>{" "}
            for high-volume filler
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Heavy-duty pugmill design</span> with
            wear liners
          </li>
          <li>
            <span className="font-bold">Air-operated wide discharge gate</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              Aggregate, bitumen, and filler weigh hoppers
            </span>{" "}
            with load cells
          </li>
          <li>
            <span className="font-bold">Automatic accumulating</span> and
            individual weighing
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              PLC/SCADA-based fully automatic control
            </span>{" "}
            with manual override
          </li>
          <li>
            <span className="font-bold">Mix recipe storage, alarms</span> and
            production data logging
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 200 | 200 TPH | Airport & Highway Ready | Atlas India</title>
        <meta name="description" content="ABP 200 — 200 TPH, 2500kg twin-shaft mixer, RAP & SMA integration, SCADA automation. Built for national highways, expressways and airport runways. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/ucP7KRs2Fdk"
      videoThumbnail="/images/sabp/abp-200-1.JPG"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/sabp-200-1.jpg"
        videoUrl="https://www.youtube.com/embed/ucP7KRs2Fdk"
        title={"See the ABP (200) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (200) a leader in ultra-high-capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Why is the ABP (200) the ultimate choice for large-scale asphalt production?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/sabp/stationary-2000kg-component-one.webp"
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
