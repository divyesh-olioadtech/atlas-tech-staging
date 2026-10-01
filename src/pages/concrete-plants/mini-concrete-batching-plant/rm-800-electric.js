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
export default function ReadyMixRM800Electric() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mini-concrete-batching-plant",
    "rm-800-electric"
  );

  const product = {
    title: "READY MIX-RM-800 (Electric) Mini Concrete Batching Plant",
    subtitle: "Output: 8–9 m³/hr | Power: 20 HP | Mixer Volume: 600 L",
    description: [
      "The Atlas READY MIX-RM-800 (Electric) Mini Concrete Batching Plant is a compact, mobile batching unit designed for small-scale concrete production. Built for performance in limited spaces or remote locations, it combines a reversible drum mixer, simple control system, and sturdy frame to deliver ready-mix quality concrete wherever it’s needed.",
      "With its 20 HP electric drive, easy towing setup, and precise load-cell-based batching, the READY MIX-RM-800 (Electric) offers consistent mixing for on-site applications such as rural roads, small bridges, and foundations. It’s the ideal choice for contractors seeking portable, low-maintenance batching performance.",
    ],
    features: ["Compact Design", "Accurate Batching", "Low Maintenance"],
    images: [
      "/images/concrete-plants/newpageone.webp",
      "/images/concrete-plants/newpageseven.webp",
      "/images/concrete-plants/newpagesix.webp",
    ],
  };

  const featureData = [
    {
      title: "Output Capacity: 8–9 m³/hr",
      desc: "Delivers reliable batch output for small projects and daily site pours.",
      image: "/images/concrete-plants/ready-mix-rm-800-electric-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (600 L)",
      desc: "Mixes and discharges by drum rotation, ensuring uniform and consistent concrete with minimal residue buildup.",
      image: "/images/concrete-plants/ready-mix-rm-800-electric-2.jpg",
    },
    {
      title: "Electric Motor Drive (20 HP)",
      desc: "Quiet and clean operation ideal for urban or semi-urban locations with access to electricity.",
      image: "/images/concrete-plants/ready-mix-rm-800-electric-3.jpg",
    },
    {
      title: "Load-Cell Weighing System",
      desc: "Individual load cells for aggregates and water tanks ensure ±1–2% batch accuracy.",
      image: "/images/concrete-plants/ready-mix-rm-800-electric-1.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Compact & Towable Design",
      desc: "The single-frame chassis allows for easy relocation using tractors, pickups, or light trucks.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Precision Batching & Water Control",
      desc: "Electronic weighing and load-cell-mounted water tanks ensure consistent concrete quality.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance Design",
      desc: "V-belt-driven drum, centralized grease points, and replaceable paddles simplify upkeep.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Quick Setup Anywhere",
      desc: "No foundation required; just place on level, compacted ground and start batching.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Built to Last",
      desc: "Heavy-duty steel frame, corrosion-resistant finish, and quality electrical components ensure long life.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Reversible Drum Mixer",
      desc: (
        <ul>
          <li>
            • 600–800 L capacity with mixing and discharge in opposite drum
            directions.
          </li>
          <li>
            • Fitted with replaceable mixing blades for long service life.
          </li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>
            • Two-bin system with individual load cells for precise material
            weighing.
          </li>
          <li>• Smooth discharge gates for fast and accurate batching.</li>
        </ul>
      ),
    },
    {
      title: "Weighing System",
      desc: (
        <ul>
          <li>• Electronic load cells for aggregates and water tank.</li>
          <li>• ±1–2% accuracy ensures repeatable batch quality.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            • Digital batching panel with start/stop and mix cycle controls.
          </li>
          <li>
            • Optional microprocessor upgrade for recipe storage and data
            logging.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Compact single-frame unit, towable by tractor or pickup.</li>
          <li>• Requires only firm, level ground, no civil foundation.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the output capacity of READY MIX-RM-800 (Electric)?",
      content: (
        <p>
          Produces 8–9 m³ of concrete per hour, depending on mix design and
          cycle time.
        </p>
      ),
    },
    {
      title: "2. How does the reversible drum mixer work?",
      content: (
        <p>
          Mixes in one direction and discharges in reverse, promoting efficient
          material turnover and even blending.
        </p>
      ),
    },
    {
      title: "3. How accurate is batching with READY MIX-RM-800 (Electric)?",
      content: (
        <p>
          Individual load cells provide ±1–2% weighing accuracy for aggregates
          and water.
        </p>
      ),
    },
    {
      title: "4. Can READY MIX-RM-800 (Electric) operate in remote areas?",
      content: (
        <p>
          Yes. It can be towed easily and runs on a standard power supply—ideal
          for compact job sites.
        </p>
      ),
    },
    {
      title: "5. How is maintenance simplified?",
      content: (
        <p>
          Features a single-lever lubrication system and V-belt-driven mixer—no
          gearbox servicing required.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>RM-800 Electric | 8 m³/hr Mini Batching Plant | Atlas India</title>
        <meta name="description" content="RM-800 Electric — 8 m³/hr mini batching plant, electric drive, reversible drum, simple towing. No civil foundation needed. For rural and small sites. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/ready-mix-rm-800-electric-1.jpg"
        pageUrl="/concrete-plants/mini-concrete-batching-plant/rm-800-electric"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newpageone.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "READY MIX-RM-800 (Electric): Compact Batching Power for Small Projects"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Mobility, Precision, and Cost Efficiency"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose READY MIX-RM-800 (Electric)"
        subtitle="Reliable, low-maintenance batching with accurate load-cell weighing."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Every element of the READY MIX-RM-800 (Electric) is engineered for durability, mobility, and accurate batching."
        components={components}
         img = "/images/concrete-plants/newpageone.webp"
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
