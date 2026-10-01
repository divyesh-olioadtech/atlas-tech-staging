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
    "mechanical-hopper",
  );

  const product = {
    title: "10/7 Concrete Mixer With Mechanical Hopper (Diesel / Electric)",
    subtitle:
      "Capacity: 10/7 Cubic Feet (~0.2 m³) | Best for: Projects Requiring Reduced Manual Handling",
    description: [
      "The Atlas 10/7 Concrete Mixer – With Mechanical Hopper is a durable, semi-automatic mixer designed to reduce manual labour during concrete feeding. Available in both diesel and electric variants, it combines dependable mixing with mechanical lifting, ensuring smooth, efficient batch loading for consistent output on mid-scale construction sites.",
      "This model simplifies operations through a mechanical hopper system that lifts and loads material directly into the mixing drum. With its robust chassis, wear-resistant drum, and dual power options, it is ideal for contractors who need reliable concrete batching without full hydraulic automation.",
    ],
    features: [
      "Reduced Manual Handling",
      "Dual Power Options",
      "Reliable Performance",
    ],
    images: [
      "/images/machine/mixer/concrete-mixer-01.png",
      "/images/machine/mixer/concrete-mixer-02.png",
      "/images/machine/mixer/concrete-mixer-04.png",
      "/images/machine/mixer/concrete-mixer-05.png",
    ],
  };

  const faqData = [
    {
      title: "1. How does the mechanical hopper work?",
      content: (
        <>
          <p>
            The hopper uses a chain or gear-driven lifting mechanism to load
            aggregates and cement into the drum automatically.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the batch capacity?",
      content: (
        <>
          <p>
            Produces about 0.2 m³ (~7 cft usable volume) of concrete per cycle.
          </p>
        </>
      ),
    },
    {
      title: "3. Are both diesel and electric options available?",
      content: (
        <>
          <p>
            Yes. It can be configured with either a diesel engine or an electric
            motor, depending on site power availability.
          </p>
        </>
      ),
    },
    {
      title:
        "4. What is the main advantage of a mechanical hopper over manual mixers?",
      content: (
        <>
          <p>
            It significantly reduces manual labour and improves batch cycle time
            for higher daily output.
          </p>
        </>
      ),
    },
    {
      title: "5. How often should it be serviced?",
      content: (
        <>
          <p>
            Routine greasing every 50 hours of operation is recommended, along
            with periodic drum and chain inspection.
          </p>
        </>
      ),
    },
  ];
  const featureData = [
    {
      title: "Mechanical Hopper Lift System",
      desc: (
        <span>
          Reduces manual labour by lifting and feeding aggregates directly into
          the drum, improving batching efficiency.
        </span>
      ),
      image: "/images/concrete-mixer/cm-mh-1.jpeg",
    },
    {
      title: "Dual Power Options (Diesel / Electric)",
      desc: (
        <span>
          Offers flexibility for both on-grid and remote sites, ensuring
          uninterrupted operation under all conditions.
        </span>
      ),
      image: "/images/concrete-mixer/cm-mh-2.jpeg",
    },
    {
      title: "10/7 Cubic Feet Mixing Capacity",
      desc: (
        <span>
          Produces approximately 0.2 m³ per batch, ideal for building
          foundations, pavements, and site concreting.
        </span>
      ),
      image: "/images/concrete-mixer/cm-mh-3.jpeg",
    },
    {
      title: "Heavy-Duty Mixing Drum",
      desc: (
        <span>
          Cast iron drum with replaceable fins ensures long life and uniform
          concrete consistency.
        </span>
      ),
      image: "/images/concrete-mixer/cm-mh-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "Perfect for Medium-Sized Construction",
      desc: (
        <span>
          Efficiently handles multiple daily batches with quick load cycles and
          minimal operator fatigue.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Labour-Saving Design",
      desc: (
        <span>
          Mechanical loading significantly reduces manual shovelling, increasing
          productivity on site.
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
      title: "Built for Long-Term Use",
      desc: (
        <span>
          Strong steel chassis and drum ensure reliable operation in a rugged
          site environment.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Low Maintenance System",
      desc: (
        <span>
          Simple mechanical linkage with easy lubrication and quick part
          replacement.
        </span>
      ),
      icon: "/images/comman/logo/money.png",
    },
  ];

  const components = [
    {
      title: "Power Unit",
      desc: (
        <ul>
          <li>
            • Diesel engine (6 HP) or electric motor (7.5 hp) with belt-driven
            transmission.
          </li>
          <li>• Energy-efficient system with accessible maintenance points.</li>
        </ul>
      ),
    },
    {
      title: "Mechanical Hopper Assembly",
      desc: (
        <ul>
          <li>
            • Chain-driven lifting mechanism powered by the drum rotation.
          </li>
          <li>• Reduces manual effort and speeds up batch preparation.</li>
        </ul>
      ),
    },
    {
      title: "Mixing Drum",
      desc: (
        <ul>
          <li>• 10 cft gross / 7 cft net volume with wear-resistant blades.</li>
          <li>
            • Smooth internal finish ensures even mixing and easy discharge.
          </li>
        </ul>
      ),
    },
    {
      title: "Tilting & Discharge System",
      desc: (
        <ul>
          <li>• Manual tilt with locking handle for controlled pouring.</li>
          <li>• Anti-slip handle provides precise discharge control.</li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility",
      desc: (
        <ul>
          <li>
            • Reinforced steel frame with heavy-duty wheels for
            transportability.
          </li>
          <li>
            • Balanced weight distribution ensures stability during operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>10/7 Concrete Mixer Mechanical Hopper | Diesel/Electric | Atlas Technologies</title>
        <meta
          name="description"
          content="Atlas 10/7 mixer with mechanical hopper — chain-driven loading, 0.2 m³ per batch, diesel 6 HP or electric 7.5 HP. Reduces manual shovelling on site. Get price."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/concrete-mixer/mechanical-hopper"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail= "/images/machine/mixer/concrete-mixer-01.png"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "10/7 Concrete Mixer (Mechanical Hopper): Simplified Loading, Consistent Mixing"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Built for Productivity, Ease of Use, and Site Flexibility"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Diesel Model Without a Hopper"
        subtitle="This model is the ideal choice for contractors seeking faster batching without the complexity of hydraulic systems."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The 10/7 Mechanical Hopper Mixer is engineered for efficient feeding, durable operation, and easy upkeep."
        }
        components={components}
        img="/images/machine/mixer/concrete-mixer-04.png"
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
