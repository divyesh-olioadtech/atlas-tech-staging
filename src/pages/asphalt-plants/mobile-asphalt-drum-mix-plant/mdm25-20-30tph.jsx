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
    title: "MDM 25 Mobile Asphalt Drum Mix Plant",
    subtitle: "20–30 TPH | Single-Drum Mixing | Mobile & Rapid Deployment",
    description: [
      "The Atlas MDM 25 Mobile Asphalt Drum Mix Plant is a compact, high-performance solution for 20–30 tons per hour of continuous asphalt production. Made for small-scale projects, emergency repairs, and remote site operations, it delivers the same reliable quality as stationary drum mix plants, but with full mobility and rapid setup.",
      "Mounted on a single chassis with axles, kingpin connectors, and pneumatic braking, the MDM 25 ensures easy transport and on-site commissioning within hours. Its efficient single-drum design, precision-engineered flights, and optional 1260°C ceramic wool insulation make it fuel-efficient and dependable, even in tough terrain and extreme weather conditions.",
    ],
    features: ["Quick Setup", "Efficient Transport", "Economical Operations"],
    images: [
      "/images/admp/mdm25-1.jpg",
      "/images/admp/mdm25-2.jpg",
      "/images/admp/mdm25-3.jpg",
      "/images/admp/mdm25-4.jpg",
      "/images/admp/mdm25-5.jpg",
      "/images/admp/mdm25-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of MDM 25?",
      content: (
        <>
          <p>
            The MDM 25 produces <strong>20–30 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "How quickly can the MDM 25 be installed or relocated?",
      content: (
        <>
          <p>
            Thanks to its <strong>modular chassis</strong> and pre-wired design,
            setup can be completed in just a few hours.
          </p>
        </>
      ),
    },
    {
      title: "Is the MDM 25 suitable for remote or emergency work sites?",
      content: (
        <>
          <p>
            Yes, it’s designed for{" "}
            <strong>off-grid and remote applications</strong>, with minimal
            foundation needs and low maintenance.
          </p>
        </>
      ),
    },
    {
      title: "What emission control systems are available?",
      content: (
        <>
          <p>
            Comes with a <strong>wet venturi scrubber</strong> as standard;
            optional
            <strong> baghouse filter</strong> available for enhanced emission
            control.
          </p>
        </>
      ),
    },
    {
      title: "Can RAP (Reclaimed Asphalt Pavement) be integrated?",
      content: (
        <>
          <p>
            Yes, optional RAP integration (up to <strong>15%</strong>) can be
            added for sustainable asphalt production.
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
          Equipped with{" "}
          <strong>axles, kingpin connectors, pneumatic braking,</strong> and
          safety lighting for road-legal transport.
        </span>
      ),
      image: "/images/admp/mdm25-1.jpg",
    },
    {
      title: "Single-Drum Continuous Mixing",
      desc: (
        <span>
          Drying and mixing occur in one drum for seamless, efficient
          production.
        </span>
      ),
      image: "/images/admp/mdm25-2.jpg",
    },
    {
      title: "Rapid Deployment",
      desc: (
        <span>
          Pre-wired junction boxes and modular layout reduce installation time
          to a few hours.
        </span>
      ),
      image: "/images/admp/mdm25-3.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Operates on <strong>diesel, LDO, furnace oil,</strong> or gas burners
          with auto-viscosity control.
        </span>
      ),
      image: "/images/admp/mdm25-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Portable & Road-Ready",
      desc: (
        <span>
          Single chassis design ensures quick relocation between job sites
          without dismantling major components.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // Using 'Reliable' to imply mobility & dependability
    },
    {
      title: "Consistent Output",
      desc: (
        <span>
          Rated for <strong>20–30 TPH</strong>, providing uniform asphalt mix
          for rural and municipal projects.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // Using 'Rapid' for production consistency and speed
    },
    {
      title: "All-Climate Reliability",
      desc: (
        <span>
          Rock-wool insulated bitumen tanks and hot-oil jacketing ensure stable
          material temperature in any climate.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // Using 'Custom' to represent adaptability in all climates
    },
    {
      title: "Fuel-Efficient Performance",
      desc: (
        <span>
          Optimized drum flights enhance heat transfer, reducing fuel usage and
          emissions.
        </span>
      ),
      icon: "/images/comman/logo/money.png", // Using 'Money' for cost and fuel savings
    },
    {
      title: "Atlas Quality Assurance",
      desc: (
        <span>
          Each MDM 25 undergoes full factory testing and comes with on-site
          commissioning support.
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Using 'Engineering' for Atlas QA & technical reliability
    },
  ];

  const products = [
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "MDM 25 Drum Mix Plant",
    //       desc: "20-30 TPH | Mobile Asphalt Drum Mix Plant",
    //       url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
    //   img: "/images/admp/mdm25-6.jpg",
    //     },
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
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph",
      img: "/images/admp/mdm-45-01.png",
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
      title: "Chassis Frame & Mobility System",
      desc: (
        <ul>
          <li>
            Heavy-duty, single chassis with axle and kingpin connectors for easy
            towing
          </li>
          <li>
            Pneumatic braking system and road-safety lighting for transport
            compliance
          </li>
        </ul>
      ),
    },
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            3–4 bins with variable-speed drives for accurate aggregate feeding
          </li>
          <li>Vibrators prevent bridging and ensure consistent flow</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul>
          <li>Heat-resistant belt conveyor feeds aggregates into the drum</li>
          <li>Motorized drive maintains uniform flow</li>
        </ul>
      ),
    },
    {
      title: "Drying & Mixing Drum",
      desc: (
        <ul>
          <li>
            Single-drum design with precision flights for efficient heating and
            mixing
          </li>
          <li>Optional 1260°C ceramic wool insulation enhances fuel savings</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>Multi-fuel compatible (Diesel/LDO/FO/Gas)</li>
          <li>Modulating burner for stable combustion and heat control</li>
        </ul>
      ),
    },
    {
      title: "Dust Control System",
      desc: (
        <ul>
          <li>Venturi-type wet scrubber provided as standard</li>
          <li>Optional baghouse filter for stricter emission norms</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Rock-wool insulated tanks with heating coils</li>
          <li>
            Hot-oil jacketing ensures clog-free operation and temperature
            consistency
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>Screw conveyor feeds filler accurately into the drum</li>
          <li>
            Optional filler silo available for higher capacity applications
          </li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul>
          <li>
            Inclined conveyor discharges finished asphalt into trucks or silos
          </li>
          <li>Heat- and wear-resistant belts ensure durability</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>Pre-wired, insulated cabin with user-friendly interface</li>
          <li>
            Semi-automatic or PLC-based control with alarms and diagnostics
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MDM-25 | 20–30 TPH | Road-Legal | Atlas Technologies India</title>
        <meta name="description" content="MDM-25 — 20–30 TPH chassis-mounted drum mix plant, road-legal with axles and kingpin connector, pneumatic braking, no permanent foundation. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/ZeXehtqHVAs"
      videoThumbnail="/images/admp/mdm25-2.jpg"
        pageUrl="/asphalt-plants/mobile-asphalt-drum-mix-plant/mdm25-20-30tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm25-2.jpg"
        videoUrl="https://www.youtube.com/embed/ZeXehtqHVAs"
        title={"MDM 25: Asphalt Production Where You Need It"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Compact asphalt drum mix plant, engineered for mobility without compromise"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas MDM 25?"
        subtitle="Explore why professional contractors prefer the mobile asphalt drum mix plants (MDM 25 model) for small-scale remote projects."
        features={featuresGridData}
      />
      <Productfaq
        title={"Finely-Engineered Mobile Components"}
        para={
          "Each component of the Mobile Asphalt Drum Mix Plant is optimized for mobile operation and rapid deployment."
        }
        components={components}
        img ="/images/admp/mdm25-4.jpg"
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
