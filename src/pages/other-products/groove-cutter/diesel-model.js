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

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "other-product",
    "kerb-cutting-models",
    "diesel-model"
  );

  const product = {
    title: "Groove Cutting Machine (Diesel Model)",
    subtitle:
      "Air-Cooled Diesel Engine | Best for: Remote Sites and Off-Grid Projects",
    description: [
      "The Atlas Groove Cutting Machine (Diesel Model) is a powerful, mobile concrete and asphalt cutter designed for dependable operation in remote or power-limited worksites. Equipped with an air-cooled diesel engine, it delivers strong torque, long runtime, and rugged reliability, making it ideal for road repairs, expansion joints, and runway maintenance.",
      "Built for durability and independence, the Diesel Groove Cutter combines robust construction with stable performance under demanding field conditions. Its heavy-duty frame, accurate depth control, and vibration-balanced design ensure smooth, straight cuts every time.",
    ],
    features: ["High Power", "Rugged Mobility", "Independent Operations"],
    images: [
      "/images/plants/groove-cutter/groove-diesel-1.webp",
      "/images/plants/groove-cutter/groove-diesel-2.webp",
      "/images/plants/groove-cutter/groove-diesel-3.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What is the maximum cutting depth of the Diesel Model?",
      content: (
        <>
          <p>
            Standard cutting depth is up to 100 mm with optional blades
            available for deeper grooves up to 200 mm.
          </p>
        </>
      ),
    },
    {
      title: "2. Can the Diesel Model cut both asphalt and concrete?",
      content: (
        <>
          <p>
            Yes. It is compatible with diamond-tipped blades suitable for both
            materials. Always confirm blade specifications before use.
          </p>
        </>
      ),
    },
    {
      title: "3. Is it suitable for curved grooves?",
      content: (
        <>
          <p>
            Yes. The Diesel Model can cut mild curved grooves with a minimum
            radius of about 1.5 meters, depending on site setup and blade type.
          </p>
        </>
      ),
    },
    {
      title: "4. What makes it ideal for remote projects?",
      content: (
        <>
          <p>
            The independent diesel engine provides fuel-based power with no need
            for external electricity, ensuring uninterrupted operation in
            off-grid locations.
          </p>
        </>
      ),
    },
    {
      title: "5. What maintenance does the Diesel Model require?",
      content: (
        <>
          <p>
            Regular servicing of the engine, belt drive, and blade assembly
            every 50 operating hours is recommended. Follow Atlas’s service
            guidelines for long-term reliability.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Air-Cooled Diesel Engine",
      desc: (
        <span>
          The durable diesel power unit provides consistent torque and longer
          runtime, making it ideal for sites without reliable electricity
          access.
        </span>
      ),
      image: "/images/groove-cutting/groove-diesel-1.jpeg",
    },
    {
      title: "Up to 100 mm Cutting Depth",
      desc: (
        <span>
          Delivers clean, straight cuts up to 100 mm deep; optional blade
          upgrades are available for extended cutting capacity when required.
        </span>
      ),
      image: "/images/groove-cutting/groove-diesel-2.jpeg",
    },
    {
      title: "Accurate Depth Adjustment",
      desc: (
        <span>
          Precision-controlled lever enables smooth and uniform depth control
          throughout each cutting pass.
        </span>
      ),
      image: "/images/groove-cutting/groove-diesel-3.jpeg",
    },
    {
      title: "Heavy-Duty Steel Frame",
      desc: (
        <span>
          Engineered to resist vibration and deformation during prolonged use on
          rough or uneven surfaces.
        </span>
      ),
      image: "/images/groove-cutting/groove-diesel-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Off-Grid and Highway Projects",
      desc: (
        <span>
          A diesel engine eliminates dependence on external power, ensuring
          uninterrupted work even in isolated locations.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Built for Tough Conditions",
      desc: (
        <span>
          Air-cooled system and rugged frame deliver stable performance under
          heat, dust, and variable terrain.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Easy to Operate and Maintain",
      desc: (
        <span>
          Simplified mechanical design and clear operator controls reduce
          downtime and servicing complexity.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Consistent, Accurate Cutting",
      desc: (
        <span>
          Straight-line guide and stable frame geometry maintain uniform cutting
          lines across long distances.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Supports Multiple Blade Options",
      desc: (
        <span>
          Compatible with standard and high-depth diamond blades for both
          asphalt and concrete applications.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Diesel Engine Unit",
      desc: (
        <ul>
          <li>
            • Air-cooled diesel engine delivers strong torque and fuel
            efficiency.
          </li>
          <li>
            • Protective housing shields the engine from dust and debris during
            cutting.
          </li>
        </ul>
      ),
    },
    {
      title: "Depth Adjustment System",
      desc: (
        <ul>
          <li>
            • Smooth-operating control lever allows precise groove depth
            setting.
          </li>
          <li>• Locking mechanism prevents movement during operation.</li>
        </ul>
      ),
    },
    {
      title: "Cutting Blade Assembly",
      desc: (
        <ul>
          <li>• Heavy-duty blade guard for operator protection.</li>
          <li>• Quick-release system for fast blade replacement on site.</li>
        </ul>
      ),
    },
    {
      title: "Rigid Frame & Handle Assembly",
      desc: (
        <ul>
          <li>
            • Welded steel chassis provides balance and cutting stability.
          </li>
          <li>
            • Ergonomic handles enhance control and comfort during operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Mobility System",
      desc: (
        <ul>
          <li>• Durable wheels allow easy relocation between cutting zones.</li>
          <li>
            • Balanced center of gravity ensures steady operation and transport.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Diesel Groove Cutter | 100mm Depth | Off-Grid | Atlas Technologies</title>
        <meta name="description" content="Air-cooled diesel engine, 100mm cutting depth, heavy-duty steel frame — Atlas diesel groove cutter for road repairs and expansion joints on remote and off-grid sites. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
      videoThumbnail="/images/plants/groove-cutter/groove-diesel-2.webp"
        pageUrl="/other-products/groove-cutter/diesel-model"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/groove-cutter/groove-diesel-2.webp"
        videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
        title={"Atlas Diesel Groove Cutter: Reliable Performance, Anywhere"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Strength, Endurance, and On-Site Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Diesel Model"
        subtitle="Designed for contractors who need high mobility, durability, and independent power for continuous cutting in remote environments."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Diesel Groove Cutter is engineered for power, mobility, and dependable field performance in all construction conditions."
        }
        components={components}
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
