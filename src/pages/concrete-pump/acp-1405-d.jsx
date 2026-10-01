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

import useCategoryProducts from "../../../hooks/useCategoryProducts";
import ProductSchema from "../../../components/schema/ProductSchema";

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "asphalt-machine",
    "concrete-pump",
    "acp-1405-d",
  );

  const product = {
    title: "ACP 14-5 D Concrete Pump",
    subtitle:
      "Maximum Pipeline Length: 100 meters (Adjustable) | Pressure: 145 bar",
    description: [
      "The Atlas ACP 14-5 D is a diesel-powered stationary concrete pump designed for medium-distance concrete placement in high-rise and infrastructure projects. Built to deliver consistent output, stable pressure, and reduced wear, it ensures smooth pumping for bridges, residential towers, and industrial sites.",
      "Equipped with a high-efficiency S-valve system, wear-resistant pumping cylinders, and a variable-displacement hydraulic setup, the ACP 14-5 D offers reliable flow and precise control under all working conditions.",
    ],
    features: ["Reliable Flow", "Optimized Pressure", "Easy Service Access"],
    images: [
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-01.png",
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-02.png",
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-03.png",
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-04.png",
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-05.png",
      "/images/machine/concert-pump/acp-1405-d/concrete-pump-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. What is the maximum reach of the ACP 14-5 D?",
      content: (
        <>
          <p>
            Up to 100 meters, depending on concrete mix, pipe diameter, and
            number of bends.
          </p>
        </>
      ),
    },
    {
      title: "2. What pressure does the pump operate at?",
      content: (
        <>
          <p>
            Rated working pressure is 145 bar, suitable for medium-range
            concrete delivery.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of valve system is used?",
      content: (
        <>
          <p>
            An S-valve system, providing smooth concrete flow and low wear
            operation.
          </p>
        </>
      ),
    },
    {
      title: "4. Can it handle different concrete mixes?",
      content: (
        <>
          <p>
            Yes. It can pump standard and self-compacting mixes within the
            recommended aggregate size and slump range.
          </p>
        </>
      ),
    },
    {
      title: "5. What maintenance schedule is recommended?",
      content: (
        <>
          <p>
            Check wear parts, grease points, and hydraulic oil every 50
            operating hours, with complete servicing as per the Atlas
            maintenance manual.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High Pumping Pressure (145 bar)",
      desc: (
        <span>
          Delivers steady concrete flow across pipelines up to 100 meters
          (Adjustable), depending on mix design and layout.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-5d-1.jpeg",
    },
    {
      title: "S-Valve Pumping System",
      desc: (
        <span>
          Ensures smooth material transfer with minimal pulsation and reduced
          wear, even with abrasive mixes.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-5d-2.jpeg",
    },
    {
      title: "Variable-Displacement Hydraulics",
      desc: (
        <span>
          Provides controlled, energy-efficient operation with adjustable output
          for different mix types and site demands.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-5d-3.jpeg",
    },
    {
      title: "Wear-Resistant Components",
      desc: (
        <span>
          Hardened elbows, long-life piston cups, and replaceable wear plates
          extend service life and reduce downtime.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-5d-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Medium-Scale Projects",
      desc: (
        <span>
          Ideal for small- to mid-rise buildings, bridge decks, and factory
          floors that require reliable concrete delivery.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Efficient Hydraulic System",
      desc: (
        <span>
          Variable-displacement hydraulics maintain steady flow while optimizing
          fuel and power use.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Reduced Downtime",
      desc: (
        <span>
          Centralized grease points and accessible service areas simplify
          maintenance.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Precision Flow & Monitoring",
      desc: (
        <span>
          Integrated analog pressure gauges and visual indicators support
          real-time performance monitoring.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Built for Challenging Conditions",
      desc: (
        <span>
          Heavy-duty frame and dependable diesel engine ensure stability and
          durability across all work environments.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Power Unit",
      desc: (
        <ul>
          <li>
            • Diesel engine offering high torque and efficient fuel performance.
          </li>
          <li>
            • Suitable for continuous-duty pumping in varied environments.
          </li>
        </ul>
      ),
    },
    {
      title: "Pumping Cylinders",
      desc: (
        <ul>
          <li>
            • Large-diameter concrete cylinders deliver smooth discharge and
            high output.
          </li>
          <li>• Replaceable wear parts extend operating life.</li>
        </ul>
      ),
    },
    {
      title: "S-Valve Assembly",
      desc: (
        <ul>
          <li>• Optimized for efficient flow and reduced blockage risk.</li>
          <li>• Handles coarse aggregates and stiff mixes effectively.</li>
        </ul>
      ),
    },
    {
      title: "Hydraulic System",
      desc: (
        <ul>
          <li>• Variable-displacement type for flexible output control.</li>
          <li>• Efficient cooling for continuous operation under load.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Instrumentation",
      desc: (
        <ul>
          <li>
            • Simplified panel with pressure gauges and emergency shut-off
            control.
          </li>
          <li>• Easy access for routine inspection and operator visibility.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACP 14-5 D | 100m Concrete Pump | 145 Bar | Atlas Technologies</title>
        <meta
          name="description"
          content="ACP 14-5 D — diesel concrete pump, 145 bar, 100m pipeline, S-valve, variable-displacement hydraulics. For bridges and mid-rise buildings. Get specs from Atlas."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
      videoThumbnail="/images/machine/concert-pump/acp-1405-d/concrete-pump-03.png"
        pageUrl="/concrete-pump/acp-1405-d"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/machine/concert-pump/acp-1405-d/concrete-pump-03.png"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={
          "ACP 14-5 D: Reliable Concrete Pumping for Medium-Reach Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Efficiency, Durability, and Smooth Operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ACP 14-5 D"
        subtitle="The ACP 1405 D is designed for contractors who need dependable medium-reach pumping performance, easy service, and a long operating life."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACP 14-5 D is engineered with rugged components for steady output, ease of service, and long service life."
        }
        img="/images/machine/concert-pump/acp-1405-d/concrete-pump-03.png"
        components={components}
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={otherProducts}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
