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
    title: "MABP 160 Mobile Asphalt Batch Plant",
    subtitle:
      "160 TPH Production | 2000 kg Twin-Shaft Mixer | Containerized & RAP Ready",
    description: [
      "The MABP 160 is Atlas’s largest standard mobile asphalt batching plant, delivering up to 160 tons per hour with a 2000 kg twin-shaft mixer. It is engineered for national highways, airport runways, and mega projects that demand continuous high-volume asphalt supply.",
      "The containerized modular design makes the MABP 160 easy to transport and install, while its automation and RAP compatibility ensure efficiency and sustainability.",
    ],
    features: [
      "Mega-Output Mobility",
      "Industrial-Grade Reliability",
      "Unmatched Flexibility",
    ],
    images: [
      "/images/mabp/MABP 160/mabp-160-01.png",
      "/images/mabp/MABP 160/mabp-160-02.png",
      "/images/mabp/MABP 160/mabp-160-03.png",
      // "/images/mabp/MABP 160/mabp-160-04.png",
      // "/images/mabp/MABP 160/mabp-160-05.png",
      "/images/mabp/MABP 160/mabp-160-06.png",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the MABP 160?",
      content: (
        <p>
          The MABP 160 produces up to <strong>160 TPH</strong>, based on 3%
          moisture and 150°C output.
        </p>
      ),
    },
    {
      title: "Does it support RAP usage?",
      content: (
        <p>
          Yes, RAP integration is supported through optional{" "}
          <strong>cold and hot recycling systems</strong>.
        </p>
      ),
    },
    {
      title: "What automation is included?",
      content: (
        <p>
          The plant features a <strong>PLC-based control panel</strong> with{" "}
          alarms, recipe storage, and manual override for full operational
          control.
        </p>
      ),
    },
    {
      title: "How is it transported?",
      content: (
        <p>
          The MABP 160 is <strong>fully containerized</strong>, allowing for
          quick transport and easy site setup without special equipment.
        </p>
      ),
    },
    {
      title: "What type of projects suit the MABP 160?",
      content: (
        <p>
          Ideal for <strong>highways, expressways, airport runways,</strong> and
          other <strong>mega infrastructure projects</strong> requiring high
          output and mobility.
        </p>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Production",
      desc: (
        <span>
          <strong>160 TPH rated output</strong> with{" "}
          <strong>2000 kg mixing capacity</strong>.
        </span>
      ),
      image: "/images/mabp/MABP 160/mabp-160-01.png",
    },
    {
      title: "Modular Mobility",
      desc: (
        <span>
          <strong>Container-friendly construction</strong> simplifies shipping
          and site setup.
        </span>
      ),
      image: "/images/mabp/MABP 160/mabp-160-02.png",
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          <strong>Baghouse filtration</strong> with reverse-pulse cleaning.
        </span>
      ),
      image: "/images/mabp/MABP 160/mabp-160-03.png",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          <strong>PLC-based system</strong> with alarms, recipe storage, and
          manual override.
        </span>
      ),
      image: "/images/mabp/MABP 160/mabp-160-04.png",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          Supports <strong>recycled asphalt addition</strong> through optional
          systems.
        </span>
      ),
      image: "/images/mabp/MABP 160/mabp-160-05.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Transport-Friendly",
      desc: "Container modules reduce freight and simplify installation",
      icon: "/images/comman/logo/globe.png",
    },
    {
      title: "Uniform Mixing",
      desc: (
        <span>
          <strong>Twin-shaft pugmill mixer</strong> ensures consistent asphalt
          coating
        </span>
      ),
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Precision Weighing",
      desc: (
        <span>
          <strong>Load-cell-based hoppers</strong> ensure accurate material
          dosing
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Heavy-Duty Build",
      desc: (
        <span>
          <strong>Wear-resistant components</strong> extend plant service life
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco-Ready",
      desc: (
        <span>
          Supports <strong>RAP</strong> and effective dust control for
          sustainable production
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // 'eco' icon for "Eco-Ready"
    },
  ];

  const products = [
    {
      img: "/images/mabp/mabpnewtwo.webp",
      title: "MABP 80",
      desc: "1000 Kg | Twin Shaft | 80 TPH",
      url: "/asphalt-plants/mobile-asphalt-batching-plant/1000-kg-twin-shaft-mixer-80-tph",
    },
    {
      img: "/images/mabp/mabp-120-01.webp",
      title: "MABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/mobile-asphalt-batching-plant/1500-kg-twin-shaft-mixer-120-tph",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MABP (160) Mixer",
    //       desc: "2000 Kg | Twin Shaft | 160 TPH",
    //       url: "/asphalt-plants/mobile-asphalt-batching-plant/mabp-160-mixer-2000-kg-twin-shaft-mixer-160-t-h",
    //     },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Modular bins</span> with variable-speed
            drives
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Multi-deck vibrating screen</span> with
            oversize rejection
          </li>
          <li>Conveyor for continuous feed to dryer</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow drum</span> with optimized
            flights
          </li>
          <li>Temperature monitoring sensors</li>
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
          <li>Optional FO/gas/CNG compatibility</li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Cyclone separator</span> for coarse
            fines recovery
          </li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Reverse-pulse baghouse filtration</span>
          </li>
          <li>Keeps emissions ≤0.1 g/m³</li>
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
            <span className="font-bold">Vertical tank</span> with safe transfer
            pumps
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
            aggregates
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
            <span className="font-bold">2000 kg mixer</span>
          </li>
          <li>Air-operated wide discharge gate</li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              Aggregate, bitumen, and filler hoppers
            </span>{" "}
            with load cells
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC automation system</span> with alarms
            and recipe storage
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MABP 160 | 160 TPH Mobile Batch Plant | 2000kg | Atlas India</title>
        <meta name="description" content="MABP 160 — 160 TPH mobile asphalt batch plant, 2000kg twin-shaft mixer, trailer-mounted. For large multi-site road contracts. RAP-capable. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/dOTi765du5o"
      videoThumbnail="/images/mabp/MABP 160/mabp-160-03.png"
        pageUrl="/asphalt-plants/mobile-asphalt-batching-plant/2000-kg-twin-shaft-mixer-160-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/mabp/mabp-160-03.png"
        videoUrl="https://www.youtube.com/embed/dOTi765du5o"
        title={"Watch the MABP (160) in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the MABP (160) the ultimate choice for high-output mobile asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Performance Redefined"
        subtitle="Why MABP 160 is the Preferred Choice for Mega-Projects?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Finely-Engineered Mobile Components"}
        para={
          "Each component of the Mobile Asphalt Batch Mixing Plant (MABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/mabp/MABP 160/mabp-160-06.png"
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
