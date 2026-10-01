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
    title: "DM 45 Asphalt Drum Mix Plant",
    subtitle:
      "40–60 TPH Production | Single-Drum Continuous Mixing | Reliable & Fuel-Efficient",
    description: [
      "The Atlas DM 45 Asphalt Drum Mix Plant is engineered for 40–60 tons per hour of continuous asphalt production, making it a dependable solution for medium to large-scale road projects. Its single-drum design integrates drying and mixing into one efficient process, delivering consistent performance, reduced fuel usage, and low maintenance requirements.",
      "With Atlas’s precision flight design, optional 1260°C ceramic wool drum insulation, and a half-chain drive system that minimizes vibration, the DM 45 provides long-term durability and thermal efficiency. Built to perform under varied climatic conditions, this plant is trusted by contractors worldwide for its simplicity and consistent output.",
    ],
    features: [
      "Multiple Fuel Options",
      "All-Weather Performance",
      "Low Maintenance",
    ],
    images: [
      "/images/mdm/mdm-45-03.webp",
      "/images/mdm/mdm-45-04.webp",
      "/images/admp/mdm-60-5.jpg",
      "/images/admp/mdm25-5.jpg",
      "/images/mdm/mdm-35-05.webp",
      "/images/admp/mdm-60-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of DM 45?",
      content: (
        <>
          <p>
            The <strong>DM 45</strong> produces <strong>40–60 TPH</strong> under
            standard conditions (<strong>3% aggregate moisture</strong> at{" "}
            <strong>150°C output</strong>).
          </p>
        </>
      ),
    },
    {
      title: "2. How does the single-drum process improve efficiency?",
      content: (
        <>
          <p>
            The <strong>drying</strong> and <strong>mixing</strong> occur
            continuously in one drum, reducing cycle times and ensuring{" "}
            <strong>consistent asphalt quality</strong>.
          </p>
        </>
      ),
    },
    {
      title: "3. Is the DM 45 suitable for mobile use?",
      content: (
        <>
          <p>
            Yes, the <strong>DM 45</strong> can be configured in{" "}
            <strong>skid-mounted</strong> or <strong>chassis-mounted</strong>{" "}
            formats for site mobility.
          </p>
        </>
      ),
    },
    {
      title: "4. What dust control system is used?",
      content: (
        <>
          <p>
            A <strong>Venturi wet scrubber</strong> is provided as standard; a{" "}
            <strong>baghouse filter</strong> can be added for stricter emission
            norms.
          </p>
        </>
      ),
    },
    {
      title: "5. How does Atlas ensure plant reliability?",
      content: (
        <>
          <p>
            Each unit is <strong>factory-tested before dispatch</strong> and
            supported by <strong>on-site commissioning</strong>, ensuring
            immediate operational readiness.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Single-Drum Continuous Mixing",
      desc: (
        <span>
          Integrated drying and mixing in one drum ensures uniform asphalt
          coating and reduced operational time.
        </span>
      ),
      image: "/images/dm/dm-45-01.webp",
    },
    {
      title: "Precision Flight Engineering",
      desc: (
        <span>
          Drum flights are designed for optimal heat transfer, ensuring higher
          fuel efficiency and consistent aggregate coating.
        </span>
      ),
      image: "/images/dm/dm-45-002.webp",
    },
    {
      title: "Half-Chain Drive System",
      desc: (
        <span>
          Reduces vibration by up to <strong>40%</strong>, extending the life of
          bearings and critical components.
        </span>
      ),
      image: "/images/dm/dm-45-01.webp",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Multi-fuel burner supports{" "}
          <strong>diesel, LDO, furnace oil, or gas</strong> with auto-viscosity
          control for stable performance.
        </span>
      ),
      image: "/images/dm/dm-45-002.webp",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Reliability",
      desc: "Deployed across multiple continents, including Europe, South East Asia, and Africa, for highway and industrial projects",
      icon: "/images/comman/logo/reliable.png", // 'Reliable' for "Proven Reliability"
    },
    {
      title: "Eco-Friendly Structure",
      desc: (
        <span>
          Wet scrubber or optional baghouse filter achieves{" "}
          <strong>99.8%</strong> particulate capture rate
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // 'Eco' for "Eco-Friendly Structure"
    },
    {
      title: "Heavy-Duty Construction",
      desc: "Mining-grade steel components ensure years of uninterrupted operation",
      icon: "/images/comman/logo/engineering.png", // 'Engineering' for "Heavy-Duty Construction"
    },
    {
      title: "Cutting-Edge Control",
      desc: "PLC control panel with 50+ recipe storage and remote diagnostics",
      icon: "/images/comman/logo/custom.png", // 'Custom' or 'engineering' can work; 'custom' for "Cutting-Edge Control" with "recipe storage"
    },
    {
      title: "Fast ROI",
      desc: "Up to 30% lower fuel consumption vs. comparable plants",
      icon: "/images/comman/logo/profit&roi.png", // 'Profit&ROI' for "Fast ROI"
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
    // {
    //   img: "/images/mdm/mdm-45-03.webp",
    //   title: "Asphalt Drum Mix Plant DM45",
    //   desc: "40–60 TPH | High Performance",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph",
    // },
    {
      img: "/images/admp/mdm-60-5.jpg",
      title: "Asphalt Drum Mix Plant DM50",
      desc: "60–90 TPH | Efficient Production",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm50-60-90-tph",
    },
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
            • <strong>4 bins</strong> with variable-speed drives for precise
            aggregate control
          </p>
          <p>
            • <strong>Vibrators</strong> ensure smooth and consistent flow
          </p>
        </div>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Heat-resistant conveyor belt</strong> for continuous feed
          </p>
          <p>
            • Driven by a <strong>high-efficiency motor</strong> with speed
            control
          </p>
        </div>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Single-drum design</strong> combines drying and mixing
            zones
          </p>
          <p>
            • <strong>Precision flight pattern</strong> ensures maximum heat
            transfer
          </p>
          <p>
            • Optional <strong>ceramic wool insulation</strong> rated up to
            1260°C
          </p>
        </div>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Multi-fuel compatible</strong> (Diesel / LDO / FO / Gas)
          </p>
          <p>
            • <strong>Modulating burner</strong> maintains optimal combustion
            and temperature
          </p>
        </div>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Venturi-type wet scrubber</strong> provided as standard
          </p>
          <p>
            • Optional <strong>baghouse filter</strong> for strict emission
            compliance
          </p>
        </div>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Insulated and hot-oil jacketed tanks</strong> prevent
            cooling and blockages
          </p>
          <p>
            • <strong>Auto-temperature control</strong> maintains consistent
            viscosity
          </p>
        </div>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Screw conveyor</strong> feeds filler precisely into the
            drum
          </p>
          <p>
            • Optional <strong>silo</strong> for bulk filler storage
          </p>
        </div>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Inclined, heat-resistant belt</strong> transfers hot mix
            to trucks or silos
          </p>
          <p>
            • Built for <strong>long service</strong> and minimal maintenance
          </p>
        </div>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            • <strong>Fully insulated and pre-wired</strong> with operator
            visibility
          </p>
          <p>
            • <strong>Semi-automatic or PLC-based control</strong> with alarms
            and temperature displays
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 45 | 40–60 TPH | Ceramic Insulation | Atlas Technologies</title>
        <meta name="description" content="DM 45 — 40–60 TPH continuous drum mix plant, multi-fuel burner, ceramic wool insulation for heat retention and fuel savings. For highway projects. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/dm/dm-45-01.webp"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/mdm/mdm-45-04.webp"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={"DM 45: The Standard for Medium-Scale Contractors"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Robust Construction | Continuous Operation | Cost-Efficient Design"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 45?"
        subtitle="Discover why the DM 45 is the perfect fit for contractors seeking reliability and versatility."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        img="/images/admp/mdm-60-5.jpg"
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
