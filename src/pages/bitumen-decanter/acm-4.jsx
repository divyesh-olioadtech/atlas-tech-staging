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
    title: "ACM-4 Bitumen Decanter",
    subtitle: "4-5 TPH | 27 Barrels | 9–10 Tons",
    description: [
      "The Atlas ACM-4 Bitumen Decanter is the most compact model in our drum-melting series, designed for 27 barrels per batch and an output of 4 TPH. It offers efficient, indirect heating through a three-pass thermic-oil system, ensuring high-quality liquid bitumen without degradation.",
      "Ideal for small or remote road projects, ACM-4 simplifies on-site bitumen melting, minimizes manual handling, and cuts fuel costs through its insulated, low-maintenance design.",
    ],
    features: ["Efficient Performance", "Portable Design", "Fuel-Efficient"],
    images: [
      "/images/bitumen-decanter/acm-4-1.png",
      "/images/bitumen-decanter/acm-4-2.png",
      "/images/bitumen-decanter/acm-4-3.png",
      // "/images/bitumen-decanter/acm-4-4.jpeg",
      // "/images/bitumen-decanter/acm-4-5.jpeg",
      // "/images/bitumen-decanter/acm-4-6.jpeg",
    ],
  };

  const faqData = [
    {
      title:
        "1. What makes ACM-4 safer than conventional drum-melting methods?",
      content: (
        <>
          <p>
            ACM-4 Bitumen Decanter uses{" "}
            <strong>indirect thermic oil heating</strong> instead of direct
            flame, preventing bitumen degradation and eliminating exposure to
            open fire.
          </p>
        </>
      ),
    },
    {
      title: "2. Is it suitable for remote locations?",
      content: (
        <>
          <p>
            Yes. ACM-4 is <strong>skid-mounted</strong>, self-contained, and
            easy to install on unpaved terrain. This makes it suitable for areas
            where
            <strong> bulk bitumen supply is limited</strong>.
          </p>
        </>
      ),
    },
    {
      title: "3. Can it integrate with existing asphalt plants?",
      content: (
        <>
          <p>
            Absolutely. The unit connects directly to{" "}
            <strong>storage tanks or plant feed lines</strong> using standard
            pump interfaces.
          </p>
        </>
      ),
    },
    {
      title: "4. What kind of maintenance is required?",
      content: (
        <>
          <p>
            Regular cleaning of filters, checking <strong>oil levels</strong>{" "}
            and <strong>burner nozzles</strong>, and lubricating{" "}
            <strong>hydraulic components</strong> keep uptime high.
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
          drums uniformly, eliminating <strong>direct-flame contact</strong> and
          preventing material ageing or oxidation.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-4-1.png",
    },
    {
      title: "Hydraulic Drum Loading System",
      desc: (
        <span>
          Powered lifters allow{" "}
          <strong>single-operator loading/unloading</strong> of 27 drums per
          batch, ensuring smooth operation and improved safety.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-4-2.png",
    },
    {
      title: "Compact, Site-Ready Design",
      desc: (
        <span>
          <strong>Skid-mounted structure</strong> requires minimal foundation
          and enables easy relocation between project sites.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-4-3.png",
    },
    {
      title: "Smart Integration & Low Maintenance",
      desc: (
        <span>
          Compatible with existing <strong>asphalt or binder plants</strong>;{" "}
          <strong>corrosion-resistant coils</strong> and{" "}
          <strong>thermic-oil system</strong> ensure longer lifecycle and lower
          service frequency.
        </span>
      ),
      image: "/images/bitumen-decanter/acm-4-3.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for Smaller Batches",
      desc: (
        <span>
          ACM-4 is optimized for compact operations where frequent drum melting
          is required but space and logistics are limited. It provides
          continuous <strong>4 TPH output</strong> without compromising on
          heating precision or safety.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Consistent Heating Performance",
      desc: (
        <span>
          The <strong>thermic-oil system</strong> maintains steady heat across
          all <strong>27 drums</strong>. By avoiding direct flame, ACM-4
          preserves <strong>bitumen viscosity</strong> and ensures consistent
          quality across every batch.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Fuel-Efficient Operation",
      desc: (
        <span>
          <strong>Insulated panels</strong> reduce heat loss, cutting fuel
          consumption by up to <strong>20%</strong>.{" "}
          <strong>Diesel, LDO, or gas options</strong> give operators
          flexibility to match local fuel availability.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Safe & User-Friendly Handling",
      desc: (
        <span>
          <strong>Hydraulic loading</strong> minimizes manual lifting and drum
          rotation hazards. <strong>Auto-level control</strong> and{" "}
          <strong>pressure-relief valves</strong> provide added protection for
          operators and equipment.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Global Customization",
      desc: (
        <span>
          Units can be customized with <strong>optional transfer pumps</strong>,{" "}
          <strong>extended tanks</strong>, or{" "}
          <strong>automatic controls</strong>; installation, training, and
          spare-part support available in <strong>40+ countries</strong>.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    //     {
    //       img: "/images/comman/slider.png",
    //       title: "ACM-4",
    //       desc: "27 Barrel/Batch | 9–10 Tons | 4 TPH",
    //       url: "/bitumen-decanter/acm-4",
    //       img: "/images/bitumen-decanter/acm-4-1.jpeg",
    //     },
    {
      img: "/images/bitumen-decanter/acm-7-1.png",
      title: "ACM-7 ",
      desc: "40 Barrel/Batch | 15 Tons | 6 TPH",
      url: "/bitumen-decanter/acm-7"      
    },
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
            • Automatic diesel/LDO burner with thermostatic controls delivers
            stable oil temperature between 200–240 °C.
          </li>
          <li>• Multi-pass coils maximize heat transfer efficiency.</li>
        </ul>
      ),
    },
    {
      title: "Melting Chamber",
      desc: (
        <ul>
          <li>• Fully insulated chamber accommodates 27 drums per batch.</li>
          <li>
            • Oil-heated coils ensure even melting; front and rear access doors
            simplify cleaning.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Drum Loader",
      desc: (
        <ul>
          <li>• Lifts and inverts 200 kg drums safely into the heating bay.</li>
          <li>
            • Reverse-hydraulic function enables easy removal of empty drums
            post-melting.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Collection Tank",
      desc: (
        <ul>
          <li>
            • Located beneath the melting zone, the insulated tank holds 9–10
            tons of liquid bitumen.
          </li>
          <li>
            • Equipped with an agitator, temperature sensors, and a sampling
            valve.
          </li>
        </ul>
      ),
    },
    {
      title: "Transfer Pump",
      desc: (
        <ul>
          <li>
            • Heavy-duty gear pump designed for viscous material ensures smooth
            transfer to asphalt or storage tanks.
          </li>
          <li>• An optional variable-speed drive is available.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety System",
      desc: (
        <ul>
          <li>
            • Centralized panel with auto-cutoff, oil-pressure display, and
            emergency stop.
          </li>
          <li>
            • Features auto-level control and safety valves to prevent overflow
            or over-temperature incidents.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACM-4 Bitumen Decanter | 9–10 TPH | Thermic Oil | Atlas India</title>
        <meta name="description" content="ACM-4 — 9–10 TPH bitumen decanter, indirect three-pass thermic oil heating, no direct flame. Preserves binder quality for small to mid-scale sites. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/FTR-82ZSjUk"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-decanter/acm-4"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-decanter/acm-4-1.png"
        videoUrl="https://www.youtube.com/embed/FTR-82ZSjUk"
        title={
          "ACM-4: Safe, Compact & Efficient Bitumen Decanting for Small-Scale Projects"
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
        title="Why Choose ACM-4"
        subtitle="The ACM-4 is the most compact decanter, engineered for contractors who need reliable 4 TPH melting without heavy foundations or complex installation."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACM Series of Bitumen Decanting Machine offers quick startup and continuous flow of molten bitumen."
        }
        components={components}
        img ="/images/bitumen-decanter/acm-4-1.png"
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
