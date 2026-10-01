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
    "hydraulic-broomer",
    "hydraulic-broom",
  );

  const product = {
    title: "Road Sweeper Machine (Hydraulic Broom)",
    subtitle:
      "Cleaning Width ~ 2.1 m | Best for: Road Contractors, Municipalities, and Industrial Cleaning",
    description: [
      "The Atlas Hydraulic Road Sweeper is a tractor-mounted brooming machine built for efficient and reliable surface cleaning on roads, highways, airports, and industrial areas. Driven by the tractor’s hydraulic system (hydro motor drive), it ensures smooth brush rotation, uniform sweeping performance, and quick debris removal with minimal operator effort.",
      "Designed for high productivity and simple operation, this hydraulic broom offers consistent sweeping, optional dust collection, and quick maintenance. Its rugged frame and heavy-duty brushes make it a dependable choice for both municipal maintenance and large construction contractors.",
    ],
    features: [
      "Efficient Cleaning",
      "Smooth Hydraulic Drive",
      "Low Maintenance",
    ],
    images: [
      "/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new-component.jpeg",
      "/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new.jpeg",
      "/images/plants/Hydraulic Broom/hydraulicone.webp",
      "/images/plants/Hydraulic Broom/hydraulictwo.webp",
      "/images/plants/Hydraulic Broom/hydraulicthree.webp",
      // "/images/plants/Hydraulic Broom/hydraulic-broom-03.png",
      // "/images/plants/Hydraulic Broom/hydraulic-broom-04.png",
      // "/images/plants/Hydraulic Broom/hydraulic-broom-05.png",
      // "/images/plants/Hydraulic Broom/hydraulic-broom-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. What powers the Hydraulic Road Sweeper?",
      content: (
        <>
          <p>
            It operates through the tractor’s hydraulic system, driving the
            broom via a hydro motor for smooth, adjustable brush rotation.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the cleaning width of the machine?",
      content: (
        <>
          <p>
            Approximately 2.1 meters, covering large areas efficiently in each
            pass.
          </p>
        </>
      ),
    },
    {
      title: "3. Can the sweeper collect dust and debris?",
      content: (
        <>
          <p>
            Yes. A dust collection bucket can be attached to capture debris
            directly during sweeping.
          </p>
        </>
      ),
    },
    {
      title: "4. What type of brushes are used?",
      content: (
        <>
          <p>
            Durable nylon bristles designed for long wear life and effective
            cleaning on asphalt, concrete, and paved surfaces.
          </p>
        </>
      ),
    },
    {
      title: "5. How often should the broom be maintained?",
      content: (
        <>
          <p>
            Routine checks after every 40–50 operating hours are recommended,
            mainly for brush wear, hydraulic lines, and mounting points.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Hydraulic Drive System",
      desc: (
        <span>
          Powered directly by the tractor’s hydraulic system, enabling smooth
          and continuous brush rotation with adjustable sweeping speed.
        </span>
      ),
      image: "/images/broom/hydraulic-broom-1.jpeg",
    },
    {
      title: "2.1 m Cleaning Width",
      desc: (
        <span>
          Covers a wide surface area for faster operation; suitable for road
          shoulders, highways, and factory premises.
        </span>
      ),
      image: "/images/broom/hydraulic-broom-2.jpeg",
    },
    {
      title: "Optional Dust Collection Bucket",
      desc: (
        <span>
          Can be equipped with a detachable collection bucket to capture swept
          debris and minimize secondary cleanup.
        </span>
      ),
      image: "/images/broom/hydraulic-broom-3.jpeg",
    },
    {
      title: "Durable Nylon Brushes",
      desc: (
        <span>
          High-quality, wear-resistant bristles provide uniform sweeping and
          long service life, even under dusty or coarse conditions.
        </span>
      ),
      image: "/images/broom/hydraulic-broom-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "Perfect for Contractors and Civic Projects",
      desc: (
        <span>
          Tractor-mounted design ensures easy transport and operation for roads,
          parking areas, and industrial campuses.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Smooth Hydraulic Operation",
      desc: (
        <span>
          Eliminates chain-drive wear and reduces vibration, ensuring consistent
          brush rotation and even cleaning.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance, High Reliability",
      desc: (
        <span>
          Simple design with minimal moving parts; bearings and brushes can be
          serviced quickly on-site.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Optional Dust Management System",
      desc: (
        <span>
          Available with a front dust-collection bucket for cleaner sweeping in
          urban and industrial environments.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Built for Long-Term Use",
      desc: (
        <span>
          Robust steel frame and replaceable brushes ensure dependable
          performance under daily operation. Side Brush (optional) for divider
          and corner cleaning.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Hydraulic Drive System",
      desc: (
        <ul>
          <li>
            • Tractor-powered hydro motor provides smooth, variable-speed brush
            rotation.
          </li>
          <li>
            • Reduces mechanical wear compared to traditional chain-driven
            sweeping systems.
          </li>
        </ul>
      ),
    },
    {
      title: "Sweeping Brush Assembly",
      desc: (
        <ul>
          <li>
            • High-quality nylon bristles deliver uniform sweeping performance.
          </li>
          <li>
            • Adjustable brush height ensures consistent ground contact and
            efficient debris removal.
          </li>
        </ul>
      ),
    },
    {
      title: "Dust Collection Bucket (Optional)",
      desc: (
        <ul>
          <li>
            • Collects swept material for cleaner operation and quick disposal.
          </li>
          <li>
            • Easy attachment and removal for flexible working conditions.
          </li>
        </ul>
      ),
    },
    {
      title: "Steel Chassis Frame",
      desc: (
        <ul>
          <li>
            • Heavy-duty welded frame built to withstand vibration, abrasion,
            and rugged job-site conditions.
          </li>
          <li>
            • Compact design ensures easy maneuverability during sweeping.
          </li>
        </ul>
      ),
    },
    {
      title: "Mounting & Control Setup",
      desc: (
        <ul>
          <li>
            • Quick tractor-coupling system allows fast mounting and removal
            without tools.
          </li>
          <li>
            • Simple hydraulic lever controls make operation easy with no
            special training required.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Hydraulic Broom | 2.1m Sweep Width | Atlas Technologies India</title>
        <meta name="description" content="Atlas hydraulic broom — 2.1m sweep width, dust collection bucket, tractor hydraulic driven. For national highways, airports and city roads. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
      videoThumbnail="/images/plants/Hydraulic Broom/hydraulic-broom-05.png"
        pageUrl="/other-products/hydraulic-broomer/hydraulic-broom"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/hydraulic-broomer-banner-new-component.jpeg"
        videoUrl="https://www.youtube.com/embed/hsZiv9fVVM0"
        title={"Hydraulic Road Sweeper: Reliable Cleaning for Every Project"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Efficiency, Safety, and Operator Comfort"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Hydraulic Broom"
        subtitle="The Atlas Hydraulic Broom combines mobility, durability, and efficiency, making it ideal for quick surface cleaning in roadwork and municipal applications."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Hydraulic Road Sweeper is engineered for consistent cleaning output, durability, and ease of service."
        }
        components={components}
        img="/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new.jpeg"
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
