export default function BlogSidebar({ toc = [], summary = "" }) {
    return (
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* Blog Summary Card */}
            <div className="bg-[#F1F4F2] rounded-lg p-3.5">

                <h3 className="text-lg font-bold text-[#1A1D2D] mb-3">
                    Blog Summary
                </h3>

               <p className="text-[13px] leading-5 text-[#606370]">
                    {summary}
                </p>

            </div>


            {/* Table of Contents Card */}
            <div className="bg-[#F1F4F2] rounded-lg p-3.5">

                <h3 className="text-lg font-bold text-[#1A1D2D] mb-3">
                    Table of Contents
                </h3>


                <div className="max-h-[250px] overflow-y-auto pr-2">

                    <ol className="space-y-1.5 text-[13px] leading-5 text-[#606370]">

                        {toc.map((item, index) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-[#8FD254] transition"
                                >
                                    {index + 1}. {item.title}
                                </a>
                            </li>
                        ))}

                    </ol>

                </div>

            </div>

        </aside>
    );
}