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
    title: "Efficient Tools for Civil & Road Projects",
    para: (
      <span>
        Atlas delivers robust and efficient machinery, ranging from decanters to
        stabilizing mix plants, crafted for durability and simplicity. Whether
        melting bitumen drums or preparing wet base layers, our equipment is
        engineered for reliability across diverse terrains.
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
          including <b>bitumen decanters</b>, <b>bitumen sprayers</b>,{" "}
          <b>mini bitumen sprayers</b>, and <b>wet mix plants</b>, designed for
          diverse road construction and maintenance needs.
        </>
      ),
    },
    {
      title:
        "2. Does Atlas Technologies provide global support for its asphalt machinery?",
      content: (
        <>
          Yes, Atlas Technologies offers <b>24/7 emergency support</b> and has
          installations in <b>40+ countries</b>, ensuring quick assistance and
          reliable after-sales service wherever you are.
        </>
      ),
    },
    {
      title:
        "3. What financing exists for machinery purchases in developing markets?",
      content: (
        <>
          We offer <b>lease-to-own programs</b> and <b>local bank tie-ups</b>{" "}
          with terms from <b>2–5 years</b>, including <b>spare parts bundles</b>
          .
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
              <b>8–12 years</b> for bitumen sprayers
            </li>
            <li>
              <b>10–15 years</b> for wet mix plants
            </li>
          </ul>
          Key factors: <b>corrosion-resistant materials</b>,{" "}
          <b>annual overhauls</b>, and <b>genuine spare parts</b>.
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
            <ul className="space-y-2 list-disc list-inside ">
              <li>4–10 TPH options with thermic oil heater</li>
              <li>Diesel/LDO/gas compatible</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "/bitumen-decanter",
      },
      {
        title: "Bitumen Sprayer",
        description: (
          <span>
            <ul className="space-y-2 list-disc list-inside ">
              <li>4–12 Ton capacity</li>
              <li>Insulated tanks, burners, up to 6 m spray bar</li>
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
            <ul className="space-y-2 list-disc list-inside ">
              <li>Compact ~3 Ton version</li>
              <li>Optimized for tight urban areas</li>
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
            <ul className="space-y-2 list-disc list-inside ">
              <li>100 TPH, 160 TPH, 200 TPH, plus optional 250/300 TPH</li>
              <li>Includes pug mill and optional cement silo</li>
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
      title: "Built for Tough Conditions",
      content: (
        <span>
          Heavy-duty wear parts like <b>hardened elbows</b> and a{" "}
          <b>robust structural design</b>.
        </span>
      ),
    },
    {
      title: "Customizable Across Project Scales",
      content: (
        <span>
          From <b>compact sprayers</b> to <b>high-throughput mix plants</b>,
          Atlas scales to your project needs.
        </span>
      ),
    },
    {
      title: "Worldwide Support Network",
      content: (
        <span>
          Global presence with <b>region-specific support</b>; exact emergency
          assistance coverage to be confirmed for your location.
        </span>
      ),
    },
    {
      title: "Compliance with Eco Laws",
      content: (
        <span>
          Features like <b>bitumen tank insulation</b> promote fuel efficiency
          and lower environmental impact.
        </span>
      ),
    },
    {
      title: "Proved in the Field",
      content: (
        <span>
          With <b>hundreds of successful installations</b> all over the globe,
          we have earned the trust of contractors from almost every continent.
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
