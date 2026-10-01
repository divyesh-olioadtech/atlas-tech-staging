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
    title: "DM 200 Asphalt Drum Mix Plant",
    subtitle: "180-200 TPH | Mega-Capacity Production | Tier 4 Compliance",
    description: [
      "The DM 200 represents the pinnacle of Atlas' drum mix technology, engineered for the world's most demanding infrastructure projects requiring extreme asphalt output without compromise.",
      "Featuring a heavy-duty dual-drum design and automated control systems, the DM 200 maintains precise temperature regulation and mix consistency across its full production range while meeting stringent environmental standards.",
    ],
    features: [
      "Unmatched Output",
      "High-Grade Built",
      "Smart Fleet Integration",
    ],
    images: [
      "/images/admp/twohundrednew-five.webp",
      "/images/admp/twohundrednew-one.webp",
      "/images/admp/twohundrednew-two.webp",
      "/images/admp/twohundrednew-three.webp",
      "/images/admp/twohundrednew-four.webp",
      
      
    ],
  };

  const faqData = [
    {
      title: "1. What projects require 180-200 TPH capacity?",
      content: (
        <>
          <p>The DM 200 is designed for:</p>
          <ul className="pl-5 list-disc list-inside">
            <li>Transcontinental highway networks</li>
            <li>Major airport expansions</li>
            <li>Large-scale industrial paving</li>
            <li>Government infrastructure programs</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. What's the power requirement?",
      content: (
        <>
          <p>Minimum 1MVA for:</p>
          <ul className="pl-5 list-disc list-inside">
            <li>Dual baghouse systems</li>
            <li>High-capacity burners</li>
            <li>Automated material handling</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Can the DM 200 operate in extreme weather conditions?",
      content: (
        <>
          <p>
            Yes, the DM 200 is built to perform reliably in diverse climates.
            Its insulated components, such as SS sheet-covered drying drums and
            fully covered bitumen tanks, ensure consistent performance even in
            harsh environments.
          </p>
        </>
      ),
    },
    {
      title: "4. Can existing plants be upgraded to DM 200 specs?",
      content: (
        <>
          <p>
            Yes, an Asphalt Drum Mix Plant can be scaled to the DM 200
            specification through:
          </p>
          <ul className="pl-5 list-disc list-inside">
            <li>Drum retrofit program</li>
            <li>Emission control modernization</li>
            <li>Automation package upgrades</li>
          </ul>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Drum System",
      desc: (
        <span>
          Counter-flow single and dual-drum setups ensure efficient heating and
          mixing, delivering consistent and high-quality output.
        </span>
      ),
      image: "/images/admp/dm-200-1.JPG",
    },
    {
      title: "Accurate Material Handling",
      desc: (
        <span>
          A robust charging conveyor equipped with advanced load cells
          guarantees precise material flow of 180-190 TPH.
        </span>
      ),
      image: "/images/admp/dm-200-2.JPG",
    },
    {
      title: "Advanced Pollution Control",
      desc: (
        <span>
          A dry dust collector combined with an optional wet scrubber ensures
          particulate emissions remain below 50mg/Nm³.
        </span>
      ),
      image: "/images/admp/dm-200-3.JPG",
    },
    {
      title: "Flexible Fuel Compatibility",
      desc: (
        <span>
          A high-efficiency burner supports FO, diesel, and LDO, providing
          adaptability based on regional fuel availability.
        </span>
      ),
      image: "/images/admp/dm-200-4.JPG",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Global Success",
      desc: "Successfully implemented in regions like Algeria, Malaysia, and Iceland for highways, airports, and industrial projects",
      icon: "/images/comman/logo/globe.png", // 'Globe' for "Proven Global Success"
    },
    {
      title: "Eco-Friendly Innovation",
      desc: "99.8% particulate capture rate using advanced wet scrubbers or optional baghouse filters",
      icon: "/images/comman/logo/eco.png", // 'Eco' for "Eco-Friendly Innovation"
    },
    {
      title: "Built to Last",
      desc: "Constructed with heavy-duty components designed for continuous operation for long-term economic efficiency",
      icon: "/images/comman/logo/reliable.png", // 'Reliable' for "Built to Last"
    },
    {
      title: "Smart Automation",
      desc: "Equipped with an advanced PLC system that monitors production and stores hundreds of mix recipes",
      icon: "/images/comman/logo/engineering.png", // 'Engineering' for "Smart Automation"
    },
    {
      title: "Faster ROI",
      desc: "Up to 35% reduced fuel consumption ensures rapid cost recovery within a short period",
      icon: "/images/comman/logo/profit&roi.png", // 'Profit&ROI' for "Faster ROI"
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
    // {
    //   img: "/images/admp/mdm-60-6.jpg",
    //   title: "Asphalt Drum Mix Plant DM200",
    //   desc: "180–200 TPH | Ultra High Capacity",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm200-180-200-tph",
    // },
  ];

  const components = [
    {
      title: "Cold Feed Bins",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Aggregates are loaded into different bins for delivering to the
            drying drum.
          </p>
          <p>
            Each bin is equipped with adjustable gates to control the flow of
            each material separately.
          </p>
        </div>
      ),
    },
    {
      title: "Single Deck Vibrating Screen",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Separates oversized aggregates to prevent them from entering the
            drying drum.
          </p>
        </div>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Transfers cold aggregates from the feed bins to the drum.</p>
          <p>
            Equipped with a load cell for precise weighing and data transmission
            to the control panel.
          </p>
        </div>
      ),
    },
    {
      title: "Drying and Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Rotating drum equipped with flights for drying aggregates in the
            first half.
          </p>
          <p>Mixes with bitumen and filler in the second half.</p>
        </div>
      ),
    },
    {
      title: "Fuel Tank for Drum Burner",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Stores and supplies fuel to the drum burner.</p>
          <p>Compatible with FO, diesel, and LDO.</p>
        </div>
      ),
    },
    {
      title: "Asphalt Storage Tanks",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Store and heat bitumen so that it can be used in the drum mixer for
            mixing with hot aggregates.
          </p>
          <p>Fully covered for maximum heat retention.</p>
        </div>
      ),
    },
    {
      title: "Filler Silo",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Stores binding material for addition into the mix if required.</p>
        </div>
      ),
    },
    {
      title: "Pollution Control Devices",
      desc: (
        <div className="pl-4 space-y-2">
          <p>A dry dust collector traps heavy particles.</p>
          <p>An optional wet scrubber captures finer dust particles.</p>
        </div>
      ),
    },
    {
      title: "Load Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Collects ready hot mix asphalt and transports it to waiting trucks
            or storage silos.
          </p>
        </div>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Modern controls allow storage of different mix recipes.</p>
          <p>Centralized management of all plant operations.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 200 | 180–200 TPH | Ultra High Capacity | Atlas Technologies</title>
        <meta name="description" content="DM 200 — 180–200 TPH, Atlas's highest-capacity drum mix plant. Heavy-duty drum, multi-fuel burner, ceramic wool insulation. For mega highway projects. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/admp/dm-200-1.JPG"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm200-180-200-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/dm-200-1.JPG"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={"DM 200: Redefining Large-Scale Asphalt Production"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Leading-edge innovations for extreme (and continuous) asphalt production demands."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 200?"
        subtitle="Explore why the DM 200 is the top choice for contractors prioritizing reliability, scalability, and sustainability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img ="/images/admp/twohundrednew-five.webp"
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
