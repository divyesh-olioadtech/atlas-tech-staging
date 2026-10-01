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
import ProductSchema from "../../../components/schema/ProductSchema";
export default function ABP80() {
    const product = {
        title: "AMC 600 / AMC 800 Mastic Asphalt Cooker",
        subtitle: "VOLUME: 6 CUM & 8 CUM | TEMP RANGE: UP TO 300°C | MOUNTING: TRAILER / SKID",
        description: [
            "The Atlas Mastic Asphalt Cooker (AMC Series) is a purpose-built unit engineered for the efficient transportation, heating, and application of mastic asphalt from production plants to worksites. Featuring an advanced direct-heating burner and heavy-duty hydraulic agitator, it delivers precise temperature control and uniform mixing for high-performance waterproofing and road construction.",
        ],
        features: ["Precise Heating ", "Hydraulic Agitator ", "High Efficiency "],
        images: [

            "/images/mastic/cookerfive.webp",
            "/images/mastic/cookerone.webp",
            "/images/mastic/cookertwo.webp",
            "/images/mastic/cookerthree.webp",
            "/images/mastic/cookerfour.webp",
            "/images/mastic/cookersix.webp",
          
        ],
    };

    const faqData = [
        {
            title: "1. What is the capacity of the Mini Bitumen Sprayer?",
            content: (
                <>
                    <p>
                        It has a 2.5 T (≈ 3000 L) tank with thermal insulation to maintain
                        bitumen temperature throughout the day.
                    </p>
                </>
            ),
        },
        {
            title: "2. Can it be towed by a standard vehicle?",
            content: (
                <>
                    <p>
                        Yes. The unit is mounted on a towable chassis and can be transported
                        by a light commercial vehicle or tractor.
                    </p>
                </>
            ),
        },
        {
            title:
                "3. How long does it retain bitumen temperature without reheating?",
            content: (
                <>
                    <p>
                        The 40 mm glass-wool insulation keeps bitumen at workable
                        temperature for many hours, depending on ambient conditions.
                    </p>
                </>
            ),
        },
        {
            title: "4. Is cleaning complicated?",
            content: (
                <>
                    <p>
                        No. The system is flushed with air and diesel at day’s end to clear
                        nozzles and pipelines, preventing clogs and ensuring long service
                        life.
                    </p>
                </>
            ),
        },
    ];

    const featureData = [
        {
            title: "Precise Temperature Control",
            desc: (
                <span>
                    Digital and analogue temperature indicators with thermostatic controls accurately maintain required mix temperatures up to 300C.
                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-1.jpg",
        },
        {
            title: "Hydraulically Driven Agitator",
            desc: (
                <span>
                    Continuous mixing via a heavy-duty hydraulic gearbox prevents material settlement and maintains a uniform mastic asphalt mixture
                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-2.jpg",
        },
        {
            title: "Efficiency Heating System",
            desc: (
                <span>
                    Advanced direct heating using diesel or LPG burners delivers consistent and uniform heat distribution throughout the material.
                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-3.jpg",
        },
        {
            title: "Smooth Hydraulic Tilting & Discharge",
            desc: (
                <span>
                    Heavy-duty hydraulic tipping cylinder enables controlled, easy, and efficient material discharge directly at the worksite.

                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-4.jpg",
        },
        {
            title: "Flexible Mounting Options",
            desc: (
                <span>
                    Available in trailer-mounted or skid-mounted configurations for easy transportation and relocation between sites.

                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-4.jpg",
        },
        {
            title: "Advanced Safety & Control Panel",
            desc: (
                <span>
                    Equipped with a fully automatic HMI display, slave engine, stainless-steel insulation, and heat-resistant protective covers.


                </span>
            ),
            image: "/images/bitumen-sprayer/ai-3000-4.jpg",
        },
    ];

    const featuresGridData = [
        {
            title: "Consistent & Controlled Heating",
            desc: (
                <span>
                    Advanced direct heating technology paired with digital/analogue thermostatic controls maintains exact mix temperatures up to 300C without overheating.

                </span>
            ),
            icon: "/images/comman/logo/rapid.png", // replace with relevant icon
        },
        {
            title: "Homogeneous Asphalt Mixture",
            desc: (
                <span>
                    Hydraulically driven heavy-duty agitator with stepless direct drive and reverse rotation ensures continuous mixing and prevents material settlement.

                </span>
            ),
            icon: "/images/comman/logo/reliable.png",
        },
        {
            title: "Simple & User-Friendly Operation",
            desc: (
                <span>
                    Designed with a fully automatic control panel featuring an HMI display and hydraulic tilting for smooth, effortless material discharge at the worksite.
                </span>
            ),
            icon: "/images/comman/logo/eco.png",
        },
        {
            title: "Durable & Heavy-Duty Construction",
            desc: (
                <span>
                    Built with a reinforced steel body, stainless-steel insulation cladding, and heat-resistant covers to withstand continuous operation in tough site conditions.

                </span>
            ),
            icon: "/images/comman/logo/custom.png",
        },
        {
            title: "Tailored to Project Needs",
            desc: (
                <span>
                    Available in 6 CUM and 8 CUM capacities with flexible trailer-mounted or skid-mounted configurations customized to your transport requirements.
                </span>
            ),
            icon: "/images/comman/logo/globe.png",
        },
    ];

    // const products = [
    //     //     {
    //     //       img: "/images/bitumen-sprayer/ae-4000-1.jpeg",
    //     //       title: "Bitumen Sprayer AE-4000",
    //     //       desc: "4 Ton Capacity",
    //     //       url: "/bitumen-sprayer/ae-4000",
    //     //     },
    //     {
    //         img: "/images/bitumen-sprayer/ae-6000-1.jpeg",
    //         title: "Bitumen Sprayer AE-6000",
    //         desc: "6 Ton Capacity",
    //         url: "/bitumen-sprayer/ae-6000",
    //     },
    //     {
    //         img: "/images/bitumen-sprayer/ae-8000-1.jpeg",
    //         title: "Bitumen Sprayer AE-8000",
    //         desc: "8 Ton Capacity",
    //         url: "/bitumen-sprayer/ae-8000",
    //     },
    //     {
    //         img: "/images/bitumen-sprayer/ae-10000-1.jpeg",
    //         title: "Bitumen Sprayer AE-10000",
    //         desc: "10 Ton Capacity",
    //         url: "/bitumen-sprayer/ae-10000",
    //     },
    //     {
    //         img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
    //         title: "Bitumen Sprayer AE-12000",
    //         desc: "12 Ton Capacity",
    //         url: "/bitumen-sprayer/ae-12000",
    //     },
    //     {
    //         img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
    //         title: "Bitumen Sprayer (With Hydraulic Hopper)",
    //         desc: "6 T / 8 T / 10 T Options",
    //         url: "/bitumen-sprayer/ae-12000",
    //     },
    // ];

    const components = [
        {
            title: "Cooker Body & Insulation",
            desc: (
                <ul>
                    <li>
                        • Heavy-duty steel body construction built to withstand continuous high-temperature operations.
                    </li>
                    <li>
                        • Stainless-steel insulation cladding with heat-resistant protective covers to maintain mix temperature and reduce heat loss.
                    </li>
                </ul>
            ),
        },
        {
            title: "Hydraulic Agitator Drive System",
            desc: (
                <ul>
                    <li>• Hydraulically driven agitator coupled with a heavy-duty gearbox, hydraulic pump, and motor.</li>
                    <li>
                        • Powered by a dedicated slave engine featuring stepless direct drive and reverse rotation for homogeneous material mixing.
                    </li>
                </ul>
            ),
        },
        {
            title: "High-Efficiency Burner System",
            desc: (
                <ul>
                    <li>
                        • Equipped with advanced direct heating Diesel Burner or LPG Burner options.
                    </li>
                    <li>• Capable of heating and maintaining mastic asphalt mix temperatures up to 300C.</li>
                </ul>
            ),
        },
        {
            title: "Hydraulic Tilting & Discharge Mechanism",
            desc: (
                <ul>
                    <li>
                        • Heavy-duty hydraulic tipping cylinder for smooth, controlled material discharge
                    </li>
                    <li>
                        • Enables quick and hassle-free pouring directly at the road or bridge worksite.

                    </li>
                </ul>
            ),
        },
        {
            title: "Automatic Control Panel & HMI",
            desc: (
                <ul>
                    <li>
                        • Fully automatic control panel equipped with an intuitive HMI display.

                    </li>
                    <li>
                        • Features digital/analogue temperature indicators and thermostatic controls for precise heat management
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <>
            <Head>
                <title>AI-3000 | 3 Ton Mini Bitumen Sprayer | Towable | Atlas India</title>
                <meta name="description" content="AI-3000 — 3 ton towable mini sprayer, no truck needed, 6.5 HP diesel, hand-spray nozzle, 200–300 L/min pump. For pothole patching and narrow routes. Get price." />
            </Head>
            <ProductSchema
                product={product}
                faqData={faqData}
                videoUrl="https://www.youtube.com/embed/Cwd80QFRSzI"
                videoThumbnail="/images/admp/mdm-35-1.jpeg"
                pageUrl="/mini-bitumen-sprayer/ai-3000"
            />
            <ProductOverview {...product} />
            <Video
                thumbnail="/images/mastic/cookersix.webp"
                videoUrl= "#"
                title={
                    "AI-3000: Compact, Efficient & Built for Small-Scale Road Projects"
                }
                isYoutube={true}
            />
            <FeatureSlider
                sectionTitle="Key Features & Benefits"
                sectionDesc="Engineered for Thermal Efficiency and Seamless Mixing"
                features={featureData}
            />
            ;
            <FeatureGrid
                title="Why Choose Atlas Mastic Cooker"
                subtitle=" Engineered for high-performance mastic asphalt transportation, precise heating, and long-term site reliability across demanding infrastructure projects.
"
                features={featuresGridData}
            />
            <Productfaq
                title={"Components Breakdown"}
                para={
                    " The Atlas Mastic Asphalt Cooker incorporates heavy-duty systems engineered for consistent heating, thorough agitation, and smooth site discharge."
                }
                components={components}
                img="/images/mastic/cookerfive.webp"
            />
            {/* <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      /> */}
            <ContactForm page={product.title} />
            <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
        </>
    );
}
