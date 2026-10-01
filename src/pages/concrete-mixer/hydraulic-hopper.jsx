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
    "hydraulic-hopper",
  );

  const product = {
    title: "10/7 Concrete Mixer With Hydraulic Hopper (Diesel / Electric)",
    subtitle:
      "Capacity: 10/7 Cubic Feet (~0.2 m³) | Best for: Large or Labour-Intensive Construction Sites",
    description: [
      "The Atlas 10/7 Concrete Mixer – With Hydraulic Hopper is a high-efficiency concrete mixer designed to streamline loading, mixing, and discharge operations for medium to large construction projects. Available in diesel and electric variants, it integrates a hydraulic hopper system that automates batch feeding and reduces manual labour while ensuring consistent, high-quality concrete output.",
      "Engineered for durability and operator convenience, this mixer delivers dependable performance for contractors working on housing projects, pavements, foundations, and rural infrastructure. Its robust frame, efficient power system, and hydraulic feed make it one of the most productive machines in the 10/7 series.",
    ],
    features: [
      "Automated Feeding",
      "Dual Power Options",
      "Productive & Reliable",
    ],
    images: [
      "/images/machine/mixer/concrete-mixer-04.png",
      "/images/machine/mixer/concrete-mixer-05.png",
      "/images/machine/mixer/concrete-mixer-01.png",
      "/images/machine/mixer/concrete-mixer-02.png",
    ],
  };

  const faqData = [
    {
      title: "1. How does the hydraulic hopper improve productivity?",
      content: (
        <>
          <p>
            It automatically lifts and feeds materials into the drum, reducing
            manual effort and increasing batch turnover.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the concrete output per batch?",
      content: (
        <>
          <p>Each batch yields about 0.2 m³ (7 cft) of usable concrete.</p>
        </>
      ),
    },
    {
      title: "3. Can I choose between diesel and electric versions?",
      content: (
        <>
          <p>
            Yes. Both diesel and electric models are available, depending on
            site power availability and emission requirements.
          </p>
        </>
      ),
    },
    {
      title: "4. What safety features are included?",
      content: (
        <>
          <p>
            The model includes mechanical and hydraulic interlocks that prevent
            drum rotation while the hopper is raised.
          </p>
        </>
      ),
    },
    {
      title: "5. What’s the maintenance requirement?",
      content: (
        <>
          <p>
            Regular hydraulic oil checks, greasing, and inspection every 50
            operating hours are recommended for smooth performance.
          </p>
        </>
      ),
    },
  ];
  const featureData = [
    {
      title: "Hydraulic Hopper Lift System",
      desc: (
        <span>
          Fully hydraulic operation automates loading of aggregates, cement, and
          sand, reducing manual work and saving time.
        </span>
      ),
      image: "/images/concrete-mixer/cm-hh-1.jpeg",
    },
    {
      title: "Dual Power Configuration",
      desc: (
        <span>
          Available with either a diesel engine for remote sites or an electric
          motor for urban, low-emission operation.
        </span>
      ),
      image: "/images/concrete-mixer/cm-hh-2.jpeg",
    },
    {
      title: "10/7 Cubic Feet Mixing Capacity",
      desc: (
        <span>
          Delivers ~0.2 m³ of concrete per batch, ideal for continuous
          medium-scale construction applications
        </span>
      ),
      image: "/images/concrete-mixer/cm-hh-3.jpeg",
    },
    {
      title: "Heavy-Duty Drum and Frame",
      desc: (
        <span>
          Robust cast iron drum with replaceable mixing blades and a reinforced
          chassis for stability and long service life.
        </span>
      ),
      image: "/images/concrete-mixer/cm-hh-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "Perfect for High-Volume Projects",
      desc: (
        <span>
          Designed to handle repetitive batch cycles efficiently, reducing
          downtime between loads.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Reduces Manual Handling",
      desc: (
        <span>
          The hydraulic system automates feeding, lowering operator fatigue and
          improving site productivity.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Flexible Power Configuration",
      desc: (
        <span>
          Choose between diesel (mobility and independence) or electric
          (low-noise, low-emission) power.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Safe and Easy Operation",
      desc: (
        <span>
          Equipped with mechanical and hydraulic interlocks that prevent drum
          rotation during hopper lift for enhanced safety.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Low Maintenance and Long Life",
      desc: (
        <span>
          Simplified hydraulic layout with easily accessible service points
          ensures reduced maintenance effort.
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
            • Diesel engine (6 HP) or electric motor (7.5 HP) matched to drum
            capacity.
          </li>
          <li>• Delivers efficient torque and continuous-duty performance.</li>
        </ul>
      ),
    },
    {
      title: "Hydraulic Hopper Assembly",
      desc: (
        <ul>
          <li>• Self-lifting hopper with Single-acting hydraulic cylinder.</li>
          <li>
            • Ensures fast, reliable feeding and controlled material flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul>
          <li>
            • 10 cft total / 7 cft usable volume with internal mixing blades.
          </li>
          <li>• Smooth finish for thorough, uniform mixing.</li>
        </ul>
      ),
    },
    {
      title: "Discharge & Tilting System",
      desc: (
        <ul>
          <li>
            • Manual tilt with hand-wheel control for safe, precise discharge.
          </li>
          <li>• Drum interlock prevents accidental rotation during loading.</li>
        </ul>
      ),
    },
    {
      title: "Chassis & Frame",
      desc: (
        <ul>
          <li>• Welded heavy-duty steel frame mounted on pneumatic wheels.</li>
          <li>• Designed for stability and transport convenience.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>10/7 Concrete Mixer Hydraulic Hopper | Diesel/Electric | Atlas Technologies</title>
        <meta
          name="description"
          content="Atlas 10/7 mixer with hydraulic hopper — automated loading, 0.2 m³ per batch, diesel 6 HP or electric 7.5 HP, hydraulic interlocks. Get price from Atlas."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/machine/mixer/concrete-mixer-04.png"
        pageUrl="/concrete-mixer/hydraulic-hopper"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/machine/mixer/concrete-mixer-04.png"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "10/7 Concrete Mixer (Hydraulic Hopper): Maximum Output with Minimal Effort"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Productivity, Safety, and Operator Efficiency"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Diesel Model Without a Hopper"
        subtitle="The Hydraulic Hopper Mixer is the top-performing variant in the 10/7 series, built for speed, safety, and labour efficiency on larger job sites."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The 10/7 Hydraulic Hopper Mixer is precision-engineered for smooth operation and long-term dependability."
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
