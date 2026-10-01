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
import useCategoryProducts from "../../../../hooks/useCategoryProducts";
import ProductSchema from "../../../../components/schema/ProductSchema";

export default function ReadyMixRM1050Diesel() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mini-concrete-batching-plant",
    "rm-1050-diesel"
  );

  const product = {
    title: "READY MIX–RM-1050 (Diesel Engine) Mini Concrete Batching Plant",
    subtitle: "Output: 12–13 m³/hr | Power: 30 HP | Mixer Volume: 800 L",
    description: [
      "The Atlas READY MIX–RM-1050 (Diesel Engine) Mini Concrete Batching Plant is a high-productivity, mobile batching solution designed for on-site concrete production in remote or power-deficient locations. With its powerful 30 HP diesel engine, this model delivers reliable performance without reliance on external electricity, perfect for rural, infrastructure, and tough terrain construction sites.",
      "Equipped with a reversible drum mixer, advanced load-cell weighing, and a compact towable frame, the RM-1050 Diesel provides dependable batching accuracy and mobility for contractors needing consistent performance under demanding field conditions.",
    ],
    features: [
      "Remote Operation Friendly",
      "Compact & Mobile",
      "Accurate Batching",
    ],
    images: [
      "/images/concrete-plants/newpageeight.webp",
      "/images/concrete-plants/newpagethree.webp",
      "/images/concrete-plants/newpagetwo.webp",
      
    ],
  };

  const featureData = [
    {
      title: "30 HP Diesel Engine Drive",
      desc: "Provides strong torque and self-sufficient operation, enabling smooth and continuous batching where grid electricity is unavailable.",
      image: "/images/concrete-plants/ready-mix-rm-1050-diesel-1.jpg",
    },
    {
      title: "12–13 m³/hr Output Capacity",
      desc: "Delivers large-volume output suited for mid-sized construction, rural infrastructure, and remote RMC operations.",
      image: "/images/concrete-plants/ready-mix-rm-1050-diesel-2.jpg",
    },
    {
      title: "Reversible Drum Mixer (800 L)",
      desc: "Mixes in one direction and discharges in reverse for uniform blending with minimal residue in the drum.",
      image: "/images/concrete-plants/ready-mix-rm-1050-diesel-3.jpg",
    },
    {
      title: "Precision Load-Cell Weighing",
      desc: "Aggregates and water are weighed independently with ±1–2% accuracy for repeatable batch quality.",
      image: "/images/concrete-plants/ready-mix-rm-1050-diesel-1.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Towable, No-Foundation Setup",
      desc: "Single-frame mobile chassis installs on level compacted ground and can be transported by tractor or pickup.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Fast, Consistent Mixing",
      desc: "Reversible drum and accurate weighing deliver consistent concrete quality batch after batch.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance, High Durability",
      desc: "V-belt-driven system, replaceable paddles, and centralized grease points reduce wear and servicing requirements.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Quick Transport & Setup",
      desc: "No civil foundation required. Set, level, load, and begin batching within minutes.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Built for Heavy Use",
      desc: "Heavy-gauge steel fabrication and corrosion-resistant coatings withstand harsh outdoor environments.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Diesel Power Unit",
      desc: (
        <ul>
          <li>
            • 30 HP diesel engine provides robust, fuel-efficient performance.
          </li>
          <li>• Easy-access housing for maintenance and improved cooling.</li>
        </ul>
      ),
    },
    {
      title: "Reversible Drum Mixer",
      desc: (
        <ul>
          <li>
            • 800 L drum mixes and discharges through opposite rotation cycles.
          </li>
          <li>
            • Replaceable mixing blades ensure long service life and consistent
            mixing.
          </li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>
            • Dual-bin system with load cells on each bin for precise material
            dosing.
          </li>
          <li>
            • Independent discharge gates support faster material handling.
          </li>
        </ul>
      ),
    },
    {
      title: "Weighing System",
      desc: (
        <ul>
          <li>• Load-cell-mounted water tank ensures ±1–2% accuracy.</li>
          <li>
            • Digital weight indicator displays real-time batching values.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>• Standard digital batching panel for mix control.</li>
          <li>
            • Optional microprocessor upgrade for recipe storage and advanced
            automation.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>
            • Single-frame towable structure designed for tractors and pickups.
          </li>
          <li>• Stable, foundation-free installation on level ground.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the output capacity of the READY MIX–RM-1050 Diesel?",
      content: (
        <p>It produces 12–13 m³/hr depending on mix design and cycle time.</p>
      ),
    },
    {
      title: "2. Does the plant require electricity?",
      content: (
        <p>
          No — it is fully powered by a 30 HP diesel engine, ideal for off-grid
          sites.
        </p>
      ),
    },
    {
      title: "3. How accurate is batching?",
      content: (
        <p>Electronic weighing using load cells ensures ±1–2% precision.</p>
      ),
    },
    {
      title: "4. Can the RM-1050 Diesel be moved easily?",
      content: (
        <p>
          Yes. The towable single-frame structure enables quick relocation
          across multiple job sites.
        </p>
      ),
    },
    {
      title: "5. What maintenance is required?",
      content: (
        <p>
          Routine greasing (via centralized grease points), drum cleaning, and
          diesel engine checks every 50 hours.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>RM-1050 Diesel | 13 m³/hr Off-Grid Batching Plant | Atlas</title>
        <meta name="description" content="RM-1050 Diesel — 13 m³/hr diesel-powered mini batching plant, towable, no grid power needed. Ideal for remote highway and rural construction projects. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/ready-mix-rm-1050-diesel-1.jpg"
        pageUrl="/concrete-plants/mini-concrete-batching-plant/rm-1050-diesel"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newpageeight.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "READY MIX–RM-1050 Diesel: High-Capacity, Self-Powered Concrete Production"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Output, Reliability, and All-Terrain Operation"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose READY MIX–RM-1050 Diesel"
        subtitle="Dependable, low-maintenance mini batching plant with high-volume output and robust diesel drive for off-grid sites."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Every element of the RM-1050 Diesel plant is designed for accuracy, durability, and mobility in challenging field conditions."
        components={components}
        img = "/images/concrete-plants/newpageeight.webp"
      />

      <ProductSlider2
        sectionTitle="Explore Other Mini Concrete Plants"
        sectionDesc="Browse our range of mobile batching units designed for efficient on-site concrete production."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
