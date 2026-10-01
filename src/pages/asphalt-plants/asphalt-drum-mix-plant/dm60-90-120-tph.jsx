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
    title: "DM 60 Asphalt Drum Mix Plant",
    subtitle:
      "90–120 TPH | High-Capacity Performance | Eco-Friendly Efficiency",
    description: [
      "The Atlas DM 60 Asphalt Drum Mix Plant is built for 90–120 tons per hour of continuous asphalt production, making it the perfect choice for highway construction, large-scale road networks, and infrastructure projects.",
      "Its single-drum continuous mixing system ensures superior heat transfer, consistent mix quality, and optimized fuel consumption, all within a robust, low-maintenance design. Engineered with precision flight design, half-chain drive technology, and optional 1260°C ceramic wool insulation, the DM 60 delivers unmatched durability and thermal efficiency.",
    ],
    features: [
      "High-Volume Output",
      "Efficient Heat Retention",
      "Heavy-Duty Operation",
    ],
    images: [
      "/images/admp/mdm25-5.jpg",
      "/images/mdm/mdm-35-01.webp",
      "/images/admp/mdm-50-05.png",
      "/images/admp/mdm-50-06.png",
      "/images/admp/mdm-60-6.jpg",
     
      "/images/admp/mdm25-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of DM 60?",
      content: (
        <>
          <p>
            The DM 60 delivers 90–120 TPH under standard conditions (3%
            aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How does the DM 60 maintain mix quality?",
      content: (
        <>
          <p>
            Its precision flight design and controlled temperature zones ensure
            uniform aggregate coating and optimal bitumen blending.
          </p>
        </>
      ),
    },
    {
      title: "3. Is the DM 60 mobile?",
      content: (
        <>
          <p>
            Yes, it is available in both skid-mounted and chassis-mounted
            configurations for mobile or stationary use.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control options are available?",
      content: (
        <>
          <p>
            Equipped with a venturi wet scrubber as standard and an optional
            baghouse filter for stricter emission norms.
          </p>
        </>
      ),
    },
    {
      title: "5. How does Atlas ensure long-term reliability?",
      content: (
        <>
          <p>
            Every unit is factory-tested and commissioned on-site, guaranteeing
            consistent, trouble-free operation.
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
          Drying and mixing occur in a single drum, ensuring continuous,
          consistent asphalt output.
        </span>
      ),
      image: "/images/admp/dm-60-1.JPG",
    },
    {
      title: "Precision Flight Design",
      desc: (
        <span>
          Aerodynamically optimized flights maximize heat transfer for better
          fuel efficiency.
        </span>
      ),
      image: "/images/admp/dm-60-2.JPG",
    },
    {
      title: "Half-Chain Drive System",
      desc: (
        <span>
          Reduces drum vibration by up to 40%, extending the lifespan of
          bearings and structural components.
        </span>
      ),
      image: "/images/admp/dm-60-3.JPG",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Multi-fuel burner operates on diesel, LDO, furnace oil, or gas with
          auto-viscosity control.
        </span>
      ),
      image: "/images/admp/dm-60-4.JPG",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Throughput",
      desc: "Rated for 90–120 TPH, ensuring high-capacity, uninterrupted production.",
      icon: "/images/comman/logo/clock.png", // 'Performance' for "Reliable Throughput"
    },
    {
      title: "Extended Durability",
      desc: "Wear-resistant liners, heavy-duty materials, and precision engineering ensure long service life.",
      icon: "/images/comman/logo/reliable.png", // 'Reliable' for "Extended Durability"
    },
    {
      title: "Thermal Efficiency",
      desc: "Optional ceramic wool insulation retains heat and reduces fuel costs during extended operation.",
      icon: "/images/comman/logo/eco.png", // 'Eco' for "Thermal Efficiency"
    },
    {
      title: "All-Weather Operation",
      desc: "Rock-wool insulated bitumen tanks and hot-oil jacketing maintain smooth bitumen flow, even in sub-zero conditions.",
      icon: "/images/comman/logo/rapid.png", // 'Temperature' for "All-Weather Operation"
    },
    {
      title: "Quality Assurance",
      desc: "Every DM 60 is factory-tested before dispatch and includes commissioning support to ensure plug-and-play reliability.",
      icon: "/images/comman/logo/star.png", // 'QA' for "Quality Assurance"
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
    // {
    //   img: "/images/admp/mdm25-5.jpg",
    //   title: "Asphalt Drum Mix Plant DM60",
    //   desc: "90–120 TPH | High Capacity Design",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph",
    // },
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
            4 bins with variable-speed drives for accurate material control.
          </p>
          <p>Vibrators prevent bridging and ensure uniform flow.</p>
        </div>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Heat-resistant conveyor transfers aggregates to the drum.</p>
          <p>Motorized control maintains steady feed.</p>
        </div>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Single drum combines drying and mixing operations.</p>
          <p>Precision flights ensure effective heating and mixing.</p>
          <p>Optional ceramic wool insulation rated up to 1260°C.</p>
        </div>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Multi-fuel compatible (Diesel/LDO/FO/Gas).</p>
          <p>
            Modulating burner provides stable combustion and temperature
            control.
          </p>
        </div>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Standard venturi-type wet scrubber.</p>
          <p>Optional baghouse filter for advanced emission control.</p>
        </div>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Rock-wool insulated tanks with heating coils.</p>
          <p>Hot-oil jacketing prevents clogging and maintains viscosity.</p>
        </div>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Screw conveyor ensures precise filler addition.</p>
          <p>Optional silo for higher capacity projects.</p>
        </div>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Inclined conveyor discharges mix to trucks or silos.</p>
          <p>Heat- and wear-resistant belt ensures durability.</p>
        </div>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Insulated and pre-wired for operator convenience.</p>
          <p>
            Semi-automatic or PLC-based control with alarms and data display.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 60 | 90–120 TPH | Half-Chain Drive | Atlas Technologies</title>
        <meta name="description" content="DM 60 — 90–120 TPH, half-chain drive reduces drum vibration by 40%, multi-fuel burner, factory-tested before dispatch with commissioning support. Get quote." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/admp/dm-60-1.JPG"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/dm-60-1.JPG"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={"DM 60: The Solution for Major Infrastructure"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Top-notch continuous mixing plant performance for high-end projects. "
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 60?"
        subtitle="Discover why the DM 60 stands out as the ultimate solution for contractors seeking reliability, scalability, and sustainability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img ="/images/admp/mdm25-6.jpg"
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
