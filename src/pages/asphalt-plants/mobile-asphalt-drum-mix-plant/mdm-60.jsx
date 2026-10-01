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
    title: "MDM 60 Mobile Asphalt Drum Mix Plant",
    subtitle: "90–120 TPH | Single-Drum Mixing | Portable Design",
    description: [
      "The Atlas MDM 60 Mobile Asphalt Drum Mix Plant delivers consistent 90–120 tons per hour of hot mix asphalt, engineered for large-scale infrastructure, highway, and airport projects. Combining high output efficiency with full mobility, this plant provides uninterrupted production and stable performance across all terrains and climates.",
      "The MDM 60 is built on a heavy-duty chassis with axles, pneumatic brakes, and safety lighting for road-legal mobility. Its single-drum continuous mixing system, coupled with precision-engineered flights and 1000°C ceramic wool & rock wool insulation, ensures excellent heat transfer, uniform coating, and reduced fuel consumption.",
    ],

    features: ["Reliable Performance", "Quick Mobilization", "Fuel-Efficient"],
    // price: "68,00,000",
    images: [
      "/images/admp/mdm-60-1.jpg",
      "/images/admp/mdm-60-2.jpg",
      "/images/admp/mdm-60-3.jpg",
      "/images/admp/mdm-60-4.jpg",
      "/images/admp/mdm-60-5.jpg",
      "/images/admp/mdm-60-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the rated capacity of MDM 60?",
      content: (
        <>
          <p>
            The MDM 60 delivers <strong>90–120 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "2. How quickly can the MDM 60 be deployed?",
      content: (
        <>
          <p>
            The <strong>modular chassis</strong> and{" "}
            <strong>pre-wired design</strong> allow setup and commissioning
            within a <strong>single working day</strong>.
          </p>
        </>
      ),
    },
    {
      title: "3. What makes the MDM 60 suitable for large projects?",
      content: (
        <>
          <p>
            Its <strong>high-capacity drum</strong>,{" "}
            <strong>efficient heating</strong>, and{" "}
            <strong>mobile design</strong> make it ideal for highways, airports,
            and expressways.
          </p>
        </>
      ),
    },
    {
      title: "4. What emission control options are available?",
      content: (
        <>
          <p>
            Standard <strong>wet venturi scrubber</strong>; optional{" "}
            <strong>baghouse filter</strong> for stricter air-quality
            compliance.
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
          Combines <strong>drying and mixing</strong> within one drum to deliver{" "}
          <strong>uninterrupted asphalt output</strong>.
        </span>
      ),
      image: "/images/admp/mdm-60-1.jpg",
    },
    {
      title: "Precision Flight Design",
      desc: (
        <span>
          Aerodynamically optimized flights{" "}
          <strong>maximize heat transfer</strong> and ensure{" "}
          <strong>efficient mixing</strong>.
        </span>
      ),
      image: "/images/admp/mdm-60-2.jpg",
    },
    {
      title: "Rapid Installation",
      desc: (
        <span>
          <strong>Pre-wired junction boxes</strong> and{" "}
          <strong>modular components</strong> enable quick commissioning within{" "}
          <strong>hours</strong>.
        </span>
      ),
      image: "/images/admp/mdm-60-3.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Compatible with{" "}
          <strong>diesel, LDO, furnace oil, or gas burners</strong>;{" "}
          <strong>auto-viscosity control</strong> maintains optimal spraying
          temperature.
        </span>
      ),
      image: "/images/admp/mdm-60-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reliable Throughput",
      desc: (
        <span>
          Rated for <strong>90–120 TPH</strong>, ensuring continuous,
          high-volume asphalt supply.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Durable Construction",
      desc: (
        <span>
          Rugged design with <strong>wear-resistant liners</strong> and a{" "}
          <strong>half-chain drive system</strong> reduces vibration and
          increases longevity.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Thermal Efficiency",
      desc: (
        <span>
          Optional <strong>ceramic wool insulation</strong> retains heat and
          lowers fuel costs during long operations.
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
      title: "Atlas Factory Guarantee",
      desc: (
        <span>
          Each plant undergoes <strong>comprehensive factory testing</strong>{" "}
          and includes <strong>on-site commissioning</strong> for plug-and-play
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
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MDM 60 Drum Mix Plant",
    //       desc: "90-120 TPH | Mobile Asphalt Drum Mix Plant",
    //       url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-60",
    //       img: "/images/admp/mdm-60-1.jpg",
    //     },
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
            • Heavy-duty chassis frame with road-ready axles, pneumatic braking,
            and kingpin connectors.
          </li>
          <li>
            • Safety lighting ensures compliance for long-distance transport.
          </li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>• 4 bins with variable-speed drives for precision feeding.</li>
          <li>• Vibratory motors prevent bridging and ensure uniform flow.</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>
            • Heat-resistant conveyor belt transfers aggregates into the drum.
          </li>
          <li>• Controlled by high-torque motor for smooth operation.</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>• Single drum integrates both drying and mixing zones.</li>
          <li>• Precision flight design ensures even heating and mixing.</li>
          <li>
            • Optional ceramic wool & rock wool insulation rated up to 1000°C
            for maximum efficiency.
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
            • Modulating burner ensures efficient fuel use and precise flame
            control.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>• Venturi-type wet scrubber standard.</li>
          <li>
            • Optional baghouse filter available for stricter emission
            compliance.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>• Rock-wool insulated tanks with heating coils.</li>
          <li>
            • Hot-oil jacketing prevents blockages and maintains viscosity.
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>• Screw conveyor ensures controlled filler addition.</li>
          <li>
            • Optional filler silo for bulk handling and large-scale projects.
          </li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            • Inclined, heat-resistant belt conveyor discharges asphalt into
            trucks or silos.
          </li>
          <li>• Built for long-term performance under heavy load.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>• Pre-wired, insulated operator cabin with clear visibility.</li>
          <li>
            • Semi-automatic or PLC-based controls with alarms, indicators, and
            temperature displays.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-60 | 90–120 TPH | Road-Legal Mobile | Atlas Technologies</title>
        <meta name="description" content="MDM-60 — 90–120 TPH road-legal mobile drum mix plant, chassis-mounted with axles, pneumatic braking and safety lighting. For high-output site relocation. Get specs." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/KdxVHT_EZdU"
        videoThumbnail="/images/admp/mdm-60-1.jpg"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-60"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-60-1.jpg"
        videoUrl="https://www.youtube.com/embed/KdxVHT_EZdU"
        title={
          "MDM 60: The Mobile Powerhouse for Continuous Asphalt Production"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="High Output | Advanced Mobility | Energy Efficiency"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 60?"
        subtitle="See why the MDM 60 is the preferred choice for high-output, mobile asphalt production."
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
