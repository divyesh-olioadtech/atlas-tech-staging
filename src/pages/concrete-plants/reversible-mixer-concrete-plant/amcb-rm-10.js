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

export default function RM10() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "amcb-rm-series",
    "amcb-rm-10"
  );

  const product = {
    title: "AMCB / RM 10 Reversible Concrete Mixer",
    subtitle: "Rated Output: 10 m³/hr | Mixer Size ~ 400 L",
    description: [
      "The Atlas RM 10 Reversible Mixer Concrete Plant is a compact and portable concrete production system designed for small-scale construction and rural applications. Built with a reversible drum mixer, it ensures uniform concrete quality with efficient energy use and minimal maintenance.",
      "This plant is ideal for rural roads, block manufacturing units, and site batching where simplicity and mobility are key. Its single-chassis design allows quick setup and relocation, making it perfect for job sites requiring flexible concrete production.",
    ],
    features: ["Compact Design", "Uniform Mixing", "Reliable Performance"],
    images: [
      "/images/concrete-plants/newimage-four.webp",
      "/images/concrete-plants/newimage-fourteen.webp",
      "/images/concrete-plants/newimage-nine.webp",
      "/images/concrete-plants/newimage-one.webp",
    ],
  };

  const featureData = [
    {
      title: "10 m³/hr Rated Output",
      desc: (
        <span>
          Provides a steady concrete supply for small construction and rural
          projects.
        </span>
      ),
      image: "/images/concrete-plants/rm-10-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (400 L)",
      desc: (
        <span>
          Mixes in forward rotation and discharges in reverse for uniform
          blending and minimal residue.
        </span>
      ),
      image: "/images/concrete-plants/rm-10-2.jpg",
    },
    {
      title: "Compact Single-Chassis Structure",
      desc: (
        <span>
          All components are mounted on one frame for easy transport and setup
          without a foundation.
        </span>
      ),
      image: "/images/concrete-plants/rm-10-3.jpg",
    },
    {
      title: "Low Power Requirement",
      desc: (
        <span>
          Operates efficiently on electric or diesel drive options for remote
          sites with limited power.
        </span>
      ),
      image: "/images/concrete-plants/rm-10-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Rural and Local Projects",
      desc: (
        <span>
          Compact and portable. Ideal for concrete roads, small buildings, and
          precast operations.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Reliable Mix Quality",
      desc: (
        <span>
          Forward/reverse mixing action ensures consistent homogeneity for every
          batch.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Quick Setup & Mobility",
      desc: (
        <span>
          Towable frame and foldable elements allow easy transport and on-site
          assembly.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance",
      desc: (
        <span>
          Centralised lubrication system with hand pump & minimal moving parts
          keep service simple and cost-efficient.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Flexible Power Choice",
      desc: (
        <span>
          Electric or diesel drive available depending on site power
          availability.
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
          <li>• 400 L capacity with mix and discharge by drum rotation.</li>
          <li>• Replaceable blades and drum liners for long life.</li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>
            • Compact bin setup with manual or load-cell batching options.
          </li>
          <li>• Designed for easy charging and discharge.</li>
        </ul>
      ),
    },
    {
      title: "Water Tank & Weighing System",
      desc: (
        <ul>
          <li>• Load-cell-mounted water tank for accurate batch control.</li>
          <li>• Automatic refill pump with auto cutoff process.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>• Digital batching panel with start/stop and mix timer.</li>
          <li>
            • Optional microprocessor upgrade: batch-wise printing facility &
            pen drive system for recipe storage.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Single-frame, towable design for quick relocation.</li>
          <li>• Operates directly on compacted ground (no foundation).</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the output capacity of RM 10?",
      content: (
        <p>
          It delivers up to 10 m³ of concrete per hour, depending on mix design
          and batch cycle.
        </p>
      ),
    },
    {
      title: "2. How does the reversible mixer work?",
      content: (
        <p>
          The drum rotates forward for mixing and reverses for discharge,
          ensuring thorough material turnover.
        </p>
      ),
    },
    {
      title: "3. Can the plant run on diesel power?",
      content: (
        <p>
          Yes. It can be configured with either an electric motor or a diesel
          engine, based on site needs.
        </p>
      ),
    },
    {
      title: "4. Is a foundation required for installation?",
      content: (
        <p>
          No. It operates on level compacted ground without a civil foundation.
        </p>
      ),
    },
    {
      title: "5. What type of projects suit RM 10?",
      content: (
        <p>
          Ideal for rural roads, block production, small buildings, and
          maintenance projects needing low-volume concrete supply.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AMCB RM-10 | 10 m³/hr Reversible Mixer Plant | Atlas India</title>
        <meta name="description" content="AMCB RM-10 — 10 m³/hr reversible drum mixer plant, 400L mixer, diesel or electric drive, compact chassis. For small construction sites and rural projects. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        pageUrl="/concrete-plants/reversible-mixer-concrete-plant/amcb-rm-10"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newimage-four.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"RM 10: Compact Batching for Reliable Site Mixing"}
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Mobility, Efficiency, and Ease of Use"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose RM 10"
        subtitle="The RM 10 is a cost-effective, easy-to-deploy solution for contractors needing dependable, low-volume batching capacity on demand."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="The RM 10 Reversible Mixer Plant is engineered for portability and consistent operation under field conditions."
        components={components}
        img ="/images/concrete-plants/newimage-fourteen.webp"
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
