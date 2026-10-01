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
    title: "ABP 80 Stationary Asphalt Batch Plant",
    subtitle: "60-80 TPH Production | 1000kg Twin Shaft Mixer | RAP-Ready",
    description: [
      "The ABP Series 80 is a high-performance stationary asphalt batching plant designed for medium-to-large-scale projects. It combines rugged reliability with precision batching for contractors needing consistent mix quality at 60-80 tons per hour.",
      "ABP 80 Stationary Asphalt Batch Plant’s robust design and advanced features make it ideal for applications like highways, bridges, dams, and industrial structures. At the same time, the modular design allows for quick setup and easy maintenance, minimizing downtime and maximizing productivity.",
    ],
    features: ["Easy to Use", "Cost-Efficient", "Durable Structure"],
    images: [
      "/images/sabp/abp_80_4.JPG",

      "/images/sabp/abp_80_2.JPG",

      "/images/sabp/abp_80_3.JPG",

      "/images/sabp/abp_80_5.JPG",
      "/images/sabp/abp_80_1.JPG",
    ],
  };

  const faqData = [
    {
      title:
        "What is the exact production capacity of the ABP 80 asphalt plant?",
      content: (
        <>
          <p>
            The{" "}
            <span className="font-bold">
              ABP 80 produces 60-80 metric tons per hour{" "}
            </span>
            (TPH) of hot mix asphalt, depending on:
          </p>
          <ul className="pl-5 mt-2 space-y-1 list-disc">
            <li>Aggregate moisture content (typically 3%)</li>
            <li>
              Mix design complexity (e.g., polymer-modified vs conventional)
            </li>
            <li>Ambient temperature conditions</li>
          </ul>
        </>
      ),
    },
    {
      title: "How much RAP can the ABP 80 handle in recycled mixes?",
      content: (
        <>
          <p>This model supports:</p>
          <ul className="pl-5 mt-2 space-y-1 list-disc">
            <li>
              <span className="font-bold">Up to 30% RAP</span> with optional
              <span className="font-bold"> parallel drum preheater</span>
            </li>
            <li>
              Precise <span className="font-bold">RAP feeder system </span> with
              ±2% dosing accuracy
            </li>
            <li>
              Easy to attach to any plant, and easy to dismantle for relocation
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "What makes the ABP 80's 1000kg twin-shaft mixer special?",
      content: (
        <>
          <p>Key advantages:</p>
          <ul className="pl-5 mt-2 space-y-1 list-disc">
            <li>
              <strong>45-second mixing cycles</strong> (vs industry-standard 60+
              seconds)
            </li>
            <li>
              <strong>Replaceable Nickel chromium Steel tips</strong> last
              10,000+ batches
            </li>
            <li>
              <strong>Full-length discharge gate</strong> clears 99.9% of mix in
              &lt;3 seconds{" "}
              <span className="mt-2 text-red-500">(Homogenous mixing)</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Can the ABP 80 produce stone mastic asphalt (SMA)?",
      content: (
        <>
          <p>Yes, with these modifications:</p>
          <ul className="pl-5 mt-2 space-y-1 list-disc">
            <li>
              <strong>Upgraded bitumen spray</strong> bar for higher binder
              content (SMA system separate assembly)
            </li>
            <li>
              <strong>Additional filler silo</strong> (recommended 30m³
              capacity) (SMA hopper assembly near mixer)
            </li>
            <li>
              <strong>Extended mixing time</strong> setting (up to 60 seconds)
              (Change program on control panel)
            </li>
          </ul>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Compact & Modular Design",
      desc: "Quick setup with minimal footprint—ideal for space-constrained sites.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Advanced Mixing Technology",
      desc: "45-second cycles with twin-shaft mixer and RAP integration support.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Built for Extreme Conditions",
      desc: "Operates from -30°C to 55°C with corrosion-resistant alloys and dust-proof PLCs.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Fuel-Efficient Burner System",
      desc: "Auto-switching multi-fuel burners cut fuel costs by 20%.",
      image: "/images/comman/slider.png",
    },
    {
      title: "Low Maintenance Components",
      desc: "Wear-resistant paddles and modular parts ensure long operational life.",
      image: "/images/comman/slider.png",
    },
  ];

  const featuresGridData = [
    {
      title: "Slash Shipping Costs",
      desc: "Containerized modules eliminate oversized freight charges",
      icon: "/images/comman/logo/money.png",
    },
    {
      title: "Measurable Precision",
      desc: "SCADA-controlled twin-shaft mixers with ≤0.5% variance",
      icon: "/images/comman/logo/campus.png",
    },
    {
      title: "Zero Downtime",
      desc: "Guaranteed emergency spares delivery from 3 continental hubs",
      icon: "/images/comman/logo/clock.png",
    },
    {
      title: "Closed-Loop Recycling",
      desc: "Reclaim all process water and reuse 30% RAP material",
      icon: "/images/comman/logo/recycle.png",
    },
    {
      title: "Arctic-to-Desert Reliability",
      desc: (
        <span>
          <span className="font-bold">-30°C to 55°C operational range</span>{" "}
          with armored components
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_1.JPG",
      title: "ABP 100",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
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
      // img: "/images/comman/slider.png",
      title: "ABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abponesixty-newfour.jpeg",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 180",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp-180-5.JPG",
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
            <span className="font-bold">5° inclined cylinder</span> with
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
            <span className="font-bold">Low-noise (&lt;75dB) design</span> with
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
            Meta-aramid filter bags
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
            <span className="font-bold">Insulated tanks</span> (25–100 Ton) with
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
            <span className="font-bold">Vertical tanks</span> (5,000–30,000L)
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
            <span className="font-bold">Wear plates at loading points</span>{" "}
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
            <span className="font-bold">
              Butterfly valve-controlled filler dosing
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "SCADA Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">15&quot; touchscreen HMI</span> with
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
        <title>ABP 80 | 60–80 TPH | 1000kg Mixer | Atlas Technologies India</title>
        <meta name="description" content="ABP 80 delivers 60–80 TPH, 1000kg twin-shaft mixer, baghouse filter, PLC automation. RAP-ready. Starting price on request. Get specs and quote from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/rl1Xb4eqd74"
      videoThumbnail="/images/sabp/abp_80_4.JPG"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/1000kg-twin-shaft-mixer-60-80-tph"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp_80_4.JPG"
        videoUrl="https://www.youtube.com/embed/rl1Xb4eqd74"
        isYoutube={true}
        title={"See the ABP (80) Stationary Plant in Action"}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover the advanced engineering behind our ABP Series (80) Stationary Asphalt Batch Plants"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Engineered for Global Impact"
        subtitle="Powering infrastructure development in 40+ countries with rugged, high-efficiency machinery built to outperform."
        features={featuresGridData}
      />
      <Productfaq
        title={"Custom-Engineered Asphalt Plant Components"}
        para={
          "Systems designed for precision, tailored to the asphalt production needs of your project"
        }
        components={components}
        img = "/images/sabp/abp_80_4.JPG"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={"ABP (80) Stationary Asphalt Batch Plant"} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
