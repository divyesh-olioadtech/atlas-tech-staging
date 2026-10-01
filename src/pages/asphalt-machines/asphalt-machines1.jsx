import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import Expolre_category from "../../../components/category/expolore_category";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";

import ContactForm from "../../../components/category/form";

export default function Category() {
  const category_banner_data = {
    title: "Asphalt Machinery",
    para: "From Bitumen Handling to Base Preparation – Trusted Across 40+ Countries",
    img: "/images/comman/bg3.jpeg",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "The Backbone of Every Civil & Road Project",
    para: (
      <span>
        Atlas technologies’ asphalt machinery ensures{" "}
        <b>perfect material application</b> and efficient site operations.
        Whether you’re sealing cracks with precision bitumen sprayers or
        producing stabilized base layers, our <b>ISO-certified</b> equipment
        delivers <b>≤2% operational variance</b> in extreme conditions. That
        makes us a trusted name in{" "}
        <b>road construction equipment manufacturers</b>
        list, in India and globally.
      </span>
    ),
    img: "/images/comman/intro.png",
  };

  const faqData2 = [
    {
      title:
        "1. What types of asphalt machinery does Atlas Technologies offer?",
      content: (
        <>
          Atlas Technologies provides a wide range of asphalt machinery,
          including bitumen decanters, bitumen sprayers, mini bitumen sprayers,
          and wet mix plants, designed for diverse road construction and
          maintenance needs.
        </>
      ),
    },
    {
      title:
        "2. Does Atlas Technologies provide global support for its asphalt machinery?",
      content: (
        <>
          Yes, Atlas Technologies offers 24/7 emergency support and has
          installations in 40+ countries, ensuring quick assistance and reliable
          after-sales service wherever you are.
        </>
      ),
    },
    {
      title:
        "3. What financing exists for machinery purchases in developing markets?",
      content: (
        <>
          We offer lease-to-own programs and local bank tie-ups with terms from
          2-5 years, including spare parts bundles.
        </>
      ),
    },
    {
      title:
        "4. What’s the typical lifespan of asphalt machinery with proper maintenance?",
      content: (
        <>
          Well-maintained Atlas equipment averages:
          <ul className="py-2 pl-5 list-disc list-inside">
            <li>
              <b>8-12 years</b> for bitumen sprayers
            </li>
            <li>
              <b>10-15 years</b> for wet mix plants
            </li>
          </ul>
          Key factors: <b>corrosion-resistant materials, annual overhauls,</b>{" "}
          and
          <b> genuine spare parts.</b>
        </>
      ),
    },
  ];

  const categories = ["Machines"];

  const data = {
    Machines: [
      {
        title: "Bitumen Decanter",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 4–25T batches</li>
              <li>
                Features: Auto-temperature control, drum/bag melting options
              </li>
              <li>"Eliminate manual handling risks with leak-proof designs"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Bitumen Sprayer",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Spray width: 3–6m adjustable</li>
              <li>Precision: ±2°C temperature control</li>
              <li>"Achieve uniform tack coats for highways to rural roads"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Mini Bitumen Sprayer",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacity: 2.5T</li>
              <li>Agility: 4-wheel maneuverability</li>
              <li>"Ideal for pothole repairs and narrow urban sites"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Wet Mix Plant",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Output: 100–300 TPH</li>
              <li>Moisture control: ±0.5% accuracy</li>
              <li>"Produce WMM that withstands monsoons and heavy traffic"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
    
    ],
  };

  const faqData1 = [
    {
      title: "Military-Grade Durability",
      content: (
        <span>
          The components of our equipment and machines, like{" "}
          <b>hardened spray nozzles</b> and <b>double-walled tanks,</b> can
          withstand abrasive materials and extreme temperatures.
        </span>
      ),
    },
    {
      title: "Versatility and Customization",
      content: (
        <span>
          From compact mini sprayers to high-capacity wet mix plants, our
          machinery can be <b>custom-designed</b> to meet the unique needs of
          each project.
        </span>
      ),
    },
    {
      title: "Global Parts Network",
      content: (
        <span>
          With <strong>12 regional hubs</strong> across the world, we ensure{" "}
          <strong>72-hour emergency shipping</strong>, quick assistance, and
          reliable machinery performance – ensuring continuous operation.
        </span>
      ),
    },
    {
      title: "Compliance with Eco Laws",
      content: (
        <span>
          Our machinery is designed to reduce environmental impact, featuring
          energy-efficient systems and sustainable practices like RAP
          integration and low-emission technologies.
        </span>
      ),
    },
    {
      title: "Proved in Action",
      content: (
        <span>
          With over <strong>2500+ successful installations</strong> all over the
          globe, and <strong>≤2% failure rates</strong> reported, we have earned
          the trust of contractors from almost every continent.
        </span>
      ),
    },
  ];

  const formcontent = {
    title: "Ready to Build? Let’s Talk!",
    description:
      "At Atlas Technologies, we’re more than equipment suppliers—we’re your partners in infrastructure success. Whether you’re planning a highway project or upgrading your asphalt production, our team of experts is here to help.",
  };
  return (
    <>
      <Category_Banner data={category_banner_data} />
      <Category_intro data={category_intro_data} />
      <Expolre_category data={data} active="Machines" categories={categories} />
      <FAQSection1
        faqData={faqData1}
        title={"Engineered for Real-World Demands"}
      />

      <ContactForm formcontent={formcontent} />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
