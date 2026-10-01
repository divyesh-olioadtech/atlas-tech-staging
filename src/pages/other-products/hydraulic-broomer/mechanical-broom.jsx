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
    "mechanical-broom",
  );

  const product = {
    title: "Road Sweeper Machine (Mechanical Broom)",
    subtitle:
      "Cleaning Width ~ 2.5 m | Best for: Large-Scale Road Projects and Outdoor Dust Conditions",
    description: [
      "The Atlas Mechanical Road Sweeper is a tractor-mounted brooming machine designed for large-scale cleaning of roads, highways, and construction sites. Powered by a mechanical PTO drive, it delivers dependable brush rotation and wide cleaning coverage. It’s ideal for heavy-duty sweeping under demanding outdoor conditions.",
      "Built for performance and reliability, the Mechanical Broom combines rugged construction, optional water sprinkling for dust control, and easy operation. Its wider cleaning path and durable brush design make it a preferred choice for contractors handling road construction and maintenance projects.",
    ],
    features: [
      "Wider Coverage",
      "Rugged Performance",
      "Efficient Dust Control",
    ],
    images: [
      // "/images/plants/mechanical-broom/mechanical-broom-01.png",
      // "/images/plants/mechanical-broom/mechanical-broom-02.png",
      "/images/plants/mechanical-broom/mechanicalone.webp",
      "/images/plants/mechanical-broom/mechanicaltwo.webp",
      "/images/plants/mechanical-broom/mechanicaltwo.webp",
      "/images/plants/mechanical-broom/mechanical-broom-03.png",
      // "/images/plants/mechanical-broom/mechanical-broom-04.png",
      "/images/plants/mechanical-broom/mechanical-broom-05.png",
      "/images/plants/mechanical-broom/mechanical-broom-06.png",
    ],
  };

  const faqData = [
    {
      title: "1. How is the Mechanical Road Sweeper powered?",
      content: (
        <>
          <p>
            It is powered via the tractor’s PTO drive, which mechanically
            rotates the sweeping brush without using hydraulic power.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the cleaning width of this model?",
      content: (
        <>
          <p>
            The sweeper covers approximately 2.5 meters per pass, enabling
            faster coverage for large road sections.
          </p>
        </>
      ),
    },
    {
      title: "3. Does it include a water sprinkling system?",
      content: (
        <>
          <p>
            Yes. An optional water sprinkling unit can be fitted to suppress
            dust and improve sweeping efficiency.
          </p>
        </>
      ),
    },
    {
      title: "4. What type of brush material is used?",
      content: (
        <>
          <p>
            Durable nylon bristles designed for long life and high cleaning
            performance on concrete and asphalt.
          </p>
        </>
      ),
    },
    {
      title: "5. What kind of maintenance does it require?",
      content: (
        <>
          <p>
            Periodic inspection of the brush assembly, PTO linkage, and bearings
            is recommended every 40–50 operating hours for optimal performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Mechanical PTO Drive",
      desc: (
        <span>
          Operates through the tractor’s power take-off (PTO) shaft, ensuring
          stable brush rotation and consistent performance without external
          hydraulics.
        </span>
      ),
      image: "/images/broom/mechanical-broom-1.jpeg",
    },
    {
      title: "2.5 m Cleaning Width",
      desc: (
        <span>
          Provides broad coverage per pass, improving operational efficiency for
          highways and large paved areas.
        </span>
      ),
      image: "/images/broom/mechanical-broom-2.jpeg",
    },
    {
      title: "Optional Water Sprinkling System",
      desc: (
        <span>
          Integrated sprinklers reduce dust generation during sweeping, ensuring
          better visibility and cleaner operation.
        </span>
      ),
      image: "/images/broom/mechanical-broom-3.jpeg",
    },
    {
      title: "Replaceable Nylon Brushes",
      desc: (
        <span>
          High-quality bristles designed for long-term durability, easy
          replacement, and reliable performance on asphalt or concrete surfaces.
        </span>
      ),
      image: "/images/broom/mechanical-broom-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Large-Scale Projects",
      desc: (
        <span>
          Its 2.5 m sweeping width and PTO-driven system make it ideal for
          national highways, city roads, and industrial layouts.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Efficient Dust Suppression",
      desc: (
        <span>
          Optional water sprinkling unit ensures cleaner sweeping and reduces
          airborne particles in dry, dusty environments.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance Design",
      desc: (
        <span>
          Simple mechanical drive eliminates complex hydraulic lines, reducing
          downtime and servicing costs.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Durable and Field-Proven",
      desc: (
        <span>
          Heavy-duty chassis and replaceable brushes deliver reliable operation
          over long work hours and varied conditions.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Quick Mounting and Easy Use",
      desc: (
        <span>
          Tractor-compatible design allows fast coupling and operation by a
          single operator without specialized training.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Mechanical Drive System",
      desc: (
        <ul>
          <li>
            • Powered by tractor PTO shaft for continuous, stable brush
            rotation.
          </li>
          <li>• Simple transmission design ensures minimal maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Sweeping Brush Assembly",
      desc: (
        <ul>
          <li>
            • Wide 2.5 m brush with adjustable height and replaceable nylon
            bristles.
          </li>
          <li>
            • Delivers consistent cleaning across paved and unpaved surfaces.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Sprinkling Unit (Optional)",
      desc: (
        <ul>
          <li>• Mounted tank and nozzles reduce dust during sweeping.</li>
          <li>• Improves working visibility and air quality.</li>
        </ul>
      ),
    },
    {
      title: "Chassis Frame",
      desc: (
        <ul>
          <li>
            • Heavy-duty welded frame ensures structural stability and long
            life.
          </li>
          <li>• Compact, balanced design enhances maneuverability.</li>
        </ul>
      ),
    },
    {
      title: "Tractor Mounting & Controls",
      desc: (
        <ul>
          <li>• Quick-attach linkage for fast setup and removal.</li>
          <li>
            • Simple lever-operated control for starting and stopping the brush
            drive.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          Mechanical Broom | 2.5m Sweep | PTO Drive | Atlas Technologies India
        </title>
        <meta
          name="description"
          content="PTO-driven, no hydraulic lines, lower servicing cost — Atlas mechanical broom sweeps 2.5m per pass with optional water sprinkling and replaceable nylon brushes. Get factory price."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/ARlSTri6fyo"
        videoThumbnail="/images/plants/mechanical-broom/mechanical-broom-05.png"
        pageUrl="/other-products/hydraulic-broomer/mechanical-broom"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/mechanical-broom/mechanical-broom-05.png"
        videoUrl="https://www.youtube.com/embed/ARlSTri6fyo"
        title={
          "Mechanical Road Sweeper: High-Capacity Cleaning for Heavy-Duty Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for High-Volume Cleaning and Long Service Life"
        features={featureData}
      />
      <FeatureGrid
        title="Why Choose the Mechanical Broom"
        subtitle="The Atlas Mechanical Road Sweeper is the ideal solution for contractors and municipal bodies managing extensive road networks and dust-prone work zones."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Mechanical Road Sweeper is engineered for ease of operation, durability, and high cleaning efficiency across diverse site conditions."
        }
        components={components}
        img="/images/plants/mechanical-broom/mechanical-broom-03.png"
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