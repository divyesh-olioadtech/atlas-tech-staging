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
    "asphalt-machine",
    "kerb-cutting",
    "kerb-cutting-heavy-duty",
  );

  const product = {
    title: "Kerb Cutting Machine (Heavy-Duty Model) - G-1510 (10/3000)",
    subtitle:
      'Blade Size: 32" Diamond Wheel | Power Source: Diesel / Electric Options',
    description: [
      'The Atlas Heavy-Duty Kerb Cutting Machine is a high-capacity, precision-engineered cutter built for intensive road, highway, and infrastructure applications. Equipped with a 32" diamond wheel and available in both diesel and electric variants, it delivers unmatched performance and control for deep, uniform cuts in concrete kerbs, dividers, and pavement structures.',
      "Designed for maximum productivity, operator safety, and extended durability, this heavy-duty model is ideal for contractors working on highways, industrial corridors, and airport pavements. Its robust chassis and precision adjustment system ensure consistent, clean cuts under the toughest site conditions.",
    ],
    features: ["Deep Cutting", "Dual Power Options", "Rugged Construction"],
    images: [
      // "/images/plants/kerb-laying/kerb-1.png",
      "/images/plants/kerb-laying/mix-machine-one.webp",
       "/images/plants/kerb-laying/mix-machine-two.webp",
       "/images/plants/kerb-laying/mix-machine-three.webp",
       "/images/plants/kerb-laying/mix-machine-four.webp",
       "/images/plants/kerb-laying/mix-machine-five.webp",
      
    ],
  };

  const faqData = [
    {
      title: "1. What projects is the Heavy-Duty Kerb Cutter best suited for?",
      content: (
        <>
          <p>
            It’s ideal for highways, industrial complexes, and airport
            pavements, where deep, precise cuts are required.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the maximum cutting depth?",
      content: (
        <>
          <p>
            Adjustable up to 700 mm, depending on blade size and material type.
          </p>
        </>
      ),
    },
    {
      title: "3. Can I choose between diesel and electric power?",
      content: (
        <>
          <p>
            Yes. The model is available in diesel and electric configurations,
            allowing flexibility based on site conditions.
          </p>
        </>
      ),
    },
    {
      title: "4. What is the blade size and cutting performance?",
      content: (
        <>
          <p>
            A 32-inch diamond wheel provides deeper cuts, longer blade life, and
            smoother results for thick concrete structures.
          </p>
        </>
      ),
    },
    {
      title: "5. What are the key maintenance requirements?",
      content: (
        <>
          <p>
            Routine inspection of blade, hand-wheels, and power unit every 50
            operating hours, with full service per Atlas maintenance standards.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Dual Power Options (Diesel / Electric)",
      desc: (
        <span>
          Available in both configurations to match on-site requirements and
          ensure flexibility across projects.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-heavy-1.jpeg",
    },
    {
      title: '32" Diamond Blade',
      desc: (
        <span>
          Large-diameter industrial cutting wheel for deeper cuts and smoother
          operation in reinforced concrete.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-heavy-2.jpeg",
    },
    {
      title: "Adjustable Blade Height (Up to 500 mm)",
      desc: (
        <span>
          The triple hand-wheel mechanism provides precise vertical movement for
          consistent cut depth and clean finishes.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-heavy-3.jpeg",
    },
    {
      title: "Water Spray & Cooling System",
      desc: (
        <span>
          Integrated water feed minimizes dust and heat buildup, extending blade
          life and improving operator visibility.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-heavy-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Highways and Industrial Corridors",
      desc: (
        <span>
          High-power drive and deep-cut capability make it ideal for large-scale
          infrastructure and airport works.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Precision Blade Control",
      desc: (
        <span>
          Three-hand-wheel setup allows smooth adjustment and stable cutting
          even on uneven surfaces.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Long Service Life",
      desc: (
        <span>
          Heavy-gauge steel body, sealed bearings, and reinforced components
          ensure years of consistent performance.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Flexible Power Configuration",
      desc: (
        <span>
          Choose between diesel for mobility or electric for low-noise
          operation, depending on the project environment.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Operator Safety and Control",
      desc: (
        <span>
          The blade guard with emergency stop and anti-vibration design provides
          safety and comfort during prolonged use.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Power Unit (Diesel / Electric)",
      desc: (
        <ul>
          <li>• Choice of robust diesel engine or powerful electric motor.</li>
          <li>
            • Optimized for high torque and sustained operation under load.
          </li>
        </ul>
      ),
    },
    {
      title: "Cutting Blade Assembly",
      desc: (
        <ul>
          <li>
            • 32&quot; diamond wheel for deep, clean cuts in concrete or
            asphalt.
          </li>
          <li>
            • The integrated water-spray line prevents overheating and dust
            formation.
          </li>
        </ul>
      ),
    },
    {
      title: "Height Adjustment System",
      desc: (
        <ul>
          <li>• Triple hand-wheels for vertical control up to 700mm.</li>
          <li>
            • The locking system holds a depth setting during extended cutting.
          </li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility Setup",
      desc: (
        <ul>
          <li>
            • Reinforced steel frame with vibration isolation for smooth
            operation.
          </li>
          <li>• Four-wheel system for easy mobility and stability on-site.</li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Safety Features",
      desc: (
        <ul>
          <li>
            • Central start/stop switch and emergency cutoff for quick response.
          </li>
          <li>
            • Ergonomic handles ensure comfort and accuracy during operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Heavy Duty Kerb Cutter | 32&quot; Blade | 300mm Depth | Atlas India</title>
        <meta name="description" content="Atlas heavy-duty kerb cutter — 32&quot; diamond wheel, 300mm max cut depth, diesel or electric, ±1mm precision. For deep expansion joints and heavy kerb work. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/kerb-cutting-machine/kerb-cutting-machine-heavy-duty"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail= "/images/plants/kerb-laying/mix-machine-one.webp"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={"Heavy-Duty Model: Built for Large-Scale Precision Cutting"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Depth, Accuracy, and Heavy-Duty Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Heavy-Duty Kerb Cutter"
        subtitle="The Heavy-Duty model is engineered for scale, strength, and precision, giving contractors the reliability needed for demanding, long-duration projects."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Heavy-Duty Kerb Cutter is engineered for stability, durability, and precision in all working conditions."
        }
        components={components}
        img = "/images/plants/kerb-laying/mix-machine-five.webp"
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
