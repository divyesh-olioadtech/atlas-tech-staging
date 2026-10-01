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
    title: "DM 50 Asphalt Drum Mix Plant",
    subtitle:
      "60–90 TPH | Single-Drum Continuous Mixing | Heavy-Duty & High Performance",
    description: [
      "The Atlas DM 50 Asphalt Drum Mix Plant delivers continuous and efficient asphalt production at 60–90 tons per hour, making it a preferred choice for large-scale infrastructure and municipal road projects.",
      "Designed with Atlas’s signature single-drum continuous mixing system, it integrates drying and mixing for uniform asphalt coating and optimized energy consumption. With precision flight design, half-chain drive for low vibration, and optional 1260°C ceramic wool insulation, the DM 50 ensures long-term durability and consistent output.",
    ],
    features: [
      "Continuous High-Volume Output",
      "Fuel-Efficient Heating",
      "Low Maintenance",
    ],
    images: [
      "/images/admp/mdm-50-02.png",
      "/images/admp/mdm-50-03.png",
      "/images/admp/mdm25-6.jpg",
      "/images/mdm/mdm-45-03.webp",
      "/images/mdm/mdm-45-04.webp",
      "/images/admp/mdm-60-4.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of DM 50?",
      content: (
        <>
          <p>
            The DM 50 produces 60–90 TPH under standard operating conditions.
          </p>
        </>
      ),
    },
    {
      title: "2. How does the DM 50 ensure consistent quality?",
      content: (
        <>
          <p>
            Its precision-engineered flights and uniform heat distribution
            ensure thorough coating of aggregates and filler.
          </p>
        </>
      ),
    },
    {
      title: "3. Is the DM 50 suitable for mobile installation?",
      content: (
        <>
          <p>
            Yes, available in skid-mounted or chassis-mounted configurations for
            easy mobility and setup.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission controls are provided?",
      content: (
        <>
          <p>
            It comes with a venturi wet scrubber as standard; optional baghouse
            filter for advanced dust control.
          </p>
        </>
      ),
    },
    {
      title: "5. How does Atlas ensure reliability and performance?",
      content: (
        <>
          <p>
            Each plant is factory-tested before dispatch and supported with
            on-site commissioning for dependable performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Reliable Throughput",
      desc: (
        <span>
          Delivers 60–90 TPH under standard conditions (3% aggregate moisture at
          150°C output).
        </span>
      ),
      image: "/images/dm/dm-50-01.webp",
    },
    {
      title: "Long-Lasting Durability",
      desc: (
        <span>
          Heavy-duty drum with wear-resistant liners and low-vibration operation
          ensures extended plant life.
        </span>
      ),
      image: "/images/dm/dm-50-02.webp",
    },
    {
      title: "Enhanced Fuel Efficiency",
      desc: (
        <span>
          Optional ceramic wool drum insulation retains heat, reducing energy
          costs during prolonged use.
        </span>
      ),
      image: "/images/dm/dm-50-03.webp",
    },
    {
      title: "Cold-Weather Performance",
      desc: (
        <span>
          Rock-wool insulated bitumen tanks and hot-oil jacketing ensure
          uninterrupted flow in colder climates.
        </span>
      ),
      image: "/images/dm/dm-50-04.webp",
    },
    {
      title: "Factory-Tested Reliability",
      desc: (
        <span>
          Each unit undergoes a full test run and includes on-site commissioning
          support for guaranteed readiness.
        </span>
      ),
      image: "/images/dm/dm-50-05.webp",
    },
  ];

  const featuresGridData = [
    {
      title: "Unmatched Track Record",
      desc: "100+ units operating in 10 countries for national highway programs, in different climatic regions",
      icon: "/images/comman/logo/globe.png", // 'Globe' for "Unmatched Track Record" and "10 countries"
    },
    {
      title: "Eco-Compliance Ready",
      desc: "The plant meets various national and international standards, like EU Stage V and India CPCB emission standards",
      icon: "/images/comman/logo/eco.png", // 'Eco' for "Eco-Compliance Ready"
    },
    {
      title: "Built to Last",
      desc: "Constructed with heavy-duty, mining-grade steel components, ensuring years of reliable and uninterrupted service",
      icon: "/images/comman/logo/reliable.png", // 'Reliable' for "Built to Last"
    },
    {
      title: "Advanced Control System",
      desc: "PLC-based controls allow operators to monitor processes remotely and adjust mix recipes with pinpoint accuracy",
      icon: "/images/comman/logo/custom.png", // 'Custom' for "Advanced Control System" and "pinpoint accuracy"
    },
    {
      title: "Rapid ROI",
      desc: "With up to 30% reduced fuel consumption, the DM 50 ensures a quick payback period",
      icon: "/images/comman/logo/profit&roi.png", // 'Profit&ROI' for "Rapid ROI"
    },
  ];

 const products = [
    {
      img: "/images/mdm/mdm-45-04.webp",
      title: "Asphalt Drum Mix Plant DM25",
      desc: "20–30 TPH | Compact & Efficient",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm25-20-30-tph",
    },
    {
      img: "/images/mdm/mdm-35-02.webp",
      title: "Asphalt Drum Mix Plant DM35",
      desc: "30–40 TPH | Versatile & Reliable",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm35-30-40-tph",
    },
    {
      img: "/images/mdm/mdm-45-03.webp",
      title: "Asphalt Drum Mix Plant DM45",
      desc: "40–60 TPH | High Performance",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph",
    },
    // {
    //   img: "/images/admp/mdm-60-5.jpg",
    //   title: "Asphalt Drum Mix Plant DM50",
    //   desc: "60–90 TPH | Efficient Production",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm50-60-90-tph",
    // },
    {
      img: "/images/admp/mdm25-5.jpg",
      title: "Asphalt Drum Mix Plant DM60",
      desc: "90–120 TPH | High Capacity Design",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph",
    },
    {
      img: "/images/mdm/mdm-35-05.webp",
      title: "Asphalt Drum Mix Plant DM65",
      desc: "120–150 TPH | Maximum Output",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm65-120-150-tph",
    },
    {
      img: "/images/admp/twohundrednew-five.webp",
      title: "Asphalt Drum Mix Plant DM200",
      desc: "180–200 TPH | Ultra High Capacity",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm200-180-200-tph",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> 4 bins with variable-speed drives for precise
            feeding control.
          </p>
          <p>
            <strong>•</strong> Vibrators ensure uniform material discharge.
          </p>
        </div>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Heat-resistant belt conveyor for smooth material
            transfer.
          </p>
          <p>
            <strong>•</strong> Motorized control ensures continuous feed.
          </p>
        </div>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Single drum integrates both heating and mixing
            zones.
          </p>
          <p>
            <strong>•</strong> Precision flights for uniform heating; optional
            ceramic wool insulation.
          </p>
        </div>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Multi-fuel compatible burner (Diesel/LDO/FO/Gas).
          </p>
          <p>
            <strong>•</strong> Modulating flame control enhances combustion
            efficiency.
          </p>
        </div>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Venturi-type wet scrubber included as standard.
          </p>
          <p>
            <strong>•</strong> Baghouse filter optional for stricter emission
            norms.
          </p>
        </div>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Rock-wool insulated tanks with heating coils.
          </p>
          <p>
            <strong>•</strong> Hot-oil jacketing prevents clogging and heat
            loss.
          </p>
        </div>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Screw conveyor feeds filler evenly into the drum.
          </p>
          <p>
            <strong>•</strong> Optional silo for high-volume operations.
          </p>
        </div>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Inclined conveyor transfers mix to trucks or
            silos.
          </p>
          <p>
            <strong>•</strong> Heat- and wear-resistant belt ensures longevity.
          </p>
        </div>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>•</strong> Insulated and pre-wired with operator visibility.
          </p>
          <p>
            <strong>•</strong> Semi-automatic or PLC-based control with digital
            display and alarms.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 50 | 60–90 TPH | CPCB Compliant | Atlas Technologies India</title>
        <meta name="description" content="DM 50 — 60–90 TPH continuous drum mix plant, fuel-flexible burner, baghouse filter for CPCB compliance, rock-wool insulated bitumen tank. Get specs and quote." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/dm/dm-50-04.webp"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm50-60-90-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/dm/dm-50-04.webp"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={"DM 50: Powering National Infrastructure Development"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Industrial engineering for extreme production demands."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 50?"
        subtitle="Explore the reasons why the DM 50 stands out as the preferred choice for contractors focused on efficiency, durability, and sustainability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        img="/images/mdm/mdm-45-04.webp"
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
