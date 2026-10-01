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
    "without-hopper-diesel",
  );

  const product = {
    title: "10/7 Concrete Mixer Without Hopper (Diesel)",
    subtitle:
      "Capacity: 10/7 Cubic Feet (~0.2 m³) | Best for: Remote Sites & Rural Construction Projects",
    description: [
      "The Atlas 10/7 Concrete Mixer – Without Hopper (Diesel) is a compact, field-proven solution for small-scale construction and roadwork projects in off-grid areas. Driven by a reliable diesel engine, it delivers consistent mixing performance for concrete, mortar, and patch materials without relying on electric power.",
      "Built for simplicity and mobility, this manual-feed model features a heavy-duty drum with replaceable blades and a hand-tilt discharge mechanism for precise pouring. It’s ideal for contractors and crews seeking dependable mixing in rural locations with limited infrastructure.",
    ],
    features: ["Compact Design", "Remote Reliability", "Easy Operation"],
    images: [
      "/images/machine/mixer/concrete-mixer-08.png",
      "/images/machine/mixer/concrete-mixer-09.png",
      "/images/machine/mixer/concrete-mixer-07.png",
      "/images/machine/mixer/concrete-mixer-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. What is the mixing capacity of this model?",
      content: (
        <>
          <p>
            The mixer handles approximately 0.2 m³ (7 cft) of usable concrete
            per batch.
          </p>
        </>
      ),
    },
    {
      title: "2. Is the mixer suitable for areas without electricity?",
      content: (
        <>
          <p>
            Yes. The diesel engine allows fully independent operation in
            off-grid locations.
          </p>
        </>
      ),
    },
    {
      title: "3. How is the drum discharged?",
      content: (
        <>
          <p>
            A manual tilt mechanism enables controlled pouring and full
            discharge without spillage.
          </p>
        </>
      ),
    },
    {
      title: "4. How often does the mixer require maintenance?",
      content: (
        <>
          <p>
            Perform routine greasing and engine checks every 50 hours; replace
            worn fins as needed.
          </p>
        </>
      ),
    },
    {
      title: "5. What materials can it mix?",
      content: (
        <>
          <p>
            Suitable for cement, concrete, mortar, and aggregate mixes up to 40
            mm in size.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Diesel Engine Drive (6 HP)",
      desc: (
        <span>
          Ensures independent operation in off-grid sites, providing steady
          mixing power for a continuous work cycle.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-diesel-1.jpeg",
    },
    {
      title: "10/7 Cubic Feet Capacity",
      desc: (
        <span>
          Handles ~0.2 m³ per batch—perfect for small foundations, pavements,
          and rural road repairs.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-diesel-2.jpeg",
    },
    {
      title: "Manual Loading & Tilting Mechanism",
      desc: (
        <span>
          Simple hand-wheel tilt and manual loading setup enable precise
          discharge control with low maintenance.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-diesel-3.jpeg",
    },
    {
      title: "Durable Mixing Drum",
      desc: (
        <span>
          Cast steel or fabricated drum with replaceable wear fins for uniform
          mixing and long service life.
        </span>
      ),
      image: "/images/concrete-mixer/cm-wh-diesel-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "Perfect for Rural and Off-Grid Sites",
      desc: (
        <span>
          Runs on diesel power for uninterrupted mixing where electricity is
          unavailable.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Compact and Portable",
      desc: (
        <span>
          Lightweight design mounted on durable wheels for easy movement across
          site locations.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Fuel Consumption",
      desc: (
        <span>
          Efficient engine design keeps running costs low while ensuring steady
          mixing speed.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Simple to Operate and Maintain",
      desc: (
        <span>
          Few moving parts and accessible grease points make daily maintenance
          easy.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Consistent Mix Quality",
      desc: (
        <span>
          Optimized drum geometry and blade design produce a homogeneous mix in
          every batch.
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
          <li>
            • Diesel engine (6 HP) delivering steady torque and fuel-efficient
            performance.
          </li>
          <li>• Independent of grid supply for rural operation.</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum Assembly",
      desc: (
        <ul>
          <li>• 10 cft gross / 7 cft net volume with replaceable fins.</li>
          <li>• Cast iron drum resists abrasion and ensures uniform mixing.</li>
        </ul>
      ),
    },
    {
      title: "Tilting Mechanism",
      desc: (
        <ul>
          <li>• Manual hand-wheel or lever system for controlled discharge.</li>
          <li>
            • Locking arrangement to prevent accidental rotation while loading.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>• Heavy-gauge steel frame mounted on wheel for portability.</li>
          <li>• Stable base reduces vibration during mixing.</li>
        </ul>
      ),
    },
    {
      title: "Operator Controls",
      desc: (
        <ul>
          <li>• Simple clutch and tilt control layout for ease of use.</li>
          <li>• Accessible lubrication points for quick maintenance.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>10/7 Concrete Mixer Without Hopper | 6 HP Diesel | Atlas Technologies</title>
        <meta
          name="description"
          content="Atlas 10/7 diesel concrete mixer, no hopper — 0.2 m³ per batch, 6 HP engine, manual tilt discharge. For off-grid rural sites and remote road projects. Get price."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/machine/mixer/concrete-mixer-01.png"
        pageUrl="/concrete-mixer/without-hopper-diesel"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/machine/mixer/concrete-mixer-01.png"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "10/7 Concrete Mixer (Diesel – Without Hopper): Rugged Mixing for Rural Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Simplicity, Durability, and Consistent Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Diesel Model Without a Hopper"
        subtitle="The diesel variant offers mobility, independence, and robust construction, making it the go-to mixer for remote and rural applications."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The 10/7 Diesel Mixer (Without Hopper) is engineered for reliability and long operating life under tough conditions."
        }
        components={components}
        img="/images/machine/mixer/concrete-mixer-08.png"
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
