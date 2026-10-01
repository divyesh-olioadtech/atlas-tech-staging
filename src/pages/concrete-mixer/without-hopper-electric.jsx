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
    "other-product",
    "concrete-mixer",
    "without-hopper-electric",
  );

  const product = {
    title: "10/7 Concrete Mixer Without Hopper (Electric)",
    subtitle:
      "Capacity: 10/7 Cubic Feet (~0.2 m³) | Best for: Urban Sites & Indoor Construction Projects",
    description: [
      "The Atlas 10/7 Concrete Mixer – Without Hopper (Electric) is a compact and efficient concrete mixing solution built for small construction sites, repair works, and indoor or urban environments. Powered by a 3-phase electric motor, it delivers clean, low-noise operation while maintaining consistent mix quality for concrete, mortar, and plaster.",
      "Engineered for precision and simplicity, this manual-feed model features a durable mixing drum, hand-tilt discharge system, and sturdy wheel-mounted frame for easy mobility. It’s ideal for projects requiring quiet, emission-free mixing performance with dependable results.",
    ],
    features: ["Low Noise", "Consistent Output", "Compact Design"],
    images: [
      "/images/machine/mixer/concrete-mixer-08.png",
      "/images/machine/mixer/concrete-mixer-09.png",
      "/images/machine/mixer/concrete-mixer-07.png",
      "/images/machine/mixer/concrete-mixer-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. What is the effective capacity of the Electric 10/7 Mixer?",
      content: (
        <>
          <p>
            The mixer produces approximately 0.2 m³ (7 cft) of usable concrete
            per batch.
          </p>
        </>
      ),
    },
    {
      title: "2. Can this model operate indoors?",
      content: (
        <>
          <p>
            Yes. Its electric drive produces no exhaust fumes, making it
            suitable for indoor or urban projects.
          </p>
        </>
      ),
    },
    {
      title: "3. What are the power requirements?",
      content: (
        <>
          <p>
            Operates on a 3-phase, 5 kW supply—compatible with standard
            industrial connections.
          </p>
        </>
      ),
    },
    {
      title: "4. How is the drum emptied?",
      content: (
        <>
          <p>
            A manual tilting system provides controlled discharge and complete
            material release.
          </p>
        </>
      ),
    },
    {
      title: "5. What maintenance does it require?",
      content: (
        <>
          <p>
            Only periodic greasing and motor inspection are needed—no engine oil
            or fuel maintenance required.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Electric Motor Drive (3-Phase, 5 kW)",
      desc: (
        <span>
          Provides steady torque and smooth rotation for uniform mixing, ideal
          for noise-sensitive or indoor sites.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-electric-1.jpeg",
    },
    {
      title: "10/7 Cubic Feet Capacity",
      desc: (
        <span>
          Delivers ~0.2 m³ of concrete per batch, suitable for residential
          slabs, foundations, and small civil works.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-electric-2.jpeg",
    },
    {
      title: "Manual Loading and Tilting",
      desc: (
        <span>
          Hand-wheel tilt discharge allows precise pouring control with minimal
          operator effort.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-electric-3.jpeg",
    },
    {
      title: "Durable Drum Construction",
      desc: (
        <span>
          Heavy-duty drum with replaceable wear fins ensures longevity and
          consistent performance.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-electric-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Ideal for Urban and Indoor Applications",
      desc: (
        <span>
          No exhaust emissions and low operating noise make it suitable for
          basements, urban housing, or factories.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Energy-Efficient Performance",
      desc: (
        <span>
          Electric drive minimizes energy waste and reduces overall operating
          cost per batch.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Ease of Maintenance",
      desc: (
        <span>
          No fuel or oil system. It requires only routine greasing and
          occasional motor checks.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Portable & Compact",
      desc: (
        <span>
          Mounted on wheels for smooth movement within confined or finished
          project areas.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Reliable Mix Consistency",
      desc: (
        <span>
          Optimized drum design and rotational speed ensure a homogeneous,
          repeatable mix.
        </span>
      ),
      icon: "/images/comman/logo/recycle.png",
    },
  ];

  const components = [
    {
      title: "Power Unit",
      desc: (
        <ul>
          <li>• 3-phase 5 kW electric motor with overload protection.</li>
          <li>• Belt-driven system for smooth power transmission.</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum Assembly",
      desc: (
        <ul>
          <li>
            • 10 cft total / 7 cft usable capacity with wear-resistant blades.
          </li>
          <li>• Drum geometry designed for fast and uniform mixing.</li>
        </ul>
      ),
    },
    {
      title: "Tilting Mechanism",
      desc: (
        <ul>
          <li>• Manual hand-wheel for controlled discharge.</li>
          <li>• Locking lever prevents drum movement during loading.</li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>
            • Sturdy welded frame with cast-iron wheels for easy relocation.
          </li>
          <li>• Compact dimensions ideal for tight workspaces.</li>
        </ul>
      ),
    },
    {
      title: "Operator Controls",
      desc: (
        <ul>
          <li>
            • Simple start/stop switch and tilt handle for efficient control.
          </li>
          <li>• Grease points positioned for quick daily maintenance.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>10/7 Concrete Mixer Without Hopper | 5 kW Electric | Atlas Technologies</title>
        <meta
          name="description"
          content="Atlas 10/7 electric concrete mixer, no hopper — 0.2 m³ per batch, 5 kW motor, low noise, no emissions. For urban and indoor construction. Get price from Atlas."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/machine/mixer/concrete-mixer-09.png"
        pageUrl="/concrete-mixer/without-hopper-electric"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/machine/mixer/concrete-mixer-09.png"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "10/7 Concrete Mixer (Electric – Without Hopper): Compact, Clean & Efficient"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Urban Use, Low Emission, and Reliable Mixing"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Diesel Model Without a Hopper"
        subtitle="The Electric 10/7 Mixer is perfect for contractors looking for quiet, emission-free operation and reliable performance on smaller jobs."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The 10/7 Electric Mixer (Without Hopper) combines simple operation with durable components for consistent performance."
        }
        components={components}
        img="/images/machine/mixer/concrete-mixer-09.png"
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
