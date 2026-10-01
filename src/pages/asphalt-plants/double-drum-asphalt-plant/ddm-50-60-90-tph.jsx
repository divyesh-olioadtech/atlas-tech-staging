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
    title: "DDM 50 Double Drum Asphalt Plant",
    subtitle:
      "60–90 TPH Production | Dual-Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The Atlas DDM 50 is a mid-capacity double drum asphalt plant designed to deliver 60–90 tons per hour of consistent hot mix asphalt. Using a dual-drum counterflow configuration, the first drum handles drying & heating of aggregates, while the second drum performs mixing of heated aggregates with bitumen and filler.",
      "This separation leads to better temperature control, reduced thermal losses, and improved mix uniformity. Ideal for medium to large road works, highway maintenance, and municipal projects, the DDM 50 balances throughput, fuel efficiency, and mobility in a modular, robust design.",
    ],
    // price: "65,00,000",
    features: [
      "High-Capacity Processing",
      "Precision Mixing",
      "Sustainable Operation",
    ],
    images: [
      "/images/dm/ddm-50-01.webp",
      "/images/dm/ddm-50-02.webp",
      // "/images/dm/ddm-50-03.webp",
      "/images/dm/ddm-50-04.webp",
      "/images/dm/ddm-50-05.webp",
      "/images/dm/ddm-50-06.webp",
    ],
  };

  const faqData = [
    {
      title: "What is the throughput range of DDM 50?",
      content: (
        <>
          <p>
            The DDM 50 is rated for <strong>60–90 TPH</strong> under standard
            operating conditions.
          </p>
        </>
      ),
    },
    {
      title: "How does the double drum/counterflow design improve performance?",
      content: (
        <>
          <p>
            By separating drying and mixing drums and running hot gases in
            counterflow to aggregates, the plant gains better heat transfer,
            lower exhaust temperatures, and avoids overheating of bitumen.
          </p>
        </>
      ),
    },
    {
      title: "Can DDM 50 be deployed as a mobile unit?",
      content: (
        <>
          <p>
            Yes, Atlas offers mobile/relocatable versions for capacities{" "}
            <strong>40–60 TPH</strong>, <strong>60–90 TPH</strong>,{" "}
            <strong>90–120 TPH</strong>. DDM 50 falls into the{" "}
            <strong>60–90 TPH mobile class.</strong>
          </p>
        </>
      ),
    },
    {
      title: "What dust control systems are included?",
      content: (
        <>
          <p>
            Standard is <strong>venturi-type wet scrubber.</strong> For stricter
            emission norms, <strong>baghouse/fabric filter systems</strong> are
            optional.
          </p>
        </>
      ),
    },
    {
      title: "Is RAP integration possible?",
      content: (
        <>
          <p>
            Yes, the DDM 50 can be fitted with a{" "}
            <strong>RAP feeding system</strong> to include reclaimed asphalt in
            the mix.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Dual-Drum Configuration",
      desc: (
        <span>
          First drum for drying aggregates; second drum for mixing, ensuring
          controlled, uniform hot mix.
        </span>
      ),
      image: "/images/dm/ddm-50-01.webp",
    },
    {
      title: "Compact & Modular",
      desc: (
        <span>
          Skid-mounted or chassis variants for easier relocation and fast setup
        </span>
      ),
      image: "/images/dm/ddm-50-02.webp",
    },
    {
      title: "Fuel Versatility",
      desc: (
        <span>
          Compatible with diesel, LDO, furnace oil, or gas burners (as per site
          conditions)
        </span>
      ),
      image: "/images/dm/ddm-50-03.webp",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          The optional RAP feeding system allows controlled addition of
          reclaimed asphalt for eco-friendly production
        </span>
      ),
      image: "/images/dm/ddm-50-04.webp",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          Semi-automatic or PLC-based control with digital monitoring and safety
          alerts
        </span>
      ),
      image: "/images/dm/ddm-50-05.webp",
    },
  ];

  const featuresGridData = [
    {
      title: "Balanced Throughput",
      desc: "Delivers 60–90 TPH under standard operating conditions",
      icon: "/images/comman/logo/performance.png", // Represents balanced performance
    },
    {
      title: "Optimized Emissions",
      desc: (
        <span>
          Equipped with venturi wet dust scrubbers; baghouse option available
          for stricter norms
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // Eco/environment icon for emission control
    },
    {
      title: "Robust Build & Longevity",
      desc: (
        <span>
          Heavy structure, wear-resistant liners, and modular parts ease
          servicing and longevity
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // Durability icon
    },
    {
      title: "Accurate Material Control",
      desc: (
        <span>
          Cold aggregate bin drives, feed conveyors, and metering systems ensure
          precise proportions
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Precision/engineering icon
    },
    {
      title: "Eco & Cost Efficiency",
      desc: (
        <span>
          Heat recovery, modular design, and RAP capability reduce fuel and
          operational costs
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // ROI/savings icon
    },
  ];

  const products = [
    {
      img: "/images/comman/slider.png",
      title: "DDM 45 Double Drum Mix Plant",
      desc: "40–60 TPH | Compact & Efficient ",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-45-40-60-tph",
      img: "/images/admp/ddm.jpeg",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "DDM (50) Double Drum Mix Plant",
    //   desc: "60–90 TPH | Dust-Controlled System",
    //   url: "/asphalt-plants/double-drum-asphalt-plant/ddm-50-60-90-tph",
    //   img: "/images/admp/ddm-45-2.jpeg",
    // },
    {
      img: "/images/comman/slider.png",
      title: "DDM 60 Double Drum Mix Plant",
      desc: "90–120 TPH | Eco-Friendly Design",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-60-90-120-tph",
      img: "/images/dm/ddm-50-03.webp",
    },
    {
      img: "/images/comman/slider.png",
      title: "DDM 65 Double Drum Mix Plant",
      desc: "120–150 TPH | High Capacity Output",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph",
      img: "/images/dm/ddm-50-04.webp",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>Four bins, each ~11 MT capacity (for DM 50 standard)</li>
          <li>Variable-speed drives and vibratory motors to avoid bridging</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>Conveyor to deliver aggregates into the drying drum</li>
          <li>Equipped with a load cell or weighing setup (for metering)</li>
          <li>Typical belt: 600 mm × ~16 m (for DM 50 scale)</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>Diameter × length: 1.520 m × 6.710 m (for DM 50 standard)</li>
          <li>
            Sprocket drive, internal flights, exhaust chamber with dust transfer
            screw
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul>
          <li>Mixes heated aggregates with bitumen and filler</li>
          <li>Designed to avoid flame exposure in the mixing zone</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>Burner blower (10 HP in DM 50 standard) and fuel pump (3 HP)</li>
          <li>Preheater (16 kW) for fuel in colder climates</li>
        </ul>
      ),
    },
    {
      title: "Dust / Pollution Control",
      desc: (
        <ul>
          <li>Venturi-type wet scrubber as standard</li>
          <li>Optional baghouse/fabric filter for strict emission zones</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>Filler hopper (1 ton) for DM-50 scale</li>
          <li>Rotary valve with 2 HP drive, compressor for conveying fines</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            Insulated bitumen tank (typically 15–20 ton class) with internal
            heat coils
          </li>
          <li>Equipped with temperature sensors, a manhole, and insulation</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            Inclined heat-resistant belt conveyor for discharge into trucks
          </li>
          <li>
            Control gate (hydraulic cam shell gate) for surge capacity and
            mixture control
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel / Cabin",
      desc: (
        <ul>
          <li>Fully insulated, prewired cabin with operator view of plant</li>
          <li>
            Houses MCC, control logic, aggregate metering, bitumen metering,
            alarm systems, temperature displays
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DDM 50 | 60–90 TPH | 700kg Dual-Drum | Atlas Technologies</title>
        <meta name="description" content="DDM 50 — 60–90 TPH, 700kg dual-drum, separate drying and mixing zones, RAP-capable, baghouse-ready. For moderate production loads. Get specs and price from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        videoThumbnail="/images/dm/ddm-50-01.webp"
        pageUrl="/asphalt-plants/double-drum-asphalt-plant/ddm-50-60-90-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/dm/ddm-50-01.webp"
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        title={"Experience the DDM 50's Superior Performance"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Ideal choice for environmentally sensitive projects"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DDM 50?"
        subtitle="Discover why the DDM 50 is the ideal choice for medium-scale projects with high environmental standards."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Double Drum Asphalt Plant is designed for ease, economy, and efficiency."
        }
        img="/images/dm/ddm-50-01.webp"
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
