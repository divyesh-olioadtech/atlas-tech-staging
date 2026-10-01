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
    title: "CF 45 Counterflow Asphalt Plant",
    subtitle:
      "40–60 TPH Production | Dual-Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The Atlas CF 45 is the entry-level model in the Counterflow Drum Mix Plant series, delivering 40–60 tons per hour of high-quality hot mix asphalt. Using a dual-drum counterflow design, the first drum efficiently dries and heats aggregates while the second drum blends them with bitumen and filler. This separation ensures uniform asphalt quality, fuel savings, and reduced emissions.",
      "Compact, mobile, and fuel-flexible, the CF 45 is ideally suited for small-to-medium road projects, rural infrastructure works, and municipal applications where efficiency and mobility are key.",
    ],
    features: [
      "Better Bitumen Heating",
      "Multi-Fuel Adaptability",
      "Emission-Compliant",
    ],
    images: [
      "/images/plants/counter-flow/cfatlasnewpic.webp",
      "/images/plants/counter-flow/cf-2.jpg",
      "/images/plants/counter-flow/cf-3.jpg",
      "/images/plants/counter-flow/cf-new-7.jpeg",
      "/images/plants/counter-flow/cf-new-8.jpeg",
      
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of CF 45?",
      content: (
        <p>
          The CF 45 produces <strong>40–60 TPH</strong> under standard
          conditions (3% aggregate moisture at 150°C output).
        </p>
      ),
    },
    {
      title: "How does the counterflow system improve efficiency?",
      content: (
        <p>
          Hot gases move counter to aggregate flow, improving heat transfer,
          lowering exhaust temperatures, and reducing fuel use.
        </p>
      ),
    },
    {
      title: "Can the CF 45 be relocated?",
      content: (
        <p>
          Yes. Available in <strong>skid-mounted</strong> and{" "}
          <strong>chassis-mounted</strong> versions, suitable for mobile
          applications.
        </p>
      ),
    },
    {
      title: "What dust control is included?",
      content: (
        <p>
          Standard <strong>venturi-type wet scrubber</strong>; optional{" "}
          <strong>baghouse filter</strong> for areas with stricter norms.
        </p>
      ),
    },
    {
      title: "Can RAP be used in CF 45?",
      content: (
        <p>
          Yes. RAP integration is supported with an optional feeding system,
          promoting sustainable asphalt production.
        </p>
      ),
    },
  ];

  const featureData = [
    {
      title: "Counterflow Dual Drum",
      desc: (
        <span>
          Hot gases move counter to aggregates for maximum heat transfer; drying
          and mixing are separated for superior quality
        </span>
      ),
      image: "/images/plants/counter-flow/cf-1.jpg",
    },
    {
      title: "Compact & Mobile",
      desc: (
        <span>
          Skid-mounted or chassis-mounted configurations make relocation quick
          and economical
        </span>
      ),
      image: "/images/plants/counter-flow/cf-2.jpg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Runs on diesel, LDO, furnace oil, or gas burners, depending on site
          conditions
        </span>
      ),
      image: "/images/plants/counter-flow/cf-3.jpg",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          The optional RAP system enables the use of reclaimed asphalt pavement,
          cutting costs and emissions
        </span>
      ),
      image: "/images/plants/counter-flow/cf-4.jpg",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          Semi-automatic or PLC-based control systems with an operator-friendly
          interface and safety alarms
        </span>
      ),
      image: "/images/plants/counter-flow/cf-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Efficient Production",
      desc: "Rated for 40–60 TPH, ideal for municipal and rural road projects",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          Fitted with a venturi-type wet scrubber as standard; baghouse filter
          available as an option
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Durable Build",
      desc: (
        <span>
          Heavy-duty steel construction and abrasion-resistant liners extend
          service life
        </span>
      ),
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Accurate Feeding",
      desc: (
        <span>
          Variable-speed cold aggregate feeders ensure precise material
          proportioning
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Eco-Friendly & Cost-Efficient",
      desc: (
        <span>
          Counterflow process reduces fuel use, and RAP compatibility promotes
          sustainable operation
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png",
    },
  ];

  const products = [
    // {
    //   img: "/images/comman/slider.png",
    //   title: "CF (45) Counter Flow Drum Mix Plant",
    //   desc: "40–60 TPH | Compact & Efficient",
    //   url: "/asphalt-plants/counter-flow-asphalt-plant/counter-flow-drum-mix-plant-cf-45-40-60-tph",
    // },
    {
      img: "/images/plants/counter-flow/cf-1.jpg",
      title: "CF 50 Counter Flow Drum Mix Plant",
      desc: "60–90 TPH | Dust-Controlled System",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-50-60-90-tph",
    },
    {
      img: "/images/plants/counter-flow/cf-2.jpg",
      title: "CF 60 Counter Flow Drum Mix Plant",
      desc: "90–120 TPH | Eco-Friendly Design",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-60-90-120-tph",
    },
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
          <li>Typically 3–4 bins with variable-speed drives</li>
          <li>Vibrators prevent material bridging</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            Heat-resistant belt conveyor transfers aggregates to the drying drum
          </li>
          <li>Smooth operation via dedicated motors</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>First drum for aggregate drying and heating</li>
          <li>
            Counterflow ensures better fuel efficiency and uniform heating
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            Separate mixing drum blends heated aggregates, bitumen, and filler
          </li>
          <li>Protects bitumen from direct flame exposure</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Standard diesel/LDO burner; FO/gas options available</li>
          <li>High-efficiency modulating burner design</li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Standard venturi-type wet scrubber</li>
          <li>Optional baghouse filter for stricter compliance</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated tank with heating coils</li>
          <li>Maintains bitumen at the required temperature</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Hopper with screw conveyor for controlled filler addition</li>
          <li>Optional filler silo for higher capacity</li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Transfers hot mix asphalt into trucks or storage silos</li>
          <li>Heat- and wear-resistant belts for durability</li>
        </ul>
      ),
    },
    {
      title: "Control Panel / Cabin",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Semi-automatic or PLC-based system</li>
          <li>Pre-wired, insulated cabin with safety alarms</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>CF-45 | 40–60 TPH | Counterflow Drum | Atlas Technologies India</title>
        <meta name="description" content="CF-45 — 40–60 TPH counterflow drum mix plant, exhaust and aggregate move in opposite directions for better heat transfer, RAP up to 30%, CPCB-compliant. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/WrETq7fhfQk"
      videoThumbnail="/images/plants/counter-flow/cf-1.jpg"
        pageUrl="/asphalt-plants/counter-flow-asphalt-plant/cf-45-40-60-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/counter-flow/cf-1.jpg"
        videoUrl="https://www.youtube.com/embed/WrETq7fhfQk"
        title={"Witness the Working of CF 45 in Quality-Critical Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for efficiency, durability, and eco-conscious operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas CF 45?"
        subtitle="Discover why the CF 45 Counter Flow Plant is trusted by asphalt producers worldwide."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each system in the CF-Series is engineered for operational simplicity, cost efficiency, and peak performance."
        }
        components={components}
        img ="/images/plants/counter-flow/cf-3.jpg"
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
