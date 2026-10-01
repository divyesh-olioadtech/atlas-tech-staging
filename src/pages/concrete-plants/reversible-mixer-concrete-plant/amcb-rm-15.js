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

export default function RM15() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "amcb-rm-series",
    "amcb-rm-15"
  );

  const product = {
    title: "AMCB / RM 15 Reversible Mixer Concrete Plant",
    subtitle: "Rated Output: 15 m³/hr | Mixer Size ~ 600 L",
    description: [
      "The Atlas RM 15 Reversible Mixer Concrete Plant is a compact, high-precision batching system designed for small RMC setups, precast yards, and on-site concrete production. With its reversible drum mixing technology and efficient layout, it offers consistent concrete quality and reliable performance in limited workspaces or remote project areas.",
      "Powered by an efficient electric or diesel drive, the RM 15 combines fast mixing cycles, accurate weighing, and easy mobility for dependable concrete output up to 15 m³/hr. It’s built for contractors and RMC operators who require flexibility, low operating cost, and dependable daily output.",
    ],
    features: ["Uniform Mixing", "Compact Design", "Consistent Output"],
    images: [
      "/images/concrete-plants/newimage-eight.webp",
       "/images/concrete-plants/newimage-eleven.webp",
       "/images/concrete-plants/newimage-fifteen.webp",
       "/images/concrete-plants/newimage-five.webp",
    ],
  };

  const featureData = [
    {
      title: "15 m³/hr Rated Output",
      desc: (
        <span>
          Delivers reliable daily concrete production for small RMC plants,
          housing projects, and road works.
        </span>
      ),
      image: "/images/concrete-plants/rm-15-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (600 L)",
      desc: (
        <span>
          Dual-direction mixing ensures uniform blending and quick discharge
          with minimal residue.
        </span>
      ),
      image: "/images/concrete-plants/rm-15-2.jpg",
    },
    {
      title: "Compact, Single-Chassis Setup",
      desc: (
        <span>
          Fully mobile and towable. It operates directly on compacted ground
          with no civil foundation needed.
        </span>
      ),
      image: "/images/concrete-plants/rm-15-3.jpg",
    },
    {
      title: "Precision Batching with Load Cells",
      desc: (
        <span>
          Electronic weighing for aggregates, cement, and water ensures ±1–2%
          batch accuracy.
        </span>
      ),
      image: "/images/concrete-plants/rm-15-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Precast & Small RMC Units",
      desc: (
        <span>
          Efficiently handles multiple batches per hour with precise
          proportioning and quick discharge.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Reliable Concrete Quality",
      desc: (
        <span>
          Reversible drum blades promote full material turnover for uniform mix
          consistency.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Quick Setup & Easy Transport",
      desc: (
        <span>
          Foldable components and a single-frame layout make relocation simple
          and fast.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance Operation",
      desc: (
        <span>
          Minimal moving parts, direct V-belt drive, and easy-access lubrication
          points.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Flexible Power Options",
      desc: (
        <span>
          Available with an electric motor or diesel engine for urban or remote
          locations.
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
            • 600 L drum capacity; mixes and discharges by directional drum
            rotation.
          </li>
          <li>• Replaceable blades for improved life and easy maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>• Compact bin arrangement with load-cell weighing.</li>
          <li>• Smooth gate operation for accurate discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weighing System",
      desc: (
        <ul>
          <li>
            • Individual load cells for aggregates and a water tank for ±1–2%
            precision.
          </li>
          <li>• Optional digital water dosing control.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>• Digital display with batch counter and timing controls.</li>
          <li>• Optional microprocessor upgrade for mix recipe memory.</li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Rugged single-frame structure for towing and transport.</li>
          <li>
            • Operates on compacted ground; no permanent foundation needed.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the rated output of RM 15?",
      content: (
        <p>
          The RM 15 delivers up to 15 m³ of concrete per hour, depending on
          cycle time and mix design.
        </p>
      ),
    },
    {
      title: "2. How does the reversible drum improve mix quality?",
      content: (
        <p>
          Mixing in the forward direction and discharging in reverse ensures
          complete material turnover and uniform concrete.
        </p>
      ),
    },
    {
      title: "3. Is the plant easy to relocate?",
      content: (
        <p>
          Yes. The single-chassis design allows easy towing by tractor or
          pickup.
        </p>
      ),
    },
    {
      title: "4. What power options are available?",
      content: (
        <p>
          It can operate on a diesel engine or electric motor, depending on site
          power availability.
        </p>
      ),
    },
    {
      title: "5. Is the plant suitable for precast applications?",
      content: (
        <p>
          Yes. The RM 15 provides consistent, high-quality concrete ideal for
          small precast and RMC setups.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AMCB RM-15 | 15 m³/hr Reversible Mixer Plant | Atlas India</title>
        <meta name="description" content="AMCB RM-15 — 15 m³/hr reversible drum mixer, 600L mixer, diesel or electric, compact and mobile. For road construction, precast blocks and rural projects. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        pageUrl="/concrete-plants/reversible-mixer-concrete-plant/amcb-rm-15"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newimage-eight.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"RM 15: Portable Batching Plant for Precast & RMC Applications"}
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Accuracy, Mobility, and Energy Efficiency"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose RM 15"
        subtitle="The RM 15 offers a balance of capacity, mobility, and mix quality, making it ideal for small commercial batching and site-based production."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="The RM 15 Reversible Mixer Concrete Plant is engineered for flexibility, long life, and consistent on-site batching performance."
        components={components}
        img = "/images/concrete-plants/newimage-eleven.webp"
      />

      <ProductSlider2
        sectionTitle="Other Reversible Mixer Models"
        sectionDesc="Explore our range of compact reversible concrete mixer plants for different capacities."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg="#E7F1E9" />
    </>
  );
}
