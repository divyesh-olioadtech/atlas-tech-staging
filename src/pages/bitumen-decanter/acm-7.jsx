import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
import FeatureGrid from "../../../components/others/FeatureGrid";
import FeatureSlider from "../../../components/others/FeatureSlider;";
import Productfaq from "../../../components/others/productFaq";
import ProductSlider2 from "../../../components/others/productSlider";
import Video from "../../../components/others/video";
import ProductOverview from "../../../components/products/productslider";
import ProductSlider from "../../../components/products/productslider";
import Head from "next/head";
import ProductSchema from "../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "ACM-7 Bitumen Decanter",
    subtitle: "7-8 TPH | 40 Barrels | 15 Tons",
    description: [
      "The Atlas ACM-7 Bitumen Decanter is a mid-range model in our drum-melting series, designed for 40 barrels per batch and an output of 6 TPH. It offers efficient, indirect heating through a three-pass thermic-oil system, delivering clean, uniform bitumen without thermal degradation.",
      "Ideal for medium-sized or multi-location road projects, ACM-7 combines higher throughput with reliable operation. Its insulated design, hydraulic handling, and automated heating control make it a durable, low-maintenance decanter for demanding work environments.",
    ],
    features: ["High Capacity", "Safe Operation", "Fuel-Efficient"],
    images: [
      "/images/bitumen-decanter/acm-7-1.png",
      "/images/bitumen-decanter/acm-7-2.png",
      "/images/bitumen-decanter/acm-7-3.png",
      // "/images/bitumen-decanter/acm-7-4.jpeg",
      // "/images/bitumen-decanter/acm-7-5.jpeg",
      // "/images/bitumen-decanter/acm-7-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What differentiates ACM-7 from ACM-4?",
      content: (
        <>
          <p>
            ACM-7 offers <strong>50% higher throughput</strong> (6 TPH vs 4 TPH)
            and a larger batch capacity of <strong>40 drums</strong>, making it
            ideal for medium-scale road construction and plant operations.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it operate in remote locations?",
      content: (
        <>
          <p>
            Yes. Its <strong>skid-mounted design</strong> and{" "}
            <strong>self-contained heating system</strong> make it fully
            operational on unpaved or rural sites where{" "}
            <strong>bulk bitumen supply</strong> is unavailable.
          </p>
        </>
      ),
    },
    {
      title: "3. How does it prevent bitumen degradation?",
      content: (
        <>
          <p>
            <strong>Indirect heating</strong> keeps bitumen below oxidation
            thresholds, while <strong>insulation</strong> and{" "}
            <strong>automated temperature control</strong> prevent localized
            overheating.
          </p>
        </>
      ),
    },
    {
      title: "4. Is customisation available for tank size or fuel type?",
      content: (
        <>
          <p>
            Yes. Atlas offers <strong>larger storage tanks</strong>,{" "}
            <strong>alternate burners</strong>, and{" "}
            <strong>fuel system adjustments</strong> to match project and
            regional requirements.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Indirect Heating Technology",
      desc: (
        <span>
          Three-pass <strong>thermic-oil circulation</strong> melts bitumen
          drums uniformly, eliminating <strong>direct flame contact</strong> and
          protecting material properties throughout each <strong>6 TPH</strong>{" "}
          cycle.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-7-1.jpeg",
    },
    {
      title: "Hydraulic Drum Loading System",
      desc: (
        <span>
          Robust <strong>hydraulic lifters</strong> handle up to{" "}
          <strong>40 drums (≈ 8 tons per batch)</strong> with single-operator
          control, reducing manual labour and ensuring smoother handling under
          heavy workloads.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-7-2.jpeg",
    },
    {
      title: "Compact and Modular Design",
      desc: (
        <span>
          A <strong>skid-mounted framework</strong> enables quick site
          installation and relocation. Ideal for contractors managing multiple
          sites or operating in semi-remote regions.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-7-3.jpeg",
    },
    {
      title: "Smart Integration & Low Maintenance",
      desc: (
        <span>
          Compatible with existing <strong>asphalt and binder plants</strong>;{" "}
          <strong>corrosion-resistant heating coils</strong>,{" "}
          <strong>auto-temperature regulation</strong>, and{" "}
          <strong>easy-access panels</strong> ensure reduced servicing downtime
          and steady performance.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-7-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for Higher Throughput",
      desc: (
        <span>
          With <strong>6 TPH output</strong>, ACM-7 is engineered for
          medium-volume melting where consistency and pace matter. It maintains{" "}
          <strong>high flow efficiency</strong> across all{" "}
          <strong>40 drums</strong> without increasing fuel or labour demand.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uniform Heating Assurance",
      desc: (
        <span>
          The <strong>indirect thermic-oil system</strong> maintains even
          temperature profiles across the chamber. Each drum reaches the same
          melt rate, ensuring <strong>homogenous bitumen quality</strong> for
          paving or mix plants.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Fuel Economy and Flexibility",
      desc: (
        <span>
          ACM-7 uses <strong>diesel, LDO, or gas</strong> with optimized burner
          controls and <strong>dense insulation</strong> to minimise heat loss,
          thereby cutting operational fuel costs by up to <strong>20%</strong>{" "}
          over open-flame systems.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Enhanced Safety & Automation",
      desc: (
        <span>
          <strong>Hydraulic loading</strong>,{" "}
          <strong>auto-level control</strong>, and{" "}
          <strong>pressure-relief valves</strong> keep operators safe while
          maintaining system integrity under continuous load.{" "}
          <strong>(Optional PLC panel automation)</strong>.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Global Support & Custom Options",
      desc: (
        <span>
          Atlas supports{" "}
          <strong>commissioning, training, and after-sales</strong> in{" "}
          <strong>40+ countries</strong>. ACM-7 units can be customised with{" "}
          <strong>extended storage tanks</strong> or{" "}
          <strong>transfer modules</strong> to fit diverse project scales.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

 const products = [
        {
          img: "/images/bitumen-decanter/acm-4-1.png",
          title: "ACM-4",
          desc: "27 Barrel/Batch | 9–10 Tons | 4 TPH",
          url: "/bitumen-decanter/acm-4",
          
        },
    // {
    //   img: "/images/bitumen-decanter/acm-7-1.png",
    //   title: "ACM-7 ",
    //   desc: "40 Barrel/Batch | 15 Tons | 6 TPH",
    //   url: "/bitumen-decanter/acm-7"      
    // },
    {
      img: "/images/bitumen-decanter/acm-9-2.png",
      title: "ACM-9 ",
      desc: "50 Barrel/Batch | 20 Tons | 8 TPH",
      url: "/bitumen-decanter/acm-9"     
    },
    {
      img: "/images/bitumen-decanter/acm-11-2.png",
      title: "ACM-11 ",
      desc: "60 Barrel/Batch | 25 Tons | 10 TPH",
      url: "/bitumen-decanter/acm-11"
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "Drum Decanter (Customizable)",
    //   desc: "27–60 Barrel/Batch | 9–25 Tons | 4–10 TPH",
    //   url: "/bitumen-decanter/acm-11"
    // },
  ];


  const components = [
    {
      title: "Thermic-Oil Heater",
      desc: (
        <ul>
          <li>
            • Automatic diesel/LDO burner with thermostatic controls maintains
            oil temperature of 200–240 °C.
          </li>
          <li>
            • Multi-pass coils deliver efficient heat transfer and fast melt
            response.
          </li>
        </ul>
      ),
    },
    {
      title: "Melting Chamber",
      desc: (
        <ul>
          <li>• Fully insulated steel chamber handles 40 drums per batch.</li>
          <li>
            • Coil layout ensures uniform melting and easy drum clearance
            through rear access doors.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Heavy-Duty",
      desc: (
        <ul>
          <li>• Designed for heavy-duty batch cycles and repeat operation.</li>
          <li>
            • Reversible hydraulics allow safe ejection of empty drums after
            melting.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Collection Tank",
      desc: (
        <ul>
          <li>
            • Insulated storage below the melting zone with capacity of ~15
            tons.
          </li>
          <li>
            • Includes temperature sensor, sampling valve, and agitator for
            homogeneity.
          </li>
        </ul>
      ),
    },
    {
      title: "Transfer Pump",
      desc: (
        <ul>
          <li>
            • High-torque gear pump moves bitumen to asphalt plants or tanks.
          </li>
          <li>
            • Optional variable-speed drive for flow control and energy
            efficiency.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety System",
      desc: (
        <ul>
          <li>
            • Central panel with auto-cutoff, temperature display, and emergency
            stop.
          </li>
          <li>
            • Pressure relief and auto-level controls safeguard against overflow
            or over-temperature.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACM-7 Bitumen Decanter | 15 TPH | Thermic Oil | Atlas India</title>
        <meta name="description" content="ACM-7 — 15 TPH bitumen decanter, three-pass thermic oil heating, no bitumen aging, rugged frame. For medium-scale drum bitumen sites. Get specs and factory price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/To1JqMed7f8"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-decanter/acm-7"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-decanter/acm-7-3.png"
        videoUrl="https://www.youtube.com/embed/To1JqMed7f8"
        title={
          "ACM-7: Safe, Reliable & High-Performance Bitumen Melting for Medium-Scale Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Safe and Reliable Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ACM-7"
        subtitle="The ACM-7 is a mid-range bitumen decanter designed for contractors who need reliable 6 TPH performance and faster drum processing without compromising fuel economy."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACM Series of Bitumen Decanting Machine offers quick startup and continuous flow of molten bitumen."
        }
        components={components}
        img = "/images/bitumen-decanter/acm-7-1.png"
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
