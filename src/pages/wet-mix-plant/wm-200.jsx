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
    "wet-mix-plant",
    "wm-200"
  );

  const product = {
    title: "WM-200 Wet Mix Macadam Plant",
    subtitle: "200 TPH | Upto 50 ton Surge Hopper | Best for: Expressways",
    description: [
      "The Atlas WM-200 Wet Mix Macadam Plant is a high-capacity solution built for expressway and large-scale infrastructure projects. With a rated capacity of 200 TPH and storage hopper, it ensures uninterrupted production of dense, homogeneous wet mix macadam for superior base and sub-base layers.",
      "Designed for demanding road works, WM-200 is ideal for contractors handling multiple-lane expressways and high-volume projects. Its intelligent automation, heavy-duty pug mill mixer, and robust structural design enable smooth operations (even under continuous load conditions).",
    ],
    features: ["High Output", "Accurate Mixing", "Heavy-Duty Reliability"],
    images: [
      "/images/wmm/wmm-200-one.jpg",
      "/images/wmm/wmm-200-two.jpeg",
      "/images/wmm/wmm-200-three.jpeg",
      "/images/wmm/wmm-200-four.jpeg",
      "/images/wmm/wmm-200-five.jpeg",
      "/images/wmm/wmm-200-six.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is WM-200 best suited for?",
      content: (
        <>
          <p>
            It’s ideal for expressways, ring roads, and major infrastructure
            works that demand continuous, high-quality base layer production.
          </p>
        </>
      ),
    },
    {
      title: "2. Can WM-200 integrate with a cement silo system?",
      content: (
        <>
          <p>
            Yes. The plant supports an optional cement addition setup, making it
            perfect for CTAB (Cement Treated Aggregate Base) applications.
          </p>
        </>
      ),
    },
    {
      title: "3. How is aggregate and water dosing managed?",
      content: (
        <>
          <p>
            The system uses load-cell-controlled feeders and flowmeter-regulated
            water dosing synchronized with the pug mill for accurate, consistent
            mixing.
          </p>
        </>
      ),
    },
    {
      title: "4. What makes WM-200 durable for long-term use?",
      content: (
        <>
          <p>
            The mixer, bins, and conveyors are built with corrosion-resistant
            materials, heavy-duty bearings, and replaceable liners, ensuring
            reliable performance even under continuous operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "200 TPH Continuous Output",
      desc: (
        <span>
          Engineered to meet the demands of multi-lane expressways, the WM-200
          maintains a consistent 200 TPH output with uniform moisture and
          aggregate blending.
        </span>
      ),
      image: "/images/wmm/wm-200-1.jpg",
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <span>
          Equipped with high-torque shafts and wear-resistant liners, the mixer
          produces dense, homogenous mixes while minimizing segregation and
          energy loss.
        </span>
      ),
      image: "/images/wmm/wm-200-2.jpeg",
    },
    {
      title: "50 Ton Surge Hopper",
      desc: (
        <span>
          The large-capacity discharge hopper enables continuous truck loading,
          reducing cycle time and enhancing paving efficiency on large projects.
        </span>
      ),
      image: "/images/wmm/wm-200-3.jpeg",
    },
    {
      title: "Automated Water and Aggregate Control",
      desc: (
        <span>
          Load-cell-equipped feeders and flowmeter-based water dosing ensure
          precise material proportioning and consistent moisture levels.
        </span>
      ),
      image: "/images/wmm/wm-200-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Expressways and Large Infrastructure",
      desc: (
        <span>
          200 TPH output ensures steady production for multi-kilometer stretches
          of high-speed roadways and urban expressways.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "High-Performance Mixing System",
      desc: (
        <span>
          The twin-shaft pug mill guarantees uniform distribution of moisture
          and aggregates, ensuring base layers that meet stringent compaction
          standards.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Efficient Material Handling",
      desc: (
        <span>
          Variable-speed feeders and belt conveyors maintain consistent material
          flow, preventing bottlenecks during peak production.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Designed for Continuous Operation",
      desc: (
        <span>
          The plant’s heavy-duty frame, corrosion-resistant components, and
          replaceable wear parts ensure 24/7 performance with minimal downtime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Customizable for CTAB and Additives",
      desc: (
        <span>
          An optional cement silo and screw conveyor system enable dust-free
          cement transfer for Cement Treated Aggregate Base (CTAB) applications.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Four-bin feeder with load-cell monitoring for accurate
            proportioning and uninterrupted material flow.
          </li>
          <li>
            • Variable-speed drives ensure smooth operation across all bins.
          </li>
        </ul>
      ),
    },
    {
      title: "Belt Conveyor System",
      desc: (
        <ul>
          <li>
            • High-tensile conveyors with adjustable tensioning provide stable,
            efficient material transfer between units.
          </li>
          <li>• Built for continuous duty under high-output conditions.</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <ul>
          <li>
            • Robust, high-capacity mixer with replaceable wear liners and
            precision blades.
          </li>
          <li>
            • Delivers homogeneous mixes optimized for strength and compaction.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Dosing & VFD Controlled System",
      desc: (
        <ul>
          <li>
            • Automated water addition synchronized with pug mill speed and
            aggregate flow.
          </li>
          <li>
            • Maintains ideal moisture balance for long-lasting, compactable
            base layers.
          </li>
        </ul>
      ),
    },
    {
      title: "Storage Hopper (UPTO 50 Tons)",
      desc: (
        <ul>
          <li>
            • Facilitates smooth discharge and continuous truck loading for
            high-volume projects.
          </li>
          <li>
            • Equipped with anti-stick lining and a hydraulic gate for efficient
            operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>WM-200 | 200 TPH Wet Mix Macadam Plant | Atlas Technologies India</title>
        <meta name="description" content="WM-200 — 200 TPH wet mix macadam plant, twin-shaft pug mill, surge hopper, VFD water dosing. High-capacity WMM for national highway base preparation. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/wet-mix-plant/wm-200"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail= "/images/wmm/wmm-200-one.jpg"
        videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
        title={"WM-200: Built for Expressway-Grade Strength and Consistency"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Efficiency and Long-Term Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose WM-200"
        subtitle="The WM-200 is the contractor’s choice for high-output, expressway-grade road base production, combining automation, capacity, and rugged durability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The WM-200 is precision-engineered to deliver maximum throughput, ease of maintenance, and uniform mix quality for expressway-grade performance."
        }
        components={components}
        img = "/images/wmm/wmm-200-one.jpg"
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
