import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
// import Blog from "../../../components/homepage/blog";
// import Certified from "../../../components/homepage/certified";
// import Clients from "../../../components/homepage/clients";
// import WorldMapComponent from "../../../components/homepage/mapview";
import ProductFilterComponent from "../../../components/products/filter";
import Head from "next/head";
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the key components of the Mini Bitumen Sprayer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The AI 3000 mini bitumen sprayer includes a galvanized and insulated bitumen tank, a high pressure diesel oil burner, a gear type bitumen pump with output between two hundred and three hundred liters per minute, a two horsepower single piston air compressor, and a six point five horsepower air cooled diesel engine.",
            },
        },
        {
            "@type": "Question",
            name: "How does the sprayer prevent bitumen cooling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The thermally insulated three ton tank is designed to handle different grades of bitumen while maintaining consistent temperature and viscosity during operation.",
            },
        },
        {
            "@type": "Question",
            name: "How long does the sprayer maintain bitumen temperature without reheating?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The tank is manufactured using five millimeter thick mild steel, insulated with forty millimeter glass wool and protected by a galvanized outer shell. This construction minimizes heat loss and helps maintain workable bitumen temperature for several hours depending on ambient conditions.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of burner and fuel system does the AI 3000 use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The AI 3000 uses a high pressure diesel fired oil burner with fuel consumption of approximately seven to eight liters per hour, providing fast and uniform heating of the bitumen tank.",
            },
        },
    ],
};

