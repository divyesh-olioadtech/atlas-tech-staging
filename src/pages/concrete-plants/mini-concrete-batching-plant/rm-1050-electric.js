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

export default function ReadyMixRM1050Electric() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mini-concrete-batching-plant",
    "rm-1050-electric"
  );

  const product = {
    title: "READY MIX-RM-1050 (Electric) Mini Concrete Batching Plant",
    subtitle: "Output: 12–13 m³/hr | Power: 25 HP | Mixer Volume: 800 L",
    description: [
      "The Atlas READY MIX-RM-1050 Mini Concrete Batching Plant is a high-output, mobile batching solution built for fast and reliable on-site concrete production. Designed for foundations, small bridges, and remote infrastructure projects, it delivers ready-mix quality performance in a compact footprint.",
      "Powered by a 25 HP electric motor and equipped with a reversible drum mixer, the READY MIX-RM-1050 provides precise electronic weighing and dependable output for contractors seeking higher productivity with simple operation and low maintenance.",
    ],
    features: ["Higher Output", "Accurate Batching", "Compact Mobility"],
    images: [
       "/images/concrete-plants/newpageeight.webp",
      "/images/concrete-plants/newpagefive.webp",
      "/images/concrete-plants/newpageseven.webp",
    ],
  };

  const featureData = [
    {
      title: "Output Capacity: 12–13 m³/hr",
      desc: "Delivers consistent ready-mix output for larger small-scale or mid-range construction projects.",
      image: "/images/concrete-plants/ready-mix-rm-1050-electric-1.jpg",
    },
    {
      title: "Reversible Drum Mixer (800 L)",
      desc: "Drum rotation provides uniform blending and clean discharge with minimal material residue.",
      image: "/images/concrete-plants/ready-mix-rm-1050-electric-2.jpg",
    },
    {
      title: "25 HP Electric Drive",
      desc: "Efficient and quiet operation suitable for urban, semi-urban, or power-accessible sites.",
      image: "/images/concrete-plants/ready-mix-rm-1050-electric-3.jpg",
    },
    {
      title: "Precision Weighing System",
      desc: "Electronic load cells for aggregates and water tanks ensure accurate batching (±1–2% tolerance).",
      image: "/images/concrete-plants/ready-mix-rm-1050-electric-1.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Compact, Towable Structure",
      desc: "Single-frame design allows transport by pickup or tractor and quick setup on compacted ground.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Enhanced Batching Accuracy",
      desc: "Load-cell-based weighing ensures repeatable concrete quality for every batch.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance Operation",
      desc: "V-belt-driven mixer eliminates gearbox issues; grease points simplify regular upkeep.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Quick Setup Anywhere",
      desc: "Requires no concrete foundation; simply place, connect, and start batching.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Durable Construction",
      desc: "Fabricated steel frame with powder-coated finish ensures corrosion resistance and long service life.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Reversible Drum Mixer",
      desc: (
        <ul>
          <li>
            • 800 L drum capacity with mixing and discharge through opposite
            drum rotation.
          </li>
          <li>
            • Replaceable mixing blades for easy maintenance and uniform
            blending.
          </li>
        </ul>
      ),
    },
    {
      title: "Aggregate Bins",
      desc: (
        <ul>
          <li>• Dual-bin system with load cells for each bin.</li>
          <li>• Ensures precise material proportioning and fast discharge.</li>
        </ul>
      ),
    },
    {
      title: "Weighing System",
      desc: (
        <ul>
          <li>
            • Load-cell-mounted water tank and aggregate bins for ±1–2%
            accuracy.
          </li>
          <li>• Digital display for live batching data.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>• Digital batching panel with intuitive controls.</li>
          <li>
            • Optional microprocessor upgrade for recipe memory and mix data
            storage.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Compact, skid-mounted frame for easy towing and transport.</li>
          <li>• Requires only level ground; no civil work required.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What is the output capacity of READY MIX-RM-1050?",
      content: (
        <p>
          Produces 12–13 m³ of concrete per hour, depending on mix design and
          batching cycle time.
        </p>
      ),
    },
    {
      title: "2. What type of mixer is used?",
      content: (
        <p>
          A reversible drum mixer that mixes in one direction and discharges in
          reverse, ensuring consistent concrete quality.
        </p>
      ),
    },
    {
      title: "3. How accurate is batching with READY MIX-RM-1050?",
      content: (
        <p>
          Electronic weighing via individual load cells ensures ±1–2% precision
          for each batch.
        </p>
      ),
    },
    {
      title: "4. Can the READY MIX-RM-1050 be relocated easily?",
      content: (
        <p>
          Yes. Its single-frame mobile design allows transport by tractor or
          pickup for rapid relocation.
        </p>
      ),
    },
    {
      title: "5. What are its maintenance requirements?",
      content: (
        <p>
          Routine greasing, belt inspection, and cleaning after each shift
          ensure smooth, long-term operation.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>RM-1050 Electric | 13 m³/hr Mini Batching Plant | Atlas India</title>
        <meta name="description" content="RM-1050 Electric — 13 m³/hr mini concrete batching plant, electric drive, reversible drum, towable by pickup. For remote and rural projects. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/ready-mix-rm-1050-electric-1.jpg"
        pageUrl="/concrete-plants/mini-concrete-batching-plant/rm-1050-electric"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/newpageeight.webp"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "READY MIX-RM-1050 (Electric): Reliable, High-Capacity Batching for Remote Sites"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Productivity, Mobility, and Mix Consistency"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose READY MIX-RM-1050 (Electric)"
        subtitle="Reliable, high-output mini batching with precise load-cell weighing and compact mobility."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Every element of the READY MIX-RM-1050 (Electric) is designed for durability, smooth operation, and consistent concrete output."
        components={components} 
        img = "/images/concrete-plants/newpagesix.webp"
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
