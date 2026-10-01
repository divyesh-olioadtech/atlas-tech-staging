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
    "acp-1407-d",
  );

  const product = {
    title: "ACP 14-7 D Concrete Pump",
    subtitle: "Maximum Pipeline Length: 120 meters | Pressure: 320 bar",
    description: [
      "The Atlas ACP 14-7 D is a high-pressure, stationary concrete pump designed for long-reach and high-elevation concrete placement. Powered by a heavy-duty diesel engine, it delivers superior pressure performance, smooth pumping, and dependable output for demanding construction sites such as bridges, high-rise towers, tunnels, and large industrial projects.",
      "Built with a robust S-valve system, hardened wear components, and a precision-controlled hydraulic circuit, the ACP 14-7 D ensures consistent concrete flow with minimal pulsation, even across extended pipeline lengths and varying mix designs.",
    ],
    features: [
      "High-Pressure Output",
      "Long Pipeline Capability",
      "Durable Design",
    ],
    images: [
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-01.png",
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-02.png",
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-03.png",
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-04.png",
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-05.png",
      "/images/machine/concert-pump/acp-1407-d/concrete-pump-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. What is the maximum pipeline length of ACP 14-7 D?",
      content: (
        <>
          <p>
            Up to 120 meters, depending on pipe diameter, bends, and mix design.
            Horizontal reach can extend further under optimal conditions.
          </p>
        </>
      ),
    },
    {
      title: "2. What pressure does the pump operate at?",
      content: (
        <>
          <p>
            Rated working pressure is 170 bar, ideal for high-rise and
            long-distance applications.
          </p>
        </>
      ),
    },
    {
      title: "3. What type of valve system is used?",
      content: (
        <>
          <p>
            An S-valve system that handles coarse aggregates and abrasive mixes
            while reducing wear.
          </p>
        </>
      ),
    },
    {
      title:
        "4. Is the ACP 14-7 D suitable for special mixes like SCC or fiber-reinforced concrete?",
      content: (
        <>
          <p>
            Yes. It can pump standard and special mixes, but performance depends
            on aggregate size and slump; trial testing is recommended before
            large pours.
          </p>
        </>
      ),
    },
    {
      title: "5. How is the machine maintained for best performance?",
      content: (
        <>
          <p>
            Inspect hydraulic oil, filters, and wear parts every 50 hours, and
            perform complete servicing as per Atlas maintenance standards.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High Working Pressure (320 bar)",
      desc: (
        <span>
          Enables efficient concrete pumping across extended distances and high
          elevations.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-7d-1.jpeg",
    },
    {
      title: "S-Valve Pumping System",
      desc: (
        <span>
          Ensures steady material flow with reduced backflow and lower component
          wear, even with abrasive aggregates.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-7d-2.jpeg",
    },
    {
      title: "Variable-Displacement Hydraulic System",
      desc: (
        <span>
          Automatically adjusts output flow, improving fuel efficiency and
          maintaining steady pressure.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-7d-3.jpeg",
    },
    {
      title: "Wear-Resistant Materials",
      desc: (
        <span>
          Piston cups, elbows, and wear plates are built from hardened alloy
          steel for extended service intervals.
        </span>
      ),
      image: "/images/concrete-pump/acp-14-7d-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for High-Rise and Bridge Construction",
      desc: (
        <span>
          Delivers concrete to tall structures or long pipeline routes with
          reliable, continuous flow.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Enhanced Pumping Efficiency",
      desc: (
        <span>
          The hydraulic system maintains a constant output under pressure while
          minimizing energy loss.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Optimized for Heavy Workloads",
      desc: (
        <span>
          Designed for continuous operation with reinforced components and
          high-capacity cooling.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Easy Maintenance and Servicing",
      desc: (
        <span>
          Central grease points, quick-access covers, and modular parts simplify
          daily maintenance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Accurate Pressure Monitoring",
      desc: (
        <span>
          Equipped with analog gauges and visual indicators for precise
          hydraulic and pumping pressure control.
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
            • High-torque diesel engine designed for continuous operation and
            fuel efficiency.
          </li>
          <li>
            • Engine matched to pump capacity for stable performance at extended
            pressure.
          </li>
        </ul>
      ),
    },
    {
      title: "Pumping Cylinders",
      desc: (
        <ul>
          <li>
            • Large-diameter concrete cylinders for maximum output per stroke.
          </li>
          <li>
            • Replaceable wear rings and seals to extend service intervals.
          </li>
        </ul>
      ),
    },
    {
      title: "S-Valve System",
      desc: (
        <ul>
          <li>
            • Optimized design for high-volume concrete transfer and minimal
            pulsation.
          </li>
          <li>• Easy cleaning and maintenance access.</li>
        </ul>
      ),
    },
    {
      title: "Hydraulic System",
      desc: (
        <ul>
          <li>
            • Variable-displacement hydraulics enable smooth output control.
          </li>
          <li>
            • Heavy-duty cooling ensures reliability during prolonged pumping
            cycles.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Instrumentation",
      desc: (
        <ul>
          <li>• Clear analog display for pressure and output readings.</li>
          <li>
            • Includes emergency stop and manual override for operator safety.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ACP 14-7 D | 120m Concrete Pump | 320 Bar | Atlas Technologies</title>
        <meta
          name="description"
          content="ACP 14-7 D — diesel concrete pump, 320 bar, 120m pipeline, S-valve system, variable-displacement hydraulics. For high-rise towers and bridges. Get specs from Atlas."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
      videoThumbnail="/images/machine/concert-pump/acp-1407-d/concrete-pump-03.png"
        pageUrl="/concrete-pump/acp-1407-d"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/machine/concert-pump/acp-1407-d/concrete-pump-03.png"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={
          "ACP 14-7 D: High-Pressure Concrete Pumping for Long-Reach Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Power, Range, and Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose ACP 14-7 D"
        subtitle="The ACP 1407 D is engineered for contractors handling large projects that demand long-reach capability and high delivery pressure."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The ACP 1407 D is engineered for consistent flow and durability in long-duration operations."
        }
        img="/images/machine/concert-pump/acp-1407-d/concrete-pump-03.png"
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
