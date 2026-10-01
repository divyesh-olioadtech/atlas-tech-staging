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
    title: "MDM 45 Mobile Asphalt Drum Mix Plant",
    subtitle: "40–60 TPH | Single-Drum Mixing | Portable & Fuel-Efficient",
    description: [
      "The Atlas MDM 45 Mobile Asphalt Drum Mix Plant is a high-performance, mobile asphalt production system designed for 40–60 tons per hour output. Built for regional contractors, infrastructure developers, and municipal road agencies, it delivers reliable asphalt quality with the flexibility of quick relocation and minimal setup time.",
      "Equipped with a single-drum continuous mixing system, purposely-designed flights, and Max 1000°C ceramic wool, & rock wool insulation (Indian markets only), the MDM 45 ensures consistent heat distribution, low fuel consumption, and reduced maintenance. The chassis-mounted configuration with axles, pneumatic brakes, and safety lighting makes it road-legal and ready for on-site commissioning within hours.",
    ],
    features: [
      "Consistent Asphalt Quality",
      "Efficient Transport",
      "Economical Operations",
    ],
    images: [
      "/images/mdm/mdm-45-01.webp",
      "/images/mdm/mdm-45-02.webp",
      "/images/mdm/mdm-45-03.webp",
      "/images/mdm/mdm-45-04.webp",
      "/images/mdm/mdm-45-05.webp",
      "/images/mdm/mdm-45-06.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of MDM 45?",
      content: (
        <>
          <p>
            The MDM 45 delivers <strong>40–60 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How mobile is the MDM 45?",
      content: (
        <>
          <p>
            The plant is <strong>chassis-mounted</strong>, complete with{" "}
            <strong>axles, brakes, and safety lighting</strong>, allowing full
            road transport compliance.
          </p>
        </>
      ),
    },
    {
      title: "3. How fast can the plant be commissioned?",
      content: (
        <>
          <p>
            Thanks to its <strong>modular and pre-wired design</strong>, setup
            and commissioning can be completed within a{" "}
            <strong>single day</strong>.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control systems are available?",
      content: (
        <>
          <p>
            A <strong>venturi wet scrubber</strong> is standard; a{" "}
            <strong>baghouse filter</strong> is available as an option for
            stricter norms.
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
          Combines <strong>drying and mixing</strong> for uninterrupted asphalt
          production with <strong>uniform coating</strong>.
        </span>
      ),
      image: "/images/mdm/mdm-45-01.webp",
    },
    {
      title: "Precision Flight Design",
      desc: (
        <span>
          Drum flights ensure <strong>maximum heat transfer</strong> and reduce
          fuel consumption by improving{" "}
          <strong>aggregate heating efficiency</strong>.
        </span>
      ),
      image: "/images/admp/mdm-45-2.jpg",
    },
    {
      title: "Rapid Deployment",
      desc: (
        <span>
          Modular and <strong>pre-wired systems</strong> enable setup within a{" "}
          <strong>single working day</strong>.
        </span>
      ),
      image: "/images/admp/mdm-45-3.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Operates on{" "}
          <strong>diesel, LDO, furnace oil, or modulating gas burners</strong>{" "}
          with <strong>auto-viscosity control</strong> for optimized spray
          temperature.
        </span>
      ),
      image: "/images/admp/mdm-45-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Balanced Capacity",
      desc: (
        <span>
          Rated for <strong>40–60 TPH</strong>, providing efficient production
          for urban and regional road construction.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Durability & Longevity",
      desc: (
        <span>
          Heavy-duty frame, <strong>wear-resistant liners</strong>, and
          <strong> low-vibration half-chain drive</strong> extend component
          life.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // use relevant icon
    },
    {
      title: "Thermal Efficiency",
      desc: (
        <span>
          Optional <strong>ceramic wool</strong> &{" "}
          <strong>rock wool drum insulation</strong> ensures better heat
          retention and reduced energy costs.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "All-Climate Performance",
      desc: (
        <span>
          <strong>Rock-wool insulated bitumen tanks</strong> and{" "}
          <strong>hot-oil jacketing</strong> maintain smooth material flow in
          all weather conditions.
        </span>
      ),
      icon: "/images/comman/logo/star.png", // use relevant icon
    },
    {
      title: "Factory-Tested Reliability",
      desc: (
        <span>
          Every plant undergoes full <strong>factory trials</strong> and comes
          with <strong>on-site commissioning support</strong>.
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
    {
      img: "/images/comman/slider.png",
      title: "MDM 35 Drum Mix Plant",
      desc: "30-40 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm35-30-40tph",
      img: "/images/admp/mdm-35-1.jpeg",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MDM 45 Drum Mix Plant",
    //       desc: "40-60 TPH | Mobile Asphalt Drum Mix Plant",
    //       url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-45",
    //       img: "/images/admp/mdm-45-1.jpg",
    //     },
    {
      img: "/images/comman/slider.png",
      title: "MDM 50 Drum Mix Plant",
      desc: "60-90 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-50",
      img: "/images/admp/mdm-50-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "MDM 60 Drum Mix Plant",
      desc: "90-120 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-60",
      img: "/images/admp/mdm-60-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "MDM 65 Drum Mix Plant",
      desc: "120-150 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-65",
      img: "/images/admp/mdm-65-1.jpg",
    },
  ];
  const components = [
    {
      title: "Mobile Chassis Assembly",
      desc: (
        <ul>
          <li>
            • Heavy-duty chassis with axles, kingpin, and pneumatic braking.
          </li>
          <li>
            • Safety lighting and reinforced frame for transport compliance.
          </li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>• 4 bins with variable-speed drives.</li>
          <li>• Vibrators ensure consistent material discharge.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>• Heat-resistant belt conveyor for continuous feeding.</li>
          <li>• Adjustable motorized speed control for precision.</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>
            • Single-drum system for drying and mixing aggregates and bitumen.
          </li>
          <li>• Precision flights ensure uniform heating and coating.</li>
          <li>• Optional ceramic wool insulation rated up to 1260°C.</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>• Multi-fuel compatible (Diesel/LDO/FO/Gas).</li>
          <li>• Modulating flame control for energy-efficient combustion.</li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>• Venturi-type wet scrubber included as standard.</li>
          <li>• Baghouse filter optional for stricter emission compliance.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>• Rock-wool insulated tanks with heating coils.</li>
          <li>
            • Hot-oil jacketing ensures smooth flow and constant viscosity.
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>• Screw conveyor feeds filler precisely into the drum.</li>
          <li>• Optional filler silo for high-capacity applications.</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            • Inclined conveyor with heat-resistant belts transfers mix into
            trucks or silos.
          </li>
          <li>• Built for long service and minimal maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>• Fully insulated and pre-wired cabin.</li>
          <li>
            • Equipped with semi-automatic or PLC-based control with alarms and
            monitoring display.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-45 | 40–60 TPH | Road-Legal Mobile | Atlas Technologies</title>
        <meta name="description" content="MDM-45 — 40–60 TPH road-legal mobile drum mix plant, chassis-mounted with axles and kingpin connector, pre-wired for rapid commissioning. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/admp/mdm-45-3.jpg"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-45"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-45-3.jpg"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={
          "MDM 45: Mobile Solution for Medium to Large-Scale Asphalt Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="High Mobility | Continuous Efficiency | Rugged Construction"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 45?"
        subtitle="Explore how the MDM 45 combines flexibility, performance, and reliability for demanding road projects."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Mobile Asphalt Drum Mix Plant is optimized for mobile operation and rapid deployment."
        }
        components={components}
        img = "/images/mdm/mdm-45-03.webp"
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
