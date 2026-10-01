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

export default function RM25() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "amcb-rm-series",
    "amcb-rm-25"
  );

  const product = {
    title: "AMCB / RM 25 Reversible Mixer Concrete Plant",
    subtitle: "Rated Output: 25 m³/hr | Mixer Size ~ 1050 L",
    description: [
      "The Atlas RM 25 Reversible Mixer Concrete Plant is a high-capacity, mobile batching solution designed for contractors handling large-scale or continuous concrete production. With a 25 m³/hr rated output and a heavy-duty reversible drum mixer, it delivers uniform, high-quality concrete while maintaining the mobility and simplicity of the mini plant series.",
      "Engineered for rural roads, precast yards, and large foundation work, the RM 25 offers precision weighing, easy portability, and durable construction. Its single-frame design, quick setup, and flexible power options make it an ideal choice for projects that demand both capacity and reliability.",
    ],
    features: ["High Output", "Mobile Design", "Consistent Mix Quality"],
    images: [
     "/images/concrete-plants/newimage-fifteen.webp",
      "/images/concrete-plants/newimage-nine.webp",
       "/images/concrete-plants/newimage-thirteen.webp",
       "/images/concrete-plants/newimage-five.webp",
    ],
  };

  const featureData = [
    {
      title: "25 m³/hr Rated Output",
      desc: (
        <span>
          Provides continuous concrete supply for larger rural projects,
          bridges, and infrastructure applications.
        </span>
      ),
      image: "/images/concrete-plants/rm-25-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (1050 L)",
      desc: (
        <span>
          Mixes in forward rotation and discharges in reverse, promoting even
          material turnover and uniform batch quality.
        </span>
      ),
      image: "/images/concrete-plants/rm-25-2.jpg",
    },
    {
      title: "Single-Chassis, Foundation-Free Design",
      desc: (
        <span>
          Compact frame allows quick installation and relocation without civil
          foundation requirements.
        </span>
      ),
      image: "/images/concrete-plants/rm-25-3.jpg",
    },
    {
      title: "Precision Weighing System",
      desc: (
        <span>
          Load-cell weighing for aggregates, cement, and water ensures batch
          accuracy within ±1–2%.
        </span>
      ),
      image: "/images/concrete-plants/rm-25-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "For Large Rural and Infrastructure Projects",
      desc: (
        <span>
          Ideal for long-duration works such as rural roads, foundation bases,
          or small precast plants.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Reliable Concrete Consistency",
      desc: (
        <span>
          Reversible mixing design ensures even blending and quick discharge
          with no material buildup.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Portable and Site-Ready",
      desc: (
        <span>
          A towable unit that can be deployed rapidly on leveled ground, making
          it suitable for frequent site shifts.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Long-Life Construction",
      desc: (
        <span>
          Heavy-duty steel chassis, wear-resistant blades, and rust-protected
          drum guarantee durability in demanding environments.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Low Maintenance",
      desc: (
        <span>
          Simplified layout with centralized lubrication and easily serviceable
          parts reduces downtime.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Reversible Drum Mixer",
      desc: (
        <ul>
          <li>
            • 1050 L drum volume with replaceable blades and liners for long
            service life.
          </li>
          <li>• Smooth discharge mechanism for clean, efficient operation.</li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>
            • Dual-bin setup with load-cell weighing for precise proportioning.
          </li>
          <li>• Quick gate control for fast and accurate discharge.</li>
        </ul>
      ),
    },
    {
      title: "Water Weighing & Control",
      desc: (
        <ul>
          <li>• Load-cell-mounted water tank for exact water measurement.</li>
          <li>• Automatic pump and level sensor for continuous operation.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            • Digital batching panel with timing, batch count, and weight
            indicators.
          </li>
          <li>
            • Optional microprocessor control with recipe storage capability.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>
            • Single-frame, towable design for quick relocation between sites.
          </li>
          <li>
            • Operates directly on level compacted ground—no foundation needed.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the production capacity of RM 25?",
      content: (
        <p>
          The RM 25 delivers up to 25 m³/hr of concrete, depending on batch
          cycle and material type.
        </p>
      ),
    },
    {
      title: "2. What makes the reversible drum system effective?",
      content: (
        <p>
          It mixes in one direction and discharges in reverse, promoting full
          material turnover and reducing drum residue.
        </p>
      ),
    },
    {
      title: "3. Does the RM 25 require permanent installation?",
      content: (
        <p>
          No. It’s a fully mobile unit that can operate on compacted ground
          without a civil foundation.
        </p>
      ),
    },
    {
      title: "4. What power options are available?",
      content: (
        <p>
          Available in both diesel engine and electric motor configurations for
          flexible site compatibility.
        </p>
      ),
    },
    {
      title: "5. What kind of maintenance does the RM 25 need?",
      content: (
        <p>
          Regular greasing, drum cleaning, and periodic inspection of wear
          components every 50 operating hours are recommended for smooth
          operation.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AMCB RM-25 | 25 m³/hr Reversible Mixer Plant | Atlas India</title>
        <meta name="description" content="AMCB RM-25 — 25 m³/hr reversible drum mixer, 1050L mixer, diesel or electric, forward mix reverse discharge. For larger site contracts. Get specs from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        pageUrl="/concrete-plants/reversible-mixer-concrete-plant/amcb-rm-25"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newimage-fifteen.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"RM 25: High-Performance Batching with Maximum Mobility"}
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Productivity, Strength, and Operational Flexibility"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose RM 25"
        subtitle="The RM 25 is built for contractors who need high-capacity, mobile concrete batching with minimal setup time and maximum reliability."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="The RM 25 Reversible Mixer Concrete Plant combines large-capacity batching with ease of maintenance and reliable mobility."
        components={components}
        img =  "/images/concrete-plants/newimage-five.webp"
      />

      <ProductSlider2
        sectionTitle="Other Reversible Mixer Models"
        sectionDesc="Explore our range of mini, mid, and high-capacity reversible concrete mixer plants."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg="#E7F1E9" />
    </>
  );
}
