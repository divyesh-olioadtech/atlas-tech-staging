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
    title: "AE-10000 Bitumen Sprayer",
    subtitle: "10 T | Spray Width: 2.4 m – 4.2 m | Engine: 25 HP",
    description: [
      "The Atlas AE-10000 Bitumen Sprayer is a heavy-duty pressure distributor for mid-to-large paving operations. Equipped with a 10-ton insulated bitumen tank, adjustable 2.4 m–4.2 m hydraulic spray bar, and a 25 HP Kirloskar diesel engine, it ensures uniform and reliable binder application for highways, airport runways, and large maintenance projects.",
      "AE-10000 combines Atlas’s proven spraying technology with fuel-efficient design, user-friendly operation, and long service life. It’s the preferred choice for contractors seeking accuracy, durability, and continuous performance on large-scale sites.",
    ],
    features: ["High Output", "Uniform Application", "Fuel Efficient"],
    images: [
      "/images/bitumen-sprayer/newreplacedtwentyone.webp",
      "/images/bitumen-sprayer/newreplaced-17.webp",
      "/images/bitumen-sprayer/newreplaced-18.webp",
      "/images/bitumen-sprayer/newreplaced-19.webp",
     "/images/bitumen-sprayer/newreplaced-20.webp",
      "/images/bitumen-sprayer/newreplacedsixteen.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What project scale is AE-10000 best suited for?",
      content: (
        <>
          <p>
            Highway construction, industrial roads, and large maintenance
            contracts where a continuous bitumen supply is needed throughout the
            day.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it run for long hours continuously?",
      content: (
        <>
          <p>
            Yes. Its thermic-oil system and air-cooled engine are built for safe
            24-hour use with temperature stability.
          </p>
        </>
      ),
    },
    {
      title: "3. What fuel types are supported?",
      content: (
        <>
          <p>
            Diesel is standard for the engine and burner; LDO can be used as an
            alternative depending on availability.
          </p>
        </>
      ),
    },
    {
      title: "4. Can I add automation or remote controls?",
      content: (
        <>
          <p>
            Yes. Atlas offers automatic flow control systems and extended spray
            bars as custom options.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Adjustable Spray Width (2.4–4.2 m)",
      desc: (
        <span>
          The hydraulic fold-out bar enables flexible coverage for wide or
          narrow lanes, delivering precise, even coating every time.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-10000-1.jpeg",
    },
    {
      title: "Powerful 35 HP Kirloskar Engine",
      desc: (
        <span>
          Air-cooled diesel engine delivers high torque for steady hydraulic and
          burner performance in demanding, long-duration projects.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-10000-2.jpeg",
    },
    {
      title: "10-Ton Insulated Tank with Heating Coils",
      desc: (
        <span>
          Heavy-gauge tank keeps bitumen at optimal spray temperature, ensuring
          smooth pumping and excellent adhesion.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-10000-3.jpeg",
    },
    {
      title: "Operator-Friendly Controls",
      desc: (
        <span>
          A simplified dashboard with pressure, temperature, and flow indicators
          allows precise control and easy maintenance.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-10000-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for High Throughput Jobs",
      desc: (
        <span>
          With a 10-ton capacity and a 2.4 m–4.2 m spray width, AE-10000 handles
          large sections in fewer runs, great for state highways and industrial
          projects needing maximum coverage per shift.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uniform Bitumen Distribution",
      desc: (
        <span>
          Precision nozzles and a calibrated bar system deliver even film
          thickness for strong bond layers, reducing wastage and ensuring
          quality pavement results.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Dependable Power & Fuel Economy",
      desc: (
        <span>
          The 25 HP Kirloskar engine and optimized hydraulics ensure steady
          pressure with low fuel consumption. It’s perfect for long daily runs.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Easy Handling & Safety Focused Design",
      desc: (
        <span>
          Hydraulic controls minimize manual operation while auto-cut features
          and emergency stops enhance safety during use and maintenance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Atlas Service & Customization Support",
      desc: (
        <span>
          Backed by Atlas’s global network, AE-10000 can be customized with
          automatic flow control, extended bars, and auxiliary hand-gun
          attachments.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img:"/images/bitumen-sprayer/newreplaced-13.webp",
      title: "Bitumen Sprayer AE-4000",
      desc: "4 Ton Capacity",
      url: "/bitumen-sprayer/ae-4000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-14.webp",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-15.webp",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    //     {
    //       img: "/images/bitumen-sprayer/ae-10000-1.jpeg",
    //       title: "Bitumen Sprayer AE-10000",
    //       desc: "10 Ton Capacity",
    //       url: "/bitumen-sprayer/ae-10000",
    //     },
    {
      img: "/images/bitumen-sprayer/newreplacedsix.webp",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-21.webp",
      title: "Bitumen Sprayer (With Hydraulic Hopper)",
      desc: "6 T / 8 T / 10 T Options",
      url: "/bitumen-sprayer/ae-12000",
    },
  ];

  const components = [
    {
      title: "Spray Bar & Nozzles",
      desc: (
        <ul>
          <li>
            • Hydraulic fold-out bar (2.4 m–4.2 m) with individual nozzle
            control for consistent coverage.
          </li>
          <li>
            • High-precision nozzles provide an even spray pattern and easy
            maintenance.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heating System",
      desc: (
        <ul>
          <li>• 10-ton insulated tank with thermic-coil heating system.</li>
          <li>• Retains temperature stability for extended spray cycles.</li>
        </ul>
      ),
    },
    {
      title: "Engine & Pneumatic Pump",
      desc: (
        <ul>
          <li>
            • 25 HP Kirloskar air-cooled diesel engine drives the hydraulic pump
            and burner assembly.
          </li>
          <li>• Provides reliable pressure output for continuous spraying.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Instrumentation",
      desc: (
        <ul>
          <li>
            • Includes pressure gauge, flow adjustment, and temperature display.
          </li>
          <li>
            • Emergency shutdown and safety interlocks protect the operator and
            the equipment.
          </li>
        </ul>
      ),
    },
    {
      title: "Hand-Gun Assembly & Cleaning Kit",
      desc: (
        <ul>
          <li>• Auxiliary hand sprayer for edges and localized patches.</li>
          <li>
            • Quick-flush cleaning system for easy maintenance after operations.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AE-10000 | 10 Ton Bitumen Sprayer | Atlas Technologies India</title>
        <meta name="description" content="AE-10000 — 10 ton thermally insulated bitumen sprayer, foldable spray bar, 25 HP engine. For large national highway tack coat and prime coat operations. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/yIymMirBzW8"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/ae-10000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplacedtwentyone.webp"
        videoUrl="https://www.youtube.com/embed/yIymMirBzW8"
        title={
          "AE-10000: High-Capacity Bitumen Spraying for Large Paving Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Continuous Operation and Accuracy"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AE-10000"
        subtitle="AE-10000 is purpose-built for high productivity, superior binder accuracy, and reliable operation in large-area paving and road surfacing projects."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Atlas’s Bitumen Sprayer shares proven distributor design with Atlas’s sprayer range, engineered for long life and simple field maintenance."
        }
        components={components}
        img= "/images/bitumen-sprayer/newreplacedsixteen.webp"
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
