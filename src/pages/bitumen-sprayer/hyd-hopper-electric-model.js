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
    title: "Bitumen Sprayer (With Hydraulic Hopper)",
    subtitle:
      "6 T / 8 T / 10 T Options | Hydraulic Hopper | Electric Drive System",
    description: [
      "The Atlas Bitumen Sprayer with Hydraulic Hopper is a specialized variant designed for high-precision, low-emission bitumen spraying. Combining electric-drive efficiency with hydraulic automation, this model offers cleaner operation, accurate control, and safer handling for modern road-maintenance and paving applications.",
      "Built for contractors who need automation, lower fuel use, and eco-friendly performance, this electric sprayer integrates Atlas’s proven heating and spraying technology with advanced hydraulic systems for superior operator control.",
    ],
    features: ["Hydraulic Automation", "Electric Drive", "Eco-Efficient"],
    images: [
     "/images/bitumen-sprayer/newreplaced-14.webp",
      "/images/bitumen-sprayer/newreplaced-15.webp",
      "/images/bitumen-sprayer/newreplaced-18.webp",
      "/images/bitumen-sprayer/newreplaced-19.webp",
      "/images/bitumen-sprayer/newreplaced-17.webp",
      "/images/bitumen-sprayer/newreplaced-18.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What are the advantages of the electric drive system?",
      content: (
        <>
          <p>
            It cuts fuel use, reduces emissions, and enables quieter
            operation—ideal for environmentally sensitive or urban projects.
          </p>
        </>
      ),
    },
    {
      title: "2. Can the hydraulic hopper handle drums and bags?",
      content: (
        <>
          <p>
            Yes. The hydraulic lift and tilt mechanism is designed for both
            drummed and bagged bitumen inputs.
          </p>
        </>
      ),
    },
    {
      title: "3. What power source is required?",
      content: (
        <>
          <p>
            Models are available for standard 3-phase industrial supply (custom
            voltages optional for export markets).
          </p>
        </>
      ),
    },
    {
      title: "4. Is customization possible for capacity and spray width?",
      content: (
        <>
          <p>
            Yes. Atlas can configure 6 T (Tons), 8 T, or 10 T tanks and extend
            spray bar width up to 4.2 m as per project needs.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Electric-Drive Power System",
      desc: (
        <span>
          Replaces conventional diesel propulsion with a high-efficiency
          electric motor that powers the spray and pump systems, lowering noise
          and carbon emissions.
        </span>
      ),
      image: "/images/bitumen-sprayer/hydraulic-hopper-1.jpeg",
    },
    {
      title: "Hydraulic Hopper with Auto-Lift",
      desc: (
        <span>
          The hydraulic mechanism enables effortless bitumen loading and
          circulation, minimizing manual effort and improving operator safety.
        </span>
      ),
      image: "/images/bitumen-sprayer/hydraulic-hopper-2.jpeg",
    },
    {
      title: "Integrated Heating & Temperature Control",
      desc: (
        <span>
          Thermic-oil coil system maintains a steady bitumen temperature for
          consistent spray performance across varying climates.
        </span>
      ),
      image: "/images/bitumen-sprayer/hydraulic-hopper-3.jpeg",
    },
    {
      title: "Smart Control Panel",
      desc: (
        <span>
          A central dashboard with digital gauges and auto-shutoff controls
          allows operators to monitor spray rate, temperature, and hydraulic
          pressure in real time.
        </span>
      ),
      image: "/images/bitumen-sprayer/hydraulic-hopper-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Clean and Silent Operation",
      desc: (
        <span>
          The electric-drive system eliminates engine noise and fumes, allowing
          work near residential zones or enclosed job sites with minimal
          disturbance.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Effortless Bitumen Handling",
      desc: (
        <span>
          The hydraulic hopper automates drum or bag loading, minimizing manual
          lifting and ensuring faster, safer preparation of molten bitumen.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Precise Spraying with Digital Control",
      desc: (
        <span>
          Automated metering and temperature regulation maintain uniform spray
          quality and thickness throughout the project.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Energy Efficient and Low Maintenance",
      desc: (
        <span>
          Fewer moving parts and no engine oiling reduce maintenance cycles,
          lowering overall operating cost and downtime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Reliability and Global Support",
      desc: (
        <span>
          Atlas provides commissioning, training, and technical support
          worldwide. Custom configurations and retrofits are available to match
          local voltage and capacity requirements.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/bitumen-sprayer/newreplacedfive.webp",
      title: "Bitumen Sprayer AE-4000",
      desc: "4 Ton Capacity",
      url: "/bitumen-sprayer/ae-4000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedfour.webp",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedfifteen.webp",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-21.webp",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedsixteen.webp",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    //     {
    //       img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
    //       title: "Bitumen Sprayer (With Hydraulic Hopper)",
    //       desc: "6 T / 8 T / 10 T Options",
    //       url: "/bitumen-sprayer/ae-12000",
    //     },
  ];
  const components = [
    {
      title: "Electric Motor & Drive System",
      desc: (
        <ul>
          <li>
            • High-efficiency motor replaces a conventional engine for
            eco-friendly operation.
          </li>
          <li>
            • Variable-speed control optimizes pump output and reduces power
            use.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Hopper Assembly",
      desc: (
        <ul>
          <li>• Automatic lift and tilt for safe drum or bag handling.</li>
          <li>
            • Hydraulic controls ensure smooth operation and precise
            positioning.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heating System",
      desc: (
        <ul>
          <li>
            • Insulated tank with thermic oil coils maintains a stable working
            temperature.
          </li>
          <li>
            • Multi-layer insulation minimizes heat loss and energy demand.
          </li>
        </ul>
      ),
    },
    {
      title: "Spray Bar & Nozzles",
      desc: (
        <ul>
          <li>
            • Adjustable hydraulic bar (2.4 m–4.2 m) with stainless-steel
            nozzles for even coverage.
          </li>
          <li>• Manual override and quick-release design simplify cleaning.</li>
        </ul>
      ),
    },
    {
      title: "Smart Control Panel",
      desc: (
        <ul>
          <li>
            • Centralized console with digital pressure, flow, and temperature
            display.
          </li>
          <li>
            • Auto-shutoff, overload protection, and emergency stop ensure
            operator safety.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Hydraulic Hopper Electric Bitumen Sprayer | Atlas India</title>
        <meta name="description" content="Atlas hydraulic hopper electric bitumen sprayer — electric drive, hydraulic drum loading, insulated tank, foldable spray bar. For urban road projects. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/N0UrDy87n7k"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/hyd-hopper-electric-model"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplaced-14.webp"
        videoUrl="https://www.youtube.com/embed/N0UrDy87n7k"
        title={
          "Hydraulic Hopper Electric Bitumen Sprayer: Smart, Safe & Sustainable"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Modern Infrastructure Projects"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Hydraulic Hopper Electric Sprayer"
        subtitle="This model (with multiple capacity options) aims to combine high productivity with reduced environmental impact and safer material handling."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Atlas’s Bitumen Sprayer shares proven distributor design with Atlas’s sprayer range, engineered for long life and simple field maintenance."
        }
        components={components}
        img = "/images/bitumen-sprayer/newreplaced-17.webp"
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
