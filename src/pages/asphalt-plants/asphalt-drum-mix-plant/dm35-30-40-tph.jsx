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
    title: "DM 35 Asphalt Drum Mix Plant",
    subtitle:
      "30–40 TPH Production | Single-Drum Continuous Mixing | Compact & Fuel-Efficient",
    description: [
      "The Atlas DM 35 Asphalt Drum Mix Plant delivers reliable asphalt production at 30–40 tons per hour, designed for contractors handling medium-sized road projects. Its single-drum continuous mixing system integrates drying and mixing in one efficient unit, giving consistent output, reduced fuel consumption, and smooth operation.",
      "Built with Atlas’s signature precision flight design, optional 1260°C ceramic wool insulation, and a half-chain drive mechanism for vibration control, the DM 35 combines simplicity, durability, and thermal efficiency in a compact mobile setup.",
    ],
    features: [
      "Optimized Fuel Efficiency",
      "Easy Maintenance Access",
      "Sustainable Operations",
    ],
    images: [
      "/images/admp/dm-35-01-new.webp",
      "/images/admp/dm-35-02-new.webp",
      "/images/admp/dm-35-03-new.webp",
      "/images/admp/dm-35-04-new.webp",
      "/images/admp/dm-35-05-new.webp",
      "/images/admp/dm-25-6.jpg",
      "/images/admp/dm-25-7.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of DM 35?",
      content: (
        <>
          <p>
            The <strong>DM 35</strong> produces <strong>30–40 TPH</strong> under
            standard conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How does the single-drum design work?",
      content: (
        <>
          <p>
            Aggregates are dried and mixed with bitumen and filler within the
            same <strong>rotating drum</strong> for continuous production.
          </p>
        </>
      ),
    },
    {
      title: "3. Can the DM 35 operate in cold climates?",
      content: (
        <>
          <p>
            Yes, with optional <strong>ceramic wool drum insulation</strong> and{" "}
            <strong>rock-wool insulated bitumen tanks</strong>, it performs
            reliably in low-temperature environments.
          </p>
        </>
      ),
    },
    {
      title: "4. How does Atlas ensure reliability?",
      content: (
        <>
          <p>
            Every plant is <strong>factory-tested before dispatch</strong> and
            includes <strong>on-site commissioning support</strong>, ensuring
            consistent and trouble-free performance.
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
          Integrated drying and mixing ensure steady production with uniform
          asphalt quality
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Low Maintenance Design",
      desc: (
        <span>
          Half-chain drive minimizes vibration by 40%, while quick-release drum
          panels allow fast flight replacement
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Compact & Mobile",
      desc: (
        <span>
          Available in skid-mounted or chassis-mounted versions for fast
          relocation between sites
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Multi-fuel burners operate on diesel, LDO, furnace oil, or gas;
          auto-viscosity control ensures perfect spray temperature
        </span>
      ),
      image: "/images/comman/slider.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Efficient Capacity",
      desc: (
        <span>
          Ideal for medium-scale road projects, offering dependable{" "}
          <strong>30–40 TPH</strong> performance.
        </span>
      ),
      icon: "/images/comman/logo/star.png", // Existing icon
    },
    {
      title: "Durability & Longevity",
      desc: (
        <span>
          <strong>Wear-resistant liners</strong>, precision-engineered flights,
          and <strong>vibration-controlled operation</strong> extend component
          life.
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Existing icon
    },
    {
      title: "All-Climate Reliability",
      desc: (
        <span>
          Rock-wool insulated bitumen tanks and hot-oil jacketing maintain{" "}
          <strong>material flow even at sub-zero temperatures</strong>.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // Existing icon
    },
    {
      title: "Eco-Friendly Efficiency",
      desc: (
        <span>
          <strong>Ceramic drum insulation</strong> retains heat, cutting fuel
          costs and emissions.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // Existing icon
    },
    {
      title: "Factory-Tested Performance",
      desc: (
        <span>
          Every DM 35 undergoes a <strong>full test run before dispatch</strong>
          , ensuring <strong>plug-and-play reliability</strong> on site.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // Existing icon
    },
  ];

  const products = [
    {
      img: "/images/mdm/mdm-45-04.webp",
      title: "Asphalt Drum Mix Plant DM25",
      desc: "20–30 TPH | Compact & Efficient",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm25-20-30-tph",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "Asphalt Drum Mix Plant DM35",
    //   desc: "30–40 TPH | Versatile & Reliable",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm35-30-40-tph",
    // },
    {
      img: "/images/mdm/mdm-45-03.webp",
      title: "Asphalt Drum Mix Plant DM45",
      desc: "40–60 TPH | High Performance",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph",
    },
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
            <strong>3–4 bins</strong> with variable-speed drives.
          </p>
          <p>Vibratory motors ensure smooth material flow.</p>
        </div>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Heat-resistant conveyor belt transfers aggregates into the drum.
          </p>
          <p>
            Operates with <strong>precision motorized control</strong>.
          </p>
        </div>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>Single-drum design</strong> with precision flights for
            efficient heat transfer.
          </p>
          <p>
            Optional <strong>1260°C ceramic wool insulation</strong> reduces
            thermal losses.
          </p>
        </div>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Multi-fuel compatible (<strong>Diesel / LDO / FO / Gas</strong>).
          </p>
          <p>
            <strong>Modulating burner</strong> ensures steady combustion and
            temperature control.
          </p>
        </div>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Standard <strong>venturi-type wet scrubber</strong>.
          </p>
          <p>
            <strong>Baghouse filter</strong> available as an option for stricter
            emission compliance.
          </p>
        </div>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            <strong>Rock-wool insulated tanks</strong> with heating coils
            prevent cooling.
          </p>
          <p>
            <strong>Hot-oil jacketing</strong> ensures clog-free operation.
          </p>
        </div>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Screw conveyor feeds filler material accurately into the drum.</p>
        </div>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Inclined conveyor discharges hot mix into trucks or silos.</p>
          <p>
            Equipped with <strong>wear- and heat-resistant belts</strong>.
          </p>
        </div>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Fully insulated and pre-wired with operator visibility.</p>
          <p>
            <strong>Semi-automatic or PLC-based control</strong> with digital
            monitoring and alarms.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 35 | 30–40 TPH | Multi-Fuel Burner | Atlas Technologies</title>
        <meta name="description" content="DM 35 — 30–40 TPH continuous drum mix plant, multi-fuel burner, CPCB-compatible dust control. For small to medium road contracts. Get specs and price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="/video/stock.mp4"
        videoThumbnail="/images/comman/bg3.jpeg"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm35-30-40-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/dm-35-01-new.webp"
        videoUrl="/video/stock.mp4"
        title={"DM 35: The Workhorse for Regional Contractors"}
        isYoutube={false}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Compact Design | Continuous Efficiency | Proven Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 35?"
        subtitle="Explore how the DM 35 is the ultimate choice for medium-scale projects with flexible needs"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img="/images/admp/dm-35-02-new.webp"
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
