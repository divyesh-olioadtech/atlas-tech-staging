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
    title: "MDM 65 Mobile Asphalt Drum Mix Plant",
    subtitle: "120–150 TPH | Single-Drum Mixing | Heavy-Duty Design",
    description: [
      "The Atlas MDM 65 Mobile Asphalt Drum Mix Plant is the flagship model in the MDM Series, delivering 120–150 tons per hour of consistent, high-quality asphalt production. Built for expressways, airports, and major infrastructure projects, it offers the power of a stationary plant with the mobility of a trailer-mounted system.",
      "Featuring a single drum, half-chain drive system, and optional 1000°C ceramic wool & rock wool insulation, the MDM 65 guarantees superior thermal efficiency, reduced fuel consumption, and long-term durability. Its modular, chassis-mounted structure allows fast transport and on-site setup, making it ideal for contractors requiring heavy-duty, continuous asphalt production on the move.",
    ],
    features: ["Reliable Performance", "Quick Mobilization", "Fuel-Efficient"],
    images: [
      "/images/admp/mdm-60-2.jpg",
      "/images/admp/mdm-60-1.jpg",
      "/images/admp/mdm-60-3.jpg",
      "/images/admp/mdm-60-4.jpg",
      "/images/admp/mdm-60-5.jpg",
      "/images/admp/mdm-60-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of MDM 65?",
      content: (
        <>
          <p>
            The MDM 65 produces <strong>120–150 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. Is the MDM 65 mobile?",
      content: (
        <>
          <p>
            Yes, it’s fully <strong>chassis-mounted</strong> with{" "}
            <strong>road-legal axles, pneumatic brakes,</strong> and{" "}
            <strong>safety lighting</strong> for hassle-free transport.
          </p>
        </>
      ),
    },
    {
      title: "3. How fast can the plant be commissioned?",
      content: (
        <>
          <p>
            Thanks to its <strong>pre-wired</strong> and{" "}
            <strong>modular structure</strong>, commissioning is typically
            completed within <strong>one working day</strong>.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control systems are available?",
      content: (
        <>
          <p>
            Supplied with a <strong>venturi-type wet scrubber</strong> as
            standard; an optional <strong>baghouse filter</strong> is available
            for stricter norms.
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
          Heavy-duty, <strong>trailer-style chassis</strong> with{" "}
          <strong>axles, kingpin connectors,</strong> and{" "}
          <strong>pneumatic braking</strong> for legal, safe transport.
        </span>
      ),
      image: "/images/admp/mdm-60-2.jpg",
    },
    {
      title: "Single-Drum Continuous Mixing",
      desc: (
        <span>
          Dries and mixes <strong>aggregates and bitumen</strong> in a{" "}
          <strong>single drum</strong> for smooth, consistent asphalt
          production.
        </span>
      ),
      image: "/images/admp/mdm-60-5.jpg",
    },
    {
      title: "Precision Flight Engineering",
      desc: (
        <span>
          <strong>High-efficiency flights</strong> ensure even aggregate
          coating, improved <strong>fuel use</strong>, and uniform{" "}
          <strong>temperature control</strong>.
        </span>
      ),
      image: "/images/admp/mdm-60-6.jpg",
    },
    {
      title: "Multi-Fuel Flexibility",
      desc: (
        <span>
          Operates on <strong>diesel, LDO, furnace oil, or gas burners</strong>{" "}
          with <strong>auto-viscosity control</strong> for steady temperature
          regulation.
        </span>
      ),
      image: "/images/admp/mdm-60-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Unmatched Capacity",
      desc: (
        <span>
          Rated for <strong>120–150 TPH</strong>, ensuring uninterrupted supply
          for highways, airports, and expressway construction.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Enhanced Durability",
      desc: (
        <span>
          Robust construction, featuring{" "}
          <strong>abrasion-resistant liners</strong> and a{" "}
          <strong>low-vibration design</strong>, ensures extended equipment
          life.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Superior Thermal Efficiency",
      desc: (
        <span>
          Optional <strong>ceramic wool & rock wool drum insulation</strong>{" "}
          minimizes heat loss and lowers fuel consumption.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "All-Weather Reliability",
      desc: (
        <span>
          <strong>Rock-wool insulated bitumen tanks</strong> and{" "}
          <strong>hot-oil jacketing</strong> prevent cooling or clogging in low
          temperatures.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Atlas Factory Assurance",
      desc: (
        <span>
          Each unit undergoes <strong>comprehensive factory testing</strong> and
          comes with <strong>on-site commissioning</strong> for ready-to-use
          performance.
        </span>
      ),
      icon: "/images/comman/logo/star.png", // use relevant icon
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
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MDM 65 Drum Mix Plant",
    //       desc: "120-150 TPH | Mobile Asphalt Drum Mix Plant",
    //       url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-65",
    //       img: "/images/admp/mdm-65-1.jpeg",
    //     },
  ];
  const components = [
    {
      title: "Mobile Chassis Assembly",
      desc: (
        <ul>
          <li>
            • Heavy-duty chassis with axles, pneumatic brakes, and kingpin
            connectors.
          </li>
          <li>• Safety lighting system ensures road-legal mobility.</li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>• 4–5 bins with variable-speed drives for precise feeding.</li>
          <li>• Vibratory motors prevent bridging and ensure smooth flow.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>• Heat-resistant conveyor belt for continuous material flow.</li>
          <li>• Powered by high-torque motor for uniform feeding.</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>• Large-capacity single drum with precision flight design.</li>
          <li>• Efficient drying and mixing zones ensure uniform coating.</li>
          <li>
            • Optional 1000°C ceramic wool & rock wool insulation for maximum
            fuel savings.
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
            • Modulating flame control for stable combustion and reduced
            emissions.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>• Venturi-type wet scrubber provided as standard.</li>
          <li>• Optional baghouse filter for advanced emission reduction.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            • Rock-wool insulated tanks with heating coils and hot-oil
            jacketing.
          </li>
          <li>• Ensures steady temperature and prevents line clogging.</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>• Screw conveyor feeds filler precisely into the drum.</li>
          <li>• Optional silo available for large-volume filler handling.</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            • Inclined, heat-resistant conveyor for asphalt discharge into
            trucks or silos.
          </li>
          <li>• Built for heavy-duty, continuous operation.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Insulated, pre-wired operator cabin with digital display and
            safety alarms.
          </li>
          <li>
            • Semi-automatic or PLC-based control options for seamless
            operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-65 | 120–150 TPH | Road-Legal Mobile | Atlas Technologies</title>
        <meta name="description" content="MDM-65 — 120–150 TPH, Atlas's highest-capacity road-legal mobile drum mix plant. Chassis-mounted, kingpin connector, pneumatic braking. For megaprojects. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/KdxVHT_EZdU"
      videoThumbnail="/images/admp/mdm-65-1.jpg"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-65"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-65-1.jpg"
        videoUrl="https://www.youtube.com/embed/KdxVHT_EZdU"
        title={"MDM 65: The Flagship Mobile Asphalt Plant for Mega Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Maximum Output | Rugged Design | Optimized Efficiency"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 65?"
        subtitle="See why the MDM 65 is the preferred choice for high-output, mobile asphalt production."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Mobile Asphalt Drum Mix Plant is optimized for mobile operation and rapid deployment."
        }
        components={components}
        img = "/images/admp/mdm-60-1.jpg"
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
