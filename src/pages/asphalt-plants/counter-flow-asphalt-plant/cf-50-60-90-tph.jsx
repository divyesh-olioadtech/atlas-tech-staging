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
    title: "CF 50 Counterflow Drum Mix Plant",
    subtitle:
      "60–90 TPH Production | Dual-Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The Atlas CF 50 is a mid-capacity counterflow drum mix plant designed for 60–90 tons per hour of hot mix asphalt. Its dual-drum counterflow system separates drying and mixing, ensuring efficient heat transfer, fuel savings, and uniform asphalt quality.",
      "Compact and versatile, the CF 50 is ideal for municipal roads, medium-scale highways, and contractors needing reliable continuous production. With a modular layout, fuel flexibility, and RAP compatibility, it delivers both efficiency and mobility.",
    ],
    features: ["Precision Heating", "Uniform Mixing", "Sustainable Innovation"],
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
      title: "What is the rated capacity of CF 50?",
      content: (
        <>
          <p>
            The CF 50 produces <strong>60–90 TPH</strong> under standard
            conditions (3% aggregate moisture at 150°C output).
          </p>
        </>
      ),
    },
    {
      title: "How does the counterflow system improve production?",
      content: (
        <>
          <p>
            Counterflow gas-to-aggregate design improves heat transfer, lowers
            exhaust temperatures, and prevents overheating of bitumen.
          </p>
        </>
      ),
    },
    {
      title: "Is the CF 50 mobile?",
      content: (
        <>
          <p>
            Yes. It is available in <strong>skid-mounted</strong> or{" "}
            <strong>chassis-mounted</strong> versions for flexible deployment.
          </p>
        </>
      ),
    },
    {
      title: "What dust control is provided?",
      content: (
        <>
          <p>
            Supplied with a <strong>wet venturi scrubber</strong> as standard;
            baghouse filter option available.
          </p>
        </>
      ),
    },
    {
      title: "Can RAP be used in the CF 50?",
      content: (
        <>
          <p>
            Yes. RAP integration is possible via an{" "}
            <strong>optional RAP feeding system</strong>, enabling sustainable
            asphalt production.
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
          Counterflow drying with a separate mixing drum ensures uniform asphalt
          quality and lower fuel consumption.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-1.jpg",
    },
    {
      title: "Mobility & Flexibility",
      desc: (
        <span>
          Offered in skid-mounted or chassis-mounted versions for quick
          relocation between job sites.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-2.jpg",
    },
    {
      title: "Fuel Versatility",
      desc: (
        <span>
          Supports diesel, LDO, furnace oil, or gas burners, depending on
          availability and site requirements.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-3.jpg",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          The optional RAP feeding system allows the addition of reclaimed
          asphalt, cutting costs and reducing environmental impact.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-4.jpg",
    },
    {
      title: "Automated Control",
      desc: (
        <span>
          Semi-automatic or PLC-based control system with safety alarms and an
          operator-friendly interface.
        </span>
      ),
      image: "/images/plants/counter-flow/cf-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Balanced Throughput",
      desc: "Rated for 60–90 TPH, providing a reliable solution for medium-scale projects.",
      icon: "/images/comman/logo/reliable.png", // 'reliable' for throughput stability
    },
    {
      title: "Emission Control",
      desc: "Fitted with a venturi-type wet scrubber as standard; baghouse filter available for stricter norms.",
      icon: "/images/comman/logo/eco.png", // 'eco' for emission/environment
    },
    {
      title: "Rugged Construction",
      desc: "Built with abrasion-resistant liners and heavy-duty steel for extended durability.",
      icon: "/images/comman/logo/custom.png", // 'custom' for strength/build quality
    },
    {
      title: "Accurate Material Feeding",
      desc: "Cold aggregate bins with variable-speed drives ensure precise proportioning of materials.",
      icon: "/images/comman/logo/money.png", // 'money' (or use 'gear' if you have one) for precision/efficiency
    },
    {
      title: "Cost & Eco Efficiency",
      desc: "Counterflow process reduces fuel costs, while RAP usage promotes sustainable operation.",
      icon: "/images/comman/logo/globe.png", // 'globe' for global eco-efficiency theme
    },
  ];

  const products = [
    {
      img: "/images/plants/counter-flow/cf-1.jpg",
      title: "CF 45 Counter Flow Drum Mix Plant",
      desc: "40–60 TPH | Compact & Efficient",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-45-40-60-tph",
    },
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "CF (50) Counter Flow Drum Mix Plant",
    //       desc: "60–90 TPH | Dust-Controlled System",
    //       url: "/asphalt-plants/counter-flow-asphalt-plant/cf-50-60-90-tph",
    //     },
    {
      img: "/images/plants/counter-flow/cf-2.jpg",
      title: "CF 60 Counter Flow Drum Mix Plant",
      desc: "90–120 TPH | Eco-Friendly Design",
      url: "/asphalt-plants/counter-flow-asphalt-plant/cf-60-90-120-tph",
    },
    {
      img: "/images/plants/counter-flow/cf-6.jpg",
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
          <li>
            4 bins with variable-speed drives for accurate feeding control
          </li>
          <li>Vibratory motors prevent material clogging during operation</li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            Heat-resistant conveyor belt feeds aggregates to the dryer drum
          </li>
          <li>Smooth and continuous material flow via dedicated drive motor</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Approx. diameter 1.52 m × length 6.7 m (CF 50 scale)</li>
          <li>
            Counterflow design with flights ensures uniform heating and drying
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Second drum isolates mixing from the direct flame</li>
          <li>Ensures thorough blending of aggregates, bitumen, and filler</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            Standard diesel/LDO burner; optional FO/gas burner configurations
          </li>
          <li>
            High-efficiency modulating design for precise temperature control
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Venturi-type wet scrubber provided as standard</li>
          <li>
            Optional baghouse filter available for stricter emission compliance
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated bitumen tanks with thermic oil heating coils</li>
          <li>Temperature-controlled system maintains optimal viscosity</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Hopper with screw conveyor for controlled filler addition</li>
          <li>
            Optional filler silo available for larger or continuous projects
          </li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Transfers hot mix asphalt to trucks or silos efficiently</li>
          <li>Heat- and wear-resistant belt ensures long operational life</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul className="pl-6 space-y-2 list-disc">
          <li>Insulated, pre-wired operator cabin for all-weather use</li>
          <li>
            Houses semi-automatic or PLC-based controls, alarms, and displays
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>CF-50 | 60–90 TPH | Counterflow Drum | Atlas Technologies India</title>
        <meta name="description" content="CF-50 — 60–90 TPH counterflow drum mix plant, reverse airflow for superior thermal efficiency, RAP up to 30%, emissions below 30 mg/Nm³. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/3x_hhjyvzoE"
      videoThumbnail="/images/plants/counter-flow/cf-1.jpg"
        pageUrl="/asphalt-plants/counter-flow-asphalt-plant/cf-50-60-90-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/counter-flow/cf-1.jpg"
        videoUrl="https://www.youtube.com/embed/3x_hhjyvzoE"
        title={"Witness the Working of CF 50 in Quality-Critical Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Industrial-grade performance for high-volume asphalt production"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas CF 50?"
        subtitle="Discover why the CF 50 is the ultimate choice for medium to large-scale projects with demanding requirements."
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
