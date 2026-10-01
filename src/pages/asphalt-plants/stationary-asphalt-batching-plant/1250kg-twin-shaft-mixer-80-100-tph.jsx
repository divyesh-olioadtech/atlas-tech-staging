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
    title: "ABP 100 Stationary Asphalt Batch Plant",
    subtitle: "100 TPH Production | 1250kg Twin Shaft Mixer | RAP & SMA Ready",
    description: [
      "The Atlas ABP 100 is a high-performance stationary asphalt batching plant engineered for medium-to-large-scale projects. With its 100 tons per hour output, robust twin-shaft mixer, and advanced automation, it delivers a consistent quality mix for highways, airports, and infrastructure projects.",
      "The ABP 100 combines durability and efficiency with modular construction for quick installation and easy servicing. Designed to minimize downtime and maximize productivity, it’s a plant trusted by contractors worldwide.",
    ],
    features: ["Easy to Use", "Cost-Efficient", "Durable Structure"],
    images: [
      "/images/sabp/abp_80_1.JPG",

      "/images/sabp/abp_80_4.JPG",

      "/images/sabp/abp_80_3.JPG",

      "/images/sabp/abp_80_5.JPG",
      
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 100?",
      content: (
        <>
          <p>
            The <span className="font-bold">ABP 100</span> produces up to{" "}
            <span className="font-bold">100 TPH</span> with a{" "}
            <span className="font-bold">1,250 kg batch size</span> and{" "}
            <span className="font-bold">80 mixing cycles per hour</span>,
            assuming 3% moisture and 150°C output temperature.
          </p>
        </>
      ),
    },
    {
      title: "Does the ABP 100 support RAP usage?",
      content: (
        <>
          <p>
            Yes, it supports up to{" "}
            <span className="font-bold">40% cold RAP</span> and{" "}
            <span className="font-bold">60% hot RAP</span> with the optional{" "}
            <span className="font-bold">HRC system</span>.
          </p>
        </>
      ),
    },
    {
      title: "What type of control system does the plant use?",
      content: (
        <>
          <p>
            It uses a{" "}
            <span className="font-bold">
              PLC-based fully automatic sequence control system
            </span>{" "}
            with <span className="font-bold">manual override</span>,{" "}
            <span className="font-bold">free-fall compensation</span>, and
            storage for <span className="font-bold">50+ mix designs</span>.
          </p>
        </>
      ),
    },
    {
      title: "What dust emission levels does the plant achieve?",
      content: (
        <>
          <p>
            The <span className="font-bold">reverse-pulse bag filter</span>{" "}
            limits dust emissions to{" "}
            <span className="font-bold">≤0.1 g/m³</span>, meeting international
            standards.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 100 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <>
          <p>
            Yes, with optional upgrades including an{" "}
            <span className="font-bold">SMA-specific bitumen spray bar</span>,
            an <span className="font-bold">additional filler silo</span>, and{" "}
            <span className="font-bold">extended mixing time settings</span>.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Production",
      desc: "Delivers up to 100 TPH output with 1,250 kg batch size and 80 cycles per hour, ensuring continuous supply for medium-to-large scale road projects.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Precision Mixing",
      desc: "Twin-shaft pugmill mixer with replaceable wear liners provides uniform mixing, maintaining ±5°C temperature accuracy across batches.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Energy-Efficient Drying",
      desc: "Counterflow dryer drum with optimized flights and a 7 MW modulating burner ensures maximum heating efficiency and consistent aggregate quality.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Smart Automation",
      desc: "PLC-based control system with real-time monitoring, auto free-fall compensation, and storage of 50+ mix designs for complete process flexibility.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Sustainable Operation",
      desc: "Supports use of RAP with optional cold and hot recycling systems (up to 40% cold RAP and 60% hot RAP with HRC system).",
      image: "/images/comman/slider.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Reduced Transport Costs",
      desc: "Modular container-friendly design simplifies transport and installation.",
      icon: "/images/comman/logo/money.png", // Transport & cost efficiency
    },
    {
      title: "Accurate Weighing",
      desc: "Dedicated load cells for aggregates, bitumen, and filler ensure high-precision batching.",
      icon: "/images/comman/logo/campus.png", // Accuracy / weighing → scale icon
    },
    {
      title: "Reliable Operation",
      desc: "Replaceable wear parts and heavy-duty design minimize downtime.",
      icon: "/images/comman/logo/reliable.png", // Reliability → reliable
    },
    {
      title: "RAP Integration",
      desc: "Cold and hot recycling options support sustainable asphalt production.",
      icon: "/images/comman/logo/recycle.png", // Recycling → recycle
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_4.JPG",
      title: "ABP 80",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
      img: "/images/sabp/abp_80_4.JPG",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "ABP 100",
    //   desc: "1250 Kg | Twin Shaft | 80-100 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
    //   img: null,
    // },
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
    {
      img: "/images/comman/slider.png",
      title: "ABP 200",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
      img: "/images/sabp/abp-200-1.JPG",
    },
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
            <span className="font-bold">4 bins</span>, 7 m³ each (28 m³ total)
          </li>
          <li>
            <span className="font-bold">Frequency-controlled drives</span> for
            accurate feeding
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Oversized material removal</span>{" "}
            (&gt;40 mm)
          </li>
          <li>
            <span className="font-bold">Inclined design</span> for smooth
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
            <span className="font-bold">Counterflow design</span>, 1.54 m × 6.0
            m
          </li>
          <li>
            <span className="font-bold">Abrasion-resistant steel lining</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Fuel Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">7 MW modulating burner</span>{" "}
            (diesel/LDO standard)
          </li>
          <li>
            <span className="font-bold">Optional compatibility</span> with
            FO/gas/CNG
          </li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Cyclone separator</span> for fines
            recovery
          </li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">168 bags</span>, 225 m² filter area
          </li>
          <li>
            <span className="font-bold">Reverse-pulse cleaning system</span>
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
            <span className="font-bold">Jacketed pipelines</span> to prevent
            heat loss
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tanks</span>, 5,000–30,000 L
            capacity
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket elevator</span> rated
            for 300°C
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Standard setup</span>: screw conveyor &
            hopper
          </li>
          <li>
            <span className="font-bold">Optional system</span>: silo and
            elevator for bulk filler
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Deck Vibrating Screen",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Multiple decks</span> for precise
            aggregate grading
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Storage Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Compartmentalized bins</span> with 0.5s
            response time
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">1250 kg batch capacity</span>
          </li>
          <li>
            <span className="font-bold">Air-operated discharge gate</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Aggregate</span>: 2120 kg
          </li>
          <li>
            <span className="font-bold">Bitumen</span>: 180 kg
          </li>
          <li>
            <span className="font-bold">Filler</span>: 225 kg
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC-based system</span> with touchscreen
            HMI
          </li>
          <li>
            <span className="font-bold">Mix design storage</span> (50+ recipes)
            with manual override
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          ABP 100 | 80–100 TPH | 1250kg Mixer | Atlas Technologies India
        </title>
        <meta
          name="description"
          content="ABP 100 — 80–100 TPH, 1250kg twin-shaft mixer, baghouse filter, PLC automation. RAP-capable. Get full specs and factory quote from Atlas Technologies."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
      videoThumbnail="/images/sabp/abp_80_1.JPG"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp_80_1.JPG"
        videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
        title={"See the ABP (100) Stationary Asphalt Batch Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover the advanced engineering behind our ABP Series (100) Stationary Asphalt Batch Plants"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Designed for Efficiency"
        subtitle="Delivering reliable asphalt production solutions to over 50 countries, the ABP (100) is built to exceed expectations."
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img ="/images/sabp/abp_80_1.JPG"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={"ABP (100) Stationary Asphalt Batch Plant"} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
