export default function BlogCTA({ cta }) {

    return (

        <section className="w-full bg-[#1A1D2D] rounded-xl py-16 px-[5%] mt-20">

            <div className="max-w-4xl mx-auto text-center">


                <h2 className="!text-white text-[32px] md:text-[42px] font-bold leading-tight mb-5">

                    {cta.title}

                </h2>



                <p className="!text-white/80 text-[16px] md:text-[18px] leading-7 mb-8">

                    {cta.description}

                </p>



                <a
                    href={cta.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-[#8FD254] text-[#121C17] border-2 border-[#8FD254] hover:bg-white transition-all duration-300"
                >

                    {cta.buttonText} →

                </a>


            </div>

        </section>

    );
}