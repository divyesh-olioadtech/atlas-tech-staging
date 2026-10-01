"use client";

import { useState } from "react";


export default function BlogFAQ({ faqData }) {

    const [active, setActive] = useState(null);


    return (

        <section
            id="faq"
            className="w-full bg-[#F1F6F1] py-20 mt-20"
        >

            <div className="max-w-screen-2xl mx-auto px-[5%]">


                <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10">


                    {/* Heading */}

                    <div>

                        <h2 className="text-[36px] md:text-[48px] font-bold leading-tight text-[#1A1D2D]">
                            Frequently asked
                            <br />
                            questions.
                        </h2>

                    </div>



                    {/* FAQ */}

                    <div>

                        {faqData?.map((faq,index)=>(


                            <div
                                key={index}
                                className="border-b border-[#8C949B]"
                            >


                                <button
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center py-6 text-left"
                                >

                                    <span className="font-semibold text-[#1A1D2D]">

                                        {index + 1}. {faq.title}

                                    </span>


                                    <span className="text-xl">

                                        {active === index ? "×" : "+"}

                                    </span>


                                </button>



                                {active === index && (

                                    <p className="pb-6 text-[#606370] leading-7">

                                        {faq.content}

                                    </p>

                                )}


                            </div>


                        ))}


                    </div>


                </div>


            </div>


        </section>

    );
}