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
    title: "MDM 35 Mobile Asphalt Drum Mix Plant",
    subtitle: "30–40 TPH | Portable Design | Eco-Friendly Asphalt Production",
    description: [
      "The Atlas MDM 35 Mobile Asphalt Drum Mix Plant delivers reliable 30–40 tons per hour asphalt production for medium-sized road projects, maintenance works, and remote site applications. Combining Atlas’s continuous single-drum technology with a chassis-mounted design ensures easy mobility, quick setup, and consistent asphalt quality anywhere, anytime.",
      "Fully mobile, fuel-efficient, and quick-to-install, the MDM 35 is designed for contractors who need fast relocation, low heat loss, and superior mixing quality. Featuring foldable legs, pneumatic braking, and pre-wired components, it ensures rapid deployment and hassle-free transportation. Advanced pollution control systems make it ideal for environmentally sensitive applications, ensuring compliance with global emission norms.",
    ],
    features: ["Fuel Efficiency", "Easy Maintenance", "Sustainable Features"],
    images: [
      "/images/mdm/mdm-35-06.webp",
      "/images/mdm/mdm-35-02.webp",
      "/images/mdm/mdm-35-03.webp",
      "/images/mdm/mdm-35-04.webp",
      "/images/mdm/mdm-35-05.webp",
      "/images/mdm/mdm-35-01.webp"
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of MDM 35?",
      content: (
        <>
          <p>
            The MDM 35 produces <strong>30–40 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How mobile is the MDM 35?",
      content: (
        <>
          <p>
            The plant is fully road-legal, equipped with{" "}
            <strong>
              axles, kingpin connectors, pneumatic brakes, and lighting
            </strong>{" "}
            for quick relocation.
          </p>
        </>
      ),
    },
    {
      title: "3. What is the setup time for the MDM 35?",
      content: (
        <>
          <p>
            The modular design allows{" "}
            <strong>
              installation and commissioning within one working day.
            </strong>
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control systems are available?",
      content: (
        <>
          <p>
            Standard <strong>venturi-type wet scrubber</strong>; optional{" "}
            <strong>baghouse filter</strong> available for stringent emission
            norms.
          </p>
        </>
      ),
    },
    {
      title: "5. Can RAP be added to the MDM 35?",
      content: (
        <>
          <p>
            Yes, optional <strong>RAP integration (up to 15%)</strong> can be
            installed for sustainable asphalt production.
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
          Integrates drying and mixing into one{" "}
          <strong>continuous process</strong>, ensuring uniform asphalt quality
          and reduced fuel consumption.
        </span>
      ),
      image: "/images/mdm/mdm-35-01.webp",
    },
    {
      title: "Chassis-Mounted Construction",
      desc: (
        <span>
          Fully mobile design with <strong>axles, pneumatic brakes,</strong> and{" "}
          <strong>kingpin connectors</strong> for road-legal transport and rapid
          relocation.
        </span>
      ),
      image: "/images/mdm/mdm-35-02.webp",
    },
    {
      title: "Rapid Deployment",
      desc: (
        <span>
          Modular, <strong>pre-wired components</strong> and junction boxes
          allow commissioning within hours with minimal foundation work.
        </span>
      ),
      image: "/images/mdm/mdm-35-03.webp",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Multi-fuel burner operates on <strong>diesel, LDO, FO, or gas</strong>
          , ensuring adaptability and consistent performance in all regions.
        </span>
      ),
      image: "/images/mdm/mdm-35-04.webp",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Throughput",
      desc: (
        <span>
          Rated for <strong>30–40 TPH</strong>, it’s ideal for municipal and
          regional road development.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Durable & Energy-Efficient",
      desc: (
        <span>
          Optimized drum flights and optional insulation minimize fuel use while
          extending component life.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // use relevant icon
    },
    {
      title: "All-Terrain Reliability",
      desc: (
        <span>
          Reinforced chassis and rock-wool insulated tanks deliver dependable
          performance on rough terrains and varied climates.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Efficient Heat Retention",
      desc: (
        <span>
          Precision-engineered drum with optional ceramic wool insulation
          conserves energy and maintains asphalt temperature.
        </span>
      ),
      icon: "/images/comman/logo/star.png", // use relevant icon
    },
    {
      title: "Atlas Tested & Trusted",
      desc: (
        <span>
          Each MDM 35 undergoes factory testing and on-site commissioning for
          guaranteed plug-and-play operation.
        </span>
      ),
      icon: "/images/comman/logo/money.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/comman/slider.png",
      title: "MDM 25 Drum Mix Plant",
      desc: "20-30 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-25-6.JPG",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "MDM 35 Drum Mix Plant",
    //   desc: "30-40 TPH | Mobile Asphalt Drum Mix Plant",
    //   url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm35-30-40tph",
    //   img: "/images/mdm/mdm-35-01.webp",
    // },
    {
      img: "/images/comman/slider.png",
      title: "MDM 45 Drum Mix Plant",
      desc: "40-60 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-45-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "MDM 50 Drum Mix Plant",
      desc: "60-90 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-50-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "MDM 60 Drum Mix Plant",
      desc: "90-120 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-60-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "MDM 65 Drum Mix Plant",
      desc: "120-150 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-65-1.jpeg",
    },
  ];
  const components = [
    {
      title: "Mobile Chassis Assembly",
      desc: (
        <ul>
          <li>
            Heavy-duty chassis with axles, kingpin connectors, and road-safety
            systems.
          </li>
          <li>Pneumatic braking and lighting for highway compliance.</li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>3–4 bins with variable-speed drives.</li>
          <li>Vibratory motors prevent bridging for steady material flow.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>Heat-resistant conveyor belt delivers aggregates to the drum.</li>
          <li>Adjustable speed drive ensures controlled feed.</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>
            Single-drum configuration with optimized flight design for heat
            efficiency.
          </li>
          <li>
            Optional 1260°C ceramic wool insulation enhances fuel savings.
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>
            Multi-fuel burner (Diesel/LDO/FO/Gas) with modulating flame control.
          </li>
          <li>
            Ensures stable combustion and consistent temperature management.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>Wet venturi scrubber standard.</li>
          <li>Baghouse filter optional for strict emission compliance.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Rock-wool insulated tanks with coil heating.</li>
          <li>
            Hot-oil jacketing prevents clogs and maintains bitumen viscosity.
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>Screw conveyor for precise filler addition.</li>
          <li>Optional silo for high-volume applications.</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            Inclined, heat-resistant belt conveyor for discharge into trucks or
            silos.
          </li>
          <li>Designed for durability and minimal maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>Pre-wired, insulated operator cabin.</li>
          <li>
            Semi-automatic or PLC-based control with alarms and monitoring
            display.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-35 | 30–40 TPH | Road-Legal | Atlas Technologies India</title>
        <meta name="description" content="MDM-35 — 30–40 TPH chassis-mounted mobile drum mix plant, road-legal with axles, pre-wired junction boxes for rapid site commissioning. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/ZeXehtqHVAs"
      videoThumbnail="/images/mdm/mdm-35-01.webp"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm35-30-40tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/mdm/mdm-35-06.webp"
        videoUrl="https://www.youtube.com/embed/ZeXehtqHVAs"
        title={"MDM 35: The Perfect Companion for On-the-Go Projects"}
        isYoutube={false}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for portability and performance without compromising on quality."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 35?"
        subtitle="Discover why the MDM 35 stands out as the ultimate solution for contractors seeking reliability, and portability"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Mobile Asphalt Drum Mix Plant is optimized for mobile operation and rapid deployment."
        }
        components={components}
        img = "/images/mdm/mdm-35-04.webp"
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
