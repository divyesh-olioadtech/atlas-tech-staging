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

export default function RM20() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "amcb-rm-series",
    "amcb-rm-20"
  );

  const product = {
    title: "AMCB / RM 20 Reversible Mixer Concrete Plant",
    subtitle: "Rated Output: 20 m³/hr | Mixer Size ~ 800 L",
    description: [
      "The Atlas RM 20 Reversible Mixer Concrete Plant is a medium-capacity, fully mobile concrete batching solution designed for contractors handling continuous on-site production. With its reversible drum mixing system and compact single-chassis design, it offers dependable, uniform concrete output while minimizing energy consumption and setup time.",
      "Ideal for infrastructure, housing, and rural road projects, the RM 20 delivers the perfect blend of mobility, accuracy, and mix consistency. Its heavy-duty reversible drum and precise load-cell weighing system ensure reliable batch performance across all project conditions.",
    ],
    features: ["Mid-Range Output", "Reliable Batching", "Compact Mobility"],
    images: [
      "/images/concrete-plants/newimage-seven.webp",
      "/images/concrete-plants/newimage-six.webp",
      "/images/concrete-plants/newimage-ten.webp",
      "/images/concrete-plants/newimage-thirteen.webp",
    ],
  };

  const featureData = [
    {
      title: "20 m³/hr Rated Output",
      desc: (
        <span>
          Provides continuous concrete supply for medium-scale sites, housing
          complexes, and roadwork.
        </span>
      ),
      image: "/images/concrete-plants/rm-20-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (800 L)",
      desc: (
        <span>
          Forward motion mixes materials; reverse motion discharges to ensure
          complete and even blending.
        </span>
      ),
      image: "/images/concrete-plants/rm-20-2.jpg",
    },
    {
      title: "Single-Chassis Construction",
      desc: (
        <span>
          Compact mobile frame simplifies transport and setup; operates directly
          on compacted ground.
        </span>
      ),
      image: "/images/concrete-plants/rm-20-3.jpg",
    },
    {
      title: "Precision Load-Cell Weighing",
      desc: (
        <span>
          Electronic weighing for cement, aggregates, and water maintains batch
          accuracy within ±1–2%.
        </span>
      ),
      image: "/images/concrete-plants/rm-20-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Mid-Range Batching Applications",
      desc: (
        <span>
          Ideal for medium-scale works needing fast setup, consistent output,
          and flexible mobility.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Superior Mix Homogeneity",
      desc: (
        <span>
          Reversible drum with optimized flight arrangement ensures consistent,
          lump-free concrete.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Foundation-Free Setup",
      desc: (
        <span>
          No civil base required. The team can set up on level compacted soil or
          floor.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance & High Durability",
      desc: (
        <span>
          Fewer moving parts and easy-access grease points reduce service effort
          and downtime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Electric or Diesel Drive Options",
      desc: (
        <span>
          The plant offers flexibility for sites with or without grid access.
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
            • 800 L mixing drum designed for thorough blending and smooth
            discharge.
          </li>
          <li>• Replaceable blades and drum liners for extended durability.</li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>
            • Two-bin system with load-cell weighing for accurate proportioning.
          </li>
          <li>• Easy gate operation for controlled flow.</li>
        </ul>
      ),
    },
    {
      title: "Water Weighing & Control",
      desc: (
        <ul>
          <li>
            • Load-cell-mounted water tank ensures precise dosing per batch.
          </li>
          <li>• Automatic refill system available as an optional upgrade.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>• Digital display panel with mix cycle and batch counter.</li>
          <li>
            • Optional microprocessor system for data storage and recipe recall.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>
            • Compact, single-frame unit designed for towing and fast
            relocation.
          </li>
          <li>• Operates directly on stable ground; no foundation required.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the rated capacity of RM 20?",
      content: (
        <p>
          The RM 20 produces approximately 20 m³ of concrete per hour, depending
          on batch cycle and mix design.
        </p>
      ),
    },
    {
      title: "2. How does reversible mixing improve concrete quality?",
      content: (
        <p>
          The dual-direction drum ensures full material turnover, resulting in
          uniform and consistent concrete batches.
        </p>
      ),
    },
    {
      title: "3. Can the RM-20 operate without a foundation?",
      content: (
        <p>
          Yes. It’s designed to work on leveled compacted ground with no need
          for permanent installation.
        </p>
      ),
    },
    {
      title: "4. What type of power system does it use?",
      content: (
        <p>
          Available in both diesel engine and electric motor configurations to
          match site conditions.
        </p>
      ),
    },
    {
      title: "5. What kind of maintenance does it require?",
      content: (
        <p>
          Routine cleaning, greasing, and inspection every 50 operating hours
          ensure optimal performance and longevity.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AMCB RM-20 | 20 m³/hr Reversible Mixer Plant | Atlas India</title>
        <meta name="description" content="AMCB RM-20 — 20 m³/hr reversible drum mixer plant, 800L mixer, diesel or electric drive. For mid-scale road and building projects. Get specs and price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        pageUrl="/concrete-plants/reversible-mixer-concrete-plant/amcb-rm-20"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newimage-seven.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "RM 20: Reliable, Mid-Capacity Batching for On-Site Concrete Needs"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Performance, Portability, and Easy Operation"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose RM 20"
        subtitle="The RM 20 is the ideal choice for contractors seeking high efficiency and reliable performance without complex installation requirements."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="The RM 20 Reversible Mixer Concrete Plant is built for efficient operation, precision batching, and long service life."
        components={components}
        img =  "/images/concrete-plants/newimage-six.webp"
      />

      <ProductSlider2
        sectionTitle="Other Reversible Mixer Models"
        sectionDesc="Explore our range of compact and medium-capacity reversible concrete mixer plants."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg="#E7F1E9" />
    </>
  );
}
