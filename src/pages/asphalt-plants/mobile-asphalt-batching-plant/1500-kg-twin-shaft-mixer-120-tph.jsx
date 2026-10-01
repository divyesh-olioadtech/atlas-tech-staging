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
    title: "MABP 120 Mobile Asphalt Batch Plant",
    subtitle:
      "120 TPH Production | 1500 kg Twin-Shaft Mixer | Containerized & RAP Ready",
    description: [
      "The MABP 120 is a mobile, containerized asphalt batching plant designed for high-volume projects requiring flexibility. With a rated capacity of 120 tons per hour and a 1500 kg twin-shaft mixer, it delivers reliable mix quality for highways, airports, and large-scale urban projects.",
      "The MABP 120 offers Atlas’s advanced automation, modular containerized design, and RAP compatibility, making it an ideal choice for contractors working across multiple locations.",
    ],
    features: [
      "High-Capacity Mobility",
      "Proven Performance",
      "Built to Excel",
    ],
    images: [
      "/images/mabp/twin1500kg-seven.webp",
      "/images/mabp/twin1500kg-four.webp",
      "/images/mabp/twin1500kg-one.webp",
      // "/images/mabp/twin1500kg-two.webp",
      "/images/mabp/twin1500kg-three.webp",
      "/images/mabp/twin1500kg-five.webp",
      "/images/mabp/twin1500kg-six.webp",
      
    ],
  };

  const faqData = [
    {
      title: "What is the capacity of the MABP 120?",
      content: (
        <>
          <p>
            The MABP 120 produces up to 120 TPH, assuming 3% moisture and 150°C
            output temperature.
          </p>
        </>
      ),
    },
    {
      title: "Can it handle RAP?",
      content: (
        <>
          <p>Yes, RAP integration is supported with optional systems.</p>
        </>
      ),
    },
    {
      title: "How is it transported?",
      content: (
        <>
          <p>
            A fully containerized design makes it easy to move between sites.
          </p>
        </>
      ),
    },
    {
      title: "What type of automation is included?",
      content: (
        <>
          <p>
            A PLC-based control panel with recipe storage, alarms, and manual
            override.
          </p>
        </>
      ),
    },
    {
      title: "What type of projects is it suited for?",
      content: (
        <>
          <p>Airports, highways, and large urban infrastructure projects.</p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Modular & Mobile",
      desc: (
        <span>
          Containerized design enables <strong>easy transport</strong> and{" "}
          <strong>rapid setup</strong>.
        </span>
      ),
      image: "/images/mabp/mabp-120-01.webp",
    },
    {
      title: "Consistent Mixing",
      desc: (
        <span>
          Twin-shaft mixer (<strong>1500 kg</strong>) ensures{" "}
          <strong>uniform coating of aggregates</strong>.
        </span>
      ),
      image: "/images/mabp/mabp-120-02.webp",
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          Baghouse filtration with <strong>reverse-pulse cleaning</strong> keeps
          emissions within international limits.
        </span>
      ),
      image: "/images/mabp/mabp-120-03.webp",
    },
    {
      title: "Automation & Control",
      desc: (
        <span>
          <strong>PLC-based system</strong> with recipe storage, alarms, and
          manual override for reliable operation.
        </span>
      ),
      image: "/images/mabp/mabp-120-04.webp",
    },
    {
      title: "RAP Ready",
      desc: (
        <span>
          A single <strong>hydra crane</strong> is all it takes to dismantle and
          rebuild at new locations.
        </span>
      ),
      image: "/images/mabp/mabp-120-05.webp",
    },
  ];

  const featuresGridData = [
    {
      title: "Quick Relocation",
      desc: (
        <span>
          Container-friendly construction{" "}
          <strong>reduces installation costs and time</strong>.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Efficient Drying",
      desc: (
        <span>
          Counterflow dryer with <strong>modulating burner</strong> provides{" "}
          <strong>energy-efficient performance</strong>.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Accurate Weighing",
      desc: (
        <span>
          <strong>Load-cell-supported hoppers</strong> ensure precision in
          dosing aggregates, filler, and bitumen.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Durability",
      desc: (
        <span>
          <strong>Wear-resistant mixer liners</strong> and{" "}
          <strong>heavy-duty dryer construction</strong> ensure long service
          life.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Eco-Friendly",
      desc: (
        <span>
          Supports <strong>RAP usage</strong> and{" "}
          <strong>efficient dust control systems</strong>.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png",
    },
  ];

  const products = [
    {
      img: "/images/mabp/mabpnewtwo.webp",
      title: "MABP 80",
      desc: "1000 Kg | Twin Shaft | 80 TPH",
      url: "/asphalt-plants/mobile-asphalt-batching-plant/1000-kg-twin-shaft-mixer-80-tph",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MABP (120) Mixer",
    //       desc: "1500 Kg | Twin Shaft | 120 TPH",
    //       url: "/asphalt-plants/mobile-asphalt-batching-plant/mabp-120-mixer-1500-kg-twin-shaft-mixer-120-t-h",
    //     },
    {
      img: "/images/mabp/MABP 160/mabp-160-03.png",
      title: "MABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/mobile-asphalt-batching-plant/2000-kg-twin-shaft-mixer-160-tph",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            Multi-bin configuration with{" "}
            <span className="font-bold">frequency-controlled drives</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Multi-deck screen</span> for precise
            gradation
          </li>
          <li>
            <span className="font-bold">Inclined conveyor</span> for smooth
            feeding to the dryer
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow design</span> with optimized
            flights
          </li>
          <li>
            <span className="font-bold">Temperature monitoring</span> at the
            outlet
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Modulating burner</span> (diesel/LDO
            standard)
          </li>
          <li>
            <span className="font-bold">Optional FO/gas/CNG compatibility</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              Cyclone/pre-separator for coarse fines recovery
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              Reverse-pulse baghouse with emissions ≤0.1 g/m³
            </span>
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
            heating and jacketed pipelines
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tanks</span> with a safe
            transfer system
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket elevator</span> for hot
            material transfer
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Screw conveyor</span> with optional
            high-volume silo
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">1500 kg twin-shaft mixer</span>
          </li>
          <li>
            <span className="font-bold">Wide discharge gate</span> for complete
            emptying
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Load-cell supported weighing</span> for
            aggregates, bitumen, and filler
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC-based system</span> with recipe
            storage, alarms, and manual override
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MABP 120 | 120 TPH Mobile Batch Plant | 1500kg | Atlas India</title>
        <meta name="description" content="MABP 120 — 120 TPH mobile asphalt batch plant, 1500kg twin-shaft mixer, trailer-mounted for fast site relocation. RAP-capable. Get specs and quote from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/dOTi765du5o"
      videoThumbnail="/images/mabp/mabp-120-06.webp"
        pageUrl="/asphalt-plants/mobile-asphalt-batching-plant/1500-kg-twin-shaft-mixer-120-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/mabp/mabp-120-06.webp"
        videoUrl="https://www.youtube.com/embed/dOTi765du5o"
        title={"Watch the MABP (120) in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what sets the MABP (120) apart as a leader in mobile asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Performance Meets Portability"
        subtitle="Why is the MABP (120) the top choice for large-scale projects?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Finely-Engineered Mobile Components"}
        para={
          "Each component of the Mobile Asphalt Batch Mixing Plant (MABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/mabp/twin1500kg-seven.webp"
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
