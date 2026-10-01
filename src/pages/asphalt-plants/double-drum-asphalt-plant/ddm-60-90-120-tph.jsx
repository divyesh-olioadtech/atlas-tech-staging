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
    title: "DDM 60 Double Drum Asphalt Plant",
    subtitle:
      "90–120 TPH Production | Dual-Drum Counterflow | Mobile & RAP Compatible",
    description: [
      "The Atlas DDM 60 is the highest-capacity standard model in the double drum asphalt plant series, designed to deliver 90–120 tons per hour of hot mix asphalt. Featuring a dual-drum counterflow system, it separates aggregate drying and asphalt mixing to ensure superior heat transfer, lower emissions, and consistent mix quality.",
      "With its rugged construction, flexible fuel options, and modular layout, the DDM 60 is ideal for highway construction, airport works, and large-scale infrastructure projects where continuous production and efficiency are critical.",
    ],
    // price: "75,00,000",
    features: ["High-Volume Output", "Dual-Stage Mixing", "Fuel-Efficient"],
    images: [
      "/images/admp/ddm-50-1.jpeg",
      "/images/admp/ddm-45-2.jpeg",
      "/images/admp/ddm-50-3.jpeg",
      "/images/admp/ddm-45-4.jpeg",
      "/images/admp/ddm-50-5.jpeg",
      "/images/admp/ddm-45-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "What is the rated capacity of the DDM 60?",
      content: (
        <>
          <p>
            The <strong>DDM 60</strong> produces <strong>90–120 TPH</strong>{" "}
            under standard conditions (3% aggregate moisture at 150°C output
            temperature).
          </p>
        </>
      ),
    },
    {
      title: "How does the double drum counterflow design benefit operations?",
      content: (
        <>
          <p>
            The <strong>counterflow system</strong> improves heat transfer,
            lowers exhaust temperatures, and protects bitumen from direct flame
            exposure, resulting in <strong>better mix quality</strong> and{" "}
            <strong>lower fuel costs.</strong>
          </p>
        </>
      ),
    },
    {
      title: "Can the DDM 60 be used as a mobile plant?",
      content: (
        <>
          <p>
            Yes, Atlas offers <strong>skid-mounted</strong> and{" "}
            <strong>chassis-mounted versions</strong> suitable for
            <strong> mobile deployment</strong> across different job sites.
          </p>
        </>
      ),
    },
    {
      title: "What emission control systems are included?",
      content: (
        <>
          <p>
            A <strong>wet venturi scrubber</strong> is standard, while a{" "}
            <strong>baghouse filter</strong> is available as an option for
            regions with more stringent emission norms.
          </p>
        </>
      ),
    },
    {
      title: "Is RAP feeding possible?",
      content: (
        <>
          <p>
            Yes, the <strong>DDM 60</strong> supports{" "}
            <strong>RAP integration</strong>, enabling{" "}
            <strong>cost-effective</strong> and <strong>eco-friendly</strong>{" "}
            asphalt production.
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
          Drying drum <strong>heats and removes moisture</strong>; mixing drum{" "}
          <strong>blends aggregates, bitumen, and filler</strong> to produce
          uniform, high-quality asphalt.
        </span>
      ),
      image: "/images/admp/ddm-50-1.jpeg",
    },
    {
      title: "High Throughput",
      desc: (
        <span>
          Designed to produce <strong>90–120 TPH</strong>, suitable for{" "}
          <strong>large projects</strong> and continuous paving operations.
        </span>
      ),
      image: "/images/admp/ddm-45-2.jpeg",
    },
    {
      title: "Fuel Flexibility",
      desc: (
        <span>
          Operates with <strong>diesel</strong>, <strong>LDO</strong>,{" "}
          <strong>furnace oil</strong>, or <strong>gas-fired burners</strong> to
          adapt to varying site conditions.
        </span>
      ),
      image: "/images/admp/ddm-45-4.jpeg",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          Optional <strong>RAP feeding system</strong> allows controlled use of{" "}
          <strong>reclaimed asphalt pavement</strong> for sustainable
          production.
        </span>
      ),
      image: "/images/admp/ddm-50-3.jpeg",
    },
    {
      title: "Advanced Control",
      desc: (
        <span>
          <strong>Semi-automatic or PLC-based control system</strong> with{" "}
          <strong>digital display</strong>, data logging, and essential{" "}
          <strong>safety interlocks</strong>.
        </span>
      ),
      image: "/images/admp/ddm-50-5.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Capacity",
      desc: (
        <span>
          Reliably delivers <strong>90–120 TPH</strong> under standard
          conditions (<strong>3% aggregate moisture</strong>,{" "}
          <strong>150°C output</strong>).
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // 'Globe' for capacity/performance consistency
    },
    {
      title: "Emission Control",
      desc: (
        <span>
          Equipped with a <strong>venturi-type wet scrubber</strong> as
          standard; optional <strong>baghouse filter</strong> for enhanced air
          quality.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // 'Eco' fits emission control
    },
    {
      title: "Heavy-Duty Construction",
      desc: (
        <span>
          <strong>Robust steel structure</strong> and{" "}
          <strong>abrasion-resistant liners</strong> ensure durability and long
          service life.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // 'Reliable' suits heavy-duty and durable
    },
    {
      title: "Precision Feeding",
      desc: (
        <span>
          <strong>Individual cold aggregate feeders</strong> with{" "}
          <strong>variable-speed drives</strong> ensure accurate proportioning
          for consistent mix quality.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // 'Custom' for precision and control
    },
    {
      title: "Cost & Eco Efficiency",
      desc: (
        <span>
          <strong>Optimized counterflow process</strong> reduces fuel
          consumption, while <strong>RAP integration</strong> and{" "}
          <strong>dust collection</strong> minimize environmental impact.
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // 'Profit&ROI' for efficiency and savings
    },
  ];

  const products = [
    {
      img: "/images/comman/slider.png",
      title: "DDM 45 Double Drum Mix Plant",
      desc: "40–60 TPH | Compact & Efficient ",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-45-40-60-tph",
      img: "/images/admp/ddm.jpeg",
    },
    {
      img: "/images/comman/slider.png",
      title: "DDM 50 Double Drum Mix Plant",
      desc: "60–90 TPH | Dust-Controlled System",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-50-60-90-tph",
      img: "/images/admp/ddm-45-2.jpeg",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "DDM (60) Double Drum Mix Plant",
    //   desc: "90–120 TPH | Eco-Friendly Design",
    //   url: "asphalt-plants/double-drum-asphalt-plant/ddm-60-90-120-tph",
    //   img: "/images/admp/ddm-50-3.jpeg",
    // },
    {
      img: "/images/comman/slider.png",
      title: "DDM 65 Double Drum Mix Plant",
      desc: "120–150 TPH | High Capacity Output",
      url: "/asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph",
      img: "/images/admp/ddm-50-4.jpeg",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">3–4 bins</span> equipped with
            variable-speed drives for controlled material flow.
          </li>
          <li>
            <span className="font-bold">Vibrators</span> prevent bridging and
            ensure continuous feeding of aggregates.
          </li>
        </ul>
      ),
    },
    {
      title: "Charging / Slinger Conveyor",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Heat-resistant belt conveyor</span>{" "}
            feeds aggregates to the drying drum smoothly.
          </li>
          <li>
            Driven by <span className="font-bold">dedicated motors</span> for
            reliable and consistent operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Diameter × length:</span> approx.{" "}
            <span className="font-bold">1.830 m × 6.710 m</span> (DDM 60 class).
          </li>
          <li>
            Equipped with <span className="font-bold">lifting flights</span> for
            uniform heating and efficient moisture removal.
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Separate mixing drum</span> ensures
            complete blending of aggregates, bitumen, and filler.
          </li>
          <li>
            Prevents <span className="font-bold">overheating</span> of bitumen
            and additives to maintain mix quality.
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">High-capacity modulating burner</span>{" "}
            ensures efficient fuel utilization.
          </li>
          <li>
            Standard fuel: <span className="font-bold">Diesel/LDO</span>;
            optional <span className="font-bold">FO/gas</span> compatibility.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Control",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Wet venturi scrubber</span> provided as
            standard for effective dust removal.
          </li>
          <li>
            Optional <span className="font-bold">baghouse filter</span>{" "}
            available for enhanced emission control.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Insulated tanks</span> with heating
            coils maintain consistent bitumen temperature.
          </li>
          <li>
            Designed for <span className="font-bold">energy-efficient</span>{" "}
            heating and minimal heat loss.
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Hopper with screw conveyor</span> for
            precise and consistent filler addition.
          </li>
          <li>
            Optional <span className="font-bold">filler silo</span> available
            for higher production requirements.
          </li>
        </ul>
      ),
    },
    {
      title: "Load-Out Conveyor",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">Inclined conveyor</span> discharges
            finished mix into trucks or storage silos.
          </li>
          <li>
            Uses{" "}
            <span className="font-bold">heat- and wear-resistant belts</span>{" "}
            for long service life.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-bold">
              Insulated, pre-wired operator cabin
            </span>{" "}
            for safe and efficient control.
          </li>
          <li>
            Houses{" "}
            <span className="font-bold">PLC or semi-automatic controls</span>,
            alarms, and process monitoring systems.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DDM 60 | 90–120 TPH | 1000kg Dual-Drum | Atlas Technologies</title>
        <meta name="description" content="DDM 60 — 90–120 TPH, 1000kg dual-drum, separate drying and mixing zones, RAP up to 25%, CPCB-compliant baghouse. For high-output urban highway projects. Get specs." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        videoThumbnail="/images/admp/ddm-50-1.jpeg"
        pageUrl="/asphalt-plants/double-drum-asphalt-plant/ddm-60-90-120-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/ddm-50-1.jpeg"
        videoUrl="https://www.youtube.com/embed/l0ekpbUnx9Y"
        title={"Witness the DDM 60’s Unmatched Productivity"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Mega Projects | Advanced Automation | Low Operational Costs"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DDM 60?"
        subtitle="The Ultimate Choice for High-Capacity, Eco-Friendly Asphalt Production"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Double Drum Asphalt Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img =  "/images/admp/ddm-50-5.jpeg"
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
