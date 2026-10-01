"use client";

export default function BlogSidebar({ summary, toc }) {

    return (

        <aside className="space-y-6">


            {/* Summary */}

            <div className="bg-[#F1F6F1] rounded-xl p-6">

                <h3 className="text-[22px] font-bold text-[#1A1D2D] mb-5">
                    Blog Summary
                </h3>


                <p className="text-[#606370] leading-7 text-[15px]">
                    {summary}
                </p>


            </div>



            {/* TOC */}

            <div className="bg-[#F1F6F1] rounded-xl p-6 sticky top-24 self-start">


                <h3 className="text-[22px] font-bold text-[#1A1D2D] mb-5">
                    Table of Contents
                </h3>

                <p>
                    TOC Count: {toc?.length}
                </p>


                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">

                    {toc?.map((item, index) => (

                        <a
                            key={index}
                            href={`#${item.id}`}
                            className="block text-[#606370] text-[15px] hover:text-[#1A1D2D]"
                        >

                            {index + 1}. {item.title}

                        </a>

                    ))}


                </div>


            </div>


        </aside>

    );
}