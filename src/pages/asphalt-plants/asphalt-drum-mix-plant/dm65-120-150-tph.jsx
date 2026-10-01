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
import ProductSchema from "../../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "DM 65 Asphalt Drum Mix Plant",
    subtitle: "120-150 TPH | Industrial-Grade Output | Advanced Eco-Control",
    description: [
      "The DM 65 represents Atlas' penultimatum-capacity drum mix solution, delivering unmatched production for mega infrastructure projects requiring continuous, high-volume asphalt supply.",
      "Featuring a heavy-duty dual-drum design and automated control systems, the DM 65 maintains precise temperature regulation and mix consistency across its full production range while meeting stringent environmental standards.",
    ],
    features: [
      "Enhanced Fuel Efficiency",
      "Simplified Maintenance",
      "Sustainable Operations",
    ],
    images: [
       "/images/mdm/mdm-35-05.webp",
      "/images/admp/mdm-50-05.png",
      "/images/admp/mdm-50-06.png",
      "/images/admp/mdm-60-5.jpg",
      
      "/images/admp/mdm25-5.jpg",
      "/images/mdm/mdm-45-03.webp",
    ],
  };

  const faqData = [
    {
      title: "1. What projects require 120-150 TPH capacity?",
      content: (
        <>
          <p>The DM 65 is designed for:</p>
          <ul className="pl-5 list-disc list-inside">
            <li>Transcontinental highway networks</li>
            <li>Major airport expansions</li>
            <li>Large-scale industrial paving</li>
            <li>Government infrastructure programs</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How many workers are needed to operate it?",
      content: (
        <>
          <p>Basic operation requires:</p>
          <ul className="pl-5 list-disc list-inside">
            <li>1 loader operator</li>
            <li>1 control panel technician</li>
            <li>4 laborers (for manual tasks)</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. How does the DM 65 compare to smaller drum mix plants?",
      content: (
        <>
          <p>
            While the DM 65 offers higher production capacity compared to
            smaller plants, its streamlined design and ease of use make it
            versatile for large-scale projects. It maintains the same level of
            mix quality and environmental compliance, making it an excellent
            choice for contractors who need flexibility and reliability without
            excessive complexity.
          </p>
        </>
      ),
    },
    {
      title: "4. How does it compare to standard drum mix plants?",
      content: (
        <>
          <p>The DM 65 offers:</p>
          <ul className="pl-5 list-disc list-inside">
            <li>Significantly higher production capacity</li>
            <li>Enhanced temperature control</li>
            <li>Greater material handling efficiency</li>
          </ul>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Drum System",
      desc: (
        <span>
          Counter-flow single and dual-drum configurations ensure thorough
          heating and mixing.
        </span>
      ),
      image: "/images/admp/dm-65-1.JPG",
    },
    {
      title: "Precision Material Handling",
      desc: (
        <span>
          Heavy-duty charging conveyor with advanced load cells ensures accurate
          material flow of 80-110 TPH.
        </span>
      ),
      image: "/images/admp/dm-65-2.JPG",
    },
    {
      title: "Superior Pollution Control",
      desc: (
        <span>
          A dry dust collector paired with an optional wet scrubber keeps
          particulate levels below 50mg/Nm³.
        </span>
      ),
      image: "/images/admp/dm-65-3.JPG",
    },
    {
      title: "Diverse Fuel Options",
      desc: (
        <span>
          High-efficiency burner compatible with FO, diesel, and LDO, offering
          flexibility as per the regional availability and accessibility.
        </span>
      ),
      image: "/images/admp/dm-65-4.JPG",
    },
  ];

  const featuresGridData = [
    {
      title: "Proven Track Record",
      desc: "Successfully deployed across continents, including Algeria, Malaysia, and Iceland, for highways, airports, and industrial projects",
      icon: "/images/comman/logo/globe.png", // 'Globe' for "Proven Track Record" across continents
    },
    {
      title: "Eco-Conscious Engineering",
      desc: "99.8% particulate capture rate using advanced wet scrubbers or optional baghouse filters",
      icon: "/images/comman/logo/eco.png", // 'Eco' for "Eco-Conscious Engineering"
    },
    {
      title: "Unmatched Durability",
      desc: "Heavy-duty components built for 24/7 operation to ensure long service life and cost-savings",
      icon: "/images/comman/logo/reliable.png", // 'Reliable' for "Unmatched Durability"
    },
    {
      title: "Intelligent Control System",
      desc: "Advanced PLC with production monitoring and hundreds of recipe storage",
      icon: "/images/comman/logo/custom.png", // 'Custom' for "Intelligent Control System" and "recipe storage"
    },
    {
      title: "Quicker Break Even",
      desc: "Up to 35% lower fuel consumption ensures a quick payback period",
      icon: "/images/comman/logo/profit&roi.png", // 'Profit&ROI' for "Quicker Break Even"
    },
  ];

 const products = [
    {
      img: "/images/mdm/mdm-45-04.webp",
      title: "Asphalt Drum Mix Plant DM25",
      desc: "20–30 TPH | Compact & Efficient",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm25-20-30-tph",
    },
    {
      img: "/images/mdm/mdm-35-02.webp",
      title: "Asphalt Drum Mix Plant DM35",
      desc: "30–40 TPH | Versatile & Reliable",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm35-30-40-tph",
    },
    {
      img: "/images/mdm/mdm-45-03.webp",
      title: "Asphalt Drum Mix Plant DM45",
      desc: "40–60 TPH | High Performance",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm45-40-60-tph",
    },
    {
      img: "/images/admp/mdm-60-5.jpg",
      title: "Asphalt Drum Mix Plant DM50",
      desc: "60–90 TPH | Efficient Production",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm50-60-90-tph",
    },
    {
      img: "/images/admp/mdm25-5.jpg",
      title: "Asphalt Drum Mix Plant DM60",
      desc: "90–120 TPH | High Capacity Design",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph",
    },
    // {
    //   img: "/images/mdm/mdm-35-05.webp",
    //   title: "Asphalt Drum Mix Plant DM65",
    //   desc: "120–150 TPH | Maximum Output",
    //   url: "/asphalt-plants/asphalt-drum-mix-plant/dm65-120-150-tph",
    // },
    {
      img: "/images/admp/twohundrednew-five.webp",
      title: "Asphalt Drum Mix Plant DM200",
      desc: "180–200 TPH | Ultra High Capacity",
      url: "/asphalt-plants/asphalt-drum-mix-plant/dm200-180-200-tph",
    },
  ];

  const components = [
    {
      title: "Cold Feed Bins",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Aggregates are loaded into different bins for delivering to the
            drying drum.
          </p>
          <p>
            Each bin is equipped with adjustable gates to control the flow of
            each material separately.
          </p>
        </div>
      ),
    },
    {
      title: "Single Deck Vibrating Screen",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Separates oversized aggregates to prevent them from entering the
            drying drum.
          </p>
        </div>
      ),
    },
    {
      title: "Charging Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Transfers cold aggregates from the feed bins to the drum.</p>
          <p>
            Equipped with a load cell for precise weighing and data transmission
            to the control panel.
          </p>
        </div>
      ),
    },
    {
      title: "Drying and Mixing Drum",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Rotating drum equipped with flights for drying aggregates in the
            first half.
          </p>
          <p>Mixes with bitumen and filler in the second half.</p>
        </div>
      ),
    },
    {
      title: "Fuel Tank for Drum Burner",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Stores and supplies fuel to the drum burner.</p>
          <p>Compatible with FO, diesel, and LDO.</p>
        </div>
      ),
    },
    {
      title: "Asphalt Storage Tanks",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Store and heat bitumen so that it can be used in the drum mixer for
            mixing with hot aggregates.
          </p>
          <p>Fully covered for maximum heat retention.</p>
        </div>
      ),
    },
    {
      title: "Filler Silo",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Stores binding material for addition into the mix if required.</p>
        </div>
      ),
    },
    {
      title: "Pollution Control Devices",
      desc: (
        <div className="pl-4 space-y-2">
          <p>A dry dust collector traps heavy particles.</p>
          <p>An optional wet scrubber captures finer dust particles.</p>
        </div>
      ),
    },
    {
      title: "Load Out Conveyor",
      desc: (
        <div className="pl-4 space-y-2">
          <p>
            Collects ready hot mix asphalt and transports it to waiting trucks
            or storage silos.
          </p>
        </div>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <div className="pl-4 space-y-2">
          <p>Modern controls allow storage of different mix recipes.</p>
          <p>Centralized management of all plant operations.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>DM 65 | 120–150 TPH | Heavy-Duty | Atlas Technologies India</title>
        <meta name="description" content="DM 65 — 120–150 TPH high-capacity drum mix plant, heavy-duty drum, multi-fuel burner, CPCB-compatible. For large highway and infrastructure contracts. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
      videoThumbnail="/images/admp/dm-65-1.JPG"
        pageUrl="/asphalt-plants/asphalt-drum-mix-plant/dm65-120-150-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/admp/dm-65-1.JPG"
        videoUrl="https://www.youtube.com/embed/HTcZu7fcrG0"
        title={"DM 65: The Ultimate Solution for National Infrastructure"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="State-of-the-art engineering for extreme (and continuous) asphalt production demands"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas DM 65?"
        subtitle="Discover why the DM 65 stands out as the ultimate solution for contractors seeking reliability, scalability, and sustainability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each component of the Asphalt Drum Mix Plant is designed for ease, economy, and efficiency."
        }
        components={components}
        img="/images/admp/mdm-50-06.png"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
