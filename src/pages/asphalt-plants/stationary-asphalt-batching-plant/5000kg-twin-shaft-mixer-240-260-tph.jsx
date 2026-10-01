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
    title: "ABP 320 Stationary Asphalt Batch Plant",
    subtitle:
      "Up to 320 TPH Production | Twin-Shaft Mixer up to 5,000 kg | RAP & SMA Ready",
    description: [
      "The ABP 320 is Atlas’s highest-capacity stationary asphalt batching plant, engineered for mega-projects requiring continuous, large-scale asphalt production. With a rated capacity of up to 320 tons per hour, and mixers ranging up to 5,000 kg, it is purpose-built for highways, airports, and major infrastructure projects.",
      "The ABP 320 combines heavy-duty engineering with modular construction, advanced automation, and RAP compatibility. It ensures precision and reliability, even in demanding site conditions.",
    ],
    // price: "4,15,00,000",
    features: [
      "Ultimate Capacity",
      "Precision Engineering",
      "Atlas Reliability",
    ],
    images: [
      "/images/sabp/abp-320-1.jpg",
      "/images/sabp/abp-320-2.jpg",
      "/images/sabp/abp-320-3.jpg",
      "/images/sabp/abp-320-4.jpg",
      "/images/sabp/abp-320-5.jpg",
      "/images/sabp/abp-320-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 320?",
      content: (
        <>
          <p>
            The ABP 320 delivers up to <strong>320 tons per hour</strong>,
            depending on aggregate moisture, mix design, and site conditions.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 320 use RAP?",
      content: (
        <>
          <p>
            Yes, Atlas specifies that its ABP line is <strong>RAP-ready</strong>
            , supporting recycled asphalt integration.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 320 produce SMA?",
      content: (
        <>
          <p>
            Yes, Stone Mastic Asphalt can be produced with optional system
            upgrades such as a modified spray bar, additional filler silo, and
            extended mixing cycle.
          </p>
        </>
      ),
    },
    {
      title: "What type of control system does it use?",
      content: (
        <>
          <p>
            The ABP 320 features a{" "}
            <strong>PLC/SCADA-based control system</strong> with high-accuracy
            weighing, recipe storage, alarms, and manual override.
          </p>
        </>
      ),
    },
    {
      title: "Is it designed for extreme conditions?",
      content: (
        <>
          <p>
            Yes, Atlas specifies an operational range of{" "}
            <strong>–30°C to +55°C</strong>, making it reliable across climates.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Capacity Production",
      desc: (
        <span>
          Rated for up to <strong>320 TPH</strong> with mixer sizes up to{" "}
          <strong>5,000 kg</strong> (as per Atlas product range)
        </span>
      ),
      image: "/images/sabp/abp-320-1.jpg",
    },
    {
      title: "RAP & SMA Integration",
      desc: (
        <span>
          Designed as <strong>RAP-ready</strong>, with optional systems for{" "}
          <strong>recycled asphalt</strong> and specialty mixes like{" "}
          <strong>SMA</strong>
        </span>
      ),
      image: "/images/sabp/abp-320-2.jpg",
    },
    {
      title: "Precision Weighing",
      desc: (
        <span>
          Load-cell weighing with ≤<strong>0.5% accuracy</strong>, ensuring
          consistent asphalt quality
        </span>
      ),
      image: "/images/sabp/abp-320-3.jpg",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          <strong>PLC/SCADA-based</strong> control system with recipe storage,
          alarms, and manual override
        </span>
      ),
      image: "/images/sabp/abp-320-4.jpg",
    },
    {
      title: "Extreme Conditions Operation",
      desc: (
        <span>
          Engineered for reliable use from <strong>–30°C to +55°C</strong>, with
          dust-proof controls and durable materials
        </span>
      ),
      image: "/images/sabp/abp-320-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Modular & Scalable Design",
      desc: (
        <span>
          Container-friendly, <strong>modular units</strong> allow easier
          transport, installation, and upgrades
        </span>
      ),
      icon: "/images/comman/logo/star.png", // Represents scalability and modular excellence
    },
    {
      title: "Accurate Proportioning",
      desc: (
        <span>
          <strong>High-accuracy weighing</strong> of aggregates, filler, and
          bitumen ensures mix consistency
        </span>
      ),
      icon: "/images/comman/logo/clock.png", // Symbol of precision and timing
    },
    {
      title: "Durability in Operation",
      desc: (
        <span>
          Heavy-duty <strong>dryer drum, mixer, and filter system</strong> built
          for long-term use with replaceable wear parts
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // Represents robust and customizable engineering
    },
    {
      title: "Sustainable Asphalt Production",
      desc: (
        <span>
          Supports <strong>RAP usage</strong> and optional recycling
          configurations to reduce costs and emissions
        </span>
      ),
      icon: "/images/comman/logo/recycle.png", // Highlights sustainability and RAP focus
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_4.JPG",
      title: "ABP (80) Mixer",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
    },
    {
      img: "/images/sabp/abp_80_1.JPG",
      title: "ABP (100) Mixer",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
    },
    {
      img: "/images/sabp/abp-120-img-1.jpg",
      title: "ABP (120) Mixer",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
    },
    {
      img: "/images/sabp/abp-140-1.jpg",
      title: "ABP (140) Mixer",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
    },
    {
      img: "/images/sabp/abponesixty-newfour.jpeg",
      title: "ABP (160) Mixer",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
    },
    {
      img: "/images/sabp/abp-180-5.JPG",
      title: "ABP (180) Mixer",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
    },
    {
      img: "/images/sabp/abp-200-1.JPG",
      title: "ABP (200) Mixer",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
    },
    {
      img: "/images/sabp/abp-260-1.JPG",
      title: "ABP (260) Mixer",
      desc: "3000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>Multi-bin arrangement (commonly 5 bins)</li>
          <li>Frequency-controlled drives for uniform feeding</li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>Multi-deck screen ensures precise aggregate gradation</li>
          <li>The conveyor transfers material smoothly to the dryer</li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>Counterflow type with optimized flights</li>
          <li>Monitored for consistent outlet temperatures</li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>Modulating, multi-fuel burner (diesel/LDO standard)</li>
          <li>FO/gas/CNG compatibility available as an option</li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>Cyclone or pre-separator for initial fines recovery</li>
          <li>Returns usable material to the system</li>
        </ul>
      ),
    },
    {
      title: "Bag Filter Unit",
      desc: (
        <ul>
          <li>Reverse-pulse baghouse filtration</li>
          <li>Keeps dust emissions within international norms</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>Insulated tanks with thermic oil heating</li>
          <li>Jacketed pipelines minimize heat loss during transfer</li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>Vertical storage tanks with safe transfer pumps</li>
          <li>Leak detection systems for reliable operation</li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>Enclosed bucket elevator rated for high throughput</li>
          <li>Built for continuous duty at elevated temperatures</li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>Screw conveyor with hopper for standard use</li>
          <li>Optional silo and elevator for large-volume filler</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>Heavy-duty twin-shaft pugmill mixer</li>
          <li>Mixer capacity up to 5,000 kg (to be confirmed with Atlas)</li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>
            Load-cell-supported hoppers for aggregates, bitumen, and filler
          </li>
          <li>Ensures dosing accuracy across all materials</li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>PLC/SCADA-based control with manual override</li>
          <li>Mix recipe storage, alarms, and production data logging</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 320 | 5000kg Twin-Shaft | Atlas India</title>
        <meta name="description" content="ABP 320 — 5000kg twin-shaft mixer, built for mega expressways, port projects and airport runways. Atlas's largest asphalt batch plant. Request engineering specs." />

      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="/video/stock.mp4"
        videoThumbnail="/images/sabp/abp-320-1.jpg"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

        <img
          src="/images/sabp/abp-320-1.jpg"
          alt="ABP 320 Stationary Asphalt Plant"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          {/* Fake Play Button */}
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
            <img
              src="/images/comman/play.png"
              alt="Play"
              className="w-10 h-10"
            />
          </div>

        </div>

      </div>
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (320) a leader in ultra-high-capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Why is the ABP (320) the ultimate choice for large-scale asphalt production?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img ="/images/sabp/abp-320-1.jpg"
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
