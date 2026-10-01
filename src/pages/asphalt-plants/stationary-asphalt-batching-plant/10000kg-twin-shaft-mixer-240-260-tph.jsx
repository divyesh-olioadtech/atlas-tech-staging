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
    title: "ABP (400) Stationary Asphalt Batch Plant",
    subtitle: "240-260 TPH Production | 10000kg Twin Shaft Mixer | RAP-Ready",
    description: [
      "The ABP (400) represents the ultimate evolution in asphalt production technology, featuring a massive 10,000kg twin-shaft mixer that delivers 240-260 ton/hour output for the world's most demanding infrastructure projects while maintaining Atlas' legendary precision.",
      "This industrial-scale plant maintains the ABP series' signature 45-second mixing cycles and -30°C to 55°C operational range, now engineered with double-reinforced components to handle the extreme demands of continuous mega-project operation. Standard 30% RAP integration (upgradable to 50%) ensures sustainable high-volume production.",
    ],
    features: [
      "Unrivaled Industrial Strength",
      "Mega-Project Reliability",
      "Atlas Precision Engineering",
    ],
    images: [
      "/images/sabp/abp-400-1.jpg",
      "/images/sabp/abp-400-2.jpg",
      "/images/sabp/abp-400-3.jpg",
      "/images/sabp/abp-400-4.jpg",
      "/images/sabp/abp-400-5.jpg",
      "/images/sabp/abp-400-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "What makes the ABP 400's 10,000kg mixer unique?",
      content: (
        <>
          <p>
            The industry's largest twin-shaft mixer delivers{" "}
            <strong>2x the batch size</strong>
            of our 5000kg model while maintaining the same{" "}
            <strong>45-second cycles</strong> and mix quality.
          </p>
        </>
      ),
    },
    {
      title: "How does it maintain precision at this scale?",
      content: (
        <>
          <ul className="pl-5 list-disc">
            <li className="font-bold">
              Quadruple-load-cell weighing (±0.2% accuracy)
            </li>
            <li className="font-bold">
              Smart torque balancing across both shafts
            </li>
            <li className="font-bold">
              Oversized paddles for complete aggregate coating
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What projects require this capacity?",
      content: (
        <>
          <ul className="pl-5 list-disc">
            <li className="font-bold" i>
              Transcontinental highway networks
            </li>
            <li className="font-bold">Mega-airport expansions</li>
            <li className="font-bold">Offshore island connection projects</li>
          </ul>
        </>
      ),
    },
    {
      title:
        "What safety features are included in the ABP 400 Stationary Asphalt Batch Plant?",
      content: (
        <>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Plant-wide fire suppression</li>
            <li className="font-bold">Explosion-proof controls</li>
            <li className="font-bold">Emergency stop network</li>
          </ul>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "10,000kg Mega-Mixer Capacity",
      desc: (
        <span>
          Mega twin-shaft mixer maintains <strong>45-second cycles</strong> at
          full <strong>260 TPH production</strong>
        </span>
      ),
      image: "/images/sabp/abp-400-1.jpg",
    },
    {
      title: "Advanced RAP Technology",
      desc: (
        <span>
          Standard <strong>30% recycled asphalt</strong> integration (upgradable
          to 50% with <strong>dual preheaters</strong>)
        </span>
      ),
      image: "/images/sabp/abp-400-2.jpg",
    },
    {
      title: "For Varied Climates",
      desc: (
        <span>
          Proven <strong>-30°C to 55°C</strong> operation with heavy-duty
          Arctic/Desert customization options
        </span>
      ),
      image: "/images/sabp/abp-400-3.jpg",
    },
    {
      title: "Fuel Optimization",
      desc: (
        <span>
          Multi-fuel burner system delivers{" "}
          <strong>22% lower consumption</strong> than comparable plants
        </span>
      ),
      image: "/images/sabp/abp-400-4.jpg",
    },
    {
      title: "Smart Control System",
      desc: (
        <span>
          Familiar <strong>SCADA control interface</strong> identical to all ABP
          series mixing plants
        </span>
      ),
      image: "/images/sabp/abp-400-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Industry Leadership",
      desc: "35+ years of innovation – Atlas has installed over 2,500 plants worldwide",
      icon: "/images/comman/logo/globe.png", // Globe represents global leadership
    },
    {
      title: "Mega-Project Support Network",
      desc: (
        <span>
          Spare parts delivered within <strong>48 hours</strong> from 6
          continental warehouses
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // Rapid emphasizes fast delivery
    },
    {
      title: "Custom Engineering",
      desc: (
        <span>
          Plant configurations are tailored to{" "}
          <strong>project scale and climate conditions</strong>
        </span>
      ),
      icon: "/images/comman/logo/engineering.png", // Engineering represents technical customization
    },
    {
      title: "Sustainable Production",
      desc: (
        <span>
          <strong>30% RAP standard</strong> reduces greenhouse emissions,
          ensuring sustainable development
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // Eco represents broader sustainability
    },
    {
      title: "Maximum ROI",
      desc: (
        <span>
          Higher return on investment in 260TPH class, much better than industry
          standards
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // Money represents financial returns
    },
  ];

  const products = [
    {
      img: "/images/comman/slider.png",
      title: "ABP 80",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
      img: null,
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 100",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
      img: null,
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
      img: "/images/sabp/abp-120-img-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 140",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
      img: "/images/sabp/abp-140-1.jpg",
    },
    {
      img: "/images/sabp/abponesixty-newfour.jpeg",
      title: "ABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abp-160-new-1.png",
    },
    {
      img: "/images/sabp/abp-180-5.JPG",
      title: "ABP 180",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp-180-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 200",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
      img: "/images/sabp/abp-200-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 260",
      desc: "3000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-260-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 320",
      desc: "5000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-320-1.jpg",
    },
    // {
    //   img: "/images/comman/slider.png",
    //   title: "ABP 400",
    //   desc: "10000 Kg | Twin Shaft | 240-260 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/10000kg-twin-shaft-mixer-240-260-tph",
    //   img: "/images/sabp/abp-400-1.jpg",
    // },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Customizable configurations</span> (3–6
            bins) with individual vibrating motors
          </li>
          <li>
            <span className="font-bold">Smart monitoring</span> includes
            empty-bin indicators and frequency-controlled drives
          </li>
          <li>
            <span className="font-bold">Rugged skid-mounted construction</span>{" "}
            for stability and easy relocation
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Single-deck pre-screening</span> removes
            oversized materials (&gt;40mm)
          </li>
          <li>
            <span className="font-bold">Variable-speed charging conveyor</span>{" "}
            with wear-resistant paddles
          </li>
          <li>
            <span className="font-bold">15° inclined design</span> for optimal
            material flow into dryer
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">30° inclined cylinder</span> with
            internal flights for 92% thermal efficiency
          </li>
          <li>
            <span className="font-bold">Accessible maintenance points</span> and
            discharge chute temperature monitoring
          </li>
          <li>
            <span className="font-bold">Abrasion-resistant steel lining</span>{" "}
            (8–12mm thickness)
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Fuel Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Auto-switching capability</span> between
            diesel/LDO/heavy oil/gas
          </li>
          <li>
            <span className="font-bold">Low-noise</span> (&lt;75dB) design with
            5-stage modulation control
          </li>
          <li>
            <span className="font-bold">Optional FO/gas compatibility</span>{" "}
            with dual-fuel configurations
          </li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Cyclone separator</span> recovers 85%
            reusable fines
          </li>
          <li>
            <span className="font-bold">Recycle chute</span> returns captured
            material to drum process
          </li>
        </ul>
      ),
    },
    {
      title: "Advanced Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Reverse-air pulse cleaning</span> (8-bag
            sequential rotation)
          </li>
          <li>
            <span className="font-bold">99.7% filtration efficiency</span> using
            PTFE-coated filter bags
          </li>
          <li>
            <span className="font-bold">
              Optional venturi wet scrubber system
            </span>{" "}
            for specific environments
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Insulated tanks</span> (50–100KL) with
            50mm mineral wool cladding
          </li>
          <li>
            <span className="font-bold">Thermic oil heating</span> maintains
            160±5°C bitumen temperature
          </li>
          <li>
            <span className="font-bold">Jacketed pipelines</span> prevent heat
            loss during transfer
          </li>
        </ul>
      ),
    },
    {
      title: "Dedicated Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tanks</span> (5,000–20,000L)
            with leak detection
          </li>
          <li>
            <span className="font-bold">Submersible transfer pumps</span> ensure
            consistent burner feed
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket design</span> handles
            300°C materials
          </li>
          <li>
            <span className="font-bold">Wear plates</span> at loading points
            extend service life 3x
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Standard</span>: Screw conveyor + hopper
            (1–5TPH capacity)
          </li>
          <li>
            <span className="font-bold">Optional</span>: Silo + elevator system
            for high-volume operations
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Deck Vibrating Screen",
      desc: (
        <ul>
          <li>
            <span className="font-bold">4–6 deck configurations</span> with
            quick-change screen panels
          </li>
          <li>
            <span className="font-bold">Spring-mounted platform</span> reduces
            vibration transfer
          </li>
          <li>
            <span className="font-bold">Oversize chute</span> automatically
            diverts non-conforming aggregate
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Storage Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Compartmentalized design</span> matches
            screen deck count
          </li>
          <li>
            <span className="font-bold">Load-sensor overflow protection</span>{" "}
            and sampling ports
          </li>
          <li>
            <span className="font-bold">Pneumatic gates</span> with 0.5s
            response time
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">45-second mixing cycles</span> ensure
            complete bitumen coating
          </li>
          <li>
            <span className="font-bold">Full-length discharge gate</span>{" "}
            ensures complete batch emptying
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Four-load-cell suspension</span> for
            aggregates (±0.25% accuracy)
          </li>
          <li>
            <span className="font-bold">Insulated bitumen weigh tank</span> with
            gravity discharge
          </li>
          <li>
            <span className="font-bold">Butterfly valve-controlled</span> filler
            dosing
          </li>
        </ul>
      ),
    },
    {
      title: "SCADA Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">15″ touchscreen HMI</span> with
            color-coded process flow
          </li>
          <li>
            <span className="font-bold">Cloud-connected monitoring</span> for
            remote diagnostics
          </li>
          <li>
            <span className="font-bold">Automatic recipe storage</span> (100+
            mix designs)
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          ABP 400 – 10000 Kg Asphalt Mixer | 240–260 TPH Plant | Atlas
          Technolgies
        </title>
        <meta
          name="description"
          content="Atlas 10000kg asphalt batch mix plant supports 240–260 TPH for large-scale needs. A key player in batching plant equipment supply across India."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="/video/stock.mp4"
      videoThumbnail="/images/sabp/abp-400-1.jpg"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/10000kg-twin-shaft-mixer-240-260-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp-400-1.jpg"
        videoUrl="/video/stock.mp4"
        title={"See the ABP (400) Stationary Plant in Action"}
        isYoutube={false}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (400) a leader in ultra-high-capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Atlas ABP (400)?"
        subtitle="ABP (400) – the preferred choice for mega-airports and transcontinental highway projects"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
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
