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
    title: "CF 60 Counterflow Asphalt Plant",
    subtitle:
      "90–120 TPH Production | Dual-Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The Atlas CF 60 is a high-capacity counterflow drum mix plant built for 90–120 tons per hour of continuous asphalt production. Its dual-drum counterflow system maximizes heat transfer and fuel efficiency, while separating drying and mixing to ensure uniform asphalt quality.",
      "Built for highways, state roads, and urban infrastructure, the CF 60 combines rugged construction, mobility, and RAP compatibility, making it the ideal choice for contractors managing large-scale projects.",
    ],
    features: [
      "Mega-Project Capacity",
      "Precision Engineering",
      "Sustainable Design",
    ],
    images: [
      "/images/plants/counter-flow/counter-flow-asphalt-plant-01-new.jpeg",
      "/images/plants/counter-flow/counter-flow-asphalt-plant-02-new.jpeg",
      "/images/plants/counter-flow/counter-flow-asphalt-plant-03-new.jpeg",
      "/images/plants/counter-flow/counter-flow-asphalt-plant-04-new.jpeg",
      "/images/plants/counter-flow/counter-flow-asphalt-plant-05-new.jpeg",
      "/images/plants/counter-flow/counter-flow-asphalt-plant-06-new.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of CF 60?",
      content: (
        <>
          <p>
            The CF 60 produces 90–120 TPH under standard conditions (3%
            aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "How does the counterflow design improve efficiency?",
      content: (
        <>
          <p>
            Hot gases move opposite to aggregates, improving heat transfer,
            reducing fuel use, and protecting bitumen from overheating.
          </p>
        </>
      ),
    },
    {
      title: "Can the CF 60 be relocated?",
      content: (
        <>
          <p>
            Yes, it is available in skid-mounted or chassis-mounted
            configurations for mobility.
          </p>
        </>
      ),
    },
    {
      title: "What dust control system is used?",
      content: (
        <>
          <p>
            Supplied with a venturi-type wet scrubber; a baghouse filter is
            available as an option.
          </p>
        </>
      ),
    },
    {
      title: "Can RAP be added to the CF 60?",
      content: (
        <>
          <p>
            Yes. RAP integration is supported with an optional system for
            sustainable asphalt production.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Counterflow Dual Drum",
      desc: (
        <span>
          Drying and heating in the first drum, mixing in the second, away from
          direct flame.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-1.jpg",
    },
    {
      title: "High Throughput",
      desc: (
        <span>
          Produces <strong>90–120 TPH</strong>, suitable for highways and large
          urban projects.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-2.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: <span>Operates on diesel, LDO, FO, or gas-fired burners.</span>,
      image: "/images/plants/counter-flow/cf-3.jpg",
    },
    {
      title: "RAP Ready",
      desc: (
        <span>
          Optional RAP feeding system supports sustainable asphalt production.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-4.jpg",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          Semi-automatic or PLC-based system with alarms and a digital
          interface.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Capacity",
      desc: "Delivers consistent performance at 90–120 tons per hour.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Emission Control",
      desc: "Standard venturi wet scrubber; baghouse filter available for strict norms.",
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Heavy-Duty Build",
      desc: "Abrasion-resistant liners and a robust structure for long service life.",
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Accurate Feeding",
      desc: "Variable-speed cold feeders ensure precise proportioning.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco Efficiency",
      desc: "Counterflow process reduces fuel costs and stack temperature; RAP reduces environmental footprint.",
      icon: "/images/comman/logo/reliable.png",
    },
  ];

  const products = [
    {
      img: "/images/plants/counter-flow/cf-1.jpg",
      title: "CF 45 Counter Flow Drum Mix Plant",
      desc: "40–60 TPH | Compact & Efficient",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-45-40-60-tph",
    },
    {
      img: "/images/plants/counter-flow/cf-2.jpg",
      title: "CF 50 Counter Flow Drum Mix Plant",
      desc: "60–90 TPH | Dust-Controlled System",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-50-60-90-tph",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "CF (60) Counter Flow Drum Mix Plant",
    //       desc: "90–120 TPH | Eco-Friendly Design",
    //       url: "/asphalt-plants/counter-flow-asphalt-plant/cf-60-90-120-tph",
    //     },
    {
      img: "/images/plants/counter-flow/cf-3.jpg",
      title: "CF 65 Counter Flow Drum Mix Plant",
      desc: "120–150 TPH | High Capacity Output",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-65-120-150-tph",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>4 bins with variable-speed drives</li>
          <li>Vibratory motors prevent bridging</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Heat-resistant conveyor belt ensures steady feed to the drum</li>
          <li>Powered by dedicated motors for smooth operation</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Large drum (~1.83 m dia × 6.7 m length) with internal flights</li>
          <li>Counterflow heating provides maximum fuel efficiency</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Isolated from the flame zone to protect bitumen</li>
          <li>
            Thorough mixing of heated aggregates, bitumen, and filler ensures
            uniform coating
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Diesel/LDO standard; FO or gas burners optional</li>
          <li>Modulating design for fuel efficiency</li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Wet venturi scrubber provided as standard</li>
          <li>Baghouse filter optional for strict emission standards</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated tanks with coil heating</li>
          <li>Maintains uniform bitumen temperature</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Hopper with screw conveyor for precise filler addition</li>
          <li>Optional filler silo for higher capacity projects</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Transfers finished asphalt to trucks or silos</li>
          <li>Heat- and wear-resistant belts for durability</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated and pre-wired with operator visibility</li>
          <li>Semi-automatic or PLC-based system with safety interlocks</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>CF-60 | 90–120 TPH | Counterflow Drum | Atlas Technologies India</title>
        <meta name="description" content="CF-60 — 90–120 TPH counterflow plant, reverse airflow reduces unburnt particles and NOx, RAP up to 30%, baghouse below 30 mg/Nm³. Highway specialist. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/nkJzYnNoPbY"
      videoThumbnail="/images/plants/counter-flow/cf-1.jpg"
        pageUrl="/asphalt-plants/counter-flow-asphalt-plant/cf-60-90-120-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/counter-flow/cf-1.jpg"
        videoUrl="https://www.youtube.com/embed/nkJzYnNoPbY"
        title={"Experience the CF 60's Unmatched Performance"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for efficiency, durability, and eco-conscious operation."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas CF 60?"
        subtitle="Discover why the CF 60 is the ultimate choice for medium to large-scale projects with demanding requirements."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each system in the CF-Series is engineered for operational simplicity, cost efficiency, and peak performance."
        }
        components={components}
        img="/images/plants/counter-flow/counter-flow-asphalt-plant-01-new.jpeg"
        
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
