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
    title: "DDM 65 Double Drum Asphalt Plant",
    subtitle:
      "120–150 TPH Production | Dual-Drum Counterflow | High-Capacity Continuous Mixing",
    description: [
      "The Atlas DDM 65 is a high-capacity double drum asphalt plant designed for large-scale projects requiring continuous asphalt production in the 120–150 tons per hour range. Its dual-drum counterflow system separates drying and mixing functions, ensuring efficient heat transfer, reduced emissions, and a consistently high-quality hot mix.",
      "Ideal for national highways, expressways, airports, and major infrastructure projects, the DDM 65 combines robust engineering, advanced controls, and fuel flexibility to deliver maximum performance at scale.",
    ],
    // price: "75,00,000",
    features: [
      "Mega-Project Capacity",
      "Military-Grade Durability",
      "Sustainable Design",
    ],
    images: [
      "/images/admp/ddm-45-1.jpeg",
      "/images/admp/ddm-50-2.jpeg",
      "/images/admp/ddm-45-3.jpeg",
      "/images/admp/ddm-50-4.jpeg",
      "/images/admp/ddm-45-5.jpeg",
      "/images/admp/ddm-50-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of the DDM 65?",
      content: (
        <>
          <p>
            The DDM 65 delivers a rated output of{" "}
            <strong>120–150 tons per hour</strong>
            under standard conditions (3% aggregate moisture at 150°C mix
            temperature).
          </p>
        </>
      ),
    },
    {
      title: "How does the counterflow double drum system benefit production?",
      content: (
        <>
          <p>The counterflow configuration ensures:</p>
          <ul className="ml-6 list-disc">
            <li>Maximum heat transfer efficiency.</li>
            <li>Reduced stack temperature and fuel usage.</li>
            <li>Prevention of bitumen overheating for superior mix quality.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Is the DDM 65 mobile?",
      content: (
        <>
          <p>
            Yes. It is available in both <strong>skid-mounted</strong> and
            <strong> chassis-mounted</strong> versions, allowing quick
            relocation between job sites with minimal setup time.
          </p>
        </>
      ),
    },
    {
      title: "What emission controls are provided?",
      content: (
        <>
          <p>
            A <strong>venturi-type wet scrubber</strong> is included as standard
            for dust and fume control, while an optional
            <strong> baghouse filter</strong> is available to meet stricter
            environmental norms.
          </p>
        </>
      ),
    },
    {
      title: "Can RAP be added to mixes?",
      content: (
        <>
          <p>
            Yes. The DDM 65 is <strong>RAP-ready</strong>, enabling the use of
            reclaimed asphalt pavement for more sustainable and cost-efficient
            asphalt production.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Dual-Drum Efficiency",
      desc: (
        <span>
          Dedicated drying drum removes moisture, while the mixing drum blends
          aggregates, bitumen, and filler to ensure uniform asphalt quality.
        </span>
      ),
      image: "/images/admp/ddm-45-6.jpeg",
    },
    {
      title: "High Throughput",
      desc: (
        <span>
          Designed to produce <strong>120–150 TPH</strong>, delivering a steady
          and uninterrupted supply for large paving operations.
        </span>
      ),
      image: "/images/admp/ddm-50-5.jpeg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Supports <strong>diesel, LDO, furnace oil,</strong> or{" "}
          <strong>gas burners</strong>, allowing cost-effective operation across
          varied site conditions.
        </span>
      ),
      image: "/images/admp/ddm-45-4.jpeg",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          Optional <strong>RAP feeding system</strong> enables controlled use of
          reclaimed asphalt pavement, reducing material costs and emissions.
        </span>
      ),
      image: "/images/admp/ddm-50-3.jpeg",
    },
    {
      title: "Advanced Control",
      desc: (
        <span>
          <strong>PLC-based automation</strong> with touchscreen interface,
          production data logging, and built-in safety interlocks for smooth
          operation.
        </span>
      ),
      image: "/images/admp/ddm-45-2.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Large-Scale Reliability",
      desc: "Engineered for demanding infrastructure projects with continuous, high-volume production requirements.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          <strong>Venturi-type wet scrubber</strong> included as standard;{" "}
          <strong>optional baghouse filter</strong> available for strict
          environmental compliance.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Heavy-Duty Construction",
      desc: "Built with abrasion-resistant liners and reinforced structural steel for long service life in harsh conditions.",
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Precision Feeding",
      desc: (
        <span>
          Individual <strong>cold aggregate feeders</strong> with variable-speed
          drives ensure highly accurate material proportioning.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco-Efficiency",
      desc: (
        <span>
          Optimized <strong>counterflow process</strong> lowers stack
          temperature and fuel use, while <strong>RAP capability</strong>{" "}
          enhances sustainability.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png",
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
    {
      img: "/images/comman/slider.png",
      title: "DDM 50 Double Drum Mix Plant",
      desc: "60–90 TPH | Dust-Controlled System",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-50-60-90-tph",
      img: "/images/admp/ddm-45-2.jpeg",
    },
    {
      img: "/images/comman/slider.png",
      title: "DDM 60 Double Drum Mix Plant",
      desc: "90–120 TPH | Eco-Friendly Design",
      url: "asphalt-plants/double-drum-asphalt-plant/ddm-60-90-120-tph",
      img: "/images/admp/ddm-50-3.jpeg",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "DDM 65 Double Drum Mix Plant",
    //   desc: "120–150 TPH | High Capacity Output",
    //   url: "/asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph",
    //   img: "/images/admp/ddm-50-4.jpeg",
    // },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>4 bins with variable-speed drives.</li>
          <li>Vibratory motors prevent bridging and maintain smooth flow.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>Heavy-duty conveyor feeds aggregates to the drying drum.</li>
          <li>Fitted with a wear-resistant belt and rollers.</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            Large-diameter (~2.0 m class) drum with flights for uniform heating.
          </li>
          <li>
            Counterflow design ensures efficient heat transfer and low
            emissions.
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul>
          <li>Isolated from direct burner flame.</li>
          <li>
            Ensures thorough mixing of heated aggregates, bitumen, and filler.
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>High-capacity modulating burner.</li>
          <li>Supports multi-fuel operation (diesel, LDO, FO, gas).</li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul>
          <li>Wet venturi scrubber provided as standard.</li>
          <li>Optional baghouse filter for enhanced emission compliance.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Large-capacity insulated tanks with coil heating.</li>
          <li>Equipped with temperature sensors and safety valves.</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>Hopper with screw conveyor for controlled filler addition.</li>
          <li>Optional filler silo available for bulk handling.</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            Inclined conveyor transfers hot mix into trucks or storage silos.
          </li>
          <li>Fitted with heat-resistant, heavy-duty belts.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>Insulated, air-conditioned cabin with operator visibility.</li>
          <li>PLC automation, production monitoring, and safety interlocks.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DDM 65 | 120–150 TPH | 1200kg Dual-Drum | Atlas Technologies</title>
        <meta name="description" content="DDM 65 — 120–150 TPH, 1200kg dual-drum, Atlas's highest-capacity double drum plant. Separate drying and mixing, RAP-capable, baghouse filter. Get specs from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        videoThumbnail="/images/admp/ddm-50-2.jpeg"
        pageUrl="/asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/ddm-50-2.jpeg"
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        title={"Unmatched Performance of DDM 65 for Tier-1 Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Perfect for performance, durability, and eco-conscious operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DDM 60?"
        subtitle="Discover why the DDM 65 is the ultimate choice for large-scale industrial projects with demanding requirements"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Double Drum Asphalt Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img="/images/admp/ddm-65-componentsone.webp"
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
