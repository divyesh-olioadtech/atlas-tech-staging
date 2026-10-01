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
    title: "DM 25 Asphalt Drum Mix Plant",
    subtitle:
      "20–30 TPH Production | Single-Drum Continuous Mixing | Mobile & Cost-Efficient",
    description: [
      "The Atlas DM 25 is the entry-level model in the Asphalt Drum Mix Plant series, producing 20–30 tons per hour of hot mix asphalt. Designed with a single-drum continuous mixing system, it dries and mixes aggregates in one drum, offering a compact and economical solution for small projects.",
      "Built for rural roads, municipal works, and small-scale paving jobs, the DM 25 combines ease of operation, mobility, and low maintenance, making it ideal for contractors seeking reliable performance with minimal investment.",
    ],
    features: [
      "Plug-and-Play Operation",
      "Multi-Fuel Flexibility",
      "Low Maintenance Design",
    ],
    images: [
       "/images/admp/mdm25-2.jpg",
      "/images/admp/mdm25-3.jpg",
      "/images/mdm/mdm-35-02.webp",
      "/images/mdm/mdm-45-01.webp",
      "/images/admp/mdm-60-2.jpg",
      "/images/admp/mdm-60-3.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of DM 25?",
      content: (
        <>
          <p>
            The <strong>DM 25</strong> produces <strong>20–30 TPH</strong> under
            standard conditions (<strong>3% aggregate moisture</strong> at{" "}
            <strong>150°C</strong> output).
          </p>
        </>
      ),
    },
    {
      title: "2. How does the DM 25 work?",
      content: (
        <>
          <p>
            It uses a <strong>single-drum continuous system</strong> where
            aggregates are dried and mixed with bitumen and filler in one drum.
          </p>
        </>
      ),
    },
    {
      title: "3. Can the DM 25 be relocated?",
      content: (
        <>
          <p>
            Yes, available in <strong>skid-mounted</strong> or{" "}
            <strong>chassis-mounted</strong> versions for easy mobility.
          </p>
        </>
      ),
    },
    {
      title: "4. What dust control options are provided?",
      content: (
        <>
          <p>
            A <strong>venturi-type wet scrubber</strong> is standard; a{" "}
            <strong>baghouse filter</strong> is optional.
          </p>
        </>
      ),
    },
    {
      title: "5. Who is DM 25 best suited for?",
      content: (
        <>
          <p>
            Contractors handling <strong>rural, municipal,</strong> or{" "}
            <strong>small-scale road projects</strong> need compact and
            economical asphalt production.
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
          Drying and mixing take place in one drum, ensuring a steady asphalt
          supply.
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Compact & Mobile",
      desc: (
        <span>
          Skid-mounted or chassis-mounted configurations allow easy relocation
          between sites.
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Compatible with diesel, LDO, furnace oil, or gas burners to suit site
          conditions.
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "Dust Control",
      desc: (
        <span>
          Comes with a venturi-type wet scrubber; an optional baghouse filter is
          available.
        </span>
      ),
      image: "/images/comman/slider.png",
    },
    {
      title: "User-Friendly Controls",
      desc: (
        <span>
          Semi-automatic or PLC-based system with safety interlocks for smooth
          operation.
        </span>
      ),
      image: "/images/comman/slider.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Efficient Capacity",
      desc: "Rated for 20–30 TPH, making it suitable for smaller road construction projects",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Affordable Operation",
      desc: "Low investment and reduced maintenance requirements",
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Rugged Design",
      desc: "Heavy-duty drum with abrasion-resistant liners ensures long-lasting service",
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Accurate Feeding",
      desc: "Cold feed bins with variable-speed drives provide precise aggregate proportioning",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco-Friendly",
      desc: "Dust collection system minimizes emissions; fuel-efficient burner reduces energy use",
      icon: "/images/comman/logo/reliable.png",
    },
  ];

  const products = [
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "Asphalt Drum Mix Plant DM25",
    //       desc: "20–30 TPH | Compact & Efficient",
    //       url: "/asphalt-plants/asphalt-drum-mix-plant/dm25-20-30-tph",
    //     },
    {
      img: "/images/admp/mdm25-2.jpg",
      title: "Asphalt Drum Mix Plant DM35",
      desc: "30–40 TPH | Versatile & Reliable",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm35-30-40-tph",
    },
    {
      img: "/images/admp/mdm25-3.jpg",
      title: "Asphalt Drum Mix Plant DM45",
      desc: "40–60 TPH | High Performance",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph",
    },
    {
      img: "/images/mdm/mdm-35-02.webp",
      title: "Asphalt Drum Mix Plant DM50",
      desc: "60–90 TPH | Efficient Production",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm50-60-90-tph",
    },
    {
      img: "/images/mdm/mdm-45-01.webp",
      title: "Asphalt Drum Mix Plant DM60",
      desc: "90–120 TPH | High Capacity Design",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph",
    },
    {
      img: "/images/admp/mdm-60-2.jpg",
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
          <p>• 3–4 bins with variable-speed drives</p>
          <p>• Vibratory motors to prevent material bridging</p>
        </div>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Heat-resistant conveyor belt feeds aggregates into the drum</p>
          <p>• Powered by dedicated motors for continuous operation</p>
        </div>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Single-drum design handles both drying and mixing</p>
          <p>• Internal flights ensure uniform heat transfer and coating</p>
        </div>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Standard diesel/LDO burner; FO or gas options available</p>
          <p>• Modulating burner for efficient combustion</p>
        </div>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Venturi-type wet scrubber supplied as standard</p>
          <p>• Baghouse filter option for stricter emission norms</p>
        </div>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Insulated tank with heating coils</p>
          <p>• Maintains required bitumen viscosity</p>
        </div>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Hopper with screw conveyor for controlled filler addition</p>
        </div>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Transfers hot mix into trucks or storage silos</p>
          <p>• Heat- and wear-resistant belt for durability</p>
        </div>
      ),
    },
    {
      title: "Control Panel / Cabin",
      desc: (
        <div className="pl-4 space-y-2">
          <p>• Pre-wired insulated cabin with semi-automatic or PLC system</p>
          <p>• Includes alarms and safety indicators</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 25 | 20–30 TPH | Trailer-Mounted | Atlas Technologies India</title>
        <meta name="description" content="DM 25 — 20–30 TPH compact trailer-mounted drum mix plant, multi-fuel burner. For rural roads and remote island projects. Exported to 35+ countries. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="/video/stock.mp4"
      videoThumbnail="/images/comman/bg3.jpeg"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm25-20-30-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm25-2.jpg"
        videoUrl="/video/stock.mp4"
        title={"Experience the DM 25's Superior Performance"}
        isYoutube={false}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Simplified engineering for maximum performance and efficiency."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 25?"
        subtitle="Discover why the DM 25 is the ultimate choice for small to medium-scale projects with demanding requirements."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img ="/images/admp/mdm25-2.jpg"
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
