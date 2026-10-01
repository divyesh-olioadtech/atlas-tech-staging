import { authors } from "./blogAuthors";


export default function BlogAuthor({ author }) {


    const authorData = authors[author];


    if (!authorData) return null;



    return (

        <section className="w-full bg-[#F1F6F1] py-20 mt-20">

            <div className="w-full px-[5%]">


                <h2 className="text-center text-[36px] md:text-[42px] font-bold text-[#1A1D2D] mb-10">
                    Author’s Note
                </h2>



                <div className="max-w-[800px] mx-auto bg-white rounded-xl p-8 md:p-10 text-center">


                    <p className="max-w-[600px] mx-auto text-[#606370] leading-7 text-[16px] mb-8">

                        {authorData.description}

                    </p>



                    <div className="w-[60%] mx-auto h-px bg-gray-200 mb-6"></div>



                    <div className="flex justify-center items-center gap-4">


                        <img
                            src={authorData.image}
                            alt={authorData.name}
                            className="w-20 h-20 rounded-lg object-cover"
                        />



                        <div className="text-left">

                            <h3 className="text-lg font-bold text-[#1A1D2D]">

                                {authorData.name}

                            </h3>



                            <p className="text-[#606370] text-sm">

                                {authorData.designation}

                            </p>


                        </div>


                    </div>


                </div>


            </div>


        </section>

    );

}