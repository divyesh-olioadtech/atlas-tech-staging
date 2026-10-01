import Image from "next/image";
export default function AuthorNote() {
    return (
        <section className="w-full bg-[#F1F6F1] py-20 mt-20">

            <div className="w-full px-[5%]">

                {/* Heading */}
                <h2 className="text-center text-[36px] md:text-[42px] font-bold text-[#1A1D2D] mb-10">
                    Author’s Note
                </h2>


                {/* Author Card */}
                <div className="max-w-[800px] mx-auto bg-white rounded-xl p-8 md:p-10 text-center">


                    {/* Description */}
                    <p className="max-w-[600px] mx-auto text-[#606370] leading-7 text-[16px] mb-8">
                        Atlas Technologies Pvt. Ltd. is a road construction equipment manufacturer based in Mehsana, Gujarat, India. Founded in 1986, the company designs and manufactures asphalt batch mix plants, drum mix plants, counter flow plants, wet mix macadam plants, concrete batching plants and road machinery for highway contractors, infrastructure developers and export buyers worldwide.
                        With over 2,500 installations across 50+ countries and 38 years of manufacturing experience, Atlas Technologies serves projects ranging from national highway construction in India to remote island deployments and large-scale export contracts across Africa, Southeast Asia, the Middle East, East Europe and Oceania Countries.
                        www.atlastechnologiesindia.com


                    </p>


                    {/* Divider */}
                    <div className="w-[60%] mx-auto h-px bg-gray-200 mb-6"></div>


                    {/* Author Info */}
                    <div className="flex justify-center items-center gap-4">


                        {/* Image */}
                        {/* Image */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden">

                            <Image
                                src="/images/blogs/nilesh-patel-author.webp"
                                alt="Nilesh Patel"
                                width={120}
                                height={120}
                                className="w-full h-full object-cover"
                            />

                        </div>


                        <div className="text-left">

                            <h3 className="text-lg font-bold text-[#1A1D2D]">
                                Mr. Nilesh Patel
                            </h3>


                            <p className="text-[#606370] text-sm">
                                (Managing Director)

                            </p>

                        </div>


                    </div>


                </div>


            </div>

        </section>
    );
}