export default function Stationary_abp() {
    //<br className="hidden md:block" />
    const category_banner_data = {
        title: (
            <span>
                Mastic Asphalt Cookers  <br className="hidden md:block" />
                [6 CUM – 8 CUM]
            </span>
        ),
        para: "Engineered Mastic Asphalt Systems for High Performance Road & Infrastructure Construction",
        img: "/images/mastic/cookerfive.webp",
        scrollTarget: "product-list",
    };
    const products = [
        {
            name: "AMC 600 / AMC 800",
            minCapacity: 3,
            maxCapacity: 3,
            tags: " 6 CUM & 8 CUM | Heating: Diesel/LPG Burner | Best For: Road surfacing, bridge waterproofing, airports & heavy-duty decks",
            mixerSize:
                "Spray Width: 2.4m–4.5m (customizable to 6m) | Engine: 25 HP (Kirloskar/Eicher) | Burner: 43,000 cal (main) + 26,000 cal (hand torch)",
            url: "/mastik-cooker",
            img: "/images/mastic/cookerfive.webp",
        },
    ];

    const category_intro_data = {
        subtitle: "Overview",
        title: "Engineered Mastic Asphalt Systems for High Performance Construction",
        para: (
            <span>
                The Atlas Mastic Asphalt Cookers (Model AMC 600 and AMC 800) are purpose-built units designed for efficient transportation, heating, and application of mastic asphalt from the production plant to the worksite. Featuring direct-heating technology and a hydraulically driven agitator, they maintain accurate mix temperatures up to 300C while ensuring continuous material homogenization. Available in 6 CUM and 8 CUM capacities with flexible trailer- or skid-mounted options, they deliver durable, seamless, and waterproof surfaces for roads, bridges, flyovers, and airports.
            </span>
        ),
        img: "/images/mastic/cookerthree.webp",
        bg: true,
    };
    const faqData = [
        {
            title: "1.  What are the key components of the Mastic Asphalt Cooker?",
            content: (
                <span>
                    The Mastic Asphalt Cooker (AMC Series) includes a heavy-duty insulated steel body; a high-efficiency diesel/LPG burner; a hydraulically driven agitator coupled with a dedicated slave engine and gearbox; a hydraulic tipping/tilting discharge cylinder; and a fully automatic control panel with an HMI display and thermostatic controls.

                </span>
            ),
        },
        {
            title: "2. How does the cooker prevent asphalt cooling and settlement?",
            content: (
                <span>

                    Thermal loss is prevented using stainless-steel insulation cladding and heat-resistant protective covers. To prevent material settlement, the unit utilizes a hydraulically driven agitator with stepless direct drive and reverse rotation to keep the mastic asphalt continuously mixed and uniform.
                </span>
            ),
        },
        {
            title:
                "3. What temperature range does the cooker maintain during transit and operation?",
            content: (
                <span>
                    The system features precise thermostatic controls with digital/analogue indicators capable of heating and maintaining mix temperatures up to 300C.
                </span>
            ),
        },
        {
            title: "4.  What kind of burner and fuel system does the AMC series use?",
            content: (
                <span>
                    The cooker utilizes high-efficiency direct heating technology powered by a Diesel Burner or LPG Burner system, designed for low fuel consumption and low exhaust emissions.
                </span>
            ),
        },
    ];
    const faqData1 = [
        {
            title: "Advanced Agitation & Drive System",
            content: (
                <ul className="pl-4 space-y-1 list-none">
                    <li>Hydraulically driven agitator coupled with a heavy-duty gearbox and dedicated slave engine.
                    </li>
                    <li>Stepless direct drive with reverse rotation ensures a homogeneous mix and prevents material settlement.</li>
                </ul>
            ),
        },
        {
            title: "Precision Thermal Control",
            content: (
                <ul className="pl-4 space-y-1 list-none">
                    <li>Integrated thermostatic controls with digital and analogue indicators maintain temperatures up to 300C.</li>
                    <li>
                        High-efficiency direct heating diesel or LPG burners optimize fuel usage while preserving asphalt quality.
                    </li>
                </ul>
            ),
        },
        {
            title: "Effortless Hydraulic Discharge",
            content: (
                <ul className="pl-4 space-y-1 list-none">
                    <li>Heavy-duty hydraulic cylinder tipping mechanism enables smooth, controlled material discharge directly at the site.
                    </li>
                    <li>Heat-resistant covers and insulated stainless-steel body ensure safe and rapid pouring.
                    </li>
                </ul>
            ),
        },
        {
            title: "Flexible Mounting & Robust Build",
            content: (
                <ul className="pl-4 space-y-1 list-none">
                    <li>Available in both trailer-mounted and skid-mounted configurations for effortless transport.</li>
                    <li>
                        Built with a heavy-duty steel body designed for continuous, long-term operation under harsh conditions.
                    </li>
                </ul>
            ),
        },
    ];

    const productLinks = [
        {
            name: "Mastic Asphalt Silos",
            url: "#",
        },
        {
            name: "Mobile Asphalt Batch Plants (MABP)",
            url: "mobile-asphalt-batching-plant",
        },
        {
            name: "Counter Flow Asphalt Plant",
            url: "counter-flow-asphalt-plant",
        },
        {
            name: "Asphalt Drum Mix Plant",
            url: "asphalt-drum-mix-plant",
        },
        {
            name: "Mobile Asphalt Drum Mix Plant",
            url: "mobile-asphalt-drum-mix-plant",
        },
    ];
    const formcontent = {
        title: "Ready to Build? Let’s Talk!",
        description:
            "Fill out the form to share your project needs and discuss the best option for it.",
    };
    return (
        <>
            <Head>
                <title>Mini Bitumen Sprayers - 3 Ton | Manufacturer in India | Atlas Technologies</title>
                <meta name="description" content="Towable, no truck needed — Atlas mini bitumen sprayer has 3-ton insulated tank, hand-spray nozzle for pothole patching and narrow routes. Get specs and price." />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            </Head>
            <Category_Banner data={category_banner_data} />
            <ProductFilterComponent
                kgoff={false}
                unit="TONS"
                productLinks={productLinks}
                products={products}
            />
            <Category_intro data={category_intro_data} />
            <FAQSection1
                faqData={faqData1}
                minititle={"BENEFITS"}
                title={"What Sets Atlas Mastic Asphalt Cooker Apart?"}
                img="/images/mastic/cookerone.webp"
            />

            <ContactForm formcontent={formcontent} />
            <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
        </>
    );
}
