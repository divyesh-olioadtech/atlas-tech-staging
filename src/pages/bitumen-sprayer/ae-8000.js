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
    title: "AE-8000 Bitumen Sprayer",
    subtitle: "8 T | Spray Width: 2.4 m – 4.2 m | Engine: 25 HP",
    description: [
      "The Atlas AE-8000 Bitumen Sprayer is a mid-range, truck-mounted pressure distributor engineered for uniform binder application on highways, access roads, and urban maintenance works. Its 8-ton insulated tank, adjustable 2.4 m – 4.2 m spray bar, and 25 HP Kirloskar diesel engine make it the right balance of productivity, precision, and fuel efficiency.",
      "Built for contractors who manage regular paving or resurfacing projects, AE-8000 combines proven Atlas spraying technology with ease of operation and low maintenance, delivering consistent bitumen coverage under diverse site conditions.",
    ],
    features: ["High Capacity", "Uniform Coverage", "Fuel Efficient"],
    images: [
      
      "/images/bitumen-sprayer/newreplaced-13.webp",
      "/images/bitumen-sprayer/newreplaced-14.webp",
      "/images/bitumen-sprayer/newreplaced-15.webp",
    "/images/bitumen-sprayer/newreplacedsix.webp",
      "/images/bitumen-sprayer/newreplaced-21.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What project type is AE-8000 best suited for?",
      content: (
        <>
          <p>
            Medium and large road construction, highways, and municipal
            maintenance jobs where 8-ton capacity matches the daily workload.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it operate continuously for long hours?",
      content: (
        <>
          <p>
            Yes. Its thermic coil heating and air-cooled engine enable safe
            extended operation with stable temperature control.
          </p>
        </>
      ),
    },
    {
      title: "3. What fuel and power systems does it use?",
      content: (
        <>
          <p>
            Diesel-powered Kirloskar engine driving hydraulic pump; burner
            system also operates on diesel or LDO as standard.
          </p>
        </>
      ),
    },
    {
      title: "4. Are custom spray bars available?",
      content: (
        <>
          <p>
            Yes. Atlas offers optional bar extensions, remote-control valves,
            and flow meter integration on request.
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
          The hydraulic fold-out spray bar lets operators switch instantly
          between narrow and wide sprays for different road classes or treatment
          widths.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-8000-1.jpeg",
    },
    {
      title: "25 HP Kirloskar Diesel Engine",
      desc: (
        <span>
          Air-cooled engine offers high torque output and stable performance in
          continuous operation, backed by Atlas’s low-maintenance hydraulic
          drive system.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-8000-2.jpeg",
    },
    {
      title: "8-Ton Insulated Tank with Heating Coils",
      desc: (
        <span>
          Heavy-gauge steel tank and integrated thermic coils maintain spray
          temperature and ensure steady bitumen flow for smooth film formation.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-8000-3.jpeg",
    },
    {
      title: "Operator-Friendly Controls",
      desc: (
        <span>
          Simplified dashboard with pressure and flow control, plus
          quick-connect hoses and inspection ports for easy daily maintenance.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-8000-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Ideal for Highway and Rural Projects",
      desc: (
        <span>
          With an 8-ton tank and broad spray width, AE-8000 delivers long
          continuous runs with fewer refills — ideal for provincial roads,
          connectors, and municipal maintenance.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Uniform Bitumen Film Every Time",
      desc: (
        <span>
          Calibrated nozzles and adjustable bar pressure ensure consistent
          binder distribution across the entire spray width for superior
          adhesion and surface finish.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Powerful Performance with Fuel Savings",
      desc: (
        <span>
          The 25 HP Kirloskar engine, coupled with optimized hydraulics,
          provides steady pressure output while keeping fuel use low over
          extended shifts.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Safe, Simple, and Dependable",
      desc: (
        <span>
          Hydraulic controls and operator-level access reduce manual risks and
          enable one-person operation, keeping projects on schedule and within
          budget.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Atlas Support & Optional Add-ons",
      desc: (
        <span>
          Atlas provides local training, parts, and customization options such
          as hand-gun attachments, extended bars, or automatic spray control
          systems.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/bitumen-sprayer/newreplacedtwentyone.webp",
      title: "Bitumen Sprayer AE-4000",
      desc: "4 Ton Capacity",
      url: "/bitumen-sprayer/ae-4000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedsixteen.webp",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    //     {
    //       img: "/images/bitumen-sprayer/ae-8000-1.jpeg",
    //       title: "Bitumen Sprayer AE-8000",
    //       desc: "8 Ton Capacity",
    //       url: "/bitumen-sprayer/ae-8000",
    //     },
    {
      img: "/images/bitumen-sprayer/newreplaced-17.webp",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-18.webp",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-20.webp",
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
            • Hydraulic fold-out bar covering 2.4 m–4.2 m width with individual
            nozzle valves.
          </li>
          <li>
            • Stainless-steel nozzles for an accurate spray pattern and easy
            cleaning.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heating System",
      desc: (
        <ul>
          <li>
            • 8-ton double-insulated tank with integrated thermic oil coils.
          </li>
          <li>
            • Maintains uniform temperature and prevents bitumen hardening
            during idle periods.
          </li>
        </ul>
      ),
    },
    {
      title: "Engine & Pneumatic",
      desc: (
        <ul>
          <li>• 25 HP Kirloskar air-cooled diesel engine drives the pump.</li>
          <li>
            • Provides smooth pressure control for consistent bitumen delivery.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Metering",
      desc: (
        <ul>
          <li>
            • Intuitive panel with pressure gauge and flow adjustment knobs.
          </li>
          <li>• Integrated safety switches and emergency shutdown button.</li>
        </ul>
      ),
    },
    {
      title: "Hand-Gun Assembly & Cleaning System",
      desc: (
        <ul>
          <li>• Auxiliary hand spray gun for spot repairs and edges.</li>
          <li>
            • Quick-flush cleaning setup to prevent blockage after daily
            operations.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AE-8000 | 8 Ton Bitumen Sprayer | Foldable Bar | Atlas India</title>
        <meta name="description" content="AE-8000 — 8 ton insulated bitumen sprayer, foldable spray bar, 25 HP Kirloskar engine. For state highway tack coat and prime coat applications. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/yIymMirBzW8"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/ae-8000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplacedsix.webp"
        videoUrl="https://www.youtube.com/embed/yIymMirBzW8"
        title={
          "AE-8000: Reliable Mid-Capacity Sprayer for Road Construction and Maintenance"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Precision and Long Service Life"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AE-8000"
        subtitle="The AE-8000 is built for medium to large road projects where high spray accuracy and machine durability directly impact paving quality and cost control."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Atlas’s Bitumen Sprayer shares proven distributor design with Atlas’s sprayer range, engineered for long life and simple field maintenance."
        }
        components={components}
        img = "/images/bitumen-sprayer/newreplaced-21.webp"
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
