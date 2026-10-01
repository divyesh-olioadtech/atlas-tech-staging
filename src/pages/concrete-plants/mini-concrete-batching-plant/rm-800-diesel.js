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

export default function ReadyMixRM800Diesel() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mini-concrete-batching-plant",
    "rm-800-diesel"
  );

  const product = {
    title: "READY MIX-RM-800 (Diesel Engine) Concrete Batching Plant",
    subtitle: "Output: 8–9 m³/hr | Power: 25 HP | Mixer Volume: 600 L",
    description: [
      "The Atlas READY MIX-RM-800 Mini Concrete Batching Plant (Diesel) is a self-powered, mobile batching solution designed for efficient concrete production at off-grid or remote job sites. Equipped with a 25 HP diesel engine, it ensures reliable performance without dependency on external electricity, making it ideal for rural and infrastructure applications.",
      "With its reversible drum mixer, precision load-cell-based weighing, and towable single-frame design, the READY MIX-RM-800 Diesel model combines durability with simplicity. It’s built for contractors who need consistent batching results and mobility under challenging site conditions.",
    ],
    features: [
      "Remote Operation Friendly",
      "Compact & Mobile",
      "Accurate Batching",
    ],
    images: [
      "/images/concrete-plants/newpageeight.webp",
      "/images/concrete-plants/newpagefive.webp",
      "/images/concrete-plants/newpagefour.webp",
    ],
  };

  const featureData = [
    {
      title: "25 HP Diesel Engine Drive",
      desc: "Delivers powerful, self-sufficient operation with stable torque for uninterrupted mixing in power-limited areas.",
      image: "/images/concrete-plants/ready-mix-rm-800-diesel-1.jpg",
    },
    {
      title: "8–9 m³/hr Output Capacity",
      desc: "Produces reliable, small-batch concrete for rural roads, remote construction, and utility projects.",
      image: "/images/concrete-plants/ready-mix-rm-800-diesel-2.jpg",
    },
    {
      title: "Reversible Drum Mixer (600 L)",
      desc: "Dual-direction drum rotation mixes and discharges efficiently with minimal residue build-up.",
      image: "/images/concrete-plants/ready-mix-rm-800-diesel-3.jpg",
    },
    {
      title: "Precision Weighing System",
      desc: "Load cells under each bin and the water tank ensure batch accuracy within ±1–2%.",
      image: "/images/concrete-plants/ready-mix-rm-800-diesel-1.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Portable, Foundation-Free Setup",
      desc: "Compact single-frame plant can be towed by a tractor or pickup and installed on leveled ground.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Consistent Mix Quality",
      desc: "Accurate weighing and reversible drum design ensure uniform, high-quality concrete in every batch.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance, Long Service Life",
      desc: "V-belt-driven mixer with replaceable paddles and single-lever grease system reduces maintenance downtime.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Quick Setup & Easy Transport",
      desc: "No civil foundation needed. Simply position, level, and start batching.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Proven Durability",
      desc: "Heavy-gauge steel frame and corrosion-resistant coatings ensure long-term use in rugged site conditions.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Power Unit",
      desc: (
        <ul>
          <li>
            • 25 HP diesel engine provides self-sustained, high-torque
            performance.
          </li>
          <li>• Designed for easy starting and low fuel consumption.</li>
        </ul>
      ),
    },
    {
      title: "Reversible Drum Mixer",
      desc: (
        <ul>
          <li>• 600–800 L drum capacity with replaceable mixing blades.</li>
          <li>
            • Mixes in one direction, discharges in reverse for consistent
            batching.
          </li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>• Two-bin configuration with load-cell weighing for accuracy.</li>
          <li>• Independent discharge gates for faster material handling.</li>
        </ul>
      ),
    },
    {
      title: "Control System",
      desc: (
        <ul>
          <li>
            • Simple digital batching panel with start/stop and weight display.
          </li>
          <li>
            • Optional microprocessor upgrade available for advanced control.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Single-frame structure towable by tractor or pickup.</li>
          <li>• Foundation-free setup with adjustable leveling supports.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the output of the READY MIX-RM-800 Diesel model?",
      content: (
        <p>
          Delivers 8–9 m³ of concrete per hour, depending on mix type and
          batching cycle.
        </p>
      ),
    },
    {
      title: "2. Does the READY MIX-RM-800 require external power?",
      content: (
        <p>
          No. It operates entirely on its 25 HP diesel engine, ideal for
          off-grid or rural areas.
        </p>
      ),
    },
    {
      title: "3. How accurate is the batching process?",
      content: (
        <p>
          Electronic weighing with load cells provides ±1–2% batch accuracy.
        </p>
      ),
    },
    {
      title: "4. How portable is this plant?",
      content: (
        <p>
          This plant is highly mobile. Its compact frame allows towing by
          tractor or light vehicle with minimal setup time.
        </p>
      ),
    },
    {
      title: "5. What maintenance is required?",
      content: (
        <p>
          Routine greasing, drum cleaning, and periodic engine checks every 50
          hours ensure smooth operation.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>RM-800 Diesel | 8 m³/hr Off-Grid Batching Plant | Atlas India</title>
        <meta name="description" content="RM-800 Diesel — 8 m³/hr mini batching plant, diesel drive for off-grid and remote sites, reversible drum, no civil foundation needed. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/ready-mix-rm-800-diesel-1.jpg"
        pageUrl="/concrete-plants/mini-concrete-batching-plant/rm-800-diesel"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newpageeight.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "READY MIX-RM-800 Diesel: Dependable On-Site Concrete Batching Power"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Mobility, Strength, and Remote-Site Operation"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose READY MIX-RM-800 Diesel"
        subtitle="Reliable, self-powered mini batching plant with precision weighing and durable construction for off-grid sites."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Every part of the READY MIX-RM-800 Diesel plant is designed for efficient, mobile, and precise batching under field conditions."
        components={components}
        img = "/images/concrete-plants/newpagefive.webp"
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
