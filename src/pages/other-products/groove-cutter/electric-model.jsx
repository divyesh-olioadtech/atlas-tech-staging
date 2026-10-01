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
    "electric-model"
  );

  const product = {
    title: "Groove Cutting Machine (Electric Model)",
    subtitle:
      "Electric Motor | Best for: Urban Projects and Power-Supplied Sites",
    description: [
      "The Atlas Groove Cutting Machine (Electric Model) is a compact, high-precision cutter built for straight, controlled grooves in concrete and asphalt surfaces. Powered by an efficient electric motor, it delivers low-noise operation, zero emissions, and precise depth control, ideal for urban projects, road maintenance, and industrial floor finishing.",
      "Engineered for accuracy and operator safety, the Electric Groove Cutter is perfect for expansion joints, pavement restoration, and airport runway work. With its sturdy frame, easy mobility, and fine depth adjustment system, it ensures smooth, accurate cuts with minimal maintenance.",
    ],
    features: ["Low Noise", "Precision Cutting", "Eco-Friendly Operations"],
    images: [
      "/images/groove-cutting/groove-electric-1.jpg",
      "/images/groove-cutting/groove-electric-2.jpg",
      "/images/groove-cutting/groove-electric-3.jpg",
      "/images/groove-cutting/groove-electric-4.jpg",
      "/images/groove-cutting/groove-electric-5.jpg",
      "/images/groove-cutting/groove-electric-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the maximum cutting depth of the Electric Model?",
      content: (
        <>
          <p>
            Standard configuration allows cuts up to 100 mm. Optional deeper
            blades (up to 200 mm) are available on request.
          </p>
        </>
      ),
    },
    {
      title: "2. Can this model cut both asphalt and concrete?",
      content: (
        <>
          <p>
            Yes. The Electric Groove Cutter can use universal diamond blades
            suitable for both materials. It’s recommended to confirm blade
            specifications before purchase.
          </p>
        </>
      ),
    },
    {
      title: "3. Is the Electric Model suitable for curved grooves?",
      content: (
        <>
          <p>
            Yes. It can cut mild curved grooves with a minimum radius of
            approximately 1.5 meters, depending on site conditions and blade
            configuration.
          </p>
        </>
      ),
    },
    {
      title: "4. What maintenance does the Electric Model require?",
      content: (
        <>
          <p>
            Routine checks on blade wear, wheel alignment, and electrical
            connections are recommended every 50 operating hours. Regular
            cleaning after each use ensures longer component life.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Electric Motor Drive",
      desc: (
        <span>
          Powered by a reliable electric motor that provides consistent torque
          for smooth, uninterrupted cutting performance.
        </span>
      ),
      image: "/images/groove-cutting/groove-electric-1.jpeg",
    },
    {
      title: "Up to 100 mm Cutting Depth",
      desc: (
        <span>
          Standard blades deliver precise cuts up to 100 mm; optional deeper
          blades can be fitted for extended cutting depth as per project
          requirements.
        </span>
      ),
      image: "/images/groove-cutting/groove-electric-2.jpeg",
    },
    {
      title: "Accurate Depth Adjustment",
      desc: (
        <span>
          The manual depth control lever enables fine adjustment, ensuring
          accurate and uniform groove depth throughout the operation.
        </span>
      ),
      image: "/images/groove-cutting/groove-electric-3.jpeg",
    },
    {
      title: "Durable and Stable Construction",
      desc: (
        <span>
          Rugged steel chassis and balanced design minimize vibration, ensuring
          operator stability and extended machine life.
        </span>
      ),
      image: "/images/groove-cutting/groove-electric-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Low-Noise, Zero-Emission",
      desc: (
        <span>
          Ideal for indoor or urban worksites—quiet, clean, and compliant with
          environmental safety norms.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Operator-Friendly Handling",
      desc: (
        <span>
          Compact frame and easy-grip handles ensure smooth movement and control
          during prolonged operations.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Smooth and Accurate Groove Formation",
      desc: (
        <span>
          Straight-line indicator and stable frame structure maintain accuracy
          in every pass.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance, High Reliability",
      desc: (
        <span>
          No fuel systems or exhaust components to maintain, resulting in lower
          operational costs and longer uptime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Supports Custom Blade Configurations",
      desc: (
        <span>
          Supports diamond-tipped blades for both asphalt and concrete, with
          easy blade changeover through the protective guard assembly.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Electric Motor Unit",
      desc: (
        <ul>
          <li>
            • The high-efficiency motor ensures consistent torque and quiet
            operation.
          </li>
          <li>
            • Compatible with standard and high-depth diamond cutting blades.
          </li>
        </ul>
      ),
    },
    {
      title: "Depth Adjustment System",
      desc: (
        <ul>
          <li>• Ergonomic depth lever for precise cutting control.</li>
          <li>
            • The locking mechanism prevents accidental adjustment during
            operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Cutting Blade Assembly",
      desc: (
        <ul>
          <li>• Blade guard enclosure ensures operator safety.</li>
          <li>• Quick-release system enables fast blade changes on-site.</li>
        </ul>
      ),
    },
    {
      title: "Rigid Frame & Handle Assembly",
      desc: (
        <ul>
          <li>
            • Heavy-duty frame maintains cutting stability and vibration
            control.
          </li>
          <li>
            • Adjustable handles allow comfortable operation and maneuvering.
          </li>
        </ul>
      ),
    },
    {
      title: "Mobility System",
      desc: (
        <ul>
          <li>
            • Fitted with durable wheels for easy transport across site
            surfaces.
          </li>
          <li>
            • Balanced design ensures stability during cutting and
            repositioning.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Electric Groove Cutter | Urban Road Grooving | Atlas India</title>
        <meta name="description" content="Atlas electric groove cutter — quieter than diesel, 100mm cutting depth, straight line indicator. For urban road grooving and expansion joints. Get price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/other-products/groove-cutter/electric-model"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/mdm-35-1.jpeg"
        videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
        title={"Atlas Electric Groove Cutter: Quiet, Accurate, and Efficient"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Precision, Safety, and Sustainability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Electric Model"
        subtitle="The Atlas Hydraulic Broom combines mobility, durability, and efficiency, making it ideal for quick surface cleaning in roadwork and municipal applications."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Electric Groove Cutter is designed with precision engineering and a focus on long-term operational stability and safety."
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
