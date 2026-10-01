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
    title: "MDM 50 Mobile Asphalt Drum Mix Plant",
    subtitle: "60–90 TPH | Single-Drum Mixing | Rapid Installation",
    description: [
      "The Atlas MDM 50 Mobile Asphalt Drum Mix Plant delivers dependable 60–90 tons per hour of asphalt production for large infrastructure, highway, and municipal projects. Designed for maximum mobility, it combines the high efficiency of continuous single-drum mixing with the practicality of a fully transportable chassis-mounted design.",
      "Built with precision-engineered flights, Max 1000°C ceramic wool, & rock wool insulation, and Atlas's robust half-chain drive system, the MDM 50 offers reduced fuel consumption, low vibration, and extended service life. The road-legal design, featuring axles, kingpin connectors, pneumatic braking, and safety lighting, makes it ready for fast relocation and setup at project sites worldwide.",
    ],
    features: ["Reliable Performance", "Quick Mobilization", "Fuel-Efficient"],
    // price: "57,00,000",
    images: [
      "/images/admp/mdm-50-01.png",
      "/images/admp/mdm-50-02.png",
      "/images/admp/mdm-50-03.png",
      "/images/admp/mdm-50-04.png",
      "/images/admp/mdm-50-05.png",
      "/images/admp/mdm-50-06.png",
      "/images/admp/mdm-50-07.png",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of MDM 50?",
      content: (
        <>
          <p>
            The MDM 50 produces <strong>60–90 TPH</strong> under standard
            operating conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How fast can the MDM 50 be installed?",
      content: (
        <>
          <p>
            The <strong>modular chassis</strong> and{" "}
            <strong>pre-wired system</strong> enable setup within a{" "}
            <strong>single working day</strong>.
          </p>
        </>
      ),
    },
    {
      title: "3. Is the MDM 50 suitable for mobile use on highways?",
      content: (
        <>
          <p>
            Yes, it’s a <strong>road-legal mobile plant</strong> equipped with{" "}
            <strong>axles, pneumatic brakes, and safety lighting</strong>.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control options are available?",
      content: (
        <>
          <p>
            Supplied with a <strong>venturi wet scrubber</strong>; an optional{" "}
            <strong>baghouse filter</strong> can be added for stricter
            standards.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Chassis-Mounted Mobility",
      desc: (
        <span>
          Axles, <strong>kingpin connectors</strong>,{" "}
          <strong>pneumatic braking</strong>, and{" "}
          <strong>safety lighting</strong> ensure highway compliance and easy
          transport.
        </span>
      ),
      image: "/images/admp/mdm-50-1.jpg",
    },
    {
      title: "Single-Drum Continuous Mixing",
      desc: (
        <span>
          <strong>Drying and mixing</strong> occur within one drum, enabling{" "}
          <strong>uniform asphalt quality</strong> and uninterrupted operation.
        </span>
      ),
      image: "/images/admp/mdm-50-2.jpg",
    },
    {
      title: "Precision Flight Design",
      desc: (
        <span>
          Optimized drum flights improve <strong>heat transfer</strong>, enhance{" "}
          <strong>coating uniformity</strong>, and reduce fuel usage.
        </span>
      ),
      image: "/images/admp/mdm-50-3.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Operates on <strong>diesel, LDO, FO, or gas burners</strong>;{" "}
          <strong>auto-viscosity control</strong> ensures consistent spray
          performance.
        </span>
      ),
      image: "/images/admp/mdm-50-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "High-Capacity Throughput",
      desc: (
        <span>
          Rated for <strong>60–90 TPH</strong>, ideal for large municipal and
          highway projects needing constant output.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Durability & Reliability",
      desc: (
        <span>
          Rugged steel construction, <strong>wear-resistant liners</strong>, and{" "}
          <strong>low-vibration design</strong> ensure years of dependable
          operation.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Energy Efficient",
      desc: (
        <span>
          <strong>Ceramic drum insulation</strong> and{" "}
          <strong>efficient flight patterns</strong> minimize heat loss, cutting
          fuel consumption.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "All-Weather Performance",
      desc: (
        <span>
          <strong>Rock-wool insulated bitumen tanks</strong> and{" "}
          <strong>hot-oil jacketing</strong> maintain stable material
          temperature even in cold weather.
        </span>
      ),
      icon: "/images/comman/logo/star.png", // use relevant icon
    },
    {
      title: "Atlas Assurance",
      desc: (
        <span>
          Each plant undergoes <strong>full-scale factory testing</strong> and
          includes <strong>on-site commissioning</strong> for plug-and-play
          readiness.
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
    {
      img: "/images/comman/slider.png",
      title: "MDM 45 Drum Mix Plant",
      desc: "40-60 TPH | Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-45",
      img: "/images/admp/mdm-45-01.png",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MDM 50 Drum Mix Plant",
    //       desc: "60-90 TPH | Mobile Asphalt Drum Mix Plant",
    //       url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-50",
    //       img: "/images/admp/mdm-50-1.jpg",
    //     },
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
      img: "/images/admp/mdm-65-1.jpeg",
    },
  ];
  const components = [
    {
      title: "Mobile Chassis Assembly",
      desc: (
        <ul>
          <li>
            • Heavy-duty frame with axles, kingpin connectors, and road-safety
            features.
          </li>
          <li>
            • Pneumatic braking and lighting system ensure road-legal mobility.
          </li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>• 4 bins with variable-speed drives for accurate feeding.</li>
          <li>• Vibratory motors ensure consistent material flow.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>
            • Heat-resistant belt conveyor delivers aggregates to the drum.
          </li>
          <li>• Controlled by high-efficiency motor for stable operation.</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>• Single-drum continuous system for drying and mixing.</li>
          <li>• Precision flights ensure even heating and mixing.</li>
          <li>
            • Optional ceramic wool & rock wool insulation rated up to 1000°C.
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>• Multi-fuel compatible (Diesel/LDO/FO/Gas).</li>
          <li>
            • Modulating burner for efficient combustion and temperature
            control.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>• Standard venturi-type wet scrubber.</li>
          <li>• Optional baghouse filter for enhanced emission control.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>• Rock-wool insulated tanks with coil heating system.</li>
          <li>
            • Hot-oil jacketing prevents clogging and maintains flow
            consistency.
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>• Screw conveyor feeds filler precisely into the drum.</li>
          <li>• Optional filler silo for high-volume operations.</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            • Inclined, heat-resistant belt conveyor transfers asphalt to trucks
            or silos.
          </li>
          <li>• Built for extended service life and smooth operation.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Fully insulated, pre-wired cabin with clear operator visibility.
          </li>
          <li>
            • Semi-automatic or PLC-based control with alarms and monitoring
            display.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-50 | 60–90 TPH | Road-Legal Mobile | Atlas Technologies</title>
        <meta name="description" content="MDM-50 — 60–90 TPH road-legal mobile drum mix plant, chassis-mounted, kingpin connector, pre-wired junction boxes, all-terrain ready. Get specs from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        videoThumbnail="/images/admp/mdm-50-4.jpg"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-50"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-50-4.jpg"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={
          "MDM 50: The Heavy-Duty Mobile Plant for High-Volume Asphalt Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="High Output | Rugged Engineering | Smart Mobility"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 50?"
        subtitle="Discover why the MDM 50 is the preferred mobile solution for large-scale asphalt works."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Mobile Asphalt Drum Mix Plant is optimized for mobile operation and rapid deployment."
        }
        components={components}
        img = "/images/admp/mdm-50-06.png"
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
