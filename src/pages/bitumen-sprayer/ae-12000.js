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
    title: "AE-12000 Bitumen Sprayer",
    subtitle: "12 T | Spray Width: 2.4 m – 4.2 m | Engine: 40 HP",
    description: [
      "The Atlas AE-12000 Bitumen Sprayer is the largest model in our pressure distributor series, designed for continuous, large-scale road construction. With a 12-ton insulated tank, hydraulic 2.4 m – 4.2 m spray bar, and a powerful 40 HP Kirloskar engine, it ensures precise binder application across long highway stretches, airfields, and major infrastructure projects.",
      "AE-12000 combines Atlas’s robust engineering with advanced automation and fuel efficiency, delivering uniform coverage and high productivity for contractors who demand maximum output per shift.",
    ],
    features: ["Maximum Capacity", "Uniform Performance", "Fuel Efficient"],
    images: [
      "/images/bitumen-sprayer/newreplacedfive.webp",
      "/images/bitumen-sprayer/newreplacedfour.webp",
      "/images/bitumen-sprayer/newreplacedfifteen.webp",
      "/images/bitumen-sprayer/newreplaced-21.webp",
      "/images/bitumen-sprayer/newreplacedsixteen.webp",
      "/images/bitumen-sprayer/newreplacedeleven.webp",

    ],
  };

  const faqData = [
    {
      title: "1. What kind of projects require AE-12000?",
      content: (
        <>
          <p>
            It is ideal for national and state highways, airfield runways, and
            large-scale infrastructure works that demand continuous bitumen
            application.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it run continuously throughout the day?",
      content: (
        <>
          <p>
            Yes. The air-cooled engine and thermic-oil heating system support
            safe, round-the-clock operation with uniform temperature control.
          </p>
        </>
      ),
    },
    {
      title: "3. What are the fuel options for AE-12000?",
      content: (
        <>
          <p>
            The engine and burner both run on diesel as standard; LDO
            compatibility is available on request.
          </p>
        </>
      ),
    },
    {
      title: "4. Can it be customized for automation or width extension?",
      content: (
        <>
          <p>
            Yes. Atlas offers custom PLC automation packages, remote spray
            control, and bar extensions to match project needs.
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
          The hydraulic fold-out bar ensures accurate coverage across wide
          paving widths while maintaining even film thickness.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-12000-1.jpeg",
    },
    {
      title: "25 HP Kirloskar Diesel Engine",
      desc: (
        <span>
          Air-cooled, high-torque engine powers the pneumatic and burner systems
          reliably during extended operations in demanding environments.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-12000-2.jpeg",
    },
    {
      title: "12-Ton Insulated Tank with Thermic Coils",
      desc: (
        <span>
          Heavy-gauge steel construction maintains bitumen temperature for long
          spray cycles and uniform adhesion.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-12000-3.jpeg",
    },
    {
      title: "Simplified Controls & Maintenance",
      desc: (
        <span>
          The operator panel includes flow and pressure gauges, a temperature
          display, and quick-access ports for daily inspection and servicing.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-12000-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Built for Mega-Scale Coverage",
      desc: (
        <span>
          With a 12-ton tank and extended spray bar, AE-12000 reduces refill
          frequency and covers longer sections in a single run (suitable for
          national highways and airfield pavements).
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Consistent and Uniform Spraying",
      desc: (
        <span>
          Calibrated nozzles and hydraulic pressure control maintain an even
          binder film across the bar, enhancing surface bond strength and
          reducing material wastage.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Powerful Performance with Fuel Savings",
      desc: (
        <span>
          The 25 HP engine and optimized thermic system lower fuel consumption
          while delivering continuous pressure for large projects.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Operator Safety and Automation",
      desc: (
        <span>
          Hydraulic controls limit manual handling; auto-cut features, emergency
          stop, and pressure relief valves add safety and operational
          reliability.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Global Support & Customization",
      desc: (
        <span>
          Atlas provides worldwide training, commissioning, and spare support,
          plus custom options like automatic flow control, dual pumps, and
          extended bar assemblies.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/bitumen-sprayer/newreplaced-14.webp",
      title: "Bitumen Sprayer AE-4000",
      desc: "4 Ton Capacity",
      url: "/bitumen-sprayer/ae-4000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-15.webp",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-14.webp",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    {
      img: "/images/bitumen-sprayer/newreplaced-18.webp",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    //     {
    //       img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
    //       title: "Bitumen Sprayer AE-12000",
    //       desc: "12 Ton Capacity",
    //       url: "/bitumen-sprayer/ae-12000",
    //     },
    {
      img: "/images/bitumen-sprayer/newreplaced-17.webp",
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
            • Hydraulic fold-out bar (2.4 m–4.2 m) with individually controlled
            nozzles for precise application.
          </li>
          <li>
            • Stainless-steel nozzle tips ensure uniform spray and simple
            maintenance.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heating System",
      desc: (
        <ul>
          <li>
            • 12-ton insulated tank with multi-pass thermic oil coils for
            consistent temperature.
          </li>
          <li>
            • Designed for continuous spray cycles with minimal heat loss.
          </li>
        </ul>
      ),
    },
    {
      title: "Engine & Pneumatic Pump",
      desc: (
        <ul>
          <li>
            • 25 HP Kirloskar air-cooled engine drives the pump and burner
            assemblies.
          </li>
          <li>• Provides stable pressure and flow for long working hours.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Instrumentation",
      desc: (
        <ul>
          <li>
            • Includes pressure gauge, temperature display, and flow adjustment
            controls.
          </li>
          <li>
            • Emergency cut-off and safety interlocks enhance operator
            protection.
          </li>
        </ul>
      ),
    },
    {
      title: "Hand-Gun Assembly & Cleaning System",
      desc: (
        <ul>
          <li>
            • Auxiliary hand-spray gun for edges and localized patch jobs.
          </li>
          <li>• Quick-flush system cleans the bar and hoses after use.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AE-12000 | 12 Ton Bitumen Sprayer | Atlas Technologies India</title>
        <meta name="description" content="AE-12000 — Atlas's largest 12 ton insulated bitumen sprayer, foldable spray bar up to 4.5m, 25 HP Kirloskar engine. For mega highway projects. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/N0UrDy87n7k"
        videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/ae-12000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplacedfive.webp"
        videoUrl="https://www.youtube.com/embed/N0UrDy87n7k"
        title={
          "AE-12000: High-Capacity Bitumen Sprayer for Mega Infrastructure Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Continuous Performance and Precision"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AE-12000"
        subtitle="AE-12000 is purpose-built for contractors managing large-volume bitumen applications on major highways and infrastructure projects."
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
