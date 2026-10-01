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
    title: "DDM 45 Double Drum Asphalt Plant",
    subtitle:
      "40–60 TPH Production | Dual Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The DDM 45 is Atlas’s compact double-drum asphalt plant, designed for contractors seeking efficiency, mobility, and reliable asphalt production at a rate of 40–60 tons per hour. Featuring a dual-drum counterflow design, the first drum dries aggregates, while the second drum mixes them with bitumen and filler for a consistent, high-quality hot mix.",
      "The plant’s modular construction, fuel flexibility, and proven performance make it ideal for small- to medium-sized road projects, urban works, and rural infrastructure development.",
    ],
    // price: "57,00,000",
    features: [
      "Dual-Stage Precision",
      "Eco-Friendly Operation",
      "Cost-Efficient Production",
    ],
    images: [
      "/images/admp/ddm-45-1.jpeg",
      "/images/admp/ddm-45-2.jpeg",
      "/images/admp/ddm-45-3.jpeg",
      "/images/admp/ddm-45-4.jpeg",
      "/images/admp/ddm-45-5.jpeg",
      "/images/admp/ddm-45-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of the DDM 45?",
      content: (
        <>
          <p>
            The DDM 45 produces up to <strong>45 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "How does the double drum system work?",
      content: (
        <>
          <p>
            The first drum dries the aggregates; the second drum mixes them with
            bitumen and filler for a uniform hot mix.
          </p>
        </>
      ),
    },
    {
      title: "Can the DDM 45 be relocated?",
      content: (
        <>
          <p>
            Yes, it is available in <strong>skid-mounted</strong> or{" "}
            <strong>chassis-mounted</strong> configurations, making it suitable
            for mobile applications.
          </p>
        </>
      ),
    },
    {
      title: "What type of dust control does it use?",
      content: (
        <>
          <p>
            It comes with a <strong>venturi-type wet dust collector</strong> as
            standard, with an option to use a <strong>baghouse filter</strong>{" "}
            for stricter emission norms.
          </p>
        </>
      ),
    },
    {
      title: "Is RAP integration possible?",
      content: (
        <>
          <p>
            Yes, the DDM 45 can be equipped with a{" "}
            <strong>RAP feeding system</strong>, enabling recycled asphalt use
            for sustainable production.
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
          First drum for <strong>aggregate drying</strong>, second drum for{" "}
          <strong>mixing</strong> ensures consistent asphalt quality.
        </span>
      ),
      image: "/images/admp/ddm-45-1.jpeg",
    },
    {
      title: "Compact & Mobile Design",
      desc: (
        <span>
          <strong>Skid-mounted</strong> or <strong>chassis-mounted</strong>{" "}
          setup allows quick relocation between sites.
        </span>
      ),
      image: "/images/admp/ddm-45-2.jpeg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Compatible with <strong>diesel, LDO, FO,</strong> or{" "}
          <strong>gas-fired burners</strong> for varied site conditions.
        </span>
      ),
      image: "/images/admp/ddm-45-3.jpeg",
    },
    {
      title: "RAP Ready",
      desc: (
        <span>
          Optional <strong>RAP bin</strong> allows the addition of{" "}
          <strong>reclaimed asphalt pavement</strong> for sustainable
          production.
        </span>
      ),
      image: "/images/admp/ddm-45-4.jpeg",
    },
    {
      title: "Automated Control",
      desc: (
        <span>
          <strong>Semi-automatic</strong> or{" "}
          <strong>PLC-based control system</strong> with a user-friendly
          interface.
        </span>
      ),
      image: "/images/admp/ddm-45-5.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Efficient Layout",
      desc: "Compact design reduces site space requirements and installation time.",
      icon: "/images/comman/logo/reliable.png", // Reusing 'reliable' icon to represent proven, efficient setup
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          Fitted with a <strong>venturi-type wet scrubber</strong> or optional{" "}
          <strong>baghouse filter</strong> for eco-friendly operation.
        </span>
      ),
      icon: "/images/comman/logo/money.png", // Using 'eco' for environmental control
    },
    {
      title: "Durable Construction",
      desc: (
        <span>
          <strong>Abrasion-resistant drum liners</strong> and{" "}
          <strong>heavy-duty structure</strong> ensure long service life.
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Engineering icon fits strong build
    },
    {
      title: "Accurate Feeding",
      desc: (
        <span>
          <strong>Individual cold aggregate feeders</strong> with{" "}
          <strong>variable-speed drives</strong> ensure precise proportioning.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // Custom icon implies precision
    },
    {
      title: "Eco-Friendly Operation",
      desc: (
        <span>
          <strong>Dust collection</strong> and <strong>RAP integration</strong>{" "}
          reduce environmental impact and operating costs.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // Reused 'profit&roi' to show efficiency & sustainability
    },
  ];

  const products = [
    // {
    //   img: "/images/comman/slider.png",
    //   title: "DDM (45) Double Drum Mix Plant",
    //   desc: "40–60 TPH | Compact & Efficient ",
    //   url: "asphalt-plants/double-drum-asphalt-plant/double-drum-mix-plant-ddm-45-40-60-tph",
    //img: "/images/admp/ddm.jpeg",
    // },
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
    {
      img: "/images/comman/slider.png",
      title: "DDM 65 Double Drum Mix Plant",
      desc: "120–150 TPH | High Capacity Output",
      url: "asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph",
      img: "/images/admp/ddm-50-4.jpeg",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>Typically, 3–4 bins with variable-speed drives</li>
          <li>Vibratory motors prevent material bridging</li>
        </ul>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <ul>
          <li>Equipped with a slinger conveyor for continuous material feed</li>
          <li>Powered by dedicated motors for smooth operation</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>First drum designed for efficient aggregate drying</li>
          <li>Fitted with flights for uniform heat transfer</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul>
          <li>
            The second drum blends heated aggregates with bitumen and filler
          </li>
          <li>Ensures uniform mixing and homogenous coating</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>Diesel/LDO standard, FO/gas options available</li>
          <li>Modulating burner for fuel efficiency</li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>Wet venturi scrubber for dust suppression</li>
          <li>Option for baghouse filter on request</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Insulated tank with heating coil system</li>
          <li>Maintains bitumen temperature during operations</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>Filler hopper with screw conveyor for controlled addition</li>
          <li>Provision for an optional filler silo for higher capacity</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>Transfers final hot mix asphalt into tippers or storage silo</li>
          <li>Wear-resistant belt and rollers ensure durability</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>Semi-automatic or PLC-based control</li>
          <li>Simple operation with essential safety alarms</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DDM 45 | 40–60 TPH | 500kg Dual-Drum | Atlas Technologies</title>
        <meta name="description" content="DDM 45 — 40–60 TPH, 500kg dual-drum, separate drying and mixing zones, RAP up to 25%, energy-efficient burner. Entry-level double drum plant. Get specs from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        videoThumbnail="/images/admp/ddm-45-1.jpeg"
        pageUrl="/asphalt-plants/double-drum-asphalt-plant/ddm-45-40-60-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/ddm-45-1.jpeg"
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        title={"See the DDM 45's Dual-Drum Technology in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Eco-Friendly Innovation, Compact Efficiency, Built to Perform"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DDM 45?"
        subtitle="Discover why the DDM 45 is the ideal choice for medium-scale projects with high environmental standards."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Double Drum Asphalt Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img =  "/images/admp/ddm-45-1.jpeg"
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
