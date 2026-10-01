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
    title: "MABP 80 Mobile Asphalt Batch Plant",
    subtitle:
      "80 TPH Production | 1000 kg Twin-Shaft Mixer | Containerized & RAP Ready",
    description: [
      "The MABP 80 is Atlas’s compact, mobile asphalt batching plant, engineered for easy relocation and fast installation. With a rated output of 80 tons per hour and a 1000 kg twin-shaft mixer, it delivers consistent asphalt quality for medium-sized projects, highways, and urban infrastructure.",
      "Built on a containerized modular design, the MABP 80 minimizes transport costs, reduces installation time, and provides the same reliability and automation as Atlas’s stationary ABP plants, but with full mobility.",
    ],
    features: ["Rapid Deployment", "Proven Quality", "Built to Last"],
    images: [
      "/images/mabp/mabpnewone.webp",
      "/images/mabp/mabpnewtwo.webp",
      "/images/mabp/mabpnewthree.webp",
      "/images/mabp/mabpnewfour.webp",
      "/images/mabp/mabpnewfive.webp",
      "/images/mabp/mabpnewsix.webp",

    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the MABP 80?",
      content: (
        <>
          <p>
            The MABP 80 produces up to <strong>80 TPH</strong>, based on{" "}
            <strong>3% aggregate moisture</strong> and{" "}
            <strong>150°C output</strong>.
          </p>
        </>
      ),
    },
    {
      title: "How is the plant transported and installed?",
      content: (
        <>
          <p>
            It is fully <strong>containerized</strong>, making it easy to ship
            and set up on new sites without large-scale foundations.
          </p>
        </>
      ),
    },
    {
      title: "Can the MABP 80 use RAP?",
      content: (
        <>
          <p>
            Yes, Atlas mobile batch plants are <strong>RAP-ready</strong>, with
            optional systems for <strong>recycled asphalt integration</strong>.
          </p>
        </>
      ),
    },
    {
      title: "What control system does it use?",
      content: (
        <>
          <p>
            A <strong>PLC-based automation system</strong> with{" "}
            <strong>recipe storage</strong>, <strong>alarms</strong>, and{" "}
            <strong>manual override</strong>.
          </p>
        </>
      ),
    },
    {
      title: "What type of projects suit the MABP 80?",
      content: (
        <>
          <p>
            <strong>Medium-scale road construction</strong>,{" "}
            <strong>city infrastructure</strong>,{" "}
            <strong>regional highways</strong>, and projects requiring{" "}
            <strong>frequent relocation</strong>.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Containerized Design",
      desc: (
        <span>
          Compact modules <strong>fit in standard containers</strong>, making
          transport and setup easier
        </span>
      ),
      image: "/images/mabp/MABP 80/mabp-80-01.png",
    },
    {
      title: "Consistent Mixing",
      desc: (
        <span>
          Twin-shaft pugmill mixer (<strong>1000 kg capacity</strong>) ensures
          uniform asphalt coating
        </span>
      ),
      image: "/images/mabp/MABP 80/mabp-80-02.png",
    },
    {
      title: "Emissions Control",
      desc: (
        <span>
          Baghouse filter with <strong>reverse-pulse cleaning</strong> keeps
          emissions within international norms
        </span>
      ),
      image: "/images/mabp/MABP 80/mabp-80-03.png",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          PLC-based system with <strong>recipe storage, alarms</strong>, and
          manual override for ease of use
        </span>
      ),
      image: "/images/mabp/MABP 80/mabp-80-04.png",
    },
    {
      title: "RAP Compatibility",
      desc: (
        <span>
          RAP-ready configuration supports{" "}
          <strong>sustainable asphalt production</strong> with recycled material
        </span>
      ),
      image: "/images/mabp/MABP 80/mabp-80-05.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Mobility First",
      desc: (
        <span>
          Containerized structure{" "}
          <strong>eliminates oversized transport</strong> and reduces
          installation time
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // 'reliable' icon reused to represent robust mobility
    },
    {
      title: "Efficient Drying & Heating",
      desc: (
        <span>
          Counterflow dryer drum with <strong>modulating burner</strong> for
          reliable aggregate heating
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // 'rapid' icon for thermal efficiency
    },
    {
      title: "Accurate Weighing",
      desc: (
        <span>
          Load-cell-supported weighing of{" "}
          <strong>aggregates, filler, and bitumen</strong> ensures consistent
          quality
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // 'custom' icon for precision weighing
    },
    {
      title: "Durable Construction",
      desc: (
        <span>
          Heavy-duty mixer and dryer components with{" "}
          <strong>wear liners</strong> for long service life
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // 'profit&roi' icon reused for longevity and value
    },
    {
      title: "Eco-Friendly Operation",
      desc: (
        <span>
          Equipped with <strong>baghouse filtration</strong> and RAP integration
          to reduce emissions and costs
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // 'eco' icon for "Eco-Friendly Operation"
    },
  ];

  const products = [
    {
      img: "/images/mabp/mabp-120-01.webp",
      title: "MABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/mobile-asphalt-batching-plant/1500-kg-twin-shaft-mixer-120-tph",
    },
    {
      img: "/images/mabp/MABP 160/mabp-160-01.png",
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
            <span className="font-bold">Modular bins</span> with variable-speed
            drives
          </li>
          <li>
            Designed for{" "}
            <span className="font-bold">mobility and quick assembly</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Multi-deck screen</span> ensures precise
            gradation
          </li>
          <li>
            <span className="font-bold">Inclined conveyor</span> feeds dryer
            efficiently
          </li>
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
          <li>
            Equipped with{" "}
            <span className="font-bold">temperature monitoring</span>
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
            Multi-fuel options available (
            <span className="font-bold">FO/gas/CNG</span>)
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
            <span className="font-bold">Reverse-pulse baghouse filtration</span>
          </li>
          <li>
            Keeps emissions ≤<span className="font-bold">0.1 g/m³</span>{" "}
            (verified across Atlas product line)
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
            <span className="font-bold">Jacketed pipelines</span> minimize heat
            loss
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tanks</span> with safe transfer
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
            <span className="font-bold">Screw conveyor with hopper</span>
          </li>
          <li>
            Optional <span className="font-bold">silo + elevator</span> for
            larger volume filler
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">1000 kg twin-shaft mixer</span> for 80
            TPH capacity
          </li>
          <li>
            <span className="font-bold">Air-operated discharge gate</span> for
            full batch emptying
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
            aggregates, filler, and bitumen
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC-based system</span> with manual
            override
          </li>
          <li>
            Mix recipe storage, alarms, and{" "}
            <span className="font-bold">production monitoring</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MABP 80 | 80 TPH Mobile Batch Plant | 1000kg | Atlas India</title>
        <meta name="description" content="MABP 80 — 80 TPH trailer-mounted asphalt batch plant, 1000kg twin-shaft mixer, RAP-capable, CPCB-compliant. Relocates between project sites. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/dOTi765du5o"
        videoThumbnail="/images/mabp/MABP 80/mabp-80-03.png"
        pageUrl="/asphalt-plants/mobile-asphalt-batching-plant/1000-kg-twin-shaft-mixer-80-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/mabp/mabp-80-03.png"
        videoUrl="https://www.youtube.com/embed/dOTi765du5o"
        title={"Watch the MABP (80) in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the MABP Series (80) a leader in mobile asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Durability with Mobility"
        subtitle="Why is MABP (80) the preferred choice for medium to large scale projects?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Finely-Engineered Mobile Components"}
        para={
          "Each component of the Mobile Asphalt Batch Mixing Plant (MABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/mabp/mabpnewsix.webp"
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
